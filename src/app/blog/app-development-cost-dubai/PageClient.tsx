'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

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
  { id: 'market-rates', label: 'Dubai Market Rates 2026', emoji: '💰' },
  { id: 'uae-ecosystem', label: 'UAE Tech Ecosystem', emoji: '🏙️' },
  { id: 'free-zones', label: 'Free Zones: DIFC & DSO', emoji: '🏛️' },
  { id: 'cost-by-category', label: 'Cost by App Category', emoji: '📱' },
  { id: 'local-vs-offshore', label: 'Local vs Offshore in UAE', emoji: '🌍' },
  { id: 'cost-factors', label: 'Key Cost Factors', emoji: '⚙️' },
  { id: 'hidden-costs', label: 'Hidden & Ongoing Costs', emoji: '🔍' },
  { id: 'why-india-canada', label: 'Why UAE Hires from India & Canada', emoji: '✈️' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '18 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development Guide 2026', category: 'AI', readTime: '16 min' },
];

/* ── Shared styles ── */
const tableWrapStyle: React.CSSProperties = {
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
  marginBottom: 0,
};
const tableContainerStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  borderRadius: 16,
  padding: 24,
  border: '1px solid rgba(255,255,255,0.06)',
  marginBottom: 32,
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
const greenText: React.CSSProperties = { color: '#22c55e', fontWeight: 600 };
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
  marginTop: 36,
  marginBottom: 16,
};

function InsightBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="reveal" style={{
      background: 'rgba(34,197,94,0.06)',
      borderLeft: '4px solid #22c55e',
      borderRadius: '0 12px 12px 0',
      padding: '20px 24px',
      margin: '32px 0',
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {title}
      </p>
      <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

export default function AppDevelopmentCostDubaiClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="/blog_images/app-development-cost-dubai.jpg"
              alt="Dubai skyline with technology and app development concept"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 28,
              }}
            />
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(40px, 8vw, 80px) 0 clamp(24px, 4vw, 48px)', position: 'relative', overflow: 'hidden' }}>
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
                background: 'rgba(34,197,94,0.15)', color: '#22c55e',
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
                15 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              App Development Cost in Dubai &amp; UAE 2026: Complete Pricing Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A data-driven breakdown of mobile and web app development costs in Dubai and the UAE in 2026. From DIFC fintech platforms to e-commerce apps for the Gulf market, discover what local firms charge, why so many UAE companies hire offshore, and how to build smarter.
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
                  background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#22c55e',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz &mdash; Edmonton, Canada</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
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

                {/* ── KEY TAKEAWAYS ── */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                  border: '1px solid rgba(34,197,94,0.25)',
                  borderRadius: 28,
                  padding: '28px 32px',
                  marginBottom: 48,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#22c55e', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Key Takeaways
                    </h3>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>Dubai-based dev firms charge $60&ndash;$180/hr</strong> depending on firm tier, seniority, and free zone vs mainland positioning.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>DIFC and Dubai Silicon Oasis house the majority</strong> of the UAE&rsquo;s enterprise and fintech development firms.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>80%+ of UAE app projects are developed offshore</strong> &mdash; primarily by teams in India &mdash; managed by UAE-based project leads.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>UAE Vision 2031 is driving massive government tech spend</strong>, creating demand for fintech, smart city, healthcare, and logistics apps.
                    </li>
                    <li style={{ marginBottom: 0, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>App costs in the UAE range from AED 55K ($15K USD) to AED 1.8M+ ($500K USD)</strong> for enterprise platforms.
                    </li>
                  </ul>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 20 }}>
                    Dubai is one of the world&rsquo;s fastest-growing technology markets. But how much does it actually cost to build a mobile or web app here in 2026?
                  </p>
                  <p>
                    The UAE tech ecosystem is unique: you have world-class ambition, government-backed digital transformation initiatives, and a thriving startup scene &mdash; all fuelled by a complex mix of local talent, expat developers, and significant offshore outsourcing.
                  </p>
                  <p>
                    Understanding this landscape is essential to budgeting your project accurately. Whether you are a UAE-based startup, a multinational entering the Gulf market, or a founder building an app for the MENA region, this guide gives you the real numbers.
                  </p>
                  <p>
                    At Codazz, we have worked with clients from Dubai, Abu Dhabi, and across the Gulf building everything from fintech wallets to real estate platforms. Here is what we have learned.
                  </p>
                </div>

                {/* ═══════════════════════════════════════════
                    DUBAI MARKET RATES
                    ═══════════════════════════════════════════ */}
                <h2 id="market-rates" className="reveal" style={sectionHeading}>
                  Dubai App Development Market Rates (2026)
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Dubai-based development firms span a wide range &mdash; from boutique local studios to branches of global system integrators. Here are the current hourly rates across roles and firm types:
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 580 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Role</th>
                          <th style={thStyle}>Boutique Studio</th>
                          <th style={thStyle}>Mid-Tier Firm</th>
                          <th style={thStyle}>Enterprise / DIFC</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>iOS Developer</strong></td>
                          <td style={tdStyle}>$60 &ndash; $85</td>
                          <td style={tdStyle}>$90 &ndash; $130</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$140 &ndash; $180+</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Android Developer</strong></td>
                          <td style={tdStyle}>$55 &ndash; $80</td>
                          <td style={tdStyle}>$85 &ndash; $125</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$135 &ndash; $175+</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Flutter / React Native</strong></td>
                          <td style={tdStyle}>$50 &ndash; $75</td>
                          <td style={tdStyle}>$80 &ndash; $120</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$130 &ndash; $165+</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Backend Developer</strong></td>
                          <td style={tdStyle}>$55 &ndash; $80</td>
                          <td style={tdStyle}>$85 &ndash; $125</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$130 &ndash; $170+</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>UI/UX Designer</strong></td>
                          <td style={tdStyle}>$45 &ndash; $70</td>
                          <td style={tdStyle}>$75 &ndash; $115</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$120 &ndash; $160+</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>Project Manager</strong></td>
                          <td style={tdStyle}>$50 &ndash; $75</td>
                          <td style={tdStyle}>$80 &ndash; $120</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$125 &ndash; $165+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <InsightBox title="The Reality Behind UAE Rates">
                  <p style={{ margin: 0 }}>
                    Many Dubai agencies displaying these rates are actually managing <strong style={whiteText}>offshore engineering teams in India</strong>. The Dubai office handles client relations and project management while the development happens elsewhere. This is not inherently bad &mdash; it is the dominant model. The key is whether the agency has strong quality control and experienced technical oversight.
                  </p>
                </InsightBox>

                {/* ═══════════════════════════════════════════
                    UAE TECH ECOSYSTEM
                    ═══════════════════════════════════════════ */}
                <h2 id="uae-ecosystem" className="reveal" style={sectionHeading}>
                  The UAE Tech Ecosystem in 2026
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  The UAE has positioned itself as the Middle East&rsquo;s leading technology hub, driven by aggressive government investment and a uniquely international business environment.
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                  {[
                    {
                      title: 'UAE Vision 2031',
                      icon: '🏗️',
                      color: '#22c55e',
                      desc: 'The government has committed billions to digital transformation across healthcare, transportation, government services, and education. This creates enormous demand for purpose-built applications across every vertical.',
                    },
                    {
                      title: 'Fintech Leadership',
                      icon: '💳',
                      color: '#60a5fa',
                      desc: 'The UAE hosts 700+ fintech companies. The DIFC Innovation Hub alone has 400+ tech firms. Digital payments, open banking via CBUAE, and crypto regulation are driving a fintech app boom across the region.',
                    },
                    {
                      title: 'E-Government Apps',
                      icon: '🏛️',
                      color: '#a78bfa',
                      desc: 'Dubai is consistently ranked among the world\'s top smart cities. Government-mandated digitization means every municipality, utility, and department requires citizen-facing mobile apps with Arabic localization.',
                    },
                    {
                      title: 'International Business Hub',
                      icon: '🌐',
                      color: '#f59e0b',
                      desc: 'With 0% personal income tax and 100% foreign ownership in free zones, Dubai attracts global companies building MENA-market apps. The resulting demand creates a vendor market from local boutiques to global SIs.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="reveal" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 28,
                      padding: 24,
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                      <h4 style={{ color: item.color, fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    FREE ZONES
                    ═══════════════════════════════════════════ */}
                <h2 id="free-zones" className="reveal" style={sectionHeading}>
                  Free Zones: DIFC, Dubai Silicon Oasis &amp; More
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  UAE free zones are a critical part of the tech landscape. They offer 100% foreign ownership, 0% corporate tax (within zone limits), and streamlined setup. Here is how the major free zones shape the tech scene:
                </p>

                <div className="reveal" style={{ margin: '0 0 32px' }}>
                  {[
                    {
                      zone: 'DIFC (Dubai International Financial Centre)',
                      color: '#22c55e',
                      type: 'Fintech & Enterprise',
                      rateImpact: 'Commands premium rates — DIFC firms typically charge 20–30% more than mainland equivalents',
                      strengths: [
                        'Dedicated fintech regulatory sandbox (FinTech Hive)',
                        'DFSA oversight for financial apps',
                        'Home to major banks, funds, and global fintech HQs',
                        'English common law jurisdiction — familiar legal framework',
                      ],
                      idealFor: 'Banking apps, payment platforms, investment tools, crypto apps',
                    },
                    {
                      zone: 'Dubai Silicon Oasis (DSO)',
                      color: '#60a5fa',
                      type: 'Tech Startups & Mid-Market',
                      rateImpact: 'More affordable than DIFC; attracts cost-conscious startups and SMBs',
                      strengths: [
                        'Technology park with residential and commercial integration',
                        'Lower overhead costs than downtown Dubai',
                        'Strong AI and IoT company cluster',
                        'Proximity to academic institutions (DEWA, HCT)',
                      ],
                      idealFor: 'IoT apps, SaaS platforms, AI applications, B2B tools',
                    },
                    {
                      zone: 'Abu Dhabi Global Market (ADGM)',
                      color: '#a78bfa',
                      type: 'Financial & Enterprise (Abu Dhabi)',
                      rateImpact: 'Comparable to DIFC for regulated financial applications',
                      strengths: [
                        'FSRA-regulated environment for financial apps',
                        'Growing fintech sandbox (ADGM Regulatory Laboratory)',
                        'Close proximity to UAE government decision-makers',
                        'Strong sovereign wealth fund and investment sector',
                      ],
                      idealFor: 'Wealth management, insurance, government digitization projects',
                    },
                    {
                      zone: 'Dubai Internet City (DIC)',
                      color: '#f59e0b',
                      type: 'Tech Multinationals',
                      rateImpact: 'Premium rates; home to major global tech company regional HQs',
                      strengths: [
                        'Microsoft, Google, Cisco, IBM regional offices',
                        'Strong networking and partnership ecosystem',
                        'Focus on enterprise tech and digital transformation',
                        'Access to global enterprise client base',
                      ],
                      idealFor: 'Enterprise software, cloud solutions, large-scale digital transformation',
                    },
                  ].map((zone) => (
                    <div key={zone.zone} className="reveal" style={{
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: 20,
                      padding: '24px 28px',
                      border: '1px solid rgba(255,255,255,0.06)',
                      marginBottom: 16,
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                        <h4 style={{ color: zone.color, fontSize: 17, fontWeight: 700, margin: 0 }}>{zone.zone}</h4>
                        <span style={{
                          fontSize: 12, fontWeight: 600, color: zone.color,
                          background: 'rgba(255,255,255,0.07)',
                          padding: '3px 12px', borderRadius: 100,
                        }}>{zone.type}</span>
                      </div>
                      <p style={{ fontSize: 13, color: 'rgba(255,165,0,0.85)', marginBottom: 12, fontStyle: 'italic' }}>
                        Rate impact: {zone.rateImpact}
                      </p>
                      <ul style={{ paddingLeft: 18, margin: '0 0 12px' }}>
                        {zone.strengths.map((s) => (
                          <li key={s} style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginBottom: 5, lineHeight: 1.5 }}>{s}</li>
                        ))}
                      </ul>
                      <p style={{ fontSize: 13, color: '#22c55e', margin: 0 }}>
                        <strong>Ideal for:</strong> {zone.idealFor}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    COST BY CATEGORY
                    ═══════════════════════════════════════════ */}
                <h2 id="cost-by-category" className="reveal" style={sectionHeading}>
                  App Development Cost by Category in the UAE (2026)
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Below are realistic project cost ranges for the most common app categories in the UAE market. All figures in USD; multiply by ~3.67 for AED equivalents.
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>App Category</th>
                          <th style={thStyle}>Timeline</th>
                          <th style={thStyle}>Dubai Local (USD)</th>
                          <th style={thStyle}>Hybrid Model (USD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>MVP / Proof of Concept</strong></td>
                          <td style={tdStyle}>6&ndash;10 weeks</td>
                          <td style={tdStyle}>$20K &ndash; $55K</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>$10K &ndash; $30K</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>E-commerce / Retail App</strong></td>
                          <td style={tdStyle}>3&ndash;5 months</td>
                          <td style={tdStyle}>$60K &ndash; $140K</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>$30K &ndash; $75K</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Fintech / Payments App</strong></td>
                          <td style={tdStyle}>5&ndash;10 months</td>
                          <td style={tdStyle}>$100K &ndash; $280K</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>$55K &ndash; $150K</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Real Estate Platform</strong></td>
                          <td style={tdStyle}>4&ndash;8 months</td>
                          <td style={tdStyle}>$70K &ndash; $180K</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>$35K &ndash; $95K</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Healthcare / Telehealth App</strong></td>
                          <td style={tdStyle}>6&ndash;12 months</td>
                          <td style={tdStyle}>$120K &ndash; $350K</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>$60K &ndash; $190K</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>On-Demand / Delivery App</strong></td>
                          <td style={tdStyle}>4&ndash;7 months</td>
                          <td style={tdStyle}>$80K &ndash; $200K</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>$40K &ndash; $110K</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>Government / Smart City App</strong></td>
                          <td style={tdStyle}>8&ndash;18 months</td>
                          <td style={tdStyle}>$200K &ndash; $500K+</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>$100K &ndash; $280K</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <InsightBox title="Arabic Localization Cost">
                  <p style={{ margin: 0 }}>
                    Building an app for the UAE market requires full <strong style={whiteText}>Arabic (RTL) localization</strong>. Right-to-left layout support, Arabic typography, bilingual content management, and cultural UX considerations typically add <strong style={whiteText}>$8,000&ndash;$25,000</strong> to a project budget. Government and public-facing apps may require official Arabic translation certification.
                  </p>
                </InsightBox>

                {/* ═══════════════════════════════════════════
                    LOCAL VS OFFSHORE
                    ═══════════════════════════════════════════ */}
                <h2 id="local-vs-offshore" className="reveal" style={sectionHeading}>
                  Local Dubai Firms vs Offshore Teams: The UAE Reality
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  The UAE is not a typical market when it comes to development sourcing. Here is the honest picture:
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 540 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Factor</th>
                          <th style={thStyle}>Dubai-Based Firm</th>
                          <th style={thStyle}>Direct Offshore</th>
                          <th style={thStyle}>Dubai-Managed Hybrid</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Hourly Rate</strong></td>
                          <td style={tdStyle}>$60 &ndash; $180</td>
                          <td style={tdStyle}>$15 &ndash; $45</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>$30 &ndash; $80</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Actual Engineers</strong></td>
                          <td style={tdStyle}>Often offshore anyway</td>
                          <td style={tdStyle}>Offshore</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>Offshore (well-managed)</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Face-to-Face Meetings</strong></td>
                          <td style={tdStyle}>Yes</td>
                          <td style={tdStyle}>No</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>Periodic</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>MENA Market Knowledge</strong></td>
                          <td style={tdStyle}>Strong</td>
                          <td style={tdStyle}>Weak</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>Moderate&ndash;Strong</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Arabic Localization</strong></td>
                          <td style={tdStyle}>Available</td>
                          <td style={tdStyle}>Additional cost</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>Available</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={whiteText}>Cost vs Local (USD)</strong></td>
                          <td style={tdStyle}>&mdash;</td>
                          <td style={tdStyle}>70&ndash;80% cheaper</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>45&ndash;65% cheaper</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="reveal">
                  The dominant reality of Dubai&rsquo;s app development industry is that <strong style={whiteText}>the majority of code is written offshore</strong> regardless of where you hire. The question is whether that offshore delivery is managed with rigorous quality standards or not.
                </p>

                {/* ═══════════════════════════════════════════
                    KEY COST FACTORS
                    ═══════════════════════════════════════════ */}
                <h2 id="cost-factors" className="reveal" style={sectionHeading}>
                  Key Factors Affecting App Development Cost in Dubai
                </h2>

                <h3 className="reveal" style={subHeading}>1. UAE Regulatory Compliance</h3>
                <p className="reveal">
                  The UAE has specific data and financial regulations that directly impact development cost. <strong style={whiteText}>PDPL (Personal Data Protection Law)</strong>, enacted in 2022, is the UAE&rsquo;s equivalent of GDPR. Financial apps operating in DIFC must comply with <strong style={whiteText}>DFSA regulations</strong>. Healthcare apps must adhere to <strong style={whiteText}>HAAD / DHA</strong> standards in Abu Dhabi and Dubai respectively. Each compliance layer adds $10,000&ndash;$40,000 in architecture, legal review, and testing costs.
                </p>

                <h3 className="reveal" style={subHeading}>2. Arabic RTL Support &amp; Localization</h3>
                <p className="reveal">
                  Any app targeting UAE residents needs full Arabic language support. This is not a simple translation &mdash; it requires right-to-left UI layouts, Arabic numeral handling, Arabic font rendering, bilingual content management systems, and culturally appropriate design choices. Budget $8,000&ndash;$25,000 depending on scope.
                </p>

                <h3 className="reveal" style={subHeading}>3. Payment Gateway Integration</h3>
                <p className="reveal">
                  UAE payment integration is more complex than US or European markets. Popular gateways include <strong style={whiteText}>PayTabs, Telr, Network International, Checkout.com, and Stripe</strong> (available in UAE since 2023). If you need to accept payments from across the GCC, you may need multi-gateway support. Each integration adds $5,000&ndash;$18,000.
                </p>

                <h3 className="reveal" style={subHeading}>4. Cross-Platform vs Native</h3>
                <p className="reveal">
                  Flutter and React Native are the dominant choices for UAE startups in 2026. They save 30&ndash;40% versus building separate iOS and Android apps. Native development is reserved for apps needing deep hardware integration (biometric auth for banking, camera-based KYC verification) or extreme performance requirements.
                </p>

                <h3 className="reveal" style={subHeading}>5. VAT &amp; Business Setup Costs</h3>
                <p className="reveal">
                  The UAE introduced a 5% VAT in 2018. When working with UAE-registered suppliers, your invoices will include 5% VAT on services. Free zone companies dealing with mainland clients may have additional tax considerations. Factor VAT into your total project budget, especially for contracts over AED 100K.
                </p>

                <h3 className="reveal" style={subHeading}>6. GCC Market Expansion</h3>
                <p className="reveal">
                  If you plan to expand beyond the UAE to Saudi Arabia, Qatar, Kuwait, or Bahrain, each market adds localization and regulatory overhead. Saudi Arabia in particular has its own data residency requirements under <strong style={whiteText}>PDPL-KSA</strong>, and government app standards differ significantly from UAE. Multi-GCC apps typically cost 40&ndash;80% more than UAE-only builds.
                </p>

                {/* ═══════════════════════════════════════════
                    HIDDEN COSTS
                    ═══════════════════════════════════════════ */}
                <h2 id="hidden-costs" className="reveal" style={sectionHeading}>
                  Hidden &amp; Ongoing Costs in the UAE
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Beyond the development cost, these ongoing expenses catch UAE founders off guard:
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '0 0 32px' }}>
                  {[
                    { title: 'App Store Fees', cost: '$99 – $299 USD/yr', desc: 'Apple Developer Program + Google Play. Apple collects 15–30% commission on in-app purchases globally, including UAE.' },
                    { title: 'Cloud Hosting', cost: '$50 – $6,000+ USD/mo', desc: 'AWS Middle East (Bahrain) region for low latency UAE hosting. Azure and GCP also have UAE availability zones. Data residency may require UAE-region hosting.' },
                    { title: 'Content Moderation', cost: 'Variable', desc: 'UAE content must comply with TRA guidelines. Apps with user-generated content may need local content moderation to stay compliant.' },
                    { title: 'Post-Launch Maintenance', cost: '15–25% of build cost/yr', desc: 'OS updates, bug fixes, security patches. UAE Android market has specific device fragmentation from Samsung, Huawei (GMS-free), and others.' },
                    { title: 'Third-Party APIs', cost: '$0 – $3,000+ USD/mo', desc: 'Maps (Google or regional alternatives), OTP via SMS, analytics. Twilio and Vonage work well in UAE for communications APIs.' },
                    { title: 'Free Zone Annual Renewal', cost: 'AED 10K – AED 50K+/yr', desc: 'If you set up a free zone company to manage your tech operations, expect annual license renewal costs on top of your development budget.' },
                  ].map((item) => (
                    <div key={item.title} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: '#22c55e', marginBottom: 4, fontSize: 15 }}>{item.title}</h4>
                      <p style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: '4px 0 10px' }}>{item.cost}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    WHY UAE HIRES FROM INDIA & CANADA
                    ═══════════════════════════════════════════ */}
                <h2 id="why-india-canada" className="reveal" style={sectionHeading}>
                  Why UAE Companies Hire Development Teams from India &amp; Canada
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  This is one of the most commonly asked questions from UAE founders. The answer comes down to four compounding factors:
                </p>

                <div className="reveal" style={{ margin: '0 0 32px' }}>
                  {[
                    {
                      num: '01',
                      title: 'Dramatic Cost Arbitrage',
                      desc: 'A senior Flutter developer in Dubai earns AED 25,000–45,000/month in salary. The equivalent talent in India earns $1,500–$3,000 USD/month. For a 5-person team, this difference saves $15,000–$25,000 USD per month — enough to fund an entire marketing budget.',
                    },
                    {
                      num: '02',
                      title: 'Depth of Engineering Talent',
                      desc: 'India produces 1.5 million engineering graduates annually. The depth of specialist talent — particularly in mobile development, AI/ML, and fintech engineering — exceeds what is locally available in the UAE. Canada\'s tech ecosystem produces world-class full-stack and AI engineers who often manage these offshore teams with Western-standard accountability.',
                    },
                    {
                      num: '03',
                      title: 'Established Outsourcing Infrastructure',
                      desc: 'India has decades of IT outsourcing experience with the UAE. There are established legal frameworks, minimal timezone difference (India is 1.5–2.5 hours ahead of UAE), and cultural familiarity. A significant portion of Dubai\'s expat tech workforce is of Indian origin, making communication seamless and trust easier to establish.',
                    },
                    {
                      num: '04',
                      title: 'Quality Management via Western Oversight',
                      desc: 'Canadian and UK-based agencies often serve as quality guarantors for UAE clients working with offshore teams. They bring project management discipline, Western communication standards, and accountability frameworks that make offshore development predictable and on-budget. This hybrid approach is now the dominant model for sophisticated UAE tech buyers.',
                    },
                  ].map((item) => (
                    <div key={item.num} style={{
                      display: 'flex', gap: 16, marginBottom: 16,
                      padding: '20px 24px',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: 14,
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <span style={{
                        fontSize: 13, fontWeight: 800, color: '#22c55e',
                        minWidth: 36, height: 36,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(34,197,94,0.1)', borderRadius: 8,
                        flexShrink: 0,
                      }}>{item.num}</span>
                      <div>
                        <h4 style={{ color: '#ffffff', margin: '0 0 6px', fontSize: 16 }}>{item.title}</h4>
                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <InsightBox title="The Smart UAE Buyer&rsquo;s Approach">
                  <p style={{ margin: 0 }}>
                    The most savvy UAE tech buyers in 2026 hire a <strong style={whiteText}>Western-managed development partner with offshore delivery</strong>. They get a project manager who understands both the UAE market requirements and holds offshore teams to rigorous quality standards &mdash; at 40&ndash;60% less than a fully local Dubai agency.
                  </p>
                </InsightBox>

                {/* ═══════════════════════════════════════════
                    WHY CODAZZ
                    ═══════════════════════════════════════════ */}
                <h2 id="why-codazz" className="reveal" style={sectionHeading}>
                  Why UAE &amp; Gulf Businesses Choose Codazz
                </h2>

                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.07) 0%, rgba(96,165,250,0.04) 100%)',
                  border: '1px solid rgba(34,197,94,0.15)',
                  borderRadius: 28,
                  padding: '32px',
                  marginBottom: 32,
                }}>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginTop: 0 }}>
                    Codazz is a Canadian-headquartered software company with an engineering centre in India. For UAE clients, we represent exactly the model that smart Gulf buyers are looking for: <strong style={whiteText}>Western-standard project management, Canadian-quality oversight, and world-class engineering at offshore price points.</strong>
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
                    We have built fintech apps, e-commerce platforms, and enterprise tools for clients targeting the MENA market. We understand Arabic localization, UAE payment integrations, and the compliance requirements of DIFC and mainland UAE business environments.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24,
                  }}>
                    {[
                      { metric: '500+', label: 'Apps Delivered' },
                      { metric: '10+', label: 'Years Experience' },
                      { metric: '40–65%', label: 'Savings vs Dubai Agencies' },
                      { metric: '4.9/5', label: 'Client Satisfaction' },
                    ].map((item) => (
                      <div key={item.label} style={{
                        textAlign: 'center', padding: 16,
                        background: 'rgba(255,255,255,0.04)', borderRadius: 12,
                      }}>
                        <p style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', margin: '0 0 4px' }}>{item.metric}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 28 }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 12, fontSize: 17 }}>What UAE clients get with Codazz:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Canadian-standard project management</strong> &mdash; clear communication, documented processes, weekly demos, and real accountability.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>UAE compliance support</strong> &mdash; PDPL-compliant data architecture, payment gateway integrations (PayTabs, Telr, Network International), and Arabic localization experience.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Full-stack engineering depth</strong> &mdash; Flutter, React Native, Swift, Kotlin, Node.js, Python, AI/ML, and cloud architecture with AWS Middle East region expertise.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Transparent fixed-price and T&amp;M contracts</strong> &mdash; you receive detailed scope documents and cost breakdowns before a single line of code is written.
                      </li>
                      <li style={{ marginBottom: 0, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Post-launch maintenance included</strong> &mdash; every engagement includes a 30-day post-launch warranty and optional ongoing support retainer.
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
                      q: 'How much does it cost to build an app in Dubai in 2026?',
                      a: 'App development costs in Dubai range from approximately $20,000 USD (AED 73,000) for a simple single-platform MVP to $500,000+ USD (AED 1.8M+) for a complex enterprise platform with full compliance. Most mid-market apps — e-commerce, marketplace, fintech MVP — fall in the $60,000–$200,000 range when built by a local Dubai firm. Hybrid offshore-managed models can deliver the same quality for 40–65% less.',
                    },
                    {
                      q: 'Is it better to hire a Dubai dev company or go offshore from the UAE?',
                      a: 'It depends on your needs. If you require in-person meetings, strong MENA market knowledge, and local relationships, a Dubai-based firm adds value. However, many Dubai agencies already use offshore engineering teams. The optimal approach for most UAE businesses is a hybrid: hire a company with strong project management and quality control that delivers via experienced offshore engineers. This saves 40–65% versus a fully local build.',
                    },
                    {
                      q: 'Do I need to add Arabic localization to my app for the UAE market?',
                      a: 'For consumer-facing apps in the UAE, Arabic (RTL) support is strongly recommended and often legally required for government or regulated financial applications. Arabic localization typically adds $8,000–$25,000 to a project budget, covering UI layout changes, Arabic typography, bilingual content management, and cultural UX considerations. Plan for this from day one — retrofitting RTL to an existing app is significantly more expensive.',
                    },
                    {
                      q: 'What UAE regulations affect mobile app development?',
                      a: 'Key regulatory frameworks include: PDPL (Personal Data Protection Law) for all apps handling UAE user data; DFSA regulations for apps operating within DIFC; DHA and HAAD standards for healthcare apps in Dubai and Abu Dhabi; CBUAE regulations for payment and fintech applications; and TRA guidelines for communication apps. Each framework adds compliance architecture costs ranging from $5,000 to $40,000+.',
                    },
                    {
                      q: 'Why do so many Dubai companies hire Indian development teams?',
                      a: 'Cost arbitrage is the primary driver: a senior mobile developer costs $1,500–$3,000 USD/month in India versus $6,000–$10,000 USD/month equivalent in Dubai. Beyond cost, India has an unmatched depth of engineering talent (1.5 million graduates annually), minimal timezone difference (1.5–2.5 hours ahead of UAE), established cultural and business ties with the UAE, and decades of IT outsourcing experience. The key to success is choosing an Indian team managed by experienced Western or locally-based project leadership.',
                    },
                  ].map((faq, i) => (
                    <div key={i} style={{
                      borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{
                          width: '100%', textAlign: 'left', background: 'none', border: 'none',
                          cursor: 'pointer', padding: '20px 0', display: 'flex', justifyContent: 'space-between',
                          alignItems: 'flex-start', gap: 16,
                        }}
                      >
                        <h4 style={{ color: '#ffffff', fontSize: 17, fontWeight: 600, margin: 0, lineHeight: 1.4 }}>{faq.q}</h4>
                        <svg
                          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"
                          style={{ flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        >
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </button>
                      {openFaq === i && (
                        <p style={{ margin: '0 0 20px', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{faq.a}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* ── BOTTOM CTA ── */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 28, padding: 40, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>
                    Building an App for the UAE Market?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
                    Codazz delivers UAE-market-ready apps with Arabic localization, local payment integrations, and PDPL-compliant architecture &mdash; at 40&ndash;65% below Dubai agency rates.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 28, fontSize: 14 }}>
                    500+ apps delivered &middot; Canadian PM standards &middot; UAE compliance expertise &middot; Free consultation
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '14px 32px', borderRadius: 10,
                    fontWeight: 700, textDecoration: 'none',
                    transition: 'transform 0.2s',
                    fontSize: 16,
                  }}>
                    Get a Free UAE Project Quote
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
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '7px 0', fontSize: 13,
                            color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.55)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
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
                    background: 'rgba(34,197,94,0.06)',
                    borderRadius: 16, padding: 24,
                    border: '1px solid rgba(34,197,94,0.15)', marginBottom: 24,
                    textAlign: 'center',
                  }}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>Building for the UAE?</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Get a USD/AED project estimate within 48 hours. Arabic localization included in scoping.</p>
                    <Link href="/contact" style={{
                      display: 'inline-block',
                      background: '#22c55e', color: '#000',
                      padding: '10px 22px', borderRadius: 8,
                      fontWeight: 700, fontSize: 14,
                      textDecoration: 'none',
                    }}>
                      Free UAE Estimate
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 14,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', margin: '6px 0', lineHeight: 1.4 }}>{post.title}</h4>
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
