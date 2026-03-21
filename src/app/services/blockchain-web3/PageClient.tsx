'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

// ─── REVEAL HOOK ────────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── INLINE LEAD CAPTURE FORM ───────────────────────────────────────────────────

function LeadCaptureFormInline({ context = 'blockchain' }: { context?: string }) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: `blockchain-web3-${context}` }),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.05)',
    color: '#fff',
    fontSize: 14,
    outline: 'none',
    transition: '0.25s',
    boxSizing: 'border-box' as const,
  };

  if (status === 'sent') {
    return (
      <div style={{ padding: 40, textAlign: 'center', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 24, background: 'rgba(34,197,94,0.05)' }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>&#10003;</div>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>Thank You!</h3>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>We&apos;ll review your project requirements and respond within 24 hours with a detailed proposal.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 14 }}>
        <input
          style={inputStyle}
          placeholder="Full Name *"
          required
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
        />
        <input
          style={inputStyle}
          placeholder="Work Email *"
          type="email"
          required
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 14 }}>
        <input
          style={inputStyle}
          placeholder="Company"
          value={formData.company}
          onChange={e => setFormData({ ...formData, company: e.target.value })}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
        />
        <input
          style={inputStyle}
          placeholder="Phone"
          type="tel"
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
        />
      </div>
      <textarea
        style={{ ...inputStyle, minHeight: 100, resize: 'vertical' as const }}
        placeholder="Tell us about your blockchain project..."
        value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
        onFocus={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'}
        onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          width: '100%',
          padding: '16px 32px',
          borderRadius: 12,
          border: 'none',
          background: status === 'sending' ? 'rgba(34,197,94,0.5)' : '#22c55e',
          color: '#000',
          fontSize: 16,
          fontWeight: 700,
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          transition: '0.25s',
        }}
      >
        {status === 'sending' ? 'Sending...' : 'Get a Free Blockchain Consultation'}
      </button>
      {status === 'error' && (
        <p style={{ color: '#ef4444', fontSize: 13, textAlign: 'center', margin: 0 }}>Something went wrong. Please try again or email us directly.</p>
      )}
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: 0 }}>
        Free consultation. NDA available on request. Response within 24 hours.
      </p>
    </form>
  );
}

