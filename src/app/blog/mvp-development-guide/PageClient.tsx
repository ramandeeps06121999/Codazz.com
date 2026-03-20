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
  { id: 'what-is-mvp', label: 'What Is an MVP?', emoji: '🎯' },
  { id: '90-day-framework', label: '90-Day Framework', emoji: '📅' },
  { id: 'mvp-timeline', label: 'MVP Timeline', emoji: '⏱️' },
  { id: 'costs', label: 'Costs by Type', emoji: '💰' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'case-studies', label: 'Real Case Studies', emoji: '📊' },
  { id: 'success-metrics', label: 'Success Metrics', emoji: '📈' },
  { id: 'pitfalls', label: 'Common Pitfalls', emoji: '⚠️' },
  { id: 'post-mvp', label: 'Post-MVP Growth', emoji: '🚀' },
  { id: 'launch-with-codazz', label: 'Launch with Codazz', emoji: '✨' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native: The Definitive 2026 Comparison', category: 'Engineering', readTime: '15 min' },
];

/* ── Reusable style objects ── */
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
  padding: '12px 12px',
  color: '#ffffff',
  fontSize: 14,
  fontWeight: 700,
  whiteSpace: 'nowrap',
};

const tdStyle: React.CSSProperties = {
  padding: '12px 12px',
  fontSize: 14,
  verticalAlign: 'top',
};

const rowBorder: React.CSSProperties = {
  borderBottom: '1px solid rgba(255,255,255,0.05)',
};

const headRowBorder: React.CSSProperties = {
  borderBottom: '1px solid rgba(255,255,255,0.1)',
};

const founderTipStyle: React.CSSProperties = {
  background: 'rgba(180,253,131,0.06)',
  borderLeft: '4px solid #b4fd83',
  borderRadius: '0 12px 12px 0',
  padding: '20px 24px',
  marginBottom: 32,
  marginTop: 24,
};

const founderTipLabelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: '#b4fd83',
  marginBottom: 8,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};

