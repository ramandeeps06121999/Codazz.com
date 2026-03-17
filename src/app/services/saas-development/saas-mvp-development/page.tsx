import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS MVP Development in 8 Weeks | San Francisco',
  description: 'Launch your SaaS MVP in 8 weeks with production-quality code. Codazz builds scalable MVPs for startups from San Francisco, United States.',
  openGraph: {
    title: 'SaaS MVP Development in 8 Weeks | Codazz',
    description: 'Launch your SaaS MVP in 8 weeks with production-quality code built to scale.',
    url: 'https://codazz.com/services/saas-development/saas-mvp-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/saas-development/saas-mvp-development',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS MVP Development",
  "url": "https://codazz.com/services/saas-development/saas-mvp-development",
  "description": "Launch your SaaS MVP in 8 weeks with production-quality code. Codazz builds scalable MVPs for startups from San Francisco, United States.",
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
  "serviceType": "SaaS MVP Development",
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
      "name": "SaaS MVP Development",
      "item": "https://codazz.com/services/saas-development/saas-mvp-development"
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
