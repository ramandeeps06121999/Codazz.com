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
  { id: 'model-definitions', label: 'Model Definitions', emoji: '🗺️' },
  { id: 'head-to-head', label: 'Head-to-Head Comparison', emoji: '⚡' },
  { id: 'cost-comparison', label: 'Cost Comparison', emoji: '💰' },
  { id: 'timezone-communication', label: 'Timezone & Communication', emoji: '🕐' },
  { id: 'quality-ip', label: 'Quality & IP Protection', emoji: '🛡️' },
  { id: 'region-breakdown', label: 'Region Breakdown', emoji: '🌍' },
  { id: 'team-management', label: 'Team Management Tips', emoji: '👥' },
  { id: 'when-to-choose', label: 'When to Choose Which', emoji: '🧭' },
  { id: 'build-with-codazz', label: 'Build with Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'in-house-vs-outsourcing-development', title: 'In-House vs Outsourcing: Full Cost Comparison 2026', category: 'Business', readTime: '10 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Pricing', readTime: '12 min' },
  { slug: 'mvp-development-guide', title: 'MVP Development: The Complete 2026 Guide', category: 'Strategy', readTime: '14 min' },
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
        .faq-a.open { max-height: 400px; padding: 16px 22px 20px; }
        .region-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 18px; padding: 24px; transition: border-color 0.2s, transform 0.2s; }
        .region-card:hover { border-color: rgba(34,197,94,0.4); transform: translateY(-3px); }
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
              <span style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Outsourcing Guide 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 22, letterSpacing: '-0.02em' }}>
              Offshore vs Nearshore vs Onshore Development:<br />
              <span style={{ color: '#22c55e' }}>Which Model is Right for You?</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, maxWidth: 680, margin: '0 auto 32px' }}>
              Choosing the wrong engagement model can blow your budget, tank your timeline, and leave you with software nobody wants. Here is the definitive 2026 breakdown of every outsourcing model — with real numbers.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
              <span style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 999, padding: '6px 16px', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>March 20, 2026</span>
              <span style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 999, padding: '6px 16px', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>16 min read</span>
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
                      'Offshore teams (India, Eastern Europe) cost 60–80% less than onshore — but require more communication investment.',
                      'Nearshore (Mexico, Eastern Europe for US/UK) offers the best timezone overlap without sacrificing cost savings.',
                      'Onshore makes sense for regulated industries (finance, health) or highly complex, fast-iteration projects.',
                      'India remains the #1 offshore destination globally — 5M+ English-speaking developers, strong STEM pipeline.',
                      'Canada (Edmonton, Toronto) is emerging as a nearshore hub for US startups wanting North American time zones at 30–40% savings.',
                      'Hybrid models — an onshore PM with an offshore dev team — are the sweet spot for most funded startups.',
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ color: '#22c55e', fontSize: 18, flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Model Definitions */}
              <section id="model-definitions" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  🗺️ What Each Model Actually Means
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, lineHeight: 1.75 }}>
                  The terms offshore, nearshore, and onshore are thrown around loosely. Here is the precise definition of each — and why the distinction matters for your project.
                </p>

                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    {
                      title: 'Onshore Development',
                      badge: 'Same Country',
                      badgeColor: '#3b82f6',
                      desc: 'You hire a development agency or team within your own country. For a US company, this means US-based developers. For a UK company, UK developers.',
                      pros: ['Zero timezone issues', 'Same language and culture', 'Easier legal contracts and IP protection', 'In-person meetings possible'],
                      cons: ['Highest cost — $100–$250/hr for senior devs', 'Talent shortage in hot markets (SF, NYC)', 'Longer hiring timelines'],
                      cost: '$100–$250/hr',
                    },
                    {
                      title: 'Nearshore Development',
                      badge: 'Adjacent Region',
                      badgeColor: '#f59e0b',
                      desc: 'You hire from a country in a similar or overlapping timezone — typically within 1–5 hours of your location. Examples: US companies hiring in Mexico, Colombia, or Canada. UK companies hiring in Poland, Romania.',
                      pros: ['Significant cost savings (40–60% vs onshore)', 'Overlapping business hours — 4–8 hrs daily', 'Cultural alignment', 'Easy travel for critical meetings'],
                      cons: ['Slightly more coordination required', 'Smaller talent pool than major offshore hubs', 'Costs more than pure offshore'],
                      cost: '$45–$95/hr',
                    },
                    {
                      title: 'Offshore Development',
                      badge: 'Different Continent',
                      badgeColor: '#22c55e',
                      desc: 'You hire from a country on a different continent — typically India, Eastern Europe (Ukraine, Poland), Southeast Asia (Vietnam, Philippines), or Latin America.',
                      pros: ['Maximum cost savings — 60–80% vs onshore', 'Access to large talent pools (India has 5M+ devs)', '24/7 development possible with overlapping shifts', 'Mature engineering cultures in established hubs'],
                      cons: ['Significant timezone gap (8–13 hrs)', 'Cultural and communication differences', 'Requires stronger processes and tooling', 'IP protection needs careful contracting'],
                      cost: '$20–$60/hr',
                    },
                  ].map((model, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 22, padding: '28px 30px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                        <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{model.title}</h3>
                        <span style={{ background: `${model.badgeColor}22`, color: model.badgeColor, borderRadius: 999, padding: '3px 12px', fontSize: 12, fontWeight: 700 }}>{model.badge}</span>
                        <span style={{ marginLeft: 'auto', background: 'rgba(34,197,94,0.1)', color: '#22c55e', borderRadius: 999, padding: '3px 14px', fontSize: 13, fontWeight: 700 }}>{model.cost}</span>
                      </div>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14.5, lineHeight: 1.7, marginBottom: 18 }}>{model.desc}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Pros</div>
                          {model.pros.map((p, j) => (
                            <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                              <span style={{ color: '#22c55e', fontSize: 14 }}>+</span>
                              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13.5 }}>{p}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Cons</div>
                          {model.cons.map((c, j) => (
                            <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                              <span style={{ color: '#ef4444', fontSize: 14 }}>−</span>
                              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13.5 }}>{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Head-to-Head Comparison Table */}
              <section id="head-to-head" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  ⚡ Head-to-Head Comparison
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.75 }}>
                  Every dimension that matters — rated across all three models.
                </p>
                <div className="reveal" style={{ overflowX: 'auto', borderRadius: 18, border: '1px solid rgba(255,255,255,0.09)' }}>
                  <table className="compare-table" style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255,255,255,0.02)' }}>
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Onshore</th>
                        <th>Nearshore</th>
                        <th>Offshore</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Avg. Hourly Rate', '$100–$250', '$45–$95', '$20–$60'],
                        ['Cost Savings vs Onshore', 'Baseline', '40–60%', '60–80%'],
                        ['Timezone Overlap', 'Full (8+ hrs)', 'Good (4–8 hrs)', 'Limited (0–4 hrs)'],
                        ['Communication Ease', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐'],
                        ['Talent Pool Size', 'Limited', 'Moderate', 'Very Large'],
                        ['Cultural Alignment', 'Highest', 'High', 'Moderate'],
                        ['IP Protection', 'Strongest', 'Strong', 'Requires Contracts'],
                        ['Scalability Speed', 'Slow', 'Moderate', 'Fast'],
                        ['Quality Ceiling', 'Very High', 'Very High', 'High (varies)'],
                        ['Best For', 'Regulated / Complex', 'Startups & Scale-ups', 'Cost-driven / Large Teams'],
                      ].map(([factor, onshore, nearshore, offshore], i) => (
                        <tr key={i}>
                          <td style={{ fontWeight: 600, color: '#fff' }}>{factor}</td>
                          <td style={{ color: 'rgba(255,255,255,0.75)' }}>{onshore}</td>
                          <td style={{ color: 'rgba(255,255,255,0.75)' }}>{nearshore}</td>
                          <td style={{ color: '#22c55e' }}>{offshore}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Cost Comparison */}
              <section id="cost-comparison" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  💰 Real Cost Comparison: Same Project, Three Models
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.75 }}>
                  Lets say you need a 4-developer team for 6 months on a mid-complexity SaaS product. Here is what you actually pay.
                </p>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
                  {[
                    { model: 'Onshore (US)', rate: '$150/hr avg', monthly: '$96,000/mo', sixMonth: '$576,000', color: '#3b82f6' },
                    { model: 'Nearshore (Canada/Mexico)', rate: '$70/hr avg', monthly: '$44,800/mo', sixMonth: '$268,800', color: '#f59e0b' },
                    { model: 'Offshore (India)', rate: '$35/hr avg', monthly: '$22,400/mo', sixMonth: '$134,400', color: '#22c55e' },
                  ].map((c, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${c.color}40`, borderRadius: 20, padding: '24px 22px', textAlign: 'center' }}>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.model}</div>
                      <div style={{ fontSize: 26, fontWeight: 800, color: c.color, marginBottom: 4 }}>{c.sixMonth}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>for 6 months · 4 devs</div>
                      <div style={{ marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{c.rate} · {c.monthly}</div>
                    </div>
                  ))}
                </div>

                <div className="tip-card reveal">
                  <strong style={{ color: '#22c55e' }}>Cost is only part of the equation.</strong>
                  <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,0.75)', fontSize: 14.5, lineHeight: 1.7 }}>
                    A team that delivers in 6 months versus one that takes 9 months can easily erase the rate savings. Factor in communication overhead, bug-fix cycles, and re-work when comparing models. At Codazz, our offshore-first hybrid model typically delivers 65% cost savings with onshore-equivalent delivery timelines — because of our structured sprint system and dedicated client success managers.
                  </p>
                </div>

                <div className="reveal" style={{ marginTop: 28 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 16 }}>Hidden Costs to Budget For</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                    {[
                      { item: 'Communication Tools', cost: '$50–$200/mo', note: 'Slack, Loom, Notion, Jira' },
                      { item: 'Overlap Hours Overhead', cost: '+10–15%', note: 'Extra async work to bridge gaps' },
                      { item: 'Legal & Contracting', cost: '$2,000–$8,000', note: 'NDA, IP assignment, MSA' },
                      { item: 'Onboarding & Ramp-up', cost: '2–4 weeks', note: 'Team ramp-up time cost' },
                      { item: 'Recruitment / Agency Fee', cost: '15–25% of salary', note: 'If hiring directly vs agency' },
                      { item: 'Management Overhead', cost: '+8–12%', note: 'PM time to manage remote team' },
                    ].map((h, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: '16px 18px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{h.item}</div>
                        <div style={{ color: '#f59e0b', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{h.cost}</div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12.5 }}>{h.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Timezone & Communication */}
              <section id="timezone-communication" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  🕐 Timezone & Communication Reality
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, lineHeight: 1.75 }}>
                  Timezone gaps are not just inconvenient — they directly impact your sprint velocity, bug-fix turnaround, and stakeholder confidence. Here is how each model stacks up.
                </p>
                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {[
                    {
                      pairing: 'US Client + India Team',
                      gap: '10.5–13.5 hrs ahead',
                      overlap: '1–3 hrs overlap (if team adjusts)',
                      pattern: 'Daily standup at 8–9am IST (6:30–7:30pm EST). Async-first with Loom videos for complex issues.',
                      verdict: 'Workable with strong async culture. Not ideal for high-urgency consumer products.',
                      color: '#f59e0b',
                    },
                    {
                      pairing: 'US Client + Canada/Mexico Team',
                      gap: '0–3 hrs difference',
                      overlap: '5–8 hrs real-time collaboration',
                      pattern: 'Standard business hours largely align. Real-time Slack, same-day PR reviews, live debugging sessions.',
                      verdict: 'Nearly as smooth as onshore. Ideal for startups wanting agile velocity.',
                      color: '#22c55e',
                    },
                    {
                      pairing: 'UK Client + Eastern Europe Team',
                      gap: '1–3 hrs ahead',
                      overlap: '5–7 hrs overlap',
                      pattern: 'Morning standups work well. Real-time code reviews and pair programming sessions possible.',
                      verdict: 'Excellent nearshore pairing. Poland, Romania, and Ukraine (where accessible) offer strong engineering talent.',
                      color: '#22c55e',
                    },
                    {
                      pairing: 'US/UK Client + Southeast Asia Team',
                      gap: '11–16 hrs ahead',
                      overlap: '0–2 hrs (very limited)',
                      pattern: 'Almost fully async. Detailed specs, recorded demos, and ticket-based workflows are essential.',
                      verdict: 'Only viable for very well-defined, isolated workstreams. High rework risk without strong PM.',
                      color: '#ef4444',
                    },
                  ].map((tz, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${tz.color}30`, borderRadius: 18, padding: '22px 26px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{tz.pairing}</h3>
                        <span style={{ background: `${tz.color}22`, color: tz.color, borderRadius: 999, padding: '3px 12px', fontSize: 12, fontWeight: 700 }}>{tz.gap}</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 4 }}>Overlap Window</div>
                          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{tz.overlap}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 4 }}>Work Pattern</div>
                          <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{tz.pattern}</div>
                        </div>
                      </div>
                      <div style={{ background: `${tz.color}12`, borderRadius: 10, padding: '10px 14px', fontSize: 13.5, color: tz.color, fontWeight: 600 }}>
                        Verdict: {tz.verdict}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quality & IP Protection */}
              <section id="quality-ip" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  🛡️ Quality Control & IP Protection
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, lineHeight: 1.75 }}>
                  Two concerns dominate every outsourcing conversation: will the code be good, and is my IP safe? Here is the honest answer for each model.
                </p>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Quality Control Framework</h3>
                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
                  {[
                    { step: '1. Structured Code Reviews', desc: 'Require all PRs to have at least one senior dev review before merge. Use GitHub/GitLab PR templates. Non-negotiable regardless of model.' },
                    { step: '2. Automated Testing Gates', desc: 'Minimum 60–70% unit test coverage enforced in CI/CD. No merges without passing tests. Tools: Jest, Pytest, Cypress.' },
                    { step: '3. Weekly Demo Calls', desc: 'Every Friday the team demos what shipped that sprint. Stakeholders see real progress, not status reports.' },
                    { step: '4. Definition of Done (DoD)', desc: 'Write a clear DoD before sprint 1. Code, tests, docs, reviewed, deployed to staging. Everyone agrees upfront.' },
                    { step: '5. Dedicated QA Engineer', desc: 'On offshore projects especially, a dedicated QA person (not developers testing their own code) is worth every penny.' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: '16px 20px' }}>
                      <span style={{ color: '#22c55e', fontWeight: 800, fontSize: 15, flexShrink: 0, minWidth: 24 }}>{i + 1}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.step}</div>
                        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>IP Protection Checklist</h3>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
                  {[
                    { item: 'Work-for-hire clauses in contract', critical: true },
                    { item: 'IP assignment agreement signed before work starts', critical: true },
                    { item: 'NDA covering all team members (including subs)', critical: true },
                    { item: 'All code pushed to client-owned repository', critical: true },
                    { item: 'No client data stored on developer personal machines', critical: true },
                    { item: 'Regular audit of repo contributors and access', critical: false },
                    { item: 'Use a reputable jurisdiction (Canada, India, EU)', critical: false },
                    { item: 'Escrow payment tied to code delivery milestones', critical: false },
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '12px 16px', border: `1px solid ${c.critical ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.08)'}` }}>
                      <span style={{ fontSize: 16 }}>{c.critical ? '✅' : '📋'}</span>
                      <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{c.item}</span>
                      {c.critical && <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>CRITICAL</span>}
                    </div>
                  ))}
                </div>
              </section>

              {/* Region Breakdown */}
              <section id="region-breakdown" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  🌍 Region Breakdown: India, Canada & Eastern Europe
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, lineHeight: 1.75 }}>
                  Not all offshore markets are equal. Here is an honest comparison of the three most popular destinations for English-speaking clients.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {[
                    {
                      region: 'India',
                      type: 'Offshore',
                      flag: '🇮🇳',
                      rate: '$20–$50/hr',
                      strengths: ['Largest English-speaking tech talent pool in the world (5M+ devs)', 'Extremely mature software outsourcing industry (30+ years)', 'Strong in: web, mobile, AI/ML, cloud, QA', 'IST timezone works well for UK and EU clients with morning standups'],
                      watch: ['Quality varies enormously — vet agencies carefully', 'Time zone gap challenging for US West Coast', 'Some agencies pad team sizes — always review invoices'],
                      codazzNote: 'Codazz operates a development center in Chandigarh, India — giving clients 65% cost savings with full transparency, weekly demos, and a Canadian-based PM bridging the gap.',
                    },
                    {
                      region: 'Canada',
                      type: 'Nearshore (for US)',
                      flag: '🇨🇦',
                      rate: '$65–$110/hr',
                      strengths: ['Same or near-same timezone as US clients', 'Strong IP laws and data privacy (PIPEDA)', 'High English proficiency, cultural alignment with US', 'Growing tech hubs: Edmonton, Vancouver, Toronto, Montreal'],
                      watch: ['Higher cost than pure offshore', 'Smaller talent pool than India', 'Senior talent increasingly competitive to attract'],
                      codazzNote: 'Codazz is headquartered in Edmonton, Canada — making us an ideal nearshore partner for US clients who want North American accountability with smart offshore delivery.',
                    },
                    {
                      region: 'Eastern Europe',
                      type: 'Nearshore (for UK/EU)',
                      flag: '🇵🇱🇷🇴',
                      rate: '$35–$75/hr',
                      strengths: ['Excellent technical education — Poland, Romania, Czech Republic', 'EU time zones align well with UK and Western Europe', 'Strong engineering culture, high code quality', 'EU data residency compliance for GDPR-sensitive projects'],
                      watch: ['Geopolitical risk (Ukraine conflict) affects some markets', 'Rapidly rising rates as demand grows', 'Smaller individual market talent pools vs India'],
                      codazzNote: 'For EU-based clients with GDPR requirements, Eastern Europe is often the right nearshore choice. Codazz can facilitate introductions to vetted partners in this region.',
                    },
                  ].map((r, i) => (
                    <div key={i} className="reveal region-card">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                        <span style={{ fontSize: 28 }}>{r.flag}</span>
                        <div>
                          <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{r.region}</h3>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{r.type}</span>
                        </div>
                        <span style={{ marginLeft: 'auto', background: 'rgba(34,197,94,0.12)', color: '#22c55e', borderRadius: 999, padding: '4px 14px', fontSize: 13, fontWeight: 700 }}>{r.rate}</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', marginBottom: 8 }}>Strengths</div>
                          {r.strengths.map((s, j) => (
                            <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                              <span style={{ color: '#22c55e', fontSize: 14 }}>+</span>
                              <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13 }}>{s}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', marginBottom: 8 }}>Watch Out For</div>
                          {r.watch.map((w, j) => (
                            <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                              <span style={{ color: '#f59e0b', fontSize: 14 }}>⚠</span>
                              <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13 }}>{w}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: '12px 16px', fontSize: 13.5, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                        <strong style={{ color: '#22c55e' }}>Codazz angle: </strong>{r.codazzNote}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Team Management Tips */}
              <section id="team-management" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  👥 Team Management Tips for Remote & Offshore Teams
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.75 }}>
                  The difference between a successful offshore engagement and a disaster is almost always process and communication — not talent. These are the practices that work.
                </p>
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
                  {[
                    { icon: '📋', title: 'Write Everything Down', desc: 'Remote teams cannot read your mind. Every feature, bug fix, and design decision should be documented in a shared tool (Notion, Confluence). Verbal agreements evaporate.' },
                    { icon: '🎥', title: 'Use Async Video First', desc: 'Loom videos beat long Slack messages every time. A 2-minute screen recording explaining a bug saves 45 minutes of back-and-forth async chat.' },
                    { icon: '⏱️', title: 'Time-box Meetings', desc: 'Daily standups: 15 mins max. Sprint planning: 2 hrs max. Respect the timezone effort it takes for offshore teams to attend early or late calls.' },
                    { icon: '🎯', title: 'Sprint-based Delivery', desc: '2-week sprints with clear acceptance criteria. Never run month-long milestones with offshore teams — you need weekly visibility.' },
                    { icon: '🤝', title: 'Invest in Relationships', desc: 'Know your team members by name. Ask about their lives. Teams that feel valued deliver better work. Annual visit (or virtual team events) makes a real difference.' },
                    { icon: '📊', title: 'Measure Output, Not Hours', desc: 'Track story points, shipped features, and bug counts — not logged hours. Output-focused culture creates accountability without micromanagement.' },
                    { icon: '🛠️', title: 'Standardize Your Toolchain', desc: 'GitHub for code, Jira/Linear for tasks, Figma for design, Slack for comms. No exceptions. Consistency removes confusion.' },
                    { icon: '🚨', title: 'Escalation Paths Are Critical', desc: 'Every team member should know: if I am blocked, who do I ping? Define escalation paths in week 1. Blockers that sit overnight become 2-day delays.' },
                  ].map((tip, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: '22px 20px' }}>
                      <div style={{ fontSize: 26, marginBottom: 12 }}>{tip.icon}</div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{tip.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* When to Choose */}
              <section id="when-to-choose" style={{ marginBottom: 64 }}>
                <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  🧭 When to Choose Which Model
                </h2>
                <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.75 }}>
                  Stop agonizing. Use this decision framework to pick the right model for your specific situation.
                </p>
                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    {
                      scenario: 'You are a pre-seed or seed startup building your first MVP',
                      recommendation: 'Offshore (India) or Nearshore (Canada/Mexico)',
                      reason: 'Budget is everything. A top offshore agency with a structured process will outperform a mediocre onshore team. Keep the PM close if possible.',
                      color: '#22c55e',
                    },
                    {
                      scenario: 'You are a Series A+ company scaling a product with strong PMF',
                      recommendation: 'Hybrid: Offshore dev team + Nearshore or Onshore PM/Architect',
                      reason: 'You need speed and scale. Build a cost-efficient offshore core team but invest in senior onshore leadership for alignment and quality.',
                      color: '#3b82f6',
                    },
                    {
                      scenario: 'You are in a regulated industry (fintech, healthcare, legal)',
                      recommendation: 'Nearshore or Onshore with strong contracts',
                      reason: 'Compliance requirements (HIPAA, SOC 2, PCI-DSS) are easier to enforce closer to home. Audit rights and data residency requirements favor nearshore/onshore.',
                      color: '#f59e0b',
                    },
                    {
                      scenario: 'Your product requires constant real-time iteration and daily pivots',
                      recommendation: 'Onshore or Nearshore only',
                      reason: 'High-velocity consumer products with frequent pivots do not work well offshore. You need real-time collaboration and instant feedback loops.',
                      color: '#a855f7',
                    },
                    {
                      scenario: 'You need to scale from 3 to 20 developers fast',
                      recommendation: 'Offshore (India)',
                      reason: 'No other market can absorb rapid scaling at cost. A well-run Indian software agency can add 5–10 vetted developers within 2–3 weeks.',
                      color: '#22c55e',
                    },
                    {
                      scenario: 'Your codebase is complex legacy and needs deep context',
                      recommendation: 'Onshore or Long-term Offshore Dedicated Team',
                      reason: 'Institutional knowledge matters. Use a long-term dedicated team (offshore or nearshore) — not project-based engagements — so context is never lost.',
                      color: '#ef4444',
                    },
                  ].map((s, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${s.color}30`, borderRadius: 16, padding: '20px 24px' }}>
                      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: 200 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 4 }}>Scenario</div>
                          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{s.scenario}</div>
                          <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{s.reason}</div>
                        </div>
                        <div style={{ background: `${s.color}15`, border: `1px solid ${s.color}40`, borderRadius: 12, padding: '10px 16px', fontSize: 13, fontWeight: 700, color: s.color, flexShrink: 0, textAlign: 'center', maxWidth: 220 }}>
                          {s.recommendation}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Build with Codazz */}
              <section id="build-with-codazz" style={{ marginBottom: 64 }}>
                <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 100%)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: '40px 36px', textAlign: 'center' }}>
                  <div style={{ fontSize: 44, marginBottom: 16 }}>🚀</div>
                  <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 14 }}>Build with Codazz: The Best of Both Worlds</h2>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 1.75, maxWidth: 620, margin: '0 auto 28px' }}>
                    Codazz is headquartered in Edmonton, Canada with a development center in Chandigarh, India. This hybrid model gives you Canadian accountability and communication, with offshore-level cost savings of 60–70%.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32, textAlign: 'left' }}>
                    {[
                      { label: 'Cost Savings', value: '60–70%', sub: 'vs US onshore rates' },
                      { label: 'Timezone Coverage', value: '18+ hrs', sub: 'MST + IST overlap' },
                      { label: 'Projects Delivered', value: '140+', sub: 'across 12 industries' },
                      { label: 'Client Retention', value: '91%', sub: 'clients return for more' },
                    ].map((stat, i) => (
                      <div key={i} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 14, padding: '16px 18px', border: '1px solid rgba(34,197,94,0.15)' }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>{stat.value}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{stat.label}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{stat.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ background: '#22c55e', color: '#000', borderRadius: 14, padding: '14px 32px', fontWeight: 800, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
                      Get a Free Consultation
                    </Link>
                    <Link href="/offshore-development" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', borderRadius: 14, padding: '14px 28px', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.15)' }}>
                      Our Offshore Model
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
                      <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 14, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'border-color 0.2s' }}>
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
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Ready to outsource?</div>
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
      q: 'What is the biggest risk of offshore development and how do I mitigate it?',
      a: 'The biggest risks are communication gaps and inconsistent quality. Mitigate them by: (1) choosing an agency with a dedicated client success manager, (2) requiring weekly video demos — not just status reports, (3) insisting on PR-based code reviews, and (4) starting with a 2-week paid discovery sprint before committing to a full engagement. If they resist any of these, walk away.',
    },
    {
      q: 'Is nearshore development worth the extra cost vs offshore?',
      a: 'For most product companies, yes. The timezone overlap alone (5–8 hours vs 1–3 hours) can add 30–40% more real-time collaboration per day. This translates directly to faster PR reviews, quicker blockers resolved, and tighter sprint cycles. For a funded startup, the extra $15–30/hr for nearshore is typically recovered in reduced rework and faster time-to-market within 2–3 sprints.',
    },
    {
      q: 'How do I protect my IP when working with an offshore team?',
      a: 'Five non-negotiables: (1) Sign an IP assignment agreement before any work starts — not an NDA alone. (2) All code must be pushed to a GitHub/GitLab repo owned by your company from day one. (3) Every developer should sign an IP and confidentiality agreement individually. (4) Use a jurisdiction with enforceable IP law (India has relatively strong IP protections under the IT Act). (5) Conduct periodic access audits — remove access immediately when any developer leaves the team.',
    },
    {
      q: 'Can I switch from offshore to onshore mid-project?',
      a: 'Yes, but it is expensive and disruptive. You will face a 60–80% rate increase, a 2–6 week ramp-up period for the new team, knowledge transfer overhead, and potential culture-shift friction. A better approach: identify the pain points driving the switch. If it is communication, add a nearshore PM. If it is quality, add a dedicated QA engineer. Full model switches mid-project should be a last resort.',
    },
    {
      q: 'What does the Codazz hybrid model look like in practice?',
      a: 'At Codazz, every engagement includes a Canadian-based project lead (Edmonton HQ) who owns client communication, sprint planning, and escalations. The core development team operates from our Chandigarh, India center — highly skilled, vetted engineers working in 2-week Agile sprints. Clients get a dedicated Slack channel, weekly Friday demos, full access to the GitHub repo, and a monthly KPI report. The result: 60–70% cost savings with onshore-equivalent communication and accountability.',
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
