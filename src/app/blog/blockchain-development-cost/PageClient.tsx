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
  { id: 'factors-affecting-cost', label: 'Factors Affecting Cost', emoji: '⚙️' },
  { id: 'cost-breakdown', label: 'Component Cost Breakdown', emoji: '🔧' },
  { id: 'chain-comparison', label: 'Chain Selection Guide', emoji: '🔗' },
  { id: 'build-vs-buy', label: 'Build vs Existing Protocols', emoji: '⚖️' },
  { id: 'why-codazz', label: 'Why Choose Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'blockchain-development-companies-usa', title: 'Top 10 Blockchain Development Companies in the USA', category: 'Engineering', readTime: '9 min' },
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA?', category: 'Business', readTime: '9 min' },
  { slug: 'saas-development-cost-usa', title: 'How Much Does SaaS Development Cost in the USA?', category: 'Business', readTime: '8 min' },
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
                borderRadius: 'clamp(16px, 3vw, 24px)',
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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
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
                14 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does Blockchain Development Cost in 2026?
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive cost breakdown for blockchain development in 2026 — from smart contracts to DeFi platforms to custom Layer 1 chains — covering security audits, token economics, and real pricing from production projects.
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
                  { label: 'Twitter', icon: '\ud835\udd4f' },
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
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Blockchain development has matured significantly since the ICO frenzy. In 2026, enterprises are deploying supply chain tracking on Hyperledger, startups are building DeFi protocols on Ethereum and Solana, and governments are exploring CBDCs. The technology is real, the use cases are proven, and the question has shifted from "should we use blockchain?" to <strong style={{ color: '#ffffff' }}>how much will it cost to build?</strong>
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Blockchain development is uniquely expensive compared to traditional software for several reasons: smart contract bugs can lose millions of dollars, security audits are mandatory (not optional), the developer talent pool is smaller, and the technology is still evolving rapidly. A single vulnerability in a DeFi protocol can result in catastrophic financial loss — which is why cutting costs on blockchain development is particularly dangerous.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    In this guide, we break down every cost factor in blockchain development for 2026 — from a simple smart contract deployment to building a complete Layer 1 blockchain from scratch.
                  </p>
                </div>

                {/* Cost Tiers */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Blockchain Development Cost Tiers</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Blockchain projects span an enormous cost range depending on what you are building. Here are the three primary tiers.
                  </p>

                  {/* Tier 1 */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 1</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>2 - 8 weeks</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Smart Contracts & Token Development</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>$10,000 - $50,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      ERC-20/ERC-721 token contracts, simple DeFi contracts (staking, vesting, airdrop), NFT minting contracts, basic DAO governance contracts, or supply chain verification smart contracts. Includes contract development, unit testing, testnet deployment, and a basic security audit. This tier covers most token launches, simple NFT projects, and proof-of-concept blockchain integrations.
                    </p>
                  </div>

                  {/* Tier 2 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 2</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>3 - 8 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>DeFi Platform / dApp Development</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', marginBottom: 16, letterSpacing: '-0.02em' }}>$50,000 - $200,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      Full decentralized applications including DEX (decentralized exchange), lending/borrowing protocols, yield aggregators, NFT marketplaces with royalty logic, cross-chain bridges, or enterprise blockchain platforms. Includes complex smart contract systems with multiple interacting contracts, web3 frontend (React + ethers.js/wagmi), wallet integration (MetaMask, WalletConnect), comprehensive security audit by a reputable firm, and mainnet deployment with monitoring.
                    </p>
                  </div>

                  {/* Tier 3 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(52,211,153,0.12)', color: '#34d399',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 3</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>12 - 24+ months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Custom Blockchain / Layer 1 Protocol</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#34d399', marginBottom: 16, letterSpacing: '-0.02em' }}>$200,000 - $1,000,000+</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      Building a custom blockchain from scratch or a Layer 2 scaling solution. Includes custom consensus mechanism design, node implementation, P2P networking layer, block explorer, wallet software, SDK for developers, validator management, governance framework, and extensive security research. This tier is for companies building foundational infrastructure — think Solana, Avalanche, or enterprise-specific chains. Requires a team of specialized blockchain engineers and cryptographers.
                    </p>
                  </div>
                </div>

                {/* Factors Affecting Cost */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Factors That Affect Blockchain Development Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    These are the variables that make blockchain development uniquely expensive — and where costs can spiral if not managed properly.
                  </p>

                  {[
                    { title: 'Security Audit Requirements', desc: 'A basic automated audit (Slither, Mythril) costs $2,000-$5,000. A manual audit from a reputable firm (Trail of Bits, OpenZeppelin, Certik) costs $15,000-$100,000+ depending on contract complexity. For DeFi protocols handling user funds, multiple independent audits are standard practice. Skipping the audit is not an option — a single exploit can drain millions.' },
                    { title: 'Consensus Mechanism Complexity', desc: 'If building a custom chain, the consensus mechanism is the most critical (and expensive) component. Proof of Stake implementations cost $50,000-$150,000. Novel consensus mechanisms with custom finality guarantees can exceed $300,000 in research and development alone.' },
                    { title: 'Token Economics Design', desc: 'Designing sustainable token economics (supply schedules, staking rewards, fee structures, governance weights) requires game theory expertise. A well-designed tokenomics model costs $10,000-$40,000 for economic modeling, simulation, and documentation. Getting this wrong can doom the entire project.' },
                    { title: 'Chain Selection', desc: 'Building on Ethereum is battle-tested but has high gas fees. Solana offers speed but a different programming model (Rust). Polygon provides Ethereum compatibility with lower costs. Each chain has different development costs, tooling maturity, and developer availability. Choosing the wrong chain can add months and tens of thousands in migration costs.' },
                    { title: 'Cross-Chain Functionality', desc: 'Bridges and cross-chain messaging (LayerZero, Axelar, Wormhole) add $20,000-$80,000 in development costs. Cross-chain protocols are also the most frequently exploited attack surface in Web3, requiring extra security investment.' },
                    { title: 'Regulatory Compliance', desc: 'Token offerings may require securities law compliance. DeFi protocols need to consider AML/KYC requirements in many jurisdictions. Legal review for token classification costs $10,000-$50,000. Regulatory-compliant smart contract implementations (allowlists, transfer restrictions, identity verification) add significant development cost.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 20, marginBottom: 28,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
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
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Component Cost Breakdown</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is what each component of a blockchain project costs to build, from smart contracts to the user-facing frontend.
                  </p>

                  {[
                    { name: 'Smart Contract Development', range: '$5,000 - $80,000', detail: 'Solidity (Ethereum/Polygon), Rust (Solana), or Move (Aptos/Sui) contract development. Includes contract architecture, implementation, unit testing, integration testing, gas optimization, and documentation. Complex DeFi protocols with multiple interacting contracts sit at the top of this range.' },
                    { name: 'Security Audit', range: '$5,000 - $100,000+', detail: 'Automated scanning, manual code review, formal verification, economic attack simulation, and remediation guidance. The audit cost scales with lines of code, contract complexity, and the auditing firm reputation. Budget for at least two rounds — initial audit plus re-audit after fixes.' },
                    { name: 'Web3 Frontend (dApp)', range: '$10,000 - $40,000', detail: 'React-based frontend with wallet connection (MetaMask, WalletConnect, Coinbase Wallet), transaction signing, contract interaction, real-time blockchain data display, and responsive design. Includes handling chain switching, gas estimation, and transaction status tracking.' },
                    { name: 'Backend Infrastructure', range: '$8,000 - $30,000', detail: 'Indexing blockchain data (The Graph or custom indexers), caching layers, API endpoints for frontend, off-chain data storage, event listeners, and webhook integrations. Most dApps need a backend even though the core logic lives on-chain.' },
                    { name: 'Token Economics & Whitepaper', range: '$10,000 - $40,000', detail: 'Economic modeling, supply/demand simulations, incentive structure design, governance framework, and technical whitepaper writing. Includes competitive analysis and market positioning.' },
                    { name: 'DevOps & Monitoring', range: '$5,000 - $20,000', detail: 'Node infrastructure management, contract monitoring (Tenderly, Forta), alert systems for unusual on-chain activity, CI/CD for contract deployment, and multi-sig wallet setup for admin operations.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                        <span style={{ fontSize: 14, color: '#60a5fa', fontWeight: 700 }}>{item.range}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Chain Selection Guide */}
                <div className="reveal" style={{ marginBottom: 56 }} id="chain-comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Chain Selection Guide: Cost Impact</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Your choice of blockchain directly impacts development cost, deployment cost, and ongoing operational expenses.
                  </p>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(96,165,250,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(96,165,250,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    {[
                      { chain: 'Ethereum', devCost: 'Moderate', gasCost: 'High ($5-50+ per tx)', language: 'Solidity', best: 'DeFi protocols requiring maximum security, liquidity, and composability. The largest developer ecosystem and most battle-tested infrastructure.' },
                      { chain: 'Polygon', devCost: 'Moderate', gasCost: 'Very Low ($0.01 per tx)', language: 'Solidity', best: 'Projects that want Ethereum compatibility with lower gas costs. Ideal for NFT marketplaces, gaming, and high-transaction-volume applications.' },
                      { chain: 'Solana', devCost: 'Higher', gasCost: 'Very Low ($0.001 per tx)', language: 'Rust', best: 'High-performance applications requiring sub-second finality. DeFi, payments, and real-time applications. Smaller Rust developer pool increases development costs by 20-30%.' },
                      { chain: 'Base / Arbitrum', devCost: 'Moderate', gasCost: 'Low ($0.01-0.10 per tx)', language: 'Solidity', best: 'Layer 2 solutions that inherit Ethereum security at lower cost. Growing ecosystem with strong institutional backing (Coinbase for Base).' },
                      { chain: 'Hyperledger', devCost: 'Higher', gasCost: 'None (private)', language: 'Go/Java', best: 'Enterprise permissioned blockchains for supply chain, healthcare, and government applications where public transparency is not required.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 16, marginBottom: i < 4 ? 20 : 0,
                        paddingBottom: i < 4 ? 20 : 0,
                        borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                        flexWrap: 'wrap',
                      }}>
                        <div style={{ flexShrink: 0, width: 100 }}>
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

                {/* Build vs Existing Protocols */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Build Custom vs Fork Existing Protocols</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Many successful blockchain projects are forks of existing open-source protocols. Understanding when to build from scratch versus when to fork can save hundreds of thousands of dollars.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Fork existing protocols when:</strong> You are building a DEX (fork Uniswap V3), lending platform (fork Aave/Compound), or NFT marketplace (fork Seaport). These protocols are open-source, battle-tested, and audited. Forking and customizing costs $20,000-$60,000 versus $100,000+ to build from scratch — and you start with proven, secure code.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Build custom when:</strong> Your protocol introduces novel mechanisms that do not exist in current codebases, you need a fundamentally different architecture, or your competitive advantage comes from proprietary on-chain logic that cannot be replicated from existing code.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Onshore vs offshore:</strong> Blockchain developers are among the highest-paid in tech. US-based Solidity developers charge $200-$400/hour. Our blended model at Codazz — with Edmonton project management and Chandigarh blockchain engineers — delivers audited, production-grade smart contracts at 40-60% lower cost.
                  </p>
                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.15)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Important:</strong> Even when forking, you still need a security audit. Forks introduce new attack surfaces through customizations, and the original audit does not cover your modifications. Budget $10,000-$30,000 for a fork audit.
                    </p>
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Why Choose Codazz for Blockchain Development</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    We have built DeFi protocols, NFT platforms, token systems, and enterprise blockchain solutions. Here is what makes us different.
                  </p>

                  {[
                    { title: 'Security-First Development', desc: 'Every smart contract we write follows OpenZeppelin standards, includes comprehensive test coverage (95%+ branch coverage), and undergoes internal security review before external audit. We have never shipped a contract that was exploited in production.' },
                    { title: 'Full-Stack Web3 Capability', desc: 'From Solidity smart contracts to React-based dApp frontends to The Graph indexing to Node.js backends — we handle the complete Web3 stack. No need to coordinate between a smart contract firm, a frontend agency, and a backend team.' },
                    { title: 'Multi-Chain Experience', desc: 'We have deployed production contracts on Ethereum, Polygon, Solana, Base, Arbitrum, and Hyperledger Fabric. We help you choose the right chain for your use case and budget, not the chain we are most comfortable with.' },
                    { title: 'Audit-Ready Code from Day One', desc: 'Our development process produces clean, well-documented, gas-optimized code that auditors can review efficiently. This reduces audit costs by 20-30% compared to code that needs extensive cleanup before review.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.12)',
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>

                  {[
                    { q: 'How much does a simple smart contract cost?', a: 'A basic ERC-20 token contract costs $5,000-$10,000 including testing and deployment. An ERC-721 NFT contract with minting logic costs $8,000-$20,000. Complex DeFi contracts (staking, lending, DEX) range from $20,000 to $80,000. All prices include basic security audit.' },
                    { q: 'How much does a security audit cost?', a: 'Automated scanning tools: $2,000-$5,000. Manual audit from a mid-tier firm: $15,000-$40,000. Top-tier firms (Trail of Bits, OpenZeppelin): $50,000-$100,000+. The cost scales with lines of code and contract complexity. For DeFi protocols handling user funds, budget for at least two independent audits.' },
                    { q: 'How long does blockchain development take?', a: 'Simple token/NFT contracts: 2-8 weeks. DeFi protocols and dApps: 3-8 months. Custom blockchain or Layer 2: 12-24+ months. Add 4-8 weeks for security audits on top of development time.' },
                    { q: 'Should I build on Ethereum or Solana?', a: 'Ethereum (or Layer 2s like Base/Arbitrum) for maximum composability, security, and developer ecosystem. Solana for high-throughput, low-cost applications requiring sub-second finality. Ethereum development costs less per hour (Solidity developers are more available) but gas costs are higher. We help you evaluate trade-offs based on your specific use case.' },
                    { q: 'What are the ongoing costs of running a blockchain project?', a: 'Node infrastructure: $200-$2,000/month (or use providers like Alchemy/Infura). Gas costs for protocol operations: varies by chain. Monitoring and alerting: $100-$500/month. Ongoing security monitoring: $500-$2,000/month. Bug bounty program: $5,000-$50,000+ in reserves.' },
                    { q: 'Can I launch a token without legal issues?', a: 'Token classification varies by jurisdiction. In the US, most utility tokens avoid securities classification, but this depends on how you market and distribute them. We strongly recommend engaging a crypto-specialized law firm ($10,000-$50,000) before any token launch. We can recommend trusted legal partners.' },
                    { q: 'Do you build on private/permissioned blockchains?', a: 'Yes. We build enterprise blockchain solutions on Hyperledger Fabric and Besu for supply chain tracking, identity management, and inter-organizational data sharing. Private blockchain development costs 20-30% more than public chain development due to infrastructure complexity.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>{item.q}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                    </div>
                  ))}
                </div>

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
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
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
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
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
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
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#60a5fa', marginBottom: 12,
                }}>Get Your Estimate</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get Your Blockchain Project Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your blockchain project requirements with Codazz and receive a detailed cost breakdown, architecture plan, and security audit roadmap within 48 hours — completely free.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#60a5fa', color: '#000',
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
