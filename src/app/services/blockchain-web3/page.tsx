import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Blockchain & Web3 Development in the US | Codazz',
  description: 'Blockchain & Web3 development by Codazz. Smart contracts, DeFi protocols & dApps for American enterprises. Schedule a free technical consultation.',
  openGraph: {
    title: 'Blockchain & Web3 Development in the US | Codazz',
    description: 'Blockchain & Web3 development by Codazz. Smart contracts, DeFi protocols & dApps for American enterprises.',
    url: 'https://codazz.com/services/blockchain-web3',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/blockchain-web3',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Blockchain & Web3",
  "url": "https://codazz.com/services/blockchain-web3",
  "description": "Blockchain & Web3 development by Codazz. Smart contracts, DeFi protocols & dApps for American enterprises. Schedule a free technical consultation.",
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
  "serviceType": "Blockchain & Web3"
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
      "name": "Blockchain & Web3",
      "item": "https://codazz.com/services/blockchain-web3"
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
