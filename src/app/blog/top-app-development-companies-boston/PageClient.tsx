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

const companies = [
  { num: 1, name: 'Codazz', category: 'Cross-Platform', emoji: '📱', metric: '500+ Apps Launched Globally', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Draper Labs', category: 'Deep Tech', emoji: '🔬', metric: 'Mission-critical software systems', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Cantina', category: 'Product Design', emoji: '🎨', metric: 'Design-led digital products', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Fresh Tilled Soil', category: 'UX Research', emoji: '🌱', metric: 'User-validated app experiences', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'thoughtbot Boston', category: 'Agile Studio', emoji: '⚙️', metric: 'Lean product engineering', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Lab Zero', category: 'Civic Tech', emoji: '🏛️', metric: 'Government & social impact apps', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Oomph', category: 'Web & Mobile', emoji: '💥', metric: 'Higher ed & nonprofit digital', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Genuine', category: 'Enterprise CX', emoji: '✨', metric: 'Connected customer experiences', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'DEPT Agency', category: 'Full-Service', emoji: '🌐', metric: 'Global-scale digital transformation', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Accenture Boston', category: 'Enterprise', emoji: '🏢', metric: 'Enterprise modernization at scale', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-usa', title: 'Top 10 App Development Companies in the USA (2026)', category: 'App Development', readTime: '11 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Pricing', readTime: '9 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native in 2026: Which Should You Choose?', category: 'Engineering', readTime: '8 min' },
];

const tocItems = [
  { id: 'boston-tech-scene', label: 'Boston Tech Scene Overview' },
  { id: 'comparison-table', label: '2026 Comparison Table' },
  { id: 'codazz', label: '#1 — Codazz' },
  { id: 'draper-labs', label: '#2 — Draper Labs' },
  { id: 'cantina', label: '#3 — Cantina' },
  { id: 'fresh-tilled-soil', label: '#4 — Fresh Tilled Soil' },
  { id: 'thoughtbot', label: '#5 — thoughtbot Boston' },
  { id: 'lab-zero', label: '#6 — Lab Zero' },
  { id: 'oomph', label: '#7 — Oomph' },
  { id: 'genuine', label: '#8 — Genuine' },
  { id: 'dept-agency', label: '#9 — DEPT Agency' },
  { id: 'accenture-boston', label: '#10 — Accenture Boston' },
  { id: 'how-to-choose', label: 'How to Choose a Partner' },
  { id: 'boston-vs-cities', label: 'Boston vs Other Cities' },
  { id: 'faq', label: 'FAQ' },
];

