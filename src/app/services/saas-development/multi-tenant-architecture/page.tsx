import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Multi-Tenant SaaS Architecture | San Francisco',
  description: 'Scalable multi-tenant architecture with tenant isolation, RBAC, and custom domains. Codazz builds enterprise SaaS platforms from San Francisco, United States.',
  openGraph: {
    title: 'Multi-Tenant SaaS Architecture | Codazz',
    description: 'Scalable multi-tenant architecture with tenant isolation, RBAC, and custom domains.',
    url: 'https://codazz.com/services/saas-development/multi-tenant-architecture',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/saas-development/multi-tenant-architecture',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Multi-Tenant Architecture",
  "url": "https://codazz.com/services/saas-development/multi-tenant-architecture",
  "description": "Scalable multi-tenant architecture with tenant isolation, RBAC, and custom domains. Codazz builds enterprise SaaS platforms from San Francisco, United States.",
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
  "serviceType": "Multi-Tenant Architecture",
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
      "name": "Multi-Tenant Architecture",
      "item": "https://codazz.com/services/saas-development/multi-tenant-architecture"
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
