# Charcoal Hub — Nightly Progress

Last updated: 2026-11-22
Current: N13
Next: N14 — `/private-label/` depth (372 words)
Status: N13 complete; 12-night queue closed, extended queue open

## Completed

| Night | Task | Date | Commit | Build | Notes |
|---|---|---|---|---|---|
| N1 | Phase 0 repairs | 2026-11-10 | `346092e` | 21 pages | Entity/mailbox disclosure on Contact + About; homepage description 201 → 158; `/request-quote/` rebuilt as a real RFQ page with inbound links from nav, footer, homepage, products hub, 4 product pages, 5 service pages; Service + Organization schema on 5 service pages; Product schema drops AggregateOffer/lowPrice/highPrice/InStock and points Offer.url at RFQ; visible indicative price removed; www→apex 301 added in Functions middleware (deployment TODO: attach www hostname to Pages project). Details: `docs/phase0-repairs-2026-11.md`. |
| N2 | Product upgrade 1 — coconut shell + hookah | 2026-11-11 | `909568f` | 21 pages | Both pages rewritten from ~600 to ~1,800 rendered words (1,799 / 1,800 measured on `dist`). Added status legend, process/format detail, size + packaging tables, quality-risk sections, sampling path, and 4-question FAQ with FAQPage schema. Every numeric claim carries a supplier-declared or industry-reference label; 26/27 mm chemistry remains explicitly `data pending`. Product Offer stays RFQ-only (no price, no availability). Cross-links: 4–5 data records, 4–6 test methods, 7–8 knowledge articles per page, all verified against sub-site source trees. |
| N3 | Product upgrade 2 — BBQ + bamboo, product hub | 2026-11-11 | `eff2969` | 21 pages | BBQ 475 → 1,824 main-content words; bamboo → 1,709; products hub 242 → 811 with a per-category evidence table. BBQ keeps all 11 spec fields as `data pending` because the database holds no BBQ record (verified against `data.guotan/src/content/products/`). Bamboo corrected: the page previously sold bamboo as grilling fuel, but all three FireMax records are hookah cubes and one incense bar — reframed, with the datasheet's unresolved calorific unit ("J" with no multiplier), null fixed carbon/volatiles, null MOQ and null private label all stated explicitly. Homepage cards updated so bamboo is no longer described as grilling fuel. |
| N4 | Pillar 1 — coconut shell specification and buyer's guide | 2026-11-13 | `e5e41ef` | 22 pages | New `/coconut-shell-charcoal-guide/` at 3,384 visible `<main>` words, 12 H2, 1 H1, title 55 chars, description 140 chars. Covers what "grade" means (no formal hookah grade standard), the shell-to-cube process, the 9-field specification set, 22/25/26/27 mm size classes, ash/fixed carbon plus the published 25/26/27 mm records, application classes, moisture/density/binder, MOQ/packaging/container economics, an 8-step sampling sequence, contract traps, and 5 FAQs. Links 11 knowledge articles, 3 data product records, the data explainer and the testing methods index; inbound links added from the coconut product page, products hub and knowledge gateway. Article + BreadcrumbList + FAQPage schema, no price or availability. |
| N5 | Pillar 2 — hookah charcoal manufacturing | 2026-11-14 | `1f882dd` | 23 pages | New `/hookah-charcoal-manufacturing/` at 3,496 visible `<main>` words, 12 content H2, 1 H1, title 54 chars, description 147 chars. Runs the line stage by stage (shell intake → carbonisation → milling → binder → pressing → drying → sorting), ties each stage to the parameter it fixes and its characteristic defect, and separates conformance from batch-to-batch consistency. Adds a three-density table (bulk / particle / piece mass), a stage-gate QC plan with the record that makes each check traceable, a defect-to-stage table, and a PO annex structure. All process ranges labelled industry reference; no factory, capacity or certification claim. Links 3 products, 2 services, 6 knowledge articles, 3 test methods, the 25 mm data record and the manufacturer verification model; inbound links from the hookah product page, manufacturing page and knowledge gateway. Article + BreadcrumbList + FAQPage schema, no price or availability. |
| N6 | Pillar 3 — charcoal testing and COA | 2026-11-15 | `dd9cc4d` | 24 pages | New `/charcoal-testing-coa-guide/` at 3,498 visible `<main>` words, 12 content H2, 1 H1, title 46 chars, description 150 chars. Covers what a COA actually certifies (seller declaration vs laboratory record), the document types buyers confuse, the proximate identity and the sum check that exposes mixed bases, the ASTM / ISO / GB/T / EN method families and why they are not interchangeable, dry vs as-received vs dry ash-free with a worked conversion (one material reads 80 / 85.1 / 87.9% fixed carbon), the five sampling handovers, the limits of each metric (including the moisture-to-energy arithmetic), accreditation scope and report anatomy, 12 red flags, eight field checks a buyer can run without a lab, an eight-element PO annex with example wording, and a 10-item COA request template. 15 standards cited by designation. Inbound links from `/testing/`, `/knowledge/`, the coconut product page and `/request-sample/`. Article + BreadcrumbList + FAQPage; no Offer, price or availability. |
| N7 | Pillar 4 — private label and OEM | 2026-11-15 | `d461064` | 25 pages | New `/private-label-oem-charcoal-guide/` at 3,500 visible `<main>` words, 12 content H2, 1 H1, title 55 visible chars, description 141. Covers what a private label order buys (and how white label, private label, OEM and ODM differ), what a specification can and cannot fix, the nine-field spec sheet, the artwork/dieline gate and proof types, the three samples (development, golden, production), the three stacked minimums and container arithmetic, packaging moisture/compression/palletisation, label compliance (EU GPSR, country of origin, claims, EUDR caveat), the critical path, three inspection gates plus the retained duplicate, documents and UN 1361/Class 4.2, and a 12-line PO annex. Inbound links added from `/private-label/`, `/oem/`, `/packaging/` and `/knowledge/`. Article + BreadcrumbList + FAQPage; no Offer, price or availability. |
| N8 | Data site — 7 product records, 8 specifications, 3 sizes | 2026-11-17 | `9ee50b8` (data.guotan) | 31 pages | Every null field on all 7 product records now carries a written reason: `pending_fields` (who owes the value and why) or `not_applicable` (the field cannot exist for that form). Added `calorific_value` — four FireMax records had been filing calorific value under `temperature`, and the value is now withheld as pending because the datasheet unit is bare "J" with no multiplier. Added written `meta_description` per record. Filled `length`/`width`/`height` for the cube and block records from the declared size string; corrected SL470's "2.5× volume" to 3.07× (48,000 mm³ vs 15,625 mm³); RB33 ash `0.045` is now null with the verbatim figure quoted in the body; the 25 mm record's Quick Facts no longer contradicts its frontmatter burn time; duplicate markdown H1 removed from all 7 records. Sizes gained `pieces_per_kg` (72/64/56), provenance and a pending tolerance; `/sizes/` now renders the three classes instead of a hard-coded empty row. `npm run check:data` was failing 28 checks and now passes; the gate enforces pending coverage, treats literal `null` as empty, and separates record/taxonomy/knowledge provenance. 30/30 indexable pages pass title ≤60, description ≤160, single H1. |
| N9 | Manufacturer site — evidence layer | 2026-11-17 | `341ee1c` + `9fb4e6b` (manufacturer.guotan) | 15 pages | Added a typed document-reference layer to the schema — public registry, company document, supplier-stated reference, public listing — each carrying a `check` value (`Publicly checkable` / `On file — not public` / `Supplier-stated — not independently checked`). Three of eight supplier profiles now carry a document reference beyond their own website: Hongqiang (Companies House 08974143), PT Coco Total Karbon (NIB 0220001680488) and Yaparacoal (NIB 0208260112482); the last two are supplier-stated, not registry-checked. Corrected Hongqiang: the UK company is active but files SIC 99999 — Dormant Company with a Beckenham registered office, so "UK-registered trading entity" was removed from `export_markets` and replaced with a profile note. Marked Xuanbao as `profile_role: Operator entity` — it is Charcoal Hub's own legal entity, its products are catalysts/adsorbents, and it is excluded from supplier counts. Directory now carries a four-status legend with counts, a "not a ranking" statement, status-then-alphabetical order, per-card document counts, and an explicit "unverified means unqualified" warning. Profile pages show badge + plain-language reading + evidence level + caveat, render `Not recorded` instead of bare dashes, and emit `ProfilePage` JSON-LD instead of attributing every profile to the publisher Organization. `llms.txt` is generated from the collection; the static `public/llms.txt` added upstream was deleted because it still said "Manufacturers published: 0". Quote links now point at `/request-quote/`. |
| N10 | Testing site — methods-only positioning | 2026-11-18 | `1181e68` + `927fd1d` (testing.guotan) | 18 pages | Took the methods-only branch of the acceptance criteria: no sample reports were invented. New `/methods-vs-reports/` page states the site's scope — a methods reference with an empty reports register, not a test report database — and explains the difference between a sanitised report (real report, commercial identifiers removed) and a synthetic sample (no measurement behind it, indistinguishable from data once forwarded). Includes a method-vs-report comparison table, the four status labels with what each does **not** mean, eight report fields with the check a buyer runs on each, a six-step certificate reading sequence, five pre-document checks, submission terms, and six FAQs. `/reports/` now leads with "0 published reports", links the scope page and requires laboratory + report number + date + standard before any entry. Upstream had added a static `public/llms.txt` that shadowed the generated `/llms.txt`; deleted it so the generated file (which now names the scope page and the 0-report status) is the single source. Quote links on nav, footer, homepage and method pages moved from `/contact/` to `/request-quote/` to match N1. |
| N11 | Knowledge site — 4 clusters + hubs | 2026-11-19 | `292da58` + `4507500` (Knowledge.guotan) | 33 pages | All 24 articles assigned to one of four reading clusters via a required `cluster` frontmatter enum — choosing-charcoal (7), specifications-and-quality (7), sourcing-and-suppliers (5), shipping-and-compliance (5). New `/knowledge/clusters/` overview and four hub pages, 513–613 visible words each, with CollectionPage + BreadcrumbList JSON-LD, a three-article "start here" sequence, supporting guides, links to the other three hubs and to the data/testing records. Article pages now carry the cluster in the breadcrumb and `Article.articleSection`, a cluster badge under the H1, and a "More in this cluster" block of three sibling links. Index and nav regrouped by cluster; `intent` kept as a per-article badge. Metadata pass: 22 pages were over the limits before this run (homepage description 208 chars; 19 article descriptions 168–230; full titles 61–62 because the site suffix was 24 chars) — all 33 pages now pass title ≤60, description ≤160, one H1. `llms.txt` now lists the four clusters and each article's cluster; upstream's static `public/llms.txt` was removed again because it shadowed the generated route. RFQ links on nav, footer, homepage and article CTA moved from `/contact/` to `/request-quote/`. |
| N12 | Trust + QA — trust pages, schema, metadata, sitemap, final audit | 2026-11-20 | `ebed684` + `1eaca0f` (data) + `3eb6f0e` (manufacturer) + `721ea44` (Knowledge) | 123 pages / 118 indexable | New `/editorial-standards/` (1,307 words) states the evidence labels, per-site publishing boundaries, refusal list, price/stock policy, corrections procedure and site limits. About 304 → 663 words with `AboutPage`; Contact 162 → 581 with `ContactPage`, route table, first-message checklist and a bank-detail fraud warning; Compliance 706 → 760 with `WebPage`, a maintenance/correction route and an explicit "what this page does not do" box. New `scripts/audit-network.mjs` + `npm run audit:network` gate all five built sites on title/description/H1/canonical/duplicate metadata/sitemap equality/JSON-LD offer fields/cross-site link resolution. Fixed six real defects the per-page checks had missed: two dead cross-site `/specifications/burn-time/` links on a knowledge article, 18 stale `/contact/` CTAs in knowledge article bodies, 11 in the data site, the manufacturer layout's hard-coded `/contact/` nav CTA on 15 pages, the knowledge 404 CTA, and a stale `llms.txt` claim that every product entry is verified. All five sites now pass: 123 built pages, 118 indexable, 118 sitemap URLs, 3,787 internal links, 0 failures. |
| N13 | Packaging service page (queue extension) | 2026-11-22 | `a7610ff` | 26 pages | `/packaging/` 393 → 1,939 visible words, 12 H2, 1 H1, title 26, description 135. Six-format table separates the two supplier-declared data records (1 kg box, 10 kg pack) from four industry-reference formats. Adds box anatomy by layer, the moisture/barrier decision with its measurement basis and sampling point, ECT vs Mullen, pallet footprints and ISPM 15, the retail-vs-bulk loading trade-off, ISTA 1A / ASTM D5276 protocols, an eleven-line packaging specification, cost drivers, and five FAQs. Service + BreadcrumbList + FAQPage JSON-LD; no Offer, price or availability. |

