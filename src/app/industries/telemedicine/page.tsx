import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Telemedicine & Digital Health App Development | Codazz',
  description: 'Telemedicine and digital health platforms by Codazz. HIPAA-compliant video consultations, EHR integrations & patient portals for American healthcare. Get a free quote.',
  openGraph: {
    title: 'Telemedicine & Digital Health App Development | Codazz',
    description: 'Telemedicine and digital health platforms by Codazz. HIPAA-compliant video consultations, EHR integrations & patient portals for American healthcare.',
    url: 'https://codazz.com/industries/telemedicine',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/telemedicine',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Telemedicine & Digital Health App Development",
  "url": "https://codazz.com/industries/telemedicine",
  "description": "Telemedicine and digital health platforms by Codazz. HIPAA-compliant video consultations, EHR integrations & patient portals for American healthcare. Get a free quote.",
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
    "audienceType": "Healthcare companies, hospitals and telemedicine startups"
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
      "name": "Telemedicine",
      "item": "https://codazz.com/industries/telemedicine"
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
