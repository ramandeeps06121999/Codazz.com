import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'DeFi Protocol Development | Codazz',
  description: 'Custom DeFi protocol development by Codazz. Build decentralized exchanges, lending platforms, yield aggregators, and liquidity pools.',
  openGraph: {
    title: 'DeFi Protocol Development | Codazz',
    description: 'Custom DeFi protocol development by Codazz. Build decentralized exchanges, lending platforms, yield aggregators, and liquidity pools.',
    url: 'https://codazz.com/services/blockchain-web3/defi-protocols',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/blockchain-web3/defi-protocols',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DeFi Protocols",
  "url": "https://codazz.com/services/blockchain-web3/defi-protocols",
  "description": "Custom DeFi protocol development by Codazz. Build decentralized exchanges, lending platforms, yield aggregators, and liquidity pools.",
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
  "serviceType": "DeFi Protocols",
  "isPartOf": {
    "@type": "Service",
    "name": "Blockchain & Web3",
    "url": "https://codazz.com/services/blockchain-web3"
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
      "name": "Blockchain & Web3",
      "item": "https://codazz.com/services/blockchain-web3"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "DeFi Protocols",
      "item": "https://codazz.com/services/blockchain-web3/defi-protocols"
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