## Partial / Blocked

| Night | Task | Reason | Next action |
|---|---|---|---|
| — | — | No open blocker from the 12-night queue. | — |

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

## N4 verification detail

- `npm run build` → 22 pages, markdown negotiation 21/1 skipped (404).
- New `/coconut-shell-charcoal-guide/`: 3,384 visible `<main>` words (target 2,500–3,500), 12 H2, 1 H1.
- Metadata: 21/21 non-404 pages pass title ≤60, description ≤160, exactly one H1. Guide title 55 chars, description 140 chars.
- Internal links: `npm run check:links` → 22 pages, 863 links, no broken links.
- Cross-site links: 11 knowledge articles, 3 data product records, data `/explain/how-to-compare/`, testing `/tests/` — all verified against the sub-site source trees.
- JSON-LD: Article + BreadcrumbList + FAQPage. No Offer, price or availability is emitted on the guide.
- Inbound links added: coconut product page Related card, products hub "Before You Ask for a Quote", knowledge gateway callout.
- Evidence discipline: only the 25 mm record carries chemistry; 26 mm and 27 mm are explicitly `data pending`; the 22 mm class is noted as a size table entry with no separate record.

## N5 verification detail

- `npm run build` → 23 pages, markdown negotiation 22/1 skipped (404).
- New `/hookah-charcoal-manufacturing/`: 3,496 visible `<main>` words (target 2,500–3,500), 12 content H2, 1 H1. The automated H2 count returns 13 because the closing CTA banner carries its own `<h2>`; content sections are 12.
- Metadata: 22/22 non-404 pages pass title ≤60, description ≤160, exactly one H1. Guide title 54 chars, description 147 chars.
- Internal links: `npm run check:links` → 23 pages, 911 links, no broken links.
- `/request-quote/` appears 5× on the new page; inbound links added from the hookah product page (Related card), `/manufacturing/` (specification section) and `/knowledge/` (gateway callout).
- Cross-site links verified against sub-site source trees: knowledge `how-coconut-shell-charcoal-is-made`, `charcoal-moisture-explained`, `charcoal-density-and-heat-management`, `pre-shipment-inspection-charcoal`, `private-label-charcoal`, `how-to-choose-hookah-charcoal`; testing `/tests/` and `/tests/density/`; data `/products/25mm-natural-coconut-shell-hookah-charcoal/`; manufacturer `/verification/`.
- JSON-LD: Article + BreadcrumbList + FAQPage. No Offer, price or availability is emitted on the page.
- Evidence discipline: carbonisation window (600–900 °C), shell-to-char yield (2–2.5 t per t), feedstock moisture (≤20%), finished moisture (6–8%) and pressed density (1.2–1.3 t/m³) are all labelled industry reference and attributed to public process sources, not to a named plant. No capacity, certification or client claim is made.

