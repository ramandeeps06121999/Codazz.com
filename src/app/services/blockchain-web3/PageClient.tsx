'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Blockchain Development' },
  ],

  hero: {
    badge: 'Blockchain Development Company',
    title: 'Blockchain Development',
    titleAccent: 'Company',
    description:
      'We build production-grade smart contracts, DeFi protocols, NFT platforms, Web3 dApps, and crypto wallets. From Solidity to Rust, Ethereum to Solana \u2014 full-stack blockchain engineering with audit-first security.',
    service: 'Blockchain & Web3 Development',
    stats: [
      { value: '120+', label: 'Smart Contracts Deployed' },
      { value: '$2.4B+', label: 'TVL Secured' },
      { value: '18', label: 'Chains Supported' },
      { value: 'Zero', label: 'Critical Exploits' },
    ],
  },

  awards: [
    'Clutch Top Blockchain Developer 2026',
    'Clutch Top Generative AI 2026',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'AWS Advanced Tier Partner',
    'Google Cloud Partner',
    'Zero Critical Exploits Track Record',
    '$2.4B+ Total Value Locked Secured',
  ],

  whySection: {
    title: 'Why Businesses Are Building on Blockchain',
    cards: [
      {
        icon: '\u{1F512}',
        title: 'Trustless Transactions',
        desc: 'Eliminate intermediaries and single points of failure. Smart contracts execute automatically when conditions are met, removing the need for trusted third parties and reducing settlement times from days to seconds.',
      },
      {
        icon: '\u{1F4CA}',
        title: 'Transparent & Immutable',
        desc: 'Every transaction is recorded on a public ledger that cannot be altered. This creates an auditable trail of truth for compliance, supply chain tracking, financial reporting, and regulatory oversight.',
      },
      {
        icon: '\u{1F310}',
        title: 'Global & Permissionless',
        desc: 'Blockchain applications are accessible to anyone, anywhere. No gatekeepers, no borders. DeFi protocols, NFT marketplaces, and DAOs operate 24/7 with zero downtime and global reach.',
      },
      {
        icon: '\u{1F6E1}\uFE0F',
        title: 'Security by Design',
        desc: 'Cryptographic security, consensus mechanisms, and formal verification create systems that are inherently more resistant to fraud, tampering, and unauthorized access than traditional architectures.',
      },
      {
        icon: '\u{1F4B0}',
        title: 'Programmable Value',
        desc: 'Tokenize anything \u2014 real estate, carbon credits, loyalty points, equity. Smart contracts enable programmable money with automated royalties, vesting schedules, and governance mechanisms built in.',
      },
      {
        icon: '\u{1F504}',
        title: 'Composable Infrastructure',
        desc: 'DeFi protocols, NFTs, and DAOs are like Lego blocks that can be combined to create new financial primitives. This composability enables innovation at a pace impossible in traditional finance.',
      },
    ],
    whoNeedsTitle: 'Who Needs Blockchain Development?',
    whoNeedsItems: [
      {
        icon: '\u{1F3E6}',
        title: 'FinTech & DeFi Startups',
        desc: 'Launching lending protocols, DEXs, yield vaults, stablecoins, or cross-chain bridges that need audit-grade smart contracts and robust tokenomics.',
      },
      {
        icon: '\u{1F3A8}',
        title: 'NFT & Creator Platforms',
        desc: 'Building NFT marketplaces, creator royalty systems, dynamic metadata, or cross-chain NFT bridging for digital art, music, and gaming assets.',
      },
      {
        icon: '\u{1F3ED}',
        title: 'Enterprise & Supply Chain',
        desc: 'Fortune 500 companies implementing permissioned blockchains for supply chain provenance, trade finance, digital identity, and regulatory compliance.',
      },
      {
        icon: '\u{1F5F3}\uFE0F',
        title: 'DAOs & Governance Projects',
        desc: 'Organizations building on-chain voting, treasury management, proposal frameworks, and quadratic or conviction voting mechanisms.',
      },
      {
        icon: '\u{1F4B1}',
        title: 'Token & ICO Launchers',
        desc: 'Teams needing custom token creation, tokenomics design, ICO/IDO/IEO launch platforms, vesting contracts, and governance token frameworks.',
      },
      {
        icon: '\u{1F464}',
        title: 'Digital Identity Innovators',
        desc: 'Building self-sovereign identity systems, verifiable credentials, and privacy-preserving KYC with zero-knowledge proofs.',
      },
    ],
    metricsTitle: 'Blockchain Market Opportunity',
    metrics: [
      { metric: '$67.4B', label: 'Market Size by 2026', desc: 'Global blockchain market (MarketsandMarkets)' },
      { metric: '68.4%', label: 'CAGR Growth', desc: 'Blockchain market 2021-2026 (Grand View Research)' },
      { metric: '$300B+', label: 'Peak DeFi TVL', desc: 'Total value locked across DeFi (DeFi Llama)' },
      { metric: '420M+', label: 'Crypto Users', desc: 'Worldwide crypto adoption (Triple-A)' },
    ],
    closingText:
      'The global blockchain market is experiencing explosive growth. Enterprise adoption is accelerating, DeFi 2.0 is maturing with institutional-grade protocols, Layer 2 rollups have reduced costs by 100x, and real-world asset tokenization is projected to reach $16T by 2030. Now is the time to build \u2014 the infrastructure is ready and institutional capital is flowing in. Codazz helps you capitalize on this opportunity with audit-first engineering, multi-chain expertise, and a proven track record of zero critical exploits across every protocol we have shipped.',
  },

  subServices: [
    {
      title: 'Smart Contract Development',
      tag: 'Solidity / Rust',
      desc: 'Production-grade EVM and non-EVM smart contracts from ERC-20/721/1155 tokens to complex multi-contract protocol suites. Formal verification and comprehensive test coverage included.',
      chips: ['Solidity', 'Rust', 'Hardhat', 'Foundry', 'OpenZeppelin'],
      href: '/services/blockchain-web3/smart-contracts',
      icon: '\u{1F4DC}',
    },
    {
      title: 'DeFi Protocol Development',
      tag: 'DeFi',
      desc: 'AMMs, lending protocols, yield optimizers, DEXs, liquid staking, and perpetual futures engineered with formal economic modeling and MEV-resistant architecture.',
      chips: ['Uniswap V4', 'Aave', 'Chainlink', 'Flash Loans', 'Oracles'],
      href: '/services/blockchain-web3/defi-protocols',
      icon: '\u{1F4B0}',
    },
    {
      title: 'NFT Platform Development',
      tag: 'NFTs',
      desc: 'Custom NFT marketplaces with lazy minting, dynamic metadata, royalty enforcement (ERC-2981), auction mechanics, and cross-chain NFT bridging.',
      chips: ['ERC-721', 'ERC-1155', 'IPFS', 'Arweave', 'Seaport'],
      href: '/services/blockchain-web3/nft-platforms',
      icon: '\u{1F3A8}',
    },
    {
      title: 'Crypto Wallet Development',
      tag: 'Wallets',
      desc: 'Non-custodial and MPC wallets with multi-chain support, hardware wallet integration, social recovery, and institutional-grade key management.',
      chips: ['MPC', 'Account Abstraction', 'ERC-4337', 'WalletConnect', 'Biometrics'],
      href: '/services/blockchain-web3/crypto-wallets',
      icon: '\u{1F4B3}',
    },
    {
      title: 'Web3 dApp Development',
      tag: 'dApps',
      desc: 'Full-stack decentralized applications with seamless wallet auth, token gating, on-chain data indexing via The Graph, and gasless transactions.',
      chips: ['React', 'Next.js', 'wagmi', 'viem', 'RainbowKit'],
      href: '/services/blockchain-web3/web3-dapps',
      icon: '\u{1F310}',
    },
    {
      title: 'Token & ICO Development',
      tag: 'Tokenomics',
      desc: 'Custom token creation, tokenomics design, ICO/IDO/IEO launch platforms, vesting contracts, and governance token frameworks with DAO integration.',
      chips: ['ERC-20', 'SPL Tokens', 'Vesting', 'Staking', 'Governance'],
      href: '/services/blockchain-web3/smart-contracts',
      icon: '\u{1F4B1}',
    },
  ],

  servicesHeading: {
    label: 'Our Blockchain Services',
    title: 'Full-Stack Blockchain',
    titleDim: 'Development Services.',
    description:
      'End-to-end blockchain development from smart contract architecture to production deployment, with security baked into every layer.',
  },

  benefits: {
    label: 'Why Codazz',
    title: 'Why Teams Choose',
    titleDim: 'Codazz for Blockchain.',
    items: [
      {
        icon: '\u{1F50D}',
        title: 'Audit-First Engineering',
        desc: 'Security is not an afterthought. Every smart contract is designed with threat modeling from day one, with automated analysis, fuzz testing, and third-party audits baked into our development process. 120+ contracts audited.',
      },
      {
        icon: '\u{1F30D}',
        title: 'Multi-Chain Mastery',
        desc: 'We deploy across 18+ blockchains including Ethereum, Solana, Polygon, Avalanche, Base, Arbitrum, and Hyperledger. One team, full-stack expertise across EVM and non-EVM ecosystems.',
      },
      {
        icon: '\u{1F4CA}',
        title: 'DeFi Protocol Experts',
        desc: 'Our team has built lending protocols, AMMs, yield vaults, and cross-chain bridges that collectively secure billions in TVL. We understand the economic attack vectors that most developers miss.',
      },
      {
        icon: '\u{1F6E1}\uFE0F',
        title: 'Zero Critical Exploits',
        desc: 'Across every protocol we have built and launched, we maintain a perfect security record with zero critical exploits. Our multi-phase audit pipeline and formal verification catch vulnerabilities before deployment.',
      },
      {
        icon: '\u{1F680}',
        title: 'Full-Stack Delivery',
        desc: 'From tokenomics design and smart contract development to frontend dApps, subgraph indexing, and 24/7 post-launch monitoring, we handle the entire blockchain development lifecycle under one roof.',
      },
      {
        icon: '\u26A1',
        title: 'Rapid Turnaround',
        desc: 'Our battle-tested frameworks and reusable contract libraries accelerate development timelines by 40-60%. You get production-grade code faster without compromising on security or quality. 48-hour proposal delivery.',
      },
    ],
  },

  clientLogos: [
    'Ethereum Projects',
    'Polygon Teams',
    'Solana Builders',
    'Avalanche Protocols',
    'Base Ecosystem',
    'Arbitrum dApps',
    'Hyperledger Enterprise',
    'DeFi Protocols',
    'NFT Platforms',
    'DAO Organizations',
  ],

  bigStats: [
    { value: '120+', label: 'Smart Contracts Deployed', desc: 'Across 18+ blockchains' },
    { value: '$2.4B+', label: 'TVL Secured', desc: 'Zero critical exploits' },
    { value: '18+', label: 'Chains Supported', desc: 'EVM and non-EVM' },
    { value: '50+', label: 'Projects Shipped', desc: 'DeFi, NFTs, Enterprise' },
    { value: '48hr', label: 'Proposal Delivery', desc: 'Detailed technical scope' },
  ],

  advancedTech: {
    row1: [
      { icon: '\u{1F50D}', title: 'Smart Contract Audits', desc: 'Multi-phase audit pipeline with Slither, Mythril, and top-tier third-party firms' },
      { icon: '\u2705', title: 'Formal Verification', desc: 'Mathematical proof of contract correctness with Certora and K Framework' },
      { icon: '\u{1F6E1}\uFE0F', title: 'Penetration Testing', desc: 'Adversarial testing for flash loans, oracle manipulation, and reentrancy' },
      { icon: '\u{1F511}', title: 'Multi-Sig Governance', desc: 'Gnosis Safe wallets, time-locked upgrades, on-chain governance' },
      { icon: '\u{1F512}', title: 'Key Management', desc: 'HSM-backed storage, MPC threshold signatures, social recovery' },
      { icon: '\u{1F4CA}', title: '24/7 Monitoring', desc: 'Real-time monitoring via Tenderly and OpenZeppelin Defender' },
    ],
    row2: [
      { icon: '\u{1F1EA}\u{1F1FA}', title: 'MiCA Compliance (EU)', desc: 'Crypto-asset service provider infrastructure and reserve management' },
      { icon: '\u{1F1FA}\u{1F1F8}', title: 'SEC Regulations (US)', desc: 'Securities-aware token design, Reg D/S exemptions' },
      { icon: '\u{1F50E}', title: 'AML/KYC Integration', desc: 'Chainalysis, Elliptic, and custom compliance engines' },
      { icon: '\u{1F30D}', title: 'FATF Travel Rule', desc: 'VASP compliance with Notabene and Sygna protocols' },
      { icon: '\u{1F3D7}\uFE0F', title: 'Layer 2 Scaling', desc: 'Arbitrum, Base, Optimism, zkSync for 100x cost reduction' },
      { icon: '\u{1F517}', title: 'Cross-Chain Bridges', desc: 'LayerZero, Wormhole, Axelar for omnichain deployments' },
    ],
  },

  techStack: [
    { category: 'Smart Contract Languages', techs: ['Solidity', 'Rust', 'Move', 'Vyper', 'Cairo'] },
    { category: 'Development Frameworks', techs: ['Hardhat', 'Foundry', 'Anchor', 'Truffle', 'Brownie'] },
    { category: 'Libraries & SDKs', techs: ['ethers.js', 'web3.js', 'viem', 'wagmi', 'web3.py'] },
    { category: 'Infrastructure', techs: ['The Graph', 'IPFS', 'Chainlink', 'Alchemy', 'Infura'] },
    { category: 'Security Tools', techs: ['OpenZeppelin', 'Slither', 'Mythril', 'Certora', 'Echidna'] },
    { category: 'Frontend & Auth', techs: ['RainbowKit', 'WalletConnect', 'Privy', 'Dynamic', 'SIWE'] },
  ],

  pricingGuide: {
    title: 'How Much Does Blockchain Development Cost?',
    description:
      'Blockchain development costs depend on smart contract complexity, number of chains, audit requirements, and frontend dApp scope. Codazz offers fixed-price quotes after a free technical consultation — no hourly billing.',
    tiers: [
      {
        icon: '\uD83D\uDCB0',
        name: 'Token / Smart Contract',
        price: 'Starting at $22,000',
        desc: 'ERC-20/721 token deployment, single smart contract with unit tests, basic audit, and a simple minting or staking UI.',
        timeline: '\u23F1 4–8 weeks',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'DeFi Protocol / NFT Platform',
        price: 'Starting at $56,000',
        desc: 'Multi-contract protocol suite (lending, AMM, or marketplace), full-stack dApp, third-party audit, multi-chain deployment, and subgraph indexing.',
        timeline: '\u23F1 3–6 months',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Enterprise Blockchain Platform',
        price: 'Starting at $188,000',
        desc: 'Complex DeFi protocol with cross-chain bridges, formal verification, multiple audit rounds, governance, and 24/7 on-chain monitoring.',
        timeline: '\u23F1 6–12 months',
      },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a Blockchain Development Company',
    description:
      'Choosing the wrong blockchain partner can result in exploits, lost funds, and regulatory issues. Here is what to evaluate before signing.',
    criteria: [
      { icon: '\uD83D\uDCCB', title: 'Proven Portfolio', desc: 'Look for 50+ smart contracts deployed with zero critical exploits and auditable on-chain track record.' },
      { icon: '\uD83D\uDC68\u200D\uD83D\uDCBB', title: 'Senior Engineers', desc: '8+ years avg experience. Deep expertise in Solidity, Rust, Hardhat, Foundry, and formal verification.' },
      { icon: '\uD83D\uDCB2', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope covering contract development, audits, and deployment milestones.' },
      { icon: '\uD83D\uDEE1\uFE0F', title: 'Post-Launch Monitoring', desc: 'On-chain monitoring via Tenderly and OpenZeppelin Defender with incident response SLAs.' },
      { icon: '\uD83D\uDD12', title: 'Security-First Process', desc: 'Multi-phase audit pipeline, fuzz testing, formal verification, and third-party audit coordination.' },
      { icon: '\uD83D\uDD50', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and real-time communication during critical deployments.' },
    ],
  },

  faqs: [
    {
      q: 'How much does blockchain development cost?',
      a: 'Blockchain development costs start at $22,000 for a simple smart contract or token deployment, scaling to $188,000+ for a full DeFi protocol with multiple audit rounds. Factors include contract complexity, number of chains, security audit requirements, frontend dApp development, and ongoing maintenance. We provide detailed, transparent estimates after a free technical consultation.',
    },
    {
      q: 'How long does it take to build a blockchain application?',
      a: 'Timelines depend on complexity. A simple token contract can be deployed in 4-6 weeks. A full DeFi protocol with lending, borrowing, and liquidation mechanics typically takes 4-8 months including audit cycles. An enterprise blockchain solution with multiple stakeholders may require 6-12 months. Our phased approach (Tokenomics -> Dev -> Audit -> Testnet -> Mainnet) ensures quality at every stage.',
    },
    {
      q: 'Which blockchain platform should I build on?',
      a: 'The best blockchain depends on your use case. Ethereum offers the largest DeFi ecosystem and maximum composability. Solana provides 65,000+ TPS for real-time applications. Polygon and Base offer low-cost EVM compatibility ideal for consumer dApps. Hyperledger suits enterprise permissioned networks. We analyze your requirements during the architecture phase and recommend the optimal chain(s).',
    },
    {
      q: 'Do you conduct smart contract security audits?',
      a: 'Yes. Every smart contract we develop undergoes a rigorous multi-phase audit process: automated static analysis with Slither and Mythril, fuzz testing with Echidna, internal expert peer review, and coordination with third-party audit firms (Trail of Bits, OpenZeppelin, Certora). We also implement formal verification for critical financial logic.',
    },
    {
      q: 'Can you build cross-chain or multi-chain applications?',
      a: 'Absolutely. We have deep experience building cross-chain bridges, multi-chain deployments, and omnichain protocols. We work with LayerZero, Wormhole, Axelar, and custom bridge infrastructure. We can deploy your protocol across Ethereum, Polygon, Solana, Avalanche, Base, Arbitrum, and other chains simultaneously.',
    },
    {
      q: 'Do you help with regulatory compliance for crypto projects?',
      a: 'Yes. We integrate AML/KYC solutions (Chainalysis, Elliptic), implement FATF Travel Rule compliance, and build with MiCA (EU) and SEC regulatory frameworks in mind. We can structure token designs to align with securities law, implement investor accreditation flows, and build compliant fundraising platforms.',
    },
    {
      q: 'What DeFi protocols can you build?',
      a: 'We build the full spectrum of DeFi primitives: AMMs with concentrated liquidity, lending/borrowing protocols with dynamic rate models, yield farming vaults with auto-compounding, DEXs with limit orders, stablecoins (algorithmic and collateral-backed), liquid staking derivatives, perpetual futures, and options protocols. Each is engineered with formal economic modeling.',
    },
    {
      q: 'Do you provide ongoing maintenance after launch?',
      a: 'Yes. Post-launch, we provide 24/7 on-chain monitoring via Tenderly and OpenZeppelin Defender, incident response with defined SLAs, protocol upgrades through proxy patterns, governance implementation, and continuous security monitoring. We also offer retainer-based smart contract development for protocol iterations and feature additions.',
    },
  ],

  faqDescription:
    'Answers to the most common questions about our blockchain and Web3 development services, covering costs, timelines, security audits, multi-chain deployments, regulatory compliance, and ongoing support.',

  relatedBlogs: [
    {
      title: 'Smart Contract Security: The Complete Audit Checklist for 2026',
      desc: 'A comprehensive guide to smart contract security auditing covering static analysis, fuzz testing, formal verification, and third-party audit coordination.',
      href: '/blog/smart-contract-security-audit-checklist',
    },
    {
      title: 'DeFi Protocol Architecture: From Tokenomics to Mainnet',
      desc: 'How to architect a production-grade DeFi protocol from scratch, including token economics, gas optimization, upgrade patterns, and cross-chain considerations.',
      href: '/blog/defi-protocol-architecture-guide',
    },
    {
      title: 'Enterprise Blockchain: Hyperledger vs Public Chains in 2026',
      desc: 'Comparing permissioned and public blockchain approaches for enterprise use cases in supply chain, trade finance, and digital identity.',
      href: '/blog/enterprise-blockchain-hyperledger-vs-public',
    },
  ],

  relatedServices: [
    { name: 'AI & Machine Learning', desc: 'Integrate AI-powered analytics, prediction models, and automation into your decentralized applications.', href: '/services/ai-ml' },
    { name: 'SaaS Development', desc: 'Web3-native SaaS platforms with wallet auth, token gating, and on-chain analytics dashboards.', href: '/services/saas-development' },
    { name: 'Cloud & DevOps', desc: 'Reliable infrastructure for node operations, indexers, subgraphs, and blockchain data pipelines.', href: '/services/cloud-devops' },
  ],

  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Gaming', href: '/industries/gaming' },
  ],

  statsH2: { line1: 'Blockchain Development Results', line2: 'That Speak for Themselves.' },
  advancedTechH2: { line1: 'Blockchain & Web3 Technologies', line2: 'Security & Compliance Built In.' },
  techStackH2: { line1: 'Blockchain Development Stack.', line2: '30+ Chains & Tools.' },
  blogsH2: { line1: 'Blockchain Development', line2: 'Insights & Guides.' },
};

export default function BlockchainWeb3Page() {
  return <ServicePageTemplate data={pageData} />;
}
