import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Unreal Engine 5 Development | AAA Game Studio',
  description: 'Unreal Engine 5 game development with Lumen, Nanite, and Chaos Physics. AAA-quality games, simulations, and archviz. 30+ UE5 projects delivered in the US.',
  openGraph: {
    title: 'Unreal Engine 5 Development | Codazz',
    description: 'Unreal Engine 5 game development with Lumen, Nanite, and Chaos Physics. AAA-quality games, simulations, and architectural visualization.',
    url: 'https://codazz.com/services/game-development/unreal-engine',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/game-development/unreal-engine',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Unreal Engine",
  "url": "https://codazz.com/services/game-development/unreal-engine",
  "description": "Unreal Engine 5 game development with Lumen, Nanite, and Chaos Physics. AAA-quality games, simulations, and archviz. 30+ UE5 projects delivered in the US.",
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
  "serviceType": "Unreal Engine",
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
      "name": "Unreal Engine",
      "item": "https://codazz.com/services/game-development/unreal-engine"
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
