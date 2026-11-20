#!/usr/bin/env node
/* ------------------------------------------------------------------ */
/* audit-network.mjs — final QA gate across the five Charcoal Hub     */
/* sites. Reads each repo's built dist/ and checks:                   */
/*   - title ≤ 60, description ≤ 160, exactly one H1                  */
/*   - canonical present and host-correct                             */
/*   - sitemap matches the indexable page set exactly                 */
/*   - duplicate titles / descriptions inside a site                  */
/*   - Offer/AggregateOffer price or availability in JSON-LD          */
/*   - every internal and cross-site link resolves in the target dist */
/*                                                                    */
/* Usage: node scripts/audit-network.mjs [--verbose]                   */
/* Exit code 1 when any check fails.                                  */
/* ------------------------------------------------------------------ */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const ROOT = '/root/.openclaw/workspace/repos';
const SITES = [
  { key: 'main', dir: 'guotan', origin: 'https://chinacharcoalhub.com' },
  { key: 'data', dir: 'data.guotan', origin: 'https://data.chinacharcoalhub.com' },
  { key: 'manufacturer', dir: 'manufacturer.guotan', origin: 'https://manufacturer.chinacharcoalhub.com' },
  { key: 'testing', dir: 'testing.guotan', origin: 'https://testing.chinacharcoalhub.com' },
  { key: 'knowledge', dir: 'Knowledge.guotan', origin: 'https://knowledge.chinacharcoalhub.com' },
];

const VERBOSE = process.argv.includes('--verbose');

function walkHtml(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walkHtml(p, out);
    else if (extname(p) === '.html') out.push(p);
  }
  return out;
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

function first(html, re) {
  const m = html.match(re);
  return m ? decode(m[1].trim()) : null;
}

const relPath = (dist, file) => relative(dist, file).replace(/\\/g, '/');

function urlPathOf(rel) {
  if (rel === '404.html') return '/404.html';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  if (rel === 'index.html') return '/';
  return '/' + rel;
}

function distFileFor(dist, pathname) {
  let p = decodeURIComponent(pathname);
  if (p.endsWith('/')) p += 'index.html';
  const candidates = [join(dist, p), join(dist, p, 'index.html'), join(dist, p + '.html')];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile()) ?? null;
}

function jsonLdBlocks(html) {
  const out = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      out.push(JSON.parse(m[1]));
    } catch {
      out.push({ __parseError: true, raw: m[1].slice(0, 120) });
    }
  }
  return out;
}

function flattenTypes(node, acc = []) {
  if (Array.isArray(node)) {
    for (const n of node) flattenTypes(n, acc);
    return acc;
  }
  if (node && typeof node === 'object') {
    if (typeof node['@type'] === 'string') acc.push(node['@type']);
    if (Array.isArray(node['@type'])) acc.push(...node['@type']);
    for (const [k, v] of Object.entries(node)) {
      if (k === '@type') continue;
      if (v && typeof v === 'object') flattenTypes(v, acc);
    }
  }
  return acc;
}

const failures = [];
const warnings = [];
const siteStats = [];

/* Build a global origin → dist map for cross-site link checking. */
const originDist = new Map(SITES.map((s) => [s.origin, join(ROOT, s.dir, 'dist')]));

