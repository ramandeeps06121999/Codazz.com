'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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
  { id: 'key-takeaways', label: 'Key Takeaways', emoji: '📋' },
  { id: 'define-scope', label: 'Define Your Project Scope', emoji: '🎯' },
  { id: 'evaluation-criteria', label: 'Evaluation Criteria Checklist', emoji: '📊' },
  { id: 'development-models', label: 'Development Model Comparison', emoji: '🔄' },
  { id: 'vendor-types', label: 'Vendor Type Comparison', emoji: '🏢' },
  { id: 'onshore-vs-offshore', label: 'Onshore vs Nearshore vs Offshore', emoji: '🌍' },
  { id: 'red-flags', label: '7 Red Flags to Watch For', emoji: '🚩' },
  { id: 'green-flags', label: '7 Green Flags of a Great Partner', emoji: '✅' },
  { id: 'questions-to-ask', label: 'Questions Before Signing', emoji: '❓' },
  { id: 'codazz-checks-every-box', label: 'Why Codazz Checks Every Box', emoji: '🏆' },
  { id: 'average-costs', label: 'Average Costs by Project Type', emoji: '💰' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA?', category: 'Business', readTime: '8 min' },
  { slug: 'website-cost-usa', title: 'How Much Does a Website Cost in the USA?', category: 'Business', readTime: '7 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA', category: 'Business', readTime: '10 min' },
];

/* ── Shared table styles ── */
const tableWrapStyle: React.CSSProperties = {
  overflowX: 'auto', marginBottom: 8, borderRadius: 16,
  border: '1px solid rgba(255,255,255,0.06)',
};
const thStyle: React.CSSProperties = {
  padding: '14px 18px', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
  textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textAlign: 'left',
  borderBottom: '1px solid rgba(255,255,255,0.08)', whiteSpace: 'nowrap',
  background: 'rgba(255,255,255,0.03)',
};
const tdStyle: React.CSSProperties = {
  padding: '14px 18px', fontSize: 14, color: 'rgba(255,255,255,0.6)',
  lineHeight: 1.65, borderBottom: '1px solid rgba(255,255,255,0.04)',
  verticalAlign: 'top',
};
const tdBoldStyle: React.CSSProperties = { ...tdStyle, color: '#ffffff', fontWeight: 600 };

