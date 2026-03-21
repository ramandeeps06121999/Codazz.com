'use client';
import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(24px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      obs.observe(item);
    });
    return () => obs.disconnect();
  }, []);
  return ref;
}

const tocSections = [
  { id: 'marketplace-types', label: 'Marketplace Types' },
  { id: 'must-have-features', label: 'Must-Have Features' },
  { id: 'token-standards', label: 'Token Standards (ERC-721 / 1155)' },
  { id: 'smart-contracts', label: 'Smart Contracts & Royalties' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'metadata-ipfs', label: 'Metadata & IPFS Storage' },
  { id: 'wallet-integration', label: 'Wallet Integration' },
  { id: 'gas-optimization', label: 'Gas Optimization' },
  { id: 'security-audit', label: 'Security Audit Checklist' },
  { id: 'competitors', label: 'Top Competitors' },
  { id: 'cost-timeline', label: 'Cost & Timeline' },
  { id: 'faq', label: 'FAQ' },
];

const relatedPosts = [
  { title: 'Crypto Wallet Development Guide', href: '/blog/crypto-wallet-development-guide' },
  { title: 'Multi-Tenant Architecture Guide', href: '/blog/multi-tenant-architecture-guide' },
  { title: 'API Rate Limiting Guide', href: '/blog/api-rate-limiting-guide' },
  { title: 'How to Build an AI Chatbot for Your Business', href: '/blog/how-to-build-ai-chatbot-business' },
];

