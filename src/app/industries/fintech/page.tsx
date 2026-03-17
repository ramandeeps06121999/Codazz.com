import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Fintech Software Development | Codazz',
  description: 'Fintech software by Codazz. Payment platforms, banking apps & compliant trading systems for American finance. Request a free technical proposal.',
  openGraph: {
    title: 'Fintech Software Development | Codazz',
    description: 'Fintech software by Codazz. Payment platforms, banking apps & compliant trading systems for American finance.',
    url: 'https://codazz.com/industries/fintech',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/fintech',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fintech Software Development",
  "url": "https://codazz.com/industries/fintech",
  "description": "Fintech software by Codazz. Payment platforms, banking apps & compliant trading systems for American finance. Request a free technical proposal.",
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
    "audienceType": "Fintech companies and startups"
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
      "name": "Fintech",
      "item": "https://codazz.com/industries/fintech"
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
