import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'E-Commerce Development Services | United States',
  description: 'Custom e-commerce stores built to convert and scale. Shopify, headless commerce, and Next.js storefronts by Codazz in San Francisco. 80+ stores launched.',
  openGraph: {
    title: 'E-Commerce Development Services | Codazz',
    description: 'High-converting online stores with Shopify, headless commerce, and custom Next.js storefronts. $50M+ GMV processed.',
    url: 'https://codazz.com/services/web-development/ecommerce-systems',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/web-development/ecommerce-systems',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Commerce Systems",
  "url": "https://codazz.com/services/web-development/ecommerce-systems",
  "description": "Custom e-commerce stores built to convert and scale. Shopify, headless commerce, and Next.js storefronts by Codazz in San Francisco. 80+ stores launched.",
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
  "serviceType": "E-Commerce Systems",
  "isPartOf": {
    "@type": "Service",
    "name": "Web Development",
    "url": "https://codazz.com/services/web-development"
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
      "name": "Web Development",
      "item": "https://codazz.com/services/web-development"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "E-Commerce Systems",
      "item": "https://codazz.com/services/web-development/ecommerce-systems"
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