export default function MVPDevelopmentGuideClient() {
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
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop"
              alt="Startup team working on product launch"
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
              The Complete MVP Development Guide: From Idea to Launch in 90 Days
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Step-by-step guide to building a successful MVP in 90 days. Learn the framework, avoid common mistakes, and launch faster with proven strategies from 500+ product launches.
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
                  <h3 style={{
                    fontSize: 16, fontWeight: 800, color: '#b4fd83', marginBottom: 16,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                    Key Takeaways
                  </h3>
                  <ul style={{ paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <li style={{ color: '#ffffff', fontSize: 15, lineHeight: 1.6 }}>
                      <strong>An MVP is not a half-finished product</strong> &mdash; it&apos;s a complete product with the minimum features needed to solve a real problem and validate your business idea.
                    </li>
                    <li style={{ color: '#ffffff', fontSize: 15, lineHeight: 1.6 }}>
                      <strong>90 days is the sweet spot.</strong> Shorter and you cut corners; longer and you risk building something nobody wants. Our framework breaks it into Discovery, Design, Development, Testing, and Launch.
                    </li>
                    <li style={{ color: '#ffffff', fontSize: 15, lineHeight: 1.6 }}>
                      <strong>Budget $15K&ndash;$60K for most MVPs</strong> &mdash; from landing-page MVPs to single-feature apps. Full-featured MVPs with backend, auth, and payments run $40K&ndash;$100K+.
                    </li>
                    <li style={{ color: '#ffffff', fontSize: 15, lineHeight: 1.6 }}>
                      <strong>Measure what matters early:</strong> sign-up rate, activation, Day-7 retention, and NPS. If fewer than 40% of users return after one week, pivot before scaling.
                    </li>
                    <li style={{ color: '#ffffff', fontSize: 15, lineHeight: 1.6 }}>
                      <strong>Feature creep is the #1 MVP killer.</strong> Use the MoSCoW method ruthlessly &mdash; the best MVPs ship 3&ndash;5 core features, not 30.
                    </li>
                  </ul>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    I&apos;ve seen it hundreds of times.
                  </p>
                  <p>
                    Founders spend 12 months and $200,000 building the &ldquo;perfect&rdquo; product. They launch. Crickets.
                  </p>
                  <p>
                    Meanwhile, their competitor ships a basic version in 6 weeks, gets 10,000 users, raises funding, and dominates the market.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    The difference? They understood what an MVP actually is.
                  </p>
                  <p>
                    An MVP isn&apos;t a half-finished product. It&apos;s a <strong style={{ color: '#ffffff' }}>complete product with minimum features</strong> that solves a real problem for real users.
                  </p>
                  <p>
                    At Codazz, we&apos;ve been part of <strong style={{ color: '#ffffff' }}>500+ product launches</strong>. The successful ones follow a specific pattern. This guide shows you exactly what that pattern is &mdash; week by week, dollar by dollar, decision by decision.
                  </p>
                </div>

                {/* ── Founder Tip #1 ── */}
                <div className="reveal" style={founderTipStyle}>
                  <p style={founderTipLabelStyle}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                    Founder Tip
                  </p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                    Before writing a single line of code, talk to 20 potential customers. If you can&apos;t find 20 people who have the problem you&apos;re solving, you don&apos;t have a business &mdash; you have a hobby. The conversations will save you months of wasted development.
                  </p>
                </div>

                {/* ── What is MVP ── */}
                <h2 id="what-is-mvp" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>What an MVP Actually Is (And Isn&apos;t)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&h=500&fit=crop"
                    alt="Product development and prototype design"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@headwayio" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Headway</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ff6b6b', marginTop: 32, marginBottom: 16 }}>
                  Common MVP Mistakes
                </h3>
                <div className="reveal" style={{
                  background: 'rgba(255,107,107,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,107,107,0.2)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={headRowBorder}>
                        <th style={thStyle}>Mistake</th>
                        <th style={thStyle}>Reality</th>
                        <th style={thStyle}>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={rowBorder}>
                        <td style={tdStyle}>&ldquo;MVP = Low Quality&rdquo;</td>
                        <td style={tdStyle}>Users won&apos;t tolerate bugs</td>
                        <td style={tdStyle}>Bad reviews, churn</td>
                      </tr>
                      <tr style={rowBorder}>
                        <td style={tdStyle}>&ldquo;MVP = All Features&rdquo;</td>
                        <td style={tdStyle}>Takes too long, costs too much</td>
                        <td style={tdStyle}>Competitor wins</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>&ldquo;Build First, Validate Later&rdquo;</td>
                        <td style={tdStyle}>Build something nobody wants</td>
                        <td style={tdStyle}>Total failure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#b4fd83', marginTop: 32, marginBottom: 16 }}>
                  The Real MVP Definition
                </h3>
                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                    &ldquo;A Minimum Viable Product is the smallest thing you can build that delivers customer value and validates your business hypothesis.&rdquo; &mdash; Eric Ries
                  </p>
                </div>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Key Characteristics:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}>Solves ONE problem really well</li>
                    <li style={{ marginBottom: 8 }}>Has polished UX (not just functional)</li>
                    <li style={{ marginBottom: 8 }}>Can handle real user traffic</li>
                    <li style={{ marginBottom: 8 }}>Collects data for learning</li>
                    <li>Built in 6&ndash;12 weeks, not 6&ndash;12 months</li>
                  </ul>
                </div>

                {/* ── 90-Day Framework ── */}
                <h2 id="90-day-framework" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The 90-Day MVP Framework</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=500&fit=crop"
                    alt="Timeline planning and schedule"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@esteejanssens" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Est&eacute;e Janssens</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Phase 1: Discover (Days 1&ndash;30)</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Problem validation &amp; customer interviews</li>
                      <li style={{ marginBottom: 8 }}>User personas &amp; journey maps</li>
                      <li style={{ marginBottom: 8 }}>Competitive analysis</li>
                      <li>Clickable prototype (Figma)</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Phase 2: Build (Days 31&ndash;75)</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Core feature development (3&ndash;5 max)</li>
                      <li style={{ marginBottom: 8 }}>Weekly stakeholder demos</li>
                      <li style={{ marginBottom: 8 }}>Continuous QA testing</li>
                      <li>Pre-launch polish &amp; performance</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Phase 3: Launch (Days 76&ndash;90)</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 8 }}>Soft launch to beta users</li>
                      <li style={{ marginBottom: 8 }}>Feedback collection &amp; hot fixes</li>
                      <li style={{ marginBottom: 8 }}>Public launch &amp; PR push</li>
                      <li>Analytics &amp; marketing activation</li>
                    </ul>
                  </div>
                </div>

                {/* ── Founder Tip #2 ── */}
                <div className="reveal" style={founderTipStyle}>
                  <p style={founderTipLabelStyle}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                    Founder Tip
                  </p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                    Set a hard launch date on Day 1 and tell everyone about it &mdash; your team, your investors, even your Twitter followers. Public accountability is the best antidote to perfectionism. The product will never feel &ldquo;ready,&rdquo; and that&apos;s okay.
                  </p>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 16 }}>
                  The MoSCoW Method
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>M</strong>ust have: Critical for launch &mdash; without these, the product has no value</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>S</strong>hould have: Important but not launch-blocking</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>C</strong>ould have: Nice to have &mdash; adds delight, not utility</li>
                    <li><strong style={{ color: '#ff6b6b' }}>W</strong>on&apos;t have: Save for v2. Ruthlessly cut everything here.</li>
                  </ul>
                </div>

                {/* ── MVP TIMELINE TABLE ── */}
                <h2 id="mvp-timeline" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>MVP Timeline: Week-by-Week Breakdown</h2>

                <div className="reveal" style={tableWrapStyle}>
                  <div style={tableContainerStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                      <thead>
                        <tr style={headRowBorder}>
                          <th style={thStyle}>Phase</th>
                          <th style={thStyle}>Activities</th>
                          <th style={thStyle}>Deliverables</th>
                          <th style={thStyle}>Est. Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Week 1&ndash;2</strong><br/>Discovery</td>
                          <td style={tdStyle}>Stakeholder interviews, market research, competitor audit, user personas</td>
                          <td style={tdStyle}>PRD, user stories, feature prioritization matrix</td>
                          <td style={tdStyle}>$3K&ndash;$8K</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Week 3&ndash;4</strong><br/>Design</td>
                          <td style={tdStyle}>Wireframes, UI design, interactive prototype, user testing (5&ndash;10 users)</td>
                          <td style={tdStyle}>Figma designs, clickable prototype, design system</td>
                          <td style={tdStyle}>$5K&ndash;$12K</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Week 5&ndash;8</strong><br/>Development</td>
                          <td style={tdStyle}>Frontend + backend build, API integrations, database setup, 2-week sprints</td>
                          <td style={tdStyle}>Working app (alpha), API docs, CI/CD pipeline</td>
                          <td style={tdStyle}>$15K&ndash;$40K</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Week 9&ndash;10</strong><br/>Testing</td>
                          <td style={tdStyle}>QA testing, beta user feedback, performance optimization, security audit</td>
                          <td style={tdStyle}>Bug-free beta, load test results, user feedback report</td>
                          <td style={tdStyle}>$4K&ndash;$10K</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Week 11&ndash;12</strong><br/>Launch</td>
                          <td style={tdStyle}>App store submission, landing page, analytics setup, marketing push</td>
                          <td style={tdStyle}>Live product, analytics dashboard, launch report</td>
                          <td style={tdStyle}>$3K&ndash;$8K</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="reveal" style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: 32 }}>
                  Total estimated range: <strong style={{ color: '#ffffff' }}>$30K&ndash;$78K</strong> for a full-featured 12-week MVP
                </p>

                {/* ── Founder Tip #3 ── */}
                <div className="reveal" style={founderTipStyle}>
                  <p style={founderTipLabelStyle}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                    Founder Tip
                  </p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                    Week 5 is the danger zone. That&apos;s when founders start saying &ldquo;Can we also add...?&rdquo; Every feature you add during development costs 3x what it would in the planning phase. Write every new idea on a &ldquo;v2 list&rdquo; and revisit after launch.
                  </p>
                </div>

                {/* ── COSTS BY TYPE TABLE ── */}
                <h2 id="costs" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>MVP Cost by Type (2026)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop"
                    alt="Budget planning and cost breakdown"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@homajob" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Scott Graham</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={tableWrapStyle}>
                  <div style={tableContainerStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 580 }}>
                      <thead>
                        <tr style={headRowBorder}>
                          <th style={thStyle}>MVP Type</th>
                          <th style={thStyle}>Cost Range</th>
                          <th style={thStyle}>Timeline</th>
                          <th style={thStyle}>Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Landing Page MVP</strong></td>
                          <td style={tdStyle}>$2K&ndash;$8K</td>
                          <td style={tdStyle}>1&ndash;2 weeks</td>
                          <td style={tdStyle}>Validating demand before building anything; collecting email sign-ups</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>No-Code MVP</strong></td>
                          <td style={tdStyle}>$5K&ndash;$15K</td>
                          <td style={tdStyle}>2&ndash;4 weeks</td>
                          <td style={tdStyle}>Non-technical founders; service marketplaces; internal tools</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Single-Feature App</strong></td>
                          <td style={tdStyle}>$15K&ndash;$40K</td>
                          <td style={tdStyle}>6&ndash;8 weeks</td>
                          <td style={tdStyle}>Consumer apps with one killer feature; B2B tools with focused workflow</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Full MVP</strong></td>
                          <td style={tdStyle}>$40K&ndash;$100K+</td>
                          <td style={tdStyle}>10&ndash;12 weeks</td>
                          <td style={tdStyle}>Marketplaces, SaaS platforms, apps needing auth + payments + dashboards</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 16 }}>
                  Where the Money Goes
                </h3>
                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Development (60%):</strong> Frontend, backend, APIs, integrations</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Design (20%):</strong> UI/UX, prototyping, user testing</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Infrastructure (10%):</strong> Hosting, domain, CI/CD, monitoring</li>
                    <li><strong style={{ color: '#ffffff' }}>Project Management (10%):</strong> Requirements, sprints, documentation</li>
                  </ul>
                </div>

                {/* ── Founder Tip #4 ── */}
                <div className="reveal" style={founderTipStyle}>
                  <p style={founderTipLabelStyle}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                    Founder Tip
                  </p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                    Start with a landing page MVP even if you plan to build a full app. Spending $3K on a landing page that collects 500 emails in two weeks gives you validation AND a launch audience. It&apos;s the cheapest insurance policy in startups.
                  </p>
                </div>

                {/* ── TECH STACK TABLE ── */}
                <h2 id="tech-stack" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>MVP Tech Stack Recommendations (2026)</h2>

                <div className="reveal" style={tableWrapStyle}>
                  <div style={tableContainerStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 580 }}>
                      <thead>
                        <tr style={headRowBorder}>
                          <th style={thStyle}>Layer</th>
                          <th style={thStyle}>Recommended Tool</th>
                          <th style={thStyle}>Monthly Cost</th>
                          <th style={thStyle}>Why We Recommend It</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Frontend</strong></td>
                          <td style={tdStyle}>Flutter / React Native</td>
                          <td style={tdStyle}>Free (open source)</td>
                          <td style={tdStyle}>One codebase for iOS + Android + Web; huge community; fast iteration</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Backend</strong></td>
                          <td style={tdStyle}>Supabase / Firebase</td>
                          <td style={tdStyle}>Free&ndash;$25/mo</td>
                          <td style={tdStyle}>Zero DevOps; built-in auth, storage, realtime; scales automatically</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Database</strong></td>
                          <td style={tdStyle}>PostgreSQL (Supabase) / Firestore</td>
                          <td style={tdStyle}>Free&ndash;$25/mo</td>
                          <td style={tdStyle}>Production-grade from day one; no migrations headaches later</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Hosting</strong></td>
                          <td style={tdStyle}>Vercel / Railway</td>
                          <td style={tdStyle}>Free&ndash;$20/mo</td>
                          <td style={tdStyle}>Auto-deploy from Git; global CDN; zero-config SSL</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Auth</strong></td>
                          <td style={tdStyle}>Supabase Auth / Auth0</td>
                          <td style={tdStyle}>Free&ndash;$23/mo</td>
                          <td style={tdStyle}>Social login, MFA, JWT &mdash; never roll your own auth</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Payments</strong></td>
                          <td style={tdStyle}>Stripe</td>
                          <td style={tdStyle}>2.9% + $0.30/txn</td>
                          <td style={tdStyle}>Industry standard; subscriptions, one-time, invoicing all built in</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="reveal" style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: 32 }}>
                  Total infrastructure cost for a typical MVP: <strong style={{ color: '#ffffff' }}>Under $50/month</strong> at launch
                </p>

                {/* ── Case Studies ── */}
                <h2 id="case-studies" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Real MVP Case Studies</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop"
                    alt="Mobile app success and launch"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@mr_fresh" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Yura Fresh</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Case Study 1: Fitness App MVP</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Budget:</strong> $25,000 | <strong>Timeline:</strong> 8 weeks</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>MVP Features:</strong> Workout logging, basic progress tracking, 20 pre-built workouts, simple profile</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Results:</strong> 5,000 users in first month, 4.6-star rating, $15K MRR by month 6, raised $500K seed</p>
                  <p style={{ fontSize: 14, margin: 0, color: '#b4fd83' }}><strong>Key Lesson:</strong> The core value was workout tracking. Everything else was noise.</p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 24,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Case Study 2: B2B SaaS MVP</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Budget:</strong> $45,000 | <strong>Timeline:</strong> 10 weeks</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>MVP Features:</strong> CSV upload, data visualization, PDF export, team sharing (5 users max)</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Results:</strong> 50 paying customers in 3 months, $8K MRR, 90% retention</p>
                  <p style={{ fontSize: 14, margin: 0, color: '#b4fd83' }}><strong>Key Lesson:</strong> B2B buyers need reliability over features.</p>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12 }}>Case Study 3: Marketplace MVP</h4>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Budget:</strong> $35,000 | <strong>Timeline:</strong> 12 weeks</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>MVP Features:</strong> Provider profiles, booking system, basic search, Stripe payments, review system</p>
                  <p style={{ fontSize: 14, marginBottom: 8 }}><strong>Results:</strong> 200 providers onboarded, 1,000 bookings in month 1, $25K GMV</p>
                  <p style={{ fontSize: 14, margin: 0, color: '#b4fd83' }}><strong>Key Lesson:</strong> Web-first MVP validated the model before expensive mobile development.</p>
                </div>

                {/* ── Founder Tip #5 ── */}
                <div className="reveal" style={founderTipStyle}>
                  <p style={founderTipLabelStyle}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                    Founder Tip
                  </p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                    Your first 10 customers are more valuable than your next 10,000. Onboard them personally &mdash; hop on Zoom calls, watch them use your product, and take notes. The patterns you spot in those first 10 sessions will shape your entire product roadmap.
                  </p>
                </div>

                {/* ── SUCCESS METRICS TABLE ── */}
                <h2 id="success-metrics" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>MVP Success Metrics: What to Measure &amp; When to Pivot</h2>

                <div className="reveal" style={tableWrapStyle}>
                  <div style={tableContainerStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
                      <thead>
                        <tr style={headRowBorder}>
                          <th style={thStyle}>Metric</th>
                          <th style={thStyle}>Target</th>
                          <th style={thStyle}>How to Measure</th>
                          <th style={thStyle}>When to Pivot</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Sign-ups</strong></td>
                          <td style={tdStyle}>500+ in first 30 days</td>
                          <td style={tdStyle}>Analytics dashboard; UTM-tagged acquisition channels</td>
                          <td style={tdStyle}>Under 100 sign-ups with $5K+ ad spend &mdash; rethink positioning</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Activation Rate</strong></td>
                          <td style={tdStyle}>40%+ complete core action</td>
                          <td style={tdStyle}>Funnel analysis: sign-up &rarr; onboarding &rarr; first value moment</td>
                          <td style={tdStyle}>Below 20% &mdash; simplify onboarding or redefine the core action</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Retention (Day 7)</strong></td>
                          <td style={tdStyle}>25%+ returning users</td>
                          <td style={tdStyle}>Cohort analysis; daily/weekly active users</td>
                          <td style={tdStyle}>Below 10% Day-7 &mdash; the product isn&apos;t solving a real pain</td>
                        </tr>
                        <tr style={rowBorder}>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>Revenue</strong></td>
                          <td style={tdStyle}>Any paying customer in 60 days</td>
                          <td style={tdStyle}>Stripe dashboard; conversion from free to paid</td>
                          <td style={tdStyle}>Zero revenue after 90 days with 500+ users &mdash; wrong monetization model</td>
                        </tr>
                        <tr>
                          <td style={tdStyle}><strong style={{ color: '#b4fd83' }}>NPS Score</strong></td>
                          <td style={tdStyle}>40+ (good), 70+ (exceptional)</td>
                          <td style={tdStyle}>In-app survey: &ldquo;How likely to recommend?&rdquo; (0&ndash;10 scale)</td>
                          <td style={tdStyle}>Below 20 &mdash; users are tolerating, not loving, your product</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── Pitfalls ── */}
                <h2 id="pitfalls" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Common MVP Pitfalls (And How to Dodge Them)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1621252179027-94459d27d3ee?w=800&h=500&fit=crop"
                    alt="Warning signs and caution for pitfalls"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@mojahidmottakin" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Mojahid Mottakin</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}>
                      <strong style={{ color: '#ff6b6b' }}>Feature Creep:</strong> &ldquo;Let&apos;s just add this one more thing...&rdquo;
                      <br/><span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Cost: 3-month delay, $50K over budget. Prevention: Strict MoSCoW prioritization and a &ldquo;v2 parking lot&rdquo; document.</span>
                    </li>
                    <li style={{ marginBottom: 16 }}>
                      <strong style={{ color: '#ff6b6b' }}>Perfectionism:</strong> &ldquo;It&apos;s not ready yet&rdquo; after 6 months.
                      <br/><span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Prevention: Set a hard launch date on Day 1. Define &ldquo;good enough&rdquo; criteria before you start building.</span>
                    </li>
                    <li style={{ marginBottom: 16 }}>
                      <strong style={{ color: '#ff6b6b' }}>Wrong Tech Stack:</strong> Spending months on infrastructure nobody asked for.
                      <br/><span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Prevention: Use proven stacks (see table above). Avoid bleeding-edge tech for your MVP.</span>
                    </li>
                    <li style={{ marginBottom: 16 }}>
                      <strong style={{ color: '#ff6b6b' }}>No User Feedback Loop:</strong> Building in isolation for 4 months.
                      <br/><span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Prevention: Weekly user testing starting from Week 2. Ship beta access early.</span>
                    </li>
                    <li>
                      <strong style={{ color: '#ff6b6b' }}>Ignoring Legal/Compliance:</strong> App rejected from store or GDPR violation.
                      <br/><span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Prevention: Legal review in Week 1. Privacy policy and terms drafted before development starts.</span>
                    </li>
                  </ul>
                </div>

                {/* ── Founder Tip #6 ── */}
                <div className="reveal" style={founderTipStyle}>
                  <p style={founderTipLabelStyle}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                    Founder Tip
                  </p>
                  <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                    The biggest pitfall I never see on lists: <strong style={{ color: '#ffffff' }}>hiring too early.</strong> You don&apos;t need a 5-person team for an MVP. One strong full-stack developer and one designer can outship a bloated team every time. Keep it lean until you have product-market fit.
                  </p>
                </div>

                {/* ── Post-MVP ── */}
                <h2 id="post-mvp" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Post-MVP: What Comes Next?</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                    alt="Growth chart and success metrics"
                    width={800}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@kmuza" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Carlos Muza</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Month 1&ndash;3: Iterate</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Collect user feedback daily. Fix critical bugs. A/B test onboarding. Optimize conversion funnels. Talk to churned users.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Month 4&ndash;6: Product-Market Fit</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Measure retention (aim for 40%+ Day 30). Calculate unit economics. Identify power users and double down on what they love.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Month 7&ndash;12: Scale</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Build Phase 2 features from your v2 list. Expand team strategically. Increase marketing spend. Consider fundraising.</p>
                  </div>
                </div>

                {/* ── LAUNCH YOUR MVP WITH CODAZZ ── */}
                <h2 id="launch-with-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Launch Your MVP with Codazz</h2>

                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 'clamp(28px, 4vw, 40px)', marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.25)',
                }}>
                  <p style={{ fontSize: 18, color: '#ffffff', fontWeight: 600, marginBottom: 16, lineHeight: 1.5 }}>
                    We don&apos;t just build MVPs &mdash; we launch products that find customers.
                  </p>
                  <p style={{ marginBottom: 20, lineHeight: 1.75 }}>
                    With <strong style={{ color: '#ffffff' }}>500+ product launches</strong> across consumer apps, B2B SaaS, marketplaces, and AI-powered platforms, we&apos;ve refined a <strong style={{ color: '#b4fd83' }}>90-day MVP framework</strong> that&apos;s been battle-tested by funded startups and bootstrapped founders alike.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 24,
                  }}>
                    <div style={{
                      background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: 16, textAlign: 'center',
                      border: '1px solid rgba(180,253,131,0.15)',
                    }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>500+</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Products Launched</p>
                    </div>
                    <div style={{
                      background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: 16, textAlign: 'center',
                      border: '1px solid rgba(180,253,131,0.15)',
                    }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>90</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Days to Launch</p>
                    </div>
                    <div style={{
                      background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: 16, textAlign: 'center',
                      border: '1px solid rgba(180,253,131,0.15)',
                    }}>
                      <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>4.9/5</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Client Satisfaction</p>
                    </div>
                  </div>

                  <p style={{ marginBottom: 16, fontWeight: 500, color: '#ffffff' }}>Here&apos;s what working with us looks like:</p>
                  <ul style={{ paddingLeft: 24, margin: '0 0 24px', fontSize: 15 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Week 1:</strong> Free strategy session &mdash; we map your idea to a concrete MVP scope</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Weeks 2&ndash;4:</strong> Design sprint &mdash; clickable Figma prototype you can test with real users</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Weeks 5&ndash;10:</strong> Development sprints with weekly demos &mdash; you see progress every Friday</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Weeks 11&ndash;12:</strong> QA, launch prep, and go-live &mdash; we&apos;re in the trenches with you on launch day</li>
                    <li><strong style={{ color: '#ffffff' }}>Post-launch:</strong> 30 days of free bug fixes and optimization support</li>
                  </ul>

                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 24, fontStyle: 'italic' }}>
                    &ldquo;We came to Codazz with a napkin sketch and left with a funded startup. Their 90-day process turned our idea into a product with 2,000 users before our seed round.&rdquo;
                  </p>

                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: '#b4fd83', color: '#000000',
                      padding: '14px 28px', borderRadius: 8,
                      fontWeight: 700, textDecoration: 'none',
                      transition: 'transform 0.2s',
                    }}>
                      Book Your Free MVP Strategy Call
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link href="/services" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'transparent', color: '#b4fd83',
                      padding: '14px 28px', borderRadius: 8,
                      fontWeight: 600, textDecoration: 'none',
                      border: '1px solid rgba(180,253,131,0.3)',
                      transition: 'all 0.2s',
                    }}>
                      View Our Services
                    </Link>
                  </div>
                </div>

                {/* ── Final CTA ── */}
                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 16, padding: 32, marginTop: 48, textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Stop Planning. Start Building.
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
                    The best time to launch was yesterday. The second best time is right now. Your idea is worth nothing until it&apos;s in the hands of real users.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Start Your MVP Journey
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
