import type { APIRoute } from 'astro';
import { SITES, BRAND } from '../lib/sites';

export const GET: APIRoute = async () => {
  const base = SITES.main;
  const L: string[] = [];
  L.push('# Charcoal Hub');
  L.push('');
  L.push(
    '> B2B charcoal sourcing and product intelligence platform. Natural coconut shell charcoal for hookah, BBQ and private-label solutions. All product, manufacturer and testing data are labeled by source and verification status; no fabricated claims.'
  );
  L.push('');
  L.push('## Core pages');
  L.push(`- [Home](${base}/): Coconut shell charcoal supplier for global B2B buyers.`);
  L.push(`- [Products](${base}/products/): Category overviews for coconut shell, hookah, BBQ and bamboo charcoal.`);
  L.push(`- [Coconut Shell Charcoal](${base}/products/coconut-shell-charcoal/): The core raw material.`);
  L.push(`- [Hookah Charcoal](${base}/products/hookah-charcoal/): 25mm / 26mm / 27mm cube charcoal.`);
  L.push(`- [Private Label](${base}/private-label/): Eight-step private label process.`);
  L.push(`- [OEM](${base}/oem/): Custom specification manufacturing.`);
  L.push(`- [Testing](${base}/testing/): Testing approach and data-source transparency.`);
  L.push(`- [Packaging](${base}/packaging/): Bulk, retail and private-label packaging.`);
  L.push(`- [Manufacturing](${base}/manufacturing/): Multi-supplier sourcing and qualification.`);
  L.push(`- [Export](${base}/export/): Export and logistics support.`);
  L.push(`- [Compliance](${base}/compliance/): Regulatory notes (EU, UK, USA) — not legal advice.`);
  L.push(`- [Request a Quote](${base}/request-quote/): Structured RFQ form.`);
  L.push(`- [Request Samples](${base}/request-sample/): Sample request form.`);
  L.push(`- [About](${base}/about/): Platform principles.`);
  L.push('');
  L.push('## Sub-sites');
  L.push(`- [Product Database](${SITES.data}/): Structured product and specification data.`);
  L.push(`- [Manufacturer Intelligence](${SITES.manufacturer}/): Supplier qualification and verification.`);
  L.push(`- [Testing Intelligence](${SITES.testing}/): Test methodology and report database.`);
  L.push(`- [Knowledge Hub](${SITES.knowledge}/): Buyer education and sourcing guides.`);
  L.push('');
  L.push('## Notes');
  L.push(`- Brand: ${BRAND}. Product entries are added only after supplier verification.`);
  return new Response(L.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
