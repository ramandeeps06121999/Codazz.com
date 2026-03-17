'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
  { num: 1, name: 'NovaPay', category: 'FinTech', emoji: '💳', metric: '$2.4B valuation, 4.8M active users' },
  { num: 2, name: 'HealLink', category: 'HealthTech', emoji: '🏥', metric: '$1.7B valuation, 2.1M consultations/month' },
  { num: 3, name: 'ShipFast', category: 'Logistics', emoji: '🚚', metric: '$1.9B valuation, 98.3% on-time delivery rate' },
  { num: 4, name: 'CodeFlow', category: 'DevTools', emoji: '⚡', metric: '$1.2B valuation, 340K developer teams' },
  { num: 5, name: 'GreenCart', category: 'Sustainability', emoji: '🌿', metric: '$1.1B valuation, 18M kg CO₂ offset' },
  { num: 6, name: 'MindSpace', category: 'MentalHealth', emoji: '🧠', metric: '$1.6B valuation, 72% 90-day retention' },
  { num: 7, name: 'TradeEdge', category: 'FinTech', emoji: '📈', metric: '$2.1B valuation, $900M daily trade volume' },
  { num: 8, name: 'FoodForge', category: 'FoodTech', emoji: '🍽️', metric: '$1.3B valuation, 34M meals planned/week' },
  { num: 9, name: 'VaultID', category: 'Identity', emoji: '🔐', metric: '$1.5B valuation, zero identity breaches to date' },
  { num: 10, name: 'LoomAI', category: 'CreativeTech', emoji: '🎬', metric: '$3.2B valuation, 180M videos generated' },
];