const G = '#22c55e';

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('marketplace-types');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (const sec of [...tocSections].reverse()) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sec.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={pageRef} style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80, textAlign: 'center' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span style={{ background: 'rgba(34,197,94,0.12)', color: G, border: `1px solid rgba(34,197,94,0.3)`, borderRadius: 999, padding: '6px 18px', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Developer Guide · 2026
            </span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            How to Build an NFT Marketplace in 2026:{' '}
            <span style={{ color: G }}>Complete Developer Guide</span>
          </h1>
          <p className="reveal" style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 680, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Everything you need to design and build a production NFT marketplace — covering token standards, smart contracts, royalties, IPFS storage, wallet integration, gas optimization, security audits, and real costs from $80K to $400K.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
            <span>March 2026</span>
            <span>·</span>
            <span>28 min read</span>
            <span>·</span>
            <span>Codazz Engineering</span>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 48, alignItems: 'start' }}>

        {/* Article Body */}
        <article>

          {/* ── Section 1: Marketplace Types ── */}
          <section id="marketplace-types" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Types of NFT Marketplaces
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Before writing a single line of code, you need to decide which category of NFT marketplace you are building. The type fundamentally determines your smart contract architecture, curation logic, fee model, target audience, and go-to-market strategy. There are three primary archetypes, each with distinct trade-offs.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              The NFT market in 2026 has matured significantly from the 2021–2022 speculation peak. Trading volume has stabilized around utility-driven assets — gaming items, digital collectibles with real-world perks, tokenized IP, and onchain media. The platforms thriving are those that serve a specific community or use-case extremely well, rather than trying to be everything to everyone.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 32 }}>
              {[
                {
                  type: 'Open Marketplace',
                  examples: 'OpenSea, Blur, LooksRare',
                  desc: 'Anyone can mint, list, and trade any NFT collection. No curation, no whitelist. Massive inventory but low signal-to-noise ratio. Revenue comes from platform fees (1–2.5%) on every transaction. Requires significant infrastructure investment to handle high volume and fraud prevention.',
                  pros: ['Largest addressable market', 'Network effects compound fast', 'Passive fee revenue at scale'],
                  cons: ['Hard to differentiate', 'Race to zero on fees', 'High moderation burden'],
                  highlight: false,
                },
                {
                  type: 'Curated Marketplace',
                  examples: 'Foundation, SuperRare, Nifty Gateway',
                  desc: 'Artists must apply and be approved before listing. Curation creates scarcity and prestige — collectors pay premiums for the trust signal. Higher average sale prices, lower volume. Revenue from primary sales commission (10–15%) plus secondary royalties (5–10%). Strong brand equity but slow growth.',
                  pros: ['Premium brand positioning', 'Higher average order value', 'Lower fraud and moderation overhead'],
                  cons: ['Slow to scale inventory', 'Curation is subjective and costly', 'Creator acquisition harder'],
                  highlight: true,
                },
                {
                  type: 'Niche / Vertical Marketplace',
                  examples: 'NBA Top Shot (sports), Axie Infinity (gaming), Audius (music)',
                  desc: 'Purpose-built for a specific asset category or community. Deep integration with the underlying content or IP. Can command custom royalty structures and unique minting mechanics. Often built around a partnership or exclusive license. The fastest path to product-market fit in 2026.',
                  pros: ['Built-in audience from day one', 'Premium partnerships justify exclusivity', 'Custom mechanics match asset type'],
                  cons: ['Concentrated category risk', 'Dependent on IP / partner ecosystem', 'Harder to pivot if niche shrinks'],
                  highlight: false,
                },
              ].map((mt) => (
                <div key={mt.type} className="reveal" style={{ background: mt.highlight ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.03)', border: `1px solid ${mt.highlight ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <div style={{ fontWeight: 700, color: mt.highlight ? G : '#fff', fontSize: 18 }}>{mt.type}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>e.g. {mt.examples}</div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{mt.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: G, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pros</div>
                      <ul style={{ paddingLeft: 16, margin: 0 }}>
                        {mt.pros.map((p) => <li key={p} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7 }}>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#f87171', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cons</div>
                      <ul style={{ paddingLeft: 16, margin: 0 }}>
                        {mt.cons.map((c) => <li key={c} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7 }}>{c}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: G }}>2026 recommendation:</strong> Unless you have OpenSea-level resources, avoid building a generic open marketplace. The competition is brutal and fee revenue has compressed to near-zero. Niche marketplaces with a specific community, exclusive IP deal, or unique mechanic (e.g., music royalty NFTs, carbon credit NFTs, gaming guild items) have the highest chance of sustainable traction.
              </p>
            </div>
          </section>

          {/* ── Section 2: Must-Have Features ── */}
          <section id="must-have-features" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Must-Have Features for Any NFT Marketplace
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Regardless of marketplace type, there is a core feature set that every production NFT marketplace must implement correctly. Missing or poorly implementing any of these will result in user trust issues, security vulnerabilities, or revenue leakage. Here is the definitive feature checklist broken down by priority tier.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Tier 1: Core (Must Ship at Launch)</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 28 }}>
              {[
                { feature: 'NFT Minting', desc: 'Single and batch minting flows. ERC-721 for 1-of-1s, ERC-1155 for editions. Lazy minting to defer gas costs until first sale. Metadata upload to IPFS at mint time.' },
                { feature: 'Fixed-Price Listing', desc: 'List any owned NFT at a set price. Handle approvals and transferFrom in the marketplace contract. Support listing in ETH and ERC-20 tokens (USDC, WETH).' },
                { feature: 'Auction Mechanism', desc: 'English auction (ascending bids) with reserve price. Timed auction with auto-settlement at end. Bid escrow handled by smart contract, not custodially by the platform.' },
                { feature: 'Offer / Make Offer', desc: 'Allow buyers to submit offers below list price. Seller accepts or counters off-chain. On acceptance, on-chain settlement executes atomically.' },
                { feature: 'Wallet Connect', desc: 'Support MetaMask, WalletConnect v2, Coinbase Wallet, Rainbow. Use wagmi + viem for React. Show ENS names and avatars. Handle wallet disconnection gracefully.' },
                { feature: 'Creator Royalties', desc: 'ERC-2981 on-chain royalty standard. Royalty enforced at contract level (not just marketplace policy). Configure royalty recipient address and basis points (e.g., 500 = 5%).' },
              ].map((f) => (
                <div key={f.feature} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 6, fontSize: 14 }}>{f.feature}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Tier 2: Growth (Ship Within 3 Months)</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 28 }}>
              {[
                { feature: 'Collection Pages', desc: 'Dedicated page per collection with floor price, volume, items, owners. Rarity ranking for trait-based collections. Filtering by traits and price range.' },
                { feature: 'Activity Feed', desc: 'Real-time on-chain event feed: mints, sales, transfers, listings, offers. Powered by indexed events (The Graph or Alchemy webhooks). Essential for market transparency.' },
                { feature: 'Creator Dashboard', desc: 'Analytics for creators: total sales volume, royalties earned, offer inbox. Batch listing management. Royalty recipient management. Payout history.' },
                { feature: 'User Profiles', desc: 'ENS integration, bio, social links. Owned NFTs gallery, listed items, sale history, offer history. Follow system for creator discovery.' },
                { feature: 'Search & Discovery', desc: 'Full-text search across collections and items. Filter by blockchain, category, price range, rarity. Trending collections by volume and sales count.' },
                { feature: 'Shopping Cart', desc: 'Multi-item checkout in a single transaction (batch buy). Dramatically improves conversion for collectors buying multiple items from one collection.' },
              ].map((f) => (
                <div key={f.feature} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: 6, fontSize: 14 }}>{f.feature}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Tier 3: Differentiation (6-Month Horizon)</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 16 }}>
              {[
                { feature: 'Credit Card Checkout', desc: 'On-ramp via MoonPay, Stripe (crypto on-ramp), or Crossmint. Abstract away wallet complexity for mainstream users. Critical for gaming and sports NFT audiences.' },
                { feature: 'Drops / Launchpad', desc: 'Scheduled mint events with allowlist (whitelist) mechanics. Merkle tree proofs for allowlist verification. Fair launch via bonding curves or Dutch auction pricing.' },
                { feature: 'Trait Offers / Collection Offers', desc: 'Offer on any NFT in a collection or with specific traits. Powered by Seaport or custom contract. Blur\'s dominance was built largely on collection offers.' },
                { feature: 'Analytics Dashboard', desc: 'Price history charts, wash trading detection, holder distribution, whale alerts, listing depth. Makes your marketplace the trusted data source for the community.' },
              ].map((f) => (
                <div key={f.feature} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: 6, fontSize: 14 }}>{f.feature}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3: Token Standards ── */}
          <section id="token-standards" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              NFT Token Standards: ERC-721 vs ERC-1155
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Every NFT is defined by a token standard — a smart contract interface specification that determines how the token behaves, how wallets display it, and how marketplaces interact with it. Choosing the wrong standard for your use case creates expensive migration problems. Here is the definitive comparison.
            </p>

            <div className="reveal" style={{ overflowX: 'auto', marginBottom: 28 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                    {['Property', 'ERC-721', 'ERC-1155', 'ERC-404 (Experimental)'].map((h) => (
                      <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: G, fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prop: 'Token uniqueness', a: 'Each token ID is unique (1-of-1)', b: 'Each token ID can have multiple copies (editions)', c: 'Hybrid fungible/non-fungible' },
                    { prop: 'Fungibility', a: 'Non-fungible only', b: 'Both fungible and non-fungible in one contract', c: 'Tokens become fungible below a threshold' },
                    { prop: 'Batch transfers', a: 'No — one at a time', b: 'Yes — safeBatchTransferFrom saves gas', c: 'Yes' },
                    { prop: 'Gas cost (mint)', a: 'Higher per token', b: 'Lower for editions via batch mint', c: 'Similar to ERC-721' },
                    { prop: 'Use case', a: 'Art, collectibles, domain names, 1-of-1s', b: 'Gaming items, music editions, tickets, supply chain', c: 'Speculative — fractionalized art' },
                    { prop: 'Wallet support', a: 'Universal', b: 'Universal', c: 'Limited — experimental' },
                    { prop: 'OpenZeppelin impl.', a: 'ERC721.sol + ERC721Enumerable', b: 'ERC1155.sol', c: 'Community forks only' },
                    { prop: 'Royalty standard', a: 'ERC-2981', b: 'ERC-2981', c: 'Custom' },
                  ].map((row, i) => (
                    <tr key={row.prop} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '11px 16px', fontWeight: 600, color: '#fff', fontSize: 13 }}>{row.prop}</td>
                      <td style={{ padding: '11px 16px', color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{row.a}</td>
                      <td style={{ padding: '11px 16px', color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{row.b}</td>
                      <td style={{ padding: '11px 16px', color: 'rgba(255,255,255,0.45)', fontSize: 13, fontStyle: 'italic' }}>{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
              <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: G, marginBottom: 10, fontSize: 15 }}>When to use ERC-721</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.9 }}>
                  <li>Art marketplace (1-of-1 generative or hand-drawn)</li>
                  <li>PFP collections (10,000 unique items)</li>
                  <li>Domain name NFTs (ENS, Unstoppable)</li>
                  <li>Real estate tokenization</li>
                  <li>Loyalty membership cards (unique per holder)</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: 10, fontSize: 15 }}>When to use ERC-1155</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.9 }}>
                  <li>Gaming items (weapons, skins, potions with quantities)</li>
                  <li>Music editions (100 copies of an album)</li>
                  <li>Event tickets (seat sections as token IDs)</li>
                  <li>Supply chain provenance (batch tracking)</li>
                  <li>Marketplace with mixed inventory types</li>
                </ul>
              </div>
            </div>

            <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: G }}>Enumerable extension note:</strong> ERC-721 base contract does not track which token IDs a wallet owns — it only tracks ownership of a given token ID. If you need to query "all NFTs owned by address X" on-chain, add <code style={{ color: G }}>ERC721Enumerable</code>. Be aware it adds ~40% more gas per mint/transfer due to index maintenance. For marketplaces, you typically index ownership off-chain via The Graph or Alchemy, so Enumerable is often unnecessary.
              </p>
            </div>
          </section>

          {/* ── Section 4: Smart Contracts & Royalties ── */}
          <section id="smart-contracts" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Smart Contracts & On-Chain Royalties
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Your marketplace requires at least two core smart contracts: an NFT contract (the token itself) and a marketplace contract (handles listings, bids, and settlement). In practice you will also want a royalty registry and potentially a factory contract for collection deployment. OpenZeppelin provides audited, battle-tested base implementations for all of these.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Core Contract Architecture</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
              {[
                { name: 'NFT Contract', base: 'ERC721.sol / ERC1155.sol', desc: 'Minting, ownership, transfer. Inherit from OpenZeppelin. Add ERC-2981 royalty interface. Deploy one per collection.' },
                { name: 'Marketplace Contract', base: 'Custom (Seaport-inspired)', desc: 'Handles listings, offers, auctions. Holds bid escrow. Executes atomic settlement: transfer NFT + transfer ETH/ERC-20 + split fees. Upgradeable via proxy.' },
                { name: 'Royalty Registry', base: 'EIP-2981 + registry pattern', desc: 'Centralised registry mapping collection address → royalty recipient + basis points. Allows creator to update royalty address without redeploying collection contract.' },
                { name: 'Collection Factory', base: 'Clone (EIP-1167)', desc: 'Deploy new NFT collections as minimal proxy clones of a master implementation. Cuts per-collection deployment cost by ~10x. Store collection config in factory.' },
              ].map((c) => (
                <div key={c.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 4, fontSize: 15 }}>{c.name}</div>
                  <code style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, display: 'block', marginBottom: 8 }}>{c.base}</code>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{c.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>ERC-2981 Royalty Standard Implementation</h3>
            <div className="reveal" style={{ background: '#0d1117', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 24, marginBottom: 24, fontFamily: 'monospace', fontSize: 13, lineHeight: 1.7, overflowX: 'auto' }}>
              <div style={{ color: '#8b949e' }}>{'// SPDX-License-Identifier: MIT'}</div>
              <div style={{ color: '#8b949e' }}>{'// Implements ERC-2981 on-chain royalty standard'}</div>
              <div><span style={{ color: '#ff7b72' }}>pragma solidity</span> <span style={{ color: '#a5d6ff' }}>^0.8.20</span><span style={{ color: '#e6edf3' }}>;</span></div>
              <div style={{ marginTop: 8 }}><span style={{ color: '#ff7b72' }}>import</span> <span style={{ color: '#a5d6ff' }}>"@openzeppelin/contracts/token/ERC721/ERC721.sol"</span><span style={{ color: '#e6edf3' }}>;</span></div>
              <div><span style={{ color: '#ff7b72' }}>import</span> <span style={{ color: '#a5d6ff' }}>"@openzeppelin/contracts/token/common/ERC2981.sol"</span><span style={{ color: '#e6edf3' }}>;</span></div>
              <div style={{ marginTop: 8 }}><span style={{ color: '#ff7b72' }}>contract</span> <span style={{ color: '#79c0ff' }}>MyNFT</span> <span style={{ color: '#ff7b72' }}>is</span> <span style={{ color: '#79c0ff' }}>ERC721</span><span style={{ color: '#e6edf3' }}>, </span><span style={{ color: '#79c0ff' }}>ERC2981</span> <span style={{ color: '#e6edf3' }}>{`{`}</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#ff7b72' }}>constructor</span><span style={{ color: '#e6edf3' }}>(</span><span style={{ color: '#ff7b72' }}>address</span> <span style={{ color: '#79c0ff' }}>royaltyReceiver</span><span style={{ color: '#e6edf3' }}>) </span><span style={{ color: '#79c0ff' }}>ERC721</span><span style={{ color: '#e6edf3' }}>(</span><span style={{ color: '#a5d6ff' }}>"MyNFT"</span><span style={{ color: '#e6edf3' }}>, </span><span style={{ color: '#a5d6ff' }}>"MNT"</span><span style={{ color: '#e6edf3' }}>) {`{`}</span></div>
              <div style={{ paddingLeft: 48 }}><span style={{ color: '#8b949e' }}>{'// 500 basis points = 5% royalty'}</span></div>
              <div style={{ paddingLeft: 48 }}><span style={{ color: '#d2a8ff' }}>_setDefaultRoyalty</span><span style={{ color: '#e6edf3' }}>(royaltyReceiver, </span><span style={{ color: '#a5d6ff' }}>500</span><span style={{ color: '#e6edf3' }}>);</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#e6edf3' }}>{`}`}</span></div>
              <div style={{ paddingLeft: 24, marginTop: 8 }}><span style={{ color: '#8b949e' }}>{'// Override required when inheriting from both ERC721 and ERC2981'}</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#ff7b72' }}>function</span> <span style={{ color: '#d2a8ff' }}>supportsInterface</span><span style={{ color: '#e6edf3' }}>(</span><span style={{ color: '#ff7b72' }}>bytes4</span> <span style={{ color: '#79c0ff' }}>interfaceId</span><span style={{ color: '#e6edf3' }}>) </span><span style={{ color: '#ff7b72' }}>public view override</span><span style={{ color: '#e6edf3' }}>(ERC721, ERC2981) </span><span style={{ color: '#ff7b72' }}>returns</span><span style={{ color: '#e6edf3' }}>({`bool`}) {`{`}</span></div>
              <div style={{ paddingLeft: 48 }}><span style={{ color: '#ff7b72' }}>return</span> <span style={{ color: '#ff7b72' }}>super</span><span style={{ color: '#e6edf3' }}>.supportsInterface(interfaceId);</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#e6edf3' }}>{`}`}</span></div>
              <div><span style={{ color: '#e6edf3' }}>{`}`}</span></div>
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Marketplace Settlement Flow</h3>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {[
                { step: '1', label: 'Seller signs order', desc: 'Off-chain EIP-712 typed signature. Contains: token address, token ID, price, expiry, nonce. Zero gas. Stored in your database.' },
                { step: '2', label: 'Buyer submits transaction', desc: 'Calls marketplace.executeOrder() with signed order. Buyer pays gas + purchase price in the same tx.' },
                { step: '3', label: 'Contract validates signature', desc: 'Recovers signer address using ECDSA. Checks nonce (replay protection). Checks expiry. Checks seller still owns NFT.' },
                { step: '4', label: 'Atomic settlement', desc: 'Transfers NFT from seller to buyer (safeTransferFrom). Pays seller (price minus platform fee minus royalty). Pays platform fee to treasury. Pays royalty to creator.' },
                { step: '5', label: 'Emit events', desc: 'Emit Sale(tokenAddress, tokenId, seller, buyer, price, royalty, fee). Indexed by The Graph for activity feed.' },
              ].map((s) => (
                <div key={s.step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 16 }}>
                  <div style={{ minWidth: 32, height: 32, background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: G, fontSize: 14 }}>{s.step}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fff', marginBottom: 4, fontSize: 14 }}>{s.label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: G }}>Royalty enforcement in 2026:</strong> The NFT ecosystem has moved away from voluntary marketplace-level royalty enforcement (which Blur famously circumvented) toward on-chain enforcement via transfer hooks. ERC-721C (from Limit Break) allows creators to whitelist which marketplace contracts can transfer their tokens — non-compliant platforms are blocked at the contract level. For 2026 builds, consider supporting ERC-721C or implementing your own transfer restriction if creator royalties are core to your marketplace's value proposition.
              </p>
            </div>
          </section>

          {/* ── Section 5: Tech Stack ── */}
          <section id="tech-stack" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              NFT Marketplace Tech Stack
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              A production NFT marketplace is a multi-layered system combining frontend, backend, blockchain infrastructure, indexing, storage, and payments. Each layer has specialized tooling that has become industry standard. Here is the 2026 stack we recommend at Codazz, with rationale for each choice.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
              {[
                {
                  layer: 'Frontend',
                  color: 'rgba(59,130,246,0.08)',
                  border: 'rgba(59,130,246,0.2)',
                  tools: [
                    { name: 'Next.js 15 (App Router)', role: 'Framework', reason: 'SSR for collection pages improves SEO and initial load. Server Components reduce JS bundle size.' },
                    { name: 'wagmi v2 + viem', role: 'Web3 hooks', reason: 'Type-safe React hooks for wallet connection, contract reads/writes, transaction management.' },
                    { name: 'RainbowKit', role: 'Wallet UI', reason: 'Pre-built wallet modal supporting 100+ wallets. WalletConnect v2 integrated out of the box.' },
                    { name: 'TanStack Query', role: 'Data fetching', reason: 'Cache and sync NFT data, activity feeds, and price data with intelligent background refetching.' },
                  ],
                },
                {
                  layer: 'Smart Contracts',
                  color: 'rgba(34,197,94,0.06)',
                  border: 'rgba(34,197,94,0.2)',
                  tools: [
                    { name: 'Solidity 0.8.24', role: 'Language', reason: 'Current stable. Built-in overflow protection, custom errors (cheaper than revert strings).' },
                    { name: 'OpenZeppelin 5.x', role: 'Base contracts', reason: 'Audited ERC-721, ERC-1155, ERC-2981, AccessControl, Pausable. Never re-implement these.' },
                    { name: 'Hardhat / Foundry', role: 'Dev framework', reason: 'Foundry preferred for fast Solidity testing (forge test). Hardhat for deployment scripts and plugins.' },
                    { name: 'OpenZeppelin Defender', role: 'Ops', reason: 'Automated contract upgrades, admin operations via multi-sig, monitoring and alerting.' },
                  ],
                },
                {
                  layer: 'Blockchain Node / RPC',
                  color: 'rgba(168,85,247,0.06)',
                  border: 'rgba(168,85,247,0.18)',
                  tools: [
                    { name: 'Alchemy', role: 'Primary RPC', reason: 'NFT API (getOwnedNFTs, getContractNFTs) saves enormous indexing work. Webhooks for real-time events. 99.99% uptime SLA.' },
                    { name: 'Infura', role: 'Fallback RPC', reason: 'Multi-provider setup for reliability. Automatic failover if Alchemy has an outage.' },
                    { name: 'The Graph', role: 'Indexing', reason: 'GraphQL queries over on-chain events. Write a Subgraph that indexes your marketplace contract events for activity feeds and analytics.' },
                  ],
                },
                {
                  layer: 'Storage (NFT Metadata & Assets)',
                  color: 'rgba(234,179,8,0.06)',
                  border: 'rgba(234,179,8,0.18)',
                  tools: [
                    { name: 'IPFS via NFT.Storage / web3.storage', role: 'Decentralized storage', reason: 'Content-addressed storage — URI is a hash of content, making metadata tamper-proof. Free tier adequate for most projects.' },
                    { name: 'Arweave / Bundlr', role: 'Permanent storage', reason: 'One-time fee for permanent storage. Preferred for high-value 1-of-1 art where permanence is a selling point.' },
                    { name: 'Cloudflare R2 + IPFS gateway', role: 'CDN layer', reason: 'Cache IPFS assets at edge for fast image loading. IPFS gateways alone are too slow for good UX.' },
                  ],
                },
                {
                  layer: 'Backend API',
                  color: 'rgba(239,68,68,0.06)',
                  border: 'rgba(239,68,68,0.18)',
                  tools: [
                    { name: 'Node.js + Fastify', role: 'API server', reason: 'Handles off-chain order book, user profiles, notifications, search indexing. Fastify outperforms Express ~40% on throughput.' },
                    { name: 'PostgreSQL', role: 'Primary DB', reason: 'Store orders, users, notifications. JSONB columns for flexible NFT metadata. Read replicas for analytics queries.' },
                    { name: 'Redis', role: 'Cache / queue', reason: 'Cache floor prices, collection stats. BullMQ for background jobs (email notifications, metadata refresh).' },
                    { name: 'Typesense / Elasticsearch', role: 'Search', reason: 'Full-text search across NFT names, descriptions, traits. Typesense is self-hostable and simpler to operate.' },
                  ],
                },
              ].map((layer) => (
                <div key={layer.layer} className="reveal" style={{ background: layer.color, border: `1px solid ${layer.border}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 16, marginBottom: 14 }}>{layer.layer}</div>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {layer.tools.map((t) => (
                      <div key={t.name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ minWidth: 180 }}>
                          <span style={{ fontWeight: 600, color: G, fontSize: 13 }}>{t.name}</span>
                          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginLeft: 6 }}>({t.role})</span>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>{t.reason}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 6: Metadata & IPFS ── */}
          <section id="metadata-ipfs" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              NFT Metadata & IPFS Storage
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              NFT metadata is the JSON document that describes an NFT — its name, description, image URL, and attributes. It is retrieved via the <code style={{ color: G }}>tokenURI()</code> function on the contract. The quality and permanence of your metadata storage directly affects the long-term value and trustworthiness of assets on your marketplace. Metadata stored on a centralized server that shuts down makes NFTs worthless.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>ERC-721 / OpenSea Metadata Standard</h3>
            <div className="reveal" style={{ background: '#0d1117', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 24, marginBottom: 24, fontFamily: 'monospace', fontSize: 13, lineHeight: 1.7, overflowX: 'auto' }}>
              <div style={{ color: '#8b949e' }}>{'// tokenURI returns this JSON (stored on IPFS)'}</div>
              <div><span style={{ color: '#e6edf3' }}>{`{`}</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>"name"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>"Pixel Punks #4821"</span><span style={{ color: '#e6edf3' }}>,</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>"description"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>"A uniquely generated pixel punk from the 10K collection."</span><span style={{ color: '#e6edf3' }}>,</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>"image"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>"ipfs://Qm.../4821.png"</span><span style={{ color: '#e6edf3' }}>,</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>"animation_url"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>"ipfs://Qm.../4821.mp4"</span><span style={{ color: '#e6edf3' }}>,</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>"external_url"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>"https://yourmarketplace.com/nft/4821"</span><span style={{ color: '#e6edf3' }}>,</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>"attributes"</span><span style={{ color: '#e6edf3' }}>: [</span></div>
              <div style={{ paddingLeft: 48 }}><span style={{ color: '#e6edf3' }}>{`{ `}</span><span style={{ color: '#79c0ff' }}>"trait_type"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>"Background"</span><span style={{ color: '#e6edf3' }}>, </span><span style={{ color: '#79c0ff' }}>"value"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>"Blue"</span><span style={{ color: '#e6edf3' }}> {`}`},</span></div>
              <div style={{ paddingLeft: 48 }}><span style={{ color: '#e6edf3' }}>{`{ `}</span><span style={{ color: '#79c0ff' }}>"trait_type"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>"Rarity Score"</span><span style={{ color: '#e6edf3' }}>, </span><span style={{ color: '#79c0ff' }}>"value"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>94</span><span style={{ color: '#e6edf3' }}>, </span><span style={{ color: '#79c0ff' }}>"display_type"</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>"number"</span><span style={{ color: '#e6edf3' }}> {`}`}</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#e6edf3' }}>]</span></div>
              <div><span style={{ color: '#e6edf3' }}>{`}`}</span></div>
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Lazy Minting: Defer Gas Until First Sale</h3>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Standard minting requires the creator to pay gas upfront to mint an NFT, even if it never sells. Lazy minting defers the actual on-chain mint to the moment of first purchase — the buyer pays the minting gas as part of the purchase transaction. This is how OpenSea's "lazy mint" and Rarible's "Lazy NFT" work.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 16 }}>
              <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: G, marginBottom: 10 }}>Lazy Minting Flow</div>
                <ol style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.9 }}>
                  <li>Creator signs voucher off-chain (token URI, min price, expiry)</li>
                  <li>Voucher stored in your database, not on-chain</li>
                  <li>Buyer calls redeemVoucher() with voucher + payment</li>
                  <li>Contract mints NFT and transfers to buyer in one tx</li>
                  <li>Creator receives payment minus platform fee</li>
                </ol>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: 10 }}>Trade-offs</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.9 }}>
                  <li>Pro: Creators list for free — lower barrier</li>
                  <li>Pro: No gas waste if NFT never sells</li>
                  <li>Con: Higher gas for buyer at purchase</li>
                  <li>Con: Voucher management complexity</li>
                  <li>Con: Token ID not known until first sale</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 7: Wallet Integration ── */}
          <section id="wallet-integration" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Wallet Integration
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Wallet connection is the login experience for your NFT marketplace. A poor wallet UX loses users before they ever see an NFT. In 2026, users expect frictionless multi-wallet support, WalletConnect v2 for mobile, ENS name resolution, and graceful handling of network switching. Here is the implementation blueprint.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
              {[
                { wallet: 'MetaMask', share: '~38%', notes: 'Browser extension. Inject provider via window.ethereum. Most common on desktop. Support EIP-1193 provider interface.' },
                { wallet: 'WalletConnect v2', share: '~25%', notes: 'QR code / deep link. Connects to 200+ mobile wallets (Rainbow, Trust, Zerion). Use @walletconnect/web3modal or RainbowKit.' },
                { wallet: 'Coinbase Wallet', share: '~18%', notes: 'Browser extension + mobile. Coinbase Smart Wallet (passkey-based, no seed phrase) — critical for mainstream onboarding.' },
                { wallet: 'Safe (Gnosis)', share: '~8%', notes: 'Multi-sig smart contract wallet. Used by DAOs, teams, institutional collectors. Requires EIP-1271 signature verification.' },
                { wallet: 'Embedded Wallets', share: '~11%', notes: 'Privy, Particle, Dynamic — create wallets behind email/social login. Essential for mainstream user onboarding in gaming and sports NFT apps.' },
              ].map((w, i) => (
                <div key={w.wallet} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: i === 0 ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.03)', border: `1px solid ${i === 0 ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 10, padding: 16 }}>
                  <div style={{ minWidth: 130 }}>
                    <div style={{ fontWeight: 700, color: i === 0 ? G : '#fff', fontSize: 14 }}>{w.wallet}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>~{w.share} market share</div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>{w.notes}</div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>wagmi v2 Quick Setup</h3>
            <div className="reveal" style={{ background: '#0d1117', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 24, marginBottom: 24, fontFamily: 'monospace', fontSize: 13, lineHeight: 1.7, overflowX: 'auto' }}>
              <div style={{ color: '#8b949e' }}>{'// wagmi config with multiple connectors'}</div>
              <div><span style={{ color: '#ff7b72' }}>import</span> <span style={{ color: '#e6edf3' }}>{`{ createConfig, http }`}</span> <span style={{ color: '#ff7b72' }}>from</span> <span style={{ color: '#a5d6ff' }}>'wagmi'</span><span style={{ color: '#e6edf3' }}>;</span></div>
              <div><span style={{ color: '#ff7b72' }}>import</span> <span style={{ color: '#e6edf3' }}>{`{ mainnet, polygon, base }`}</span> <span style={{ color: '#ff7b72' }}>from</span> <span style={{ color: '#a5d6ff' }}>'wagmi/chains'</span><span style={{ color: '#e6edf3' }}>;</span></div>
              <div><span style={{ color: '#ff7b72' }}>import</span> <span style={{ color: '#e6edf3' }}>{`{ injected, walletConnect, coinbaseWallet }`}</span> <span style={{ color: '#ff7b72' }}>from</span> <span style={{ color: '#a5d6ff' }}>'wagmi/connectors'</span><span style={{ color: '#e6edf3' }}>;</span></div>
              <div style={{ marginTop: 8 }}><span style={{ color: '#ff7b72' }}>export const</span> <span style={{ color: '#79c0ff' }}>config</span> <span style={{ color: '#e6edf3' }}>= createConfig({`({`}</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>chains</span><span style={{ color: '#e6edf3' }}>: [mainnet, polygon, base],</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>connectors</span><span style={{ color: '#e6edf3' }}>: [</span></div>
              <div style={{ paddingLeft: 48 }}><span style={{ color: '#d2a8ff' }}>injected</span><span style={{ color: '#e6edf3' }}>(), </span><span style={{ color: '#8b949e' }}>{'// MetaMask, Brave, etc.'}</span></div>
              <div style={{ paddingLeft: 48 }}><span style={{ color: '#d2a8ff' }}>walletConnect</span><span style={{ color: '#e6edf3' }}>({`({ projectId: process.env.WC_PROJECT_ID })`}),</span></div>
              <div style={{ paddingLeft: 48 }}><span style={{ color: '#d2a8ff' }}>coinbaseWallet</span><span style={{ color: '#e6edf3' }}>({`({ appName: 'MyNFT Marketplace' })`}),</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#e6edf3' }}>],</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>transports</span><span style={{ color: '#e6edf3' }}>: {`{ [mainnet.id]: http(process.env.ALCHEMY_RPC_URL) }`},</span></div>
              <div><span style={{ color: '#e6edf3' }}>{`});`}</span></div>
            </div>

            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: '#fff' }}>Critical implementation details:</strong> Always request a personal_sign or eth_signTypedData_v4 signature for authentication (Sign-In With Ethereum — EIP-4361) rather than asking users to sign a transaction. Never use eth_sign — it is deprecated and dangerous. Store a nonce per wallet address that rotates on every sign-in to prevent replay attacks. ENS name resolution via <code style={{ color: G }}>useEnsName()</code> from wagmi gives wallets a human-readable identity throughout the marketplace UI.
              </p>
            </div>
          </section>

          {/* ── Section 8: Gas Optimization ── */}
          <section id="gas-optimization" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Gas Optimization Techniques
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Gas costs are a real user experience problem — an expensive mint or failed transaction due to gas estimation errors will frustrate users and hurt conversion rates. While Ethereum L2s (Base, Optimism, Arbitrum) have reduced gas costs by 95%+, gas optimization still matters for Ethereum mainnet contracts and high-frequency operations.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                {
                  technique: 'Custom Errors (Solidity 0.8+)',
                  saving: '~50% cheaper than require strings',
                  code: 'error NotOwner(address caller);',
                  desc: 'Custom errors store only the selector (4 bytes) in bytecode vs full error string. Use instead of require("Not owner") throughout your contracts.',
                },
                {
                  technique: 'Packing Storage Variables',
                  saving: '~30% SSTORE cost reduction',
                  code: 'uint128 price; uint64 expiry; // one slot',
                  desc: 'EVM storage slots are 32 bytes. Declare adjacent uint128, uint64, uint64 and Solidity packs them into one 32-byte slot — one SSTORE instead of three.',
                },
                {
                  technique: 'ERC-721A (Batch Minting)',
                  saving: '~5× cheaper for PFP mints',
                  code: 'inherits ERC721A (Azuki)',
                  desc: 'Stores ownership per consecutive run, not per token. Minting 10 at once costs nearly the same gas as minting 1. Critical for PFP drops.',
                },
                {
                  technique: 'Minimal Proxy (EIP-1167)',
                  saving: '~10× cheaper collection deploys',
                  code: 'Clones.clone(implementation)',
                  desc: 'Clone pattern deploys a tiny proxy pointing to master logic. 45-byte runtime code vs full contract. Use for collection factory.',
                },
                {
                  technique: 'Calldata vs Memory',
                  saving: '~20% for view-heavy functions',
                  code: 'function f(uint[] calldata data)',
                  desc: 'Use calldata instead of memory for read-only function parameters. Calldata is not copied — memory allocates and copies, costing extra gas.',
                },
                {
                  technique: 'Unchecked Arithmetic',
                  saving: '~15% in loop counters',
                  code: 'unchecked { ++i; }',
                  desc: 'When you know overflow is impossible (e.g., loop counter 0 to 100), wrap in unchecked block to skip the overflow check Solidity adds by default.',
                },
              ].map((g) => (
                <div key={g.technique} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 4, fontSize: 14 }}>{g.technique}</div>
                  <div style={{ color: 'rgba(34,197,94,0.7)', fontSize: 12, marginBottom: 8 }}>{g.saving}</div>
                  <code style={{ display: 'block', background: 'rgba(0,0,0,0.4)', borderRadius: 4, padding: '6px 10px', fontSize: 11, color: '#e6edf3', marginBottom: 8 }}>{g.code}</code>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{g.desc}</div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: G }}>L2-first strategy in 2026:</strong> Deploy on Base, Arbitrum One, or Optimism as your primary chain. Gas costs are 95-99% lower than Ethereum mainnet, enabling micro-transactions and casual users who would never pay $20+ in gas. Maintain a mainnet presence for high-value 1-of-1 auctions where gas cost is a small fraction of sale price. Use LayerZero or Hyperlane for cross-chain messaging if you need to bridge assets between chains.
              </p>
            </div>
          </section>

          {/* ── Section 9: Security Audit Checklist ── */}
          <section id="security-audit" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Security Audit Checklist
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              NFT marketplace contracts are high-value attack targets — OpenSea alone has lost hundreds of millions of dollars in user assets across multiple exploit incidents. Security is not optional. Every marketplace handling real assets must undergo a professional third-party audit before mainnet launch. Here is the vulnerability checklist your audit should cover, plus what you can fix yourself.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
              {[
                {
                  category: 'Reentrancy',
                  severity: 'Critical',
                  color: 'rgba(239,68,68,0.1)',
                  border: 'rgba(239,68,68,0.3)',
                  items: [
                    'Follow Checks-Effects-Interactions pattern in every function that transfers ETH or calls external contracts',
                    'Use OpenZeppelin ReentrancyGuard on all settlement functions',
                    'Never call external contract (safeTransferFrom) before updating your internal state',
                    'Be aware that ERC-721\'s onERC721Received hook is an external call — potential reentrancy vector',
                  ],
                },
                {
                  category: 'Signature Replay & Forgery',
                  severity: 'Critical',
                  color: 'rgba(239,68,68,0.08)',
                  border: 'rgba(239,68,68,0.25)',
                  items: [
                    'Use EIP-712 typed structured data signing — not raw bytes. Raw bytes are trivially replayed.',
                    'Include chainId, contract address, and nonce in every signed order',
                    'Track and invalidate used nonces on-chain. Do not reuse nonces.',
                    'Include order expiry timestamp. Old orders should expire automatically.',
                    'Verify ECDSA signer matches seller address — do not trust caller-provided addresses',
                  ],
                },
                {
                  category: 'Access Control',
                  severity: 'High',
                  color: 'rgba(234,179,8,0.08)',
                  border: 'rgba(234,179,8,0.25)',
                  items: [
                    'Use OpenZeppelin AccessControl or Ownable2Step (not Ownable — prevents ownership transfer to zero address)',
                    'Separate roles: ADMIN, OPERATOR, FEE_MANAGER. Principle of least privilege.',
                    'Implement 48-hour timelock on all admin parameter changes (fee rates, recipient addresses)',
                    'Multi-sig (Gnosis Safe) for all admin keys — never single-signer admin on mainnet',
                  ],
                },
                {
                  category: 'Front-Running (MEV)',
                  severity: 'Medium',
                  color: 'rgba(249,115,22,0.08)',
                  border: 'rgba(249,115,22,0.22)',
                  items: [
                    'Auction bids can be front-run. Consider commit-reveal scheme or use private mempool (Flashbots Protect)',
                    'Listing cancellations can be front-run — user cancels, MEV bot buys first. Add cancel-and-relist atomically.',
                    'Price slippage parameters: allow buyer to specify max price to protect against price change between submit and inclusion',
                  ],
                },
                {
                  category: 'Integer Overflow / Underflow',
                  severity: 'Low (in Solidity 0.8+)',
                  color: 'rgba(255,255,255,0.04)',
                  border: 'rgba(255,255,255,0.1)',
                  items: [
                    'Solidity 0.8+ has built-in overflow protection. Only use unchecked in verified-safe arithmetic.',
                    'Royalty basis points: validate 0 ≤ royaltyBps ≤ 10000 (100%). Never allow royalty + platform fee > 100%.',
                    'Verify fee calculation: (price × feeBps / 10000) does not round to zero for small prices',
                  ],
                },
              ].map((sec) => (
                <div key={sec.category} style={{ background: sec.color, border: `1px solid ${sec.border}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>{sec.category}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: sec.severity === 'Critical' ? '#f87171' : sec.severity === 'High' ? '#fb923c' : sec.severity === 'Medium' ? '#fbbf24' : 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', border: `1px solid currentColor`, borderRadius: 4, padding: '2px 8px' }}>{sec.severity}</div>
                  </div>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {sec.items.map((item) => (
                      <li key={item} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.8 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: '#fff' }}>Audit firms for NFT contracts:</strong> Trail of Bits, OpenZeppelin Security, Spearbit, Code4rena (public audit contests). Budget $15K–$80K for a professional audit depending on contract complexity. Run automated tools first: Slither (static analysis), Echidna (fuzzing), Mythril. Publish your audit report publicly — it dramatically increases buyer trust.
              </p>
            </div>
          </section>

          {/* ── Section 10: Competitors ── */}
          <section id="competitors" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Top NFT Marketplace Competitors in 2026
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Understanding the competitive landscape helps you position your marketplace, identify gaps, and avoid building features that commodity players already do better. Here is a current state analysis of the major players.
            </p>

            <div className="reveal" style={{ overflowX: 'auto', marginBottom: 24 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 700 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                    {['Marketplace', 'Type', 'Primary Chain', 'Fee', 'Differentiator', '2025–26 Volume'].map((h) => (
                      <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: G, fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'OpenSea', type: 'Open', chain: 'Multi-chain', fee: '2.5%', diff: 'Brand recognition, largest inventory, Seaport protocol', vol: 'Dominant' },
                    { name: 'Blur', type: 'Open (Pro)', chain: 'Ethereum', fee: '0% (optional tip)', diff: 'Pro trader UX, portfolio analytics, aggregator, collection bids', vol: '#1 by volume' },
                    { name: 'Magic Eden', type: 'Open', chain: 'Multi-chain', fee: '2%', diff: 'Bitcoin Ordinals leader, Solana dominance, multi-chain', vol: 'Top 3' },
                    { name: 'Foundation', type: 'Curated', chain: 'Ethereum', fee: '5% primary, 5% royalty', diff: 'Artist-only curation, high-value 1-of-1 art, prestige brand', vol: 'Lower, higher AOV' },
                    { name: 'SuperRare', type: 'Curated', chain: 'Ethereum', fee: '15% primary, 10% secondary', diff: 'Elite art curation, DAO governance via RARE token', vol: 'Niche, premium' },
                    { name: 'Tensor', type: 'Open (Pro)', chain: 'Solana', fee: '0–2%', diff: 'Solana speed, AMM-based liquidity pools for NFTs', vol: 'Solana leader' },
                  ].map((row, i) => (
                    <tr key={row.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: G }}>{row.name}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)' }}>{row.type}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)' }}>{row.chain}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)' }}>{row.fee}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{row.diff}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)' }}>{row.vol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: G }}>Competitive gap analysis:</strong> The open marketplace space is dominated by OpenSea and Blur, with fee compression toward zero. The most defensible positions in 2026 are (1) category verticals with exclusive IP (gaming guilds, sports leagues, music labels), (2) geographic focus with local language/payment support (Southeast Asia, MENA), and (3) utility-first NFTs with programmable perks that legacy marketplaces do not natively support.
              </p>
            </div>
          </section>

          {/* ── Section 11: Cost & Timeline ── */}
          <section id="cost-timeline" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Development Cost & Timeline
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              NFT marketplace development cost varies enormously based on complexity, team location, and feature scope. Below are realistic ranges based on projects Codazz has scoped and delivered, as well as industry data from 2024–2026.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
              {[
                {
                  tier: 'MVP / Niche Marketplace',
                  cost: '$80K – $150K',
                  timeline: '3–5 months',
                  highlight: false,
                  includes: [
                    'ERC-721 or ERC-1155 collection contract (OpenZeppelin-based)',
                    'Marketplace contract (fixed price + simple auction)',
                    'Next.js frontend with wagmi wallet connection',
                    'IPFS metadata upload and display',
                    'Basic activity feed via The Graph',
                    'Admin dashboard for fee management',
                    'Testnet + mainnet deployment',
                    'Basic security review (Slither + manual)',
                  ],
                  notIncluded: ['Professional audit ($15K–$30K extra)', 'Credit card checkout', 'Advanced analytics', 'Mobile app'],
                },
                {
                  tier: 'Full-Featured Marketplace',
                  cost: '$200K – $300K',
                  timeline: '7–10 months',
                  highlight: true,
                  includes: [
                    'All MVP features plus:',
                    'Lazy minting + collection factory contract',
                    'Auction + collection offers + trait offers',
                    'ERC-2981 royalty enforcement',
                    'Launchpad / drops with allowlist mechanics',
                    'Creator dashboard with analytics',
                    'Full-text search (Typesense)',
                    'Fiat on-ramp (MoonPay / Crossmint)',
                    'Professional security audit',
                    'Multi-chain support (ETH + L2)',
                  ],
                  notIncluded: ['Mobile app ($60K–$120K extra)', 'Social features', 'DAO governance'],
                },
                {
                  tier: 'Enterprise / OpenSea-Scale',
                  cost: '$300K – $400K+',
                  timeline: '12–18 months',
                  highlight: false,
                  includes: [
                    'All Full-Featured features plus:',
                    'Custom order protocol (Seaport-compatible)',
                    'Aggregator integration (Reservoir API)',
                    'Advanced MEV protection and front-run prevention',
                    'DAO governance and revenue sharing token',
                    'Cross-chain bridging and multi-chain inventory',
                    'Native mobile apps (iOS + Android)',
                    'Enterprise analytics and whale tracking',
                    'Multiple security audits + bug bounty program',
                    'Dedicated DevOps and 99.99% uptime SLA',
                  ],
                  notIncluded: [],
                },
              ].map((tier) => (
                <div key={tier.tier} className="reveal" style={{ background: tier.highlight ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.03)', border: `1px solid ${tier.highlight ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                    <div>
                      <div style={{ fontWeight: 700, color: tier.highlight ? G : '#fff', fontSize: 20 }}>{tier.tier}</div>
                      {tier.highlight && <div style={{ fontSize: 11, color: G, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>Most Common Starting Point</div>}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 800, color: G, fontSize: 22 }}>{tier.cost}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{tier.timeline}</div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: tier.notIncluded.length > 0 ? '3fr 2fr' : '1fr', gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: G, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Includes</div>
                      <ul style={{ paddingLeft: 18, margin: 0 }}>
                        {tier.includes.map((item) => <li key={item} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.7 }}>{item}</li>)}
                      </ul>
                    </div>
                    {tier.notIncluded.length > 0 && (
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#f87171', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Not Included</div>
                        <ul style={{ paddingLeft: 18, margin: 0 }}>
                          {tier.notIncluded.map((item) => <li key={item} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.7 }}>{item}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Cost Breakdown by Category</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 16 }}>
              {[
                { category: 'Smart Contract Dev', range: '$25K – $80K', pct: '20–25%' },
                { category: 'Frontend (Next.js)', range: '$30K – $90K', pct: '25–30%' },
                { category: 'Backend / Indexing', range: '$20K – $60K', pct: '15–20%' },
                { category: 'Security Audit', range: '$15K – $80K', pct: '10–15%' },
                { category: 'Infrastructure / DevOps', range: '$10K – $30K', pct: '8–10%' },
                { category: 'Design / UX', range: '$15K – $40K', pct: '10–12%' },
              ].map((c) => (
                <div key={c.category} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: 4, fontSize: 14 }}>{c.category}</div>
                  <div style={{ fontWeight: 800, color: G, fontSize: 18, marginBottom: 2 }}>{c.range}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{c.pct} of total budget</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 12: FAQ ── */}
          <section id="faq" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#fff' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  q: 'How long does it take to build an NFT marketplace from scratch?',
                  a: 'A focused MVP NFT marketplace with core features (minting, listing, wallet connect, basic auction) takes 3–5 months with a team of 3–4 developers — 2 frontend/full-stack, 1 smart contract/blockchain engineer, 1 UI designer. A full-featured marketplace with all Tier 1 and Tier 2 features, professional audit, and multi-chain support takes 7–10 months. Enterprise-scale platforms with mobile apps and governance tokens take 12–18 months. The smart contract audit alone typically takes 4–8 weeks after submission to the audit firm — factor this into your launch timeline.',
                },
                {
                  q: 'Should I build on Ethereum mainnet or an L2?',
                  a: 'In 2026, the answer is almost always: launch on an L2 first. Base (Coinbase-backed, EVM-compatible, very low fees) is the most popular choice for new NFT projects. Optimism and Arbitrum are close alternatives. L2 gas costs are 95-99% lower than mainnet, enabling casual users who would never interact with mainnet. Build multi-chain from the start using a shared backend that can index events from multiple chains. Keep mainnet support for high-value 1-of-1 auctions where gas is a small fraction of the sale price and collectors expect Ethereum provenance.',
                },
                {
                  q: 'What blockchain infrastructure do I need?',
                  a: 'At minimum: Alchemy (primary RPC + NFT API + webhooks), Infura or QuickNode as fallback RPC, The Graph for on-chain event indexing, IPFS via NFT.Storage or web3.storage for metadata. Alchemy\'s NFT API alone replaces months of custom indexing work — it provides getOwnedNFTs, getNFTMetadata, getContractNFTs, and floor price data out of the box. For real-time activity feeds, Alchemy Notify webhooks are far simpler than running your own event listener. Total infrastructure cost at launch: $500–$2,000/month. Scales with usage.',
                },
                {
                  q: 'Do I need a security audit before launch?',
                  a: 'Yes — if you are handling real user assets and real money, a professional audit is non-negotiable. A single vulnerability can drain your entire marketplace escrow. Budget $15K–$80K for a professional audit from Trail of Bits, OpenZeppelin Security, or a reputable audit firm. Also run Slither (free) and Echidna (free fuzzing) as part of your CI pipeline during development. Consider a public bug bounty via Immunefi after launch — the NFT community is very good at finding vulnerabilities that auditors miss. Publish the audit report publicly — it is a significant trust signal for creators and collectors.',
                },
                {
                  q: 'How do royalties work and can they be enforced?',
                  a: 'ERC-2981 is the on-chain royalty standard — your contract implements a royaltyInfo(tokenId, salePrice) function that returns the recipient address and royalty amount. Marketplaces query this function and split the payment accordingly. However, ERC-2981 is purely informational — it does not prevent marketplaces from ignoring it (as Blur famously did). On-chain enforcement requires transfer restrictions via ERC-721C (Limit Break) or a custom operator filter. ERC-721C lets creators whitelist approved marketplace contracts — only whitelisted contracts can call safeTransferFrom. This is the most robust royalty enforcement mechanism available in 2026, though it limits where your NFTs can be traded.',
                },
                {
                  q: 'What is the difference between IPFS and Arweave for NFT storage?',
                  a: 'IPFS (InterPlanetary File System) is content-addressed — files are identified by a hash of their content. Data persists as long as at least one node is "pinning" it. Services like NFT.Storage and Pinata handle pinning for you, usually for free or low cost. If the pinning service shuts down and no one else is pinning your files, the data is gone. Arweave uses an economic model where a one-time fee funds permanent storage via the "storage endowment" — data is guaranteed to persist for ~200 years. For high-value art, Arweave provides a stronger permanence guarantee. For high-volume gaming NFTs where permanence is less critical, IPFS with a reliable pinning service is sufficient and much cheaper.',
                },
              ].map((faq, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', textAlign: 'left', padding: '18px 20px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}
                  >
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: 15, lineHeight: 1.4 }}>Q: {faq.q}</span>
                    <span style={{ color: G, fontSize: 20, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 20px 18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, fontSize: 14 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 16, padding: 40, textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
              Ready to Build Your NFT Marketplace?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 28px' }}>
              Codazz has delivered NFT marketplace projects across Ethereum, Base, Polygon, and Solana — from smart contract architecture to production launch. Book a free 30-minute technical review for your project.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', background: G, color: '#000', fontWeight: 700, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16 }}>
              Book a Free NFT Marketplace Review
            </Link>
          </div>

          {/* Related Posts */}
          <div className="reveal">
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Related Articles</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {relatedPosts.map((post) => (
                <Link key={post.href} href={post.href} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 16, textDecoration: 'none', color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.5, display: 'block', transition: 'border-color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}>
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar TOC */}
        <aside style={{ position: 'sticky', top: 100 }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 16, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Table of Contents</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {tocSections.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} style={{ color: activeSection === sec.id ? G : 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none', padding: '6px 10px', borderRadius: 6, background: activeSection === sec.id ? 'rgba(34,197,94,0.08)' : 'transparent', borderLeft: `2px solid ${activeSection === sec.id ? G : 'transparent'}`, transition: 'all 0.2s', lineHeight: 1.5 }}>
                  {sec.label}
                </a>
              ))}
            </nav>
          </div>

          <div style={{ marginTop: 20, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
            <div style={{ fontWeight: 700, color: G, marginBottom: 8, fontSize: 14 }}>Building an NFT platform?</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>We design and build NFT marketplaces — smart contracts, indexing, wallet UX, and security audits.</p>
            <Link href="/contact" style={{ display: 'block', background: G, color: '#000', fontWeight: 700, padding: '10px 16px', borderRadius: 8, textDecoration: 'none', fontSize: 13, textAlign: 'center' }}>
              Get a Free Review
            </Link>
          </div>
        </aside>

      </div>

      <Footer />
    </div>
  );
}
