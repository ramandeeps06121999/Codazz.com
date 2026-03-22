import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Blockchain Development Company | Smart Contracts, DeFi, Web3 | Codazz',
  description: 'Leading blockchain development company building smart contracts, DeFi protocols, NFT platforms, Web3 dApps, and crypto wallets. Solidity, Rust, Ethereum, Solana experts. Get a free consultation.',
  keywords: 'blockchain development company, smart contract development, DeFi development, NFT platform development, Web3 development, crypto wallet development, Solidity developers, blockchain consulting',
  openGraph: {
    title: 'Blockchain Development Company | Smart Contracts, DeFi, Web3 | Codazz',
    description: 'Leading blockchain development company building smart contracts, DeFi protocols, NFT platforms, Web3 dApps, and crypto wallets. Solidity, Rust, Ethereum, Solana experts.',
    url: 'https://codazz.com/services/blockchain-web3',
    type: 'website',
    images: [{ url: 'https://codazz.com/og/blockchain-web3.png', width: 1200, height: 630, alt: 'Codazz Blockchain Development' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain Development Company | Codazz',
    description: 'Smart contracts, DeFi protocols, NFT platforms, and Web3 dApps engineered for security and scale.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/blockchain-web3',
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Blockchain Development Services",
  "url": "https://codazz.com/services/blockchain-web3",
  "description": "Full-stack blockchain development company specializing in smart contracts, DeFi protocols, NFT platforms, Web3 dApps, and crypto wallets. Expertise in Solidity, Rust, Ethereum, Solana, Polygon, and enterprise blockchain solutions.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com",
    "logo": "https://codazz.com/brand/logo-wordmark-green.png",
    "sameAs": [
      "https://www.linkedin.com/company/codazz",
      "https://clutch.co/profile/codazz"
    ]
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "United Kingdom" }
  ],
  "serviceType": "Blockchain Development",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Blockchain Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Contract Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DeFi Protocol Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NFT Platform Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crypto Wallet Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web3 dApp Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Token & ICO Development" } }
    ]
  }
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://codazz.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Blockchain Development", "item": "https://codazz.com/services/blockchain-web3" }
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does blockchain development cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "Blockchain development costs start at $22,000 for a simple smart contract, scaling to $188,000+ for a full DeFi protocol. Factors include complexity of smart contracts, number of chains supported, security audit requirements, and frontend dApp development. We provide detailed estimates after a free technical consultation." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a blockchain application?",
      "acceptedAnswer": { "@type": "Answer", "text": "A typical blockchain project takes 3-9 months from architecture to mainnet launch. Simple token contracts can be deployed in 4-6 weeks, while complex DeFi protocols with multiple audit rounds may take 6-12 months. Our phased approach ensures security at every stage." }
    },
    {
      "@type": "Question",
      "name": "Which blockchain platform should I build on?",
      "acceptedAnswer": { "@type": "Answer", "text": "The best blockchain depends on your use case. Ethereum offers the largest ecosystem and DeFi composability. Solana provides high throughput for trading apps. Polygon and Base offer low-cost EVM compatibility. Hyperledger suits enterprise permissioned networks. We help you choose based on your specific requirements." }
    },
    {
      "@type": "Question",
      "name": "Do you conduct smart contract security audits?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every smart contract we develop goes through a rigorous multi-phase audit process: automated analysis with Slither and Mythril, internal peer review, and coordination with third-party audit firms. We also implement formal verification for critical financial logic." }
    },
    {
      "@type": "Question",
      "name": "Can you build cross-chain or multi-chain applications?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We build cross-chain bridges, multi-chain deployments, and omnichain protocols. We work with LayerZero, Wormhole, and custom bridge infrastructure to connect Ethereum, Polygon, Solana, Avalanche, and other chains." }
    },
    {
      "@type": "Question",
      "name": "Do you help with regulatory compliance for crypto projects?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate AML/KYC solutions, implement FATF Travel Rule compliance, and build with MiCA (EU) and SEC regulatory frameworks in mind. Our solutions include on-chain identity verification and transaction monitoring." }
    },
    {
      "@type": "Question",
      "name": "What DeFi protocols can you build?",
      "acceptedAnswer": { "@type": "Answer", "text": "We build AMMs (automated market makers), lending/borrowing protocols, yield farming platforms, DEXs, stablecoins, liquid staking derivatives, perpetual futures, and options protocols. Each is engineered with formal economic modeling and security-first architecture." }
    },
    {
      "@type": "Question",
      "name": "Do you offer ongoing blockchain maintenance and monitoring?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Post-launch, we provide 24/7 on-chain monitoring via Tenderly and OpenZeppelin Defender, incident response, protocol upgrades through proxy patterns, and governance support. Our SLA guarantees rapid response for critical issues." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
    </>
  );
}