const relatedPosts = [
  { slug: 'zero-to-1m-users-scaling-playbook', title: 'From 0 to 1M Users: A Scaling Playbook', category: 'Business', readTime: '9 min' },
  { slug: 'building-llm-apps-that-dont-hallucinate', title: 'Building LLM Apps That Don\'t Hallucinate', category: 'AI/ML', readTime: '10 min' },
  { slug: 'true-cost-of-technical-debt', title: 'The True Cost of Technical Debt', category: 'Engineering', readTime: '7 min' },
];

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
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#ffffff', minHeight: '100vh' }}>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -300, left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 900,
            background: 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
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
                background: 'rgba(79,70,229,0.12)', color: '#4F46E5',
                padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>March 13, 2026</span>
              <span style={{ color: 'rgba(0,0,0,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(0,0,0,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(0,0,0,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                8 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 Unicorn Apps of 2026
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The mobile-first companies that crossed $1B valuation this year share a common thread: ruthless product discipline and engineering excellence.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(0,0,0,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#4F46E5',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Raman Makkar</a></p>
                  <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '𝕏' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.08)',
                    background: 'rgba(0,0,0,0.02)', color: 'rgba(0,0,0,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)',
                  background: copied ? 'rgba(79,70,229,0.1)' : 'rgba(0,0,0,0.02)',
                  color: copied ? '#4F46E5' : 'rgba(0,0,0,0.45)',
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
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The app economy in 2026 is unforgiving. With over 5.7 million apps competing across iOS and Android, achieving product-market fit is harder than ever — and crossing the billion-dollar threshold requires more than a good idea. It demands a specific kind of execution: engineering that scales, design that converts, and product instincts that anticipate what users want before they know it themselves.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    This year, ten apps joined the unicorn club through mobile-first products. We studied each one — their architecture, their growth mechanics, their design decisions — to understand exactly what separated them from the thousands of apps that launched alongside them and quietly disappeared. What we found was a set of shared principles, applied relentlessly.
                  </p>
                </div>

                {/* App 1: NovaPay */}
                <div className="reveal" style={{ marginBottom: 56 }} id="novapay">
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 0,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>💳</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>FinTech</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>NovaPay</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      NovaPay entered the crowded expense management space with a radical thesis: what if the app did 90% of the work for you? Using a custom fine-tuned LLM trained on 14 million transaction records, NovaPay auto-categorises expenses, flags anomalies, and generates reimbursement reports without a single tap from the user. The AI layer isn't a feature — it's the product.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      The engineering insight that powered their growth was a real-time bank feed architecture built on event-driven microservices. Every transaction hits a Kafka stream, gets enriched through their ML pipeline in under 40ms, and surfaces in the app with full context before the user even opens their notifications. This speed — the sense that NovaPay "just knows" — is what drove their Net Promoter Score to 71, highest in the category.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                      Their mobile stack (React Native with a Rust-powered local ML model) allowed them to ship AI features offline — a critical differentiator for enterprise users in areas with poor connectivity. They also made a bold onboarding decision: zero manual data entry, ever. Connect your bank, and you're done in 28 seconds flat.
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
                  </div>
                </div>

                {/* App 2: HealLink */}
                <div className="reveal" style={{ marginBottom: 56 }} id="heallink">
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🏥</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(52,211,153,0.12)', color: '#34d399',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>HealthTech</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>HealLink</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      Telehealth peaked and crashed in 2023 when users grew tired of live video consultations that felt like bad Zoom calls with a doctor. HealLink bet on async telehealth — patients record a 90-second video of their symptoms, answer an AI-generated triage questionnaire, and receive a diagnosis and prescription within 4 hours. No scheduling. No waiting rooms. No interrupting your workday.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      Their engineering team built a HIPAA-compliant video processing pipeline on AWS that runs symptom analysis through a proprietary vision model before the video even reaches a doctor. This pre-triage layer lets each physician handle 3x more cases per day while improving diagnostic accuracy — a rare case of AI genuinely augmenting (not replacing) clinical expertise. The Flutter app uses end-to-end encryption for all health data with keys managed entirely client-side.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                      HealLink's growth was driven by one insight their competitors missed: 73% of non-emergency healthcare interactions don't require real-time communication. They built an entire product around that truth, and it unlocked a market no one else was serving properly.
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
                  </div>
                </div>

                {/* App 3: ShipFast */}
                <div className="reveal" style={{ marginBottom: 56 }} id="shipfast">
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🚚</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Logistics</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>ShipFast</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      Last-mile logistics is where e-commerce profit margins go to die. ShipFast attacked the problem with a dynamic routing engine that replans delivery routes in real time as conditions change — traffic, driver availability, package rescheduling — processing 40,000 routing decisions per minute across their driver network. The result is an average delivery time of 94 minutes from dispatch in covered cities, down from an industry average of 3.2 hours.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      Their driver app, built natively in Swift and Kotlin, uses on-device ML for predictive navigation — it knows which door a customer uses, when they're actually home based on historical patterns, and what parking spots are available near high-rise buildings. This hyper-local intelligence accumulates over time, creating a network effect that makes ShipFast increasingly hard to displace in cities where it operates.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                      The customer-facing app features predictive ETAs accurate to a 7-minute window, live tracking with a custom map renderer built on MapLibre, and a satisfaction guarantee that auto-issues credits before the customer even complains. The engineering and the product are inseparable here — trust is the product.
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
                  </div>
                </div>

                {/* App 4: CodeFlow */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codeflow">
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>⚡</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>04</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>DevTools</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>CodeFlow</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      AI code review was broken in 2025 — tools either produced meaningless generic suggestions or hallucinated issues that didn't exist. CodeFlow's breakthrough was a context-aware review engine that understands your codebase holistically, not line by line. It ingests your entire repository, PR history, architectural decisions, and team conventions to produce reviews that read like they're from your most senior engineer.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      The mobile app — yes, a developer tool with a genuinely useful mobile app — lets engineering leads review and approve PRs from anywhere with a swipe-based interface that surfaces only what matters. Their backend runs a distributed code analysis cluster processing 2.8 million lines of code per second, with results delivered in under 90 seconds for repos up to 500K lines.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                      CodeFlow's growth was almost entirely product-led: teams that integrated it reduced their PR review cycle time by 67% on average, generating the kind of word-of-mouth that no marketing budget can replicate. Their mobile-first approach for review approvals alone drove adoption in engineering organisations where desktop tools had failed to get traction.
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
                  </div>
                </div>

                {/* App 5: GreenCart */}
                <div className="reveal" style={{ marginBottom: 56 }} id="greencart">
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🌿</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>05</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(79,70,229,0.12)', color: '#4F46E5',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Sustainability</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>GreenCart</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      GreenCart is what happens when you take sustainability seriously as a product constraint rather than a marketing tagline. Every product in their marketplace comes with a real-time carbon score calculated from supply chain data, manufacturing emissions, and transport distance. Scan a product's barcode anywhere — even in a competitor's store — and GreenCart shows you its carbon footprint and suggests lower-impact alternatives available nearby.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      Their sustainability data platform, built on a graph database with over 2.4 million product nodes, is the real moat. They spent two years and $12M building the emissions database before launching the consumer app. The barcode scanner uses on-device vision and a lightweight product recognition model (just 14MB) that runs in under 120ms — fast enough to feel instant in the aisle.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                      The gamification layer — monthly carbon budgets, neighbourhood leaderboards, and real offset certificates tied to purchases — drove daily active use rates 4x higher than the category average. GreenCart proved that sustainability commerce, done with technical rigour, can be genuinely addictive.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(79,70,229,0.06)', border: '1px solid rgba(79,70,229,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#4F46E5', fontWeight: 600 }}>
                        Key Metric: $1.1B valuation, 18M kg CO₂ offset
                      </span>
                    </div>
                  </div>
                </div>

                {/* Apps 6-10: slightly more condensed but still substantive */}
                {[
                  {
                    num: '06', id: 'mindspace', name: 'MindSpace', category: 'MentalHealth',
                    emoji: '🧠', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: '$1.6B valuation, 72% 90-day retention',
                    paragraphs: [
                      'MindSpace arrived at a moment when the mental health app market was drowning in meditation timers and breathing exercises. Their differentiation was clinical rigour: the app delivers structured Cognitive Behavioural Therapy programmes co-developed with licensed psychologists, adapted in real time by an AI coach that adjusts difficulty, pacing, and content based on your mood check-ins and engagement patterns.',
                      'The technical architecture is notable for its privacy-first design. All session data and mood logs are processed on-device and never leave the phone unless the user explicitly enables cloud backup. This approach — inspired by Apple\'s on-device ML philosophy — eliminated the privacy objections that plagued competitors and was a direct driver of their exceptional retention rate.',
                      'MindSpace\'s AI coach isn\'t a chatbot. It\'s a structured clinical pathway manager that uses NLP to surface relevant CBT exercises based on what users write in their daily journals. The model was fine-tuned on a dataset of 2M anonymised therapy session transcripts, making its responses feel genuinely empathetic rather than formulaic.',
                    ],
                  },
                  {
                    num: '07', id: 'tradeedge', name: 'TradeEdge', category: 'FinTech',
                    emoji: '📈', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: '$2.1B valuation, $900M daily trade volume',
                    paragraphs: [
                      'Retail algorithmic trading was inaccessible before TradeEdge — building a trading bot required Python proficiency, API keys, and a willingness to risk real money while learning. TradeEdge\'s no-code strategy builder lets retail investors construct, backtest, and deploy trading algorithms through a drag-and-drop mobile interface, with simulated paper trading before going live. The democratisation of algo trading, made real.',
                      'The engineering challenge was latency: retail traders needed institutional-grade execution speeds to compete meaningfully. TradeEdge solved this by co-locating their execution infrastructure within 2ms of every major exchange and building a custom FIX protocol adapter optimised for mobile-originated orders. Average order execution now sits at 4ms — fast enough that their retail users are regularly competitive with professional traders on liquid assets.',
                      'Risk management is built into the product at a fundamental level: every strategy must pass an automated risk assessment before deployment, with hard limits on drawdown and position sizing. This protects users and protects TradeEdge from the regulatory scrutiny that has hurt competitors who prioritised engagement over safety.',
                    ],
                  },
                  {
                    num: '08', id: 'foodforge', name: 'FoodForge', category: 'FoodTech',
                    emoji: '🍽️', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: '$1.3B valuation, 34M meals planned/week',
                    paragraphs: [
                      'Meal planning apps have existed for a decade and have mostly failed because they create work rather than remove it. FoodForge\'s AI meal planner takes your dietary preferences, current pantry inventory (scanned via camera), local grocery prices, and weekly schedule to generate a complete meal plan with a single tap — then automatically adds missing ingredients to your preferred grocery delivery app.',
                      'The pantry scanning feature, built on a custom computer vision model trained on 4.2 million food packaging images, can identify and quantity-estimate items in 340ms per frame. The nutritional database underneath has 2.3 million food items and accounts for cooking method impacts on macronutrient profiles — a depth of data that makes the meal recommendations genuinely accurate, not aspirational.',
                      'FoodForge\'s monetisation through grocery partnerships (they earn a percentage of every grocery order generated) aligned incentives perfectly: the better the recommendations, the more groceries users buy, the more FoodForge earns. This flywheel drove rapid unit economics improvement without any deterioration in product quality.',
                    ],
                  },
                  {
                    num: '09', id: 'vaultid', name: 'VaultID', category: 'Identity',
                    emoji: '🔐', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: '$1.5B valuation, zero identity breaches to date',
                    paragraphs: [
                      'VaultID is the decentralised identity app that enterprises actually adopted. While blockchain-based identity projects spent years promising a revolution and delivering complexity, VaultID built on the W3C Decentralised Identifiers standard with a mobile UX that\'s simpler than a password manager. Users hold their own cryptographic credentials on-device, share them selectively with any compatible service, and revoke access instantly — all from an interface that looks like a digital wallet.',
                      'The cryptographic architecture uses a hierarchical deterministic key system with biometric binding — your credentials are tied to your face and fingerprint in a way that\'s mathematically provable without any data leaving your device. VaultID is also the first identity app to achieve SOC 2 Type II certification with a purely client-side data model, a significant technical and compliance achievement that unlocked enterprise sales.',
                      'Their SDK, which allows any app to integrate VaultID authentication in under two hours, has been adopted by 4,200 applications. This network effect — the more places that accept VaultID, the more valuable holding a VaultID becomes — created the adoption spiral that earlier decentralised identity projects could never achieve.',
                    ],
                  },
                  {
                    num: '10', id: 'loomai', name: 'LoomAI', category: 'CreativeTech',
                    emoji: '🎬', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: '$3.2B valuation, 180M videos generated',
                    paragraphs: [
                      'LoomAI is the highest-valued unicorn on this list, and it got there by doing one thing: making professional video production accessible to everyone with a phone. Input a script, choose a visual style, and LoomAI generates a complete video with AI presenters, dynamic graphics, background music, and captions in under 3 minutes. The output quality crossed the threshold that marketers, educators, and content creators need for professional use — a bar that previous tools never cleared.',
                      'The generation pipeline is an engineering marvel. Video generation runs on a distributed GPU cluster with a custom scheduling layer that dynamically allocates compute based on video complexity and user tier, achieving average generation times of 2.4 minutes for 60-second videos. The mobile app streams the generation progress in real time and allows users to make edits mid-generation — a technical feat that required building a novel state synchronisation protocol between client and server.',
                      'LoomAI\'s business model — a credit-based system with a generous free tier — drove viral growth through content attribution. Every AI-generated video includes an optional "Made with LoomAI" badge that drove 34% of new sign-ups through organic discovery. The product essentially marketed itself, with each piece of content created becoming an acquisition channel.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
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
                            <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8,
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
                    </div>
                  </div>
                ))}

                {/* ── CONCLUSION ── */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    What They All Have in Common
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                    Across ten very different industries, the same principles emerge. Every app on this list was designed mobile-first — not as a port of a web product, but as a native mobile experience where constraints became creative forcing functions. They shipped with AI as infrastructure, not as a feature announcement. The AI in these apps is invisible because it's integrated at the level of the data model, not bolted on top.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                    Onboarding was treated as a product problem with the same engineering priority as core functionality. The apps that grew fastest had zero-friction onboarding measured in seconds, not minutes. And performance — real, measured performance — was non-negotiable. Sub-200ms response times for core interactions weren't a stretch goal; they were a launch requirement.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8 }}>
                    The billion-dollar lesson of 2026 is that execution quality is back as a competitive moat. In a world where anyone can access LLMs and cloud infrastructure, the differentiator is the depth of thought applied to product decisions and the engineering discipline to ship those decisions with integrity. The apps on this list had both — and the market rewarded them accordingly.
                  </p>
                </div>

                {/* ── KEY TAKEAWAYS BOX ── */}
                <div className="reveal" style={{ marginBottom: 64 }}>
                  <div style={{
                    background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.15)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <h3 style={{
                      fontSize: 18, fontWeight: 700, color: '#4F46E5',
                      letterSpacing: '-0.02em', marginBottom: 24,
                    }}>
                      Key Takeaways
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {[
                        'Mobile-first is not a channel decision — it\'s an architecture decision that determines your product\'s ceiling.',
                        'AI-native products integrate intelligence at the data model level. AI features on top of legacy architecture are quickly commoditised.',
                        'Onboarding is the most important screen your users will ever see. Every second of friction costs compounding retention.',
                        'Sub-200ms performance for core interactions is not an optimisation — it\'s the minimum bar for a product users love.',
                        'The strongest moats in 2026 are data network effects: the more users, the better the model, the better the product, the more users.',
                      ].map((point, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                          <span style={{
                            width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                            background: 'rgba(79,70,229,0.15)', color: '#4F46E5',
                            fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginTop: 2,
                          }}>{i + 1}</span>
                          <span style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.7 }}>{point}</span>
                        </li>
                      ))}
                    </ul>
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
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {apps.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase()}`} style={{
                          fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#4F46E5';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(79,70,229,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,0,0,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.2)', marginLeft: 'auto' }}>{app.category}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#4F46E5', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#111827', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Raman Makkar</a></p>
                        <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Former Google engineer and founder of Codazz. Has led engineering for 300+ product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(0,0,0,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(79,70,229,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(79,70,229,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,0,0,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#4F46E5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', margin: 0 }}>{post.readTime} read</p>
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
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#4F46E5', marginBottom: 12,
                }}>Start Building</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Building your unicorn?<br />Let's talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  We've helped build the engineering foundations of some of the fastest-growing apps in the world. Let us help you build yours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#4F46E5', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start a Project →
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
