import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Cross-Platform App Development | Codazz',
  description: 'Cross-platform mobile app development services. Codazz builds apps that run on iOS and Android with shared codebases and native performance.',
  openGraph: {
    title: 'Cross-Platform App Development | Codazz',
    description: 'Cross-platform mobile app development services. Codazz builds apps that run on iOS and Android with shared codebases and native performance.',
    url: 'https://codazz.com/services/mobile-app-development/cross-platform-apps',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/mobile-app-development/cross-platform-apps',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cross-Platform Apps",
  "url": "https://codazz.com/services/mobile-app-development/cross-platform-apps",
  "description": "Cross-platform mobile app development services. Codazz builds apps that run on iOS and Android with shared codebases and native performance.",
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
  "serviceType": "Cross-Platform Apps",
  "isPartOf": {
    "@type": "Service",
    "name": "Mobile App Development",
    "url": "https://codazz.com/services/mobile-app-development"
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
      "name": "Mobile App Development",
      "item": "https://codazz.com/services/mobile-app-development"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Cross-Platform Apps",
      "item": "https://codazz.com/services/mobile-app-development/cross-platform-apps"
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
