import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Industrial AR Solutions | Codazz',
  description: 'Enterprise industrial AR for manufacturing and maintenance. HoloLens 2, digital twins, and IoT overlays by Codazz in San Francisco, United States.',
  openGraph: {
    title: 'Industrial AR Solutions | Codazz',
    description: 'Enterprise industrial AR for manufacturing and maintenance with HoloLens 2 and digital twins.',
    url: 'https://codazz.com/services/ar-vr/industrial-ar',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ar-vr/industrial-ar',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Industrial AR",
  "url": "https://codazz.com/services/ar-vr/industrial-ar",
  "description": "Enterprise industrial AR for manufacturing and maintenance. HoloLens 2, digital twins, and IoT overlays by Codazz in San Francisco, United States.",
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
  "serviceType": "Industrial AR",
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
      "name": "Industrial AR",
      "item": "https://codazz.com/services/ar-vr/industrial-ar"
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
