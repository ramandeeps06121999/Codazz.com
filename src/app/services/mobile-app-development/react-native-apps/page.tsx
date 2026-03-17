import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'React Native App Development',
  description: 'React Native app development services by Codazz. Build cross-platform mobile apps with native performance using JavaScript and React.',
  openGraph: {
    title: 'React Native App Development | Codazz',
    description: 'React Native app development services by Codazz. Build cross-platform mobile apps with native performance using JavaScript and React.',
    url: 'https://codazz.com/services/mobile-app-development/react-native-apps',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/mobile-app-development/react-native-apps',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "React Native Apps",
  "url": "https://codazz.com/services/mobile-app-development/react-native-apps",
  "description": "React Native app development services by Codazz. Build cross-platform mobile apps with native performance using JavaScript and React.",
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
  "serviceType": "React Native Apps",
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
      "name": "React Native Apps",
      "item": "https://codazz.com/services/mobile-app-development/react-native-apps"
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
