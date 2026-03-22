import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Smart Contract Development | Codazz',
  description: 'Audited smart contract development on Ethereum, Solana, and Polygon. Codazz builds secure DeFi, NFT, and DAO smart contracts.',
  openGraph: {
    title: 'Smart Contract Development | Codazz',
    description: 'Audited smart contract development on Ethereum, Solana, and Polygon. Codazz builds secure DeFi, NFT, and DAO smart contracts.',
    url: 'https://codazz.com/services/blockchain-web3/smart-contracts',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/blockchain-web3/smart-contracts',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Smart Contracts",
  "url": "https://codazz.com/services/blockchain-web3/smart-contracts",
  "description": "Audited smart contract development on Ethereum, Solana, and Polygon. Codazz builds secure DeFi, NFT, and DAO smart contracts.",
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
  "serviceType": "Smart Contracts",
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
      "name": "Smart Contracts",
      "item": "https://codazz.com/services/blockchain-web3/smart-contracts"
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
