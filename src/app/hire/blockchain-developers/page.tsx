import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire Blockchain Developers | Solidity, Web3 & Smart Contract Engineers | Codazz',
  description: 'Hire pre-vetted blockchain developers from Codazz. Senior Solidity, Web3, DeFi & smart contract engineers available in 48 hours. NDA from day 1, starting at $35/hr.',
  openGraph: {
    title: 'Hire Blockchain Developers | Solidity, Web3 & Smart Contract Engineers | Codazz',
    description: 'Hire pre-vetted blockchain developers from Codazz. Senior Solidity, Web3 & smart contract engineers available in 48 hours.',
    url: 'https://codazz.com/hire/blockchain-developers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire Blockchain Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/blockchain-developers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a blockchain developer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched blockchain developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new developer can start building immediately.' } },
    { '@type': 'Question', name: 'What blockchains do your developers work with?', acceptedAnswer: { '@type': 'Answer', text: 'Our blockchain developers are proficient in Ethereum, Polygon, Solana, BNB Chain, Avalanche, Arbitrum, and other EVM-compatible and non-EVM chains. They build smart contracts, DeFi protocols, NFT platforms, and dApps.' } },
    { '@type': 'Question', name: 'Can your blockchain developers audit smart contracts?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our senior blockchain developers perform smart contract security audits, identify vulnerabilities like reentrancy and overflow attacks, and implement battle-tested security patterns.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a blockchain developer?', acceptedAnswer: { '@type': 'Answer', text: 'Our blockchain developers start at $35/hr for mid-level and $45-65/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your intellectual property and business ideas are fully protected from the first conversation.' } },
    { '@type': 'Question', name: 'Can your developers build DeFi protocols and tokenomics?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our blockchain developers have built DEXs, lending protocols, yield farming platforms, and token launch systems. They understand tokenomics design, liquidity mechanics, and on-chain governance.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Blockchain Developers',
  description: 'Hire pre-vetted senior blockchain developers from Codazz. Solidity, Web3, DeFi & smart contract experts available in 48 hours with NDA protection.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/blockchain-developers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'Blockchain Developers', item: 'https://codazz.com/hire/blockchain-developers' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