export default function TopAppDevelopmentCompaniesBostonClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeId, setActiveId] = useState('boston-tech-scene');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const ids = tocItems.map(t => t.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveId(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: 'How much does it cost to hire an app development company in Boston?',
      a: 'Boston app development agencies typically charge between $150–$300/hour for senior engineers, with full project costs ranging from $80,000 for an MVP to $500,000+ for complex enterprise applications. Codazz offers competitive global pricing while maintaining Boston-level quality standards, often delivering at 40–60% lower cost through our cross-platform expertise.',
    },
    {
      q: 'Which industries do Boston app developers specialize in?',
      a: 'Boston\'s tech ecosystem is uniquely concentrated in biotech, healthtech, edtech, and fintech — shaped by its proximity to MIT, Harvard, Mass General Hospital, and Kendall Square\'s life sciences corridor. Most top Boston studios have deep vertical expertise in healthcare compliance (HIPAA), financial regulations, and academic/institutional software.',
    },
    {
      q: 'How long does it take to build a mobile app in Boston?',
      a: 'Timelines vary by scope: a well-scoped MVP typically takes 10–16 weeks. A feature-complete consumer app runs 5–9 months. Enterprise platforms with integrations, custom backends, and compliance requirements can take 12–18 months. Cross-platform Flutter or React Native builds (like Codazz specializes in) reduce timelines by 30–40% compared to building separate native apps.',
    },
    {
      q: 'Should I hire a local Boston agency or a remote development company?',
      a: 'Local agencies offer in-person collaboration and local market knowledge, which can be valuable for regulated industries. However, remote-first firms like Codazz provide equivalent (often superior) communication and delivery with lower overhead costs and access to a broader engineering talent pool. Most Boston companies now work in hybrid or fully remote models regardless.',
    },
    {
      q: 'What should I look for when evaluating app development companies in Boston?',
      a: 'Evaluate live portfolio apps (not just mockups), client reviews on Clutch or G2, their engineering process (agile cadence, sprint reviews, QA practices), post-launch support terms, and whether they handle the full lifecycle — UX research, backend APIs, DevOps, and App Store optimization. Avoid studios that outsource critical engineering work without transparency.',
    },
  ];

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/top-app-development-companies-boston.jpg"
              alt="Top app development companies in Boston 2026"
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
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
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
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>App Development</span>
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
                10 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 App Development Companies in Boston (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Boston is America's most underrated tech city. From Kendall Square's biotech corridor to Back Bay's fintech firms, these are the app development studios that are quietly building the future — ranked and reviewed for 2026.
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
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#22c55e',
                }}>CE</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Editorial</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Research Team, Codazz</p>
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

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 340px',
              gap: 80,
              alignItems: 'start',
            }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    When people talk about American tech hubs, they default to San Francisco and New York. But Boston has been quietly building a world-class technology ecosystem for decades — and in 2026, it is arguably the most specialized innovation cluster in the country.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Anchored by MIT, Harvard, and a constellation of elite research hospitals, Boston's tech scene is driven by deep-domain expertise in healthcare, biotech, edtech, and financial services. The city produces some of the most technically sophisticated software in the world — and the app development studios here reflect that.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We researched and ranked the <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Top 10 App Development Companies in Boston for 2026</strong> — evaluating portfolio quality, technical depth, client outcomes, specialization, and process maturity. Whether you're a Boston-based startup or a global company looking for a reliable engineering partner in the region, this list is your starting point.
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 20,
                    }}>Key Takeaways</p>
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      {[
                        'Boston\'s app development market is dominated by healthcare, biotech, and edtech verticals — driven by proximity to world-class research institutions.',
                        'Codazz ranks #1 for cross-platform delivery, with 500+ apps shipped globally and consistent 5-star App Store ratings.',
                        'Kendall Square and Back Bay are the primary tech hubs, home to major life sciences and fintech innovation clusters.',
                        'HIPAA compliance and healthcare data security are baseline requirements for most Boston-area app projects.',
                        'Boston studios typically charge $150–$300/hour — cross-platform builds with Codazz deliver comparable quality at significantly lower cost.',
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 4 ? 12 : 0,
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Boston Tech Scene Overview */}
                <div className="reveal" style={{ marginBottom: 56 }} id="boston-tech-scene">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Boston's Tech Scene in 2026: Why It Matters</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>
                    Boston's innovation ecosystem is not a single cluster — it is a network of specialized micro-hubs, each with its own dominant industry and talent pipeline.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { hub: 'Kendall Square', industry: 'Biotech & Life Sciences', icon: '🧬', desc: 'Home to Moderna, Biogen, Novartis, and 200+ biotech firms. The most dense innovation district in the world per square mile.' },
                      { hub: 'Back Bay', industry: 'Fintech & Financial Services', icon: '🏦', desc: 'Boston\'s financial district anchors fintech startups, investment banks, and insurtech firms building next-gen financial applications.' },
                      { hub: 'Boston Innovation District', industry: 'Edtech & Consumer Tech', icon: '🎓', desc: 'MIT and Harvard spinouts dominate this corridor — adaptive learning platforms, research software, and academic technology tools.' },
                      { hub: 'Seaport District', industry: 'Healthtech & MedTech', icon: '🏥', desc: 'The fastest-growing part of Boston tech, housing digital health startups and medical device software companies.' },
                    ].map((h, i) => (
                      <div key={i} style={{
                        padding: 20, borderRadius: 16,
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{ fontSize: 28, marginBottom: 10 }}>{h.icon}</div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{h.hub}</p>
                        <p style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>{h.industry}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{h.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                    With over $4.2 billion in venture capital invested in Boston-area tech companies in 2025 alone, the city's demand for high-quality app development has never been higher. The studios that make this list are the ones meeting that demand.
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison-table">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>2026 Boston App Development Comparison Table</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'Specialization', 'Team Size', 'Starting Price', 'Rating'].map(h => (
                            <th key={h} style={{
                              padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700,
                              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                              background: 'rgba(255,255,255,0.02)',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { rank: '#1', company: 'Codazz', spec: 'Cross-Platform, Full-Lifecycle', team: '50–200', price: '$25,000', rating: '4.9' },
                          { rank: '#2', company: 'Draper Labs', spec: 'Deep Tech, Defense, Safety-Critical', team: '1,000+', price: '$100,000+', rating: '4.8' },
                          { rank: '#3', company: 'Cantina', spec: 'Product Design & Development', team: '10–50', price: '$75,000', rating: '4.8' },
                          { rank: '#4', company: 'Fresh Tilled Soil', spec: 'UX Research & Design Strategy', team: '10–50', price: '$60,000', rating: '4.7' },
                          { rank: '#5', company: 'thoughtbot Boston', spec: 'Agile Web & Mobile Engineering', team: '50–200', price: '$80,000', rating: '4.7' },
                          { rank: '#6', company: 'Lab Zero', spec: 'Civic Tech & Government Apps', team: '10–50', price: '$70,000', rating: '4.6' },
                          { rank: '#7', company: 'Oomph', spec: 'Higher Ed, Nonprofit, Web', team: '10–50', price: '$50,000', rating: '4.6' },
                          { rank: '#8', company: 'Genuine', spec: 'Enterprise Customer Experience', team: '50–200', price: '$90,000', rating: '4.5' },
                          { rank: '#9', company: 'DEPT Agency', spec: 'Full-Service Digital', team: '200+', price: '$100,000', rating: '4.5' },
                          { rank: '#10', company: 'Accenture Boston', spec: 'Enterprise Modernization', team: '1,000+', price: '$150,000+', rating: '4.4' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.spec}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.team}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.price}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{row.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* How We Ranked */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>How We Ranked These Companies</h2>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                      Our methodology evaluates Boston app development firms across five weighted criteria, with an emphasis on technical output and measurable client results — not marketing claims.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Portfolio Quality', weight: '30%', desc: 'Live apps, App Store ratings, design quality, and post-launch performance data' },
                        { label: 'Technical Depth', weight: '25%', desc: 'Platform expertise, scalable architecture, engineering practices, and stack modernity' },
                        { label: 'Client Outcomes', weight: '20%', desc: 'Revenue impact, retention metrics, app store ratings, and verified client testimonials' },
                        { label: 'Domain Expertise', weight: '15%', desc: 'Healthcare compliance, fintech regulations, edtech specialization, and vertical depth' },
                        { label: 'Process & Support', weight: '10%', desc: 'Agile maturity, communication cadence, QA rigor, and post-launch support quality' },
                      ].map((c, i) => (
                        <div key={i} style={{
                          padding: '16px', borderRadius: 12,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                            <span style={{ fontSize: 13, fontWeight: 600, color: '#ffffff' }}>{c.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e' }}>{c.weight}</span>
                          </div>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Company 1: Codazz (Featured) */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 28, padding: 36, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 220, height: 220, background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)', filter: 'blur(30px)' }} />

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>📱</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#22c55e',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Cross-Platform</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.08)', color: 'rgba(255,255,255,0.6)',
                            fontWeight: 600, letterSpacing: '0.06em',
                          }}>Editor's Pick</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz is the top-ranked app development partner for Boston-area companies in 2026 — and the only studio on this list that combines global delivery quality with the kind of strategic depth that Boston's demanding tech buyers expect. With 500+ apps launched across Flutter, React Native, native iOS, and native Android, Codazz brings a portfolio that few studios in New England can match in volume or consistency.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What makes Codazz particularly well-suited to the Boston market is their vertical agility. Whether a client needs a HIPAA-compliant telehealth platform, a fintech trading dashboard, or an edtech adaptive learning app, Codazz has shipped production-grade versions of all three. Their engineers understand regulatory requirements at a product level — not just as checkbox compliance exercises.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 24, position: 'relative', zIndex: 1 }}>
                      Their cross-platform Flutter and React Native expertise is a financial advantage that Boston clients increasingly leverage: one codebase, two platforms, 40-60% faster time-to-market. From early-stage Kendall Square biotech startups to established Back Bay fintech firms, Codazz scales to every stage without compromising engineering quality.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 24, position: 'relative', zIndex: 1 }}>
                      {[
                        { label: 'Apps Shipped', value: '500+' },
                        { label: 'App Store Rating', value: '5-Star' },
                        { label: 'Tech Stack', value: 'Flutter / RN' },
                        { label: 'Starting At', value: '$25,000' },
                      ].map((stat, i) => (
                        <div key={i} style={{
                          padding: '14px 16px', borderRadius: 12,
                          background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)',
                          textAlign: 'center',
                        }}>
                          <p style={{ fontSize: 20, fontWeight: 800, color: '#22c55e', margin: '0 0 4px' }}>{stat.value}</p>
                          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1, marginBottom: 20,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        500+ Apps Launched | HIPAA & Fintech Ready | Flutter & React Native Leaders
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, position: 'relative', zIndex: 1 }}>
                      {['iOS Development', 'Android Development', 'Flutter', 'React Native', 'HIPAA Compliance', 'Fintech Apps', 'Edtech Platforms', 'UX Design', 'App Store Optimization'].map((tag, i) => (
                        <span key={i} style={{
                          fontSize: 11, padding: '4px 12px', borderRadius: 100,
                          background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)',
                          color: 'rgba(255,255,255,0.5)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'draper-labs', name: 'Draper Labs', category: 'Deep Tech',
                    emoji: '🔬', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Mission-critical software systems across defense, aerospace, and healthcare',
                    tags: ['Safety-Critical Systems', 'Defense Software', 'Embedded Systems', 'Biomedical Apps'],
                    paragraphs: [
                      'Draper Laboratory is one of Boston\'s most storied technical institutions — a not-for-profit research and development organization originally spun out of MIT. While not a traditional app studio, Draper builds some of the most sophisticated mission-critical software systems in the world, and their civilian-sector mobile and embedded work is exceptional.',
                      'For clients who need apps that cannot fail — medical devices, safety monitoring systems, aerospace interfaces, or defense-grade data platforms — Draper brings a level of engineering rigor that commercial studios simply cannot match. Their work in biomedical app development and healthcare data systems is particularly relevant to the Boston life sciences cluster.',
                      'Best suited for: Organizations with government contracts, medical device companies, or any project where software failure has serious consequences. Not the right fit for fast-moving consumer startups.',
                    ],
                  },
                  {
                    num: '03', id: 'cantina', name: 'Cantina', category: 'Product Design',
                    emoji: '🎨', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Design-led digital products for healthcare, finance, and consumer brands',
                    tags: ['Product Strategy', 'UX/UI Design', 'iOS Development', 'Healthcare Apps'],
                    paragraphs: [
                      'Cantina is one of Boston\'s premier design-led product studios. They operate at the intersection of product strategy, user experience design, and software engineering — delivering digital products that are as thoughtful in their interaction design as they are solid in their technical execution.',
                      'Cantina has built a strong portfolio in healthcare and financial services, two sectors where Boston is globally dominant. Their team understands that a healthcare app is not just a UI exercise — it requires deep empathy for clinical workflows, patient safety considerations, and regulatory constraints.',
                      'Their strength is in product discovery and early-stage definition. If you are not entirely sure what you need to build, Cantina\'s product strategy practice can help you find the answer before committing significant engineering resources.',
                    ],
                  },
                  {
                    num: '04', id: 'fresh-tilled-soil', name: 'Fresh Tilled Soil', category: 'UX Research',
                    emoji: '🌱', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'User-validated app experiences grounded in behavioral research',
                    tags: ['UX Research', 'Usability Testing', 'Design Systems', 'Product Validation'],
                    paragraphs: [
                      'Fresh Tilled Soil built its reputation as one of the most rigorous UX research and design firms in New England. Their philosophy is simple: understand users first, then design. Every project begins with substantive research — interviews, journey mapping, behavioral analysis — before a single wireframe is sketched.',
                      'This research-first methodology pays dividends in Boston\'s evidence-driven tech culture. Clients in healthcare, edtech, and financial services appreciate that design decisions at Fresh Tilled Soil are backed by data, not assumptions. Their work reduces post-launch iteration cycles and dramatically improves user adoption metrics.',
                      'Note: Fresh Tilled Soil leans heavily into design and UX strategy. If you need a full engineering delivery partner, you\'ll typically need to pair them with a development team — though they have established strong engineering partnerships in the Boston ecosystem.',
                    ],
                  },
                  {
                    num: '05', id: 'thoughtbot', name: 'thoughtbot Boston', category: 'Agile Studio',
                    emoji: '⚙️', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Lean product engineering with a global open-source legacy',
                    tags: ['Ruby on Rails', 'React Native', 'Agile Development', 'Open Source'],
                    paragraphs: [
                      'thoughtbot is a globally respected software consultancy with a significant Boston presence. Known for their pioneering contributions to the open-source community — including the widely-used Factory Bot and Paperclip libraries — thoughtbot brings engineering discipline and transparency that few agencies can match.',
                      'Their Boston office serves a mix of VC-backed startups and established companies looking to accelerate engineering velocity. thoughtbot\'s "product clinic" model means they are particularly skilled at diagnosing existing codebases, refactoring legacy systems, and establishing engineering best practices on teams that have outgrown their early architecture.',
                      'Best for companies that value engineering craft, open communication, and a team that will push back on bad product decisions rather than just execute them.',
                    ],
                  },
                  {
                    num: '06', id: 'lab-zero', name: 'Lab Zero', category: 'Civic Tech',
                    emoji: '🏛️', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Government and social impact digital products that serve real communities',
                    tags: ['Government Tech', 'Civic Apps', 'Accessibility', 'Open Source'],
                    paragraphs: [
                      'Lab Zero is a mission-driven software studio that brings Silicon Valley engineering quality to government and social-impact projects. In a city like Boston — home to major public institutions, municipal government innovation efforts, and a robust civic tech community — Lab Zero fills a critical gap.',
                      'Their work on public-sector digital services includes state government portals, public health platforms, and civic engagement apps. Lab Zero engineers are specialists in accessibility compliance (WCAG 2.1 AA), open-source government technology, and the unique procurement and security requirements of public-sector contracts.',
                      'If your project serves the public good — whether that\'s a city health dashboard, a nonprofit case management system, or a state benefits portal — Lab Zero\'s civic-tech expertise is unmatched in the Boston market.',
                    ],
                  },
                  {
                    num: '07', id: 'oomph', name: 'Oomph', category: 'Web & Mobile',
                    emoji: '💥', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Digital products for higher education, nonprofit, and mission-driven organizations',
                    tags: ['Higher Education', 'Drupal', 'Web Applications', 'Nonprofit Tech'],
                    paragraphs: [
                      'Oomph is a Providence-based studio with deep roots in the Boston tech community and a dominant presence in higher education digital work. Given that Boston is home to over 35 colleges and universities, Oomph\'s specialization in academic digital products is a significant competitive advantage in this market.',
                      'Their portfolio spans university websites and portals, nonprofit digital transformations, and web applications for research institutions. Oomph is a Drupal specialist, making them the default choice for organizations already invested in that CMS ecosystem — a significant portion of Boston\'s institutional web infrastructure.',
                      'Oomph is not the right choice for consumer mobile apps or fast-moving startup projects. But for established institutions in higher education, healthcare, or the nonprofit sector, they deliver with the reliability and domain understanding that these organizations require.',
                    ],
                  },
                  {
                    num: '08', id: 'genuine', name: 'Genuine', category: 'Enterprise CX',
                    emoji: '✨', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Connected customer experiences for enterprise brands across digital touchpoints',
                    tags: ['Enterprise CX', 'Mobile Apps', 'Digital Strategy', 'Customer Journeys'],
                    paragraphs: [
                      'Genuine is a Boston-based digital experience agency that builds connected customer experiences for enterprise brands. Their philosophy is that mobile apps do not exist in isolation — they are part of a broader customer journey that spans web, in-store, service centers, and back-office systems.',
                      'This systems-thinking approach resonates strongly with Boston\'s large enterprise client base in financial services, retail, and professional services. Genuine excels at mapping the full customer ecosystem before designing the mobile touchpoints, ensuring that apps are integrated into business operations rather than bolted on as afterthoughts.',
                      'Strong fit for mid-to-large enterprises that need a strategic partner who understands both the business context and the technical execution, particularly in customer-facing digital channels.',
                    ],
                  },
                  {
                    num: '09', id: 'dept-agency', name: 'DEPT Agency', category: 'Full-Service',
                    emoji: '🌐', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Global-scale digital transformation across technology, data, and creative',
                    tags: ['Digital Transformation', 'Data & Analytics', 'Creative Technology', 'Enterprise'],
                    paragraphs: [
                      'DEPT Agency is a global digital consultancy with a strong Boston presence, bringing together technology, data science, and creative capability under one roof. Their scale means they can staff large, complex digital transformation programs that smaller studios cannot — and their Boston office draws heavily from the region\'s strong tech talent pool.',
                      'DEPT excels in large-scale digital transformation for enterprise clients — the kind of multi-year, multi-workstream programs that touch mobile apps, web platforms, data infrastructure, and marketing technology simultaneously. Their data and analytics practice is particularly strong, which aligns well with Boston\'s data-driven culture.',
                      'Best for enterprise clients with complex, multi-dimensional digital needs and budgets to match. DEPT is not the right fit for early-stage startups or project-based engagements under $100K.',
                    ],
                  },
                  {
                    num: '10', id: 'accenture-boston', name: 'Accenture Boston', category: 'Enterprise',
                    emoji: '🏢', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Enterprise modernization, cloud migration, and large-scale digital programs',
                    tags: ['Enterprise Modernization', 'Cloud Migration', 'SAP Integration', 'Digital Programs'],
                    paragraphs: [
                      'Accenture\'s Boston office is part of the global consulting giant\'s technology services arm, bringing their Accenture Song (formerly Fjord) design capability together with large-scale systems integration. For Boston\'s largest financial institutions, healthcare conglomerates, and life sciences companies, Accenture is often the default choice for digital transformation programs.',
                      'Their Boston presence is specifically strong in financial services modernization (replacing core banking systems, building digital banking apps) and life sciences digital (clinical trial platforms, regulatory submission software, connected health applications). The scale of Accenture\'s delivery capability — thousands of engineers, global delivery centers — makes them viable for programs that would overwhelm any boutique studio.',
                      'Note: Accenture operates at enterprise pricing and enterprise timelines. For most startups, growth-stage companies, or projects under $1M, a more agile studio will deliver better outcomes at significantly lower cost and risk.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24, padding: 36,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${app.bgColor}0.1)`, border: `1px solid ${app.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{app.emoji}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: pi < app.paragraphs.length - 1 ? 16 : 20,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: `${app.bgColor}0.06)`, border: `1px solid ${app.bgColor}0.12)`,
                        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={app.accentColor} strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}>
                          {app.metric}
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {app.tags.map((tag, ti) => (
                          <span key={ti} style={{
                            fontSize: 11, padding: '4px 12px', borderRadius: 100,
                            background: `${app.bgColor}0.05)`, border: `1px solid ${app.bgColor}0.1)`,
                            color: 'rgba(255,255,255,0.4)',
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* How to Choose */}
                <div className="reveal" style={{ marginBottom: 56 }} id="how-to-choose">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>How to Choose an App Development Company in Boston</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 28 }}>
                    Boston's app development landscape is more specialized than most cities. Here's the framework we recommend for evaluating and selecting the right partner for your specific situation.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      {
                        step: '01',
                        title: 'Define your vertical requirements first',
                        desc: 'Boston studios are highly specialized. A healthtech-focused studio with HIPAA experience will outperform a generalist agency on a medical app project. Know your industry before you know your agency.',
                      },
                      {
                        step: '02',
                        title: 'Demand live portfolio evidence',
                        desc: 'Ask for App Store links, not mockups. Download the apps. Read the reviews. If a studio can\'t point you to apps that are actively being used and rated, treat that as a red flag.',
                      },
                      {
                        step: '03',
                        title: 'Evaluate the engineering process, not just the pitch',
                        desc: 'Ask how they handle sprint planning, code reviews, QA automation, and post-launch monitoring. Studios that can\'t answer these questions in detail are likely outsourcing critical work without transparency.',
                      },
                      {
                        step: '04',
                        title: 'Assess cross-platform vs. native fit',
                        desc: 'Cross-platform (Flutter, React Native) can reduce your budget by 40-60% and accelerate timelines significantly. If a studio pushes native development without a compelling technical reason, ask why — it often means they lack cross-platform expertise.',
                      },
                      {
                        step: '05',
                        title: 'Clarify post-launch support terms',
                        desc: 'Most apps require significant iteration in the first 90 days post-launch. Confirm that your partner offers a structured post-launch support period — bug fixes, performance monitoring, crash reporting, and iterative improvements.',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 20, padding: '24px', borderRadius: 16,
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        alignItems: 'flex-start',
                      }}>
                        <span style={{
                          fontSize: 12, fontWeight: 800, color: '#22c55e', flexShrink: 0,
                          width: 32, height: 32, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>{item.step}</span>
                        <div>
                          <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Boston vs Other Cities */}
                <div className="reveal" style={{ marginBottom: 56 }} id="boston-vs-cities">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Boston vs. Other US Tech Hubs: App Development Comparison</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 24 }}>
                    How does hiring an app developer in Boston compare to other major US tech cities? Here's the honest breakdown.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['City', 'Avg. Hourly Rate', 'Specialization', 'Startup Density', 'Best For'].map(h => (
                            <th key={h} style={{
                              padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700,
                              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                              background: 'rgba(255,255,255,0.02)',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { city: 'Boston', rate: '$150–$300/hr', spec: 'Health, Biotech, Edtech', density: 'High', best: 'Regulated industries, research-driven tech' },
                          { city: 'San Francisco', rate: '$175–$350/hr', spec: 'Consumer, AI, SaaS', density: 'Very High', best: 'VC-backed consumer apps, AI products' },
                          { city: 'New York', rate: '$160–$320/hr', spec: 'Fintech, Media, Fashion', density: 'Very High', best: 'Finance, media, e-commerce' },
                          { city: 'Austin', rate: '$100–$200/hr', spec: 'General, IoT, Consumer', density: 'High', best: 'Cost-effective general development' },
                          { city: 'Chicago', rate: '$110–$200/hr', spec: 'Enterprise, Healthcare', density: 'Medium', best: 'Enterprise software, B2B platforms' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i === 0 ? 'rgba(34,197,94,0.03)' : 'transparent' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : '#ffffff', fontWeight: 600 }}>{row.city}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.rate}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.spec}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.density}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.best}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{
                    padding: 24, borderRadius: 16,
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                  }}>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Bottom line:</strong> Boston rates are competitive with New York and San Francisco for specialized work. However, you can achieve equivalent or superior quality by partnering with a global-delivery studio like Codazz, which combines engineering excellence with pricing that is 40–60% below major US city rates — without sacrificing the domain expertise or communication quality Boston clients expect.
                    </p>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqs.map((faq, i) => (
                      <div
                        key={i}
                        style={{
                          borderRadius: 16, border: '1px solid',
                          borderColor: openFaq === i ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.06)',
                          background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                          overflow: 'hidden', transition: 'all 0.2s',
                        }}
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                            background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                          }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                          <span style={{
                            width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                            background: openFaq === i ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)',
                            fontSize: 18, fontWeight: 300, transition: 'all 0.2s',
                            transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                          }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 0 }}>
                  <div style={{
                    padding: 32, borderRadius: 20,
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 16,
                    }}>The Verdict</h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 16 }}>
                      Boston's app development market is defined by depth, not breadth. The city's proximity to world-class research institutions and regulated industries has shaped a studio ecosystem that values precision, compliance, and domain expertise over fast-and-cheap execution.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 16 }}>
                      For most companies — especially those in healthcare, fintech, or edtech — the optimal choice is a partner who combines that domain depth with modern cross-platform delivery capability. That is precisely what Codazz offers: 500+ apps shipped, full-lifecycle delivery from UX to App Store, and a track record that spans the industries Boston cares about most.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                      Whether you're building from a blank page or scaling an existing platform, the right development partner changes everything. Use this list as your starting point — and reach out to Codazz to discuss your specific requirements.
                    </p>
                  </div>
                </div>

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents with scroll tracking */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {tocItems.map(item => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          style={{
                            fontSize: 13,
                            color: activeId === item.id ? '#22c55e' : 'rgba(255,255,255,0.4)',
                            textDecoration: 'none',
                            padding: '7px 10px', borderRadius: 8,
                            display: 'flex', alignItems: 'center', gap: 8,
                            background: activeId === item.id ? 'rgba(34,197,94,0.07)' : 'transparent',
                            borderLeft: activeId === item.id ? '2px solid #22c55e' : '2px solid transparent',
                            transition: 'all 0.15s',
                          }}
                          onMouseEnter={e => {
                            if (activeId !== item.id) {
                              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)';
                              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.04)';
                            }
                          }}
                          onMouseLeave={e => {
                            if (activeId !== item.id) {
                              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                            }
                          }}
                        >
                          {item.label}
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
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#22c55e', flexShrink: 0,
                      }}>CE</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Editorial</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Research Team, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      The Codazz editorial team researches and ranks app development studios across North America, with a focus on portfolio quality, technical depth, and client outcomes.
                    </p>
                  </div>

                  {/* CTA Card */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>
                      Need a Boston-Quality App?
                    </p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 16px' }}>
                      Get the engineering depth Boston companies expect — at 40-60% lower cost through Codazz's cross-platform delivery model.
                    </p>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{
                        width: '100%', padding: '12px', borderRadius: 100,
                        background: '#22c55e', color: '#000',
                        fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}>
                        Get a Free Consultation →
                      </button>
                    </Link>
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
                          <p style={{ fontSize: 11, color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
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
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: 'clamp(40px, 6vw, 64px) clamp(32px, 5vw, 56px)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32, position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#22c55e', marginBottom: 12,
                }}>Build with Codazz</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12, maxWidth: 560,
                }}>
                  Build a Boston-Quality App — Without the Boston Price Tag.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7, margin: 0 }}>
                  Codazz delivers the engineering depth, domain expertise, and pixel-perfect design that Boston's most demanding clients expect — at 40-60% lower cost than local agencies. 500+ apps shipped. Your next one could be next.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', zIndex: 1 }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                    fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                    transition: 'all 0.2s', whiteSpace: 'nowrap',
                  }}>
                    Get a Free App Consultation →
                  </button>
                </Link>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', margin: 0 }}>
                  No commitment. Response within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
