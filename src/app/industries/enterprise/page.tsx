import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Enterprise Software Development | Codazz',
  description: 'Enterprise software by Codazz. ERP, CRM, workflow automation & BI solutions at scale for American enterprises. Schedule a free consultation today.',
  openGraph: {
    title: 'Enterprise Software Development | Codazz',
    description: 'Enterprise software by Codazz. ERP, CRM, workflow automation & BI solutions at scale for American enterprises.',
    url: 'https://codazz.com/industries/enterprise',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/enterprise',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Software Development",
  "url": "https://codazz.com/industries/enterprise",
  "description": "Enterprise software by Codazz. ERP, CRM, workflow automation & BI solutions at scale for American enterprises. Schedule a free consultation today.",
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
  "audience": {
    "@type": "Audience",
    "audienceType": "Enterprise companies and startups"
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
      "name": "Industries",
      "item": "https://codazz.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Enterprise",
      "item": "https://codazz.com/industries/enterprise"
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
