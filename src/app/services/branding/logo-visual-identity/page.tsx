import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Logo & Visual Identity Design | Codazz',
  description: 'Professional logo and visual identity design by Codazz. Memorable logos, color systems, and typography that define your brand.',
  openGraph: {
    title: 'Logo & Visual Identity Design | Codazz',
    description: 'Professional logo and visual identity design by Codazz. Memorable logos, color systems, and typography that define your brand.',
    url: 'https://codazz.com/services/branding/logo-visual-identity',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/branding/logo-visual-identity',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Logo & Visual Identity",
  "url": "https://codazz.com/services/branding/logo-visual-identity",
  "description": "Professional logo and visual identity design by Codazz. Memorable logos, color systems, and typography that define your brand.",
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
  "serviceType": "Logo & Visual Identity",
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
      "name": "Logo & Visual Identity",
      "item": "https://codazz.com/services/branding/logo-visual-identity"
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
