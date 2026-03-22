import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Apple Vision Pro App Development | Codazz',
  description: 'visionOS app development with SwiftUI and RealityKit. Codazz builds spatial computing apps for Apple Vision Pro from San Francisco, United States.',
  openGraph: {
    title: 'Apple Vision Pro App Development | Codazz',
    description: 'visionOS app development with SwiftUI and RealityKit for spatial computing experiences.',
    url: 'https://codazz.com/services/ar-vr/apple-vision-pro',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ar-vr/apple-vision-pro',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Apple Vision Pro",
  "url": "https://codazz.com/services/ar-vr/apple-vision-pro",
  "description": "visionOS app development with SwiftUI and RealityKit. Codazz builds spatial computing apps for Apple Vision Pro from San Francisco, United States.",
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
  "serviceType": "Apple Vision Pro",
  "isPartOf": {
    "@type": "Service",
    "name": "AR & VR",
    "url": "https://codazz.com/services/ar-vr"
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
      "name": "AR & VR",
      "item": "https://codazz.com/services/ar-vr"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Apple Vision Pro",
      "item": "https://codazz.com/services/ar-vr/apple-vision-pro"
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
