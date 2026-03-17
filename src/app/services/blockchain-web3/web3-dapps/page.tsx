import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Web3 dApp Development Services | San Francisco',
  description: 'Full-stack Web3 dApp development with wallet integration, on-chain indexing, and cross-chain UX. Codazz ships production dApps from San Francisco, United States.',
  openGraph: {
    title: 'Web3 dApp Development Services | Codazz',
    description: 'Full-stack Web3 dApp development with wallet integration, on-chain indexing, and cross-chain UX.',
    url: 'https://codazz.com/services/blockchain-web3/web3-dapps',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/blockchain-web3/web3-dapps',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web3 DApps",
  "url": "https://codazz.com/services/blockchain-web3/web3-dapps",
  "description": "Full-stack Web3 dApp development with wallet integration, on-chain indexing, and cross-chain UX. Codazz ships production dApps from San Francisco, United States.",
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
  "serviceType": "Web3 DApps",
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
      "name": "Web3 DApps",
      "item": "https://codazz.com/services/blockchain-web3/web3-dapps"
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