// ─── FAQ ACCORDION ──────────────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        background: open ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)',
        borderColor: open ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: 16,
          fontWeight: 600,
          textAlign: 'left',
          cursor: 'pointer',
          gap: 16,
          lineHeight: 1.4,
        }}
      >
        <span>{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          style={{ flexShrink: 0, transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? 500 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p style={{ padding: '0 24px 20px', fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: '120+', label: 'Smart Contracts Deployed' },
  { value: '$2.4B+', label: 'TVL Secured' },
  { value: '18', label: 'Chains Supported' },
  { value: 'Zero', label: 'Critical Exploits' },
];

const services = [
  {
    title: 'Smart Contract Development',
    tag: 'Solidity / Rust',
    desc: 'Production-grade EVM and non-EVM smart contracts from ERC-20/721/1155 tokens to complex multi-contract protocol suites. Formal verification and comprehensive test coverage included.',
    chips: ['Solidity', 'Rust', 'Hardhat', 'Foundry', 'OpenZeppelin'],
    href: '/services/blockchain-web3/smart-contracts',
  },
  {
    title: 'DeFi Protocol Development',
    tag: 'DeFi',
    desc: 'AMMs, lending protocols, yield optimizers, DEXs, liquid staking, and perpetual futures engineered with formal economic modeling and MEV-resistant architecture.',
    chips: ['Uniswap V4', 'Aave', 'Chainlink', 'Flash Loans', 'Oracles'],
    href: '/services/blockchain-web3/defi-protocols',
  },
  {
    title: 'NFT Platform Development',
    tag: 'NFTs',
    desc: 'Custom NFT marketplaces with lazy minting, dynamic metadata, royalty enforcement (ERC-2981), auction mechanics, and cross-chain NFT bridging.',
    chips: ['ERC-721', 'ERC-1155', 'IPFS', 'Arweave', 'Seaport'],
    href: '/services/blockchain-web3/nft-platforms',
  },
  {
    title: 'Crypto Wallet Development',
    tag: 'Wallets',
    desc: 'Non-custodial and MPC wallets with multi-chain support, hardware wallet integration, social recovery, and institutional-grade key management.',
    chips: ['MPC', 'Account Abstraction', 'ERC-4337', 'WalletConnect', 'Biometrics'],
    href: '/services/blockchain-web3/crypto-wallets',
  },
  {
    title: 'Web3 dApp Development',
    tag: 'dApps',
    desc: 'Full-stack decentralized applications with seamless wallet auth, token gating, on-chain data indexing via The Graph, and gasless transactions.',
    chips: ['React', 'Next.js', 'wagmi', 'viem', 'RainbowKit'],
    href: '/services/blockchain-web3/web3-dapps',
  },
  {
    title: 'Token & ICO Development',
    tag: 'Tokenomics',
    desc: 'Custom token creation, tokenomics design, ICO/IDO/IEO launch platforms, vesting contracts, and governance token frameworks with DAO integration.',
    chips: ['ERC-20', 'SPL Tokens', 'Vesting', 'Staking', 'Governance'],
    href: '/services/blockchain-web3/smart-contracts',
  },
];

const platforms = [
  {
    name: 'Ethereum',
    desc: 'The most battle-tested smart contract platform. Ideal for DeFi, DAOs, and high-value protocols requiring maximum security and composability.',
    features: ['Largest DeFi ecosystem', 'EVM standard', 'Proven security', 'Institutional adoption'],
    color: '#627eea',
  },
  {
    name: 'Polygon',
    desc: 'EVM-compatible scaling solution offering near-instant transactions at a fraction of Ethereum gas costs. Perfect for consumer-facing dApps.',
    features: ['Low gas fees', 'EVM compatible', 'zkEVM', 'Enterprise partnerships'],
    color: '#8247e5',
  },
  {
    name: 'Solana',
    desc: 'High-performance blockchain with 65,000 TPS and sub-second finality. Optimal for trading platforms, gaming, and real-time applications.',
    features: ['65,000+ TPS', 'Sub-second finality', 'Low fees', 'Rust / Anchor'],
    color: '#14f195',
  },
  {
    name: 'Avalanche',
    desc: 'Subnet architecture enabling custom blockchain networks with configurable consensus. Ideal for institutional DeFi and regulatory-compliant chains.',
    features: ['Custom subnets', 'Fast finality', 'EVM compatible', 'Institutional focus'],
    color: '#e84142',
  },
  {
    name: 'Base & Arbitrum (L2s)',
    desc: 'Leading Ethereum Layer 2 rollups offering the security of Ethereum mainnet with dramatically lower costs and higher throughput.',
    features: ['Ethereum security', '10-100x cheaper', 'Growing ecosystem', 'Optimistic rollups'],
    color: '#0052ff',
  },
  {
    name: 'Hyperledger (Enterprise)',
    desc: 'Permissioned blockchain framework for enterprise consortiums requiring privacy, access control, and regulatory compliance.',
    features: ['Permissioned access', 'Private channels', 'Enterprise grade', 'Modular architecture'],
    color: '#f09c2f',
  },
];

const useCases = [
  { icon: '\u{1F4B0}', title: 'DeFi Lending & Borrowing', desc: 'Over-collateralized and under-collateralized lending protocols with dynamic interest rate models and liquidation engines.' },
  { icon: '\u{1F504}', title: 'Decentralized Exchanges', desc: 'AMM-based and order book DEXs with concentrated liquidity, limit orders, and cross-chain swap aggregation.' },
  { icon: '\u{1F331}', title: 'Yield Farming & Staking', desc: 'Auto-compounding yield vaults, liquid staking derivatives, and multi-strategy yield optimization protocols.' },
  { icon: '\u{1F3A8}', title: 'NFT Marketplaces', desc: 'Custom marketplace platforms with auction mechanics, creator royalties, collection launchpads, and cross-chain listings.' },
  { icon: '\u{1F4E6}', title: 'Supply Chain Tracking', desc: 'Immutable provenance tracking, IoT-integrated verification, and multi-party supply chain transparency solutions.' },
  { icon: '\u{1F464}', title: 'Digital Identity (DID)', desc: 'Self-sovereign identity systems, verifiable credentials, and privacy-preserving KYC with zero-knowledge proofs.' },
  { icon: '\u{1F3E0}', title: 'Tokenized Real Estate', desc: 'Fractional property ownership tokens, rental income distribution, and compliant security token frameworks.' },
  { icon: '\u{1F5F3}', title: 'DAO Governance', desc: 'On-chain voting systems, treasury management, proposal frameworks, and quadratic/conviction voting mechanisms.' },
];

const securityFeatures = [
  {
    title: 'Smart Contract Audits',
    desc: 'Multi-phase audit pipeline with automated static analysis (Slither, Mythril), manual expert review, and coordination with top-tier third-party audit firms.',
    icon: '\u{1F50D}',
  },
  {
    title: 'Formal Verification',
    desc: 'Mathematical proof of contract correctness for critical financial logic. We use Certora and K Framework to verify invariants cannot be violated.',
    icon: '\u{2705}',
  },
  {
    title: 'Penetration Testing',
    desc: 'Adversarial testing simulating real-world attack vectors including flash loan attacks, oracle manipulation, reentrancy, and front-running scenarios.',
    icon: '\u{1F6E1}',
  },
  {
    title: 'Multi-Sig & Governance',
    desc: 'Gnosis Safe multi-signature wallets for treasury and admin operations. Time-locked upgrades and on-chain governance for protocol changes.',
    icon: '\u{1F511}',
  },
  {
    title: 'Key Management',
    desc: 'HSM-backed key storage, MPC threshold signatures, and social recovery mechanisms. Institutional-grade custody infrastructure.',
    icon: '\u{1F512}',
  },
  {
    title: '24/7 On-Chain Monitoring',
    desc: 'Real-time transaction monitoring via Tenderly and OpenZeppelin Defender. Automated alerts for anomalous activity, large transactions, and governance proposals.',
    icon: '\u{1F4CA}',
  },
];

const techStack = [
  { label: 'Smart Contract Languages', chips: ['Solidity', 'Rust', 'Move', 'Vyper', 'Cairo'] },
  { label: 'Development Frameworks', chips: ['Hardhat', 'Foundry', 'Anchor', 'Truffle', 'Brownie'] },
  { label: 'Libraries & SDKs', chips: ['ethers.js', 'web3.js', 'viem', 'wagmi', 'web3.py'] },
  { label: 'Infrastructure', chips: ['The Graph', 'IPFS', 'Chainlink', 'Alchemy', 'Infura'] },
  { label: 'Security Tools', chips: ['OpenZeppelin', 'Slither', 'Mythril', 'Certora', 'Echidna'] },
  { label: 'Frontend & Auth', chips: ['RainbowKit', 'WalletConnect', 'Privy', 'Dynamic', 'SIWE'] },
];

const processSteps = [
  {
    num: '01',
    title: 'Tokenomics Design',
    desc: 'We model your token economics, protocol incentive structures, and game theory. Output includes a formal tokenomics whitepaper, emission schedules, and economic attack vector analysis.',
    deliverables: ['Tokenomics Model', 'Emission Schedule', 'Economic Simulation', 'Whitepaper Draft'],
    duration: '1-2 weeks',
  },
  {
    num: '02',
    title: 'Architecture & Chain Selection',
    desc: 'Protocol architecture design with chain selection rationale, gas optimization strategy, upgrade patterns (UUPS/Transparent Proxy), and cross-chain considerations.',
    deliverables: ['Architecture Doc', 'Chain Analysis', 'Gas Estimates', 'Threat Model'],
    duration: '1-2 weeks',
  },
  {
    num: '03',
    title: 'Smart Contract Development',
    desc: 'Iterative contract development with modular design patterns, inline NatSpec documentation, 100% unit test coverage, and continuous integration with gas benchmarks.',
    deliverables: ['Contract Suite', 'Unit Tests (100%)', 'NatSpec Docs', 'Gas Benchmarks'],
    duration: '3-8 weeks',
  },
  {
    num: '04',
    title: 'Security Audit',
    desc: 'Internal static analysis via Slither and Mythril, fuzzing with Echidna, formal verification of critical invariants, and third-party audit coordination. Every finding remediated and re-verified.',
    deliverables: ['Static Analysis', 'Fuzz Testing', '3rd-Party Audit', 'Remediation Report'],
    duration: '2-4 weeks',
  },
  {
    num: '05',
    title: 'Testnet Deployment',
    desc: 'Full end-to-end deployment on relevant testnets. Frontend integration, subgraph indexing, load simulation, and community beta testing with bug bounty program setup.',
    deliverables: ['Testnet Deploy', 'Subgraph', 'Load Tests', 'Bug Bounty Setup'],
    duration: '1-3 weeks',
  },
  {
    num: '06',
    title: 'Mainnet & Monitoring',
    desc: 'Phased mainnet launch with multisig governance, upgrade proxies, 24/7 on-chain monitoring via Tenderly, and incident response procedures. Ongoing protocol maintenance and upgrades.',
    deliverables: ['Mainnet Launch', 'Multisig Setup', 'Monitoring Alerts', 'Runbook'],
    duration: 'Ongoing',
  },
];

const caseStudies = [
  {
    title: 'DeFi Lending Protocol',
    category: 'DeFi',
    chain: 'Ethereum + Polygon',
    desc: 'Built a multi-chain lending protocol supporting 15+ collateral types with dynamic interest rate models, flash loan integration, and automated liquidation bots. Achieved $180M TVL within 3 months of launch.',
    metrics: [
      { value: '$180M', label: 'TVL in 3 months' },
      { value: '15+', label: 'Collateral types' },
      { value: '99.99%', label: 'Uptime' },
    ],
    techUsed: ['Solidity', 'Hardhat', 'Chainlink Oracles', 'The Graph', 'React'],
  },
  {
    title: 'Cross-Chain NFT Marketplace',
    category: 'NFT',
    chain: 'Ethereum + Solana + Polygon',
    desc: 'Developed a cross-chain NFT marketplace with lazy minting, creator royalty enforcement, and auction mechanics. Implemented cross-chain NFT bridging via LayerZero for seamless multi-chain listings.',
    metrics: [
      { value: '50K+', label: 'NFTs minted' },
      { value: '$12M', label: 'Trading volume' },
      { value: '3', label: 'Chains supported' },
    ],
    techUsed: ['Solidity', 'Rust (Anchor)', 'Seaport', 'LayerZero', 'Next.js'],
  },
  {
    title: 'Enterprise Supply Chain Platform',
    category: 'Enterprise',
    chain: 'Hyperledger Fabric',
    desc: 'Designed and deployed a permissioned blockchain network for a Fortune 500 manufacturer to track product provenance across 200+ suppliers. Integrated IoT sensors for real-time quality verification.',
    metrics: [
      { value: '200+', label: 'Suppliers onboarded' },
      { value: '2M+', label: 'Items tracked' },
      { value: '40%', label: 'Dispute reduction' },
    ],
    techUsed: ['Hyperledger Fabric', 'Go', 'IoT Integration', 'React', 'GraphQL'],
  },
];

const whyChooseUs = [
  {
    title: 'Audit-First Engineering',
    desc: 'Security is not an afterthought. Every smart contract is designed with threat modeling from day one, with automated analysis, fuzz testing, and third-party audits baked into our development process.',
    stat: '120+',
    statLabel: 'Contracts audited',
  },
  {
    title: 'Multi-Chain Mastery',
    desc: 'We deploy across 18+ blockchains including Ethereum, Solana, Polygon, Avalanche, Base, Arbitrum, and Hyperledger. One team, full-stack expertise across EVM and non-EVM ecosystems.',
    stat: '18+',
    statLabel: 'Chains supported',
  },
  {
    title: 'DeFi Protocol Experts',
    desc: 'Our team has built lending protocols, AMMs, yield vaults, and cross-chain bridges that collectively secure billions in TVL. We understand the economic attack vectors that most developers miss.',
    stat: '$2.4B+',
    statLabel: 'TVL secured',
  },
  {
    title: 'Zero Critical Exploits',
    desc: 'Across every protocol we have built and launched, we maintain a perfect security record with zero critical exploits. Our multi-phase audit pipeline and formal verification catch vulnerabilities before deployment.',
    stat: 'Zero',
    statLabel: 'Critical exploits',
  },
  {
    title: 'Full-Stack Delivery',
    desc: 'From tokenomics design and smart contract development to frontend dApps, subgraph indexing, and 24/7 post-launch monitoring, we handle the entire blockchain development lifecycle under one roof.',
    stat: '50+',
    statLabel: 'Projects shipped',
  },
  {
    title: 'Rapid Turnaround',
    desc: 'Our battle-tested frameworks and reusable contract libraries accelerate development timelines by 40-60%. You get production-grade code faster without compromising on security or quality.',
    stat: '48hr',
    statLabel: 'Proposal delivery',
  },
];

const complianceItems = [
  {
    title: 'MiCA (EU)',
    desc: 'Markets in Crypto-Assets regulation compliance. We build crypto-asset service provider (CASP) infrastructure, reserve management systems, and whitepaper disclosure frameworks.',
    icon: '\u{1F1EA}\u{1F1FA}',
  },
  {
    title: 'SEC Regulations (US)',
    desc: 'Securities law awareness in token design. We help structure utility tokens, implement Reg D/S exemptions for security tokens, and build compliant fundraising platforms.',
    icon: '\u{1F1FA}\u{1F1F8}',
  },
  {
    title: 'AML/KYC Integration',
    desc: 'On-chain and off-chain identity verification with Chainalysis, Elliptic, and custom compliance engines. Transaction screening and suspicious activity reporting.',
    icon: '\u{1F50D}',
  },
  {
    title: 'FATF Travel Rule',
    desc: 'Virtual Asset Service Provider (VASP) compliance with Travel Rule requirements. We integrate Notabene, Sygna, and custom VASP identification protocols.',
    icon: '\u{1F30D}',
  },
];

const marketStats = [
  { value: '$67.4B', label: 'Global blockchain market size by 2026', source: 'MarketsandMarkets' },
  { value: '68.4%', label: 'CAGR of blockchain market (2021-2026)', source: 'Grand View Research' },
  { value: '$300B+', label: 'DeFi total value locked (peak)', source: 'DeFi Llama' },
  { value: '420M+', label: 'Crypto users worldwide', source: 'Triple-A' },
];

const adoptionTrends = [
  {
    title: 'Enterprise Adoption Surge',
    desc: 'Fortune 500 companies are rapidly adopting blockchain for supply chain, trade finance, and digital identity. 81% of the top 100 public companies are using blockchain technology in some form.',
  },
  {
    title: 'DeFi 2.0 Evolution',
    desc: 'The DeFi ecosystem is maturing with institutional-grade protocols, real-world asset tokenization, and regulatory-compliant frameworks that bridge traditional and decentralized finance.',
  },
  {
    title: 'Layer 2 Scaling Era',
    desc: 'Layer 2 rollups (Arbitrum, Base, Optimism, zkSync) have reduced transaction costs by 100x while maintaining Ethereum security. This unlocks consumer-scale blockchain applications.',
  },
  {
    title: 'Tokenization of Everything',
    desc: 'Real estate, commodities, private equity, and even carbon credits are being tokenized on-chain. The tokenized asset market is projected to reach $16T by 2030 (BCG estimate).',
  },
];

const engagementModels = [
  {
    title: 'Fixed-Price Projects',
    desc: 'Best for well-defined scopes like token deployments, single smart contracts, or NFT collections. You get a fixed cost, fixed timeline, and clear deliverables upfront. Includes a comprehensive audit report and deployment documentation.',
    ideal: 'Token launches, NFT drops, simple dApps',
    starts: 'From $30K',
    features: [
      'Fixed scope and timeline',
      'Comprehensive audit included',
      'Full deployment support',
      'Post-launch handoff docs',
    ],
  },
  {
    title: 'Dedicated Blockchain Team',
    desc: 'A dedicated team of blockchain engineers, auditors, and frontend developers embedded in your project. Full-time commitment with weekly sprints, transparent reporting, and direct Slack access to your team.',
    ideal: 'DeFi protocols, large-scale platforms',
    starts: 'From $15K/month',
    features: [
      'Dedicated engineering team',
      'Weekly sprint reviews',
      'Direct Slack/Discord access',
      'Scalable team size',
    ],
  },
  {
    title: 'Smart Contract Audit Retainer',
    desc: 'Ongoing security partnership with quarterly audits, continuous monitoring, and priority incident response. Ideal for protocols with regular upgrades, governance changes, and evolving smart contract systems.',
    ideal: 'Live protocols, DAO governance',
    starts: 'From $8K/month',
    features: [
      'Quarterly security audits',
      '24/7 monitoring setup',
      'Priority incident response',
      'Upgrade review and testing',
    ],
  },
];

const testimonials = [
  {
    quote: 'Codazz delivered our DeFi protocol on time and within budget. Their security-first approach gave us the confidence to launch with $50M+ in liquidity from day one. The audit process was thorough and transparent.',
    name: 'Marcus Chen',
    role: 'CTO, DeFi Protocol',
    rating: 5,
  },
  {
    quote: 'We evaluated five blockchain development companies before choosing Codazz. Their deep understanding of Solana architecture and tokenomics design set them apart. Our NFT marketplace processed 50K+ mints in the first month.',
    name: 'Sarah Okonkwo',
    role: 'Founder, NFT Platform',
    rating: 5,
  },
  {
    quote: 'The enterprise blockchain solution Codazz built transformed our supply chain operations. We reduced disputes by 40% and gained real-time visibility across 200+ suppliers. Professional team with deep technical expertise.',
    name: 'James Richardson',
    role: 'VP Engineering, Fortune 500 Manufacturer',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'How much does blockchain development cost?',
    a: 'Blockchain development costs range from $30,000 for a simple smart contract or token deployment to $500,000+ for a full DeFi protocol with multiple audit rounds. Factors include contract complexity, number of chains, security audit requirements, frontend dApp development, and ongoing maintenance. We provide detailed, transparent estimates after a free technical consultation.',
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
];

// ─── SHARED STYLES ──────────────────────────────────────────────────────────────

const sectionLabel: React.CSSProperties = {
  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.25)', marginBottom: 20,
};

const sectionH2 = (line1: string, line2: string): React.ReactNode => (
  <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
    {line1}<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>{line2}</span>
  </h2>
);

const cardBase: React.CSSProperties = {
  padding: '36px 32px',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  transition: 'all 0.35s ease',
};

function cardHover(e: React.MouseEvent<HTMLDivElement>, enter: boolean) {
  const el = e.currentTarget;
  if (enter) {
    el.style.borderColor = 'rgba(34,197,94,0.2)';
    el.style.background = 'rgba(34,197,94,0.03)';
    el.style.transform = 'translateY(-4px)';
    el.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)';
  } else {
    el.style.borderColor = 'rgba(255,255,255,0.06)';
    el.style.background = 'rgba(255,255,255,0.015)';
    el.style.transform = '';
    el.style.boxShadow = '';
  }
}

const chipStyle: React.CSSProperties = {
  fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)',
  padding: '6px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100,
};

const greenAccent = '#22c55e';

const checkSvg = (
  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={greenAccent} strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
);

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────────

export default function BlockchainWeb3Page() {
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Blockchain Development' },
          ]} />
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="wide" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'center' }}>
              {/* Left — copy */}
              <div>
                <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                  Blockchain Development Company
                </div>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Blockchain Development<br />
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>Company</span>
                </h1>
                <p className="reveal" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.75, maxWidth: 540 }}>
                  We build production-grade smart contracts, DeFi protocols, NFT platforms, Web3 dApps, and crypto wallets. From Solidity to Rust, Ethereum to Solana &mdash; full-stack blockchain engineering with audit-first security.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  <Link href="/contact" style={{ background: greenAccent, color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                    Start Your Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="#case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                    View Case Studies
                  </Link>
                </div>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(12px, 2vw, 24px)' }}>
                  {heroStats.map((s) => (
                    <div key={s.label}>
                      <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1.3, marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right — lead form */}
              <div className="reveal reveal-d2" style={{ padding: 'clamp(24px, 3vw, 40px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)' }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Get a Free Blockchain Consultation</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.6 }}>Tell us about your project. We&apos;ll send a detailed proposal within 48 hours.</p>
                <LeadCaptureFormInline context="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 2 — TRUST BADGES
        ═══════════════════════════════════════════════════════════════════════ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container reveal" style={{ padding: '32px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Trusted By Leading Web3 Teams</p>
            <TrustBadges compact />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 3 — BLOCKCHAIN SERVICES GRID
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Our Blockchain Services</div>
              {sectionH2('Full-Stack Blockchain', 'Development Services.')}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 600, lineHeight: 1.75, marginTop: 20 }}>
                End-to-end blockchain development from smart contract architecture to production deployment, with security baked into every layer.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ ...cardBase, position: 'relative', overflow: 'hidden', height: '100%' }}
                    onMouseEnter={e => cardHover(e, true)}
                    onMouseLeave={e => cardHover(e, false)}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${greenAccent},transparent)` }} />
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 20, display: 'inline-block' }}>{s.tag}</span>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: s.chips ? 24 : 0 }}>{s.desc}</p>
                    {s.chips && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {s.chips.map(c => <span key={c} style={chipStyle}>{c}</span>)}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 4 — BLOCKCHAIN PLATFORMS
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Platforms We Build On</div>
              {sectionH2('Multi-Chain', 'Expertise.')}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 600, lineHeight: 1.75, marginTop: 20 }}>
                We deploy on the chain that best fits your use case &mdash; whether it&apos;s Ethereum&apos;s security, Solana&apos;s speed, or Hyperledger&apos;s privacy.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {platforms.map(p => (
                <div key={p.name} style={{ ...cardBase, position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${p.color},transparent)` }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.color }} />
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>{p.name}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {p.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {checkSvg}
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 5 — USE CASES
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
              <div style={sectionLabel}>Use Cases</div>
              {sectionH2('What We Build', 'for Web3.')}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20 }}>
                From DeFi primitives to enterprise blockchain solutions, we engineer decentralized systems that solve real-world problems.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {useCases.map(uc => (
                <div key={uc.title} style={{ ...cardBase, padding: '32px 28px' }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{uc.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em', marginBottom: 10 }}>{uc.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 6 — SECURITY
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse,rgba(34,197,94,0.06) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
              <div style={sectionLabel}>Security First</div>
              {sectionH2('Audit-Grade', 'Security.')}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20 }}>
                Every line of code is written with adversarial thinking. Our multi-layered security approach has protected $2.4B+ in total value locked with zero critical exploits.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {securityFeatures.map(sf => (
                <div key={sf.title} style={{ ...cardBase, borderColor: 'rgba(34,197,94,0.08)', background: 'rgba(34,197,94,0.02)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)'; e.currentTarget.style.background = 'rgba(34,197,94,0.05)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.08)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; e.currentTarget.style.transform = ''; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{sf.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>{sf.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{sf.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 7 — TECH STACK
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>Technology</div>
                {sectionH2('The Stack Behind', 'Your Protocol.')}
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 380, lineHeight: 1.75, margin: 0 }}>
                Battle-tested tooling chosen for security, auditability, developer experience, and long-term protocol resilience.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {techStack.map(cat => (
                <div key={cat.label} style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c} style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = greenAccent; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}
                      >{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 8 — PROCESS
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={sectionLabel}>Our Process</div>
              {sectionH2('From Tokenomics', 'to Mainnet.')}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 600, lineHeight: 1.75, marginTop: 20 }}>
                A battle-tested 6-phase methodology designed specifically for blockchain projects, where security and correctness are non-negotiable.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom,rgba(34,197,94,0.5),rgba(34,197,94,0.05))', zIndex: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {processSteps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'start', padding: '32px 0' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(34,197,94,0.4)', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#fff', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>
                    <div style={{ padding: 'clamp(20px, 3vw, 32px) clamp(16px, 3vw, 40px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.boxShadow = ''; }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' }}>{step.duration}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 24 }}>{step.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100 }}>
                            {checkSvg}
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 9 — CASE STUDIES
        ═══════════════════════════════════════════════════════════════════════ */}
        <section id="case-studies" className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Case Studies</div>
              {sectionH2('Blockchain Projects', 'We\'ve Shipped.')}
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {caseStudies.map((cs, idx) => (
                <div key={cs.title} style={{ padding: 'clamp(28px, 4vw, 48px)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease', position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.15)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${greenAccent},transparent)` }} />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(24px, 4vw, 48px)' }}>
                    <div>
                      <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: greenAccent, background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100 }}>{cs.category}</span>
                        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.05)', padding: '5px 14px', borderRadius: 100 }}>{cs.chain}</span>
                      </div>
                      <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>{cs.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 24 }}>{cs.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {cs.techUsed.map(t => <span key={t} style={chipStyle}>{t}</span>)}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
                      {cs.metrics.map(m => (
                        <div key={m.label} style={{ padding: '20px 24px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, background: 'rgba(255,255,255,0.02)' }}>
                          <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: 4 }}>{m.value}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            WHY CHOOSE CODAZZ
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(circle,rgba(34,197,94,0.06) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Why Codazz</div>
              {sectionH2('Why Teams Choose', 'Codazz for Blockchain.')}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 620, lineHeight: 1.75, marginTop: 20 }}>
                We are not a generic dev shop that bolted on blockchain. Our team lives and breathes Web3 &mdash; from tokenomics to Tenderly alerts.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {whyChooseUs.map(item => (
                <div key={item.title} style={{ ...cardBase, display: 'flex', flexDirection: 'column', gap: 0 }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: greenAccent, letterSpacing: '-0.03em', lineHeight: 1 }}>{item.stat}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.statLabel}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 10 — COMPLIANCE
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
              <div style={sectionLabel}>Regulatory Compliance</div>
              {sectionH2('Compliant by', 'Design.')}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20 }}>
                We build blockchain solutions that satisfy global regulatory requirements &mdash; from MiCA in the EU to SEC guidance in the US.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {complianceItems.map(ci => (
                <div key={ci.title} style={{ ...cardBase }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{ci.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>{ci.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{ci.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 11 — MARKET STATS
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse,rgba(34,197,94,0.05) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center' }}>
              <div style={sectionLabel}>Market Opportunity</div>
              {sectionH2('The Blockchain', 'Market Is Booming.')}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 600, lineHeight: 1.75, marginTop: 20, margin: '20px auto 0' }}>
                The global blockchain market is experiencing explosive growth. Now is the time to build &mdash; the infrastructure is maturing and institutional adoption is accelerating.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20 }}>
              {marketStats.map(ms => (
                <div key={ms.label} style={{ padding: '40px 32px', border: '1px solid rgba(34,197,94,0.1)', borderRadius: 24, background: 'rgba(34,197,94,0.02)', textAlign: 'center', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.1)'; e.currentTarget.style.transform = ''; }}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: greenAccent, letterSpacing: '-0.03em', marginBottom: 8 }}>{ms.value}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: 12 }}>{ms.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontStyle: 'italic' }}>Source: {ms.source}</div>
                </div>
              ))}
            </div>

            {/* Adoption Trends */}
            <div className="reveal reveal-d2" style={{ marginTop: 64 }}>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 32, textAlign: 'center' }}>
                Key Adoption Trends Driving Blockchain Growth
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
                {adoptionTrends.map(trend => (
                  <div key={trend.title} style={{ padding: '28px 24px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.15)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                    <h4 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 10, letterSpacing: '-0.01em' }}>{trend.title}</h4>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{trend.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 12 — TESTIMONIALS
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center' }}>
              <div style={sectionLabel}>Client Testimonials</div>
              {sectionH2('What Our Clients', 'Say About Us.')}
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {testimonials.map(t => (
                <div key={t.name} style={{ ...cardBase, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  {/* Stars */}
                  <div>
                    <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={greenAccent} stroke="none">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic' }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            ENGAGEMENT MODELS
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
              <div style={sectionLabel}>Engagement Models</div>
              {sectionH2('Flexible Ways', 'to Work With Us.')}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20 }}>
                Whether you need a single smart contract or a full protocol team, we have an engagement model that fits your needs and budget.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {engagementModels.map(em => (
                <div key={em.title} style={{ ...cardBase, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => cardHover(e, true)}
                  onMouseLeave={e => cardHover(e, false)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${greenAccent},transparent)` }} />
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>{em.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 20 }}>{em.desc}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                      {em.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          {checkSvg}
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>Ideal for: {em.ideal}</span>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: greenAccent }}>{em.starts}</span>
                    <Link href="/contact" style={{ fontSize: 13, fontWeight: 600, color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, opacity: 0.7 }}>
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 13 — FAQ
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: 48, textAlign: 'center' }}>
              <div style={sectionLabel}>FAQ</div>
              {sectionH2('Frequently Asked', 'Questions.')}
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map(f => (
                <FAQItem key={f.q} question={f.q} answer={f.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            SECTION 14 — BOTTOM CTA + LEAD FORM
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse,rgba(34,197,94,0.1) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'center' }}>
              {/* Left — CTA copy */}
              <div>
                <div className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>Ready to Build on Web3?</div>
                <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>
                  Let&apos;s Build Your<br /><span style={{ color: greenAccent }}>Blockchain Project.</span>
                </h2>
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
                  Tell us about your protocol, dApp, or blockchain idea. We&apos;ll send a detailed proposal with architecture recommendations, timeline, and cost estimate within 48 hours.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {['Audit-First Development Approach', 'Multi-Chain Deployment Expertise', '48-Hour Detailed Proposal', 'NDA Available on Day 1', 'Post-Launch Monitoring & Support'].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={greenAccent} strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right — form */}
              <div className="reveal reveal-d2" style={{ padding: 'clamp(24px, 3vw, 40px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)' }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Get Your Free Proposal</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 24, lineHeight: 1.6 }}>No obligation. We&apos;ll analyze your requirements and provide expert recommendations.</p>
                <LeadCaptureFormInline context="bottom-cta" />
              </div>
            </div>
            {/* Trust badges */}
            <div className="reveal reveal-d4" style={{ marginTop: 64 }}>
              <TrustBadges compact />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════
            RELATED SERVICES
        ═══════════════════════════════════════════════════════════════════════ */}
        <section className="section-padding-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Related Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {[
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Integrate AI-powered analytics, prediction models, and automation into your decentralized applications.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Web3-native SaaS platforms with wallet auth, token gating, and on-chain analytics dashboards.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Reliable infrastructure for node operations, indexers, subgraphs, and blockchain data pipelines.' },
              ].map(s => (
                <a key={s.href} href={s.href} style={{ display: 'block', padding: '28px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-service links */}
        <section className="section-padding-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Explore Our Blockchain Services</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'Smart Contracts', href: '/services/blockchain-web3/smart-contracts' },
                { name: 'DeFi Protocols', href: '/services/blockchain-web3/defi-protocols' },
                { name: 'NFT Platforms', href: '/services/blockchain-web3/nft-platforms' },
                { name: 'Crypto Wallets', href: '/services/blockchain-web3/crypto-wallets' },
                { name: 'Web3 dApps', href: '/services/blockchain-web3/web3-dapps' },
              ].map(link => (
                <a key={link.href} href={link.href} style={{
                  padding: '8px 20px',
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="section-padding-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ padding: '40px 0' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                Blockchain Development Company You Can Trust
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                As a leading blockchain development company, Codazz specializes in building decentralized solutions that transform how businesses operate. Our team of experienced blockchain engineers works with the latest technologies including Solidity, Rust, and Move to create smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain solutions that are secure, scalable, and production-ready.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                We support deployments across all major blockchain platforms including Ethereum, Polygon, Solana, Avalanche, Base, Arbitrum, and Hyperledger Fabric. Whether you&apos;re building a decentralized finance protocol, launching an NFT marketplace, creating a crypto wallet, or implementing enterprise blockchain for supply chain tracking, our security-first development approach ensures your project launches with confidence.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                Every smart contract we develop goes through a rigorous multi-phase security audit process including automated static analysis with Slither and Mythril, fuzz testing with Echidna, formal verification with Certora, and coordination with leading third-party audit firms. This audit-first approach has enabled us to maintain a perfect security record with zero critical exploits across all protocols we&apos;ve built and launched.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                From tokenomics design and smart contract architecture to testnet deployment, mainnet launch, and 24/7 post-launch monitoring, Codazz handles the entire blockchain development lifecycle. Our team has deep experience with DeFi primitives including automated market makers (AMMs), lending and borrowing protocols, yield farming vaults, decentralized exchanges (DEXs), and liquid staking derivatives.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                We also specialize in regulatory compliance for blockchain projects, integrating AML/KYC solutions, building with MiCA and SEC frameworks in mind, and implementing FATF Travel Rule compliance. Our enterprise blockchain solutions on Hyperledger Fabric serve Fortune 500 companies across supply chain, trade finance, and digital identity verticals.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                Contact us today for a free blockchain development consultation. We&apos;ll analyze your project requirements and provide a detailed proposal with architecture recommendations, security considerations, timeline, and cost estimates within 48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 24,
            }}>
              Industries We Serve
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 12,
            }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
                { name: 'Real Estate', href: '/industries/real-estate' },
                { name: 'Gaming', href: '/industries/gaming' },
              ].map(ind => (
                <a
                  key={ind.href}
                  href={ind.href}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
