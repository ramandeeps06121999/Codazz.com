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
  { id: 'nft-standards', label: 'NFT Token Standards', emoji: '📋' },
  { id: 'marketplace-types', label: 'Marketplace Types', emoji: '🏪' },
  { id: 'smart-contracts', label: 'Smart Contracts & Royalties', emoji: '📜' },
  { id: 'metadata-storage', label: 'Metadata & Storage', emoji: '🗄️' },
  { id: 'minting-flow', label: 'Minting & Lazy Minting', emoji: '⚡' },
  { id: 'wallet-integration', label: 'Wallet Integration', emoji: '👛' },
  { id: 'secondary-market', label: 'Secondary Market Mechanics', emoji: '🔄' },
  { id: 'development-cost', label: 'Development Cost', emoji: '💰' },
  { id: 'revenue-models', label: 'Revenue Models', emoji: '💸' },
  { id: 'nft-discovery', label: 'Discovery & Search', emoji: '🔍' },
  { id: 'cross-chain', label: 'Cross-Chain Support', emoji: '⛓️' },
  { id: 'security-audit', label: 'Security Audit Checklist', emoji: '🔐' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🏗️' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'web3-development-guide-2026', title: 'Web3 Development Guide 2026: From Smart Contracts to dApps', category: 'Blockchain', readTime: '24 min' },
  { slug: 'crypto-wallet-development-guide', title: 'Crypto Wallet Development Guide 2026', category: 'Blockchain', readTime: '20 min' },
];

