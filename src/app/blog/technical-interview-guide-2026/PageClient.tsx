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
  { id: 'problem-with-interviews', label: 'The Problem with Tech Interviews', emoji: '⚠️' },
  { id: 'process-design', label: 'Interview Process Design', emoji: '🗺️' },
  { id: 'live-coding-vs-takehome', label: 'Live Coding vs Take-Home', emoji: '💻' },
  { id: 'system-design', label: 'System Design Interviews', emoji: '🏗️' },
  { id: 'behavioral-interviews', label: 'Behavioral Interviews', emoji: '🧠' },
  { id: 'role-specific-screens', label: 'Role-Specific Technical Screens', emoji: '🎯' },
  { id: 'scoring-evaluation', label: 'Scoring & Evaluation', emoji: '📊' },
  { id: 'avoiding-bias', label: 'Avoiding Bias', emoji: '⚖️' },
  { id: 'candidate-experience', label: 'Candidate Experience', emoji: '🤝' },
  { id: 'how-codazz-vets', label: 'How Codazz Vets Engineers', emoji: '🏆' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'staff-augmentation-guide-2026', title: 'Staff Augmentation Guide 2026', category: 'Hiring', readTime: '13 min' },
  { slug: 'how-to-hire-remote-developers', title: 'How to Hire Remote Developers', category: 'Hiring', readTime: '14 min' },
  { slug: 'app-development-companies-toronto', title: 'App Development Companies Toronto', category: 'Industry', readTime: '10 min' },
];

export default function TechnicalInterviewGuideClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('problem-with-interviews');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(t => document.getElementById(t.id)).filter(Boolean);
      let current = tocItems[0].id;
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: 'How many interview rounds is too many?',
      a: 'More than 4–5 rounds is almost always too many, and anything beyond 6 is actively harmful to candidate experience and your offer acceptance rate. Top engineers — especially those with competing offers — will drop out of long processes. The benchmark at Google, Meta, and Stripe is 4–5 rounds completed within a 1–2 week window. If your process takes longer than 3 weeks from first contact to offer, you are almost certainly losing candidates to faster-moving competitors. Audit every round: if you cannot articulate exactly what signal each round captures that prior rounds do not, cut it.',
    },
    {
      q: 'Should we use LeetCode-style algorithm problems?',
      a: 'Use them sparingly, and only when algorithmic skill is genuinely required for the role. LeetCode-hard problems are notorious for high false-negative rates — they filter out experienced engineers who are not actively practicing competitive coding. For most software engineering roles, a medium-difficulty algorithm problem that tests problem decomposition, communication, and clean code is sufficient. Companies like Stripe and Linear have moved toward practical coding assessments (build a small feature, debug real code) because they yield better signal-to-noise on actual job performance than abstract algorithm puzzles.',
    },
    {
      q: 'How do we give useful feedback to rejected candidates?',
      a: 'Most companies refuse to give feedback citing legal risk, but this is often overstated. Behavioral and structured feedback ("The candidate demonstrated strong system design thinking but struggled to articulate trade-offs clearly") is generally safe and creates significant goodwill. Rejected candidates who receive honest, actionable feedback often refer other strong engineers and sometimes reapply successfully years later. At minimum, tell candidates what stage they did not advance past and the general area of concern. A 2-sentence email is infinitely better than silence. Check with your employment lawyer for your jurisdiction, but the chilling effect of "no feedback" policies hurts your employer brand more than it protects you.',
    },
    {
      q: 'What is the ideal technical interview panel composition?',
      a: 'For most engineering roles: (1) a peer engineer who will work directly with the hire, conducting the technical screen; (2) a senior/staff engineer for system design; (3) a manager or team lead for behavioral/culture fit; and optionally (4) a cross-functional stakeholder (product manager, designer) for senior or leadership roles. Avoid panels of more than 5 people — it signals organizational dysfunction and intimidates candidates. Ensure panel gender and background diversity where possible, as diverse panels demonstrably reduce in-group bias in hiring decisions.',
    },
    {
      q: 'How should we evaluate candidates who are nervous during live coding?',
      a: 'Normalize nervousness explicitly at the start of every live coding session: "Most engineers are nervous doing live coding — it is completely normal and we factor that in. We care more about how you think through problems than whether you get to a perfect solution." Evaluate process over product: does the candidate ask clarifying questions? Do they verbalize their thinking? Do they course-correct when stuck? A candidate who gets 70% of the way to a solution but communicates their reasoning clearly often outperforms a silent candidate who gets 100% but cannot explain their approach. Build rubrics that explicitly reward communication and problem decomposition, not just correct solutions.',
    },
  ];

  return (
    <main ref={pageRef} style={{ background: '#000000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', padding: '120px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>Hiring</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>March 21, 2026</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>19 min read</span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
            How to Run Technical Interviews<br />
            <span style={{ color: '#22c55e' }}>for Software Developers (2026)</span>
          </h1>
          <p className="reveal" style={{ fontSize: 18, color: '#bbb', lineHeight: 1.7, marginBottom: 32 }}>
            Structured process design, live coding vs take-home trade-offs, system design rubrics, bias-free scoring, and how to give candidates an experience that builds your engineering brand — a complete guide for engineering managers and founders in 2026.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Hire Pre-Vetted Developers from Codazz</Link>
            <a href="#problem-with-interviews" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 32px', borderRadius: 100, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>Read the Guide</a>
          </div>
        </div>
      </section>

      {/* Main content + Sidebar */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 260px', gap: 48, alignItems: 'start' }}>

        {/* Article Body */}
        <article>

          {/* Section 1 */}
          <section id="problem-with-interviews" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⚠️ The Problem with Technical Interviews
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              The software engineering interview process is widely acknowledged to be broken — and the data backs this up. A 2023 study by interviewing.io found that technical interview outcomes have roughly the same predictive power as random chance for actual job performance. Yet most companies continue running the same process they inherited from Google circa 2010.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
              {[
                {
                  failure: 'The False Negative Problem',
                  color: '#ef4444',
                  desc: 'Qualified engineers fail interviews at alarming rates. The most common cause: abstract algorithm questions that bear no resemblance to actual job work. A senior engineer who has built distributed systems for 10 years should not be eliminated because they cannot invert a binary tree from memory in 20 minutes. False negatives are expensive — you miss great hires and damage your employer brand when word spreads.',
                  stat: '~50% of qualified engineers fail at least one major company\'s process in a given year (interviewing.io)',
                },
                {
                  failure: 'The False Positive Problem',
                  color: '#f97316',
                  desc: 'Candidates who perform well on abstract algorithm problems do not necessarily perform well on the job. Interview coaching has created an industry of candidates who can pass technical screens without being able to write maintainable production code. A strong LeetCode performer who cannot navigate a real codebase, communicate with teammates, or debug under pressure is a costly mis-hire.',
                  stat: '~30% of engineering hires are underperforming at the 6-month mark despite passing rigorous interviews (Notion internal study, 2022)',
                },
                {
                  failure: 'The Process Inconsistency Problem',
                  color: '#fbbf24',
                  desc: 'Without structured evaluation rubrics, interview outcomes are heavily influenced by interviewer mood, implicit bias, and whether the candidate happened to have practiced the exact problem type used. Different interviewers assess the same candidate wildly differently. Without calibration sessions and standardized scoring, you are making random decisions and calling them rigorous.',
                  stat: 'Inter-rater reliability for unstructured technical interviews is 0.3–0.4, equivalent to moderate chance agreement (Schmidt & Hunter meta-analysis)',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${item.color}33`, borderRadius: 20, padding: 28 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                    <div style={{ background: `${item.color}22`, color: item.color, fontWeight: 700, fontSize: 12, padding: '3px 10px', borderRadius: 100, flexShrink: 0, marginTop: 2 }}>FAILURE MODE</div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 17 }}>{item.failure}</div>
                  </div>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 14px' }}>
                    <span style={{ color: item.color, fontSize: 12, fontWeight: 600 }}>Data: </span>
                    <span style={{ color: '#888', fontSize: 12 }}>{item.stat}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>What Top Companies Changed</h3>
              {[
                'Stripe: replaced abstract algorithms with practical assessments using real-world code and debugging exercises',
                'Linear: moved to paid trial projects where candidates work on actual product features for 1–2 weeks',
                'Figma: introduced work sample tests and role-specific portfolio reviews alongside coding rounds',
                'Shopify: eliminated whiteboard coding in favor of collaborative take-home projects reviewed in a live debrief',
              ].map((change, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>→</span> {change}
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section id="process-design" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🗺️ Interview Process Design
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Before you write a single interview question, design the overall process. The architecture of your hiring funnel determines your false positive and negative rates, your time-to-hire, and your candidate experience. Most companies copy a Big Tech process that was designed for thousands of applications per month — not for a startup or scale-up hiring 5–20 engineers per year.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>Optimal Process Structure: 3–4 Rounds, Under 2 Weeks</h3>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  { round: 'Round 1', name: 'Recruiter / Async Screen (30 min)', purpose: 'Verify role alignment, compensation expectations, availability, and basic communication. Often async via Loom video or written responses. Filters 40–60% of applicants efficiently.', who: 'Recruiter or HR' },
                  { round: 'Round 2', name: 'Technical Screen (60–90 min)', purpose: 'Peer-level coding assessment — practical problem in the candidate\'s preferred language. Focus on code quality, communication, and problem approach rather than algorithmic obscurity.', who: 'Peer engineer from the team' },
                  { round: 'Round 3', name: 'System Design + Behavioral (90 min)', purpose: 'Architecture discussion appropriate to seniority level, plus behavioral questions using STAR format. Assesses how the candidate thinks at scale and how they have handled real situations.', who: 'Senior/Staff engineer + EM' },
                  { round: 'Round 4', name: 'Culture & Values (45 min)', purpose: 'Not a "vibe check." Structured questions around values, ways of working, and cross-functional collaboration. Helps assess team fit without defaulting to similarity bias.', who: 'Founder, CTO, or peer from another team' },
                ].map((round, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: 20, display: 'flex', gap: 16 }}>
                    <div style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e', fontWeight: 800, fontSize: 11, padding: '4px 10px', borderRadius: 100, flexShrink: 0, height: 'fit-content', marginTop: 2 }}>{round.round}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 6 }}>{round.name}</div>
                      <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, marginBottom: 8 }}>{round.purpose}</p>
                      <div style={{ color: '#888', fontSize: 12 }}>Interviewer: {round.who}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                { metric: '3–4 rounds', label: 'Optimal number of interview rounds', color: '#22c55e' },
                { metric: '<2 weeks', label: 'Target time from first contact to offer', color: '#60a5fa' },
                { metric: '24 hours', label: 'Max time to respond to applicants at each stage', color: '#fbbf24' },
                { metric: '3–5 people', label: 'Ideal panel size — avoid larger committees', color: '#a78bfa' },
              ].map((m, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${m.color}33`, borderRadius: 20, padding: 20, textAlign: 'center' }}>
                  <div style={{ color: m.color, fontSize: 24, fontWeight: 800, marginBottom: 6 }}>{m.metric}</div>
                  <div style={{ color: '#aaa', fontSize: 12, lineHeight: 1.5 }}>{m.label}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Structured vs Unstructured Interviews</h3>
              <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
                The meta-research is unambiguous: structured interviews (same questions, same scoring rubric, for every candidate) predict job performance 2x better than unstructured conversations. Yet most companies default to unstructured because it feels more natural. Every hour you spend designing structured questions pays back 10x in better hiring decisions.
              </p>
              {[
                'Write specific questions before each round — do not improvise',
                'Use the same question set for every candidate at the same level',
                'Score independently before group debrief — avoid anchoring bias',
                'Document scores and reasoning within 2 hours of the interview while memory is fresh',
              ].map((tip, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span> {tip}
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="live-coding-vs-takehome" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              💻 Live Coding vs Take-Home Assignments
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              The live coding vs take-home debate is one of the most discussed in engineering hiring. Both formats have legitimate trade-offs. The right choice depends on your role level, team capacity, and how much you value candidate experience vs process efficiency.
            </p>
            <div className="reveal" style={{ overflowX: 'auto', marginBottom: 28 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    {['Dimension', 'Live Coding', 'Take-Home'].map((h, i) => (
                      <th key={i} style={{ padding: '12px 16px', textAlign: 'left', color: '#22c55e', fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dim: 'Bias Risk', live: 'High — nervousness, accent, appearance affect scores', takehome: 'Lower — work is evaluated on merit, blind to appearance' },
                    { dim: 'Signal Quality', live: 'Strong for communication and real-time problem solving', takehome: 'Strong for code quality, documentation, architecture' },
                    { dim: 'Candidate Experience', live: 'Often stressful; high anxiety for underrepresented groups', takehome: 'More comfortable; allows time for focused work' },
                    { dim: 'Completion Rate', live: '90%+ (scheduled commitment)', takehome: '30–60% (many candidates drop off or deprioritize)' },
                    { dim: 'Authenticity', live: 'Cannot outsource; real-time verification', takehome: 'Risk of AI assistance or third-party completion' },
                    { dim: 'Time Cost (Candidate)', live: '1–2 hours scheduled', takehome: '4–8 hours unscheduled (often underestimated)' },
                    { dim: 'Time Cost (Company)', live: '1–2 hours interviewer time per candidate', takehome: '30–60 min review; lower async cost' },
                    { dim: 'Best For', live: 'Mid/senior engineers, communication-heavy roles', takehome: 'Junior engineers, roles valuing independent output' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '14px 16px', color: '#22c55e', fontWeight: 600, fontSize: 12 }}>{row.dim}</td>
                      <td style={{ padding: '14px 16px', color: '#bbb', fontSize: 13 }}>{row.live}</td>
                      <td style={{ padding: '14px 16px', color: '#bbb', fontSize: 13 }}>{row.takehome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                {
                  title: 'When to Use Live Coding',
                  points: [
                    'Senior or staff engineer roles where real-time communication matters',
                    'Roles requiring tight collaboration (pair programming culture)',
                    'Fast-moving hiring processes where take-home completion rates are too low',
                    'When you want to observe problem decomposition live, not just final output',
                    'When candidates prefer not to spend uncompensated time on take-homes',
                  ],
                  color: '#22c55e',
                },
                {
                  title: 'When to Use Take-Home',
                  points: [
                    'Junior to mid-level roles where demonstrating code quality matters more than live performance',
                    'When your team lacks bandwidth for synchronous live coding sessions',
                    'Roles where independent research and documentation quality is critical (e.g. DevOps, technical writing)',
                    'When you want a more equitable process for candidates with caregiver responsibilities or anxiety',
                    'Always cap scope at 2–3 hours and respect that time with a thorough review',
                  ],
                  color: '#60a5fa',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${item.color}33`, borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: item.color, fontSize: 15, marginBottom: 12 }}>{item.title}</div>
                  {item.points.map((p, j) => (
                    <div key={j} style={{ color: '#bbb', fontSize: 13, marginBottom: 8, display: 'flex', gap: 10 }}>
                      <span style={{ color: item.color, flexShrink: 0 }}>→</span> {p}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section id="system-design" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🏗️ System Design Interviews
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              System design interviews are the most valuable signal source for senior+ engineers — and the most commonly run poorly. A well-structured system design interview reveals how a candidate thinks about trade-offs, communicates ambiguity, and applies architecture patterns. A poorly structured one becomes a trivia quiz about specific technologies the candidate may not have used recently.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>45–60 Minute System Design Structure</h3>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  { time: '0–5 min', phase: 'Requirements Clarification', desc: 'Candidate asks clarifying questions. What scale? Read/write ratio? Latency requirements? Geographic distribution? A strong candidate does not start designing immediately.' },
                  { time: '5–10 min', phase: 'Capacity Estimation', desc: 'Back-of-envelope math: users, requests/second, storage needed, bandwidth. Reveals whether the candidate can reason quantitatively about systems.' },
                  { time: '10–30 min', phase: 'High-Level Architecture', desc: 'Core components: API layer, services, databases, caches, message queues. Candidate explains choices and alternatives. Interviewer probes on specific components.' },
                  { time: '30–45 min', phase: 'Deep Dive + Trade-offs', desc: 'Drill into 1–2 components. Why SQL vs NoSQL here? How does the cache invalidation work? What happens when a service fails? Trade-off discussion reveals seniority.' },
                  { time: '45–55 min', phase: 'Failure Modes & Scale', desc: 'How does this handle 10x traffic? What is the single point of failure? What are the first things to break? Candidates who think about operational concerns outperform those who only design the happy path.' },
                  { time: '55–60 min', phase: 'Candidate Q&A', desc: 'Always leave time for candidate questions. This is also a signal — engaged candidates ask substantive questions about the team, product, and technical challenges.' },
                ].map((phase, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingBottom: i < 5 ? 12 : 0 }}>
                    <div style={{ minWidth: 70, color: '#22c55e', fontWeight: 700, fontSize: 12, marginTop: 2 }}>{phase.time}</div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{phase.phase}</div>
                      <div style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6 }}>{phase.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                { level: 'L3 / Junior', prompt: '"Design a URL shortener"', focus: 'Basic components, CRUD, single-region' },
                { level: 'L4 / Mid', prompt: '"Design a notification system"', focus: 'Async processing, fan-out, reliability' },
                { level: 'L5 / Senior', prompt: '"Design Twitter\'s timeline"', focus: 'Scale, consistency trade-offs, caching strategy' },
                { level: 'L6 / Staff', prompt: '"Design a distributed rate limiter"', focus: 'Global consistency, failure modes, correctness' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 20 }}>
                  <div style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '2px 8px', borderRadius: 100, fontSize: 11, fontWeight: 700, display: 'inline-block', marginBottom: 8 }}>{item.level}</div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{item.prompt}</div>
                  <div style={{ color: '#888', fontSize: 12 }}>Focus: {item.focus}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>System Design Evaluation Rubric (1–4 Scale)</h3>
              {[
                { dim: 'Requirements Gathering', desc: 'Did they ask the right clarifying questions before designing? Did they scope the problem appropriately?' },
                { dim: 'Estimation & Quantitative Reasoning', desc: 'Did they do back-of-envelope math? Were their assumptions reasonable? Did numbers inform design choices?' },
                { dim: 'Architecture Quality', desc: 'Is the proposed system correct? Does it solve the stated requirements? Are the component choices appropriate?' },
                { dim: 'Trade-off Articulation', desc: 'Did they explain why they chose each component? Did they acknowledge alternatives and explain the trade-offs?' },
                { dim: 'Failure Mode Awareness', desc: 'Did they proactively consider what breaks? Did they propose mitigation strategies (retry logic, circuit breakers, failover)?' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{item.dim}</div>
                  <div style={{ color: '#bbb', fontSize: 13 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section id="behavioral-interviews" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🧠 Behavioral Interviews
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Behavioral interviews assess how candidates have handled real situations in past roles — and are among the most predictive signals for culture fit, communication, and leadership potential. When run well, they reveal patterns that technical screens cannot: how someone handles conflict, deals with failure, and collaborates across functions.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>The STAR Format</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
                {[
                  { letter: 'S', word: 'Situation', desc: 'What was the context? What was at stake? (30 seconds)' },
                  { letter: 'T', word: 'Task', desc: 'What was your specific responsibility? (15 seconds)' },
                  { letter: 'A', word: 'Action', desc: 'What did YOU do? Listen for "I" not "we". (90 seconds)' },
                  { letter: 'R', word: 'Result', desc: 'What happened? Quantify if possible. (30 seconds)' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 16, padding: 20, textAlign: 'center' }}>
                    <div style={{ color: '#22c55e', fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{item.letter}</div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{item.word}</div>
                    <div style={{ color: '#aaa', fontSize: 12, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>Competency-Based Question Bank</h3>
              {[
                { competency: 'Ownership', q: '"Tell me about a time you identified a significant problem outside your direct responsibilities and what you did about it."' },
                { competency: 'Conflict Resolution', q: '"Describe a time you had a significant technical disagreement with a colleague. How did you resolve it?"' },
                { competency: 'Failure & Learning', q: '"Walk me through the most significant failure in your career and what you learned from it."' },
                { competency: 'Ambiguity Navigation', q: '"Tell me about a project where the requirements were unclear or kept changing. How did you handle it?"' },
                { competency: 'Cross-Functional Influence', q: '"Give me an example of a time you had to convince non-technical stakeholders to change direction or invest in technical work."' },
                { competency: 'Mentorship', q: '"Describe how you have helped a junior engineer grow. What approach did you take and what was the outcome?"' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20, display: 'flex', gap: 16 }}>
                  <div style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', fontWeight: 700, fontSize: 11, padding: '3px 10px', borderRadius: 100, flexShrink: 0, height: 'fit-content', marginTop: 2 }}>{item.competency}</div>
                  <div style={{ color: '#bbb', fontSize: 14, lineHeight: 1.6 }}>{item.q}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#ef4444', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Red Flags in Behavioral Interviews</h3>
              {[
                'Uses "we" consistently — cannot articulate their personal contribution vs team output',
                'Cannot recall a genuine failure — suggests lack of self-awareness or resume polishing',
                'Blames others for every conflict or failure with no self-reflection',
                'Vague answers that do not include specific actions, timelines, or outcomes',
                'Dismisses or minimizes the perspectives of non-technical colleagues',
                'Cannot describe mentoring or helping others — signals poor team collaboration',
              ].map((flag, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#ef4444', flexShrink: 0 }}>✗</span> {flag}
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section id="role-specific-screens" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🎯 Role-Specific Technical Screens
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              A frontend engineer and a DevOps engineer should not take the same technical screen. Role-specific assessments yield dramatically better signal than generic algorithm problems because they test skills actually used on the job. Here is what to assess by discipline.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20 }}>
              {[
                {
                  role: 'Frontend Engineer',
                  color: '#60a5fa',
                  areas: ['React component architecture (state management, memoization, context vs Redux)', 'CSS layout and responsive design (Flexbox, Grid, media queries)', 'Browser APIs (performance, accessibility, Web APIs)', 'Bundle optimization (code splitting, lazy loading, tree shaking)', 'Testing (unit, integration with React Testing Library, E2E with Playwright)'],
                  practical: 'Build a filterable list with pagination and error states. Evaluate: component structure, performance, accessibility, and code organization.',
                },
                {
                  role: 'Backend Engineer',
                  color: '#22c55e',
                  areas: ['Database design (normalization, indexing strategy, query optimization)', 'REST and GraphQL API design (endpoint design, versioning, error handling)', 'Authentication and authorization patterns (JWT, OAuth, RBAC)', 'Caching strategies (Redis, CDN, application-level caching)', 'Basic algorithms for data processing (sorting, grouping, aggregation)'],
                  practical: 'Design a rate-limited API endpoint with authentication. Evaluate: security, scalability, error handling, and documentation.',
                },
                {
                  role: 'Mobile Engineer',
                  color: '#fbbf24',
                  areas: ['Platform-specific lifecycle (iOS UIKit/SwiftUI, Android Compose/View lifecycle)', 'Offline-first architecture (local storage, sync strategies, conflict resolution)', 'Performance (memory management, frame rate, battery optimization)', 'Networking (URLSession/Retrofit, caching, retry logic)', 'Cross-platform considerations (React Native or Flutter state management)'],
                  practical: 'Implement a screen that fetches data, handles offline state, and shows loading/error/success states. Evaluate: architecture, offline handling, and UX polish.',
                },
                {
                  role: 'DevOps / Platform Engineer',
                  color: '#f97316',
                  areas: ['CI/CD pipeline design (GitHub Actions, Jenkins, CircleCI)', 'Container orchestration (Kubernetes concepts, Helm, service mesh basics)', 'Infrastructure as Code (Terraform, Pulumi, AWS CDK)', 'Observability (logging, metrics, tracing — ELK, Prometheus, Datadog)', 'Reliability engineering (SLOs, error budgets, incident response)'],
                  practical: 'Design a CI/CD pipeline for a Node.js API with staging and production environments. Evaluate: pipeline stages, test integration, deployment strategy, and rollback plan.',
                },
              ].map((role, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${role.color}33`, borderRadius: 20, padding: 28 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ background: `${role.color}22`, color: role.color, fontWeight: 800, fontSize: 13, padding: '4px 14px', borderRadius: 100 }}>{role.role}</div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ color: '#aaa', fontWeight: 600, fontSize: 12, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Assessment Areas</div>
                    {role.areas.map((area, j) => (
                      <div key={j} style={{ color: '#bbb', fontSize: 13, marginBottom: 6, display: 'flex', gap: 8 }}>
                        <span style={{ color: role.color, flexShrink: 0 }}>✓</span> {area}
                      </div>
                    ))}
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 16 }}>
                    <div style={{ color: role.color, fontWeight: 600, fontSize: 12, marginBottom: 6 }}>Recommended Practical Assessment</div>
                    <div style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6 }}>{role.practical}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section id="scoring-evaluation" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📊 Scoring & Evaluation
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Without a consistent scoring framework, interview decisions are driven by gut feeling, recency bias, and social dynamics in the debrief room. A structured 1–4 rubric applied independently by each interviewer, before group discussion, dramatically improves consistency and reduces the influence of dominant voices.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>The 1–4 Scoring Scale</h3>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  { score: '4 — Strong Hire', color: '#22c55e', desc: 'Candidate significantly exceeded expectations for this dimension. Evidence is clear and specific. Would advocate strongly for this hire. Rare — should apply to genuinely exceptional candidates.' },
                  { score: '3 — Hire', color: '#60a5fa', desc: 'Candidate met expectations clearly. Solid performance with no significant concerns. Standard positive recommendation. Most successful hires score here.' },
                  { score: '2 — Lean No Hire', color: '#fbbf24', desc: 'Candidate showed some positive signals but had meaningful gaps relative to expectations. Could potentially improve. A weak hire recommendation that requires calibration with other signals.' },
                  { score: '1 — No Hire', color: '#ef4444', desc: 'Candidate did not meet expectations on this dimension. Clear gaps that would impact performance. No amount of onboarding would compensate.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ background: `${item.color}22`, color: item.color, fontWeight: 800, fontSize: 12, padding: '4px 12px', borderRadius: 100, flexShrink: 0, whiteSpace: 'nowrap', marginTop: 2 }}>{item.score}</div>
                    <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: 'grid', gap: 16 }}>
              {[
                { principle: 'Independent Scoring Before Debrief', desc: 'Require each interviewer to submit their scores and written evidence before the group debrief. This is the single most important anti-bias measure in the entire process. When strong interviewers share opinions first, others anchor to their view.' },
                { principle: 'Evidence, Not Impressions', desc: 'Scores must be backed by specific evidence: quote the candidate, describe what they did or said. "I got a good feeling" is not evidence. "The candidate independently identified the race condition in step 3 without prompting" is evidence.' },
                { principle: 'Hiring Committee vs Hiring Manager', desc: 'For roles above L4, consider a hiring committee with 3–4 independent reviewers rather than a single hiring manager. This distributes accountability, reduces single-manager bias, and improves consistency across the team.' },
                { principle: 'Calibration Sessions', desc: 'Monthly calibration sessions where the hiring team reviews 2–3 recent decisions to assess consistency. Are your "3 — Hire" decisions performing as expected? Calibration is how you close the feedback loop on your rubric.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 15, marginBottom: 8 }}>{item.principle}</div>
                  <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 */}
          <section id="avoiding-bias" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⚖️ Avoiding Bias in Technical Hiring
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Bias in technical hiring is not a question of intent — it is a structural problem that affects every team that does not actively design against it. The most common biases (affinity bias, halo effect, gender bias, name bias) are all well-documented in engineering hiring contexts and are addressable through process changes, not just training.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
              {[
                {
                  bias: 'Structured Interview Process',
                  action: 'Same questions in the same order for every candidate at the same level. Removes the advantage conferred by "natural rapport" with the interviewer.',
                },
                {
                  bias: 'Blind Resume Review',
                  action: 'Remove names, graduation years, and school names from resumes before the initial screen. Addresses name-based and age-based discrimination proven by resume audit studies.',
                },
                {
                  bias: 'Standardized Questions',
                  action: 'Use a pre-written question set. Ad-hoc questions tend to favor candidates similar to the interviewer (same school, same technology background, same culture).',
                },
                {
                  bias: 'Diverse Interview Panels',
                  action: 'Include interviewers of different genders, backgrounds, and levels in the panel. Diverse panels consistently produce more balanced assessments and better hiring outcomes.',
                },
                {
                  bias: 'Eliminate Brain Teasers',
                  action: 'Brain teasers ("How many golf balls fit in a school bus?") have zero correlation with job performance and significantly disadvantage candidates from non-Western educational backgrounds. Remove them entirely.',
                },
                {
                  bias: 'Halo Effect Mitigation',
                  action: 'Grade each interview dimension independently. A candidate who gives an exceptional answer to question 1 should not get a higher score on question 3 simply because they started well.',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20, display: 'flex', gap: 16 }}>
                  <span style={{ color: '#22c55e', fontSize: 18, flexShrink: 0 }}>✓</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 6 }}>{item.bias}</div>
                    <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9 */}
          <section id="candidate-experience" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🤝 Candidate Experience
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Every candidate who goes through your process — whether they receive an offer or not — is a walking advertisement for your employer brand. Developers talk. Negative interview experiences spread instantly on Blind, Reddit, and engineering Twitter. A thoughtful candidate experience is not just the right thing to do; it is a competitive advantage in tight talent markets.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { phase: 'Application Response', standard: 'Within 2 business days', detail: 'Acknowledge every application. Rejection emails beat silence every time.' },
                { phase: 'Between Rounds', standard: 'Within 24 hours', detail: 'Communicate next steps immediately after each round.' },
                { phase: 'Final Decision', standard: 'Within 5 business days', detail: 'Never ghost. Give a clear timeline and honor it.' },
                { phase: 'Offer to Deadline', standard: '5–7 business days minimum', detail: 'Give candidates time to evaluate and negotiate without pressure.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 6 }}>{item.phase}</div>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{item.standard}</div>
                  <div style={{ color: '#888', fontSize: 12, lineHeight: 1.5 }}>{item.detail}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gap: 16 }}>
              {[
                {
                  topic: 'Giving Useful Feedback',
                  desc: 'Most companies refuse to give rejection feedback, citing legal risk. This is often overstated. Structured behavioral feedback — "Strong systems design thinking, gap in communication of trade-offs" — is generally safe and creates enormous goodwill. Rejected candidates who receive honest feedback frequently refer other strong engineers.',
                },
                {
                  topic: 'Negotiation Culture',
                  desc: 'Treat negotiation as normal and expected. Candidates who negotiate are demonstrating the same business acumen you want them to bring to the job. Never rescind an offer due to negotiation (this is illegal in some jurisdictions and always damages your reputation). Prepare a clear range and be honest about constraints.',
                },
                {
                  topic: 'Post-Offer Nurturing',
                  desc: 'After an offer is accepted, the candidate is still at risk of counter-offers and cold feet. Assign a buddy engineer to stay in touch weekly. Share team news, engineering blog posts, and upcoming onboarding details. This reduces offer decline and no-show rates significantly.',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 15, marginBottom: 8 }}>{item.topic}</div>
                  <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 10 */}
          <section id="how-codazz-vets" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🏆 How Codazz Vets Engineers
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              At Codazz, we have spent years refining our engineering vetting process across our offices in Edmonton, Canada and Chandigarh, India. Every developer placed with a client has passed a rigorous 3-stage process designed to surface both technical excellence and real-world collaboration skills.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 32 }}>
              {[
                {
                  stage: 'Stage 1',
                  name: 'Async Technical Screen',
                  duration: '90 minutes',
                  color: '#22c55e',
                  desc: 'Candidates complete a role-specific practical assessment: a small feature build, a debugging exercise, or an architecture doc review. Evaluated on code quality, edge case handling, documentation, and problem approach. No abstract algorithm puzzles — every task maps directly to real client work.',
                  looks_for: ['Clean, readable code with meaningful variable names and comments', 'Edge case handling and defensive programming', 'Appropriate use of language/framework idioms', 'Clear written communication in explanations'],
                },
                {
                  stage: 'Stage 2',
                  name: 'Technical Pairing Session',
                  duration: '60 minutes',
                  color: '#60a5fa',
                  desc: 'A live collaborative session with a Codazz senior engineer. The candidate pair-programs on a realistic problem similar to work they would do for clients. We evaluate how they ask for help, how they respond to hints, whether they think aloud, and how they handle not knowing an answer.',
                  looks_for: ['Communicates thought process clearly without prompting', 'Asks targeted clarifying questions before writing code', 'Handles ambiguity without freezing', 'Responds positively to feedback and course-correction'],
                },
                {
                  stage: 'Stage 3',
                  name: 'Culture & Collaboration Interview',
                  duration: '45 minutes',
                  color: '#fbbf24',
                  desc: 'A structured behavioral interview using a standardized question set across all candidates. We assess ownership, communication with non-technical stakeholders, how they handle tight timelines, and their approach to knowledge sharing. This stage uses independent scoring before debrief.',
                  looks_for: ['Specific examples of proactive ownership and initiative', 'Evidence of cross-functional communication skills', 'Growth mindset — how they handle feedback and failure', 'Genuine curiosity and learning orientation'],
                },
              ].map((stage, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${stage.color}33`, borderRadius: 20, padding: 28 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
                    <div style={{ background: `${stage.color}22`, color: stage.color, fontWeight: 800, fontSize: 12, padding: '3px 12px', borderRadius: 100 }}>{stage.stage}</div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 17 }}>{stage.name}</div>
                    <div style={{ color: '#888', fontSize: 13 }}>{stage.duration}</div>
                  </div>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{stage.desc}</p>
                  <div style={{ color: '#aaa', fontWeight: 600, fontSize: 12, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>What We Look For</div>
                  {stage.looks_for.map((item, j) => (
                    <div key={j} style={{ color: '#bbb', fontSize: 13, marginBottom: 6, display: 'flex', gap: 8 }}>
                      <span style={{ color: stage.color, flexShrink: 0 }}>→</span> {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
              {[
                { stat: '<5%', label: 'Pass rate — we only place top-tier engineers' },
                { stat: '3 stages', label: 'Comprehensive multi-signal vetting process' },
                { stat: '48 hours', label: 'Average time from request to matched profiles' },
                { stat: '98%', label: 'Client satisfaction rate with placed engineers' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24, textAlign: 'center' }}>
                  <div style={{ color: '#22c55e', fontSize: 28, fontWeight: 800, marginBottom: 6 }}>{s.stat}</div>
                  <div style={{ color: '#aaa', fontSize: 12, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: 36, textAlign: 'center' }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Skip the Interview Process. Hire Pre-Vetted.</h3>
              <p style={{ color: '#bbb', marginBottom: 24, lineHeight: 1.7 }}>We handle the entire technical vetting process so you do not have to. Get matched with pre-screened senior engineers in 48 hours — no whiteboard required.</p>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 36px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 16, display: 'inline-block' }}>
                Hire Pre-Vetted Developers from Codazz
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 28 }}>
              ❓ Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, marginBottom: 12, overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', background: openFaq === i ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)', border: 'none', padding: '20px 24px', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
                  >
                    <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ color: '#22c55e', fontSize: 22, fontWeight: 300, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 20px', background: 'rgba(34,197,94,0.05)' }}>
                      <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0, fontSize: 14 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="reveal" style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {relatedPosts.map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
                    <span style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>{post.category}</span>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginTop: 12, marginBottom: 8, lineHeight: 1.4 }}>{post.title}</div>
                    <div style={{ color: '#666', fontSize: 12 }}>{post.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </article>

        {/* Sticky Sidebar */}
        <aside style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
          {/* TOC */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24, marginBottom: 24 }}>
            <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Table of Contents</div>
            {tocItems.map(item => (
              <a key={item.id} href={`#${item.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 10, textDecoration: 'none', marginBottom: 2, background: activeSection === item.id ? 'rgba(34,197,94,0.12)' : 'transparent', transition: 'background 0.2s' }}>
                <span style={{ fontSize: 14 }}>{item.emoji}</span>
                <span style={{ color: activeSection === item.id ? '#22c55e' : '#aaa', fontSize: 13, fontWeight: activeSection === item.id ? 600 : 400, lineHeight: 1.3 }}>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Author Card */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24, marginBottom: 24 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: '#000', flexShrink: 0 }}>R</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Raman Makkar</div>
                <div style={{ color: '#888', fontSize: 12 }}>Founder, Codazz</div>
              </div>
            </div>
            <p style={{ color: '#aaa', fontSize: 13, lineHeight: 1.6, margin: 0 }}>Raman has built and vetted engineering teams across North America and India. Codazz is headquartered in Edmonton, Canada with an engineering studio in Chandigarh, India.</p>
          </div>

          {/* CTA Card */}
          <div style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: 24, textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>👨‍💻</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Skip the Interviews</div>
            <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.5, marginBottom: 16 }}>Hire pre-vetted senior engineers from Codazz — matched in 48 hours.</p>
            <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '10px 20px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 13, display: 'inline-block' }}>
              Hire Now
            </Link>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
