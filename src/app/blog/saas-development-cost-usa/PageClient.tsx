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
  { id: 'intro', label: 'Introduction', emoji: '🍁' },
  { id: 'cost-tiers', label: 'SaaS Cost Tiers', emoji: '💰' },
  { id: 'tech-stack-comparison', label: 'Tech Stack Comparison', emoji: '⚙️' },
  { id: 'feature-cost-breakdown', label: 'Feature Cost Breakdown', emoji: '🧩' },
  { id: 'core-components', label: 'Core Cost Components', emoji: '🔧' },
  { id: 'monthly-costs', label: 'Monthly Recurring Costs', emoji: '📊' },
  { id: 'build-vs-buy', label: 'Build vs Buy', emoji: '⚖️' },
  { id: 'tech-stack', label: 'The Tech Stack That Matters', emoji: '🛠️' },
  { id: 'funding', label: 'American SaaS Funding', emoji: '🇺🇸' },
  { id: 'why-codazz', label: 'Why Build with Codazz', emoji: '✨' },
  { id: 'our-process', label: 'How Codazz Builds SaaS', emoji: '🚀' },
];

const relatedPosts = [
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA?', category: 'Business', readTime: '9 min' },
  { slug: 'website-cost-usa', title: 'How Much Does a Website Cost in the USA?', category: 'Business', readTime: '8 min' },
];

/* ── Reusable styled components ── */

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

