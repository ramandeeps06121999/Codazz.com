import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Grocery & Retail Delivery App Development | Codazz',
  description: 'Grocery and retail delivery platforms by Codazz. Online ordering, inventory management & last-mile delivery for American retailers. Request a free technical proposal.',
  openGraph: {
    title: 'Grocery & Retail Delivery App Development | Codazz',
    description: 'Grocery and retail delivery platforms by Codazz. Online ordering, inventory management & last-mile delivery for American retailers.',
    url: 'https://codazz.com/industries/grocery-retail',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/grocery-retail',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Grocery & Retail Delivery App Development",
  "url": "https://codazz.com/industries/grocery-retail",
  "description": "Grocery and retail delivery platforms by Codazz. Online ordering, inventory management & last-mile delivery for American retailers. Request a free technical proposal.",
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
    "audienceType": "Grocery and retail companies and startups"
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
      "name": "Grocery & Retail",
      "item": "https://codazz.com/industries/grocery-retail"
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
