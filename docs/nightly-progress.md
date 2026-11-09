# Charcoal Hub — Nightly Progress

Last updated: 2026-11-10
Current: N2
Next: N2
Status: N1 complete

## Completed

| Night | Task | Date | Commit | Build | Notes |
|---|---|---|---|---|---|
| N1 | Phase 0 repairs | 2026-11-10 | `346092e` | 21 pages | Entity/mailbox disclosure on Contact + About; homepage description 201 → 158; `/request-quote/` rebuilt as a real RFQ page with inbound links from nav, footer, homepage, products hub, 4 product pages, 5 service pages; Service + Organization schema on 5 service pages; Product schema drops AggregateOffer/lowPrice/highPrice/InStock and points Offer.url at RFQ; visible indicative price removed; www→apex 301 added in Functions middleware (deployment TODO: attach www hostname to Pages project). Details: `docs/phase0-repairs-2026-11.md`. |

## Partial / Blocked

| Night | Task | Reason | Next action |
|---|---|---|---|
| N1 | www 301 | Code-level 301 added to `functions/_middleware.js`, but it only runs when `www.chinacharcoalhub.com` is attached to the same Cloudflare Pages project. DNS/Cloudflare config was not changed from the repo. | Operator: confirm www custom domain on the Pages project, then `curl -I https://www.chinacharcoalhub.com/` expecting 301 to apex. |

## Rules

- One work unit per night from `docs/content-upgrade-plan-2026-11.md`.
- Stop by 07:30 Asia/Shanghai.
- No fabricated contacts, certificates, prices, MOQs or test results.
- Update this file after every run.
