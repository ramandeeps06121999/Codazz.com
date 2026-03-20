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

const sections = [
  { id: 'takeaways', title: 'Key Takeaways' },
  { id: 'definition', title: 'What is SaaS in 2026?' },
  { id: 'comparison', title: 'Business Model Comparison' },
  { id: 'features', title: 'How SaaS Earns Money' },
  { id: 'metrics', title: 'SaaS Metrics Dashboard' },
  { id: 'mistake', title: 'The Biggest Mistake' },
  { id: 'timeline', title: 'Idea to MRR in 90 Days' },
  { id: 'stack', title: 'Custom vs. No-Code' },
  { id: 'techstack', title: 'Recommended Tech Stack' },
  { id: 'cost', title: 'Development Costs' },
  { id: 'build-with-codazz', title: 'Build with Codazz' },
];

const relatedPosts = [
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps of 2026', category: 'Business', readTime: '8 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA', category: 'Business', readTime: '10 min' },
];

/* ── Reusable style helpers ── */
const tableHeaderStyle: React.CSSProperties = {
  padding: '14px 18px', textAlign: 'left' as const, fontSize: 13, fontWeight: 700,
  color: '#22c55e', textTransform: 'uppercase' as const, letterSpacing: '0.06em',
  borderBottom: '1px solid rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.06)',
};
const tableCellStyle: React.CSSProperties = {
  padding: '14px 18px', fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
  borderBottom: '1px solid rgba(255,255,255,0.04)', verticalAlign: 'top' as const,
};
const tableCellBoldStyle: React.CSSProperties = { ...tableCellStyle, color: '#ffffff', fontWeight: 600 };

