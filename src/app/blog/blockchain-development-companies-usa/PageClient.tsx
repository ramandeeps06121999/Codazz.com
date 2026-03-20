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

const companies = [
  { num: 1, name: 'Codazz', category: 'Full-Stack Blockchain', emoji: '🍁', metric: '50+ blockchain projects delivered across Ethereum, Solana & Polygon', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Mapletechlabs', category: 'DeFi & Smart Contracts', emoji: '🛡️', metric: 'Security-first smart contract development with formal verification', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'TML (Tech Media Labs)', category: 'Enterprise Blockchain', emoji: '🏢', metric: 'Private blockchain networks & supply chain solutions', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Townmedialabs', category: 'Web3 & NFT Studio', emoji: '🎨', metric: 'NFT marketplaces, DAO tooling & crypto wallet integrations', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'ConsenSys', category: 'Ethereum Tools & DApps', emoji: '💎', metric: 'MetaMask, Infura & enterprise Ethereum development', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Alchemy', category: 'Web3 Developer Platform', emoji: '⚗️', metric: 'Blockchain APIs powering 70%+ of top Web3 apps', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 7, name: 'Chainlink Labs', category: 'Oracle Infrastructure', emoji: '🔗', metric: 'Decentralized oracle networks securing $75B+ in DeFi', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 8, name: 'OpenZeppelin', category: 'Smart Contract Security', emoji: '🔐', metric: 'Industry-standard smart contract libraries & security audits', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Fireblocks', category: 'Digital Asset Custody', emoji: '🔥', metric: 'Enterprise-grade digital asset infrastructure & custody', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Halborn', category: 'Blockchain Security', emoji: '🛡️', metric: 'Elite blockchain security audits & penetration testing', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const comparisonData = [
  { rank: 1, company: 'Codazz', focus: 'Full-Stack Blockchain Dev', chains: 'Ethereum, Solana, Polygon', bestFor: 'End-to-end Web3 products', rating: '9.8' },
  { rank: 2, company: 'Mapletechlabs', focus: 'DeFi & Smart Contracts', chains: 'Ethereum, Arbitrum, BSC', bestFor: 'DeFi protocols & tokenomics', rating: '9.6' },
  { rank: 3, company: 'TML (Tech Media Labs)', focus: 'Enterprise Blockchain', chains: 'Hyperledger, Ethereum', bestFor: 'Enterprise & supply chain', rating: '9.5' },
  { rank: 4, company: 'Townmedialabs', focus: 'NFT & DAO Tooling', chains: 'Ethereum, Solana, Flow', bestFor: 'NFT platforms & Web3 UX', rating: '9.4' },
  { rank: 5, company: 'ConsenSys', focus: 'Ethereum Ecosystem', chains: 'Ethereum, L2s', bestFor: 'Ethereum infrastructure', rating: '9.3' },
  { rank: 6, company: 'Alchemy', focus: 'Developer Platform', chains: 'Multi-chain (30+)', bestFor: 'Web3 API & dev tools', rating: '9.2' },
  { rank: 7, company: 'Chainlink Labs', focus: 'Oracle Networks', chains: 'Chain-agnostic', bestFor: 'Data feeds & oracles', rating: '9.1' },
  { rank: 8, company: 'OpenZeppelin', focus: 'Smart Contract Security', chains: 'Ethereum, L2s', bestFor: 'Security audits & libraries', rating: '9.0' },
  { rank: 9, company: 'Fireblocks', focus: 'Digital Asset Custody', chains: 'Multi-chain (40+)', bestFor: 'Institutional custody', rating: '8.9' },
  { rank: 10, company: 'Halborn', focus: 'Blockchain Security', chains: 'Chain-agnostic', bestFor: 'Security audits & pentesting', rating: '8.8' },
];

const relatedPosts = [
  { slug: 'ai-development-companies-usa', title: 'Top 10 AI Development Companies in the USA', category: 'Technology', readTime: '9 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA', category: 'Business', readTime: '10 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
];

export default function BlockchainDevelopmentCompaniesUSAClient() {
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

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/blockchain-development-companies-usa.jpg"
              alt="Top 10 blockchain development companies in USA 2026"
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

        {/* ── ARTICLE HERO ── */}
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
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Technology</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 14, 2026</span>
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
                10 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 Blockchain Development Companies in the USA (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A definitive ranking of the best blockchain development companies in the USA for 2026 — from smart contract specialists and DeFi protocol engineers to enterprise Web3 infrastructure providers and security auditors.
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
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '𝕏' },
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

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Key Takeaways Box */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                      </svg>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Key Takeaways</span>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {[
                        'Codazz leads the ranking with 50+ blockchain projects delivered across Ethereum, Solana, and Polygon ecosystems.',
                        'The top 4 companies (Codazz, Mapletechlabs, TML, Townmedialabs) offer end-to-end blockchain development from smart contracts to full dApp deployment.',
                        'Security-first development and formal verification are now table stakes for any serious blockchain development firm.',
                        'Enterprise blockchain adoption is accelerating, with Hyperledger Fabric and private Ethereum networks seeing strong demand.',
                        'NFT marketplaces, DAO tooling, and DeFi protocols remain the highest-growth segments in blockchain development.',
                      ].map((item, i) => (
                        <li key={i} style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The United States has cemented its position as the global epicenter of blockchain innovation. With the Securities and Exchange Commission (SEC) establishing clearer regulatory frameworks, state-level innovation sandboxes for fintech and blockchain projects, and institutional adoption of digital assets reaching all-time highs, the USA offers the most mature ecosystem for blockchain development in the world.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    This regulatory clarity, combined with deep engineering talent from institutions like MIT, Stanford, and Carnegie Mellon, has made the USA a magnet for blockchain development companies. From Silicon Valley pioneers building DeFi infrastructure to New York firms tokenizing real-world assets, American builders are at the heart of the Web3 revolution.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated over 90 blockchain development firms across the USA — assessing technical depth, production deployments, smart contract security audit history, client portfolios, ecosystem contributions, and innovation in decentralized application development — to compile this definitive ranking of the <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Top 10 Blockchain Development Companies in the USA</strong> for 2026.
                  </p>
                </div>

                {/* Evaluation Criteria Section */}
                <div className="reveal" style={{ marginBottom: 56 }} id="evaluation-criteria">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>How We Evaluated These Companies</h2>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
                      {[
                        { title: 'Technical Depth', desc: 'Proficiency in smart contract languages (Solidity, Rust, Move), blockchain architectures, and Layer 2 scaling solutions.', icon: '01' },
                        { title: 'Production Deployments', desc: 'Number and complexity of live blockchain projects, mainnet deployments, and TVL secured by their smart contracts.', icon: '02' },
                        { title: 'Security Track Record', desc: 'Smart contract audit history, formal verification practices, vulnerability disclosure records, and security tooling contributions.', icon: '03' },
                        { title: 'Client Portfolio', desc: 'Diversity of clients served across DeFi, NFT, enterprise, and infrastructure verticals, including Fortune 500 engagements.', icon: '04' },
                        { title: 'Ecosystem Contributions', desc: 'Open-source contributions, developer tooling, educational content, and participation in blockchain governance.', icon: '05' },
                        { title: 'Innovation & R&D', desc: 'Investment in emerging technologies like zero-knowledge proofs, account abstraction, cross-chain interoperability, and AI-blockchain convergence.', icon: '06' },
                      ].map((criterion) => (
                        <div key={criterion.title} style={{ padding: '20px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', letterSpacing: '0.1em' }}>{criterion.icon}</span>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '8px 0 8px' }}>{criterion.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{criterion.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison-table">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Quick Comparison Table</h2>
                  <div style={{
                    overflowX: 'auto',
                    borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <table style={{
                      width: '100%', borderCollapse: 'collapse', minWidth: 700,
                      background: 'rgba(255,255,255,0.015)',
                    }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'Blockchain Focus', 'Key Chains', 'Best For', 'Rating'].map(h => (
                            <th key={h} style={{
                              padding: '16px 18px', textAlign: 'left',
                              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                              color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, i) => (
                          <tr key={row.rank} style={{
                            borderBottom: i < comparisonData.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                            background: row.rank === 1 ? 'rgba(34,197,94,0.04)' : 'transparent',
                          }}>
                            <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 700, color: row.rank <= 4 ? '#22c55e' : 'rgba(255,255,255,0.5)' }}>#{row.rank}</td>
                            <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 600, color: '#ffffff', whiteSpace: 'nowrap' }}>{row.company}</td>
                            <td style={{ padding: '14px 18px', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{row.focus}</td>
                            <td style={{ padding: '14px 18px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.chains}</td>
                            <td style={{ padding: '14px 18px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.bestFor}</td>
                            <td style={{ padding: '14px 18px' }}>
                              <span style={{
                                fontSize: 13, fontWeight: 700,
                                color: parseFloat(row.rating) >= 9.5 ? '#22c55e' : parseFloat(row.rating) >= 9.0 ? '#4ade80' : '#60a5fa',
                              }}>{row.rating}/10</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Company 1: Codazz (Highlighted) */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Stack Blockchain</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz is the leading Web3 and blockchain development studio building smart contracts, DeFi protocols, NFT platforms, and decentralized applications. With deep expertise across the Ethereum, Solana, and Polygon ecosystems, the team has delivered over 50 blockchain projects for clients ranging from early-stage crypto startups to Fortune 500 enterprises exploring tokenization.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What sets Codazz apart is their full-stack approach. They do not just write Solidity — they architect entire decentralized ecosystems, from on-chain logic and tokenomics design to the React frontends and Node.js backends that make Web3 applications accessible to mainstream users. Their team maintains deep expertise in ERC-20, ERC-721, ERC-1155 token standards, cross-chain bridges, and Layer 2 scaling solutions.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      Their security-conscious development process includes automated testing suites, gas optimization, and pre-audit code reviews — ensuring every contract they deploy is production-hardened before it touches the mainnet.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Key Metric: 50+ Blockchain Projects Delivered Across Ethereum, Solana & Polygon
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'mapletechlabs', name: 'Mapletechlabs', category: 'DeFi & Smart Contracts',
                    emoji: '🛡️', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Security-first smart contract development with formal verification',
                    paragraphs: [
                      'Mapletechlabs is a blockchain-native development firm specializing in DeFi protocol engineering, cross-chain bridges, and tokenomics design. Known for their security-first smart contract development and formal verification practices, they have built some of the most robust decentralized finance infrastructure in the American market.',
                      'Their engineering team brings deep expertise in Solidity, Vyper, and Rust, with a rigorous development process that includes formal verification of critical contract logic before deployment. From automated market makers and lending protocols to complex multi-sig treasury systems, Mapletechlabs delivers DeFi infrastructure that institutions can trust. Their cross-chain bridge implementations have facilitated over hundreds of millions in cross-chain asset transfers without a single security incident.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML (Tech Media Labs)', category: 'Enterprise Blockchain',
                    emoji: '🏢', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Private blockchain networks & supply chain solutions',
                    paragraphs: [
                      'TML (Tech Media Labs) is an enterprise blockchain consultancy building private blockchain networks, supply chain solutions, and digital asset management platforms. Their strength lies in Hyperledger Fabric and enterprise Ethereum deployments, helping large organizations bring blockchain technology into their existing operations without disrupting legacy systems.',
                      'From pharmaceutical supply chain tracking and real estate tokenization to cross-border payment settlement and digital identity management, TML has built blockchain solutions for some of America\'s most complex enterprise use cases. They work closely with legal and compliance teams to ensure every deployment meets regulatory requirements, making them the go-to partner for enterprises that need blockchain innovation with governance guardrails.',
                    ],
                  },
                  {
                    num: '04', id: 'townmedialabs', name: 'Townmedialabs', category: 'Web3 & NFT Studio',
                    emoji: '🎨', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'NFT marketplaces, DAO tooling & crypto wallet integrations',
                    paragraphs: [
                      'Townmedialabs is a Web3 studio focused on NFT marketplace development, DAO tooling, and crypto wallet integrations. Known for their community-driven development approach and web3 UX expertise, they bridge the gap between complex blockchain technology and consumer-friendly digital experiences.',
                      'Their portfolio includes custom NFT marketplaces with advanced royalty structures, DAO governance platforms with on-chain voting, and seamless crypto wallet integrations that make Web3 feel as intuitive as Web2. Townmedialabs places particular emphasis on the user experience layer — understanding that mass adoption of Web3 depends on making decentralized applications as easy to use as the centralized products people already know.',
                    ],
                  },
                  {
                    num: '05', id: 'consensys', name: 'ConsenSys', category: 'Ethereum Tools & DApps',
                    emoji: '💎', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'MetaMask, Infura & enterprise Ethereum development',
                    paragraphs: [
                      'ConsenSys is the company behind MetaMask (the world\'s most popular crypto wallet with 30M+ monthly active users) and Infura (the backbone infrastructure powering the majority of Ethereum dApps). Founded by Ethereum co-founder Joseph Lubin, ConsenSys sits at the center of the Ethereum ecosystem, contributing to core protocol development while building enterprise-grade blockchain solutions for financial institutions, governments, and Fortune 500 companies.',
                      'Their Linea zkEVM Layer 2 network represents the cutting edge of Ethereum scaling technology, offering near-instant transactions at a fraction of mainnet costs while inheriting Ethereum\'s security guarantees.',
                    ],
                  },
                  {
                    num: '06', id: 'alchemy', name: 'Alchemy', category: 'Web3 Developer Platform',
                    emoji: '⚗️', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Blockchain APIs powering 70%+ of top Web3 apps',
                    paragraphs: [
                      'Alchemy has become the developer platform of choice for Web3, powering over 70% of the top decentralized applications including OpenSea, Aave, and Dapper Labs. Their Supernode infrastructure provides reliable, scalable blockchain API access across 30+ chains, while their developer tools — including the Alchemy SDK, webhooks, and enhanced APIs — have dramatically reduced the time it takes to build and deploy blockchain applications.',
                      'For teams that need rock-solid blockchain infrastructure without running their own nodes, Alchemy is the industry standard. Their monitoring and debugging tools have become essential for any serious blockchain development operation.',
                    ],
                  },
                  {
                    num: '07', id: 'chainlink-labs', name: 'Chainlink Labs', category: 'Oracle Infrastructure',
                    emoji: '🔗', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Decentralized oracle networks securing $75B+ in DeFi',
                    paragraphs: [
                      'Chainlink Labs builds the decentralized oracle infrastructure that connects smart contracts to real-world data, APIs, and off-chain computation. Their oracle networks secure over $75 billion in DeFi total value locked, making Chainlink the most critical piece of middleware in the entire blockchain ecosystem. Without reliable price feeds and verifiable randomness, the vast majority of DeFi protocols simply could not function.',
                      'Their Cross-Chain Interoperability Protocol (CCIP) is rapidly becoming the standard for secure cross-chain communication, enabling tokens, messages, and data to move between different blockchain networks with cryptographic security guarantees.',
                    ],
                  },
                  {
                    num: '08', id: 'openzeppelin', name: 'OpenZeppelin', category: 'Smart Contract Security',
                    emoji: '🔐', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Industry-standard smart contract libraries & security audits',
                    paragraphs: [
                      'OpenZeppelin provides the industry-standard smart contract libraries that the majority of Ethereum projects are built on. Their open-source Contracts library has been downloaded millions of times and battle-tested with billions of dollars in value. Their security audit team has reviewed smart contracts for some of the biggest names in DeFi, including Compound, Aave, and The Graph.',
                      'Their Defender platform provides automated security monitoring, transaction management, and governance tools that help teams manage the full lifecycle of smart contract operations in production.',
                    ],
                  },
                  {
                    num: '09', id: 'fireblocks', name: 'Fireblocks', category: 'Digital Asset Custody',
                    emoji: '🔥', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Enterprise-grade digital asset infrastructure & custody',
                    paragraphs: [
                      'Fireblocks provides the enterprise-grade digital asset infrastructure that banks, exchanges, and institutions need to securely store, transfer, and issue digital assets. Their multi-party computation (MPC) technology eliminates single points of failure in key management, while their policy engine enables granular governance controls required by regulated financial institutions.',
                      'With support for over 40 blockchain networks and integration with 1,500+ DeFi protocols, Fireblocks has become the institutional backbone for digital asset operations, processing trillions of dollars in transactions since launch.',
                    ],
                  },
                  {
                    num: '10', id: 'halborn', name: 'Halborn', category: 'Blockchain Security',
                    emoji: '🛡️', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Elite blockchain security audits & penetration testing',
                    paragraphs: [
                      'Halborn is an elite blockchain security firm providing smart contract audits, penetration testing, and security advisory services to the Web3 ecosystem. Their team of offensive security researchers has identified critical vulnerabilities in major blockchain protocols before they could be exploited, potentially saving billions of dollars in user funds.',
                      'Beyond audits, Halborn offers comprehensive security programs including threat modeling, incident response planning, and security training for blockchain development teams. For any project preparing for a mainnet launch or managing significant TVL, a Halborn security engagement has become a prerequisite for credibility.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24, padding: 36,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${app.bgColor}0.1)`, border: `1px solid ${app.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{app.emoji}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                          marginBottom: pi < app.paragraphs.length - 1 ? 16 : 20,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: `${app.bgColor}0.06)`, border: `1px solid ${app.bgColor}0.12)`,
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={app.accentColor} strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}>
                          {app.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              </article>

              {/* ── SIDEBAR ── */}
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
                      {[
                        { href: '#evaluation-criteria', emoji: '📋', label: 'Evaluation Criteria', sub: 'Methodology' },
                        { href: '#comparison-table', emoji: '📊', label: 'Comparison Table', sub: 'Quick Overview' },
                        ...companies.map(app => ({
                          href: `#${app.name.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '')}`,
                          emoji: app.emoji,
                          label: app.name,
                          sub: app.category,
                        })),
                      ].map(item => (
                        <a key={item.label} href={item.href} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{item.sub}</span>
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
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
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
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
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

        {/* ── BOTTOM CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#ffffff', marginBottom: 12,
                }}>Build on Blockchain</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Launch Your Blockchain Project
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Whether you are building a DeFi protocol, NFT marketplace, or enterprise blockchain solution, Codazz has the Web3 engineering expertise to bring your vision to production.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Launch Your Blockchain Project →
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
