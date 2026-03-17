import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Healthcare Software Development | Codazz',
  description: 'HIPAA-compliant healthcare software by Codazz. Telehealth, EHR & patient portals for American healthcare providers. Book a free consultation.',
  openGraph: {
    title: 'Healthcare Software Development | Codazz',
    description: 'HIPAA-compliant healthcare software by Codazz. Telehealth, EHR & patient portals for American healthcare providers.',
    url: 'https://codazz.com/industries/healthcare',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/healthcare',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Healthcare Software Development",
  "url": "https://codazz.com/industries/healthcare",
  "description": "HIPAA-compliant healthcare software by Codazz. Telehealth, EHR & patient portals for American healthcare providers. Book a free consultation.",
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
    "audienceType": "Healthcare companies and startups"
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
      "name": "Healthcare",
      "item": "https://codazz.com/industries/healthcare"
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
