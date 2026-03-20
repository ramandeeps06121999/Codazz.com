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
  { id: 'key-takeaways', label: 'Key Takeaways', emoji: '📋' },
  { id: 'why-costs-vary', label: 'Why Costs Vary', emoji: '💡' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'cost-by-app-type', label: 'Cost by App Type', emoji: '📊' },
  { id: 'dev-approach', label: 'Development Approach', emoji: '🏗️' },
  { id: 'factors-affecting-cost', label: 'Factors That Affect Cost', emoji: '⚙️' },
  { id: 'platform-comparison', label: 'Platform Comparison', emoji: '📱' },
  { id: 'hourly-rates', label: 'American vs Offshore Rates', emoji: '🌎' },
  { id: 'hidden-costs', label: 'Hidden Costs', emoji: '🔍' },
  { id: 'cost-saving-strategies', label: 'Cost-Saving Strategies', emoji: '💡' },
  { id: 'real-world-examples', label: 'Real-World Examples', emoji: '📈' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'codazz-pricing', label: 'Codazz Pricing', emoji: '💰' },
];

const relatedPosts = [
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps of 2026', category: 'Business', readTime: '8 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'top-seo-companies-usa', title: 'Top 10 SEO Companies in the USA (2026)', category: 'Digital Marketing', readTime: '9 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native in 2026', category: 'Technology', readTime: '10 min' },
];

/* ── Reusable styled components ── */

function ProTip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'rgba(34,197,94,0.04)',
      borderLeft: '4px solid #22c55e',
      borderRadius: '0 16px 16px 0',
      padding: '20px 24px',
      marginBottom: 28,
      marginTop: 28,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <span style={{
          fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#22c55e',
        }}>Pro Tip</span>
        <div style={{ height: 1, flex: 1, background: 'rgba(34,197,94,0.15)' }} />
      </div>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

function ComparisonTable({ headers, rows, caption }: { headers: string[]; rows: string[][]; caption?: string }) {
  return (
    <div style={{ marginBottom: 32, overflowX: 'auto' }}>
      {caption && (
        <p style={{
          fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)', marginBottom: 12,
        }}>{caption}</p>
      )}
      <table style={{
        width: '100%', borderCollapse: 'collapse', fontSize: 14,
        border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden',
      }}>
        <thead>
          <tr style={{ background: 'rgba(34,197,94,0.08)' }}>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: '14px 18px', textAlign: 'left', fontWeight: 700,
                color: '#ffffff', fontSize: 13, borderBottom: '1px solid rgba(255,255,255,0.08)',
                whiteSpace: 'nowrap',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{
              background: ri % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.025)',
            }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '13px 18px', color: ci === 0 ? '#ffffff' : 'rgba(255,255,255,0.55)',
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                  fontWeight: ci === 0 ? 600 : 400, lineHeight: 1.6,
                  fontSize: 13,
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatHighlight({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      textAlign: 'center', padding: '20px 16px',
      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 16,
    }}>
      <p style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, color: '#22c55e', margin: '0 0 6px' }}>{value}</p>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.4 }}>{label}</p>
    </div>
  );
}

