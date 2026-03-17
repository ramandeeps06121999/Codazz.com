'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

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
  { id: 'cost-tiers', label: 'Website Cost Tiers', emoji: '💰' },
  { id: 'what-affects-price', label: 'What Affects the Price', emoji: '📊' },
  { id: 'diy-vs-agency', label: 'DIY vs Agency vs Custom', emoji: '⚖️' },
  { id: 'hourly-rates', label: 'American Developer Rates', emoji: '🇨🇦' },
  { id: 'why-nextjs', label: 'Why We Use Next.js', emoji: '⚡' },
  { id: 'hidden-costs', label: 'Hidden Costs', emoji: '🔍' },
  { id: 'how-to-budget', label: 'How to Budget', emoji: '📋' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026)', category: 'Business', readTime: '9 min' },
  { slug: 'top-seo-companies-usa', title: 'Top 10 SEO Companies in the USA (2026)', category: 'Digital Marketing', readTime: '9 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
];

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
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#ffffff', minHeight: '100vh' }}>
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'How Much Does a Custom Website Cost in the USA?' },
          ]} />
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -300, left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 900,
            background: 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(79,70,229,0.12)', color: '#4F46E5',
                padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>March 14, 2026</span>
              <span style={{ color: 'rgba(0,0,0,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(0,0,0,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(0,0,0,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                9 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does a Custom Website Cost in the USA? (2026 Pricing Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Website costs in the USA range from $500 to $500,000+. This comprehensive guide breaks down exactly what you should expect to pay in 2026, what drives the price, and how to get the best value for your investment.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(0,0,0,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#4F46E5',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Raman Makkar</a></p>
                  <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '𝕏' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.08)',
                    background: 'rgba(0,0,0,0.02)', color: 'rgba(0,0,0,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)',
                  background: copied ? 'rgba(79,70,229,0.1)' : 'rgba(0,0,0,0.02)',
                  color: copied ? '#4F46E5' : 'rgba(0,0,0,0.45)',
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
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    &quot;How much does a website cost?&quot; is the single most common question we hear from American businesses. And the honest answer is frustrating: it depends. A simple brochure site on WordPress might cost $2,000, while a complex enterprise web application can run well over $500,000.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The massive price range exists because &quot;a website&quot; in 2026 can mean anything from a five-page marketing site to a real-time SaaS platform serving millions of users. The technology, design complexity, integrations, and ongoing maintenance requirements all play a role in determining the final cost.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    This guide gives you real numbers based on our experience building over 300 web projects for American clients. No vague ranges, no sales pitches. Just transparent pricing data so you can budget with confidence.
                  </p>
                </div>

                {/* Cost Tiers */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Website Cost Tiers in the USA (2026)</h2>

                  {/* Tier 1: Template/WordPress */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: 0 }}>Template / WordPress Site</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#34d399',
                        background: 'rgba(52,211,153,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$2,000 - $10,000</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Pre-built themes customized to your brand. Ideal for small businesses, freelancers, and local service providers who need a professional online presence without custom functionality. Typically includes 5-15 pages, contact forms, basic SEO setup, and mobile responsiveness. Timeline: 2-4 weeks.
                    </p>
                  </div>

                  {/* Tier 2: Custom Business */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: 0 }}>Custom Business Website</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#60a5fa',
                        background: 'rgba(96,165,250,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$10,000 - $50,000</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Fully custom design and development with unique UI, animations, CMS integration, and advanced SEO architecture. Built with modern frameworks like Next.js or Nuxt for superior performance. Includes 10-50 pages, blog functionality, analytics integration, and custom forms. Timeline: 4-10 weeks.
                    </p>
                  </div>

                  {/* Tier 3: E-Commerce */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: 0 }}>E-Commerce Platform</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#fb923c',
                        background: 'rgba(251,146,60,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$25,000 - $100,000</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Full online store with product catalog, shopping cart, payment processing (Stripe, Square, or custom gateway), inventory management, shipping integrations, and customer accounts. May include Shopify headless, WooCommerce, or fully custom solutions. Timeline: 8-16 weeks.
                    </p>
                  </div>

                  {/* Tier 4: Enterprise */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: 0 }}>Enterprise Web Application</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#f472b6',
                        background: 'rgba(244,114,182,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$100,000 - $500,000+</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Complex, custom-built web applications with user authentication, role-based access, real-time data dashboards, third-party API integrations, and scalable cloud infrastructure. Includes comprehensive testing, security audits, and DevOps setup. Timeline: 4-12 months.
                    </p>
                  </div>

                  {/* Tier 5: SaaS */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 28,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: 0 }}>SaaS Platform</h3>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#a78bfa',
                        background: 'rgba(167,139,250,0.1)', padding: '4px 14px', borderRadius: 100,
                      }}>$50,000 - $300,000+</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Subscription-based software products with multi-tenant architecture, billing integration (Stripe Billing), onboarding flows, admin dashboards, and analytics. Requires ongoing development, infrastructure scaling, and feature iteration. Timeline: 3-12 months for MVP.
                    </p>
                  </div>
                </div>

                {/* What Affects the Price */}
                <div className="reveal" style={{ marginBottom: 56 }} id="what-affects-price">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>What Affects the Price?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Understanding what drives website costs helps you make informed decisions about where to invest and where to save. Here are the primary cost factors for American web projects in 2026:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { factor: 'Number of Pages', detail: 'Each unique page requires design, development, and content.' },
                      { factor: 'Custom Design', detail: 'Bespoke UI/UX vs. template customization dramatically shifts cost.' },
                      { factor: 'CMS Integration', detail: 'WordPress, Sanity, Contentful, or custom CMS adds complexity.' },
                      { factor: 'E-Commerce Features', detail: 'Product catalogs, carts, payment gateways, and inventory systems.' },
                      { factor: 'Third-Party Integrations', detail: 'CRMs, ERPs, payment processors, shipping APIs, and analytics.' },
                      { factor: 'SEO Architecture', detail: 'Technical SEO, schema markup, sitemap generation, and metadata.' },
                      { factor: 'Hosting & Infrastructure', detail: 'Vercel, AWS, or dedicated servers with CDN and SSL.' },
                      { factor: 'Animations & Interactivity', detail: 'Custom animations, parallax effects, and interactive elements.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.03)',
                        borderRadius: 12, padding: '16px 18px',
                      }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#111827', margin: '0 0 4px' }}>{item.factor}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DIY vs Agency vs Custom */}
                <div className="reveal" style={{ marginBottom: 56 }} id="diy-vs-agency">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>DIY vs Agency vs Custom Development</h2>

                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#34d399', margin: '0 0 10px' }}>DIY (Wix / Squarespace) — $0 - $500/year</h3>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Best for: Personal blogs, hobby projects, or micro-businesses with zero budget. You get a website up fast, but you sacrifice performance, SEO flexibility, and scalability. When you outgrow the platform, migrating is painful and expensive. Not recommended for businesses serious about growth.
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#60a5fa', margin: '0 0 10px' }}>Agency (WordPress / Shopify) — $5,000 - $50,000</h3>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Best for: Established SMBs who need a professional site with some custom functionality. Agencies handle design, content, and basic SEO. However, most agencies use page builders and templates under the hood, which creates technical debt and performance issues over time. Good for getting online quickly; less ideal for long-term competitive advantage.
                    </p>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(0,0,0,0.015) 100%)',
                    border: '1px solid rgba(79,70,229,0.2)',
                    borderRadius: 20, padding: 28,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#4F46E5', margin: '0 0 10px' }}>Custom Development (Next.js / React) — $15,000 - $500,000+</h3>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0 }}>
                      Best for: Businesses where the website IS the product, or companies competing in high-value markets where speed, SEO, and user experience directly impact revenue. Custom development gives you complete control over performance, security, and scalability. This is what Codazz specializes in, and it is the only approach we recommend for businesses with serious growth ambitions.
                    </p>
                  </div>
                </div>

                {/* American Developer Rates */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hourly-rates">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>American Developer Hourly Rates by City (2026)</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Developer rates in the USA vary significantly by city due to differences in cost of living, talent supply, and local market demand. Here is what you can expect to pay for experienced full-stack developers in 2026:
                  </p>

                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 28,
                  }}>
                    {[
                      { city: 'San Francisco', range: '$120 - $180/hr', color: '#f472b6' },
                      { city: 'Los Angeles', range: '$110 - $170/hr', color: '#60a5fa' },
                      { city: 'Boston', range: '$100 - $160/hr', color: '#a78bfa' },
                      { city: 'New York', range: '$90 - $150/hr', color: '#34d399' },
                    ].map((city, i, arr) => (
                      <div key={city.city} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '16px 0',
                        borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.03)' : 'none',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{
                            width: 10, height: 10, borderRadius: '50%', background: city.color,
                          }} />
                          <span style={{ fontSize: 16, fontWeight: 600, color: '#111827' }}>{city.city}</span>
                        </div>
                        <span style={{ fontSize: 15, fontWeight: 700, color: city.color }}>{city.range}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginTop: 16 }}>
                    Note: These rates are for senior-level developers at established agencies. Freelancers may charge less but typically lack the project management, QA, and design resources that agencies provide.
                  </p>
                </div>

                {/* Why Next.js */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-nextjs">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(0,0,0,0.015) 100%)',
                    border: '1px solid rgba(79,70,229,0.2)',
                    borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                      letterSpacing: '-0.03em', marginBottom: 16, position: 'relative', zIndex: 1,
                    }}>Why Codazz Uses Next.js for Every Project</h2>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      At Codazz, we build every website on Next.js, the React-based framework used by Netflix, Nike, Twitch, and the Washington Post. This is not a trend-chasing decision. It is a strategic one based on measurable outcomes:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', zIndex: 1 }}>
                      {[
                        'Performance: Server-side rendering and static generation deliver sub-second load times that WordPress cannot match.',
                        'SEO: Built-in metadata APIs, automatic sitemap generation, and structured data support give you an unfair advantage in search rankings.',
                        'Scalability: Deploy on Vercel or AWS with automatic scaling. Your site handles 100 visitors or 100,000 without breaking a sweat.',
                        'Security: No database vulnerabilities, no plugin exploits, no WordPress login attacks. The attack surface is dramatically smaller.',
                        'Developer Experience: Our team ships faster, writes cleaner code, and delivers fewer bugs because Next.js enforces modern best practices.',
                      ].map((point, i) => (
                        <div key={i} style={{
                          padding: '12px 16px', borderRadius: 10,
                          background: 'rgba(79,70,229,0.06)', border: '1px solid rgba(79,70,229,0.12)',
                          display: 'flex', alignItems: 'flex-start', gap: 10,
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" style={{ marginTop: 3, flexShrink: 0 }}>
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                          <span style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)', lineHeight: 1.6 }}>
                            <strong style={{ color: '#4F46E5' }}>{point.split(':')[0]}:</strong>{point.split(':').slice(1).join(':')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hidden Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hidden-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Hidden Costs Most Agencies Won&apos;t Tell You About</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The sticker price of your website is just the beginning. Many American businesses get burned by unexpected ongoing costs that were never discussed during the sales process. Here is what to budget for beyond the initial build:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      { cost: 'Domain Registration', range: '$15 - $50/year', desc: 'Your .com domain name, renewed annually.' },
                      { cost: 'SSL Certificate', range: '$0 - $200/year', desc: 'Free with most modern hosting, but some enterprise setups require paid certificates.' },
                      { cost: 'Hosting', range: '$20 - $500/month', desc: 'Shared hosting is cheap but slow. Vercel and AWS scale with traffic but cost more.' },
                      { cost: 'Maintenance & Updates', range: '$200 - $2,000/month', desc: 'Security patches, CMS updates, plugin compatibility fixes, and bug fixes.' },
                      { cost: 'Content Updates', range: '$500 - $3,000/month', desc: 'Blog posts, page updates, new landing pages, and seasonal content changes.' },
                      { cost: 'Security Monitoring', range: '$100 - $500/month', desc: 'Firewall management, malware scanning, and DDoS protection.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.03)',
                        borderRadius: 14, padding: '18px 22px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                      }}>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: '0 0 4px' }}>{item.cost}</p>
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
                </div>

                {/* How to Budget */}
                <div className="reveal" style={{ marginBottom: 56 }} id="how-to-budget">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>How to Budget for Your Website</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The most common budgeting mistake we see from American businesses is allocating 100% of their budget to the initial build and leaving nothing for maintenance, content, and iteration. A website is not a one-time purchase; it is a living asset that requires ongoing investment.
                  </p>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(0,0,0,0.015) 100%)',
                    border: '1px solid rgba(79,70,229,0.15)',
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <p style={{ fontSize: 16, fontWeight: 600, color: '#4F46E5', margin: '0 0 12px' }}>Our Recommended Budgeting Rule:</p>
                    <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, margin: 0 }}>
                      Allocate <strong style={{ color: '#111827' }}>15-20% of your initial project cost</strong> for annual maintenance and improvements. If your website costs $50,000 to build, budget $7,500 to $10,000 per year for hosting, security updates, content changes, performance monitoring, and iterative improvements based on analytics data.
                    </p>
                  </div>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    This approach ensures your website stays secure, fast, and competitive. Companies that invest in ongoing optimization typically see 30-50% better performance in search rankings compared to those who launch and forget.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    At Codazz, we offer transparent maintenance packages starting at $1,500/month that include hosting, security monitoring, monthly performance reports, content updates, and priority support. Every client gets a dedicated Slack channel with direct access to their development team.
                  </p>
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
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#4F46E5';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(79,70,229,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,0,0,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#4F46E5', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#111827', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Raman Makkar</a></p>
                        <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 300+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(0,0,0,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(79,70,229,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(79,70,229,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,0,0,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#4F46E5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', margin: 0 }}>{post.readTime} read</p>
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
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#4F46E5', marginBottom: 12,
                }}>Get a Free Website Quote</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Stop Guessing. Get Real Numbers.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Tell us about your project and get a transparent, detailed quote within 48 hours. No hidden fees, no surprise invoices. Just honest pricing from a team that has built 300+ web projects across the USA.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#4F46E5', color: '#fff',
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
