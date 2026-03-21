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
  { id: 'what-is-staff-aug', label: 'What Is Staff Augmentation?', emoji: '📖' },
  { id: 'staff-aug-vs-outsourcing', label: 'Staff Aug vs Outsourcing vs Managed', emoji: '⚖️' },
  { id: 'when-to-use', label: 'When to Use Staff Aug', emoji: '🧭' },
  { id: 'skill-gap-analysis', label: 'Skill Gap Analysis', emoji: '🔬' },
  { id: 'rates-by-country', label: 'Rates by Country', emoji: '💰' },
  { id: 'onboarding-augmented', label: 'Onboarding Augmented Staff', emoji: '🚀' },
  { id: 'ip-nda', label: 'IP & NDA Considerations', emoji: '📝' },
  { id: 'managing-blended', label: 'Managing Blended Teams', emoji: '👥' },
  { id: 'best-companies', label: 'Best Staff Aug Companies', emoji: '🏆' },
  { id: 'roi-calculator', label: 'ROI Calculator', emoji: '📊' },
  { id: 'codazz-offering', label: 'Codazz Staff Aug', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-to-hire-remote-developers', title: 'How to Hire Remote Developers in 2026', category: 'Hiring', readTime: '18 min' },
  { slug: 'in-house-vs-outsourcing-development', title: 'In-House vs Outsourcing Development 2026', category: 'Business', readTime: '20 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
];

const tableWrapStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
  border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto', marginBottom: 32,
};
const thStyle: React.CSSProperties = { textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14, fontWeight: 700 };
const tdStyle: React.CSSProperties = { padding: '12px 8px', fontSize: 15 };
const rowBorder: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.05)' };
const headBorder: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.1)' };
const accentColor = '#22c55e';

