import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'OTT Streaming & Entertainment App Development | Codazz',
  description: 'OTT streaming and entertainment platforms by Codazz. Video-on-demand, live streaming & content management systems for American media companies. Get a free quote.',
  openGraph: {
    title: 'OTT Streaming & Entertainment App Development | Codazz',
    description: 'OTT streaming and entertainment platforms by Codazz. Video-on-demand, live streaming & content management systems for American media companies.',
    url: 'https://codazz.com/industries/streaming-entertainment',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/streaming-entertainment',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "OTT Streaming & Entertainment App Development",
  "url": "https://codazz.com/industries/streaming-entertainment",
  "description": "OTT streaming and entertainment platforms by Codazz. Video-on-demand, live streaming & content management systems for American media companies. Get a free quote.",
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
    "audienceType": "Streaming and entertainment companies and startups"
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
      "name": "Streaming & Entertainment",
      "item": "https://codazz.com/industries/streaming-entertainment"
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
