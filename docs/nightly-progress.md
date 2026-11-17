# Charcoal Hub — Nightly Progress

Last updated: 2026-11-17
Current: N10
Next: N10
Status: N9 complete

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

## Carry-forward notes

- No supplier profile is `Verified` or `Third-Party Verified`. The next upgrade requires an actual document review (business licence, factory document) or a traceable third-party report for a named supplier — a storefront or a supplier's own website cannot support either status.
- The PT Coco and Yaparacoal NIB numbers are supplier-stated only. The Indonesian registry (AHU/OSS) was not queried; verify the numbers there before moving either profile off `Supplier Reported`.
- Yaparacoal's about page states 250 tonnes/month and an establishment year of 2026. Neither value was copied into the structured fields; if they are used later, label them supplier-declared and check the 2026 date against the registry, because it may be a template error.
- Xuanbao is the operating entity, not a charcoal supplier. Exclude it from supplier KPIs, "verified suppliers" counts and any future ranking; the profile exists for entity transparency.
- The `documents` schema distinguishes `Public registry`, `Company document`, `Supplier-stated reference` and `Public listing`, and every entry must state one of three check levels. Do not collapse these into a single "verified" badge — the distinction is the point.
- Bamboo datasheet calorific values are recorded in the body as "J" with no multiplier (6,500–7,450 / 7,500 / 7,200–7,400). N8 removed them from the structured `temperature` field and left `calorific_value` pending; ask the supplier for the unit and basis before any comparison, then fill the field.
- The 26 mm and 27 mm records remain size-class records only: piece count and nominal dimension from a public table, no batch chemistry, packaging, MOQ or origin. They need a supplier datasheet before they can support a buying decision. Same for the 25 mm record's odour, spark, capacity, testing and certification fields.
- `data.guotan` has no manufacturer collection, so every `manufacturer_id` stays pending. Linking FireMax or the coconut supplier to `manufacturer.guotan` profiles needs a stable cross-site id or a verified supplier entity first — do not guess the mapping.
- Size classes have no detail routes (`/sizes/<slug>/` does not exist), so the tolerance reasons are visible only in the record file. If size pages are added later, render `pending_fields` there too.
- N6 sources are cited by designation only, with no outbound links, because web search was unavailable during that run. If a future pass has network access, add one official link per standard (ASTM, ISO, CEN, SAC) and keep the designation-plus-edition rule intact.

## Rules

- One work unit per night from `docs/content-upgrade-plan-2026-11.md`.
- Stop by 07:30 Asia/Shanghai.
- No fabricated contacts, certificates, prices, MOQs or test results.
- Update this file after every run.
