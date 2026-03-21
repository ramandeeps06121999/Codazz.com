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
  { id: 'market-rates', label: 'Canadian Market Rates', emoji: '💰' },
  { id: 'provinces', label: 'Province-by-Province Comparison', emoji: '🗺️' },
  { id: 'cost-by-type', label: 'Cost by App Type', emoji: '📱' },
  { id: 'local-vs-offshore', label: 'Local vs Offshore Teams', emoji: '🌍' },
  { id: 'cost-factors', label: 'Key Cost Factors', emoji: '⚙️' },
  { id: 'hidden-costs', label: 'Hidden & Ongoing Costs', emoji: '🔍' },
  { id: 'timelines', label: 'Timelines & Delivery', emoji: '📅' },
  { id: 'reduce-costs', label: 'How to Reduce Costs', emoji: '💡' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '18 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
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

export default function AppDevelopmentCostCanadaClient() {
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
              src="/blog_images/app-development-cost-canada.jpg"
              alt="App development team in Canada working on mobile applications"
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
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              App Development Cost in Canada 2026: Complete Pricing Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive breakdown of mobile and web app development costs across Canada in 2026. From Ontario to BC to Alberta, discover what Canadian firms charge, how they compare to offshore teams, and how to budget your project smartly.
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
                      <strong style={whiteText}>Canadian dev firms charge $80&ndash;$200/hr</strong>, roughly 1.5&ndash;2x lower than US agencies but 3&ndash;5x higher than pure offshore.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>Ontario leads in enterprise projects</strong>, BC dominates startup culture, and Alberta is catching up fast with oil-tech crossover demand.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>A Canadian-managed, offshore-built model</strong> delivers the best cost-to-quality ratio &mdash; exactly how Codazz operates.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>App costs in Canada range from CAD $20K to $600K+</strong> depending on complexity, team, and feature set.
                    </li>
                    <li style={{ marginBottom: 0, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>SR&ED tax credits can return 35&ndash;65%</strong> of eligible R&D development costs for Canadian businesses.
                    </li>
                  </ul>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 20 }}>
                    What does it actually cost to build an app in Canada in 2026?
                  </p>
                  <p>
                    As the CEO of Codazz &mdash; a software company headquartered in Edmonton, Alberta &mdash; I have spent the last decade pricing and delivering apps across Canada, from bootstrapped startups in Vancouver to enterprise platforms for Toronto-based financial institutions.
                  </p>
                  <p>
                    The honest answer is this: <strong style={whiteText}>Canadian app development is excellent quality</strong>, but the sticker price can shock founders who have only seen US or offshore quotes. There is a smarter path.
                  </p>
                  <p>
                    This guide breaks down exactly what you will pay in each Canadian province, how local rates compare to offshore alternatives, and where the hidden costs lurk. By the end, you will have everything you need to make an informed decision.
                  </p>
                </div>

                {/* ═══════════════════════════════════════════
                    CANADIAN MARKET RATES
                    ═══════════════════════════════════════════ */}
                <h2 id="market-rates" className="reveal" style={sectionHeading}>
                  Canadian App Development Market Rates (2026)
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Canadian hourly rates sit comfortably between premium US pricing and offshore rates. Here is the 2026 landscape across roles and seniority levels:
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Role</th>
                          <th style={thStyle}>Junior (CAD/hr)</th>
                          <th style={thStyle}>Mid-Level (CAD/hr)</th>
                          <th style={thStyle}>Senior (CAD/hr)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>iOS Developer</strong></td>
                          <td style={tdStyle}>$80 &ndash; $100</td>
                          <td style={tdStyle}>$110 &ndash; $150</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$160 &ndash; $200+</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Android Developer</strong></td>
                          <td style={tdStyle}>$75 &ndash; $95</td>
                          <td style={tdStyle}>$105 &ndash; $145</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$155 &ndash; $195+</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>React Native / Flutter</strong></td>
                          <td style={tdStyle}>$70 &ndash; $90</td>
                          <td style={tdStyle}>$100 &ndash; $140</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$150 &ndash; $190+</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Backend Developer</strong></td>
                          <td style={tdStyle}>$75 &ndash; $95</td>
                          <td style={tdStyle}>$100 &ndash; $145</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$150 &ndash; $195+</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>UI/UX Designer</strong></td>
                          <td style={tdStyle}>$65 &ndash; $85</td>
                          <td style={tdStyle}>$90 &ndash; $130</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$140 &ndash; $175+</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>Project Manager</strong></td>
                          <td style={tdStyle}>$70 &ndash; $90</td>
                          <td style={tdStyle}>$95 &ndash; $135</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$145 &ndash; $180+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <InsightBox title="Canadian vs Global Rates">
                  <p style={{ margin: 0 }}>
                    In USD terms, Canadian rates ($60&ndash;$150/hr) sit <strong style={whiteText}>20&ndash;30% below comparable US agencies</strong> but <strong style={whiteText}>3&ndash;5x above top Indian offshore firms</strong>. This makes Canada an attractive middle ground for US companies that want quality without full US agency pricing.
                  </p>
                </InsightBox>

                {/* ═══════════════════════════════════════════
                    PROVINCES COMPARISON
                    ═══════════════════════════════════════════ */}
                <h2 id="provinces" className="reveal" style={sectionHeading}>
                  Province-by-Province Cost Comparison
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  App development rates in Canada are not uniform. The tech scene, cost of living, and talent pool vary significantly by province. Here is how the major markets compare:
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32 }}>
                  {[
                    {
                      province: 'Ontario (Toronto)',
                      rate: 'CAD $110 &ndash; $200/hr',
                      color: '#22c55e',
                      strengths: ['Largest talent pool in Canada', 'Strong fintech & enterprise focus', 'Home to major Canadian banks & insurers', 'MaRS Discovery District ecosystem'],
                      watch: 'Highest cost province; downtown Toronto agencies command premium prices',
                    },
                    {
                      province: 'British Columbia (Vancouver)',
                      rate: 'CAD $100 &ndash; $185/hr',
                      color: '#60a5fa',
                      strengths: ['Thriving startup ecosystem', 'Strong gaming & AR/VR scene', 'Proximity to US tech giants', 'Large remote-work culture'],
                      watch: 'High cost of living drives senior developer salaries up',
                    },
                    {
                      province: 'Alberta (Edmonton & Calgary)',
                      rate: 'CAD $85 &ndash; $165/hr',
                      color: '#f59e0b',
                      strengths: ['No provincial sales tax advantage', 'Growing tech sector post-oil boom', 'Lower operating costs than ON/BC', 'Strong engineering university pipeline'],
                      watch: 'Smaller talent pool than ON/BC; may need remote hiring',
                    },
                    {
                      province: 'Quebec (Montreal)',
                      rate: 'CAD $80 &ndash; $155/hr',
                      color: '#a78bfa',
                      strengths: ['Significant government R&D subsidies', 'Strong AI research community (Mila)', 'Lower cost of living = lower rates', 'Vibrant game dev scene (Ubisoft hub)'],
                      watch: 'French language requirements for provincial contracts; bilingual teams cost more',
                    },
                  ].map((item) => (
                    <div key={item.province} className="reveal" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 28,
                      padding: 24,
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      <h4 style={{ color: item.color, fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{item.province}</h4>
                      <p style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', margin: '0 0 16px' }} dangerouslySetInnerHTML={{ __html: item.rate }} />
                      <ul style={{ paddingLeft: 16, margin: '0 0 16px' }}>
                        {item.strengths.map((s) => (
                          <li key={s} style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 6, lineHeight: 1.5 }}>{s}</li>
                        ))}
                      </ul>
                      <p style={{ fontSize: 12, color: 'rgba(255,165,0,0.8)', margin: 0, lineHeight: 1.5 }}>
                        <strong>Watch out:</strong> {item.watch}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    COST BY APP TYPE
                    ═══════════════════════════════════════════ */}
                <h2 id="cost-by-type" className="reveal" style={sectionHeading}>
                  App Development Cost by App Type (Canada 2026)
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Below are realistic project ranges based on Canadian hourly rates, assuming a mixed senior/mid-level team. All figures in CAD.
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>App Category</th>
                          <th style={thStyle}>Timeline</th>
                          <th style={thStyle}>Canadian Cost (CAD)</th>
                          <th style={thStyle}>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Simple MVP</strong></td>
                          <td style={tdStyle}>6&ndash;10 weeks</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$20K &ndash; $60K</td>
                          <td style={{ ...tdStyle, fontSize: 13 }}>Single platform, core features, basic admin</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>E-commerce App</strong></td>
                          <td style={tdStyle}>3&ndash;5 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$60K &ndash; $150K</td>
                          <td style={{ ...tdStyle, fontSize: 13 }}>Payments, product catalog, user accounts, push</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Fintech App</strong></td>
                          <td style={tdStyle}>5&ndash;9 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$120K &ndash; $300K</td>
                          <td style={{ ...tdStyle, fontSize: 13 }}>OSFI compliance, open banking, security layers</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Healthcare App</strong></td>
                          <td style={tdStyle}>6&ndash;12 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$150K &ndash; $400K</td>
                          <td style={{ ...tdStyle, fontSize: 13 }}>PIPEDA, provincial health data compliance</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>On-Demand / Marketplace</strong></td>
                          <td style={tdStyle}>4&ndash;7 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$80K &ndash; $200K</td>
                          <td style={{ ...tdStyle, fontSize: 13 }}>Dual-sided platform, real-time tracking, payments</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>Enterprise Platform</strong></td>
                          <td style={tdStyle}>9&ndash;18 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$250K &ndash; $600K+</td>
                          <td style={{ ...tdStyle, fontSize: 13 }}>Custom integrations, multi-user roles, analytics</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <InsightBox title="SR&ED Tax Credit Opportunity">
                  <p style={{ margin: 0 }}>
                    If you are a Canadian-controlled private corporation (CCPC) investing in app development that qualifies as R&D, you may be eligible for the <strong style={whiteText}>SR&ED (Scientific Research and Experimental Development)</strong> program. This can return <strong style={whiteText}>35&ndash;65% of qualifying expenditures</strong>. Work with a tax advisor to structure your project correctly before you start.
                  </p>
                </InsightBox>

                {/* ═══════════════════════════════════════════
                    LOCAL VS OFFSHORE
                    ═══════════════════════════════════════════ */}
                <h2 id="local-vs-offshore" className="reveal" style={sectionHeading}>
                  Canadian Dev Companies vs Offshore Teams: The Real Comparison
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  This is the most important decision you will make. Here is an honest side-by-side breakdown:
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 540 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Factor</th>
                          <th style={thStyle}>Canadian Firm (Local)</th>
                          <th style={thStyle}>Pure Offshore</th>
                          <th style={thStyle}>Hybrid Model</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Hourly Rate</strong></td>
                          <td style={tdStyle}>CAD $100 &ndash; $200</td>
                          <td style={tdStyle}>CAD $20 &ndash; $50</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>CAD $45 &ndash; $90</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Time Zone Alignment</strong></td>
                          <td style={tdStyle}>Perfect</td>
                          <td style={tdStyle}>12&ndash;13 hr gap</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>Managed overlap</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Communication</strong></td>
                          <td style={tdStyle}>Excellent</td>
                          <td style={tdStyle}>Variable</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>Excellent (CA-led)</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Code Quality</strong></td>
                          <td style={tdStyle}>Very High</td>
                          <td style={tdStyle}>Variable</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>Very High</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Canadian Compliance</strong></td>
                          <td style={tdStyle}>Strong</td>
                          <td style={tdStyle}>Requires oversight</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>Strong (CA oversight)</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={whiteText}>Cost Savings vs CA</strong></td>
                          <td style={tdStyle}>&mdash;</td>
                          <td style={tdStyle}>60&ndash;75% cheaper</td>
                          <td style={{ ...tdStyle, color: '#22c55e', fontWeight: 600 }}>40&ndash;55% cheaper</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="reveal">
                  The <strong style={whiteText}>hybrid model</strong> &mdash; a Canadian project manager and architect leading an offshore engineering team &mdash; consistently delivers the best outcome for cost-conscious Canadian businesses. You get local accountability, timezone-friendly communication, and engineering costs that are 40&ndash;55% lower than hiring a fully local team.
                </p>

                {/* ═══════════════════════════════════════════
                    KEY COST FACTORS
                    ═══════════════════════════════════════════ */}
                <h2 id="cost-factors" className="reveal" style={sectionHeading}>
                  Key Factors That Affect Your App Development Cost in Canada
                </h2>

                <h3 className="reveal" style={subHeading}>1. Feature Set &amp; Complexity</h3>
                <p className="reveal">
                  The single largest cost driver. A simple information app with static content might cost $20K&ndash;$30K, while a platform with real-time features, AI, and complex user roles can exceed $400K. Before you get a quote, create a prioritized feature list and separate &ldquo;must-have&rdquo; from &ldquo;nice-to-have&rdquo;.
                </p>

                <div className="reveal" style={{ ...tableContainerStyle, marginTop: 16 }}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 400 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Feature</th>
                          <th style={thStyle}>Canadian Cost (CAD)</th>
                          <th style={thStyle}>Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}>User auth &amp; profiles</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$3K &ndash; $9K</td>
                          <td style={tdStyle}><span style={{ color: '#22c55e' }}>Low</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}>Push notifications</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$2K &ndash; $6K</td>
                          <td style={tdStyle}><span style={{ color: '#22c55e' }}>Low</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}>In-app payments (Stripe)</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$6K &ndash; $18K</td>
                          <td style={tdStyle}><span style={{ color: '#f59e0b' }}>Medium</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}>Real-time chat / WebSockets</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$10K &ndash; $30K</td>
                          <td style={tdStyle}><span style={{ color: '#f59e0b' }}>Medium</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}>GPS / route tracking</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$8K &ndash; $22K</td>
                          <td style={tdStyle}><span style={{ color: '#f59e0b' }}>Medium</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}>AI / ML recommendations</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$28K &ndash; $80K</td>
                          <td style={tdStyle}><span style={{ color: '#ef4444' }}>High</span></td>
                        </tr>
                        <tr>
                          <td style={tdStyle}>Open banking / Interac integration</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$20K &ndash; $60K</td>
                          <td style={tdStyle}><span style={{ color: '#ef4444' }}>High</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h3 className="reveal" style={subHeading}>2. Platform Choice: iOS, Android, or Both</h3>
                <p className="reveal">
                  Building cross-platform with Flutter or React Native costs <strong style={whiteText}>30&ndash;40% less</strong> than building two separate native apps. For most Canadian startups and SMBs, cross-platform is the right choice. Native-only is justified when you need device-specific hardware access (camera APIs, ARKit, health sensors) or extremely high performance.
                </p>

                <h3 className="reveal" style={subHeading}>3. Canadian Regulatory Compliance</h3>
                <p className="reveal">
                  Compliance is a cost that catches many founders off guard. Canadian apps dealing with personal data must comply with <strong style={whiteText}>PIPEDA</strong> federally, with additional provincial requirements in Quebec (Law 25), BC, and Alberta. Healthcare apps must adhere to provincial Health Information Act standards. Each compliance layer adds $5,000&ndash;$30,000+ in architectural and legal review costs.
                </p>

                <h3 className="reveal" style={subHeading}>4. UI/UX Design Investment</h3>
                <p className="reveal">
                  Canadian design agencies tend to price premium work at $120&ndash;$175/hr. A thorough discovery and design phase typically runs 15&ndash;25% of total project budget. Cutting design costs is one of the biggest mistakes startups make &mdash; poor UX doubles your support costs post-launch.
                </p>

                <h3 className="reveal" style={subHeading}>5. Discovery Phase vs Jumping Straight to Dev</h3>
                <p className="reveal">
                  A proper discovery phase ($4,000&ndash;$12,000 CAD) maps out architecture, user flows, and technical requirements before a line of code is written. In our experience at Codazz, this investment saves <strong style={whiteText}>3&ndash;5x its cost</strong> in avoided rework and scope creep. Always budget for discovery.
                </p>

                {/* ═══════════════════════════════════════════
                    HIDDEN COSTS
                    ═══════════════════════════════════════════ */}
                <h2 id="hidden-costs" className="reveal" style={sectionHeading}>
                  Hidden &amp; Ongoing Costs Canadian Founders Miss
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  The build cost is only the beginning. Plan for these recurring expenses from day one:
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '0 0 32px' }}>
                  {[
                    { title: 'App Store Fees', cost: '$130 &ndash; $400 CAD/yr', desc: 'Apple Developer Program ($130 CAD/yr) + Google Play one-time fee. Apple takes 15&ndash;30% on in-app purchases.' },
                    { title: 'Cloud Hosting (AWS/GCP/Azure)', cost: '$70 &ndash; $7,000+ CAD/mo', desc: 'Scales with users. A launched app with 10K monthly users typically costs $300&ndash;$800 CAD/month to host reliably.' },
                    { title: 'Post-Launch Maintenance', cost: '15&ndash;25% of build/yr', desc: 'iOS/Android OS updates, bug fixes, security patches, and minor feature additions are ongoing non-negotiables.' },
                    { title: 'Third-Party APIs', cost: '$0 &ndash; $3,000+ CAD/mo', desc: 'Maps (Google Maps API), SMS (Twilio), analytics (Mixpanel), and email (SendGrid) costs mount quickly at scale.' },
                    { title: 'QA &amp; Security Testing', cost: '10&ndash;20% of build cost', desc: 'Cross-device testing, penetration testing for fintech/health apps, and accessibility (WCAG 2.1) audits.' },
                    { title: 'HST/GST on Services', cost: '5&ndash;15% depending on province', desc: 'If your vendor is Canadian, you will pay GST/HST on their invoices. Factor this into your total project cost.' },
                  ].map((item) => (
                    <div key={item.title} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: '#22c55e', marginBottom: 4, fontSize: 15 }}>{item.title}</h4>
                      <p style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: '4px 0 10px' }} dangerouslySetInnerHTML={{ __html: item.cost }} />
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    TIMELINES
                    ═══════════════════════════════════════════ */}
                <h2 id="timelines" className="reveal" style={sectionHeading}>
                  App Development Timelines: What to Expect in Canada
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Canadian firms are generally thorough &mdash; which means realistic timelines. Rushed projects lead to technical debt that costs far more to fix later. Here are typical timelines by project scale:
                </p>

                <div className="reveal" style={{ margin: '0 0 32px' }}>
                  {[
                    { phase: 'Discovery & Planning', duration: '1&ndash;3 weeks', desc: 'Requirements gathering, technical architecture, wireframes, project plan. Never skip this.' },
                    { phase: 'UI/UX Design', duration: '2&ndash;6 weeks', desc: 'Depends on complexity. Simple apps can use design systems; enterprise apps need full custom design.' },
                    { phase: 'Development (MVP)', duration: '4&ndash;8 weeks', desc: 'Core features only. Agile sprints with weekly demos. Scope discipline is critical here.' },
                    { phase: 'Development (Full App)', duration: '12&ndash;32 weeks', desc: 'Complete feature set, integrations, admin dashboards, and backend optimization.' },
                    { phase: 'QA & Testing', duration: '2&ndash;6 weeks', desc: 'Functional, performance, security, and device compatibility testing. More for regulated industries.' },
                    { phase: 'App Store Submission', duration: '1&ndash;3 weeks', desc: 'Apple review takes 1&ndash;3 days typically but can spike. Google Play is usually 3&ndash;7 days.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 20, marginBottom: 16,
                      padding: '18px 22px',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: 14,
                      border: '1px solid rgba(255,255,255,0.05)',
                      alignItems: 'flex-start',
                    }}>
                      <div style={{
                        minWidth: 36, height: 36, borderRadius: 10,
                        background: 'rgba(34,197,94,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 800, color: '#22c55e', flexShrink: 0,
                      }}>{i + 1}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 4 }}>
                          <h4 style={{ color: '#ffffff', margin: 0, fontSize: 16 }}>{item.phase}</h4>
                          <span style={{
                            fontSize: 12, fontWeight: 600, color: '#22c55e',
                            background: 'rgba(34,197,94,0.1)', padding: '2px 10px', borderRadius: 100,
                          }} dangerouslySetInnerHTML={{ __html: item.duration }} />
                        </div>
                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    REDUCE COSTS
                    ═══════════════════════════════════════════ */}
                <h2 id="reduce-costs" className="reveal" style={sectionHeading}>
                  8 Ways to Reduce App Development Costs in Canada
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  You do not need to compromise on quality to stay within budget. Here are the strategies we recommend to every Canadian client:
                </p>

                <div className="reveal" style={{ margin: '0 0 32px' }}>
                  {[
                    { num: '01', title: 'Build an MVP first', desc: 'Launch with 3&ndash;5 core features and validate market demand before spending on the full vision. MVP development costs 50&ndash;60% less than a full build.' },
                    { num: '02', title: 'Use cross-platform (Flutter or React Native)', desc: 'One codebase for iOS and Android. Saves 30&ndash;40% versus building two native apps. Both frameworks have matured significantly by 2026.' },
                    { num: '03', title: 'Explore the hybrid team model', desc: 'Canadian PM + offshore engineers. You get local accountability and communication quality while cutting engineering costs by 40&ndash;55%.' },
                    { num: '04', title: 'Apply for SR&ED tax credits', desc: 'If your project involves any novel technical problem-solving, you may qualify for federal R&D tax credits. Get a tax advisor involved early.' },
                    { num: '05', title: 'Use managed services and SaaS tooling', desc: 'Firebase for auth and notifications, Stripe for payments, Twilio for SMS. Do not rebuild what already exists reliably.' },
                    { num: '06', title: 'Invest in a proper discovery phase', desc: 'Spending $5K&ndash;$10K on planning prevents $30K&ndash;$80K in rework. The most experienced Canadian teams will not skip this step.' },
                    { num: '07', title: 'Fix scope aggressively', desc: 'Every feature added mid-project costs 2&ndash;3x what it would have cost if planned from the start. Lock the MVP scope before development begins.' },
                    { num: '08', title: 'Negotiate a maintenance retainer upfront', desc: 'Post-launch retainers priced before project start are significantly cheaper than emergency support contracts. Bundle it into your initial contract.' },
                  ].map((item) => (
                    <div key={item.num} style={{
                      display: 'flex', gap: 16, marginBottom: 16,
                      padding: '16px 20px',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.04)',
                    }}>
                      <span style={{
                        fontSize: 13, fontWeight: 800, color: '#22c55e',
                        minWidth: 32, height: 32,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(34,197,94,0.1)', borderRadius: 8,
                        flexShrink: 0,
                      }}>{item.num}</span>
                      <div>
                        <h4 style={{ color: '#ffffff', margin: '0 0 4px', fontSize: 16 }}>{item.title}</h4>
                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    WHY CODAZZ
                    ═══════════════════════════════════════════ */}
                <h2 id="why-codazz" className="reveal" style={sectionHeading}>
                  Why Canadian Businesses Choose Codazz
                </h2>

                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.07) 0%, rgba(96,165,250,0.04) 100%)',
                  border: '1px solid rgba(34,197,94,0.15)',
                  borderRadius: 28,
                  padding: '32px',
                  marginBottom: 32,
                }}>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginTop: 0 }}>
                    We are a <strong style={whiteText}>Canadian-headquartered software company</strong> based in Edmonton, Alberta. We understand Canadian compliance, Canadian business culture, and what it takes to build products that win in the Canadian market.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
                    Our engineering centre in Chandigarh, India gives us access to exceptional development talent at a fraction of Toronto agency rates. The result: <strong style={whiteText}>Canadian quality, without the Canadian price tag.</strong>
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24,
                  }}>
                    {[
                      { metric: '500+', label: 'Apps Delivered' },
                      { metric: '10+', label: 'Years in Business' },
                      { metric: '40&ndash;55%', label: 'Savings vs CA Agencies' },
                      { metric: '4.9/5', label: 'Client Satisfaction' },
                    ].map((item) => (
                      <div key={item.label} style={{
                        textAlign: 'center', padding: 16,
                        background: 'rgba(255,255,255,0.04)', borderRadius: 12,
                      }}>
                        <p style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', margin: '0 0 4px' }} dangerouslySetInnerHTML={{ __html: item.metric }} />
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 28 }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 12, fontSize: 17 }}>What makes Codazz the right Canadian partner:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Canadian oversight, global engineering</strong> &mdash; your project manager is in your timezone with accountability to Canadian business standards.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>PIPEDA and provincial compliance experience</strong> &mdash; we have built compliant fintech, healthcare, and data-sensitive applications for the Canadian market.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Transparent, fixed-price and T&amp;M contracts</strong> &mdash; you get a detailed scope and estimate before any work begins. No surprise invoices.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Full-stack capability</strong> &mdash; Flutter, React Native, Swift, Kotlin, Node.js, Python, AI/ML, AWS, and cloud architecture all under one roof.
                      </li>
                      <li style={{ marginBottom: 0, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Post-launch support included</strong> &mdash; every project includes a 30-day post-launch warranty and optional maintenance retainer.
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
                      q: 'What is the average cost to build an app in Canada in 2026?',
                      a: 'The average cost varies significantly by scope and team. A simple MVP built by a Canadian firm typically costs CAD $30,000&ndash;$70,000. A medium-complexity app with a full feature set runs CAD $100,000&ndash;$250,000. Enterprise platforms with regulatory compliance, integrations, and admin dashboards can exceed CAD $400,000. Choosing a hybrid Canadian-managed, offshore-built model can reduce these numbers by 40&ndash;55%.',
                    },
                    {
                      q: 'Is it cheaper to hire a Canadian app development company or go offshore?',
                      a: 'Pure offshore (India, Eastern Europe) is 60&ndash;75% cheaper than fully local Canadian firms. However, the hidden costs of misaligned timezones, communication gaps, and quality inconsistency often erode those savings. The optimal choice for most Canadian businesses is a hybrid model: a Canadian-based company that manages offshore engineering talent. This delivers 40&ndash;55% savings with Canadian communication standards.',
                    },
                    {
                      q: 'Which province in Canada has the cheapest app development rates?',
                      a: 'Quebec and Alberta generally offer lower rates than Ontario and British Columbia due to lower cost of living and smaller but growing talent markets. Quebec in particular has significant government R&D subsidies that benefit companies building tech in the province. Ontario (Toronto) commands the highest rates due to premium talent concentration.',
                    },
                    {
                      q: 'Can I claim SR&ED tax credits for app development in Canada?',
                      a: 'Potentially yes. The SR&ED (Scientific Research and Experimental Development) program provides federal tax credits of 15&ndash;35% on qualifying expenditures, and up to 65% for Canadian-controlled private corporations (CCPCs). The app development work must involve experimental development that resolves a technological uncertainty. Consult with a CPA familiar with SR&ED before structuring your project.',
                    },
                    {
                      q: 'How long does app development typically take in Canada?',
                      a: 'A well-scoped MVP takes 8&ndash;16 weeks from project kickoff to App Store submission. A medium-complexity app takes 4&ndash;7 months. Enterprise platforms often run 9&ndash;18 months. Canadian firms tend to be thorough with testing and compliance, which adds time but dramatically reduces post-launch issues. Rushed timelines almost always result in technical debt.',
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
                    Ready to Build Your App in Canada?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
                    Codazz is Canada&rsquo;s leading hybrid app development company. Get a detailed, no-obligation estimate within 48 hours &mdash; with transparent pricing and no surprises.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 28, fontSize: 14 }}>
                    Edmonton HQ &middot; Canadian PM &middot; 500+ apps delivered &middot; Free consultation
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '14px 32px', borderRadius: 10,
                    fontWeight: 700, textDecoration: 'none',
                    transition: 'transform 0.2s',
                    fontSize: 16,
                  }}>
                    Get Your Free Canadian Quote
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
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>Based in Canada?</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Get a CAD-priced estimate for your app project within 48 hours.</p>
                    <Link href="/contact" style={{
                      display: 'inline-block',
                      background: '#22c55e', color: '#000',
                      padding: '10px 22px', borderRadius: 8,
                      fontWeight: 700, fontSize: 14,
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
