import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'WooCommerce Store Development | Codazz',
  description: 'WooCommerce store development services. Codazz builds high-converting online stores with custom plugins, payment gateways, and integrations.',
  openGraph: {
    title: 'WooCommerce Store Development | Codazz',
    description: 'WooCommerce store development services. Codazz builds high-converting online stores with custom plugins, payment gateways, and integrations.',
    url: 'https://codazz.com/services/wordpress-cms/woocommerce-stores',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/wordpress-cms/woocommerce-stores',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "WooCommerce Stores",
  "url": "https://codazz.com/services/wordpress-cms/woocommerce-stores",
  "description": "WooCommerce store development services. Codazz builds high-converting online stores with custom plugins, payment gateways, and integrations.",
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
  "serviceType": "WooCommerce Stores",
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
      "name": "WooCommerce Stores",
      "item": "https://codazz.com/services/wordpress-cms/woocommerce-stores"
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
