import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Flutter App Development Services',
  description: 'Cross-platform Flutter app development by Codazz. Build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.',
  openGraph: {
    title: 'Flutter App Development Services | Codazz',
    description: 'Cross-platform Flutter app development by Codazz. Build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.',
    url: 'https://codazz.com/services/mobile-app-development/flutter-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/mobile-app-development/flutter-development',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Flutter Development",
  "url": "https://codazz.com/services/mobile-app-development/flutter-development",
  "description": "Cross-platform Flutter app development by Codazz. Build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.",
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
  "serviceType": "Flutter Development",
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
      "name": "Flutter Development",
      "item": "https://codazz.com/services/mobile-app-development/flutter-development"
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