## N6 verification detail

- `npm run build` → 24 pages, markdown negotiation 23/1 skipped (404).
- New `/charcoal-testing-coa-guide/`: 3,498 visible `<main>` words (target 2,500–3,500), 12 content H2, 1 H1. H2 count including the closing CTA is 15; FAQ and the source list are the other two.
- Metadata: 23/23 non-404 pages pass title ≤60, description ≤160, exactly one H1. Guide title 46 chars, description 150 chars.
- Internal links: `npm run check:links` → 24 pages, 960 links, no broken links.
- `/request-quote/` appears 5× on the new page.
- Inbound links added: `/testing/` callout, `/knowledge/` gateway callout, coconut product page Related card, `/request-sample/` note after the form.
- Cross-site links verified against sub-site source trees: data `/products/`, `/explain/test-basis-matters/`, `/explain/how-specs-are-measured/`; testing `/tests/`, `/tests/burning-time/` (dynamic `[slug]` route, slug present in `tests.ts`), `/reports/`; knowledge `how-to-read-a-chinese-charcoal-test-report`, `pre-shipment-inspection-charcoal`, `charcoal-odor-and-ignition`; manufacturer `/verification/`.
- JSON-LD: Article + BreadcrumbList + FAQPage. No Offer, price or availability.
- Sources: 15 standards cited by designation and issuer (ASTM D1762, D3172–D3175, D5865, D440; ISO 18122/18123/18125/18134, 17828, 17831-1, 19867-1; ISO/IEC 17025; GB/T 12496 series; EN 1860-2; UN 1361). No URLs were invented: web search was unavailable in this run, so the list names issuers and tells the reader to obtain the current edition from them.
- Word budget: first draft measured 5,092 on the same counter; trimmed to 3,498 by removing duplicated restatement, not by dropping sections. All 12 sections and both tables survived.
- Evidence discipline: the worked basis table is labelled illustrative arithmetic, not a supplier certificate. No laboratory result, accreditation number, supplier name or price appears anywhere on the page. The moisture-to-energy figure (≈0.024 MJ/kg per point) is labelled industry reference and derived from the standard net-calorific-value correction, not measured.

