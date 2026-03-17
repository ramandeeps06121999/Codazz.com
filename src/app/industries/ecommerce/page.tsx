import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'E-Commerce Software Development | Codazz',
  description: 'Custom e-commerce solutions by Codazz. Online marketplaces, payment processing & omnichannel retail for American businesses. Get a free quote.',
  openGraph: {
    title: 'E-Commerce Software Development | Codazz',
    description: 'Custom e-commerce solutions by Codazz. Online marketplaces, payment processing & omnichannel retail for American businesses.',
    url: 'https://codazz.com/industries/ecommerce',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/ecommerce',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Commerce Software Development",
  "url": "https://codazz.com/industries/ecommerce",
  "description": "Custom e-commerce solutions by Codazz. Online marketplaces, payment processing & omnichannel retail for American businesses. Get a free quote.",
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
    "audienceType": "E-Commerce companies and startups"
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
      "name": "E-Commerce",
      "item": "https://codazz.com/industries/ecommerce"
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