function CodazzCallout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
      borderRadius: 12, padding: '20px 24px', margin: '24px 0',
      borderLeft: `4px solid ${accentColor}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accentColor }}>Codazz Insight</span>
      </div>
      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

export default function StaffAugmentationGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 14vw, 160px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(34,197,94,0.12)', color: accentColor, padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                18 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Staff Augmentation Guide 2026: Scale Your Dev Team Fast
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              When to use staff augmentation vs outsourcing vs managed teams, how to run a skill gap analysis, what it costs by country, and how to manage a blended team without losing your mind.
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
                  background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: accentColor,
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? accentColor : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* MAIN ARTICLE */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    Your product roadmap just expanded. Your team does not have the bandwidth. You need senior React engineers in 3 weeks, not 3 months. This is the exact scenario staff augmentation was built for.
                  </p>
                  <p>
                    <strong style={{ color: '#ffffff' }}>Staff augmentation lets you add pre-vetted external engineers directly to your existing team</strong> — they work under your processes, in your tools, following your tech standards. Unlike outsourcing, you control the day-to-day work. Unlike full-time hiring, you can scale back when the sprint is done.
                  </p>
                  <p>
                    But staff augmentation is often misunderstood, misapplied, and mismanaged. This guide tells you when it works, when it does not, what it costs, and how to run a blended team without creating a two-tier culture that destroys morale.
                  </p>
                </div>

                {/* KEY TAKEAWAYS */}
                <div id="key-takeaways" className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.02) 100%)',
                  borderRadius: 28, padding: 'clamp(24px, 4vw, 32px)', marginBottom: 48,
                  border: '1px solid rgba(34,197,94,0.25)',
                }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 24 }}>🎯</span> Key Takeaways (TL;DR)
                  </h2>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Staff aug is not outsourcing</strong> — augmented engineers join your team, follow your processes, and report to your leads. Outsourcing delegates the entire workflow to an external partner.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Best use case: filling a specific, time-bounded skill gap</strong> — you have a team and a clear process but are missing a skill (e.g., senior DevOps for a migration, ML engineer for a feature).
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Rates range from $25/hr (India) to $150/hr (US senior specialist)</strong> — the sweet spot for quality plus value is $35-$65/hr for senior engineers from India or Eastern Europe.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>IP and NDA must be explicit before day one</strong> — augmented staff are often contractors. Without signed IP assignment agreements, the code they write may not legally belong to you.
                    </li>
                    <li style={{ color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Two-tier culture kills blended teams</strong> — the number-one failure mode is treating augmented staff as second-class citizens. Include them in standups, retros, and Slack the same as permanent staff.
                    </li>
                  </ul>
                </div>

                {/* WHAT IS STAFF AUG */}
                <h2 id="what-is-staff-aug" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>What Is Staff Augmentation?</h2>
                <p className="reveal" style={{ marginBottom: 24 }}>
                  Staff augmentation is a hiring model where you bring in external developers who work as part of your internal team. They use your tools, follow your processes, attend your standups, and report to your engineering leads — but they are employed or contracted by a third-party agency.
                </p>
                <p className="reveal" style={{ marginBottom: 32 }}>
                  Think of it like a skilled trade contractor working on your construction project. They have their own employer (the agency), they bring specialized skills, and they leave when the work is done. But while they are on site, they follow your foreman, use your blueprints, and work alongside your full-time crew.
                </p>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, marginBottom: 40,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Three Varieties of Staff Augmentation</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {[
                      { type: 'Commodity Augmentation', desc: 'Adding junior/mid developers for bandwidth. The augmented engineers execute against defined tickets with supervision from your leads.', color: '#61dafb' },
                      { type: 'Skill-Based Augmentation', desc: 'Bringing in a specialist your team lacks — a machine learning engineer, a blockchain developer, a principal architect. High expertise, short engagement.', color: accentColor },
                      { type: 'Dedicated Augmentation', desc: 'Long-term augmented engineers who become effectively full-time for 1-2 years. They have deep product knowledge but retain the flexibility of a contractor model.', color: '#ffc864' },
                    ].map((item) => (
                      <div key={item.type} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 16, padding: 20 }}>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: item.color, margin: '0 0 8px' }}>{item.type}</h4>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* STAFF AUG VS OUTSOURCING */}
                <h2 id="staff-aug-vs-outsourcing" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Staff Augmentation vs Outsourcing vs Managed Teams</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  These three models are often confused. They have very different risk profiles, cost structures, and control levels.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Dimension</th>
                        <th style={{ ...thStyle, color: accentColor }}>Staff Augmentation</th>
                        <th style={{ ...thStyle, color: '#61dafb' }}>Outsourcing</th>
                        <th style={{ ...thStyle, color: '#ffc864' }}>Managed Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['Management', 'You manage them', 'Vendor manages', 'Shared management'],
                        ['Process', 'Your process', 'Vendor process', 'Agreed hybrid process'],
                        ['Control', 'High — direct', 'Low — indirect', 'Medium — oversight'],
                        ['Speed to start', '1-3 weeks', '1-4 weeks', '2-4 weeks'],
                        ['Flexibility', 'Medium (notice periods)', 'Low (project scope)', 'High (elastic team)'],
                        ['Knowledge retention', 'Leaves with contractor', 'Stays with vendor', 'Shared knowledge base'],
                        ['Cost', '$35-$150/hr', '$30-$100/hr (all-in)', '$40-$120/hr (managed)'],
                        ['Best for', 'Skill gaps, bandwidth', 'Full project delivery', 'Ongoing product development'],
                        ['IP risk', 'Contractor-level (manage via contract)', 'Vendor-level (manage via contract)', 'Lower — structured agreements'],
                      ] as string[][]).map((row, i) => (
                        <tr key={i} style={rowBorder}>
                          <td style={{ ...tdStyle, color: '#ffffff', fontWeight: 600 }}>{row[0]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.8)' }}>{row[1]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.8)' }}>{row[2]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.8)' }}>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <CodazzCallout>
                  Most of our clients start with staff augmentation for a specific skill gap (e.g., DevOps for a cloud migration), then transition to a managed team model for ongoing product development. Staff aug is a great first step when you want to test working with an external team before committing to a broader engagement.
                </CodazzCallout>

                {/* WHEN TO USE */}
                <h2 id="when-to-use" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>When to Use Staff Augmentation (and When Not To)</h2>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: accentColor, marginBottom: 16 }}>Use Staff Aug When:</h3>
                  <ul style={{ paddingLeft: 20, margin: 0, marginBottom: 32 }}>
                    {[
                      'You have a specific, identified skill gap your current team lacks (e.g., you need a senior data engineer but your team is all full-stack).',
                      'You have a time-bounded need — a product launch, a migration, a compliance deadline — after which the requirement diminishes.',
                      'You have existing senior engineers who can onboard, manage, and review the augmented resource effectively.',
                      'Your codebase, processes, and documentation are mature enough that a new engineer can get productive in 1-2 weeks.',
                      'You want to evaluate a specific engineer or team before committing to a full outsourcing engagement.',
                      'You are in a regulatory environment that requires engineers to follow your internal security and compliance processes.',
                    ].map((item, i) => (
                      <li key={i} style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>{item}</li>
                    ))}
                  </ul>

                  <h3 style={{ fontSize: 19, fontWeight: 700, color: '#ef4444', marginBottom: 16 }}>Do NOT Use Staff Aug When:</h3>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    {[
                      'You need someone to run the work independently — augmented staff need direction. They will not architect your product or manage your roadmap.',
                      'You have no technical lead to manage them — without oversight, augmented engineers produce inconsistent, unmaintainable code.',
                      'Your codebase is undocumented chaos — onboarding will take 6-8 weeks and the engineer will leave confused.',
                      'You need permanent institutional knowledge — augmented staff leave, taking everything they know with them.',
                      'You want to solve a management or culture problem with headcount — adding bodies to a dysfunctional team makes things worse.',
                    ].map((item, i) => (
                      <li key={i} style={{ marginBottom: 10, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* SKILL GAP ANALYSIS */}
                <h2 id="skill-gap-analysis" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Skill Gap Analysis: Finding What You Actually Need</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Before you post a job or call an agency, do a structured skill gap analysis. Most teams skip this and end up hiring the wrong person for the wrong role.
                </p>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  {[
                    {
                      step: '1. Map Current Capabilities',
                      details: 'List every engineer on your team. For each, rate their skills in the areas relevant to your roadmap (1-5 scale). Be honest. A senior engineer who has never built a distributed system is not a senior for that use case.',
                    },
                    {
                      step: '2. Map Roadmap Requirements',
                      details: 'For the next 90 days, what technical capabilities are required? Break it down by project: mobile feature X needs React Native expert, infrastructure project Y needs Kubernetes experience, data project Z needs dbt and BigQuery knowledge.',
                    },
                    {
                      step: '3. Identify the Delta',
                      details: 'Where is your capability map weakest against your roadmap requirements? Rank gaps by: (a) impact on roadmap velocity if unfilled, (b) difficulty to develop internally in the timeline, (c) availability of external talent in that skill.',
                    },
                    {
                      step: '4. Define the Role Precisely',
                      details: 'Do not write a generic senior developer job description. Write a role description tied to specific deliverables: Senior DevOps engineer to migrate three monolith services to Kubernetes on AWS, 3-month engagement, must have production EKS experience. Specificity attracts the right candidates and repels the wrong ones.',
                    },
                    {
                      step: '5. Set a Success Definition',
                      details: 'Before the engagement starts, define what success looks like at 30 days, 60 days, and project completion. This aligns the augmented engineer and gives you an objective basis for evaluation.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="reveal" style={{ marginBottom: 24, paddingLeft: 24, borderLeft: `3px solid ${accentColor}` }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: accentColor, marginBottom: 8 }}>{item.step}</h3>
                      <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>{item.details}</p>
                    </div>
                  ))}
                </div>

                {/* RATES BY COUNTRY */}
                <h2 id="rates-by-country" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Staff Augmentation Rates by Country (2026)</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Rates vary by seniority, technology stack, and engagement type. These are market rates for senior engineers (5+ years) placed through staff augmentation firms.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 580 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Country / Region</th>
                        <th style={thStyle}>Rate Range (Senior)</th>
                        <th style={thStyle}>EST Overlap</th>
                        <th style={thStyle}>Best Skill Sets</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['USA', '$100-$150/hr', 'Full overlap', 'All stacks — full-stack, AI/ML, cloud'],
                        ['Canada', '$75-$120/hr', 'Full overlap', 'Full-stack, mobile, cloud'],
                        ['UK / Germany', '$70-$120/hr', 'Partial (afternoon EST)', 'Enterprise, fintech, data'],
                        ['Poland / Romania', '$40-$75/hr', 'Late afternoon EST', 'Full-stack, DevOps, React'],
                        ['Ukraine', '$35-$70/hr', 'Late afternoon EST', 'Backend, AI, data engineering'],
                        ['Colombia / Argentina', '$35-$65/hr', 'Full EST overlap', 'Full-stack, React Native, Node'],
                        ['Mexico', '$40-$70/hr', 'Full EST overlap (CST)', 'Full-stack, mobile, iOS'],
                        ['India', '$25-$55/hr', '4-6hr overlap (shifted)', 'Full-stack, backend, mobile, AI/ML, QA'],
                        ['Philippines', '$20-$40/hr', 'Evening EST', 'QA, support dev, WordPress, mobile'],
                      ] as string[][]).map((row, i) => (
                        <tr key={i} style={rowBorder}>
                          <td style={{ ...tdStyle, color: '#ffffff', fontWeight: 600 }}>{row[0]}</td>
                          <td style={{ ...tdStyle, color: accentColor, fontWeight: 600 }}>{row[1]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.7)' }}>{row[2]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>What These Rates Include vs. What They Do Not</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: accentColor, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Included</p>
                      <ul style={{ paddingLeft: 16, margin: 0, fontSize: 14 }}>
                        {['Engineer salary/compensation', 'Agency margin (15-30%)', 'HR administration', 'Benefits (local law compliance)', 'Basic equipment'].map(item => <li key={item} style={{ marginBottom: 8, color: 'rgba(255,255,255,0.7)' }}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#ef4444', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Not Included</p>
                      <ul style={{ paddingLeft: 16, margin: 0, fontSize: 14 }}>
                        {['Project management (your cost)', 'Code review time (your senior devs)', 'Onboarding time (first 2-3 weeks)', 'Tool licenses (Jira, GitHub, etc.)', 'Rework from poor quality'].map(item => <li key={item} style={{ marginBottom: 8, color: 'rgba(255,255,255,0.7)' }}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ONBOARDING AUGMENTED */}
                <h2 id="onboarding-augmented" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Onboarding Augmented Staff: Speed Without Chaos</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  The first two weeks determine whether an augmented engineer delivers value or becomes a management burden. Invest in onboarding upfront and it pays back 10x.
                </p>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  {[
                    { title: 'Pre-boarding (before day 1)', items: ['All accounts provisioned: GitHub, Jira, Slack, staging env, VPN if required.', 'Access to codebase, architecture docs, and your team handbook or onboarding guide.', 'Signed contracts: IP assignment, NDA, SOW — all fully executed before they write a line of code.', 'Brief intro sent to the existing team so they are expected and welcomed.'] },
                    { title: 'Week 1: Orientation', items: ['30-minute kickoff with tech lead: project context, tech standards, coding conventions, definition of done.', 'Architecture walkthrough (Loom or live): how the system is structured, where the landmines are.', 'First ticket: small, real, and well-specified. Not a tutorial, not documentation cleanup.', 'Daily check-in (15 min) in the first week to surface confusion before it becomes delay.'] },
                    { title: 'Week 2: First Independent Contribution', items: ['Assign a mid-complexity ticket with clear acceptance criteria. They should own it end-to-end.', 'Pair programming session with a senior team member on their first PR review.', 'Begin participating in standups and sprint ceremonies the same as any team member.', 'Evaluate: communication quality, code quality, ability to ask good questions.'] },
                  ].map((phase, i) => (
                    <div key={i} style={{ marginBottom: 28, paddingLeft: 24, borderLeft: `3px solid ${accentColor}` }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>{phase.title}</h3>
                      <ul style={{ paddingLeft: 20, margin: 0 }}>
                        {phase.items.map((item, j) => (
                          <li key={j} style={{ marginBottom: 10, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* IP & NDA */}
                <h2 id="ip-nda" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>IP & NDA Considerations for Augmented Staff</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  IP ownership with augmented staff is more complex than with full-time employees. Most employment law does not automatically assign contractor work product to the client company. You need explicit contracts.
                </p>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  {[
                    { issue: 'Who owns the code?', risk: 'High', solution: 'Require an IP assignment agreement signed by the individual engineer (not just the agency). The agreement should state that all work product created during the engagement is automatically and irrevocably assigned to your company.' },
                    { issue: 'Can they share your code with future clients?', risk: 'High', solution: 'NDA covering all technical information, product strategy, customer data, and business information. Should survive termination by at least 2-3 years. Include the agency in the NDA, not just the individual engineer.' },
                    { issue: 'Can they use your code in their portfolio?', risk: 'Medium', solution: 'Explicit prohibition on using your code, product screenshots, or client name in their portfolio without written consent. Many engineers do this by default unless you forbid it.' },
                    { issue: 'Pre-existing IP contamination', risk: 'Medium', solution: 'Require the engineer to disclose any pre-existing code, libraries, or tools they plan to use in your project. If they import their own previously written utilities, those may remain their IP embedded in your product.' },
                    { issue: 'Open source license violations', risk: 'Low-Medium', solution: 'Require engineers to disclose all third-party dependencies and their licenses. Some open source licenses (GPL) have copyleft implications that could affect your proprietary codebase. Run license scans on every PR.' },
                  ].map((item, i) => (
                    <div key={i} className="reveal" style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 20, marginBottom: 12,
                      border: `1px solid ${item.risk === 'High' ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.06)'}`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.issue}</h3>
                        <span style={{
                          fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, letterSpacing: '0.1em',
                          background: item.risk === 'High' ? 'rgba(239,68,68,0.15)' : item.risk === 'Medium' ? 'rgba(251,191,36,0.15)' : 'rgba(34,197,94,0.15)',
                          color: item.risk === 'High' ? '#ef4444' : item.risk === 'Medium' ? '#fbbf24' : accentColor,
                        }}>RISK: {item.risk.toUpperCase()}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}><strong style={{ color: accentColor }}>Solution:</strong> {item.solution}</p>
                    </div>
                  ))}
                </div>

                {/* MANAGING BLENDED TEAMS */}
                <h2 id="managing-blended" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Managing Blended Teams: Full-Time + Augmented</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  The most dangerous failure mode of staff augmentation is not poor code quality. It is the two-tier culture that emerges when augmented staff feel like second-class citizens and disengage.
                </p>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                    {[
                      {
                        title: 'Include, Do Not Isolate',
                        items: ['Same Slack channels as permanent staff.', 'Invited to all sprint ceremonies: planning, review, retro.', 'Introduced by name in team updates and announcements.', 'Access to the full codebase (within security scope), not just their assigned module.'],
                      },
                      {
                        title: 'Clear Ownership, Not Just Tasks',
                        items: ['Assign a module or feature area, not just isolated tickets.', 'Give them decision-making authority within their scope.', 'Let them write the architecture docs for their work.', 'Invite them to technical design discussions that affect their area.'],
                      },
                      {
                        title: 'Feedback Loops That Work',
                        items: ['Weekly 1-on-1 with their direct tech lead (not just the agency account manager).', 'Include them in performance feedback cycles.', 'Escalate concerns to the agency fast — do not let problems fester for weeks.', '30/60/90 day checkpoints with explicit success criteria.'],
                      },
                    ].map((sec) => (
                      <div key={sec.title} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: accentColor, marginBottom: 12 }}>{sec.title}</h3>
                        <ul style={{ paddingLeft: 16, margin: 0 }}>
                          {sec.items.map((item, i) => <li key={i} style={{ marginBottom: 8, fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BEST COMPANIES */}
                <h2 id="best-companies" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Best Staff Augmentation Companies (2026)</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Not all staff aug firms are equal. These are the vendors most commonly used by our network, ranked by specialization.
                </p>

                {[
                  { name: 'Codazz', region: 'India (Chandigarh) + Canada (Edmonton)', specialty: 'Full-stack, mobile, AI/ML, cloud DevOps', rateRange: '$35-$75/hr', notes: 'Our own staff augmentation service. Pre-vetted senior engineers, signed IP assignment and NDA, dedicated resources, 3-7 day deployment, free replacement guarantee within 2 weeks.' },
                  { name: 'Toptal', region: 'Global', specialty: 'Senior specialists across all stacks', rateRange: '$80-$200/hr', notes: 'Claims top 3% of applicants. Gold standard for senior specialist augmentation. High cost but fastest time-to-productive senior engineer.' },
                  { name: 'Turing', region: 'Latin America, India', specialty: 'Full-stack, ML, data engineering', rateRange: '$45-$100/hr', notes: 'AI-powered matching. Strong Latin American talent pool for US timezone alignment. Good for React, Python, Node, and ML engineers.' },
                  { name: 'Andela', region: 'Africa', specialty: 'Full-stack, backend, mobile', rateRange: '$35-$75/hr', notes: 'African tech talent marketplace. Strong engineers from Nigeria, Kenya, Egypt. Increasingly popular with US companies wanting emerging market talent.' },
                  { name: 'EPAM Systems', region: 'Eastern Europe', specialty: 'Enterprise, .NET, Java, SAP', rateRange: '$60-$120/hr', notes: 'Large Eastern European firm. Best for enterprise-grade augmentation, especially .NET, Java, and legacy system expertise. Formal engagement model.' },
                ].map((company, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, marginBottom: 16,
                    border: `1px solid ${company.name === 'Codazz' ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 10 }}>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: company.name === 'Codazz' ? accentColor : '#ffffff', margin: '0 0 4px' }}>{company.name}</h3>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{company.region} &middot; {company.specialty}</span>
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 700, color: accentColor }}>{company.rateRange}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{company.notes}</p>
                  </div>
                ))}

                {/* ROI Calculator */}
                <h2 id="roi-calculator" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Staff Augmentation ROI Calculator</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Is staff augmentation actually cheaper than hiring? Use this framework to calculate your real ROI before committing.
                </p>

                <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 32, marginBottom: 32, border: '1px solid rgba(34,197,94,0.2)' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', marginBottom: 16 }}>The ROI Formula</h3>
                  <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: 12, padding: 24, fontFamily: 'monospace', fontSize: 15, color: '#22c55e', marginBottom: 24, lineHeight: 1.8 }}>
                    ROI = (Fully-Loaded FTE Cost − Staff Aug Cost + Productivity Savings) ÷ Staff Aug Cost × 100
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 0 }}>
                    <strong style={{ color: '#fff' }}>Fully-Loaded FTE Cost</strong> includes: base salary + benefits (20-30%) + payroll taxes + recruiting fees (15-25% of salary) + onboarding time (1-3 months at reduced productivity) + hardware + office space.
                  </p>
                </div>

                <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 32, marginBottom: 32, border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Worked Example: Senior React Developer</h3>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '10px 12px', color: '#fff', fontWeight: 700 }}>Cost Component</th>
                          <th style={{ textAlign: 'right', padding: '10px 12px', color: '#fff', fontWeight: 700 }}>FTE (US Hire)</th>
                          <th style={{ textAlign: 'right', padding: '10px 12px', color: '#22c55e', fontWeight: 700 }}>Staff Aug (India)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Base Salary / Billing', '$130,000/yr', '$52,000/yr ($50/hr)'],
                          ['Benefits & Payroll Tax (28%)', '$36,400', '—'],
                          ['Recruiting Fee (20%)', '$26,000 one-time', '—'],
                          ['Onboarding (2 months lost productivity)', '$21,667', '$8,667'],
                          ['Hardware & Tools', '$4,000', '—'],
                          ['Total Year 1 Cost', '$218,067', '$60,667'],
                          ['Total Year 2+ Cost', '$170,400', '$52,000'],
                        ].map(([component, fte, aug], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                            <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.7)' }}>{component}</td>
                            <td style={{ padding: '10px 12px', color: 'rgba(255,255,255,0.6)', textAlign: 'right' }}>{fte}</td>
                            <td style={{ padding: '10px 12px', color: '#22c55e', textAlign: 'right', fontWeight: 600 }}>{aug}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ marginTop: 20, padding: '16px 20px', background: 'rgba(34,197,94,0.08)', borderRadius: 12, borderLeft: '3px solid #22c55e' }}>
                    <p style={{ margin: 0, color: '#22c55e', fontWeight: 700, fontSize: 15 }}>
                      Year 1 ROI: (218,067 − 60,667) ÷ 60,667 × 100 = <strong>259% ROI</strong>
                    </p>
                    <p style={{ margin: '4px 0 0', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                      Even factoring in 20% productivity discount for remote coordination, staff aug delivers 2-3× cost advantage in Year 1 vs a US FTE hire.
                    </p>
                  </div>
                </div>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 48 }}>
                  {[
                    { label: 'Break-even point vs FTE', value: '~3 months', note: 'After recruiting fees and onboarding amortize' },
                    { label: 'Avg Year 1 savings', value: '55–70%', note: 'vs equivalent US or Canadian FTE hire' },
                    { label: 'Productivity ramp time', value: '2–4 weeks', note: 'For senior augmented engineer vs 2-3 months for FTE' },
                  ].map((stat, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                      <div style={{ fontSize: 28, fontWeight: 900, color: '#22c55e', marginBottom: 6 }}>{stat.value}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{stat.label}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{stat.note}</div>
                    </div>
                  ))}
                </div>

                {/* Codazz Staff Aug Offering */}
                <h2 id="codazz-offering" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Staff Augmentation with Codazz</h2>
                <p className="reveal" style={{ marginBottom: 32, color: 'rgba(255,255,255,0.5)' }}>
                  We&apos;ve been augmenting product teams since 2018. Here is exactly how our engagement model works.
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                  {[
                    { icon: '⚡', title: '2-Week Start', desc: 'After a 1-hour skill-fit call, we deploy matched engineers within 10 business days. No 3-month procurement cycles.' },
                    { icon: '🎯', title: 'Skill-Matched', desc: 'We match by specific tech stack, seniority level, and domain (fintech, healthtech, SaaS) — not just "full-stack developer".' },
                    { icon: '📋', title: 'IP Fully Assigned', desc: 'Every engineer signs an IP assignment agreement before day one. All code written is 100% owned by your company.' },
                    { icon: '🔄', title: 'Free Replacement', desc: 'If the engineer is not a fit within 2 weeks, we replace at no extra cost. No questions, no friction.' },
                    { icon: '📊', title: 'Daily Standups', desc: 'Our engineers attend your daily standups, use your Jira/Linear, and communicate in your Slack. Fully integrated, not a vendor silo.' },
                    { icon: '🛡️', title: 'NDA & Security', desc: 'All engineers sign your NDA and undergo background verification. Secure dev environments, VPN access on request.' },
                  ].map((item, i) => (
                    <div key={i} className="reveal card-hover" style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 24,
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                      <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 28, marginBottom: 48, border: '1px solid rgba(34,197,94,0.15)' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#22c55e', marginBottom: 16 }}>Our Augmentation Stack</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {['React / Next.js', 'React Native', 'Flutter', 'Node.js', 'Python / Django', 'Go', 'TypeScript', 'AWS / GCP / Azure', 'Kubernetes', 'PostgreSQL', 'Solidity / Web3', 'LLM / AI/ML', 'iOS (Swift)', 'Android (Kotlin)', 'DevOps / CI/CD'].map((skill, i) => (
                      <span key={i} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                    {[
                      { label: 'Rate Range', value: '$35–$75/hr' },
                      { label: 'Minimum Engagement', value: '3 months' },
                      { label: 'Team Size', value: '1–15 engineers' },
                      { label: 'Time Zones', value: 'IST / EST / PST overlap' },
                    ].map((item, i) => (
                      <div key={i} style={{ padding: '10px 14px', background: 'rgba(0,0,0,0.2)', borderRadius: 10 }}>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 15, color: '#fff', fontWeight: 700 }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'What is the difference between staff augmentation and outsourcing?', a: 'Staff augmentation adds external engineers directly to your team, under your management, using your processes. You direct their daily work just like full-time employees. Outsourcing delegates an entire project or function to an external vendor who manages the team, sets the process, and delivers results. The key distinction is control: staff aug gives you direct control, outsourcing gives the vendor operational control.' },
                  { q: 'How long do staff augmentation engagements typically last?', a: 'Short-term augmentation (project-specific): 2-6 months. Medium-term (ongoing capacity): 6-18 months. Long-term dedicated augmentation: 18 months to 3+ years. The longer the engagement, the more cost-effective it becomes as onboarding costs amortize and the engineer builds product knowledge. Most agencies offer monthly rolling contracts with 30-day notice periods.' },
                  { q: 'How do I manage quality when the engineer is technically employed by an agency?', a: 'Quality management falls on you in staff augmentation. The agency places the engineer; your tech lead manages their output. Use the same quality gates you use for full-time staff: PR reviews, code coverage requirements, architecture review for major features. If quality is consistently poor after clear feedback and a performance improvement plan, escalate to the agency to replace the engineer.' },
                  { q: 'Can augmented staff become full-time employees?', a: 'Yes, but most agencies have a conversion clause in their contract requiring you to pay a placement fee (typically 10-20% of first-year salary) if you hire their engineer directly. Read the contract carefully. If you anticipate wanting to convert, negotiate a conversion fee cap or elimination upfront before signing.' },
                  { q: 'Is staff augmentation right for a startup with no senior engineers?', a: 'Usually not as a primary model. Staff augmentation requires internal senior engineers to manage, review, and integrate the augmented resource effectively. A startup with no tech lead should consider a managed team or outsourcing model where the vendor provides both the engineers and the technical leadership. Staff aug added to a leaderless team often creates more chaos than it solves.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* Final CTA */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,30,0.3) 100%)',
                  borderRadius: 28, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Augment Your Dev Team?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
                    Tell us the skill gap. We will match you with a pre-vetted senior engineer from our Chandigarh team within 3-7 days. IP assigned, NDA signed, quality guaranteed.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: accentColor, color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none', transition: 'transform 0.2s',
                  }}>
                    Get Staff Augmentation Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', fontSize: 14,
                          color: activeSection === section.id ? accentColor : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? `2px solid ${accentColor}` : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          display: 'block', padding: 16, background: 'rgba(255,255,255,0.03)',
                          borderRadius: 12, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.2s',
                        }}>
                          <span style={{ fontSize: 11, color: accentColor, fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