## N7 verification detail

- `npm run build` → 25 pages, markdown negotiation 24/1 skipped (404).
- New `/private-label-oem-charcoal-guide/`: 3,500 visible `<main>` words (target 2,500–3,500), 12 content H2, 1 H1. The automated H2 count returns 14 because the FAQ and closing CTA each carry an H2.
- Metadata: 24/24 non-404 pages pass title ≤60, description ≤160, exactly one H1. Guide title 55 visible characters, description 141.
- Internal links: `npm run check:links` → 25 pages, 1,016 links, no broken links.
- `/request-quote/` appears 3× on the new page; `/request-sample/` once.
- Inbound links added: `/private-label/` callout, `/oem/` callout, `/packaging/` meta line, `/knowledge/` gateway callout.
- Cross-site links verified against sub-site source trees: knowledge `private-label-charcoal`, `charcoal-packaging-options`, `coconut-charcoal-moq`, `pre-shipment-inspection-charcoal`, `charcoal-container-loading`, `charcoal-import-certifications`, `charcoal-shipping-safety-un1361`, `charcoal-storage-and-shelf-life`; data `/specifications/` and `/packaging/`; manufacturer `/verification/`.
- JSON-LD: Article + BreadcrumbList + FAQPage. No Offer, price or availability.
- Evidence discipline: MOQ patterns (~1 t stock / 20 ft printed), container loads (14.4 t / 23.4 t) and critical-path durations are labelled industry reference; the 24-month shelf life is labelled supplier-declared. No factory, capacity, certification, price or client claim appears. GPSR (EU) 2023/988 and UN 1361 Class 4.2 are cited as regulatory context; EUDR scope for coconut shell is explicitly left to the importer and counsel rather than asserted.
- Word budget: the first draft measured 4,583 on the same counter; trimmed to 3,500 by cutting restatement and duplicate clauses, not sections. All 12 sections and seven tables survived.

## N8 verification detail

