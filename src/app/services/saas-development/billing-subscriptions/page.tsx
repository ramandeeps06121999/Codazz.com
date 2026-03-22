import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Billing & Subscription Integration | Codazz',
  description: 'Stripe billing integration for SaaS with subscriptions, dunning, and self-serve portals. Codazz builds payment infrastructure from San Francisco, United States.',
  openGraph: {
    title: 'SaaS Billing & Subscription Integration | Codazz',
    description: 'Stripe billing integration for SaaS with subscriptions, dunning, and self-serve portals.',
    url: 'https://codazz.com/services/saas-development/billing-subscriptions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/saas-development/billing-subscriptions',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Billing & Subscriptions",
  "url": "https://codazz.com/services/saas-development/billing-subscriptions",
  "description": "Stripe billing integration for SaaS with subscriptions, dunning, and self-serve portals. Codazz builds payment infrastructure from San Francisco, United States.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  ],
  "serviceType": "Billing & Subscriptions",
  "isPartOf": {
    "@type": "Service",
    "name": "SaaS Development",
    "url": "https://codazz.com/services/saas-development"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://codazz.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://codazz.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SaaS Development",
      "item": "https://codazz.com/services/saas-development"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Billing & Subscriptions",
      "item": "https://codazz.com/services/saas-development/billing-subscriptions"
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
    </>
  );
}
