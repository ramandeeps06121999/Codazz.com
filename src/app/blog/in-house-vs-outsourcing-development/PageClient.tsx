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
  { id: 'key-takeaways', label: 'Key Takeaways', emoji: '🎯' },
  { id: 'head-to-head', label: 'Head-to-Head Comparison', emoji: '⚡' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'in-house-deep-dive', label: 'In-House Deep Dive', emoji: '🏢' },
  { id: 'outsourcing-deep-dive', label: 'Outsourcing Deep Dive', emoji: '🌍' },
  { id: 'hybrid-model', label: 'The Hybrid Model', emoji: '🔀' },
  { id: 'when-to-outsource', label: 'When to Outsource', emoji: '🧭' },
  { id: 'red-flags', label: 'Red Flags to Watch', emoji: '🚩' },
  { id: 'build-with-codazz', label: 'Build with Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
  { id: 'verdict', label: 'Final Verdict', emoji: '✅' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'custom-vs-off-the-shelf-software', title: 'Custom Software vs Off-the-Shelf', category: 'Business', readTime: '18 min' },
  { slug: 'software-development-cost-india', title: 'Software Development Cost in India', category: 'Business', readTime: '15 min' },
];

const tableWrapStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto', marginBottom: 32,
};
const thStyle: React.CSSProperties = { textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14, fontWeight: 700 };
const tdStyle: React.CSSProperties = { padding: '12px 8px', fontSize: 15 };
const rowBorder: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.05)' };
const headBorder: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.1)' };
const accentColor = '#b4fd83';
const inHouseColor = '#61dafb';
const outsourceColor = '#b4fd83';

