# Charcoal Hub — Compressed Content Upgrade Plan

Status: approved  
Scope: `guotan` main site + `data.guotan`, `manufacturer.guotan`, `testing.guotan`, `Knowledge.guotan`  
Audit: `/root/.openclaw/workspace/reports/chinacharcoalhub-content-audit-2026-11.md`  
Cadence: one work unit per night, 04:00–07:30 Asia/Shanghai  
Compressed timeline: **12 nights** (instead of 90 days)  
Checkpoint: `docs/nightly-progress.md`

## 1. Objective

Upgrade the network from a thin 107-page hub into a credible B2B sourcing system:

- main site: 20 → 30–35 indexable pages, average 1,200+ words
- 4 product pages: 475–791 → 1,200–1,800 words
- 4 commercial pillars: 2,500–3,500 words each
- data: complete 7 product records and spec status
- manufacturer: 3+ profiles with verifiable evidence
- testing: 2–3 sanitised sample reports or explicit methods-only positioning
- knowledge: 24 articles regrouped into 4 clusters

## 2. Hard rules

- No invented company names, contacts, certificates, test results, prices, MOQs or client logos.
- Keep `data pending`, `supplier-reported`, `unverified` where evidence is missing.
- No fixed price or `InStock` schema unless a real offer exists.
- No human/medical claims; charcoal is a fuel/product, not a health product.
- Every modified page: one H1, title ≤60, description ≤160.
- Build, check internal links, commit only task files, push.
- Stop at 07:30; incomplete work marked `partial`; no half-built push.

## 3. 12-night queue

| Night | Work unit | Main output | Acceptance |
|---|---|---|---|
| N1 | Phase 0 repairs | Contact/entity consistency, homepage description, RFQ internal links, Service schema, www 301 note, Product schema without fixed price/stock | Build; 5 service pages have Service schema; `/request-quote/` has inbound links |
| N2 | Product upgrade 1 | Coconut shell + hookah product pages to 1,200–1,800 words | Specs/evidence labels clear; links to data/test/knowledge |
| N3 | Product upgrade 2 | BBQ + bamboo product pages; product hub | No unexplained `data pending`; pending fields labelled |
| N4 | Pillar 1 | Coconut Shell Charcoal: Specification, Grades and Buyer's Guide | 2,500–3,500 words; 8–12 H2; links 3 products + 5 KB |
| N5 | Pillar 2 | Hookah Charcoal Manufacturing: Quality, Density and Consistency | 2,500–3,500 words; process/spec/QC; links |
| N6 | Pillar 3 | Charcoal Testing & COA: What Buyers Can Verify | 2,500–3,500 words; testing methods; 8+ sources |
| N7 | Pillar 4 | Private Label & OEM Charcoal: From Specification to Shipment | 2,500–3,500 words; OEM process, labels, MOQ, QA |
| N8 | Data site | Complete 7 product records, 8 specifications, 3 sizes | No empty required fields without status; build |
| N9 | Manufacturer site | 3 profiles with verifiable documents; status legend | Unverified profiles clearly labelled; no ranking |
| N10 | Testing site | 2–3 sanitised sample reports or methods-only page | Reports traceable; no fabricated results |
| N11 | Knowledge clusters | Group 24 articles into 4 clusters; add cross-links | 4 cluster hubs; internal links |
| N12 | Trust + QA | About/contact/compliance; schema; metadata; sitemap; final audit | Build, 0 broken links, metadata pass |

## 4. Nightly workflow

1. Read this plan and `docs/nightly-progress.md`.
2. Take the `Next` unit only.
3. Read relevant source files and existing pages.
4. Make the smallest complete change that satisfies the acceptance criteria.
5. `npm run build` in the affected repo.
6. Check H1/title/description/internal links.
7. Commit only task files; push.
8. Update progress: task, date, commit, build pages, next.
9. Report 5 lines.

## 5. Current priority

**N1 — Phase 0 repairs** is next.

Key N1 checks:
- Contact email/company identity: `joanna@dinweys.com` vs `chinacharcoalhub.com`; display legal entity relationship.
- Product schema: remove fixed `AggregateOffer` defaults; link to RFQ.
- Add `Service` schema to private-label, OEM, manufacturing, export, packaging.
- Link `/request-quote/` from product pages, homepage, service pages.
- Homepage description from 201 to 150–160 chars.
- www host: document 301 requirement; change only if config is available.

## 6. Reporting

```
N{id} {task}
- repo/files:
- build:
- H1/title/desc:
- links/schema:
- commit:
- next:
```
