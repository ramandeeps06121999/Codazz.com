import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Authentication & SSO Development',
  description: 'Enterprise-ready auth with SAML SSO, MFA, RBAC, and audit logs for SaaS products. Codazz builds secure auth systems from San Francisco, United States.',
  openGraph: {
    title: 'SaaS Authentication & SSO Development | Codazz',
    description: 'Enterprise-ready auth with SAML SSO, MFA, RBAC, and audit logs for SaaS products.',
    url: 'https://codazz.com/services/saas-development/auth-sso',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/saas-development/auth-sso',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Authentication & SSO",
  "url": "https://codazz.com/services/saas-development/auth-sso",
  "description": "Enterprise-ready auth with SAML SSO, MFA, RBAC, and audit logs for SaaS products. Codazz builds secure auth systems from San Francisco, United States.",
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
  "serviceType": "Authentication & SSO",
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
      "name": "Authentication & SSO",
      "item": "https://codazz.com/services/saas-development/auth-sso"
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
