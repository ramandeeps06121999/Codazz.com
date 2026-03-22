import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Android App Development Services | Codazz',
  description: 'Professional Android app development with Kotlin & Jetpack Compose. Codazz creates scalable apps for phones, tablets, and foldables.',
  openGraph: {
    title: 'Android App Development Services | Codazz',
    description: 'Professional Android app development with Kotlin & Jetpack Compose. Codazz creates scalable apps for phones, tablets, and foldables.',
    url: 'https://codazz.com/services/mobile-app-development/android-app-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/mobile-app-development/android-app-development',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Android App Development",
  "url": "https://codazz.com/services/mobile-app-development/android-app-development",
  "description": "Professional Android app development with Kotlin & Jetpack Compose. Codazz creates scalable apps for phones, tablets, and foldables.",
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
  "serviceType": "Android App Development",
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
      "name": "Android App Development",
      "item": "https://codazz.com/services/mobile-app-development/android-app-development"
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
