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

const tocItems = [
  { id: 'key-takeaways', label: 'Key Takeaways', emoji: '🎯' },
  { id: 'intro', label: 'Introduction', emoji: '📋' },
  { id: 'build-vs-buy', label: 'Build vs Buy Framework', emoji: '🤔' },
  { id: 'salesforce-deep-dive', label: 'Salesforce Deep Dive', emoji: '☁️' },
  { id: 'hubspot-deep-dive', label: 'HubSpot Deep Dive', emoji: '🟠' },
  { id: 'other-crms', label: 'Zoho, Pipedrive & Monday', emoji: '📊' },
  { id: 'why-custom', label: 'When Custom Makes Sense', emoji: '⚡' },
  { id: 'features', label: 'Custom CRM Features', emoji: '🧩' },
  { id: 'comparison', label: 'Cost Comparison Table', emoji: '⚖️' },
  { id: 'cost-breakdown', label: 'Development Costs', emoji: '💰' },
  { id: 'tech-stack', label: 'Technology Stack', emoji: '🛠️' },
  { id: 'timeline', label: 'Development Timeline', emoji: '📅' },
  { id: 'why-codazz', label: 'Codazz CRM Services', emoji: '✨' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'enterprise-software-development-guide', title: 'Enterprise Software Development Guide 2026', category: 'Engineering', readTime: '15 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '12 min' },
  { slug: 'saas-development-cost-usa', title: 'How Much Does SaaS Development Cost in the USA?', category: 'Business', readTime: '12 min' },
];

function ProTip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      padding: '24px 28px', borderRadius: 16, marginTop: 28, marginBottom: 28,
      background: 'linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(251,191,36,0.02) 100%)',
      border: '1px solid rgba(251,191,36,0.2)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
        background: '#fbbf24', borderRadius: '4px 0 0 4px',
      }} />
      <p style={{ fontSize: 13, fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
        Pro Tip
      </p>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

function ComparisonTable({ headers, rows, highlightCol }: { headers: string[]; rows: string[][]; highlightCol?: number }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 32, borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: '14px 18px', textAlign: 'left', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: i === highlightCol ? '#22c55e' : 'rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '14px 18px', fontSize: 14,
                  color: ci === 0 ? '#ffffff' : 'rgba(255,255,255,0.55)',
                  fontWeight: ci === 0 ? 600 : 400,
                  borderBottom: ri < rows.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                  background: ci === highlightCol ? 'rgba(34,197,94,0.04)' : 'transparent',
                  lineHeight: 1.6,
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', width: '100%',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: 0,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', textAlign: 'left', lineHeight: 1.5 }}>{q}</span>
        <span style={{
          fontSize: 20, color: 'rgba(255,255,255,0.3)', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s',
        }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginTop: 12, marginBottom: 0, paddingRight: 32 }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function CustomCrmDevelopmentGuideClient() {
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

        {/* FEATURED IMAGE */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/custom-crm-development-guide.jpg"
              alt="Custom CRM development guide 2026 - build vs buy Salesforce HubSpot comparison"
              style={{
                width: '100%', height: 'auto', maxHeight: '500px',
                objectFit: 'cover', borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
          </div>
        </div>

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            {/* Breadcrumbs */}
            <div className="reveal" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <Link href="/" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>/</span>
              <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}>Blog</Link>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>/</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Custom CRM Development Guide</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Engineering</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 2026</span>
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
                18 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Custom CRM Development Guide 2026: Build vs Buy (Salesforce, HubSpot &amp; More)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive guide to building a custom CRM in 2026 — comparing Salesforce, HubSpot, Zoho, Pipedrive, and custom-built solutions with real cost breakdowns, TCO analysis, and decision frameworks for every stage of growth.
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
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[{ label: 'Twitter', icon: '𝕏' }, { label: 'LinkedIn', icon: 'in' }].map(s => (
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
                  fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY + SIDEBAR */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* MAIN ARTICLE */}
              <article>

                {/* KEY TAKEAWAYS */}
                <div className="reveal" style={{ marginBottom: 56 }} id="key-takeaways">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: 28, padding: '36px 40px', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: 0, left: 0, width: '100%', height: 4,
                      background: 'linear-gradient(90deg, #22c55e, #34d399)', borderRadius: '28px 28px 0 0',
                    }} />
                    <p style={{
                      fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 20,
                    }}>Key Takeaways</p>
                    {[
                      'The global CRM market is projected to exceed $80 billion by 2026. Despite Salesforce dominating with 23% market share, custom CRM adoption is accelerating among mid-market and enterprise companies frustrated with per-seat licensing and expensive consultants.',
                      'Custom CRM development costs $50K-$300K depending on complexity. A focused sales CRM MVP starts at $50K; a full enterprise CRM with AI scoring, marketing automation, and custom workflows reaches $300K+.',
                      'Salesforce costs $75-$300/user/month and requires consultants at $150-$300/hr for customization. At 50+ users with heavy customization, the 3-year TCO often exceeds building custom.',
                      'The break-even point for custom vs Salesforce is typically 18-24 months. After that, custom CRM delivers 3-5x better ROI by eliminating per-seat licensing and consultant dependency.',
                      'The most common trigger for building custom: your sales process is unique enough that forcing it into Salesforce or HubSpot creates friction, workarounds, and data quality issues that actively hurt revenue.',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 14, marginBottom: i < 4 ? 16 : 0 }}>
                        <div style={{
                          flexShrink: 0, width: 24, height: 24, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.15)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', marginTop: 2,
                        }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* INTRODUCTION */}
                <div className="reveal" style={{ marginBottom: 56 }} id="intro">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Introduction: Why CRM Strategy Is a Revenue Decision</h2>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Your CRM is arguably the most important software your sales team touches every day. It is the system that tracks every prospect, every deal, every customer interaction. When it works well, revenue grows. When it creates friction — when reps spend more time fighting the tool than selling — revenue stalls. And in 2026, the CRM market is at a critical inflection point.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global CRM market is projected to surpass <strong style={{ color: '#22c55e' }}>$80 billion by 2026</strong>, making it the largest enterprise software category by revenue. Salesforce alone commands over $35 billion in annual revenue with 23% market share. HubSpot has captured the mid-market with its freemium model and now serves over 200,000 customers. But a growing number of B2B companies are discovering an uncomfortable truth: the total cost of ownership for these platforms — licensing, customization, integration, and consultant fees — often exceeds the cost of building a CRM tailored to their exact workflow.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    This guide helps you make the right decision. We compare Salesforce, HubSpot, Zoho, Pipedrive, Monday CRM, and custom CRM development across cost, flexibility, timeline, and total ROI. Whether you are a VP of Sales frustrated with Salesforce complexity, a CTO evaluating whether to build or buy, or a founder trying to avoid expensive platform lock-in, this guide gives you the data to decide.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    At <Link href="/services/web-development" style={{ color: '#22c55e', textDecoration: 'none', borderBottom: '1px solid rgba(34,197,94,0.3)' }}>Codazz</Link>, we have built 40+ custom CRM systems and implemented dozens of Salesforce and HubSpot instances. This is not theoretical — every recommendation is backed by real project data from our engineering team.
                  </p>

                  <ProTip>
                    Before evaluating any CRM option, document your sales process in detail. Map every stage, every data point your reps need, every integration touchpoint. This exercise alone will reveal whether your process is standard enough for off-the-shelf or unique enough to justify custom development.
                  </ProTip>
                </div>

                {/* BUILD VS BUY DECISION FRAMEWORK */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>The Build vs Buy Decision Framework</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    The build-vs-buy decision is not binary. It depends on your team size, sales process complexity, budget, timeline, and growth trajectory. Here is a structured framework to guide the decision.
                  </p>

                  <ComparisonTable
                    headers={['Decision Factor', 'Buy (Off-the-Shelf)', 'Build (Custom CRM)']}
                    highlightCol={2}
                    rows={[
                      ['Team Size', 'Under 50 users', '50+ users or rapid scaling'],
                      ['Sales Process', 'Standard B2B/B2C funnel', 'Non-linear, multi-stakeholder, or industry-specific'],
                      ['Budget (Year 1)', '$20K - $100K', '$50K - $300K'],
                      ['Budget (Year 3 TCO)', '$80K - $500K+', '$80K - $350K (incl. hosting + maintenance)'],
                      ['Time to Launch', '1 - 4 weeks', '3 - 6 months'],
                      ['Customization Need', 'Config + minor tweaks', 'Deep workflow, UI, and integration customization'],
                      ['Integration Depth', 'Pre-built connectors suffice', 'Bi-directional sync with proprietary systems'],
                      ['Data Sensitivity', 'Standard compliance', 'Regulated industry (healthcare, finance, government)'],
                      ['Vendor Lock-in Tolerance', 'Acceptable', 'Unacceptable'],
                      ['Internal Tech Team', 'No engineering resources', 'Engineering team or development partner available'],
                    ]}
                  />

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32,
                  }}>
                    <div style={{
                      padding: '28px 24px', borderRadius: 28,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Buy When...</p>
                      {[
                        'Your sales process follows a standard funnel (lead > qualified > proposal > close)',
                        'You have fewer than 50 users and standard reporting needs',
                        'You need to be live within 2-4 weeks',
                        'Your integration needs are covered by marketplace connectors',
                        'Customization budget is under $30K',
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                          <span style={{ color: '#22c55e', fontSize: 14, flexShrink: 0 }}>+</span>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{
                      padding: '28px 24px', borderRadius: 28,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Build When...</p>
                      {[
                        'Your sales process has unique stages, approval chains, or compliance steps',
                        'Per-seat licensing will exceed $100K/year within 18 months',
                        'You need deep, bi-directional integration with proprietary internal systems',
                        'Data ownership and on-premise deployment are non-negotiable',
                        'You are spending more on Salesforce consultants than on actual selling',
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                          <span style={{ color: '#a78bfa', fontSize: 14, flexShrink: 0 }}>+</span>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SALESFORCE DEEP DIVE */}
                <div className="reveal" style={{ marginBottom: 56 }} id="salesforce-deep-dive">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Salesforce Deep Dive: The Enterprise Standard</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Salesforce is the 800-pound gorilla of CRM. With $35B+ in annual revenue and 150,000+ customers, it is the default choice for enterprise sales teams. But &quot;default&quot; does not always mean &quot;best.&quot; Understanding where Salesforce excels and where it falls short is critical to making the right CRM decision.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28, padding: '32px 36px', marginBottom: 24,
                  }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Salesforce Pricing Tiers (2026)</p>
                    {[
                      { tier: 'Essentials', price: '$25/user/mo', note: 'Basic CRM for up to 10 users. Very limited.' },
                      { tier: 'Professional', price: '$80/user/mo', note: 'Full CRM with customization. No API access.' },
                      { tier: 'Enterprise', price: '$165/user/mo', note: 'Most popular. API access, workflow automation, advanced reporting.' },
                      { tier: 'Unlimited', price: '$330/user/mo', note: 'Premier support, sandbox, unlimited customization.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '12px 0', flexWrap: 'wrap', gap: 8,
                        borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}>
                        <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', minWidth: 120 }}>{item.tier}</span>
                        <span style={{ fontSize: 15, fontWeight: 700, color: '#60a5fa', minWidth: 120 }}>{item.price}</span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', flex: 1 }}>{item.note}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 24 }}>
                    <div style={{
                      padding: '24px', borderRadius: 28, background: 'rgba(34,197,94,0.04)',
                      border: '1px solid rgba(34,197,94,0.15)',
                    }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Strengths</p>
                      {['Massive ecosystem (4,000+ AppExchange apps)', 'Best-in-class reporting and dashboards', 'Enterprise-grade security and compliance', 'Highly configurable for complex orgs', 'Strong AI features with Einstein'].map((s, i) => (
                        <p key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 8px', paddingLeft: 16, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#22c55e' }}>+</span>{s}
                        </p>
                      ))}
                    </div>
                    <div style={{
                      padding: '24px', borderRadius: 28, background: 'rgba(239,68,68,0.04)',
                      border: '1px solid rgba(239,68,68,0.15)',
                    }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Limitations</p>
                      {['Expensive per-seat licensing punishes growth', 'Requires certified consultants for customization ($150-$300/hr)', 'Apex code creates vendor lock-in', 'UI can feel dated; Lightning is slow for complex orgs', 'Data export/migration is notoriously painful'].map((s, i) => (
                        <p key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 8px', paddingLeft: 16, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#ef4444' }}>-</span>{s}
                        </p>
                      ))}
                    </div>
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    <strong style={{ color: '#ffffff' }}>When to choose Salesforce:</strong> Your organization has 200+ users, needs enterprise-grade compliance (SOC 2 Type II, HIPAA BAA), and has budget for both licensing and ongoing consultant support. You are a large enterprise where the Salesforce ecosystem advantage (AppExchange, partner network, talent pool) outweighs the cost premium.
                  </p>

                  <ProTip>
                    If you are evaluating Salesforce, request a detailed 3-year TCO estimate — not just the licensing quote. Include implementation ($50K-$200K), customization (ongoing), data migration, training, and the annual consultant retainer. Most companies underestimate total Salesforce cost by 40-60%.
                  </ProTip>
                </div>

                {/* HUBSPOT DEEP DIVE */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hubspot-deep-dive">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>HubSpot Deep Dive: The Mid-Market Champion</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    HubSpot has emerged as the most popular CRM alternative to Salesforce, particularly for companies with fewer than 200 employees. Its freemium model is genuinely powerful — the free CRM is functional enough for many small teams — and the paid tiers add marketing, sales, and service automation in a unified platform.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28, padding: '32px 36px', marginBottom: 24,
                  }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>HubSpot Sales Hub Pricing (2026)</p>
                    {[
                      { tier: 'Free', price: '$0', note: 'Contact management, deal tracking, basic reporting. Unlimited users.' },
                      { tier: 'Starter', price: '$20/user/mo', note: 'Email tracking, meeting scheduling, basic automation.' },
                      { tier: 'Professional', price: '$100/user/mo', note: 'Sequences, custom reporting, forecasting, playbooks.' },
                      { tier: 'Enterprise', price: '$150/user/mo', note: 'Custom objects, predictive lead scoring, advanced permissions.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '12px 0', flexWrap: 'wrap', gap: 8,
                        borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}>
                        <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', minWidth: 120 }}>{item.tier}</span>
                        <span style={{ fontSize: 15, fontWeight: 700, color: '#f97316', minWidth: 120 }}>{item.price}</span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', flex: 1 }}>{item.note}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 24 }}>
                    <div style={{
                      padding: '24px', borderRadius: 28, background: 'rgba(34,197,94,0.04)',
                      border: '1px solid rgba(34,197,94,0.15)',
                    }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Strengths</p>
                      {['Best-in-class UX — reps actually enjoy using it', 'Powerful free tier for small teams', 'Unified marketing + sales + service in one platform', 'Excellent onboarding and documentation', 'Growing marketplace with 1,500+ integrations'].map((s, i) => (
                        <p key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 8px', paddingLeft: 16, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#22c55e' }}>+</span>{s}
                        </p>
                      ))}
                    </div>
                    <div style={{
                      padding: '24px', borderRadius: 28, background: 'rgba(239,68,68,0.04)',
                      border: '1px solid rgba(239,68,68,0.15)',
                    }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Limitations</p>
                      {['Limited customization compared to Salesforce', 'Enterprise tier still lacks deep workflow flexibility', 'Pricing jumps significantly at Professional/Enterprise', 'Custom objects and calculated properties are rigid', 'Reporting depth falls short for complex B2B sales'].map((s, i) => (
                        <p key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 8px', paddingLeft: 16, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#ef4444' }}>-</span>{s}
                        </p>
                      ))}
                    </div>
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    <strong style={{ color: '#ffffff' }}>When to choose HubSpot:</strong> You are a small-to-mid-market company (under 100 users) with a relatively standard sales process. You want marketing and sales tools in one platform, value great UX, and do not need deep customization. HubSpot is particularly strong for inbound-led sales teams where marketing-to-sales handoff matters most.
                  </p>
                </div>

                {/* OTHER CRMs: ZOHO, PIPEDRIVE, MONDAY */}
                <div className="reveal" style={{ marginBottom: 56 }} id="other-crms">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Other CRM Platforms: Zoho, Pipedrive &amp; Monday CRM</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Beyond the Salesforce-HubSpot duopoly, several other platforms deserve consideration depending on your specific needs and budget.
                  </p>

                  {[
                    {
                      name: 'Zoho CRM',
                      price: '$14 - $52/user/mo',
                      color: '#ef4444',
                      best: 'Budget-conscious teams needing a full-featured CRM',
                      desc: 'Zoho CRM offers impressive functionality at a fraction of Salesforce pricing. It includes sales automation, analytics, multichannel communication, and AI-powered features (Zia). The Zoho One suite bundles 45+ apps for $45/user/month, making it the best value proposition in CRM. Limitations: the UI feels dated, integrations outside the Zoho ecosystem are weaker, and enterprise-grade support requires paid plans.',
                    },
                    {
                      name: 'Pipedrive',
                      price: '$15 - $99/user/mo',
                      color: '#22c55e',
                      best: 'Sales-first teams focused on pipeline velocity',
                      desc: 'Pipedrive is built by salespeople for salespeople. Its visual pipeline interface is arguably the best in the industry, and it excels at helping small-to-mid teams close deals faster. Activity-based selling methodology is baked into the UX. Limitations: no built-in marketing tools, limited reporting compared to Salesforce/HubSpot, and customization hits a wall quickly for complex B2B processes.',
                    },
                    {
                      name: 'Monday CRM',
                      price: '$12 - $28/user/mo',
                      color: '#a78bfa',
                      best: 'Teams already using Monday.com for project management',
                      desc: 'Monday CRM is a newer entrant that leverages Monday.com\'s flexible work OS platform. It offers good visual customization, automation triggers, and seamless integration with Monday work management. Ideal for teams that want CRM and project management in one platform. Limitations: still maturing as a CRM product, lacks the depth of dedicated CRM platforms, and reporting capabilities are basic compared to competitors.',
                    },
                  ].map((crm, i) => (
                    <div key={i} style={{
                      padding: '28px 32px', borderRadius: 28, marginBottom: 20,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
                        background: crm.color, borderRadius: '4px 0 0 4px',
                      }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{crm.name}</h3>
                        <span style={{ fontSize: 14, fontWeight: 600, color: crm.color }}>{crm.price}</span>
                      </div>
                      <p style={{ fontSize: 13, color: '#22c55e', fontWeight: 600, marginBottom: 10 }}>Best for: {crm.best}</p>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{crm.desc}</p>
                    </div>
                  ))}
                </div>

                {/* WHEN CUSTOM CRM MAKES SENSE */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-custom">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>When Custom CRM Development Makes Sense</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    The shift toward custom CRM is not anti-Salesforce sentiment — it is a rational business decision driven by specific pain points that off-the-shelf platforms consistently fail to solve. If three or more of these apply to your organization, custom CRM likely delivers better long-term ROI.
                  </p>

                  {[
                    { title: 'Unique Workflows That Defy Standard CRM Logic', desc: 'If your deal flow involves complex multi-stakeholder approvals, industry-specific compliance steps, non-linear pipeline stages, or custom pricing models, you are fighting against the assumptions baked into every off-the-shelf CRM. Custom CRM molds to your process instead of forcing your process into someone else\'s framework.', color: '#22c55e' },
                    { title: 'Deep Integration Requirements', desc: 'Off-the-shelf CRMs offer pre-built integrations, but they rarely support deep, bi-directional data sync with proprietary systems. Custom CRM enables real-time integration with your ERP, billing system, support platform, and any internal tools — eliminating manual data entry and enabling true end-to-end automation. Our engineering team at Codazz specializes in building these complex integrations using modern API architectures.', color: '#a78bfa' },
                    { title: 'Data Ownership and Regulatory Compliance', desc: 'With a custom CRM, your customer data lives on your infrastructure, under your control. No vendor lock-in, no data portability nightmares, and full control over encryption, access, and audit logging. For regulated industries like healthcare (HIPAA), financial services (SOX, PCI-DSS), and government contracts, this is often a non-negotiable requirement.', color: '#60a5fa' },
                    { title: 'Scale Economics Favor Custom', desc: 'At $165/user/month (Salesforce Enterprise), a 200-person sales team costs $396K annually in licensing alone — before customization. A custom CRM eliminates per-seat licensing entirely, making it dramatically cheaper as your team scales. The break-even point is typically 18-24 months.', color: '#34d399' },
                    { title: 'Salesforce Consultant Dependency', desc: 'The average mid-market company spends $150K-$500K on Salesforce customization in the first year alone. Certified consultants charge $150-$300/hour, and complex customizations require Apex code that creates technical debt within Salesforce\'s proprietary ecosystem. When the total customization cost approaches 50-70% of a custom build — and it often does — the math favors building your own.', color: '#fbbf24' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 28, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
                        background: item.color, borderRadius: '4px 0 0 4px',
                      }} />
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 10, paddingLeft: 8 }}>{item.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0, paddingLeft: 8 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CUSTOM CRM FEATURE BREAKDOWN */}
                <div className="reveal" style={{ marginBottom: 56 }} id="features">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Custom CRM Feature Breakdown</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Every CRM needs a core set of features. But the value of a custom CRM is in the details — how these features are tailored to your exact workflow. Here is what we include in every CRM we build at Codazz, broken down by development phase.
                  </p>

                  <ComparisonTable
                    headers={['Feature', 'MVP (Phase 1)', 'Growth (Phase 2)', 'Enterprise (Phase 3)']}
                    rows={[
                      ['Contact Management', 'Contacts + companies + tags', '+ custom fields + segments', '+ hierarchies + org charts'],
                      ['Pipeline Management', 'Single pipeline + stages', '+ multiple pipelines + automation', '+ AI deal scoring + forecasting'],
                      ['Activity Tracking', 'Notes + tasks + reminders', '+ email tracking + call logging', '+ auto-capture from all channels'],
                      ['Email Integration', 'Gmail/Outlook sync', '+ email templates + sequences', '+ AI-powered email suggestions'],
                      ['Reporting & Analytics', 'Basic pipeline + revenue reports', '+ custom dashboards + exports', '+ predictive analytics + BI integration'],
                      ['User Management', 'Basic roles (admin/user)', '+ team hierarchies + territories', '+ SSO/SAML + audit logs'],
                      ['Integrations', 'Email + calendar', '+ Slack + billing + marketing tools', '+ ERP + custom APIs + webhooks'],
                      ['Workflow Automation', 'Basic task reminders', '+ trigger-based automation', '+ AI-powered lead routing + scoring'],
                      ['Mobile Access', 'Responsive web app', '+ PWA with offline support', '+ native iOS/Android apps'],
                      ['Cost Range', '$50,000 - $80,000', '$80,000 - $180,000', '$180,000 - $300,000+'],
                    ]}
                  />

                  <ProTip>
                    Launch with Phase 1 features and iterate based on real sales team feedback. The features your reps actually use daily will surprise you — and they are rarely the features executives think are most important. We recommend a 2-week feedback cycle after launch. If you need help prioritizing, explore our <Link href="/services/ai-ml" style={{ color: '#fbbf24', textDecoration: 'none', borderBottom: '1px solid rgba(251,191,36,0.3)' }}>AI and machine learning services</Link> for data-driven feature prioritization.
                  </ProTip>
                </div>

                {/* COST COMPARISON TABLE: Salesforce vs HubSpot vs Custom */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>TCO Comparison: Salesforce vs HubSpot vs Custom CRM</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Total cost of ownership is the only metric that matters when comparing CRM options. Here is a real-world TCO comparison for a mid-market company with 50 sales users and moderate customization needs.
                  </p>

                  <ComparisonTable
                    headers={['Cost Category', 'Salesforce Enterprise', 'HubSpot Professional', 'Custom CRM (Codazz)']}
                    highlightCol={3}
                    rows={[
                      ['Year 1: Licensing', '$99,000', '$60,000', '$0'],
                      ['Year 1: Implementation', '$75,000 - $200,000', '$15,000 - $40,000', '$80,000 - $180,000 (development)'],
                      ['Year 1: Customization', '$50,000 - $150,000', '$10,000 - $30,000', 'Included in development'],
                      ['Year 1: Training', '$10,000 - $25,000', '$5,000 - $10,000', '$5,000 - $10,000'],
                      ['Year 1 Total', '$234,000 - $474,000', '$90,000 - $140,000', '$85,000 - $190,000'],
                      ['Year 2: Licensing + Support', '$99,000 + $30,000', '$60,000 + $10,000', '$36,000 - $96,000 (hosting + maintenance)'],
                      ['Year 2: Ongoing Customization', '$40,000 - $80,000', '$15,000 - $30,000', '$24,000 - $60,000 (new features)'],
                      ['Year 3 Cumulative TCO', '$502,000 - $860,000+', '$250,000 - $380,000', '$180,000 - $406,000'],
                      ['Year 5 Cumulative TCO', '$760,000 - $1,400,000+', '$400,000 - $640,000', '$280,000 - $600,000'],
                      ['Per-Seat Cost at Scale', 'Increases linearly', 'Increases linearly', 'Fixed (hosting only)'],
                    ]}
                  />

                  <div style={{
                    padding: '28px 32px', borderRadius: 28,
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}>
                    <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>The bottom line:</strong> If your sales process is standard and you have fewer than 50 users, HubSpot is likely the right choice. If you need enterprise-grade features and have an unlimited budget, Salesforce works. But if your process is unique, you are scaling fast, or you need deep integrations with proprietary systems — custom CRM delivers the best long-term ROI, often saving <strong style={{ color: '#22c55e' }}>$300K-$800K over 5 years</strong> compared to Salesforce.
                    </p>
                  </div>

                  <ProTip>
                    Calculate your 3-year total cost of ownership, not just the first-year cost. Include licensing, customization, integration, training, and ongoing consultant fees. We have seen companies discover that their &quot;cheap&quot; Salesforce implementation actually costs 2-3x more than building custom when all costs are accounted for.
                  </ProTip>
                </div>

                {/* CUSTOM CRM DEVELOPMENT COST BREAKDOWN */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Custom CRM Development Cost Breakdown ($50K-$300K)</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is where the money goes when building a custom CRM. Every dollar should trace back to a feature that either accelerates deal velocity, improves data quality, or reduces manual work for your sales team.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28, padding: '32px 36px', marginBottom: 32,
                  }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Development Tiers</p>
                    {[
                      { tier: 'Basic CRM (MVP)', range: '$50,000 - $80,000', desc: 'Contacts, pipeline, activity tracking, email integration, basic reporting. Ideal for startups validating their sales process.', color: '#22c55e' },
                      { tier: 'Mid-Tier CRM', range: '$80,000 - $180,000', desc: 'Everything in Basic + workflow automation, multiple pipelines, advanced reporting, Slack/marketing integrations, and PWA. Best for growth-stage companies with 20-100 users.', color: '#a78bfa' },
                      { tier: 'Enterprise CRM', range: '$180,000 - $300,000+', desc: 'Full-featured CRM with AI lead scoring, predictive analytics, custom workflow engine, native mobile apps, SSO/SAML, ERP integration, and advanced security. For large organizations with complex sales operations.', color: '#fbbf24' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                        padding: '16px 0', gap: 16, flexWrap: 'wrap',
                        borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}>
                        <div style={{ minWidth: 200 }}>
                          <span style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: 4 }}>{item.tier}</span>
                          <span style={{ fontSize: 16, fontWeight: 700, color: item.color }}>{item.range}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, flex: 1, minWidth: 200 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {[
                    { title: 'Contact & Company Management', cost: '$8,000 - $25,000', desc: 'The foundation of your CRM. Contact records, company profiles, relationship mapping, custom fields, tags, segments, and import/export. For complex B2B sales with multi-stakeholder deals, this includes org chart visualization and contact hierarchies.' },
                    { title: 'Pipeline & Deal Management', cost: '$10,000 - $35,000', desc: 'Visual pipeline boards, drag-and-drop deal stages, probability-weighted forecasting, deal value tracking, and win/loss analysis. Custom pipelines for different sales motions (inbound vs outbound, SMB vs enterprise) are critical for teams with diverse sales processes.' },
                    { title: 'Email & Communication', cost: '$8,000 - $30,000', desc: 'Gmail and Outlook integration with bi-directional sync, email templates, automated sequences, open/click tracking, and shared inbox for team collaboration. This is often the single feature that determines whether your sales team actually adopts the CRM.' },
                    { title: 'Workflow Automation', cost: '$12,000 - $40,000', desc: 'Lead routing rules, task assignment automation, stage-based triggers, notification workflows, and approval processes. The ROI here is massive: a well-automated CRM saves 5-8 hours per rep per week on manual data entry and follow-up management.' },
                    { title: 'Reporting & Analytics', cost: '$10,000 - $35,000', desc: 'Pipeline dashboards, revenue forecasting, activity reports, team performance metrics, and custom report builder. Enterprise-grade includes cohort analysis, sales cycle analytics, and exportable board-ready presentations.' },
                    { title: 'Integrations', cost: '$8,000 - $30,000', desc: 'Bi-directional sync with email, calendar, marketing automation (HubSpot Marketing, Mailchimp), billing (Stripe, QuickBooks), support (Zendesk, Intercom), and Slack. Each integration adds $3K-$8K depending on API complexity and data sync requirements.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 20, marginBottom: 28,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ flexShrink: 0, width: 4, borderRadius: 4, background: '#22c55e', opacity: 0.5 }} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.title}</h3>
                          <span style={{ fontSize: 13, color: '#22c55e', fontWeight: 600 }}>{item.cost}</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TECHNOLOGY STACK */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Recommended CRM Technology Stack</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    The tech stack for a custom CRM needs to optimize for real-time data, fast search, and responsive UI. Here is what we recommend and use at Codazz for CRM projects — and why each choice matters.
                  </p>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 28, padding: 36, marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 20 }}>Our CRM Stack</h3>
                    {[
                      { layer: 'Frontend', tech: 'React / Next.js + TypeScript', why: 'Fast, responsive UI with real-time updates. Server-side rendering for quick initial load. Component library for consistent UX across dozens of CRM views. Next.js App Router enables streaming for large data tables.' },
                      { layer: 'Backend', tech: 'Node.js (NestJS) or Python (FastAPI)', why: 'Node.js with NestJS for real-time features and WebSocket support. Python with FastAPI when AI/ML features are central. GraphQL is ideal for CRM because it lets the frontend request exactly the data it needs — critical when a single contact view pulls from 8+ related tables.' },
                      { layer: 'Database', tech: 'PostgreSQL + Redis + Elasticsearch', why: 'PostgreSQL for relational data with powerful JSON support. Redis for caching, session management, and real-time features. Elasticsearch for blazing-fast full-text search across contacts, companies, deals, and email content.' },
                      { layer: 'Email', tech: 'Nylas API or Gmail/Outlook APIs', why: 'Nylas provides a unified email API across providers. Handles bi-directional sync, threading, and attachment management without building provider-specific integrations.' },
                      { layer: 'AI Layer', tech: 'OpenAI API + custom ML models', why: 'Lead scoring, deal probability prediction, email sentiment analysis, and intelligent activity suggestions. We fine-tune models on your historical sales data for accurate predictions.' },
                      { layer: 'Infra', tech: 'AWS (ECS, RDS, ElastiCache, S3)', why: 'Battle-tested infrastructure with auto-scaling. Multi-AZ deployment for 99.99% uptime. Encrypted at rest and in transit by default. SOC 2 and HIPAA compliant.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 16, marginBottom: i < 5 ? 20 : 0,
                        paddingBottom: i < 5 ? 20 : 0,
                        borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                      }}>
                        <div style={{ flexShrink: 0, width: 80 }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.layer}</span>
                        </div>
                        <div>
                          <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.tech}</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{item.why}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Want to learn more about our technical approach? Check out our <Link href="/services/web-development" style={{ color: '#22c55e', textDecoration: 'none', borderBottom: '1px solid rgba(34,197,94,0.3)' }}>web development services</Link> and <Link href="/services/ai-ml" style={{ color: '#22c55e', textDecoration: 'none', borderBottom: '1px solid rgba(34,197,94,0.3)' }}>AI/ML capabilities</Link> for deeper technical details.
                  </p>
                </div>

                {/* DEVELOPMENT TIMELINE */}
                <div className="reveal" style={{ marginBottom: 56 }} id="timeline">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>CRM Development Timeline &amp; Process</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    A custom CRM follows a structured development lifecycle. Here is the timeline we follow for most CRM projects — from initial discovery through launch and beyond.
                  </p>

                  {[
                    { phase: '01', name: 'Discovery & Sales Process Mapping', duration: '1 - 2 weeks', cost: '$5,000 - $12,000', color: '#ffffff', desc: 'Deep dive into your sales process, team structure, existing tools, integration requirements, and reporting needs. We shadow your sales team, interview stakeholders, and document every workflow. Deliverable: a complete CRM specification with wireframes and a prioritized feature roadmap.' },
                    { phase: '02', name: 'Design & Architecture', duration: '2 - 3 weeks', cost: '$8,000 - $20,000', color: '#a78bfa', desc: 'UI/UX design for every CRM view, database schema design, API architecture, and integration planning. We prototype key interactions (pipeline drag-and-drop, contact search, email compose) to validate the UX before writing code.' },
                    { phase: '03', name: 'MVP Development', duration: '6 - 10 weeks', cost: '$30,000 - $80,000', color: '#34d399', desc: 'Core CRM development: contacts, companies, pipeline, activity tracking, basic reporting, and email integration. Two-week sprints with demos after each sprint. Your sales team gets early access at week 6 for beta testing.' },
                    { phase: '04', name: 'Growth Features & Automation', duration: '4 - 8 weeks', cost: '$20,000 - $60,000', color: '#60a5fa', desc: 'Workflow automation, advanced reporting, additional integrations, and features prioritized from beta feedback. This phase transforms the MVP from functional to indispensable for your sales team.' },
                    { phase: '05', name: 'Launch, Migration & Training', duration: '2 - 4 weeks', cost: '$10,000 - $25,000', color: '#fbbf24', desc: 'Data migration from existing CRM (Salesforce, HubSpot, spreadsheets), team training, documentation, and go-live support. We run parallel systems for 2 weeks to ensure data integrity before full cutover.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 24, marginBottom: 24,
                      padding: '28px 28px', borderRadius: 28,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
                        background: item.color, borderRadius: '4px 0 0 4px',
                      }} />
                      <div style={{ flexShrink: 0, width: 48 }}>
                        <span style={{ fontSize: 24, fontWeight: 800, color: item.color, opacity: 0.7 }}>{item.phase}</span>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>{item.duration}</span>
                          <span style={{ fontSize: 13, color: item.color, fontWeight: 700 }}>{item.cost}</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CODAZZ CRM SERVICES CTA */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Codazz Custom CRM Development Services</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Building a CRM is a high-stakes project — it touches every revenue-generating activity in your organization. Here is why B2B companies trust Codazz for custom CRM development.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32,
                  }}>
                    {[
                      { title: '40+ CRM Projects Delivered', desc: 'Deep CRM domain expertise across B2B sales, real estate, financial services, healthcare, and recruiting. We know what works because we have built it — dozens of times.', icon: '🏆', color: '#22c55e' },
                      { title: 'Salesforce Migration Experts', desc: 'We have migrated 15+ companies off Salesforce to custom CRM. We know the data model, the pitfalls, and how to ensure zero data loss during migration.', icon: '🔄', color: '#a78bfa' },
                      { title: '40-60% Lower Cost', desc: 'North American project leadership (Edmonton, Canada) with engineering talent in Chandigarh, India. Enterprise-quality CRM without enterprise-agency pricing.', icon: '💰', color: '#60a5fa' },
                      { title: 'Sales Team Adoption Focus', desc: 'The best CRM is the one your team actually uses. We design for adoption first — fast load times, minimal clicks, and UX that matches how your reps actually work.', icon: '👥', color: '#34d399' },
                      { title: 'Post-Launch Iteration', desc: 'CRM is never "done." We provide ongoing support, feature development, and optimization. Most clients add 2-3 major features per quarter based on real usage data.', icon: '🚀', color: '#fbbf24' },
                      { title: 'AI-Powered Features', desc: 'Lead scoring, deal probability prediction, email sentiment analysis, and intelligent activity suggestions powered by our AI/ML team. We integrate AI where it actually improves sales outcomes.', icon: '🤖', color: '#f472b6' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: '28px 24px', borderRadius: 28,
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        position: 'relative', overflow: 'hidden',
                      }}>
                        <div style={{
                          position: 'absolute', top: 0, left: 0, width: '100%', height: 3,
                          background: item.color, opacity: 0.6,
                        }} />
                        <span style={{ fontSize: 28, display: 'block', marginBottom: 14 }}>{item.icon}</span>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{item.title}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    padding: '32px 36px', borderRadius: 28,
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.03) 100%)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    textAlign: 'center',
                  }}>
                    <p style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>
                      Ready to explore custom CRM development?
                    </p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 24, lineHeight: 1.7 }}>
                      Share your CRM requirements and receive a detailed cost breakdown, feature roadmap, and Salesforce/HubSpot TCO comparison within 48 hours — completely free.
                    </p>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{
                        padding: '16px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                        fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}>
                        Get Your Free CRM Estimate →
                      </button>
                    </Link>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28, padding: '8px 28px',
                  }}>
                    <FAQItem
                      q="How much does custom CRM development cost in 2026?"
                      a="Custom CRM development costs $50,000 to $300,000+ depending on complexity. A focused sales CRM with contacts, pipeline, and email integration starts at $50K-$80K. A full-featured CRM with automation, AI scoring, marketing integration, and mobile apps runs $180K-$300K+. Most mid-market projects land in the $80K-$180K range. At Codazz, our hybrid team model delivers these at 40-60% lower cost than US-only agencies."
                    />
                    <FAQItem
                      q="How long does it take to build a custom CRM?"
                      a="An MVP with core CRM features (contacts, pipeline, email, basic reporting) takes 3-4 months. A full-featured CRM with automation, advanced reporting, and integrations takes 5-8 months. We recommend launching the MVP at month 3-4, then iterating based on real sales team feedback for the remaining phases. This approach reduces risk and ensures you are building features your team actually needs."
                    />
                    <FAQItem
                      q="Is custom CRM cheaper than Salesforce in the long run?"
                      a="For most companies with 50+ users, yes — significantly. Salesforce Enterprise costs $165/user/month, which is $99K/year for 50 users in licensing alone. Add $100K-$300K in customization and consultant fees over 3 years. A custom CRM costs $80K-$180K to build, plus $3K-$8K/month in hosting and maintenance. The break-even point is typically 18-24 months, after which custom delivers 3-5x better ROI."
                    />
                    <FAQItem
                      q="Can you migrate our data from Salesforce to a custom CRM?"
                      a="Yes. We have migrated 15+ companies from Salesforce to custom CRM. The process includes full data mapping, automated migration scripts, data validation, and a parallel-running period to ensure data integrity. Typical Salesforce migration takes 2-4 weeks depending on data volume and complexity. We preserve all historical data including activities, emails, and custom fields."
                    />
                    <FAQItem
                      q="What ongoing support do you provide after CRM launch?"
                      a="Every CRM project includes 30 days of post-launch support. Most clients then transition to a monthly retainer ($3K-$10K/month) for ongoing feature development, bug fixes, performance optimization, and user support. We typically ship 2-3 new features per month during the retainer phase. Our team also monitors uptime, performance, and security patches proactively."
                    />
                  </div>
                </div>

                {/* RELATED POSTS */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Related Articles</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                    {relatedPosts.map(post => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                        textDecoration: 'none', display: 'block', padding: '24px',
                        borderRadius: 28, border: '1px solid rgba(255,255,255,0.06)',
                        background: 'rgba(255,255,255,0.015)', transition: 'all 0.2s',
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.2)';
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.04)';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.06)';
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.015)';
                        }}
                      >
                        <p style={{ fontSize: 11, color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>{post.category}</p>
                        <p style={{ fontSize: 15, color: '#ffffff', lineHeight: 1.4, margin: '0 0 10px', fontWeight: 600 }}>{post.title}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>{post.readTime} read</p>
                      </Link>
                    ))}
                  </div>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* TOC */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
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
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Quick Reference */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 28, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 12,
                    }}>Quick Reference</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Custom CRM Costs (2026)</p>
                    {[
                      { label: 'Basic CRM (MVP)', range: '$50K - $80K', color: '#22c55e' },
                      { label: 'Mid-Tier CRM', range: '$80K - $180K', color: '#a78bfa' },
                      { label: 'Enterprise CRM', range: '$180K - $300K+', color: '#fbbf24' },
                      { label: 'Monthly Maintenance', range: '$3K - $8K/mo', color: '#34d399' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '8px 0',
                        borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: item.color }}>{item.range}</span>
                      </div>
                    ))}
                    <Link href="/contact" style={{ textDecoration: 'none', display: 'block', marginTop: 16 }}>
                      <button style={{
                        width: '100%', padding: '12px', borderRadius: 100,
                        background: '#22c55e', color: '#000', border: 'none',
                        fontSize: 13, fontWeight: 700, cursor: 'pointer',
                      }}>
                        Get Your CRM Estimate
                      </button>
                    </Link>
                  </div>

                  {/* About Author */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28, padding: 24,
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
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Sidebar Related */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28, padding: 24,
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

        {/* BOTTOM CTA */}
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
                }}>Custom CRM Development</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build a CRM That Fits Your Sales Process?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your CRM requirements with Codazz and receive a detailed cost breakdown, feature roadmap, and Salesforce TCO comparison within 48 hours — completely free.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free CRM Estimate →
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
