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
  { num: 1, name: 'Codazz', category: 'Full-Stack Software', emoji: '🚀', metric: 'Dubai & GCC Software Projects | SaaS, Fintech, Logistics', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'IBM Dubai', category: 'Enterprise Software', emoji: '🏛️', metric: 'Enterprise IT transformation for UAE corporations', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Accenture MENA', category: 'Digital Consulting', emoji: '📊', metric: 'Large-scale digital software programs across MENA', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 4, name: 'SAP UAE', category: 'ERP & Enterprise', emoji: '⚙️', metric: 'SAP S/4HANA & cloud ERP for UAE enterprises', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 5, name: 'Appinventiv', category: 'Product Development', emoji: '📱', metric: 'Custom software & mobile products for GCC clients', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 6, name: 'Clavax Technologies', category: 'SaaS Development', emoji: '☁️', metric: 'B2B SaaS platforms and cloud software for UAE', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 7, name: 'Algoworks MENA', category: 'Salesforce & CRM', emoji: '🔗', metric: 'Salesforce implementation & CRM development', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 8, name: 'Simform Gulf', category: 'Cloud Software', emoji: '🌩️', metric: 'AWS and cloud-native software development', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 9, name: 'Trigma Gulf', category: 'E-Commerce Software', emoji: '🛒', metric: 'E-commerce platforms for UAE retail brands', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 10, name: 'Magneto IT Solutions', category: 'Magento & WooCommerce', emoji: '🏪', metric: 'Magento & headless commerce for Dubai retailers', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-ai-development-companies-dubai', title: 'Top AI Development Companies in Dubai & UAE', category: 'Geo Guide', readTime: '12 min' },
  { slug: 'app-development-companies-dubai', title: 'Top App Development Companies in Dubai', category: 'Geo Guide', readTime: '9 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Costs', readTime: '10 min' },
];

const faqItems = [
  {
    q: "What industries drive the most software development demand in Dubai?",
    a: "Fintech and financial services (driven by DIFC's 6,000+ registered companies), logistics and supply chain (Dubai is a global trade hub), hospitality and real estate (property management, booking systems), government digital services (Smart Dubai initiative), and e-commerce (UAE online retail growing 20%+ annually). These five sectors account for the majority of custom software spend in Dubai.",
  },
  {
    q: 'Should I hire a local Dubai software company or outsource internationally?',
    a: 'The answer depends on your budget and project complexity. Local Dubai software companies typically charge $80–$180/hr and offer face-to-face project management. International companies like Codazz with Dubai project experience deliver the same output quality at $40–$90/hr with async communication. For startups and scale-ups, international partners offer better capital efficiency. For large enterprises with complex on-site requirements, a hybrid model works best.',
  },
  {
    q: 'What are the advantages of Dubai Internet City (DIC) for software companies?',
    a: "Dubai Internet City is a free zone specifically designed for technology companies. Benefits include 100% foreign ownership, 0% corporate and personal income tax, streamlined business licensing, and co-location with 1,600+ tech companies including Microsoft, Oracle, Dell, and IBM. Software companies registered in DIC benefit from a regulatory environment that specifically understands technology business models.",
  },
  {
    q: 'What does enterprise software development cost in Dubai?',
    a: 'Enterprise software projects in Dubai vary significantly by scope. Simple web applications: $15,000–$50,000. Mid-complexity SaaS platforms: $50,000–$200,000. Complex enterprise ERP customizations or multi-module platforms: $200,000–$1,000,000+. UAE data residency requirements and Arabic localization each add approximately 15–20% to base development costs.',
  },
  {
    q: 'Which Dubai free zone is best for a software development company?',
    a: "DIFC is best for fintech and financial software companies due to its financial regulatory sandbox and English law framework. Dubai Internet City (DIC) is the default choice for general software and IT companies. Dubai Silicon Oasis suits hardware-software integration and IoT companies. DMCC (Dubai Multi Commodities Centre) is increasingly popular for tech-adjacent businesses due to its prestigious business address and streamlined setup.",
  },
];

