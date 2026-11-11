# Charcoal Hub — Nightly Progress

Last updated: 2026-11-11
Current: N4
Next: N4
Status: N3 complete

## Completed

| Night | Task | Date | Commit | Build | Notes |
|---|---|---|---|---|---|
| N1 | Phase 0 repairs | 2026-11-10 | `346092e` | 21 pages | Entity/mailbox disclosure on Contact + About; homepage description 201 → 158; `/request-quote/` rebuilt as a real RFQ page with inbound links from nav, footer, homepage, products hub, 4 product pages, 5 service pages; Service + Organization schema on 5 service pages; Product schema drops AggregateOffer/lowPrice/highPrice/InStock and points Offer.url at RFQ; visible indicative price removed; www→apex 301 added in Functions middleware (deployment TODO: attach www hostname to Pages project). Details: `docs/phase0-repairs-2026-11.md`. |
| N2 | Product upgrade 1 — coconut shell + hookah | 2026-11-11 | `909568f` | 21 pages | Both pages rewritten from ~600 to ~1,800 rendered words (1,799 / 1,800 measured on `dist`). Added status legend, process/format detail, size + packaging tables, quality-risk sections, sampling path, and 4-question FAQ with FAQPage schema. Every numeric claim carries a supplier-declared or industry-reference label; 26/27 mm chemistry remains explicitly `data pending`. Product Offer stays RFQ-only (no price, no availability). Cross-links: 4–5 data records, 4–6 test methods, 7–8 knowledge articles per page, all verified against sub-site source trees. |
| N3 | Product upgrade 2 — BBQ + bamboo, product hub | 2026-11-11 | `eff2969` | 21 pages | BBQ 475 → 1,824 main-content words; bamboo → 1,709; products hub 242 → 811 with a per-category evidence table. BBQ keeps all 11 spec fields as `data pending` because the database holds no BBQ record (verified against `data.guotan/src/content/products/`). Bamboo corrected: the page previously sold bamboo as grilling fuel, but all three FireMax records are hookah cubes and one incense bar — reframed, with the datasheet's unresolved calorific unit ("J" with no multiplier), null fixed carbon/volatiles, null MOQ and null private label all stated explicitly. Homepage cards updated so bamboo is no longer described as grilling fuel. |

## Partial / Blocked

| Night | Task | Reason | Next action |
|---|---|---|---|
| N1 | www 301 | Code-level 301 added to `functions/_middleware.js`, but it only runs when `www.chinacharcoalhub.com` is attached to the same Cloudflare Pages project. DNS/Cloudflare config was not changed from the repo. | Operator: confirm www custom domain on the Pages project, then `curl -I https://www.chinacharcoalhub.com/` expecting 301 to apex. |

## N2 verification detail

- `npm run build` → 21 pages, markdown negotiation 20/1 skipped (404).
- Metadata: all 21 built pages have title ≤60, description ≤160, exactly one H1.
- Coconut page: title 43 chars, description 155 chars, 1 H1, 1,799 words.
- Hookah page: title 48 chars, description 157 chars, 1 H1, 1,800 words.
- Internal links: every root-relative link resolves in `dist`; `/request-quote/` appears 4× on each product page.
- Cross-site links: 26 unique data/testing/knowledge URLs checked against the sub-site source trees — all resolve.
- JSON-LD: BreadcrumbList + Product + FAQPage on both pages; Product Offer has `url` only (no price, no availability).

## N3 verification detail

- `npm run build` → 21 pages, markdown negotiation 20/1 skipped (404).
- Metadata: 20/20 non-404 pages have title ≤60, description ≤160, exactly one H1. Zero failures.
- Word count is now recorded as visible `<main>` text, which reads higher than the N2 figure (the N2 pages score 1,940 / 1,946 on this measure against the 1,799 / 1,800 recorded then). BBQ is 1,824 and bamboo 1,709 on the same measure.
- Internal links: `npm run check:links` → 21 pages, 810 links, no broken links.
- `/request-quote/` inbound: 5 on the hub, 4 on each product page.
- JSON-LD: BreadcrumbList + Product + FAQPage on both product pages; Product `offers` carries `url` only — no price, no availability.
- Every `data pending` instance is attached to a named field or a stated reason: 16 on the BBQ page (11 are the worksheet's "Our record" column), 3 on the hub, 4 on bamboo.
- Cross-site links verified against source trees: data `/products/p-firemax-{sl470-bamboo-cube,c25-bamboo-cube,si87-silver-bar}/`, `/applications/`, `/specifications/{ash-content,ignition-time}/`; testing `/tests/{burning-time,ignition-time}/`, `/reports/`; knowledge `/knowledge/{...}/` 9 slugs.

## Carry-forward notes

- `data.guotan` SL470 record claims the 40 × 40 × 30 mm cube is "roughly 2.5× the volume of a standard 25 mm cube". The arithmetic gives 48,000 mm³ vs 15,625 mm³ ≈ 3.07×. Main-site copy states three times and does not repeat the 2.5× figure. Fix the data record during N8.
- Bamboo datasheet calorific values are recorded in "J" with no multiplier (6,500–7,450 / 7,500 / 7,200–7,400). Left unconverted and flagged as unresolved; ask the supplier for the unit and basis before any comparison.

## Rules

- One work unit per night from `docs/content-upgrade-plan-2026-11.md`.
- Stop by 07:30 Asia/Shanghai.
- No fabricated contacts, certificates, prices, MOQs or test results.
- Update this file after every run.
