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
  { id: 'intro', label: 'Introduction', emoji: '🌐' },
  { id: 'cost-by-complexity', label: 'Cost by Complexity', emoji: '💰' },
  { id: 'tech-stack-impact', label: 'Tech Stack Impact', emoji: '⚙️' },
  { id: 'cost-breakdown', label: 'Component Costs', emoji: '🔧' },
  { id: 'maintenance', label: 'Maintenance Costs', emoji: '🔄' },
  { id: 'timeline', label: 'Development Timelines', emoji: '📅' },
  { id: 'why-codazz', label: 'Why Choose Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ai-development-cost-guide-2026', title: 'AI Development Cost 2026: Complete Pricing Guide', category: 'AI/ML', readTime: '16 min' },
  { slug: 'saas-development-cost-guide', title: 'How Much Does It Cost to Build a SaaS Product in 2026?', category: 'Business', readTime: '15 min' },
  { slug: 'mobile-app-development-cost-breakdown', title: 'Mobile App Development Cost Breakdown 2026', category: 'Business', readTime: '14 min' },
];

export default function WebAppDevelopmentCostClient() {
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
              src="/blog_images/web-app-development-cost-2026.jpg"
              alt="Web application development cost in 2026"
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
                background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                padding: '5px 14px', borderRadius: 100,
              }}>Web Development</span>
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
                14 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Web Application Development Cost 2026: From MVP to Enterprise
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A complete guide to web application development costs in 2026 — from simple MVPs at $10K to complex enterprise platforms exceeding $100K. Covers tech stack impact, ongoing maintenance, and how to maximize your development budget.
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
                    Web applications power nearly every modern business. From internal dashboards and customer portals to full-blown SaaS platforms and marketplaces, the web app is the backbone of digital operations in 2026. But understanding <strong style={{ color: '#ffffff' }}>what it actually costs</strong> to build one remains one of the biggest challenges for founders, product managers, and CTOs.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The range is enormous. A basic MVP can cost as little as $10,000. A feature-rich web application with real-time functionality, complex business logic, and enterprise integrations can exceed $250,000. The difference comes down to complexity, features, design quality, tech stack choices, and the team you hire.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide breaks down every cost factor in web application development for 2026 — with honest numbers based on real projects. Whether you are building your first MVP or planning an enterprise platform overhaul, these numbers will help you budget accurately.
                  </p>
                </div>

                {/* Cost by Complexity */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-by-complexity">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Web App Cost by Complexity Level</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Every web application falls into one of four complexity tiers. Understanding where your project sits determines your budget range and timeline.
                  </p>

                  {/* Simple */}
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
                      }}>Simple</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>4 - 8 weeks</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Simple Web App / MVP</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>$10,000 - $25,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A focused web application with 3-5 core features, user authentication, a clean responsive UI, and basic CRUD operations. Think landing pages with dynamic content, simple booking systems, contact management tools, or internal dashboards. Uses a standard tech stack (Next.js/React + Node.js + PostgreSQL). Includes basic admin panel and deployment to cloud hosting.
                    </p>
                  </div>

                  {/* Medium */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Medium</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>2 - 4 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Medium-Complexity Web App</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', marginBottom: 16, letterSpacing: '-0.02em' }}>$30,000 - $75,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A feature-rich web application with 8-15 features, role-based access control, third-party integrations (payment gateways, email services, analytics), real-time notifications, file uploads, search functionality, and a polished UI with responsive design. Examples include project management tools, CRM systems, ecommerce storefronts, and customer portals. Requires proper database design, API architecture, and automated testing.
                    </p>
                  </div>

                  {/* Complex */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(52,211,153,0.12)', color: '#34d399',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Complex</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>4 - 8 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Complex Web Application</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#34d399', marginBottom: 16, letterSpacing: '-0.02em' }}>$75,000 - $150,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A sophisticated web application with 15-30+ features, real-time collaboration, complex business logic, multi-tenant architecture, advanced analytics dashboards, workflow automation, API-first design, and extensive third-party integrations. Examples include marketplace platforms, fintech dashboards, healthcare portals, and logistics management systems. Requires microservices architecture, CI/CD pipelines, and comprehensive test coverage.
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
                        background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Enterprise</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>8 - 18 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Enterprise-Grade Platform</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#fbbf24', marginBottom: 16, letterSpacing: '-0.02em' }}>$150,000 - $500,000+</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A large-scale platform with dozens of modules, enterprise SSO integration, compliance features (SOC 2, HIPAA, GDPR), high-availability architecture, disaster recovery, advanced security controls, multi-region deployment, custom reporting engines, and white-label capabilities. Built for companies handling millions of users or transactions. Requires dedicated DevOps, security auditing, and enterprise-grade SLAs.
                    </p>
                  </div>
                </div>

                {/* Tech Stack Impact */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack-impact">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>How Tech Stack Affects Web App Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Your technology choices directly impact development speed, team availability, and long-term maintenance costs. Here is how the most popular stacks compare in 2026.
                  </p>

                  <div style={{ overflowX: 'auto', marginBottom: 32 }}>
                    <table style={{
                      width: '100%', borderCollapse: 'collapse', minWidth: 650,
                    }}>
                      <thead>
                        <tr>
                          {['Tech Stack', 'Best For', 'Dev Speed', 'Avg Cost Impact', 'Talent Pool'].map(h => (
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
                          { stack: 'Next.js + Node.js', best: 'Full-stack apps, SEO', speed: 'Fast', cost: 'Baseline', pool: 'Large' },
                          { stack: 'React + Python/Django', best: 'Data-heavy apps', speed: 'Medium', cost: '+10-15%', pool: 'Large' },
                          { stack: 'Vue.js + Laravel', best: 'Rapid prototyping', speed: 'Fast', cost: '-5-10%', pool: 'Medium' },
                          { stack: 'Angular + Java/Spring', best: 'Enterprise apps', speed: 'Slow', cost: '+25-40%', pool: 'Large' },
                          { stack: 'Ruby on Rails', best: 'MVPs, startups', speed: 'Very Fast', cost: '-10-20%', pool: 'Shrinking' },
                          { stack: 'Go + React', best: 'High-performance APIs', speed: 'Medium', cost: '+15-25%', pool: 'Growing' },
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={{
                              padding: '14px 18px', fontSize: 14, fontWeight: 600,
                              color: '#ffffff',
                              borderBottom: '1px solid rgba(255,255,255,0.04)',
                              whiteSpace: 'nowrap',
                            }}>{row.stack}</td>
                            <td style={{ padding: '14px 18px', fontSize: 14, color: 'rgba(255,255,255,0.5)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.best}</td>
                            <td style={{ padding: '14px 18px', fontSize: 14, color: 'rgba(255,255,255,0.5)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.speed}</td>
                            <td style={{ padding: '14px 18px', fontSize: 14, color: '#60a5fa', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.cost}</td>
                            <td style={{ padding: '14px 18px', fontSize: 14, color: 'rgba(255,255,255,0.5)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.pool}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.15)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Our recommendation:</strong> For most web applications in 2026, Next.js + Node.js (or Python) with PostgreSQL delivers the best balance of development speed, performance, SEO, and developer availability. At Codazz, this is our primary stack — it lets us move fast without sacrificing quality.
                    </p>
                  </div>
                </div>

                {/* Component Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Web App Component Cost Breakdown</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Understanding what each component costs helps you prioritize features and make smart trade-offs during development.
                  </p>

                  {[
                    { name: 'UI/UX Design', range: '$3,000 - $25,000', detail: 'User research, wireframes, high-fidelity mockups, design system creation, responsive layouts, and interactive prototypes. Custom illustrations and animations add $3K-$8K. A polished design system that scales across 20+ screens costs $12K-$25K.' },
                    { name: 'Frontend Development', range: '$8,000 - $50,000', detail: 'Component development, state management, routing, form validation, responsive design implementation, accessibility compliance, and performance optimization. Complex real-time interfaces (dashboards, collaborative editors) push costs toward the higher end.' },
                    { name: 'Backend & API Development', range: '$10,000 - $60,000', detail: 'Database design, REST/GraphQL API development, authentication and authorization, business logic, background jobs, file processing, caching layer, and server-side validation. Microservices architecture adds 30-50% compared to monolithic.' },
                    { name: 'Third-Party Integrations', range: '$2,000 - $20,000', detail: 'Payment processing (Stripe, PayPal), email services (SendGrid, SES), SMS, analytics, CRM sync, social login, cloud storage, and any custom API connections. Each major integration costs $2K-$5K including error handling and testing.' },
                    { name: 'DevOps & Infrastructure', range: '$3,000 - $15,000', detail: 'CI/CD pipeline setup, staging/production environments, Docker containerization, monitoring and alerting, SSL, CDN configuration, auto-scaling, and database backups. Kubernetes orchestration adds $5K-$10K.' },
                    { name: 'Testing & QA', range: '$4,000 - $20,000', detail: 'Unit testing, integration testing, end-to-end testing, cross-browser testing, performance testing, security auditing, and accessibility testing. Automated test suites that run on every deploy cost more upfront but save significantly long-term.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                        <span style={{ fontSize: 14, color: '#60a5fa', fontWeight: 700 }}>{item.range}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Maintenance Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="maintenance">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Ongoing Maintenance Costs</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Your web app budget does not end at launch. Plan for these ongoing costs to keep your application secure, performant, and competitive.
                  </p>

                  {[
                    { name: 'Cloud Hosting', monthly: '$50 - $2,000+/mo', desc: 'AWS, Google Cloud, or Vercel hosting. Simple apps run $50-$200/month. High-traffic apps with database clusters, CDN, and auto-scaling run $500-$2,000+/month. Reserved instances can save 30-60% on compute costs.' },
                    { name: 'Security Updates & Patches', monthly: '$500 - $3,000/mo', desc: 'Dependency updates, security patches, vulnerability scanning, SSL certificate management, and compliance monitoring. Neglecting security updates is the single biggest risk for web applications.' },
                    { name: 'Bug Fixes & Small Features', monthly: '$1,000 - $5,000/mo', desc: 'Ongoing bug resolution, minor UI improvements, performance optimizations, and small feature additions. Most mature web apps need 20-40 hours of maintenance development per month.' },
                    { name: 'Monitoring & Analytics', monthly: '$100 - $500/mo', desc: 'Error tracking (Sentry), uptime monitoring, performance monitoring (APM), log management, and analytics tools. Essential for catching issues before users report them.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 20, marginBottom: 28,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ flexShrink: 0, width: 4, borderRadius: 4, background: '#60a5fa', opacity: 0.5 }} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                          <span style={{ fontSize: 13, color: '#60a5fa', fontWeight: 700 }}>{item.monthly}</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  <div style={{
                    padding: '20px 24px', borderRadius: 16, marginTop: 24,
                    background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Rule of thumb:</strong> Budget 15-20% of your initial development cost annually for ongoing maintenance. A $50K web app should budget $7,500-$10,000 per year for maintenance, or roughly $625-$835 per month. This keeps your app secure, performant, and up-to-date.
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="reveal" style={{ marginBottom: 56 }} id="timeline">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Development Timelines by Complexity</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is what each development phase costs and how long it takes, so you can plan your launch date and budget accurately.
                  </p>

                  {[
                    { phase: '01', name: 'Discovery & Planning', duration: '1-2 weeks', cost: '$2,000 - $8,000', color: '#a78bfa', desc: 'Requirements gathering, user story mapping, technical architecture planning, tech stack selection, and project roadmap creation. This phase ensures every dollar of development is spent building the right thing.' },
                    { phase: '02', name: 'UI/UX Design', duration: '2-4 weeks', cost: '$4,000 - $20,000', color: '#34d399', desc: 'Wireframing, high-fidelity design, interactive prototypes, design system creation, and stakeholder review cycles. We design mobile-first and iterate based on feedback before writing any code.' },
                    { phase: '03', name: 'Core Development', duration: '4-16 weeks', cost: '$15,000 - $100,000', color: '#60a5fa', desc: 'Frontend and backend development in parallel sprints. Two-week iterations with working demos, code reviews, and automated testing. Integrations and complex business logic are built incrementally.' },
                    { phase: '04', name: 'Testing & Launch', duration: '1-3 weeks', cost: '$3,000 - $12,000', color: '#fbbf24', desc: 'Comprehensive QA testing, performance optimization, security audit, deployment to production, DNS configuration, and post-launch monitoring. Includes bug fixes from user acceptance testing.' },
                    { phase: '05', name: 'Post-Launch Support', duration: 'Ongoing', cost: '$1,500 - $8,000/mo', color: '#f472b6', desc: 'Bug fixes, performance monitoring, security updates, minor feature additions, and scaling support. Most teams need 2-3 months of intensive post-launch support before transitioning to steady-state maintenance.' },
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
                  }}>Why Choose Codazz for Web App Development</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    We have built hundreds of web applications for startups, SMBs, and enterprises across North America, the Middle East, and beyond. Here is why our clients choose us.
                  </p>

                  {[
                    { title: 'Modern Tech Stack Expertise', desc: 'We specialize in Next.js, React, Node.js, Python, and cloud-native architecture. Our team stays current with the latest frameworks and best practices — you get a modern, performant web app that is easy to maintain and scale.' },
                    { title: 'Startup-Friendly Pricing', desc: 'Our hybrid model — North American project management from Edmonton, Canada with senior engineers in Chandigarh, India — delivers enterprise-quality web apps at 40-60% lower cost than fully domestic teams. Perfect for startups that need to stretch every dollar.' },
                    { title: 'Proven Delivery Process', desc: 'Two-week sprints with working demos, automated testing on every commit, and transparent progress tracking. You see exactly what is being built and can course-correct early — no surprises at launch.' },
                    { title: 'Post-Launch Partnership', desc: 'We do not disappear after launch. Our maintenance plans cover security updates, bug fixes, performance optimization, and feature additions. Over 70% of our clients continue working with us after their initial launch.' },
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
                    { q: 'How much does a web application cost to build in 2026?', a: 'A simple web app costs $10,000-$25,000. Medium-complexity apps with integrations and role-based access run $30,000-$75,000. Complex enterprise platforms cost $75,000-$500,000+. The primary cost drivers are feature count, integration complexity, design quality, and team location.' },
                    { q: 'What tech stack is most cost-effective for web apps?', a: 'Next.js with Node.js and PostgreSQL offers the best cost-to-performance ratio in 2026. It enables server-side rendering for SEO, has a massive developer talent pool, and supports both simple MVPs and complex applications. Vue.js with Laravel is also cost-effective for rapid prototyping.' },
                    { q: 'How much does web app maintenance cost per year?', a: 'Budget 15-20% of your initial development cost annually. A $50K web app needs roughly $7,500-$10,000 per year for hosting, security updates, bug fixes, and minor improvements. Neglecting maintenance leads to security vulnerabilities and technical debt that costs far more to fix later.' },
                    { q: 'Should I build an MVP first or the full product?', a: 'Always start with an MVP. An MVP at $10K-$25K validates your core value proposition with real users before you invest $50K-$100K+ in a full product. Over 60% of features built in a full product launch go unused. Ship the minimum, learn from users, then iterate.' },
                    { q: 'How long does it take to build a web application?', a: 'Simple MVPs take 4-8 weeks. Medium-complexity apps take 2-4 months. Complex enterprise platforms take 4-8 months. The biggest accelerator is clear requirements — projects with well-defined specifications launch 30-50% faster than those that discover requirements during development.' },
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
                  Get Your Web App Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your web app requirements with Codazz and receive a detailed cost breakdown, tech stack recommendation, and timeline within 48 hours — completely free.
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
