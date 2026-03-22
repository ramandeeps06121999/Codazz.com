import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | Codazz',
  description: 'Full-service social media marketing in San Francisco. Strategy, content creation, community management, and paid social campaigns. 50M+ impressions generated.',
  openGraph: {
    title: 'Social Media Marketing Services | Codazz',
    description: 'Full-service social media marketing in San Francisco. Strategy, content creation, community management, and paid social campaigns.',
    url: 'https://codazz.com/services/digital-marketing/social-media-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/digital-marketing/social-media-marketing',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Social Media Marketing",
  "url": "https://codazz.com/services/digital-marketing/social-media-marketing",
  "description": "Full-service social media marketing in San Francisco. Strategy, content creation, community management, and paid social campaigns. 50M+ impressions generated.",
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
  "serviceType": "Social Media Marketing",
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
      "name": "Social Media Marketing",
      "item": "https://codazz.com/services/digital-marketing/social-media-marketing"
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
