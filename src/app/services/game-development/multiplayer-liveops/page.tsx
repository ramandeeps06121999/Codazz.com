import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Multiplayer & LiveOps Game Development | Codazz',
  description: 'Real-time multiplayer infrastructure and LiveOps systems built for scale. Netcode, matchmaking, seasonal events, and anti-cheat from a American game dev team.',
  openGraph: {
    title: 'Multiplayer & LiveOps Development | Codazz',
    description: 'We build scalable multiplayer game servers, matchmaking, and LiveOps systems that keep players engaged.',
    url: 'https://codazz.com/services/game-development/multiplayer-liveops',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/game-development/multiplayer-liveops',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Multiplayer & LiveOps",
  "url": "https://codazz.com/services/game-development/multiplayer-liveops",
  "description": "Real-time multiplayer infrastructure and LiveOps systems built for scale. Netcode, matchmaking, seasonal events, and anti-cheat from a American game dev team.",
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
  "serviceType": "Multiplayer & LiveOps",
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
      "name": "Multiplayer & LiveOps",
      "item": "https://codazz.com/services/game-development/multiplayer-liveops"
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