- `npm run build` → 31 pages (30 indexable + 404). Clean build after clearing `.astro`; an earlier incremental build emitted a stale duplicate-id warning from the content-layer cache.
- `npm run check:data` → passes. Before this run it failed with 28 issues: missing provenance on applications/packaging/sizes, and `manufacturer_id: null` misread as a broken reference because the script treated the literal string `null` as an id.
- `npm run check:links` → 31 pages, 1,221 internal links, no broken links.
- Metadata: 30/30 indexable pages pass title ≤60, description ≤160, exactly one H1. Longest title 59, longest description 158.
- Product records: 7/7 carry `meta_description`, `data_source`, `last_verified`, `verification_status` and a complete field-status list. Pending counts: 25 mm 7, 26 mm 18, 27 mm 18, C25 10, RB33 11, SI87 10, SL470 10. No field is both empty and unexplained, and no field is marked empty while holding a value — both are gate failures.
- Sizes: 3/3 carry `pieces_per_kg` (72/64/56), `data_source`, `last_verified`, `verification_status` and a pending tolerance reason. `/sizes/` renders all three rows; previously the table hard-coded a "No size classes yet (3 entries)" row and never read the collection.
- Specifications: 8/8 pass the schema and render 7 H2 sections each; 499–680 words per page. No supplier data is asserted on any of them.
- JSON-LD: Product + BreadcrumbList on product pages; no `offers`, no `price`, no `availability` anywhere in the data site. `productJsonLd` never emitted offers, and the records carry no price fields.
- Type grouping on `/types/` is derived from the published records (4 groups, counts 3/2/1/1) rather than asserting empty type pages.
- `llms.txt`: the route now derives counts from the collections (7 products, 3 sizes, 2 applications, 2 packaging, 8 specifications). A concurrent commit added `public/llms.txt` with the same stale "ZERO entries" text; because both resolve to `/llms.txt`, the static copy was removed rather than left as a second, false source.
- Quote links across the sub-site (`nav`, footer, product/compare/spec templates, `llms.txt`) now point at `/request-quote/` instead of `/contact/`, matching the N1 RFQ page.

## N9 verification detail

- `npm run build` → 15 pages. `npm run check:links` → 15 pages, 216 internal links, 0 broken. `npm run check:data` → passes.
- Metadata: 15/15 pages pass title ≤60, description ≤160, exactly one H1. Longest title 55 (`xiamen-hongqiang`), longest description 160 (`how-we-qualify`); all nine profile descriptions are 128–149 chars and written per record instead of one generic string.
- Directory composition: 8 supplier profiles (0 Verified, 3 Supplier Reported, 0 Third-Party Verified, 5 Unverified) plus 1 operator-entity record, excluded from every supplier count. The honest headline is that **no supplier profile is Verified or Third-Party Verified yet**.
- Document references: 3 of the 8 supplier profiles carry one beyond their own website — 1 public registry record (Hongqiang, Companies House 08974143) and 2 supplier-stated NIBs (PT Coco 0220001680488, Yaparacoal 0208260112482). No supplier profile carries a company document on file. Xuanbao (operator) holds two brochures on file, marked `On file — not public`.
- Hongqiang correction: the Companies House record is active but files SIC 99999 — Dormant Company, registered office in Beckenham. `export_markets` was carrying "UK-registered trading entity (Companies House, incorporated 2014)", which read as a trading presence; the field is now null and the fact sits in a document reference plus `entity_note`.
- Xuanbao correction: `profile_role: Operator entity`, and the page states that the entity's product lines are industrial catalysts, zeolite adsorbents and activated carbon — not charcoal briquettes. Previously the only "Verified" profile in a charcoal directory was the platform operator, which read as a verified charcoal supplier.
- Unverified rendering: profile callout is `callout-pending` and says the record is "a candidate to qualify, not a supplier you can rely on"; empty fields read `Not recorded` instead of `—`; the directory repeats "Unverified means unqualified" above the list.
- No ranking: cards sort by status strength then alphabetically, with an explicit statement that this is not a ranking, quality score or recommendation.
- JSON-LD: profile pages emit `ProfilePage` + `WebSite` + `BreadcrumbList`, with `mainEntity` limited to the organisation name. Previously every profile page emitted the publisher's `Organization` node, attributing the profile to Xuanbao. No capacity, certification, rating or offer is emitted.
- `llms.txt`: generated from the collection (8 supplier profiles, 5 unverified, 3 with document references, one operator record). A concurrent upstream commit added `public/llms.txt` saying "Manufacturers published: 0"; both resolve to `/llms.txt`, so the static copy was removed — same resolution as N8 on the data site.
- Quote links: `/request-quote/` now appears in nav, footer and profile pages (3 links per profile); the previous `/contact/` targets are gone.

## N10 verification detail

