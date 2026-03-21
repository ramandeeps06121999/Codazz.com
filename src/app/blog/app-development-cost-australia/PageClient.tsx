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
  { id: 'quick-overview', label: 'AU Cost Overview', emoji: '🦘' },
  { id: 'city-rates', label: 'Sydney vs Melbourne vs Brisbane vs Perth', emoji: '🏙️' },
  { id: 'au-vs-offshore', label: 'Australian vs Offshore', emoji: '🌏' },
  { id: 'app-types', label: 'Popular App Types in AU', emoji: '📱' },
  { id: 'government-grants', label: 'Government Grants & R&D Tax', emoji: '🏛️' },
  { id: 'cost-breakdown', label: 'Full Cost Breakdown', emoji: '📊' },
  { id: 'reduce-costs', label: 'How to Reduce Costs', emoji: '💡' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '18 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
];

const tableWrapStyle: React.CSSProperties = {
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
  marginBottom: 32,
};
const tableContainerStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  borderRadius: 16,
  padding: 24,
  border: '1px solid rgba(255,255,255,0.06)',
};
const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '14px 12px',
  color: '#ffffff',
  fontSize: 14,
  fontWeight: 700,
  whiteSpace: 'nowrap',
};
const tdStyle: React.CSSProperties = { padding: '14px 12px', fontSize: 15 };
const rowBorder: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.06)' };
const headBorder: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.12)' };
const greenText: React.CSSProperties = { color: '#b4fd83', fontWeight: 600 };
const whiteText: React.CSSProperties = { color: '#ffffff' };
const sectionHeading: React.CSSProperties = {
  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
  fontWeight: 700,
  color: '#ffffff',
  marginTop: 64,
  marginBottom: 24,
  letterSpacing: '-0.02em',
};
const subHeading: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  color: '#ffffff',
  marginTop: 32,
  marginBottom: 16,
};

function InsightBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="reveal" style={{
      background: 'rgba(180,253,131,0.06)',
      borderLeft: '4px solid #b4fd83',
      borderRadius: '0 12px 12px 0',
      padding: '20px 24px',
      margin: '32px 0',
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: '#b4fd83', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {title}
      </p>
      <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

export default function AppDevelopmentCostAustraliaClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 120px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
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
              }}>Business</span>
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
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              App Development Cost in Australia 2026: Rates, Timeline &amp; Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Australian app development rates range from $100 to $250 AUD/hr. But what you actually pay depends on where you build, who you hire, and whether you leverage government grants. Here is the complete breakdown for 2026.
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
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(180,253,131,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* ── KEY TAKEAWAYS BOX ── */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.08) 0%, rgba(180,253,131,0.02) 100%)',
                  border: '1px solid rgba(180,253,131,0.25)',
                  borderRadius: 16,
                  padding: '28px 32px',
                  marginBottom: 48,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#b4fd83', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Key Takeaways
                    </h3>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>Australian dev rates sit between $100&ndash;$250 AUD/hr</strong>, making local agencies 2&ndash;3x more expensive than equivalent offshore teams.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>Sydney and Melbourne command the highest rates</strong>; Brisbane and Perth offer meaningful savings of 10&ndash;20% for comparable talent.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>Australia&apos;s R&amp;D Tax Incentive can return 43.5% of eligible R&amp;D spend</strong> to small companies, dramatically lowering net app development cost.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>A hybrid AU + offshore model</strong> gives you Australian account management and cheaper engineering, cutting costs by 40&ndash;60% vs a fully local team.
                    </li>
                    <li style={{ marginBottom: 0, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>Fintech, health tech, and logistics are Australia&apos;s hottest app categories</strong> in 2026, each with specific compliance and integration requirements.
                    </li>
                  </ul>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    Australia&apos;s tech sector is booming&mdash;and so are app development budgets.
                  </p>
                  <p>
                    With a maturing startup ecosystem, world-class universities producing engineering talent, and government incentives for R&amp;D, Australia is one of the most dynamic app markets in the Asia-Pacific region. But building an app here carries real cost implications that many founders underestimate.
                  </p>
                  <p>
                    Whether you are building a fintech platform in Sydney, a logistics app in Melbourne, or a health-tech product in Brisbane, this guide gives you real numbers, honest comparisons, and practical strategies to maximise your development budget in 2026.
                  </p>
                </div>

                {/* ═══════════════════════════════════════════
                    QUICK OVERVIEW
                    ═══════════════════════════════════════════ */}
                <h2 id="quick-overview" className="reveal" style={sectionHeading}>
                  Australian App Development Cost Overview (2026)
                </h2>

                <p className="reveal">
                  Australian app costs are quoted in AUD and largely mirror the experience of comparable markets like the UK and Canada, but with a distinct city-by-city spread and stronger government R&amp;D support.
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>App Type</th>
                          <th style={thStyle}>Timeline</th>
                          <th style={thStyle}>Local AU Cost (AUD)</th>
                          <th style={thStyle}>Hybrid Model (AUD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Simple MVP</strong></td>
                          <td style={tdStyle}>2&ndash;3 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$30,000 &ndash; $80,000</td>
                          <td style={tdStyle}>$15,000 &ndash; $35,000</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Medium App</strong></td>
                          <td style={tdStyle}>4&ndash;6 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$80,000 &ndash; $200,000</td>
                          <td style={tdStyle}>$40,000 &ndash; $100,000</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Complex App</strong></td>
                          <td style={tdStyle}>6&ndash;10 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$200,000 &ndash; $450,000</td>
                          <td style={tdStyle}>$90,000 &ndash; $220,000</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>Enterprise Platform</strong></td>
                          <td style={tdStyle}>10&ndash;18+ months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$450,000 &ndash; $1M+</td>
                          <td style={tdStyle}>$200,000 &ndash; $500,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <InsightBox title="Currency Note">
                  <p style={{ margin: 0 }}>
                    All figures above are in <strong style={whiteText}>Australian Dollars (AUD)</strong>. At current exchange rates (1 AUD &asymp; 0.63 USD), a $100,000 AUD project is roughly $63,000 USD. When comparing quotes from international agencies, always confirm the currency.
                  </p>
                </InsightBox>

                {/* ═══════════════════════════════════════════
                    CITY RATES
                    ═══════════════════════════════════════════ */}
                <h2 id="city-rates" className="reveal" style={sectionHeading}>
                  Developer Rates by City: Sydney vs Melbourne vs Brisbane vs Perth
                </h2>

                <p className="reveal">
                  Australia&apos;s geography creates meaningful cost differences between tech hubs. Sydney and Melbourne are the most expensive markets; Brisbane and Perth offer genuine savings for equivalent skill levels.
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '24px 0 32px' }}>
                  {[
                    {
                      city: 'Sydney',
                      state: 'NSW',
                      rate: '$120 – $250 AUD/hr',
                      notes: 'Most expensive market. Strong fintech, media, and enterprise app ecosystem. High living costs drive up developer salaries.',
                    },
                    {
                      city: 'Melbourne',
                      state: 'VIC',
                      rate: '$110 – $230 AUD/hr',
                      notes: "Australia's second-largest tech hub. Strong design culture, health tech, and SaaS ecosystem. Slightly cheaper than Sydney.",
                    },
                    {
                      city: 'Brisbane',
                      state: 'QLD',
                      rate: '$100 – $195 AUD/hr',
                      notes: 'Growing fast post-COVID. Lower cost of living means 10-20% cheaper dev rates. Strong logistics and resources tech.',
                    },
                    {
                      city: 'Perth',
                      state: 'WA',
                      rate: '$95 – $185 AUD/hr',
                      notes: 'Mining tech and resources-adjacent apps dominate. Good talent pool, more competitive rates, time-zone alignment with SE Asia.',
                    },
                  ].map((item) => (
                    <div key={item.city} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', margin: '0 0 4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.state}</p>
                      <h3 style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', margin: '0 0 8px' }}>{item.city}</h3>
                      <p style={{ fontSize: 16, fontWeight: 700, color: '#b4fd83', margin: '0 0 12px' }}>{item.rate}</p>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }}>{item.notes}</p>
                    </div>
                  ))}
                </div>

                <h3 className="reveal" style={subHeading}>What Role Are You Hiring For?</h3>
                <p className="reveal">
                  Rates vary significantly by role. Here are 2026 day-rate benchmarks for Australian developers (AUD, full-time contract or agency):
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Role</th>
                          <th style={thStyle}>Mid-Level (AUD/day)</th>
                          <th style={thStyle}>Senior (AUD/day)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['iOS Developer (Swift)', '$900 – $1,400', '$1,400 – $2,000'],
                          ['Android Developer (Kotlin)', '$850 – $1,350', '$1,350 – $1,900'],
                          ['Flutter / React Native Dev', '$800 – $1,300', '$1,300 – $1,900'],
                          ['Backend Developer (Node/Python)', '$850 – $1,350', '$1,350 – $2,000'],
                          ['UI/UX Designer', '$750 – $1,200', '$1,200 – $1,800'],
                          ['DevOps / Cloud Engineer', '$950 – $1,500', '$1,500 – $2,200'],
                          ['Project Manager / BA', '$800 – $1,300', '$1,300 – $1,900'],
                        ].map(([role, mid, senior], i) => (
                          <tr key={role} style={i < 6 ? rowBorder : {}}>
                            <td style={{ ...tdStyle, ...whiteText }}>{role}</td>
                            <td style={tdStyle}>{mid}</td>
                            <td style={{ ...tdStyle, ...greenText }}>{senior}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════
                    AU VS OFFSHORE
                    ═══════════════════════════════════════════ */}
                <h2 id="au-vs-offshore" className="reveal" style={sectionHeading}>
                  Australian Developers vs Offshore: A Realistic Comparison
                </h2>

                <p className="reveal">
                  Many Australian founders default to local agencies for comfort and compliance reasons. But the cost difference is real&mdash;and the quality gap has largely closed. Here is how the options actually compare in 2026:
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Factor</th>
                          <th style={thStyle}>Australian Agency</th>
                          <th style={thStyle}>Offshore (India / E. Europe)</th>
                          <th style={thStyle}>Hybrid Model</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Hourly Rate', '$100–$250 AUD/hr', '$25–$65 AUD/hr', '$50–$120 AUD/hr'],
                          ['Communication', 'Same timezone, easy', 'Often 5–13hr difference', 'AU PM, offshore devs'],
                          ['Quality Consistency', 'Generally high', 'Variable, vet carefully', 'High with right partner'],
                          ['Cultural Fit', 'Excellent', 'May require adjustment', 'Best of both'],
                          ['IP Protection', 'Strong AU law', 'Varies by country', 'Contractually protected'],
                          ['R&D Tax Eligibility', 'Fully eligible', 'Partially eligible (if registered)', 'Partially eligible'],
                        ].map(([factor, au, offshore, hybrid], i) => (
                          <tr key={factor} style={i < 5 ? rowBorder : {}}>
                            <td style={{ ...tdStyle, color: '#b4fd83', fontWeight: 600 }}>{factor}</td>
                            <td style={{ ...tdStyle, ...whiteText }}>{au}</td>
                            <td style={tdStyle}>{offshore}</td>
                            <td style={{ ...tdStyle, color: '#86efac' }}>{hybrid}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <InsightBox title="Codazz Recommendation">
                  <p style={{ margin: 0 }}>
                    For most Australian founders, a <strong style={whiteText}>hybrid model</strong> hits the sweet spot. Use an agency with Australian or North American account management (clear communication, timezone alignment, professional contracts) backed by a proven offshore engineering team. This approach typically saves <strong style={whiteText}>40&ndash;60% vs a fully local AU agency</strong> while maintaining quality and IP protection.
                  </p>
                </InsightBox>

                {/* ═══════════════════════════════════════════
                    APP TYPES
                    ═══════════════════════════════════════════ */}
                <h2 id="app-types" className="reveal" style={sectionHeading}>
                  Popular App Types in the Australian Market
                </h2>

                <p className="reveal">
                  Australia&apos;s economy and lifestyle create demand for specific categories of mobile apps. Understanding the most common use cases also helps you benchmark your project against realistic cost ranges.
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '24px 0' }}>
                  {[
                    {
                      category: 'Fintech & BNPL',
                      cost: '$150,000 – $600,000 AUD',
                      desc: "Australia pioneered Buy Now Pay Later (Afterpay, Zip). Fintech apps require AFSL licensing, PCI-DSS compliance, real-time payment rails integration (NPP), and robust fraud detection.",
                    },
                    {
                      category: 'Health & Telehealth',
                      cost: '$120,000 – $500,000 AUD',
                      desc: 'Post-COVID telehealth boomed. Apps need Medicare integration, My Health Record compliance, AHPRA registration workflows, and TGA considerations for medical device software.',
                    },
                    {
                      category: 'Logistics & Last Mile',
                      cost: '$100,000 – $400,000 AUD',
                      desc: "Australia's vast geography makes logistics apps critical. Real-time GPS tracking, driver dispatch, proof-of-delivery workflows, and route optimisation are core requirements.",
                    },
                    {
                      category: 'Property Tech',
                      cost: '$80,000 – $350,000 AUD',
                      desc: "Australia's obsession with real estate drives demand for property portals, rental management, auction platforms, and mortgage tools. REA Group and Domain have set high UX expectations.",
                    },
                    {
                      category: 'NDIS & Disability Services',
                      cost: '$90,000 – $300,000 AUD',
                      desc: 'A uniquely Australian market worth $35B+. Apps for NDIS plan management, service provider bookings, and participant goal tracking are in strong demand.',
                    },
                    {
                      category: 'Mining & Resources Tech',
                      cost: '$150,000 – $700,000 AUD',
                      desc: 'Dominant in WA. Rugged hardware integrations, offline-first architecture, safety compliance (WHS), and real-time operational dashboards are standard requirements.',
                    },
                  ].map((item) => (
                    <div key={item.category} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 24, borderRadius: 16,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 4, fontSize: 15, fontWeight: 700 }}>{item.category}</h4>
                      <p style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: '4px 0 10px' }}>{item.cost}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    GOVERNMENT GRANTS
                    ═══════════════════════════════════════════ */}
                <h2 id="government-grants" className="reveal" style={sectionHeading}>
                  Government Grants &amp; R&amp;D Tax Incentives for Australian Tech Startups
                </h2>

                <p className="reveal">
                  One of Australia&apos;s most powerful advantages for tech founders is the government&apos;s R&amp;D Tax Incentive program. Many startups leave significant money on the table by not claiming what they are entitled to.
                </p>

                <h3 className="reveal" style={subHeading}>The R&amp;D Tax Incentive (RDTI)</h3>

                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.08) 0%, rgba(180,253,131,0.02) 100%)',
                  border: '1px solid rgba(180,253,131,0.2)',
                  borderRadius: 16, padding: '28px 32px', marginBottom: 32,
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginTop: 0 }}>
                    The RDTI is administered jointly by AusIndustry and the ATO. It provides a <strong style={whiteText}>tax offset on eligible R&amp;D expenditure</strong>&mdash;meaning real cash back on qualifying app development activities.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 24 }}>
                    {[
                      { label: 'Refundable offset (companies with <$20M aggregated turnover)', value: '43.5%' },
                      { label: 'Non-refundable offset (companies >$20M turnover)', value: '38.5%' },
                      { label: 'Minimum R&D spend to claim', value: '$20,000' },
                      { label: 'Registration deadline (annually)', value: '10 months after financial year end' },
                    ].map((item) => (
                      <div key={item.label} style={{
                        textAlign: 'center', padding: 16,
                        background: 'rgba(255,255,255,0.04)', borderRadius: 12,
                      }}>
                        <p style={{ fontSize: 24, fontWeight: 800, color: '#b4fd83', margin: '0 0 8px' }}>{item.value}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="reveal" style={subHeading}>What App Development Activities Qualify?</h3>

                <div className="reveal" style={{ margin: '0 0 32px' }}>
                  {[
                    { title: 'New algorithm or data processing logic', eligible: true },
                    { title: 'Novel API integrations or real-time data architecture', eligible: true },
                    { title: 'Machine learning model training and experimentation', eligible: true },
                    { title: 'Solving technical problems with no existing solution', eligible: true },
                    { title: 'Copying existing features or well-understood implementations', eligible: false },
                    { title: 'Standard business software configuration (e.g. off-shelf CRM setup)', eligible: false },
                    { title: 'Routine bug fixes and maintenance', eligible: false },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 14,
                      padding: '14px 0',
                      borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                        background: item.eligible ? 'rgba(180,253,131,0.15)' : 'rgba(255,100,100,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 12, color: item.eligible ? '#b4fd83' : '#ff6b6b', marginTop: 2,
                      }}>
                        {item.eligible ? '✓' : '✕'}
                      </span>
                      <p style={{ margin: 0, fontSize: 15, color: item.eligible ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="reveal" style={subHeading}>Other Grants to Know</h3>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '0 0 32px' }}>
                  {[
                    {
                      name: "Entrepreneurs' Programme",
                      amount: 'Up to $1M matched funding',
                      desc: 'Business growth funding for established businesses. Includes the Business Growth Stream and Accelerating Commercialisation grants.',
                    },
                    {
                      name: 'Export Market Development Grant (EMDG)',
                      amount: 'Up to $150K/year',
                      desc: 'For Australian companies expanding internationally. Software and SaaS products qualify if marketed to overseas customers.',
                    },
                    {
                      name: 'State Government Innovation Grants',
                      amount: '$10K – $500K (varies by state)',
                      desc: 'Each state runs its own programs: NSW Innovation Vouchers, Vic LaunchVic, QLD Advance Queensland, WA Innovate WA.',
                    },
                  ].map((item) => (
                    <div key={item.name} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 22, borderRadius: 14,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: '#b4fd83', fontSize: 14, fontWeight: 700, margin: '0 0 6px' }}>{item.name}</h4>
                      <p style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 10px' }}>{item.amount}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    COST BREAKDOWN
                    ═══════════════════════════════════════════ */}
                <h2 id="cost-breakdown" className="reveal" style={sectionHeading}>
                  Full Cost Breakdown: What Are You Actually Paying For?
                </h2>

                <p className="reveal">
                  Whether you hire locally or offshore, the cost structure of an app project follows a similar pattern. Here is how typical spend is allocated on an Australian market project:
                </p>

                <div className="reveal" style={{ margin: '24px 0 32px' }}>
                  {[
                    { phase: 'Discovery & Strategy', percent: '5–10%', desc: 'Requirements gathering, market research, technical architecture planning, UX wireframing, project scoping. Never skip this. It saves 3x its cost in avoided rework.' },
                    { phase: 'UI/UX Design', percent: '10–20%', desc: 'User research, journey mapping, high-fidelity Figma prototypes, design system creation, accessibility audit. Australian users expect polished design, especially for consumer apps.' },
                    { phase: 'Frontend Development', percent: '25–35%', desc: 'Building the actual app screens in Flutter, React Native, Swift, or Kotlin. Includes animations, state management, API integration, and device-specific testing.' },
                    { phase: 'Backend & APIs', percent: '20–30%', desc: 'Server-side logic, database design, API endpoints, third-party integrations (Xero, Afterpay, Medicare APIs), authentication, and business logic.' },
                    { phase: 'QA & Testing', percent: '10–15%', desc: 'Manual and automated testing across iOS/Android device matrix, security penetration testing, performance testing, accessibility compliance (WCAG 2.1).' },
                    { phase: 'Deployment & DevOps', percent: '5–10%', desc: 'CI/CD pipeline setup, App Store and Play Store submission, cloud infrastructure (AWS Sydney region), monitoring and alerting setup.' },
                    { phase: 'Post-Launch Support', percent: '15–25%/year', desc: 'Ongoing maintenance, OS update compatibility, security patches, minor enhancements, user feedback cycles. Budget this from day one or face technical debt.' },
                  ].map((item) => (
                    <div key={item.phase} style={{
                      display: 'flex', gap: 20, marginBottom: 20,
                      padding: '18px 22px',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: 14,
                      border: '1px solid rgba(255,255,255,0.04)',
                    }}>
                      <div style={{
                        minWidth: 64, fontSize: 14, fontWeight: 800, color: '#b4fd83',
                        background: 'rgba(180,253,131,0.08)', borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '8px 4px', flexShrink: 0, textAlign: 'center', lineHeight: 1.3,
                      }}>{item.percent}</div>
                      <div>
                        <h4 style={{ color: '#ffffff', margin: '0 0 6px', fontSize: 16 }}>{item.phase}</h4>
                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    HOW TO REDUCE COSTS
                    ═══════════════════════════════════════════ */}
                <h2 id="reduce-costs" className="reveal" style={sectionHeading}>
                  7 Ways Australian Founders Can Reduce App Development Costs
                </h2>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  {[
                    { num: '01', title: 'Claim your R&D Tax Incentive', desc: 'Register your R&D activities with AusIndustry before the deadline. A $200K AUD project could return $87K AUD in tax offsets if you qualify. Hire an R&D specialist to maximise your claim.' },
                    { num: '02', title: 'Use a hybrid AU + offshore model', desc: 'Keep your project manager and strategy in Australia. Move the engineering team to a reputable offshore partner. You maintain control and communication quality while cutting dev costs by 40–60%.' },
                    { num: '03', title: 'Build an MVP first', desc: 'Do not try to build the full product on day one. Ship the 3–5 features that validate your core value proposition. This can cut your initial budget by 50–60% and gives you real user data to guide decisions.' },
                    { num: '04', title: 'Use cross-platform development', desc: 'Flutter or React Native gives you one codebase for both iOS and Android. In Australia where both platforms have significant market share, this saves 30–40% vs building two native apps.' },
                    { num: '05', title: 'Leverage existing Australian APIs', desc: 'Use Stripe (payments), Twilio (SMS), Firebase (auth), and Australia-specific services like NPP APIs, Medicare PKI, and ASIC company lookups. Each integration you use reduces custom development cost.' },
                    { num: '06', title: 'Apply for state innovation grants', desc: 'Check LaunchVic (VIC), Advance Queensland (QLD), NSW Innovation Vouchers, and Innovate WA before committing to your full budget. These programs regularly offer $10K–$250K for qualifying tech projects.' },
                    { num: '07', title: 'Invest in proper discovery', desc: 'A $5K–$10K AUD discovery phase is the single best investment you can make. It prevents scope creep, misaligned expectations, and rework, which typically costs 3–5x more than preventing the problem upfront.' },
                  ].map((item) => (
                    <div key={item.num} style={{
                      display: 'flex', gap: 16, marginBottom: 20,
                      padding: '16px 20px',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.04)',
                    }}>
                      <span style={{
                        fontSize: 14, fontWeight: 800, color: '#b4fd83',
                        minWidth: 32, height: 32,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(180,253,131,0.1)', borderRadius: 8,
                        flexShrink: 0,
                      }}>{item.num}</span>
                      <div>
                        <h4 style={{ color: '#ffffff', margin: '0 0 4px', fontSize: 16 }}>{item.title}</h4>
                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    WHY CODAZZ
                    ═══════════════════════════════════════════ */}
                <h2 id="why-codazz" className="reveal" style={sectionHeading}>
                  Why Australian Startups Work With Codazz
                </h2>

                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.06) 0%, rgba(96,165,250,0.04) 100%)',
                  border: '1px solid rgba(180,253,131,0.15)',
                  borderRadius: 16, padding: '32px', marginBottom: 32,
                }}>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginTop: 0 }}>
                    Australian founders come to Codazz because we offer something local agencies cannot: <strong style={whiteText}>North American-grade project management and communication</strong> combined with the cost efficiency of a world-class engineering team in Chandigarh, India.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
                    The result is a product that meets Australian quality and compliance standards&mdash;at 40&ndash;60% of the cost of a comparable Sydney or Melbourne agency.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 24 }}>
                    {[
                      { metric: '500+', label: 'Apps Delivered' },
                      { metric: '10+', label: 'Years in Business' },
                      { metric: '40–60%', label: 'Savings vs AU Agencies' },
                      { metric: '4.9/5', label: 'Client Satisfaction' },
                    ].map((item) => (
                      <div key={item.label} style={{
                        textAlign: 'center', padding: 16,
                        background: 'rgba(255,255,255,0.04)', borderRadius: 12,
                      }}>
                        <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: '0 0 4px' }}>{item.metric}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 24 }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 12, fontSize: 17 }}>What we offer Australian clients:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>English-first communication</strong> &mdash; daily standups, weekly demos, Slack access, and detailed written reports. No language barriers.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Australian compliance expertise</strong> &mdash; we have built apps with Medicare integration, AFSL considerations, NDIS workflows, and Australian data residency requirements.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Transparent fixed-price contracts</strong> &mdash; no surprise invoices. Full spec and milestone-based payment schedules agreed upfront.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Full IP assignment</strong> &mdash; all source code, designs, and documentation transfer to you on final payment. We use standard IP assignment agreements.
                      </li>
                      <li style={{ marginBottom: 0, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Post-launch retainer plans</strong> &mdash; maintenance, updates, and feature additions on a predictable monthly retainer. No scrambling for a dev team after launch.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════
                    FAQ
                    ═══════════════════════════════════════════ */}
                <h2 id="faq" className="reveal" style={sectionHeading}>
                  Frequently Asked Questions
                </h2>

                <div className="reveal" style={{ margin: '24px 0 32px' }}>
                  {[
                    {
                      q: 'How much does a simple app cost to build in Australia in 2026?',
                      a: 'A simple MVP built by a local Australian agency typically costs $30,000–$80,000 AUD. If you use a reputable hybrid model (AU management + offshore engineering), you can build a comparable MVP for $15,000–$35,000 AUD. The difference comes down to hourly rates, not quality, if you choose your offshore partner carefully.',
                    },
                    {
                      q: 'Can I claim the R&D Tax Incentive on my app development costs?',
                      a: 'Possibly, but not automatically. The RDTI applies to activities that involve genuine experimental development, meaning solving a technical problem whose solution is not publicly known. Standard app builds using established frameworks generally do not qualify. However, novel algorithm development, ML model training, and genuinely experimental activities usually do. Always consult an R&D specialist before assuming you qualify.',
                    },
                    {
                      q: 'Is there an advantage to building locally vs offshore for Australian market apps?',
                      a: "The main local advantages are timezone alignment, cultural fit, easier face-to-face meetings, and access to Australian developer talent for highly regulated industries. For most consumer and B2B apps, these advantages don't justify paying 3–5x more. For highly regulated sectors like healthcare or fintech, a hybrid model with strong AU project management is usually the right balance.",
                    },
                    {
                      q: 'What is the cheapest Australian city to hire app developers?',
                      a: "Perth and Brisbane generally have the lowest rates among Australia's major tech hubs, with senior developers available from around $95–$185 AUD/hr compared to $120–$250 AUD/hr in Sydney. That said, the talent pool is smaller in Perth and Brisbane, so for specialised skills you may still need Sydney or Melbourne rates, or go offshore.",
                    },
                    {
                      q: 'How long does it take to build an app for the Australian market?',
                      a: 'Timeline depends on complexity, not location. A simple MVP takes 2–3 months. A medium-complexity app takes 4–6 months. Complex enterprise apps take 8–14+ months. Australian-specific integrations like Medicare, NPP payment rails, or My Health Record can add 4–8 weeks to a timeline if your development team is not already familiar with these systems.',
                    },
                  ].map((faq, i) => (
                    <div key={i} style={{
                      padding: '20px 0',
                      borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}>
                      <h4 style={{ color: '#ffffff', fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{faq.q}</h4>
                      <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>

                {/* ── BOTTOM CTA ── */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 28, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>
                    Building an App for the Australian Market?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a detailed, no-obligation cost estimate tailored to the Australian market within 48 hours. We understand AU compliance, local integrations, and how to maximise your R&amp;D tax benefit.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 24, fontSize: 14 }}>
                    500+ apps delivered &middot; Transparent pricing &middot; AU compliance expertise
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Get Your Free AU Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
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
                            color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Quick CTA */}
                  <div className="reveal" style={{
                    background: 'rgba(180,253,131,0.06)',
                    borderRadius: 16, padding: 24,
                    border: '1px solid rgba(180,253,131,0.15)', marginBottom: 24,
                    textAlign: 'center',
                  }}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>Need an AU cost estimate?</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Get a detailed quote for your Australian app project in 48 hours.</p>
                    <Link href="/contact" style={{
                      display: 'inline-block',
                      background: '#b4fd83', color: '#000',
                      padding: '10px 20px', borderRadius: 8,
                      fontWeight: 600, fontSize: 14,
                      textDecoration: 'none',
                    }}>
                      Free Estimate
                    </Link>
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
                          <span style={{ fontSize: 11, color: '#b4fd83', fontWeight: 600 }}>{post.category}</span>
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
