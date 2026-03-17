import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Brand Strategy Services',
  description: 'Strategic brand strategy consulting by Codazz. Market positioning, competitive analysis, and brand architecture for lasting market impact.',
  openGraph: {
    title: 'Brand Strategy Services | Codazz',
    description: 'Strategic brand strategy consulting by Codazz. Market positioning, competitive analysis, and brand architecture for lasting market impact.',
    url: 'https://codazz.com/services/branding/brand-strategy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/branding/brand-strategy',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Brand Strategy",
  "url": "https://codazz.com/services/branding/brand-strategy",
  "description": "Strategic brand strategy consulting by Codazz. Market positioning, competitive analysis, and brand architecture for lasting market impact.",
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
  "serviceType": "Brand Strategy",
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
      "name": "Brand Strategy",
      "item": "https://codazz.com/services/branding/brand-strategy"
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
