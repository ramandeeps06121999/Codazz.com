import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Brand Guidelines Development',
  description: 'Comprehensive brand guidelines by Codazz. Usage rules, asset libraries, and style guides that maintain brand consistency across all touchpoints.',
  openGraph: {
    title: 'Brand Guidelines Development | Codazz',
    description: 'Comprehensive brand guidelines by Codazz. Usage rules, asset libraries, and style guides that maintain brand consistency across all touchpoints.',
    url: 'https://codazz.com/services/branding/brand-guidelines',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/branding/brand-guidelines',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Brand Guidelines",
  "url": "https://codazz.com/services/branding/brand-guidelines",
  "description": "Comprehensive brand guidelines by Codazz. Usage rules, asset libraries, and style guides that maintain brand consistency across all touchpoints.",
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
  "serviceType": "Brand Guidelines",
  "isPartOf": {
    "@type": "Service",
    "name": "Branding",
    "url": "https://codazz.com/services/branding"
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
      "name": "Branding",
      "item": "https://codazz.com/services/branding"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Brand Guidelines",
      "item": "https://codazz.com/services/branding/brand-guidelines"
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