- `npm run build` (testing.guotan) → 18 pages (17 routes + 404). `npm run check:links` → 18 pages, 377 internal links, 0 broken. `npm run check:data` → passes (reports collection empty by design; no schema-required entries to validate).
- Metadata: 18/18 pages pass title ≤60, description ≤160, exactly one H1. Before this run 13 of 17 pages exceeded 160 characters, the worst being the tests index at 282 and the homepage at 252. The 12 method pages now carry an authored `metaDescription` field in `tests.ts` (136–154 chars) instead of reusing the long card summary (170–210 chars).
- New `/methods-vs-reports/`: 1,996 visible `<main>` words, 1 H1, 11 content H2, title 53, description 157. Sections: the two-document distinction, what the site publishes, what it does not, why there are no sample reports, the four status labels, eight report fields with the check on each, a six-step certificate-reading sequence, five pre-document checks, submission terms, and six FAQs.
- JSON-LD: Article + FAQPage (6 questions) + BreadcrumbList. No `Dataset`, no `Offer`, no price or availability. The FAQ markup matches the visible FAQ text.
- `/reports/` changed from a database page to a register: headline status is "0 published reports", the empty state explains that a fabricated row would be indistinguishable from a real result once copied, and the page requires laboratory, report number, date, standard, result, unit, basis and document before any entry can appear. Field table retained with the status legend.
- Reporting choice: **no sanitised sample reports were published**, because none exist. A sanitised report requires a real report to redact; a synthetic specimen would be indistinguishable from data outside the page. The methods-only branch of the N10 acceptance criteria was taken and documented.
- `llms.txt`: an upstream commit added `public/llms.txt` while the repo already had a generated `/llms.txt` route. Both resolve to the same URL, so the static copy was deleted (same resolution as N8 and N9). The generated file now states "METHODS REFERENCE, not a test report database", names the 0-report register and links the scope page.
- Quote links: nav CTA, footer, homepage CTA, reports page and all 12 method pages moved from `${SITES.main}/contact/` to `/request-quote/`; no `/contact/` links remain in the testing repo.
- Cross-site links: `/request-quote/` and `/charcoal-testing-coa-guide/` verified present in the main site `dist`; data, manufacturer and knowledge roots unchanged. Main site `/testing/` gained one inbound link to the scope page.
- Main site build after that link: 25 pages, `check:links` → 1,016 internal links, 0 broken; markdown negotiation 24/1.

## N11 verification detail

- `npm run build` (Knowledge.guotan) → 33 HTML pages (24 articles + 4 cluster hubs + clusters overview + knowledge index + home + privacy + 404; `llms.txt` and `robots.txt` are non-HTML routes). `npm run check:links` → 33 pages, 882 internal links, 0 broken. `npm run check:data` → passes.
- Metadata: 33/33 pages pass title ≤60 (measured on the rendered `<title>`), description ≤160, exactly one H1. Before this run 22 pages failed: the homepage description was 208 chars, 19 article descriptions ran 168–230, and six full titles hit 61–62 because the suffix ` | Charcoal Hub Knowledge` alone is 25 chars. Titles were fixed by adding `titleSuffix: 'Charcoal Hub'` to the knowledge site config rather than shortening H1s; article descriptions were rewritten to 133–150 chars with the same meaning.
- Cluster distribution: 7 / 7 / 5 / 5 = 24. The `cluster` field is a required enum in `src/content.config.ts`, so an article cannot be published without a cluster and a typo cannot create a silent fifth hub.
- Hub pages: `/knowledge/clusters/` plus `/knowledge/clusters/{choosing-charcoal,specifications-and-quality,sourcing-and-suppliers,shipping-and-compliance}/`. Visible `<main>` words 601 / 613 / 513 / 516, 6 H2 each, 1 H1 each. Each hub has a 2-paragraph scope note, the questions the cluster answers, a 3-card "start here" sequence with a reason per card, the remaining articles, cross-site record links, and links to the other three hubs.
- JSON-LD: `CollectionPage` with `mainEntity.ItemList` (`numberOfItems` = actual cluster size), `Organization` and `BreadcrumbList` on every hub. Article pages emit `Article` with `articleSection` = cluster title, plus the 4-level breadcrumb. No Offer, price or availability anywhere.
- Internal linking: every article links to its cluster hub (badge + related-block link) and to three siblings; every hub links to all its articles, the other three hubs, and 2–3 sibling-site record pages verified present in the built `dist` of data/testing. Index links each cluster hub (18 hub links across the 4 sections) and the overview links all four.
- `llms.txt`: generated from the collections — 24 articles with `cluster:` on each line, and a `## Clusters` block with the four hub URLs. An upstream commit added a static `public/llms.txt` between our commit and push; it was removed for the fourth time in this series (N8, N9, N10, N11) because it resolves to the same path and lists sections only.
- RFQ consistency: the knowledge site was the last sub-site still pointing CTAs at `/contact/`; nav, footer, homepage (2) and the article CTA now use `/request-quote/`. `/request-quote/` exists in the main-site build.
- No content claims were added. Hub copy describes what the articles cover and how to read them; it does not assert product specifications, supplier capability, prices or test results.

## N12 verification detail

