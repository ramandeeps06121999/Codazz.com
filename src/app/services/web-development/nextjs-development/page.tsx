import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Next.js Development Services',
  description: 'Expert Next.js development by Codazz. Build fast, SEO-friendly React applications with server-side rendering and static site generation.',
  openGraph: {
    title: 'Next.js Development Services | Codazz',
    description: 'Expert Next.js development by Codazz. Build fast, SEO-friendly React applications with server-side rendering and static site generation.',
    url: 'https://codazz.com/services/web-development/nextjs-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/web-development/nextjs-development',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Next.js Development",
  "url": "https://codazz.com/services/web-development/nextjs-development",
  "description": "Expert Next.js development by Codazz. Build fast, SEO-friendly React applications with server-side rendering and static site generation.",
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
  "serviceType": "Next.js Development",
  "isPartOf": {
    "@type": "Service",
    "name": "Web Development",
    "url": "https://codazz.com/services/web-development"
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
      "name": "Web Development",
      "item": "https://codazz.com/services/web-development"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Next.js Development",
      "item": "https://codazz.com/services/web-development/nextjs-development"
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
