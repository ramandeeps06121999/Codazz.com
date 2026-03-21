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
  { id: 'cost-analysis', label: 'Cost Analysis', emoji: '💰' },
  { id: 'custom-software', label: 'Custom Software Deep Dive', emoji: '🔧' },
  { id: 'off-the-shelf', label: 'Off-the-Shelf Deep Dive', emoji: '📦' },
  { id: 'decision-framework', label: 'Decision Framework', emoji: '🧭' },
  { id: 'hidden-costs', label: 'Hidden Costs', emoji: '⚠️' },
  { id: 'case-studies', label: 'Case Studies', emoji: '📋' },
  { id: 'build-with-codazz', label: 'Build with Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
  { id: 'verdict', label: 'Final Verdict', emoji: '✅' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
  { slug: 'saas-vs-custom-software-2026', title: 'SaaS vs Custom Software 2026', category: 'Business', readTime: '18 min' },
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

function CodazzCallout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(180,253,131,0.08) 0%, rgba(180,253,131,0.02) 100%)',
      borderRadius: 12, padding: '20px 24px', margin: '24px 0',
      borderLeft: `4px solid ${accentColor}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accentColor }}>Codazz Recommendation</span>
      </div>
      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

export default function CustomVsOffTheShelfClient() {
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
                18 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Custom Software vs Off-the-Shelf: Which Is Right for Your Business?
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A no-nonsense comparison with real cost data, decision frameworks, and case studies from a team that has built 200+ custom solutions and integrated dozens of off-the-shelf platforms.
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
                    Your business needs software. The question is: do you buy something off the shelf, or build exactly what you need from scratch?
                  </p>
                  <p>
                    <strong style={{ color: '#ffffff' }}>This decision can make or break your operational efficiency for the next 5-10 years.</strong> Choose wrong, and you are stuck with workarounds, expensive migrations, or software that does not actually solve your problem.
                  </p>
                  <p>
                    We have seen both sides. We have built custom ERP systems for manufacturers, custom CRMs for real estate firms, and custom healthcare platforms. We have also helped clients realize they did not need custom software at all -- Salesforce or HubSpot would handle 90% of their needs at a fraction of the cost.
                  </p>
                  <p style={{ fontSize: 18, color: accentColor, fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we have delivered 200+ custom software projects. Here is our honest framework for deciding which path is right for you.
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
                      <strong style={{ color: '#ffffff' }}>Custom software costs 3-10x more upfront</strong> -- but can deliver 10x+ ROI when your business processes are genuinely unique and core to your competitive advantage.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Off-the-shelf is the right choice 70% of the time</strong> -- most businesses overestimate how unique their processes are. CRM, HR, accounting, and project management are solved problems.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>The hybrid approach is often best</strong> -- use off-the-shelf for commodity functions (HR, accounting) and custom for differentiating features (proprietary algorithms, unique workflows).
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Hidden costs matter more than sticker price</strong> -- licensing fees compound, customization consultants are expensive, and vendor lock-in is real.
                    </li>
                    <li style={{ color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Consider your 5-year trajectory</strong> -- startups should almost always start off-the-shelf. Scaling companies with proven processes should consider custom.
                    </li>
                  </ul>
                </div>

                {/* HEAD-TO-HEAD COMPARISON */}
                <h2 id="head-to-head" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Head-to-Head: Custom vs Off-the-Shelf Across 12 Criteria</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  A comprehensive side-by-side comparison based on real project data from 200+ engagements.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={{ ...thStyle, width: '25%' }}>Criteria</th>
                        <th style={{ ...thStyle, color: accentColor, width: '30%' }}>Custom Software</th>
                        <th style={{ ...thStyle, color: '#61dafb', width: '30%' }}>Off-the-Shelf</th>
                        <th style={{ ...thStyle, width: '15%', textAlign: 'center' }}>Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['Upfront Cost', '$50K - $500K+', '$0 - $50K/year', 'ots'],
                        ['Time to Deploy', '3 - 12 months', '1 - 30 days', 'ots'],
                        ['Customization', 'Unlimited -- built to spec', 'Limited to vendor roadmap', 'custom'],
                        ['Scalability', 'Scales with your architecture', 'Depends on vendor tier/plan', 'custom'],
                        ['Integration', 'Built exactly for your stack', 'API-dependent, may be limited', 'custom'],
                        ['Maintenance', 'Your responsibility (or partner)', 'Vendor handles updates', 'ots'],
                        ['Security Control', 'Full control, custom policies', 'Vendor-managed, shared infra', 'custom'],
                        ['Competitive Edge', 'Unique IP, proprietary workflows', 'Same tools as competitors', 'custom'],
                        ['Learning Curve', 'Designed for your team', 'Community docs, tutorials', 'ots'],
                        ['Vendor Lock-in', 'You own the code', 'Switching costs can be huge', 'custom'],
                        ['Feature Updates', 'Only when you invest', 'Continuous from vendor', 'ots'],
                        ['Total Cost (5yr)', '$150K - $800K', '$60K - $300K', 'ots'],
                      ] as [string, string, string, 'custom' | 'ots'][]).map(([criteria, custom, ots, winner], i) => (
                        <tr key={i} style={rowBorder}>
                          <td style={{ ...tdStyle, color: '#ffffff', fontWeight: 600 }}>{criteria}</td>
                          <td style={{ ...tdStyle, color: winner === 'custom' ? accentColor : 'rgba(255,255,255,0.7)' }}>{custom}</td>
                          <td style={{ ...tdStyle, color: winner === 'ots' ? '#61dafb' : 'rgba(255,255,255,0.7)' }}>{ots}</td>
                          <td style={{ ...tdStyle, textAlign: 'center' }}>
                            <span style={{
                              fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 6,
                              background: winner === 'custom' ? 'rgba(180,253,131,0.15)' : 'rgba(97,218,251,0.15)',
                              color: winner === 'custom' ? accentColor : '#61dafb',
                            }}>
                              {winner === 'custom' ? 'Custom' : 'Off-the-Shelf'}
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
                    Final Score: <span style={{ color: accentColor }}>Custom 5</span> &middot; <span style={{ color: '#61dafb' }}>Off-the-Shelf 7</span>
                  </p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: '8px 0 0' }}>
                    Off-the-shelf wins on practicality metrics. Custom wins on strategic value. The right choice depends on whether software is a cost center or a competitive weapon for your business.
                  </p>
                </div>

                <CodazzCallout>
                  <strong style={{ color: '#ffffff' }}>Our rule of thumb:</strong> If the software directly generates revenue or creates competitive differentiation, build custom. If it supports internal operations that every company does (HR, payroll, basic CRM), buy off-the-shelf. The gray area is where experienced advisors earn their keep.
                </CodazzCallout>

                {/* COST ANALYSIS */}
                <h2 id="cost-analysis" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Real Cost Analysis: 5-Year Total Cost of Ownership</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Upfront price tells you almost nothing. Here is what you actually pay over 5 years.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 550 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={{ ...thStyle, width: '35%' }}>Cost Category</th>
                        <th style={{ ...thStyle, color: accentColor, width: '30%' }}>Custom Software</th>
                        <th style={{ ...thStyle, color: '#61dafb', width: '35%' }}>Off-the-Shelf (Enterprise)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Initial Development / License</td>
                        <td style={tdStyle}>$80,000 - $300,000</td>
                        <td style={tdStyle}>$5,000 - $50,000/year</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Implementation / Setup</td>
                        <td style={tdStyle}>Included in development</td>
                        <td style={tdStyle}>$10,000 - $100,000</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Customization / Configuration</td>
                        <td style={{ ...tdStyle, color: accentColor }}>Built to spec from day one</td>
                        <td style={tdStyle}>$15,000 - $80,000</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Training</td>
                        <td style={tdStyle}>$5,000 - $15,000</td>
                        <td style={tdStyle}>$3,000 - $20,000</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Annual Maintenance</td>
                        <td style={tdStyle}>$15,000 - $50,000/year</td>
                        <td style={{ ...tdStyle, color: '#61dafb' }}>Included in license</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Feature Enhancements (5yr)</td>
                        <td style={tdStyle}>$30,000 - $150,000</td>
                        <td style={{ ...tdStyle, color: '#61dafb' }}>Included (vendor roadmap)</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>Integration Work</td>
                        <td style={{ ...tdStyle, color: accentColor }}>$10,000 - $40,000 (one-time)</td>
                        <td style={tdStyle}>$5,000 - $30,000/integration</td>
                      </tr>
                      <tr>
                        <td style={{ ...tdStyle, fontWeight: 600, color: '#ffffff' }}>5-Year Total</td>
                        <td style={{ ...tdStyle, fontWeight: 700, color: accentColor }}>$200K - $650K</td>
                        <td style={{ ...tdStyle, fontWeight: 700, color: '#61dafb' }}>$90K - $450K</td>
                      </tr>
                    </tbody>
                  </table>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 12, margin: '12px 0 0' }}>
                    Estimates based on mid-market business applications (50-200 users). Actual costs vary significantly by complexity, vendor, and region.
                  </p>
                </div>

                <CodazzCallout>
                  <strong style={{ color: '#ffffff' }}>The cost gap narrows faster than you think.</strong> Off-the-shelf licensing compounds annually. Custom maintenance stays relatively flat. By year 4-5, the TCO difference for complex enterprise applications often shrinks to less than 20%. Factor in productivity gains from perfect-fit software, and custom frequently wins on ROI.
                </CodazzCallout>

                {/* CUSTOM SOFTWARE DEEP DIVE */}
                <h2 id="custom-software" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Custom Software: When It Makes Sense</h2>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: accentColor, marginTop: 32, marginBottom: 16 }}>
                  Advantages of Custom Software
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Perfect fit for your workflows</strong> -- no workarounds, no forcing square pegs into round holes. Every screen, every field, every automation is designed for how your team actually works.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Competitive moat</strong> -- your competitors cannot buy the same software. Your proprietary workflows become a lasting advantage.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Full data ownership</strong> -- your data lives on your infrastructure. No vendor has access. No data hostage situations when you want to switch.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Unlimited scalability</strong> -- no per-seat pricing that punishes growth. Scale to 10,000 users without your software bill growing linearly.</li>
                    <li><strong style={{ color: '#ffffff' }}>Integration freedom</strong> -- connect to any system, any API, any legacy database. No waiting for a vendor to build an integration they do not prioritize.</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ff6b6b', marginTop: 32, marginBottom: 16 }}>
                  Risks of Custom Software
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Higher upfront investment</strong> -- you are paying for design, development, testing, and deployment before you get any value.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Longer time to market</strong> -- 3-12 months vs days or weeks. If speed is critical, this matters.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Ongoing maintenance burden</strong> -- security patches, bug fixes, and infrastructure management are your responsibility.</li>
                    <li><strong style={{ color: '#ffffff' }}>Partner dependency</strong> -- if your development partner disappears, maintaining the codebase requires finding someone who understands it.</li>
                  </ul>
                </div>

                {/* OFF-THE-SHELF DEEP DIVE */}
                <h2 id="off-the-shelf" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Off-the-Shelf Software: When It Makes Sense</h2>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#61dafb', marginTop: 32, marginBottom: 16 }}>
                  Advantages of Off-the-Shelf
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Immediate deployment</strong> -- sign up today, start using it tomorrow. Perfect when speed matters more than perfection.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Battle-tested reliability</strong> -- millions of users have found and reported bugs before you. The software is mature and stable.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Continuous improvements</strong> -- vendors invest millions in R&D. You get new features, security patches, and performance upgrades automatically.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Lower initial cost</strong> -- predictable monthly/annual pricing. No capital expenditure. Easy to budget for.</li>
                    <li><strong style={{ color: '#ffffff' }}>Community and ecosystem</strong> -- documentation, tutorials, forums, consultants, and integrations built by a global community.</li>
                  </ul>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ff6b6b', marginTop: 32, marginBottom: 16 }}>
                  Risks of Off-the-Shelf
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Feature bloat</strong> -- you pay for 100 features but use 15. The complexity slows your team down.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Customization limits</strong> -- when you hit the walls of what the platform can do, workarounds are ugly and expensive.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Vendor lock-in</strong> -- migrating away from Salesforce or SAP after 5 years is a multi-million-dollar project. Your data, workflows, and training are all tied to the vendor.</li>
                    <li><strong style={{ color: '#ffffff' }}>Price increases</strong> -- vendors raise prices regularly. You have limited negotiating power once you are deeply embedded.</li>
                  </ul>
                </div>

                {/* HIDDEN COSTS */}
                <h2 id="hidden-costs" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Hidden Costs Nobody Talks About</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,100,100,0.08)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(255,100,100,0.2)',
                }}>
                  <h4 style={{ color: '#ff6b6b', marginBottom: 16 }}>Hidden Costs of Off-the-Shelf</h4>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Customization consultants:</strong> $150-$400/hr to configure enterprise platforms like Salesforce, SAP, or Oracle</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Data migration:</strong> Moving from one platform to another can cost $50K-$500K depending on data volume and complexity</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Workaround overhead:</strong> When the tool does not fit, teams build spreadsheets, manual processes, and shadow IT -- costing 10-20 hours/week per team</li>
                    <li><strong style={{ color: '#ffffff' }}>License creep:</strong> That $50/user/month becomes $150/user/month when you need the features in the "Enterprise" tier</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,200,100,0.08)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,200,100,0.2)',
                }}>
                  <h4 style={{ color: '#ffc864', marginBottom: 16 }}>Hidden Costs of Custom Software</h4>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Scope creep:</strong> "Just one more feature" during development can inflate budgets by 30-50% if not managed tightly</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Technical debt:</strong> Rushing to launch means cutting corners that cost 3x to fix later</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Security responsibility:</strong> You need ongoing security audits, penetration testing, and compliance certifications</li>
                    <li><strong style={{ color: '#ffffff' }}>Knowledge concentration:</strong> If the original developers leave, onboarding new developers to a custom codebase takes 2-4 months</li>
                  </ul>
                </div>

                {/* DECISION FRAMEWORK */}
                <h2 id="decision-framework" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Decision Framework: 7 Questions to Ask</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Answer these honestly, and the right choice usually becomes obvious.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 550 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={{ ...thStyle, width: '40%' }}>Question</th>
                        <th style={{ ...thStyle, color: accentColor, width: '30%' }}>If Yes &rarr; Custom</th>
                        <th style={{ ...thStyle, color: '#61dafb', width: '30%' }}>If No &rarr; Off-the-Shelf</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Is this software your core product or directly revenue-generating?</td>
                        <td style={{ ...tdStyle, color: accentColor }}>Build it -- it IS your business</td>
                        <td style={tdStyle}>Buy it -- it supports your business</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Are your workflows genuinely unique in your industry?</td>
                        <td style={{ ...tdStyle, color: accentColor }}>No off-the-shelf tool will fit</td>
                        <td style={tdStyle}>Standard tools handle standard processes</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Do you have $100K+ budget and 6+ month timeline?</td>
                        <td style={{ ...tdStyle, color: accentColor }}>You can afford to build right</td>
                        <td style={tdStyle}>Start with off-the-shelf, migrate later</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Will you scale past 500+ users in 2 years?</td>
                        <td style={{ ...tdStyle, color: accentColor }}>Per-seat licensing will kill you</td>
                        <td style={tdStyle}>Licensing costs are manageable</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Do you need deep integration with proprietary systems?</td>
                        <td style={{ ...tdStyle, color: accentColor }}>Custom APIs are your only option</td>
                        <td style={tdStyle}>Standard integrations probably exist</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Is data security/compliance a primary concern?</td>
                        <td style={{ ...tdStyle, color: accentColor }}>Full control over data and infra</td>
                        <td style={tdStyle}>Vendor compliance certifications suffice</td>
                      </tr>
                      <tr>
                        <td style={{ ...tdStyle, color: '#ffffff' }}>Do you have ongoing dev resources for maintenance?</td>
                        <td style={{ ...tdStyle, color: accentColor }}>You can maintain and evolve it</td>
                        <td style={tdStyle}>Let the vendor handle updates</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <CodazzCallout>
                  <strong style={{ color: '#ffffff' }}>If you answered "Yes" to 4+ questions, custom software is likely the right path.</strong> If you answered "Yes" to 2 or fewer, start with off-the-shelf. The 3-question gray area? That is where a consultation with an experienced partner saves you months of indecision and potentially hundreds of thousands in wrong-direction investment.
                </CodazzCallout>

                {/* CASE STUDIES */}
                <h2 id="case-studies" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Real-World Case Studies</h2>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h4 style={{ color: accentColor, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 18 }}>🏭</span> Case Study: Manufacturing ERP (Custom Won)
                  </h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Client:</strong> Automotive parts manufacturer, 300+ employees, complex multi-stage production workflow</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Problem:</strong> Tried SAP Business One ($180K implementation). After 8 months, only 40% of their workflow was covered. Teams maintained parallel spreadsheets for the rest.</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Solution:</strong> Custom ERP built around their exact production stages, quality checkpoints, and supply chain processes. $250K investment.</p>
                  <p style={{ fontSize: 14, margin: 0 }}><strong style={{ color: '#ffffff' }}>Results:</strong> 35% reduction in production delays, eliminated 100% of parallel spreadsheets, 22% improvement in inventory accuracy. ROI achieved in 14 months.</p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(97,218,251,0.05)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(97,218,251,0.2)',
                }}>
                  <h4 style={{ color: '#61dafb', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 18 }}>🏢</span> Case Study: Marketing Agency CRM (Off-the-Shelf Won)
                  </h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Client:</strong> Digital marketing agency, 45 employees, wanted custom CRM to "differentiate"</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Our Advice:</strong> We told them NOT to build custom. Their workflows were standard -- client management, project tracking, invoicing. HubSpot CRM + Asana covered 95% of needs.</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Solution:</strong> HubSpot CRM (free tier + $800/mo Sales Hub) + Asana Business ($25/user/mo) + Zapier automations ($99/mo)</p>
                  <p style={{ fontSize: 14, margin: 0 }}><strong style={{ color: '#ffffff' }}>Results:</strong> Operational in 2 weeks. Total cost: $28K/year vs projected $120K custom build. Saved $92K and 5 months of development time. Client was able to invest the savings in actual marketing growth.</p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h4 style={{ color: accentColor, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 18 }}>🏥</span> Case Study: Healthcare Patient Portal (Hybrid Won)
                  </h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Client:</strong> Multi-location clinic network, needed patient booking + telehealth + EHR integration</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Approach:</strong> Hybrid -- used existing EHR system (Epic) for medical records, built custom patient-facing portal and booking engine that integrated with Epic via HL7 FHIR APIs</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Investment:</strong> $140K custom portal + existing Epic license. Saved an estimated $300K vs full custom EHR build.</p>
                  <p style={{ fontSize: 14, margin: 0 }}><strong style={{ color: '#ffffff' }}>Results:</strong> Patient satisfaction scores up 40%, no-show rate dropped 28%, staff saved 15 hours/week on scheduling. The custom portal became a competitive differentiator while Epic handled the complex medical record management.</p>
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
                    Not Sure? We Will Tell You Honestly.
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 20, fontSize: 16, lineHeight: 1.7, position: 'relative' }}>
                    We have turned away custom software projects when off-the-shelf was clearly the better choice. We would rather earn your trust than your budget. Our discovery process evaluates your workflows, tech stack, growth plans, and budget to give you an honest recommendation.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24, position: 'relative' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12 }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: accentColor, margin: 0 }}>200+</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>Custom software projects delivered</p>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12 }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: accentColor, margin: 0 }}>30%</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>Of inquiries we advise off-the-shelf</p>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12 }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: accentColor, margin: 0 }}>14mo</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>Average ROI payback period</p>
                    </div>
                  </div>

                  <div style={{ marginTop: 24, position: 'relative' }}>
                    <Link href="/contact" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: accentColor, color: '#000000',
                      padding: '14px 28px', borderRadius: 8,
                      fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'transform 0.2s',
                    }}>
                      Get Your Free Build vs Buy Consultation
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
                  { q: 'How long does custom software development take?', a: 'Typical custom business applications take 3-9 months from discovery to launch. An MVP can be ready in 6-10 weeks. Complex enterprise systems with multiple integrations can take 9-18 months. We always recommend launching an MVP first to validate assumptions before investing in a full build.' },
                  { q: 'Can I start with off-the-shelf and switch to custom later?', a: 'Yes, and we often recommend this approach. Start with off-the-shelf to validate your business model and understand your real workflows. Once you have outgrown the platform (hitting customization limits, per-seat costs becoming prohibitive, or needing unique features), migrate to custom. The data migration cost is worth the validated understanding of what you actually need.' },
                  { q: 'What if I need custom software but have a limited budget?', a: 'Start with an MVP that covers your most critical workflow. A focused custom application that does one thing exceptionally well can cost $30K-$60K. Scale from there as revenue grows. We have helped startups launch custom platforms for under $50K that grew into enterprise systems over 2-3 years.' },
                  { q: 'How do I avoid vendor lock-in with off-the-shelf software?', a: 'Three strategies: (1) Always export your data regularly and store backups independently, (2) Use platforms with strong API access so you can build integrations that are portable, (3) Avoid over-customizing on a single platform -- the deeper your customizations, the harder it is to leave. Document your workflows independently of any tool.' },
                  { q: 'Is the hybrid approach (custom + off-the-shelf) really practical?', a: 'Absolutely, and it is our most common recommendation. Use off-the-shelf for solved problems (accounting with QuickBooks, CRM with HubSpot, project management with Asana) and build custom for what makes your business unique. Modern APIs make integration between custom and off-the-shelf systems seamless. We have built hundreds of these hybrid architectures.' },
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
                  After 200+ custom projects and countless off-the-shelf implementations, here is what we tell every client:
                </p>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ marginBottom: 20, paddingLeft: 24, borderLeft: `3px solid ${accentColor}` }}>
                      <strong style={{ color: accentColor, fontSize: 17 }}>Choose Custom if:</strong>
                      <p style={{ margin: '8px 0 0', fontSize: 15 }}>The software IS your business or directly generates revenue, your workflows are genuinely unique, you are scaling past 500+ users, or you need full data ownership and security control. Custom is an investment in competitive advantage.</p>
                    </li>
                    <li style={{ marginBottom: 20, paddingLeft: 24, borderLeft: '3px solid #61dafb' }}>
                      <strong style={{ color: '#61dafb', fontSize: 17 }}>Choose Off-the-Shelf if:</strong>
                      <p style={{ margin: '8px 0 0', fontSize: 15 }}>You need to move fast, your workflows are standard, your team is under 200 people, and the software supports (rather than IS) your business. Off-the-shelf lets you focus budget on what actually differentiates you.</p>
                    </li>
                    <li style={{ paddingLeft: 24, borderLeft: '3px solid rgba(255,255,255,0.3)' }}>
                      <strong style={{ color: '#ffffff', fontSize: 17 }}>Choose Hybrid if:</strong>
                      <p style={{ margin: '8px 0 0', fontSize: 15 }}>You have standard needs AND unique workflows. Use off-the-shelf for commodity functions and custom for differentiators. This is our most common recommendation and often delivers the best ROI.</p>
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
                    Ready to Make the Right Choice?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 12, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
                    This decision affects your business for the next 5-10 years. Get it right the first time with honest, vendor-neutral advice from a team that builds both.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 24, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', fontSize: 14 }}>
                    Free 30-minute consultation. No sales pitch. Just honest advice.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: accentColor, color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none', transition: 'transform 0.2s',
                  }}>
                    Book Free Consultation
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
