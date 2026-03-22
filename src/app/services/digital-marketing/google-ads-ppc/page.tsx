import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Google Ads & PPC Management Services | Codazz',
  description: 'Expert Google Ads & PPC management in San Francisco. Search, Shopping, Display, and YouTube campaigns with 3.5x avg ROAS. Google Premier Partner agency.',
  openGraph: {
    title: 'Google Ads & PPC Management | Codazz',
    description: 'Expert Google Ads & PPC management in San Francisco. Search, Shopping, Display, and YouTube campaigns with 3.5x avg ROAS.',
    url: 'https://codazz.com/services/digital-marketing/google-ads-ppc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/digital-marketing/google-ads-ppc',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Google Ads & PPC",
  "url": "https://codazz.com/services/digital-marketing/google-ads-ppc",
  "description": "Expert Google Ads & PPC management in San Francisco. Search, Shopping, Display, and YouTube campaigns with 3.5x avg ROAS. Google Premier Partner agency.",
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
  "serviceType": "Google Ads & PPC",
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
      "name": "Google Ads & PPC",
      "item": "https://codazz.com/services/digital-marketing/google-ads-ppc"
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
