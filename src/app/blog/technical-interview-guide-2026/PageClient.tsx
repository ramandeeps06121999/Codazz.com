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
  { id: 'problem-with-interviews', label: 'The Problem with Tech Interviews', emoji: '⚠️' },
  { id: 'process-design', label: 'Interview Process Design', emoji: '🗺️' },
  { id: 'coding-platforms', label: 'Coding Challenge Platforms', emoji: '💻' },
  { id: 'live-coding-vs-takehome', label: 'Live Coding vs Take-Home', emoji: '⚡' },
  { id: 'system-design', label: 'System Design Interviews', emoji: '🏗️' },
  { id: 'behavioral-interviews', label: 'Behavioral Interviews (STAR)', emoji: '🧠' },
  { id: 'role-specific-screens', label: 'Role-Specific Screens', emoji: '🎯' },
  { id: 'scoring-evaluation', label: 'Scoring & Evaluation', emoji: '📊' },
  { id: 'avoiding-bias', label: 'Avoiding Bias', emoji: '⚖️' },
  { id: 'offer-stage', label: 'Offer Stage & Negotiation', emoji: '🤝' },
  { id: 'remote-interviews', label: 'Remote Interview Tips', emoji: '🌍' },
  { id: 'how-codazz-vets', label: 'How Codazz Vets Engineers', emoji: '🏆' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'staff-augmentation-guide-2026', title: 'Staff Augmentation Guide 2026', category: 'Hiring', readTime: '20 min' },
  { slug: 'how-to-hire-remote-developers', title: 'How to Hire Remote Developers in 2026', category: 'Hiring', readTime: '18 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'App Development Cost in 2026', category: 'Business', readTime: '12 min' },
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

export default function TechnicalInterviewGuideClient() {
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
      const sections = tocItems.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocItems[i].id);
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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 21, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                15 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Technical Interview Guide 2026: How to Hire Great Software Engineers
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The interview process most companies use is broken. Here is how to design a process that actually predicts real-world job performance — with specific questions, scoring rubrics, and platform recommendations for every stage.
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
                    The average technical interview process costs $15,000–$25,000 per hire when you factor in recruiter time, interviewer hours, and tool costs. And the majority of those processes are statistically no better than random at predicting who will actually perform well on the job.
                  </p>
                  <p>
                    <strong style={{ color: '#ffffff' }}>The problem is not that companies ask hard questions — it is that they ask the wrong questions and evaluate the wrong signals.</strong> LeetCode hard problems do not predict product delivery velocity. Whiteboard algorithms do not predict system design judgment. And personality fits do not predict code quality.
                  </p>
                  <p>
                    At Codazz, we have run hundreds of technical interviews across four engineering disciplines — frontend, backend, mobile, and DevOps. This guide distills what actually predicts job performance, what the best companies use, and how to build a process that finds great engineers without burning your team out running it.
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
                      <strong style={{ color: '#ffffff' }}>Paid take-home assignments outperform live coding</strong> for predicting real-world output quality — but live coding is better for evaluating communication and problem-solving process.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>4-stage process is optimal</strong> — async screening, technical assessment, system design interview, and behavioral interview. More stages increase drop-off and interviewer fatigue without improving signal.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>System design interviews are the highest-signal stage for senior engineers</strong> — they reveal architectural thinking, trade-off reasoning, and accumulated experience that coding challenges cannot surface.
                    </li>
                    <li style={{ marginBottom: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Structured scoring rubrics prevent bias and improve decision quality</strong> — interviewers without a rubric default to "would I want to grab coffee with this person" which correlates with nothing useful.
                    </li>
                    <li style={{ color: 'rgba(255,255,255,0.85)' }}>
                      <strong style={{ color: '#ffffff' }}>Candidates evaluate you simultaneously</strong> — the best engineers have multiple offers. Candidate experience during the interview directly impacts offer acceptance rate and employer brand.
                    </li>
                  </ul>
                </div>

                {/* PROBLEM WITH INTERVIEWS */}
                <h2 id="problem-with-interviews" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>The Problem with Technical Interviews in 2026</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Most technical interview processes have a fundamental validity problem: the things they measure do not strongly correlate with the things that matter on the job.
                </p>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  {[
                    {
                      mistake: 'LeetCode as the primary evaluation tool',
                      why: 'Algorithm puzzles measure your ability to solve algorithm puzzles — not to design maintainable systems, collaborate effectively, debug production issues, or write code that other engineers want to work in. Studies consistently show that LeetCode performance has weak correlation with engineering job performance for roles that do not specifically require competitive programming-style problem solving.',
                    },
                    {
                      mistake: 'Interviewing for current knowledge instead of learning ability',
                      why: 'The tech stack you are hiring for will change. The engineer who taught themselves three new frameworks in two years is more valuable than the one who memorized your current stack\'s documentation. Evaluate curiosity, learning velocity, and how candidates talk about things they do not know yet.',
                    },
                    {
                      mistake: 'No structured evaluation rubric',
                      why: 'When interviewers evaluate on gut feel, they optimize for cultural affinity, communication style, and shared background — all of which correlate with demographic similarity, not engineering quality. A rubric forces evaluators to rate specific, observable behaviors rather than overall impressions.',
                    },
                    {
                      mistake: 'Too many interview rounds',
                      why: 'The top 10% of engineers — the ones you actually want — have multiple competing offers. An 8-round interview process filters out great candidates who accept another offer by round 5. Research shows diminishing signal quality after the third or fourth interview. More rounds signal organizational dysfunction, not rigor.',
                    },
                    {
                      mistake: 'Not paying for take-home assessments',
                      why: 'Asking candidates to spend 6–10 hours on an unpaid take-home signals disrespect for their time and self-selects against senior engineers who have options. Pay $150–$300 for senior take-home assessments. You get better candidates and more serious submissions.',
                    },
                    {
                      mistake: 'No feedback loop',
                      why: 'Most companies never learn why they are losing candidates, why hires underperform, or which interview stages are predictive. Without a feedback loop — tracking offer acceptance rate, 90-day performance vs interview scores, candidate drop-off by stage — you cannot improve the process.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, fontSize: 13, color: '#ef4444', fontWeight: 700 }}>{i + 1}</div>
                      <div>
                        <p style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.mistake}</p>
                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{item.why}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PROCESS DESIGN */}
                <h2 id="process-design" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Interview Process Design: The 4-Stage Framework</h2>
                <p className="reveal" style={{ marginBottom: 32, color: 'rgba(255,255,255,0.5)' }}>
                  The optimal technical interview process has four stages, takes less than two weeks from application to offer, and gives you high-fidelity signal on the dimensions that actually predict job performance.
                </p>

                {[
                  {
                    stage: 'Stage 1',
                    title: 'Async Profile & Resume Screen (Non-interviewer, 15 min)',
                    color: accentColor,
                    purpose: 'Filter for minimum viable signal before investing human time.',
                    items: [
                      'GitHub profile: real project contributions (not just forks), commit quality, documentation habits, open source participation.',
                      'Portfolio: are projects live and working? A deployed project beats 10 listed side projects every time.',
                      'Resume: look for progression of responsibility, tenure at past companies, and the quality of projects described — not just the stack listed.',
                      'Written communication in the application: remote work is 80% written. Poor writing quality in a cover message is a genuine signal.',
                      'Proceed: candidates who clear this screen get a 30-minute async pre-screen questionnaire (3–5 written questions) before any live interview time is invested.',
                    ],
                  },
                  {
                    stage: 'Stage 2',
                    title: 'Technical Screening Call (45–60 min, 1 interviewer)',
                    color: '#61dafb',
                    purpose: 'Assess technical depth, communication quality, and architecture thinking.',
                    items: [
                      'Past project deep-dive: pick one project from their portfolio and go 3 layers deep. Ask about specific decisions, what they would do differently, what the biggest technical challenge was.',
                      'Architecture discussion: present a problem in your domain (2–3 sentences) and ask how they would approach it. Listen for trade-off thinking, clarifying questions, and awareness of constraints.',
                      'Stack-specific depth check: 3–5 questions specific to your primary technology that surface genuine experience vs surface familiarity.',
                      'Remote work and communication assessment: how do they manage async workflows? What is their written communication style? How do they handle ambiguity without constant check-ins?',
                    ],
                  },
                  {
                    stage: 'Stage 3',
                    title: 'Technical Assessment — Paid Take-Home or Live Coding (3–6 hrs)',
                    color: '#ffc864',
                    purpose: 'Evaluate real code quality, problem-solving process, and work output.',
                    items: [
                      'Use a realistic problem from your actual domain — not a generic puzzle. A take-home that mirrors a real work task is far more predictive than an abstract algorithm problem.',
                      'Pay $150–$300 for senior engineers. This signals respect, attracts serious candidates, and improves submission quality dramatically.',
                      'Evaluate code quality holistically: readability, test coverage, documentation, error handling, and architectural cleanliness — not just whether the tests pass.',
                      'For live coding: use CoderPad with a collaborative environment. Explicitly tell candidates they can look things up — you are evaluating their process, not memorization.',
                    ],
                  },
                  {
                    stage: 'Stage 4',
                    title: 'System Design + Behavioral Interview (90 min, 2 interviewers)',
                    color: '#a78bfa',
                    purpose: 'Evaluate senior-level architectural reasoning, collaboration history, and culture alignment.',
                    items: [
                      'System design: 45 minutes on a real system design problem scaled to their seniority. For senior roles: design a system you have actually built or considered. For mid-level: scope down appropriately.',
                      'Behavioral (STAR format): 30 minutes on past behavior in high-signal situations — conflict resolution, technical disagreements, missed deadlines, mentoring others.',
                      'Culture and values alignment: 15 minutes exploring how they work, what they value in an engineering team, and how they respond to feedback.',
                      'Candidate Q&A: give them 15+ minutes to ask questions. How they spend this time is itself a signal — great engineers have prepared, specific, thoughtful questions.',
                    ],
                  },
                ].map((stage, i) => (
                  <div key={i} className="reveal" style={{ marginBottom: 32, paddingLeft: 24, borderLeft: `3px solid ${stage.color}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: stage.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stage.stage}</span>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{stage.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, color: stage.color, margin: '0 0 12px', fontWeight: 500 }}>Goal: {stage.purpose}</p>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      {stage.items.map((item, j) => (
                        <li key={j} style={{ marginBottom: 10, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* CODING PLATFORMS */}
                <h2 id="coding-platforms" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Best Coding Challenge Platforms in 2026</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Each platform serves a different purpose. Using the wrong one wastes candidate goodwill and gives you low-fidelity signal.
                </p>

                {[
                  {
                    name: 'CoderPad',
                    bestFor: 'Live pair coding, collaborative problem solving',
                    cost: '$From $150/mo',
                    signal: 'Process, communication, real-time problem solving',
                    notes: 'The best live coding environment available. Supports 30+ languages, has a built-in execution environment, and most importantly — it feels collaborative, not adversarial. Candidates can type naturally, look things up, and explain their thinking. Best for evaluating problem-solving process rather than end solution.',
                  },
                  {
                    name: 'HackerRank',
                    bestFor: 'Async technical screening, volume filtering',
                    cost: '$From $250/mo',
                    signal: 'Baseline technical competence, algorithm knowledge',
                    notes: 'Strong for high-volume screening where you need to filter a large candidate pool before investing live interviewer time. Large problem library, good anti-cheating detection, detailed analytics. Less suitable for senior roles where "did they solve the LeetCode problem" is not the right signal.',
                  },
                  {
                    name: 'Codility',
                    bestFor: 'Async technical screening with detailed analytics',
                    cost: '$From $180/mo',
                    signal: 'Algorithm performance, code correctness, time management',
                    notes: 'Well-designed for automated screening. Better candidate experience than HackerRank for most engineers. Good analytics on time spent, approach taken, and edge case handling. Similar caveat — algorithm tests are better for filtering than for evaluating engineering quality for senior roles.',
                  },
                  {
                    name: 'Loom / Async Video',
                    bestFor: 'Take-home walkthrough, code review explanation',
                    cost: 'Free–$12/mo',
                    signal: 'Communication quality, clarity of thought, product sense',
                    notes: 'Underused in technical hiring. Asking candidates to record a 10-minute Loom walking through their take-home solution reveals communication skills, technical vocabulary, and how they think about their own code — signals you cannot get from reading code alone.',
                  },
                  {
                    name: 'GitHub',
                    bestFor: 'Portfolio review, code history analysis',
                    cost: 'Free',
                    signal: 'Collaboration habits, code quality in real projects, learning trajectory',
                    notes: 'More predictive than any assessment platform for senior engineers. Real contribution history, open source participation, documentation quality, and code review style are visible. Many senior engineers have built nothing on HackerRank but have a GitHub profile that tells you everything you need to know.',
                  },
                ].map((platform, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 28, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{platform.name}</h3>
                        <span style={{ fontSize: 12, color: accentColor, fontWeight: 600 }}>{platform.bestFor}</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: 14, color: '#ffffff', margin: '0 0 2px', fontWeight: 600 }}>{platform.cost}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Signal: {platform.signal}</p>
                      </div>
                    </div>
                    <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{platform.notes}</p>
                  </div>
                ))}

                {/* LIVE CODING VS TAKEHOME */}
                <h2 id="live-coding-vs-takehome" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Live Coding vs Take-Home: The Real Debate</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  This debate has raged for a decade. The honest answer is that both modalities measure different things — and the best processes use both.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 540 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Dimension</th>
                        <th style={{ ...thStyle, color: '#61dafb' }}>Live Coding</th>
                        <th style={{ ...thStyle, color: '#ffc864' }}>Take-Home Assignment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['What it measures', 'Process, communication, problem-solving under pressure', 'Output quality, code craftsmanship, independent work'],
                        ['Candidate experience', 'Stressful, especially for introverts and non-native speakers', 'Comfortable, realistic to actual working conditions'],
                        ['Interviewer time required', 'High — 1–2 interviewers present throughout', 'Low — async review after submission'],
                        ['Cheating risk', 'Low — real-time observation', 'Medium — can use AI tools or get help'],
                        ['Signal for senior roles', 'Good for communication, moderate for quality', 'Excellent for quality, weak for communication'],
                        ['Bias risk', 'High — performance anxiety disadvantages some groups', 'Lower — evaluated on output, not in-person impression'],
                        ['Recommended for', 'All roles, Stage 2 screening call', 'Mid-level and above, Stage 3 assessment'],
                        ['Best format', 'CoderPad + real problem, allow lookups', 'Paid ($150–$300), 4–6 hours, domain-relevant problem'],
                      ] as string[][]).map((row, i) => (
                        <tr key={i} style={rowBorder}>
                          <td style={{ ...tdStyle, color: '#ffffff', fontWeight: 600 }}>{row[0]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.75)' }}>{row[1]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.75)' }}>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <CodazzCallout>
                  Our recommendation: use a 45-minute live CoderPad session for the technical screening call (Stage 2) and a paid 4–6 hour take-home for the Stage 3 assessment. The live session surfaces communication and problem-solving process; the take-home surfaces code quality and depth. Together, they are significantly more predictive than either alone.
                </CodazzCallout>

                {/* SYSTEM DESIGN */}
                <h2 id="system-design" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>System Design Interviews: What to Ask and How to Evaluate</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  System design interviews are the highest-signal stage for senior engineers. They reveal accumulated experience, trade-off reasoning, and architectural judgment in ways that no coding challenge can replicate.
                </p>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>What to Evaluate in a System Design Interview</h3>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Clarifying questions upfront:</strong> Does the candidate immediately ask about scale, consistency requirements, latency requirements, and team size? Engineers who design without clarifying constraints will build the wrong thing.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Back-of-envelope estimation:</strong> Can they estimate load, storage, and bandwidth requirements before diving into architecture? "This will probably be 10 million requests per day, so about 115 RPS average with peaks of 3–4x" is what senior engineers do.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Trade-off awareness:</strong> Every architectural decision has trade-offs. Listen for "I would choose X because Y, but the cost is Z, and if the requirements were different I would consider W." Candidates who present only one path without alternatives lack depth.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Failure mode thinking:</strong> What happens when the database goes down? What happens when the cache is cold? What happens when the message queue backs up? Senior engineers think in failure modes; junior engineers think in happy paths.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Incremental design:</strong> Do they start with a simple working design and add complexity, or do they over-engineer from the start? Good engineers reach for the simplest solution that works and add complexity only when scale demands it.</li>
                  </ul>
                </div>

                {([
                  {
                    role: 'Backend / Full-Stack',
                    color: '#61dafb',
                    questions: [
                      'Design a URL shortening service like bit.ly. It needs to handle 100 million URLs, have sub-10ms read latency, and be globally distributed. Walk me through your approach.',
                      'Design a notification system that needs to send emails, SMS, and push notifications to 50 million users. How do you handle different delivery guarantees and failure modes?',
                      'Design a real-time collaborative document editing system (like Google Docs). Focus on conflict resolution, consistency, and operational transformation or CRDT approaches.',
                      'Design a rate limiter for a public API serving 500 million requests per day. Consider distributed enforcement, different rate limit windows, and per-user vs per-endpoint limits.',
                    ],
                  },
                  {
                    role: 'Mobile Engineering',
                    color: '#a78bfa',
                    questions: [
                      'Design an offline-first mobile feed app that syncs when reconnected. How do you handle conflict when a user has made changes offline that conflict with server updates?',
                      'Design a mobile payment flow with PCI compliance requirements. How do you handle the UI/UX security constraints (no screenshots, secure input) alongside the backend integration?',
                      'Design a push notification system for a mobile app with 10 million users. How do you handle targeting, delivery confirmation, and the constraints of APNS and FCM?',
                    ],
                  },
                  {
                    role: 'Frontend / Platform',
                    color: '#ffc864',
                    questions: [
                      'Design a component library that will be shared across 10 product teams with different tech stacks. How do you handle versioning, backward compatibility, and documentation?',
                      'Design a real-time dashboard that displays data from 5 different APIs, each with different update frequencies. How do you manage data freshness, loading states, and error boundaries?',
                      'Design a micro-frontend architecture for a large e-commerce platform that multiple teams contribute to. How do you handle shared state, routing, and deployment independence?',
                    ],
                  },
                  {
                    role: 'DevOps / Platform Engineering',
                    color: accentColor,
                    questions: [
                      'Design a CI/CD pipeline for a monorepo containing 30 services, where each PR should only rebuild and test affected services. How do you handle dependency tracking and parallelism?',
                      'Design a secrets management system for a multi-cloud, multi-environment setup. How do you handle rotation, access control, audit logging, and emergency access?',
                      'Design an observability stack for a platform handling 1 billion events per day. How do you handle ingestion, storage costs, query performance, and alerting without alert fatigue?',
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
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: section.color, margin: 0 }}>{section.role} — System Design Questions</h3>
                    </div>
                    <div style={{ padding: '20px 24px' }}>
                      <ol style={{ paddingLeft: 20, margin: 0 }}>
                        {section.questions.map((q, qi) => (
                          <li key={qi} style={{ marginBottom: 14, color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.65 }}>
                            {q}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}

                {/* BEHAVIORAL INTERVIEWS */}
                <h2 id="behavioral-interviews" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Behavioral Interviews: The STAR Framework Done Right</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  The STAR framework (Situation, Task, Action, Result) is the right structure for behavioral interviews — but most interviewers do not probe deeply enough to get real signal. Here is how to run behavioral interviews that actually predict team performance.
                </p>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>How to Use STAR Effectively</h3>
                  <p style={{ marginBottom: 16 }}>STAR answers frequently stay too high-level. Probe deeper at each layer:</p>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Situation:</strong> Ask follow-up — "How big was the team? What were the constraints? How much time did you have?" Context reveals whether the situation was genuinely challenging or routine.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Task:</strong> "What was your specific role vs the team's role?" This surfaces whether they were the primary actor or a supporting player — and whether they accurately attribute credit.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Action:</strong> This is where most of the signal lives. "What did you specifically do — not the team, but you? What options did you consider and reject? What was the hardest part of the execution?" Go three layers deep here.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Result:</strong> "What was the measurable outcome? What would have happened if you had not done this? What would you do differently today?" The reflection question is the most revealing — engineers who cannot identify what they would change have not learned from the experience.</li>
                  </ul>
                </div>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>High-Signal Behavioral Questions for Engineers</h3>
                  {([
                    {
                      category: 'Technical Judgment & Quality',
                      color: accentColor,
                      questions: [
                        'Tell me about a time you pushed back on a technical decision made by someone senior to you. What was your reasoning, how did you communicate it, and what happened?',
                        'Describe a piece of code you wrote that you are not proud of. What constraints led to it? How would you write it differently today?',
                        'Tell me about a time you had to ship something you thought was not ready. How did you navigate the quality vs deadline tension?',
                      ],
                    },
                    {
                      category: 'Collaboration & Communication',
                      color: '#61dafb',
                      questions: [
                        'Describe a significant technical disagreement you had with a teammate. How was it resolved, and what did you learn from it?',
                        'Tell me about a time you had to explain a complex technical concept to a non-technical stakeholder. What was your approach and how did it land?',
                        'Describe a time a cross-team dependency blocked your work. How did you unblock it?',
                      ],
                    },
                    {
                      category: 'Ownership & Accountability',
                      color: '#ffc864',
                      questions: [
                        'Tell me about a time you caused a production incident. What happened, how did you respond, and what was the outcome?',
                        'Describe a project where requirements changed significantly mid-way. How did you adapt, and what did you communicate to stakeholders?',
                        'Tell me about a time you took on a problem that was technically outside your expertise. How did you approach the learning curve?',
                      ],
                    },
                  ] as { category: string; color: string; questions: string[] }[]).map((section, si) => (
                    <div key={si} style={{
                      marginBottom: 24, borderRadius: 16, overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{ background: `${section.color}12`, padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: section.color, margin: 0 }}>{section.category}</h4>
                      </div>
                      <div style={{ padding: '16px 20px' }}>
                        <ol style={{ paddingLeft: 20, margin: 0 }}>
                          {section.questions.map((q, qi) => (
                            <li key={qi} style={{ marginBottom: 10, color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.65 }}>{q}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ROLE SPECIFIC SCREENS */}
                <h2 id="role-specific-screens" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Role-Specific Technical Screening Questions</h2>
                <p className="reveal" style={{ marginBottom: 32, color: 'rgba(255,255,255,0.5)' }}>
                  Use these during the Stage 2 screening call. They go deeper than stack trivia — they surface architectural thinking and real-world experience.
                </p>

                {([
                  {
                    role: 'Frontend (React / Next.js)',
                    color: '#61dafb',
                    questions: [
                      'Walk me through how you decide whether state belongs in a local component, context, or a global store like Zustand or Redux. Give me a real example from a project.',
                      'How do you approach performance optimization when a page becomes slow? What do you measure first — LCP, FID, CLS — and what tools do you use?',
                      'Describe your approach to accessibility (a11y) on a production product. Give a specific example where you identified and fixed an issue — not added an aria-label, but something substantive.',
                      'How do you handle server/client rendering boundaries in Next.js App Router? What are the most common mistakes teams make when migrating from pages directory?',
                      'Describe how you would architect a design system that scales across multiple products. What do you version, how do you document it, and how do you handle breaking changes?',
                    ],
                  },
                  {
                    role: 'Backend (Node.js / Python / Go)',
                    color: '#ffc864',
                    questions: [
                      'Walk me through how you design a RESTful API that needs to handle 10M requests per day. Where do the bottlenecks typically appear first in your experience?',
                      'How do you handle database schema migrations in a live production environment with zero downtime? Walk me through the specific technique and any edge cases you have encountered.',
                      'Describe how you would design authentication and authorization for a multi-tenant SaaS. How do you handle tenant isolation at the data layer?',
                      'What is your strategy for observability in a microservices architecture? How do you decide what to log, trace, and alert on — and what to deliberately not track?',
                      'Tell me about the last time you profiled and optimized a slow database query. What tools did you use, what did you find, and what was the outcome?',
                    ],
                  },
                  {
                    role: 'Mobile (React Native / Flutter)',
                    color: '#a78bfa',
                    questions: [
                      'How do you decide between React Native and Flutter for a new project? What factors drive that decision beyond client preference?',
                      'Describe your approach to offline-first architecture in a mobile app. How do you handle sync conflicts when the device reconnects?',
                      'How do you manage app performance on low-end Android devices? What do you profile, and what are the most common culprits in React Native specifically?',
                      'Walk me through your testing strategy for a mobile app: what do you unit test, integration test, and what do you test end-to-end with tools like Detox or Maestro?',
                      'What is your experience with App Store and Google Play release processes? How do you manage certificate rotation, provisioning profiles, and staged rollouts?',
                    ],
                  },
                  {
                    role: 'DevOps / Platform Engineering',
                    color: accentColor,
                    questions: [
                      'Walk me through a CI/CD pipeline you designed from scratch. What decisions would you make differently if you built it today?',
                      'How do you approach infrastructure-as-code when a team has varying Terraform experience? How do you prevent state drift and manage module boundaries?',
                      'Describe a production incident you were responsible for diagnosing. What was your runbook? What did the postmortem reveal, and what changed as a result?',
                      'How do you approach cloud cost optimization without sacrificing reliability or performance SLAs? What do you look at first?',
                      'What is your philosophy on alerting? How do you prevent alert fatigue while ensuring critical issues are never missed?',
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
                          <li key={qi} style={{ marginBottom: 14, color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.65 }}>
                            {q}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}

                {/* SCORING & EVALUATION */}
                <h2 id="scoring-evaluation" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Scoring & Evaluation: Building a Rubric That Works</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Without a structured rubric, hiring decisions default to "gut feel" — which is strongly correlated with similarity bias and weakly correlated with actual job performance.
                </p>

                <div className="reveal" style={tableWrapStyle}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                    <thead>
                      <tr style={headBorder}>
                        <th style={thStyle}>Dimension</th>
                        <th style={thStyle}>Weight</th>
                        <th style={thStyle}>What to Evaluate</th>
                        <th style={{ ...thStyle, width: '20%' }}>Score (1–4)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {([
                        ['Technical Depth', '30%', 'Stack-specific knowledge, architecture understanding, debugging ability', '1=Surface only, 4=Expert-level depth'],
                        ['Problem Solving', '25%', 'Clarifying questions, approach to ambiguity, trade-off reasoning', '1=Linear thinker, 4=Creative multi-path thinker'],
                        ['Communication', '20%', 'Clarity of explanation, listening, async writing quality', '1=Unclear/verbose, 4=Exceptionally clear and concise'],
                        ['Code Quality', '15%', 'Readability, testability, error handling, documentation', '1=Difficult to maintain, 4=Production-ready, exemplary'],
                        ['Culture & Values', '10%', 'Ownership mindset, curiosity, response to feedback', '1=Passive, blame-external, 4=High ownership, growth-oriented'],
                      ] as string[][]).map((row, i) => (
                        <tr key={i} style={rowBorder}>
                          <td style={{ ...tdStyle, color: '#ffffff', fontWeight: 600 }}>{row[0]}</td>
                          <td style={{ ...tdStyle, color: accentColor, fontWeight: 600 }}>{row[1]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>{row[2]}</td>
                          <td style={{ ...tdStyle, color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>The Debrief Protocol</h3>
                  <p style={{ marginBottom: 16 }}>Every interviewer submits scores and written notes independently before the debrief. The debrief structure:</p>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>First:</strong> Each interviewer shares their score and top 2 data points (specific examples from the interview) before anyone else speaks. This prevents anchoring on the first opinion.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Then:</strong> Discuss disagreements. If two interviewers scored Technical Depth as 4 and 2, they should each share the specific evidence for their score. One of them is relying on weaker signal.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Finally:</strong> Aggregate weighted scores. A score below 2.5 on any dimension weighted above 20% is typically a no-hire. A unanimous strong pass (3.5+) is a move-fast signal.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#ffffff' }}>Rule:</strong> Any interviewer can veto a hire if they have a specific, documented concern — not a vague feeling. Veto with evidence. "I didn't like their energy" is not a veto. "They could not explain why they would choose PostgreSQL over MongoDB for a write-heavy workload, and gave no indication they understood the trade-off" is.</li>
                  </ul>
                </div>

                {/* AVOIDING BIAS */}
                <h2 id="avoiding-bias" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Avoiding Bias in Technical Hiring</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Bias in technical hiring is not primarily a moral issue — it is an accuracy issue. Biased processes select for the wrong signals, miss great engineers, and produce homogeneous teams that underperform.
                </p>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  {[
                    { bias: 'Affinity Bias', what: 'Favoring candidates who went to the same school, live in the same city, or share hobbies with the interviewer.', fix: 'Evaluate only on structured rubric dimensions. If it is not on the rubric, it cannot be a hiring factor. Run debrief with anonymous initial scores before group discussion.' },
                    { bias: 'Performance Anxiety Disadvantage', what: 'Live coding performance is significantly impacted by anxiety, which varies across individuals, cultures, and neurodivergent profiles.', fix: 'Explicitly tell candidates they can look things up, talk through their thinking out loud, and ask clarifying questions. Evaluate process, not speed. Supplement with take-home assessments.' },
                    { bias: 'Accent & Communication Style Bias', what: 'Non-native English speakers are often rated lower on "communication" even when their technical content is equally strong.', fix: 'Separate content from delivery in your rubric. Rate accuracy, precision, and logical structure of communication separately from fluency. Ask for written communication examples where possible.' },
                    { bias: 'Prestige Bias', what: 'Over-weighting educational pedigree (top university, FAANG experience) relative to demonstrated ability.', fix: 'Score resume screens on project outcomes and contribution quality, not company or school name. Some of the strongest engineers we have hired had no degree but extraordinary GitHub profiles.' },
                    { bias: 'Confidence Bias', what: 'Equating confidence with competence. Confident engineers who speak in certainties often score higher than equally capable engineers who express appropriate uncertainty.', fix: 'Train interviewers to recognize that qualified uncertainty ("I would need to benchmark this, but my intuition is X") is a sign of intellectual honesty, not lack of knowledge.' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: 24, background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.bias}</h4>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 10, lineHeight: 1.6 }}><strong style={{ color: 'rgba(255,255,255,0.4)' }}>What it is:</strong> {item.what}</p>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}><strong style={{ color: accentColor }}>Fix:</strong> {item.fix}</p>
                    </div>
                  ))}
                </div>

                {/* OFFER STAGE */}
                <h2 id="offer-stage" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Offer Stage & Negotiation</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Getting a great engineer through your interview process and then losing them at the offer stage is a $40,000–$80,000 mistake (time, recruiter cost, opportunity cost). Here is how to get to yes.
                </p>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>The 48-Hour Rule</h3>
                  <p style={{ marginBottom: 16 }}>From the moment you decide to hire to the moment you send an offer: 48 hours maximum. Senior engineers with strong interview performance receive competing offers within days of finishing a process. A 2-week internal deliberation is a hire-killer. If your approval process takes longer than 48 hours, fix the process, not the timeline.</p>
                </div>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  {[
                    { title: 'Verbal offer before written', detail: 'Call the candidate before sending a written offer. This creates a conversational opportunity to gauge their enthusiasm, surface any competing offers, and address concerns before they have time to deliberate alone. "We want to extend you an offer — is now a good time?" should happen within 48 hours of the debrief.' },
                    { title: 'Know the market rate before you start', detail: 'Check Levels.fyi, Glassdoor, Blind, and the Stack Overflow Developer Survey for your specific role, seniority, and location. Coming in below market on the first offer signals that you are not paying attention — and that you will low-ball them on every raise. Come in at or above the 50th percentile.' },
                    { title: 'Leave room for negotiation — intentionally', detail: 'Most candidates will negotiate. Structure your offer to have a small amount of room on base salary and additional equity or signing bonus flexibility. This gives you something to offer without coming in with your ceiling first.' },
                    { title: 'Address competing offers directly', detail: '"Are you in any other active processes?" is a legitimate and professional question at the verbal offer stage. Knowing their timeline tells you how fast to move. If they have a competing offer expiring in 3 days, you have 3 days. "Let us know if you receive another offer and we will do our best to respond quickly" positions you as a fair partner.' },
                    { title: 'The close conversation', detail: 'If they are on the fence, ask directly: "What would make this an easy yes?" This surfaces the actual objection — compensation, title, remote policy, team structure — and gives you a chance to address it before they decline. Candidates often decline silently when they could have been won with a specific accommodation.' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: 20, display: 'flex', gap: 16 }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, fontSize: 13, color: accentColor, fontWeight: 700 }}>{i + 1}</div>
                      <div>
                        <p style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.title}</p>
                        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* REMOTE INTERVIEWS */}
                <h2 id="remote-interviews" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 12, letterSpacing: '-0.02em',
                }}>Remote Interview Tips for 2026</h2>
                <p className="reveal" style={{ marginBottom: 24, color: 'rgba(255,255,255,0.5)' }}>
                  Remote interviews introduce additional variables that can unfairly penalize strong candidates if you do not account for them. Here is how to run remote interviews that are fair, effective, and create a positive candidate impression.
                </p>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 40 }}>
                  {[
                    {
                      title: 'Send the setup guide in advance',
                      detail: 'Email candidates 24 hours before with: the video platform link, the coding environment URL (CoderPad), the problem format description ("you will be asked to design a system verbally — no coding required"), and a technology check reminder. Surprises create anxiety that produces false negatives.',
                      color: accentColor,
                    },
                    {
                      title: 'Start with 5 minutes of human connection',
                      detail: 'Remote interviews cold-start in a way that in-person do not. Spend 5 minutes asking about their week, how they found out about the role, what they are currently working on. This settles nerves and gives you authentic communication signal before the technical pressure begins.',
                      color: '#61dafb',
                    },
                    {
                      title: 'Explicitly normalize looking things up',
                      detail: 'At the start of live coding: "We want to see how you work, not test memorization. Please use Google, MDN, Stack Overflow — whatever you would use on the job. Talk us through your thinking as you work." This produces far better signal and a far better candidate experience.',
                      color: '#ffc864',
                    },
                    {
                      title: 'Have a technical backup plan',
                      detail: 'Internet outages happen. Have a phone number ready. Have a lower-bandwidth alternative (audio-only interview with screen share removed) tested in advance. Candidates who lose their connection and have to spend 10 minutes troubleshooting before the interview restarts often perform worse for the next 20 minutes.',
                      color: '#a78bfa',
                    },
                    {
                      title: 'Evaluate async communication separately',
                      detail: 'For remote roles, send a short async pre-screen questionnaire (3 written questions) before the first live call. Written communication quality is highly predictive of remote work performance and gives you signal you cannot get in a video call.',
                      color: '#fb923c',
                    },
                    {
                      title: 'Close with a genuine sell',
                      detail: 'At the end of every interview: "Before we wrap up, I want to tell you a bit about why our engineers love working here — and then I want to make sure you have time to ask us anything." The best candidates are evaluating you as hard as you are evaluating them.',
                      color: '#e879f9',
                    },
                  ].map((tip, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: `1px solid ${tip.color}20` }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: tip.color, marginBottom: 8 }}>{tip.title}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.65 }}>{tip.detail}</p>
                    </div>
                  ))}
                </div>

                {/* HOW CODAZZ VETS */}
                <div id="how-codazz-vets" className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,30,0.3) 100%)',
                  borderRadius: 28, padding: 'clamp(24px, 4vw, 40px)', marginTop: 64,
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    How Codazz Vets Engineers (So You Do Not Have To)
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, lineHeight: 1.7, maxWidth: 640 }}>
                    Running the interview process described above requires 8–15 hours of engineering team time per hire. Codazz has already run it — on every engineer we place. Our 4-stage vetting process includes GitHub review, technical screening, CoderPad live coding, and a system design interview with a Codazz principal engineer. Only 12–15% of applicants make it through.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      { value: '4 stages', label: 'Vetting Process' },
                      { value: '12–15%', label: 'Pass Rate' },
                      { value: '3–7 days', label: 'Time to Your First Engineer' },
                      { value: '2 weeks', label: 'Free Replacement SLA' },
                    ].map((stat) => (
                      <div key={stat.value} style={{ textAlign: 'center', background: 'rgba(0,0,0,0.3)', borderRadius: 16, padding: 16 }}>
                        <p style={{ fontSize: 26, fontWeight: 800, color: accentColor, margin: 0 }}>{stat.value}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: accentColor, color: '#000000',
                      padding: '14px 28px', borderRadius: 8,
                      fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'transform 0.2s',
                    }}>
                      Hire Pre-Vetted Engineers
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/dedicated-development-team" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'rgba(255,255,255,0.08)', color: '#ffffff',
                      padding: '14px 28px', borderRadius: 8,
                      fontWeight: 600, fontSize: 15, textDecoration: 'none',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}>
                      Explore Dedicated Team Model
                    </Link>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  {
                    q: 'How many rounds should a technical interview process have?',
                    a: 'Four is the optimal number for most engineering roles: async profile screen, technical screening call, coding assessment, and system design + behavioral interview. More than four rounds increase drop-off among strong candidates (who have competing offers) without producing meaningfully better signal. Studies show that a 4th interview adds approximately 1% decision accuracy over a 3-interview process. Adding a 5th and 6th adds essentially nothing. If your process has more than 4 live interview rounds, you are optimizing for process theater, not candidate quality.',
                  },
                  {
                    q: 'Should I use LeetCode-style algorithm questions?',
                    a: 'For roles that specifically require algorithm-intensive work — high-frequency trading systems, computer vision pipelines, search engine ranking — LeetCode-style questions have validity. For the vast majority of software engineering roles (product features, SaaS applications, mobile apps, APIs), they do not predict job performance. Use domain-relevant problems instead. A take-home task that mirrors a real feature you have built tells you far more about whether someone will perform in your codebase than whether they can implement a balanced binary tree in under 20 minutes.',
                  },
                  {
                    q: 'How do I evaluate a candidate I am not sure about?',
                    a: 'Look at the specific rubric scores and the evidence behind them. Where there is uncertainty, there is usually a signal gap: you did not ask deep enough about a specific dimension. If you are not sure about technical depth, you did not probe far enough. If you are not sure about ownership mindset, you need another behavioral question. Uncertainty is usually a process failure, not a candidate ambiguity. Either run a supplemental 30-minute technical call on the dimension you are uncertain about, or default to your rubric score and make the decision. "Maybe" hires that you talk yourself into rarely work out.',
                  },
                  {
                    q: 'How do I reduce time-to-hire without sacrificing quality?',
                    a: 'Three specific changes accelerate hiring without reducing signal: (1) Run screening and take-home review asynchronously, so calendar scheduling is never a bottleneck. (2) Batch the Stage 4 interviews — both interviewers in a single 90-minute session instead of separate calls on different days. (3) Establish a 48-hour offer turnaround SLA internally. The biggest time sink in most hiring processes is not the interview itself — it is the scheduling gaps between stages and the deliberation time after each one. Compress those, not the interviews.',
                  },
                  {
                    q: 'What should I look for in a candidate\'s questions at the end?',
                    a: 'The best engineers have specific, prepared questions that reveal curiosity about real work. High-signal questions include: "What does a typical week look like for this role in the first 90 days?", "What is the biggest technical challenge the team is facing right now?", "How does the team handle technical debt — is there budget and prioritization for it?", "What happened on the last production incident and what changed afterward?" Low-signal questions are either generic ("What is the company culture like?") or entirely absent. A candidate with no questions either did no preparation, has no curiosity, or is not actually interested in the role — all of which are relevant data points.',
                  },
                  {
                    q: 'How do I handle candidates who are strong technically but weak interpersonally?',
                    a: 'Separate the two dimensions in your rubric and be honest about what each predicts. Interpersonal skills in an interview context are not the same as interpersonal performance on the job. High-anxiety candidates can interview as awkward and then be excellent team members. Evaluate communication based on: can they explain technical concepts clearly? Do they listen and respond to clarifying questions accurately? Do they acknowledge what they do not know? These are functional communication skills. If someone scores low on those specific behaviors — not on warmth or likability — that is a genuine signal. "I did not like them" is not.',
                  },
                  {
                    q: 'We keep losing candidates to competing offers. What should we change?',
                    a: 'Three root causes cover 90% of this problem: (1) Process too long — cut rounds and compress the calendar between stages. Senior candidates in 2026 can have 3 active offer timelines running simultaneously. (2) Offer too slow — 48-hour offer turnaround from debrief to verbal offer is non-negotiable. A 2-week internal approval process loses you senior engineers at a rate that should be alarming. (3) Compensation below market — check Levels.fyi for your specific role. If your offer is below the 40th percentile for your market, you will consistently lose candidates to competitors. If you cannot fix compensation, compete on other dimensions: remote flexibility, equity, interesting technical problems, or team quality.',
                  },
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
                    Skip the Interview Process Entirely
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
                    Codazz has already run the 4-stage vetting process on every engineer we place. Get a pre-vetted senior developer integrated into your team in 3–7 business days — no sourcing, no screening, no interview panels required.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: accentColor, color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none', transition: 'transform 0.2s',
                  }}>
                    Get a Pre-Vetted Engineer
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
                      {tocItems.map((item) => (
                        <a key={item.id} href={`#${item.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', fontSize: 14,
                          color: activeSection === item.id ? accentColor : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === item.id ? `2px solid ${accentColor}` : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{item.emoji}</span>
                          <span>{item.label}</span>
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
