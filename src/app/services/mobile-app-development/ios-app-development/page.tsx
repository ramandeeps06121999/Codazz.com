import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'iOS App Development Services | Codazz',
  description: 'Expert iOS app development with Swift & SwiftUI. Codazz builds high-performance native iPhone and iPad apps. 200+ iOS apps delivered.',
  openGraph: {
    title: 'iOS App Development Services | Codazz',
    description: 'Expert iOS app development with Swift & SwiftUI. Codazz builds high-performance native iPhone and iPad apps. 200+ iOS apps delivered.',
    url: 'https://codazz.com/services/mobile-app-development/ios-app-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/mobile-app-development/ios-app-development',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "iOS App Development",
  "url": "https://codazz.com/services/mobile-app-development/ios-app-development",
  "description": "Expert iOS app development with Swift & SwiftUI. Codazz builds high-performance native iPhone and iPad apps. 200+ iOS apps delivered.",
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
  "serviceType": "iOS App Development",
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
      "name": "iOS App Development",
      "item": "https://codazz.com/services/mobile-app-development/ios-app-development"
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
