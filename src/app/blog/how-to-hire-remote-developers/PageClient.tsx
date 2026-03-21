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
  { id: 'where-to-find', label: 'Where to Find Remote Devs', emoji: '🔍' },
  { id: 'vetting-process', label: 'Vetting & Technical Screening', emoji: '🧪' },
  { id: 'interview-questions', label: 'Interview Questions by Role', emoji: '🗣️' },
  { id: 'timezone-management', label: 'Time Zone Management', emoji: '🌍' },
  { id: 'contracts-ip', label: 'Contracts & IP Protection', emoji: '📝' },
  { id: 'onboarding', label: 'Onboarding Remote Engineers', emoji: '🚀' },
  { id: 'managing-teams', label: 'Managing Distributed Teams', emoji: '👥' },
  { id: 'cost-comparison', label: 'Cost by Country', emoji: '💰' },
  { id: 'fte-vs-contractor', label: 'FTE vs Contractor vs Agency', emoji: '📊' },
  { id: 'red-flags', label: 'Red Flags to Watch', emoji: '🚩' },
  { id: 'build-with-codazz', label: 'Hire via Codazz', emoji: '🏢' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'in-house-vs-outsourcing-development', title: 'In-House vs Outsourcing Development 2026', category: 'Business', readTime: '20 min' },
  { slug: 'staff-augmentation-guide-2026', title: 'Staff Augmentation Guide 2026', category: 'Business', readTime: '18 min' },
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

