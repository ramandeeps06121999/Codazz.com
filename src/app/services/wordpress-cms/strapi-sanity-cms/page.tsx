import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Strapi & Sanity CMS Development Services | Codazz',
  description: 'Expert Strapi and Sanity headless CMS setup with Next.js integration, live preview, and content migration. Codazz, San Francisco. 30+ CMS projects.',
  openGraph: {
    title: 'Strapi & Sanity CMS Development | Codazz',
    description: 'Modern headless CMS solutions with Strapi and Sanity — flexible schemas, real-time preview, and seamless Next.js integration.',
    url: 'https://codazz.com/services/wordpress-cms/strapi-sanity-cms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/wordpress-cms/strapi-sanity-cms',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Strapi & Sanity CMS",
  "url": "https://codazz.com/services/wordpress-cms/strapi-sanity-cms",
  "description": "Expert Strapi and Sanity headless CMS setup with Next.js integration, live preview, and content migration. Codazz, San Francisco. 30+ CMS projects.",
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
  "serviceType": "Strapi & Sanity CMS",
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
      "name": "Strapi & Sanity CMS",
      "item": "https://codazz.com/services/wordpress-cms/strapi-sanity-cms"
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
