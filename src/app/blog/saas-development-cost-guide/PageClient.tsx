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
  { id: 'intro', label: 'Introduction', emoji: '☁️' },
  { id: 'cost-tiers', label: 'SaaS Cost Tiers', emoji: '💰' },
  { id: 'infrastructure', label: 'Infrastructure Costs', emoji: '🖥️' },
  { id: 'team-composition', label: 'Team Composition', emoji: '👥' },
  { id: 'cost-breakdown', label: 'Feature Cost Breakdown', emoji: '🔧' },
  { id: 'timeline', label: 'Development Timelines', emoji: '📅' },
  { id: 'why-codazz', label: 'Why Choose Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'web-app-development-cost-2026', title: 'Web Application Development Cost 2026: From MVP to Enterprise', category: 'Web Dev', readTime: '14 min' },
  { slug: 'ai-development-cost-guide-2026', title: 'AI Development Cost 2026: Complete Pricing Guide', category: 'AI/ML', readTime: '16 min' },
  { slug: 'mobile-app-development-cost-breakdown', title: 'Mobile App Development Cost Breakdown 2026', category: 'Mobile', readTime: '14 min' },
];

export default function SaasDevelopmentCostGuideClient() {
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

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/saas-development-cost-guide.jpg"
              alt="SaaS development cost guide 2026"
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

        {/* -- ARTICLE HERO -- */}
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
                background: 'rgba(52,211,153,0.12)', color: '#34d399',
                padding: '5px 14px', borderRadius: 100,
              }}>SaaS</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
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
                15 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does It Cost to Build a SaaS Product in 2026?
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The complete cost breakdown for building a SaaS product in 2026 — from MVP ($25K-$75K) to enterprise ($200K-$500K+). Covers infrastructure costs, team composition, feature pricing, and how to launch without burning through your runway.
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
                  { label: 'Twitter', icon: '\ud835\udd4f' },
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

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }} id="intro">
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    SaaS (Software as a Service) remains the dominant software business model in 2026. Recurring revenue, global distribution, and low marginal cost per customer make SaaS incredibly attractive for founders and investors alike. But building a SaaS product from scratch is <strong style={{ color: '#ffffff' }}>a significant financial commitment</strong> — and the cost varies wildly depending on what you are building.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    A bare-bones SaaS MVP can launch for $25,000. A production-ready V1 with billing, team management, and integrations typically costs $75,000-$200,000. Enterprise SaaS platforms with compliance, multi-tenancy, and white-labeling can exceed $500,000. Beyond development, you need to budget for infrastructure, third-party services, and ongoing maintenance.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide gives you an honest breakdown of every cost involved in building a SaaS product in 2026 — so you can plan your budget, hire the right team, and launch without running out of money.
                  </p>
                </div>

                {/* SaaS Cost Tiers */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>SaaS Development Cost Tiers</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    SaaS products evolve through distinct stages, each with different cost profiles. Here is what each stage costs in 2026.
                  </p>

                  {/* MVP */}
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
                      }}>MVP</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>6 - 12 weeks</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>SaaS MVP</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>$25,000 - $75,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A focused product with 1-3 core features that solve a specific problem for a defined audience. Includes user authentication, basic dashboard, the core workflow, and a simple subscription billing integration (Stripe). No team features, limited customization, minimal admin tooling. The goal is to validate product-market fit with real paying customers before investing further. This is where 90% of successful SaaS products start.
                    </p>
                  </div>

                  {/* V1 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>V1 Product</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>3 - 6 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Production-Ready SaaS V1</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', marginBottom: 16, letterSpacing: '-0.02em' }}>$75,000 - $200,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A complete SaaS product with 8-15 features, team/organization management, role-based access control, billing with multiple plan tiers, usage tracking, email notifications, third-party integrations (5-10), API access for customers, onboarding flows, help center, and a polished UI. This is the version you can confidently sell to SMBs and grow revenue with. Includes proper testing, monitoring, and deployment infrastructure.
                    </p>
                  </div>

                  {/* Enterprise */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(52,211,153,0.12)', color: '#34d399',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Enterprise</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>6 - 18 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Enterprise SaaS Platform</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#34d399', marginBottom: 16, letterSpacing: '-0.02em' }}>$200,000 - $500,000+</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A full-scale SaaS platform with multi-tenant architecture, SSO/SAML integration, SOC 2 compliance, GDPR data handling, white-labeling, custom reporting engines, advanced analytics, audit logging, SLA monitoring, custom integrations, dedicated infrastructure options, and enterprise support tooling. Built for companies selling to large organizations with procurement processes and security requirements.
                    </p>
                  </div>
                </div>

                {/* Infrastructure Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="infrastructure">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Monthly Infrastructure Costs</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    SaaS infrastructure costs scale with your user base. Here is what to expect at each stage of growth — these are costs that never go away and must be factored into your pricing model.
                  </p>

                  <div style={{ overflowX: 'auto', marginBottom: 32 }}>
                    <table style={{
                      width: '100%', borderCollapse: 'collapse', minWidth: 600,
                    }}>
                      <thead>
                        <tr>
                          {['Service', 'Pre-Launch', '100 Users', '1,000 Users', '10,000+ Users'].map(h => (
                            <th key={h} style={{
                              padding: '14px 18px', textAlign: 'left', fontSize: 12,
                              fontWeight: 700, color: 'rgba(255,255,255,0.4)',
                              letterSpacing: '0.08em', textTransform: 'uppercase',
                              borderBottom: '1px solid rgba(255,255,255,0.08)',
                              whiteSpace: 'nowrap',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { service: 'Cloud Hosting (AWS/GCP)', pre: '$50-$100', s100: '$100-$300', s1k: '$400-$1,500', s10k: '$2,000-$8,000' },
                          { service: 'Database (RDS/PlanetScale)', pre: '$20-$50', s100: '$50-$150', s1k: '$200-$600', s10k: '$500-$2,000' },
                          { service: 'Email (SendGrid/SES)', pre: '$0-$20', s100: '$20-$50', s1k: '$50-$200', s10k: '$200-$800' },
                          { service: 'Monitoring (Datadog/Sentry)', pre: '$0-$30', s100: '$30-$100', s1k: '$100-$400', s10k: '$400-$1,500' },
                          { service: 'CDN & Storage (CloudFront/S3)', pre: '$5-$20', s100: '$20-$60', s1k: '$60-$300', s10k: '$300-$1,200' },
                          { service: 'Auth (Auth0/Clerk)', pre: '$0-$25', s100: '$25-$100', s1k: '$100-$500', s10k: '$500-$2,000' },
                          { service: 'Total Monthly', pre: '$100-$250', s100: '$250-$750', s1k: '$900-$3,500', s10k: '$4,000-$15,000+' },
                        ].map((row, i) => (
                          <tr key={i} style={{
                            background: row.service === 'Total Monthly' ? 'rgba(52,211,153,0.06)' : 'transparent',
                          }}>
                            <td style={{
                              padding: '14px 18px', fontSize: 14,
                              fontWeight: row.service === 'Total Monthly' ? 700 : 500,
                              color: row.service === 'Total Monthly' ? '#34d399' : '#ffffff',
                              borderBottom: '1px solid rgba(255,255,255,0.04)',
                              whiteSpace: 'nowrap',
                            }}>{row.service}</td>
                            {[row.pre, row.s100, row.s1k, row.s10k].map((val, j) => (
                              <td key={j} style={{
                                padding: '14px 18px', fontSize: 14,
                                color: row.service === 'Total Monthly' ? '#34d399' : 'rgba(255,255,255,0.5)',
                                fontWeight: row.service === 'Total Monthly' ? 700 : 400,
                                borderBottom: '1px solid rgba(255,255,255,0.04)',
                                whiteSpace: 'nowrap',
                              }}>{val}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.15)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Pricing tip:</strong> Your SaaS pricing must cover infrastructure costs with healthy margin. A good rule of thumb is infrastructure should be less than 15-20% of your revenue. If you charge $50/user/month, your per-user infrastructure cost should stay below $7.50-$10.00.
                    </p>
                  </div>
                </div>

                {/* Team Composition */}
                <div className="reveal" style={{ marginBottom: 56 }} id="team-composition">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>SaaS Development Team Composition & Costs</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    The team you need depends on your SaaS stage. Here is what each role costs and when you need them.
                  </p>

                  {[
                    { role: 'Full-Stack Developer', when: 'MVP onwards', rate: '$40-$150/hr', desc: 'Your primary builder. Handles both frontend and backend development. For an MVP, one senior full-stack developer is often all you need. At scale, you will want specialized frontend and backend engineers.' },
                    { role: 'UI/UX Designer', when: 'MVP onwards', rate: '$35-$120/hr', desc: 'Designs the user interface, creates the design system, and ensures a polished user experience. Part-time for MVP, full-time for V1 and beyond. A great designer reduces development costs by preventing UI rework.' },
                    { role: 'DevOps / Infrastructure', when: 'V1 onwards', rate: '$50-$160/hr', desc: 'Manages cloud infrastructure, CI/CD pipelines, monitoring, scaling, and security hardening. Not needed for MVP (developer can handle it), but essential for V1 when uptime and reliability matter.' },
                    { role: 'QA Engineer', when: 'V1 onwards', rate: '$30-$80/hr', desc: 'Writes automated tests, performs regression testing, and ensures quality across releases. Prevents costly bugs from reaching production. Worth the investment once you have paying customers.' },
                    { role: 'Product Manager', when: 'V1 onwards', rate: '$60-$150/hr', desc: 'Prioritizes features, manages the roadmap, gathers user feedback, and ensures the team builds the right things. For early-stage SaaS, the founder often fills this role.' },
                    { role: 'Security Engineer', when: 'Enterprise', rate: '$70-$200/hr', desc: 'Implements SOC 2 compliance, conducts security audits, manages vulnerability scanning, and handles penetration testing. Required when selling to enterprise customers with security questionnaires.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 20, marginBottom: 28,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ flexShrink: 0, width: 4, borderRadius: 4, background: '#34d399', opacity: 0.5 }} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.role}</h3>
                          <span style={{ fontSize: 12, color: '#34d399', fontWeight: 700 }}>{item.rate}</span>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>{item.when}</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>SaaS Feature Cost Breakdown</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Every SaaS product needs these core features. Here is what each one costs to build properly, so you can prioritize and phase your development.
                  </p>

                  {[
                    { name: 'Authentication & User Management', range: '$3,000 - $15,000', detail: 'Email/password, social login, magic links, MFA, email verification, password reset, user profiles, and session management. Using Auth0 or Clerk reduces cost to $3K-$5K. Custom auth with SSO/SAML support costs $10K-$15K.' },
                    { name: 'Subscription Billing & Payments', range: '$5,000 - $25,000', detail: 'Stripe integration, multiple plan tiers, usage-based billing, trial periods, coupon codes, invoice generation, payment failure handling, and subscription management UI. The complexity of your pricing model directly determines cost.' },
                    { name: 'Team & Organization Management', range: '$5,000 - $20,000', detail: 'Create/manage organizations, invite team members, role-based permissions, team activity logs, and organization settings. Multi-tenant architecture where each customer data is isolated adds complexity.' },
                    { name: 'Dashboard & Analytics', range: '$8,000 - $30,000', detail: 'Real-time data visualization, custom charts and graphs, filtering and date ranges, export to CSV/PDF, scheduled reports, and role-based data access. Complex analytics with custom metrics and funnel tracking push costs higher.' },
                    { name: 'API & Integrations', range: '$5,000 - $25,000', detail: 'RESTful API with documentation, API key management, rate limiting, webhook system, and 5-10 third-party integrations. A well-documented public API is essential for enterprise SaaS customers.' },
                    { name: 'Notification System', range: '$3,000 - $12,000', detail: 'Email notifications, in-app notifications, notification preferences, digest emails, and optional SMS/Slack alerts. Includes transactional email templates and delivery monitoring.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                        <span style={{ fontSize: 14, color: '#34d399', fontWeight: 700 }}>{item.range}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="reveal" style={{ marginBottom: 56 }} id="timeline">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>SaaS Development Timeline</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is a realistic timeline for each stage of SaaS development, from concept to scale.
                  </p>

                  {[
                    { phase: '01', name: 'Validation & Planning', duration: '2-4 weeks', cost: '$3,000 - $10,000', color: '#a78bfa', desc: 'Market research, competitive analysis, feature prioritization, technical architecture, database schema design, and project roadmap. Includes wireframes for core user flows. This phase saves 30-50% on development by preventing wrong turns.' },
                    { phase: '02', name: 'MVP Development', duration: '6-12 weeks', cost: '$25,000 - $75,000', color: '#34d399', desc: 'Build the core product with 1-3 key features, user auth, basic billing, and a clean UI. Ship to first beta users and start collecting feedback. Every two-week sprint ends with a working, deployable version.' },
                    { phase: '03', name: 'V1 Build-Out', duration: '8-16 weeks', cost: '$40,000 - $120,000', color: '#60a5fa', desc: 'Expand to 8-15 features, add team management, advanced billing, integrations, API access, and polish the UI/UX. Includes comprehensive testing, monitoring, and production-grade infrastructure.' },
                    { phase: '04', name: 'Enterprise Features', duration: '8-24 weeks', cost: '$50,000 - $200,000', color: '#fbbf24', desc: 'SSO/SAML, SOC 2 compliance, audit logging, white-labeling, advanced reporting, custom integrations, and enterprise support tooling. Only build this when you have enterprise customers ready to pay.' },
                    { phase: '05', name: 'Scaling & Optimization', duration: 'Ongoing', cost: '$5,000 - $20,000/mo', color: '#f472b6', desc: 'Performance optimization, infrastructure scaling, feature iteration based on user feedback, A/B testing, and continuous improvement. Includes a dedicated development team for ongoing product evolution.' },
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
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Why Choose Codazz for SaaS Development</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    We have built SaaS products from MVP to scale for founders across North America and the Middle East. Here is why startups and growing companies choose Codazz.
                  </p>

                  {[
                    { title: 'SaaS-Specific Expertise', desc: 'Multi-tenancy, subscription billing, usage metering, team management, API design — we have built these patterns dozens of times. You benefit from our experience and pre-built components, which reduces your development time and cost by 20-30%.' },
                    { title: 'Founder-Friendly Pricing', desc: 'Our hybrid model delivers SaaS development at 40-60% lower cost than US agencies. A $150K SaaS V1 at a San Francisco agency costs $60K-$90K with Codazz — same quality, same communication standards, with direct CEO involvement on every project.' },
                    { title: 'Built for Scale from Day One', desc: 'We architect SaaS products with proper multi-tenant databases, caching layers, background job processing, and monitoring from the start. You will not need an expensive rewrite at 1,000 users because the foundation was built correctly.' },
                    { title: 'Long-Term Partnership', desc: 'Most SaaS products need continuous development for years. We offer dedicated team arrangements that scale with your growth — from a single developer for your MVP to a full product team as you grow. Over 70% of our SaaS clients have worked with us for 2+ years.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>

                  {[
                    { q: 'How much does it cost to build a SaaS MVP?', a: 'A SaaS MVP costs $25,000-$75,000 in 2026. This covers core functionality, user authentication, basic billing integration, and a clean UI. The key is ruthlessly limiting scope to 1-3 features that validate your core value proposition. Trying to build too much in your MVP is the most common mistake founders make.' },
                    { q: 'What is the difference between MVP and V1 for SaaS?', a: 'An MVP ($25K-$75K) validates that people will pay for your solution. A V1 ($75K-$200K) is a complete product you can sell confidently — with team management, multiple billing plans, integrations, proper onboarding, and a polished UI. Build the MVP first, get 10-20 paying customers, then invest in V1.' },
                    { q: 'How much does SaaS infrastructure cost monthly?', a: 'Early-stage SaaS runs $100-$250/month. At 100 users, expect $250-$750/month. At 1,000 users, $900-$3,500/month. At 10,000+ users, $4,000-$15,000+/month. Your pricing model should keep infrastructure costs below 15-20% of revenue.' },
                    { q: 'Should I hire a team or use an agency for SaaS development?', a: 'For MVP and V1, an experienced agency like Codazz is typically 30-50% cheaper and 2-3x faster than building an in-house team. You avoid recruiting costs, benefits, management overhead, and the risk of hiring the wrong people. Bring development in-house only after product-market fit is proven and you need a full-time team for continuous iteration.' },
                    { q: 'How long does it take to build a SaaS product?', a: 'MVP: 6-12 weeks. V1: 3-6 months (including MVP phase). Enterprise-ready: 6-18 months total. The fastest path is shipping an MVP in 8 weeks, iterating for 4-8 weeks based on user feedback, then building V1 features in priority order. Avoid the trap of building for 12 months before launching.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>{item.q}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                    </div>
                  ))}
                </div>

              </article>

              {/* -- SIDEBAR -- */}
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
                            (e.currentTarget as HTMLAnchorElement).style.color = '#a78bfa';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(167,139,250,0.06)';
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
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(167,139,250,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(167,139,250,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#a78bfa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
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

        {/* -- BOTTOM CTA -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#a78bfa', marginBottom: 12,
                }}>Get Your Estimate</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get Your SaaS Development Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your SaaS idea with Codazz and receive a detailed cost breakdown, architecture plan, and timeline within 48 hours — completely free. No commitment required.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#a78bfa', color: '#000',
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
