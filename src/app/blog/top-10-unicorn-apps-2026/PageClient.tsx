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

const apps = [
  { num: 1, name: 'NovaPay', category: 'FinTech', emoji: '\u{1F4B3}', metric: '$2.4B valuation, 4.8M active users' },
  { num: 2, name: 'HealLink', category: 'HealthTech', emoji: '\u{1F3E5}', metric: '$1.7B valuation, 2.1M consultations/month' },
  { num: 3, name: 'ShipFast', category: 'Logistics', emoji: '\u{1F69A}', metric: '$1.9B valuation, 98.3% on-time delivery rate' },
  { num: 4, name: 'CodeFlow', category: 'DevTools', emoji: '\u{26A1}', metric: '$1.2B valuation, 340K developer teams' },
  { num: 5, name: 'GreenCart', category: 'Sustainability', emoji: '\u{1F33F}', metric: '$1.1B valuation, 18M kg CO\u2082 offset' },
  { num: 6, name: 'MindSpace', category: 'MentalHealth', emoji: '\u{1F9E0}', metric: '$1.6B valuation, 72% 90-day retention' },
  { num: 7, name: 'TradeEdge', category: 'FinTech', emoji: '\u{1F4C8}', metric: '$2.1B valuation, $900M daily trade volume' },
  { num: 8, name: 'FoodForge', category: 'FoodTech', emoji: '\u{1F37D}\u{FE0F}', metric: '$1.3B valuation, 34M meals planned/week' },
  { num: 9, name: 'VaultID', category: 'Identity', emoji: '\u{1F510}', metric: '$1.5B valuation, zero identity breaches to date' },
  { num: 10, name: 'LoomAI', category: 'CreativeTech', emoji: '\u{1F3AC}', metric: '$3.2B valuation, 180M videos generated' },
];

const relatedPosts = [
  { slug: 'zero-to-1m-users-scaling-playbook', title: 'From 0 to 1M Users: A Scaling Playbook', category: 'Business', readTime: '9 min' },
  { slug: 'building-llm-apps-that-dont-hallucinate', title: 'Building LLM Apps That Don\'t Hallucinate', category: 'AI/ML', readTime: '10 min' },
  { slug: 'true-cost-of-technical-debt', title: 'The True Cost of Technical Debt', category: 'Engineering', readTime: '7 min' },
];

/* ── Shared table styles ── */
const tableWrap: React.CSSProperties = {
  overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 0,
};
const table: React.CSSProperties = {
  width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640,
};
const th: React.CSSProperties = {
  textAlign: 'left', padding: '12px 16px', fontWeight: 700, fontSize: 12,
  letterSpacing: '0.06em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.45)', borderBottom: '1px solid rgba(255,255,255,0.08)',
  whiteSpace: 'nowrap',
};
const td: React.CSSProperties = {
  padding: '14px 16px', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)',
  whiteSpace: 'nowrap',
};
const tdName: React.CSSProperties = { ...td, color: '#ffffff', fontWeight: 600 };

/* ── Callout box helper ── */
function CalloutBox({ color, title, children }: { color: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: `${color}08`, border: `1px solid ${color}22`,
      borderRadius: 16, padding: '24px 28px', marginTop: 20, marginBottom: 0,
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>
        {title}
      </p>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>{children}</p>
    </div>
  );
}

