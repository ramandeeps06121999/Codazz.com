import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Motion & Video Branding | Codazz',
  description: 'Motion graphics and video branding by Codazz. Animated logos, brand videos, social media content, and product demos that captivate audiences.',
  openGraph: {
    title: 'Motion & Video Branding | Codazz',
    description: 'Motion graphics and video branding by Codazz. Animated logos, brand videos, social media content, and product demos that captivate audiences.',
    url: 'https://codazz.com/services/branding/motion-video-branding',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/branding/motion-video-branding',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Motion & Video Branding",
  "url": "https://codazz.com/services/branding/motion-video-branding",
  "description": "Motion graphics and video branding by Codazz. Animated logos, brand videos, social media content, and product demos that captivate audiences.",
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
  "serviceType": "Motion & Video Branding",
  "isPartOf": {
    "@type": "Service",
    "name": "Branding",
    "url": "https://codazz.com/services/branding"
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
      "name": "Branding",
      "item": "https://codazz.com/services/branding"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Motion & Video Branding",
      "item": "https://codazz.com/services/branding/motion-video-branding"
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