function CodazzCallout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(180,253,131,0.08) 0%, rgba(180,253,131,0.02) 100%)',
      borderRadius: 12, padding: '20px 24px', margin: '24px 0',
      borderLeft: `4px solid ${accentColor}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accentColor }}>Codazz Insight</span>
      </div>
      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

export default function InHouseVsOutsourcingClient() {
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

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 14vw, 160px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff', padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                20 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              In-House vs Outsourcing Software Development 2026: Complete Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Data-driven cost comparison, pros and cons analysis, hybrid model deep dive, and real decision frameworks from a team that operates on both sides of the equation.
            </p>

            {/* Author + Share */}
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

        {/* CONTENT GRID */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* MAIN ARTICLE */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    You need software built. The question keeping CTOs and founders awake: do you hire a team in-house, or outsource to an external partner?
                  </p>
                  <p>
                    <strong style={{ color: '#ffffff' }}>This is not just a cost decision. It is a strategic choice that affects your speed, quality, IP control, and ability to scale.</strong> And the answer has changed dramatically in 2026, with remote work normalization, AI-augmented development, and the rise of hybrid engagement models.
                  </p>
                  <p>
                    We are an outsourcing partner. We could easily tell you "always outsource." But we will not, because that is not always true. Sometimes in-house is the right call. Sometimes hybrid is best. Here is our honest breakdown.
                  </p>
                  <p style={{ fontSize: 18, color: accentColor, fontWeight: 600, margin: '24px 0' }}>
                    Codazz operates with teams in Edmonton (Canada) and Chandigarh (India). We have seen every model work -- and fail. Here is what actually matters.
                  </p>
                </div>

                {/* KEY TAKEAWAYS */}
                <div id="key-takeaways" className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(97,218,251,0.05) 100%)',
                  borderRadius: 16, padding: 'clamp(24px, 4vw, 32px)', marginBottom: 48,
                  border: '1px solid rgba(180,253,131,0.25)',
                }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 24 }}>🎯</span> Key Takeaways (TL;DR)
                  </h2>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>In-house costs 2-4x more than outsourcing</strong> -- when you factor in salaries, benefits, office space, equipment, recruiting, and management overhead in North America.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Outsourcing is 40-60% cheaper</strong> -- but only if you choose the right partner. Bad outsourcing is the most expensive option of all (rework, delays, quality issues).
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>The hybrid model is winning in 2026</strong> -- keep core architecture and product decisions in-house, outsource specialized development and scaling capacity.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Communication, not location, determines success</strong> -- a well-managed remote team in India outperforms a poorly managed local team every time.
                    </li>
                    <li style={{ color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Your stage matters more than dogma</strong> -- early-stage startups should almost always outsource. Post-Series B companies should build hybrid teams. Enterprise can afford full in-house.
                    </li>
                  </ul>
                </div>

                {/* HEAD-TO-HEAD COMPARISON */}
                <h2 id="head-to-head" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Head-to-Head: In-House vs Outsourcing Across 14 Criteria</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  A comprehensive comparison based on data from hundreds of projects and both engagement models.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={{ ...thStyle, width: '25%' }}>Criteria</th>
                        <th style={{ ...thStyle, color: inHouseColor, width: '27%' }}>In-House</th>
                        <th style={{ ...thStyle, color: outsourceColor, width: '27%' }}>Outsourcing</th>
                        <th style={{ ...thStyle, width: '21%', textAlign: 'center' }}>Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['Monthly Cost (Sr Dev)', '$12K-$20K fully loaded', '$4K-$8K fully managed', 'outsource'],
                        ['Time to Start', '2-4 months (recruiting)', '1-2 weeks', 'outsource'],
                        ['Team Control', 'Full management control', 'Managed by partner', 'inhouse'],
                        ['IP Protection', 'Full internal control', 'Contractual (NDA/IP assign)', 'inhouse'],
                        ['Communication', 'Same office / timezone', 'Async + overlap hours', 'inhouse'],
                        ['Scalability', 'Slow (hire/fire cycles)', 'Fast (flex up/down)', 'outsource'],
                        ['Domain Knowledge', 'Deep institutional knowledge', 'Broad technical expertise', 'inhouse'],
                        ['Technology Breadth', 'Limited to hired skills', 'Access to diverse specialists', 'outsource'],
                        ['Quality Control', 'Direct oversight', 'Process-dependent', 'inhouse'],
                        ['Cultural Alignment', 'Shared company culture', 'Requires active management', 'inhouse'],
                        ['24/7 Development', 'Standard business hours', 'Follow-the-sun possible', 'outsource'],
                        ['Risk Management', 'Single point of failure', 'Distributed risk', 'outsource'],
                        ['Focus on Core', 'Split between build + manage', 'You focus on product', 'outsource'],
                        ['Long-term Cost', 'Compounds (raises, benefits)', 'Flexible, project-based', 'outsource'],
                      ] as [string, string, string, 'inhouse' | 'outsource'][]).map(([criteria, inhouse, outsource, winner], i) => (
                        <tr key={i} style={rowBorder}>
                          <td style={{ ...tdStyle, color: '#ffffff', fontWeight: 600 }}>{criteria}</td>
                          <td style={{ ...tdStyle, color: winner === 'inhouse' ? inHouseColor : 'rgba(255,255,255,0.7)' }}>{inhouse}</td>
                          <td style={{ ...tdStyle, color: winner === 'outsource' ? outsourceColor : 'rgba(255,255,255,0.7)' }}>{outsource}</td>
                          <td style={{ ...tdStyle, textAlign: 'center' }}>
                            <span style={{
                              fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 6,
                              background: winner === 'inhouse' ? 'rgba(97,218,251,0.15)' : 'rgba(180,253,131,0.15)',
                              color: winner === 'inhouse' ? inHouseColor : outsourceColor,
                            }}>
                              {winner === 'inhouse' ? 'In-House' : 'Outsource'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 20, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center',
                }}>
                  <p style={{ fontSize: 16, color: '#ffffff', fontWeight: 600, margin: 0 }}>
                    Final Score: <span style={{ color: inHouseColor }}>In-House 5</span> &middot; <span style={{ color: outsourceColor }}>Outsourcing 9</span>
                  </p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: '8px 0 0' }}>
                    Outsourcing wins on operational metrics. In-house wins on control and domain depth. The hybrid model captures the best of both.
                  </p>
                </div>

                {/* COST BREAKDOWN */}
                <h2 id="cost-breakdown" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Real Cost Breakdown: What You Actually Pay</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Salary is just the beginning. Here is the true cost of a 5-person development team over 12 months.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 550 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={{ ...thStyle, width: '35%' }}>Cost Category</th>
                        <th style={{ ...thStyle, color: inHouseColor, width: '30%' }}>In-House (N. America)</th>
                        <th style={{ ...thStyle, color: outsourceColor, width: '35%' }}>Outsourced (India/E. Europe)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Base Salaries (5 devs)</td>
                        <td style={tdStyle}>$550,000 - $900,000</td>
                        <td style={{ ...tdStyle, color: outsourceColor }}>$180,000 - $360,000</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Benefits (health, 401k, PTO)</td>
                        <td style={tdStyle}>$110,000 - $180,000</td>
                        <td style={{ ...tdStyle, color: outsourceColor }}>Included in rate</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Recruiting / Hiring</td>
                        <td style={tdStyle}>$50,000 - $100,000</td>
                        <td style={{ ...tdStyle, color: outsourceColor }}>$0 (partner handles)</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Office / Equipment</td>
                        <td style={tdStyle}>$30,000 - $60,000</td>
                        <td style={{ ...tdStyle, color: outsourceColor }}>Included in rate</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Management Overhead</td>
                        <td style={tdStyle}>$80,000 - $150,000</td>
                        <td style={tdStyle}>$20,000 - $40,000</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Tools / Licenses</td>
                        <td style={tdStyle}>$15,000 - $30,000</td>
                        <td style={{ ...tdStyle, color: outsourceColor }}>Included in rate</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Training / Upskilling</td>
                        <td style={tdStyle}>$10,000 - $25,000</td>
                        <td style={{ ...tdStyle, color: outsourceColor }}>Included in rate</td>
                      </tr>
                      <tr>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Annual Total (5-person team)</td>
                        <td style={{ ...tdStyle, fontWeight: 700, color: inHouseColor }}>$845K - $1.45M</td>
                        <td style={{ ...tdStyle, fontWeight: 700, color: outsourceColor }}>$200K - $400K</td>
                      </tr>
                    </tbody>
                  </table>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 12, margin: '12px 0 0' }}>
                    Based on mid-senior developers (5+ years experience). North American rates from Glassdoor/Levels.fyi 2026 data. Outsourcing rates from Codazz and industry benchmarks.
                  </p>
                </div>

                <CodazzCallout>
                  <strong style={{ color: '#ffffff' }}>The real savings are even bigger than they look.</strong> In-house teams have 15-20% turnover annually. Each developer replacement costs $30K-$50K in recruiting and 3-6 months of reduced productivity during onboarding. Outsourcing partners absorb this risk entirely -- if a developer leaves, they backfill from their bench at no cost to you.
                </CodazzCallout>

                {/* IN-HOUSE DEEP DIVE */}
                <h2 id="in-house-deep-dive" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>In-House Development: When It Makes Sense</h2>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: inHouseColor, marginTop: 32, marginBottom: 16 }}>
                  Advantages of In-House Teams
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Deep domain expertise</strong> -- your developers live and breathe your product. They understand the business context, user pain points, and strategic direction in ways no external team can match.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Instant communication</strong> -- no timezone gaps, no async delays. Walk to someone&apos;s desk (or Slack them at 2pm) and get an answer in minutes.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Cultural alignment</strong> -- in-house teams share your values, attend your all-hands, and care about the company mission in ways that are hard to replicate externally.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>IP security</strong> -- your code never leaves your organization. No contracts to negotiate, no NDAs to enforce.</li>
                    <li><strong style={{ color: '#ffffff' }}>Long-term knowledge retention</strong> -- institutional knowledge stays within the company. No knowledge transfer risk when a contract ends.</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ff6b6b', marginTop: 32, marginBottom: 16 }}>
                  Challenges of In-House Teams
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Expensive and slow to build</strong> -- hiring a senior developer in North America takes 2-4 months and costs $15K-$30K in recruiting fees alone.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Limited skill diversity</strong> -- a 5-person team knows 2-3 tech stacks. Need a machine learning engineer for 2 months? You are hiring full-time for a part-time need.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Retention pressure</strong> -- developers get poached constantly. One resignation can stall a project for months.</li>
                    <li><strong style={{ color: '#ffffff' }}>Management overhead</strong> -- you need engineering managers, HR support, career growth paths, and team culture investment. This is a full-time job on top of building software.</li>
                  </ul>
                </div>

                {/* OUTSOURCING DEEP DIVE */}
                <h2 id="outsourcing-deep-dive" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Outsourcing Development: When It Makes Sense</h2>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: outsourceColor, marginTop: 32, marginBottom: 16 }}>
                  Advantages of Outsourcing
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>60-70% cost reduction</strong> -- senior developers in India or Eastern Europe command $3K-$7K/month vs $12K-$18K in North America, with comparable skill levels from top-tier partners.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Start in days, not months</strong> -- no recruiting, no interviewing, no onboarding. A good partner can assemble a team and start development within 1-2 weeks.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Access to specialists</strong> -- need AI/ML, blockchain, AR/VR, or DevOps? Outsourcing partners have specialists on bench. You get senior talent for exactly the time you need them.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Scale on demand</strong> -- ramp from 3 developers to 12 for a launch sprint, then back to 5 for maintenance. No hire/fire cycles.</li>
                    <li><strong style={{ color: '#ffffff' }}>Battle-tested processes</strong> -- good partners have shipped hundreds of projects. Their development processes, QA practices, and deployment pipelines are mature and proven.</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ff6b6b', marginTop: 32, marginBottom: 16 }}>
                  Challenges of Outsourcing
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Communication complexity</strong> -- timezone differences, cultural nuances, and async communication require deliberate process design.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Quality variance</strong> -- the gap between good and bad outsourcing partners is enormous. A cheap partner can cost 3x more than an expensive one when you factor in rework.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Less domain context</strong> -- external teams need time to understand your business. Without proper knowledge transfer, they build technically sound but contextually wrong solutions.</li>
                    <li><strong style={{ color: '#ffffff' }}>Dependency risk</strong> -- if the partner relationship breaks down, transitioning to a new team involves significant knowledge transfer cost.</li>
                  </ul>
                </div>

                {/* HYBRID MODEL */}
                <h2 id="hybrid-model" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The Hybrid Model: Best of Both Worlds</h2>

                <p className="reveal" style={{ marginBottom: 24 }}>
                  The hybrid model is our most recommended approach for scaling companies. Here is how it works:
                </p>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h4 style={{ color: accentColor, marginBottom: 16 }}>The Optimal Hybrid Structure</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12 }}>
                      <h5 style={{ color: inHouseColor, marginBottom: 8, fontSize: 15 }}>Keep In-House (2-3 people)</h5>
                      <ul style={{ paddingLeft: 16, margin: 0, fontSize: 14 }}>
                        <li style={{ marginBottom: 6 }}>CTO / Technical Lead</li>
                        <li style={{ marginBottom: 6 }}>Product Manager</li>
                        <li style={{ marginBottom: 6 }}>Senior Architect (optional)</li>
                      </ul>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12 }}>
                      <h5 style={{ color: outsourceColor, marginBottom: 8, fontSize: 15 }}>Outsource (4-10 people)</h5>
                      <ul style={{ paddingLeft: 16, margin: 0, fontSize: 14 }}>
                        <li style={{ marginBottom: 6 }}>Frontend developers</li>
                        <li style={{ marginBottom: 6 }}>Backend developers</li>
                        <li style={{ marginBottom: 6 }}>QA engineers</li>
                        <li style={{ marginBottom: 6 }}>DevOps / Infrastructure</li>
                        <li>UI/UX designers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <CodazzCallout>
                  <strong style={{ color: '#ffffff' }}>The hybrid model saves 50-60% vs full in-house while maintaining strategic control.</strong> Your in-house team owns product vision, architecture decisions, and code review standards. The outsourced team executes at scale. This is exactly how companies like Slack, GitHub, and Shopify scaled their early engineering teams.
                </CodazzCallout>

                {/* WHEN TO OUTSOURCE */}
                <h2 id="when-to-outsource" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>When to Outsource: Decision Matrix</h2>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 550 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={{ ...thStyle, width: '40%' }}>Your Situation</th>
                        <th style={{ ...thStyle, width: '25%' }}>Recommendation</th>
                        <th style={{ ...thStyle, width: '35%' }}>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Pre-seed / Seed startup</td>
                        <td style={{ ...tdStyle, color: outsourceColor, fontWeight: 600 }}>Outsource</td>
                        <td style={tdStyle}>Preserve runway, move fast, validate before hiring</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Series A with product-market fit</td>
                        <td style={{ ...tdStyle, color: '#ffc864', fontWeight: 600 }}>Hybrid</td>
                        <td style={tdStyle}>Hire CTO/lead in-house, outsource development capacity</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Series B+ scaling rapidly</td>
                        <td style={{ ...tdStyle, color: '#ffc864', fontWeight: 600 }}>Hybrid</td>
                        <td style={tdStyle}>Core team in-house, outsource specialized work and overflow</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Enterprise (500+ employees)</td>
                        <td style={{ ...tdStyle, color: inHouseColor, fontWeight: 600 }}>In-House + Outsource</td>
                        <td style={tdStyle}>Large in-house team for core, outsource for specialized projects</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Non-tech company needing app</td>
                        <td style={{ ...tdStyle, color: outsourceColor, fontWeight: 600 }}>Outsource</td>
                        <td style={tdStyle}>Building an in-house team for a one-time project makes no sense</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Tight deadline (launch in &lt;3 months)</td>
                        <td style={{ ...tdStyle, color: outsourceColor, fontWeight: 600 }}>Outsource</td>
                        <td style={tdStyle}>You cannot recruit fast enough. Outsourcing starts immediately.</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>AI/ML or specialized tech needed</td>
                        <td style={{ ...tdStyle, color: outsourceColor, fontWeight: 600 }}>Outsource</td>
                        <td style={tdStyle}>Specialists are expensive to hire full-time for often part-time needs</td>
                      </tr>
                      <tr>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Government / high-security project</td>
                        <td style={{ ...tdStyle, color: inHouseColor, fontWeight: 600 }}>In-House</td>
                        <td style={tdStyle}>Clearance requirements and data sovereignty often mandate in-house</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* RED FLAGS */}
                <h2 id="red-flags" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Red Flags When Choosing an Outsourcing Partner</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,100,100,0.08)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(255,100,100,0.2)',
                }}>
                  <h4 style={{ color: '#ff6b6b', marginBottom: 16 }}>Walk Away If You See These</h4>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Unrealistically low rates:</strong> $10-15/hr "senior" developers are not senior. You will pay 3x in rework.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>No discovery phase:</strong> If they quote without understanding your requirements, they are guessing -- and you will pay for wrong guesses.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>No code ownership clause:</strong> You should own 100% of the code. Any partner that retains IP rights is a red flag.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>No direct developer access:</strong> If you can only talk to a "project manager" and never interact with the actual developers, communication will be a game of telephone.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>No references or portfolio:</strong> Legitimate partners have case studies, client testimonials, and a verifiable track record.</li>
                    <li><strong style={{ color: '#ffffff' }}>Fixed-price with vague scope:</strong> Fixed-price only works with extremely detailed specifications. Otherwise, you will face constant change order battles.</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h4 style={{ color: accentColor, marginBottom: 16 }}>Green Flags to Look For</h4>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Transparent communication:</strong> Daily standups, weekly demos, shared Slack channels, and direct developer access.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Discovery-first approach:</strong> They invest time understanding your business before proposing a solution or quoting a price.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Proven expertise in your domain:</strong> Industry-specific experience (fintech, healthcare, e-commerce) reduces ramp-up time significantly.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Clear IP and code ownership:</strong> Contract explicitly states you own all code, designs, and documentation from day one.</li>
                    <li><strong style={{ color: '#ffffff' }}>Post-launch support plan:</strong> Development does not end at launch. A good partner has a maintenance and support offering.</li>
                  </ul>
                </div>

                {/* BUILD WITH CODAZZ */}
                <div id="build-with-codazz" className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.12) 0%, rgba(8,50,61,0.4) 100%)',
                  borderRadius: 20, padding: 'clamp(28px, 5vw, 40px)', marginTop: 64, marginBottom: 48,
                  border: '1px solid rgba(180,253,131,0.3)', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: -50, right: -50, width: 200, height: 200,
                    background: 'radial-gradient(circle, rgba(180,253,131,0.1) 0%, transparent 70%)', borderRadius: '50%',
                  }} />
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', fontWeight: 800, color: '#ffffff',
                    marginBottom: 16, letterSpacing: '-0.02em', position: 'relative',
                  }}>
                    Codazz: Your Outsourcing Partner That Feels In-House
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 20, fontSize: 16, lineHeight: 1.7, position: 'relative' }}>
                    We operate from Edmonton (Canada) and Chandigarh (India), giving you North American project management with cost-effective global delivery. Our teams integrate directly into your workflow -- same tools, same standups, same Slack channels.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24, position: 'relative' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12 }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: accentColor, margin: 0 }}>200+</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>Projects delivered globally</p>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12 }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: accentColor, margin: 0 }}>60%</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>Average cost savings vs in-house</p>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12 }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: accentColor, margin: 0 }}>4-6hr</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>Daily timezone overlap with N. America</p>
                    </div>
                  </div>

                  <div style={{ marginTop: 24, position: 'relative' }}>
                    <Link href="/contact" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: accentColor, color: '#000000',
                      padding: '14px 28px', borderRadius: 8,
                      fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'transform 0.2s',
                    }}>
                      Get Your Free Team Planning Consultation
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How do I protect my intellectual property when outsourcing?', a: 'Three layers of protection: (1) IP assignment clause in the contract -- all code, designs, and documentation are your property from the moment they are created. (2) NDAs for every team member who touches your project. (3) Code repository access control -- use your own GitHub/GitLab organization so you always have full access and control. Any reputable partner will agree to all three without pushback.' },
                  { q: 'How do you handle timezone differences?', a: 'The best outsourcing relationships use a "golden overlap" model -- 4-6 hours of real-time overlap for meetings, code reviews, and urgent issues. The remaining hours are used for focused development. At Codazz, our India team shifts their schedule to overlap with North American mornings (8am-12pm EST), giving you real-time collaboration when you need it and uninterrupted development when you do not.' },
                  { q: 'What happens if I am unhappy with the outsourced developers?', a: 'A good partner replaces underperforming developers quickly -- typically within 1-2 weeks. At Codazz, we guarantee developer quality. If any team member is not meeting your standards, we replace them at no additional cost and absorb the onboarding overhead. This is a massive advantage over in-house, where firing and rehiring takes months.' },
                  { q: 'Should I outsource my MVP or build it in-house?', a: 'Outsource. Every time. MVPs are about speed and cost-efficiency. You need to validate your idea before committing to building a team. An outsourced MVP costs $30K-$80K and takes 6-12 weeks. Building an in-house team first means spending 3-4 months hiring before you write a single line of code -- by which time your market window may have closed.' },
                  { q: 'How do outsourcing costs compare between India, Eastern Europe, and Latin America?', a: 'India: $25-$50/hr for senior developers (best value, largest talent pool). Eastern Europe (Poland, Ukraine, Romania): $40-$80/hr (strong technical education, EU timezone friendly). Latin America (Mexico, Argentina, Colombia): $35-$65/hr (same timezone as US, cultural alignment). India offers the best cost savings. Eastern Europe offers the best timezone fit for European clients. Latin America is ideal for US companies that prioritize same-timezone collaboration.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* VERDICT */}
                <h2 id="verdict" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Final Verdict: Our 2026 Recommendation</h2>

                <p className="reveal" style={{ fontSize: 18, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                  After operating on both sides of this equation for years, here is our honest recommendation:
                </p>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ marginBottom: 20, paddingLeft: 24, borderLeft: `3px solid ${outsourceColor}` }}>
                      <strong style={{ color: outsourceColor, fontSize: 17 }}>Outsource if:</strong>
                      <p style={{ margin: '8px 0 0', fontSize: 15 }}>You are a startup, need to move fast, have a limited budget, need specialized skills, or are building a one-time project. Outsourcing gives you enterprise-level talent at a fraction of in-house cost.</p>
                    </li>
                    <li style={{ marginBottom: 20, paddingLeft: 24, borderLeft: `3px solid ${inHouseColor}` }}>
                      <strong style={{ color: inHouseColor, fontSize: 17 }}>Go In-House if:</strong>
                      <p style={{ margin: '8px 0 0', fontSize: 15 }}>Software IS your product (not a supporting tool), you have deep security/compliance requirements, you can afford $150K+ per developer fully loaded, and you have the management capacity to recruit, retain, and grow a team.</p>
                    </li>
                    <li style={{ paddingLeft: 24, borderLeft: '3px solid #ffc864' }}>
                      <strong style={{ color: '#ffc864', fontSize: 17 }}>Go Hybrid if:</strong>
                      <p style={{ margin: '8px 0 0', fontSize: 15 }}>You have product-market fit, are scaling, and want to balance cost with control. Keep CTO/lead/PM in-house, outsource development execution. This is the model most of our successful clients use.</p>
                    </li>
                  </ul>
                </div>

                {/* Final CTA */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Build Your Ideal Team Structure?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 12, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
                    We will help you design the optimal in-house + outsourcing mix for your stage, budget, and goals. No pressure to outsource with us -- just honest advice.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 24, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', fontSize: 14 }}>
                    Free 30-minute team planning session. We will map your needs and recommend the right model.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: accentColor, color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none', transition: 'transform 0.2s',
                  }}>
                    Book Free Team Planning Session
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', fontSize: 14,
                          color: activeSection === section.id ? accentColor : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? `2px solid ${accentColor}` : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          display: 'block', padding: 16, background: 'rgba(255,255,255,0.03)',
                          borderRadius: 12, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.2s',
                        }}>
                          <span style={{ fontSize: 11, color: accentColor, fontWeight: 600 }}>{post.category}</span>
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