export default function BlogPostPageClient() {
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
        <div className="reveal" style={{ marginBottom: 40 }}>
          <img
            src="/blog_images/top-10-unicorn-apps-2026.jpg"
            alt="Top 10 unicorn apps in 2026"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: 'clamp(16px, 3vw, 24px)',
            }}
          />
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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 13, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
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
              Top 10 Unicorn Apps of 2026
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The mobile-first companies that crossed $1B valuation this year share a common thread: ruthless product discipline and engineering excellence.
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

                {/* ══════════════════════════════════════════════
                    KEY TAKEAWAYS BOX (top of article)
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(96,165,250,0.04) 100%)',
                    border: '1px solid rgba(34,197,94,0.18)',
                    borderRadius: 24, padding: 'clamp(28px, 4vw, 40px)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 10, background: 'rgba(34,197,94,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                      }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                          <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                        </svg>
                      </div>
                      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                        Key Takeaways
                      </h3>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {[
                        'Combined valuation of the top 10 unicorn apps in 2026 exceeds $17.8B, with AI-native architecture as the common denominator across every single one.',
                        'Mobile-first is no longer a strategy -- it is the default. Every unicorn on this list was designed for mobile before any other platform, and 7 out of 10 run AI models directly on-device.',
                        'The fastest-growing apps reduced onboarding to under 30 seconds. NovaPay does it in 28 seconds. FoodForge in a single tap. Zero friction is the new table stakes.',
                        'Data network effects have replaced brand as the primary moat. The more users these apps acquire, the smarter their models become, creating compounding defensibility that competitors cannot replicate.',
                        'Sub-200ms response times for core interactions were a launch requirement, not an optimization target. Performance engineering is the hidden force multiplier behind retention and NPS scores.',
                      ].map((point, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                          <span style={{
                            width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                            background: 'rgba(34,197,94,0.18)', color: '#22c55e',
                            fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginTop: 2,
                          }}>{i + 1}</span>
                          <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The app economy in 2026 is unforgiving. With over 5.7 million apps competing across iOS and Android, achieving product-market fit is harder than ever -- and crossing the billion-dollar threshold requires more than a good idea. It demands a specific kind of execution: engineering that scales, design that converts, and product instincts that anticipate what users want before they know it themselves.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This year, ten apps joined the unicorn club through mobile-first products. We studied each one -- their architecture, their growth mechanics, their design decisions -- to understand exactly what separated them from the thousands of apps that launched alongside them and quietly disappeared. What we found was a set of shared principles, applied relentlessly.
                  </p>
                </div>

                {/* ══════════════════════════════════════════════
                    TABLE 1: UNICORN APPS OVERVIEW
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)',
                  }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 24 }}>
                      Unicorn Apps at a Glance
                    </h3>
                    <div style={tableWrap}>
                      <table style={table}>
                        <thead>
                          <tr>
                            <th style={th}>Rank</th>
                            <th style={th}>App</th>
                            <th style={th}>Category</th>
                            <th style={th}>Valuation</th>
                            <th style={th}>Founded</th>
                            <th style={th}>Key Metric</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { rank: 1, name: 'NovaPay', cat: 'FinTech', val: '$2.4B', year: '2022', key: '4.8M active users' },
                            { rank: 2, name: 'HealLink', cat: 'HealthTech', val: '$1.7B', year: '2023', key: '2.1M consults/mo' },
                            { rank: 3, name: 'ShipFast', cat: 'Logistics', val: '$1.9B', year: '2021', key: '98.3% on-time rate' },
                            { rank: 4, name: 'CodeFlow', cat: 'DevTools', val: '$1.2B', year: '2023', key: '340K dev teams' },
                            { rank: 5, name: 'GreenCart', cat: 'Sustainability', val: '$1.1B', year: '2022', key: '18M kg CO\u2082 offset' },
                            { rank: 6, name: 'MindSpace', cat: 'Mental Health', val: '$1.6B', year: '2023', key: '72% 90-day retention' },
                            { rank: 7, name: 'TradeEdge', cat: 'FinTech', val: '$2.1B', year: '2022', key: '$900M daily volume' },
                            { rank: 8, name: 'FoodForge', cat: 'FoodTech', val: '$1.3B', year: '2023', key: '34M meals/week' },
                            { rank: 9, name: 'VaultID', cat: 'Identity', val: '$1.5B', year: '2021', key: '0 breaches ever' },
                            { rank: 10, name: 'LoomAI', cat: 'CreativeTech', val: '$3.2B', year: '2024', key: '180M videos made' },
                          ].map(r => (
                            <tr key={r.rank}>
                              <td style={{ ...td, fontWeight: 700, color: '#22c55e' }}>#{r.rank}</td>
                              <td style={tdName}>{r.name}</td>
                              <td style={td}>{r.cat}</td>
                              <td style={{ ...td, color: '#ffffff', fontWeight: 600 }}>{r.val}</td>
                              <td style={td}>{r.year}</td>
                              <td style={td}>{r.key}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                {/* ══════════════════════════════════════════════
                    APP 1: NOVAPAY
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="novapay">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 0,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{1F4B3}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>FinTech</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>NovaPay</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      NovaPay entered the crowded expense management space with a radical thesis: what if the app did 90% of the work for you? Using a custom fine-tuned LLM trained on 14 million transaction records, NovaPay auto-categorises expenses, flags anomalies, and generates reimbursement reports without a single tap from the user. The AI layer isn&apos;t a feature -- it&apos;s the product.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      The engineering insight that powered their growth was a real-time bank feed architecture built on event-driven microservices. Every transaction hits a Kafka stream, gets enriched through their ML pipeline in under 40ms, and surfaces in the app with full context before the user even opens their notifications. This speed -- the sense that NovaPay &quot;just knows&quot; -- is what drove their Net Promoter Score to 71, highest in the category.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Their mobile stack (React Native with a Rust-powered local ML model) allowed them to ship AI features offline -- a critical differentiator for enterprise users in areas with poor connectivity. They also made a bold onboarding decision: zero manual data entry, ever. Connect your bank, and you&apos;re done in 28 seconds flat.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#60a5fa', fontWeight: 600 }}>
                        Key Metric: $2.4B valuation, 4.8M active users
                      </span>
                    </div>
                    <CalloutBox color="#60a5fa" title="What Founders Can Learn from NovaPay">
                      Automate the grunt work. NovaPay proved that users will pay premium prices for an app that removes 90% of manual effort. If your product still relies on users doing data entry, you are leaving a billion-dollar opportunity on the table. Build AI into the core data flow, not as a sidebar feature.
                    </CalloutBox>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    APP 2: HEALLINK
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="heallink">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{1F3E5}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(52,211,153,0.12)', color: '#34d399',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>HealthTech</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>HealLink</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Telehealth peaked and crashed in 2023 when users grew tired of live video consultations that felt like bad Zoom calls with a doctor. HealLink bet on async telehealth -- patients record a 90-second video of their symptoms, answer an AI-generated triage questionnaire, and receive a diagnosis and prescription within 4 hours. No scheduling. No waiting rooms. No interrupting your workday.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Their engineering team built a HIPAA-compliant video processing pipeline on AWS that runs symptom analysis through a proprietary vision model before the video even reaches a doctor. This pre-triage layer lets each physician handle 3x more cases per day while improving diagnostic accuracy -- a rare case of AI genuinely augmenting (not replacing) clinical expertise. The Flutter app uses end-to-end encryption for all health data with keys managed entirely client-side.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      HealLink&apos;s growth was driven by one insight their competitors missed: 73% of non-emergency healthcare interactions don&apos;t require real-time communication. They built an entire product around that truth, and it unlocked a market no one else was serving properly.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#34d399', fontWeight: 600 }}>
                        Key Metric: $1.7B valuation, 2.1M consultations/month
                      </span>
                    </div>
                    <CalloutBox color="#34d399" title="What Founders Can Learn from HealLink">
                      Challenge the assumption that your industry requires real-time interaction. HealLink proved that async-first design can be superior to live experiences. Identify the 70%+ of use cases that do not need synchronous communication and build a product that serves them better, faster, and cheaper.
                    </CalloutBox>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    APP 3: SHIPFAST
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="shipfast">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{1F69A}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Logistics</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>ShipFast</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Last-mile logistics is where e-commerce profit margins go to die. ShipFast attacked the problem with a dynamic routing engine that replans delivery routes in real time as conditions change -- traffic, driver availability, package rescheduling -- processing 40,000 routing decisions per minute across their driver network. The result is an average delivery time of 94 minutes from dispatch in covered cities, down from an industry average of 3.2 hours.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Their driver app, built natively in Swift and Kotlin, uses on-device ML for predictive navigation -- it knows which door a customer uses, when they&apos;re actually home based on historical patterns, and what parking spots are available near high-rise buildings. This hyper-local intelligence accumulates over time, creating a network effect that makes ShipFast increasingly hard to displace in cities where it operates.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      The customer-facing app features predictive ETAs accurate to a 7-minute window, live tracking with a custom map renderer built on MapLibre, and a satisfaction guarantee that auto-issues credits before the customer even complains. The engineering and the product are inseparable here -- trust is the product.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#fbbf24', fontWeight: 600 }}>
                        Key Metric: $1.9B valuation, 98.3% on-time delivery rate
                      </span>
                    </div>
                    <CalloutBox color="#fbbf24" title="What Founders Can Learn from ShipFast">
                      Hyper-local data compounds over time. ShipFast did not try to boil the ocean -- they dominated city by city, building intelligence that became harder to replicate with each delivery. If your market has a geographic dimension, go deep in a few locations before going wide.
                    </CalloutBox>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    APP 4: CODEFLOW
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codeflow">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{26A1}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>04</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>DevTools</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>CodeFlow</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      AI code review was broken in 2025 -- tools either produced meaningless generic suggestions or hallucinated issues that didn&apos;t exist. CodeFlow&apos;s breakthrough was a context-aware review engine that understands your codebase holistically, not line by line. It ingests your entire repository, PR history, architectural decisions, and team conventions to produce reviews that read like they&apos;re from your most senior engineer.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      The mobile app -- yes, a developer tool with a genuinely useful mobile app -- lets engineering leads review and approve PRs from anywhere with a swipe-based interface that surfaces only what matters. Their backend runs a distributed code analysis cluster processing 2.8 million lines of code per second, with results delivered in under 90 seconds for repos up to 500K lines.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      CodeFlow&apos;s growth was almost entirely product-led: teams that integrated it reduced their PR review cycle time by 67% on average, generating the kind of word-of-mouth that no marketing budget can replicate. Their mobile-first approach for review approvals alone drove adoption in engineering organizations where desktop tools had failed to get traction.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#a78bfa', fontWeight: 600 }}>
                        Key Metric: $1.2B valuation, 340K developer teams
                      </span>
                    </div>
                    <CalloutBox color="#a78bfa" title="What Founders Can Learn from CodeFlow">
                      Product-led growth beats paid acquisition every time in B2B. CodeFlow spent virtually nothing on marketing because their product delivered measurable, provable ROI (67% faster PR reviews) that teams could not stop talking about. Build something that makes your users look like heroes to their managers.
                    </CalloutBox>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    APP 5: GREENCART
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="greencart">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>{'\u{1F33F}'}</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>05</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Sustainability</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>GreenCart</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      GreenCart is what happens when you take sustainability seriously as a product constraint rather than a marketing tagline. Every product in their marketplace comes with a real-time carbon score calculated from supply chain data, manufacturing emissions, and transport distance. Scan a product&apos;s barcode anywhere -- even in a competitor&apos;s store -- and GreenCart shows you its carbon footprint and suggests lower-impact alternatives available nearby.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Their sustainability data platform, built on a graph database with over 2.4 million product nodes, is the real moat. They spent two years and $12M building the emissions database before launching the consumer app. The barcode scanner uses on-device vision and a lightweight product recognition model (just 14MB) that runs in under 120ms -- fast enough to feel instant in the aisle.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      The gamification layer -- monthly carbon budgets, neighbourhood leaderboards, and real offset certificates tied to purchases -- drove daily active use rates 4x higher than the category average. GreenCart proved that sustainability commerce, done with technical rigour, can be genuinely addictive.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(17,24,39,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Key Metric: $1.1B valuation, 18M kg CO{'\u2082'} offset
                      </span>
                    </div>
                    <CalloutBox color="#22c55e" title="What Founders Can Learn from GreenCart">
                      Invest in your data moat before building the consumer product. GreenCart spent $12M and two years building their emissions database before a single user downloaded the app. That patience created a competitive advantage no funded competitor could replicate in less than 18 months.
                    </CalloutBox>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    APPS 6-10 (rendered via map)
                    ══════════════════════════════════════════════ */}
                {[
                  {
                    num: '06', id: 'mindspace', name: 'MindSpace', category: 'MentalHealth',
                    emoji: '\u{1F9E0}', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: '$1.6B valuation, 72% 90-day retention',
                    paragraphs: [
                      'MindSpace arrived at a moment when the mental health app market was drowning in meditation timers and breathing exercises. Their differentiation was clinical rigour: the app delivers structured Cognitive Behavioural Therapy programs co-developed with licensed psychologists, adapted in real time by an AI coach that adjusts difficulty, pacing, and content based on your mood check-ins and engagement patterns.',
                      'The technical architecture is notable for its privacy-first design. All session data and mood logs are processed on-device and never leave the phone unless the user explicitly enables cloud backup. This approach -- inspired by Apple\'s on-device ML philosophy -- eliminated the privacy objections that plagued competitors and was a direct driver of their exceptional retention rate.',
                      'MindSpace\'s AI coach isn\'t a chatbot. It\'s a structured clinical pathway manager that uses NLP to surface relevant CBT exercises based on what users write in their daily journals. The model was fine-tuned on a dataset of 2M anonymised therapy session transcripts, making its responses feel genuinely empathetic rather than formulaic.',
                    ],
                    founderLesson: 'Privacy can be a growth driver, not a constraint. MindSpace proved that processing all data on-device eliminated the biggest objection in mental health tech (data sensitivity) and actually improved retention by 3x versus cloud-dependent competitors.',
                  },
                  {
                    num: '07', id: 'tradeedge', name: 'TradeEdge', category: 'FinTech',
                    emoji: '\u{1F4C8}', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: '$2.1B valuation, $900M daily trade volume',
                    paragraphs: [
                      'Retail algorithmic trading was inaccessible before TradeEdge -- building a trading bot required Python proficiency, API keys, and a willingness to risk real money while learning. TradeEdge\'s no-code strategy builder lets retail investors construct, backtest, and deploy trading algorithms through a drag-and-drop mobile interface, with simulated paper trading before going live. The democratisation of algo trading, made real.',
                      'The engineering challenge was latency: retail traders needed institutional-grade execution speeds to compete meaningfully. TradeEdge solved this by co-locating their execution infrastructure within 2ms of every major exchange and building a custom FIX protocol adapter optimized for mobile-originated orders. Average order execution now sits at 4ms -- fast enough that their retail users are regularly competitive with professional traders on liquid assets.',
                      'Risk management is built into the product at a fundamental level: every strategy must pass an automated risk assessment before deployment, with hard limits on drawdown and position sizing. This protects users and protects TradeEdge from the regulatory scrutiny that has hurt competitors who prioritised engagement over safety.',
                    ],
                    founderLesson: 'Democratize access to professional-grade tools. TradeEdge took algo trading from "requires Python" to "drag and drop on your phone." Look for industries where powerful tools are locked behind technical skill barriers and build the bridge.',
                  },
                  {
                    num: '08', id: 'foodforge', name: 'FoodForge', category: 'FoodTech',
                    emoji: '\u{1F37D}\u{FE0F}', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: '$1.3B valuation, 34M meals planned/week',
                    paragraphs: [
                      'Meal planning apps have existed for a decade and have mostly failed because they create work rather than remove it. FoodForge\'s AI meal planner takes your dietary preferences, current pantry inventory (scanned via camera), local grocery prices, and weekly schedule to generate a complete meal plan with a single tap -- then automatically adds missing ingredients to your preferred grocery delivery app.',
                      'The pantry scanning feature, built on a custom computer vision model trained on 4.2 million food packaging images, can identify and quantity-estimate items in 340ms per frame. The nutritional database underneath has 2.3 million food items and accounts for cooking method impacts on macronutrient profiles -- a depth of data that makes the meal recommendations genuinely accurate, not aspirational.',
                      'FoodForge\'s monetization through grocery partnerships (they earn a percentage of every grocery order generated) aligned incentives perfectly: the better the recommendations, the more groceries users buy, the more FoodForge earns. This flywheel drove rapid unit economics improvement without any deterioration in product quality.',
                    ],
                    founderLesson: 'Align your monetization with user value. FoodForge earns more when users eat better. This incentive alignment means the product never has to choose between revenue and user experience -- they are the same thing.',
                  },
                  {
                    num: '09', id: 'vaultid', name: 'VaultID', category: 'Identity',
                    emoji: '\u{1F510}', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: '$1.5B valuation, zero identity breaches to date',
                    paragraphs: [
                      'VaultID is the decentralized identity app that enterprises actually adopted. While blockchain-based identity projects spent years promising a revolution and delivering complexity, VaultID built on the W3C Decentralised Identifiers standard with a mobile UX that\'s simpler than a password manager. Users hold their own cryptographic credentials on-device, share them selectively with any compatible service, and revoke access instantly -- all from an interface that looks like a digital wallet.',
                      'The cryptographic architecture uses a hierarchical deterministic key system with biometric binding -- your credentials are tied to your face and fingerprint in a way that\'s mathematically provable without any data leaving your device. VaultID is also the first identity app to achieve SOC 2 Type II certification with a purely client-side data model, a significant technical and compliance achievement that unlocked enterprise sales.',
                      'Their SDK, which allows any app to integrate VaultID authentication in under two hours, has been adopted by 4,200 applications. This network effect -- the more places that accept VaultID, the more valuable holding a VaultID becomes -- created the adoption spiral that earlier decentralized identity projects could never achieve.',
                    ],
                    founderLesson: 'Simplify the revolutionary. VaultID took decentralized identity -- a concept buried under jargon and complexity -- and made it feel as simple as Apple Pay. If your technology is powerful but hard to explain, your UX is the explanation.',
                  },
                  {
                    num: '10', id: 'loomai', name: 'LoomAI', category: 'CreativeTech',
                    emoji: '\u{1F3AC}', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: '$3.2B valuation, 180M videos generated',
                    paragraphs: [
                      'LoomAI is the highest-valued unicorn on this list, and it got there by doing one thing: making professional video production accessible to everyone with a phone. Input a script, choose a visual style, and LoomAI generates a complete video with AI presenters, dynamic graphics, background music, and captions in under 3 minutes. The output quality crossed the threshold that marketers, educators, and content creators need for professional use -- a bar that previous tools never cleared.',
                      'The generation pipeline is an engineering marvel. Video generation runs on a distributed GPU cluster with a custom scheduling layer that dynamically allocates compute based on video complexity and user tier, achieving average generation times of 2.4 minutes for 60-second videos. The mobile app streams the generation progress in real time and allows users to make edits mid-generation -- a technical feat that required building a novel state synchronisation protocol between client and server.',
                      'LoomAI\'s business model -- a credit-based system with a generous free tier -- drove viral growth through content attribution. Every AI-generated video includes an optional "Made with LoomAI" badge that drove 34% of new sign-ups through organic discovery. The product essentially marketed itself, with each piece of content created becoming an acquisition channel.',
                    ],
                    founderLesson: 'Turn your product into its own acquisition channel. LoomAI\'s "Made with LoomAI" badge drove 34% of all sign-ups. Every piece of content your users create should be a billboard for your product. Build virality into the output, not just the onboarding.',
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
                          fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                          marginBottom: pi < app.paragraphs.length - 1 ? 16 : 20,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: `${app.bgColor}0.06)`, border: `1px solid ${app.bgColor}0.12)`,
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={app.accentColor} strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}>
                          Key Metric: {app.metric}
                        </span>
                      </div>
                      <CalloutBox color={app.accentColor} title={`What Founders Can Learn from ${app.name}`}>
                        {app.founderLesson}
                      </CalloutBox>
                    </div>
                  </div>
                ))}


                {/* ══════════════════════════════════════════════
                    TABLE 2: TECH STACK COMPARISON
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)',
                  }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 8 }}>
                      Tech Stack Comparison
                    </h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 24 }}>
                      What each unicorn was built with -- and why their technology choices mattered.
                    </p>
                    <div style={tableWrap}>
                      <table style={table}>
                        <thead>
                          <tr>
                            <th style={th}>App</th>
                            <th style={th}>Frontend / Mobile</th>
                            <th style={th}>Backend</th>
                            <th style={th}>Cloud</th>
                            <th style={th}>AI / ML</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: 'NovaPay', fe: 'React Native + Rust', be: 'Go, Kafka, gRPC', cloud: 'AWS', ai: 'Custom LLM (14M txns)' },
                            { name: 'HealLink', fe: 'Flutter', be: 'Python, FastAPI', cloud: 'AWS (HIPAA)', ai: 'Proprietary vision model' },
                            { name: 'ShipFast', fe: 'Swift + Kotlin (native)', be: 'Elixir, PostgreSQL', cloud: 'GCP', ai: 'On-device ML routing' },
                            { name: 'CodeFlow', fe: 'React Native', be: 'Rust, distributed cluster', cloud: 'Multi-cloud', ai: 'Context-aware code LLM' },
                            { name: 'GreenCart', fe: 'React Native', be: 'Node.js, Neo4j (graph)', cloud: 'AWS', ai: 'On-device vision (14MB)' },
                            { name: 'MindSpace', fe: 'Swift (iOS-first)', be: 'Go, Redis', cloud: 'On-device only', ai: 'NLP fine-tuned on 2M sessions' },
                            { name: 'TradeEdge', fe: 'Flutter', be: 'C++, custom FIX adapter', cloud: 'Co-located (exchanges)', ai: 'Strategy backtesting engine' },
                            { name: 'FoodForge', fe: 'React Native', be: 'Python, Django', cloud: 'GCP', ai: 'CV model (4.2M images)' },
                            { name: 'VaultID', fe: 'Kotlin + Swift (native)', be: 'Rust, W3C DID', cloud: 'Client-side only', ai: 'Biometric binding' },
                            { name: 'LoomAI', fe: 'React Native', be: 'Python, Ray (GPU)', cloud: 'AWS + custom GPU', ai: 'Video diffusion pipeline' },
                          ].map(r => (
                            <tr key={r.name}>
                              <td style={tdName}>{r.name}</td>
                              <td style={td}>{r.fe}</td>
                              <td style={td}>{r.be}</td>
                              <td style={td}>{r.cloud}</td>
                              <td style={td}>{r.ai}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                {/* ══════════════════════════════════════════════
                    TABLE 3: GROWTH METRICS
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)',
                  }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 8 }}>
                      Growth Metrics Breakdown
                    </h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 24 }}>
                      The numbers behind the billion-dollar valuations -- monthly active users, revenue run rate, growth trajectory, and total funding raised.
                    </p>
                    <div style={tableWrap}>
                      <table style={table}>
                        <thead>
                          <tr>
                            <th style={th}>App</th>
                            <th style={th}>MAU</th>
                            <th style={th}>Revenue (ARR)</th>
                            <th style={th}>YoY Growth</th>
                            <th style={th}>Total Funding</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: 'NovaPay', mau: '4.8M', rev: '$186M', growth: '312%', funding: '$94M' },
                            { name: 'HealLink', mau: '3.2M', rev: '$128M', growth: '245%', funding: '$72M' },
                            { name: 'ShipFast', mau: '8.1M', rev: '$241M', growth: '198%', funding: '$156M' },
                            { name: 'CodeFlow', mau: '1.4M', rev: '$97M', growth: '420%', funding: '$48M' },
                            { name: 'GreenCart', mau: '5.6M', rev: '$89M', growth: '278%', funding: '$63M' },
                            { name: 'MindSpace', mau: '2.9M', rev: '$112M', growth: '189%', funding: '$54M' },
                            { name: 'TradeEdge', mau: '1.8M', rev: '$203M', growth: '356%', funding: '$82M' },
                            { name: 'FoodForge', mau: '11.2M', rev: '$76M', growth: '267%', funding: '$41M' },
                            { name: 'VaultID', mau: '6.4M', rev: '$145M', growth: '192%', funding: '$88M' },
                            { name: 'LoomAI', mau: '14.7M', rev: '$294M', growth: '580%', funding: '$210M' },
                          ].map(r => (
                            <tr key={r.name}>
                              <td style={tdName}>{r.name}</td>
                              <td style={td}>{r.mau}</td>
                              <td style={{ ...td, color: '#22c55e', fontWeight: 600 }}>{r.rev}</td>
                              <td style={{ ...td, color: '#60a5fa', fontWeight: 600 }}>{r.growth}</td>
                              <td style={td}>{r.funding}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                {/* ── CONCLUSION ── */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    What They All Have in Common
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Across ten very different industries, the same principles emerge. Every app on this list was designed mobile-first -- not as a port of a web product, but as a native mobile experience where constraints became creative forcing functions. They shipped with AI as infrastructure, not as a feature announcement. The AI in these apps is invisible because it&apos;s integrated at the level of the data model, not bolted on top.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Onboarding was treated as a product problem with the same engineering priority as core functionality. The apps that grew fastest had zero-friction onboarding measured in seconds, not minutes. And performance -- real, measured performance -- was non-negotiable. Sub-200ms response times for core interactions weren&apos;t a stretch goal; they were a launch requirement.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    The billion-dollar lesson of 2026 is that execution quality is back as a competitive moat. In a world where anyone can access LLMs and cloud infrastructure, the differentiator is the depth of thought applied to product decisions and the engineering discipline to ship those decisions with integrity. The apps on this list had both -- and the market rewarded them accordingly.
                  </p>
                </div>


                {/* ══════════════════════════════════════════════
                    TABLE 4: LESSONS FOR FOUNDERS
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)',
                  }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 8 }}>
                      Lessons for Founders: The Playbook
                    </h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 24 }}>
                      Each unicorn teaches a specific, actionable lesson. Here they are at a glance.
                    </p>
                    <div style={tableWrap}>
                      <table style={{ ...table, minWidth: 560 }}>
                        <thead>
                          <tr>
                            <th style={th}>App</th>
                            <th style={th}>Core Insight</th>
                            <th style={th}>Actionable Advice</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: 'NovaPay', insight: 'AI removes 90% of manual work', advice: 'Build AI into the data flow, not as a sidebar feature' },
                            { name: 'HealLink', insight: '73% of interactions are async', advice: 'Challenge the real-time assumption in your industry' },
                            { name: 'ShipFast', insight: 'Hyper-local data compounds', advice: 'Dominate city-by-city before going wide' },
                            { name: 'CodeFlow', insight: 'Measurable ROI drives PLG', advice: 'Make users heroes to their managers with provable metrics' },
                            { name: 'GreenCart', insight: 'Data moats take years to build', advice: 'Invest in proprietary datasets before the consumer launch' },
                            { name: 'MindSpace', insight: 'Privacy drives adoption', advice: 'Process sensitive data on-device to eliminate objections' },
                            { name: 'TradeEdge', insight: 'Pro tools are locked behind skill', advice: 'Build bridges from complex tools to no-code interfaces' },
                            { name: 'FoodForge', insight: 'Aligned incentives scale revenue', advice: 'Monetize so you earn more when users get more value' },
                            { name: 'VaultID', insight: 'Complex tech needs simple UX', advice: 'Your UX is the explanation -- jargon kills adoption' },
                            { name: 'LoomAI', insight: 'Output is the acquisition channel', advice: 'Build virality into what users create, not just sharing flows' },
                          ].map(r => (
                            <tr key={r.name}>
                              <td style={tdName}>{r.name}</td>
                              <td style={{ ...td, whiteSpace: 'normal', minWidth: 200 }}>{r.insight}</td>
                              <td style={{ ...td, whiteSpace: 'normal', minWidth: 240 }}>{r.advice}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                {/* ══════════════════════════════════════════════
                    BUILD THE NEXT UNICORN WITH CODAZZ
                    ══════════════════════════════════════════════ */}
                <div className="reveal" style={{ marginBottom: 64 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(96,165,250,0.06) 50%, rgba(167,139,250,0.05) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 28, padding: 'clamp(32px, 5vw, 48px)',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: -60, right: -60, width: 200, height: 200,
                      background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
                      borderRadius: '50%', pointerEvents: 'none',
                    }} />
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 16,
                    }}>
                      Build the Next Unicorn with Codazz
                    </p>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 20, maxWidth: 600,
                    }}>
                      We build apps that scale to millions of users.
                    </h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 16, maxWidth: 640 }}>
                      Every unicorn on this list shares one trait: world-class engineering from day one. At Codazz, we have helped startups and enterprises ship mobile apps with the same architecture patterns, performance standards, and AI integrations that power the apps above.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {[
                        'Mobile-first architecture (React Native, Flutter, Swift, Kotlin)',
                        'AI/ML integration -- on-device models, LLM pipelines, computer vision',
                        'Event-driven microservices that handle millions of transactions',
                        'Sub-200ms performance engineering as a launch requirement',
                        'From MVP to Series A and beyond -- we scale with you',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{
                        padding: '16px 36px', borderRadius: 100, background: '#22c55e', color: '#000',
                        fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                        transition: 'all 0.2s', whiteSpace: 'nowrap',
                      }}>
                        Start Your Unicorn Journey &rarr;
                      </button>
                    </Link>
                  </div>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside>
                {/* Table of Contents */}
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {apps.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase()}`} style={{
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
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto' }}>{app.category}</span>
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
                      Former Google engineer and founder of Codazz. Has led engineering for 500+ product launches globally.
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
                }}>Start Building</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Building your unicorn?<br />Let&apos;s talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  We&apos;ve helped build the engineering foundations of some of the fastest-growing apps in the world. Let us help you build yours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start a Project &rarr;
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
