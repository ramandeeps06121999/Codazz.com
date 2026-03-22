import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Mobile Game Development Services | Codazz',
  description: 'Professional mobile game development for iOS and Android. From hyper-casual to mid-core games with proven monetization. 50+ games shipped, 10M+ downloads.',
  openGraph: {
    title: 'Mobile Game Development | Codazz',
    description: 'Professional mobile game development for iOS and Android. From hyper-casual to mid-core games with proven monetization. 50+ games shipped.',
    url: 'https://codazz.com/services/game-development/mobile-games',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/game-development/mobile-games',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile Games",
  "url": "https://codazz.com/services/game-development/mobile-games",
  "description": "Professional mobile game development for iOS and Android. From hyper-casual to mid-core games with proven monetization. 50+ games shipped, 10M+ downloads.",
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
  "serviceType": "Mobile Games",
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
      "name": "Mobile Games",
      "item": "https://codazz.com/services/game-development/mobile-games"
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
