import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Analytics & Dashboard Development | Codazz',
  description: 'Product analytics, MRR dashboards, and embedded customer analytics for SaaS. Codazz builds data-driven SaaS tools from San Francisco, United States.',
  openGraph: {
    title: 'SaaS Analytics & Dashboard Development | Codazz',
    description: 'Product analytics, MRR dashboards, and embedded customer analytics for SaaS.',
    url: 'https://codazz.com/services/saas-development/analytics-dashboards',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/saas-development/analytics-dashboards',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Analytics Dashboards",
  "url": "https://codazz.com/services/saas-development/analytics-dashboards",
  "description": "Product analytics, MRR dashboards, and embedded customer analytics for SaaS. Codazz builds data-driven SaaS tools from San Francisco, United States.",
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
  "serviceType": "Analytics Dashboards",
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
      "name": "Analytics Dashboards",
      "item": "https://codazz.com/services/saas-development/analytics-dashboards"
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