export default function SaasDevelopmentCostUSAClient() {
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
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/saas-development-cost-usa.jpg"
              alt="SaaS development cost in USA"
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
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
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
              How Much Does It Cost to Build a SaaS Product in the USA? (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive cost breakdown for building SaaS products in the USA — from MVP to enterprise scale — covering tech stacks, timelines, and how to maximize your investment.
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
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
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
                <div className="reveal" style={{ marginBottom: 56 }} id="key-takeaways">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: 24, padding: '36px 40px', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: 0, left: 0, width: '100%', height: 4,
                      background: 'linear-gradient(90deg, #22c55e, #34d399)', borderRadius: '24px 24px 0 0',
                    }} />
                    <p style={{
                      fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 20,
                    }}>Key Takeaways</p>
                    {[
                      'A SaaS MVP in the USA costs $30K-$75K and takes 3-4 months. Growth-stage products run $75K-$200K, and enterprise platforms can exceed $500K.',
                      'Your tech stack choice alone can swing costs by 30-40%. Next.js + TypeScript is the most cost-efficient stack for most SaaS products in 2026.',
                      'Monthly recurring costs (hosting, monitoring, security, support) add $900-$7,800/mo on top of development — budget for at least 12 months of runway.',
                      'The smartest founders use a hybrid build-vs-buy strategy: buy commodity infrastructure (auth, billing, email) and build only your core differentiator.',
                      'Codazz delivers SaaS products at 40-60% lower cost than comparable US-only agencies by combining North American project leadership with global engineering talent.',
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
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Intro ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="intro">
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The United States is the undisputed heavyweight of the global SaaS market. With companies like Salesforce, Slack, Stripe, HubSpot, and Snowflake leading the charge, the American SaaS ecosystem generated over <strong style={{ color: '#ffffff' }}>$108 billion in revenue in 2025</strong>. Behind these household names, tens of thousands of startups are building subscription-based software products — and every single one started by asking the same question: <strong style={{ color: '#ffffff' }}>how much will this actually cost?</strong>
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The answer is never simple. A SaaS product is not a website. It is a living, breathing platform that requires multi-tenant architecture, authentication layers, billing integrations, admin dashboards, API infrastructure, and ongoing maintenance. The cost depends entirely on complexity, timeline, team structure, and — critically — who you choose to build it with.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    In this guide, we break down every cost factor involved in building a SaaS product in the USA in 2026 — from a scrappy MVP to a full-blown enterprise platform. Whether you are bootstrapping from a garage in Austin or backed by a Series A from Andreessen Horowitz, this guide gives you the real numbers, not hand-wavy estimates.
                  </p>

                  <ProTip>
                    Before you read further, grab a pen and write down your must-have features vs. nice-to-have features. The single biggest cost driver in SaaS development is scope creep — and the founders who ship fastest are the ones who ruthlessly prioritize from day one.
                  </ProTip>
                </div>

                {/* ── SaaS Cost Tiers (Comparison Table) ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>SaaS Cost by Stage: MVP vs Growth vs Enterprise</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Every SaaS product falls into one of three cost tiers. Where yours lands depends on the number of features, integrations, compliance requirements, and the scale you need to support at launch. Here is a side-by-side comparison.
                  </p>

                  <ComparisonTable
                    headers={['', 'MVP / Proof of Concept', 'Growth Stage', 'Enterprise Scale']}
                    rows={[
                      ['Cost Range', '$30,000 - $75,000', '$75,000 - $200,000', '$200,000 - $500,000+'],
                      ['Timeline', '3 - 4 months', '4 - 8 months', '8 - 18 months'],
                      ['Team Size', '2 - 3 developers', '3 - 5 developers', '5 - 10+ developers'],
                      ['Core Screens', '3 - 5 screens', '10 - 25 screens', '30+ screens'],
                      ['Auth', 'Email + OAuth', 'OAuth + MFA + roles', 'SSO/SAML + audit logs'],
                      ['Billing', 'Stripe basic', 'Multi-plan + trials + dunning', 'Usage-based + invoicing + tax'],
                      ['Dashboard', 'Basic metrics', 'Admin panel + analytics', 'White-label + custom reports'],
                      ['API', 'Internal only', 'REST API + docs', 'Versioned API + rate limiting + webhooks'],
                      ['Multi-tenancy', 'Shared DB', 'Schema-per-tenant', 'Isolated + multi-region'],
                      ['Compliance', 'Basic SSL', 'CCPA ready', 'SOC 2 + HIPAA capable'],
                      ['Best For', 'Validating idea, seed raise', 'First 100 paying customers', '$50K+ ARR enterprise contracts'],
                    ]}
                  />

                  {/* Tier detail cards */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 1</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>3 - 4 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>MVP / Proof of Concept</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>$30,000 - $75,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A functional prototype with core features: user authentication, one primary workflow, basic dashboard, Stripe billing integration, and a clean responsive UI. Perfect for validating your idea with early adopters, securing initial funding, or testing product-market fit. This tier typically includes 3-5 core screens and a single user role. Think of it as the minimum viable version that real users can pay for — not a demo, not a prototype, but a real product.
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 2</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>4 - 8 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Growth Stage SaaS</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', marginBottom: 16, letterSpacing: '-0.02em' }}>$75,000 - $200,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A production-ready platform with multi-tenant architecture, role-based access control, team management, advanced billing with plan tiers, third-party integrations (Slack, Zapier, HubSpot), analytics dashboards, email notifications, and a comprehensive admin panel. This is the stage where most funded startups begin scaling to their first 100 paying customers. You are no longer just validating — you are competing.
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(52,211,153,0.12)', color: '#34d399',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 3</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>8 - 18 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Enterprise SaaS</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#34d399', marginBottom: 16, letterSpacing: '-0.02em' }}>$200,000 - $500,000+</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A fully-scaled enterprise platform with SSO/SAML authentication, SOC 2 compliance readiness, custom API with rate limiting and versioning, white-label capabilities, advanced reporting with data exports, audit logs, multi-region deployment, dedicated onboarding workflows, and SLA-backed infrastructure. Built for companies targeting enterprise contracts of $50K+ ARR per client. At this tier, you are selling trust as much as you are selling software.
                    </p>
                  </div>

                  <ProTip>
                    Do not start at Tier 3. Even Slack, Dropbox, and Notion started as bare-bones MVPs. Launch lean, validate with real paying users, then reinvest revenue into growth features. We have seen founders burn through $300K building features nobody wanted — do not be that founder.
                  </ProTip>
                </div>

                {/* ── Tech Stack Comparison Table ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack-comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Tech Stack Comparison: Which Framework Should You Pick?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Your technology choice at the start will define your development speed, hiring costs, and scalability ceiling for years. Here is an honest comparison of the four most popular stacks for SaaS products in 2026.
                  </p>

                  <ComparisonTable
                    headers={['Framework', 'Next.js (React)', 'Ruby on Rails', 'Django (Python)', 'Laravel (PHP)']}
                    highlightCol={1}
                    rows={[
                      ['Language', 'TypeScript / JavaScript', 'Ruby', 'Python', 'PHP'],
                      ['Dev Speed (MVP)', 'Very Fast', 'Very Fast', 'Fast', 'Fast'],
                      ['Scalability', 'Excellent', 'Good', 'Good', 'Moderate'],
                      ['Hiring Pool (USA)', 'Massive', 'Shrinking', 'Large', 'Large'],
                      ['Avg. Dev Rate', '$120 - $200/hr', '$130 - $210/hr', '$120 - $190/hr', '$90 - $160/hr'],
                      ['MVP Cost (Est.)', '$30K - $70K', '$35K - $80K', '$35K - $75K', '$25K - $65K'],
                      ['Best For', 'Modern SaaS, real-time apps', 'CRUD-heavy apps, marketplaces', 'Data / ML-heavy SaaS', 'Budget-conscious MVPs'],
                      ['Key Pros', 'SSR + SEO, huge ecosystem, full-stack', 'Convention over config, rapid prototyping', 'Great for AI/ML, strong ORM', 'Low barrier, affordable devs'],
                      ['Key Cons', 'Steeper learning curve', 'Slower runtime, smaller talent pool', 'Async can be tricky', 'Perception issues, less modern'],
                      ['Notable SaaS', 'Vercel, Cal.com, Notion', 'Shopify, GitHub, Basecamp', 'Instagram, Disqus', 'Mailcoach, Forge'],
                    ]}
                  />

                  <ProTip>
                    If you are building a standard B2B SaaS in 2026, Next.js + TypeScript is our default recommendation. The React ecosystem has the largest developer community, TypeScript catches bugs before they reach production, and server-side rendering gives you SEO out of the box. At Codazz, 80%+ of our SaaS projects use this stack — and it consistently delivers the best cost-to-value ratio.
                  </ProTip>
                </div>

                {/* ── SaaS Feature Cost Breakdown Table ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="feature-cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>SaaS Feature Cost Breakdown</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Wondering where the money actually goes? Here is what each core SaaS feature costs to build from scratch in 2026, broken down by complexity level. Use this to estimate your total based on the features you actually need.
                  </p>

                  <ComparisonTable
                    headers={['Feature', 'Basic', 'Standard', 'Advanced', 'Timeline']}
                    rows={[
                      ['Authentication (login, signup)', '$3,000 - $5,000', '$8,000 - $12,000', '$15,000 - $20,000', '1 - 3 weeks'],
                      ['Billing & Subscriptions', '$4,000 - $6,000', '$10,000 - $15,000', '$18,000 - $25,000', '2 - 4 weeks'],
                      ['User Dashboard', '$5,000 - $8,000', '$12,000 - $20,000', '$25,000 - $35,000', '2 - 5 weeks'],
                      ['Admin Panel', '$4,000 - $7,000', '$10,000 - $18,000', '$20,000 - $30,000', '2 - 4 weeks'],
                      ['REST / GraphQL API', '$5,000 - $8,000', '$12,000 - $22,000', '$25,000 - $40,000', '3 - 6 weeks'],
                      ['Multi-tenancy', '$5,000 - $8,000', '$12,000 - $20,000', '$22,000 - $35,000', '2 - 5 weeks'],
                      ['Notifications (email + in-app)', '$2,000 - $4,000', '$6,000 - $10,000', '$12,000 - $18,000', '1 - 3 weeks'],
                      ['File Storage & Uploads', '$2,000 - $4,000', '$5,000 - $8,000', '$10,000 - $15,000', '1 - 2 weeks'],
                      ['Search & Filtering', '$2,000 - $4,000', '$6,000 - $10,000', '$12,000 - $20,000', '1 - 3 weeks'],
                      ['Analytics & Reporting', '$3,000 - $6,000', '$8,000 - $15,000', '$18,000 - $30,000', '2 - 4 weeks'],
                    ]}
                  />

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 8,
                  }}>
                    {[
                      { level: 'Basic', desc: 'Off-the-shelf integrations, minimal customization. Good for MVPs.', color: '#22c55e' },
                      { level: 'Standard', desc: 'Custom UI, business logic, role-based access. Good for growth stage.', color: '#a78bfa' },
                      { level: 'Advanced', desc: 'Enterprise-grade: SSO, audit logs, compliance, white-labeling.', color: '#34d399' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: '16px 20px', borderRadius: 14,
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)',
                      }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: item.color, marginBottom: 6 }}>{item.level}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <ProTip>
                    You do not need to build every feature at the Advanced level. The smartest approach: pick 1-2 features that are your core differentiator and build those at the Advanced level. Everything else? Start at Basic and upgrade later based on real user feedback. This alone can save you $50K-$100K on initial development.
                  </ProTip>
                </div>

                {/* ── Core Cost Components ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-components">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Core Cost Components</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Regardless of tier, every SaaS product shares common architectural components. Here is what drives the development cost and why cutting corners on any of these will cost you more in the long run.
                  </p>

                  {[
                    { title: 'Multi-Tenant Architecture', cost: '$8,000 - $25,000', desc: 'The foundation of any SaaS product. Data isolation between tenants, shared infrastructure, and scalable database schemas. Get this wrong and you will be rewriting your entire backend within 12 months. We have rescued three products in 2025 alone that launched with broken tenant isolation.' },
                    { title: 'Authentication & SSO', cost: '$5,000 - $20,000', desc: 'Email/password, OAuth (Google, GitHub), magic links, two-factor authentication, and for enterprise clients, SAML/SSO integration. Security breaches in the US result in average costs of $4.45M per incident — this is not where you cut corners.' },
                    { title: 'Billing & Subscriptions', cost: '$6,000 - $18,000', desc: 'Stripe or Paddle integration with plan management, usage-based billing, proration, invoicing, tax compliance, free trials, and dunning management for failed payments. Broken billing = lost revenue. Period.' },
                    { title: 'Admin Dashboard', cost: '$10,000 - $30,000', desc: 'Your operational command center: user management, subscription analytics, feature flags, system health monitoring, and customer impersonation for support teams. This is the tool your team will live in every day.' },
                    { title: 'API Development', cost: '$8,000 - $35,000', desc: 'RESTful or GraphQL APIs with proper documentation, rate limiting, versioning, webhook support, and API key management. Essential for third-party integrations, future mobile apps, and partner ecosystems.' },
                    { title: 'Testing & QA', cost: '$5,000 - $15,000', desc: 'Unit tests, integration tests, end-to-end testing, load testing, and security audits. Enterprise clients will demand SOC 2 compliance, which starts with rigorous testing protocols. Skipping QA is the most expensive shortcut you can take.' },
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
                          <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>{item.cost}</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Monthly Recurring Costs ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="monthly-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Monthly Recurring Costs</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Building the product is only half the equation. Once you launch, you will face ongoing monthly costs that most founders dramatically underestimate. Budget for these from day one — we have seen too many startups run out of runway because they only budgeted for development.
                  </p>

                  {[
                    { name: 'Cloud Hosting (AWS / GCP / Azure)', range: '$500 - $5,000/mo', detail: 'Compute, storage, CDN, and database hosting. Starts low with a handful of users but scales quickly as your data and traffic grow. US-East or US-West regions are standard; multi-region adds 20-30% to hosting costs.' },
                    { name: 'Monitoring & Observability', range: '$100 - $800/mo', detail: 'Datadog, Sentry, or New Relic for error tracking, performance monitoring, and alerting. You cannot fix what you cannot see. Downtime costs the average SaaS company $5,600 per minute.' },
                    { name: 'Security & Compliance', range: '$200 - $1,500/mo', detail: 'SSL certificates, WAF, DDoS protection, vulnerability scanning, and penetration testing. CCPA compliance is mandatory for any SaaS handling California user data, and SOC 2 is increasingly table-stakes for B2B.' },
                    { name: 'Customer Support Tools', range: '$100 - $500/mo', detail: 'Intercom, Zendesk, or Help Scout for live chat, knowledge base, and ticket management. Critical for reducing churn once you pass 50 active accounts.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                        <span style={{ fontSize: 14, color: '#ffffff', fontWeight: 700 }}>{item.range}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                    </div>
                  ))}

                  <ProTip>
                    Here is a hack most consultants will not tell you: start with Vercel or Railway for hosting (both have generous free tiers), use Sentry&apos;s free plan for error tracking, and Resend&apos;s free tier for transactional email. You can run a SaaS with under 500 users for less than $200/month in infrastructure costs. Scale spending only when revenue justifies it.
                  </ProTip>
                </div>

                {/* ── Build vs Buy ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Build vs Buy: When to Use Existing Tools</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    One of the most expensive mistakes SaaS founders make is building everything from scratch. In 2026, the smartest approach is a hybrid strategy: buy commodity infrastructure, build your core differentiator.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    <strong style={{ color: '#ffffff' }}>Use existing tools for:</strong> Payment processing (Stripe), authentication (Auth0 or Clerk), email delivery (Resend or SendGrid), file storage (AWS S3), search (Algolia), and analytics (Mixpanel). These services have teams of hundreds working on them full-time. You will never build a better version — and you should not try.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Build custom for:</strong> Your core business logic, proprietary algorithms, unique workflow engines, and any feature that directly represents your competitive advantage. This is where your development budget should be concentrated — it is literally the reason your product exists.
                  </p>

                  <ComparisonTable
                    headers={['Component', 'Build Custom', 'Use Third-Party', 'Recommendation']}
                    rows={[
                      ['Authentication', '$8K - $20K + maintenance', '$0 - $500/mo (Clerk, Auth0)', 'Buy — unless auth IS your product'],
                      ['Billing', '$6K - $18K + compliance', '$0 - $300/mo (Stripe)', 'Buy — Stripe handles tax, compliance'],
                      ['Email Delivery', '$3K - $8K + deliverability', '$0 - $100/mo (Resend)', 'Buy — deliverability alone is worth it'],
                      ['Search', '$5K - $15K + indexing', '$0 - $250/mo (Algolia)', 'Buy for MVP, build later if needed'],
                      ['Core Business Logic', 'Your competitive moat', 'N/A', 'Always build — this IS your product'],
                      ['Custom Workflows', 'Unique to your users', 'Limited flexibility', 'Build — templates cannot replicate this'],
                    ]}
                  />

                  <ProTip>
                    At Codazz, we estimate that using best-in-class third-party services for commodity features saves our clients 30-40% on initial development costs and reduces time-to-market by 6-8 weeks on average. That is the difference between launching in Q2 and launching in Q4.
                  </ProTip>
                </div>

                {/* ── Tech Stack ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>The Tech Stack That Matters</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Your technology choices at the start will define your scalability ceiling and hiring costs for years to come. At Codazz, we have settled on a stack that balances developer productivity, performance, and long-term maintainability — while keeping costs predictable.
                  </p>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 20 }}>Our Recommended SaaS Stack</h3>
                    {[
                      { layer: 'Frontend', tech: 'Next.js + TypeScript + Tailwind CSS', why: 'Server-side rendering for SEO, React ecosystem for hiring, TypeScript for reliability at scale.' },
                      { layer: 'Backend', tech: 'Node.js + Express or tRPC', why: 'Shared language with frontend reduces context switching. Massive npm ecosystem for rapid feature development.' },
                      { layer: 'Database', tech: 'PostgreSQL + Prisma ORM', why: 'Battle-tested relational database. Prisma provides type-safe queries and painless migrations.' },
                      { layer: 'Infra', tech: 'AWS (ECS, RDS, S3, CloudFront)', why: 'US data centers for compliance. Unmatched service breadth, reliability, and enterprise trust.' },
                      { layer: 'CI/CD', tech: 'GitHub Actions + Vercel', why: 'Preview deployments for every PR. Zero-downtime production deploys. Built-in monitoring.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 16, marginBottom: i < 4 ? 20 : 0,
                        paddingBottom: i < 4 ? 20 : 0,
                        borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                      }}>
                        <div style={{ flexShrink: 0, width: 80 }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.layer}</span>
                        </div>
                        <div>
                          <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.tech}</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{item.why}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This stack powers over 80% of the SaaS products we have built at Codazz. It enables a small team of 3-5 developers to move with the velocity of teams twice their size, which directly translates to lower costs and faster time-to-market for our clients.
                  </p>
                </div>

                {/* ── American SaaS Funding ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="funding">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>American SaaS Funding Landscape</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    How you fund your SaaS build fundamentally changes your development strategy. The American funding ecosystem in 2026 remains the deepest in the world — but the playbook has shifted. Investors want capital efficiency, not growth-at-all-costs.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Bootstrapped (self-funded):</strong> Budget $30K-$75K for an MVP. Focus ruthlessly on one core feature. Use no-code tools for landing pages and marketing. Ship in 90 days or less. Your goal is to reach $5K MRR before investing further. The R&D tax credit can reimburse a significant percentage of your development costs retroactively — consult your CPA to understand your specific eligibility.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Pre-seed / Seed ($500K - $3M):</strong> Build the Growth Stage product ($75K-$200K) and allocate remaining funds to sales and marketing. Pre-seed rounds from firms like Y Combinator, Techstars, and emerging micro-VCs typically range from $500K to $3M. Budget 30-40% of your raise for product development.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    <strong style={{ color: '#ffffff' }}>Series A ($5M+):</strong> Now you are building Enterprise SaaS. Invest in SOC 2 compliance, hire a dedicated DevOps engineer, and build the integrations your largest prospects are demanding. Top-tier firms like a16z, Sequoia, and Bessemer are actively funding vertical SaaS companies at this stage.
                  </p>

                  <ProTip>
                    The most capital-efficient SaaS founders we work with follow a simple rule: spend 70% of development budget on features that directly generate revenue, 20% on infrastructure that prevents churn, and 10% on experimental features for future growth. Stick to this ratio and you will never over-build.
                  </ProTip>
                </div>

                {/* ── Why Build with Codazz ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Why Build Your SaaS with Codazz?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    You have plenty of options for building a SaaS product. Freelancers, agencies, in-house teams, offshore shops. So why do founders across the USA keep choosing Codazz? Here is what sets us apart.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32,
                  }}>
                    {[
                      {
                        title: '40-60% Lower Cost Than US Agencies',
                        desc: 'We combine North American project leadership (Edmonton, Canada) with a world-class engineering team in Chandigarh, India. You get the communication quality of a domestic agency at a fraction of the cost.',
                        icon: '💰',
                        color: '#22c55e',
                      },
                      {
                        title: '500+ Products Shipped Globally',
                        desc: 'We are not guessing. We have built SaaS products for fintech, healthtech, edtech, logistics, and dozens of other verticals. Every estimate we give is backed by real delivery data from similar projects.',
                        icon: '🚀',
                        color: '#a78bfa',
                      },
                      {
                        title: 'Your Time Zone, Your Language',
                        desc: 'Our project managers operate on US time zones. Daily standups, Slack access, and weekly demos — you always know exactly where your project stands. No 12-hour communication delays.',
                        icon: '🕐',
                        color: '#60a5fa',
                      },
                      {
                        title: 'Fixed-Price, No Surprises',
                        desc: 'We quote a fixed price after our Discovery phase. If scope does not change, neither does the price. No hourly billing surprises, no runaway invoices, no nickel-and-diming for revisions.',
                        icon: '🔒',
                        color: '#34d399',
                      },
                      {
                        title: 'Post-Launch Support Included',
                        desc: 'We do not disappear after launch. Every project includes 30 days of post-launch support, bug fixes, and performance monitoring. Optional retainers available for ongoing feature development.',
                        icon: '🛡️',
                        color: '#fbbf24',
                      },
                      {
                        title: 'Modern Stack, No Legacy Baggage',
                        desc: 'Next.js, TypeScript, PostgreSQL, AWS — we use the same stack that powers the fastest-growing SaaS companies in the world. Your codebase will be maintainable, testable, and ready to scale.',
                        icon: '⚡',
                        color: '#f472b6',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: '28px 24px', borderRadius: 20,
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
                    padding: '28px 32px', borderRadius: 20,
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}>
                    <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>The bottom line:</strong> Building a SaaS product is a significant investment. The difference between a $50K MVP that generates revenue and a $200K product that nobody uses comes down to one thing — the team you choose to build it with. At Codazz, we have spent over a decade learning that lesson so you do not have to.
                    </p>
                  </div>
                </div>

                {/* ── How Codazz Builds SaaS ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="our-process">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>How Codazz Builds SaaS: Our 5-Phase Process</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    After building over 40 SaaS products for startups and enterprises, we have refined our development process into five distinct phases. Each phase has clear deliverables, defined budgets, and go/no-go decision points so you are never locked into spending more than you are comfortable with.
                  </p>

                  {[
                    { phase: '01', name: 'Discovery', duration: '1-2 weeks', cost: '$3,000 - $8,000', color: '#ffffff', desc: 'We map your business model, define user personas, audit competitors, and create a detailed product requirements document (PRD). You walk away with a complete technical specification and accurate cost estimate — even if you decide to build with another team.' },
                    { phase: '02', name: 'Architecture', duration: '1-2 weeks', cost: '$5,000 - $12,000', color: '#a78bfa', desc: 'Database schema design, API architecture, infrastructure planning, and technology stack finalization. We create wireframes for every screen and define the data flow between components. This phase eliminates costly rewrites later.' },
                    { phase: '03', name: 'MVP Build', duration: '6-12 weeks', cost: '$20,000 - $60,000', color: '#34d399', desc: 'Iterative two-week sprints with demos after each cycle. We build the core product, integrate billing, deploy to staging, and conduct thorough QA. You have a working product in the hands of real users within three months.' },
                    { phase: '04', name: 'Scale', duration: '4-8 weeks', cost: '$15,000 - $40,000', color: '#60a5fa', desc: 'Performance optimization, load testing, security hardening, and infrastructure scaling. We add monitoring, alerting, and automated backups. Your product is now ready for aggressive customer acquisition.' },
                    { phase: '05', name: 'Optimize', duration: 'Ongoing', cost: '$3,000 - $10,000/mo', color: '#fbbf24', desc: 'Continuous improvement based on user analytics and feedback. Feature development, A/B testing, conversion optimization, and technical debt management. We become your fractional CTO and engineering team.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 24, marginBottom: 24,
                      padding: '28px 28px', borderRadius: 20,
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

                  <ProTip>
                    Our Discovery phase is designed to be a standalone engagement. If you are evaluating multiple agencies, start with our $3K-$8K Discovery — you will walk away with a PRD, wireframes, and a cost estimate you can use with any team. Most clients who complete Discovery choose to continue building with us, but there is zero obligation.
                  </ProTip>
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

                  {/* Quick Cost Calculator */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 12,
                    }}>Quick Reference</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>SaaS Cost Ranges (2026)</p>
                    {[
                      { label: 'MVP', range: '$30K - $75K', color: '#22c55e' },
                      { label: 'Growth', range: '$75K - $200K', color: '#a78bfa' },
                      { label: 'Enterprise', range: '$200K - $500K+', color: '#34d399' },
                      { label: 'Monthly Ops', range: '$900 - $7.8K/mo', color: '#fbbf24' },
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
                        Get Your Estimate
                      </button>
                    </Link>
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
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
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
                }}>Get Your Estimate</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build Your SaaS Product?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop guessing and start building. Share your SaaS idea with Codazz and receive a detailed cost breakdown, timeline, and technical roadmap within 48 hours — completely free. No obligation, no sales pitch, just honest numbers.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free SaaS Estimate →
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
