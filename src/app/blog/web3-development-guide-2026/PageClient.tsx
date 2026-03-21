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

const tocSections = [
  { id: 'web3-landscape', label: 'Web3 Landscape 2026', emoji: '🌐' },
  { id: 'blockchain-platforms', label: 'Blockchain Platforms', emoji: '⛓️' },
  { id: 'smart-contracts', label: 'Smart Contracts', emoji: '📜' },
  { id: 'defi-development', label: 'DeFi Development', emoji: '🏦' },
  { id: 'nft-marketplaces', label: 'NFT Marketplaces', emoji: '🎨' },
  { id: 'wallet-integration', label: 'Wallet Integration', emoji: '👛' },
  { id: 'layer-2-solutions', label: 'Layer 2 Solutions', emoji: '🚀' },
  { id: 'development-cost', label: 'Development Cost', emoji: '💰' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🏗️' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ai-trends-2026', title: 'Top AI Development Trends 2026: What Every Business Needs to Know', category: 'AI & Technology', readTime: '21 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
];

export default function Web3DevelopmentGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 14vw, 160px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
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
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Blockchain & Web3</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                26 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Web3 Development Guide 2026: From Smart Contracts to dApps
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The complete guide to building on Web3 in 2026: blockchain platforms, smart contract development with Solidity and Rust, DeFi protocols, NFT marketplaces, wallet integration, and Layer 2 scaling.
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
                }}>CE</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Engineering</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Engineering Team, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* MAIN ARTICLE */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    Web3 has survived the hype cycle. The projects that remain in 2026 are solving real problems: cross-border payments settled in seconds, supply chain provenance verified on-chain, and decentralized identity replacing passwords.
                  </p>
                  <p>
                    The speculative frenzy of 2021-2022 is over. What&apos;s left is a maturing technology stack with real enterprise adoption, regulatory clarity in major markets, and development tools that finally rival Web2 in developer experience.
                  </p>
                  <p>
                    Whether you&apos;re building a DeFi protocol, an NFT marketplace, a supply chain dApp, or integrating blockchain into an existing application, this guide covers the technical decisions, platforms, tools, and costs you need to know in 2026.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    This is a practical, no-hype guide for developers and technical founders who want to build on Web3 in 2026.
                  </p>
                </div>

                {/* Web3 Landscape */}
                <h2 id="web3-landscape" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The Web3 Landscape in 2026</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(34,197,94,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', margin: 0 }}>$178B</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Total Value Locked in DeFi</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>4.2M</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Active Web3 Developers</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>62%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Fortune 500 with Blockchain Initiatives</p>
                  </div>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p><strong style={{ color: '#ffffff' }}>Key shifts in Web3 for 2026:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Account Abstraction:</strong> ERC-4337 has made crypto wallets feel like normal app logins. Users sign up with email, pay gas fees in stablecoins, and never see a seed phrase. This single change has unlocked mainstream adoption.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Regulatory Clarity:</strong> MiCA in Europe, updated SEC guidance in the US, and clear frameworks in Singapore and UAE have given enterprises the legal certainty to build on-chain.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Layer 2 Dominance:</strong> Most new dApps deploy on Layer 2s (Arbitrum, Optimism, Base, zkSync) rather than Ethereum mainnet. Transaction costs are sub-cent with near-instant finality.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Real-World Assets (RWA):</strong> Tokenization of real estate, bonds, commodities, and private equity is the fastest-growing Web3 sector, with $12B+ in tokenized assets on-chain.</li>
                    <li><strong style={{ color: '#ffffff' }}>AI x Crypto Convergence:</strong> Decentralized compute networks, on-chain AI model marketplaces, and autonomous AI agents with crypto wallets are creating entirely new categories.</li>
                  </ul>
                </div>

                {/* Blockchain Platforms */}
                <h2 id="blockchain-platforms" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Blockchain Platforms Comparison</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Platform Comparison 2026</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Platform</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Language</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>TPS</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Ethereum</strong></td>
                        <td style={{ padding: '12px 8px' }}>Solidity</td>
                        <td style={{ padding: '12px 8px' }}>~30 (L1)</td>
                        <td style={{ padding: '12px 8px' }}>DeFi, security-critical apps</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Solana</strong></td>
                        <td style={{ padding: '12px 8px' }}>Rust</td>
                        <td style={{ padding: '12px 8px' }}>~65,000</td>
                        <td style={{ padding: '12px 8px' }}>High-throughput, consumer apps</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Polygon</strong></td>
                        <td style={{ padding: '12px 8px' }}>Solidity</td>
                        <td style={{ padding: '12px 8px' }}>~7,000</td>
                        <td style={{ padding: '12px 8px' }}>Enterprise, gaming, low fees</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Base</strong></td>
                        <td style={{ padding: '12px 8px' }}>Solidity</td>
                        <td style={{ padding: '12px 8px' }}>~2,000</td>
                        <td style={{ padding: '12px 8px' }}>Consumer dApps, Coinbase ecosystem</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Arbitrum</strong></td>
                        <td style={{ padding: '12px 8px' }}>Solidity</td>
                        <td style={{ padding: '12px 8px' }}>~4,000</td>
                        <td style={{ padding: '12px 8px' }}>DeFi, complex smart contracts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p><strong style={{ color: '#ffffff' }}>How to choose a blockchain platform:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Security-first (DeFi, high-value):</strong> Ethereum L1 or Arbitrum/Optimism L2. The deepest liquidity, most battle-tested security, and largest developer ecosystem.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>High-throughput consumer apps:</strong> Solana for sub-second finality and negligible fees. Ideal for gaming, social, and micropayments.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Enterprise integration:</strong> Polygon for EVM compatibility with low costs, or Hyperledger Besu for permissioned enterprise chains.</li>
                    <li><strong style={{ color: '#ffffff' }}>Coinbase ecosystem:</strong> Base if your users are primarily Coinbase customers or you want seamless fiat on-ramp integration.</li>
                  </ul>
                </div>

                {/* Smart Contracts */}
                <h2 id="smart-contracts" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Smart Contract Development</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Smart contracts are the backbone of every Web3 application. They are self-executing programs deployed on-chain that handle business logic, asset transfers, and governance rules without intermediaries.
                  </p>
                  <p>
                    Unlike traditional backend code that runs on servers you control, smart contracts are immutable once deployed. You cannot patch a bug, roll back a bad deployment, or push a hotfix. This fundamental difference means smart contract development demands a level of rigor more akin to aerospace engineering than typical web development.
                  </p>
                  <p>
                    The good news: the tooling has improved dramatically. Modern development frameworks, auditing tools, and battle-tested libraries have reduced the risk significantly compared to the early days of Ethereum.
                  </p>

                  <div style={{
                    background: 'rgba(34,197,94,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;A bug in a web app costs you users. A bug in a smart contract costs you millions. The security bar for smart contract development is fundamentally different from traditional software.&quot;
                    </p>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Solidity (EVM chains):</strong></p>
                  <ul style={{ paddingLeft: 24, margin: '0 0 24px' }}>
                    <li style={{ marginBottom: 8 }}>The dominant smart contract language for Ethereum, Polygon, Arbitrum, Base, and all EVM-compatible chains. If you learn one Web3 language, learn Solidity.</li>
                    <li style={{ marginBottom: 8 }}>Use <strong style={{ color: '#ffffff' }}>Foundry</strong> (fast, Solidity-native testing) or <strong style={{ color: '#ffffff' }}>Hardhat</strong> (JavaScript-based, larger plugin ecosystem) as your development framework.</li>
                    <li style={{ marginBottom: 8 }}>OpenZeppelin contracts provide audited, battle-tested implementations of ERC-20, ERC-721, ERC-1155, access control, and governance. Never write these from scratch.</li>
                    <li>Use <strong style={{ color: '#ffffff' }}>Slither</strong> and <strong style={{ color: '#ffffff' }}>Mythril</strong> for automated security analysis. Professional audits ($15K-$100K+) are mandatory before mainnet deployment for any contract holding significant value.</li>
                  </ul>

                  <p><strong style={{ color: '#ffffff' }}>Rust (Solana):</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}>Solana programs are written in Rust using the <strong style={{ color: '#ffffff' }}>Anchor framework</strong>, which provides a higher-level abstraction over raw Solana programming.</li>
                    <li style={{ marginBottom: 8 }}>Steeper learning curve than Solidity, but Rust&apos;s type system and memory safety catch entire categories of bugs at compile time.</li>
                    <li>Solana&apos;s account model is fundamentally different from EVM&apos;s storage model. Plan for a learning curve even for experienced blockchain developers.</li>
                  </ul>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p><strong style={{ color: '#ffffff' }}>Smart contract security best practices:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Reentrancy guards:</strong> Use OpenZeppelin&apos;s ReentrancyGuard on all external calls. The DAO hack was 2016, yet reentrancy remains the most common vulnerability.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Checks-Effects-Interactions:</strong> Always update state before making external calls. This pattern prevents most reentrancy and state manipulation attacks.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Upgradeable contracts:</strong> Use UUPS or transparent proxy patterns for contracts that need future updates. But consider the trust implications &mdash; upgradeability means a privileged account can change contract behavior.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Formal verification:</strong> For high-value contracts ($10M+ TVL), formal verification mathematically proves contract behavior matches specification. Tools: Certora, Halmos, KEVM.</li>
                    <li><strong style={{ color: '#ffffff' }}>Bug bounties:</strong> Platforms like Immunefi host bug bounty programs. Allocate 1-5% of TVL as bug bounty rewards. Cheaper than getting hacked.</li>
                  </ul>
                </div>

                {/* DeFi Development */}
                <h2 id="defi-development" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>DeFi Development</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Decentralized Finance (DeFi) remains the largest and most financially significant Web3 vertical. In 2026, DeFi has matured from experimental protocols to institutional-grade financial infrastructure.
                  </p>
                  <p>
                    The key shift in DeFi development is the move from forking existing protocols to building novel financial primitives. The era of &quot;Uniswap but on Chain X&quot; is over. The projects gaining traction are those solving genuinely new problems: cross-chain liquidity, undercollateralized lending with AI credit scoring, and compliant on-chain securities trading.
                  </p>
                  <p>
                    For developers entering DeFi, understanding the composability of existing protocols is crucial. Modern DeFi applications are built by combining existing primitives (AMMs, lending pools, oracles) into novel products &mdash; not by reinventing each component from scratch.
                  </p>

                  <p><strong style={{ color: '#ffffff' }}>Core DeFi primitives you can build:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Automated Market Makers (AMMs):</strong> Uniswap V4&apos;s hooks architecture lets you build custom AMMs with concentrated liquidity, dynamic fees, and custom trading logic without forking the entire protocol.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Lending Protocols:</strong> Build lending markets where users supply assets to earn yield and borrowers take collateralized loans. Study Aave V3&apos;s architecture: isolation mode, efficiency mode, and cross-chain portals.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Yield Aggregators:</strong> Automatically optimize yield farming strategies across protocols. Vaults accept deposits and deploy capital to the highest-yielding strategies, rebalancing automatically.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Stablecoin Protocols:</strong> Algorithmic, over-collateralized, or RWA-backed stablecoins. Regulatory requirements vary significantly by jurisdiction &mdash; consult legal counsel early.</li>
                    <li><strong style={{ color: '#ffffff' }}>Real-World Asset (RWA) Platforms:</strong> Tokenize real estate, bonds, or commodities. Requires deep regulatory compliance (securities law, KYC/AML) but represents the fastest-growing DeFi segment.</li>
                  </ul>
                </div>

                {/* NFT Marketplaces */}
                <h2 id="nft-marketplaces" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>NFT Marketplaces & Digital Assets</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    NFTs in 2026 have evolved far beyond profile picture collections. The technology is now used for digital identity, event tickets, gaming assets, music royalties, real estate deeds, and supply chain certificates.
                  </p>
                  <p>
                    The speculative NFT market crashed in 2023, but the technology survived because the underlying primitive &mdash; provable digital ownership &mdash; is genuinely useful. The most successful NFT projects today focus on utility, not speculation.
                  </p>

                  <p><strong style={{ color: '#ffffff' }}>Building an NFT marketplace:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Token Standards:</strong> ERC-721 for unique assets, ERC-1155 for semi-fungible tokens (game items, event tickets with editions), and ERC-6551 (Token Bound Accounts) for NFTs that own other assets.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Marketplace Contracts:</strong> Use Seaport protocol (OpenSea&apos;s open-source marketplace contract) as a foundation. Handles listings, offers, auctions, bundle trades, and royalty enforcement.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Metadata &amp; Storage:</strong> Store metadata and media on IPFS (decentralized) or Arweave (permanent). Never store NFT media on centralized servers &mdash; if the server goes down, the NFT becomes a pointer to nothing.</li>
                    <li><strong style={{ color: '#ffffff' }}>Creator Royalties:</strong> ERC-2981 provides an on-chain royalty standard. However, enforcement remains marketplace-dependent. Consider royalty-enforcing wrapper contracts if creator royalties are critical to your business model.</li>
                  </ul>
                </div>

                {/* Wallet Integration */}
                <h2 id="wallet-integration" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Wallet Integration & User Onboarding</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Wallet UX is the make-or-break factor for Web3 adoption. In 2026, account abstraction (ERC-4337) has fundamentally changed how users interact with dApps. The era of MetaMask popups and seed phrases is ending &mdash; replaced by invisible blockchain interactions that feel like traditional web apps.
                  </p>
                  <p>
                    The companies winning in Web3 are the ones whose users don&apos;t even realize they are using blockchain. Starbucks Odyssey, Reddit Collectible Avatars, and Nike .SWOOSH proved that abstracting away blockchain complexity is the key to mainstream adoption.
                  </p>

                  <p><strong style={{ color: '#ffffff' }}>Modern wallet integration stack:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Smart Wallets (ERC-4337):</strong> Replace seed phrases with social login (Google, Apple, email). Users create wallets without knowing they are using blockchain. Gas fees can be sponsored by the dApp or paid in any token.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Connection Libraries:</strong> Use <strong style={{ color: '#ffffff' }}>wagmi</strong> + <strong style={{ color: '#ffffff' }}>viem</strong> for EVM chains (React), or <strong style={{ color: '#ffffff' }}>@solana/wallet-adapter</strong> for Solana. These libraries handle wallet connection, chain switching, and transaction signing.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Embedded Wallets:</strong> Services like Privy, Dynamic, and Coinbase Wallet SDK create wallets embedded in your app. Users never install a browser extension or manage keys directly.</li>
                    <li><strong style={{ color: '#ffffff' }}>Fiat On-Ramps:</strong> Integrate Stripe Crypto, MoonPay, or Transak so users can buy crypto with credit cards directly in your dApp. Essential for mainstream adoption.</li>
                  </ul>
                </div>

                {/* Layer 2 Solutions */}
                <h2 id="layer-2-solutions" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Layer 2 Solutions & Scaling</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Layer 2 scaling solutions have become the default deployment target for new dApps. They inherit Ethereum&apos;s security while providing dramatically lower costs and higher throughput.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 24,
                  }}>
                    {[
                      { title: 'Optimistic Rollups', desc: 'Arbitrum, Optimism, Base. Transactions assumed valid unless challenged within a dispute window (7 days). Mature, battle-tested, EVM-equivalent.', color: '#22c55e' },
                      { title: 'ZK Rollups', desc: 'zkSync Era, StarkNet, Polygon zkEVM. Mathematical proofs verify every batch. Faster finality, smaller proof sizes, but more complex to build.', color: '#ffffff' },
                      { title: 'App-Specific Rollups', desc: 'Build your own L2 using OP Stack, Arbitrum Orbit, or Polygon CDK. Full control over gas economics, sequencing, and governance.', color: '#ffffff' },
                    ].map((l2) => (
                      <div key={l2.title} style={{
                        background: l2.color === '#22c55e' ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.03)',
                        padding: 20, borderRadius: 12,
                        border: l2.color === '#22c55e' ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: l2.color, marginBottom: 8, marginTop: 0 }}>{l2.title}</h4>
                        <p style={{ fontSize: 14, margin: 0 }}>{l2.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p>
                    The Layer 2 ecosystem has matured significantly. In 2024, L2s collectively processed more transactions than Ethereum mainnet. By 2026, over 80% of new dApp deployments target L2s rather than L1.
                  </p>
                  <p><strong style={{ color: '#ffffff' }}>When to consider your own L2/L3:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}>You need custom gas token economics (users pay fees in your token)</li>
                    <li style={{ marginBottom: 8 }}>Transaction volume exceeds 100+ TPS sustained</li>
                    <li style={{ marginBottom: 8 }}>You need guaranteed block space and priority sequencing</li>
                    <li>Regulatory requirements demand a permissioned validator set</li>
                  </ul>
                </div>

                {/* Development Cost */}
                <h2 id="development-cost" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Web3 Development Cost Breakdown</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Development Cost by Project Type</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Project Type</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost Range</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Token + Basic dApp</strong></td>
                        <td style={{ padding: '12px 8px' }}>$25K - $50K</td>
                        <td style={{ padding: '12px 8px' }}>6-10 weeks</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>NFT Marketplace</strong></td>
                        <td style={{ padding: '12px 8px' }}>$50K - $100K</td>
                        <td style={{ padding: '12px 8px' }}>10-16 weeks</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>DeFi Protocol</strong></td>
                        <td style={{ padding: '12px 8px' }}>$100K - $250K</td>
                        <td style={{ padding: '12px 8px' }}>16-30 weeks</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>RWA Tokenization Platform</strong></td>
                        <td style={{ padding: '12px 8px' }}>$150K - $400K</td>
                        <td style={{ padding: '12px 8px' }}>24-40 weeks</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Custom L2 Chain</strong></td>
                        <td style={{ padding: '12px 8px' }}>$200K - $500K+</td>
                        <td style={{ padding: '12px 8px' }}>30-52 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p><strong style={{ color: '#ffffff' }}>Budget allocation breakdown:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Smart Contract Development:</strong> 25-35% of total budget. Includes contract design, implementation, unit testing, and integration testing.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Security Audits:</strong> 10-20% of total budget. Professional audits from firms like Trail of Bits, OpenZeppelin, or Consensys Diligence. Multiple audits recommended for DeFi.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Frontend (dApp):</strong> 20-30% of total budget. React/Next.js frontend with wallet integration, transaction management, and real-time on-chain data display.</li>
                    <li><strong style={{ color: '#ffffff' }}>Infrastructure &amp; Indexing:</strong> 10-15% of total budget. Node providers (Alchemy, Infura), subgraphs (The Graph), and backend services for off-chain data.</li>
                  </ul>
                </div>

                {/* Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Choose Codazz for Web3 Development</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(34,197,94,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(34,197,94,0.2)' }}>
                    <h4 style={{ color: '#22c55e', marginBottom: 8 }}>Multi-Chain Expertise</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We build on Ethereum, Solana, Polygon, Arbitrum, and Base. Our team writes production Solidity and Rust, and we know the tradeoffs between platforms inside and out.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Security-First Development</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Automated analysis with Slither and Mythril on every PR. Comprehensive test suites with 100% branch coverage. We coordinate third-party audits and manage the remediation process.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Full-Stack Web3</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We don&apos;t just write smart contracts. We build the entire stack: React frontends, wallet integration, indexing infrastructure, and off-chain services that make dApps production-ready.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Regulatory Awareness</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We build with compliance in mind: KYC/AML integration, securities law considerations, and jurisdiction-specific requirements. Our legal partners review tokenomics and governance structures.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How much does it cost to build a Web3 application?', a: 'Costs range from $25K for a basic token and dApp to $500K+ for a custom Layer 2 chain or complex DeFi protocol. An NFT marketplace typically costs $50K-$100K. A DeFi protocol with lending, borrowing, and yield optimization runs $100K-$250K. Security audits add $15K-$100K depending on contract complexity. Start with an MVP ($25K-$50K) to validate market fit before scaling.' },
                  { q: 'Should I build on Ethereum or Solana?', a: 'It depends on your use case. Choose Ethereum (or an Ethereum L2 like Arbitrum or Base) if you need maximum security, deep DeFi composability, or enterprise credibility. Choose Solana for high-throughput consumer applications, gaming, or anything requiring sub-second finality and negligible transaction fees. Many projects deploy on both chains to maximize reach.' },
                  { q: 'How do I handle smart contract security?', a: 'Security is a multi-layered process: (1) Use audited libraries like OpenZeppelin, (2) Write comprehensive unit and integration tests with 100% branch coverage, (3) Run automated analysis tools (Slither, Mythril) on every commit, (4) Get at least one professional audit before mainnet deployment, (5) Launch a bug bounty program on Immunefi, and (6) Consider formal verification for high-value contracts ($10M+ TVL).' },
                  { q: 'What is account abstraction and why does it matter?', a: 'Account abstraction (ERC-4337) replaces traditional crypto wallets (seed phrases, MetaMask popups) with smart contract wallets that support social login, gas sponsorship, batched transactions, and session keys. Users can sign up with their email, never see a seed phrase, and have gas fees paid by the dApp. This is the single biggest UX improvement in Web3 history and is essential for mainstream adoption.' },
                  { q: 'Do I need to worry about regulations for my Web3 project?', a: 'Yes. In 2026, regulatory frameworks are in place in most major markets. MiCA governs crypto assets in the EU. The SEC has provided updated guidance in the US. If your token could be classified as a security, you need legal counsel before launch. KYC/AML requirements apply to most financial services. Build compliance into your architecture from Day 1 rather than retrofitting later.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden',
                  }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: '100%', padding: 24, background: 'none', border: 'none', cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                      }}
                    >
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', margin: 0, textAlign: 'left' }}>{faq.q}</h3>
                      <span style={{ color: '#22c55e', fontSize: 20, flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                    </button>
                    <div style={{
                      maxHeight: openFaq === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease',
                      padding: openFaq === i ? '0 24px 24px' : '0 24px',
                    }}>
                      <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)' }}>{faq.a}</p>
                    </div>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Build Your Web3 Project?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free Web3 architecture consultation. We&apos;ll assess your use case, recommend the right blockchain platform, and provide a detailed project roadmap with security and compliance considerations.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Start Your Web3 Project with Codazz
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 0', fontSize: 14,
                            color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author Card */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%',
                        background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 15, fontWeight: 700, color: '#22c55e',
                      }}>CE</div>
                      <div>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Engineering</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Engineering Team</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>
                      Technical insights from the Codazz engineering team covering blockchain, Web3, smart contracts, and decentralized applications.
                    </p>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 16,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
