'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import HeroBackground from '@/components/HeroBackground';
import PortfolioShowcase from '@/components/PortfolioShowcase';

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

const stats = [
  { value: '50+', label: 'dApps Shipped' },
  { value: '500K+', label: 'Wallet Connections' },
  { value: 'ETH/SOL/Polygon', label: 'Chain Coverage' },
  { value: 'Full-Stack', label: 'Web3 Expertise' },
];

const services = [
  { icon: '⚛️', title: 'Frontend dApp Development', desc: 'Next.js and React dApps built with ethers.js, viem, and wagmi for Ethereum, and @solana/web3.js for Solana. Type-safe contract interactions, real-time event subscriptions, and optimistic UI for smooth UX.' },
  { icon: '🔌', title: 'Wallet Connection (RainbowKit/WalletConnect)', desc: 'Seamless wallet connection flows using RainbowKit or custom implementations supporting MetaMask, Coinbase Wallet, WalletConnect, Phantom, and 100+ wallets. SIWE (Sign-In with Ethereum) for auth.' },
  { icon: '📡', title: 'On-Chain Data Indexing (The Graph)', desc: 'Custom subgraphs on The Graph Protocol to index and query your smart contract events efficiently. Orders of magnitude faster than direct RPC calls for complex historical data and analytics queries.' },
  { icon: '🗄️', title: 'IPFS Integration', desc: 'Decentralized file storage and retrieval via IPFS for NFT metadata, user-generated content, and application state that should live on-chain. Gateway optimization for fast content loading in the browser.' },
  { icon: '🔐', title: 'Token-Gating & Auth', desc: 'NFT and token-gated access control — verify wallet ownership of specific tokens to unlock content, features, or community access. Integrates with Lit Protocol for encrypted content and programmable access conditions.' },
  { icon: '🌉', title: 'Cross-Chain dApps', desc: 'Multi-chain dApps that work seamlessly across Ethereum, Arbitrum, Optimism, Polygon, Base, and Solana. Chain detection, automatic switching, unified balance views, and cross-chain transaction support.' },
];

const steps = [
  { num: '01', title: 'dApp Architecture', desc: 'We design the full-stack architecture — smart contract interfaces, indexing strategy, frontend state management, authentication flow, and off-chain data requirements — before any implementation begins.' },
  { num: '02', title: 'Smart Contract Integration', desc: 'Type-safe contract integration using Typechain or wagmi\'s code generation. We implement transaction flows, event listeners, error handling, and gas estimation with user-friendly feedback throughout.' },
  { num: '03', title: 'Frontend Build', desc: 'Pixel-perfect frontend development with wallet-aware state management, real-time on-chain data, optimistic updates for responsive UX, and mobile-responsive design across all screen sizes.' },
  { num: '04', title: 'Testnet → Mainnet', desc: 'Thorough testing on public testnets with real wallet flows, transaction simulation, and cross-browser/wallet compatibility testing before a staged mainnet launch with monitoring and rollback capability.' },
];

const faqs = [
  { q: 'What is the best tech stack for a Web3 frontend?', a: 'Our default stack: Next.js 14 (App Router) for the framework, wagmi v2 + viem for Ethereum interactions (type-safe, excellent hooks), RainbowKit for wallet connection UI, The Graph for indexed data, and TanStack Query for caching and synchronization. For Solana: @solana/web3.js with @solana/wallet-adapter. This stack is battle-tested across hundreds of production dApps and handles the peculiarities of blockchain state (pending transactions, reorgs, RPC reliability) gracefully.' },
  { q: 'How do you handle wallet and blockchain state management in a React dApp?', a: 'Blockchain state management has unique challenges: transactions are async and can be pending for minutes, state can revert, and multiple data sources (RPC, subgraph, off-chain API) need synchronization. We use wagmi\'s built-in hooks for contract reads/writes with automatic refetching, TanStack Query for caching on-chain data with appropriate stale times, and optimistic updates for actions the user initiates. Transaction state is tracked with pending/success/error toasts and a transaction history component.' },
  { q: 'When should data be stored on-chain vs off-chain?', a: 'On-chain storage is expensive (~20,000 gas per 32 bytes on Ethereum) but trustless and permanent. Use it for: ownership records, financial balances, governance votes, and data that must be verifiable without trusting a third party. Off-chain storage (IPFS, Arweave, traditional databases) is orders of magnitude cheaper and should be used for: content, metadata, user preferences, analytics, and large files. A common pattern is storing a content hash on-chain that verifiably points to off-chain data.' },
  { q: 'How do I efficiently index and query blockchain data for my dApp?', a: 'Direct RPC calls for historical data are slow and expensive — you\'d need to scan every block to find past events. The Graph Protocol lets you define a subgraph (GraphQL schema + mappings) that automatically indexes your smart contract events into a queryable database. Queries that would take minutes over RPC return in milliseconds. We write custom subgraphs for your contracts and deploy to The Graph\'s decentralized network or a self-hosted Graph Node for cost control.' },
  { q: 'How do you handle users switching between different blockchain networks?', a: 'Chain switching is a core UX challenge in multi-chain dApps. We implement: automatic chain detection on wallet connect, network-aware component rendering (showing the right balances and features per chain), prompted network switching when users attempt actions on the wrong chain, and graceful degradation for unsupported networks. With wagmi, chain configuration is declarative — you define supported chains once and all hooks automatically scope to the current chain. We also implement URL-based chain routing for bookmarkable chain-specific views.' },
];



export default function PageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
      `}</style>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/services/blockchain-web3" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blockchain & Web3</Link>
              <span>/</span>
              <span style={{ color: '#ffffff' }}>Web3 dApp Development</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>BLOCKCHAIN & WEB3</span>
            </div>
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
              Web3 dApps Built to <span style={{ color: '#ffffff' }}>Ship</span>
            </h1>
            <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>We build full-stack Web3 decentralized applications — from smart contract integration and wallet connection to on-chain data indexing and cross-chain UX — shipping 50+ dApps with 500K+ wallet connections.</p>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>View Case Studies</Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
              </div>
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section ref={s1} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Our Capabilities</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {services.map((svc, i) => (
                <div key={svc.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        {/* PORTFOLIO */}
        <PortfolioShowcase category="blockchain-web3" />

        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>How We Work</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#ffffff', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s3} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, transition: '0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Get Started?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's discuss your dApp project and build something great together.</p>
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
                Get a Free Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
