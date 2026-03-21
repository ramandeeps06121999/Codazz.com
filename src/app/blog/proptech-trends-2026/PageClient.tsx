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
  { id: 'market-overview', label: 'PropTech Market Overview', emoji: '📊' },
  { id: 'ai-valuation', label: 'AI Property Valuation', emoji: '🤖' },
  { id: 'vr-ar-tours', label: 'VR/AR Virtual Tours', emoji: '🥽' },
  { id: 'blockchain-tokenization', label: 'Blockchain & Tokenization', emoji: '⛓️' },
  { id: 'ibuying-platforms', label: 'iBuying Platforms', emoji: '🏡' },
  { id: 'rental-automation', label: 'Rental Management Automation', emoji: '🔧' },
  { id: 'smart-home-iot', label: 'Smart Home & IoT', emoji: '🏠' },
  { id: 'data-analytics', label: 'Data Analytics & BI', emoji: '📈' },
  { id: 'green-sustainable', label: 'Green & Sustainable Tech', emoji: '🌿' },
  { id: 'investment-startups', label: 'Investment & Top Startups', emoji: '💎' },
  { id: 'build-cost', label: 'PropTech Development Costs', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'rental-property-app-development', title: 'Rental Property App Development Guide 2026', category: 'Real Estate', readTime: '16 min' },
  { slug: 'app-development-cost-canada', title: 'App Development Cost in Canada 2026', category: 'Cost Guide', readTime: '14 min' },
  { slug: 'nft-marketplace-development-guide', title: 'NFT & Blockchain Marketplace Guide 2026', category: 'Blockchain', readTime: '15 min' },
];

