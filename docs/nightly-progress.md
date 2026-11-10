# Charcoal Hub — Nightly Progress

Last updated: 2026-11-11
Current: N3
Next: N3
Status: N2 complete

## Completed

| Night | Task | Date | Commit | Build | Notes |
|---|---|---|---|---|---|
| N1 | Phase 0 repairs | 2026-11-10 | `346092e` | 21 pages | Entity/mailbox disclosure on Contact + About; homepage description 201 → 158; `/request-quote/` rebuilt as a real RFQ page with inbound links from nav, footer, homepage, products hub, 4 product pages, 5 service pages; Service + Organization schema on 5 service pages; Product schema drops AggregateOffer/lowPrice/highPrice/InStock and points Offer.url at RFQ; visible indicative price removed; www→apex 301 added in Functions middleware (deployment TODO: attach www hostname to Pages project). Details: `docs/phase0-repairs-2026-11.md`. |
| N2 | Product upgrade 1 — coconut shell + hookah | 2026-11-11 | `909568f` | 21 pages | Both pages rewritten from ~600 to ~1,800 rendered words (1,799 / 1,800 measured on `dist`). Added status legend, process/format detail, size + packaging tables, quality-risk sections, sampling path, and 4-question FAQ with FAQPage schema. Every numeric claim carries a supplier-declared or industry-reference label; 26/27 mm chemistry remains explicitly `data pending`. Product Offer stays RFQ-only (no price, no availability). Cross-links: 4–5 data records, 4–6 test methods, 7–8 knowledge articles per page, all verified against sub-site source trees. |

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

## Rules

- One work unit per night from `docs/content-upgrade-plan-2026-11.md`.
- Stop by 07:30 Asia/Shanghai.
- No fabricated contacts, certificates, prices, MOQs or test results.
- Update this file after every run.
