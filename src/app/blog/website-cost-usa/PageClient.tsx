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
  { id: 'cost-tiers', label: 'Website Cost Tiers', emoji: '💰' },
  { id: 'cost-by-type', label: 'Cost by Website Type', emoji: '📊' },
  { id: 'platform-comparison', label: 'Platform Comparison', emoji: '⚙️' },
  { id: 'what-affects-price', label: 'What Affects the Price', emoji: '📈' },
  { id: 'diy-vs-agency', label: 'Agency vs Freelancer vs DIY', emoji: '⚖️' },
  { id: 'hourly-rates', label: 'American Developer Rates', emoji: '🇺🇸' },
  { id: 'why-nextjs', label: 'Why We Use Next.js', emoji: '⚡' },
  { id: 'hidden-costs', label: 'Hidden Costs', emoji: '🔍' },
  { id: 'how-to-budget', label: 'How to Budget', emoji: '📋' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026)', category: 'Business', readTime: '9 min' },
  { slug: 'top-seo-companies-usa', title: 'Top 10 SEO Companies in the USA (2026)', category: 'Digital Marketing', readTime: '9 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
];

/* ── Reusable style constants ── */
const cardBg = 'rgba(255,255,255,0.015)';
const cardBorder = '1px solid rgba(255,255,255,0.06)';
const sectionHeading: React.CSSProperties = {
  fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
  letterSpacing: '-0.03em', marginBottom: 24,
};
const bodyText: React.CSSProperties = {
  fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20,
};

/* ── Pro Tip Box component ── */
function ProTip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
      border: '1px solid rgba(34,197,94,0.25)',
      borderLeft: '4px solid #22c55e',
      borderRadius: 14, padding: '20px 24px', marginBottom: 24,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
        </svg>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pro Tip</span>
      </div>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>{children}</p>
    </div>
  );
}

/* ── Comparison Table component ── */
function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 28, borderRadius: 16, border: cardBorder }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: '14px 18px', textAlign: 'left', fontSize: 13, fontWeight: 700,
                color: '#22c55e', background: 'rgba(34,197,94,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                letterSpacing: '0.04em', textTransform: 'uppercase',
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
                  background: ri % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'rgba(255,255,255,0.008)',
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
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

