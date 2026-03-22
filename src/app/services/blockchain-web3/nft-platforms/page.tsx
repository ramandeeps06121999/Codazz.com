import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'NFT Platform & Marketplace Development | Codazz',
  description: 'Gas-optimized NFT minting contracts, custom marketplaces, and royalty systems. 500K+ NFTs minted across 30+ platforms by Codazz in San Francisco.',
  openGraph: {
    title: 'NFT Platform Development | Codazz',
    description: 'We build NFT minting contracts, marketplaces, and royalty systems — from strategy through launch on any EVM chain.',
    url: 'https://codazz.com/services/blockchain-web3/nft-platforms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/blockchain-web3/nft-platforms',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "NFT Platforms",
  "url": "https://codazz.com/services/blockchain-web3/nft-platforms",
  "description": "Gas-optimized NFT minting contracts, custom marketplaces, and royalty systems. 500K+ NFTs minted across 30+ platforms by Codazz in San Francisco.",
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
  "serviceType": "NFT Platforms",
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
      "name": "NFT Platforms",
      "item": "https://codazz.com/services/blockchain-web3/nft-platforms"
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
