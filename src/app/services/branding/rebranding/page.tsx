import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Rebranding Services | Codazz',
  description: 'Strategic rebranding services by Codazz. Refresh your brand identity, messaging, and visual language to stay relevant and competitive.',
  openGraph: {
    title: 'Rebranding Services | Codazz',
    description: 'Strategic rebranding services by Codazz. Refresh your brand identity, messaging, and visual language to stay relevant and competitive.',
    url: 'https://codazz.com/services/branding/rebranding',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/branding/rebranding',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Rebranding",
  "url": "https://codazz.com/services/branding/rebranding",
  "description": "Strategic rebranding services by Codazz. Refresh your brand identity, messaging, and visual language to stay relevant and competitive.",
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
  "serviceType": "Rebranding",
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
      "name": "Rebranding",
      "item": "https://codazz.com/services/branding/rebranding"
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
