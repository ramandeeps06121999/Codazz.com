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
  { id: 'ai-real-estate', label: 'AI in Real Estate', emoji: '🤖' },
  { id: 'blockchain-smart-contracts', label: 'Blockchain & Smart Contracts', emoji: '⛓️' },
  { id: 'vr-tours', label: 'Virtual & Augmented Reality', emoji: '🥽' },
  { id: 'iot-smart-buildings', label: 'IoT Smart Buildings', emoji: '🏢' },
  { id: 'digital-mortgages', label: 'Digital Mortgages & FinTech', emoji: '🏦' },
  { id: 'property-management', label: 'Property Management Tech', emoji: '🔧' },
  { id: 'build-cost', label: 'Cost to Build PropTech', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'rental-property-app-development', title: 'Rental Property App Development Guide 2026', category: 'Real Estate', readTime: '16 min' },
  { slug: 'fintech-app-development-guide', title: 'Fintech App Development Guide 2026', category: 'FinTech', readTime: '18 min' },
  { slug: 'app-development-cost-canada', title: 'App Development Cost in Canada 2026', category: 'Cost', readTime: '14 min' },
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
              <h1 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24, maxWidth: 860 }}>
                PropTech Trends 2026: AI, Blockchain &<br /><span style={{ color: G }}>Smart Home Technology in Real Estate</span>
              </h1>
              <p className="reveal" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 680, marginBottom: 32 }}>
                The $86B PropTech investment landscape is being reshaped by AI property valuations, blockchain title transfer, IoT smart buildings, and virtual tours. Here is what is actually gaining traction in 2026.
              </p>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#22c55e,#16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: 14 }}>C</div>
                  <div><div style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Codazz Engineering</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>March 20, 2026</div></div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>18 min read</span>
                <button onClick={handleCopy} style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 16px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 13 }}>{copied ? '✓ Copied' : '🔗 Share'}</button>
              </div>
              <div className="reveal" style={{ width: '100%', aspectRatio: '16/7', background: 'linear-gradient(135deg,rgba(34,197,94,0.08),rgba(0,0,0,0.5))', borderRadius: 24, marginBottom: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(34,197,94,0.1)' }}>
                <span style={{ fontSize: 72 }}>🏠</span>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16, marginBottom: 64 }}>
                {[['$86B','PropTech investment in 2025'],['67%','Buyers start search online'],['$1.3T','Global real estate market'],['40%','Faster closing with digital mortgages'],['30%','Energy savings with smart IoT'],['4×','More views with 3D virtual tours']].map(([v,l],i)=>(
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '20px 16px', textAlign: 'center' }}>
                    <div style={{ fontSize: 28, fontWeight: 900, color: G, marginBottom: 6 }}>{v}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="cb-container">
              <div className="blog-layout" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
                <article style={{ flex: 1, minWidth: 0 }}>

                  <section id="market-overview" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>PropTech Market Overview 2026</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>Property technology investment peaked at $32B in 2021, corrected sharply in 2022-23, and has rebounded to $86B globally in 2025 as AI-driven solutions prove measurable ROI. The winners are companies solving real problems with tangible outcomes.</p>
                    <div className="reveal" style={{ overflowX: 'auto', marginBottom: 32 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 560 }}>
                        <thead><tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>{['PropTech Segment','2026 Market Size','Growth Rate','Key Players'].map(h=><th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>)}</tr></thead>
                        <tbody>{[['AI Property Valuation','$8.2B','28% CAGR','Zillow, Opendoor, CoreLogic'],['Property Management SaaS','$6.8B','18% CAGR','Yardi, AppFolio, Buildium'],['Real Estate Marketplaces','$14B','12% CAGR','Realtor.com, Redfin, CoStar'],['Smart Building IoT','$12B','22% CAGR','Honeywell, Siemens, JLL'],['Digital Mortgage & Closing','$5.4B','31% CAGR','Blend, Better.com, Maxwell'],['VR/AR Property Tours','$3.1B','38% CAGR','Matterport, iStaging, Kuula']].map((row,i)=><tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i%2===0?'transparent':'rgba(255,255,255,0.015)' }}>{row.map((cell,j)=><td key={j} style={{ padding: '11px 14px', color: j===0?G:'rgba(255,255,255,0.7)', fontWeight: j===0?700:400 }}>{cell}</td>)}</tr>)}</tbody>
                      </table>
                    </div>
                  </section>

                  <section id="ai-real-estate" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>AI in Real Estate</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>AI is disrupting three core real estate workflows: property valuation, lead qualification, and transaction risk assessment. The companies winning are those using AI to compress time-to-close, not just to generate prettier reports.</p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { icon: '🏷️', title: 'AI Property Valuations', desc: 'Zillow\'s Zestimate uses 200+ data points: comps, tax records, listing history, school ratings, flood zone, walk score. Modern AVMs achieve <5% median error rate in dense urban markets. New frontier: real-time demand signals from listing views and inquiry rates fed into dynamic pricing models.' },
                        { icon: '📊', title: 'Predictive Analytics', desc: 'ML models trained on 10+ years of transaction data predict neighborhood appreciation (3–5 year horizon), vacancy risk, rent growth, and tenant default probability. Companies: HouseCanary, Quantarium, Attom Data. Investors use this for off-market acquisition targeting.' },
                        { icon: '⚡', title: 'Automated Underwriting', desc: 'AI underwriting cuts mortgage approval from 45 days to <72 hours. Models assess income stability (gig/W2/self-employed), alternative credit data (rent history, utility bills), and property risk simultaneously. Fannie Mae\'s Desktop Underwriter handles 70%+ of US conforming loan automation.' },
                        { icon: '🤝', title: 'AI Lead Qualification', desc: 'Conversational AI qualifies inbound leads 24/7: pre-qualifies mortgage eligibility, schedules showings, and nurtures cold leads. Structurely and Roof AI integrate with major CRMs. Reduces agent lead-response time from hours to seconds — critical in hot markets.' },
                      ].map((item,i)=>(
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                          <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="blockchain-smart-contracts" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Blockchain & Smart Contracts in Real Estate</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>After years of hype, blockchain real estate applications are finding their footing — not in replacing land registries overnight, but in tokenizing investment, automating escrow, and digitizing lease agreements.</p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { title: 'Tokenized Real Estate', badge: 'Growing Fast', color: G, desc: 'Fractional ownership via ERC-1400 security tokens. Investors buy $500 shares of a Manhattan apartment. RealT (250+ tokenized US properties), Lofty.ai, and Homebase enable retail investors to earn rental yield on-chain. SEC-compliant via Reg D / Reg A+ exemptions.' },
                        { title: 'Smart Contract Escrow', badge: 'Proven', color: '#3b82f6', desc: 'Replace 30-day escrow with smart contracts that release funds automatically on title transfer confirmation. Reduces closing costs by 40–60%. Propy closed the first blockchain real estate transaction in 2017 and now processes thousands annually across US and EU.' },
                        { title: 'Digital Lease Agreements', badge: 'Mainstream 2026', color: '#f59e0b', desc: 'Blockchain-recorded leases create immutable, court-admissible rental agreements. Smart contract rent payments auto-execute on the 1st of each month. Late fees trigger automatically. Eliminates disputes over payment history and lease terms.' },
                        { title: 'Digital Title Transfer', badge: 'Government Pilots', color: '#8b5cf6', desc: 'Sweden, Dubai, and Georgia have piloted blockchain land registries. Chicago\'s Cook County ran a 2-year pilot. The viable path in 2026 is hybrid — blockchain as a reference layer over existing title insurance systems, not a replacement.' },
                      ].map((item,i)=>(
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}22`, borderRadius: 20, padding: 24 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: 0 }}>{item.title}</h3>
                            <span style={{ fontSize: 10, fontWeight: 700, color: item.color, background: `${item.color}15`, padding: '3px 10px', borderRadius: 20, marginLeft: 8, whiteSpace: 'nowrap' }}>{item.badge}</span>
                          </div>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="vr-tours" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Virtual & Augmented Reality Tours</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>3D virtual tours are no longer a luxury — 67% of buyers prefer listings with virtual tours, and properties with Matterport tours sell 31% faster at 4–9% higher prices. In 2026, AR furniture staging is becoming the new virtual staging.</p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { tool: 'Matterport', use: '3D Spatial Scanning', desc: 'The market leader. Camera scans rooms to create photorealistic 3D dollhouse view + walkthrough. $9.99–$69/space/month hosting. Integrates with Zillow, MLS, Realtor.com. Now offers AI-generated 3D from standard photos.' },
                        { tool: 'iStaging / Kuula', use: 'Affordable 360° Tours', desc: '360° photo-based virtual tours using a standard 360° camera ($300–$800). iStaging adds AR furniture placement and hotspots. Kuula offers free hosting for basic tours. Best for budget-conscious agents and property managers.' },
                        { tool: 'IKEA Place / Houzz AR', use: 'AR Furniture Staging', desc: 'Buyers point phone at empty room to see furnished version. Houzz AR tool has 20M+ users. Real estate apps integrating ARKit/ARCore allow buyers to visualize renovations, furniture placement, and paint colors before purchase decision.' },
                        { tool: 'Apple Vision Pro', use: 'Immersive Property Preview', desc: 'Compass and Sotheby\'s launched Vision Pro property tour apps in 2025. Ultra-high-net-worth buyers view properties in spatial video before flying in. Early adopter differentiator for luxury real estate in 2026.' },
                      ].map((item,i)=>(
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 22 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{item.use}</div>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.tool}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="iot-smart-buildings" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>IoT Smart Buildings</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>Smart building technology is proving ROI at scale: 30% energy savings, 25% reduction in maintenance costs, and significant increases in tenant satisfaction and Net Operating Income (NOI).</p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '💡', title: 'Energy Management', desc: 'AI-controlled HVAC (Nest + Siemens Desigo CC) learns occupancy patterns and adjusts dynamically. Demand response integrations with utilities reduce peak-load costs 15–25%. Mandatory in EU buildings >2,500 sqm under EPBD directive.' },
                        { icon: '🔧', title: 'Predictive Maintenance', desc: 'Vibration, temperature, and current sensors on elevators, chillers, and pumps detect anomalies 2–8 weeks before failure. IBM Maximo and Siemens Senseye reduce unplanned downtime by 40%. ROI in 12–18 months for commercial buildings.' },
                        { icon: '👤', title: 'Occupancy Sensing', desc: 'People counting with LiDAR and millimeter-wave radar enables space optimization. Offices reclaiming 30–40% of underutilized desks. Hot-desking management software (Condeco, Robin) integrates directly with sensor data for booking.' },
                        { icon: '🔒', title: 'Smart Access Control', desc: 'Mobile credentials replace keyfobs. KISI, Openpath, and Verkada offer cloud-managed access with audit logs, visitor management, and elevator integration. Multifamily: August Smart Lock eliminates physical key issuance entirely.' },
                        { icon: '💧', title: 'Leak & Air Quality Monitoring', desc: 'Flo by Moen detects micro-leaks before visible damage. CO2/VOC/PM2.5 sensors (Awair, Kaiterra) connect to HVAC for WELL-certified air quality. Insurance providers offer premium discounts for leak detection devices.' },
                        { icon: '🌐', title: 'Building Management System', desc: 'Centralized IoT platform aggregating all building systems. Johnson Controls Metasys, Honeywell Forge, and Siemens Navigator are enterprise BMS leaders. New entrant Willow (digital twin + BMS) adopted by major REITs including Brookfield.' },
                      ].map((item,i)=>(
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="digital-mortgages" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Digital Mortgages & Real Estate FinTech</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>The traditional 45-day mortgage process is being compressed to days. Open banking, AI underwriting, and e-closing platforms are the three pillars of the digital mortgage revolution.</p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { title: 'Mortgage APIs', desc: 'Blend, Maxwell, and Roostify provide white-label digital mortgage platforms for banks and credit unions. Polly offers a secondary market pricing engine that optimizes loan pricing in real time. API-first architecture connects to Fannie/Freddie AUS directly.' },
                        { title: 'Open Banking (Plaid / Finicity)', desc: 'Borrowers link bank accounts instead of uploading statements. Plaid Income verifies employment and income in <60 seconds. Freddie Mac\'s AIM uses Plaid to auto-verify assets, eliminating manual VOA/VOI documents and shaving 10 days off closing.' },
                        { title: 'Instant Approval', desc: 'Better.com offers a 3-minute pre-approval. AI underwrites based on credit, income, assets, and property simultaneously. GSE automation (Fannie Day 1 Certainty) lets lenders rep-and-warrant waive, accelerating closing from 45 to 10–15 days.' },
                        { title: 'DSCR Loans (Investor-Focused)', desc: 'Debt-Service Coverage Ratio loans qualify investment property buyers on rental income, not personal income. Fintech lenders (Kiavi, LendingOne, RCN Capital) underwrite DSCR loans in 24–48 hours, serving 3M+ real estate investors the banks ignore.' },
                      ].map((item,i)=>(
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 22 }}>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: G, marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="property-management" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Property Management Technology</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>Property managers overseeing 50+ units cannot compete without software. The PM tech market has consolidated around a few dominant platforms — but there is still a clear gap in AI-native solutions.</p>
                    <div className="reveal" style={{ overflowX: 'auto', marginBottom: 32 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 580 }}>
                        <thead><tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>{['Platform','Best For','Price Range','Key Feature'].map(h=><th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>)}</tr></thead>
                        <tbody>{[['Yardi Voyager','Enterprise (1,000+ units)','Custom ($5–$10/unit/mo)','Full ERP: accounting, leasing, maintenance'],['AppFolio','Mid-market (50–2,000 units)','$1.40–$3/unit/mo','AI leasing assistant, online maintenance'],['Buildium','Small-mid (1–5,000 units)','$58–$375/mo','eSignatures, tenant portal, accounting'],['Rentec Direct','Small landlords (1–5,000)','$45–$75/mo','Free ACH rent collection, tenant screening'],['Propertyware','Single-family (SFR)','Custom','Open API, customizable workflows']].map((row,i)=><tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i%2===0?'transparent':'rgba(255,255,255,0.015)' }}>{row.map((cell,j)=><td key={j} style={{ padding: '11px 14px', color: j===0?G:'rgba(255,255,255,0.7)', fontWeight: j===0?700:400 }}>{cell}</td>)}</tr>)}</tbody>
                      </table>
                    </div>
                    <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 20, border: '1px solid rgba(34,197,94,0.2)' }}>
                      <strong style={{ color: G, display: 'block', marginBottom: 8 }}>The Gap Worth Building Into</strong>
                      <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>None of the existing PM platforms have natively integrated AI lease abstraction, predictive vacancy modeling, or automated maintenance triage. An AI-native PM platform targeting boutique landlords (5–200 units) that automates 80% of tenant communication remains a viable startup opportunity in 2026.</p>
                    </div>
                  </section>

                  <section id="build-cost" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Cost to Build PropTech Software in 2026</h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>PropTech software varies widely based on data integrations, compliance requirements (RESPA, TRID, Fair Housing), and the complexity of the real estate transaction workflow.</p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { type: 'MVP / Vertical SaaS', range: '$60K – $120K', timeline: '3–5 months', color: G, features: ['Listing portal or PM dashboard','Tenant/landlord messaging','Basic rent collection (Stripe/Plaid)','MLS data feed integration','Mobile-responsive web app'] },
                        { type: 'Full PropTech Platform', range: '$150K – $400K', timeline: '6–12 months', color: '#3b82f6', popular: true, features: ['All MVP features','AI property valuation module','Virtual tour integration (Matterport API)','Smart contract lease/escrow','Multi-unit portfolio management','iOS + Android apps'] },
                        { type: 'Enterprise / Marketplace', range: '$400K – $1.5M+', timeline: '12–24 months', color: '#8b5cf6', features: ['Multi-sided marketplace','AI underwriting engine','Full mortgage workflow','IoT BMS integration','Compliance engine (RESPA, AML)','White-label multi-tenant SaaS'] },
                      ].map((tier,i)=>(
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 24, padding: 28, border: `1px solid ${tier.color}33`, position: 'relative' }}>
                          {tier.popular && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most Common</div>}
                          <div style={{ fontSize: 11, fontWeight: 700, color: tier.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{tier.type}</div>
                          <div style={{ fontSize: 26, fontWeight: 900, color: '#fff', marginBottom: 4 }}>{tier.range}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{tier.timeline}</div>
                          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>{tier.features.map((f,j)=><li key={j} style={{ display: 'flex', gap: 8, marginBottom: 8 }}><span style={{ color: tier.color, fontWeight: 700 }}>✓</span><span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{f}</span></li>)}</ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="faq" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 32 }}>Frequently Asked Questions</h2>
                    {[
                      { q: 'How much does it cost to build a PropTech startup in 2026?', a: 'A focused MVP — for example, an AI-powered rental property management tool or a smart building dashboard — costs $60K–$120K and takes 3–5 months to build. A full real estate marketplace or digital mortgage platform with AI underwriting and mobile apps requires $200K–$600K and 9–18 months. Codazz regularly builds PropTech MVPs for $80–$150K for North American real estate clients.' },
                      { q: 'What is the biggest PropTech trend to bet on in 2026?', a: 'AI-native property management is the highest-conviction opportunity. Existing PM platforms (AppFolio, Buildium, Yardi) are legacy systems bolting on AI. An AI-first PM platform automating maintenance triage, tenant communication, and lease renewal workflows for the 5–200 unit landlord segment has a clear wedge into an underserved market.' },
                      { q: 'Can I legally tokenize real estate in Canada or the USA?', a: 'Yes, with proper securities compliance. In the US, real estate tokens are typically issued under Regulation D (accredited investors only) or Regulation A+ (up to $75M public raise). In Canada, tokenized real estate falls under provincial securities law — you need an offering memorandum or prospectus exemption. Budget $50K–$150K for legal structuring before launch.' },
                      { q: 'What data sources does AI property valuation use?', a: 'Modern AVM models use: MLS transaction data (comps), tax assessment records (ATTOM, CoreLogic), property characteristics (beds, baths, sqft, age), neighborhood signals (school ratings, crime, transit scores), real-time demand signals (listing views, saves, days-on-market), and macroeconomic indicators (interest rates, employment). The differentiation is in real-time demand signals.' },
                      { q: 'What IoT platform should I build on for a smart building product?', a: 'For commercial buildings, build on an open protocol stack: BACnet or Modbus at the device layer, MQTT or OPC-UA for data transport, and a cloud IoT platform (AWS IoT Core, Azure IoT Hub) for ingestion and processing. Avoid proprietary BMS lock-in. For multifamily residential, partner with existing BMS vendors (Honeywell, Siemens) via their APIs rather than replacing them.' },
                    ].map((faq,i)=>(
                      <div key={i} className="reveal" style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, marginBottom: 12, overflow: 'hidden' }}>
                        <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{ width: '100%', padding: '18px 24px', background: openFaq===i?'rgba(34,197,94,0.06)':'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{faq.q}</span>
                          <span style={{ color: G, fontSize: 20, flexShrink: 0, transform: openFaq===i?'rotate(45deg)':'none', transition: 'transform 0.2s' }}>+</span>
                        </button>
                        {openFaq===i&&<div style={{ padding: '0 24px 20px', color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>}
                      </div>
                    ))}
                  </section>

                  <div className="reveal" style={{ background: 'linear-gradient(135deg,rgba(34,197,94,0.1),rgba(8,50,30,0.3))', borderRadius: 28, padding: 40, textAlign: 'center', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 64 }}>
                    <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Building a PropTech Product?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 28, maxWidth: 520, margin: '0 auto 28px', fontSize: 15, lineHeight: 1.6 }}>From AI property valuation to smart building IoT dashboards and rental management platforms — Codazz has shipped real estate technology for Canadian, US, and UAE clients.</p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Link href="/contact" style={{ background: G, color: '#000', padding: '14px 32px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Book Free PropTech Consultation</Link>
                      <Link href="/services/iot-development" style={{ border: '1px solid rgba(34,197,94,0.4)', color: G, padding: '14px 32px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>IoT Development Services</Link>
                    </div>
                  </div>
                </article>

                <aside className="toc-sidebar" style={{ width: 280, flexShrink: 0 }}>
                  <div style={{ position: 'sticky', top: 120, display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Table of Contents</div>
                      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {tocSections.map(s=>(
                          <a key={s.id} href={`#${s.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 8, fontSize: 13, textDecoration: 'none', color: activeSection===s.id?G:'rgba(255,255,255,0.55)', background: activeSection===s.id?'rgba(34,197,94,0.08)':'transparent', fontWeight: activeSection===s.id?600:400 }}>
                            <span>{s.emoji}</span><span>{s.label}</span>
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: G, marginBottom: 12 }}>PropTech Build Costs</div>
                      {[['MVP / Vertical SaaS','$60K – $120K'],['Full Platform','$150K – $400K'],['Enterprise Marketplace','$400K+']].map(([l,v],i)=>(
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i<2?'1px solid rgba(255,255,255,0.05)':'none' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{l}</span>
                          <span style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>{v}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Related Articles</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {relatedPosts.map(post=>(
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
