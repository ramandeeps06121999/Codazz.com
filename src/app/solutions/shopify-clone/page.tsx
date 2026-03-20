import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Build an Ecommerce Platform Like Shopify | Codazz',
  description: 'Build an ecommerce platform like Shopify with Codazz. Multi-vendor marketplace, payment gateways, inventory management, analytics dashboard & custom themes. Get a free quote.',
  openGraph: {
    title: 'Build an Ecommerce Platform Like Shopify | Codazz',
    description: 'Build an ecommerce platform like Shopify with Codazz. Multi-vendor marketplace, payment gateways, inventory management & analytics dashboard.',
    url: 'https://codazz.com/solutions/shopify-clone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/solutions/shopify-clone',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ecommerce Platform Development Like Shopify",
  "url": "https://codazz.com/solutions/shopify-clone",
  "description": "Build an ecommerce platform like Shopify with Codazz. Multi-vendor marketplace, payment gateways, inventory management & analytics dashboard.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Entrepreneurs and businesses building ecommerce platforms"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://codazz.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "Shopify Clone", "item": "https://codazz.com/solutions/shopify-clone" }
  ]
};

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build an ecommerce platform like Shopify?",
      "acceptedAnswer": { "@type": "Answer", "text": "Building a Shopify-like ecommerce platform typically costs between $80,000 and $250,000. A basic multi-vendor marketplace MVP starts around $80,000, while a full platform with theme engine, app ecosystem, payment processing, and analytics ranges from $150,000 to $250,000." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a Shopify-like platform?",
      "acceptedAnswer": { "@type": "Answer", "text": "An MVP with core store builder, product management, and checkout takes 4-5 months. A full-featured platform with multi-vendor support, theme marketplace, and advanced analytics takes 7-10 months." }
    },
    {
      "@type": "Question",
      "name": "Can you integrate multiple payment gateways?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate Stripe, PayPal, Square, and region-specific gateways. Our platform supports multi-currency transactions, subscription billing, and split payments for multi-vendor marketplaces." }
    },
    {
      "@type": "Question",
      "name": "Will the platform scale to handle high traffic?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We architect for scale from day one using microservices, CDN-backed asset delivery, database sharding, and auto-scaling infrastructure that handles traffic spikes like Black Friday sales." }
    },
    {
      "@type": "Question",
      "name": "Can sellers customize their storefronts?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build a theme engine with drag-and-drop customization, custom CSS support, and a library of pre-built templates so sellers can brand their stores without writing code." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }} />
    </>
  );
}