- `npm run build` → main 26 pages (25 indexable + 404); `npm run check:links` → 26 pages, 1,091 internal links, 0 broken. Sub-sites rebuilt and re-checked: data 31 pages / 1,221 links, manufacturer 15 / 216, testing 18 / 377, knowledge 33 / 882 — all 0 broken. Network totals: 123 built pages, 118 indexable, 118 sitemap URLs, 3,787 internal links.
- `npm run audit:network` (new) → all five sites pass. It checks title ≤60 on the rendered `<title>`, description ≤160, exactly one H1, canonical = origin + path, no duplicate titles/descriptions per site, sitemap equality with the indexable set, JSON-LD parse errors, `Offer`/`AggregateOffer` carrying price/availability fields, and every body link into any of the five origins against the target `dist`. `<link rel="canonical">` is excluded from link scanning.
- Six defects found and fixed, none of which the per-page metadata checks could see: (1) two dead `data…/specifications/burn-time/` links on `/knowledge/how-long-coconut-charcoal-burns/` (correct slug `burning-time`); (2) 18 article-body CTAs in the knowledge site still pointing at `/contact/` after N11's RFQ pass, which had covered nav/footer/CTA but not article bodies; (3) knowledge 404 CTA; (4) 11 quote CTAs in the data site; (5) the manufacturer layout's hard-coded `/contact/` nav CTA on all 15 pages; (6) `llms.txt` still routing quotes to `/contact/` and claiming every product entry is verified.
- Trust pages: `/editorial-standards/` new at 1,307 visible words, 11 H2, title 30, description 126. `/about/` 304 → 663 words, title 18, description 111. `/contact/` 162 → 581 words, title 7, description 135. `/compliance/` 706 → 760 words, title 27, description 147. All four have one H1 and pass the length limits.
- Schema: `AboutPage` on about, `ContactPage` on contact, `WebPage` on editorial-standards and compliance, each with `mainEntity` referencing the existing Organization `@id` and `isPartOf` the site origin. No new Organization, rating, review or Offer node. Organization output remains identical on all four trust pages: legal name, Yancheng/Jiangsu/CN, founding 2020-05-12, sales contact point.
- Entity consistency: one legal name and one mailbox across all five built sites — `Yancheng Xuanbao Environmental Technology Co., Ltd.` and `joanna@dinweys.com` (31 occurrences on the main site, 3–33 on each sub-site). No second email domain appears in any build.
- Price/stock: grep across all five `dist` trees finds no `InStock`, `AggregateOffer`, `lowPrice` or `highPrice` in any HTML file.
- Sitemap: each site's `sitemap-0.xml` count equals its indexable page count (25 / 30 / 14 / 17 / 32), with no extras and no duplicates. The new standards page is present in the main sitemap.
- RFQ inbound: every main-site page has at least 2 links to `/request-quote/`; homepage 4, four product pages 4 each, five service pages 3 each, guides 5 each, standards page 4.
- www 301 verified live: `curl -I https://www.chinacharcoalhub.com/` returns `HTTP/2 301` with `location: https://chinacharcoalhub.com/`. This closes the N1 carry-forward; no DNS change was made in this run.

## N13 verification detail

- `npm run build` (guotan) → 26 pages (25 indexable + 404); markdown negotiation 25 generated / 1 skipped (404).
- `/packaging/`: 1,939 visible `<main>` words, 12 H2, 1 H1. Title 26 chars, description 135 chars.
- `npm run check:links` → 26 pages, 1,091 internal links, 0 broken. `npm run audit:network` → all five sites pass (main 26 pages / 25 indexable / 25 sitemap / max title 55 / max desc 158).
- Internal links: `/request-quote/` appears 3× on the page; `/private-label-oem-charcoal-guide/`, `/export/` and `/private-label/` each appear once.
- Cross-site links verified against built sibling trees: data `/packaging/` (index only — the two packaging records have no detail routes, so no invented URLs), testing `/tests/moisture/` and `/tests/breakage/`, knowledge `/knowledge/charcoal-container-loading/`.
- JSON-LD: BreadcrumbList + Organization + Service + FAQPage. No Offer, price or availability; the FAQ schema matches the five visible Q&As.
- Evidence discipline: the 1 kg box (72 × 25 mm cubes) and 10 kg pack are labelled supplier-declared and come from the data site records. The 1.2 kg / 2 kg packs, 10–20 kg master carton and 500–1,000 kg jumbo bag are labelled industry reference. Container figures (14.4 t / 23.4 t) are the same public-supplier planning reference already used on `/export/`. Board grades, liner specifications and carton dimensions remain `data pending` with the reason stated.
- No prices, MOQs or lead times were added to this page. The print/charcoal minimum structure stays on `/private-label/` and the pillar, where it is already labelled industry reference.

## Extended queue (opened 2026-11-22)

The 12-night queue is closed. The plan's remaining measurable gap is the commercial-page depth KPI (`<600 words → 0`) and the 25 vs 30–35 indexable-page target. This extension takes one page per night and does not add thin pages to move the count.

| Night | Work unit | Current → target | Acceptance |
|---|---|---|---|
| N13 | `/packaging/` specification page | 393 → 1,939 | done |
| N14 | `/private-label/` service page | 372 → 1,200+ | service scope, artwork gate, minimums, what to send; links pillar, packaging, RFQ |
| N15 | `/oem/` service page | 429 → 1,200+ | OEM vs private label, spec control, tooling/print ownership, inspection |
| N16 | `/manufacturing/` service page | 348 → 1,200+ | stage overview, QC gates, what is supplier-declared; link manufacturing pillar |
| N17 | `/export/` service page | 446 → 1,200+ | Incoterms/risk, document set, UN 1361, loading plan, destination checks |
| N18 | `/testing/` gateway | 369 → 900+ | methods vs reports, what can be requested, how to read a COA; link testing site |
| N19 | `/request-quote/` + `/request-sample/` | 275 / 85 → 600+ each | what to send, response path, sample terms; no invented lead times |
| N20 | Main-site page-count review | 25 → 30–35 | only pages with a real query and evidence plan; no filler |

