'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Blockchain & Web3', href: '/services/blockchain-web3' },
    { label: 'Web3 dApp Development' },
  ],
  hero: {
    badge: 'BLOCKCHAIN & WEB3',
    title: 'Web3 dApps Built to',
    titleAccent: 'Ship',
    description: 'We build full-stack Web3 decentralized applications — from smart contract integration and wallet connection to on-chain data indexing and cross-chain UX — shipping 50+ dApps with 500K+ wallet connections.',
    service: 'Web3 dApp Development',
    stats: [
      { value: '50+', label: 'dApps Shipped' },
      { value: '500K+', label: 'Wallet Connections' },
      { value: 'ETH/SOL/Polygon', label: 'Chain Coverage' },
      { value: 'Full-Stack', label: 'Web3 Expertise' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{269B}\u{FE0F}', title: 'Frontend dApp Development', desc: 'Next.js and React dApps built with ethers.js, viem, and wagmi for Ethereum, and @solana/web3.js for Solana. Type-safe contract interactions, real-time event subscriptions, and optimistic UI for smooth UX.' },
      { icon: '\u{1F50C}', title: 'Wallet Connection (RainbowKit/WalletConnect)', desc: 'Seamless wallet connection flows using RainbowKit or custom implementations supporting MetaMask, Coinbase Wallet, WalletConnect, Phantom, and 100+ wallets. SIWE (Sign-In with Ethereum) for auth.' },
      { icon: '\u{1F4E1}', title: 'On-Chain Data Indexing (The Graph)', desc: 'Custom subgraphs on The Graph Protocol to index and query your smart contract events efficiently. Orders of magnitude faster than direct RPC calls for complex historical data and analytics queries.' },
      { icon: '\u{1F5C4}\u{FE0F}', title: 'IPFS Integration', desc: 'Decentralized file storage and retrieval via IPFS for NFT metadata, user-generated content, and application state that should live on-chain. Gateway optimization for fast content loading in the browser.' },
      { icon: '\u{1F510}', title: 'Token-Gating & Auth', desc: 'NFT and token-gated access control — verify wallet ownership of specific tokens to unlock content, features, or community access. Integrates with Lit Protocol for encrypted content and programmable access conditions.' },
      { icon: '\u{1F309}', title: 'Cross-Chain dApps', desc: 'Multi-chain dApps that work seamlessly across Ethereum, Arbitrum, Optimism, Polygon, Base, and Solana. Chain detection, automatic switching, unified balance views, and cross-chain transaction support.' },
    ],
  },
  portfolioCategory: 'blockchain-web3',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'dApp Architecture', desc: 'We design the full-stack architecture — smart contract interfaces, indexing strategy, frontend state management, authentication flow, and off-chain data requirements — before any implementation begins.' },
      { num: '02', title: 'Smart Contract Integration', desc: 'Type-safe contract integration using Typechain or wagmi\'s code generation. We implement transaction flows, event listeners, error handling, and gas estimation with user-friendly feedback throughout.' },
      { num: '03', title: 'Frontend Build', desc: 'Pixel-perfect frontend development with wallet-aware state management, real-time on-chain data, optimistic updates for responsive UX, and mobile-responsive design across all screen sizes.' },
      { num: '04', title: 'Testnet \u2192 Mainnet', desc: 'Thorough testing on public testnets with real wallet flows, transaction simulation, and cross-browser/wallet compatibility testing before a staged mainnet launch with monitoring and rollback capability.' },
    ],
  },
  faqs: [
    { q: 'What is the best tech stack for a Web3 frontend?', a: 'Our default stack: Next.js 14 (App Router) for the framework, wagmi v2 + viem for Ethereum interactions (type-safe, excellent hooks), RainbowKit for wallet connection UI, The Graph for indexed data, and TanStack Query for caching and synchronization. For Solana: @solana/web3.js with @solana/wallet-adapter. This stack is battle-tested across hundreds of production dApps and handles the peculiarities of blockchain state (pending transactions, reorgs, RPC reliability) gracefully.' },
    { q: 'How do you handle wallet and blockchain state management in a React dApp?', a: 'Blockchain state management has unique challenges: transactions are async and can be pending for minutes, state can revert, and multiple data sources (RPC, subgraph, off-chain API) need synchronization. We use wagmi\'s built-in hooks for contract reads/writes with automatic refetching, TanStack Query for caching on-chain data with appropriate stale times, and optimistic updates for actions the user initiates. Transaction state is tracked with pending/success/error toasts and a transaction history component.' },
    { q: 'When should data be stored on-chain vs off-chain?', a: 'On-chain storage is expensive (~20,000 gas per 32 bytes on Ethereum) but trustless and permanent. Use it for: ownership records, financial balances, governance votes, and data that must be verifiable without trusting a third party. Off-chain storage (IPFS, Arweave, traditional databases) is orders of magnitude cheaper and should be used for: content, metadata, user preferences, analytics, and large files. A common pattern is storing a content hash on-chain that verifiably points to off-chain data.' },
    { q: 'How do I efficiently index and query blockchain data for my dApp?', a: 'Direct RPC calls for historical data are slow and expensive — you\'d need to scan every block to find past events. The Graph Protocol lets you define a subgraph (GraphQL schema + mappings) that automatically indexes your smart contract events into a queryable database. Queries that would take minutes over RPC return in milliseconds. We write custom subgraphs for your contracts and deploy to The Graph\'s decentralized network or a self-hosted Graph Node for cost control.' },
    { q: 'How do you handle users switching between different blockchain networks?', a: 'Chain switching is a core UX challenge in multi-chain dApps. We implement: automatic chain detection on wallet connect, network-aware component rendering (showing the right balances and features per chain), prompted network switching when users attempt actions on the wrong chain, and graceful degradation for unsupported networks. With wagmi, chain configuration is declarative — you define supported chains once and all hooks automatically scope to the current chain. We also implement URL-based chain routing for bookmarkable chain-specific views.' },
  ],
  faqDescription: 'Everything you need to know about our Web3 dApp development services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s discuss your dApp project and build something great together.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