const G = '#22c55e';

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('market-overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handler = () => {
      const sections = tocSections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offsetTop - 120) { setActiveSection(sections[i].id); break; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(34,197,94,0.12); }
        @media (max-width: 900px) { .blog-layout { flex-direction: column !important; } .toc-sidebar { display: none !important; } }
        .cb-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
      `}</style>
      <div style={{ background: '#000', minHeight: '100vh' }}>
        <HeroBackground />
        <Navbar />
        <main ref={pageRef} style={{ paddingTop: 100 }}>

          {/* ── HERO ── */}
          <section style={{ paddingTop: 40, paddingBottom: 64 }}>
            <div className="cb-container">
              <div className="reveal" style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 20 }}>
                <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
                <span style={{ color: G, fontSize: 14, fontWeight: 600 }}>Real Estate Tech</span>
              </div>
              <div className="reveal" style={{ display: 'inline-flex', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 20, padding: '6px 16px', marginBottom: 24 }}>
                <span style={{ fontSize: 14, color: G, fontWeight: 600 }}>PropTech Trends 2026</span>
              </div>
              <h1 className="reveal" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24, maxWidth: 900 }}>
                Top PropTech Trends 2026:<br /><span style={{ color: G }}>How Technology is Reshaping Real Estate</span>
              </h1>
              <p className="reveal" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 700, marginBottom: 32 }}>
                From AI-powered property valuations and blockchain title transfers to immersive VR tours and smart building IoT — the $102B global PropTech market is undergoing its deepest transformation in a generation. Here is what is actually gaining traction in 2026, and what you can build on it.
              </p>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#22c55e,#16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: 14 }}>C</div>
                  <div>
                    <div style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Codazz Engineering</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>March 21, 2026</div>
                  </div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>22 min read</span>
                <button onClick={handleCopy} style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 16px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 13 }}>{copied ? '✓ Copied' : '🔗 Share'}</button>
              </div>
              <div className="reveal" style={{ width: '100%', aspectRatio: '16/7', background: 'linear-gradient(135deg,rgba(34,197,94,0.08),rgba(0,0,0,0.5))', borderRadius: 24, marginBottom: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(34,197,94,0.1)' }}>
                <span style={{ fontSize: 72 }}>🏠</span>
              </div>

              {/* Key Stats */}
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 16, marginBottom: 64 }}>
                {[
                  ['$102B', 'Global PropTech market 2026'],
                  ['67%', 'Buyers start search online'],
                  ['31%', 'Faster sale with virtual tours'],
                  ['40%', 'Cheaper closings via smart contracts'],
                  ['30%', 'Energy savings with smart IoT'],
                  ['$1.3T', 'Global real estate market cap'],
                  ['4×', 'More listing views with 3D tours'],
                  ['<5%', 'AVM error rate in dense markets'],
                ].map(([v, l], i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '20px 16px', textAlign: 'center' }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: G, marginBottom: 6 }}>{v}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── BODY ── */}
          <section>
            <div className="cb-container">
              <div className="blog-layout" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
                <article style={{ flex: 1, minWidth: 0 }}>

                  {/* 1. Market Overview */}
                  <section id="market-overview" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>PropTech Market Overview 2026</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      Property technology investment peaked at $32B in 2021, corrected sharply through 2022–2023 as interest rates climbed and speculative capital evaporated, then rebounded aggressively. By 2026, global PropTech investment has surpassed $102B — driven not by hype cycles but by AI tools that demonstrably compress transaction timelines, reduce operating costs, and expand the addressable market for real estate participation.
                    </p>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>
                      The winners in 2026 are companies solving operational friction — slow closings, manual underwriting, inefficient property management — rather than those offering incremental digitization of paper processes. AI-native startups with deep real estate workflow integrations are outperforming digital-wrapper plays built on legacy MLS data access.
                    </p>
                    <div className="reveal" style={{ overflowX: 'auto', marginBottom: 32 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 560 }}>
                        <thead>
                          <tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                            {['PropTech Segment', '2026 Market Size', 'CAGR', 'Key Players'].map(h => (
                              <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['AI Property Valuation', '$9.4B', '28%', 'Zillow, CoreLogic, HouseCanary'],
                            ['Property Management SaaS', '$7.2B', '19%', 'Yardi, AppFolio, Buildium'],
                            ['Real Estate Marketplaces', '$15.8B', '13%', 'Realtor.com, Redfin, CoStar'],
                            ['Smart Building IoT', '$13.5B', '23%', 'Honeywell, Siemens, JLL'],
                            ['Digital Mortgage & Closing', '$6.1B', '31%', 'Blend, Better.com, Maxwell'],
                            ['VR/AR Property Tours', '$3.8B', '39%', 'Matterport, iStaging, Kuula'],
                            ['Blockchain / Tokenized RE', '$2.4B', '44%', 'RealT, Lofty.ai, Propy'],
                            ['iBuying Platforms', '$18B', '9%', 'Opendoor, Offerpad, Knock'],
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: '11px 14px', color: j === 0 ? G : 'rgba(255,255,255,0.7)', fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)', borderRadius: 16, padding: 20 }}>
                      <strong style={{ color: G, display: 'block', marginBottom: 8 }}>The 2026 Thesis</strong>
                      <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0, fontSize: 14, lineHeight: 1.7 }}>
                        PropTech in 2026 is about compressing the 6-week real estate transaction to under 10 days using AI underwriting, smart contract escrow, and digital title. The second big theme is democratization: tokenization and iBuying platforms are opening real estate ownership and liquidity to participants who previously could not access the asset class.
                      </p>
                    </div>
                  </section>

                  {/* 2. AI Valuation */}
                  <section id="ai-valuation" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>AI-Powered Property Valuation</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>
                      Automated Valuation Models (AVMs) have evolved from simple regression on comparables to multimodal AI systems incorporating satellite imagery, street-level photos, real-time demand signals, and macroeconomic indicators. In dense urban markets, leading AVMs now achieve a median error rate below 5% — competitive with a traditional appraisal, at zero marginal cost and in milliseconds.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        {
                          icon: '🏷️',
                          title: 'Automated Valuation Models (AVMs)',
                          desc: "Zillow's Zestimate and CoreLogic's AVM use 200+ data points: MLS comps, tax records, listing history, school ratings, flood zones, walk scores, and real-time demand signals (listing views, saves, days-on-market). The frontier in 2026: dynamic pricing models that update valuations hourly based on market velocity."
                        },
                        {
                          icon: '📸',
                          title: 'Computer Vision Condition Scoring',
                          desc: 'AI models trained on millions of listing photos score kitchen quality, flooring condition, natural light, and renovation recency. HouseCanary and Restb.ai integrate condition scores directly into AVM adjustments, replacing the subjective appraisal condition worksheet with objective pixel-level analysis.'
                        },
                        {
                          icon: '📊',
                          title: 'Neighborhood Appreciation Prediction',
                          desc: 'ML models trained on 10+ years of granular transaction data predict 3–5 year appreciation by micro-neighborhood. Companies like Quantarium and Attom Data license these forecasts to institutional investors, hedge funds, and iBuyers for off-market acquisition targeting and portfolio construction.'
                        },
                        {
                          icon: '⚡',
                          title: 'AI Lead Qualification & Conversion',
                          desc: "Conversational AI (Structurely, Roof AI) qualifies inbound leads 24/7: pre-qualifies mortgage eligibility, schedules showings, and nurtures cold leads through drip sequences. Reduces agent lead-response time from hours to seconds — critical in competitive markets where 78% of buyers go with the first agent who responds."
                        },
                        {
                          icon: '🤖',
                          title: 'AI Underwriting',
                          desc: "AI underwriting cuts mortgage approvals from 45 days to under 72 hours. Fannie Mae's Desktop Underwriter handles 70%+ of US conforming loan automation. 2026 frontier: gig-economy income verification and alternative credit data (rent history, utility bills) to serve the 50M+ thin-file borrowers excluded by FICO-only models."
                        },
                        {
                          icon: '🗺️',
                          title: 'Geospatial Analytics Platforms',
                          desc: 'Esri ArcGIS, Regrid, and CBRE Hana combine parcel data, zoning codes, environmental risk, and demographic trends on a single map layer. Real estate developers use geospatial AI to identify undervalued parcels, predict rezoning approvals, and model development yield before engaging a single broker.'
                        },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                          <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 3. VR/AR */}
                  <section id="vr-ar-tours" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Virtual & Augmented Reality Property Tours</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      3D virtual tours are no longer a differentiator — they are a baseline expectation. 67% of buyers prefer listings with virtual tours, and properties featuring Matterport-quality 3D walkthroughs sell 31% faster at 4–9% higher prices. In 2026, the frontier has shifted to AI-generated tours from standard photos and immersive spatial experiences on Apple Vision Pro.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        {
                          tool: 'Matterport', badge: 'Market Leader',
                          badgeColor: G,
                          desc: "The industry standard for 3D spatial scanning. Matterport cameras create photorealistic dollhouse views and guided walkthroughs. Hosting: $9.99–$69/space/month. Integrates natively with Zillow, MLS, and Realtor.com. Their 2025 launch of AI-generated 3D from iPhone photos is the biggest democratization yet — no specialized hardware required."
                        },
                        {
                          tool: 'iStaging / Kuula', badge: 'Best Value',
                          badgeColor: '#3b82f6',
                          desc: '360° photo-based virtual tours using any consumer 360° camera ($300–$800). iStaging adds AR furniture placement, hotspot annotations, and floor plan overlays. Kuula offers free hosting for basic tours. The go-to stack for independent agents and boutique property managers who cannot justify Matterport pricing on every listing.'
                        },
                        {
                          tool: 'Apple Vision Pro RE Apps', badge: 'Luxury Niche',
                          badgeColor: '#8b5cf6',
                          desc: "Compass and Sotheby's International launched Vision Pro spatial property tour apps in 2025. Ultra-high-net-worth buyers preview $5M+ properties in full spatial video before flying in. For luxury real estate teams, it is a qualifying signal — buyers who ask for a Vision Pro tour are serious buyers."
                        },
                        {
                          tool: 'AR Furniture Staging', badge: 'Fast Growing',
                          badgeColor: '#f59e0b',
                          desc: "Houzz's AR tool (20M+ users) and IKEA Place let buyers point their phone at an empty room to see it furnished. Real estate apps integrating ARKit/ARCore let buyers visualize paint colors, flooring, and renovations before making an offer. Redfin and Zillow have both added in-app AR staging features in 2025–2026."
                        },
                        {
                          tool: 'AI Tour Generation', badge: '2026 Frontier',
                          badgeColor: '#ec4899',
                          desc: 'Platforms like Rela and REimagineHome use generative AI to create fully furnished, photorealistic tour images from empty-room photos in minutes. A vacant listing can have a staged virtual tour ready in 15 minutes at $30–$80, versus $800–$2,500 and 3 days for physical staging photography.'
                        },
                        {
                          tool: 'Digital Twin Buildings', badge: 'Commercial RE',
                          badgeColor: '#14b8a6',
                          desc: "Willow, Cityzenith, and Siemens Navigator create 1:1 digital replicas of commercial buildings that update in real time from IoT sensor feeds. Facility managers, REITs, and corporate tenants use digital twins to simulate space changes, model energy efficiency improvements, and onboard new tenants remotely before fit-out."
                        },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 22 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: 0 }}>{item.tool}</h3>
                            <span style={{ fontSize: 10, fontWeight: 700, color: item.badgeColor, background: `${item.badgeColor}18`, padding: '3px 10px', borderRadius: 20, marginLeft: 8, whiteSpace: 'nowrap' }}>{item.badge}</span>
                          </div>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 4. Blockchain */}
                  <section id="blockchain-tokenization" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Blockchain, Tokenization & Smart Contracts</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      Blockchain real estate applications have moved past the whitepaper phase. After years of pilots, 2026 marks the point where tokenized real estate investment, smart contract escrow, and on-chain lease agreements are live products with real users and real transaction volume — not proofs of concept.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        {
                          title: 'Real Estate Tokenization',
                          badge: 'High Growth',
                          color: G,
                          desc: 'Fractional ownership via ERC-1400 / ERC-3643 security tokens. Retail investors buy $100–$500 shares of income-producing properties and receive on-chain rental yield distributions. RealT (350+ tokenized US properties), Lofty.ai, and Homebase are the leading platforms. All operate under SEC Reg D or Reg A+ exemptions. Secondary market liquidity is the unsolved problem.'
                        },
                        {
                          title: 'Smart Contract Escrow',
                          badge: 'Production Ready',
                          color: '#3b82f6',
                          desc: 'Replace 30-day escrow processes with smart contracts that release purchase funds automatically upon title transfer confirmation on-chain. Propy closed the first blockchain real estate transaction in 2017 and now processes thousands of deals annually across the US and EU. Closing costs reduced 40–60% by eliminating title company and escrow agent fees.'
                        },
                        {
                          title: 'On-Chain Lease Agreements',
                          badge: 'Mainstream 2026',
                          color: '#f59e0b',
                          desc: 'Blockchain-recorded leases create immutable, court-admissible rental agreements. Smart contract rent payments execute automatically on the 1st of each month from a linked wallet or bank account. Late fees trigger without human intervention. Eliminates disputes over payment history and lease terms. Particularly powerful for multi-unit operators managing 20+ properties.'
                        },
                        {
                          title: 'Digital Title & Land Registry',
                          badge: 'Government Pilots',
                          color: '#8b5cf6',
                          desc: "Sweden, Dubai (DLD), and Georgia have active blockchain land registry pilots. Cook County, Illinois ran a 2-year pilot. The viable path in 2026 is hybrid: blockchain as an immutable reference layer synchronized with existing government title systems, not a replacement. Expect 5–10 US counties to launch production blockchain title registries by 2028."
                        },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}22`, borderRadius: 20, padding: 24 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: 0 }}>{item.title}</h3>
                            <span style={{ fontSize: 10, fontWeight: 700, color: item.color, background: `${item.color}15`, padding: '3px 10px', borderRadius: 20, marginLeft: 8, whiteSpace: 'nowrap' }}>{item.badge}</span>
                          </div>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)', borderRadius: 16, padding: 20 }}>
                      <strong style={{ color: G, display: 'block', marginBottom: 8 }}>Canadian & US Compliance Note</strong>
                      <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0, fontSize: 14, lineHeight: 1.7 }}>
                        In Canada, tokenized real estate securities fall under provincial securities law — you need an offering memorandum or a prospectus exemption (accredited investor or crowdfunding exemption). Budget $50K–$150K for legal structuring before launch. US issuers typically use Reg D (accredited investors) for private placements or Reg A+ for public raises up to $75M.
                      </p>
                    </div>
                  </section>

                  {/* 5. iBuying */}
                  <section id="ibuying-platforms" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>iBuying Platforms & Instant Offer Technology</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      iBuying — where a platform makes an instant cash offer on a home using algorithmic pricing — remains one of PropTech's most capital-intensive and margin-challenged sectors. Zillow Offers exited in 2021. Opendoor has restructured twice. Yet the sector survives because it solves a real pain: certainty and speed of close for sellers. The 2026 model is leaner, with tighter AVM underwriting and lower spread targets.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        {
                          name: 'Opendoor', status: 'Restructured & Profitable',
                          color: G,
                          desc: "The largest US iBuyer. After three rounds of restructuring, Opendoor reached cash-flow breakeven in Q3 2025 by narrowing acquisition geography to 45 high-velocity metros and tightening AI pricing within a 1.5% spread. Processing 3,000–5,000 transactions/month. The platform that defined and nearly killed iBuying is now its survivor."
                        },
                        {
                          name: 'Offerpad', status: 'Profitable Since 2024',
                          color: '#3b82f6',
                          desc: 'Smaller footprint (25 markets), higher margin. Offerpad adds renovation and listing services on top of instant cash offers, capturing more of the transaction value chain. EBITDA positive since Q2 2024. The key differentiator: a renovation arm that upgrades homes before relisting, capturing the spread between distressed and renovated pricing.'
                        },
                        {
                          name: 'Knock Bridge Loan', status: 'Hybrid Model',
                          color: '#f59e0b',
                          desc: "Knock's Bridge Loan lets buyers use their current home's equity to buy a new one before selling, eliminating contingency offers. Not a true iBuyer — Knock doesn't purchase the home — but solves the same pain (certainty of close) with lower capital risk. Available in 75 US metros. The lean version of iBuying that survives rising rate environments."
                        },
                        {
                          name: 'Canadian iBuying Landscape', status: 'Emerging',
                          color: '#8b5cf6',
                          desc: "Canada's iBuying market is 3–5 years behind the US. Properly (Vancouver) and recently-launched PriceHubble-backed platforms are beginning to offer instant pricing tools if not full cash-offer products. Edmonton, Calgary, and Toronto are the likely first iBuying markets given transaction velocity and MLS data quality. A major opportunity gap in 2026."
                        },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}20`, borderRadius: 20, padding: 24 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: 0 }}>{item.name}</h3>
                            <span style={{ fontSize: 10, fontWeight: 700, color: item.color, background: `${item.color}15`, padding: '3px 10px', borderRadius: 20, marginLeft: 8, whiteSpace: 'nowrap' }}>{item.status}</span>
                          </div>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 6. Rental Management */}
                  <section id="rental-automation" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Rental Management Automation</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      Property managers overseeing 50+ units are at a competitive disadvantage without automation software. The PM tech market has consolidated around a few dominant platforms, but an AI-native gap exists: none of the incumbents have natively integrated predictive vacancy modeling, automated maintenance triage, or AI lease abstraction into a cohesive product.
                    </p>
                    <div className="reveal" style={{ overflowX: 'auto', marginBottom: 32 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 580 }}>
                        <thead>
                          <tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                            {['Platform', 'Best For', 'Price (CAD/month)', 'Standout Feature'].map(h => (
                              <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['Yardi Voyager', 'Enterprise (1,000+ units)', 'Custom ($7–$12/unit)', 'Full ERP: accounting, leasing, maintenance'],
                            ['AppFolio', 'Mid-market (50–2,000 units)', '$1.80–$4/unit', 'AI leasing assistant, online maintenance'],
                            ['Buildium', 'Small-mid (1–5,000 units)', '$75–$500/mo', 'eSignatures, tenant portal, accounting'],
                            ['Rentec Direct', 'Small landlords (1–5,000)', '$60–$95/mo', 'Free ACH rent collection, tenant screening'],
                            ['Landlord Studio', 'Canadian landlords (1–100)', '$40–$90/mo', 'CAD/provincial lease compliance'],
                            ['Tribe Property Tech', 'Strata / condo boards', 'Custom', 'Strata management, BC/AB compliance'],
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: '11px 14px', color: j === 0 ? G : 'rgba(255,255,255,0.7)', fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
                      {[
                        { icon: '🤖', title: 'AI Maintenance Triage', desc: 'AI classifies tenant maintenance requests by urgency and category, auto-assigns to contractors, and follows up on resolution. Reduces PM time-per-ticket by 65%. Companies: Lessen, Second Nature, Upkeep.' },
                        { icon: '📄', title: 'AI Lease Abstraction', desc: 'LLM-powered tools extract key terms from lease documents (rent, escalations, options, covenants) and populate databases automatically. Critical for portfolio owners managing hundreds of leases. Companies: Leverton, Kira Systems, Docugami.' },
                        { icon: '📊', title: 'Dynamic Rent Pricing', desc: 'RealPage YieldStar and Entrata AI analyze market supply, occupancy, and lease expiry cadence to recommend optimal rent on renewal and new leases. Used by 70% of institutional multifamily operators. Under FTC scrutiny for algorithmic collusion.' },
                        { icon: '💬', title: 'Tenant Communication Bots', desc: 'Conversational AI handles 80% of tenant inquiries: maintenance status, rent receipts, lease renewals, building policies. Reduces inbound PM calls by 60%. Findem, EliseAI, and Engrain offer leasing-focused AI chatbots with CRM integration.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 7. Smart Home */}
                  <section id="smart-home-iot" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Smart Home Integration & IoT</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      Smart home technology is proving concrete ROI for developers and operators: 30% energy savings, 25% reduction in maintenance costs, and measurable uplift in rental premium and sale price. The Matter protocol (backed by Apple, Google, Amazon, and Samsung) finally achieved broad device interoperability in 2025, removing the biggest adoption barrier for multi-vendor smart home deployments.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '💡', title: 'Smart Energy Management', desc: 'AI-controlled HVAC learns occupancy patterns and adjusts dynamically. Nest + Siemens Desigo CC reduce peak-load costs 15–25% via utility demand response integration. Mandatory in EU buildings >2,500 sqm under EPBD 2026 update. Canadian building code updates require smart metering in new builds by 2027.' },
                        { icon: '🔒', title: 'Smart Access Control', desc: 'Mobile credentials replace physical keys for multi-family. KISI, Openpath, and Latch offer cloud-managed access with audit logs, visitor management, and elevator integration. August Smart Lock and Yale Assure dominate single-family rentals. Reduces lockout calls to zero and eliminates key-cutting costs entirely.' },
                        { icon: '🔧', title: 'Predictive Maintenance Sensors', desc: 'Vibration, temperature, and current sensors on HVAC, elevators, and plumbing detect anomalies 2–8 weeks before failure. IBM Maximo and Siemens Senseye reduce unplanned downtime 40%. ROI positive in 12–18 months for commercial buildings. Residential: Flo by Moen detects micro-leaks before visible damage.' },
                        { icon: '💧', title: 'Water & Air Quality Monitoring', desc: 'CO2/VOC/PM2.5 sensors (Awair, Kaiterra) connect to HVAC for continuous air quality optimization. Flo by Moen whole-home water monitoring reduces insurance claims from water damage — Hippo and Lemonade offer 15–20% premium discounts for verified leak detection device installation.' },
                        { icon: '🌐', title: 'Matter Protocol & Interoperability', desc: 'The Matter standard (2023–2025 rollout) allows Nest thermostats, August locks, Ring cameras, and Samsung appliances to communicate on a unified protocol. In 2026, first smart home deployments with zero-configuration interoperability across brands are standard in new residential developments.' },
                        { icon: '📊', title: 'Occupancy & Space Sensing', desc: 'LiDAR and millimeter-wave radar people-counting enables space utilization optimization in commercial properties. Offices reclaiming 30–40% of underutilized desk space. Condeco and Robin integrate sensor data with hot-desk booking systems. WeWork and Brookfield use space sensing dashboards across entire portfolios.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 8. Data Analytics */}
                  <section id="data-analytics" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Data Analytics & Business Intelligence for Real Estate</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      Real estate has always been data-rich but insight-poor. Historical transaction data, tax records, permit filings, and satellite imagery exist in siloed, inconsistent formats that most operators cannot access or analyze. The 2026 data analytics layer is aggregating these sources and making them actionable for developers, investors, and brokers at every level.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        {
                          icon: '🗂️', title: 'Data Aggregation Platforms',
                          desc: 'ATTOM Data, CoreLogic, and Regrid aggregate property data from 3,100+ US counties into clean, queryable APIs. In Canada, companies like AltusGroup and Teranet provide similar aggregated parcel and transaction data. PropStream and BatchData layer skip-tracing on top for off-market acquisition workflows.'
                        },
                        {
                          icon: '📉', title: 'Market Intelligence Tools',
                          desc: "CoStar (commercial) and Zillow Research (residential) provide real-time market reports: absorption rates, vacancy trends, cap rate compression, and rental growth by submarket. In 2026, AI-generated market commentary summarizing these metrics for non-analyst real estate professionals is the fastest-growing product category."
                        },
                        {
                          icon: '📈', title: 'Portfolio Analytics for Investors',
                          desc: "Stessa, Landlord Studio, and DoorLoop provide P&L tracking, cap rate calculation, and tax reporting for real estate investors. Fundrise and DLP Capital use internal BI platforms to model cash-on-cash returns, IRR, and equity multiple projections across thousands of properties simultaneously."
                        },
                        {
                          icon: '🏗️', title: 'Development Feasibility Modeling',
                          desc: "SmithGroup, Envelope, and Mapt.io use zoning code AI to instantly model development feasibility: maximum buildable area, setback requirements, height limits, and parking minimums by parcel. Reduces a 2-week zoning analysis to a 4-minute report. Adopted by 30%+ of mid-size development firms in 2025."
                        },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                          <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 9. Green Tech */}
                  <section id="green-sustainable" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Green & Sustainable PropTech</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      Real estate accounts for 40% of global energy consumption and 33% of carbon emissions. Regulatory pressure (Canada's Clean Buildings Accelerator, EU Taxonomy for Sustainable Finance, SEC climate disclosure rules) is converting ESG compliance from a marketing exercise into a hard operational requirement with financial consequences.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '⚡', title: 'Energy Performance Certificates', desc: 'EPC automation platforms (CarbonCure, Measurabl, Deepki) calculate building energy intensity using AMI meter data and IoT sensors. Landlords in Alberta and BC must disclose EPC ratings for commercial buildings >5,000 sqft in lease and sale listings starting 2027.' },
                        { icon: '☀️', title: 'Solar + Battery ROI Modeling', desc: 'Aurora Solar, Enphase, and Palmetto provide AI-powered solar siting analysis, production estimates, and ROI payback calculations for individual properties. Automated permit submission in 22 US states reduces solar installation timelines by 40%.' },
                        { icon: '🏗️', title: 'Sustainable Construction Tech', desc: "Mass timber (CLT, glulam) tracking platforms verify FSC-certified sourcing chains. Carbon accounting tools like Tally and EC3 calculate embodied carbon in material specifications. Canada's wood construction sector is a global leader — Edmonton's mass timber construction pipeline exceeds $1.2B in 2026." },
                        { icon: '💧', title: 'Water Conservation Systems', desc: 'WaterSignal and Banyan Water use submetering and AI anomaly detection to reduce multifamily water consumption 20–30%. LEED v5 (2026 update) includes new credits for real-time water efficiency monitoring, making these systems attractive for REIT portfolio ESG scoring.' },
                        { icon: '📋', title: 'ESG Reporting Automation', desc: 'Measurabl, Deepki, and Sustain.Life aggregate utility bills, waste data, and tenant surveys to produce GRESB, TCFD, and SEC-aligned ESG reports automatically. REITs with $100M+ AUM now require this for institutional investor LP reporting, creating a mandatory SaaS market.' },
                        { icon: '🔋', title: 'EV Charging Infrastructure', desc: 'Chargepoint, Blink, and ChargeHub network operators partner with multifamily developers to install managed Level 2 EV charging that balances load across units. BC and Ontario now require EV-ready conduit in all new residential parking stalls. Alberta follows in 2027.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 10. Investment & Startups */}
                  <section id="investment-startups" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>PropTech Investment Trends & Top Startups 2026</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      PropTech VC has bifurcated: mega-rounds for proven AI platforms, and a drought for unproven consumer apps. The sweet spot in 2026 is vertical SaaS with AI automation — B2B products that reduce headcount, compress timelines, or unlock new revenue for real estate professionals. Investor appetite for climate-tech real estate hybrids is at a multi-year high.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { name: 'Lofty.ai', category: 'Tokenized RE Investment', raised: '$35M Series B', desc: 'Fractional real estate investment via Algorand blockchain. Daily rental yield paid in USDC. 500+ tokenized US properties. Minimum investment: $50.' },
                        { name: 'EliseAI', category: 'AI Leasing Assistant', raised: '$75M Series C', desc: 'AI that handles 95% of leasing conversations via text, email, and chat. 500,000+ managed units. Integration with Yardi, RealPage, and Entrata. 2× faster lease-up speed.' },
                        { name: 'Knock', category: 'Bridge Loan / iBuying', raised: '$220M total', desc: 'Buy-before-you-sell bridge financing in 75 US metros. Non-contingent offers accepted at standard sale rates. EBITDA positive since Q4 2024.' },
                        { name: 'Measurabl', category: 'ESG / Sustainability', raised: '$93M Series D', desc: 'ESG data management for commercial real estate. 16B+ sqft of assets under management. GRESB Gold Partner. Used by 70+ REITs for SEC climate disclosure compliance.' },
                        { name: 'Stake', category: 'Renter Financial Wellness', raised: '$46M Series B', desc: 'Cash back rewards for on-time rent payments. Integrates with PM software. Reduces delinquency 40% for property managers. Embedded into AppFolio and Buildium workflows.' },
                        { name: 'Envelope', category: 'Zoning AI / Development', raised: '$18M Series A', desc: 'AI zoning analysis for real estate developers. Instant by-right development envelope calculation for any US parcel. Adopted by CBRE, JLL, and 200+ development firms.' },
                      ].map((co, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: 0 }}>{co.name}</h3>
                            <span style={{ fontSize: 10, fontWeight: 700, color: G, background: 'rgba(34,197,94,0.12)', padding: '3px 10px', borderRadius: 20, marginLeft: 8, whiteSpace: 'nowrap' }}>{co.raised}</span>
                          </div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>{co.category}</div>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{co.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 11. Build Cost */}
                  <section id="build-cost" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>Cost to Build PropTech Software in 2026</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 16, lineHeight: 1.8 }}>
                      PropTech software development costs vary significantly based on regulatory requirements (RESPA, TRID, Fair Housing in the US; RESA, RECA in Canada), real estate data integrations (MLS, ATTOM, CoreLogic), and the complexity of the transaction workflow. AI features add development time but reduce long-term operational costs dramatically.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        {
                          type: 'MVP / Vertical SaaS',
                          range: '$65K – $130K CAD',
                          timeline: '3–5 months',
                          color: G,
                          features: [
                            'Listing portal or PM dashboard',
                            'Tenant/landlord messaging',
                            'Rent collection (Stripe + Plaid)',
                            'MLS / CREA data feed integration',
                            'Mobile-responsive web app',
                            'Basic analytics dashboard',
                          ]
                        },
                        {
                          type: 'Full PropTech Platform',
                          range: '$160K – $420K CAD',
                          timeline: '6–12 months',
                          color: '#3b82f6',
                          popular: true,
                          features: [
                            'All MVP features',
                            'AI property valuation module',
                            'VR tour integration (Matterport API)',
                            'Smart contract lease / escrow',
                            'Multi-unit portfolio management',
                            'iOS + Android native apps',
                            'Smart home IoT dashboard',
                          ]
                        },
                        {
                          type: 'Enterprise / Marketplace',
                          range: '$420K – $1.6M+ CAD',
                          timeline: '12–24 months',
                          color: '#8b5cf6',
                          features: [
                            'Multi-sided marketplace (buyer/seller/agent)',
                            'AI underwriting engine',
                            'Full mortgage workflow APIs',
                            'IoT BMS integration',
                            'Compliance engine (RESPA, AML, FINTRAC)',
                            'White-label multi-tenant SaaS',
                            'Blockchain tokenization layer',
                          ]
                        },
                      ].map((tier, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 24, padding: 28, border: `1px solid ${tier.color}33`, position: 'relative' }}>
                          {tier.popular && (
                            <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most Common</div>
                          )}
                          <div style={{ fontSize: 11, fontWeight: 700, color: tier.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{tier.type}</div>
                          <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', marginBottom: 4 }}>{tier.range}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{tier.timeline}</div>
                          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                            {tier.features.map((f, j) => (
                              <li key={j} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                                <span style={{ color: tier.color, fontWeight: 700 }}>✓</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)', borderRadius: 16, padding: 20 }}>
                      <strong style={{ color: G, display: 'block', marginBottom: 8 }}>Why Build with a Canadian Development Partner?</strong>
                      <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0, fontSize: 14, lineHeight: 1.7 }}>
                        Canadian PropTech teams bring domain familiarity with CREA/TREB MLS data licensing, RECA/RESA regulations, FINTRAC AML requirements, and provincial landlord-tenant legislation — all of which differ significantly from US frameworks. Codazz (Edmonton HQ) has built PropTech products for Canadian real estate operators, US iBuyers, and UAE property management platforms. Rates: $85–$145 CAD/hr.
                      </p>
                    </div>
                  </section>

                  {/* 12. FAQ */}
                  <section id="faq" style={{ marginBottom: 72 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 32 }}>Frequently Asked Questions</h2>
                    {[
                      {
                        q: 'How much does it cost to build a PropTech startup in 2026?',
                        a: "A focused MVP — such as an AI-powered rental management tool or a smart building dashboard — typically costs $65K–$130K CAD and takes 3–5 months to build with a Canadian development team. A full real estate marketplace or digital mortgage platform with AI underwriting and native mobile apps requires $200K–$600K CAD and 9–18 months. Codazz regularly builds PropTech MVPs in the $80K–$160K CAD range for North American real estate clients from our Edmonton headquarters."
                      },
                      {
                        q: 'What is the single biggest PropTech opportunity to build in 2026?',
                        a: "AI-native property management for the 5–200 unit landlord segment is our highest-conviction opportunity. AppFolio, Buildium, and Yardi are legacy systems that have bolted AI onto 15-year-old architectures. An AI-first PM platform that automates maintenance triage, lease abstraction, rent collection, and tenant communication from day one — with a clean mobile UI — has a clear wedge into an underserved, highly fragmented market of 10M+ independent landlords in North America."
                      },
                      {
                        q: 'Can I legally tokenize real estate in Canada?',
                        a: "Yes, with proper securities law compliance. Tokenized real estate in Canada is governed by provincial securities regulators (ASC in Alberta, OSC in Ontario, BCSC in BC). The most common path is an offering memorandum exemption (accredited investors) or the crowdfunding exemption (up to $1.5M from non-accredited investors per jurisdiction). Budget $75K–$200K for securities law structuring, AML/FINTRAC compliance setup, and smart contract legal review before launch."
                      },
                      {
                        q: 'What data sources power AI property valuation models?',
                        a: "Modern AVM models fuse: MLS/CREA transaction data (comps), municipal tax assessment records, property characteristics (beds, baths, sqft, age, lot size), neighborhood signals (school ratings, crime index, transit scores, walk score), real-time demand signals (listing views, saves, days-on-market, price reduction history), satellite and street-level imagery for condition scoring, and macroeconomic inputs (interest rates, employment, migration flows). The differentiation in 2026 is real-time demand signal integration and computer vision condition adjustment — not just comp-based regression."
                      },
                      {
                        q: 'What IoT stack should I build on for a smart building product?',
                        a: "For commercial buildings: open protocol stack with BACnet or Modbus at the device layer, MQTT or OPC-UA for data transport, and AWS IoT Core or Azure IoT Hub for cloud ingestion. Avoid proprietary BMS lock-in. For residential multifamily: integrate with existing BMS vendors (Honeywell, Siemens) via their published APIs rather than replacing hardware. For consumer smart home products: target Matter-certified devices (all major brands since 2024) to ensure cross-vendor interoperability without custom integration work."
                      },
                      {
                        q: 'How does iBuying work and why did Zillow Offers fail?',
                        a: "iBuying platforms use automated valuation models to make instant cash offers on homes at a slight discount (2–5% below market). The iBuyer renovates and relists, capturing the spread plus a service fee. Zillow Offers failed because their AVM overpaid during a rapidly shifting market (late 2021) and their renovation operations were not scaled to handle 10,000+ acquired homes simultaneously. The surviving iBuyers (Opendoor, Offerpad) succeeded by maintaining tighter AVM underwriting, smaller geographic footprints, and integrated renovation arms that compress hold times."
                      },
                      {
                        q: 'What makes Edmonton a good base for PropTech development?',
                        a: "Edmonton offers a combination of strong software engineering talent (University of Alberta CS program is top-5 in Canada), competitive developer salaries versus Toronto and Vancouver (30–40% lower fully loaded cost), and direct familiarity with Alberta's RECA regulatory framework, condo legislation, and the CREA MLS data ecosystem. As Codazz's headquarters city, we build PropTech products for Alberta real estate operators with embedded regulatory knowledge that a US or offshore team cannot replicate."
                      },
                    ].map((faq, i) => (
                      <div key={i} className="reveal" style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, marginBottom: 12, overflow: 'hidden' }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{ width: '100%', padding: '18px 24px', background: openFaq === i ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{faq.q}</span>
                          <span style={{ color: G, fontSize: 20, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px', color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
                        )}
                      </div>
                    ))}
                  </section>

                  {/* CTA */}
                  <div className="reveal" style={{ background: 'linear-gradient(135deg,rgba(34,197,94,0.1),rgba(8,50,30,0.3))', borderRadius: 28, padding: 48, textAlign: 'center', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 64 }}>
                    <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Building a PropTech Product?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 540, margin: '0 auto 28px', fontSize: 15, lineHeight: 1.6 }}>
                      From AI property valuation engines and smart building IoT dashboards to rental management platforms and tokenized real estate marketplaces — Codazz (Edmonton, Canada) has shipped real estate technology for Canadian, US, and international clients.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Link href="/contact" style={{ background: G, color: '#000', padding: '14px 32px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Book Free PropTech Consultation</Link>
                      <Link href="/blog/rental-property-app-development" style={{ border: '1px solid rgba(34,197,94,0.4)', color: G, padding: '14px 32px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>Rental App Dev Guide</Link>
                    </div>
                  </div>

                </article>

                {/* Sidebar */}
                <aside className="toc-sidebar" style={{ width: 280, flexShrink: 0 }}>
                  <div style={{ position: 'sticky', top: 120, display: 'flex', flexDirection: 'column', gap: 20 }}>

                    {/* TOC */}
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Table of Contents</div>
                      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {tocSections.map(s => (
                          <a key={s.id} href={`#${s.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 8, fontSize: 13, textDecoration: 'none', color: activeSection === s.id ? G : 'rgba(255,255,255,0.55)', background: activeSection === s.id ? 'rgba(34,197,94,0.08)' : 'transparent', fontWeight: activeSection === s.id ? 600 : 400 }}>
                            <span>{s.emoji}</span><span>{s.label}</span>
                          </a>
                        ))}
                      </nav>
                    </div>

                    {/* Build Cost Card */}
                    <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: G, marginBottom: 12 }}>PropTech Build Costs (CAD)</div>
                      {[
                        ['MVP / Vertical SaaS', '$65K – $130K'],
                        ['Full Platform', '$160K – $420K'],
                        ['Enterprise Marketplace', '$420K+'],
                      ].map(([l, v], i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{l}</span>
                          <span style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* Related Articles */}
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Related Articles</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {relatedPosts.map(post => (
                          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ fontSize: 10, color: G, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{post.category}</div>
                            <div style={{ fontSize: 13, color: '#fff', fontWeight: 500, lineHeight: 1.4, marginBottom: 4 }}>{post.title}</div>
                            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" style={{ display: 'block', background: G, color: '#000', textAlign: 'center', padding: '14px 24px', borderRadius: 14, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>Get Free Consultation</Link>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
