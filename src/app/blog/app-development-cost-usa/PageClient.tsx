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

const tocSections = [
  { id: 'why-costs-vary', label: 'Why Costs Vary', emoji: '💡' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'factors-affecting-cost', label: 'Factors That Affect Cost', emoji: '⚙️' },
  { id: 'platform-comparison', label: 'iOS vs Android vs Cross-Platform', emoji: '📱' },
  { id: 'hourly-rates', label: 'American vs Offshore Rates', emoji: '🇨🇦' },
  { id: 'hidden-costs', label: 'Hidden Costs', emoji: '🔍' },
  { id: 'codazz-pricing', label: 'Codazz Pricing', emoji: '💰' },
  { id: 'new-york-advantage', label: 'New York Advantage', emoji: '📍' },
];

const relatedPosts = [
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps of 2026', category: 'Business', readTime: '8 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'top-seo-companies-usa', title: 'Top 10 SEO Companies in the USA (2026)', category: 'Digital Marketing', readTime: '9 min' },
];

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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>March 14, 2026</span>
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
                10 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does It Cost to Build a Mobile App in the USA? (2026 Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A transparent, no-BS breakdown of mobile app development costs in the USA for 2026. From simple MVPs to complex enterprise platforms, here is what you should actually expect to pay.
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
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: 0 }}>Raman Makkar</p>
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
                <div className="reveal" style={{ marginBottom: 56 }} id="why-costs-vary">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why App Development Costs Vary So Wildly in the USA</h2>
                  <p style={{
                    fontSize: 18, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Ask five American app development agencies how much it costs to build a mobile app and you will get five wildly different answers. That is not because they are trying to mislead you. It is because &ldquo;building an app&rdquo; is about as specific as saying &ldquo;building a house.&rdquo; A cabin in Muskoka and a downtown San Francisco penthouse are both &ldquo;houses,&rdquo; but the price difference is astronomical.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, the American app development market has matured significantly. With the rise of cross-platform frameworks like Flutter and React Native, the explosion of AI-powered features, and increasing user expectations, the cost equation has become more nuanced than ever before.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    This guide cuts through the noise. We are going to give you real numbers based on our experience delivering over 200 mobile applications for American businesses, from scrappy startups in New York to enterprise clients in San Francisco and Los Angeles.
                  </p>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>The Real Cost Breakdown for 2026</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is what you should expect to pay a reputable American agency in 2026. These numbers reflect all-in costs including design, development, QA testing, and initial deployment.
                  </p>

                  {/* Simple App */}
                  <div style={{
                    background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.15)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
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
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      This tier covers straightforward applications with core functionality. Think a single-platform MVP with user authentication, basic CRUD operations, a simple UI, and integration with one or two third-party APIs. Examples include a basic booking app, a simple e-commerce storefront, or a content-driven utility app.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['5-8 screens', 'Single platform', 'Basic auth', 'Simple backend', '8-12 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(52,211,153,0.08)', color: 'rgba(0,0,0,0.4)',
                          border: '1px solid rgba(52,211,153,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Medium Complexity */}
                  <div style={{
                    background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.15)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
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
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      This is where most serious business applications land. Multi-platform apps (iOS + Android) with custom UI/UX design, real-time features like chat or notifications, payment processing, admin dashboards, and moderate backend complexity. Think a marketplace app, a fitness platform with tracking, or a B2B SaaS mobile companion.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['15-30 screens', 'iOS + Android', 'Payment integration', 'Real-time features', 'Admin panel', '12-24 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(96,165,250,0.08)', color: 'rgba(0,0,0,0.4)',
                          border: '1px solid rgba(96,165,250,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Complex Enterprise */}
                  <div style={{
                    background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.15)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(167,139,250,0.15)', color: '#a78bfa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Complex Enterprise</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#a78bfa',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>$150,000 &ndash; $500,000+</h3>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      Enterprise-grade applications with advanced architecture. AI/ML integration, complex data pipelines, microservices backend, advanced security requirements (CCPA/SOC 2 compliance), offline-first capabilities, and custom hardware integrations (IoT, Bluetooth). Think a fintech platform, a healthcare records system, or an enterprise logistics solution.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['50+ screens', 'AI/ML features', 'Microservices', 'CCPA compliance', 'IoT integration', 'Custom APIs', '6-18 months'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(167,139,250,0.08)', color: 'rgba(0,0,0,0.4)',
                          border: '1px solid rgba(167,139,250,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Factors Affecting Cost */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>7 Factors That Directly Affect Your App Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Two apps that look identical on the surface can differ by hundreds of thousands of dollars in development cost. Here are the levers that move the price needle most.
                  </p>

                  {[
                    { num: '01', title: 'Team Size & Composition', desc: 'A lean two-person team (developer + designer) costs far less than a full squad with a project manager, QA engineer, DevOps specialist, and multiple developers. Most MVPs only need 2-3 people. Enterprise builds often require 6-10.' },
                    { num: '02', title: 'Platform Choice', desc: 'Building native iOS and Android apps separately nearly doubles your cost compared to a cross-platform solution. However, native apps deliver superior performance for graphics-intensive or hardware-dependent applications.' },
                    { num: '03', title: 'Feature Complexity', desc: 'Every feature has a cost multiplier. Real-time chat, video calling, payment processing, and offline sync are exponentially more expensive than static content displays. AI-powered features like recommendation engines can add $30,000-$80,000 alone.' },
                    { num: '04', title: 'Design Complexity', desc: 'A basic Material Design or iOS Human Interface Guidelines-compliant app costs significantly less than a fully custom design system with micro-animations, custom illustrations, and branded interactions.' },
                    { num: '05', title: 'Backend Infrastructure', desc: 'A serverless Firebase backend is far cheaper to build than a custom microservices architecture on AWS or GCP. But if you need to handle millions of concurrent users or process sensitive financial data, cutting corners on infrastructure will cost you later.' },
                    { num: '06', title: 'Third-Party Integrations', desc: 'Each API integration (Stripe, Twilio, Salesforce, Shopify, etc.) adds development time. Complex integrations with legacy enterprise systems can be the single most expensive line item on a project.' },
                    { num: '07', title: 'Compliance & Security', desc: 'Apps handling health data (PHIPA), financial data (PCI DSS), or personal information (CCPA) in the USA require additional security layers, audit trails, and compliance documentation that significantly increase costs.' },
                  ].map(factor => (
                    <div key={factor.num} style={{
                      display: 'flex', gap: 20, marginBottom: 24,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.03)',
                    }}>
                      <span style={{
                        fontSize: 14, fontWeight: 800, color: 'rgba(79,70,229,0.4)',
                        flexShrink: 0, width: 28,
                      }}>{factor.num}</span>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{factor.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.75, margin: 0 }}>{factor.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Platform Comparison */}
                <div className="reveal" style={{ marginBottom: 56 }} id="platform-comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>iOS vs Android vs Cross-Platform: Cost Comparison</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    In USA, iOS holds roughly 55% of the smartphone market, making it the default choice for many businesses launching their first app. But the platform decision has massive cost implications.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 28 }}>
                    {[
                      { platform: 'Native iOS', lang: 'Swift / SwiftUI', cost: '$40K - $180K', pros: 'Best performance, App Store polish', cons: 'iOS only, higher cost' },
                      { platform: 'Native Android', lang: 'Kotlin / Jetpack', cost: '$35K - $160K', pros: 'Full hardware access, Play Store reach', cons: 'Android only, device fragmentation' },
                      { platform: 'Cross-Platform', lang: 'Flutter / React Native', cost: '$30K - $200K', pros: 'Single codebase, 30-40% savings', cons: 'Slight performance trade-offs' },
                    ].map(p => (
                      <div key={p.platform} style={{
                        background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                        borderRadius: 20, padding: 24,
                      }}>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{p.platform}</h3>
                        <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', marginBottom: 16 }}>{p.lang}</p>
                        <p style={{ fontSize: 20, fontWeight: 800, color: '#4F46E5', marginBottom: 16 }}>{p.cost}</p>
                        <p style={{ fontSize: 13, color: 'rgba(52,211,153,0.8)', marginBottom: 6 }}>+ {p.pros}</p>
                        <p style={{ fontSize: 13, color: 'rgba(248,113,113,0.8)', margin: 0 }}>- {p.cons}</p>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    For most American businesses in 2026, we recommend starting with <strong style={{ color: '#111827' }}>Flutter or React Native</strong>. The cross-platform frameworks have matured to the point where the performance gap is negligible for 90% of use cases. You save 30-40% on development while reaching both iOS and Android users from day one.
                  </p>
                </div>

                {/* Hourly Rates */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hourly-rates">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>American Rates vs Offshore: Why Quality Matters</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    One of the most common questions we hear: &ldquo;Why would I pay $150/hr in the USA when I can get a developer offshore for $30/hr?&rdquo; It is a fair question. Here is the honest answer.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20, marginBottom: 28,
                  }}>
                    <div style={{
                      background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.15)',
                      borderRadius: 20, padding: 28,
                    }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#4F46E5', marginBottom: 12 }}>American Agencies</h3>
                      <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', marginBottom: 16 }}>$100 &ndash; $200/hr</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {['Same timezone & language', 'CCPA compliance built-in', 'Accountable legal framework', 'IP protection under American law', 'Face-to-face meetings possible', 'Long-term partnership model'].map(item => (
                          <p key={item} style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ color: '#34d399', fontSize: 14 }}>&#10003;</span> {item}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div style={{
                      background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                      borderRadius: 20, padding: 28,
                    }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: 'rgba(0,0,0,0.4)', marginBottom: 12 }}>Offshore Agencies</h3>
                      <p style={{ fontSize: 24, fontWeight: 800, color: '#111827', marginBottom: 16 }}>$25 &ndash; $50/hr</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {['Significant timezone gaps', 'May not understand American regulations', 'Limited legal recourse', 'IP ownership can be murky', 'Communication barriers', 'Higher project management overhead'].map(item => (
                          <p key={item} style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ color: '#f87171', fontSize: 14 }}>&#10007;</span> {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    We have personally rescued over 40 projects that started offshore and ended up costing <strong style={{ color: '#111827' }}>2-3x the original budget</strong> once the American company had to rebuild from scratch. The initial savings evaporate quickly when you factor in miscommunication, rework, and compliance failures. Cheap is expensive.
                  </p>
                </div>

                {/* Hidden Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hidden-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Hidden Costs Most Agencies Won&apos;t Tell You About</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    The sticker price of app development is only the beginning. Here are the ongoing costs that catch most American business owners off guard.
                  </p>

                  {[
                    { title: 'App Store Fees', cost: '$99 - $299/year', desc: 'Apple charges $99/year for an individual developer account. Google charges a one-time $25 fee. Enterprise distribution programs cost $299/year for Apple.' },
                    { title: 'Cloud Hosting & Infrastructure', cost: '$200 - $5,000+/month', desc: 'Your app needs servers. AWS, GCP, or Azure hosting costs scale with your user base. A small app might cost $200/month, but a scaled platform with real-time features can easily hit $5,000+/month.' },
                    { title: 'Ongoing Maintenance', cost: '15-20% of build cost/year', desc: 'OS updates (iOS and Android release annually), security patches, bug fixes, and library updates. Budget 15-20% of your initial build cost per year for maintenance alone.' },
                    { title: 'Feature Updates & Iteration', cost: '$2,000 - $20,000/month', desc: 'Your v1 is never your final product. User feedback will drive continuous iteration. Most successful apps budget for at least one significant update per quarter.' },
                    { title: 'Analytics & Monitoring', cost: '$50 - $500/month', desc: 'Tools like Mixpanel, Amplitude, Sentry, and Firebase Analytics are essential for understanding user behavior and catching crashes. These add up quickly.' },
                    { title: 'Marketing & User Acquisition', cost: '$5,000 - $50,000+/month', desc: 'Building the app is only half the battle. App Store Optimization (ASO), paid acquisition campaigns, and content marketing are ongoing investments required to grow your user base.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                      padding: '20px 0',
                      borderBottom: '1px solid rgba(0,0,0,0.03)',
                    }}>
                      <div style={{ flex: 1, paddingRight: 20 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 6 }}>{item.title}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.4)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#4F46E5', whiteSpace: 'nowrap', flexShrink: 0,
                        background: 'rgba(79,70,229,0.08)', padding: '6px 14px', borderRadius: 100,
                      }}>{item.cost}</span>
                    </div>
                  ))}
                </div>

                {/* Codazz Pricing */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz-pricing">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(0,0,0,0.015) 100%)', border: '1px solid rgba(79,70,229,0.3)',
                    borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(79,70,229,0.15)', color: '#4F46E5',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Our Approach</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>How Codazz Approaches Pricing</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      We operate on a <strong style={{ color: '#111827' }}>fixed-price model</strong> for 90% of our projects. After a thorough discovery phase (which we offer free of charge), we provide a detailed scope document with a locked-in price. No hourly billing surprises. No scope creep charges without written approval.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Every Codazz engagement includes a transparent breakdown of every feature, every screen, and every integration with its associated cost. Our clients know exactly what they are paying for before a single line of code is written. We believe this level of transparency is what separates professional agencies from freelancer operations.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      Our typical engagement model: a 50% deposit at project kickoff, 25% at beta delivery, and 25% at final launch. This protects both parties and ensures alignment throughout the build.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#4F46E5', fontWeight: 600 }}>
                        Fixed-Price Model &bull; Transparent Scoping &bull; No Hidden Fees
                      </span>
                    </div>
                  </div>
                </div>

                {/* New York Advantage */}
                <div className="reveal" style={{ marginBottom: 56 }} id="new-york-advantage">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why New York-Based Development Saves You 20-30%</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Here is a secret that most American businesses do not realize: you do not need to hire a San Francisco or Los Angeles agency to get world-class app development. In fact, you will pay significantly more if you do.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    New York and Austin-based agencies like Codazz operate with <strong style={{ color: '#111827' }}>20-30% lower overhead</strong> than their GTA or Lower Mainland counterparts. Lower office costs, lower cost of living (which means competitive salaries go further), and a deep pool of University of New York and NAIT-trained engineers create a perfect storm of value.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The quality difference? Zero. Our team ships the same React Native, Flutter, and native Swift/Kotlin code as any Bay Street firm. We just do it without the Bay Street overhead. In 2026, with fully remote collaboration tools, your development team&apos;s physical location is irrelevant to the quality of your product.
                  </p>
                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Real example:</strong> A San Francisco fintech startup approached us after receiving quotes of $280,000-$350,000 from GTA agencies. We delivered the same scope for $195,000, on time and under budget. Same tech stack. Same quality. Just smarter economics.
                    </p>
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
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{
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
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{section.label}</span>
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
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#111827', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 300+ bespoke product launches globally.
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
                }}>Get Started</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get a Free App Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop guessing what your app will cost. Share your idea with our team and receive a detailed, fixed-price proposal within 48 hours. No commitment. No sales pitch. Just real numbers.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#4F46E5', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free Estimate →
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