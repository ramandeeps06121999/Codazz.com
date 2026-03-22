import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Mobile AR Development | Codazz',
  description: 'Mobile augmented reality development with ARKit and ARCore. Codazz builds immersive AR experiences for iOS and Android applications.',
  openGraph: {
    title: 'Mobile AR Development | Codazz',
    description: 'Mobile augmented reality development with ARKit and ARCore. Codazz builds immersive AR experiences for iOS and Android applications.',
    url: 'https://codazz.com/services/ar-vr/mobile-ar',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ar-vr/mobile-ar',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile AR",
  "url": "https://codazz.com/services/ar-vr/mobile-ar",
  "description": "Mobile augmented reality development with ARKit and ARCore. Codazz builds immersive AR experiences for iOS and Android applications.",
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
  "serviceType": "Mobile AR",
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
      "name": "Mobile AR",
      "item": "https://codazz.com/services/ar-vr/mobile-ar"
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
