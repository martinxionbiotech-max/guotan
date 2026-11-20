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
  L.push(`- [Request a Quote](${base}/request-quote/): Structured quote request — product, size, volume, packaging, destination port.`);
  L.push(`- [Request Samples](${base}/request-sample/): Sample request form.`);
  L.push(`- [About](${base}/about/): Operating entity, platform role and principles.`);
  L.push(`- [Editorial & Data Standards](${base}/editorial-standards/): Evidence labels, what the site will not publish, and the corrections route.`);
  L.push(`- [Coconut Shell Charcoal Guide](${base}/coconut-shell-charcoal-guide/): Specification and buyer's guide.`);
  L.push(`- [Hookah Charcoal Manufacturing](${base}/hookah-charcoal-manufacturing/): Process, density and consistency.`);
  L.push(`- [Charcoal Testing & COA Guide](${base}/charcoal-testing-coa-guide/): What buyers can verify.`);
  L.push(`- [Private Label & OEM Guide](${base}/private-label-oem-charcoal-guide/): Specification to shipment.`);
  L.push('');
  L.push('## Sub-sites');
  L.push(`- [Product Database](${SITES.data}/): Structured product and specification data.`);
  L.push(`- [Manufacturer Intelligence](${SITES.manufacturer}/): Supplier qualification and verification.`);
  L.push(`- [Testing Intelligence](${SITES.testing}/): Test methodology and report database.`);
  L.push(`- [Knowledge Hub](${SITES.knowledge}/): Buyer education and sourcing guides.`);
  L.push('');
  L.push('## Notes');
  L.push(`- Brand: ${BRAND}. Every product, manufacturer and testing record states its verification status; missing values are labelled data pending rather than filled.`);
  L.push(`- Prices and stock are not published: charcoal is quoted per specification, packaging and volume through the request-quote route.`);
  return new Response(L.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