export default function WebsiteCostUSAClient() {
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
              src="/blog_images/website-cost-usa.jpg"
              alt="Website development cost in USA"
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
              How Much Does a Custom Website Cost in the USA? (2026 Pricing Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Website costs in the USA range from $500 to $500,000+. This comprehensive guide breaks down exactly what you should expect to pay in 2026, what drives the price, and how to get the best value for your investment.
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
                    borderRadius: 20, padding: '32px 32px 28px', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -30, right: -30, width: 150, height: 150, background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(25px)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                        </svg>
                      </div>
                      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>Key Takeaways</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', zIndex: 1 }}>
                      {[
                        'A basic template website costs $2,000-$10,000, while a custom business site runs $10,000-$50,000. Enterprise web apps can exceed $500,000.',
                        'Your biggest cost driver is complexity, not page count. Integrations, custom functionality, and e-commerce features multiply the price faster than anything else.',
                        'WordPress is cheaper upfront but costs more long-term. Custom Next.js sites deliver 2-3x better performance and lower maintenance costs over 3 years.',
                        'Budget 15-20% of your build cost annually for maintenance, hosting, security, and content updates. Skipping this is the #1 mistake businesses make.',
                        'An agency with transparent pricing (like Codazz) will save you 30-50% vs. big-city agencies charging $150+/hour with the same deliverables.',
                      ].map((point, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" style={{ marginTop: 3, flexShrink: 0 }}>
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: 0 }}>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    &quot;How much does a website cost?&quot; is the single most common question we hear from American businesses. And the honest answer is frustrating: <strong style={{ color: '#ffffff' }}>it depends</strong>. A simple brochure site on WordPress might cost $2,000, while a complex enterprise web application can run well over $500,000.
                  </p>
                  <p style={{ ...bodyText }}>
                    The massive price range exists because &quot;a website&quot; in 2026 can mean anything from a five-page marketing site to a real-time SaaS platform serving millions of users. The technology, design complexity, integrations, and ongoing maintenance requirements all play a role in determining the final cost.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide gives you real numbers based on our experience building over 300 web projects for American clients. No vague ranges, no sales pitches. Just transparent pricing data so you can budget with confidence.
                  </p>
                </div>

                {/* ── COST TIERS ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={sectionHeading}>Website Cost Tiers in the USA (2026)</h2>

                  {/* Tier 1: Template/WordPress */}
                  <div style={{
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>Template / WordPress Site</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#34d399',
                        background: 'rgba(52,211,153,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$2,000 - $10,000</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Pre-built themes customized to your brand. Ideal for small businesses, freelancers, and local service providers who need a professional online presence without custom functionality. Typically includes 5-15 pages, contact forms, basic SEO setup, and mobile responsiveness. Timeline: 2-4 weeks.
                    </p>
                  </div>

                  {/* Tier 2: Custom Business */}
                  <div style={{
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>Custom Business Website</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#60a5fa',
                        background: 'rgba(96,165,250,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$10,000 - $50,000</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Fully custom design and development with unique UI, animations, CMS integration, and advanced SEO architecture. Built with modern frameworks like Next.js or Nuxt for superior performance. Includes 10-50 pages, blog functionality, analytics integration, and custom forms. Timeline: 4-10 weeks.
                    </p>
                  </div>

                  {/* Tier 3: E-Commerce */}
                  <div style={{
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>E-Commerce Platform</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#fb923c',
                        background: 'rgba(251,146,60,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$25,000 - $100,000</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Full online store with product catalog, shopping cart, payment processing (Stripe, Square, or custom gateway), inventory management, shipping integrations, and customer accounts. May include Shopify headless, WooCommerce, or fully custom solutions. Timeline: 8-16 weeks.
                    </p>
                  </div>

                  {/* Tier 4: Enterprise */}
                  <div style={{
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>Enterprise Web Application</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#f472b6',
                        background: 'rgba(244,114,182,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$100,000 - $500,000+</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Complex, custom-built web applications with user authentication, role-based access, real-time data dashboards, third-party API integrations, and scalable cloud infrastructure. Includes comprehensive testing, security audits, and DevOps setup. Timeline: 4-12 months.
                    </p>
                  </div>

                  {/* Tier 5: SaaS */}
                  <div style={{
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 28,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>SaaS Platform</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#a78bfa',
                        background: 'rgba(167,139,250,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$50,000 - $300,000+</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Subscription-based software products with multi-tenant architecture, billing integration (Stripe Billing), onboarding flows, admin dashboards, and analytics. Requires ongoing development, infrastructure scaling, and feature iteration. Timeline: 3-12 months for MVP.
                    </p>
                  </div>

                  <div style={{ marginTop: 24 }}>
                    <ProTip>
                      Start with an MVP (Minimum Viable Product) instead of building everything at once. Launch with core features, gather real user feedback, then iterate. This approach can cut your initial investment by 40-60% and ensures you only build features people actually use.
                    </ProTip>
                  </div>
                </div>

                {/* ── COST BY WEBSITE TYPE TABLE ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-by-type">
                  <h2 style={sectionHeading}>Website Cost by Type (At a Glance)</h2>
                  <p style={bodyText}>
                    Here is a side-by-side comparison of pricing across different website types. Use this table to quickly benchmark where your project falls.
                  </p>
                  <ComparisonTable
                    headers={['Website Type', 'Key Features', 'Timeline', 'Cost Range']}
                    rows={[
                      ['Landing Page', '1-5 pages, form, analytics, responsive design', '1-2 weeks', '$1,500 - $5,000'],
                      ['Business Website', '10-30 pages, CMS, blog, SEO, custom design', '4-8 weeks', '$10,000 - $50,000'],
                      ['E-Commerce Store', 'Product catalog, cart, payments, inventory, shipping', '8-16 weeks', '$25,000 - $100,000'],
                      ['Web Application', 'User auth, dashboards, APIs, real-time data', '3-9 months', '$50,000 - $300,000'],
                      ['Enterprise Portal', 'Multi-role access, integrations, compliance, scalability', '6-12 months', '$100,000 - $500,000+'],
                    ]}
                  />
                  <ProTip>
                    If you need a website fast, start with a landing page ($1,500-$5,000) to validate your market, then invest in a full business site once you have traction. Many of our most successful clients started this way.
                  </ProTip>
                </div>

                {/* ── PLATFORM COMPARISON TABLE ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="platform-comparison">
                  <h2 style={sectionHeading}>Platform Comparison: WordPress vs Custom vs Shopify vs Wix</h2>
                  <p style={bodyText}>
                    Choosing the right platform is one of the most consequential decisions you will make. The wrong choice can cost you tens of thousands in migration fees later. Here is how the major options stack up:
                  </p>
                  <ComparisonTable
                    headers={['Platform', 'Pros', 'Cons', 'Cost Range', 'Best For']}
                    rows={[
                      [
                        'WordPress',
                        'Huge plugin ecosystem, easy content editing, large developer pool',
                        'Slow performance, security vulnerabilities, plugin conflicts, technical debt',
                        '$3,000 - $50,000',
                        'Content-heavy blogs, simple business sites',
                      ],
                      [
                        'Custom (Next.js)',
                        'Blazing speed, perfect SEO, full control, scales infinitely, no plugin bloat',
                        'Higher upfront cost, requires skilled developers',
                        '$15,000 - $500,000+',
                        'High-growth businesses, SaaS, competitive markets',
                      ],
                      [
                        'Shopify',
                        'Easy store setup, built-in payments, app marketplace, reliable hosting',
                        'Monthly fees add up, limited customization, transaction fees on non-Shopify payments',
                        '$5,000 - $80,000',
                        'Product-focused e-commerce (under 10K SKUs)',
                      ],
                      [
                        'Wix / Squarespace',
                        'Cheapest option, drag-and-drop, quick to launch, no coding needed',
                        'Poor SEO ceiling, slow, cannot scale, limited integrations, vendor lock-in',
                        '$0 - $3,000',
                        'Personal sites, hobby projects, MVPs with zero budget',
                      ],
                    ]}
                  />

                  {/* Quick visual verdict */}
                  <div style={{
                    background: cardBg, border: cardBorder, borderRadius: 16, padding: '24px 28px', marginBottom: 24,
                  }}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 12px' }}>The Bottom Line on Platforms</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                      If your website is a <strong style={{ color: '#ffffff' }}>cost center</strong> (basic brochure, personal blog), use WordPress or Wix. If your website is a <strong style={{ color: '#ffffff' }}>revenue driver</strong> (lead generation, e-commerce, SaaS), invest in custom development. The ROI difference over 3 years is massive: our custom Next.js clients report 2-5x more organic traffic than their WordPress predecessors.
                    </p>
                  </div>

                  <ProTip>
                    Ask your agency: &quot;What happens to my site if I want to switch providers in 2 years?&quot; If the answer involves rebuilding from scratch, you are locked in. Custom code on standard frameworks (React, Next.js) is portable. Proprietary page builders are not.
                  </ProTip>
                </div>

                {/* ── WHAT AFFECTS THE PRICE ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="what-affects-price">
                  <h2 style={sectionHeading}>What Affects the Price?</h2>
                  <p style={bodyText}>
                    Understanding what drives website costs helps you make informed decisions about where to invest and where to save. Here are the primary cost factors for American web projects in 2026:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 12, marginBottom: 24 }}>
                    {[
                      { factor: 'Number of Pages', detail: 'Each unique page requires design, development, and content. But 50 simple pages cost less than 10 complex ones.' },
                      { factor: 'Custom Design', detail: 'Bespoke UI/UX vs. template customization dramatically shifts cost. Expect a 3-5x premium for original design.' },
                      { factor: 'CMS Integration', detail: 'WordPress, Sanity, Contentful, or custom CMS. Headless CMS setups cost more upfront but deliver better performance.' },
                      { factor: 'E-Commerce Features', detail: 'Product catalogs, carts, payment gateways, and inventory systems. Each integration adds $5,000-$20,000.' },
                      { factor: 'Third-Party Integrations', detail: 'CRMs, ERPs, payment processors, shipping APIs, and analytics. Complex API work is where budgets balloon.' },
                      { factor: 'SEO Architecture', detail: 'Technical SEO, schema markup, sitemap generation, and metadata. Doing this right from day one saves thousands later.' },
                      { factor: 'Hosting & Infrastructure', detail: 'Vercel, AWS, or dedicated servers with CDN and SSL. Monthly costs range from $20 to $2,000+.' },
                      { factor: 'Animations & Interactivity', detail: 'Custom animations, parallax effects, and interactive elements. Can add 20-40% to the development budget.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: cardBg, border: '1px solid rgba(255,255,255,0.03)',
                        borderRadius: 12, padding: '16px 18px',
                      }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.factor}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                  <ProTip>
                    Create a prioritized feature list before getting quotes. Label each feature as &quot;Must Have,&quot; &quot;Nice to Have,&quot; or &quot;Future Phase.&quot; This helps agencies give you accurate estimates and prevents scope creep from inflating your budget by 50%+.
                  </ProTip>
                </div>

                {/* ── AGENCY vs FREELANCER vs DIY ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="diy-vs-agency">
                  <h2 style={sectionHeading}>Agency vs Freelancer vs DIY: Which Is Right for You?</h2>
                  <p style={bodyText}>
                    How you build your website matters just as much as what you build. Each approach has trade-offs that directly impact cost, quality, and timeline.
                  </p>

                  <ComparisonTable
                    headers={['Factor', 'DIY (Wix/Squarespace)', 'Freelancer', 'Agency (WordPress)', 'Custom Dev Agency']}
                    rows={[
                      ['Cost Range', '$0 - $500/yr', '$2,000 - $15,000', '$5,000 - $50,000', '$15,000 - $500,000+'],
                      ['Timeline', '1-3 days', '2-6 weeks', '4-10 weeks', '6-24 weeks'],
                      ['Design Quality', 'Template-limited', 'Varies wildly', 'Professional', 'World-class custom'],
                      ['Performance', 'Poor (3-6s load)', 'Depends on dev', 'Average (2-4s)', 'Excellent (<1s)'],
                      ['SEO Potential', 'Low ceiling', 'Basic setup', 'Good with plugins', 'Maximum control'],
                      ['Scalability', 'None', 'Limited', 'Moderate', 'Unlimited'],
                      ['Ongoing Support', 'Self-service only', 'Hit or miss', 'Retainer-based', 'Dedicated team'],
                      ['Ownership', 'Platform lock-in', 'You own code', 'Plugin-dependent', 'Full ownership'],
                    ]}
                  />

                  <div style={{
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#34d399', margin: '0 0 10px' }}>DIY (Wix / Squarespace) -- $0 - $500/year</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Best for: Personal blogs, hobby projects, or micro-businesses with zero budget. You get a website up fast, but you sacrifice performance, SEO flexibility, and scalability. When you outgrow the platform, migrating is painful and expensive. Not recommended for businesses serious about growth.
                    </p>
                  </div>

                  <div style={{
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fbbf24', margin: '0 0 10px' }}>Freelancer -- $2,000 - $15,000</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Best for: Small projects with a clear scope and tight budget. A skilled freelancer can deliver great work, but you take on the risk of availability, communication gaps, and no backup if they disappear. Always ask for a portfolio, check references, and get a detailed contract. The &quot;cheap freelancer&quot; who ghosts you mid-project will cost you more than an agency in the end.
                    </p>
                  </div>

                  <div style={{
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#60a5fa', margin: '0 0 10px' }}>Agency (WordPress / Shopify) -- $5,000 - $50,000</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Best for: Established SMBs who need a professional site with some custom functionality. Agencies handle design, content, and basic SEO. However, most agencies use page builders and templates under the hood, which creates technical debt and performance issues over time. Good for getting online quickly; less ideal for long-term competitive advantage.
                    </p>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 28,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: '0 0 10px' }}>Custom Development Agency (Next.js / React) -- $15,000 - $500,000+</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Best for: Businesses where the website IS the product, or companies competing in high-value markets where speed, SEO, and user experience directly impact revenue. Custom development gives you complete control over performance, security, and scalability. This is what Codazz specializes in, and it is the only approach we recommend for businesses with serious growth ambitions.
                    </p>
                  </div>

                  <div style={{ marginTop: 24 }}>
                    <ProTip>
                      Beware the &quot;cheap agency&quot; trap. If an agency quotes $3,000 for a custom website, they are using a $50 template and calling it custom. Ask to see the source code of a past project. If it is WordPress with Elementor or Divi, you are paying custom prices for template work.
                    </ProTip>
                  </div>
                </div>

                {/* ── AMERICAN DEVELOPER RATES ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hourly-rates">
                  <h2 style={sectionHeading}>American Developer Hourly Rates by City (2026)</h2>
                  <p style={bodyText}>
                    Developer rates in the USA vary significantly by city due to differences in cost of living, talent supply, and local market demand. Here is what you can expect to pay for experienced full-stack developers in 2026:
                  </p>

                  <div style={{
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 28,
                  }}>
                    {[
                      { city: 'San Francisco', range: '$120 - $180/hr', color: '#f472b6' },
                      { city: 'New York', range: '$110 - $170/hr', color: '#60a5fa' },
                      { city: 'Los Angeles', range: '$100 - $160/hr', color: '#a78bfa' },
                      { city: 'Boston', range: '$100 - $155/hr', color: '#34d399' },
                      { city: 'Seattle', range: '$95 - $150/hr', color: '#fb923c' },
                      { city: 'Austin', range: '$85 - $140/hr', color: '#fbbf24' },
                      { city: 'Miami', range: '$80 - $130/hr', color: '#f472b6' },
                      { city: 'Denver', range: '$75 - $125/hr', color: '#818cf8' },
                    ].map((city, i, arr) => (
                      <div key={city.city} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '16px 0',
                        borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{
                            width: 10, height: 10, borderRadius: '50%', background: city.color,
                          }} />
                          <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff' }}>{city.city}</span>
                        </div>
                        <span style={{ fontSize: 15, fontWeight: 700, color: city.color }}>{city.range}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginTop: 16, marginBottom: 20 }}>
                    Note: These rates are for senior-level developers at established agencies. Freelancers may charge less but typically lack the project management, QA, and design resources that agencies provide.
                  </p>
                  <ProTip>
                    You do not have to hire in San Francisco to get San Francisco quality. Agencies like Codazz operate with distributed teams (Edmonton + Chandigarh) that deliver the same caliber of work at significantly lower rates. Geography is not a proxy for skill in 2026.
                  </ProTip>
                </div>

                {/* ── WHY NEXT.JS ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-nextjs">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', marginBottom: 16, position: 'relative', zIndex: 1,
                    }}>Why Codazz Uses Next.js for Every Project</h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      At Codazz, we build every website on Next.js, the React-based framework used by Netflix, Nike, Twitch, and the Washington Post. This is not a trend-chasing decision. It is a strategic one based on measurable outcomes:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', zIndex: 1 }}>
                      {[
                        'Performance: Server-side rendering and static generation deliver sub-second load times that WordPress cannot match. Our average Lighthouse score is 95+.',
                        'SEO: Built-in metadata APIs, automatic sitemap generation, and structured data support give you an unfair advantage in search rankings.',
                        'Scalability: Deploy on Vercel or AWS with automatic scaling. Your site handles 100 visitors or 100,000 without breaking a sweat.',
                        'Security: No database vulnerabilities, no plugin exploits, no WordPress login attacks. The attack surface is dramatically smaller.',
                        'Developer Experience: Our team ships faster, writes cleaner code, and delivers fewer bugs because Next.js enforces modern best practices.',
                        'Future-Proof: React is the most popular UI library in the world. Your site will never be orphaned by a dead ecosystem.',
                      ].map((point, i) => (
                        <div key={i} style={{
                          padding: '12px 16px', borderRadius: 10,
                          background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(17,24,39,0.12)',
                          display: 'flex', alignItems: 'flex-start', gap: 10,
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ marginTop: 3, flexShrink: 0 }}>
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                            <strong style={{ color: '#ffffff' }}>{point.split(':')[0]}:</strong>{point.split(':').slice(1).join(':')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── HIDDEN COSTS ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hidden-costs">
                  <h2 style={sectionHeading}>Hidden Costs Most Agencies Won&apos;t Tell You About</h2>
                  <p style={bodyText}>
                    The sticker price of your website is just the beginning. Many American businesses get burned by unexpected ongoing costs that were never discussed during the sales process. Here is what to budget for beyond the initial build:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                    {[
                      { cost: 'Domain Registration', range: '$15 - $50/year', desc: 'Your .com domain name, renewed annually. Premium domains can cost $1,000+.' },
                      { cost: 'SSL Certificate', range: '$0 - $200/year', desc: 'Free with most modern hosting, but some enterprise setups require paid certificates.' },
                      { cost: 'Hosting', range: '$20 - $500/month', desc: 'Shared hosting is cheap but slow. Vercel and AWS scale with traffic but cost more.' },
                      { cost: 'Maintenance & Updates', range: '$200 - $2,000/month', desc: 'Security patches, CMS updates, plugin compatibility fixes, and bug fixes.' },
                      { cost: 'Content Updates', range: '$500 - $3,000/month', desc: 'Blog posts, page updates, new landing pages, and seasonal content changes.' },
                      { cost: 'Security Monitoring', range: '$100 - $500/month', desc: 'Firewall management, malware scanning, and DDoS protection.' },
                      { cost: 'Email & Tools', range: '$50 - $300/month', desc: 'Google Workspace, analytics tools, heatmaps, A/B testing platforms.' },
                      { cost: 'Plugin/License Renewals', range: '$200 - $2,000/year', desc: 'WordPress plugins, stock photos, font licenses, and third-party APIs often have annual fees.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: cardBg, border: '1px solid rgba(255,255,255,0.03)',
                        borderRadius: 14, padding: '18px 22px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                        flexWrap: 'wrap',
                      }}>
                        <div style={{ flex: 1, minWidth: 200 }}>
                          <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.cost}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                        </div>
                        <span style={{
                          fontSize: 13, fontWeight: 700, color: '#fbbf24',
                          background: 'rgba(251,191,36,0.08)', padding: '4px 12px', borderRadius: 100,
                          whiteSpace: 'nowrap', flexShrink: 0,
                        }}>{item.range}</span>
                      </div>
                    ))}
                  </div>
                  <ProTip>
                    Ask for a &quot;Total Cost of Ownership&quot; estimate before signing a contract. A $5,000 WordPress site with $500/month in plugins, hosting, and security can cost more over 3 years ($23,000) than a $15,000 Next.js site with $100/month hosting ($18,600). Always think in 3-year costs.
                  </ProTip>
                </div>

                {/* ── HOW TO BUDGET ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="how-to-budget">
                  <h2 style={sectionHeading}>How to Budget for Your Website</h2>
                  <p style={bodyText}>
                    The most common budgeting mistake we see from American businesses is allocating 100% of their budget to the initial build and leaving nothing for maintenance, content, and iteration. A website is not a one-time purchase; it is a living asset that requires ongoing investment.
                  </p>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <p style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', margin: '0 0 12px' }}>Our Recommended Budgeting Rule:</p>
                    <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                      Allocate <strong style={{ color: '#ffffff' }}>15-20% of your initial project cost</strong> for annual maintenance and improvements. If your website costs $50,000 to build, budget $7,500 to $10,000 per year for hosting, security updates, content changes, performance monitoring, and iterative improvements based on analytics data.
                    </p>
                  </div>
                  <p style={bodyText}>
                    This approach ensures your website stays secure, fast, and competitive. Companies that invest in ongoing optimization typically see 30-50% better performance in search rankings compared to those who launch and forget.
                  </p>

                  {/* Quick budgeting cheat sheet */}
                  <div style={{
                    background: cardBg, border: cardBorder, borderRadius: 16, padding: '24px 28px', marginBottom: 24,
                  }}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 16px' }}>Quick Budget Cheat Sheet by Business Size</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {[
                        { label: 'Startup / Solopreneur', build: '$3,000 - $10,000', annual: '$1,200 - $3,000/yr' },
                        { label: 'Small Business (5-20 employees)', build: '$10,000 - $40,000', annual: '$3,000 - $8,000/yr' },
                        { label: 'Mid-Market (20-200 employees)', build: '$40,000 - $150,000', annual: '$8,000 - $30,000/yr' },
                        { label: 'Enterprise (200+ employees)', build: '$100,000 - $500,000+', annual: '$25,000 - $100,000/yr' },
                      ].map((tier, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                          padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.03)', flexWrap: 'wrap',
                        }}>
                          <span style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', minWidth: 200 }}>{tier.label}</span>
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Build: {tier.build}</span>
                          <span style={{ fontSize: 13, color: '#34d399', fontWeight: 600 }}>Annual: {tier.annual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    At Codazz, we offer transparent maintenance packages starting at $1,500/month that include hosting, security monitoring, monthly performance reports, content updates, and priority support. Every client gets a dedicated Slack channel with direct access to their development team.
                  </p>
                </div>

                {/* ── WHY CODAZZ ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(96,165,250,0.05) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 24, padding: '40px 36px', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                    <div style={{ position: 'absolute', bottom: -50, right: -50, width: 200, height: 200, background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

                    <h2 style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#ffffff',
                      letterSpacing: '-0.03em', marginBottom: 8, position: 'relative', zIndex: 1,
                    }}>Why American Businesses Choose Codazz</h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 28, position: 'relative', zIndex: 1, maxWidth: 640 }}>
                      We are not the cheapest option, and we are not the most expensive. We are the best value for businesses that take their web presence seriously. Here is why:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 16, position: 'relative', zIndex: 1, marginBottom: 28 }}>
                      {[
                        {
                          title: '500+ Projects Delivered',
                          desc: 'We have built websites, web apps, and SaaS platforms for businesses across 40+ industries. We have seen every edge case.',
                          icon: (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                          ),
                        },
                        {
                          title: 'Transparent Pricing',
                          desc: 'Fixed-price quotes with detailed SOWs. No surprise invoices, no hourly billing that spirals out of control. You know the cost before you sign.',
                          icon: (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                              <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                            </svg>
                          ),
                        },
                        {
                          title: 'Next.js Specialists',
                          desc: 'Every project is built on Next.js. Not WordPress with a pretty face. Real, modern, performant code that ranks and converts.',
                          icon: (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                            </svg>
                          ),
                        },
                        {
                          title: 'North American + Global Team',
                          desc: 'HQ in Edmonton, Canada with an engineering hub in Chandigarh, India. You get North American project management with competitive global rates.',
                          icon: (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                          ),
                        },
                        {
                          title: 'Dedicated Slack Channel',
                          desc: 'Every client gets direct access to their dev team. No ticketing systems, no 48-hour response times. Real-time communication.',
                          icon: (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                          ),
                        },
                        {
                          title: 'Post-Launch Support',
                          desc: 'We do not disappear after launch. Ongoing maintenance, performance monitoring, and iterative improvements are core to how we work.',
                          icon: (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                          ),
                        },
                      ].map((item, i) => (
                        <div key={i} style={{
                          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                          borderRadius: 16, padding: '22px 20px',
                        }}>
                          <div style={{ marginBottom: 12 }}>{item.icon}</div>
                          <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      borderRadius: 14, padding: '20px 24px', position: 'relative', zIndex: 1,
                    }}>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                        <strong style={{ color: '#ffffff' }}>&quot;We switched from a $40,000 WordPress site to Codazz. Our new Next.js site cost $28,000, loads 4x faster, and generates 3x more leads.&quot;</strong>
                        <br />
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>-- Director of Marketing, B2B SaaS Company (Austin, TX)</span>
                      </p>
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
                    background: cardBg, border: cardBorder,
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{
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
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Quick Cost Calculator CTA */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', margin: '0 0 8px' }}>Need a Quick Estimate?</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: '0 0 16px' }}>
                      Tell us about your project and get a transparent quote within 48 hours. No sales pressure.
                    </p>
                    <Link href="/contact" style={{
                      display: 'block', textAlign: 'center', textDecoration: 'none',
                      padding: '12px 20px', borderRadius: 100, background: '#22c55e', color: '#000',
                      fontSize: 13, fontWeight: 700, transition: 'all 0.2s',
                    }}>
                      Get Free Quote
                    </Link>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: cardBg, border: cardBorder,
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
                    background: cardBg, border: cardBorder,
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
                }}>Get a Free Website Quote</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Stop Guessing. Get Real Numbers.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Tell us about your project and get a transparent, detailed quote within 48 hours. No hidden fees, no surprise invoices. Just honest pricing from a team that has built 500+ web projects across the USA.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free Quote →
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
