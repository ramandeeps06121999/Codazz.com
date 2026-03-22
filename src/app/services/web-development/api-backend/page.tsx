import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'API & Backend Development Services | Codazz',
  description: 'Scalable REST and GraphQL APIs with sub-100ms latency and 99.9% uptime. Secure backend engineering by Codazz, San Francisco. 200+ APIs delivered.',
  openGraph: {
    title: 'API & Backend Development | Codazz',
    description: 'We design and build robust REST and GraphQL APIs with bulletproof security and enterprise-grade performance.',
    url: 'https://codazz.com/services/web-development/api-backend',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/web-development/api-backend',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "API & Backend Development",
  "url": "https://codazz.com/services/web-development/api-backend",
  "description": "Scalable REST and GraphQL APIs with sub-100ms latency and 99.9% uptime. Secure backend engineering by Codazz, San Francisco. 200+ APIs delivered.",
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
  "serviceType": "API & Backend Development",
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
      "name": "API & Backend Development",
      "item": "https://codazz.com/services/web-development/api-backend"
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
