import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Logistics Software Development | Codazz',
  description: 'Logistics & supply chain software by Codazz. Fleet management, route optimization & tracking for American logistics. Get a free project estimate.',
  openGraph: {
    title: 'Logistics Software Development | Codazz',
    description: 'Logistics & supply chain software by Codazz. Fleet management, route optimization & tracking for American logistics.',
    url: 'https://codazz.com/industries/logistics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/logistics',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Logistics Software Development",
  "url": "https://codazz.com/industries/logistics",
  "description": "Logistics & supply chain software by Codazz. Fleet management, route optimization & tracking for American logistics. Get a free project estimate.",
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
  "audience": {
    "@type": "Audience",
    "audienceType": "Logistics companies and startups"
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
      "name": "Industries",
      "item": "https://codazz.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Logistics",
      "item": "https://codazz.com/industries/logistics"
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