for (const site of SITES) {
  const dist = join(ROOT, site.dir, 'dist');
  if (!existsSync(dist)) {
    failures.push(`${site.key}: dist/ missing — build ${site.dir} first`);
    continue;
  }
  const files = walkHtml(dist);
  const pages = [];
  const titleMap = new Map();
  const descMap = new Map();
  let linkCount = 0;

  const sitemapFile = join(dist, 'sitemap-0.xml');
  const sitemapUrls = existsSync(sitemapFile)
    ? [...readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]))
    : [];

  for (const file of files) {
    const rel = relPath(dist, file);
    const html = readFileSync(file, 'utf8');
    const pathname = urlPathOf(rel);
    const url = site.origin + pathname;
    const is404 = rel === '404.html';
    const title = first(html, /<title>([\s\S]*?)<\/title>/i);
    const desc = first(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    const robots = first(html, /<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
    const canonical = first(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
    const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
    const ld = jsonLdBlocks(html);
    const types = [...new Set(ld.flatMap((b) => flattenTypes(b)))];
    const noindex = (robots || '').includes('noindex');

    const page = { rel, pathname, url, title, desc, canonical, h1Count, noindex, types, links: [] };
    pages.push(page);

    if (!is404) {
      if (!title) failures.push(`${site.key}${pathname}: missing <title>`);
      else if (title.length > 60) failures.push(`${site.key}${pathname}: title ${title.length} chars > 60 — "${title}"`);
      if (!desc) failures.push(`${site.key}${pathname}: missing meta description`);
      else if (desc.length > 160) failures.push(`${site.key}${pathname}: description ${desc.length} chars > 160`);
      if (h1Count !== 1) failures.push(`${site.key}${pathname}: ${h1Count} H1 elements`);
      if (!canonical) failures.push(`${site.key}${pathname}: missing canonical`);
      else {
        const expected = site.origin + pathname;
        if (canonical !== expected) failures.push(`${site.key}${pathname}: canonical ${canonical} != ${expected}`);
      }
      if (noindex) failures.push(`${site.key}${pathname}: indexable page carries noindex`);
      if (title) {
        if (titleMap.has(title)) failures.push(`${site.key}: duplicate title "${title}" (${titleMap.get(title)} + ${pathname})`);
        else titleMap.set(title, pathname);
      }
      if (desc) {
        if (descMap.has(desc)) failures.push(`${site.key}: duplicate description (${descMap.get(desc)} + ${pathname})`);
        else descMap.set(desc, pathname);
      }
    }

    if (ld.some((b) => b.__parseError)) failures.push(`${site.key}${pathname}: JSON-LD parse error`);

    const offerNodes = [];
    const collect = (n) => {
      if (Array.isArray(n)) return n.forEach(collect);
      if (!n || typeof n !== 'object') return;
      if (n['@type'] === 'Offer' || n['@type'] === 'AggregateOffer') offerNodes.push(n);
      for (const v of Object.values(n)) if (v && typeof v === 'object') collect(v);
    };
    ld.forEach(collect);
    for (const o of offerNodes) {
      for (const k of ['price', 'priceCurrency', 'lowPrice', 'highPrice', 'availability', 'priceSpecification']) {
        if (o[k] !== undefined) failures.push(`${site.key}${pathname}: Offer carries ${k}`);
      }
    }

    /* Scan the body only: <link rel="canonical"> and preload hints in
       <head> are not navigation links and must not count as such. */
    const body = html.slice(html.indexOf('</head>') + 7);
    const hrefRe = /(?:href|src)=["']([^"']+)["']/g;
    let m;
    while ((m = hrefRe.exec(body)) !== null) {
      const raw = m[1].trim();
      if (!raw || raw.startsWith('#') || /^(mailto|tel|data|javascript):/i.test(raw)) continue;
      let abs;
      try {
        abs = new URL(raw, url);
      } catch {
        failures.push(`${site.key}${pathname}: unparseable link ${raw}`);
        continue;
      }
      if (!/^https?:$/.test(abs.protocol)) continue;
      const targetDist = originDist.get(abs.origin);
      if (!targetDist) continue; // external site, not part of the network
      linkCount++;
      page.links.push(abs.pathname);
      if (!distFileFor(targetDist, abs.pathname)) {
        const label = abs.origin === site.origin ? 'internal' : 'cross-site';
        failures.push(`${site.key}${pathname}: broken ${label} link ${abs.href}`);
      }
    }
  }

  /* Sitemap == indexable pages exactly. */
  const indexable = pages.filter((p) => !p.noindex && p.rel !== '404.html').map((p) => site.origin + p.pathname);
  const sitemapSet = new Set(sitemapUrls);
  for (const u of indexable) if (!sitemapSet.has(u)) failures.push(`${site.key}: ${u} missing from sitemap`);
  for (const u of sitemapUrls) if (!indexable.includes(u)) failures.push(`${site.key}: sitemap lists non-indexable ${u}`);
  if (sitemapUrls.length !== new Set(sitemapUrls).size) failures.push(`${site.key}: duplicate URLs in sitemap`);

  siteStats.push({
    key: site.key,
    pages: pages.length,
    indexable: indexable.length,
    sitemap: sitemapUrls.length,
    links: linkCount,
    titles: pages.filter((p) => p.title).map((p) => p.title.length),
    descs: pages.filter((p) => p.desc).map((p) => p.desc.length),
    pagesList: pages,
  });
}

/* ---- Report ---- */
console.log('Charcoal Hub network QA\n');
for (const s of siteStats) {
  const maxT = Math.max(...s.titles);
  const maxD = Math.max(...s.descs);
  console.log(
    `${s.key.padEnd(13)} pages ${String(s.pages).padStart(2)} | indexable ${String(s.indexable).padStart(2)} | sitemap ${String(s.sitemap).padStart(2)} | links ${String(s.links).padStart(4)} | max title ${maxT} | max desc ${maxD}`
  );
}

if (VERBOSE) {
  console.log('\nIndexable pages per site:');
  for (const s of siteStats) {
    console.log(`\n[${s.key}]`);
    for (const p of s.pagesList) {
      if (p.rel === '404.html') continue;
      console.log(`  ${p.pathname.padEnd(56)} t=${String(p.title?.length ?? 0).padStart(2)} d=${String(p.desc?.length ?? 0).padStart(3)} h1=${p.h1Count} ld=${p.types.join(',')}`);
    }
  }
}

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ! ${w}`);
}

if (failures.length) {
  console.log(`\n${failures.length} failure(s):`);
  for (const f of failures) console.log(`  ✗ ${f}`);
  process.exit(1);
}
console.log('\nAll checks passed. ✔');
