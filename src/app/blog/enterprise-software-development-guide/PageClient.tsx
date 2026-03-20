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
  { id: 'intro', label: 'Introduction', emoji: '🏢' },
  { id: 'types', label: 'Types of Enterprise Software', emoji: '📦' },
  { id: 'cost-tiers', label: 'Cost by Complexity', emoji: '💰' },
  { id: 'build-vs-buy', label: 'Build vs Buy Framework', emoji: '⚖️' },
  { id: 'tech-stack', label: 'Technology Stack', emoji: '🛠️' },
  { id: 'security', label: 'Security & Compliance', emoji: '🔒' },
  { id: 'timeline', label: 'Development Timeline', emoji: '📅' },
  { id: 'why-codazz', label: 'Why Build with Codazz', emoji: '✨' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'saas-development-cost-usa', title: 'How Much Does SaaS Development Cost in the USA?', category: 'Business', readTime: '12 min' },
  { slug: 'custom-crm-development-guide', title: 'Custom CRM Development Guide 2026: Build vs Buy', category: 'Engineering', readTime: '14 min' },
  { slug: 'api-development-guide-2026', title: 'API Development Guide 2026: REST vs GraphQL vs gRPC', category: 'Engineering', readTime: '13 min' },
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
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '20px 0',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', width: '100%',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
          padding: 0,
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