export default function HireRemoteDevelopersClient() {
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
              }}>Hiring</span>
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
              How to Hire Remote Developers in 2026: Complete Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Where to find vetted remote engineers, how to screen for real skills, protect your IP, manage across time zones, and build a distributed team that actually ships.
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
                    The remote developer market has never been larger — or more competitive. In 2026, you can hire world-class engineers from Bangalore, Warsaw, or Buenos Aires in days. You can also make expensive mistakes that cost you months and hundreds of thousands of dollars.
                  </p>
                  <p>
                    <strong style={{ color: '#ffffff' }}>This guide is for founders, CTOs, and hiring managers who want to hire remote engineers the right way</strong> — with a rigorous vetting process, iron-clad contracts, and the operational infrastructure to make distributed teams succeed.
                  </p>
                  <p>
                    At Codazz, we operate development teams across Edmonton (Canada) and Chandigarh (India). We have hired, vetted, onboarded, and managed hundreds of remote engineers. Here is everything we know.
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
                      <strong style={{ color: '#ffffff' }}>Toptal and direct sourcing beat Upwork for senior talent</strong> — Upwork is best for short-term tasks; for senior engineers you need curated platforms or direct LinkedIn outreach.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Always run a paid trial project before full engagement</strong> — 2-week paid trials reveal collaboration quality, communication style, and code quality far better than any interview.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Overlapping hours matter more than same time zone</strong> — 4 hours of daily overlap is sufficient for async-first teams that use strong written communication.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>IP assignment must be explicit in the contract</strong> — NDAs alone are insufficient. Every contract needs an IP assignment clause transferring all work product to your company.
                    </li>
                    <li style={{ color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Senior India developers cost $25-$55/hr</strong> — equivalent skill level to $80-$130/hr in North America, with comparable or better output quality when properly managed.
                    </li>
                  </ul>
                </div>

                {/* WHERE TO FIND */}
                <h2 id="where-to-find" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Where to Find Remote Developers in 2026</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Each platform serves a different hiring need. Using the wrong channel for your use case wastes weeks and thousands of dollars.
                </p>

                {[
                  {
                    platform: 'Toptal',
                    bestFor: 'Senior specialists, complex projects',
                    cost: '$80-$200/hr',
                    timeToHire: '1-2 weeks',
                    notes: 'Claims top 3% of applicants. Pre-vetted through rigorous screening. Higher cost but dramatically faster hiring for senior roles. Best for US/European companies wanting English-fluent seniors.',
                  },
                  {
                    platform: 'Upwork',
                    bestFor: 'Mid-level, short-term, freelance tasks',
                    cost: '$20-$80/hr',
                    timeToHire: '3-7 days',
                    notes: 'Large talent pool but extremely variable quality. Best for well-defined, time-boxed tasks. Requires more vetting effort on your side. Not ideal for long-term full-time roles.',
                  },
                  {
                    platform: 'LinkedIn',
                    bestFor: 'Direct hire, full-time remote roles',
                    cost: 'Salary negotiation',
                    timeToHire: '4-8 weeks',
                    notes: 'Best for building a long-term remote team. Requires active outreach and your own interview process. LinkedIn Recruiter is expensive but effective for senior searches.',
                  },
                  {
                    platform: 'Arc.dev',
                    bestFor: 'Pre-vetted senior remote engineers',
                    cost: '$60-$150/hr',
                    timeToHire: '1-2 weeks',
                    notes: 'Focused on senior full-time remote developers. Has a rigorous vetting process similar to Toptal but at slightly lower rates. Strong for React, Node.js, Python, and mobile.',
                  },
                  {
                    platform: 'Turing.com',
                    bestFor: 'AI-matched senior developers',
                    cost: '$40-$100/hr',
                    timeToHire: '1-3 weeks',
                    notes: 'Specializes in matching remote developers using AI. Strong Latin America and India talent pools. Good for US companies wanting vetted engineers with US business hours overlap.',
                  },
                  {
                    platform: 'Codazz (Direct)',
                    bestFor: 'Managed remote teams, dedicated engineers',
                    cost: '$35-$75/hr',
                    timeToHire: '3-7 days',
                    notes: 'We match you with pre-vetted senior engineers from our Chandigarh team. Full IP assignment, NDA, dedicated resources. Best for startups and scale-ups that want managed quality without the markup of Toptal.',
                  },
                ].map((row, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{row.platform}</h3>
                        <span style={{ fontSize: 12, color: accentColor, fontWeight: 600 }}>{row.bestFor}</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: 14, color: '#ffffff', margin: '0 0 2px', fontWeight: 600 }}>{row.cost}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{row.timeToHire} to hire</p>
                      </div>
                    </div>
                    <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{row.notes}</p>
                  </div>
                ))}

                <CodazzCallout>
                  Our recommendation: use <strong>Toptal or Arc.dev</strong> for one-off senior specialist roles, <strong>LinkedIn</strong> for building a full-time remote team, and a <strong>managed partner like Codazz</strong> for dedicated development teams. Never use Upwork alone for core product development — the vetting overhead is too high.
                </CodazzCallout>

                {/* VETTING PROCESS */}
                <h2 id="vetting-process" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>The Vetting Process: How to Screen Remote Developers</h2>
                <p className="reveal" style={{ marginBottom: 32, color: 'rgba(255,255,255,0.5)' }}>
                  A 4-stage process filters out 90% of unsuitable candidates and surfaces engineers who will actually deliver.
                </p>

                {[
                  {
                    stage: 'Stage 1',
                    title: 'Async Profile Review (15 min)',
                    color: accentColor,
                    items: [
                      'GitHub profile: check for real project contributions, not just forks. Look at commit frequency, code quality in open PRs, documentation habits.',
                      'Portfolio: are projects deployed and working? A live project beats 10 listed side projects.',
                      'LinkedIn: tenure at past companies. Job-hopping every 6 months is a warning sign for remote roles.',
                      'English writing quality in their application message — remote work is 80% written communication.',
                    ],
                  },
                  {
                    stage: 'Stage 2',
                    title: 'Technical Screening Call (45 min)',
                    color: '#61dafb',
                    items: [
                      'Architecture discussion: ask them to walk through how they would architect a system relevant to your domain. Listen for trade-off thinking, not just buzzwords.',
                      'Past project deep-dive: pick one project from their portfolio and go deep. Ask about specific decisions they made, problems they encountered, and how they solved them.',
                      'Communication assessment: can they explain complex concepts clearly? Are they comfortable asking clarifying questions?',
                      'Remote work experience: how long have they worked remotely? What tools do they use? How do they manage their day?',
                    ],
                  },
                  {
                    stage: 'Stage 3',
                    title: 'Technical Assessment (4-6 hrs, paid)',
                    color: '#ffc864',
                    items: [
                      'Use a realistic problem from your actual domain, not generic LeetCode puzzles. A take-home assignment that mirrors real work reveals far more.',
                      'Pay for their time ($100-$300 for senior engineers). This signals respect and attracts serious candidates.',
                      'Evaluate code quality, not just correctness: is it readable? Well-tested? Would you want to maintain this code?',
                      'Look at their git history if they submit via repository — commit messages, branching, incremental commits all reveal working style.',
                    ],
                  },
                  {
                    stage: 'Stage 4',
                    title: '2-Week Paid Trial Project',
                    color: '#a78bfa',
                    items: [
                      'The most predictive signal you can get. Assign a real but scoped piece of work — a small feature, refactor, or integration.',
                      'Evaluate: do they ask good questions upfront? Do they communicate blockers proactively? Is the code production-ready?',
                      'Observe async communication quality: are their Slack/email updates clear, concise, and timely?',
                      'Assess timezone management: do they show up to agreed meetings? Are they responsive during overlap hours?',
                    ],
                  },
                ].map((stage, i) => (
                  <div key={i} className="reveal" style={{
                    marginBottom: 28, paddingLeft: 24,
                    borderLeft: `3px solid ${stage.color}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: stage.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stage.stage}</span>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{stage.title}</h3>
                    </div>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      {stage.items.map((item, j) => (
                        <li key={j} style={{ marginBottom: 10, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* INTERVIEW QUESTIONS BY ROLE */}
                <h2 id="interview-questions" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Interview Questions by Role</h2>
                <p className="reveal" style={{ marginBottom: 32, color: 'rgba(255,255,255,0.5)' }}>
                  Use these during the Stage 2 screening call. They go deeper than stack-specific trivia — they surface architectural thinking, communication style, and real-world problem-solving ability.
                </p>

                {([
                  {
                    role: 'Frontend (React / Next.js)',
                    color: '#61dafb',
                    questions: [
                      'Walk me through how you decide whether state belongs in a component, a context, or a global store like Zustand or Redux.',
                      'How do you approach performance optimization when a page becomes slow? What metrics do you look at first — LCP, FID, CLS?',
                      'Describe your CSS architecture strategy on a team project. How do you prevent style conflicts and maintain consistency?',
                      'What is your strategy for accessibility (a11y)? Give a specific example where you identified and fixed an issue.',
                      'How do you handle hydration mismatches in Next.js and what are the most common root causes?',
                    ],
                  },
                  {
                    role: 'Backend (Node.js / Python / Go)',
                    color: '#ffc864',
                    questions: [
                      'Describe your approach to designing a RESTful API that needs to scale to 10M requests per day. Where do the bottlenecks usually appear first?',
                      'How do you handle database migrations in a live production environment with zero downtime?',
                      'Walk me through how you would design authentication and authorization for a multi-tenant SaaS application.',
                      'What is your strategy for secret management across dev, staging, and production environments?',
                      'Describe the last time you profiled and optimized a slow database query. What tools did you use and what did you find?',
                    ],
                  },
                  {
                    role: 'Mobile (React Native / Flutter)',
                    color: '#a78bfa',
                    questions: [
                      'How do you decide between React Native and Flutter for a new project? What factors matter most?',
                      'Describe your approach to offline-first architecture in a mobile app — how do you handle sync conflicts?',
                      'How do you manage app performance on low-end Android devices with limited RAM?',
                      'Walk me through your testing strategy: what do you unit test, what do you integration test, and what do you test end-to-end?',
                      'What is your experience with App Store and Google Play submission processes, certificate management, and over-the-air updates?',
                    ],
                  },
                  {
                    role: 'DevOps / Platform Engineering',
                    color: accentColor,
                    questions: [
                      'Walk me through a CI/CD pipeline you designed from scratch. What would you do differently today?',
                      'How do you approach infrastructure-as-code? Terraform, Pulumi, CDK — how do you choose between them?',
                      'Describe how you have handled a production incident. What was your runbook? What did the postmortem reveal?',
                      'How do you approach cloud cost optimization without sacrificing reliability or performance SLAs?',
                      'What is your philosophy on observability? How do you decide what to log, trace, and alert on versus what to ignore?',
                    ],
                  },
                ] as { role: string; color: string; questions: string[] }[]).map((section, si) => (
                  <div key={si} className="reveal" style={{
                    marginBottom: 28, borderRadius: 28, overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      background: `${section.color}12`, padding: '16px 24px',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: section.color, margin: 0 }}>{section.role}</h3>
                    </div>
                    <div style={{ padding: '20px 24px' }}>
                      <ol style={{ paddingLeft: 20, margin: 0 }}>
                        {section.questions.map((q, qi) => (
                          <li key={qi} style={{ marginBottom: 12, color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.65 }}>
                            {q}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}

                {/* TIMEZONE MANAGEMENT */}
                <h2 id="timezone-management" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Time Zone Management: Making Async Teams Work</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Time zones are not the problem. Poor communication systems are. Here is how to build a remote team that ships regardless of where they sleep.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Location</th>
                        <th style={thStyle}>Time Zone</th>
                        <th style={thStyle}>Overlap with EST</th>
                        <th style={thStyle}>Overlap with PST</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['India (Chandigarh)', 'IST (UTC+5:30)', '9:30am-1:30pm EST', '12:30am-4:30am PST (shift required)'],
                        ['Poland / Romania', 'CET (UTC+1)', '3pm-7pm EST', '12pm-4pm PST'],
                        ['Argentina / Colombia', 'ART/COT (UTC-3/-5)', '9am-5pm EST (excellent)', '6am-2pm PST'],
                        ['Mexico City', 'CST (UTC-6)', '8am-6pm EST', '5am-3pm PST'],
                        ['Philippines', 'PHT (UTC+8)', '8pm-12am EST', '5pm-9pm PST'],
                        ['Ukraine', 'EET (UTC+2)', '2pm-6pm EST', '11am-3pm PST'],
                      ] as string[][]).map((row, i) => (
                        <tr key={i} style={rowBorder}>
                          <td style={{ ...tdStyle, color: '#ffffff', fontWeight: 600 }}>{row[0]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.7)' }}>{row[1]}</td>
                          <td style={{ ...tdStyle, color: accentColor }}>{row[2]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.6)' }}>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>The Golden Overlap Protocol</h3>
                  <p style={{ marginBottom: 16 }}>Schedule 3-4 hours of daily overlap as your collaboration window. Use this time for:</p>
                  <ul style={{ paddingLeft: 20 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Standup (15 min):</strong> What did you ship yesterday? What is blocking you today? What will you ship today?</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Code reviews:</strong> Real-time feedback on pull requests prevents async review delays from becoming blockers.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Design/architecture decisions:</strong> Anything requiring back-and-forth should happen in overlap hours, not async threads.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Unblocking sessions:</strong> Reserve 30 min for anyone who hits a blocker and needs a quick call to get unstuck.</li>
                  </ul>
                  <p style={{ marginTop: 16 }}>Outside overlap hours, the team works with full focus. Use <strong style={{ color: '#ffffff' }}>Loom</strong> for async video updates, <strong style={{ color: '#ffffff' }}>Linear or Jira</strong> for task management, and <strong style={{ color: '#ffffff' }}>Notion</strong> for documentation so nothing is lost between time zones.</p>
                </div>

                <CodazzCallout>
                  Our India team shifts their schedule to overlap with North American mornings (8am-1pm EST). This gives our Canadian and US clients 5 hours of real-time access every day. The remaining hours are used for uninterrupted development — often producing more output than a typical 9-5 office environment.
                </CodazzCallout>

                {/* CONTRACTS & IP */}
                <h2 id="contracts-ip" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Contracts & IP Protection for Remote Hires</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Getting IP wrong is a startup-ending mistake. Here is the minimum legal infrastructure you need before any remote developer writes their first line of code.
                </p>

                {[
                  { title: 'IP Assignment Agreement', critical: true, details: 'All code, designs, documentation, and work product created during the engagement is explicitly assigned to your company. This is separate from and more important than an NDA. Without this clause, the developer may retain rights to code they wrote. Ensure the agreement covers work done on their personal devices and outside normal working hours if they are using your time.' },
                  { title: 'Non-Disclosure Agreement (NDA)', critical: true, details: 'Covers your trade secrets, business plans, customer data, and proprietary methodologies. Should include both technical and business information. Require the developer to sign before any discovery call where you share product details.' },
                  { title: 'Non-Compete / Non-Solicitation', critical: false, details: 'A non-compete preventing them from working for direct competitors during and for 6-12 months after engagement. A non-solicitation clause preventing them from poaching your employees or clients. Enforceability varies by country — consult local legal counsel for international hires.' },
                  { title: 'Scope of Work / Statement of Work', critical: true, details: 'Defines deliverables, timelines, payment terms, acceptance criteria, and revision process. Ambiguous SOWs are the most common cause of contractor disputes. Be specific about what done means.' },
                  { title: 'Data Processing Agreement (if handling user data)', critical: false, details: 'Required under GDPR (EU users), PIPEDA (Canadian users), and CCPA (California users). Specifies how the contractor handles, stores, and protects personal data. Essential for any product touching user information.' },
                ].map((item, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, marginBottom: 16,
                    border: `1px solid ${item.critical ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.title}</h3>
                      {item.critical && (
                        <span style={{ fontSize: 10, fontWeight: 700, color: accentColor, background: 'rgba(34,197,94,0.12)', padding: '2px 8px', borderRadius: 100, letterSpacing: '0.1em' }}>REQUIRED</span>
                      )}
                    </div>
                    <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>{item.details}</p>
                  </div>
                ))}

                {/* ONBOARDING */}
                <h2 id="onboarding" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Onboarding Remote Engineers: The First 30 Days</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Most remote hires fail not because of skill gaps, but because of poor onboarding. The first 30 days set the tone for the entire engagement.
                </p>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  {[
                    { phase: 'Days 1-3: Access & Orientation', items: ['Provision all accounts: GitHub org, Jira/Linear, Slack, Notion, staging environment. Everything ready before day one.', 'Record a 20-minute Loom walkthrough of the codebase architecture — saves hours of questions.', 'Assign an onboarding buddy (senior dev) who is explicitly responsible for answering questions that week.', 'Schedule a 1-on-1 with the CTO/tech lead to discuss role expectations, communication norms, and definition of quality.'] },
                    { phase: 'Days 4-14: First Contribution', items: ['Assign a good first issue — a real but low-risk task. Not a tutorial, not documentation. A real feature or bug fix.', 'Do not micromanage the approach. Let them choose their implementation path and review the result.', 'Conduct a thorough code review on their first PR — this sets the quality bar for everything that follows.', 'Weekly 1-on-1 to surface any confusion, friction, or blockers before they become problems.'] },
                    { phase: 'Days 15-30: Integration', items: ['They should now be owning a real sprint task with minimal hand-holding.', '30-day retrospective: What is working? What is confusing? What documentation is missing?', 'Evaluate communication quality, code quality, and cultural alignment before extending or formalizing the engagement.', 'Introduce them to the broader team if applicable — video calls build rapport that async tools cannot replicate.'] },
                  ].map((phase, i) => (
                    <div key={i} style={{ marginBottom: 32 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: accentColor, marginBottom: 12 }}>{phase.phase}</h3>
                      <ul style={{ paddingLeft: 20, margin: 0 }}>
                        {phase.items.map((item, j) => (
                          <li key={j} style={{ marginBottom: 10, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* MANAGING TEAMS */}
                <h2 id="managing-teams" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Managing Distributed Teams at Scale</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  The operational stack for a high-performing distributed team is not complicated. The discipline to follow it is.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Category</th>
                        <th style={thStyle}>Tool</th>
                        <th style={thStyle}>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['Communication', 'Slack + Loom', 'Real-time chat + async video updates'],
                        ['Project Management', 'Linear or Jira', 'Sprint planning, issue tracking, velocity'],
                        ['Documentation', 'Notion', 'Architecture, processes, decisions (ADRs)'],
                        ['Code Review', 'GitHub PRs', 'Every feature in a PR, linked to ticket'],
                        ['Design', 'Figma', 'Shared design system, dev-ready specs'],
                        ['Monitoring', 'Sentry + Datadog', 'Error tracking, performance visibility'],
                        ['Meetings', 'Google Meet / Zoom', 'Daily standup, weekly planning, retros'],
                        ['Time Tracking', 'Harvest or Toggl', 'Contractor billing, capacity planning'],
                      ] as string[][]).map((row, i) => (
                        <tr key={i} style={rowBorder}>
                          <td style={{ ...tdStyle, color: '#ffffff', fontWeight: 600 }}>{row[0]}</td>
                          <td style={{ ...tdStyle, color: accentColor }}>{row[1]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.7)' }}>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>The Weekly Rhythm That Works</h3>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Monday:</strong> Sprint planning / kickoff. Assign tickets, clarify requirements, unblock dependencies before development starts.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Daily:</strong> 15-min async standup in Slack (written). Reserve live standup for blockers only.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Wednesday:</strong> Mid-sprint check — is the team on track? Any scope creep or technical blockers emerging?</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Friday:</strong> Sprint review + retrospective. Demo what shipped. What slowed the team down? What should we do differently next week?</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Monthly:</strong> 1-on-1 with every remote developer. Career goals, feedback, any friction in the working relationship.</li>
                  </ul>
                </div>

                {/* COST COMPARISON */}
                <h2 id="cost-comparison" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Remote Developer Costs by Country (2026)</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Rates for senior software engineers (5+ years experience) as of Q1 2026.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Country / Region</th>
                        <th style={thStyle}>Hourly Rate (Senior)</th>
                        <th style={thStyle}>Annual Cost</th>
                        <th style={thStyle}>vs. US Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['USA (San Francisco)', '$130-$200/hr', '$270K-$400K', 'Baseline'],
                        ['USA (Mid-market cities)', '$100-$150/hr', '$208K-$312K', '−20%'],
                        ['Canada', '$80-$130/hr', '$166K-$270K', '−35%'],
                        ['Western Europe (UK, Germany)', '$80-$130/hr', '$166K-$270K', '−35%'],
                        ['Eastern Europe (Poland, Romania)', '$40-$80/hr', '$83K-$166K', '−55%'],
                        ['Latin America (Argentina, Colombia)', '$35-$65/hr', '$73K-$135K', '−60%'],
                        ['India', '$25-$55/hr', '$52K-$114K', '−70%'],
                        ['Philippines', '$20-$40/hr', '$42K-$83K', '−75%'],
                      ] as string[][]).map((row, i) => (
                        <tr key={i} style={rowBorder}>
                          <td style={{ ...tdStyle, color: '#ffffff', fontWeight: 600 }}>{row[0]}</td>
                          <td style={{ ...tdStyle, color: accentColor }}>{row[1]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.8)' }}>{row[2]}</td>
                          <td style={{ ...tdStyle, color: i === 0 ? 'rgba(255,255,255,0.4)' : '#22c55e' }}>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <CodazzCallout>
                  These are contractor/freelance rates. For a managed team (like Codazz), rates include project management overhead, QA, and guaranteed replacement if a developer underperforms. A $45/hr managed engineer often delivers more value than a $60/hr freelancer you manage yourself — because you save 5-10 hours per week of your own management time.
                </CodazzCallout>

                {/* FTE vs CONTRACTOR vs AGENCY */}
                <h2 id="fte-vs-contractor" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>FTE vs Contractor vs Outsourced Agency: Real Cost Comparison</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  The rate on the invoice is not the real cost. Here is the fully-loaded annual cost of a single mid-level software engineer across all three engagement models, for a North American company.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={{ ...thStyle, width: '28%' }}>Cost Category</th>
                        <th style={{ ...thStyle, width: '24%', color: '#61dafb' }}>Full-Time Employee</th>
                        <th style={{ ...thStyle, width: '24%', color: '#ffc864' }}>Independent Contractor</th>
                        <th style={{ ...thStyle, width: '24%', color: accentColor }}>Agency (e.g. Codazz)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['Base Compensation', '$110K–$160K salary', '$70–$100/hr (annualized $146K–$208K)', '$35–$60/hr (annualized $73K–$125K)'],
                        ['Benefits (health, dental, RRSP/401k)', '$22K–$40K/yr', '$0 — self-funded', 'Included in rate'],
                        ['Payroll Taxes (employer side)', '$15K–$22K/yr', '$0', 'Included in rate'],
                        ['Recruiting / Placement Cost', '$15K–$30K one-time', '$5K–$10K (platform fees)', '$0 — agency handles'],
                        ['Equipment / Software Licenses', '$3K–$8K/yr', '$0 — contractor\'s own', 'Included in rate'],
                        ['Management Overhead (your PM time)', '$20K–$40K/yr', '$10K–$20K/yr', '$0–$10K (PM included)'],
                        ['Office / Facilities', '$8K–$20K/yr', '$0', '$0'],
                        ['Training / Professional Development', '$3K–$8K/yr', '$0', 'Included'],
                        ['Total Fully-Loaded Annual Cost', '$196K–$328K', '$161K–$248K', '$73K–$135K'],
                        ['Flexibility', 'Low — notice periods apply', 'Medium — 2-4 week wind-down', 'High — flex scope and headcount'],
                        ['IP Risk', 'Low — employment agreement', 'Medium — requires solid contracts', 'Low — agency provides contracts'],
                        ['Time to First Commit', '2-4 months (recruiting)', '2-4 weeks (vetting + onboard)', '1-2 weeks (pre-vetted)'],
                      ] as string[][]).map((row, i) => (
                        <tr key={i} style={{ ...rowBorder, background: i === 8 ? 'rgba(34,197,94,0.05)' : 'transparent' }}>
                          <td style={{ ...tdStyle, color: i === 8 ? '#ffffff' : 'rgba(255,255,255,0.8)', fontWeight: i === 8 ? 700 : 500 }}>{row[0]}</td>
                          <td style={{ ...tdStyle, color: i === 8 ? '#61dafb' : 'rgba(255,255,255,0.65)', fontWeight: i === 8 ? 700 : 400 }}>{row[1]}</td>
                          <td style={{ ...tdStyle, color: i === 8 ? '#ffc864' : 'rgba(255,255,255,0.65)', fontWeight: i === 8 ? 700 : 400 }}>{row[2]}</td>
                          <td style={{ ...tdStyle, color: i === 8 ? accentColor : 'rgba(255,255,255,0.75)', fontWeight: i === 8 ? 700 : 400 }}>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 40,
                }}>
                  {[
                    { label: 'Use FTE when', color: '#61dafb', items: ['The role is core to your long-term product strategy', 'You need deep institutional knowledge over years', 'You have HR infrastructure and can onboard properly', 'Post-Series B with stable headcount budget'] },
                    { label: 'Use Contractor when', color: '#ffc864', items: ['Project is defined with clear scope and endpoint', 'Specialized skill needed for a limited time window', 'Your team can handle the management and vetting', 'You have budget flexibility and timeline tolerance'] },
                    { label: 'Use Agency when', color: accentColor, items: ['You need a full team deployed fast', 'You lack a technical recruiter or CTO to vet engineers', 'You want accountability, PM, and QA included', 'Cost efficiency is the priority — typically 55-65% cheaper than FTE'] },
                  ].map((col, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20,
                      border: `1px solid ${col.color}20`,
                    }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: col.color, marginBottom: 12 }}>{col.label}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {col.items.map((item, ii) => (
                          <li key={ii} style={{ marginBottom: 8, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14 }}>
                            <span style={{ color: col.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* RED FLAGS */}
                <h2 id="red-flags" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Red Flags When Hiring Remote Developers</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Ignore these signals and you will spend 3 months and $50K+ learning them the hard way.
                </p>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  {[
                    { flag: 'Vague answers to "tell me about a challenging problem you solved"', why: 'Senior engineers always have war stories. If they cannot articulate a specific technical challenge with detail, they either have not actually done the work or lack self-awareness.' },
                    { flag: 'Reluctance to do a paid trial project', why: 'Confident engineers welcome the chance to prove their skill. Hesitation usually means they know they cannot deliver under scrutiny.' },
                    { flag: 'No questions about your product or codebase', why: 'Engineers who do not ask about your tech stack, team structure, or product problems are not engaged. They are just selling.' },
                    { flag: 'Portfolio projects that are not deployed or are broken', why: 'In-progress projects that never ship are a preview of their performance on your project.' },
                    { flag: 'Communication that takes 24+ hours during working hours', why: 'If they are slow during the interview process, they will be slow when you need them to fix a production issue at 2am.' },
                    { flag: 'Resistance to IP assignment or NDAs', why: 'Any professional contractor expects to sign IP assignment agreements. Resistance suggests they plan to reuse your code in other projects.' },
                    { flag: 'No version control history or poor commit hygiene', why: 'Developers who do not use git properly cannot collaborate on a team codebase effectively.' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <span style={{ fontSize: 12 }}>🚩</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.flag}</p>
                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.why}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BUILD WITH CODAZZ */}
                <div id="build-with-codazz" className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,30,0.3) 100%)',
                  borderRadius: 28, padding: 'clamp(24px, 4vw, 40px)', marginTop: 64,
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Skip the Vetting Nightmare — Hire via Codazz
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, lineHeight: 1.7, maxWidth: 600 }}>
                    Our Chandigarh team has been pre-vetted through the exact 4-stage process described above. Every engineer comes with IP assignment, NDA, and a quality guarantee. If they are not the right fit, we replace them within 2 weeks at no cost to you.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      { value: '3-7 days', label: 'Time to First Developer' },
                      { value: '100%', label: 'IP Assignment Guaranteed' },
                      { value: '4-6hr', label: 'Daily EST Overlap' },
                      { value: '2 weeks', label: 'Free Replacement SLA' },
                    ].map((stat) => (
                      <div key={stat.value} style={{ textAlign: 'center', background: 'rgba(0,0,0,0.3)', borderRadius: 16, padding: 16 }}>
                        <p style={{ fontSize: 28, fontWeight: 800, color: accentColor, margin: 0 }}>{stat.value}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <Link href="/dedicated-development-team" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: accentColor, color: '#000000',
                      padding: '14px 28px', borderRadius: 8,
                      fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'transform 0.2s',
                    }}>
                      Explore Dedicated Team Model
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/contact" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'rgba(255,255,255,0.08)', color: '#ffffff',
                      padding: '14px 28px', borderRadius: 8,
                      fontWeight: 600, fontSize: 15, textDecoration: 'none',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}>
                      Get Free Consultation
                    </Link>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How long does it take to hire a remote developer?', a: 'Through platforms like Toptal or Arc.dev, expect 1-2 weeks for pre-vetted candidates. LinkedIn direct hiring takes 4-8 weeks including interviews and notice periods. Through a managed partner like Codazz, you can have a developer onboarded and contributing within 3-7 business days. Factor in 2 additional weeks for the trial project before making a long-term commitment.' },
                  { q: 'Is it safe to hire remote developers from India or Eastern Europe?', a: 'Absolutely — with the right contracts in place. Both regions have deep engineering talent pools with world-class developers who have worked for US and European companies for decades. India in particular produces over 1.5 million engineering graduates per year. The key is the contract: IP assignment, NDA, and a well-defined statement of work eliminate most risk.' },
                  { q: 'Should I hire freelancers or use a development agency?', a: 'Freelancers offer more control and are cheaper for well-defined, short-term tasks. Agencies (like Codazz) are better for ongoing development, team scalability, and when you cannot afford to manage the vetting, HR, and project management overhead yourself. The crossover point is usually around 3+ developers — at that point, a managed team becomes more cost-effective than hiring individual freelancers.' },
                  { q: 'How do I manage performance of remote developers?', a: 'Output-based metrics are more reliable than hours-tracked: story points shipped, PR quality, bug rate, code review participation. Weekly 1-on-1s catch performance issues early. The 30-day onboarding review is your first formal checkpoint. If performance is still poor at 60 days after active feedback, replace — do not let a poor fit drag on for months.' },
                  { q: 'What is the best way to onboard a remote developer quickly?', a: 'Three things accelerate remote onboarding dramatically: (1) Pre-provision all access before day one — nothing kills momentum like waiting for Jira access on day three. (2) Create a recorded codebase walkthrough (20-30 min Loom video) that answers how is this system structured and why. (3) Assign an onboarding buddy who owns making the new hire productive, not just answering questions when asked.' },
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
                    Ready to Hire Your First Remote Developer?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
                    We will match you with a pre-vetted senior engineer from our Chandigarh team. 3-7 days to your first commit, full IP protection, 2-week free replacement guarantee.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: accentColor, color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none', transition: 'transform 0.2s',
                  }}>
                    Start Hiring Remote Developers
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
