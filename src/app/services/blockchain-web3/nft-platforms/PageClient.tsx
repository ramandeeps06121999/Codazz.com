'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
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

const stats = [
  { value: '30+', label: 'NFT Platforms Built' },
  { value: '500K+', label: 'NFTs Minted' },
  { value: 'ERC-721/1155/2981', label: 'Standards Supported' },
  { value: 'IPFS & Arweave', label: 'Storage Solutions' },
];

const services = [
  { icon: '🎨', title: 'NFT Minting Smart Contracts', desc: 'Gas-optimized ERC-721A and ERC-1155 minting contracts with configurable supply, pricing, allowlists, batch minting, and reveal mechanics. Audited, tested, and deployable to any EVM chain.' },
  { icon: '🛒', title: 'Marketplace Development', desc: 'Full NFT marketplace builds — fixed price, auction, and offer listing mechanisms, royalty enforcement, collection pages, activity feeds, and wallet-gated access. Custom or integrated with OpenSea and Blur APIs.' },
  { icon: '💎', title: 'Royalty Systems (ERC-2981)', desc: 'On-chain royalty implementation using the ERC-2981 standard, compatible with major marketplaces. We also implement custom royalty enforcement mechanisms and royalty splitting for collaborative collections.' },
  { icon: '🗄️', title: 'IPFS & Arweave Storage', desc: 'Decentralized metadata and asset storage using IPFS (via Pinata or NFT.Storage) and permanent Arweave storage. We handle batch uploads, metadata generation pipelines, and IPFS pinning strategies.' },
  { icon: '📋', title: 'Allowlist & Reveal Mechanics', desc: 'Merkle tree-based allowlist verification for gas-efficient presale access control. Multi-stage reveals with randomized token assignment using Chainlink VRF for provably fair distribution.' },
  { icon: '📊', title: 'NFT Analytics Dashboard', desc: 'Real-time collection analytics — floor price tracking, volume, holder distribution, rarity rankings, and wash trading detection. Integrated with OpenSea, Blur, and on-chain event indexing.' },
];

const steps = [
  { num: '01', title: 'Collection Strategy', desc: 'We define your collection architecture — token standard, supply, pricing tiers, allowlist strategy, reveal mechanics, and royalty structure — aligned with your community and revenue goals.' },
  { num: '02', title: 'Contract Development', desc: 'Gas-optimized minting contracts built with ERC-721A for significant gas savings on batch mints, thorough test coverage, allowlist verification via Merkle proofs, and Chainlink VRF integration for reveals.' },
  { num: '03', title: 'Marketplace Build', desc: 'Frontend marketplace development with wallet connection, collection browsing, listing/buying/bidding flows, royalty display, and activity feeds. Responsive design optimized for both desktop and mobile users.' },
  { num: '04', title: 'Launch', desc: 'Full launch support including metadata pipeline deployment to IPFS/Arweave, contract verification on Etherscan, allowlist management tools, and a war room during mint day for rapid issue resolution.' },
];

const faqs = [
  { q: 'Should I use ERC-721 or ERC-1155 for my NFT project?', a: 'ERC-721 is the classic standard where each token is unique — ideal for PFP collections, 1-of-1 art, and collectibles where individual ownership history matters. ERC-1155 supports multiple token types in one contract and allows multiple editions of each token — better for gaming items, tickets, membership tiers, and collections where some tokens exist in quantities greater than 1. ERC-721A (by Azuki) is a gas-optimized variant of ERC-721 that dramatically reduces minting costs for large batches and is our default recommendation for PFP collections.' },
  { q: 'How should I handle NFT metadata and asset storage?', a: 'Never store NFT assets or metadata on centralized servers — if your server goes down, your NFTs lose their images permanently. We recommend a two-tier approach: IPFS for metadata (via Pinata with multiple pinning nodes) for cost-effective decentralized storage, and Arweave for assets you want guaranteed permanent storage (one-time upload fee, data stored forever). We automate the entire upload and metadata generation pipeline for your collection.' },
  { q: 'How do I implement creator royalties that actually get paid?', a: 'ERC-2981 is the standard for on-chain royalty information that tells marketplaces what royalty percentage to pay. However, major marketplaces (OpenSea, Blur) have made royalties optional for buyers, making enforcement difficult at the protocol level. Solutions include: building your own marketplace with enforced royalties, using operator filter registries to block sales on zero-royalty marketplaces, or accepting optional royalties and building community value in other ways. We help you navigate the trade-offs and implement the approach that fits your project.' },
  { q: 'How do I make NFT minting gas-efficient?', a: 'Several proven techniques reduce minting gas costs: ERC-721A stores ownership data for batch mints far more efficiently than standard ERC-721, saving 60–80% on gas for multi-mint transactions. Merkle tree allowlists use a single bytes32 root on-chain instead of storing thousands of addresses. Lazy minting defers token creation to transfer time. We benchmark gas costs during development and optimize aggressively before deployment.' },
  { q: 'How do I build a fair randomized reveal for my NFT collection?', a: 'Fair reveals require provable randomness — without it, savvy minters can game the system by predicting which token IDs map to rare traits. We implement reveals using Chainlink VRF (Verifiable Random Function), which provides cryptographically provable on-chain randomness that neither we nor you can manipulate. The reveal process: tokens mint with placeholder metadata, a random seed is requested from Chainlink VRF, the seed determines the offset for final token assignments, and metadata is revealed across the entire collection simultaneously.' },
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
      <main style={{ background: '#ffffff', color: '#111827', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(0,0,0,0.4)' }}>
              <Link href="/" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/services/blockchain-web3" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>Blockchain & Web3</Link>
              <span>/</span>
              <span style={{ color: '#111827' }}>NFT Platform Development</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.2)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#111827', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#111827', letterSpacing: '0.05em' }}>BLOCKCHAIN & WEB3</span>
            </div>
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
              NFT Platforms Built to <span style={{ color: '#111827' }}>Launch</span>
            </h1>
            <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>We build gas-optimized NFT minting contracts, custom marketplaces, and royalty systems from strategy through launch — 500K+ NFTs minted across 30+ platforms we've shipped.</p>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #111827, #374151)', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.1)', color: '#111827', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>View Case Studies</Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#111827', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', marginTop: 4 }}>{s.label}</div>
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
        <section ref={s1} style={{ padding: '100px 0', background: 'rgba(0,0,0,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111827', marginBottom: 12 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Our Capabilities</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {services.map((svc, i) => (
                <div key={svc.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(0,0,0,0.05)', background: 'rgba(0,0,0,0.015)' }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={s2} style={{ padding: '100px 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111827', marginBottom: 12 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>How We Work</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(0,0,0,0.05)', background: 'rgba(0,0,0,0.015)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#111827', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s3} style={{ padding: '100px 0', background: 'rgba(0,0,0,0.01)' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#111827', marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ borderRadius: 16, border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#111827', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" style={{ flexShrink: 0, transition: '0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 15, color: 'rgba(0,0,0,0.5)', lineHeight: 1.75 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} style={{ padding: '120px 0', textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(17,24,39,0.08) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Get Started?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(0,0,0,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's discuss your NFT platform and build something great together.</p>
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #111827, #374151)', color: '#fff', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
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