function FounderTip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'rgba(34,197,94,0.05)', borderLeft: '4px solid #22c55e',
      borderRadius: '0 16px 16px 0', padding: '24px 28px', marginBottom: 32,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -15, right: -15, width: 80, height: 80, background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(15px)' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 18 }}>💡</span>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#22c55e' }}>Founder Tip</span>
      </div>
      <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default function SaaSGuide2026Client() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);

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

        {/* ── FEATURED IMAGE ── */}
        <div className="reveal" style={{ marginBottom: 40 }}>
          <img
            src="/blog_images/saas-guide.jpg"
            alt="Complete SaaS startup guide 2026 - from idea to monthly recurring revenue"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: 'clamp(16px, 3vw, 24px)',
            }}
          />
        </div>

        {/* ── ARTICLE HERO ── */}
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
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 14, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                12 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              From Idea to MRR: How to Build a Profitable SaaS in 2026
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The definitive blueprint non-technical founders use to build, launch, and scale successful B2B SaaS applications — with comparison tables, real metrics, a 90-day timeline, and the tech stack recommendations that matter in 2026.
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

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* ── KEY TAKEAWAYS BOX ── */}
                <div className="reveal" id="takeaways" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                  border: '1px solid rgba(34,197,94,0.2)', borderRadius: 24, padding: 'clamp(28px, 4vw, 40px)',
                  marginBottom: 56, position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: -30, right: -30, width: 150, height: 150, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🔑</div>
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: '#22c55e', margin: 0, letterSpacing: '-0.02em' }}>Key Takeaways</h2>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', zIndex: 1 }}>
                    {[
                      'B2B SaaS with niche focus outperforms broad B2C by 3-5x on revenue per customer in 2026.',
                      'Validate before you build: a 2-week landing page test can save you $50,000+ in wasted development.',
                      'The winning 2026 tech stack is Next.js + Node.js + PostgreSQL — fast, scalable, and AI-ready.',
                      'Target 90 days from idea to first paying customer using the week-by-week launch timeline below.',
                      'Track five core metrics from day one: MRR, Churn Rate, CAC, LTV, and NPS — they determine survival.',
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: '50%', background: 'rgba(34,197,94,0.15)',
                          color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, marginTop: 2, fontSize: 12, fontWeight: 800,
                        }}>{i + 1}</div>
                        <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The Software as a Service (SaaS) landscape has shifted dramatically. What worked in 2022 no longer works in 2026. With the rise of advanced AI integrations, hyper-niche B2B solutions, and demanding user expectations, launching a generic tool will not cut it anymore.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    If you are a founder looking to build a profitable SaaS product this year — whether you are technical or not — this guide is your complete blueprint. We are covering business models, tech stacks, real metrics, a 90-day launch plan, and the exact mistakes that kill 90% of SaaS startups before they hit $10K MRR.
                  </p>
                </div>

                <FounderTip>
                  <strong>Before you read further:</strong> bookmark this page. Founders who revisit this guide during each phase of their build have told us it saved them months of trial and error. This is not a skim-it-once article — it is a reference manual.
                </FounderTip>

                {/* ── SECTION: WHAT IS SAAS ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="definition">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    What Exactly is a SaaS Business Model in 2026?
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    At its core, SaaS is software hosted in the cloud that customers pay a recurring subscription (Monthly Recurring Revenue or MRR) to access. No downloads, no installations — just log in and go.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, the definition has evolved. Modern SaaS is not just about providing a digital tool — it is about providing an <strong>automated outcome</strong>. The most successful products today do not just organize data. They use AI to analyze it, act on it, and save the user hours of manual labor every single week.
                  </p>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 16, padding: 24, marginBottom: 16,
                  }}>
                    <p style={{ fontSize: 16, color: '#ffffff', margin: '0 0 8px', fontWeight: 600 }}>B2C SaaS (Business-to-Consumer):</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', margin: 0 }}>Think Netflix or Spotify — high volume, low price per user. Great for mass markets but brutal on margins.</p>
                  </div>
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 16, padding: 24, marginBottom: 16,
                  }}>
                    <p style={{ fontSize: 16, color: '#ffffff', margin: '0 0 8px', fontWeight: 600 }}>B2B SaaS (Business-to-Business):</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: 0 }}>Think Salesforce, Slack, or niche industry tools like software specifically for dental clinics — lower volume, high price per customer. <strong>This is where the real money is made in 2026.</strong></p>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 16, padding: 24,
                  }}>
                    <p style={{ fontSize: 16, color: '#ffffff', margin: '0 0 8px', fontWeight: 600 }}>B2B2C SaaS (Business-to-Business-to-Consumer):</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', margin: 0 }}>Think Stripe or Shopify — you sell to businesses who then serve their consumers through your platform. Massive scale potential with strong retention.</p>
                  </div>
                </div>

                {/* ── TABLE: SaaS Business Model Comparison ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    SaaS Business Model Comparison
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Choosing the right model determines your pricing, your sales motion, and ultimately how fast you can scale. Here is how the three dominant models compare head-to-head:
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 650 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Factor</th>
                          <th style={tableHeaderStyle}>B2B</th>
                          <th style={tableHeaderStyle}>B2C</th>
                          <th style={tableHeaderStyle}>B2B2C</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Revenue Model', 'High-ticket subscriptions, annual contracts', 'Low-cost monthly subs, freemium', 'Platform fees, revenue share, per-transaction'],
                          ['Avg. Deal Size', '$500 - $25,000+/mo', '$5 - $50/mo', '$100 - $5,000/mo per partner'],
                          ['Sales Cycle', '2-12 weeks (relationship-driven)', 'Instant (self-serve)', '4-16 weeks (partnership-driven)'],
                          ['Pros', 'High LTV, predictable revenue, low churn', 'Massive TAM, viral growth potential', 'Network effects, high stickiness, dual revenue'],
                          ['Cons', 'Long sales cycles, requires sales team', 'High churn, expensive acquisition', 'Complex integrations, slower to launch'],
                          ['Examples', 'Salesforce, HubSpot, Codazz client portals', 'Netflix, Spotify, Notion', 'Stripe, Shopify, Plaid'],
                          ['Best For', 'Founders with industry expertise', 'Consumer-grade UX teams', 'Platform thinkers with dev resources'],
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={tableCellBoldStyle}>{row[0]}</td>
                            <td style={tableCellStyle}>{row[1]}</td>
                            <td style={tableCellStyle}>{row[2]}</td>
                            <td style={tableCellStyle}>{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <FounderTip>
                    If this is your first SaaS, go B2B and pick a niche you already understand. You only need 20-50 paying customers at $500/mo to hit $10K-$25K MRR. With B2C you would need thousands of users to reach the same number. Niche B2B is the fastest path to profitability.
                  </FounderTip>
                </div>

                {/* ── SECTION: HOW SAAS EARNS MONEY ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="features">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    How SaaS Companies Actually Earn Money
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    It sounds simple: charge a monthly fee. But pricing strategy is the single biggest lever between a side hustle and a scalable enterprise. Get this wrong and nothing else matters.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20, marginBottom: 24 }}>
                    <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>📊</div>
                      <h3 style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: '0 0 8px' }}>1. Tiered Pricing</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>The gold standard. Offer Basic, Pro, and Enterprise tiers. This captures small businesses early and upsells them as they grow. Most B2B SaaS unicorns use this model.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>⚡</div>
                      <h3 style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: '0 0 8px' }}>2. Usage-Based</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>Charge based on consumption — API calls, AI tokens, emails sent, or storage used. This model has exploded in 2026 thanks to AI-powered features with variable costs.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>🎁</div>
                      <h3 style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: '0 0 8px' }}>3. Freemium</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>Offer a limited version for free to acquire users rapidly, then gate the most valuable features behind a paywall. Works best when your free tier is addictive.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>⏱️</div>
                      <h3 style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: '0 0 8px' }}>4. Annual Contracts</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>Lock in annual commitments at a discount (typically 15-20% off monthly pricing). This gives you upfront cash to fund development and reduces churn simultaneously.</p>
                    </div>
                  </div>

                  <FounderTip>
                    <strong>The hybrid approach wins in 2026:</strong> combine tiered pricing with usage-based add-ons. Charge a base monthly fee for core features, then meter AI usage, API calls, or premium integrations on top. This protects your margins while letting power users scale their spend naturally.
                  </FounderTip>
                </div>

                {/* ── TABLE: SaaS Metrics Dashboard ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="metrics">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 12,
                  }}>
                    SaaS Metrics Dashboard: The 5 Numbers That Determine Survival
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    You cannot improve what you do not measure. From day one of your launch, these five metrics should be on a dashboard you check every single morning. Miss one, and your SaaS slowly bleeds out. Nail all five, and you have a machine.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Metric</th>
                          <th style={tableHeaderStyle}>What It Is</th>
                          <th style={tableHeaderStyle}>Target Range</th>
                          <th style={tableHeaderStyle}>How to Improve</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['MRR', 'Monthly Recurring Revenue — total predictable revenue each month', '$10K+ within 12 months', 'Increase pricing, upsell existing customers, reduce discounting'],
                          ['Churn Rate', 'Percentage of customers who cancel each month', 'Under 5% monthly (under 2% for enterprise)', 'Improve onboarding, add sticky features, proactive customer success'],
                          ['CAC', 'Customer Acquisition Cost — total spend to land one paying customer', 'Less than 1/3 of LTV', 'Optimize ad spend, build organic channels, improve conversion funnels'],
                          ['LTV', 'Lifetime Value — total revenue a customer generates before churning', '3x or higher than CAC', 'Reduce churn, increase ARPU with upsells and add-ons, annual contracts'],
                          ['NPS', 'Net Promoter Score — would customers recommend you? (-100 to +100)', '+40 or higher', 'Act on feedback fast, ship quality releases, invest in support experience'],
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={{ ...tableCellBoldStyle, color: '#22c55e', whiteSpace: 'nowrap' }}>{row[0]}</td>
                            <td style={tableCellStyle}>{row[1]}</td>
                            <td style={{ ...tableCellStyle, color: '#ffffff', fontWeight: 600, whiteSpace: 'nowrap' }}>{row[2]}</td>
                            <td style={tableCellStyle}>{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <FounderTip>
                    <strong>The golden ratio:</strong> if your LTV:CAC ratio is 3:1 or better, you have a scalable business. If it is under 1:1, you are literally paying more to acquire customers than they are worth. We have seen founders burn through $200K in ad spend before realizing this. Check this ratio weekly.
                  </FounderTip>
                </div>

                {/* ── SECTION: BIGGEST MISTAKE ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="mistake">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    The Biggest Mistake: Building Before Validating
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    We see it constantly at Codazz: a founder spends $50,000 and six months building a massive application, only to launch it and realize nobody wants to pay for it. The graveyard of SaaS products is full of beautifully engineered tools that solved problems nobody had.
                  </p>
                  <div style={{
                    background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden', marginBottom: 24,
                  }}>
                    <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                    <p style={{ fontSize: 16, color: '#ffffff', lineHeight: 1.8, margin: 0, position: 'relative', zIndex: 1, fontWeight: 500 }}>
                      Before writing a single line of code, you need an <strong>MVP (Minimum Viable Product)</strong>. An MVP is not a broken version of your app. It is the absolute <em>minimum</em> amount of features required to solve your customer's core problem and prove they are willing to pay real money for it.
                    </p>
                  </div>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    <strong style={{ color: '#ffffff' }}>The validation playbook:</strong> before any development starts, do these three things in order:
                  </p>
                  <ol style={{ padding: '0 0 0 20px', margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <li style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                      <strong style={{ color: '#ffffff' }}>Talk to 20 potential customers.</strong> Not friends. Not family. Real people who match your target customer profile. Ask them what their biggest pain point is — do not pitch your solution yet.
                    </li>
                    <li style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                      <strong style={{ color: '#ffffff' }}>Build a landing page with a waitlist.</strong> Spend $500 on targeted ads driving to a page that explains your solution. If you cannot get 100 signups in 2 weeks, rethink your positioning.
                    </li>
                    <li style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                      <strong style={{ color: '#ffffff' }}>Pre-sell before building.</strong> Offer early-bird annual pricing at 50% off. If 5-10 people hand you money for a product that does not exist yet, you have validated demand.
                    </li>
                  </ol>

                  <FounderTip>
                    <strong>The "Mom Test" rule:</strong> never ask "would you use this?" — people always say yes to be polite. Instead ask: "Tell me about the last time you dealt with [problem]. What did you do? How much did it cost you?" If they light up and start venting, you have found a real pain point worth solving.
                  </FounderTip>
                </div>

                {/* ── TABLE: 90-Day Launch Timeline ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="timeline">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 12,
                  }}>
                    SaaS Launch Timeline: Idea to MRR in 90 Days
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    This is the exact week-by-week framework we use with Codazz clients to go from napkin sketch to first paying customer in 90 days. It is aggressive but realistic if you stay disciplined and avoid scope creep.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 650 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Week</th>
                          <th style={tableHeaderStyle}>Phase</th>
                          <th style={tableHeaderStyle}>Key Activities</th>
                          <th style={tableHeaderStyle}>Deliverables</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['1-2', 'Validation', 'Customer interviews (20+), competitor analysis, define ICP, pain-point mapping', 'Validated problem statement, ICP document'],
                          ['3-4', 'Design & Architecture', 'Wireframes, user flows, database schema, API design, tech stack finalization', 'Figma prototype, technical spec document'],
                          ['5-6', 'Core MVP Build', 'Authentication, core feature #1, database setup, basic dashboard', 'Working auth flow, core feature functional'],
                          ['7-8', 'Feature Completion', 'Core feature #2-3, payment integration (Stripe), email notifications', 'Feature-complete MVP, payment flow working'],
                          ['9-10', 'Polish & Testing', 'UI polish, bug fixes, security audit, load testing, onboarding flow', 'Production-ready MVP, staging environment'],
                          ['11-12', 'Beta Launch', 'Invite 20-50 beta users, collect feedback, iterate rapidly, build waitlist', 'Beta feedback report, prioritized backlog'],
                          ['13', 'Public Launch', 'Launch on Product Hunt, activate waitlist, turn on paid acquisition, PR push', 'First paying customers, MRR started'],
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={{ ...tableCellBoldStyle, color: '#22c55e', whiteSpace: 'nowrap' }}>{row[0]}</td>
                            <td style={{ ...tableCellBoldStyle, whiteSpace: 'nowrap' }}>{row[1]}</td>
                            <td style={tableCellStyle}>{row[2]}</td>
                            <td style={tableCellStyle}>{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <FounderTip>
                    <strong>Weeks 1-4 are the most important.</strong> Most founders want to skip straight to building. Do not. The teams that spend proper time on validation and architecture end up shipping faster and pivoting less. We have seen clients save 3+ months of rework by investing 4 weeks upfront in design and validation.
                  </FounderTip>
                </div>

                {/* ── SECTION: CUSTOM VS NO-CODE ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="stack">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Custom Software vs. No-Code in 2026
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    In 2026, no-code tools are more powerful than ever — but they still have major limitations when building a serious, scalable SaaS product that handles real money and real data.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    If you are just testing an idea for two weeks, a no-code wrapper might work. But if you are building an application that handles complex data, integrates proprietary AI, or needs to scale securely to thousands of users, you need custom architecture. Here is why:
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { title: 'Performance', desc: 'A Next.js and Node.js application loads instantly and handles thousands of concurrent users without breaking a sweat. No-code platforms buckle under real traffic and add 2-5 seconds of latency.' },
                      { title: 'Ownership', desc: 'You actually own the intellectual property and the codebase. You do not lease your core product from a third-party builder who can change their pricing or shut down overnight.' },
                      { title: 'Security & Compliance', desc: 'B2B clients demand rigorous security compliance (SOC2, HIPAA, GDPR) that no-code builders simply cannot guarantee. One data breach kills your company.' },
                      { title: 'AI Integration', desc: 'Custom code lets you integrate any AI model, fine-tune it on your data, and build proprietary features that no-code tools cannot replicate. This is your competitive moat in 2026.' },
                      { title: 'Exit Value', desc: 'Acquirers pay 5-10x more for companies with proprietary codebases than for companies built on no-code platforms. Your tech stack is part of your valuation.' },
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: 16 }}>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <div>
                          <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>{item.title}</strong>
                          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.6 }}>{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── TABLE: Recommended Tech Stack ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="techstack">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 12,
                  }}>
                    The 2026 SaaS Tech Stack: What to Use and What It Costs
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Stop googling "best tech stack" — we have built over 500 products and this is what actually works for SaaS in 2026. Every recommendation below is battle-tested at scale.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 650 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Layer</th>
                          <th style={tableHeaderStyle}>Recommended Tools</th>
                          <th style={tableHeaderStyle}>Why This Choice</th>
                          <th style={tableHeaderStyle}>Monthly Cost (MVP)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Frontend', 'Next.js 15 + React 19 + Tailwind CSS', 'SSR for SEO, server components for speed, massive ecosystem', '$0 (open source)'],
                          ['Backend / API', 'Node.js + tRPC or Next.js API Routes', 'TypeScript end-to-end, type-safe APIs, fast iteration', '$0 (open source)'],
                          ['Database', 'PostgreSQL (via Supabase or Neon)', 'Relational data integrity, JSON support, scales to millions of rows', '$0 - $25/mo'],
                          ['Authentication', 'Clerk or NextAuth.js', 'SSO, MFA, role-based access out of the box, SOC2 ready', '$0 - $25/mo'],
                          ['Hosting', 'Vercel (frontend) + AWS/Railway (backend)', 'Edge deployment, auto-scaling, zero-config CI/CD', '$20 - $50/mo'],
                          ['Payments', 'Stripe Billing + Stripe Tax', 'Subscription management, invoicing, tax compliance, global payouts', '2.9% + $0.30 per txn'],
                          ['Email', 'Resend or Postmark', 'Transactional email with high deliverability, developer-friendly APIs', '$0 - $20/mo'],
                          ['Analytics', 'PostHog or Mixpanel', 'Product analytics, funnel tracking, feature flags, session replay', '$0 - $50/mo'],
                          ['AI / LLM', 'OpenAI API + LangChain', 'GPT-4o for features, embeddings for search, fine-tuning for custom models', '$20 - $200/mo (usage)'],
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={{ ...tableCellBoldStyle, color: '#22c55e', whiteSpace: 'nowrap' }}>{row[0]}</td>
                            <td style={tableCellBoldStyle}>{row[1]}</td>
                            <td style={tableCellStyle}>{row[2]}</td>
                            <td style={{ ...tableCellStyle, whiteSpace: 'nowrap' }}>{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 16 }}>
                    <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Total estimated infrastructure cost for MVP:</strong> $40 - $370/month. Compare that to the $25K-$75K+ in no-code platform fees and limitations you would face at scale.
                  </p>

                  <FounderTip>
                    <strong>Do not over-engineer on day one.</strong> Start with Vercel + Supabase + Stripe. That stack gets you from zero to launch for under $50/month in infrastructure. You can migrate to dedicated AWS infrastructure once you hit $10K MRR and actually need the scale. Premature optimization is how startups burn cash.
                  </FounderTip>
                </div>

                {/* ── SECTION: DEVELOPMENT COSTS ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    How Much Does It Actually Cost to Build a SaaS in 2026?
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    Transparency is key, and most agencies dodge this question. We will not. Building a robust MVP with a professional agency in the USA is an investment in your business infrastructure — and you should know exactly what you are paying for.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    While a simple informational website costs a few thousand dollars, a custom SaaS application — with user authentication, database architecture, payment gateways, AI features, and a polished dashboard — typically ranges from <strong style={{ color: '#ffffff' }}>$25,000 to $75,000+</strong> for an MVP.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Why? Because you are not buying a template. You are hiring a team of engineers, designers, and project managers to architect a digital product that generates revenue passively — month after month, year after year. The ROI on a well-built SaaS typically exceeds 10x within 18 months.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { range: '$15K - $30K', label: 'Simple MVP', desc: 'Auth, 1-2 core features, basic dashboard, Stripe integration', timeline: '6-8 weeks' },
                      { range: '$30K - $60K', label: 'Standard SaaS', desc: 'Multi-tenant, role-based access, AI features, analytics, API', timeline: '10-14 weeks' },
                      { range: '$60K - $120K+', label: 'Enterprise Platform', desc: 'SSO/SAML, compliance, white-labeling, complex integrations, mobile', timeline: '16-24 weeks' },
                    ].map((tier, i) => (
                      <div key={i} style={{
                        background: i === 1 ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.015)',
                        border: `1px solid ${i === 1 ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`,
                        borderRadius: 20, padding: 24,
                      }}>
                        <p style={{ fontSize: 24, fontWeight: 800, color: i === 1 ? '#22c55e' : '#ffffff', margin: '0 0 4px' }}>{tier.range}</p>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tier.label}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: '0 0 12px', lineHeight: 1.6 }}>{tier.desc}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0 }}>Timeline: {tier.timeline}</p>
                      </div>
                    ))}
                  </div>

                  <FounderTip>
                    <strong>Think investment, not expense.</strong> A $40K MVP that generates $10K MRR pays for itself in 4 months — then prints money every month after that. Compare that to hiring a single full-time senior developer at $150K+/year who still needs a designer, project manager, and DevOps engineer. An agency gives you an entire team for a fraction of the cost with zero HR overhead.
                  </FounderTip>
                </div>

                {/* ── SECTION: BUILD YOUR SAAS WITH CODAZZ ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-with-codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)', borderRadius: 24,
                    padding: 'clamp(32px, 5vw, 56px)', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                    <div style={{ position: 'absolute', bottom: -30, left: -30, width: 150, height: 150, background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>Build Your SaaS with Codazz</p>
                      <h2 style={{
                        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#ffffff',
                        letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.15,
                      }}>
                        Stop Reading About Building a SaaS.<br />Start Actually Building One.
                      </h2>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 28, maxWidth: 640 }}>
                        At Codazz, we have helped over 500 founders turn their SaaS ideas into revenue-generating products. Our engineering team in Edmonton and Chandigarh specializes in building custom Next.js SaaS platforms — from MVP to scale — with the exact tech stack and timeline covered in this guide.
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 16, marginBottom: 32 }}>
                        {[
                          { icon: '🚀', title: 'MVP in 8-12 Weeks', desc: 'From validated idea to live product with paying customers' },
                          { icon: '🤖', title: 'AI-Native Architecture', desc: 'Built-in AI features that give you a competitive moat' },
                          { icon: '📈', title: 'Built to Scale', desc: 'Enterprise-grade infrastructure that grows with your MRR' },
                          { icon: '🔒', title: 'Security First', desc: 'SOC2-ready architecture with compliance baked in from day one' },
                        ].map((item, i) => (
                          <div key={i} style={{
                            background: 'rgba(0,0,0,0.2)', borderRadius: 16, padding: 20,
                            border: '1px solid rgba(34,197,94,0.1)',
                          }}>
                            <span style={{ fontSize: 24, display: 'block', marginBottom: 10 }}>{item.icon}</span>
                            <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 6px' }}>{item.title}</p>
                            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                          <button style={{
                            padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                            fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                            transition: 'all 0.2s', whiteSpace: 'nowrap',
                          }}>
                            Book a Free Discovery Call →
                          </button>
                        </Link>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>No commitment. 30-minute call. We will tell you if your idea is viable.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {sections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '8px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
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
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{section.title}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
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
                        background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
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
                          textDecoration: 'none', display: 'block', padding: '14px',
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
                          <p style={{ fontSize: 11, color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
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

        {/* ── BOTTOM CTA ── */}
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
                  color: '#ffffff', marginBottom: 12,
                }}>Start Building</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Building something ambitious?<br />Let&apos;s talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  We develop the engineering foundations of the fastest-growing companies in the USA. Let us build yours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Book a Technical Discovery Call →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff', marginBottom: 32 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {[
                { title: 'SaaS Development Cost in the USA', href: '/blog/saas-development-cost-usa' },
                { title: 'Top 10 Unicorn Apps of 2026', href: '/blog/top-10-unicorn-apps-2026' },
                { title: 'How Much Does App Development Cost in the USA?', href: '/blog/app-development-cost-usa' },
              ].map((post) => (
                <a key={post.href} href={post.href} style={{
                  display: 'block', padding: '24px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                  fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.5,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {post.title} →
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
