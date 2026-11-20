# Charcoal Hub — Network QA Pass

Date: 2026-11-20  
Work unit: N12 — Trust + QA (About/contact/compliance, schema, metadata, sitemap, final audit)  
Scope: `guotan`, `data.guotan`, `manufacturer.guotan`, `testing.guotan`, `Knowledge.guotan`

## 1. Result

| Site | Built pages | Indexable | In sitemap | Internal links | Max title | Max description | Failures |
|---|---:|---:|---:|---:|---:|---:|---:|
| main | 26 | 25 | 25 | 1,091 | 55 | 158 | 0 |
| data | 31 | 30 | 30 | 1,221 | 59 | 158 | 0 |
| manufacturer | 15 | 14 | 14 | 216 | 54 | 160 | 0 |
| testing | 18 | 17 | 17 | 377 | 57 | 159 | 0 |
| knowledge | 33 | 32 | 32 | 882 | 52 | 160 | 0 |
| **Total** | **123** | **118** | **118** | **3,787** | — | — | **0** |

The 404 page is built but excluded from every indexable count and from each sitemap.
`npm run audit:network` checks the five built sites in one pass and exits non-zero on any
failure. `npm run check:links` runs per repo.

## 2. What the audit checks

For every built HTML page:

- `<title>` present and ≤60 characters (measured on the rendered title, including any site suffix).
- Meta description present and ≤160 characters.
- Exactly one `<h1>`.
- Canonical present, absolute, and equal to origin + built path.
- No `noindex` on an indexable page.
- No duplicate title or description inside the same site.
- Sitemap equals the indexable page set exactly — nothing missing, nothing extra, no duplicates.
- JSON-LD parses; no `Offer` or `AggregateOffer` carrying `price`, `priceCurrency`, `lowPrice`,
  `highPrice`, `availability` or `priceSpecification`.
- Every body `href`/`src` that points at one of the five network origins resolves to a file in the
  target site's `dist`. Cross-site links are checked against the target build, not assumed.

`<link rel="canonical">` and other head hints are excluded from link counting so a canonical URL is
never mistaken for navigation.

## 3. Defects found and fixed

| # | Site | Defect | Fix |
|---|---|---|---|
| 1 | knowledge | `/knowledge/how-long-coconut-charcoal-burns/` linked twice to `data…/specifications/burn-time/`, which does not exist (correct slug is `burning-time`). Two broken cross-site links on a live article. | Slug corrected in the article body. |
| 2 | knowledge | 18 article-body CTAs still pointed at `chinacharcoalhub.com/contact/`, although N11 reported the RFQ move as complete — the nav/footer/CTA had moved, article bodies had not. | All 18 rewritten to `/request-quote/`. |
| 3 | knowledge | 404 page CTA pointed at `/contact/`. | Moved to `/request-quote/`. |
| 4 | data | 11 specification and product CTAs labelled "request a quote" pointed at `/contact/`. | Rewritten to `/request-quote/`. |
| 5 | manufacturer | The shared layout's nav CTA hard-coded `SITES.main/contact/` on all 15 pages. | Rewritten to `/request-quote/`; the condition that suppressed the CTA when a nav item already linked contact was removed with it. |
| 6 | main | `llms.txt` still described "Request a Quote" as a contact-page route, and claimed product entries are added only after supplier verification — false for records that are explicitly supplier-reported or unverified. | RFQ route corrected; verification sentence replaced with the actual labelling rule; four guide pages and the standards page added. |

The first defect is the kind a per-page metadata check cannot see: every page passed title,
description and H1 while two links were dead in the target site. Cross-site resolution is now part
of the gate.

## 4. Trust layer changes (main site)

| Page | Before | After | Change |
|---|---:|---:|---|
| `/editorial-standards/` | — | 1,307 words | New page: evidence labels, per-site publishing boundaries, what the site refuses to publish, price/stock policy, corrections procedure, authorship and date rules, limits, two-minute verification checklist, change log. |
| `/about/` | 304 words | 663 words | Added evidence handling, "what we are not" (not factory / lab / certification body / escrow marketplace), corrections principle, and the platform-split rationale. Operating-entity and mailbox disclosure retained verbatim. |
| `/contact/` | 162 words | 581 words | Added route table (quote / sample / correction / compliance), first-message checklist, contracting and payment note, bank-detail fraud warning, language scope. Entity facts unchanged. |
| `/compliance/` | 706 words | 760 words | Added maintenance and correction route, explicit "what this page does not do" box, 2026-11-20 edit date. No regulatory conclusion changed. |

Schema added: `AboutPage` on `/about/`, `ContactPage` on `/contact/`, `WebPage` on
`/editorial-standards/` and `/compliance/`, each with `mainEntity` pointing at the existing
Organization node and `isPartOf` the site. No new organization, rating, review or offer node was
invented.

`/editorial-standards/` is linked from the footer Company column, so every main-site page carries
one inbound link; it is also linked from About, Contact and Compliance body copy.

## 5. www host

Verified live during this run:

```
$ curl -I https://www.chinacharcoalhub.com/
HTTP/2 301
location: https://chinacharcoalhub.com/
```

The N1 carry-forward is closed: the www host now redirects to the apex. No DNS or Cloudflare
change was made in this run; the observation is recorded because the requirement was previously
listed as pending operator action.

## 6. Residual gaps (not fixed, and why)

1. **Main-site page count.** 25 indexable pages against the plan's 30–35 target. The 12-night
   queue added four pillar pages and one standards page to the original 20; the remaining gap
   would need five to ten genuinely new commercial or reference pages. None were added as filler
   in a QA night.
2. **Testing reports.** The testing site publishes 0 reports and says so. This is the N10
   methods-only decision, not a regression. A report requires a real laboratory document.
3. **Supplier verification.** No manufacturer profile is `Verified` or `Third-Party Verified`.
   Three carry supplier-stated registry numbers that have not been traced in the issuing registry;
   five are `Unverified`. Closing this needs documents, not editing.
4. **Data pending.** Product records still carry pending fields (chemistry for 26/27 mm, calorific
   unit for the bamboo records, manufacturer links). The fields are labelled and explained; they
   are not gaps in the QA gate.
5. **Rich-result validation.** JSON-LD is checked for structure, parse errors and forbidden offer
   fields locally. It was not submitted to an external rich-results validator, and no Search
   Console data was used.
6. **Live deployment.** The main-site changes were confirmed live after this pass:
   `/editorial-standards/` and `/about/` both returned HTTP 200 from `chinacharcoalhub.com`.
   Sub-site link fixes still follow the normal deploy for those projects.

## 7. Reproduce

```bash
cd /root/.openclaw/workspace/repos/guotan
npm run build
npm run check:links
npm run audit:network          # reads all five sibling dist/ trees
```

Sub-site builds and checks:

```bash
for r in data.guotan manufacturer.guotan testing.guotan Knowledge.guotan; do
  (cd ../$r && npm run build && npm run check:links)
done
```

## 8. Files changed

- `guotan`: `src/pages/editorial-standards.astro` (new), `scripts/audit-network.mjs` (new),
  `src/pages/about.astro`, `src/pages/contact.astro`, `src/pages/compliance.astro`,
  `src/lib/seo.ts`, `src/data/site-config.ts`, `src/pages/llms.txt.ts`, `package.json`
- `data.guotan`: 11 content files (quote CTA target)
- `manufacturer.guotan`: `src/layouts/BaseLayout.astro`
- `Knowledge.guotan`: 18 content files (quote CTA target, one spec slug), `src/pages/404.astro`
