import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Custom WordPress Theme Development | Codazz',
  description: 'Custom WordPress theme development by Codazz. Pixel-perfect, fast-loading themes built from scratch with clean code and SEO best practices.',
  openGraph: {
    title: 'Custom WordPress Theme Development | Codazz',
    description: 'Custom WordPress theme development by Codazz. Pixel-perfect, fast-loading themes built from scratch with clean code and SEO best practices.',
    url: 'https://codazz.com/services/wordpress-cms/custom-wordpress-themes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/wordpress-cms/custom-wordpress-themes',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom WordPress Themes",
  "url": "https://codazz.com/services/wordpress-cms/custom-wordpress-themes",
  "description": "Custom WordPress theme development by Codazz. Pixel-perfect, fast-loading themes built from scratch with clean code and SEO best practices.",
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
  "serviceType": "Custom WordPress Themes",
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
      "name": "Custom WordPress Themes",
      "item": "https://codazz.com/services/wordpress-cms/custom-wordpress-themes"
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
