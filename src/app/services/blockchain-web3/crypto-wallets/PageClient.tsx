'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Blockchain & Web3', href: '/services/blockchain-web3' },
    { label: 'Crypto Wallet Development' },
  ],
  hero: {
    badge: 'BLOCKCHAIN & WEB3',
    title: 'Crypto Wallets Built for',
    titleAccent: 'Security',
    description: 'We build production-grade custodial and non-custodial wallets — from HD key management and multi-chain support to hardware wallet integration and DeFi connectivity — trusted by 1M+ users across 15+ wallets.',
    service: 'Crypto Wallet Development',
    stats: [
      { value: '15+', label: 'Wallets Built' },
      { value: '1M+', label: 'Active Users' },
      { value: 'Multi-Chain', label: 'Support' },
      { value: 'Hardware Wallet', label: 'Compatible' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F511}', title: 'HD Wallet Architecture', desc: 'BIP-32/39/44 compliant hierarchical deterministic wallets that derive unlimited addresses from a single 12 or 24-word seed phrase. Supports account-level and address-level derivation paths for all major networks.' },
      { icon: '\u{1F310}', title: 'Multi-Chain Support', desc: 'Unified wallet experience across Ethereum, Solana, Bitcoin, Polygon, Arbitrum, Optimism, Avalanche, Cosmos, and more. Automatic chain detection, network switching, and cross-chain asset aggregation.' },
      { icon: '\u{1F512}', title: 'Hardware Wallet Integration', desc: 'Native support for Ledger and Trezor hardware wallets via HID and WebUSB. Users can sign transactions with maximum security without exposing private keys to software, even for complex DeFi operations.' },
      { icon: '\u{1F517}', title: 'WalletConnect Protocol', desc: 'WalletConnect v2 integration for seamless dApp connections via QR code or deep link. Your wallet becomes interoperable with the entire Web3 ecosystem of thousands of dApps out of the box.' },
      { icon: '\u{1F6E1}\u{FE0F}', title: 'Transaction Signing & Security', desc: 'Secure transaction parsing with human-readable simulation (show users exactly what a transaction will do before signing), phishing detection, malicious contract warnings, and spending limit approvals.' },
      { icon: '\u{1F33E}', title: 'DeFi & NFT Integration', desc: 'Built-in DeFi portfolio tracking, token swapping via DEX aggregators (1inch, Paraswap), NFT gallery and transfer, staking interfaces, and yield opportunity discovery directly inside the wallet.' },
    ],
  },
  portfolioCategory: 'blockchain-web3',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Security Architecture', desc: 'We design the security model first: key derivation scheme, storage encryption strategy (AES-256, Secure Enclave on iOS/Android), biometric authentication, and threat model for seed phrase protection.' },
      { num: '02', title: 'Key Management Design', desc: 'Implementation of BIP standards for HD key derivation, secure key storage using platform secure storage (iOS Keychain, Android Keystore), and optional MPC (Multi-Party Computation) for enhanced security.' },
      { num: '03', title: 'Development', desc: 'Wallet application development — transaction construction and signing for each chain, RPC node integration, token balance fetching, NFT discovery, and UI/UX for a frictionless user experience.' },
      { num: '04', title: 'Penetration Testing', desc: 'Comprehensive security audit including static analysis, dynamic testing, memory inspection for key material exposure, and attempted private key extraction. Third-party pen test before public release.' },
    ],
  },
  faqs: [
    { q: 'Custodial vs non-custodial wallet — which should I build?', a: 'Custodial wallets (you hold private keys on behalf of users) offer simpler UX and easier account recovery — users log in with email/password and never see a seed phrase. This is ideal for consumer apps targeting crypto beginners. Non-custodial wallets give users full control of their keys — better for crypto-native users, DeFi power users, and applications where trust in the operator is low. We help you choose based on your user persona and risk tolerance, or design a hybrid with MPC.' },
    { q: 'How do you handle private key security in a software wallet?', a: 'Keys are never stored in plaintext. We use platform-provided secure storage: iOS Keychain with Secure Enclave for biometric-gated key access, and Android Keystore with hardware-backed key material where available. On web, keys are encrypted with a user-derived password using PBKDF2 and stored in encrypted IndexedDB. We also implement key derivation on separate threads to minimize attack surface, and never log or transmit key material.' },
    { q: 'Which blockchains should the wallet support at launch?', a: 'We recommend launching with your primary target chains first, then expanding. Ethereum + EVM chains (Polygon, Arbitrum, Base) give the broadest DeFi coverage. Adding Solana captures the largest non-EVM ecosystem. Bitcoin is essential for a general-purpose wallet. We architect wallets with chain-agnostic core logic so adding new chains requires minimal effort — typically 1\u20133 days per additional EVM chain and 1\u20132 weeks for non-EVM chains.' },
    { q: 'How do we integrate the wallet with DeFi protocols?', a: 'DeFi integration typically uses a combination of: direct smart contract calls via ethers.js or viem for on-chain interactions, DEX aggregator APIs (1inch, 0x) for swap routing, DeFi data APIs (DeBank, Zapper) for portfolio and yield data, and The Graph subgraphs for protocol-specific data. We design a modular integration layer so new DeFi protocols can be added without core wallet changes.' },
    { q: 'Should I build a mobile app wallet or browser extension?', a: 'Both have distinct use cases. Browser extensions (like MetaMask) are preferred by DeFi power users for desktop dApp interactions — they inject a Web3 provider that dApps can access directly. Mobile wallets reach a broader audience, use WalletConnect for dApp connections, and can leverage biometrics and push notifications. Many mature wallets offer both. We recommend starting with your primary user\'s device preference — mobile for consumer apps, extension for DeFi-focused wallets — and expanding to the other platform in a subsequent phase.' },
  ],
  faqDescription: 'Everything you need to know about our crypto wallet development services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s discuss your wallet project and build something great together.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
