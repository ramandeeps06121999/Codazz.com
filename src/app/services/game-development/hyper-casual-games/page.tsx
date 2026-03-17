import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hyper-Casual Game Development Services',
  description: 'We build and publish hyper-casual games fast — from 3-day prototypes to CPI-validated launches. 50M+ downloads shipped by our San Francisco-based game studio.',
  openGraph: {
    title: 'Hyper-Casual Game Development | Codazz',
    description: 'Rapid hyper-casual game prototyping, CPI testing, and publishing. 40+ games shipped with 50M+ downloads.',
    url: 'https://codazz.com/services/game-development/hyper-casual-games',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/game-development/hyper-casual-games',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hyper-Casual Games",
  "url": "https://codazz.com/services/game-development/hyper-casual-games",
  "description": "We build and publish hyper-casual games fast \u2014 from 3-day prototypes to CPI-validated launches. 50M+ downloads shipped by our San Francisco-based game studio.",
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
  "serviceType": "Hyper-Casual Games",
  "isPartOf": {
    "@type": "Service",
    "name": "Game Development",
    "url": "https://codazz.com/services/game-development"
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
      "name": "Game Development",
      "item": "https://codazz.com/services/game-development"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Hyper-Casual Games",
      "item": "https://codazz.com/services/game-development/hyper-casual-games"
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
