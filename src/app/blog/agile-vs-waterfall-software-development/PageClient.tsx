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
  { id: 'methodology-overview', label: 'Methodology Overview', emoji: '📐' },
  { id: 'head-to-head', label: 'Head-to-Head Comparison', emoji: '⚡' },
  { id: 'agile-deep-dive', label: 'Agile Deep Dive', emoji: '🔄' },
  { id: 'waterfall-deep-dive', label: 'Waterfall Deep Dive', emoji: '🌊' },
  { id: 'hybrid-approaches', label: 'Hybrid Approaches', emoji: '🔀' },
  { id: 'when-to-choose', label: 'When to Choose Which', emoji: '🧭' },
  { id: 'real-examples', label: 'Real Project Examples', emoji: '📱' },
  { id: 'codazz-agile', label: 'How Codazz Uses Agile', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'mvp-development-guide', title: 'MVP Development: The Complete 2026 Guide', category: 'Strategy', readTime: '14 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Pricing', readTime: '12 min' },
  { slug: 'in-house-vs-outsourcing-development', title: 'In-House vs Outsourcing: Full Cost Comparison 2026', category: 'Business', readTime: '10 min' },
];

export default function PageClient() {
  const mainRef = useReveal();
  const [activeSection, setActiveSection] = useState('key-takeaways');
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id)).filter(Boolean);
      let current = tocSections[0].id;
      for (const el of sections) {
        if (el && el.getBoundingClientRect().top < 160) current = el.id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTocOpen(false);
  };

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .toc-link { background: none; border: none; cursor: pointer; text-align: left; padding: 7px 14px; border-radius: 10px; font-size: 13.5px; transition: background 0.2s, color 0.2s; display: block; width: 100%; }
        .toc-link:hover { background: rgba(34,197,94,0.12); color: #22c55e; }
        .toc-link.active { background: rgba(34,197,94,0.18); color: #22c55e; font-weight: 700; }
        .compare-table th, .compare-table td { padding: 13px 16px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 14px; }
        .compare-table th { background: rgba(34,197,94,0.10); color: #22c55e; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.04em; }
        .compare-table tr:hover td { background: rgba(255,255,255,0.03); }
        .faq-item { border: 1px solid rgba(255,255,255,0.09); border-radius: 14px; overflow: hidden; margin-bottom: 12px; }
        .faq-q { background: rgba(255,255,255,0.04); padding: 18px 22px; cursor: pointer; font-weight: 600; font-size: 15px; display: flex; justify-content: space-between; align-items: center; user-select: none; }
        .faq-q:hover { background: rgba(34,197,94,0.08); }
        .faq-a { padding: 0 22px; max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.2s; color: rgba(255,255,255,0.75); font-size: 14.5px; line-height: 1.75; }
        .faq-a.open { max-height: 450px; padding: 16px 22px 20px; }
        .phase-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 16px; padding: 20px 22px; transition: border-color 0.2s; }
        .phase-card:hover { border-color: rgba(34,197,94,0.35); }
        .tip-card { background: rgba(34,197,94,0.07); border-left: 4px solid #22c55e; border-radius: 0 14px 14px 0; padding: 16px 20px; margin: 14px 0; }
        @media (max-width: 900px) { .blog-layout { flex-direction: column !important; } .toc-sidebar { display: none !important; } }
      `}</style>

      <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Navbar />

        {/* Hero */}
        <section style={{ position: 'relative', paddingTop: 120, paddingBottom: 80, overflow: 'hidden' }}>
          <HeroBackground />
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 999, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Development Methodology Guide 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 22, letterSpacing: '-0.02em' }}>
              Agile vs Waterfall: Which Software Development<br />
              <span style={{ color: '#22c55e' }}>Methodology Should You Choose?</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: 680, margin: '0 auto 32px' }}>
              Picking the wrong development methodology can doom your project before a single line of code is written. This is the definitive 2026 breakdown — from Scrum to SAFe, Kanban to Waterfall — with real examples and honest recommendations.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
              <span style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 999, padding: '6px 16px', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>March 20, 2026</span>
              <span style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 999, padding: '6px 16px', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>17 min read</span>
              <span style={{ background: 'rgba(34,197,94,0.12)', borderRadius: 999, padding: '6px 16px', fontSize: 13, color: '#22c55e' }}>By Raman Makkar, CEO</span>
            </div>
          </div>
        </section>

        {/* Main content + sidebar */}
        <main ref={mainRef as React.RefObject<HTMLElement>} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px' }}>
          <div className="blog-layout" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>

            {/* Article body */}
            <article style={{ flex: 1, minWidth: 0 }}>

              {/* Key Takeaways */}
              <section id="key-takeaways" style={{ marginBottom: 64 }}>
                <div className="reveal" style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 28, padding: '32px 36px' }}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', marginBottom: 20 }}>🎯 Key Takeaways</h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      'Agile is the default choice for 85% of software projects in 2026 — but Waterfall still wins in specific, well-defined scenarios.',
                      'Scrum (2-week sprints, daily standups) is the most widely used Agile framework — favored by startups and product companies.',
                      'Kanban is better than Scrum for support, maintenance, or marketing teams with continuous, unpredictable inflow of work.',
                      'SAFe (Scaled Agile Framework) is for large enterprises coordinating 50+ developers across multiple product lines.',
                      'Waterfall works best for: government contracts, construction software, compliance-driven systems with fixed specs.',
                      'Hybrid (Water-Scrum-Fall) is increasingly popular — Waterfall for planning and contracts, Agile for execution.',
                      'Codazz uses 2-week Agile sprints with weekly client demos — giving you visibility and control at every step.',
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ color: '#22c55e', fontSize: 18, flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Methodology Overview */}
              <section id="methodology-overview" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  📐 What Are Development Methodologies?
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, lineHeight: 1.75 }}>
                  A development methodology is the framework that governs how your software team plans, builds, tests, and ships code. It determines your meeting cadence, how requirements are written, how bugs are prioritized, and how work flows from idea to deployment.
                </p>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, lineHeight: 1.75 }}>
                  The wrong methodology does not just slow you down — it creates misalignment between what clients expect and what engineers build. The right one gives your team a shared language, clear ceremonies, and predictable delivery rhythms.
                </p>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                  {[
                    { name: 'Waterfall', era: '1970s–1990s', usage: '~15% of projects', color: '#3b82f6', desc: 'Linear, phase-by-phase. Each phase fully complete before the next begins.' },
                    { name: 'Scrum', era: '1990s–present', usage: '~58% of Agile teams', color: '#22c55e', desc: 'Iterative sprints (1–4 weeks) with defined ceremonies and roles.' },
                    { name: 'Kanban', era: '2000s–present', usage: '~30% of Agile teams', color: '#f59e0b', desc: 'Continuous flow with visual board. No fixed sprints, pull-based system.' },
                    { name: 'SAFe', era: '2011–present', usage: '~35% of enterprises', color: '#a855f7', desc: 'Enterprise Agile at scale. Coordinates multiple Agile teams and PIs.' },
                    { name: 'Hybrid', era: '2010s–present', usage: 'Growing fast', color: '#ef4444', desc: 'Mixes Waterfall planning with Agile execution. Pragmatic middle ground.' },
                  ].map((m, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${m.color}30`, borderRadius: 16, padding: '20px 18px' }}>
                      <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 4, color: '#fff' }}>{m.name}</div>
                      <div style={{ fontSize: 11, color: m.color, fontWeight: 700, textTransform: 'uppercase', marginBottom: 8 }}>{m.usage}</div>
                      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.65 }}>{m.desc}</div>
                      <div style={{ marginTop: 10, fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{m.era}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Head-to-Head */}
              <section id="head-to-head" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  ⚡ Agile vs Waterfall: Head-to-Head
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.75 }}>
                  The most important dimensions compared side by side.
                </p>
                <div className="reveal" style={{ overflowX: 'auto', borderRadius: 18, border: '1px solid rgba(255,255,255,0.09)' }}>
                  <table className="compare-table" style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255,255,255,0.02)' }}>
                    <thead>
                      <tr>
                        <th>Dimension</th>
                        <th style={{ color: '#22c55e' }}>Agile</th>
                        <th style={{ color: '#3b82f6' }}>Waterfall</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Delivery Style', 'Iterative — ship every 2 weeks', 'Linear — ship at project end'],
                        ['Requirements', 'Evolve throughout project', 'Fixed before development starts'],
                        ['Client Involvement', 'Continuous (weekly demos)', 'Mainly at start and end'],
                        ['Flexibility to Change', 'High — changes welcomed', 'Low — changes are expensive'],
                        ['Risk Management', 'Early discovery via iteration', 'Risk surfaces late (costly)'],
                        ['Documentation', 'Lightweight, just enough', 'Heavy upfront documentation'],
                        ['Time to First Demo', '2 weeks (first sprint)', 'Months (post-development)'],
                        ['Team Structure', 'Cross-functional, self-organizing', 'Siloed by discipline'],
                        ['Best Project Size', 'Small to large, any budget', 'Large, well-defined projects'],
                        ['Budget Predictability', 'Variable (scope can expand)', 'Fixed (if specs are frozen)'],
                        ['Quality Feedback Loop', 'Continuous (testing in sprint)', 'Late-stage (QA phase)'],
                        ['Recovery from Mistakes', 'Fast — caught in next sprint', 'Slow and expensive'],
                        ['Popular Tools', 'Jira, Linear, GitHub Projects', 'MS Project, Smartsheet'],
                        ['Certifications', 'Scrum Master, SAFe, CSM', 'PMP, Prince2'],
                      ].map(([dim, agile, waterfall], i) => (
                        <tr key={i}>
                          <td style={{ fontWeight: 600, color: '#fff' }}>{dim}</td>
                          <td style={{ color: 'rgba(255,255,255,0.8)' }}>{agile}</td>
                          <td style={{ color: 'rgba(255,255,255,0.65)' }}>{waterfall}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Agile Deep Dive */}
              <section id="agile-deep-dive" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  🔄 Agile Deep Dive: Scrum, Kanban & SAFe
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, lineHeight: 1.75 }}>
                  "Agile" is not a single methodology — it is a philosophy expressed through specific frameworks. Here is how the three most important ones work.
                </p>

                {/* Scrum */}
                <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 22, padding: '28px 30px', marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 24 }}>🏉</span>
                    <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>Scrum</h3>
                    <span style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e', borderRadius: 999, padding: '3px 12px', fontSize: 12, fontWeight: 700 }}>Most Popular</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14.5, lineHeight: 1.75, marginBottom: 20 }}>
                    Scrum organizes work into fixed-length Sprints (usually 2 weeks). Each sprint starts with planning, has a daily 15-minute standup, and ends with a review and retrospective. The Product Backlog — a prioritized list of features — drives everything.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 20 }}>
                    {[
                      { role: 'Product Owner', desc: 'Owns the backlog. Represents the business. Prioritizes features by value.' },
                      { role: 'Scrum Master', desc: 'Facilitates ceremonies. Removes blockers. Protects team from scope creep.' },
                      { role: 'Dev Team', desc: 'Cross-functional (devs, designers, QA). Self-organizing. Owns delivery.' },
                    ].map((r, i) => (
                      <div key={i} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: '14px 16px' }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: '#22c55e', marginBottom: 6 }}>{r.role}</div>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{r.desc}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 10 }}>5 Scrum Ceremonies</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['Sprint Planning (2–4 hrs)', 'Daily Standup (15 min)', 'Sprint Review (1–2 hrs)', 'Sprint Retrospective (1 hr)', 'Backlog Refinement (1 hr/wk)'].map((c, i) => (
                        <span key={i} style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', borderRadius: 999, padding: '5px 14px', fontSize: 12.5, fontWeight: 600 }}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: 16, fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                    <strong style={{ color: '#fff' }}>Best for:</strong> Product startups, consumer apps, B2B SaaS platforms, any project where requirements evolve. Requires a dedicated, committed Product Owner.
                  </div>
                </div>

                {/* Kanban */}
                <div className="reveal" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 22, padding: '28px 30px', marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 24 }}>📋</span>
                    <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>Kanban</h3>
                    <span style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', borderRadius: 999, padding: '3px 12px', fontSize: 12, fontWeight: 700 }}>Continuous Flow</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14.5, lineHeight: 1.75, marginBottom: 20 }}>
                    Kanban has no sprints. Work flows continuously from a backlog through stages (To Do → In Progress → Review → Done) with Work in Progress (WIP) limits enforced at each stage. Teams pull new work when they have capacity.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                    {[
                      { principle: 'Visualize Work', desc: 'Every task on a board — no hidden work in progress.' },
                      { principle: 'Limit WIP', desc: 'Max 2–3 items per developer at any time. Prevents multitasking chaos.' },
                      { principle: 'Manage Flow', desc: 'Track cycle time (from start to done). Optimize for throughput.' },
                      { principle: 'Explicit Policies', desc: 'Clear rules for when to pull work, what "done" means.' },
                    ].map((p, i) => (
                      <div key={i} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: '14px 16px' }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: '#f59e0b', marginBottom: 6 }}>{p.principle}</div>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{p.desc}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 16, fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                    <strong style={{ color: '#fff' }}>Best for:</strong> Support and maintenance teams, DevOps/infrastructure, marketing, legal, or any team with continuous unpredictable inflow of work. Poor fit for building new features rapidly.
                  </div>
                </div>

                {/* SAFe */}
                <div className="reveal" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: 22, padding: '28px 30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 24 }}>🏢</span>
                    <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>SAFe (Scaled Agile Framework)</h3>
                    <span style={{ background: 'rgba(168,85,247,0.15)', color: '#a855f7', borderRadius: 999, padding: '3px 12px', fontSize: 12, fontWeight: 700 }}>Enterprise</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14.5, lineHeight: 1.75, marginBottom: 20 }}>
                    SAFe is what happens when 50–500 developers all need to work in Agile simultaneously. It adds Agile Release Trains (ARTs), Program Increments (PIs — 8–12 week planning cycles), and enterprise-level governance on top of Scrum/Kanban teams.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#a855f7', textTransform: 'uppercase', marginBottom: 8 }}>Who Uses SAFe</div>
                      {['Large banks and financial institutions', 'Government software agencies', 'Healthcare systems (EHR platforms)', 'Automotive and aerospace software', 'Large SaaS companies (1000+ employees)'].map((u, i) => (
                        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                          <span style={{ color: '#a855f7' }}>•</span>
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)' }}>{u}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', marginBottom: 8 }}>SAFe Risks</div>
                      {['Heavy overhead and ceremony', 'Requires dedicated SAFe coaches', 'Can feel like Waterfall in disguise', '18–24 months to see full benefits', 'Overkill for teams under 50 devs'].map((r, i) => (
                        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                          <span style={{ color: '#ef4444' }}>⚠</span>
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)' }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Waterfall Deep Dive */}
              <section id="waterfall-deep-dive" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  🌊 Waterfall Deep Dive: Phases & Reality
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, lineHeight: 1.75 }}>
                  Waterfall is not dead — it is just misapplied. Understanding its phases and honest limitations will help you decide if it fits your project.
                </p>
                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.09)' }}>
                  {[
                    { phase: '1. Requirements', duration: '2–8 weeks', color: '#3b82f6', desc: 'All business and technical requirements are fully documented before any design or coding begins. Involves stakeholders, BAs, and architects. Deliverable: Software Requirements Specification (SRS).' },
                    { phase: '2. System Design', duration: '2–6 weeks', color: '#6366f1', desc: 'Technical architecture, database schema, API contracts, and UI wireframes are defined. No ambiguity allowed at this stage. Deliverable: System Design Document.' },
                    { phase: '3. Implementation', duration: '4–24 weeks', color: '#8b5cf6', desc: 'Developers code the entire system based on design docs. No client demos, no pivots. Changes to requirements at this stage are formal (and expensive) change requests.' },
                    { phase: '4. Testing / QA', duration: '2–8 weeks', color: '#a855f7', desc: 'Dedicated QA phase after all development is complete. Integration testing, UAT, performance testing. Bugs found here are expensive — any fixes may cascade through the codebase.' },
                    { phase: '5. Deployment', duration: '1–4 weeks', color: '#d946ef', desc: 'System is released to production. Often a big-bang release. Data migration, user training, and go-live support happen here.' },
                    { phase: '6. Maintenance', duration: 'Ongoing', color: '#ec4899', desc: 'Post-launch bug fixes and minor enhancements. Significant new features typically require a new project with a new Waterfall cycle.' },
                  ].map((p, i) => (
                    <div key={i} style={{ display: 'flex', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.07)' : undefined }}>
                      <div style={{ background: p.color, width: 6, flexShrink: 0 }} />
                      <div style={{ padding: '20px 24px', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: '#fff' }}>{p.phase}</h3>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{p.duration}</span>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="tip-card reveal" style={{ marginTop: 24 }}>
                  <strong style={{ color: '#22c55e' }}>The Waterfall Trap:</strong>
                  <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,0.75)', fontSize: 14.5, lineHeight: 1.7 }}>
                    Research by the Standish Group (CHAOS Report) found that 66% of Waterfall projects fail or are significantly challenged. The core problem: requirements written before any development is done are almost always wrong, incomplete, or misunderstood. By the time the error is discovered (in phase 4 or 5), the cost to fix it has multiplied 50–100x.
                  </p>
                </div>
              </section>

              {/* Hybrid Approaches */}
              <section id="hybrid-approaches" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  🔀 Hybrid Approaches: The Pragmatic Middle Ground
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.75 }}>
                  In practice, the most successful enterprise projects use a hybrid model — not a pure Agile or pure Waterfall approach.
                </p>
                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {[
                    {
                      name: 'Water-Scrum-Fall',
                      icon: '💧',
                      desc: 'Waterfall at the project boundaries, Agile in the middle. Requirements are fully scoped upfront (Waterfall). Development runs in Agile sprints (Scrum). Deployment follows a traditional release cycle (Waterfall).',
                      when: 'Enterprise projects with fixed procurement contracts but flexible development teams.',
                      used: 'IBM, Accenture, government digital services',
                    },
                    {
                      name: 'Agile with Milestones',
                      icon: '🏁',
                      desc: 'Pure Agile sprints internally, but with committed milestone dates for external stakeholders. Sprint velocity is used to predict milestone delivery. Changes allowed mid-sprint only for critical items.',
                      when: 'Funded startups with investor reporting obligations or client contracts with delivery milestones.',
                      used: 'Most VC-backed B2B SaaS companies',
                    },
                    {
                      name: 'Dual-Track Agile',
                      icon: '🛤️',
                      desc: 'Two parallel tracks run simultaneously: a Discovery track (UX research, prototyping, validation) and a Delivery track (development, QA, shipping). Discovery is always 1–2 sprints ahead of delivery.',
                      when: 'Product companies with dedicated product design teams that need to validate before building.',
                      used: 'Spotify, Intercom, Figma, Airbnb',
                    },
                  ].map((h, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 20, padding: '24px 26px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <span style={{ fontSize: 22 }}>{h.icon}</span>
                        <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>{h.name}</h3>
                      </div>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14.5, lineHeight: 1.75, marginBottom: 14 }}>{h.desc}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                        <div style={{ background: 'rgba(34,197,94,0.07)', borderRadius: 10, padding: '10px 14px' }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', marginBottom: 4 }}>WHEN TO USE</div>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{h.when}</div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 14px' }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>USED BY</div>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{h.used}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* When to Choose */}
              <section id="when-to-choose" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  🧭 When to Choose Agile vs Waterfall
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.75 }}>
                  A simple, honest decision framework. No buzzwords.
                </p>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
                  <div style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 20, padding: '24px 22px' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: '#22c55e', marginBottom: 16 }}>Choose Agile When...</h3>
                    {[
                      'Requirements are likely to change as you learn',
                      'You want to ship something usable within 4–6 weeks',
                      'Client/stakeholder feedback should drive iteration',
                      'Market speed matters more than total cost predictability',
                      'Your team is small and cross-functional',
                      'The product has never been built before (innovation)',
                      'You are a startup building product-market fit',
                      'You have an ongoing product with regular feature releases',
                    ].map((c, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                        <span style={{ color: '#22c55e', fontSize: 15, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.78)', lineHeight: 1.55 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: 20, padding: '24px 22px' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: '#3b82f6', marginBottom: 16 }}>Choose Waterfall When...</h3>
                    {[
                      'Requirements are completely fixed and extremely well-defined',
                      'Regulatory compliance requires full documentation upfront (FDA, DoD)',
                      'Fixed-price government or enterprise contracts with no change orders',
                      'The project is similar to one successfully built before',
                      'Client cannot be involved throughout — wants to specify, then receive',
                      'Large team coordination requires strict phase handoffs',
                      'Embedded systems, hardware-software integration projects',
                      'Migration projects with clear source and target states',
                    ].map((c, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                        <span style={{ color: '#3b82f6', fontSize: 15, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.78)', lineHeight: 1.55 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Real Project Examples */}
              <section id="real-examples" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  📱 Real Project Examples
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.75 }}>
                  Concrete examples of methodology choices and their outcomes — both success stories and cautionary tales.
                </p>
                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {[
                    {
                      project: 'Fintech Mobile App (Startup)',
                      methodology: 'Scrum — 2-week sprints',
                      outcome: 'Success',
                      color: '#22c55e',
                      detail: 'Team pivoted payment flow 3 times based on user testing in sprints 4–6. Final MVP launched in 14 weeks, raised Series A within 6 months. Would have been impossible under Waterfall — the winning flow was discovered during development.',
                    },
                    {
                      project: 'Healthcare EHR System (Enterprise)',
                      methodology: 'Hybrid (Water-Scrum-Fall)',
                      outcome: 'Success',
                      color: '#22c55e',
                      detail: 'HIPAA compliance and HL7 FHIR integration required strict upfront architecture (Waterfall phase). Feature development ran in Scrum sprints. Fixed procurement contract needed milestone dates — handled with sprint velocity projections.',
                    },
                    {
                      project: 'E-Commerce Platform Rebuild (Mid-market)',
                      methodology: 'Waterfall chosen by client',
                      outcome: 'Challenged',
                      color: '#f59e0b',
                      detail: 'Client insisted on fixed-price Waterfall contract for a new e-commerce platform. Discovered in month 6 (testing phase) that checkout flow requirements were wrong — customers had expected a marketplace model, not a traditional store. Re-work cost 40% of original budget.',
                    },
                    {
                      project: 'DevOps Infrastructure Team (Internal)',
                      methodology: 'Kanban',
                      outcome: 'Success',
                      color: '#22c55e',
                      detail: 'Infrastructure team handling incident response, capacity scaling, and CI/CD improvements moved from Scrum to Kanban. Cycle time dropped from 12 days to 4 days. Incidents resolved 60% faster. Sprints were inappropriate — work was reactive and unpredictable.',
                    },
                    {
                      project: 'Government Tax Filing System (Large-scale)',
                      methodology: 'Waterfall',
                      outcome: 'Failed',
                      color: '#ef4444',
                      detail: 'Strict Waterfall on a 3-year, $80M tax system modernization. Requirements locked in year 1 — tax law changed twice during development. Delivered software was partially obsolete on day one. Lesson: even compliance-driven government projects need Agile-compatible change mechanisms.',
                    },
                  ].map((ex, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${ex.color}30`, borderRadius: 18, padding: '22px 26px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{ex.project}</h3>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <span style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 999, padding: '3px 10px', fontSize: 12, color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>{ex.methodology}</span>
                          <span style={{ background: `${ex.color}20`, color: ex.color, borderRadius: 999, padding: '3px 10px', fontSize: 12, fontWeight: 700 }}>{ex.outcome}</span>
                        </div>
                      </div>
                      <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{ex.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How Codazz Uses Agile */}
              <section id="codazz-agile" style={{ marginBottom: 64 }}>
                <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 100%)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: '40px 36px' }}>
                  <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 14 }}>🚀 How Codazz Uses Agile Sprints</h2>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                    At Codazz, we have refined our Agile process over 140+ projects across 12 industries. Here is exactly how a typical engagement runs from kickoff to launch.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                    {[
                      { week: 'Week 1–2: Discovery Sprint', desc: 'We map every user story, define acceptance criteria, wireframe key screens in Figma, and set up the dev environment. You approve before Sprint 1 kicks off.' },
                      { week: 'Sprints 1–N: 2-Week Build Cycles', desc: 'Every sprint: Monday planning (2 hrs), daily async standups, Friday live demo with you. All code in your GitHub repo from day 1. Every feature shipped to staging for your review.' },
                      { week: 'Sprint Review & Retro', desc: 'After every sprint, we retrospect internally: what slowed us down, what can we improve? Sprint velocity is tracked and shared — no surprises on timelines.' },
                      { week: 'Launch Sprint', desc: 'Final sprint focuses on performance optimization, security hardening, production infrastructure setup, and go-live. We stay on call for 48 hours post-launch.' },
                    ].map((s, i) => (
                      <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'rgba(0,0,0,0.2)', borderRadius: 14, padding: '16px 20px' }}>
                        <span style={{ color: '#22c55e', fontWeight: 800, fontSize: 14, flexShrink: 0, minWidth: 6 }}>{i + 1}</span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 15, color: '#22c55e', marginBottom: 4 }}>{s.week}</div>
                          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14, marginBottom: 28 }}>
                    {[
                      { label: 'Sprint Length', value: '2 Weeks' },
                      { label: 'Client Demos', value: 'Weekly' },
                      { label: 'Avg. Velocity', value: '22–28 SP' },
                      { label: 'On-time Delivery', value: '94%' },
                    ].map((stat, i) => (
                      <div key={i} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: '14px 16px', textAlign: 'center', border: '1px solid rgba(34,197,94,0.15)' }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>{stat.value}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ background: '#22c55e', color: '#000', borderRadius: 14, padding: '14px 32px', fontWeight: 800, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
                      Start Your Project
                    </Link>
                    <Link href="/services/mobile-app-development" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', borderRadius: 14, padding: '14px 28px', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.15)' }}>
                      Our Services
                    </Link>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 28, letterSpacing: '-0.02em' }}>❓ Frequently Asked Questions</h2>
                <FAQSection />
              </section>

              {/* Related Posts */}
              <section style={{ marginBottom: 32 }}>
                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Related Articles</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {relatedPosts.map((post, i) => (
                    <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                      <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 14, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <div>
                          <div style={{ fontSize: 11, color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>{post.category}</div>
                          <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{post.title}</div>
                        </div>
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, flexShrink: 0, marginLeft: 16 }}>{post.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

            </article>

            {/* TOC Sidebar */}
            <aside className="toc-sidebar" style={{ width: 260, flexShrink: 0, position: 'sticky', top: 96, alignSelf: 'flex-start' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 18, padding: '20px 14px' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14, paddingLeft: 14 }}>
                  Table of Contents
                </div>
                {tocSections.map(s => (
                  <button key={s.id} className={`toc-link${activeSection === s.id ? ' active' : ''}`} onClick={() => scrollTo(s.id)} style={{ color: activeSection === s.id ? '#22c55e' : 'rgba(255,255,255,0.6)' }}>
                    <span style={{ marginRight: 8 }}>{s.emoji}</span>{s.label}
                  </button>
                ))}
                <div style={{ marginTop: 20, padding: '16px 14px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 14, textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Need a dev team?</div>
                  <Link href="/contact" style={{ background: '#22c55e', color: '#000', borderRadius: 10, padding: '9px 16px', fontWeight: 800, fontSize: 13, textDecoration: 'none', display: 'block' }}>
                    Talk to Codazz
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: 'Is Agile always better than Waterfall in 2026?',
      a: 'Not always — but it is better for most software products. Agile wins when requirements are uncertain or evolving, when speed to market matters, and when client feedback should shape the product. Waterfall still makes sense for regulatory projects with fully locked specifications, hardware-software integration work, or fixed-price government contracts where change is legally controlled. The real answer is: know your project type, then choose the methodology that fits — not the one that is trendy.',
    },
    {
      q: 'How long is a typical Agile sprint and why?',
      a: '2 weeks is the industry sweet spot and what Codazz uses. 1-week sprints are too short — not enough time to build meaningful features, and the overhead of planning/retro eats into delivery time. 4-week sprints are too long — you go a month without feedback, which defeats the purpose of iteration. 2 weeks gives you a meaningful unit of delivery, enough time to build 3–5 real features, and a natural check-in cadence for stakeholders.',
    },
    {
      q: 'What is the difference between Scrum and Kanban in practice?',
      a: 'The core difference: Scrum plans what you will do this sprint before the sprint starts. Kanban has no sprints — work is pulled continuously as capacity opens up. Use Scrum when building new features on a product roadmap. Use Kanban when managing ongoing support, bug queues, infrastructure tasks, or marketing requests where work arrives unpredictably and cannot wait for sprint planning. Many teams use both: Scrum for product development, Kanban for DevOps/support.',
    },
    {
      q: 'Can we switch from Waterfall to Agile mid-project?',
      a: 'Yes, but it requires a deliberate transition. First, complete the current Waterfall phase cleanly — do not leave half-finished documents. Then hold a kickoff meeting to establish Agile ceremonies, create a proper backlog from remaining requirements, and train the team on sprint rituals. Expect a 2–3 sprint "adjustment period" where velocity is lower than normal. The earlier in the project you switch, the less painful it is. Switching from Waterfall during a testing phase is almost never worth the disruption.',
    },
    {
      q: 'How does Codazz handle projects where clients want a fixed price but Agile delivery?',
      a: 'We use a scope-banded fixed-price model. We agree on a fixed set of must-have features (the core scope) at a fixed price. Nice-to-haves are listed as "Phase 2" items with estimated costs. Within the fixed scope, we run full Agile sprints — which means the client sees working software every 2 weeks and can reprioritize remaining features (but not add unbounded new scope). This gives clients cost certainty while preserving Agile flexibility. It is how we have delivered 94% of projects on time and on budget.',
    },
  ];
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item reveal">
          <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            <span>{faq.q}</span>
            <span style={{ marginLeft: 16, fontSize: 20, color: '#22c55e', flexShrink: 0 }}>{open === i ? '−' : '+'}</span>
          </div>
          <div className={`faq-a${open === i ? ' open' : ''}`}>{faq.a}</div>
        </div>
      ))}
    </div>
  );
}
