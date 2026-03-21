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
  { id: 'what-is-saas', label: 'What is SaaS in 2026?', emoji: '☁️' },
  { id: 'architecture', label: 'SaaS Architecture', emoji: '🏗️' },
  { id: 'multi-tenancy', label: 'Multi-Tenancy Deep Dive', emoji: '🏢' },
  { id: 'auth', label: 'Authentication & Auth0', emoji: '🔐' },
  { id: 'pricing-models', label: 'Pricing Models', emoji: '💰' },
  { id: 'stripe-billing', label: 'Stripe Billing', emoji: '💳' },
  { id: 'analytics', label: 'Analytics & Metrics', emoji: '📊' },
  { id: 'tech-stack', label: 'Recommended Tech Stack', emoji: '🛠️' },
  { id: 'cost', label: 'Development Costs', emoji: '💵' },
  { id: 'go-to-market', label: 'Go-to-Market Strategy', emoji: '🚀' },
  { id: 'timeline', label: 'Launch Timeline', emoji: '📅' },
  { id: 'why-codazz', label: 'Build with Codazz', emoji: '✨' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'saas-development-cost-guide', title: 'SaaS Development Cost Guide 2026', category: 'Business', readTime: '12 min' },
  { slug: 'mvp-development-guide', title: 'MVP Development Guide 2026', category: 'Engineering', readTime: '10 min' },
  { slug: 'nextjs-vs-react-2026', title: 'Next.js vs React 2026: Which to Build With?', category: 'Engineering', readTime: '9 min' },
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      paddingBottom: 20, marginBottom: 20,
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16, background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, marginBottom: open ? 14 : 0,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', textAlign: 'left', lineHeight: 1.4 }}>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(34,197,94,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#22c55e', fontSize: 18, flexShrink: 0,
          transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>{a}</p>
      )}
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
                background: 'rgba(34,197,94,0.1)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.2)',
              }}>Engineering</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.15)', margin: '0 4px' }}>·</span>
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
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 860,
            }}>
              How to Build a SaaS Product in 2026: Complete Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 740, marginBottom: 48, fontWeight: 400,
            }}>
              Everything you need to architect, build, and launch a scalable SaaS product — multi-tenancy design, Auth0 authentication, Stripe subscription billing, analytics, pricing models, and go-to-market strategy. Built from 500+ real product launches.
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
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.05) 100%)',
                  border: '1px solid rgba(34,197,94,0.25)',
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
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) 320px',
              gap: 64,
              alignItems: 'start',
            }}
              className="blog-layout"
            >

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* ── KEY TAKEAWAYS BOX ── */}
                <div className="reveal" id="key-takeaways" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                  border: '1px solid rgba(34,197,94,0.2)', borderRadius: 28, padding: 'clamp(28px, 4vw, 40px)',
                  marginBottom: 56, position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: -30, right: -30, width: 150, height: 150, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🎯</div>
                    <h2 style={{ fontSize: 20, fontWeight: 800, color: '#22c55e', margin: 0, letterSpacing: '-0.02em' }}>Key Takeaways</h2>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', zIndex: 1 }}>
                    {[
                      'Multi-tenant architecture is the foundation of any scalable SaaS — choose your isolation model (shared DB, schema-per-tenant, or DB-per-tenant) before writing a single line of application code.',
                      'Auth0 or Clerk handle enterprise SSO, MFA, and role-based access in days, not weeks — never build authentication from scratch in 2026.',
                      'Stripe Billing with its subscription API covers tiered pricing, usage-based metering, annual contracts, trials, and dunning management out of the box.',
                      'The winning 2026 SaaS tech stack: Next.js 15 + Node.js + PostgreSQL (Supabase) + Stripe + PostHog — production-ready for under $100/month at MVP stage.',
                      'Freemium and usage-based pricing are now table stakes. The 2026 winning formula is a hybrid: flat base fee plus usage-based add-ons for AI features and API consumption.',
                      'A realistic SaaS MVP costs $25K–$75K with a professional agency and takes 8–14 weeks — not $5K and 2 weeks as no-code influencers claim.',
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
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Building a SaaS product in 2026 is simultaneously easier and harder than it has ever been. Easier because the tooling is incredible — Stripe handles billing in hours, Auth0 handles authentication in days, and Next.js ships full-stack apps at blistering speed. Harder because user expectations are higher than ever, competition is fiercer, and the technical architecture decisions you make at the start will either compound your growth or strangle it at scale.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    This guide does not teach you how to use Bubble or Webflow. It teaches you how to architect and build a production-grade SaaS product that can serve thousands of tenants, handle enterprise security requirements, scale its billing model as you grow, and generate the kind of recurring revenue that attracts investors and acquirers.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    At Codazz, we have shipped over 500 software products — many of them SaaS platforms ranging from $25K MVPs to $2M+ enterprise platforms. Everything in this guide is backed by real delivery data, not theory.
                  </p>
                </div>

                <FounderTip>
                  <strong>Architecture first, always.</strong> The most expensive mistake we see founders make is starting to code before the data model and tenancy strategy are locked. Retrofitting multi-tenancy into a single-tenant app midway through development costs 3-5x more than designing it correctly upfront. Read the architecture and multi-tenancy sections before you touch your codebase.
                </FounderTip>

                {/* ── WHAT IS SAAS ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="what-is-saas">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    What is SaaS in 2026? The Modern Definition
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    Software as a Service is cloud-hosted software that customers pay a recurring fee to access. That definition has not changed. What has changed is what customers expect from it: in 2026, SaaS is not just about organizing data or automating workflows — it is about delivering <strong style={{ color: '#ffffff' }}>measurable business outcomes</strong> through AI-augmented automation.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    The most successful SaaS products today do not replace what a user does manually — they eliminate the need to think about it at all. Predictive analytics, AI-generated content, automated compliance checks, intelligent routing. The bar is higher, which means the technical foundation needs to be stronger.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { model: 'B2B SaaS', desc: 'Software sold to businesses. High ACV ($500–$25K+/month), long sales cycles, low churn, high LTV. The dominant model for profitable SaaS in 2026. Examples: Salesforce, Slack, Notion.', highlight: true },
                      { model: 'B2C SaaS', desc: 'Software sold directly to consumers. High volume, low price per user ($5–$50/month), high churn. Requires massive user acquisition to reach meaningful revenue. Examples: Spotify, Duolingo.', highlight: false },
                      { model: 'B2B2C SaaS', desc: 'Platform sold to businesses who use it to serve their own customers. Network effects, high stickiness, dual revenue streams. Complex to build but category-defining at scale. Examples: Stripe, Shopify, Twilio.', highlight: false },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: item.highlight ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                        border: `1px solid ${item.highlight ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`,
                        borderRadius: 20, padding: 24,
                      }}>
                        <p style={{ fontSize: 15, fontWeight: 700, color: item.highlight ? '#22c55e' : '#ffffff', margin: '0 0 10px' }}>{item.model}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <FounderTip>
                    If this is your first SaaS, go B2B and pick a niche you already know. You only need 20–50 paying customers at $500/month to reach $10K–$25K MRR. With B2C, you would need thousands. Niche B2B is the fastest path to your first $1M ARR — and it is far more acquirable.
                  </FounderTip>
                </div>

                {/* ── SAAS ARCHITECTURE ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="architecture">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 16,
                  }}>
                    SaaS Architecture: How to Structure Your Application
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    A SaaS application is not a website with a login. It is a multi-layered distributed system with stateless API services, a persistent data layer, background job processing, event-driven webhooks, real-time capabilities, and an authentication plane that sits above everything else. Getting the architecture right means understanding these layers before you touch code.
                  </p>

                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 32 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Layer</th>
                          <th style={tableHeaderStyle}>What it Does</th>
                          <th style={tableHeaderStyle}>2026 Best Practice</th>
                          <th style={tableHeaderStyle}>Pitfall to Avoid</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Presentation', 'UI, routing, SSR, SEO', 'Next.js 15 with React Server Components', 'Client-side-only SPAs — terrible for SEO and Time to First Byte'],
                          ['API Layer', 'Business logic, validation, orchestration', 'tRPC or REST with strict Zod validation', 'Exposing raw DB queries through API endpoints'],
                          ['Authentication', 'Identity, sessions, MFA, SSO', 'Auth0 or Clerk — never roll your own', 'JWT with no refresh token rotation — a security disaster'],
                          ['Data Layer', 'Persistent storage, tenant isolation', 'PostgreSQL with row-level security (RLS)', 'Using a single unpartitioned table for all tenant data'],
                          ['Background Jobs', 'Async tasks, emails, webhooks, billing', 'BullMQ on Redis or Inngest for serverless', 'Running long jobs synchronously in API handlers'],
                          ['File Storage', 'User uploads, exports, attachments', 'AWS S3 or Cloudflare R2 with signed URLs', 'Storing binary files in PostgreSQL — destroys performance'],
                          ['Observability', 'Logs, traces, errors, uptime', 'Datadog or Sentry + uptime monitoring', 'Console.log in production — you will be blind when it matters'],
                          ['CDN / Edge', 'Static assets, edge caching, geo-routing', 'Cloudflare or Vercel Edge Network', 'Serving assets from origin on every request at scale'],
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={{ ...tableCellBoldStyle, color: '#22c55e', whiteSpace: 'nowrap' }}>{row[0]}</td>
                            <td style={tableCellBoldStyle}>{row[1]}</td>
                            <td style={tableCellStyle}>{row[2]}</td>
                            <td style={{ ...tableCellStyle, color: 'rgba(248,113,113,0.8)' }}>{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 16 }}>
                    The architecture philosophy that wins in 2026 is <strong style={{ color: '#ffffff' }}>boring infrastructure, exciting product.</strong> Use established, well-supported tools for every layer of the stack. Save your engineering creativity for the domain logic and AI features that are your actual competitive advantage. Nobody pays you for your custom session management — they pay you for the outcome your product delivers.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                    Design your API layer to be completely stateless from day one. Every request should carry enough information to be processed independently — no sticky sessions, no server-side state. This is what allows you to auto-scale horizontally when traffic spikes without any code changes.
                  </p>
                </div>

                {/* ── MULTI-TENANCY ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="multi-tenancy">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 16,
                  }}>
                    Multi-Tenancy Deep Dive: Isolation Models Explained
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    Multi-tenancy is the defining characteristic of SaaS architecture. It means a single deployed instance of your software serves multiple customers (tenants) simultaneously, with their data completely isolated from each other. How you implement that isolation is one of the most consequential architectural decisions you will make.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 28 }}>
                    There are three primary isolation models, each with dramatically different cost, complexity, and compliance profiles. Understanding the tradeoffs before you choose is critical — migrating between models at scale is an expensive, weeks-long engineering project.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 28 }}>
                    {[
                      {
                        model: 'Shared Database, Shared Schema',
                        icon: '🟢',
                        cost: 'Lowest cost',
                        complexity: 'Low',
                        isolation: 'Row-level (tenant_id column)',
                        bestFor: 'SMB SaaS, freemium products, high-volume low-ACV markets',
                        tradeoff: 'One misconfigured query can leak cross-tenant data. Requires PostgreSQL Row-Level Security (RLS) configured perfectly. A single noisy tenant can impact performance for all others.',
                        highlight: true,
                      },
                      {
                        model: 'Shared Database, Schema-per-Tenant',
                        icon: '🟡',
                        cost: 'Medium cost',
                        complexity: 'Medium',
                        isolation: 'Schema-level (each tenant gets their own PG schema)',
                        bestFor: 'Mid-market SaaS with compliance needs, 100–10,000 tenants',
                        tradeoff: 'Schema migrations must run across all tenant schemas simultaneously — requires careful tooling (Prisma Migrate with multi-schema support or custom migration runner). More robust than shared schema.',
                        highlight: false,
                      },
                      {
                        model: 'Database-per-Tenant',
                        icon: '🔵',
                        cost: 'Highest cost',
                        complexity: 'High',
                        isolation: 'Full database isolation (separate Postgres instance per tenant)',
                        bestFor: 'Enterprise SaaS, regulated industries (healthcare, finance, government), high-ACV deals',
                        tradeoff: 'Infrastructure costs scale linearly with tenant count. Requires orchestration tooling for provisioning, migrations, and backup management. But this is what enterprise buyers demand for SOC2, HIPAA, and GDPR compliance.',
                        highlight: false,
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: item.highlight ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                        border: `1px solid ${item.highlight ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`,
                        borderRadius: 20, padding: 28,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                          <span style={{ fontSize: 20 }}>{item.icon}</span>
                          <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.model}</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 12, marginBottom: 16 }}>
                          {[
                            { label: 'Infrastructure Cost', value: item.cost },
                            { label: 'Implementation', value: item.complexity },
                            { label: 'Isolation Level', value: item.isolation },
                            { label: 'Best For', value: item.bestFor },
                          ].map((detail, j) => (
                            <div key={j}>
                              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', margin: '0 0 4px' }}>{detail.label}</p>
                              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>{detail.value}</p>
                            </div>
                          ))}
                        </div>
                        <div style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.1)', borderRadius: 12, padding: '12px 16px' }}>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>
                            <strong style={{ color: 'rgba(248,113,113,0.8)' }}>Key tradeoff: </strong>{item.tradeoff}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <FounderTip>
                    <strong>Start with shared schema + RLS for your MVP.</strong> Use PostgreSQL&apos;s built-in Row-Level Security policies to enforce tenant isolation at the database level — not just in application code. This is the fastest and cheapest path to a working multi-tenant system. When you land your first enterprise customer who requires database isolation, provision a dedicated instance for them and migrate their data over. You do not need to redesign the whole platform.
                  </FounderTip>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                    Regardless of which model you choose, <strong style={{ color: '#ffffff' }}>never rely solely on application-level tenant filtering.</strong> Always implement a second layer of protection at the data layer. The consequence of a tenant data leak — especially in regulated industries — is catastrophic: breach notification laws, GDPR fines, and customer churn that kills the company.
                  </p>
                </div>

                {/* ── AUTHENTICATION ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="auth">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 16,
                  }}>
                    Authentication in 2026: Auth0, Clerk, and What to Actually Use
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    Authentication is not a feature you build — it is infrastructure you buy. Rolling your own auth in 2026 is the engineering equivalent of building your own database. You will get it working, then a subtle bug in your session token rotation will expose user accounts six months later. Auth0 and Clerk exist specifically because getting auth right is incredibly hard and the consequences of getting it wrong are existential.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 28 }}>
                    Here is what enterprise SaaS buyers require from authentication in 2026 — and what each provider offers out of the box:
                  </p>

                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 28 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Feature</th>
                          <th style={tableHeaderStyle}>Auth0</th>
                          <th style={tableHeaderStyle}>Clerk</th>
                          <th style={tableHeaderStyle}>NextAuth.js</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['SSO / SAML 2.0', 'Yes (enterprise tier)', 'Yes (enterprise tier)', 'Manual — not built in'],
                          ['Social Login (Google, GitHub, etc.)', 'Yes — 30+ providers', 'Yes — built in', 'Yes — via providers'],
                          ['MFA / 2FA', 'Yes — TOTP, SMS, push', 'Yes — TOTP, SMS', 'Manual — not built in'],
                          ['Magic Links / Passwordless', 'Yes', 'Yes — first-class feature', 'Via plugins'],
                          ['RBAC (Role-Based Access)', 'Yes — Actions & Rules', 'Yes — Organizations', 'Manual implementation'],
                          ['Org / Tenant Management', 'Organizations feature', 'Organizations — first-class', 'Manual implementation'],
                          ['Next.js Integration', 'SDK — moderate effort', 'Native Next.js integration', 'Purpose-built for Next.js'],
                          ['SOC2 Compliant', 'Yes', 'Yes', 'N/A (self-hosted)'],
                          ['Pricing (starter)', 'Free to 7,500 MAU', 'Free to 10K MAU', 'Free (open source)'],
                          ['Pricing (scale)', '$240+/month', '$25+/month', 'Infrastructure cost only'],
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={tableCellBoldStyle}>{row[0]}</td>
                            <td style={tableCellStyle}>{row[1]}</td>
                            <td style={{ ...tableCellStyle, background: 'rgba(34,197,94,0.02)' }}>{row[2]}</td>
                            <td style={tableCellStyle}>{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      { title: 'Use Clerk if...', points: ['You are building on Next.js (native App Router support)', 'You want the fastest integration — production auth in under a day', 'You need Organizations for multi-tenant management built in', 'Budget is a concern at early stage'], color: '#22c55e' },
                      { title: 'Use Auth0 if...', points: ['You have complex compliance requirements (SOC2 Type II, HIPAA)', 'You need support for legacy enterprise SAML IdPs (Okta, Azure AD)', 'Your team already has Auth0 expertise', 'You need the full suite of enterprise security features'], color: '#60a5fa' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: `1px solid rgba(255,255,255,0.06)`,
                        borderRadius: 20, padding: 24,
                      }}>
                        <p style={{ fontSize: 15, fontWeight: 700, color: item.color, margin: '0 0 14px' }}>{item.title}</p>
                        <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {item.points.map((point, j) => (
                            <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                              <svg style={{ flexShrink: 0, marginTop: 3, color: item.color }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 16 }}>
                    Whichever provider you choose, implement these authentication patterns from day one: <strong style={{ color: '#ffffff' }}>short-lived access tokens (15 minutes)</strong> with automatic silent refresh, <strong style={{ color: '#ffffff' }}>refresh token rotation</strong> (invalidate the old token on every use), and <strong style={{ color: '#ffffff' }}>device-aware sessions</strong> that let users see and revoke active sessions from their account settings.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                    For enterprise B2B SaaS, SAML 2.0 SSO is a table-stakes requirement. Without it, you will lose deals to competitors who have it. Plan for SAML from the start — implementing it after launch typically requires significant architecture changes to your session management.
                  </p>
                </div>

                {/* ── PRICING MODELS ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="pricing-models">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 16,
                  }}>
                    SaaS Pricing Models: Freemium, Usage-Based, Tiered, and Hybrid
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 28 }}>
                    Pricing is not a tactical decision — it is a strategic one that shapes your sales motion, your cost structure, and your valuation multiple. The pricing model you choose determines which customers you attract, how you handle enterprise negotiations, and whether your gross margins can sustain growth. Here is how the four dominant models work in 2026:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20, marginBottom: 28 }}>
                    {[
                      {
                        icon: '📊',
                        model: 'Tiered Pricing',
                        example: 'Starter $49/mo · Pro $149/mo · Enterprise Custom',
                        pros: 'Easy to understand, natural upsell path, best for self-serve B2B',
                        cons: 'Feature gating creates customer resentment; middle tier often cannibalizes top tier',
                        verdict: 'The default choice for B2B SaaS. Start here.',
                        highlight: true,
                      },
                      {
                        icon: '⚡',
                        model: 'Usage-Based',
                        example: '$0.01 per API call, $0.10 per AI generation, $5 per GB',
                        pros: 'Aligns cost with value; customers love paying only for what they use; NRR easily exceeds 120%',
                        cons: 'Revenue is unpredictable; customers may throttle usage; hard to budget for buyers',
                        verdict: 'Excellent for AI and API products. Layer on top of a base subscription.',
                        highlight: false,
                      },
                      {
                        icon: '🎁',
                        model: 'Freemium',
                        example: 'Free tier (limited features) + paid plans',
                        pros: 'Massive top-of-funnel; product-led growth; viral distribution',
                        cons: 'High support cost for non-paying users; free tier must be carefully gated to drive conversion',
                        verdict: 'Only works if your product is inherently viral or has strong network effects.',
                        highlight: false,
                      },
                      {
                        icon: '🔀',
                        model: 'Hybrid (2026 Winner)',
                        example: '$99/mo base + $0.05 per AI credit + $10 per extra seat',
                        pros: 'Predictable base revenue plus usage upside; NRR can exceed 130%; captures value from both light and power users',
                        cons: 'More complex billing logic; requires proper Stripe metering setup; can confuse prospects',
                        verdict: 'The model winning the most ARR in 2026. Implement this at Series A.',
                        highlight: true,
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: item.highlight ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                        border: `1px solid ${item.highlight ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`,
                        borderRadius: 20, padding: 24,
                      }}>
                        <span style={{ fontSize: 28, display: 'block', marginBottom: 12 }}>{item.icon}</span>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 6px' }}>{item.model}</h3>
                        <p style={{ fontSize: 12, color: '#22c55e', margin: '0 0 14px', fontFamily: 'monospace' }}>{item.example}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 8px', lineHeight: 1.6 }}>
                          <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Pros: </strong>{item.pros}
                        </p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 14px', lineHeight: 1.6 }}>
                          <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Cons: </strong>{item.cons}
                        </p>
                        <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: 10, padding: '10px 14px' }}>
                          <p style={{ fontSize: 13, color: '#22c55e', margin: 0, fontWeight: 600 }}>Verdict: {item.verdict}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <FounderTip>
                    <strong>The pricing research hack:</strong> before setting your prices, look up the top 3 competitors in your niche on G2 or Capterra. Find their pricing pages. Your entry tier should be 20–30% cheaper than the market leader (to steal their dissatisfied customers) while your enterprise tier should be at parity or premium (to signal quality). Pricing too low is the most common mistake early-stage founders make — it sets a ceiling on your valuation and attracts the wrong customers.
                  </FounderTip>
                </div>

                {/* ── STRIPE BILLING ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="stripe-billing">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 16,
                  }}>
                    Stripe Billing: The Complete Implementation Guide
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    Stripe Billing is the de facto standard for SaaS subscription management in 2026. It handles subscriptions, usage-based metering, invoicing, tax calculation (Stripe Tax), dunning (failed payment recovery), and global payment methods. Building a billing system from scratch instead of using Stripe is a 3–6 month engineering project that solves a problem already solved.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 28 }}>
                    Here are the core Stripe objects and how they map to your SaaS billing model:
                  </p>

                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 28 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 660 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Stripe Object</th>
                          <th style={tableHeaderStyle}>What it Represents</th>
                          <th style={tableHeaderStyle}>When to Use</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Customer', 'A paying organization (your tenant)', 'Create on signup. Attach to your tenant record in the DB.'],
                          ['Product', 'A subscription plan or add-on (e.g., "Pro Plan", "AI Credits")', 'Create once per plan. Link from your pricing page.'],
                          ['Price', 'The specific pricing for a product (e.g., $99/mo, $0.05/credit)', 'One product can have multiple prices (monthly/annual, currencies).'],
                          ['Subscription', 'An active recurring billing arrangement', 'Created when a customer selects a plan. Contains items (prices).'],
                          ['Usage Record', 'A metered event (API call, AI generation, etc.)', 'Submit via Stripe API after each billable event for usage-based billing.'],
                          ['Invoice', 'A statement generated each billing cycle', 'Automatically created by Stripe. Send to customers via webhook.'],
                          ['Payment Intent', 'A single payment transaction', 'Used for one-time charges (setup fees, overages).'],
                          ['Webhook', 'Real-time events pushed from Stripe to your API', 'Listen for invoice.paid, customer.subscription.deleted, payment_intent.failed.'],
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={{ ...tableCellBoldStyle, color: '#22c55e', whiteSpace: 'nowrap', fontFamily: 'monospace', fontSize: 13 }}>{row[0]}</td>
                            <td style={tableCellBoldStyle}>{row[1]}</td>
                            <td style={tableCellStyle}>{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                    <p style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>Critical Stripe implementation rules:</p>
                    {[
                      { rule: 'Always verify webhooks using Stripe\'s signature verification', detail: 'Never trust webhook payloads without verifying the stripe-signature header. An attacker can send fake payment events and unlock premium features for free.' },
                      { rule: 'Implement idempotency keys on all Stripe API calls', detail: 'Network errors cause duplicate requests. Without idempotency keys, a customer could be charged twice. Pass a unique key per operation using the Idempotency-Key header.' },
                      { rule: 'Store the Stripe customer ID, not the payment method', detail: 'Never store raw card numbers — Stripe handles PCI compliance. Store stripe_customer_id in your users/orgs table and retrieve payment methods from Stripe on demand.' },
                      { rule: 'Enable Stripe\'s Smart Retries for dunning', detail: 'Failed payments cost SaaS companies an average of 7% of MRR. Stripe\'s Smart Retries uses ML to optimize retry timing, recovering 38% more failed payments than manual retry schedules.' },
                      { rule: 'Use Stripe Tax for automatic tax collection', detail: 'US sales tax nexus, EU VAT, Canadian GST — tax compliance for SaaS is a minefield. Stripe Tax handles it automatically with a single line of configuration. Not optional if you sell internationally.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, padding: 20,
                      }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{i + 1}. {item.rule}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>

                  <FounderTip>
                    <strong>The Stripe Customer Portal is your secret weapon.</strong> Enable it and let customers manage their own subscriptions, upgrade plans, download invoices, and update payment methods — without you writing any UI code. It takes 30 minutes to set up and eliminates an entire category of support tickets. Your customers will actually prefer it to contacting you.
                  </FounderTip>
                </div>

                {/* ── ANALYTICS ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="analytics">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 16,
                  }}>
                    SaaS Analytics: The Metrics That Actually Matter
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 28 }}>
                    Vanity metrics kill SaaS companies slowly. Page views, total registered users, app downloads — none of these tell you whether you have a sustainable business. From the day you launch, track these operational metrics weekly. They are not optional.
                  </p>

                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 28 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Metric</th>
                          <th style={tableHeaderStyle}>Definition</th>
                          <th style={tableHeaderStyle}>Healthy Target</th>
                          <th style={tableHeaderStyle}>Warning Sign</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['MRR', 'Monthly Recurring Revenue — total predictable revenue per month', '$10K+ within 12 months of launch', 'Flat MRR for 60+ days — product-market fit issue'],
                          ['NRR', 'Net Revenue Retention — revenue from existing customers including expansion', '110%+ (120%+ is world-class)', 'Under 100% — you are losing more than you are gaining from expansions'],
                          ['Churn Rate', 'Percentage of customers who cancel each billing period', 'Under 3% monthly (under 1% for enterprise)', 'Over 5% monthly — immediate product or onboarding crisis'],
                          ['CAC', 'Customer Acquisition Cost — fully loaded spend to land one paying customer', 'Under 1/3 of LTV', 'CAC higher than LTV — you are paying to lose money'],
                          ['LTV', 'Lifetime Value — total revenue before a customer churns', '3x CAC or higher', 'Under 1x CAC — business model is fundamentally broken'],
                          ['Activation Rate', '% of signups who complete the core "aha moment" within 7 days', 'Over 40%', 'Under 20% — onboarding flow is broken, fix before scaling acquisition'],
                          ['Time to Value', 'How long from signup until a user gets tangible value', 'Under 10 minutes for self-serve', 'Over 30 minutes — customers will churn before they see the value'],
                          ['NPS', 'Net Promoter Score — would customers recommend you (-100 to +100)', '+40 or higher', 'Under +20 — product has fundamental experience issues'],
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={{ ...tableCellBoldStyle, color: '#22c55e', whiteSpace: 'nowrap' }}>{row[0]}</td>
                            <td style={tableCellStyle}>{row[1]}</td>
                            <td style={{ ...tableCellStyle, color: '#ffffff', fontWeight: 600 }}>{row[2]}</td>
                            <td style={{ ...tableCellStyle, color: 'rgba(248,113,113,0.8)' }}>{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 16 }}>
                    For product analytics tooling, use <strong style={{ color: '#ffffff' }}>PostHog</strong> — it is open source, self-hostable (important for GDPR compliance), and combines product analytics, session replay, feature flags, and A/B testing in a single platform. Its generous free tier handles most MVPs comfortably. Mixpanel is the enterprise alternative if you need more advanced cohort analysis.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                    Track <strong style={{ color: '#ffffff' }}>feature usage events</strong> from day one — not just page views. Which core features do your best customers use most? Which features do churned customers never touched? This data tells you where to invest engineering time and which features to sunset.
                  </p>
                </div>

                {/* ── TECH STACK ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 12,
                  }}>
                    The 2026 SaaS Tech Stack: Battle-Tested at Scale
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    We have built over 500 products at Codazz. This is the stack that wins in 2026 — fast to build, cheap to run at MVP stage, and capable of scaling to millions of users without a rewrite.
                  </p>

                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Layer</th>
                          <th style={tableHeaderStyle}>Recommended Tools</th>
                          <th style={tableHeaderStyle}>Why This Choice</th>
                          <th style={tableHeaderStyle}>MVP Cost/mo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Frontend', 'Next.js 15 + React 19 + Tailwind CSS', 'RSC for speed, SSR for SEO, massive ecosystem, Vercel deployment', '$0 (open source)'],
                          ['Backend / API', 'Node.js + tRPC or Next.js API Routes', 'TypeScript end-to-end type safety, no REST schema drift', '$0 (open source)'],
                          ['Database', 'PostgreSQL via Supabase or Neon', 'RLS for multi-tenancy, JSON support, ACID compliance, connection pooling', '$0 – $25/mo'],
                          ['Auth', 'Clerk (startup) or Auth0 (enterprise)', 'SSO, MFA, RBAC, Organizations — production-ready in < 1 day', '$0 – $25/mo'],
                          ['Billing', 'Stripe Billing + Stripe Tax', 'Subscriptions, usage metering, invoicing, tax compliance, global', '2.9% + $0.30 per txn'],
                          ['Hosting', 'Vercel (frontend) + Railway or Fly.io (backend)', 'Zero-config CI/CD, auto-scaling, edge deployment', '$20 – $50/mo'],
                          ['Email', 'Resend or Postmark', 'High deliverability, developer-first APIs, React Email templates', '$0 – $20/mo'],
                          ['Analytics', 'PostHog', 'Product analytics + session replay + feature flags + A/B testing', '$0 – $50/mo'],
                          ['Background Jobs', 'Inngest (serverless) or BullMQ + Redis', 'Reliable async job processing with retry logic and observability', '$0 – $25/mo'],
                          ['AI / LLM', 'OpenAI API + Vercel AI SDK', 'GPT-4o for features, streaming responses, embeddings for semantic search', '$20 – $200/mo'],
                          ['Error Tracking', 'Sentry', 'Real-time error monitoring with stack traces and user context', '$0 – $26/mo'],
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

                  <FounderTip>
                    <strong>Total MVP infrastructure cost: $40–$420/month.</strong> Start with Vercel + Supabase + Stripe — that gets you live for under $75/month in infrastructure. Migrate to dedicated AWS or GCP infrastructure when you hit $10K MRR and need the customization. Premature optimization is the primary way early-stage SaaS founders burn runway without shipping.
                  </FounderTip>
                </div>

                {/* ── COST ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 16,
                  }}>
                    How Much Does It Cost to Build a SaaS in 2026?
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    Transparency matters. Most agencies avoid this question — we will not. A custom SaaS MVP with authentication, multi-tenancy, billing, core features, and a polished dashboard costs between <strong style={{ color: '#ffffff' }}>$25,000 and $75,000</strong> with a professional agency in 2026. Here is why, broken down by component.
                  </p>

                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Component</th>
                          <th style={tableHeaderStyle}>Description</th>
                          <th style={tableHeaderStyle}>Cost Range</th>
                          <th style={tableHeaderStyle}>Weeks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Discovery & Architecture', 'Requirements, data model, API design, multi-tenancy strategy, tech stack finalization', '$3,000 – $8,000', '1 – 2'],
                          ['UI/UX Design', 'Figma wireframes, component system, full hi-fi prototype', '$4,000 – $12,000', '2 – 3'],
                          ['Auth & Multi-Tenancy', 'Auth0/Clerk setup, RBAC, tenant isolation, org management', '$3,000 – $8,000', '1 – 2'],
                          ['Core Feature Development', 'The 2-3 features that make your SaaS valuable', '$8,000 – $25,000', '4 – 6'],
                          ['Stripe Billing Integration', 'Subscription plans, webhooks, Customer Portal, usage metering', '$2,000 – $6,000', '1 – 2'],
                          ['Admin Dashboard', 'Tenant management, analytics, user management, settings', '$3,000 – $8,000', '1 – 2'],
                          ['DevOps & Deployment', 'CI/CD pipeline, staging environment, monitoring, security hardening', '$2,000 – $5,000', '1'],
                          ['QA & Testing', 'End-to-end tests, security review, load testing, bug fixes', '$2,000 – $6,000', '1 – 2'],
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={tableCellBoldStyle}>{row[0]}</td>
                            <td style={tableCellStyle}>{row[1]}</td>
                            <td style={{ ...tableCellBoldStyle, color: '#22c55e', whiteSpace: 'nowrap' }}>{row[2]}</td>
                            <td style={{ ...tableCellStyle, whiteSpace: 'nowrap' }}>{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { range: '$15K – $30K', label: 'Simple MVP', desc: 'Auth, single-tenant, 1-2 core features, basic Stripe integration, simple dashboard', timeline: '6–8 weeks', highlighted: false },
                      { range: '$30K – $65K', label: 'Standard SaaS', desc: 'Multi-tenant, RBAC, 3-4 features, usage-based billing, analytics, API', timeline: '10–14 weeks', highlighted: true },
                      { range: '$65K – $150K+', label: 'Enterprise Platform', desc: 'SAML SSO, compliance docs, white-labeling, complex integrations, mobile app', timeline: '16–24 weeks', highlighted: false },
                    ].map((tier, i) => (
                      <div key={i} style={{
                        background: tier.highlighted ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.015)',
                        border: `1px solid ${tier.highlighted ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`,
                        borderRadius: 20, padding: 24,
                      }}>
                        <p style={{ fontSize: 26, fontWeight: 800, color: tier.highlighted ? '#22c55e' : '#ffffff', margin: '0 0 4px' }}>{tier.range}</p>
                        <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tier.label}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: '0 0 12px', lineHeight: 1.6 }}>{tier.desc}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>Timeline: {tier.timeline}</p>
                      </div>
                    ))}
                  </div>

                  <FounderTip>
                    <strong>Think ROI, not sticker price.</strong> A $40K SaaS MVP that generates $8K MRR pays for itself in 5 months — then compounds indefinitely. Compare that to hiring one senior developer at $160K+/year who still needs a designer, DevOps engineer, and product manager alongside them. A specialized agency gives you an entire multi-disciplinary team for a fraction of the hiring cost with zero equity dilution and no HR overhead.
                  </FounderTip>
                </div>

                {/* ── GO TO MARKET ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="go-to-market">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 16,
                  }}>
                    Go-to-Market Strategy: From Launch to $100K ARR
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    A great SaaS product with a poor go-to-market strategy fails. The GTM is not a marketing afterthought — it is a core business decision that should be designed in parallel with the product itself. Here are the three GTM motions that work for B2B SaaS in 2026, and when to use each.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 28 }}>
                    {[
                      {
                        motion: 'Product-Led Growth (PLG)',
                        description: 'The product itself drives acquisition, conversion, and expansion. Users discover value before talking to sales. Classic examples: Figma, Notion, Slack. The freemium model is the enabler of PLG.',
                        bestFor: 'Products with strong viral loops, low time-to-value, and self-serve adoption. Works best when the value is immediately obvious and the product is inherently shareable.',
                        tactics: ['Freemium tier with genuine value (not crippled)', 'In-product viral loops (share a link, invite teammates)', 'Usage-based expansion — customers grow their own bill naturally', 'Self-serve upgrade flow that converts without sales touchpoint'],
                        icon: '🚀',
                      },
                      {
                        motion: 'Sales-Led Growth (SLG)',
                        description: 'A sales team drives acquisition through outbound prospecting, inbound lead qualification, and relationship-driven enterprise deals. Works for high-ACV products where the buyer is not the user.',
                        bestFor: 'Complex B2B software with long procurement cycles, multiple stakeholders, and deal sizes above $10K ACV. Common in compliance, finance, healthcare, and enterprise software.',
                        tactics: ['Targeted outbound to ICP (Ideal Customer Profile) using LinkedIn + Clay', 'Demo-driven sales with personalized discovery calls', 'Land-and-expand: start with one team, expand to the org', 'Case studies and ROI calculators for economic buyers'],
                        icon: '🤝',
                      },
                      {
                        motion: 'Content-Led Growth (CLG)',
                        description: 'SEO content and thought leadership drive organic acquisition. Visitors find you through Google, consume high-value content, and self-educate into a buying decision.',
                        bestFor: 'SaaS products solving problems that buyers research extensively before purchasing. Compound channel — slow to start (6–18 months) but drives the highest-quality, lowest-CAC leads at scale.',
                        tactics: ['Long-form SEO content targeting bottom-of-funnel keywords ("best [category] software")', 'Comparison pages (Your Product vs. Competitor)', 'Free tools and calculators that attract organic traffic', 'Newsletter to nurture subscribers into product trials'],
                        icon: '✍️',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 20, padding: 28,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                          <span style={{ fontSize: 24 }}>{item.icon}</span>
                          <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.motion}</h3>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 0 12px' }}>{item.description}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 16px' }}>
                          <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Best for: </strong>{item.bestFor}
                        </p>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#22c55e', margin: '0 0 10px' }}>Core Tactics</p>
                          <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {item.tactics.map((tactic, j) => (
                              <li key={j} style={{ display: 'flex', gap: 10 }}>
                                <svg style={{ flexShrink: 0, marginTop: 3, color: '#22c55e' }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{tactic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <FounderTip>
                    <strong>Do not try all three GTM motions at once.</strong> Pick one and go deep. Most successful B2B SaaS companies start with sales-led growth to reach $1M ARR (you need the customer learning you get from sales conversations), then layer in content and PLG once you understand your ICP deeply. Trying to be product-led, content-led, and sales-led simultaneously means you are half-committed to all three and winning at none.
                  </FounderTip>
                </div>

                {/* ── TIMELINE ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="timeline">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 12,
                  }}>
                    SaaS Launch Timeline: Idea to First Customer in 90 Days
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    This is the exact week-by-week framework Codazz uses with clients to go from validated idea to first paying customer in 13 weeks. It is aggressive — but achievable when you stay disciplined about scope.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
                      <thead>
                        <tr>
                          <th style={tableHeaderStyle}>Week</th>
                          <th style={tableHeaderStyle}>Phase</th>
                          <th style={tableHeaderStyle}>Key Activities</th>
                          <th style={tableHeaderStyle}>Deliverable</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['1 – 2', 'Validation', '20+ customer interviews, competitor teardown, ICP definition, pricing hypothesis', 'Validated problem statement + ICP document'],
                          ['3 – 4', 'Design & Architecture', 'Figma wireframes, data model, API design, multi-tenancy decision, tech stack lock-in', 'Hi-fi prototype + technical spec'],
                          ['5 – 6', 'Foundation', 'Auth setup (Clerk/Auth0), database schema, multi-tenant scaffolding, CI/CD pipeline', 'Working auth flow + DB with RLS'],
                          ['7 – 9', 'Core Features', 'Feature #1 and #2 (your core value), Stripe integration, basic dashboard', 'Feature-complete MVP, billing working'],
                          ['10 – 11', 'Polish & Security', 'UI refinement, onboarding flow, security audit, load testing, error handling', 'Production-ready MVP on staging'],
                          ['12', 'Beta Launch', '20–50 beta users, feedback collection, rapid iteration, Product Hunt teaser', 'Beta feedback report + prioritized backlog'],
                          ['13', 'Public Launch', 'Product Hunt launch, activate waitlist, first paid acquisition, PR outreach', 'First paying customers, MRR begins'],
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
                    <strong>Weeks 3–4 are make-or-break.</strong> The teams that invest properly in design and architecture during these weeks ship the rest of the timeline predictably. Teams that skip it spend weeks 7–11 firefighting architecture decisions made in a rush. We have seen clients save 6+ weeks of rework by spending two weeks on a proper technical spec before writing a line of application code.
                  </FounderTip>
                </div>

                {/* ── WHY CODAZZ ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)', borderRadius: 28,
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
                        At Codazz, we have helped over 500 founders turn their SaaS ideas into revenue-generating products. Our engineering teams in Edmonton and Chandigarh specialize in building custom Next.js SaaS platforms — complete with multi-tenancy, Auth0/Clerk, Stripe Billing, and AI features — using exactly the architecture and tech stack covered in this guide.
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 16, marginBottom: 32 }}>
                        {[
                          { icon: '🏗️', title: 'Architecture-First', desc: 'We design multi-tenancy, auth, and data models before we write a line of product code' },
                          { icon: '🚀', title: 'MVP in 8–12 Weeks', desc: 'From validated idea to live product with your first paying customers' },
                          { icon: '🤖', title: 'AI-Native by Default', desc: 'Built-in AI features with OpenAI, LangChain, and vector search from day one' },
                          { icon: '🔒', title: 'Security First', desc: 'SOC2-ready architecture, RBAC, RLS, and penetration testing included' },
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
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>No commitment. 30 minutes. We will tell you if your idea is viable.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── FAQ ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 32,
                  }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28, padding: 'clamp(28px, 4vw, 40px)',
                  }}>
                    <FAQItem
                      q="What is the difference between multi-tenant and single-tenant SaaS?"
                      a="In a multi-tenant architecture, a single deployed application instance serves all of your customers simultaneously, with their data isolated via row-level security, schemas, or separate databases. In single-tenant, each customer gets their own dedicated deployment. Multi-tenant is the standard for SaaS because it is far cheaper to operate — one codebase, one deployment pipeline, shared infrastructure costs. Single-tenant is only warranted for high-security enterprise clients with strict data residency requirements, and you typically charge 3-5x more for it."
                    />
                    <FAQItem
                      q="Should I use Auth0 or Clerk for my SaaS authentication?"
                      a="For most SaaS products being built in 2026, Clerk is the better starting choice: it has native Next.js App Router integration, a first-class Organizations feature for multi-tenant management, and significantly lower pricing at early stage ($0 to 10,000 MAU vs Auth0's $240/month for equivalent enterprise features). Switch to Auth0 if you have specific compliance requirements (FedRAMP, certain HIPAA scenarios), need complex enterprise SAML integration with legacy IdPs, or your team has existing Auth0 expertise. The migration path between the two is manageable at early stage but painful post-scale."
                    />
                    <FAQItem
                      q="How does Stripe handle usage-based billing for SaaS?"
                      a="Stripe's metered billing works by creating a subscription with a usage_type: 'metered' price. After each billable event in your application (an API call, an AI generation, a document processed), you submit a usage record to Stripe via the API with the customer's subscription item ID and the quantity consumed. At the end of the billing period, Stripe aggregates all usage records and generates an invoice for the total. For real-time usage, use Stripe's sum aggregation mode. For maximum-seat licensing, use max aggregation. You can also add usage-based prices on top of a flat base subscription — this is the hybrid pricing model that is winning the most ARR in 2026."
                    />
                    <FAQItem
                      q="How long does it actually take to build a SaaS MVP?"
                      a="With a professional development agency, a proper SaaS MVP — multi-tenancy, authentication, Stripe billing, core features, and a polished UI — takes 8 to 14 weeks. With an in-house team hired specifically for the project, add 4-8 weeks for hiring and onboarding. Founders who tell you they built a 'real SaaS' in 2 weeks built a single-tenant app with no billing, no RBAC, and no production hardening — not a scalable product. No-code tools can produce a demo faster, but they hit a wall at scale, compliance requirements, and investor due diligence. Budget 10-12 weeks for a quality MVP."
                    />
                    <FAQItem
                      q="What is the best go-to-market strategy for a B2B SaaS with no audience?"
                      a="Start with direct outbound sales — not ads. Identify 200 companies that are your perfect ICP, find the decision-maker on LinkedIn, and send a hyper-personalized cold email or LinkedIn message referencing a specific pain point they have publicly discussed. Your goal is 20 discovery calls. From those 20 calls, you should get 3-5 pilot customers who pay even a discounted rate in exchange for shaping the product. These first customers are your case studies, your testimonials, and your validation. Once you have 3 paying customers and understand exactly why they bought, then invest in content, paid acquisition, and PLG. Building distribution before product-market fit is how founders burn runway."
                    />
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
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '7px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8,
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
                          <span style={{ flexShrink: 0, fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* CTA card */}
                  <div style={{
                    background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>Ready to Build Your SaaS?</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 16px' }}>
                      Codazz has shipped 500+ products. Book a free 30-minute call and we will tell you if your idea is viable.
                    </p>
                    <Link href="/contact" style={{ textDecoration: 'none', display: 'block' }}>
                      <button style={{
                        width: '100%', padding: '12px 20px', borderRadius: 100, background: '#22c55e', color: '#000',
                        fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer',
                      }}>
                        Book a Call →
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
                        background: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.05) 100%)',
                        border: '1px solid rgba(34,197,94,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided 500+ product launches globally across SaaS, fintech, healthcare, and enterprise software.
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

        {/* ── BOTTOM CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: 'clamp(40px, 6vw, 64px) clamp(32px, 5vw, 56px)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#22c55e', marginBottom: 12,
                }}>Start Building</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Your SaaS idea deserves<br />a serious engineering team.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz builds production-grade SaaS platforms — with the multi-tenancy, Stripe billing, Auth0/Clerk, and AI architecture this guide covers — for founders and companies across North America and globally.
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
                { title: 'Custom CRM Development Guide 2026', href: '/blog/custom-crm-development-guide' },
                { title: 'Enterprise Software Development Guide 2026', href: '/blog/enterprise-software-development-guide' },
                { title: 'MVP Development Guide 2026', href: '/blog/mvp-development-guide' },
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
