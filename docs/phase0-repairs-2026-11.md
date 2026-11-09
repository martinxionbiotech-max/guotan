# Phase 0 repairs — N1 (2026-11-10)

Scope: `guotan` main site only. No sub-site edits in this unit.

## What changed

| Item | Change | Status |
|---|---|---|
| Entity / contact consistency | Contact page now states the operating entity (`Yancheng Xuanbao Environmental Technology Co., Ltd.`, Yancheng, Jiangsu), the platform-vs-factory role, and that `joanna@dinweys.com` is the Charcoal Hub sales desk on the shared `dinweys.com` mail domain — not a separate seller. About page carries the same disclosure. | Done |
| Homepage description | Reduced from 201 to 158 characters; keeps coconut shell / hookah / BBQ / private label and verification wording. | Done |
| RFQ internal links | `/request-quote/` is now a real page (quote form + what to include + next steps) instead of a meta-refresh to `/contact/`. Nav, footer, homepage, products hub, 4 product pages and 5 service pages link to it. `/contact/` links to it as well. | Done |
| Service schema | `Service` + `Organization` JSON-LD added to `private-label`, `oem`, `manufacturing`, `export`, `packaging`. Provider `@id` resolves to the homepage Organization node. | Done |
| Product schema | `productJsonLd()` no longer emits `AggregateOffer`, `lowPrice`, `highPrice` or `InStock`. It emits an `Offer` whose `url` points at `/request-quote/`; price and availability are omitted until a real sellable offer exists. The visible "Indicative price US$80–200" line was removed from all 4 product pages and replaced with an RFQ pricing note. | Done |
| www 301 | `functions/_middleware.js` now 301-redirects `www.<apex>` to the apex host, preserving path and query. Default apex is `chinacharcoalhub.com`; `APEX_HOST` env overrides. Unit-tested with a mocked request. | Code done — deployment pending |

## Deployment requirement for www 301

Cloudflare Pages `_redirects` cannot match on hostname, so the redirect is implemented in the
Functions middleware. It only runs when the `www.chinacharcoalhub.com` hostname is attached to this
Pages project as a custom domain. If www is currently served by a separate origin or a DNS record
outside Pages, the middleware never sees the request and the 301 will not happen.

TODO (operator): confirm in Cloudflare that `www.chinacharcoalhub.com` is attached to the same
Pages project, then verify:

```
curl -I https://www.chinacharcoalhub.com/
# expect: HTTP/2 301, location: https://chinacharcoalhub.com/
```

No DNS or Cloudflare configuration was changed from this repository.

## Evidence rules honoured

- No email address, legal entity, registration number, certification, price, MOQ or test result
  was invented. The `dinweys.com` mailbox is described as the shared mail domain, which is
  observable from the operator's other published sites; no new legal relationship was asserted.
- Product prices are no longer stated anywhere on the main site; quotation is the only price path.
- Registration number and street address are explicitly marked as available on request rather
  than published unverified.

## Verification

- `npm run build`: 21 pages, markdown manifest generated (20 generated, 1 skipped).
- `npm run check:links`: 21 pages, 785 internal links, 0 broken.
- Single H1 on all 21 pages; all titles ≤60; all descriptions ≤160.
- Service schema present once on each of the 5 service pages.
- No `lowPrice`, `highPrice` or `InStock` in any product page output.
