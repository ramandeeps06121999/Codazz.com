import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Enterprise Portal Development Services | Codazz',
  description: 'Secure, SOC2-compliant enterprise portals with SSO, RBAC, and workflow automation. Built by Codazz in San Francisco for 10,000+ daily active users.',
  openGraph: {
    title: 'Enterprise Portal Development | Codazz',
    description: 'Custom enterprise portals with SSO integration, role-based access, audit logging, and workflow automation.',
    url: 'https://codazz.com/services/web-development/enterprise-portals',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/web-development/enterprise-portals',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Portals",
  "url": "https://codazz.com/services/web-development/enterprise-portals",
  "description": "Secure, SOC2-compliant enterprise portals with SSO, RBAC, and workflow automation. Built by Codazz in San Francisco for 10,000+ daily active users.",
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
  "serviceType": "Enterprise Portals",
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
      "name": "Enterprise Portals",
      "item": "https://codazz.com/services/web-development/enterprise-portals"
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
