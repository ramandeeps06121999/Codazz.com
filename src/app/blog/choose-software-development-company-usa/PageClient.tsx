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
  { id: 'define-scope', label: 'Define Your Project Scope', emoji: '🎯' },
  { id: 'onshore-vs-offshore', label: 'Onshore vs Nearshore vs Offshore', emoji: '🌍' },
  { id: 'red-flags', label: '7 Red Flags to Watch For', emoji: '🚩' },
  { id: 'green-flags', label: '7 Green Flags of a Great Partner', emoji: '✅' },
  { id: 'questions-to-ask', label: 'Questions Before Signing', emoji: '❓' },
  { id: 'codazz-difference', label: 'How Codazz Stands Apart', emoji: '✨' },
  { id: 'average-costs', label: 'Average Costs by Project Type', emoji: '💰' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA?', category: 'Business', readTime: '8 min' },
  { slug: 'website-cost-usa', title: 'How Much Does a Website Cost in the USA?', category: 'Business', readTime: '7 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA', category: 'Business', readTime: '10 min' },
];

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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
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
                8 min read
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
              A practical, no-nonsense guide to finding the right American software development partner — and avoiding the costly mistakes that drain budgets and kill timelines.
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

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Choosing the wrong software development partner is one of the most expensive mistakes a American business can make. According to industry data, failed software projects cost American companies an average of <strong style={{ color: '#ffffff' }}>$500,000+</strong> in wasted budget, missed market windows, and opportunity cost — and that number climbs significantly for enterprise-scale initiatives.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The problem is rarely the technology itself. It is almost always the partner. Misaligned expectations, hidden offshore outsourcing, scope creep with no guardrails, and agencies that vanish after launch day — these are the patterns that destroy projects and drain budgets.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide will give you a clear, actionable framework for evaluating software development companies in the USA so you can make the right choice the first time. No fluff. No generic advice. Just the criteria that actually matter in 2026.
                  </p>
                </div>

                {/* Section 1: Define Your Project Scope */}
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
                </div>

                {/* Section 2: Onshore vs Nearshore vs Offshore */}
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
                    }}>2. Onshore vs Nearshore vs Offshore — The American Advantage</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                    The allure of $15/hour offshore developers is powerful — until your project is six months behind schedule, the codebase is unmaintainable, and the team disappears at 2 AM your time. There is a reason enterprise companies overwhelmingly choose onshore American development partners for mission-critical projects.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Here is why choosing a American software company gives you a structural advantage:
                  </p>
                  {[
                    { title: 'CCPA Compliance', desc: 'American companies are bound by federal privacy law, ensuring your user data is handled with the highest standards — critical for fintech, healthcare, and e-commerce.' },
                    { title: 'Same Timezone Collaboration', desc: 'Real-time communication across American time zones (PT to AT) means same-day feedback loops, not 24-hour delays waiting for offshore teams to wake up.' },
                    { title: 'Cultural Alignment', desc: 'American developers understand American markets, regulatory environments, bilingual requirements, and user expectations — nuances that offshore teams consistently miss.' },
                    { title: 'IP Protection', desc: 'American intellectual property law provides robust protections. Contracts are enforceable in American courts, unlike agreements with companies in jurisdictions with weak IP enforcement.' },
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

                {/* Section 3: 7 Red Flags */}
                <div className="reveal" style={{ marginBottom: 56 }} id="red-flags">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(17,24,39,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>🚩</div>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>3. Seven Red Flags to Watch For</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Any one of these should make you pause. Two or more? Walk away immediately.
                  </p>
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

                {/* Section 4: 7 Green Flags */}
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
                    }}>4. Seven Green Flags of a Great American Dev Partner</h2>
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
                    { flag: 'Industry Expertise', detail: 'They have domain knowledge in your sector. A company that has built fintech platforms understands PCI compliance. A company that has built healthcare apps understands PHIPA.' },
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

                {/* Section 5: Questions to Ask */}
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
                    }}>5. Fifteen Questions to Ask Before Signing a Contract</h2>
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
                </div>

                {/* Section 6: How Codazz Stands Apart */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz-difference">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 14,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                      }}>🍁</div>
                      <h2 style={{
                        fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                        letterSpacing: '-0.03em', margin: 0,
                      }}>6. How Codazz Stands Apart</h2>
                    </div>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      We built Codazz specifically to solve the problems outlined in this guide. Every red flag listed above? We engineered our company to be the opposite. Here is what sets us apart:
                    </p>
                    {[
                      { title: 'Fixed-Price Transparency', desc: 'Every project comes with a detailed SOW, milestone payments, and a hard budget ceiling. No hourly surprises. No scope creep without formal approval.' },
                      { title: 'New York-Based, USA-Wide', desc: 'Headquartered in New York with 12 offices across the USA — San Francisco, Los Angeles, Austin, Boston, Washington DC, and more. Your project is built on American soil by American developers.' },
                      { title: '300+ Successful Launches', desc: 'We have shipped over 300 bespoke products across fintech, healthcare, e-commerce, logistics, and SaaS. We bring deep domain expertise to every engagement.' },
                      { title: 'Full-Stack, In-House Team', desc: 'Every developer, designer, QA engineer, and project manager is a full-time Codazz employee. We never outsource. Your team is our team.' },
                      { title: 'Post-Launch Partnership', desc: 'We do not disappear after deployment. Our maintenance packages include SLA-backed support, performance monitoring, security updates, and ongoing feature development.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: '16px 20px', borderRadius: 12, marginBottom: 10,
                        background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)',
                        position: 'relative', zIndex: 1,
                      }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{item.title}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 7: Average Costs by Project Type */}
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
                    }}>7. Average Costs by Project Type in the USA</h2>
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 300+ bespoke product launches globally.
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