export default function PageClient() {
  const mainRef = useReveal();
  const [activeSection, setActiveSection] = useState('nft-standards');

  useEffect(() => {
    const handler = () => {
      const sections = tocSections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offsetTop - 120) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .toc-link { transition: color 0.2s, background 0.2s; }
        .toc-link:hover, .toc-link.active { color: #22c55e; background: rgba(34,197,94,0.08); }
        .prose-section h2 { font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 1rem; }
        .prose-section h3 { font-size: 1.35rem; font-weight: 700; color: #22c55e; margin-bottom: 0.75rem; margin-top: 1.75rem; }
        .prose-section p { color: #d1d5db; line-height: 1.8; margin-bottom: 1rem; }
        .prose-section ul { color: #d1d5db; padding-left: 1.5rem; margin-bottom: 1rem; }
        .prose-section li { margin-bottom: 0.5rem; line-height: 1.7; }
        .prose-section strong { color: #fff; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(34,197,94,0.15); }
        @media (max-width: 900px) { .blog-layout { flex-direction: column !important; } .toc-sidebar { display: none; } }
      `}</style>

      <div style={{ background: '#000', minHeight: '100vh' }}>
        <Navbar />

        {/* Hero */}
        <section style={{ position: 'relative', padding: '120px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
          <HeroBackground />
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 999, padding: '6px 18px', marginBottom: 24 }}>
              <span style={{ color: '#22c55e', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Blockchain Development</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.02em' }}>
              NFT Marketplace Development Guide 2026:{' '}
              <span style={{ color: '#22c55e' }}>Build Like OpenSea</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#9ca3af', maxWidth: 680, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Everything you need to build a production-grade NFT marketplace in 2026 — from ERC-721 and ERC-1155 token standards to lazy minting gas optimization, ERC-2981 on-chain royalties, IPFS/Arweave metadata, and WalletConnect integration.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
              {[
                { label: 'Published', value: 'March 20, 2026' },
                { label: 'Read Time', value: '22 min' },
                { label: 'Category', value: 'Blockchain' },
                { label: 'Author', value: 'Raman Makkar' },
              ].map(m => (
                <div key={m.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '8px 18px' }}>
                  <span style={{ color: '#6b7280', fontSize: 12 }}>{m.label}: </span>
                  <span style={{ color: '#e5e7eb', fontSize: 13, fontWeight: 600 }}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <main ref={mainRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 80px' }}>
          <div className="blog-layout" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>

            {/* TOC Sidebar */}
            <aside className="toc-sidebar" style={{ width: 280, flexShrink: 0, position: 'sticky', top: 100 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                <p style={{ color: '#22c55e', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Table of Contents</p>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {tocSections.map(s => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`toc-link${activeSection === s.id ? ' active' : ''}`}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 10, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 13, color: '#9ca3af', fontWeight: 500 }}
                    >
                      <span>{s.emoji}</span>
                      <span>{s.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article */}
            <article style={{ flex: 1, minWidth: 0 }}>

              {/* Section: NFT Standards */}
              <section id="nft-standards" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal">
                  <h2>NFT Token Standards in 2026</h2>
                  <p>The foundation of any NFT marketplace is the token standard you choose. Each standard dictates how assets are represented on-chain, how ownership is transferred, and what metadata capabilities are available. Getting this choice right before writing a single line of smart contract code is critical.</p>
                </div>

                {/* Architecture diagram */}
                <div className="reveal" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 20, padding: 32, margin: '32px 0' }}>
                  <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>NFT Standard Comparison</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {[
                      { standard: 'ERC-721', chain: 'Ethereum / EVM', type: 'Non-Fungible', feature: 'One token = one unique asset. Simple ownership model. Industry default for art, collectibles, PFPs.' },
                      { standard: 'ERC-1155', chain: 'Ethereum / EVM', type: 'Semi-Fungible', feature: 'Batch transfers, mixed fungible + non-fungible in one contract. Ideal for gaming items, editions.' },
                      { standard: 'Solana SPL', chain: 'Solana', type: 'Non-Fungible', feature: 'Account-based model. Token Metadata Program. 400ms finality, near-zero fees. Magic Eden native.' },
                      { standard: 'FA2 (TZIP-12)', chain: 'Tezos', type: 'Multi-Asset', feature: 'Unified interface for fungible, non-fungible, and multi-asset tokens. Low environmental impact.' },
                    ].map(row => (
                      <div key={row.standard} style={{ background: 'rgba(0,0,0,0.4)', borderRadius: 14, padding: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
                        <p style={{ color: '#22c55e', fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{row.standard}</p>
                        <p style={{ color: '#6b7280', fontSize: 12, marginBottom: 8 }}>{row.chain} &middot; {row.type}</p>
                        <p style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.6, marginBottom: 0 }}>{row.feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal">
                  <h3>ERC-721: The Original NFT Standard</h3>
                  <p>ERC-721 introduced the concept of provably unique on-chain assets. Each token has a unique <strong>tokenId</strong> within its contract, and the <strong>ownerOf(tokenId)</strong> function enforces single-owner semantics. The standard mandates a <strong>tokenURI(tokenId)</strong> function that returns a URI pointing to JSON metadata.</p>
                  <p>For a marketplace, ERC-721 means every transfer is an individual transaction. This simplicity makes indexing straightforward but increases gas costs when users need to move multiple assets. OpenSea v1 was built entirely on ERC-721.</p>

                  <h3>ERC-1155: Multi-Token Efficiency</h3>
                  <p>ERC-1155 allows a single contract to manage multiple token types — fungible, semi-fungible, and non-fungible. The <strong>balanceOf(account, id)</strong> pattern replaces ERC-721's owner mapping. <strong>safeBatchTransferFrom</strong> lets you move hundreds of tokens in a single transaction, reducing gas by up to 90% for gaming and edition-based marketplaces.</p>
                  <p>Modern marketplaces like OpenSea support both standards. If you are building for the gaming vertical or limited-edition drops, ERC-1155 is the correct choice.</p>

                  <h3>Solana SPL Tokens and the Token Metadata Program</h3>
                  <p>Solana's account model differs fundamentally from EVM. Each NFT is a <strong>Mint Account</strong> with <strong>supply: 1, decimals: 0</strong>. The Metaplex Token Metadata Program attaches on-chain metadata (name, symbol, URI) and a creators array with royalty basis points directly to the mint. Magic Eden, the largest Solana marketplace, processes millions of trades per day using this model.</p>
                  <p>Compressed NFTs (cNFTs) using Bubblegum and state compression can reduce per-mint cost to fractions of a cent — enabling mass-scale minting for ticketing, gaming, and loyalty programs.</p>
                </div>
              </section>

              {/* Section: Marketplace Types */}
              <section id="marketplace-types" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal">
                  <h2>Marketplace Types: Open, Curated, and Generative</h2>
                  <p>Before writing a smart contract, you must decide what kind of marketplace you are building. Each type has fundamentally different smart contract architecture, curation logic, and user acquisition strategies.</p>
                </div>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, margin: '32px 0' }}>
                  {[
                    {
                      type: 'Open Marketplace',
                      example: 'OpenSea, Blur',
                      desc: 'Any user can list any ERC-721/1155 asset. Permissionless. Revenue from protocol fees (0.5–2.5%). High liquidity, high noise. Requires sophisticated search and filtering.',
                      color: '#22c55e',
                    },
                    {
                      type: 'Curated Marketplace',
                      example: 'Foundation, SuperRare',
                      desc: 'Artists apply and are approved. Higher average sale price, lower volume. Invite-only creates scarcity. Revenue from primary sale commission (10–15%) plus secondary royalty (10%).',
                      color: '#3b82f6',
                    },
                    {
                      type: 'Generative / Launchpad',
                      example: 'Art Blocks, Manifold',
                      desc: 'On-chain generative algorithms produce unique outputs at mint time. Smart contract stores seed, rendering script on-chain or on IPFS. High collector demand for provenance.',
                      color: '#8b5cf6',
                    },
                    {
                      type: 'Niche / Gaming',
                      example: 'Axie, Immutable X',
                      desc: 'Purpose-built for a specific game or community. Often gas-free via Layer 2 or sidechain. Item metadata tied to game state. Requires backend game server integration.',
                      color: '#f59e0b',
                    },
                  ].map(t => (
                    <div key={t.type} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${t.color}33`, borderRadius: 20, padding: 24 }}>
                      <p style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{t.type}</p>
                      <p style={{ color: '#6b7280', fontSize: 12, marginBottom: 12 }}>e.g. {t.example}</p>
                      <p style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.6, marginBottom: 0 }}>{t.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="reveal">
                  <h3>Choosing Your Marketplace Model</h3>
                  <p>Your business model dictates your architecture. Open marketplaces maximize liquidity but require significant SEO, aggregator integration (Reservoir, OpenSea API), and content moderation infrastructure. Curated marketplaces have lower operational overhead but require human review workflows and artist relations.</p>
                  <p>For most funded startups in 2026, the <strong>niche/vertical marketplace</strong> is the winning strategy. Instead of competing with OpenSea on breadth, dominate a vertical: sports collectibles, music rights, real estate tokenization, or loyalty programs.</p>
                </div>
              </section>

              {/* Section: Smart Contracts & Royalties */}
              <section id="smart-contracts" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal">
                  <h2>Smart Contracts and On-Chain Royalties (ERC-2981)</h2>
                  <p>A production NFT marketplace requires at minimum three smart contract systems: an asset contract (ERC-721/1155), a marketplace contract (listing, bidding, settlement), and a royalty registry (ERC-2981). Understanding each is critical to building a system that is secure, upgradeable, and interoperable.</p>
                </div>

                {/* ERC-2981 diagram */}
                <div className="reveal" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 20, padding: 32, margin: '32px 0' }}>
                  <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>ERC-2981 Royalty Flow</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto', paddingBottom: 8 }}>
                    {[
                      { step: '1', label: 'Secondary Sale', sub: 'Buyer pays 1 ETH' },
                      { step: '2', label: 'royaltyInfo()', sub: 'Contract returns (recipient, amount)' },
                      { step: '3', label: 'Marketplace splits', sub: '2.5% fee + X% royalty' },
                      { step: '4', label: 'Creator receives', sub: 'Royalty to wallet' },
                    ].map((s, i) => (
                      <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                        <div style={{ textAlign: 'center', minWidth: 140, padding: '0 8px' }}>
                          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontWeight: 800, color: '#000', fontSize: 18 }}>{s.step}</div>
                          <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{s.label}</p>
                          <p style={{ color: '#6b7280', fontSize: 12, marginBottom: 0 }}>{s.sub}</p>
                        </div>
                        {i < 3 && <div style={{ width: 32, height: 2, background: 'rgba(34,197,94,0.4)', flexShrink: 0 }} />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal">
                  <h3>ERC-2981: The Royalty Standard</h3>
                  <p>ERC-2981 adds a single function <strong>royaltyInfo(tokenId, salePrice)</strong> that returns the royalty recipient address and the royalty amount for a given sale price. This is a view function — gas-free to call. Any marketplace that is ERC-2981-compliant can correctly split payments without needing to know anything about the underlying NFT contract.</p>
                  <p>The key insight: ERC-2981 is advisory, not enforceable at the EVM level. OpenSea's Operator Filter (now deprecated) attempted to enforce royalties by blocklisting non-compliant marketplaces. Blur's approach — optional creator fees with 0.5% minimum — won market share. In 2026, Ethereum's proto-danksharding reduces gas enough that on-chain enforcement via transfer hooks is becoming viable.</p>

                  <h3>Marketplace Contract Architecture</h3>
                  <p>A production marketplace contract needs:</p>
                  <ul>
                    <li><strong>Listing storage</strong>: mapping(address to mapping(uint256 to Listing)) with price, expiry, and payment token</li>
                    <li><strong>Order matching</strong>: off-chain signature-based orders (OpenSea Seaport model) reduce on-chain storage costs by 80%</li>
                    <li><strong>Escrow logic</strong>: for auction-style listings, hold funds in contract until settlement</li>
                    <li><strong>Fee splitter</strong>: protocol fee plus creator royalty plus optional platform fee (for white-label deployments)</li>
                    <li><strong>Upgradeable proxy</strong>: UUPS or Transparent proxy pattern for bug fixes post-launch</li>
                  </ul>

                  <h3>Security: The Non-Negotiables</h3>
                  <p>NFT marketplaces have lost hundreds of millions to reentrancy attacks, signature replay exploits, and approval phishing. Your audit checklist must include: reentrancy guards on all state-changing functions, EIP-712 typed structured data for off-chain orders, approval scope auditing (ERC-721 setApprovalForAll is dangerous), and integer overflow checks (use OpenZeppelin SafeMath or Solidity 0.8+).</p>
                  <p>Budget for two independent audits — one pre-launch and one after any major upgrade. Firms like Trail of Bits, Consensys Diligence, and Code4rena contests are industry standard.</p>
                </div>
              </section>

              {/* Section: Metadata & Storage */}
              <section id="metadata-storage" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal">
                  <h2>Metadata and Decentralized Storage: IPFS vs Arweave</h2>
                  <p>The <strong>tokenURI</strong> field in ERC-721 is just a string — it can point to an HTTPS server, an IPFS CID, or an Arweave transaction ID. Your choice of storage backend determines whether your NFTs survive a server shutdown 10 years from now.</p>
                </div>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, margin: '32px 0' }}>
                  {[
                    {
                      name: 'IPFS + Pinata / nft.storage',
                      cost: '~$0.00/GB (free tier) to $20/GB',
                      persistence: 'Requires active pinning — data can be lost if unpinned',
                      speed: 'Variable retrieval (5ms–30s depending on peer availability)',
                      best: 'Best for: development, low-cost projects, metadata that can be regenerated',
                      color: '#22c55e',
                    },
                    {
                      name: 'Arweave (Bundlr / Irys)',
                      cost: '~$4–8 per GB (one-time permanent payment)',
                      persistence: 'Permanent — stored forever via endowment model (200+ years)',
                      speed: 'Fast HTTP gateway retrieval via ar.io network',
                      best: 'Best for: high-value art, collectibles where permanence matters',
                      color: '#8b5cf6',
                    },
                    {
                      name: 'On-Chain (SVG / Base64)',
                      cost: 'Gas cost per character stored — expensive on mainnet',
                      persistence: 'Fully on-chain — exists as long as the blockchain exists',
                      speed: 'Instant (generated from contract state)',
                      best: 'Best for: generative art, fully autonomous NFTs (Autoglyphs model)',
                      color: '#f59e0b',
                    },
                  ].map(s => (
                    <div key={s.name} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${s.color}33`, borderRadius: 20, padding: 24 }}>
                      <p style={{ color: s.color, fontWeight: 800, fontSize: 15, marginBottom: 12 }}>{s.name}</p>
                      <p style={{ color: '#9ca3af', fontSize: 13, marginBottom: 6 }}><strong style={{ color: '#e5e7eb' }}>Cost:</strong> {s.cost}</p>
                      <p style={{ color: '#9ca3af', fontSize: 13, marginBottom: 6 }}><strong style={{ color: '#e5e7eb' }}>Persistence:</strong> {s.persistence}</p>
                      <p style={{ color: '#9ca3af', fontSize: 13, marginBottom: 12 }}><strong style={{ color: '#e5e7eb' }}>Speed:</strong> {s.speed}</p>
                      <p style={{ color: s.color, fontSize: 12, fontStyle: 'italic', marginBottom: 0 }}>{s.best}</p>
                    </div>
                  ))}
                </div>

                <div className="reveal">
                  <h3>Metadata Schema Best Practices</h3>
                  <p>The OpenSea metadata standard is de facto: a JSON object with <strong>name</strong>, <strong>description</strong>, <strong>image</strong>, and an <strong>attributes</strong> array of trait objects. Additional fields like <strong>animation_url</strong> (for video/3D), <strong>background_color</strong>, and <strong>youtube_url</strong> are supported by major marketplaces.</p>
                  <p>For gaming NFTs, extend the schema with <strong>properties</strong> for game-specific stats. For music NFTs, include <strong>audio</strong>, <strong>artist</strong>, and <strong>duration</strong>. Your indexer (The Graph subgraph or a custom Postgres pipeline) must parse these fields for marketplace search and filtering.</p>

                  <h3>Content Addressing vs Location Addressing</h3>
                  <p>The critical advantage of IPFS/Arweave is <strong>content addressing</strong>: the CID is derived from the content itself, so a CID can never point to different content. HTTP URLs are location-addressed — the server operator can change the content at any time. This is why NFTs pointing to a dynamic API URL are considered vulnerable — the team can swap the image without the NFT holder's consent.</p>
                </div>
              </section>

              {/* Section: Minting Flow */}
              <section id="minting-flow" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal">
                  <h2>Minting Flow and Lazy Minting Gas Optimization</h2>
                  <p>Minting is the moment an NFT comes into existence on-chain. How you architect this flow directly impacts your users' gas costs, your contract's security, and your marketplace's scalability.</p>
                </div>

                {/* Flow diagram */}
                <div className="reveal" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 20, padding: 32, margin: '32px 0' }}>
                  <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Standard vs Lazy Minting</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div>
                      <p style={{ color: '#fff', fontWeight: 700, marginBottom: 12 }}>Standard Minting</p>
                      {['Creator uploads asset to IPFS', 'Creator calls mint() on contract', 'Creator pays gas (~$5–$50 on Ethereum)', 'NFT exists on-chain immediately', 'Creator lists on marketplace', 'Buyer purchases'].map((s, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#22c55e', fontSize: 11, fontWeight: 700 }}>{i + 1}</div>
                          <p style={{ color: '#9ca3af', fontSize: 13, marginBottom: 0, lineHeight: 1.5 }}>{s}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ color: '#22c55e', fontWeight: 700, marginBottom: 12 }}>Lazy Minting (Gas-Free for Creator)</p>
                      {['Creator uploads asset to IPFS', 'Creator signs voucher off-chain (EIP-712)', 'Voucher stored in marketplace database', 'NFT does NOT exist on-chain yet', 'Buyer purchases — triggers mint() + transfer', 'Buyer pays all gas costs'].map((s, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(34,197,94,0.2)', border: '1px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#22c55e', fontSize: 11, fontWeight: 700 }}>{i + 1}</div>
                          <p style={{ color: '#d1d5db', fontSize: 13, marginBottom: 0, lineHeight: 1.5 }}>{s}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="reveal">
                  <h3>Implementing Lazy Minting</h3>
                  <p>The lazy minting voucher contains: tokenId, minPrice, tokenURI, and a creator signature (EIP-712 structured data). When a buyer submits this voucher to your marketplace contract, the contract verifies the signature (recovering the signer address), mints the NFT to the buyer's wallet, and pays the creator minus protocol fees — all atomically.</p>
                  <p>This is exactly how OpenSea implemented gas-free listings for creators. The security requirement is that your contract verifies the recovered signer equals the expected creator address before minting. Without this check, anyone could forge a voucher and steal a creator's tokenId namespace.</p>

                  <h3>Gas Optimization Techniques Beyond Lazy Minting</h3>
                  <ul>
                    <li><strong>ERC-721A (Azuki pattern)</strong>: Batch minting in O(1) by deferring per-token storage writes. A 10,000 PFP collection drops minting cost by 5x compared to standard ERC-721.</li>
                    <li><strong>Merkle tree allowlists</strong>: Instead of storing 5,000 allowed addresses in contract storage (expensive), store only the Merkle root hash and verify proofs at mint time.</li>
                    <li><strong>Layer 2 minting</strong>: Mint on Polygon, Base, or zkSync where gas is 100x cheaper. Bridge to Ethereum mainnet only for high-value secondary trades.</li>
                    <li><strong>Solana compressed NFTs</strong>: State compression via concurrent Merkle trees. 1 million NFTs for approximately $110 total. Used by DRiP for mass airdrops.</li>
                  </ul>
                </div>
              </section>

              {/* Section: Wallet Integration */}
              <section id="wallet-integration" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal">
                  <h2>Wallet Integration: MetaMask, WalletConnect, and Beyond</h2>
                  <p>Wallet integration is where most Web2 developers get stuck. The UX expectation in 2026 is a seamless one-click connection across 300+ wallets with no friction. The infrastructure to achieve this has matured significantly.</p>
                </div>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '32px 0' }}>
                  {[
                    { name: 'MetaMask', type: 'Browser Extension + Mobile', note: 'Largest install base. Direct EIP-1193 provider injection. Required for desktop Web3 UX.' },
                    { name: 'WalletConnect v2', type: 'QR / Deep Link Protocol', note: 'Open protocol connecting 300+ wallets. WebSocket relay. Required for mobile-first UX.' },
                    { name: 'Coinbase Wallet', type: 'Browser Extension + Mobile', note: 'Second largest US user base. Smart Wallet (ERC-4337) for gas sponsorship.' },
                    { name: 'Phantom', type: 'Solana Native', note: 'Dominant on Solana. Also supports Ethereum and Polygon. Deep Magic Eden integration.' },
                    { name: 'RainbowKit', type: 'React SDK', note: 'Drop-in connect button with MetaMask, WalletConnect, Coinbase pre-configured. Open source.' },
                    { name: 'Privy / Dynamic', type: 'Auth + Embedded Wallets', note: 'Social login (Google, Apple) creates embedded wallets. No seed phrase. Best for consumer onboarding.' },
                  ].map(w => (
                    <div key={w.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20 }}>
                      <p style={{ color: '#22c55e', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{w.name}</p>
                      <p style={{ color: '#6b7280', fontSize: 12, marginBottom: 8 }}>{w.type}</p>
                      <p style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.6, marginBottom: 0 }}>{w.note}</p>
                    </div>
                  ))}
                </div>

                <div className="reveal">
                  <h3>The Modern Wallet Integration Stack</h3>
                  <p>In 2026, the recommended stack is: <strong>wagmi v2</strong> (React hooks for EVM) + <strong>viem</strong> (TypeScript Ethereum client) + <strong>RainbowKit</strong> (connect button UI). This combination gives you type-safe contract interactions, automatic wallet detection, and a polished UI in under 100 lines of code.</p>
                  <p>For Solana, use <strong>@solana/wallet-adapter-react</strong> with the WalletMultiButton component. It handles Phantom, Backpack, Solflare, and Ledger automatically.</p>

                  <h3>Account Abstraction (ERC-4337) for NFT Marketplaces</h3>
                  <p>ERC-4337 smart accounts change the UX equation entirely. With account abstraction you can: sponsor gas for first-time users (gasless onboarding), allow payment in ERC-20 tokens instead of ETH, implement session keys so users do not need to sign every transaction in a game, and support social recovery replacing seed phrase dependency.</p>
                  <p>Coinbase Smart Wallet and ZeroDev are production-ready ERC-4337 infrastructure. For a consumer NFT marketplace targeting non-crypto-native users, this is the difference between 2% and 40% conversion on your mint page.</p>
                </div>
              </section>

              {/* Section: Secondary Market */}
              <section id="secondary-market" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal">
                  <h2>Secondary Market Mechanics</h2>
                  <p>Primary sales — creator to first buyer — are only half the picture. Secondary market volume is where OpenSea and Blur generate 80% of their revenue. Building a liquid secondary market requires order books, bidding systems, and cross-marketplace aggregation.</p>
                </div>

                <div className="reveal" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 20, padding: 32, margin: '32px 0' }}>
                  <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Order Book Architecture</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {[
                      { label: 'Off-Chain Orders', desc: 'EIP-712 signed messages stored in your database or a shared order book (Reservoir). Zero gas to create a listing.' },
                      { label: 'On-Chain Settlement', desc: 'When a match is found, buyer submits the signed order on-chain. Contract verifies signature, transfers NFT + funds atomically.' },
                      { label: 'Expiry and Cancellation', desc: 'Orders have a deadline timestamp. Cancellation can be on-chain (gas cost) or off-chain via nonce invalidation.' },
                      { label: 'Floor Bids', desc: 'Collection-wide bids (bid on any item in a collection). Requires WETH (Wrapped ETH) since ETH cannot be held in pre-approval.' },
                    ].map(item => (
                      <div key={item.label} style={{ background: 'rgba(0,0,0,0.4)', borderRadius: 14, padding: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
                        <p style={{ color: '#22c55e', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{item.label}</p>
                        <p style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.6, marginBottom: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal">
                  <h3>Aggregator Integration via Reservoir Protocol</h3>
                  <p>Reservoir is an open-source NFT order book aggregator that normalizes listings from OpenSea, Blur, LooksRare, and X2Y2 into a single API. Integrating Reservoir means your marketplace can show the best price across all platforms and execute cross-platform trades — a massive liquidity advantage for a new marketplace.</p>
                  <p>For your own orders to appear in aggregators, implement the <strong>Seaport</strong> order format (OpenSea's open-source protocol). Seaport orders are automatically ingested by Reservoir and OpenSea's API, giving your listings free distribution across the ecosystem.</p>

                  <h3>Auction Mechanics</h3>
                  <p>English auctions (ascending bids, highest wins) are most common for high-value 1/1 art. Dutch auctions (descending price from high to low) are used for PFP launches to discover market price efficiently. Reserve auctions trigger a 24-hour countdown when the first bid meets the reserve — used by Foundation and Zora.</p>
                  <p>All auction logic should live in the smart contract, not your database, to prevent manipulation. Bids must be held in escrow using WETH and released atomically on settlement or when outbid.</p>
                </div>
              </section>

              {/* Section: Cost Breakdown */}
              <section id="development-cost" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal">
                  <h2>NFT Marketplace Development Cost Breakdown</h2>
                  <p>NFT marketplace development costs vary enormously based on blockchain choice, feature set, and team location. Here is an honest breakdown based on 2026 market rates for a production-quality platform.</p>
                </div>

                <div className="reveal" style={{ margin: '32px 0' }}>
                  {[
                    { tier: 'MVP / Proof of Concept', range: '$30,000 – $80,000', timeline: '8–14 weeks', features: 'Single chain (Polygon), ERC-721 minting, basic listing/buying, MetaMask + WalletConnect, IPFS metadata, simple search', best: 'Idea validation, grant applications' },
                    { tier: 'Production Marketplace', range: '$100,000 – $250,000', timeline: '4–7 months', features: 'Multi-chain (ETH + Polygon + Solana), ERC-2981 royalties, lazy minting, auction engine, WalletConnect v2, Arweave storage, The Graph indexing, Reservoir aggregation', best: 'Funded startups launching V1' },
                    { tier: 'Enterprise / OpenSea-Scale', range: '$250,000 – $500,000+', timeline: '8–14 months', features: 'Full Seaport integration, ERC-4337 account abstraction, cross-chain bridging, advanced analytics dashboard, mobile apps (iOS + Android), dedicated security audits, DAO governance module', best: 'Established brands, institutional projects' },
                  ].map(t => (
                    <div key={t.tier} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 28, marginBottom: 16 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                        <div>
                          <p style={{ color: '#fff', fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{t.tier}</p>
                          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: 0 }}>Timeline: {t.timeline}</p>
                        </div>
                        <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 12, padding: '8px 20px' }}>
                          <p style={{ color: '#22c55e', fontWeight: 800, fontSize: 20, marginBottom: 0 }}>{t.range}</p>
                        </div>
                      </div>
                      <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong style={{ color: '#e5e7eb' }}>Includes:</strong> {t.features}</p>
                      <p style={{ color: '#22c55e', fontSize: 13, marginBottom: 0 }}>Best for: {t.best}</p>
                    </div>
                  ))}
                </div>

                <div className="reveal">
                  <h3>Ongoing Costs to Budget For</h3>
                  <ul>
                    <li><strong>Smart contract audits</strong>: $15,000–$80,000 per audit. Non-negotiable for any marketplace handling real value.</li>
                    <li><strong>Blockchain node infrastructure</strong>: Alchemy/Infura at $49–$499/month for RPC access. Self-hosted nodes from $300–$1,200/month.</li>
                    <li><strong>IPFS/Arweave storage</strong>: Pinata at $20/month for 100GB+. Arweave one-time payment at approximately $5/GB.</li>
                    <li><strong>The Graph indexing</strong>: Decentralized network query fees in GRT. Approximately $0.0001–$0.001 per query.</li>
                    <li><strong>Security monitoring</strong>: Forta Network bots or custom alerting — $500–$2,000/month.</li>
                  </ul>
                </div>
              </section>

              {/* Section: Why Codazz */}
              <section id="why-codazz" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.02))', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 28, padding: 48 }}>
                  <h2 style={{ color: '#22c55e' }}>Why Codazz for NFT Marketplace Development</h2>
                  <p>Codazz has delivered blockchain products across Ethereum, Polygon, Solana, and EVM-compatible L2s. Our team has shipped smart contracts audited by Trail of Bits, integrated Seaport and Reservoir for production marketplaces, and implemented ERC-4337 account abstraction for zero-friction consumer onboarding.</p>
                  <p>Based in Edmonton (Canada) and Chandigarh (India), we offer senior blockchain engineering at rates that let you ship a production marketplace without burning your entire seed round on infrastructure.</p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, margin: '32px 0' }}>
                    {[
                      { metric: '15+', label: 'Blockchain Projects Delivered' },
                      { metric: '$50M+', label: 'TVL in Contracts Shipped' },
                      { metric: '3', label: 'Independent Security Audits' },
                      { metric: '6 wks', label: 'Average Smart Contract MVP' },
                    ].map(m => (
                      <div key={m.label} style={{ textAlign: 'center', background: 'rgba(0,0,0,0.3)', borderRadius: 16, padding: 24 }}>
                        <p style={{ color: '#22c55e', fontSize: 36, fontWeight: 900, marginBottom: 4 }}>{m.metric}</p>
                        <p style={{ color: '#9ca3af', fontSize: 13, marginBottom: 0 }}>{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
                    <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
                      Start Your NFT Project
                    </Link>
                    <Link href="/services/blockchain-web3" style={{ border: '1px solid rgba(34,197,94,0.4)', color: '#22c55e', padding: '14px 32px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
                      View Blockchain Services
                    </Link>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="prose-section" style={{ marginBottom: 72 }}>
                <div className="reveal">
                  <h2>Frequently Asked Questions</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    {
                      q: 'How long does it take to build an NFT marketplace?',
                      a: 'An MVP with basic minting, listing, and buying on a single chain (Polygon) takes 8–14 weeks with a dedicated team. A production marketplace with multi-chain support, auction mechanics, and security audits requires 4–7 months. Enterprise-grade platforms with mobile apps and DAO governance take 8–14 months.',
                    },
                    {
                      q: 'Which blockchain should I build my NFT marketplace on?',
                      a: 'For maximum liquidity and developer tooling, Ethereum mainnet plus Polygon (for gas-free minting) is the standard choice. If your target audience skews gaming or you need near-zero fees, Solana offers 400ms finality and a large existing collector base. For emerging markets, Base (Coinbase L2) has the best fiat onramp integration. Most production marketplaces support 3–5 chains by 2026.',
                    },
                    {
                      q: 'Do NFT royalties actually get paid in 2026?',
                      a: 'Royalty enforcement remains contested. ERC-2981 is advisory — marketplaces choose whether to honor it. Blur popularized optional creator fees, and many aggregators pass through 0% royalties. The practical answer: if you build on a chain or platform with on-chain royalty enforcement (Manifold, Zora, Magic Eden\'s Solana marketplace), you can guarantee royalties. On open Ethereum markets, expect 30–70% royalty compliance from the aggregator ecosystem.',
                    },
                    {
                      q: 'What is lazy minting and should I implement it?',
                      a: 'Lazy minting defers the on-chain minting transaction to the moment of first sale. The creator signs a cryptographic voucher off-chain at zero gas cost, and the buyer\'s purchase transaction triggers minting and transfer atomically. This is the right choice for any marketplace where creators might list many items — paying $10–$50 gas per listing would be a deal-breaker. Implement lazy minting by default; standard minting can be an option for high-value drops where on-chain existence before sale matters.',
                    },
                    {
                      q: 'How much does a smart contract audit cost for an NFT marketplace?',
                      a: 'Professional audits range from $15,000 (Code4rena contest) to $80,000+ (Trail of Bits, Consensys Diligence) depending on contract complexity and firm reputation. Budget for two audits minimum — one pre-launch and one after any significant upgrade. Many teams also run a public bug bounty via Immunefi with a $5,000–$50,000 bounty pool to catch issues post-launch. This is not optional; major exploits in NFT marketplace contracts have cost hundreds of millions.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 28 }}>
                      <p style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Q: {item.q}</p>
                      <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.8, marginBottom: 0 }}>{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Posts */}
              <section style={{ marginBottom: 48 }}>
                <div className="reveal">
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: 24 }}>Related Articles</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                    {relatedPosts.map(post => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                        <div className="card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 28 }}>
                          <p style={{ color: '#22c55e', fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{post.category}</p>
                          <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, lineHeight: 1.5, marginBottom: 12 }}>{post.title}</p>
                          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: 0 }}>{post.readTime} read</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* Revenue Models */}
              <section id="revenue-models" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 8 }}>NFT Marketplace Revenue Models</h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                  Choosing the right fee structure is critical — Blur disrupted OpenSea by removing creator royalties. Here are the main models and trade-offs.
                </p>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                  {[
                    { icon: '👑', title: 'Creator Royalties (ERC-2981)', badge: 'Standard', color: '#22c55e', desc: 'Smart contract enforced royalties (2.5%–10%) paid to original creator on every secondary sale. ERC-2981 standardizes this at the contract level. Blur set to 0%; OpenSea enforces them only for contracts that block non-enforcing marketplaces.' },
                    { icon: '📊', title: 'Platform Trading Fee', badge: 'Primary Revenue', color: '#3b82f6', desc: 'Percentage cut on each sale. OpenSea charges 2.5%. Blur charges 0% to attract volume (monetizes via token incentives). X2Y2 offers 0.5%. New marketplaces typically start at 1–2% to compete.' },
                    { icon: '📋', title: 'Listing Fees', badge: 'Optional', color: '#f59e0b', desc: 'One-time or recurring fee to list an NFT. Rarely used on general marketplaces (gas is the implicit listing cost) but common on curated platforms (e.g., SuperRare charges 3% to sellers, 15% on primary).' },
                    { icon: '⛽', title: 'Gas Subsidization', badge: 'Differentiator', color: '#8b5cf6', desc: 'Platform pays gas for minting (lazy minting) or listing. Funded via higher trading fees. Attracts creators who cannot afford Ethereum mainnet gas. Common on Polygon and Base deployments.' },
                    { icon: '🎪', title: 'Launchpad / Primary Sales', badge: 'High Margin', color: '#ef4444', desc: 'Platform hosts NFT drops and takes 5-15% of primary mint revenue. High margin but requires curation and marketing. Best for established platforms with built-in audiences (Magic Eden, Foundation).' },
                    { icon: '💎', title: 'Token Incentives (ve-tokenomics)', badge: 'Blur Model', color: '#22c55e', desc: 'Platform issues native token (BLUR, LOOKS) rewarded to traders and listers. Subsidizes zero-fee trading to capture market share. Revenue comes later via token treasury or future fee activation.' },
                  ].map((model, i) => (
                    <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${model.color}22`, borderRadius: 20, padding: 24 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                        <span style={{ fontSize: 28 }}>{model.icon}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: model.color, background: `${model.color}18`, padding: '4px 10px', borderRadius: 20 }}>{model.badge}</span>
                      </div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{model.title}</h3>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{model.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Discovery & Search */}
              <section id="nft-discovery" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 8 }}>NFT Discovery & Search Architecture</h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                  Discovery is where most NFT marketplaces fail. Rarity, trait filtering, and verified collections are must-haves for user engagement.
                </p>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32 }}>
                  {[
                    { tool: 'Algolia', use: 'Trait & Text Search', desc: 'Instant search across millions of NFTs by trait, name, collection. Sub-100ms latency. Custom ranking by rarity score, volume, or listing price. Best-in-class for marketplace search UX.' },
                    { tool: 'OpenRarity', use: 'Rarity Scoring', desc: 'Open standard for calculating NFT rarity scores. Replaces inconsistent rarity.tools rankings. Integrates via npm package. Score = information content of each trait combination.' },
                    { tool: 'The Graph Protocol', use: 'On-Chain Indexing', desc: 'Decentralized GraphQL indexer for on-chain events (Transfer, Sale, List). Subgraphs index marketplace events in real-time. Alternative: Alchemy NFT API, Moralis NFT API (simpler but centralized).' },
                    { tool: 'Collection Verification Flow', use: 'Trust & Safety', desc: 'Verified badge system: creator submits Twitter/social proof → admin review → on-chain marking. Prevents impersonation of blue-chip collections (BAYC fakes). Store verification status in DB, not on-chain.' },
                  ].map((item, i) => (
                    <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.use}</div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{item.tool}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cross-Chain Support */}
              <section id="cross-chain" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 8 }}>Cross-Chain NFT Support</h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                  Single-chain marketplaces lose users. Supporting Polygon, Solana, and Base L2 dramatically expands your addressable market.
                </p>
                <div className="reveal" style={{ overflowX: 'auto', marginBottom: 32 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, minWidth: 580 }}>
                    <thead>
                      <tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                        {['Chain', 'Standard', 'Avg Gas (Mint)', 'Volume Share', 'Best For'].map(h => (
                          <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Ethereum Mainnet', 'ERC-721 / ERC-1155', '$5–$50', '~45%', 'Blue-chip, high-value PFP'],
                        ['Polygon', 'ERC-721 / ERC-1155', '$0.001–$0.01', '~20%', 'Gaming, mass-market drops'],
                        ['Base (L2)', 'ERC-721 / ERC-1155', '$0.01–$0.05', '~12%', 'Coinbase ecosystem, consumer'],
                        ['Solana', 'SPL / Metaplex', '$0.001', '~15%', 'High-frequency, fast mints'],
                        ['Avalanche (Subnet)', 'ERC-721', '$0.01–$0.05', '~3%', 'Gaming guilds, enterprise'],
                        ['Arbitrum One', 'ERC-721 / ERC-1155', '$0.01–$0.10', '~5%', 'DeFi-integrated NFTs'],
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                          {row.map((cell, j) => (
                            <td key={j} style={{ padding: '12px 16px', color: j === 0 ? '#22c55e' : 'rgba(255,255,255,0.7)', fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>🌉</span>
                  <div>
                    <strong style={{ color: '#fff', display: 'block', marginBottom: 4 }}>Cross-chain bridging with LayerZero ONFT</strong>
                    <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                      LayerZero&apos;s ONFT standard (Omnichain NFT) lets users bridge NFTs between EVM chains without wrapping. Integrate via the ONFT721 contract. For Solana ↔ EVM bridges, Wormhole Portal is the most battle-tested option (but add extra audit scrutiny given past bridge hacks).
                    </p>
                  </div>
                </div>
              </section>

              {/* Security Audit Checklist */}
              <section id="security-audit" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 8 }}>Smart Contract Security Audit Checklist</h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                  A single vulnerability can drain millions. NFT marketplace contracts handling real funds must be audited before mainnet. Here is what auditors look for.
                </p>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
                  {[
                    { severity: 'CRITICAL', color: '#ef4444', items: [
                      { name: 'Reentrancy', desc: 'Attacker calls back into your contract before state is updated. Fix: checks-effects-interactions pattern, ReentrancyGuard.' },
                      { name: 'Signature Replay', desc: 'Signed off-chain orders reused across chains or after expiry. Fix: include chainId and nonce in every signed message.' },
                    ]},
                    { severity: 'HIGH', color: '#f59e0b', items: [
                      { name: 'Access Control', desc: 'Missing onlyOwner / role checks on admin functions (pause, withdraw, fee update). Fix: OpenZeppelin AccessControl.' },
                      { name: 'Integer Overflow', desc: 'Pre-Solidity 0.8: unchecked arithmetic overflows. Fix: use Solidity ≥0.8 or SafeMath. Audit for unchecked blocks.' },
                    ]},
                    { severity: 'HIGH', color: '#f59e0b', items: [
                      { name: 'Front-Running', desc: 'MEV bots intercept pending transactions to buy before a sale clears. Mitigate with commit-reveal schemes for auctions.' },
                      { name: 'Fake Approvals', desc: 'Malicious NFT contracts grant unlimited token approvals. Validate contract interfaces, use token whitelisting.' },
                    ]},
                    { severity: 'MEDIUM', color: '#3b82f6', items: [
                      { name: 'Oracle Manipulation', desc: 'Price feeds used for royalty calc or loan collateral can be manipulated. Use Chainlink TWAP, not spot price.' },
                      { name: 'DOS via Gas Limits', desc: 'Loops over unbounded arrays in batch minting can hit gas limits. Cap batch sizes (max 50–100 tokens per tx).' },
                    ]},
                  ].map((group, i) => (
                    <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 24, border: `1px solid ${group.color}33` }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: group.color, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>{group.severity}</span>
                      {group.items.map((item, j) => (
                        <div key={j} style={{ marginBottom: j < group.items.length - 1 ? 16 : 0, paddingBottom: j < group.items.length - 1 ? 16 : 0, borderBottom: j < group.items.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{item.name}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 20, border: '1px solid rgba(34,197,94,0.2)' }}>
                  <strong style={{ color: '#22c55e', display: 'block', marginBottom: 8 }}>Recommended Audit Firms</strong>
                  <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                    OpenZeppelin (most reputable, highest cost) · Trail of Bits (strong formal verification) · Certik (broad coverage, cheaper) · Code4rena / Sherlock (competitive audit pools, good for finding edge cases). Budget $15K–$80K for a thorough audit. Do not skip it for mainnet.
                  </p>
                </div>
              </section>

              {/* Final CTA */}
              <section className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.03))', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 28, padding: 48, textAlign: 'center', marginBottom: 48 }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Ready to Build Your NFT Marketplace?</h2>
                <p style={{ color: '#9ca3af', fontSize: 16, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
                  From smart contract architecture to wallet integration and security audits — Codazz delivers production-grade NFT marketplaces on time and on budget.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 40px', borderRadius: 14, fontWeight: 800, textDecoration: 'none', fontSize: 16 }}>
                    Get a Free Quote
                  </Link>
                  <Link href="/services/blockchain-web3" style={{ border: '1px solid rgba(34,197,94,0.4)', color: '#22c55e', padding: '16px 40px', borderRadius: 14, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>
                    Explore Blockchain Services
                  </Link>
                </div>
              </section>

            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
