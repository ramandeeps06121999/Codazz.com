import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'WordPress Site Speed Optimization Services',
  description: 'Transform slow WordPress sites into 90+ Lighthouse performers. Core Web Vitals fixes, caching, CDN setup, and image optimization by Codazz, United States.',
  openGraph: {
    title: 'WordPress Speed Optimization | Codazz',
    description: 'Achieve 90+ PageSpeed scores with our WordPress speed optimization — Core Web Vitals, caching, CDN, and image fixes.',
    url: 'https://codazz.com/services/wordpress-cms/site-speed-optimisation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/wordpress-cms/site-speed-optimisation',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Site Speed Optimization",
  "url": "https://codazz.com/services/wordpress-cms/site-speed-optimisation",
  "description": "Transform slow WordPress sites into 90+ Lighthouse performers. Core Web Vitals fixes, caching, CDN setup, and image optimization by Codazz, United States.",
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
  "serviceType": "Site Speed Optimization",
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
      "name": "Site Speed Optimization",
      "item": "https://codazz.com/services/wordpress-cms/site-speed-optimisation"
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
