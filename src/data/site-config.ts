import type { SiteConfig } from './site-config';

export const site: SiteConfig = {
  siteKey: 'main',
  name: 'Charcoal Hub',
  shortName: 'Charcoal Hub',
  description:
    'Coconut shell charcoal supplier for global B2B buyers — natural hookah charcoal, BBQ charcoal and private-label solutions sourced from qualified manufacturers in China.',
  nav: [
    { label: 'Products', href: '/products/' },
    { label: 'Private Label', href: '/private-label/' },
    { label: 'Testing', href: '/testing/' },
    { label: 'Packaging', href: '/packaging/' },
    { label: 'Manufacturing', href: '/manufacturing/' },
    { label: 'Knowledge', href: '/knowledge/' },
    { label: 'About', href: '/about/' },
    { label: 'Request a Quote', href: '/contact/' },
  ],
  footerCols: [
    {
      title: 'Products',
      links: [
        { label: 'Coconut Shell Charcoal', href: '/products/coconut-shell-charcoal/' },
        { label: 'Hookah Charcoal', href: '/products/hookah-charcoal/' },
        { label: 'BBQ Charcoal', href: '/products/bbq-charcoal/' },
        { label: 'Bamboo Charcoal', href: '/products/bamboo-charcoal/' },
        { label: 'All Products', href: '/products/' },
      ],
    },
    {
      title: 'Sourcing',
      links: [
        { label: 'Private Label', href: '/private-label/' },
        { label: 'OEM', href: '/oem/' },
        { label: 'Manufacturing', href: '/manufacturing/' },
        { label: 'Export', href: '/export/' },
        { label: 'Request Samples', href: '/request-sample/' },
      ],
    },
    {
      title: 'Quality & Data',
      links: [
        { label: 'Testing', href: '/testing/' },
        { label: 'Packaging', href: '/packaging/' },
        { label: 'Compliance', href: '/compliance/' },
        { label: 'Specifications', href: '/products/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about/' },
        { label: 'Contact', href: '/contact/' },
        { label: 'Knowledge', href: '/knowledge/' },
        { label: 'Request a Quote', href: '/contact/' },
      ],
    },
  ],
};
