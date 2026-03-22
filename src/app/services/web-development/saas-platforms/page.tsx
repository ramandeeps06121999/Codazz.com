import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Platform Development | Codazz',
  description: 'Custom SaaS platform development services. Codazz builds scalable, multi-tenant software-as-a-service applications from concept to launch.',
  openGraph: {
    title: 'SaaS Platform Development | Codazz',
    description: 'Custom SaaS platform development services. Codazz builds scalable, multi-tenant software-as-a-service applications from concept to launch.',
    url: 'https://codazz.com/services/web-development/saas-platforms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/web-development/saas-platforms',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Platforms",
  "url": "https://codazz.com/services/web-development/saas-platforms",
  "description": "Custom SaaS platform development services. Codazz builds scalable, multi-tenant software-as-a-service applications from concept to launch.",
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
  "serviceType": "SaaS Platforms",
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
      "name": "SaaS Platforms",
      "item": "https://codazz.com/services/web-development/saas-platforms"
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
