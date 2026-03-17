import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Brand Identity Design Services | San Francisco',
  description: 'Custom brand identity design by Codazz. Logo design, visual identity systems, and brand guidelines for American startups and enterprises. 100+ brands created.',
  openGraph: {
    title: 'Brand Identity Design Services | Codazz',
    description: 'Custom brand identity design by Codazz. Logo design, visual identity systems, and brand guidelines for American startups and enterprises. 100+ brands created.',
    url: 'https://codazz.com/services/product-design/brand-identity',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/product-design/brand-identity',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Brand Identity",
  "url": "https://codazz.com/services/product-design/brand-identity",
  "description": "Custom brand identity design by Codazz. Logo design, visual identity systems, and brand guidelines for American startups and enterprises. 100+ brands created.",
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
  "serviceType": "Brand Identity",
  "isPartOf": {
    "@type": "Service",
    "name": "Product Design",
    "url": "https://codazz.com/services/product-design"
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
      "name": "Product Design",
      "item": "https://codazz.com/services/product-design"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Brand Identity",
      "item": "https://codazz.com/services/product-design/brand-identity"
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
