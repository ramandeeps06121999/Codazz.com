import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SEO Services | Search Engine Optimization | Codazz',
  description: 'Results-driven SEO services in San Francisco & across 24 countries worldwide. Technical SEO, link building, local SEO, and content strategy. 200% avg organic traffic growth.',
  openGraph: {
    title: 'SEO Services San Francisco | Codazz',
    description: 'Results-driven SEO services in San Francisco & across 24 countries worldwide. Technical SEO, link building, local SEO, and content strategy.',
    url: 'https://codazz.com/services/digital-marketing/seo-services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/digital-marketing/seo-services',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO Services",
  "url": "https://codazz.com/services/digital-marketing/seo-services",
  "description": "Results-driven SEO services in San Francisco & across 24 countries worldwide. Technical SEO, link building, local SEO, and content strategy. 200% avg organic traffic growth.",
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
  "serviceType": "SEO Services",
  "isPartOf": {
    "@type": "Service",
    "name": "Digital Marketing",
    "url": "https://codazz.com/services/digital-marketing"
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
      "name": "Digital Marketing",
      "item": "https://codazz.com/services/digital-marketing"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "SEO Services",
      "item": "https://codazz.com/services/digital-marketing/seo-services"
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
