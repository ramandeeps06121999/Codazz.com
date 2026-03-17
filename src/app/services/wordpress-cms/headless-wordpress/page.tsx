import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Headless WordPress Development Services',
  description: 'Headless WordPress with Next.js frontends for blazing-fast performance. WPGraphQL, ISR, and CDN delivery by Codazz, San Francisco. 40+ projects shipped.',
  openGraph: {
    title: 'Headless WordPress Development | Codazz',
    description: 'Combine WordPress CMS with Next.js speed. Decoupled architecture for 3x faster load times and global CDN delivery.',
    url: 'https://codazz.com/services/wordpress-cms/headless-wordpress',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/wordpress-cms/headless-wordpress',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Headless WordPress",
  "url": "https://codazz.com/services/wordpress-cms/headless-wordpress",
  "description": "Headless WordPress with Next.js frontends for blazing-fast performance. WPGraphQL, ISR, and CDN delivery by Codazz, San Francisco. 40+ projects shipped.",
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
  "serviceType": "Headless WordPress",
  "isPartOf": {
    "@type": "Service",
    "name": "WordPress & CMS",
    "url": "https://codazz.com/services/wordpress-cms"
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
      "name": "WordPress & CMS",
      "item": "https://codazz.com/services/wordpress-cms"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Headless WordPress",
      "item": "https://codazz.com/services/wordpress-cms/headless-wordpress"
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
