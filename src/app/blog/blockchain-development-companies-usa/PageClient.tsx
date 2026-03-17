'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
  { num: 1, name: 'Codazz', category: 'Full-Stack Blockchain', emoji: '🍁', metric: 'Smart Contracts, DeFi, NFT Platforms & Crypto Wallets', accentColor: '#4F46E5', bgColor: 'rgba(79,70,229,' },
  { num: 2, name: 'Townmedialabs', category: 'Web3 Marketing & Dev', emoji: '🌐', metric: 'Blockchain development with digital marketing expertise', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'TML', category: 'DeFi & Token Platforms', emoji: '🪙', metric: 'Decentralized finance and token ecosystem builders', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Blockstream', category: 'Bitcoin Infrastructure', emoji: '⛏️', metric: 'Enterprise Bitcoin solutions from Austin, TX', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Consensys', category: 'Ethereum Tools & DApps', emoji: '💎', metric: 'MetaMask, Infura & enterprise Ethereum development', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Dapper Labs', category: 'NFTs & Flow Blockchain', emoji: '🎨', metric: 'Creators of CryptoKitties & NBA Top Shot', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Ledn', category: 'Crypto Lending Platform', emoji: '🏦', metric: 'Bitcoin-backed lending and savings products', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Coinbase', category: 'Retail Crypto Access', emoji: '📱', metric: 'Making crypto accessible to everyday Americans', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Polymath', category: 'Security Token Platform', emoji: '🔐', metric: 'Regulated digital securities infrastructure', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Figment', category: 'Blockchain Infrastructure', emoji: '🔗', metric: 'Enterprise staking and node infrastructure', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
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
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#ffffff', minHeight: '100vh' }}>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -300, left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 900,
            background: 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(79,70,229,0.12)', color: '#4F46E5',
                padding: '5px 14px', borderRadius: 100,
              }}>Technology</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>March 14, 2026</span>
              <span style={{ color: 'rgba(0,0,0,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(0,0,0,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(0,0,0,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                8 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 Blockchain Development Companies in the USA (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A definitive ranking of the top blockchain development companies in the USA for 2026 — from smart contract specialists and DeFi builders to enterprise Web3 infrastructure providers.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(0,0,0,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#4F46E5',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '𝕏' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.08)',
                    background: 'rgba(0,0,0,0.02)', color: 'rgba(0,0,0,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)',
                  background: copied ? 'rgba(79,70,229,0.1)' : 'rgba(0,0,0,0.02)',
                  color: copied ? '#4F46E5' : 'rgba(0,0,0,0.45)',
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
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The USA has emerged as one of the world's most crypto-friendly nations. The Securities and Exchange Commission (SEC) has established clear regulatory frameworks, state-level innovation sandboxes operate for fintech and blockchain projects, and American banks were among the first globally to explore central bank digital currencies (CBDCs).
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    This regulatory clarity, combined with deep engineering talent from institutions like MIT, Stanford, and Carnegie Mellon, has made the USA a magnet for blockchain development. From Silicon Valley pioneers to the creators of major DeFi protocols in New York, American builders are at the heart of the Web3 revolution.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    We evaluated over 80 blockchain development firms across the USA — assessing technical depth, production deployments, security audit history, client portfolios, and innovation in smart contract development — to compile this definitive ranking of the <strong>Top 10 Blockchain Development Companies in the USA</strong> for 2026.
                  </p>
                </div>

                {/* Company 1: Codazz (Highlighted) */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(0,0,0,0.015) 100%)', border: '1px solid rgba(79,70,229,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(79,70,229,0.15)', color: '#4F46E5',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Stack Blockchain</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      From smart contracts and DeFi protocols to NFT platforms and crypto wallets, we build production-grade blockchain solutions. Our Web3 team has deployed over 50 smart contracts across Ethereum, Solana, and Polygon, serving American fintech and enterprise clients.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      What sets Codazz apart is our full-stack approach. We do not just write Solidity — we architect entire decentralized ecosystems, from on-chain logic and tokenomics design to the React frontends and Node.js backends that make Web3 applications accessible to mainstream users. Our team maintains deep expertise in ERC-20, ERC-721, ERC-1155 token standards, cross-chain bridges, and Layer 2 scaling solutions.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#4F46E5', fontWeight: 600 }}>
                        Key Metric: 50+ Smart Contracts Deployed Across Ethereum, Solana & Polygon
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'townmedialabs', name: 'Townmedialabs', category: 'Web3 Marketing & Dev',
                    emoji: '🌐', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Blockchain development with digital marketing expertise',
                    paragraphs: [
                      'Townmedialabs combines blockchain development with digital marketing expertise, helping American Web3 projects launch with both technical excellence and market traction. Their unique positioning bridges the gap between building decentralized applications and actually getting them in front of users — a challenge that pure-play blockchain agencies often overlook.',
                      'Their team specializes in token launch strategies, community building on Discord and Twitter, and developing custom dApps with integrated growth analytics. For American blockchain startups that need both the tech and the go-to-market, Townmedialabs delivers on both fronts.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML', category: 'DeFi & Token Platforms',
                    emoji: '🪙', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Decentralized finance and token ecosystem builders',
                    paragraphs: [
                      'TML builds decentralized finance platforms and token ecosystems, helping American blockchain startups navigate the regulatory landscape while building compliant, scalable solutions. Their deep understanding of SEC guidelines and state-level requirements makes them invaluable for projects that need to operate within American securities law.',
                      'From automated market makers (AMMs) and yield farming protocols to governance token frameworks and staking platforms, TML has built some of the most sophisticated DeFi infrastructure coming out of the USA. They work closely with legal counsel to ensure every smart contract meets regulatory requirements.',
                    ],
                  },
                  {
                    num: '04', id: 'blockstream', name: 'Blockstream', category: 'Bitcoin Infrastructure',
                    emoji: '⛏️', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Enterprise Bitcoin solutions from Victoria, BC',
                    paragraphs: [
                      'Based in Austin, TX, Blockstream is a global leader in Bitcoin infrastructure. They developed the Liquid Network, a Bitcoin sidechain for faster settlements and confidential transactions. Their satellite network broadcasts the Bitcoin blockchain worldwide, and their mining operations are among the most energy-efficient in North America.',
                    ],
                  },
                  {
                    num: '05', id: 'consensys', name: 'Consensys', category: 'Ethereum Tools & DApps',
                    emoji: '💎', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'MetaMask, Infura & enterprise Ethereum development',
                    paragraphs: [
                      'Consensys is the company behind MetaMask (the world\'s most popular crypto wallet) and Infura (the backbone infrastructure for Ethereum dApps). Their engineering offices contribute to core Ethereum tooling and enterprise blockchain solutions, working with some of America\'s largest financial institutions on private blockchain pilots.',
                    ],
                  },
                  {
                    num: '06', id: 'dapper-labs', name: 'Dapper Labs', category: 'NFTs & Flow Blockchain',
                    emoji: '🎨', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Creators of CryptoKitties & NBA Top Shot',
                    paragraphs: [
                      'Dapper Labs literally invented the NFT craze with CryptoKitties in 2017, then built the Flow blockchain to solve the scalability problems they encountered. NBA Top Shot, their flagship product, has generated over $1 billion in sales. They are the gold standard for consumer-facing blockchain applications and continue to push the boundaries of what is possible with digital collectibles.',
                    ],
                  },
                  {
                    num: '07', id: 'ledn', name: 'Ledn', category: 'Crypto Lending Platform',
                    emoji: '🏦', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Bitcoin-backed lending and savings products',
                    paragraphs: [
                      'Ledn has built one of the most trusted crypto lending platforms in the USA. Their Bitcoin-backed loans and savings accounts offer Americans a regulated way to earn yield on their crypto holdings. Unlike many competitors that collapsed during the 2022 crypto winter, Ledn maintained full solvency and published regular proof-of-reserves attestations — a testament to their engineering discipline and risk management.',
                    ],
                  },
                  {
                    num: '08', id: 'coinbase', name: 'Coinbase', category: 'Retail Crypto Access',
                    emoji: '📱', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Making crypto accessible to everyday Americans',
                    paragraphs: [
                      'As one of the first SEC-regulated crypto trading platforms in the USA, Coinbase has made digital assets accessible to millions of everyday Americans. Their engineering team has built a seamless experience that bridges traditional investing and crypto, allowing users to buy Bitcoin, Ethereum, and over 50 other tokens within the same app they use for stocks and ETFs. Their focus on regulatory compliance sets the standard for American crypto platforms.',
                    ],
                  },
                  {
                    num: '09', id: 'polymath', name: 'Polymath', category: 'Security Token Platform',
                    emoji: '🔐', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Regulated digital securities infrastructure',
                    paragraphs: [
                      'Polymath is pioneering the security token industry with Polymesh, a purpose-built blockchain for regulated assets. They enable the tokenization of real-world assets — real estate, private equity, bonds — in a way that satisfies securities regulators globally. Their technology has been adopted by major financial institutions looking to bring traditional assets on-chain while maintaining full regulatory compliance.',
                    ],
                  },
                  {
                    num: '10', id: 'figment', name: 'Figment', category: 'Blockchain Infrastructure & Staking',
                    emoji: '🔗', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Enterprise staking and node infrastructure',
                    paragraphs: [
                      'Figment is one of the world\'s largest blockchain infrastructure providers. They operate validator nodes across over 60 proof-of-stake networks, managing billions of dollars in staked assets. Their DataHub platform provides enterprise-grade API access to blockchain data, and their staking solutions serve institutional investors, exchanges, and custodians. Figment represents the infrastructure backbone that makes the entire blockchain ecosystem function.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
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
                            <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8,
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
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {companies.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '')}`} style={{
                          fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#4F46E5';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(79,70,229,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,0,0,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{app.category}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#4F46E5', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#111827', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 300+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(0,0,0,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(79,70,229,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(79,70,229,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,0,0,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#4F46E5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', margin: 0 }}>{post.readTime} read</p>
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
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#4F46E5', marginBottom: 12,
                }}>Build on Blockchain</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Launch Your Blockchain Project
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Whether you are building a DeFi protocol, NFT marketplace, or enterprise blockchain solution, Codazz has the Web3 engineering expertise to bring your vision to production.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#4F46E5', color: '#fff',
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