export default function ChooseSoftwareDevelopmentCompanyUSAClient() {
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
              src="/blog_images/choose-software-development-company-usa.jpg"
              alt="How to choose a software development company in USA"
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
              How to Choose a Software Development Company in the USA (2026 Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A practical, no-nonsense guide to finding the right American software development partner — complete with comparison tables, red-flag checklists, and the evaluation criteria that actually matter in 2026.
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
                  { label: 'Twitter', icon: '\u{1D54F}' },
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

                {/* ════════════════════════════════════════════════════════════
                    KEY TAKEAWAYS BOX
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="key-takeaways">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(59,130,246,0.06) 100%)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: 20, padding: 'clamp(24px, 4vw, 36px)', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(25px)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
                      }}>📋</div>
                      <p style={{
                        fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: '#22c55e', margin: 0,
                      }}>Key Takeaways</p>
                    </div>
                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {[
                        'Define your project scope, budget, and timeline internally before contacting any agency — vague briefs are the top cause of project failure.',
                        'Evaluate vendors across five pillars: technical expertise, portfolio depth, communication processes, pricing transparency, and verified client reviews.',
                        'Choose your development model wisely — fixed-price works for defined scopes, while time-and-material suits evolving projects. Each carries different risk profiles.',
                        'Watch for red flags like hidden offshore outsourcing, hourly-only billing with no ceiling, and agencies that refuse to share client references.',
                        'The cheapest quote almost never delivers the best ROI — invest in an American partner with in-house teams, post-launch support, and a proven track record.',
                      ].map((item, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'flex-start', gap: 12,
                          padding: '12px 16px', borderRadius: 12,
                          background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <span style={{
                            color: '#22c55e', fontWeight: 800, fontSize: 13, marginTop: 1,
                            flexShrink: 0, width: 20, textAlign: 'center',
                          }}>{i + 1}</span>
                          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{item}</span>
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
                    Choosing the wrong software development partner is one of the most expensive mistakes an American business can make. According to industry data, failed software projects cost American companies an average of <strong style={{ color: '#ffffff' }}>$500,000+</strong> in wasted budget, missed market windows, and opportunity cost — and that number climbs significantly for enterprise-scale initiatives.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The problem is rarely the technology itself. It is almost always the partner. Misaligned expectations, hidden offshore outsourcing, scope creep with no guardrails, and agencies that vanish after launch day — these are the patterns that destroy projects and drain budgets.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide will give you a clear, actionable framework for evaluating software development companies in the USA — complete with comparison tables, red-flag checklists, and the criteria that actually matter in 2026. No fluff. No generic advice. Just what works.
                  </p>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 1: Define Your Project Scope
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="define-scope">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(17,24,39,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>🎯</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>1. Define Your Project Scope Before You Start Looking</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    Before you contact a single agency, you need internal clarity. The biggest source of project failure is not bad developers — it is undefined requirements. Companies that approach agencies with vague briefs like "we need an app" or "rebuild our platform" are setting themselves up for scope creep, budget overruns, and a product that satisfies nobody.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    At minimum, you should be able to answer these questions before reaching out:
                  </p>
                  {[
                    'What specific business problem does this software solve?',
                    'Who are the primary users, and what are their core workflows?',
                    'What systems does it need to integrate with (CRM, ERP, payment gateways)?',
                    'What is your realistic timeline — and is it driven by a market event or internal deadline?',
                    'What is your total budget range, including post-launch maintenance?',
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10,
                      padding: '10px 16px', borderRadius: 10,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <span style={{ color: '#ffffff', fontWeight: 700, fontSize: 14, marginTop: 2, flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{item}</span>
                    </div>
                  ))}

                  {/* Red Flag Warning Box */}
                  <div style={{
                    marginTop: 24, padding: '20px 24px', borderRadius: 14,
                    background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)',
                    borderLeft: '4px solid #ef4444',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 16 }}>🚩</span>
                      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ef4444', margin: 0 }}>Watch Out</p>
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                      If an agency agrees to start building without asking detailed questions about your business goals, user personas, and success metrics — run. They are prioritizing billable hours over your project's success. A great partner will push back on unclear requirements and help you sharpen the brief.
                    </p>
                  </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 2: Evaluation Criteria Checklist (TABLE)
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="evaluation-criteria">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>📊</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>2. Evaluation Criteria Checklist</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Use this weighted checklist to score every vendor you evaluate. Print it out, bring it to discovery calls, and rate each company on a 1-10 scale per criterion. The weights reflect how much each factor actually impacts project success.
                  </p>

                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr>
                          <th style={thStyle}>Criteria</th>
                          <th style={{ ...thStyle, textAlign: 'center' }}>Weight</th>
                          <th style={thStyle}>What to Look For</th>
                          <th style={thStyle}>Red Flags</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            criteria: 'Technical Expertise',
                            weight: '30%',
                            lookFor: 'Modern stack (React, Node, AWS/GCP), CI/CD pipelines, automated testing, code reviews, experience in your tech domain',
                            redFlags: 'Cannot name their tech stack, uses outdated frameworks, no DevOps culture',
                          },
                          {
                            criteria: 'Portfolio & Case Studies',
                            weight: '25%',
                            lookFor: '10+ shipped products, measurable outcomes (revenue, performance), diversity across industries, live demos you can test',
                            redFlags: 'Only mockups or concepts, no live products, refuses to share client names',
                          },
                          {
                            criteria: 'Communication & Process',
                            weight: '20%',
                            lookFor: 'Dedicated PM, weekly standups, transparent project boards (Jira/Asana), same-timezone availability, clear escalation paths',
                            redFlags: 'No PM assigned, emails take 48+ hours, vague about methodology',
                          },
                          {
                            criteria: 'Pricing & Contracts',
                            weight: '15%',
                            lookFor: 'Fixed-price or milestone-based quotes, detailed SOW, clear IP ownership, no hidden fees, payment tied to deliverables',
                            redFlags: 'Hourly-only with no cap, vague estimates, requires 100% upfront, unclear IP terms',
                          },
                          {
                            criteria: 'Reviews & References',
                            weight: '10%',
                            lookFor: '4.5+ stars on Clutch/GoodFirms, willing to provide 2-3 references you can call, positive G2 or Google reviews',
                            redFlags: 'No third-party reviews, refuses references, all reviews look templated or fake',
                          },
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={tdBoldStyle}>{row.criteria}</td>
                            <td style={{ ...tdStyle, textAlign: 'center', color: '#22c55e', fontWeight: 700 }}>{row.weight}</td>
                            <td style={tdStyle}>{row.lookFor}</td>
                            <td style={{ ...tdStyle, color: '#f87171' }}>{row.redFlags}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginTop: 12, fontStyle: 'italic' }}>
                    Pro tip: Score each vendor 1-10 per criterion, multiply by the weight, and compare total scores. Any vendor scoring below 6 on Technical Expertise or Communication should be eliminated regardless of total score.
                  </p>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 3: Development Model Comparison (TABLE)
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="development-models">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>🔄</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>3. Development Model Comparison</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    The engagement model you choose shapes everything — from how you pay to how much control you have. Here is an honest breakdown of the four most common models and when each one makes sense.
                  </p>

                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 780 }}>
                      <thead>
                        <tr>
                          <th style={thStyle}>Model</th>
                          <th style={thStyle}>Pros</th>
                          <th style={thStyle}>Cons</th>
                          <th style={thStyle}>Best For</th>
                          <th style={{ ...thStyle, textAlign: 'center' }}>Risk Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            model: 'Fixed Price',
                            pros: 'Predictable budget, clear deliverables, vendor owns risk, easy to get internal buy-in',
                            cons: 'Less flexibility for changes, requires well-defined scope upfront, change orders add cost',
                            bestFor: 'MVPs, marketing sites, projects with clear requirements',
                            risk: 'Low',
                            riskColor: '#22c55e',
                          },
                          {
                            model: 'Time & Material',
                            pros: 'Maximum flexibility, can pivot mid-project, pay for actual work done, suits evolving scope',
                            cons: 'Unpredictable costs, requires active oversight, easy to overspend without discipline',
                            bestFor: 'R&D, startups iterating on product-market fit, complex integrations',
                            risk: 'Medium',
                            riskColor: '#f59e0b',
                          },
                          {
                            model: 'Dedicated Team',
                            pros: 'Full control over team, deep domain knowledge over time, feels like an extension of your org',
                            cons: 'Higher monthly commitment, you manage priorities, slow to ramp up, idle time risk',
                            bestFor: 'Long-term products, enterprises needing ongoing development capacity',
                            risk: 'Medium',
                            riskColor: '#f59e0b',
                          },
                          {
                            model: 'Hybrid',
                            pros: 'Fixed price for core scope + T&M for extras, balances predictability with flexibility',
                            cons: 'More complex contracts, requires clear boundary between fixed and flexible scope',
                            bestFor: 'Large projects with a defined core but expected feature evolution',
                            risk: 'Low-Med',
                            riskColor: '#22c55e',
                          },
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={tdBoldStyle}>{row.model}</td>
                            <td style={tdStyle}>{row.pros}</td>
                            <td style={tdStyle}>{row.cons}</td>
                            <td style={tdStyle}>{row.bestFor}</td>
                            <td style={{ ...tdStyle, textAlign: 'center', color: row.riskColor, fontWeight: 700, whiteSpace: 'nowrap' }}>{row.risk}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Red Flag Warning Box */}
                  <div style={{
                    marginTop: 20, padding: '20px 24px', borderRadius: 14,
                    background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)',
                    borderLeft: '4px solid #ef4444',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 16 }}>🚩</span>
                      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ef4444', margin: 0 }}>Watch Out</p>
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                      Be wary of agencies that push exclusively for Time & Material billing without offering a fixed-price alternative. This often means they cannot accurately estimate scope — or they prefer the financial safety of open-ended billing at your expense. A confident agency can commit to a fixed price for a well-defined scope.
                    </p>
                  </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 4: Vendor Type Comparison (TABLE)
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="vendor-types">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>🏢</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>4. Vendor Type Comparison: Who Should You Hire?</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Not all development partners are created equal. The type of vendor you choose has massive implications for quality, cost, communication speed, and long-term support. Here is how the four main vendor types stack up.
                  </p>

                  <div style={tableWrapStyle}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr>
                          <th style={thStyle}>Factor</th>
                          <th style={thStyle}>Big Agency</th>
                          <th style={thStyle}>Boutique Studio</th>
                          <th style={thStyle}>Freelancer</th>
                          <th style={thStyle}>Offshore Team</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            factor: 'Quality',
                            bigAgency: 'High — deep bench, proven processes',
                            boutique: 'High — senior-heavy teams, personal attention',
                            freelancer: 'Variable — depends entirely on the individual',
                            offshore: 'Variable — ranges from excellent to disastrous',
                          },
                          {
                            factor: 'Cost',
                            bigAgency: '$$$$ — premium pricing, significant overhead',
                            boutique: '$$$ — competitive for the quality delivered',
                            freelancer: '$$ — lower rates, but hidden costs in management',
                            offshore: '$ — lowest hourly rate, but rework costs add up',
                          },
                          {
                            factor: 'Communication',
                            bigAgency: 'Structured — dedicated PM, formal processes',
                            boutique: 'Direct — often work with founders/partners directly',
                            freelancer: 'Informal — fast when responsive, risky when not',
                            offshore: 'Challenging — timezone gaps, language barriers',
                          },
                          {
                            factor: 'Speed',
                            bigAgency: 'Moderate — larger teams but more process overhead',
                            boutique: 'Fast — lean teams, quick decision-making',
                            freelancer: 'Fast for small scope — bottlenecked on one person',
                            offshore: 'Slow effective speed — fast output, slow iteration cycles',
                          },
                          {
                            factor: 'Post-Launch Support',
                            bigAgency: 'Comprehensive SLAs and maintenance packages',
                            boutique: 'Ongoing partnership, flexible support agreements',
                            freelancer: 'Risky — no guarantee of long-term availability',
                            offshore: 'Often minimal — team may be reassigned to new clients',
                          },
                          {
                            factor: 'Best For',
                            bigAgency: 'Enterprise, Fortune 500, regulated industries',
                            boutique: 'Startups, mid-market, businesses wanting a true partner',
                            freelancer: 'Small tasks, MVPs under $20K, supplemental work',
                            offshore: 'Cost-sensitive projects with strong internal technical oversight',
                          },
                        ].map((row, i) => (
                          <tr key={i}>
                            <td style={tdBoldStyle}>{row.factor}</td>
                            <td style={tdStyle}>{row.bigAgency}</td>
                            <td style={tdStyle}>{row.boutique}</td>
                            <td style={tdStyle}>{row.freelancer}</td>
                            <td style={tdStyle}>{row.offshore}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Red Flag Warning Box */}
                  <div style={{
                    marginTop: 20, padding: '20px 24px', borderRadius: 14,
                    background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)',
                    borderLeft: '4px solid #ef4444',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 16 }}>🚩</span>
                      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ef4444', margin: 0 }}>Watch Out</p>
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                      Many agencies that present themselves as "American" are actually sales fronts that immediately subcontract your project offshore. During your discovery call, ask directly: "Will the developers working on my project be your full-time employees, and where are they located?" If they hesitate or dodge, that tells you everything.
                    </p>
                  </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 5: Onshore vs Nearshore vs Offshore
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="onshore-vs-offshore">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(17,24,39,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>🌍</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>5. Onshore vs Nearshore vs Offshore — The American Advantage</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    The allure of $15/hour offshore developers is powerful — until your project is six months behind schedule, the codebase is unmaintainable, and the team disappears at 2 AM your time. There is a reason enterprise companies overwhelmingly choose onshore American development partners for mission-critical projects.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Here is why choosing an American software company gives you a structural advantage:
                  </p>
                  {[
                    { title: 'CCPA & Federal Compliance', desc: 'American companies are bound by federal privacy law, ensuring your user data is handled with the highest standards — critical for fintech, healthcare, and e-commerce.' },
                    { title: 'Same Timezone Collaboration', desc: 'Real-time communication across American time zones means same-day feedback loops, not 24-hour delays waiting for offshore teams to wake up.' },
                    { title: 'Cultural & Market Alignment', desc: 'American developers understand American markets, regulatory environments, and user expectations — nuances that offshore teams consistently miss.' },
                    { title: 'IP Protection & Legal Enforcement', desc: 'American intellectual property law provides robust protections. Contracts are enforceable in American courts, unlike agreements with companies in jurisdictions with weak IP enforcement.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 14, marginBottom: 12,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>{item.title}</p>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 6: 7 Red Flags
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="red-flags">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>🚩</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>6. Seven Red Flags to Watch For</h2>
                  </div>

                  {/* Red Flag Master Warning */}
                  <div style={{
                    padding: '20px 24px', borderRadius: 14, marginBottom: 24,
                    background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)',
                    borderLeft: '4px solid #ef4444',
                  }}>
                    <p style={{ fontSize: 15, color: '#fca5a5', lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
                      Any one of these should make you pause. Two or more? Walk away immediately. The cost of re-doing a failed project is 3-5x the cost of choosing the right partner from day one.
                    </p>
                  </div>

                  {[
                    { flag: 'No Portfolio or Case Studies', detail: 'If they cannot show you real, shipped products with measurable outcomes, they are either too new or hiding poor work. Legitimate agencies are proud to showcase their launches.' },
                    { flag: 'Refuses to Share References', detail: 'A company that will not connect you with past clients has something to hide. Always ask for at least two references and actually call them.' },
                    { flag: 'Unclear or Hourly-Only Pricing', detail: 'Agencies that refuse to provide fixed-price or milestone-based quotes are transferring all financial risk to you. Hourly billing with no ceiling is a recipe for budget blowouts.' },
                    { flag: 'No Dedicated Project Manager', detail: 'If you are communicating directly with developers with no PM layer, expect miscommunication, missed deadlines, and zero accountability for the overall project trajectory.' },
                    { flag: 'Outsources Everything Offshore', detail: 'Some American agencies are just sales fronts that immediately ship your project to overseas subcontractors. Ask directly: "Will the developers working on my project be your employees?"' },
                    { flag: 'No Post-Launch Support Plan', detail: 'Software is never "done." If the agency has no maintenance, hosting, or support offering, they are planning to hand you a codebase and disappear.' },
                    { flag: 'Too Cheap to Be True', detail: 'If a quote is 60-70% below market rate, the quality will reflect that. You will pay the difference — and more — in rework, bugs, and technical debt.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 14, marginBottom: 12,
                      background: 'rgba(248,113,113,0.04)', border: '1px solid rgba(248,113,113,0.12)',
                    }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#f87171', marginBottom: 6 }}>{i + 1}. {item.flag}</p>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 7: 7 Green Flags
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="green-flags">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>✅</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>7. Seven Green Flags of a Great American Dev Partner</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    The best software development companies in the USA consistently exhibit these traits:
                  </p>
                  {[
                    { flag: 'Strong, Diverse Portfolio', detail: 'They can show you 10+ shipped products across different industries — mobile apps, SaaS platforms, e-commerce, enterprise systems. Breadth demonstrates adaptability.' },
                    { flag: 'Transparent, Fixed-Price Quoting', detail: 'They provide detailed SOWs with milestone-based payments. You know exactly what you are paying at every phase, and there are no surprise invoices.' },
                    { flag: 'Dedicated Project Manager', detail: 'A single point of contact who owns your project, runs weekly standups, manages the dev team, and translates between business requirements and technical execution.' },
                    { flag: 'In-House Development Team', detail: 'Their developers are full-time employees, not freelancers or offshore subcontractors. This means consistent quality, institutional knowledge, and accountability.' },
                    { flag: 'Post-Launch Maintenance & Support', detail: 'They offer SLA-backed maintenance packages, hosting management, and ongoing feature development — because they plan to be your long-term technology partner.' },
                    { flag: 'Modern Tech Stack', detail: 'They build with current, scalable technologies — Next.js, React Native, Node.js, AWS/GCP, TypeScript — not legacy frameworks that will be obsolete in two years.' },
                    { flag: 'Industry Expertise', detail: 'They have domain knowledge in your sector. A company that has built fintech platforms understands PCI compliance. A company that has built healthcare apps understands HIPAA.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 14, marginBottom: 12,
                      background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)',
                    }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#34d399', marginBottom: 6 }}>{i + 1}. {item.flag}</p>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 8: Questions to Ask
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="questions-to-ask">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(17,24,39,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>❓</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>8. Fifteen Questions to Ask Before Signing a Contract</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Print this list. Bring it to every discovery call. Any reputable agency will answer these without hesitation.
                  </p>
                  {[
                    'Who exactly will be working on my project — and are they your employees?',
                    'Can you share three references from clients in a similar industry?',
                    'What is your project management methodology (Agile, Scrum, Kanban)?',
                    'How do you handle scope changes mid-project, and what is the change request process?',
                    'Do you provide fixed-price quotes or hourly billing? Is there a budget ceiling?',
                    'What does your QA and testing process look like?',
                    'Who owns the source code and intellectual property upon project completion?',
                    'What technologies will you use, and why are they the right choice for this project?',
                    'What does your post-launch support and maintenance offering include?',
                    'How do you handle data privacy and security compliance (CCPA, SOC 2)?',
                    'What is your average project timeline for a build of this scope?',
                    'Can you walk me through a project that failed, and what you learned?',
                    'Do you provide hosting and DevOps, or do we need to manage infrastructure separately?',
                    'What are the payment milestones, and what deliverables are tied to each?',
                    'What happens if I am not satisfied with a deliverable — what is the revision process?',
                  ].map((q, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 8,
                      padding: '10px 16px', borderRadius: 10,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <span style={{ color: '#ffffff', fontWeight: 700, fontSize: 13, marginTop: 2, flexShrink: 0, minWidth: 22 }}>{i + 1}.</span>
                      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{q}</span>
                    </div>
                  ))}

                  {/* Red Flag Warning Box */}
                  <div style={{
                    marginTop: 20, padding: '20px 24px', borderRadius: 14,
                    background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)',
                    borderLeft: '4px solid #ef4444',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 16 }}>🚩</span>
                      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ef4444', margin: 0 }}>Watch Out</p>
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                      If an agency gets defensive about any of these questions or gives vague non-answers like "we will figure it out as we go," that is a disqualifier. Transparency is non-negotiable. Great partners welcome tough questions because they have great answers.
                    </p>
                  </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 9: Why Codazz Checks Every Box
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz-checks-every-box">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(59,130,246,0.06) 50%, rgba(168,85,247,0.06) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 'clamp(28px, 5vw, 44px)', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -50, right: -50, width: 250, height: 250, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                    <div style={{ position: 'absolute', bottom: -30, left: -30, width: 180, height: 180, background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', filter: 'blur(30px)' }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 14,
                        background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                      }}>🏆</div>
                      <h2 style={{
                        fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                        letterSpacing: '-0.03em', margin: 0,
                      }}>9. Why Codazz Checks Every Box</h2>
                    </div>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 28, position: 'relative', zIndex: 1 }}>
                      We built Codazz specifically to solve the problems outlined in this guide. Every red flag? We engineered our company to be the opposite. Every green flag? It is baked into how we operate. Here is the proof.
                    </p>

                    {/* Checklist-style grid */}
                    <div style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 10 }}>
                      {[
                        { criteria: 'Technical Expertise', proof: 'Full-stack mastery across Next.js, React Native, Node.js, Python, AWS, and GCP. Every project gets CI/CD, automated testing, and code reviews as standard.' },
                        { criteria: 'Proven Portfolio', proof: '500+ successful product launches across fintech, healthcare, e-commerce, logistics, SaaS, and AI — with live case studies and measurable outcomes.' },
                        { criteria: 'Communication Excellence', proof: 'Dedicated project manager for every engagement. Weekly standups, transparent Jira boards, and same-day response times across all US time zones.' },
                        { criteria: 'Transparent Pricing', proof: 'Fixed-price quotes with detailed SOWs and milestone-based payments. No hourly billing surprises. No hidden fees. Budget ceiling guaranteed in writing.' },
                        { criteria: 'Verified Reviews', proof: '4.8+ stars on Clutch and GoodFirms. We will gladly connect you with past clients in your industry for direct references.' },
                        { criteria: 'In-House Team', proof: 'Every developer, designer, QA engineer, and PM is a full-time Codazz employee. We never outsource or subcontract your project. Period.' },
                        { criteria: 'Post-Launch Partnership', proof: 'SLA-backed maintenance, performance monitoring, security updates, and ongoing feature development. We do not disappear after deployment.' },
                        { criteria: 'IP Protection', proof: 'You own 100% of the source code and intellectual property upon project completion. Clear contractual terms, enforceable in US courts.' },
                      ].map((item, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'flex-start', gap: 14,
                          padding: '16px 20px', borderRadius: 14,
                          background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(34,197,94,0.15)',
                        }}>
                          <div style={{
                            width: 24, height: 24, borderRadius: 7, flexShrink: 0, marginTop: 2,
                            background: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20,6 9,17 4,12"/>
                            </svg>
                          </div>
                          <div>
                            <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{item.criteria}</p>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.proof}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mini CTA inside the box */}
                    <div style={{ marginTop: 28, position: 'relative', zIndex: 1, textAlign: 'center' }}>
                      <Link href="/contact" style={{ textDecoration: 'none' }}>
                        <button style={{
                          padding: '16px 36px', borderRadius: 100, background: '#22c55e', color: '#000',
                          fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                          transition: 'all 0.2s', whiteSpace: 'nowrap',
                        }}>
                          Get a Free Fixed-Price Quote →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    Section 10: Average Costs by Project Type
                    ════════════════════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="average-costs">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(17,24,39,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>💰</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>10. Average Costs by Project Type in the USA</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    These ranges reflect 2026 American market rates for quality onshore development. Prices below these ranges typically indicate offshore outsourcing or junior-only teams.
                  </p>
                  {[
                    { type: 'Marketing Website (10-20 pages)', range: '$15,000 – $45,000', timeline: '4–8 weeks' },
                    { type: 'E-Commerce Platform', range: '$40,000 – $120,000', timeline: '8–16 weeks' },
                    { type: 'Custom Mobile App (iOS + Android)', range: '$60,000 – $200,000', timeline: '12–24 weeks' },
                    { type: 'SaaS Platform (MVP)', range: '$80,000 – $250,000', timeline: '16–28 weeks' },
                    { type: 'Enterprise Software System', range: '$150,000 – $500,000+', timeline: '24–52 weeks' },
                    { type: 'AI/ML Integration Project', range: '$50,000 – $180,000', timeline: '10–20 weeks' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 16, alignItems: 'center',
                      padding: '16px 20px', borderRadius: 12, marginBottom: 8,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{item.type}</span>
                      <span style={{ fontSize: 14, color: '#ffffff', fontWeight: 700, whiteSpace: 'nowrap' }}>{item.range}</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>{item.timeline}</span>
                    </div>
                  ))}
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginTop: 16, fontStyle: 'italic' }}>
                    Note: These are approximate ranges based on American market averages. Final pricing depends on complexity, integrations, and specific requirements. Contact Codazz for a precise, fixed-price quote tailored to your project.
                  </p>

                  {/* Red Flag Warning Box */}
                  <div style={{
                    marginTop: 20, padding: '20px 24px', borderRadius: 14,
                    background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)',
                    borderLeft: '4px solid #ef4444',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 16 }}>🚩</span>
                      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ef4444', margin: 0 }}>Watch Out</p>
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                      If a quote comes in 50-70% below these ranges, ask hard questions about where the team is located and who is actually writing the code. Dramatically below-market pricing almost always means offshore subcontracting — and the rework costs when quality falls short will erase any savings.
                    </p>
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
                }}>Get Started</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Schedule a Free Consultation
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop wasting time with agencies that over-promise and under-deliver. Talk to our team and get a fixed-price proposal for your project within 48 hours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Schedule a Free Consultation →
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
