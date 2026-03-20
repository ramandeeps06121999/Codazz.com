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
  { id: 'quick-overview', label: 'Quick Cost Overview', emoji: '💰' },
  { id: 'factors', label: 'What Drives App Costs', emoji: '⚙️' },
  { id: 'complexity-breakdown', label: 'Cost by Complexity', emoji: '📊' },
  { id: 'platforms', label: 'iOS vs Android vs Both', emoji: '📱' },
  { id: 'region-costs', label: 'Cost by Region', emoji: '🌍' },
  { id: 'design', label: 'Design Complexity', emoji: '🎨' },
  { id: 'backend', label: 'Backend & Infrastructure', emoji: '☁️' },
  { id: 'hidden-costs', label: 'Hidden Costs', emoji: '🔍' },
  { id: 'reduce-costs', label: 'How to Reduce Costs', emoji: '💡' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
];

/* ── Shared styles ── */
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

/* Budget tip callout */
function BudgetTip({ title, children }: { title: string; children: React.ReactNode }) {
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

export default function AppDevelopmentCost2026Client() {
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

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=675&fit=crop"
              alt="App development team working collaboratively in office"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 8, textAlign: 'center' }}>
              Photo by <a href="https://unsplash.com/@marvelous" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Marvin Meyer</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
            </p>
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 18, 2026</span>
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
                18 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              How Much Does App Development Cost in 2026? The Complete Pricing Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A transparent, data-driven breakdown of mobile app development costs in 2026. From simple MVPs at $15K to enterprise platforms at $500K+, here is what you should actually expect to pay.
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
                      <strong style={whiteText}>App costs in 2026 range from $15K to $500K+</strong> depending on complexity, platform, and team location.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>Cross-platform frameworks (Flutter, React Native) save 30-40%</strong> compared to building separate native apps.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>AI features are the fastest-growing cost factor,</strong> adding $20K-$60K+ to most project budgets in 2026.
                    </li>
                    <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>Hidden costs (maintenance, hosting, updates) add 15-25% annually</strong> on top of initial build costs.
                    </li>
                    <li style={{ marginBottom: 0, color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>
                      <strong style={whiteText}>Starting with an MVP can cut your initial investment by 60%</strong> while still validating your business model.
                    </li>
                  </ul>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    &ldquo;How much will my app cost?&rdquo;
                  </p>
                  <p>
                    I have heard this question over 500 times in my 10+ years running Codazz. And after delivering 500+ apps across fintech, healthcare, e-commerce, and AI, I can tell you this:
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    The answer isn&apos;t simple&mdash;but it is predictable.
                  </p>
                  <p>
                    In 2026, app development costs range from <strong style={whiteText}>$15,000 for a simple MVP</strong> to <strong style={whiteText}>$500,000+ for a complex enterprise platform</strong>. But where your project falls depends on specific, measurable factors.
                  </p>
                  <p>
                    This guide breaks down exactly what you&apos;ll pay, why you&apos;ll pay it, and how to budget smartly without sacrificing quality.
                  </p>
                </div>

                {/* ═══════════════════════════════════════════
                    QUICK OVERVIEW
                    ═══════════════════════════════════════════ */}
                <h2 id="quick-overview" className="reveal" style={sectionHeading}>
                  Quick Cost Overview (2026 Market Rates)
                </h2>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>App Type</th>
                          <th style={thStyle}>Timeline</th>
                          <th style={thStyle}>Cost Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Simple MVP</strong></td>
                          <td style={tdStyle}>1&ndash;2 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$15,000 &ndash; $50,000</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Medium App</strong></td>
                          <td style={tdStyle}>3&ndash;5 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$50,000 &ndash; $150,000</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Complex App</strong></td>
                          <td style={tdStyle}>6&ndash;9 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$150,000 &ndash; $300,000</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>Enterprise</strong></td>
                          <td style={tdStyle}>9&ndash;12+ months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$300,000 &ndash; $500,000+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <BudgetTip title="Budget Planning Tip">
                  <p style={{ margin: 0 }}>
                    Always add a <strong style={whiteText}>15&ndash;20% contingency buffer</strong> to your app budget. Scope changes, unexpected integrations, and third-party API costs almost always add up. A well-planned buffer prevents stalled projects.
                  </p>
                </BudgetTip>

                {/* ═══════════════════════════════════════════
                    COST DRIVERS
                    ═══════════════════════════════════════════ */}
                <h2 id="factors" className="reveal" style={sectionHeading}>
                  What Really Drives App Development Costs?
                </h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop"
                    alt="Business planning with calculator and financial documents"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@homajob" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Scott Graham</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  App costs are not random. They are driven by five measurable factors. Understanding each one gives you more control over your budget and timeline.
                </p>

                <h3 className="reveal" style={subHeading}>
                  1. Feature Complexity (The Biggest Factor)
                </h3>
                <p className="reveal">
                  Not all features are created equal. A login screen and a real-time AI recommendation engine are worlds apart. Here is what common features actually cost to build in 2026:
                </p>
                <div className="reveal" style={{ ...tableContainerStyle, marginTop: 16 }}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 420 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Feature</th>
                          <th style={thStyle}>Cost Range</th>
                          <th style={thStyle}>Complexity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>User registration / login</strong></td>
                          <td style={tdStyle}>$2,000 &ndash; $6,000</td>
                          <td style={tdStyle}><span style={{ color: '#b4fd83' }}>Low</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Push notifications</strong></td>
                          <td style={tdStyle}>$1,500 &ndash; $4,500</td>
                          <td style={tdStyle}><span style={{ color: '#b4fd83' }}>Low</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>In-app payments</strong></td>
                          <td style={tdStyle}>$4,000 &ndash; $12,000</td>
                          <td style={tdStyle}><span style={{ color: '#f59e0b' }}>Medium</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>Real-time chat</strong></td>
                          <td style={tdStyle}>$8,000 &ndash; $22,500</td>
                          <td style={tdStyle}><span style={{ color: '#f59e0b' }}>Medium</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>GPS / Maps integration</strong></td>
                          <td style={tdStyle}>$5,000 &ndash; $15,000</td>
                          <td style={tdStyle}><span style={{ color: '#f59e0b' }}>Medium</span></td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={whiteText}>AI recommendation engine</strong></td>
                          <td style={tdStyle}>$20,000 &ndash; $60,000</td>
                          <td style={tdStyle}><span style={{ color: '#ef4444' }}>High</span></td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={whiteText}>AR / VR features</strong></td>
                          <td style={tdStyle}>$25,000 &ndash; $80,000</td>
                          <td style={tdStyle}><span style={{ color: '#ef4444' }}>High</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h3 className="reveal" style={subHeading}>
                  2. UI/UX Design Quality
                </h3>
                <p className="reveal">
                  Design can account for <strong style={whiteText}>10&ndash;25%</strong> of your total budget. A basic template-based UI costs a fraction of a custom, animation-rich interface. Here is the spectrum:
                </p>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={whiteText}>Template / basic UI:</strong> $2,000 &ndash; $8,000</li>
                    <li style={{ marginBottom: 12 }}><strong style={whiteText}>Custom design:</strong> $8,000 &ndash; $25,000</li>
                    <li style={{ marginBottom: 12 }}><strong style={whiteText}>Premium with micro-interactions:</strong> $25,000 &ndash; $60,000+</li>
                  </ul>
                </div>

                <h3 className="reveal" style={subHeading}>
                  3. Backend Infrastructure
                </h3>
                <p className="reveal">
                  The &ldquo;invisible&rdquo; half of your app often costs just as much as the visible half. APIs, databases, server architecture, and security layers all add up. A simple backend with a managed database might run $8,000&ndash;$20,000, while a microservices architecture with auto-scaling can easily hit $50,000&ndash;$120,000.
                </p>

                <h3 className="reveal" style={subHeading}>
                  4. Third-Party Integrations
                </h3>
                <p className="reveal">
                  Payment gateways (Stripe, PayPal), analytics (Mixpanel), CRM systems (Salesforce), social logins, and map services each add $2,000&ndash;$15,000 depending on complexity. The more integrations, the higher the testing and maintenance overhead.
                </p>

                <h3 className="reveal" style={subHeading}>
                  5. Team Location &amp; Structure
                </h3>
                <p className="reveal">
                  Where your development team is based dramatically affects cost. This single factor can create a 3&ndash;5x difference in project price for identical scope.
                </p>

                {/* ═══════════════════════════════════════════
                    COST BY COMPLEXITY TABLE
                    ═══════════════════════════════════════════ */}
                <h2 id="complexity-breakdown" className="reveal" style={sectionHeading}>
                  App Cost by Complexity: Detailed Breakdown
                </h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  Below is a comprehensive comparison of what each app tier includes, how long it takes, and real-world examples of each.
                </p>

                <div className="reveal" style={tableContainerStyle}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Tier</th>
                          <th style={thStyle}>Cost Range</th>
                          <th style={thStyle}>Timeline</th>
                          <th style={thStyle}>Core Features</th>
                          <th style={thStyle}>Examples</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Simple</strong></td>
                          <td style={{ ...tdStyle, ...whiteText, whiteSpace: 'nowrap' }}>$15K &ndash; $50K</td>
                          <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>1&ndash;2 months</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Login, profiles, basic CRUD, push notifications, simple admin panel</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Event listing app, simple calculator tool, company directory</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Medium</strong></td>
                          <td style={{ ...tdStyle, ...whiteText, whiteSpace: 'nowrap' }}>$50K &ndash; $150K</td>
                          <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>3&ndash;5 months</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Payments, real-time chat, GPS, social features, analytics dashboard</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>E-commerce app, booking platform, fitness tracker with social</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Complex</strong></td>
                          <td style={{ ...tdStyle, ...whiteText, whiteSpace: 'nowrap' }}>$150K &ndash; $300K</td>
                          <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>6&ndash;9 months</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>AI/ML, video streaming, multi-role access, complex integrations, offline sync</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Telehealth platform, on-demand delivery, fintech dashboard</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>Enterprise</strong></td>
                          <td style={{ ...tdStyle, ...whiteText, whiteSpace: 'nowrap' }}>$300K &ndash; $500K+</td>
                          <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>9&ndash;12+ months</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Custom AI, AR/VR, IoT, multi-tenant SaaS, compliance (HIPAA/SOC2), advanced analytics</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Banking super-app, enterprise SaaS, large-scale marketplace</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <BudgetTip title="Budget Planning Tip">
                  <p style={{ margin: 0 }}>
                    If you are unsure which tier your app falls into, <strong style={whiteText}>start with a feature list, not a budget</strong>. List every screen and feature, then prioritize them into &ldquo;must-have&rdquo; (MVP) and &ldquo;nice-to-have&rdquo; (Phase 2). This exercise alone can save you 30&ndash;40% by focusing your initial spend.
                  </p>
                </BudgetTip>

                {/* ═══════════════════════════════════════════
                    PLATFORM COMPARISON
                    ═══════════════════════════════════════════ */}
                <h2 id="platforms" className="reveal" style={sectionHeading}>
                  Platform Choice: iOS vs Android vs Cross-Platform
                </h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop"
                    alt="Multiple smartphones showing different mobile platforms"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@mr_fresh" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Yura Fresh</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <p className="reveal">
                  Your platform choice is one of the biggest cost multipliers. Building for both iOS and Android natively effectively doubles your cost. Cross-platform frameworks offer a compelling middle ground.
                </p>

                <div className="reveal" style={{ ...tableContainerStyle, marginTop: 24 }}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 650 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Platform</th>
                          <th style={thStyle}>Dev Time (Medium App)</th>
                          <th style={thStyle}>Cost (Medium App)</th>
                          <th style={thStyle}>Pros</th>
                          <th style={thStyle}>Cons</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>iOS (Swift)</strong></td>
                          <td style={tdStyle}>3&ndash;5 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$50K &ndash; $150K</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Best performance, premium user base, tighter security</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Apple-only, strict App Store review</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Android (Kotlin)</strong></td>
                          <td style={tdStyle}>3&ndash;6 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$50K &ndash; $150K</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Largest market share, flexible distribution, open ecosystem</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Device fragmentation, longer QA cycles</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Flutter (Dart)</strong></td>
                          <td style={tdStyle}>3&ndash;4 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$35K &ndash; $110K</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Single codebase, near-native performance, beautiful UI toolkit</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Smaller talent pool, larger app size</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>React Native (JS)</strong></td>
                          <td style={tdStyle}>3&ndash;5 months</td>
                          <td style={{ ...tdStyle, ...whiteText }}>$35K &ndash; $110K</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Huge community, code sharing with web, fast iteration</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Performance ceiling for heavy animations, bridge overhead</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <BudgetTip title="Budget Planning Tip">
                  <p style={{ margin: 0 }}>
                    If you need both iOS and Android, <strong style={whiteText}>Flutter is the sweet spot for most startups in 2026</strong>. At Codazz, we have seen Flutter projects ship 30&ndash;40% faster than dual native builds with virtually no sacrifice in UX quality. Reserve native development for apps that need deep hardware access (AR, Bluetooth LE, NFC).
                  </p>
                </BudgetTip>

                {/* ═══════════════════════════════════════════
                    COST BY REGION
                    ═══════════════════════════════════════════ */}
                <h2 id="region-costs" className="reveal" style={sectionHeading}>
                  Development Cost by Region
                </h2>

                <p className="reveal">
                  The same app built by teams in different countries can vary 3&ndash;5x in price. Here is an honest comparison of what to expect:
                </p>

                <div className="reveal" style={{ ...tableContainerStyle, marginTop: 24 }}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Region</th>
                          <th style={thStyle}>Hourly Rate</th>
                          <th style={thStyle}>Quality</th>
                          <th style={thStyle}>Communication</th>
                          <th style={thStyle}>Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>USA</strong></td>
                          <td style={{ ...tdStyle, ...whiteText }}>$150 &ndash; $250/hr</td>
                          <td style={tdStyle}>Excellent</td>
                          <td style={tdStyle}>Same timezone</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Enterprise, regulated industries</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Canada</strong></td>
                          <td style={{ ...tdStyle, ...whiteText }}>$100 &ndash; $180/hr</td>
                          <td style={tdStyle}>Excellent</td>
                          <td style={tdStyle}>Same/close timezone</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Quality-focused projects, NA market</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>UK</strong></td>
                          <td style={{ ...tdStyle, ...whiteText }}>$120 &ndash; $200/hr</td>
                          <td style={tdStyle}>Excellent</td>
                          <td style={tdStyle}>EU-friendly timezone</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Fintech, European compliance</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Eastern Europe</strong></td>
                          <td style={{ ...tdStyle, ...whiteText }}>$40 &ndash; $80/hr</td>
                          <td style={tdStyle}>Very Good</td>
                          <td style={tdStyle}>Moderate overlap</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Strong tech talent, balanced cost</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>India</strong></td>
                          <td style={{ ...tdStyle, ...whiteText }}>$25 &ndash; $60/hr</td>
                          <td style={tdStyle}>Good to Excellent*</td>
                          <td style={tdStyle}>Needs overlap planning</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Startups, MVPs, cost-sensitive projects</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 16, marginBottom: 0 }}>
                    *Quality in India varies enormously. Top-tier firms like Codazz deliver at par with US/Canada quality by combining North American project management with Indian engineering talent.
                  </p>
                </div>

                <BudgetTip title="Budget Planning Tip">
                  <p style={{ margin: 0 }}>
                    The best value in 2026 is a <strong style={whiteText}>hybrid model</strong>: project management and strategy in North America, engineering execution in India or Eastern Europe. You get the communication clarity of a local team with the cost efficiency of a global one. This is exactly the model Codazz uses with offices in Edmonton and Chandigarh.
                  </p>
                </BudgetTip>

                {/* ═══════════════════════════════════════════
                    DESIGN SECTION
                    ═══════════════════════════════════════════ */}
                <h2 id="design" className="reveal" style={sectionHeading}>
                  Design Complexity: From Functional to Jaw-Dropping
                </h2>

                <p className="reveal">
                  Many founders underestimate design costs. In 2026, users expect smooth animations, intuitive navigation, and polished micro-interactions. A poorly designed app with great features will still fail. Here is what each design tier involves:
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '24px 0 32px',
                }}>
                  {[
                    { tier: 'Basic', cost: '$2K - $8K', desc: 'Template-based, minimal custom elements, standard components', color: '#b4fd83' },
                    { tier: 'Custom', cost: '$8K - $25K', desc: 'Branded UI, custom icons, tailored user flows, responsive across devices', color: '#60a5fa' },
                    { tier: 'Premium', cost: '$25K - $60K+', desc: 'Micro-interactions, Lottie animations, custom illustration, motion design', color: '#f59e0b' },
                  ].map((item) => (
                    <div key={item.tier} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 24, borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: item.color, marginBottom: 4, fontSize: 18 }}>{item.tier}</h4>
                      <p style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', margin: '4px 0 12px' }}>{item.cost}</p>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    BACKEND
                    ═══════════════════════════════════════════ */}
                <h2 id="backend" className="reveal" style={sectionHeading}>
                  Backend &amp; Infrastructure Costs
                </h2>

                <p className="reveal">
                  The backend is what makes your app actually work&mdash;user data, business logic, file storage, notifications, and security all live here. In 2026, most backends are cloud-based (AWS, Google Cloud, or Azure), and pricing follows this pattern:
                </p>

                <div className="reveal" style={{ ...tableContainerStyle, marginTop: 24 }}>
                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                      <thead>
                        <tr style={headBorder}>
                          <th style={thStyle}>Backend Tier</th>
                          <th style={thStyle}>Build Cost</th>
                          <th style={thStyle}>Monthly Hosting</th>
                          <th style={thStyle}>Includes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Simple</strong></td>
                          <td style={{ ...tdStyle, ...whiteText }}>$8K &ndash; $20K</td>
                          <td style={tdStyle}>$50 &ndash; $200</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>REST API, managed DB, basic auth</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={greenText}>Moderate</strong></td>
                          <td style={{ ...tdStyle, ...whiteText }}>$20K &ndash; $60K</td>
                          <td style={tdStyle}>$200 &ndash; $1,000</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Microservices, CDN, real-time sync, caching</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={greenText}>Enterprise</strong></td>
                          <td style={{ ...tdStyle, ...whiteText }}>$60K &ndash; $120K+</td>
                          <td style={tdStyle}>$1,000 &ndash; $5,000+</td>
                          <td style={{ ...tdStyle, fontSize: 14 }}>Auto-scaling, ML pipelines, multi-region, compliance</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ═══════════════════════════════════════════
                    HIDDEN COSTS
                    ═══════════════════════════════════════════ */}
                <h2 id="hidden-costs" className="reveal" style={sectionHeading}>
                  Hidden Costs Most People Miss
                </h2>

                <p className="reveal">
                  The sticker price you get from a dev shop rarely tells the full story. Here are the ongoing costs that catch founders off guard:
                </p>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '24px 0',
                }}>
                  {[
                    { title: 'App Store Fees', cost: '$99 - $299/year', desc: 'Apple Developer ($99/yr) + Google Play ($25 one-time). Apple also takes 15-30% commission on in-app purchases.' },
                    { title: 'Maintenance & Updates', cost: '15-25% of build/year', desc: 'OS updates, bug fixes, security patches, performance monitoring. Budget this from day one.' },
                    { title: 'Cloud Hosting', cost: '$50 - $5,000+/month', desc: 'Scales with users. A 10K-user app might cost $200/mo; 500K users could hit $3,000+/mo.' },
                    { title: 'Third-Party APIs', cost: '$0 - $2,000+/month', desc: 'Maps, SMS, payments, analytics. Free tiers run out fast once you hit scale.' },
                    { title: 'QA & Testing', cost: '10-20% of build cost', desc: 'Cross-device testing, security audits, performance testing, accessibility compliance.' },
                    { title: 'Marketing & ASO', cost: '$5,000 - $50,000+', desc: 'App Store Optimization, launch campaigns, user acquisition. The best app means nothing without users.' },
                  ].map((item) => (
                    <div key={item.title} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 4, fontSize: 15 }}>{item.title}</h4>
                      <p style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '4px 0 10px' }}>{item.cost}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <BudgetTip title="Budget Planning Tip">
                  <p style={{ margin: 0 }}>
                    Calculate your <strong style={whiteText}>Total Cost of Ownership (TCO) for 2 years</strong>, not just build cost. A $100K app typically costs $130K&ndash;$160K over two years when you include hosting, maintenance, and updates. Knowing your TCO upfront prevents budget surprises later.
                  </p>
                </BudgetTip>

                {/* ═══════════════════════════════════════════
                    HOW TO REDUCE COSTS
                    ═══════════════════════════════════════════ */}
                <h2 id="reduce-costs" className="reveal" style={sectionHeading}>
                  9 Proven Ways to Reduce App Development Costs
                </h2>

                <p className="reveal">
                  You do not have to sacrifice quality to stay within budget. Here are strategies we recommend to every client at Codazz:
                </p>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  {[
                    { num: '01', title: 'Start with an MVP', desc: 'Build only the 3-5 core features that prove your concept. You can always add more after launch. This approach can cut initial costs by 50-60%.' },
                    { num: '02', title: 'Use cross-platform (Flutter or React Native)', desc: 'One codebase for iOS and Android saves 30-40% compared to building two native apps separately.' },
                    { num: '03', title: 'Leverage pre-built solutions', desc: 'Use Firebase for auth, Stripe for payments, Algolia for search. Do not rebuild what already exists.' },
                    { num: '04', title: 'Choose a hybrid team model', desc: 'Combine North American strategy with offshore engineering. Same quality, significantly lower cost.' },
                    { num: '05', title: 'Invest in planning upfront', desc: 'A $3K-$5K discovery phase can save you $30K-$50K in avoided rework. Never skip this step.' },
                    { num: '06', title: 'Use agile sprints', desc: 'Two-week sprints with demos let you course-correct early instead of discovering problems at the end.' },
                    { num: '07', title: 'Design mobile-first', desc: 'Start with core mobile screens, not a full design system. Expand as you validate with real users.' },
                    { num: '08', title: 'Automate testing from day one', desc: 'Automated tests cost more upfront but save 3-5x in manual QA over the first year.' },
                    { num: '09', title: 'Plan for maintenance early', desc: 'Choosing clean architecture now avoids expensive technical debt later. It is cheaper to build right than to rebuild.' },
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
                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ═══════════════════════════════════════════
                    WHY CODAZZ
                    ═══════════════════════════════════════════ */}
                <h2 id="why-codazz" className="reveal" style={sectionHeading}>
                  Why Codazz Delivers More for Less
                </h2>

                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.06) 0%, rgba(96,165,250,0.04) 100%)',
                  border: '1px solid rgba(180,253,131,0.15)',
                  borderRadius: 16,
                  padding: '32px',
                  marginBottom: 32,
                }}>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginTop: 0 }}>
                    Most agencies fall into one of two camps: expensive North American firms that charge $150&ndash;$250/hr, or offshore shops that are cheap but require constant oversight. <strong style={whiteText}>Codazz is neither.</strong>
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
                    With headquarters in <strong style={whiteText}>Edmonton, Canada</strong> and our engineering centre in <strong style={whiteText}>Chandigarh, India</strong>, we combine the strategic oversight and communication quality of a Canadian firm with the engineering depth and cost efficiency of a top Indian team.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24,
                  }}>
                    {[
                      { metric: '500+', label: 'Apps Delivered' },
                      { metric: '10+', label: 'Years in Business' },
                      { metric: '30-40%', label: 'Cost Savings vs US Agencies' },
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
                    <h4 style={{ color: '#ffffff', marginBottom: 12, fontSize: 17 }}>What makes us different:</h4>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Transparent pricing</strong> &mdash; no hidden charges, detailed estimates before a single line of code is written.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Dedicated project managers in your timezone</strong> &mdash; daily standups, weekly demos, real-time Slack access.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Full-stack capabilities</strong> &mdash; Flutter, React Native, Swift, Kotlin, Node.js, Python, AI/ML, cloud architecture.
                      </li>
                      <li style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Post-launch support included</strong> &mdash; we do not disappear after handoff. Maintenance plans start from day one.
                      </li>
                      <li style={{ marginBottom: 0, color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>
                        <strong style={whiteText}>Fixed-price and time-and-materials models</strong> &mdash; choose what works for your budget and risk tolerance.
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
                      q: 'What is the minimum budget needed to build an app in 2026?',
                      a: 'A functional MVP with basic features can be built for $15,000-$25,000. This gets you a single-platform app with core functionality, basic UI, and essential backend. However, most viable products start at $30,000-$50,000 for a polished, launch-ready MVP.',
                    },
                    {
                      q: 'How long does it take to develop a mobile app?',
                      a: 'Simple apps take 1-2 months, medium-complexity apps 3-5 months, and complex enterprise apps 6-12+ months. These timelines assume a dedicated team of 3-5 developers. Adding more developers does not always speed things up due to coordination overhead.',
                    },
                    {
                      q: 'Is it cheaper to build for one platform first?',
                      a: 'Yes. Building for one platform (usually iOS for North American markets) first is 40-50% cheaper than building for both simultaneously. You can use this to validate your idea, then expand to the second platform once you have product-market fit.',
                    },
                    {
                      q: 'Should I choose Flutter or React Native in 2026?',
                      a: 'Both are excellent choices. Flutter offers better performance and a more complete UI toolkit. React Native has a larger ecosystem and lets you share code with web apps. For most projects, Flutter has a slight edge in 2026 due to its mature widget system and Dart language improvements.',
                    },
                    {
                      q: 'How much does ongoing maintenance cost?',
                      a: 'Plan for 15-25% of your initial build cost annually. A $100K app typically needs $15K-$25K/year for OS updates, security patches, bug fixes, minor feature additions, and server maintenance. Skipping maintenance leads to technical debt that costs 3-5x more to fix later.',
                    },
                    {
                      q: 'Can AI reduce app development costs?',
                      a: 'Yes, but moderately. AI coding assistants can speed up development by 15-25% for routine tasks. However, architecture, business logic, testing, and UX design still require experienced humans. Be wary of agencies claiming AI will cut your costs by 50%+ — that is marketing, not reality.',
                    },
                  ].map((faq, i) => (
                    <div key={i} style={{
                      padding: '20px 0',
                      borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}>
                      <h4 style={{ color: '#ffffff', fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{faq.q}</h4>
                      <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>

                {/* ── BOTTOM CTA ── */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>
                    Ready to Build Your App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
                    Every app is unique. Share your idea with us and get a detailed, no-obligation cost breakdown within 48 hours.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 24, fontSize: 14 }}>
                    500+ apps delivered &middot; Transparent pricing &middot; Free consultation
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Get Your Free Quote
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
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>Need a quick estimate?</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Get a ballpark figure for your app idea in 48 hours.</p>
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
