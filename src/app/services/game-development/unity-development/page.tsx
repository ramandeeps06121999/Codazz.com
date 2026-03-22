import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Unity Game Development Services | Codazz',
  description: 'Expert Unity game development with deep C# skills. 80+ projects across mobile, PC, and console. HDRP, URP, multiplayer, and cross-platform game studio in the US.',
  openGraph: {
    title: 'Unity Game Development Services | Codazz',
    description: 'Expert Unity game development with deep C# skills. 80+ projects across mobile, PC, and console. HDRP, URP, and multiplayer.',
    url: 'https://codazz.com/services/game-development/unity-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/game-development/unity-development',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Unity Development",
  "url": "https://codazz.com/services/game-development/unity-development",
  "description": "Expert Unity game development with deep C# skills. 80+ projects across mobile, PC, and console. HDRP, URP, multiplayer, and cross-platform game studio in the US.",
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
  "serviceType": "Unity Development",
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
      "name": "Unity Development",
      "item": "https://codazz.com/services/game-development/unity-development"
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