export default function EnterpriseSoftwareDevelopmentGuideClient() {
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
              src="/blog_images/enterprise-software-development-guide.jpg"
              alt="Enterprise software development guide 2026"
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
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
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
              }}>Engineering</span>
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
              Enterprise Software Development Guide 2026
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive guide to building enterprise software in 2026 — from ERP and CRM systems to supply chain platforms and BI dashboards — covering types, costs, build vs buy decisions, and technology strategy.
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
                      'Enterprise software development costs range from $100K for focused departmental tools to $1M+ for full-scale ERP or supply chain platforms — the spread depends on integrations, compliance, and user scale.',
                      'The five core categories — ERP, CRM, HRM, Supply Chain, and BI/Analytics — each solve different operational problems. Most enterprises need a combination, not a single monolithic system.',
                      'Build vs buy is not binary. The optimal strategy for 80% of enterprises is a hybrid approach: buy best-in-class platforms for commodity functions and build custom software for your competitive differentiators.',
                      'Security, compliance (SOC 2, HIPAA, GDPR), and integration architecture are the hidden cost multipliers. Budget 15-25% of total development cost specifically for these non-functional requirements.',
                      'Codazz has delivered 500+ enterprise-grade products globally — combining North American project leadership with world-class engineering to deliver at 40-60% lower cost than comparable US-only agencies.',
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

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }} id="intro">
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Enterprise software is the operational backbone of every large organization. It is the system that processes payroll for 10,000 employees, the platform that routes inventory across 200 warehouses, the dashboard that gives the CFO real-time visibility into $500M in annual revenue. In 2026, the global enterprise software market is projected to exceed <strong style={{ color: '#ffffff' }}>$400 billion</strong> — and the gap between companies that invest in the right software and those that do not is widening every quarter.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But enterprise software development is fundamentally different from building a consumer app or a SaaS MVP. The stakes are higher, the requirements are more complex, the stakeholders are more demanding, and the cost of failure is measured in millions of dollars of lost productivity — not just a bad App Store review.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide covers everything you need to know about building enterprise software in 2026: the five major categories, realistic cost ranges, when to build vs buy, technology stack decisions, security requirements, and how to choose the right development partner. Whether you are a CTO evaluating a custom ERP build or a VP of Operations exploring BI platforms, this guide gives you the framework to make an informed decision.
                  </p>

                  <ProTip>
                    Before diving in, define your primary goal: are you trying to reduce operational costs, improve data visibility, automate manual workflows, or achieve regulatory compliance? The answer fundamentally changes your software requirements and budget allocation.
                  </ProTip>
                </div>

                {/* Types of Enterprise Software */}
                <div className="reveal" style={{ marginBottom: 56 }} id="types">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Types of Enterprise Software</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Enterprise software is not a single product — it is an ecosystem. Most large organizations operate five to fifteen different enterprise systems that need to communicate with each other. Here are the five core categories and what they actually do.
                  </p>

                  {[
                    {
                      title: 'ERP (Enterprise Resource Planning)',
                      cost: '$200K - $1M+',
                      color: '#22c55e',
                      desc: 'The central nervous system of enterprise operations. ERP systems unify finance, procurement, manufacturing, inventory, and project management into a single platform. Think SAP, Oracle NetSuite, or Microsoft Dynamics. Custom ERP development makes sense when off-the-shelf solutions cannot accommodate your industry-specific workflows — common in manufacturing, logistics, and government sectors.',
                      examples: 'SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365',
                    },
                    {
                      title: 'CRM (Customer Relationship Management)',
                      cost: '$50K - $300K',
                      color: '#a78bfa',
                      desc: 'Manages every interaction with customers and prospects — from first touchpoint to renewal. Sales pipeline management, contact databases, deal tracking, email automation, and customer analytics. Salesforce dominates this space, but custom CRMs are increasingly popular for companies with unique sales processes that Salesforce cannot model without expensive customization.',
                      examples: 'Salesforce, HubSpot, Zoho CRM, Pipedrive',
                    },
                    {
                      title: 'HRM (Human Resource Management)',
                      cost: '$80K - $400K',
                      color: '#60a5fa',
                      desc: 'Handles the entire employee lifecycle: recruiting, onboarding, payroll, benefits administration, performance reviews, time tracking, and compliance reporting. Custom HRM systems are most common in organizations with complex labor agreements, multi-country payroll requirements, or industry-specific compliance needs (healthcare, government, construction).',
                      examples: 'Workday, BambooHR, ADP, Gusto',
                    },
                    {
                      title: 'Supply Chain Management',
                      cost: '$150K - $800K',
                      color: '#34d399',
                      desc: 'Orchestrates the flow of goods from raw materials to customer delivery. Demand forecasting, procurement automation, warehouse management, logistics optimization, and supplier relationship management. Custom supply chain software is critical for companies with proprietary logistics models, real-time tracking requirements, or complex multi-tier supplier networks.',
                      examples: 'SAP SCM, Oracle SCM Cloud, Blue Yonder',
                    },
                    {
                      title: 'BI & Analytics Platforms',
                      cost: '$100K - $500K',
                      color: '#fbbf24',
                      desc: 'Transforms raw business data into actionable insights. Data warehousing, ETL pipelines, interactive dashboards, predictive analytics, and automated reporting. Custom BI platforms are essential when your data lives across dozens of systems and off-the-shelf tools like Tableau or Power BI cannot handle the volume, complexity, or real-time requirements.',
                      examples: 'Tableau, Power BI, Looker, Metabase',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '32px 28px', borderRadius: 20, marginBottom: 20,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: 3,
                        background: item.color, opacity: 0.6,
                      }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.title}</h3>
                        <span style={{ fontSize: 14, color: item.color, fontWeight: 700 }}>{item.cost}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 12 }}>{item.desc}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0 }}>
                        <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Popular platforms:</strong> {item.examples}
                      </p>
                    </div>
                  ))}

                  <ProTip>
                    Do not try to build a single system that does everything. The most successful enterprise architectures use best-of-breed tools connected through well-designed APIs. Build custom only where you have unique requirements that no existing platform can satisfy.
                  </ProTip>
                </div>

                {/* Cost by Complexity */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Enterprise Software Cost by Complexity</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Enterprise software costs are driven by four factors: functional complexity, number of integrations, compliance requirements, and user scale. Here is a realistic breakdown by tier.
                  </p>

                  <ComparisonTable
                    headers={['', 'Departmental Tool', 'Multi-Department Platform', 'Enterprise-Wide System']}
                    rows={[
                      ['Cost Range', '$100,000 - $250,000', '$250,000 - $600,000', '$600,000 - $1,500,000+'],
                      ['Timeline', '3 - 6 months', '6 - 12 months', '12 - 24 months'],
                      ['Team Size', '3 - 5 developers', '5 - 10 developers', '10 - 25+ developers'],
                      ['Users', '50 - 500', '500 - 5,000', '5,000 - 100,000+'],
                      ['Integrations', '2 - 5 systems', '5 - 15 systems', '15 - 50+ systems'],
                      ['Auth & Access', 'RBAC + MFA', 'SSO/SAML + RBAC + audit logs', 'Federated identity + ABAC + full audit'],
                      ['Data Architecture', 'Single database', 'Data warehouse + ETL', 'Data lake + real-time streaming'],
                      ['Compliance', 'Basic security', 'SOC 2 + industry-specific', 'SOC 2 + HIPAA/GDPR + custom audit'],
                      ['Deployment', 'Cloud single-region', 'Cloud multi-region', 'Hybrid cloud + on-premise option'],
                      ['Best For', 'Solving one department pain point', 'Cross-functional workflow automation', 'Organization-wide digital transformation'],
                    ]}
                  />

                  {/* Tier cards */}
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
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>3 - 6 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Departmental Tool</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>$100,000 - $250,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A focused solution for a single department or business function. Examples include a custom inventory management system for your warehouse team, a compliance tracking tool for your legal department, or a project management platform tailored to your agency&apos;s workflow. These tools typically integrate with 2-5 existing systems and serve 50-500 users. The ROI is fastest here because you are solving a specific, measurable pain point.
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
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>6 - 12 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Multi-Department Platform</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', marginBottom: 16, letterSpacing: '-0.02em' }}>$250,000 - $600,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A platform that spans multiple departments and automates cross-functional workflows. Think of a custom CRM that connects sales, marketing, and customer success, or a supply chain platform that unifies procurement, logistics, and finance. These systems require sophisticated role-based access, workflow engines, reporting dashboards, and 5-15 third-party integrations. Most mid-market enterprise software projects fall into this tier.
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
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>12 - 24 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Enterprise-Wide System</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#34d399', marginBottom: 16, letterSpacing: '-0.02em' }}>$600,000 - $1,500,000+</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A comprehensive platform that serves the entire organization. Custom ERP systems, enterprise data platforms, or digital transformation initiatives that replace multiple legacy systems. These projects involve 10-25+ developers, 15-50+ integrations, multi-region deployment, stringent compliance requirements, and extensive change management. The total cost of ownership — including training, migration, and ongoing maintenance — can reach 2-3x the initial development investment.
                    </p>
                  </div>

                  <ProTip>
                    Start with a Tier 1 project that delivers measurable ROI within 6 months. Use that success to build organizational buy-in for larger initiatives. We have seen too many enterprises attempt a Tier 3 project first and fail due to scope creep and stakeholder fatigue.
                  </ProTip>
                </div>

                {/* Build vs Buy Framework */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Build vs Buy Decision Framework</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The build vs buy decision is the single most consequential choice in enterprise software strategy. Get it wrong and you waste millions — either on a custom system you did not need, or on a platform that cannot accommodate your requirements. Here is the framework we use with every enterprise client.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    The answer is almost never 100% build or 100% buy. The optimal strategy for most enterprises is <strong style={{ color: '#ffffff' }}>hybrid</strong>: buy best-in-class platforms for commodity functions and build custom software where you have unique workflows that represent a competitive advantage.
                  </p>

                  <ComparisonTable
                    headers={['Factor', 'Build Custom', 'Buy (COTS/SaaS)', 'Hybrid Approach']}
                    highlightCol={3}
                    rows={[
                      ['Upfront Cost', '$100K - $1M+', '$10K - $200K/year licensing', 'Variable — optimized per function'],
                      ['Time to Deploy', '3 - 24 months', '1 - 3 months', '2 - 9 months'],
                      ['Customization', 'Unlimited', 'Limited to platform capabilities', 'Custom where it matters most'],
                      ['Integration', 'Built to your exact specs', 'Pre-built connectors (may be limited)', 'API-first architecture connects everything'],
                      ['Maintenance', 'Your responsibility ($3K-$20K/mo)', 'Vendor handles updates', 'Shared — vendor + your team'],
                      ['Compliance Control', 'Full control over data and audit', 'Depends on vendor certifications', 'Full control for sensitive data'],
                      ['Vendor Lock-in', 'None — you own the code', 'High — migration is painful', 'Reduced — core systems are yours'],
                      ['Best When', 'Unique workflows, competitive advantage', 'Standard processes, fast deployment', '80% of enterprise scenarios'],
                    ]}
                  />

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 16, marginTop: 32 }}>When to Build Custom</h3>
                  <div style={{ marginBottom: 24 }}>
                    {[
                      'Your core business process is fundamentally different from industry standard workflows',
                      'Off-the-shelf solutions require so much customization that costs approach custom development',
                      'Data sovereignty, compliance, or security requirements cannot be met by third-party vendors',
                      'You need real-time integrations with proprietary systems that no platform supports',
                      'The software represents a competitive advantage — not just an operational necessity',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                        <div style={{
                          flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.15)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', marginTop: 3,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>When to Buy Off-the-Shelf</h3>
                  <div style={{ marginBottom: 24 }}>
                    {[
                      'Your process follows industry-standard workflows (accounting, basic CRM, email marketing)',
                      'Speed to deployment matters more than perfect customization',
                      'The vendor has deep domain expertise and a proven track record in your industry',
                      'Your team lacks the engineering capacity to maintain custom software long-term',
                      'The total cost of ownership (including maintenance) for custom exceeds 3x the licensing cost',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                        <div style={{
                          flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                          background: 'rgba(167,139,250,0.15)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', marginTop: 3,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  <ProTip>
                    A useful rule of thumb: if you can describe your requirement in a single sentence and it sounds like a feature in an existing product, buy it. If explaining your requirement takes a whiteboard session and phrases like &quot;but in our case, it works differently because...&quot; — that is a custom build candidate.
                  </ProTip>
                </div>

                {/* Technology Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Enterprise Technology Stack in 2026</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    The enterprise tech stack has evolved significantly. The monolithic Java/Oracle architectures of the 2010s are giving way to modern, cloud-native approaches that deliver better performance at lower cost. Here is what we recommend for most enterprise projects in 2026.
                  </p>

                  <ComparisonTable
                    headers={['Layer', 'Recommended Stack', 'Alternative', 'When to Choose Alternative']}
                    highlightCol={1}
                    rows={[
                      ['Frontend', 'Next.js + TypeScript', 'Angular + TypeScript', 'Large teams with Angular expertise'],
                      ['Backend API', 'Node.js + NestJS', 'Java Spring Boot / .NET', 'Regulated industries requiring JVM/.NET'],
                      ['Database', 'PostgreSQL + Redis', 'SQL Server / Oracle DB', 'Legacy integration requirements'],
                      ['Search', 'Elasticsearch / OpenSearch', 'Algolia', 'Simpler search with managed service'],
                      ['Message Queue', 'Apache Kafka / RabbitMQ', 'AWS SQS/SNS', 'Simpler async with managed infra'],
                      ['Cloud', 'AWS (ECS, RDS, S3)', 'Azure / GCP', 'Microsoft ecosystem / ML-heavy workloads'],
                      ['CI/CD', 'GitHub Actions + ArgoCD', 'Azure DevOps / Jenkins', 'Existing enterprise tool commitments'],
                      ['Monitoring', 'Datadog / Grafana Stack', 'New Relic / Dynatrace', 'Existing APM contracts'],
                    ]}
                  />

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 20 }}>Architecture Principles for Enterprise Software</h3>
                    {[
                      { principle: 'API-First Design', detail: 'Every module exposes a versioned API. This enables future integrations, mobile apps, and partner ecosystems without rewriting core logic.' },
                      { principle: 'Event-Driven Architecture', detail: 'Use message queues for cross-service communication. Decouples components, improves fault tolerance, and enables real-time data processing.' },
                      { principle: 'Infrastructure as Code', detail: 'Terraform + Kubernetes for reproducible deployments. Eliminates environment drift and enables disaster recovery in minutes, not days.' },
                      { principle: 'Zero-Trust Security', detail: 'Every request is authenticated and authorized, regardless of network location. Essential for hybrid cloud and remote workforce scenarios.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 16, marginBottom: i < 3 ? 20 : 0,
                        paddingBottom: i < 3 ? 20 : 0,
                        borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                      }}>
                        <div style={{ flexShrink: 0, width: 4, borderRadius: 4, background: '#22c55e', opacity: 0.5 }} />
                        <div>
                          <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.principle}</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security & Compliance */}
                <div className="reveal" style={{ marginBottom: 56 }} id="security">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Security & Compliance Requirements</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Enterprise software without robust security is a liability, not an asset. In 2026, the average cost of a data breach in the United States is <strong style={{ color: '#ffffff' }}>$4.88 million</strong>. For regulated industries, the cost includes fines, legal fees, and reputational damage that can exceed the breach itself by 3-5x. Here are the compliance frameworks you need to plan for.
                  </p>

                  <ComparisonTable
                    headers={['Framework', 'Who Needs It', 'Cost to Implement', 'Timeline']}
                    rows={[
                      ['SOC 2 Type II', 'Any B2B SaaS / enterprise vendor', '$50K - $150K', '6 - 12 months'],
                      ['HIPAA', 'Healthcare, health data processors', '$75K - $200K', '6 - 12 months'],
                      ['GDPR', 'Any company with EU users/data', '$30K - $100K', '3 - 6 months'],
                      ['PCI DSS', 'Payment processing, financial services', '$50K - $200K', '4 - 8 months'],
                      ['FedRAMP', 'US government contractors', '$200K - $500K+', '12 - 18 months'],
                      ['ISO 27001', 'Global enterprises, defense contractors', '$80K - $250K', '6 - 12 months'],
                    ]}
                  />

                  <ProTip>
                    Build security into your architecture from day one — retrofitting compliance is 3-5x more expensive than building it in from the start. At minimum, every enterprise project should include encryption at rest and in transit, role-based access control, comprehensive audit logging, and automated vulnerability scanning.
                  </ProTip>
                </div>

                {/* Development Timeline */}
                <div className="reveal" style={{ marginBottom: 56 }} id="timeline">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Enterprise Development Timeline</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Enterprise software projects follow a structured lifecycle that balances speed with the rigor required for mission-critical systems. Here is our proven 6-phase process.
                  </p>

                  {[
                    { phase: '01', name: 'Discovery & Requirements', duration: '2 - 4 weeks', cost: '$8,000 - $25,000', color: '#ffffff', desc: 'Stakeholder interviews, process mapping, requirements documentation, and feasibility analysis. We identify integration points, compliance requirements, and technical constraints. Deliverable: a comprehensive PRD (Product Requirements Document) with prioritized user stories and a detailed cost estimate.' },
                    { phase: '02', name: 'Architecture & Design', duration: '3 - 6 weeks', cost: '$15,000 - $40,000', color: '#a78bfa', desc: 'System architecture design, database schema modeling, API contract definition, infrastructure planning, and security architecture. We create detailed wireframes, data flow diagrams, and integration specifications. This phase prevents costly architectural changes during development.' },
                    { phase: '03', name: 'Core Development', duration: '8 - 24 weeks', cost: '$60,000 - $400,000', color: '#34d399', desc: 'Agile development in two-week sprints with demos after each cycle. We build core modules, implement business logic, develop integrations, and conduct continuous testing. Your team has full visibility through project dashboards and weekly progress reports.' },
                    { phase: '04', name: 'Integration & Testing', duration: '4 - 8 weeks', cost: '$25,000 - $80,000', color: '#60a5fa', desc: 'System integration testing, user acceptance testing (UAT), performance load testing, security penetration testing, and compliance validation. We simulate real-world usage patterns and stress-test every integration point.' },
                    { phase: '05', name: 'Deployment & Migration', duration: '2 - 6 weeks', cost: '$15,000 - $50,000', color: '#fbbf24', desc: 'Staged rollout with parallel running alongside legacy systems. Data migration, user training, documentation, and go-live support. We use blue-green deployment strategies to ensure zero downtime during cutover.' },
                    { phase: '06', name: 'Support & Optimization', duration: 'Ongoing', cost: '$5,000 - $25,000/mo', color: '#f472b6', desc: 'Post-launch monitoring, bug fixes, performance optimization, feature enhancements, and compliance updates. We provide SLA-backed support with guaranteed response times for critical issues.' },
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
                  }}>Why Build Enterprise Software with Codazz?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Enterprise software development demands a partner who understands both the technical complexity and the business stakes. Here is what sets Codazz apart from traditional enterprise consultancies and offshore development shops.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32,
                  }}>
                    {[
                      { title: '40-60% Lower Cost', desc: 'North American project leadership (Edmonton, Canada) with a world-class engineering team in Chandigarh, India. Enterprise-grade quality at a fraction of Big 4 consultancy pricing.', icon: '💰', color: '#22c55e' },
                      { title: '500+ Products Shipped', desc: 'Deep experience across ERP, CRM, supply chain, BI, and HRM systems. Every estimate is backed by real delivery data from comparable enterprise projects.', icon: '🚀', color: '#a78bfa' },
                      { title: 'Enterprise Security DNA', desc: 'SOC 2 awareness, HIPAA-compliant architectures, and zero-trust security models built into every project. We do not bolt security on at the end.', icon: '🔒', color: '#60a5fa' },
                      { title: 'Agile + Enterprise Rigor', desc: 'We combine the speed of agile sprints with the governance and documentation that enterprise stakeholders require. Weekly demos, monthly steering committees, full audit trails.', icon: '⚡', color: '#34d399' },
                      { title: 'Integration Expertise', desc: 'SAP, Salesforce, Oracle, Microsoft 365, Slack, custom APIs — we have integrated with hundreds of enterprise systems. Your new software will work seamlessly with your existing ecosystem.', icon: '🔗', color: '#fbbf24' },
                      { title: 'Post-Launch Partnership', desc: 'Enterprise software is never "done." We provide ongoing support, feature development, and technology roadmap guidance. Think of us as your fractional CTO and engineering team.', icon: '🛡️', color: '#f472b6' },
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
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: '8px 28px',
                  }}>
                    <FAQItem
                      q="How much does enterprise software development cost?"
                      a="Enterprise software development costs range from $100,000 for focused departmental tools to $1,500,000+ for enterprise-wide systems like custom ERPs. The primary cost drivers are functional complexity, number of integrations, compliance requirements, and user scale. Most mid-market projects fall in the $250K-$600K range."
                    />
                    <FAQItem
                      q="How long does it take to build enterprise software?"
                      a="Timelines range from 3-6 months for departmental tools to 12-24 months for enterprise-wide systems. Most projects follow a phased approach: Discovery (2-4 weeks), Architecture (3-6 weeks), Core Development (8-24 weeks), Testing (4-8 weeks), and Deployment (2-6 weeks). We recommend launching with a focused MVP and iterating based on user feedback."
                    />
                    <FAQItem
                      q="Should we build custom enterprise software or buy off-the-shelf?"
                      a="The answer is usually hybrid. Buy best-in-class platforms for commodity functions (accounting, email, basic CRM) and build custom for processes that represent your competitive advantage or have unique requirements that no existing platform can satisfy. If customizing an off-the-shelf solution costs more than 60% of building custom, build custom."
                    />
                    <FAQItem
                      q="What compliance certifications does enterprise software need?"
                      a="At minimum, most B2B enterprise software needs SOC 2 Type II certification. Healthcare companies need HIPAA compliance. Companies with EU users need GDPR compliance. Financial services may need PCI DSS. Government contractors need FedRAMP. Budget 15-25% of development costs for compliance implementation."
                    />
                    <FAQItem
                      q="Can you integrate with our existing SAP/Oracle/Salesforce systems?"
                      a="Yes. We have extensive experience integrating with SAP, Oracle, Salesforce, Microsoft Dynamics, Workday, and hundreds of other enterprise platforms. We use API-first design principles to ensure your new software communicates seamlessly with your existing ecosystem."
                    />
                    <FAQItem
                      q="What is the ongoing maintenance cost for enterprise software?"
                      a="Plan for 15-20% of the initial development cost annually for maintenance, which includes bug fixes, security patches, compliance updates, infrastructure costs, and minor feature enhancements. For a $500K project, that translates to $75K-$100K per year. Major feature additions are scoped and priced separately."
                    />
                  </div>
                </div>

              </article>

              {/* SIDEBAR */}
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

                  {/* Quick Reference */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 12,
                    }}>Quick Reference</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Enterprise Software Costs (2026)</p>
                    {[
                      { label: 'Departmental', range: '$100K - $250K', color: '#22c55e' },
                      { label: 'Multi-Dept', range: '$250K - $600K', color: '#a78bfa' },
                      { label: 'Enterprise-Wide', range: '$600K - $1.5M+', color: '#34d399' },
                      { label: 'Maintenance', range: '15-20% / year', color: '#fbbf24' },
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

                  {/* Author */}
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

                  {/* Related */}
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
                  color: '#ffffff', marginBottom: 12,
                }}>Start Your Enterprise Project</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build Enterprise Software?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your requirements with Codazz and receive a detailed architecture proposal, cost breakdown, and project timeline within 48 hours — completely free, no obligation.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free Consultation →
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
