import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Fantasy Sports & Betting App Development | Codazz',
  description: 'Fantasy sports and betting platforms by Codazz. Real-time scoring, contest engines & compliant wagering systems for American sports tech. Get a free quote.',
  openGraph: {
    title: 'Fantasy Sports & Betting App Development | Codazz',
    description: 'Fantasy sports and betting platforms by Codazz. Real-time scoring, contest engines & compliant wagering systems for American sports tech.',
    url: 'https://codazz.com/industries/fantasy-sports',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/fantasy-sports',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fantasy Sports & Betting App Development",
  "url": "https://codazz.com/industries/fantasy-sports",
  "description": "Fantasy sports and betting platforms by Codazz. Real-time scoring, contest engines & compliant wagering systems for American sports tech. Get a free quote.",
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
    "audienceType": "Fantasy sports and betting companies and startups"
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
      "name": "Fantasy Sports",
      "item": "https://codazz.com/industries/fantasy-sports"
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