export default function SoftwareDevelopmentCompaniesDubaiClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              src="/blog_images/software-development-companies-dubai.jpg"
              alt="Top software development companies in Dubai 2026"
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
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>Software Development</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
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
                11 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top Software Development Companies in Dubai (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A definitive ranking of the best custom software development companies in Dubai for 2026 — covering enterprise software, SaaS, fintech, logistics, and hospitality tech, with free zone comparisons and cost benchmarks.
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
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
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

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Dubai has cemented its position as one of the world&apos;s most dynamic software development markets. With over 1,600 technology companies operating in Dubai Internet City alone, a thriving DIFC fintech ecosystem, and a government-wide digital transformation agenda that spans every public service, the demand for custom software in Dubai has never been higher — or more competitive.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The challenge for businesses — whether a Dubai startup, a multinational establishing a regional headquarters, or an established enterprise modernizing legacy systems — is identifying which software development companies actually deliver the goods. Dubai&apos;s tech scene has its share of companies that are better at marketing than engineering.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated over 100 software development companies operating in Dubai — from DIFC-registered boutiques to global system integrators with UAE offices — and ranked the top 10 by technical capability, industry expertise, client outcomes, and value for money. Here is what we found.
                  </p>
                </div>

                {/* Dubai Tech Ecosystem Stats */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Dubai&apos;s Software Market: The Scale of Opportunity</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { stat: '1,600+', label: 'Tech companies in Dubai Internet City (DIC)' },
                      { stat: '6,000+', label: 'Companies registered in DIFC' },
                      { stat: '$8.4B', label: 'UAE IT market size projected for 2026' },
                      { stat: '20%', label: 'Annual growth in UAE enterprise software spend' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: 24, borderRadius: 16,
                        background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                        textAlign: 'center',
                      }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{item.stat}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                    Dubai&apos;s software development ecosystem spans five distinct free zones — Dubai Internet City, DIFC, Dubai Silicon Oasis, DMCC, and Dubai Design District — each with its own regulatory framework, talent concentration, and industry specialization. Understanding which zone a software company operates from tells you a great deal about their client focus and compliance posture.
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 20,
                    }}>Key Takeaways</p>
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      {[
                        'Codazz ranks #1 for full-stack software delivery with verified Dubai and GCC experience across SaaS, fintech, and logistics verticals.',
                        'Dubai Internet City and DIFC remain the premier free zones for software companies — each optimized for different industry niches.',
                        'Fintech, logistics, and hospitality tech are the three fastest-growing software segments in Dubai, driven by government investment and digital transformation mandates.',
                        'Local Dubai software studios charge 2–3x international partner rates for equivalent technical quality — making hybrid models the smart choice for most businesses.',
                        'UAE data residency requirements apply to most enterprise software handling personal data — this is a technical constraint that affects architecture choices, not just compliance checkboxes.',
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 4 ? 12 : 0,
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>2026 Comparison Table</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'Specialty', 'Key Industries', 'Best For', 'Rating'].map(h => (
                            <th key={h} style={{
                              padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700,
                              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                              background: 'rgba(255,255,255,0.02)',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { rank: '#1', company: 'Codazz', specialty: 'Full-Stack, SaaS, AI Integration', industries: 'Fintech, Logistics, Hospitality', bestFor: 'Full-cycle software with GCC experience', rating: '4.9' },
                          { rank: '#2', company: 'IBM Dubai', specialty: 'Enterprise IT, Cloud, AI', industries: 'Banking, Telecom, Government', bestFor: 'Enterprise transformation programs', rating: '4.8' },
                          { rank: '#3', company: 'Accenture MENA', specialty: 'Digital Consulting + Delivery', industries: 'All major sectors', bestFor: 'Large-scale digital programs', rating: '4.8' },
                          { rank: '#4', company: 'SAP UAE', specialty: 'ERP, S/4HANA, Analytics', industries: 'Manufacturing, Energy, Retail', bestFor: 'SAP-based enterprise software', rating: '4.7' },
                          { rank: '#5', company: 'Appinventiv', specialty: 'Custom Software, Mobile', industries: 'Fintech, Healthcare, Retail', bestFor: 'Product development for GCC startups', rating: '4.7' },
                          { rank: '#6', company: 'Clavax Technologies', specialty: 'SaaS, Cloud Platforms', industries: 'B2B, Real Estate, Logistics', bestFor: 'SaaS product development in UAE', rating: '4.6' },
                          { rank: '#7', company: 'Algoworks MENA', specialty: 'Salesforce, CRM, Cloud', industries: 'Finance, Real Estate, HR', bestFor: 'Salesforce & CRM implementation', rating: '4.6' },
                          { rank: '#8', company: 'Simform Gulf', specialty: 'AWS, Cloud-Native Software', industries: 'Tech startups, Enterprise', bestFor: 'Cloud-native development on AWS', rating: '4.5' },
                          { rank: '#9', company: 'Trigma Gulf', specialty: 'E-commerce, Retail Software', industries: 'Retail, F&B, Hospitality', bestFor: 'E-commerce platform development', rating: '4.5' },
                          { rank: '#10', company: 'Magneto IT Solutions', specialty: 'Magento, Headless Commerce', industries: 'Fashion, Electronics, FMCG', bestFor: 'Magento & headless commerce', rating: '4.4' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.specialty}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.industries}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.bestFor}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{row.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Dubai Free Zones for Software Companies */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>Dubai Free Zones for Tech: Which One Fits Your Software Company?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                      {[
                        { name: 'Dubai Internet City (DIC)', icon: '🌐', bestFor: 'General IT & software companies', highlight: '1,600+ tech firms, Microsoft, Oracle, Dell', tax: '0% tax for 50 years' },
                        { name: 'DIFC', icon: '🏦', bestFor: 'Fintech & financial software', highlight: 'English law, fintech sandbox, 6,000+ companies', tax: 'GDPR-aligned PDPL' },
                        { name: 'Dubai Silicon Oasis (DSO)', icon: '🔌', bestFor: 'Hardware-software & IoT', highlight: 'R&D facilities, university proximity, lower cost', tax: '0% tax, 100% ownership' },
                        { name: 'DMCC', icon: '💎', bestFor: 'Blockchain & Web3 software', highlight: 'Crypto-friendly, prestigious address, fast setup', tax: '100% foreign ownership' },
                        { name: 'Dubai Design District (d3)', icon: '🎨', bestFor: 'UI/UX-forward software studios', highlight: 'Creative cluster, luxury brand clients', tax: '0% personal income tax' },
                        { name: 'Dubai Mainland', icon: '🏙️', bestFor: 'Enterprise sales-driven software firms', highlight: 'Access to UAE government contracts, no free zone restrictions', tax: '9% corporate tax (post-2023)' },
                      ].map((item, i) => (
                        <div key={i} style={{
                          padding: 20, borderRadius: 14,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{item.name}</div>
                          <div style={{ fontSize: 12, color: '#22c55e', fontWeight: 600, marginBottom: 8 }}>Best for: {item.bestFor}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 6 }}>{item.highlight}</div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontStyle: 'italic' }}>{item.tax}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ranking Methodology */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>How We Ranked These Companies</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Dubai/GCC Project Experience', weight: '30%', desc: 'Verified UAE clients, industry depth, free zone presence' },
                        { label: 'Technical Architecture', weight: '25%', desc: 'Code quality, scalability, DevOps, security posture' },
                        { label: 'Industry Specialization', weight: '20%', desc: 'Domain knowledge in fintech, logistics, hospitality, or real estate' },
                        { label: 'Client Outcomes', weight: '15%', desc: 'Business impact, ROI, system uptime, user adoption metrics' },
                        { label: 'Post-Launch Support', weight: '10%', desc: 'SLA commitments, maintenance, response time, escalation paths' },
                      ].map((c, i) => (
                        <div key={i} style={{
                          padding: 16, borderRadius: 12,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                            <span style={{ fontSize: 13, fontWeight: 600, color: '#ffffff' }}>{c.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e' }}>{c.weight}</span>
                          </div>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Company 1: Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 28, padding: 36, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🚀</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#22c55e',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Stack Software</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz is our top-ranked software development company for Dubai in 2026. Operating at the intersection of product thinking and engineering excellence, Codazz builds full-stack custom software — SaaS platforms, enterprise web applications, fintech backends, and logistics systems — with a level of architectural discipline that most Dubai-based studios simply cannot match.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Their Dubai and GCC project portfolio spans fintech payment processing systems for digital banks operating in DIFC, logistics management software for GCC freight operators, SaaS platforms for UAE hospitality groups managing multi-property portfolios, and AI-integrated CRM systems for Dubai real estate companies. This sector depth means they bring genuine domain knowledge to software projects — not just generic engineering capacity.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      Codazz is headquartered in Edmonton, Canada with an engineering center in Chandigarh, India. This structure gives Dubai clients the best of both worlds: North American project management standards and delivery accountability, combined with elite engineering talent at a cost structure that makes genuinely complex software projects feasible for Dubai startups and growth-stage companies that cannot justify hiring a local team of 8 engineers at Dubai salaries.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Key Metric: Dubai & GCC Software Projects Delivered | SaaS, Fintech, Logistics Specialists
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'ibm-dubai', name: 'IBM Dubai', category: 'Enterprise Software',
                    emoji: '🏛️', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Enterprise IT transformation for UAE corporations',
                    paragraphs: [
                      "IBM's Dubai presence focuses on enterprise IT transformation — cloud migration, AI integration into enterprise workflows, and building the large-scale backend systems that power UAE's biggest banks, government departments, and telecommunications companies. Their Watson platform and IBM Cloud infrastructure are embedded in some of the region's most critical digital infrastructure.",
                      "IBM Dubai is the right choice for organizations that need to transform legacy enterprise systems with a partner that has the global expertise, insurance, and compliance certifications to handle mission-critical transformation. For startups or mid-market companies, IBM's scale translates to overhead that can make projects slower and more expensive than necessary.",
                    ],
                  },
                  {
                    num: '03', id: 'accenture-mena', name: 'Accenture MENA', category: 'Digital Consulting',
                    emoji: '📊', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Large-scale digital software programs across MENA',
                    paragraphs: [
                      "Accenture's MENA practice is the dominant force in large-scale digital transformation for Dubai's enterprise market. Their technology consulting practice combines strategy, software engineering, and change management — giving them a unique ability to not just build software but actually get organizations to adopt and benefit from it.",
                      "Their client roster reads like a who's who of Dubai's corporate elite: major airlines, sovereign wealth funds, government ministries, and regional bank groups. Their delivery quality is consistently high, but their project minimums and overhead make them inaccessible to anyone below enterprise scale.",
                    ],
                  },
                  {
                    num: '04', id: 'sap-uae', name: 'SAP UAE', category: 'ERP & Enterprise',
                    emoji: '⚙️', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'SAP S/4HANA & cloud ERP for UAE enterprises',
                    paragraphs: [
                      "SAP UAE is the default ERP and enterprise software layer for Dubai's largest industrial, retail, and energy companies. Their S/4HANA Cloud deployments, RISE with SAP programs, and industry-specific solutions for construction, oil & gas, and retail give them unmatched depth in the enterprise software market.",
                      "SAP UAE's Business Technology Platform (BTP) also enables custom software development built on top of SAP infrastructure — making them relevant not just for ERP implementations but for building bespoke business applications that need deep ERP integration with existing SAP environments.",
                    ],
                  },
                  {
                    num: '05', id: 'appinventiv', name: 'Appinventiv', category: 'Product Development',
                    emoji: '📱', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Custom software & mobile products for GCC clients',
                    paragraphs: [
                      "Appinventiv has built a strong GCC presence with custom software and mobile product development for fintech, healthcare, and retail clients across the Gulf. Their Dubai office serves as a regional hub, with engineering delivery happening from their India-based centers — a model that gives GCC clients local account management combined with cost-efficient engineering.",
                      "Their portfolio includes fintech compliance tools for UAE banks, healthcare management software for Dubai clinics, and custom retail platforms for UAE fashion brands. They are a solid mid-market choice for Dubai businesses that need product-grade software without enterprise-level pricing.",
                    ],
                  },
                  {
                    num: '06', id: 'clavax-technologies', name: 'Clavax Technologies', category: 'SaaS Development',
                    emoji: '☁️', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'B2B SaaS platforms and cloud software for UAE',
                    paragraphs: [
                      "Clavax Technologies specializes in building B2B SaaS platforms for the UAE market — property management systems, logistics tracking platforms, HR software, and industry-specific cloud applications that help Dubai businesses move away from spreadsheets and legacy desktop software into modern, scalable cloud-hosted solutions.",
                      "Their deep experience in multi-tenant SaaS architecture means the platforms they build are designed from the ground up to serve multiple clients on shared infrastructure with proper data isolation — a critical architectural requirement that many Dubai custom software studios get wrong.",
                    ],
                  },
                  {
                    num: '07', id: 'algoworks-mena', name: 'Algoworks MENA', category: 'Salesforce & CRM',
                    emoji: '🔗', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Salesforce implementation & CRM development',
                    paragraphs: [
                      "Algoworks MENA has established dominance in Salesforce implementation and custom CRM development for the Dubai market. Their certified Salesforce consultants have delivered Sales Cloud, Service Cloud, and custom Salesforce development projects for real estate agencies, financial services firms, and large retail groups across the UAE.",
                      "Beyond Salesforce, Algoworks builds custom CRM and customer engagement platforms for businesses that need more flexibility than off-the-shelf CRM products provide. Their Arabic-language CRM customization work is a specific strength in the UAE market where bilingual sales and support workflows are standard.",
                    ],
                  },
                  {
                    num: '08', id: 'simform-gulf', name: 'Simform Gulf', category: 'Cloud Software',
                    emoji: '🌩️', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'AWS and cloud-native software development',
                    paragraphs: [
                      "Simform Gulf brings AWS-certified cloud engineering expertise to Dubai's growing cloud-native software market. Their specialization in microservices architecture, serverless computing, and Kubernetes-based infrastructure makes them a strong choice for Dubai tech companies that are building horizontally scalable software products.",
                      "Their cloud cost optimization practice is particularly valuable for Dubai companies that have already moved to AWS or Azure but are spending far more than necessary — Simform's engineers regularly reduce cloud infrastructure costs by 30–50% for clients through architecture improvements and reserved instance optimization.",
                    ],
                  },
                  {
                    num: '09', id: 'trigma-gulf', name: 'Trigma Gulf', category: 'E-Commerce Software',
                    emoji: '🛒', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'E-commerce platforms for UAE retail brands',
                    paragraphs: [
                      "Trigma Gulf focuses on building e-commerce platforms and retail software for the UAE market — a high-growth segment as UAE online retail continues expanding at 20%+ annually. Their work spans custom shopping platforms, inventory management systems, omnichannel retail software, and the backend order management systems that power Dubai's growing D2C brands.",
                      "Their Arabic e-commerce expertise — including RTL product pages, Arabic SEO optimization, and UAE payment gateway integration (Telr, Network International, PayTabs) — makes them a practical choice for UAE retailers that need a local e-commerce software partner with genuine Arabic market experience.",
                    ],
                  },
                  {
                    num: '10', id: 'magneto-it-solutions', name: 'Magneto IT Solutions', category: 'Magento & WooCommerce',
                    emoji: '🏪', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Magento & headless commerce for Dubai retailers',
                    paragraphs: [
                      "Magneto IT Solutions (different from the Magento platform) has carved out a niche as Dubai's premier Magento development specialist. With Adobe Commerce (Magento) being the e-commerce platform of choice for many of Dubai's larger retail brands, Magneto IT Solutions provides custom Magento development, extension development, and performance optimization services.",
                      "Their headless commerce practice — separating the Magento backend from custom React or Next.js frontends — is increasingly in demand among Dubai luxury and fashion brands that need bespoke storefront experiences without rebuilding their entire e-commerce infrastructure from scratch.",
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 28, padding: 36,
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

                {/* Cost Comparison: Local vs International */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Software Development Cost: Local Dubai Studio vs. International Partner</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        label: 'Local Dubai Software Studio',
                        cost: '$80–$180/hr',
                        pros: ['On-site meetings possible', 'UAE market familiarity', 'Arabic communication'],
                        cons: ['2–3x higher hourly rate', 'Limited to smaller teams', 'Talent shortages causing delays'],
                        color: '#fb923c',
                      },
                      {
                        label: 'International Partner (Codazz)',
                        cost: '$40–$90/hr',
                        pros: ['Senior full-stack teams', 'Faster time-to-market', 'Dubai project track record'],
                        cons: ['Async collaboration', 'Timezone coordination needed', 'No Dubai physical office'],
                        color: '#22c55e',
                      },
                    ].map((option, i) => (
                      <div key={i} style={{
                        padding: 28, borderRadius: 20,
                        background: `rgba(${option.color === '#22c55e' ? '34,197,94' : '251,146,60'},0.04)`,
                        border: `1px solid rgba(${option.color === '#22c55e' ? '34,197,94' : '251,146,60'},0.15)`,
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: option.color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{option.label}</div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>{option.cost}</div>
                        <div style={{ marginBottom: 12 }}>
                          {option.pros.map((pro, pi) => (
                            <div key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                              <span style={{ color: '#22c55e', fontSize: 12, marginTop: 2 }}>+</span>
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{pro}</span>
                            </div>
                          ))}
                        </div>
                        {option.cons.map((con, ci) => (
                          <div key={ci} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                            <span style={{ color: '#f87171', fontSize: 12, marginTop: 2 }}>−</span>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{con}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Industries in Dubai */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>Top Software Categories in Dubai&apos;s Market</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { sector: 'Fintech', icon: '🏦', desc: 'DIFC-based payment platforms, digital lending, wealth management, AML compliance software' },
                        { sector: 'Logistics', icon: '🚢', desc: 'Freight management, Jebel Ali port integration, last-mile delivery, supply chain visibility tools' },
                        { sector: 'Hospitality', icon: '🏨', desc: 'Property management systems for Dubai hotels, F&B POS, guest experience platforms, yield management' },
                        { sector: 'Real Estate', icon: '🏙️', desc: 'Dubai Land Department integrations, property listing platforms, off-plan sales tools, escrow management' },
                        { sector: 'Healthcare', icon: '🏥', desc: 'DHA-compliant EMR systems, clinic management, telemedicine platforms, health insurance processing' },
                        { sector: 'Government', icon: '🏛️', desc: 'Smart Dubai service digitization, e-government portals, smart city dashboards, permit management' },
                      ].map((item, i) => (
                        <div key={i} style={{
                          padding: 20, borderRadius: 14,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.sector}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 32,
                  }}>Frequently Asked Questions</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqItems.map((item, i) => (
                      <div key={i} style={{
                        borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)',
                        background: 'rgba(255,255,255,0.015)', overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer',
                            textAlign: 'left', gap: 16,
                          }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{item.q}</span>
                          <span style={{
                            fontSize: 20, color: '#22c55e', flexShrink: 0,
                            transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s',
                          }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>{item.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {companies.map(company => (
                        <a key={company.name} href={`#${company.name.toLowerCase().replace(/[\s\(\)&+\/]+/g, '-').replace(/-+/g, '-').replace(/-$/, '')}`} style={{
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
                          <span style={{ fontSize: 14 }}>{company.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{company.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{company.category}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

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
                        background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading software engineering strategy at Codazz. Has guided custom software delivery for clients across Dubai, UAE, and the broader GCC market across fintech, logistics, and hospitality sectors.
                    </p>
                  </div>

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
                          textDecoration: 'none', display: 'block', padding: 14,
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
                          <p style={{ fontSize: 11, color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
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
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#22c55e', marginBottom: 12,
                }}>Build Software for Dubai</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Your Dubai Software Project Deserves an Expert Team.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz builds full-stack software for Dubai and GCC businesses — from SaaS platforms to enterprise systems. Get a free technical consultation to scope your project with our senior engineers.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get a Free Software Consultation →
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
