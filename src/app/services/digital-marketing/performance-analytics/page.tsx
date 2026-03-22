import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Performance Analytics & GA4 Setup Services | Codazz',
  description: 'GA4 setup, conversion tracking, attribution modeling, and custom dashboards. Certified analytics specialists serving San Francisco and United States. 30% avg CPA reduction.',
  openGraph: {
    title: 'Performance Analytics & GA4 Setup | Codazz',
    description: 'GA4 setup, conversion tracking, attribution modeling, and custom dashboards. Certified analytics specialists serving San Francisco and United States.',
    url: 'https://codazz.com/services/digital-marketing/performance-analytics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/digital-marketing/performance-analytics',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Performance Analytics",
  "url": "https://codazz.com/services/digital-marketing/performance-analytics",
  "description": "GA4 setup, conversion tracking, attribution modeling, and custom dashboards. Certified analytics specialists serving San Francisco and United States. 30% avg CPA reduction.",
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
  "serviceType": "Performance Analytics",
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
      "name": "Performance Analytics",
      "item": "https://codazz.com/services/digital-marketing/performance-analytics"
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
