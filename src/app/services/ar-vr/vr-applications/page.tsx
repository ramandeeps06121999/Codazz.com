import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'VR Application Development',
  description: 'Virtual reality application development for Meta Quest, HTC Vive, and enterprise. Codazz creates immersive VR training and experiences.',
  openGraph: {
    title: 'VR Application Development | Codazz',
    description: 'Virtual reality application development for Meta Quest, HTC Vive, and enterprise. Codazz creates immersive VR training and experiences.',
    url: 'https://codazz.com/services/ar-vr/vr-applications',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ar-vr/vr-applications',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "VR Applications",
  "url": "https://codazz.com/services/ar-vr/vr-applications",
  "description": "Virtual reality application development for Meta Quest, HTC Vive, and enterprise. Codazz creates immersive VR training and experiences.",
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
  "serviceType": "VR Applications",
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
      "name": "VR Applications",
      "item": "https://codazz.com/services/ar-vr/vr-applications"
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
