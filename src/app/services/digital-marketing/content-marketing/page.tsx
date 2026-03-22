import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Content Marketing Services | Codazz',
  description: 'Strategic content marketing that drives organic traffic and conversions. Blog writing, video, email, and content distribution for American brands. 400% avg growth.',
  openGraph: {
    title: 'Content Marketing Services | Codazz',
    description: 'Strategic content marketing that drives organic traffic and conversions. Blog writing, video, email, and content distribution for American brands.',
    url: 'https://codazz.com/services/digital-marketing/content-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/digital-marketing/content-marketing',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Content Marketing",
  "url": "https://codazz.com/services/digital-marketing/content-marketing",
  "description": "Strategic content marketing that drives organic traffic and conversions. Blog writing, video, email, and content distribution for American brands. 400% avg growth.",
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
  "serviceType": "Content Marketing",
  "isPartOf": {
    "@type": "Service",
    "name": "Digital Marketing",
    "url": "https://codazz.com/services/digital-marketing"
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
      "name": "Digital Marketing",
      "item": "https://codazz.com/services/digital-marketing"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Content Marketing",
      "item": "https://codazz.com/services/digital-marketing/content-marketing"
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