export default function AppDevelopmentCostUSAClient() {
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
              src="/blog_images/app-development-cost-usa.jpg"
              alt="App development cost in USA — comprehensive 2026 pricing guide"
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 14, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                18 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does It Cost to Build a Mobile App in the USA? (2026 Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The most comprehensive, transparent, and data-backed breakdown of mobile app development costs in the USA for 2026. From simple MVPs to enterprise platforms with AI, here is what you should actually expect to pay &mdash; and how to save up to 40% without cutting corners.
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
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
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

                {/* ═══ KEY TAKEAWAYS BOX ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="key-takeaways">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(96,165,250,0.06) 100%)',
                    border: '2px solid rgba(34,197,94,0.25)',
                    borderRadius: 24, padding: 'clamp(28px, 4vw, 40px)', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: -30, right: -30, width: 150, height: 150,
                      background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)',
                      filter: 'blur(30px)',
                    }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 12,
                        background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                      }}>📋</div>
                      <h2 style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 800, color: '#ffffff',
                        letterSpacing: '-0.03em', margin: 0,
                      }}>Key Takeaways: App Development Costs in the USA (2026)</h2>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      {[
                        { icon: '💰', text: 'A simple MVP costs $25,000 - $50,000. Medium-complexity apps run $50,000 - $150,000. Complex enterprise apps range from $150,000 to $500,000+.' },
                        { icon: '📱', text: 'Cross-platform development (Flutter/React Native) saves 30-40% vs building separate native iOS and Android apps, with negligible performance trade-offs for most use cases.' },
                        { icon: '🏢', text: 'In-house teams cost 2-3x more than agencies when you factor in salaries, benefits, recruiting, and infrastructure. Agencies deliver faster with specialized expertise.' },
                        { icon: '🌎', text: 'American agencies charge $100-$200/hr. Offshore rates of $25-$50/hr often result in 2-3x the final cost due to rework, miscommunication, and compliance failures.' },
                        { icon: '💡', text: 'You can reduce costs by 20-40% with smart strategies: start with an MVP, use cross-platform frameworks, choose agencies outside major tech hubs, and phase your features.' },
                      ].map((item, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: i < 4 ? 16 : 0,
                          padding: '12px 16px', borderRadius: 12,
                          background: 'rgba(255,255,255,0.02)',
                        }}>
                          <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ═══ QUICK STATS BAR ═══ */}
                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
                  gap: 12, marginBottom: 56,
                }}>
                  <StatHighlight value="$25K-$500K+" label="Typical Cost Range" />
                  <StatHighlight value="8-52 Weeks" label="Timeline Range" />
                  <StatHighlight value="30-40%" label="Savings with Cross-Platform" />
                  <StatHighlight value="15-20%/yr" label="Annual Maintenance Cost" />
                </div>

                {/* ═══ WHY COSTS VARY ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-costs-vary">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why App Development Costs Vary So Wildly in the USA</h2>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Ask five American app development agencies how much it costs to build a mobile app and you will get five wildly different answers. That is not because they are trying to mislead you. It is because &ldquo;building an app&rdquo; is about as specific as saying &ldquo;building a house.&rdquo; A cabin in Montana and a downtown Manhattan penthouse are both &ldquo;houses,&rdquo; but the price difference is astronomical.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, the American app development market has matured significantly. With the rise of cross-platform frameworks like Flutter and React Native, the explosion of AI-powered features, and increasing user expectations, the cost equation has become more nuanced than ever before. The good news? There are also more ways to be strategic about your budget.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    This guide cuts through the noise. We are going to give you real numbers based on our experience delivering over 200 mobile applications for American businesses, from scrappy startups in New York to enterprise clients in San Francisco and Los Angeles. We have analyzed data from thousands of project quotes, surveyed industry peers, and compiled the most comprehensive cost reference available anywhere.
                  </p>

                  <ProTip>
                    Before you ask &ldquo;how much does an app cost?&rdquo; &mdash; ask yourself &ldquo;what is the minimum feature set that proves my concept?&rdquo; Starting with an MVP can save you $50,000-$150,000 upfront while you validate your idea with real users.
                  </ProTip>
                </div>

                {/* ═══ COST BREAKDOWN ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>The Real Cost Breakdown for 2026</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is what you should expect to pay a reputable American agency in 2026. These numbers reflect all-in costs including discovery, design, development, QA testing, and initial deployment. They do not include ongoing maintenance or marketing costs (we cover those separately below).
                  </p>

                  {/* Simple App */}
                  <div style={{
                    background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.15)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)', marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(52,211,153,0.15)', color: '#34d399',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Simple App / MVP</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#34d399',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>$25,000 &ndash; $50,000</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      This tier covers straightforward applications with core functionality. Think a single-platform MVP with user authentication, basic CRUD operations, a simple UI, and integration with one or two third-party APIs. Examples include a basic booking app, a simple e-commerce storefront, or a content-driven utility app.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                      {['5-8 screens', 'Single platform', 'Basic auth', 'Simple backend', '8-12 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(52,211,153,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(52,211,153,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                      Real example: A fitness startup in Austin needed a workout tracking app with user profiles, exercise logging, and basic analytics. Delivered for $32,000 in 10 weeks.
                    </p>
                  </div>

                  {/* Medium Complexity */}
                  <div style={{
                    background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.15)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)', marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(96,165,250,0.15)', color: '#60a5fa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Medium Complexity</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#60a5fa',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>$50,000 &ndash; $150,000</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      This is where most serious business applications land. Multi-platform apps (iOS + Android) with custom UI/UX design, real-time features like chat or notifications, payment processing, admin dashboards, and moderate backend complexity. Think a marketplace app, a fitness platform with tracking, or a B2B SaaS mobile companion.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                      {['15-30 screens', 'iOS + Android', 'Payment integration', 'Real-time features', 'Admin panel', '12-24 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(96,165,250,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(96,165,250,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                      Real example: A healthcare startup in Chicago needed a patient portal with appointment scheduling, secure messaging, telehealth video calls, and insurance verification. Delivered for $118,000 in 20 weeks.
                    </p>
                  </div>

                  {/* Complex Enterprise */}
                  <div style={{
                    background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.15)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)', marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(167,139,250,0.15)', color: '#a78bfa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Complex / Enterprise</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#a78bfa',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>$150,000 &ndash; $500,000+</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Enterprise-grade applications with advanced architecture. AI/ML integration, complex data pipelines, microservices backend, advanced security requirements (HIPAA/SOC 2/PCI DSS compliance), offline-first capabilities, and custom hardware integrations (IoT, Bluetooth). Think a fintech platform, a healthcare records system, or an enterprise logistics solution.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                      {['50+ screens', 'AI/ML features', 'Microservices', 'HIPAA/SOC 2', 'IoT integration', 'Custom APIs', '6-18 months'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(167,139,250,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(167,139,250,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                      Real example: A logistics company in Dallas needed a fleet management platform with real-time GPS tracking, route optimization AI, driver apps, customer portal, and ERP integration. Delivered for $340,000 over 14 months.
                    </p>
                  </div>

                  <ProTip>
                    Do not fall for &ldquo;unlimited revisions&rdquo; promises. Agencies that offer this either inflate initial pricing to account for it, or will nickel-and-dime you on what counts as a &ldquo;revision&rdquo; vs a &ldquo;change request.&rdquo; Instead, negotiate 2-3 revision rounds per milestone with clear scope definitions.
                  </ProTip>
                </div>

                {/* ═══ COST BY APP TYPE TABLE ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-by-app-type">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Cost by App Type: The Complete Comparison</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Different app categories carry different cost profiles. Here is a detailed comparison across four complexity tiers, based on 2026 market rates from American development agencies.
                  </p>

                  <ComparisonTable
                    caption="App Type vs Cost Comparison (2026 USA Market Rates)"
                    headers={['App Type', 'Typical Features', 'Timeline', 'Cost Range']}
                    rows={[
                      ['Simple / MVP', 'Auth, 5-8 screens, basic CRUD, 1-2 API integrations, simple UI', '8-12 weeks', '$25K - $50K'],
                      ['Medium', '15-30 screens, payments, real-time chat/notifications, admin panel, custom design', '12-24 weeks', '$50K - $150K'],
                      ['Complex', '30-50 screens, AI/ML, advanced analytics, multi-role access, 3rd-party integrations', '6-12 months', '$150K - $300K'],
                      ['Enterprise', '50+ screens, microservices, compliance (HIPAA/SOC 2), IoT, offline-first, ERP integration', '9-18 months', '$300K - $500K+'],
                    ]}
                  />

                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 16, marginTop: 32 }}>Cost by Industry Vertical</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: 20 }}>
                    Industry-specific apps carry different cost premiums due to compliance requirements, integration complexity, and domain expertise needed.
                  </p>

                  <ComparisonTable
                    caption="Industry-Specific App Cost Ranges"
                    headers={['Industry', 'Common App Types', 'Key Cost Drivers', 'Typical Range']}
                    rows={[
                      ['E-Commerce', 'Marketplace, storefront, inventory management', 'Payment gateways, product catalogs, shipping APIs', '$40K - $200K'],
                      ['Healthcare / Telehealth', 'Patient portal, telehealth, EHR integration', 'HIPAA compliance, HL7/FHIR integration, video calling', '$80K - $350K'],
                      ['FinTech', 'Banking, payments, trading, lending', 'PCI DSS, KYC/AML, real-time processing, encryption', '$100K - $500K+'],
                      ['On-Demand / Delivery', 'Ride-sharing, food delivery, service marketplace', 'Real-time GPS, matching algorithms, multi-sided platform', '$75K - $300K'],
                      ['Social / Community', 'Social network, dating, content sharing', 'Feed algorithms, media processing, moderation tools', '$60K - $250K'],
                      ['Education / EdTech', 'LMS, tutoring, assessment platform', 'Video streaming, progress tracking, gamification', '$50K - $200K'],
                      ['Real Estate', 'Property listings, virtual tours, CRM', 'MLS integration, 3D visualization, mortgage calculators', '$45K - $180K'],
                      ['Logistics / Fleet', 'Fleet management, route optimization, supply chain', 'GPS tracking, route algorithms, IoT sensors, ERP integration', '$100K - $400K'],
                    ]}
                  />

                  <ProTip>
                    If your app falls into a regulated industry (healthcare, finance, insurance), budget an extra 20-35% for compliance work. This includes security audits, penetration testing, compliance documentation, and potentially hiring a compliance consultant. Skipping this step can result in fines that dwarf your entire development budget.
                  </ProTip>
                </div>

                {/* ═══ DEVELOPMENT APPROACH COMPARISON ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="dev-approach">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Development Approach: In-House vs Agency vs Freelancer vs Offshore</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Your choice of development partner is often a bigger cost driver than the app itself. Here is an honest comparison of each approach with real numbers for the American market in 2026.
                  </p>

                  <ComparisonTable
                    caption="Development Approach Comparison"
                    headers={['Approach', 'Monthly Cost', 'Pros', 'Cons', 'Best For']}
                    rows={[
                      ['In-House Team', '$50K-$120K/mo (3-6 person team)', 'Full control, institutional knowledge, aligned incentives', 'Highest cost (salaries + benefits + equipment + overhead), slow to hire, retention challenges', 'Long-term product companies with ongoing development needs'],
                      ['US Agency (like Codazz)', '$25K-$80K/mo', 'Specialized expertise, proven processes, scalable, fixed-price options', 'Less control over individual team members, requires good communication', 'Most businesses: best balance of quality, cost, and speed'],
                      ['Freelancers (US-based)', '$8K-$30K/mo per person', 'Flexible, lower commitment, niche skills available', 'No project management, reliability risks, quality varies wildly, IP concerns', 'Small features, prototypes, or supplementing an existing team'],
                      ['Offshore Agency', '$10K-$30K/mo', 'Lowest sticker price', 'Timezone gaps, communication barriers, quality risks, compliance gaps, IP risks, frequent rework', 'Non-critical internal tools with flexible timelines'],
                    ]}
                  />

                  {/* Detailed cost comparison: In-house vs Agency */}
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 16, marginTop: 32 }}>The Hidden Math: In-House vs Agency (Real Numbers)</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: 20 }}>
                    Most businesses underestimate the true cost of an in-house team. Here is a realistic annual comparison for building a medium-complexity app.
                  </p>

                  <ComparisonTable
                    caption="Annual Cost: In-House Team vs Agency for a Medium-Complexity App"
                    headers={['Line Item', 'In-House (Annual)', 'Agency (Project)']}
                    rows={[
                      ['Senior iOS/Android Developer (2)', '$320,000 - $400,000', 'Included'],
                      ['UI/UX Designer', '$120,000 - $160,000', 'Included'],
                      ['Backend Developer', '$150,000 - $200,000', 'Included'],
                      ['QA Engineer', '$100,000 - $130,000', 'Included'],
                      ['Project Manager', '$120,000 - $150,000', 'Included'],
                      ['Benefits & Overhead (30%)', '$243,000 - $312,000', 'Included'],
                      ['Equipment & Software', '$25,000 - $40,000', 'Included'],
                      ['Recruiting Costs', '$50,000 - $80,000', 'N/A'],
                      ['Ramp-Up Time (3-6 months)', '$300,000 - $500,000', 'N/A'],
                      ['Total First Year', '$1.4M - $1.97M', '$60K - $150K (project)'],
                    ]}
                  />

                  <ProTip>
                    The smartest approach for most businesses? Hire an agency to build v1 and validate your market, then transition to an in-house team once you have product-market fit and predictable revenue. This &ldquo;build, then hire&rdquo; strategy can save $500,000+ in the first year alone.
                  </ProTip>
                </div>

                {/* ═══ FACTORS AFFECTING COST ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>10 Factors That Directly Affect Your App Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Two apps that look identical on the surface can differ by hundreds of thousands of dollars in development cost. Here are the levers that move the price needle most &mdash; ranked by impact.
                  </p>

                  {[
                    { num: '01', title: 'Feature Complexity & Scope', desc: 'The single biggest cost driver. Every feature has a cost multiplier. Real-time chat adds $8,000-$25,000. Video calling adds $15,000-$40,000. AI-powered features like recommendation engines can add $30,000-$80,000 alone. Payment processing with multiple gateways adds $10,000-$30,000. The key is ruthless prioritization: launch with 20% of features that deliver 80% of value.', impact: 'Very High' },
                    { num: '02', title: 'Platform Choice (iOS / Android / Both)', desc: 'Building native iOS and Android apps separately nearly doubles your cost compared to a cross-platform solution. However, native apps deliver superior performance for graphics-intensive or hardware-dependent applications. In 2026, cross-platform frameworks handle 90%+ of use cases with near-native performance.', impact: 'Very High' },
                    { num: '03', title: 'Backend Architecture', desc: 'A serverless Firebase backend is far cheaper to build ($5,000-$15,000) than a custom microservices architecture on AWS or GCP ($30,000-$100,000+). But if you need to handle millions of concurrent users or process sensitive financial data, cutting corners on infrastructure will cost you 10x later in technical debt.', impact: 'High' },
                    { num: '04', title: 'Team Size & Composition', desc: 'A lean two-person team (developer + designer) costs far less than a full squad with a project manager, QA engineer, DevOps specialist, and multiple developers. Most MVPs only need 2-3 people. Enterprise builds often require 6-12 team members working in parallel.', impact: 'High' },
                    { num: '05', title: 'Design Complexity', desc: 'A basic Material Design or iOS Human Interface Guidelines-compliant app costs $5,000-$15,000 for design. A fully custom design system with micro-animations, custom illustrations, branded interactions, and accessibility optimization can run $25,000-$60,000. Design is where user perception of quality lives.', impact: 'Medium-High' },
                    { num: '06', title: 'Third-Party Integrations', desc: 'Each API integration (Stripe, Twilio, Salesforce, Shopify, etc.) adds $3,000-$15,000 in development time. Simple REST APIs are cheap. Complex integrations with legacy enterprise systems (SAP, Oracle, custom ERPs) can be the single most expensive line item on a project, running $20,000-$80,000 per integration.', impact: 'Medium-High' },
                    { num: '07', title: 'Compliance & Security Requirements', desc: 'Apps handling health data (HIPAA), financial data (PCI DSS), or personal information (CCPA/GDPR) require additional security layers, audit trails, encryption, and compliance documentation. Budget an extra 20-35% for regulated industries. HIPAA compliance alone can add $20,000-$50,000.', impact: 'Medium-High' },
                    { num: '08', title: 'Agency Location & Overhead', desc: 'A San Francisco agency charges 30-50% more than an agency in Austin, Denver, or Nashville for identical work quality. In 2026, with fully remote collaboration, your agency location should not be your primary selection criteria &mdash; but it will directly impact your invoice.', impact: 'Medium' },
                    { num: '09', title: 'Timeline & Urgency', desc: 'Rush projects cost 25-50% more. Compressing a 16-week timeline to 8 weeks requires parallel workstreams, overtime, and often a larger team &mdash; all of which increase costs. Plan ahead and your wallet will thank you.', impact: 'Medium' },
                    { num: '10', title: 'Post-Launch Support Scope', desc: 'Some agencies include 30-90 days of post-launch support. Others charge separately. Clarify this upfront. Bug fixes, performance optimization, and App Store submission support should be part of your initial agreement, not surprise add-ons.', impact: 'Low-Medium' },
                  ].map(factor => (
                    <div key={factor.num} style={{
                      display: 'flex', gap: 20, marginBottom: 20,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <span style={{
                        fontSize: 14, fontWeight: 800, color: 'rgba(34,197,94,0.4)',
                        flexShrink: 0, width: 28,
                      }}>{factor.num}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{factor.title}</h3>
                          <span style={{
                            fontSize: 10, padding: '2px 8px', borderRadius: 100, fontWeight: 700,
                            background: factor.impact.includes('Very') ? 'rgba(248,113,113,0.15)' : factor.impact.includes('High') ? 'rgba(251,191,36,0.15)' : 'rgba(96,165,250,0.15)',
                            color: factor.impact.includes('Very') ? '#f87171' : factor.impact.includes('High') ? '#fbbf24' : '#60a5fa',
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                          }}>{factor.impact} impact</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{factor.desc}</p>
                      </div>
                    </div>
                  ))}

                  <ProTip>
                    Create a feature priority matrix before talking to any agency. Categorize every feature as Must-Have (v1), Should-Have (v1.1), or Nice-to-Have (v2). This clarity alone can reduce your initial quote by 30-50% because you will avoid paying for features your users may never use.
                  </ProTip>
                </div>

                {/* ═══ PLATFORM COMPARISON ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="platform-comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>iOS vs Android vs Cross-Platform vs Both Native: Full Cost Comparison</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    In the USA, iOS holds roughly 57% of the smartphone market, making it the default choice for many businesses launching their first app. But the platform decision has massive cost implications. Here is every option broken down.
                  </p>

                  <ComparisonTable
                    caption="Platform Cost Comparison for a Medium-Complexity App"
                    headers={['Platform', 'Technology', 'Cost Range', 'Timeline', 'Performance', 'Best For']}
                    rows={[
                      ['iOS Only (Native)', 'Swift / SwiftUI', '$40K - $180K', '10-24 weeks', 'Excellent', 'iOS-first startups, Apple ecosystem apps'],
                      ['Android Only (Native)', 'Kotlin / Jetpack Compose', '$35K - $160K', '10-24 weeks', 'Excellent', 'Android-first, emerging markets'],
                      ['Cross-Platform', 'Flutter / React Native', '$30K - $200K', '10-28 weeks', 'Very Good (95%+ native)', 'Most businesses: best ROI'],
                      ['Both Native (Separate)', 'Swift + Kotlin', '$70K - $340K', '14-32 weeks', 'Excellent (both)', 'Performance-critical apps, games'],
                      ['Progressive Web App', 'React / Next.js', '$15K - $80K', '6-16 weeks', 'Good (browser-dependent)', 'Content apps, low-budget MVPs'],
                    ]}
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      { platform: 'Native iOS', lang: 'Swift / SwiftUI', cost: '$40K - $180K', pros: 'Best performance, App Store polish, full Apple API access', cons: 'iOS only, higher cost, separate Android build needed' },
                      { platform: 'Native Android', lang: 'Kotlin / Jetpack Compose', cost: '$35K - $160K', pros: 'Full hardware access, Play Store reach, Material Design', cons: 'Android only, device fragmentation across 1000+ devices' },
                      { platform: 'Cross-Platform', lang: 'Flutter / React Native', cost: '$30K - $200K', pros: 'Single codebase, 30-40% savings, ship to both stores', cons: 'Slight performance trade-offs in edge cases, dependency on framework updates' },
                    ].map(p => (
                      <div key={p.platform} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 20, padding: 24,
                      }}>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{p.platform}</h3>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>{p.lang}</p>
                        <p style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>{p.cost}</p>
                        <p style={{ fontSize: 13, color: 'rgba(52,211,153,0.8)', marginBottom: 6 }}>+ {p.pros}</p>
                        <p style={{ fontSize: 13, color: 'rgba(248,113,113,0.8)', margin: 0 }}>- {p.cons}</p>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    For most American businesses in 2026, we recommend starting with <strong style={{ color: '#ffffff' }}>Flutter or React Native</strong>. The cross-platform frameworks have matured to the point where the performance gap is negligible for 90% of use cases. You save 30-40% on development while reaching both iOS and Android users from day one. Apps like Google Pay, BMW, Alibaba, and Nubank all run on Flutter. React Native powers Facebook, Instagram, Shopify, and Discord.
                  </p>

                  <ProTip>
                    If you are building a consumer-facing app in the US market, start with iOS via cross-platform (Flutter/React Native). Over 70% of high-income US consumers use iPhones. Launch iOS-first, gather feedback, then deploy to Android with the same codebase &mdash; often for only 10-15% additional cost.
                  </ProTip>
                </div>

                {/* ═══ HOURLY RATES ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hourly-rates">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>American Rates vs Offshore: The Full Picture</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    One of the most common questions we hear: &ldquo;Why would I pay $150/hr in the USA when I can get a developer offshore for $30/hr?&rdquo; It is a fair question. Here is the honest, data-backed answer.
                  </p>

                  <ComparisonTable
                    caption="Hourly Rate Comparison by Region & Role (2026)"
                    headers={['Role', 'USA (Tier 1 Cities)', 'USA (Tier 2/3 Cities)', 'Eastern Europe', 'South Asia', 'Latin America']}
                    rows={[
                      ['Senior Mobile Developer', '$150 - $250/hr', '$100 - $175/hr', '$50 - $90/hr', '$25 - $50/hr', '$40 - $75/hr'],
                      ['UI/UX Designer', '$120 - $200/hr', '$80 - $140/hr', '$40 - $70/hr', '$20 - $40/hr', '$35 - $60/hr'],
                      ['Backend Developer', '$140 - $220/hr', '$90 - $160/hr', '$45 - $80/hr', '$20 - $45/hr', '$35 - $70/hr'],
                      ['QA Engineer', '$80 - $150/hr', '$60 - $110/hr', '$30 - $55/hr', '$15 - $30/hr', '$25 - $45/hr'],
                      ['Project Manager', '$100 - $180/hr', '$70 - $130/hr', '$40 - $70/hr', '$20 - $40/hr', '$30 - $55/hr'],
                      ['DevOps Engineer', '$140 - $220/hr', '$90 - $160/hr', '$45 - $85/hr', '$25 - $50/hr', '$40 - $70/hr'],
                    ]}
                  />

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20, marginBottom: 28,
                  }}>
                    <div style={{
                      background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                      borderRadius: 20, padding: 28,
                    }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>American Agencies</h3>
                      <p style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>$100 &ndash; $200/hr</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {['Same timezone & language', 'CCPA/HIPAA compliance built-in', 'Accountable under US legal framework', 'IP protection under American law', 'Face-to-face meetings possible', 'Long-term partnership model', 'Cultural alignment with US users', 'Rigorous QA standards'].map(item => (
                          <p key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ color: '#34d399', fontSize: 14 }}>&#10003;</span> {item}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28,
                    }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>Offshore Agencies</h3>
                      <p style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>$25 &ndash; $50/hr</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {['8-12 hour timezone gaps', 'May not understand US regulations', 'Limited legal recourse from the US', 'IP ownership can be murky', 'Communication barriers & misunderstandings', 'Higher project management overhead', 'Cultural gap in UX decisions', 'Average 2.3x more rework cycles'].map(item => (
                          <p key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ color: '#f87171', fontSize: 14 }}>&#10007;</span> {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We have personally rescued over 40 projects that started offshore and ended up costing <strong style={{ color: '#ffffff' }}>2-3x the original budget</strong> once the American company had to rebuild from scratch. The initial savings evaporate quickly when you factor in miscommunication, rework, and compliance failures. Cheap is expensive.
                  </p>

                  {/* The "True Cost" Scenario Box */}
                  <div style={{
                    background: 'rgba(251,191,36,0.04)', border: '1px solid rgba(251,191,36,0.2)',
                    borderRadius: 20, padding: 28, marginBottom: 20,
                  }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fbbf24', marginBottom: 12 }}>Real Scenario: The True Cost of Going Offshore</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 12 }}>
                      A SaaS startup in Boston received a $40,000 quote from an offshore agency for their mobile app. Here is what actually happened:
                    </p>
                    <ComparisonTable
                      headers={['Phase', 'Expected', 'Actual']}
                      rows={[
                        ['Initial Build', '$40,000', '$40,000'],
                        ['Rework (3 rounds)', '$0', '$28,000'],
                        ['PM Overhead (6 extra months)', '$0', '$18,000'],
                        ['Compliance Fixes (CCPA)', '$0', '$15,000'],
                        ['Performance Optimization', '$0', '$12,000'],
                        ['US Agency Rebuild (partial)', '$0', '$45,000'],
                        ['Total', '$40,000', '$158,000'],
                      ]}
                    />
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      They would have saved $58,000+ and 8 months by going with an American agency from the start.
                    </p>
                  </div>

                  <ProTip>
                    The best cost-quality balance in 2026? American agencies based outside major tech hubs. Companies in cities like Austin, Denver, Nashville, Raleigh, and Salt Lake City offer San Francisco-quality work at 20-35% lower rates. Same timezone, same legal protections, same talent pool &mdash; just lower overhead.
                  </ProTip>
                </div>

                {/* ═══ HIDDEN COSTS ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hidden-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Hidden Costs Most Agencies Won&apos;t Tell You About</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    The sticker price of app development is only the beginning. Budget for these ongoing costs or risk running out of runway before your app gains traction. We have seen too many startups nail the build and then fail because they did not plan for what comes after launch.
                  </p>

                  {[
                    { title: 'App Store Fees', cost: '$99 - $299/year', desc: 'Apple charges $99/year for a standard developer account and $299/year for enterprise distribution. Google charges a one-time $25 fee. If you are distributing through both stores, budget $400+ for the first year.' },
                    { title: 'Cloud Hosting & Infrastructure', cost: '$200 - $10,000+/month', desc: 'Your app needs servers. AWS, GCP, or Azure hosting costs scale with your user base. A small app with 1,000 users might cost $200/month, but a scaled platform with 100K+ users and real-time features can easily hit $5,000-$10,000+/month. Plan for 3x your expected usage.' },
                    { title: 'Ongoing Maintenance & OS Updates', cost: '15-20% of build cost/year', desc: 'iOS and Android release major OS updates annually that can break existing apps. Security patches, bug fixes, library updates, and dependency management are non-negotiable. Budget 15-20% of your initial build cost per year. For a $100K app, that is $15,000-$20,000/year.' },
                    { title: 'Feature Updates & Iteration', cost: '$5,000 - $30,000/month', desc: 'Your v1 is never your final product. User feedback will drive continuous iteration. Most successful apps budget for at least one significant feature update per quarter. The apps that stop iterating are the apps that die.' },
                    { title: 'Analytics, Monitoring & Error Tracking', cost: '$100 - $1,000/month', desc: 'Mixpanel, Amplitude, Sentry, Datadog, and Firebase Analytics are essential for understanding user behavior, catching crashes, and monitoring performance. These tool subscriptions add up, but flying blind is far more expensive.' },
                    { title: 'Marketing & User Acquisition', cost: '$5,000 - $100,000+/month', desc: 'Building the app is only half the battle. App Store Optimization (ASO), paid acquisition campaigns (Google Ads, Apple Search Ads, Meta), content marketing, influencer partnerships, and PR are ongoing investments. Cost per install in the US averages $3-$7 for non-gaming apps in 2026.' },
                    { title: 'Customer Support Infrastructure', cost: '$1,000 - $10,000/month', desc: 'Live chat, help desk software (Intercom, Zendesk), FAQ management, and potentially a dedicated support team. The more users you have, the higher this cost. Budget $0.50-$2 per active user per month.' },
                    { title: 'Legal & Compliance', cost: '$2,000 - $20,000/year', desc: 'Terms of service, privacy policy, CCPA compliance documentation, cookie consent, and potentially patent filings. If you are in a regulated industry, add $10,000-$50,000/year for ongoing compliance audits.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                      padding: '20px 0', gap: 16,
                      borderBottom: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>{item.title}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                      <span style={{
                        fontSize: 13, fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap', flexShrink: 0,
                        background: 'rgba(34,197,94,0.08)', padding: '6px 14px', borderRadius: 100,
                      }}>{item.cost}</span>
                    </div>
                  ))}

                  {/* Total hidden cost summary */}
                  <div style={{
                    background: 'rgba(248,113,113,0.04)', border: '1px solid rgba(248,113,113,0.15)',
                    borderRadius: 16, padding: '20px 24px', marginTop: 28,
                    display: 'flex', alignItems: 'center', gap: 14,
                  }}>
                    <span style={{ fontSize: 24, flexShrink: 0 }}>&#9888;&#65039;</span>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
                      <strong style={{ color: '#f87171' }}>Bottom line:</strong> For a medium-complexity app ($100K build), expect $30,000-$60,000/year in ongoing costs before marketing. With marketing, that number jumps to $80,000-$200,000+/year. Plan your runway accordingly. The #1 reason apps fail is not bad code &mdash; it is running out of money before finding product-market fit.
                    </p>
                  </div>
                </div>

                {/* ═══ COST-SAVING STRATEGIES ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-saving-strategies">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>12 Proven Strategies to Reduce Your App Development Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    You do not need to compromise on quality to save money. These strategies have collectively saved our clients over $2 million in the past year alone.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 16 }}>
                    {[
                      { title: 'Start with an MVP', savings: '40-60%', desc: 'Launch with core features only. Validate with real users before investing in the full vision. Instagram launched with just photo filters and sharing.' },
                      { title: 'Use Cross-Platform Frameworks', savings: '30-40%', desc: 'Flutter or React Native gives you iOS + Android from a single codebase. The performance gap is negligible for 90%+ of apps.' },
                      { title: 'Choose Tier 2/3 City Agencies', savings: '20-35%', desc: 'Agencies outside SF, NYC, and LA deliver identical quality at significantly lower rates due to lower overhead costs.' },
                      { title: 'Phase Your Development', savings: '25-40%', desc: 'Break your app into phases. Launch Phase 1, generate revenue, then fund Phase 2 with that revenue instead of raising more capital.' },
                      { title: 'Use Pre-Built UI Components', savings: '15-25%', desc: 'Libraries like Flutter Material, React Native Elements, or Tailwind reduce design/dev time without sacrificing quality.' },
                      { title: 'Leverage BaaS (Backend as a Service)', savings: '20-40%', desc: 'Firebase, Supabase, or AWS Amplify can replace custom backends for many apps, slashing backend development costs.' },
                      { title: 'Prioritize Features Ruthlessly', savings: '30-50%', desc: 'Use the MoSCoW method: Must, Should, Could, Won\'t. Cut the "Could" and "Won\'t" from v1. You can always add them later.' },
                      { title: 'Negotiate Fixed-Price Contracts', savings: '10-20%', desc: 'Fixed-price contracts shift risk to the agency and prevent budget overruns. Ensure the scope document is detailed and mutually agreed.' },
                      { title: 'Reuse Open-Source Libraries', savings: '10-20%', desc: 'Thousands of battle-tested open-source libraries exist for auth, payments, analytics, and more. Do not reinvent the wheel.' },
                      { title: 'Design in Figma First', savings: '15-25%', desc: 'A complete Figma prototype before development starts reduces miscommunication and rework by 40-60%. Invest $5K-$10K in design to save $20K-$50K in development.' },
                      { title: 'Bundle Services with One Agency', savings: '10-15%', desc: 'Design + development + QA from one agency is cheaper than coordinating three separate vendors. Less overhead, better communication.' },
                      { title: 'Consider a PWA for v0', savings: '50-70%', desc: 'If your app is content-heavy and does not need native device features, a Progressive Web App can be your v0 at a fraction of the cost.' },
                    ].map((strategy, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, padding: 20,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: 0 }}>{strategy.title}</h3>
                          <span style={{
                            fontSize: 11, fontWeight: 800, color: '#22c55e',
                            background: 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100,
                            whiteSpace: 'nowrap',
                          }}>Save {strategy.savings}</span>
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{strategy.desc}</p>
                      </div>
                    ))}
                  </div>

                  <ProTip>
                    The single most impactful cost-saving decision? <strong style={{ color: '#ffffff' }}>Invest heavily in the discovery and design phase</strong> (typically 10-15% of total budget). Every dollar spent on proper requirements gathering and prototyping saves $5-$10 in development rework. We have seen clients save $100K+ simply by spending an extra two weeks on discovery.
                  </ProTip>
                </div>

                {/* ═══ REAL-WORLD EXAMPLES ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="real-world-examples">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Real-World App Development Cost Examples</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Abstract numbers only go so far. Here are real project examples (with client details anonymized) showing actual costs for different types of apps built in the USA in 2025-2026.
                  </p>

                  <ComparisonTable
                    caption="Real Project Cost Examples (Anonymized)"
                    headers={['Project Type', 'Features', 'Platform', 'Timeline', 'Total Cost']}
                    rows={[
                      ['Food Delivery MVP', 'Customer app, restaurant dashboard, driver app, real-time tracking, Stripe payments', 'Flutter (iOS + Android)', '16 weeks', '$85,000'],
                      ['Fitness & Wellness App', 'Workout plans, video library, progress tracking, social features, subscription billing', 'React Native', '12 weeks', '$62,000'],
                      ['B2B SaaS Mobile Companion', 'Dashboard, push notifications, offline mode, SSO integration, analytics', 'Flutter', '10 weeks', '$48,000'],
                      ['E-Commerce Marketplace', 'Multi-vendor, search/filter, chat, reviews, payment escrow, admin panel', 'React Native + Node.js', '24 weeks', '$145,000'],
                      ['FinTech Banking App', 'Account management, transfers, bill pay, KYC/AML, biometric auth, PCI DSS', 'Native iOS + Android', '12 months', '$380,000'],
                      ['Healthcare Patient Portal', 'Telehealth video, scheduling, secure messaging, EHR integration, HIPAA', 'Flutter + AWS', '8 months', '$220,000'],
                      ['Real Estate Listing App', 'Property search, virtual tours, agent messaging, mortgage calculator, MLS API', 'React Native', '14 weeks', '$72,000'],
                      ['Social Networking Platform', 'Profiles, feed algorithm, stories, direct messaging, content moderation', 'React Native + Firebase', '20 weeks', '$115,000'],
                    ]}
                  />

                  <ProTip>
                    When comparing quotes from different agencies, make sure you are comparing apples to apples. Ask for a detailed line-item breakdown. Some agencies include project management, QA, and post-launch support in their quotes. Others list these as add-ons that can increase the final bill by 30-50%.
                  </ProTip>
                </div>

                {/* ═══ WHY CODAZZ SECTION ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 50%, rgba(96,165,250,0.06) 100%)',
                    border: '2px solid rgba(34,197,94,0.2)',
                    borderRadius: 28, padding: 'clamp(32px, 5vw, 48px)', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: -60, right: -60, width: 250, height: 250,
                      background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)',
                      filter: 'blur(40px)',
                    }} />
                    <div style={{
                      position: 'absolute', bottom: -40, left: -40, width: 200, height: 200,
                      background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
                      filter: 'blur(30px)',
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: '#22c55e', display: 'block', marginBottom: 12,
                      }}>Why Choose Codazz</span>
                      <h2 style={{
                        fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff',
                        letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.15,
                      }}>The Smart Choice for App Development in America</h2>
                      <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 32 }}>
                        After reading this guide, you understand the landscape. Here is why hundreds of American businesses &mdash; from Y Combinator startups to Fortune 500 companies &mdash; choose Codazz as their development partner.
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: 20, marginBottom: 32 }}>
                        {[
                          { icon: '💰', title: 'Competitive Pricing', desc: 'We operate from Edmonton (Canada) and Chandigarh (India), passing our lower overhead savings directly to you. Get top-tier quality at 20-35% below major metro agency rates.' },
                          { icon: '📋', title: 'Fixed-Price Contracts', desc: 'No hourly surprises. 90% of our projects are fixed-price with detailed scope documents. You know exactly what you are paying before we write a single line of code.' },
                          { icon: '🚀', title: '200+ Apps Delivered', desc: 'We have shipped over 200 mobile applications across every industry. Healthcare, fintech, e-commerce, logistics, social &mdash; we have built it all.' },
                          { icon: '⚡', title: 'Full-Stack Expertise', desc: 'Flutter, React Native, Swift, Kotlin, Node.js, Python, AWS, GCP, Firebase &mdash; our team covers the entire modern tech stack. No subcontracting.' },
                          { icon: '🛡️', title: 'US Business-Friendly', desc: 'We understand American compliance requirements (HIPAA, CCPA, PCI DSS, SOC 2). All contracts under North American legal frameworks. Your IP is protected.' },
                          { icon: '🤝', title: 'Transparent Process', desc: 'Weekly demos, Slack/Teams integration, project dashboards, and milestone-based payments. You see every line of code as it is written.' },
                        ].map((item, i) => (
                          <div key={i} style={{
                            background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20,
                            border: '1px solid rgba(255,255,255,0.05)',
                          }}>
                            <span style={{ fontSize: 24, display: 'block', marginBottom: 10 }}>{item.icon}</span>
                            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.title}</h3>
                            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Social proof stats */}
                      <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(120px, 100%), 1fr))',
                        gap: 16, padding: '24px', background: 'rgba(0,0,0,0.2)', borderRadius: 16,
                      }}>
                        {[
                          { value: '200+', label: 'Apps Delivered' },
                          { value: '98%', label: 'Client Satisfaction' },
                          { value: '4.9/5', label: 'Clutch Rating' },
                          { value: '40+', label: 'Industries Served' },
                          { value: '<24hr', label: 'Response Time' },
                        ].map((stat, i) => (
                          <div key={i} style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 800, color: '#22c55e', margin: '0 0 4px' }}>{stat.value}</p>
                            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ═══ CODAZZ PRICING ═══ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz-pricing">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 'clamp(28px, 4vw, 36px)', position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>💰</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Our Approach</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>How Codazz Approaches Pricing</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      We operate on a <strong style={{ color: '#ffffff' }}>fixed-price model</strong> for 90% of our projects. After a thorough discovery phase (which we offer free of charge), we provide a detailed scope document with a locked-in price. No hourly billing surprises. No scope creep charges without written approval.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Every Codazz engagement includes a transparent breakdown of every feature, every screen, and every integration with its associated cost. Our clients know exactly what they are paying for before a single line of code is written. We believe this level of transparency is what separates professional agencies from freelancer operations.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      Our typical engagement model: a 50% deposit at project kickoff, 25% at beta delivery, and 25% at final launch. This protects both parties and ensures alignment throughout the build.
                    </p>

                    {/* Codazz pricing tiers */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 12, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      {[
                        { tier: 'MVP / Simple', range: '$20K - $45K', timeline: '8-12 weeks' },
                        { tier: 'Medium', range: '$45K - $120K', timeline: '12-24 weeks' },
                        { tier: 'Complex', range: '$120K - $300K', timeline: '6-12 months' },
                        { tier: 'Enterprise', range: '$300K+', timeline: 'Custom' },
                      ].map((p, i) => (
                        <div key={i} style={{
                          background: 'rgba(0,0,0,0.2)', borderRadius: 12, padding: 16, textAlign: 'center',
                          border: '1px solid rgba(34,197,94,0.15)',
                        }}>
                          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{p.tier}</p>
                          <p style={{ fontSize: 18, fontWeight: 800, color: '#22c55e', margin: '0 0 4px' }}>{p.range}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>{p.timeline}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Fixed-Price Model &bull; Free Discovery Phase &bull; Transparent Scoping &bull; No Hidden Fees &bull; Milestone Payments
                      </span>
                    </div>
                  </div>
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

                  {/* Quick Cost Calculator CTA */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.03) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>Get a Free Estimate</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 16 }}>
                      Share your app idea and get a detailed, fixed-price proposal within 48 hours. Zero commitment.
                    </p>
                    <Link href="/contact" style={{
                      display: 'block', textAlign: 'center', padding: '12px 20px', borderRadius: 100,
                      background: '#22c55e', color: '#000', fontSize: 13, fontWeight: 700,
                      textDecoration: 'none', transition: 'all 0.2s',
                    }}>
                      Get Your Free Estimate
                    </Link>
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
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally across healthcare, fintech, e-commerce, and enterprise software.
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
                borderRadius: 28, padding: 'clamp(40px, 6vw, 64px) clamp(28px, 5vw, 56px)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#22c55e', marginBottom: 12,
                }}>Get Started Today</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get a Free App Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, lineHeight: 1.7, marginBottom: 20 }}>
                  Stop guessing what your app will cost. Share your idea with our team and receive a detailed, fixed-price proposal within 48 hours. No commitment. No sales pitch. Just real numbers from a team that has built 200+ apps for American businesses.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                  {['Free discovery call', 'Detailed scope document', 'Fixed-price guarantee', '48-hour turnaround'].map(item => (
                    <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                      <span style={{ color: '#22c55e', fontSize: 14 }}>&#10003;</span> {item}
                    </span>
                  ))}
                </div>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free Estimate &rarr;
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
