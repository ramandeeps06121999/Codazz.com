'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

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

const tocItems = [
  { id: 'intro', label: 'Introduction', emoji: '🔗' },
  { id: 'cost-tiers', label: 'Blockchain Cost Tiers', emoji: '💰' },
  { id: 'smart-contracts', label: 'Smart Contract Audit Costs', emoji: '🔒' },
  { id: 'defi-costs', label: 'DeFi Protocol Costs', emoji: '📊' },
  { id: 'nft-marketplace', label: 'NFT Marketplace Costs', emoji: '🖼️' },
  { id: 'chain-comparison', label: 'Chain Selection Guide', emoji: '⛓️' },
  { id: 'developer-rates', label: 'Blockchain Developer Rates', emoji: '👨‍💻' },
  { id: 'factors-affecting-cost', label: 'Factors Affecting Cost', emoji: '⚙️' },
  { id: 'cost-breakdown', label: 'Component Cost Breakdown', emoji: '🔧' },
  { id: 'maintenance', label: 'Ongoing Maintenance Costs', emoji: '🛠️' },
  { id: 'build-vs-buy', label: 'Build vs Fork Protocols', emoji: '⚖️' },
  { id: 'why-codazz', label: 'Why Choose Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '18 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
  { slug: 'saas-development-cost-guide', title: 'SaaS Development Cost Guide 2026', category: 'Business', readTime: '12 min' },
];

export default function BlockchainDevelopmentCostClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/blockchain-development-cost.jpg"
              alt="Blockchain development cost in 2026"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 28px)',
              }}
            />
          </div>
        </div>

        {/* -- ARTICLE HERO -- */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                padding: '5px 14px', borderRadius: 100,
              }}>Engineering</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                17 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Blockchain Development Cost in 2026: Smart Contracts, DeFi &amp; NFT
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive cost breakdown for blockchain development in 2026 — from smart contract audit costs to DeFi protocol development ($100K–$2M), NFT marketplace builds, Ethereum vs Polygon vs Solana gas fee comparisons, developer rates, and ongoing maintenance budgets.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: 'X' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)',
                  background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }} id="intro">
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Blockchain development has matured significantly since the ICO frenzy. In 2026, enterprises deploy supply chain tracking on Hyperledger, startups build DeFi protocols on Ethereum and Solana, and governments explore CBDCs. The technology is real, the use cases are proven, and the question has shifted from "should we use blockchain?" to <strong style={{ color: '#ffffff' }}>how much will it cost to build?</strong>
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Blockchain development is uniquely expensive compared to traditional software for several reasons: smart contract bugs can lose millions of dollars, security audits are mandatory, the developer talent pool is smaller, and the technology evolves rapidly. A single vulnerability in a DeFi protocol can result in catastrophic financial loss — which is why cutting costs on blockchain development is particularly dangerous.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    In this guide, we break down every cost factor — from simple smart contract deployment to building a full DeFi protocol or NFT marketplace — with real 2026 pricing benchmarks.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Whether you are a startup founder raising a seed round to fund your blockchain build, an enterprise architect evaluating DeFi treasury management, or a technical co-founder trying to scope your protocol budget accurately, this guide covers everything you need to know before making any commitments.
                  </p>
                </div>

                {/* Cost Tiers */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Blockchain Development Cost Tiers</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Blockchain projects span an enormous cost range depending on what you are building. Here are the primary tiers.
                  </p>

                  {/* Tier 1 */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'rgba(34,197,94,0.15)', color: '#ffffff', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tier 1</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>2–8 weeks</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Smart Contracts &amp; Token Development</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>$10,000 – $50,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      ERC-20/ERC-721 token contracts, simple DeFi contracts (staking, vesting, airdrop), NFT minting contracts, basic DAO governance, or supply chain verification smart contracts. Includes contract development, unit testing, testnet deployment, and a basic security audit. Covers most token launches, simple NFT projects, and proof-of-concept blockchain integrations.
                    </p>
                  </div>

                  {/* Tier 2 */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: 36, marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'rgba(167,139,250,0.12)', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tier 2</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>3–8 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>DeFi Platform / dApp Development</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', marginBottom: 16, letterSpacing: '-0.02em' }}>$50,000 – $300,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      Full decentralized applications including DEX, lending/borrowing protocols, yield aggregators, NFT marketplaces with royalty logic, cross-chain bridges, or enterprise blockchain platforms. Includes complex smart contract systems, web3 frontend (React + ethers.js/wagmi), wallet integration (MetaMask, WalletConnect), comprehensive security audit, and mainnet deployment with monitoring.
                    </p>
                  </div>

                  {/* Tier 3 */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: 36 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 100, background: 'rgba(52,211,153,0.12)', color: '#34d399', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tier 3</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>12–24+ months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Custom Blockchain / Layer 1 Protocol</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#34d399', marginBottom: 16, letterSpacing: '-0.02em' }}>$300,000 – $2,000,000+</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      Building a custom blockchain from scratch or a Layer 2 scaling solution. Includes custom consensus mechanism design, node implementation, P2P networking, block explorer, wallet software, SDK, validator management, governance framework, and extensive security research. This tier is for companies building foundational infrastructure — think Solana, Avalanche, or enterprise-specific chains.
                    </p>
                  </div>
                </div>

                {/* Smart Contract Audit Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="smart-contracts">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Smart Contract Audit Costs in 2026</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Security audits are not optional for blockchain — they are the cost of staying solvent. The DeFi space lost over $2.8 billion to exploits in 2024 alone, almost all from unaudited or poorly audited contracts. Here is what audits actually cost.
                  </p>

                  <div style={{ background: 'linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(96,165,250,0.2)', borderRadius: 28, padding: 36, marginBottom: 28 }}>
                    {[
                      { tier: 'Automated Scanning', cost: '$2,000 – $5,000', detail: 'Tools like Slither and Mythril run static analysis on your contracts. Fast and cheap — catches common vulnerability patterns (reentrancy, integer overflow, access control). Not sufficient for production DeFi. Suitable for early-stage review before deeper audit.' },
                      { tier: 'Mid-Tier Manual Audit', cost: '$15,000 – $40,000', detail: 'A human auditor (or small team) reviews your code line by line, runs custom fuzzing, checks business logic for economic attack vectors. Firms like Hacken, Solidproof, or independent auditors in this range. Good for protocols under $5M TVL.' },
                      { tier: 'Top-Tier Audit Firm', cost: '$40,000 – $150,000+', detail: 'Trail of Bits, OpenZeppelin, ChainSecurity, or Spearbit. They assign senior security researchers, produce formal verification where applicable, simulate economic attacks, and provide detailed remediation reports. Essential for protocols targeting $10M+ TVL.' },
                      { tier: 'Re-audit After Fixes', cost: '$5,000 – $30,000', detail: 'After implementing audit findings, you need a re-audit to confirm fixes are correct and did not introduce new bugs. Budget for at least one re-audit in your security planning. Major protocols do 2–3 full audit cycles.' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 20, marginBottom: i < 3 ? 24 : 0, paddingBottom: i < 3 ? 24 : 0, borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                        <div style={{ flexShrink: 0, minWidth: 180 }}>
                          <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: 4 }}>{item.tier}</span>
                          <span style={{ fontSize: 13, color: '#60a5fa', fontWeight: 700 }}>{item.cost}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ef4444' }}>Critical:</strong> A $50,000 audit that prevents a $5M exploit is the best ROI you will ever get. Never skip audits to save money. Even if your budget is tight, at minimum get an automated scan + one manual audit from a credible firm.
                    </p>
                  </div>
                </div>

                {/* DeFi Protocol Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="defi-costs">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>DeFi Protocol Development Costs</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    DeFi protocol development covers a wide range of project types — from simple yield vaults to full-featured money markets. Here is a breakdown by DeFi category.
                  </p>

                  {[
                    { type: 'DEX (Decentralized Exchange)', range: '$80,000 – $300,000', items: ['Automated Market Maker (AMM) contracts', 'Liquidity pool management', 'Swap routing engine', 'Concentrated liquidity (Uniswap V3 style)', 'Front-end trading interface', 'Price impact calculations', 'Slippage protection', 'Multi-hop routing'] },
                    { type: 'Lending / Borrowing Protocol', range: '$100,000 – $400,000', items: ['Collateral management contracts', 'Interest rate models (variable/fixed)', 'Liquidation engine', 'Oracle integration (Chainlink, Pyth)', 'Health factor monitoring', 'Flash loan support', 'Governance framework', 'Risk parameter management'] },
                    { type: 'Yield Aggregator / Vault', range: '$40,000 – $150,000', items: ['Strategy contracts for multiple protocols', 'Auto-compounding logic', 'Withdrawal queues', 'Fee distribution', 'Strategy migration paths', 'Timelock for admin operations'] },
                    { type: 'Stablecoin Protocol', range: '$200,000 – $1,000,000+', items: ['Collateralization engine', 'Peg stability mechanism', 'Liquidation system', 'Governance and parameter voting', 'Treasury management', 'Cross-chain bridging', 'Extensive formal verification', 'Multi-round audits'] },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '28px', borderRadius: 20, marginBottom: 20, background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.type}</h3>
                        <span style={{ fontSize: 15, color: '#22c55e', fontWeight: 800 }}>{item.range}</span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {item.items.map((f, j) => (
                          <span key={j} style={{ fontSize: 12, padding: '4px 12px', borderRadius: 100, background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.15)', color: 'rgba(255,255,255,0.6)' }}>{f}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* NFT Marketplace Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="nft-marketplace">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>NFT Marketplace Development Costs</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    NFT marketplaces range from simple minting platforms to full-featured trading venues with royalty enforcement, auctions, and cross-chain support. Here is what each tier costs.
                  </p>

                  {[
                    { tier: 'Basic NFT Minting Platform', cost: '$15,000 – $45,000', desc: 'Custom ERC-721 or ERC-1155 contract, minting UI, IPFS/Arweave metadata storage, wallet connection, and a simple gallery. Suitable for individual artists or small collections. Does not include secondary market trading.' },
                    { tier: 'Full NFT Marketplace', cost: '$60,000 – $200,000', desc: 'Fixed-price listings, auction support (English and Dutch), offer system, collection creation tools, royalty enforcement (EIP-2981), activity feed, rarity ranking, bulk listing tools, creator analytics, and a curated discovery experience.' },
                    { tier: 'Enterprise NFT Platform', cost: '$150,000 – $500,000+', desc: 'White-label marketplace with custom branding, multi-chain support (Ethereum, Polygon, Solana), advanced royalty splits, DAO governance for curation, launchpad for new projects, cross-chain bridging, API for third-party integrations, and enterprise SLAs.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '28px 32px', borderRadius: 28, marginBottom: 20,
                      background: i === 0 ? 'linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(255,255,255,0.015) 100%)' : 'rgba(255,255,255,0.015)',
                      border: i === 0 ? '1px solid rgba(167,139,250,0.2)' : '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.tier}</h3>
                        <span style={{ fontSize: 15, fontWeight: 800, color: '#a78bfa' }}>{item.cost}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Chain Comparison */}
                <div className="reveal" style={{ marginBottom: 56 }} id="chain-comparison">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Blockchain Platform Comparison: Gas Fees &amp; Dev Cost Impact</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Your choice of blockchain directly impacts development cost, deployment cost, and ongoing operational expenses. This is one of the most consequential decisions in your project.
                  </p>

                  <div style={{ background: 'linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(96,165,250,0.2)', borderRadius: 28, padding: 36, marginBottom: 24 }}>
                    {[
                      { chain: 'Ethereum', devCost: 'Moderate', gasCost: '$5–50+ per tx', language: 'Solidity', best: 'DeFi protocols requiring maximum security, liquidity, and composability. The largest developer ecosystem and most battle-tested infrastructure. High gas costs limit suitability for high-frequency apps.' },
                      { chain: 'Polygon', devCost: 'Moderate', gasCost: '$0.01 per tx', language: 'Solidity', best: 'Projects that want Ethereum compatibility with lower gas costs. Ideal for NFT marketplaces, gaming, and high-transaction-volume applications where Ethereum fees would destroy UX.' },
                      { chain: 'Solana', devCost: 'Higher (+20–30%)', gasCost: '$0.001 per tx', language: 'Rust', best: 'High-performance applications requiring sub-second finality. DeFi, payments, and real-time applications. Smaller Rust developer pool increases development costs significantly versus Solidity.' },
                      { chain: 'Base / Arbitrum', devCost: 'Moderate', gasCost: '$0.01–0.10 per tx', language: 'Solidity', best: 'Layer 2 solutions inheriting Ethereum security at lower cost. Growing ecosystem with strong institutional backing (Coinbase for Base). Best of both worlds for most new DeFi projects.' },
                      { chain: 'Hyperledger Fabric', devCost: 'Higher (+30%)', gasCost: 'None (permissioned)', language: 'Go / Java', best: 'Enterprise permissioned blockchains for supply chain, healthcare, and government applications where public transparency is not required. Consortium of known participants.' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 16, marginBottom: i < 4 ? 20 : 0, paddingBottom: i < 4 ? 20 : 0, borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.03)' : 'none', flexWrap: 'wrap' }}>
                        <div style={{ flexShrink: 0, width: 120 }}>
                          <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{item.chain}</span>
                        </div>
                        <div style={{ flex: 1, minWidth: 200 }}>
                          <div style={{ display: 'flex', gap: 16, marginBottom: 6, flexWrap: 'wrap' }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Dev Cost: <strong style={{ color: '#ffffff' }}>{item.devCost}</strong></span>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Gas: <strong style={{ color: '#ffffff' }}>{item.gasCost}</strong></span>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Language: <strong style={{ color: '#ffffff' }}>{item.language}</strong></span>
                          </div>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{item.best}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Developer Rates */}
                <div className="reveal" style={{ marginBottom: 56 }} id="developer-rates">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Blockchain Developer Rates in 2026</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Blockchain developers are among the highest-paid engineers in the industry. The talent pool is small, the stakes are high (bugs cost millions), and the knowledge requirements span cryptography, distributed systems, and economic design.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      { region: 'USA / Canada', rate: '$180–$400/hr', annual: '$280K–$600K/yr', note: 'Senior Solidity engineers at top DeFi protocols command $400K+ annually. Rust/Solana developers are even scarcer.' },
                      { region: 'UK / Western Europe', rate: '$120–$250/hr', annual: '$180K–$350K/yr', note: 'Strong blockchain talent in London and Berlin. Rates lower than US but expertise is comparable at senior levels.' },
                      { region: 'Eastern Europe', rate: '$60–$130/hr', annual: '$80K–$160K/yr', note: 'Ukraine, Poland, and Romania have strong Solidity talent. Risk of time-zone overlap challenges for real-time collaboration.' },
                      { region: 'India (Bangalore / Chandigarh)', rate: '$30–$80/hr', annual: '$40K–$100K/yr', note: 'Growing talent pool of Solidity and Rust developers. Codazz Chandigarh has dedicated blockchain engineers with DeFi production experience.' },
                    ].map((item, i) => (
                      <div key={i} style={{ padding: '24px', borderRadius: 20, background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.region}</h3>
                        <p style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', marginBottom: 4, letterSpacing: '-0.02em' }}>{item.rate}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>{item.annual}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Codazz advantage:</strong> Our blended model — Edmonton-based project management with our Chandigarh blockchain engineering team — delivers audited, production-grade smart contracts at 40–60% lower cost than fully US-based teams. Same quality, dramatically better economics.
                    </p>
                  </div>
                </div>

                {/* Factors Affecting Cost */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Factors That Affect Blockchain Development Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    These are the variables that make blockchain development uniquely expensive — and where costs spiral if not managed carefully.
                  </p>

                  {[
                    { title: 'Security Audit Requirements', desc: 'A basic automated audit costs $2,000–$5,000. A manual audit from a reputable firm costs $15,000–$150,000 depending on contract complexity. For DeFi protocols handling user funds, multiple independent audits are standard. Skipping the audit is not an option — a single exploit can drain millions.' },
                    { title: 'Consensus Mechanism Complexity', desc: 'If building a custom chain, the consensus mechanism is the most critical and expensive component. Proof of Stake implementations cost $50,000–$150,000. Novel consensus mechanisms with custom finality guarantees can exceed $300,000 in research and development alone.' },
                    { title: 'Token Economics Design', desc: 'Designing sustainable token economics (supply schedules, staking rewards, fee structures, governance weights) requires game theory expertise. A well-designed tokenomics model costs $10,000–$40,000 for economic modeling, simulation, and documentation. Getting this wrong can doom the entire project regardless of code quality.' },
                    { title: 'Cross-Chain Functionality', desc: 'Bridges and cross-chain messaging (LayerZero, Axelar, Wormhole) add $20,000–$80,000 in development costs. Cross-chain protocols are also the most frequently exploited attack surface in Web3, requiring extra security investment and more thorough auditing.' },
                    { title: 'Regulatory Compliance', desc: 'Token offerings may require securities law compliance. DeFi protocols need to consider AML/KYC requirements in many jurisdictions. Legal review for token classification costs $10,000–$50,000. Regulatory-compliant smart contract implementations (allowlists, transfer restrictions, identity verification) add significant development cost.' },
                    { title: 'Oracle Integration', desc: 'Most DeFi protocols depend on price oracles (Chainlink, Pyth, Band). Secure oracle integration with price manipulation resistance costs $8,000–$25,000. Time-weighted average prices (TWAP), multi-oracle redundancy, and circuit breakers add to this cost but protect against price oracle attacks.' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 28, padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <div style={{ flexShrink: 0, width: 4, borderRadius: 4, background: '#60a5fa', opacity: 0.5 }} />
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Component Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Component Cost Breakdown</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is what each component of a blockchain project costs to build, from smart contracts to the user-facing frontend.
                  </p>

                  {[
                    { name: 'Smart Contract Development', range: '$5,000 – $80,000', detail: 'Solidity (Ethereum/Polygon), Rust (Solana), or Move (Aptos/Sui) contract development. Includes architecture, implementation, unit testing, integration testing, gas optimization, and documentation. Complex DeFi protocols with multiple interacting contracts sit at the top of this range.' },
                    { name: 'Security Audit', range: '$5,000 – $150,000+', detail: 'Automated scanning, manual code review, formal verification, economic attack simulation, and remediation guidance. Scales with lines of code, contract complexity, and auditing firm reputation. Budget for at least two rounds — initial audit plus re-audit after fixes.' },
                    { name: 'Web3 Frontend (dApp)', range: '$10,000 – $40,000', detail: 'React-based frontend with wallet connection (MetaMask, WalletConnect, Coinbase Wallet), transaction signing, contract interaction, real-time blockchain data display, and responsive design. Handling chain switching, gas estimation, and transaction status tracking is critical UX work.' },
                    { name: 'Backend Infrastructure', range: '$8,000 – $30,000', detail: 'Indexing blockchain data (The Graph or custom indexers), caching layers, API endpoints for frontend, off-chain data storage, event listeners, and webhook integrations. Most dApps need a backend even though the core logic lives on-chain.' },
                    { name: 'Token Economics & Whitepaper', range: '$10,000 – $40,000', detail: 'Economic modeling, supply/demand simulations, incentive structure design, governance framework, and technical whitepaper writing. Includes competitive analysis and market positioning for launch strategy.' },
                    { name: 'DevOps & Monitoring', range: '$5,000 – $20,000', detail: 'Node infrastructure management, contract monitoring (Tenderly, Forta), alert systems for unusual on-chain activity, CI/CD for contract deployment, and multi-sig wallet setup for admin operations. Critical for catching exploits in real time.' },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '20px 24px', borderRadius: 16, marginBottom: 16, background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                        <span style={{ fontSize: 14, color: '#60a5fa', fontWeight: 700 }}>{item.range}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Ongoing Maintenance */}
                <div className="reveal" style={{ marginBottom: 56 }} id="maintenance">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Ongoing Maintenance &amp; Security Costs</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Launching your protocol is the beginning, not the end. Ongoing costs include infrastructure, monitoring, governance, and continuous security vigilance. Budget these from day one.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
                    {[
                      { label: 'Node Infrastructure', cost: '$200–$2,000/mo', desc: 'RPC node providers (Alchemy, Infura, QuickNode) or self-hosted nodes. Costs scale with request volume.' },
                      { label: 'Contract Monitoring', cost: '$100–$500/mo', desc: 'Tenderly alerts, Forta bots, and custom monitoring scripts to catch unusual activity or potential exploits in real time.' },
                      { label: 'Bug Bounty Program', cost: '$5K–$50K reserve', desc: 'Immunefi or HackerOne bug bounty programs. Critical vulnerabilities typically earn $50K–$500K. This reserve is your insurance against undiscovered bugs.' },
                      { label: 'Protocol Maintenance', cost: '$3,000–$10,000/mo', desc: 'Ongoing development: governance parameter updates, new feature proposals, gas optimizations, and ecosystem integrations.' },
                      { label: 'Legal & Compliance', cost: '$2,000–$8,000/mo', desc: 'Regulatory monitoring, legal counsel for new jurisdictions, DAO legal structuring, and token compliance reviews as laws evolve.' },
                      { label: 'Community & Operations', cost: '$5,000–$20,000/mo', desc: 'Discord moderation, developer relations, documentation maintenance, and community grants to grow the ecosystem around your protocol.' },
                    ].map((item, i) => (
                      <div key={i} style={{ padding: '20px', borderRadius: 16, background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{item.label}</h3>
                        <p style={{ fontSize: 16, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{item.cost}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Build vs Fork */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Build Custom vs Fork Existing Protocols</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Many successful blockchain projects are forks of existing open-source protocols. Understanding when to build from scratch versus when to fork can save hundreds of thousands of dollars.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Fork existing protocols when:</strong> You are building a DEX (fork Uniswap V3), lending platform (fork Aave/Compound), or NFT marketplace (fork Seaport). These protocols are open-source, battle-tested, and audited. Forking and customizing costs $20,000–$60,000 versus $100,000+ to build from scratch — and you start with proven, secure code.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Build custom when:</strong> Your protocol introduces novel mechanisms that do not exist in current codebases, you need a fundamentally different architecture, or your competitive advantage comes from proprietary on-chain logic that cannot be replicated from existing code.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.15)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Important:</strong> Even when forking, you still need a security audit. Forks introduce new attack surfaces through customizations, and the original audit does not cover your modifications. Budget $10,000–$30,000 for a fork audit.
                    </p>
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Why Choose Codazz for Blockchain Development</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    We have built DeFi protocols, NFT platforms, token systems, and enterprise blockchain solutions across Ethereum, Polygon, Solana, and Hyperledger. Here is what makes us different.
                  </p>

                  {[
                    { title: 'Security-First Development', desc: 'Every smart contract we write follows OpenZeppelin standards, includes comprehensive test coverage (95%+ branch coverage), and undergoes internal security review before external audit. We have never shipped a contract that was exploited in production.' },
                    { title: 'Full-Stack Web3 Capability', desc: 'From Solidity smart contracts to React-based dApp frontends to The Graph indexing to Node.js backends — we handle the complete Web3 stack. No need to coordinate between a smart contract firm, a frontend agency, and a backend team.' },
                    { title: 'Multi-Chain Experience', desc: 'We have deployed production contracts on Ethereum, Polygon, Solana, Base, Arbitrum, and Hyperledger Fabric. We help you choose the right chain for your use case and budget — not the chain we happen to be most comfortable with.' },
                    { title: 'Audit-Ready Code from Day One', desc: 'Our development process produces clean, well-documented, gas-optimized code that auditors can review efficiently. This reduces audit costs by 20–30% compared to code that needs extensive cleanup before review — a meaningful saving on a $40,000+ audit.' },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '24px 28px', borderRadius: 16, marginBottom: 16, background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.12)' }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Frequently Asked Questions</h2>

                  {[
                    { q: 'How much does a simple smart contract cost?', a: 'A basic ERC-20 token contract costs $5,000–$10,000 including testing and deployment. An ERC-721 NFT contract with minting logic costs $8,000–$20,000. Complex DeFi contracts (staking, lending, DEX) range from $20,000 to $80,000. All prices should include a basic security audit.' },
                    { q: 'How much does a security audit cost?', a: 'Automated scanning tools: $2,000–$5,000. Manual audit from a mid-tier firm: $15,000–$40,000. Top-tier firms (Trail of Bits, OpenZeppelin): $50,000–$150,000+. Cost scales with lines of code and contract complexity. For DeFi protocols handling user funds, budget for at least two independent audits.' },
                    { q: 'How long does blockchain development take?', a: 'Simple token/NFT contracts: 2–8 weeks. DeFi protocols and dApps: 3–8 months. Custom blockchain or Layer 2: 12–24+ months. Add 4–8 weeks for security audits on top of development time — audits cannot be rushed.' },
                    { q: 'Should I build on Ethereum or Solana?', a: 'Ethereum (or Layer 2s like Base/Arbitrum) for maximum composability, security, and developer ecosystem. Solana for high-throughput, low-cost applications requiring sub-second finality. Ethereum development costs less per developer hour (Solidity talent is more available than Rust), but gas costs are higher for end users.' },
                    { q: 'What are the ongoing costs of running a blockchain project?', a: 'Node infrastructure: $200–$2,000/month. Contract monitoring: $100–$500/month. Bug bounty reserve: $5,000–$50,000. Ongoing protocol development: $3,000–$10,000/month. Legal and compliance: $2,000–$8,000/month.' },
                    { q: 'Can I launch a token without legal issues?', a: 'Token classification varies by jurisdiction. In the US, utility tokens can avoid securities classification depending on how you structure and market them. We strongly recommend engaging a crypto-specialized law firm ($10,000–$50,000) before any token launch. We can recommend trusted legal partners.' },
                    { q: 'Do you build on private/permissioned blockchains?', a: 'Yes. We build enterprise blockchain solutions on Hyperledger Fabric and Besu for supply chain tracking, identity management, and inter-organizational data sharing. Private blockchain development costs 20–30% more than public chain development due to infrastructure complexity and the specialized talent required.' },
                    { q: 'How do I budget for a blockchain project I have never built before?', a: 'Start with a technical discovery engagement ($5,000–$15,000) where our architects scope the full project, define the architecture, identify security requirements, and produce a line-item estimate. This investment prevents expensive surprises and gives you a defensible budget to present to your board or investors.' },
                    { q: 'What is the minimum viable blockchain project?', a: 'A single, well-audited smart contract with a basic frontend costs $15,000–$30,000 all-in. This is enough to run a token sale, NFT drop, or proof-of-concept supply chain verification. Many successful protocols started as a single contract and grew from there.' },
                    { q: 'How do cross-chain bridges affect development cost?', a: 'Integrating cross-chain messaging protocols (LayerZero, Axelar, Wormhole) adds $20,000–$80,000 to development costs, plus additional audit scope since bridges are the most frequently exploited attack surface in DeFi. If multi-chain is not a launch requirement, defer it to a later milestone to control initial costs.' },
                    { q: 'Is there a way to get to market faster without sacrificing security?', a: 'Yes — fork a battle-tested, audited protocol (Uniswap, Aave, Compound) and customize it for your use case. You start with audited code, reduce development time by 50–70%, and still commission a focused audit on your customizations. This is the standard approach for most new DeFi protocols launching in 2026.' },
                    { q: 'What does Codazz charge for blockchain development?', a: 'Our blockchain development rates start at $60/hr for smart contract engineers from our Chandigarh team, with senior architects at $120–$150/hr. Full project quotes are fixed-price, not hourly, based on the agreed scope. Contact us for a free project estimate with a line-item breakdown.' },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '24px 28px', borderRadius: 16, marginBottom: 16, background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>{item.q}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                    </div>
                  ))}
                </div>

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {/* Table of Contents */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#60a5fa';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(96,165,250,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0 }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(96,165,250,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>{post.readTime} read</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* -- MISTAKES TO AVOID -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80, paddingBottom: 0 }}>
            <div className="reveal" style={{ marginBottom: 56 }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Costly Mistakes to Avoid in Blockchain Development</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                {[
                  { mistake: 'Skipping the security audit', impact: 'Potential loss of all user funds. Non-negotiable for any protocol handling real assets.' },
                  { mistake: 'Choosing the wrong chain', impact: 'Migrating later costs more than building right the first time. Gas fees and developer availability vary dramatically.' },
                  { mistake: 'Underestimating legal costs', impact: 'Token launch without legal review can result in securities violations. Budget $10K–$50K for crypto legal counsel.' },
                  { mistake: 'No bug bounty program', impact: 'White hat hackers finding bugs is far cheaper than black hat exploiters draining your protocol.' },
                  { mistake: 'Poorly designed tokenomics', impact: 'Bad incentive structures cause token collapse even when the code is perfect. Hire game theory expertise.' },
                  { mistake: 'Single-key admin access', impact: 'All admin operations must go through multi-sig (Gnosis Safe). Single-key compromise ends projects.' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#ef4444', marginBottom: 8 }}>{item.mistake}</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{item.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- QUICK COST SUMMARY -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80, paddingBottom: 0 }}>
            <div className="reveal" style={{ marginBottom: 56 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>At a Glance</p>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 32 }}>Blockchain Development Cost Summary</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
                {[
                  { label: 'Simple Smart Contract', value: '$10K – $50K', sub: 'Including basic audit' },
                  { label: 'NFT Marketplace', value: '$15K – $200K', sub: 'Minting to full platform' },
                  { label: 'DeFi Protocol', value: '$50K – $400K', sub: 'DEX, lending, stablecoin' },
                  { label: 'Security Audit', value: '$5K – $150K+', sub: 'Auto scan to top-tier firm' },
                  { label: 'Layer 1 Blockchain', value: '$300K – $2M+', sub: 'Custom chain from scratch' },
                  { label: 'Ongoing Maintenance', value: '$5K – $30K/mo', sub: 'Infra, monitoring, legal' },
                ].map((stat, i) => (
                  <div key={i} style={{ padding: '20px', borderRadius: 20, background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{stat.label}</p>
                    <p style={{ fontSize: 20, fontWeight: 800, color: '#22c55e', marginBottom: 4, letterSpacing: '-0.02em' }}>{stat.value}</p>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- BOTTOM CTA -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 12 }}>Get Your Estimate</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Get Your Blockchain Project Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your blockchain project requirements with Codazz and receive a detailed cost breakdown, architecture plan, and security audit roadmap within 48 hours — completely free.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free Quote →
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
