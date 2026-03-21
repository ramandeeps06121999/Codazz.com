import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'E-Commerce App Development Company | Shopify, Custom & Headless | Codazz',
  description: 'Codazz builds high-performance e-commerce platforms — headless storefronts, D2C stores, B2B portals, marketplaces, and subscription commerce. PCI DSS compliant. Get a free quote.',
  openGraph: {
    title: 'E-Commerce App Development Company | Shopify, Custom & Headless | Codazz',
    description: 'Codazz builds high-performance e-commerce platforms — headless storefronts, D2C stores, B2B portals, marketplaces, and subscription commerce. PCI DSS compliant.',
    url: 'https://codazz.com/industries/ecommerce',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/ecommerce',
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Commerce App Development",
  "url": "https://codazz.com/industries/ecommerce",
  "description": "Codazz builds high-performance e-commerce platforms — headless storefronts, D2C stores, B2B portals, marketplaces, and subscription commerce. PCI DSS compliant.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "United Kingdom" }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "E-commerce brands, D2C startups, B2B retailers, marketplace operators"
  },
  "serviceType": "E-Commerce Software Development",
  "offers": {
    "@type": "Offer",
    "description": "Custom e-commerce development starting from $15,000"
  }
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://codazz.com/industries" },
    { "@type": "ListItem", "position": 3, "name": "E-Commerce", "item": "https://codazz.com/industries/ecommerce" }
  ]
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a custom e-commerce platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom e-commerce development at Codazz starts at $15,000 for a Shopify-based store and ranges to $150,000+ for a fully custom headless commerce platform with AI merchandising, multi-vendor marketplace functionality, and ERP integrations. We offer fixed-price sprints so you always know what you're spending."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build Shopify stores or fully custom platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both. We build Shopify and Shopify Plus stores with custom themes and apps, headless storefronts powered by Next.js with Shopify as the backend, and fully custom platforms using Commercetools, Medusa, or bespoke architectures when your requirements go beyond what Shopify supports."
      }
    },
    {
      "@type": "Question",
      "name": "Is your e-commerce development PCI DSS compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All payment flows we build are PCI DSS compliant. We use tokenization via Stripe, Adyen, or Braintree to ensure cardholder data never touches your servers. We also implement GDPR-compliant data handling for international storefronts."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle Black Friday scale traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We architect for your peak day, not your average day. Our platforms use auto-scaling cloud infrastructure, edge caching via CDN, database read replicas, and queue-based order processing to handle 500,000+ concurrent users without degradation."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a custom e-commerce platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Shopify-based store can launch in 4–8 weeks. A headless commerce platform with custom backend takes 3–5 months. A full marketplace with multi-vendor support, custom payment splitting, and admin dashboards typically requires 5–8 months. We deliver in sprints with working software every two weeks."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
    </>
  );
}
