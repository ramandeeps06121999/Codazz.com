import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Crypto Wallet Development Services | Codazz',
  description: 'Custom crypto wallet development with multi-chain support, HD key management, and hardware wallet integration. Codazz builds secure wallets in the US.',
  openGraph: {
    title: 'Crypto Wallet Development Services | Codazz',
    description: 'Custom crypto wallet development with multi-chain support, HD key management, and hardware wallet integration.',
    url: 'https://codazz.com/services/blockchain-web3/crypto-wallets',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/blockchain-web3/crypto-wallets',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Crypto Wallets",
  "url": "https://codazz.com/services/blockchain-web3/crypto-wallets",
  "description": "Custom crypto wallet development with multi-chain support, HD key management, and hardware wallet integration. Codazz builds secure wallets in the US.",
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
  "serviceType": "Crypto Wallets",
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
      "name": "Crypto Wallets",
      "item": "https://codazz.com/services/blockchain-web3/crypto-wallets"
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