Each night still follows the rules: one unit, build, link check, audit gate, commit, push, update this file. If a unit cannot meet the acceptance without inventing a fact, record it as `partial` and stop.

## Carry-forward notes

- The 12-night queue is complete. Main-site indexable pages stand at 25 against the plan's 30–35 target; the 20 → 25 growth is four pillar pages plus the standards page. Further growth needs new commercial or reference pages, not filler; do not add thin pages to close the count.
- `npm run audit:network` is now the release gate for the network. Run it after any cross-site link, slug or metadata change — `check:links` is per site and cannot see a link that is valid locally but dead in the sibling build.
- Trust pages must keep their entity facts in sync: legal name, founding date, phone, mailbox and mailbox-domain explanation appear on About, Contact, the Organization schema on every page, and the footer. Change them in one pass across all five repos or the network will contradict itself.

- `/packaging/` is a specification page, not a price list. Only the 1 kg box and 10 kg pack carry data records, both supplier-declared; board grades, liner specifications and carton dimensions stay pending until a supplier document exists. When a dieline or board certificate arrives, add the record to `data.guotan/src/content/packaging/` first, then cite it from the page — do not type a specification into the marketing copy.

- No supplier profile is `Verified` or `Third-Party Verified`. The next upgrade requires an actual document review (business licence, factory document) or a traceable third-party report for a named supplier — a storefront or a supplier's own website cannot support either status.
- The PT Coco and Yaparacoal NIB numbers are supplier-stated only. The Indonesian registry (AHU/OSS) was not queried; verify the numbers there before moving either profile off `Supplier Reported`.
- Yaparacoal's about page states 250 tonnes/month and an establishment year of 2026. Neither value was copied into the structured fields; if they are used later, label them supplier-declared and check the 2026 date against the registry, because it may be a template error.
- Xuanbao is the operating entity, not a charcoal supplier. Exclude it from supplier KPIs, "verified suppliers" counts and any future ranking; the profile exists for entity transparency.
- The `documents` schema distinguishes `Public registry`, `Company document`, `Supplier-stated reference` and `Public listing`, and every entry must state one of three check levels. Do not collapse these into a single "verified" badge — the distinction is the point.
- Bamboo datasheet calorific values are recorded in the body as "J" with no multiplier (6,500–7,450 / 7,500 / 7,200–7,400). N8 removed them from the structured `temperature` field and left `calorific_value` pending; ask the supplier for the unit and basis before any comparison, then fill the field.
- The 26 mm and 27 mm records remain size-class records only: piece count and nominal dimension from a public table, no batch chemistry, packaging, MOQ or origin. They need a supplier datasheet before they can support a buying decision. Same for the 25 mm record's odour, spark, capacity, testing and certification fields.
- `data.guotan` has no manufacturer collection, so every `manufacturer_id` stays pending. Linking FireMax or the coconut supplier to `manufacturer.guotan` profiles needs a stable cross-site id or a verified supplier entity first — do not guess the mapping.
- Size classes have no detail routes (`/sizes/<slug>/` does not exist), so the tolerance reasons are visible only in the record file. If size pages are added later, render `pending_fields` there too.
- N10 chose the methods-only branch: the testing site publishes 0 reports and says so. Do not add a "sample" or "illustrative" report row to fill the register — a synthetic result becomes indistinguishable from real data once copied, and a sanitised report can only be made from a real report by removing commercial identifiers (buyer, order number, price), never the laboratory, report number, date, standard, result, unit, basis or document reference.
- If a real report is supplied later, add it through the `reports` collection so the 12-field schema and the verification status are enforced, then update the "0 published reports" copy on `/`, `/reports/` and `llms.txt`. The status label describes document provenance, not charcoal quality; do not convert `supplier` to `third_party` without an independent document.
- The testing site's method pages carry authored `metaDescription` values in `tests.ts`; `summary` is the card/lede text and is longer than 160 chars. When adding a method, add both fields or the metadata gate fails.
- Cluster membership is editorial: `cluster` is a required enum, and `start` in `src/data/clusters.ts` names three slugs per cluster. If an article slug is renamed, update the cluster's `start` list too — the page silently skips unknown slugs rather than failing the build.
- The knowledge site's `<title>` suffix is now `Charcoal Hub` (not `Charcoal Hub Knowledge`) so long article headlines still fit 60 characters. The header brand and `site.name` are unchanged; do not reintroduce the 25-char suffix without re-running the metadata gate.
- N6 sources are cited by designation only, with no outbound links, because web search was unavailable during that run. If a future pass has network access, add one official link per standard (ASTM, ISO, CEN, SAC) and keep the designation-plus-edition rule intact.

## Rules

- One work unit per night from `docs/content-upgrade-plan-2026-11.md`.
- Stop by 07:30 Asia/Shanghai.
- No fabricated contacts, certificates, prices, MOQs or test results.
- Update this file after every run.
