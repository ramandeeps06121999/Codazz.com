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
  { id: 'why-costs-vary', label: 'Why Dubai Costs Vary', emoji: '💡' },
  { id: 'cost-breakdown', label: 'Cost Breakdown (AED)', emoji: '💰' },
  { id: 'local-vs-offshore', label: 'Local vs Offshore', emoji: '🌍' },
  { id: 'factors-affecting-cost', label: 'Factors That Affect Cost', emoji: '⚙️' },
  { id: 'hidden-costs', label: 'Hidden Costs in Dubai', emoji: '🔍' },
  { id: 'codazz-pricing', label: 'Codazz Pricing Model', emoji: '🏗️' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-development-companies-dubai', title: 'Top 10 App Development Companies in Dubai (2026)', category: 'Mobile', readTime: '12 min' },
  { slug: 'software-development-companies-dubai', title: 'Top Software Development Companies in Dubai (2026)', category: 'Engineering', readTime: '10 min' },
  { slug: 'app-development-companies-saudi-arabia', title: 'Top 10 App Development Companies in Saudi Arabia (2026)', category: 'Mobile', readTime: '10 min' },
];

const faqs = [
  { q: 'What is the average cost of building an app in Dubai?', a: 'The average cost ranges from AED 50,000 (simple MVP) to AED 1,500,000+ (complex enterprise platform). Most mid-range business apps fall between AED 150,000 and AED 500,000. The final cost depends on complexity, platforms, and your choice of development partner.' },
  { q: 'Is it cheaper to hire a Dubai agency or an offshore team?', a: 'Pure Dubai agencies charge AED 400-800/hour, while offshore teams charge AED 100-250/hour. However, the best value comes from hybrid models like Codazz, which offers a Dubai office for strategy and local expertise combined with offshore engineering, saving you 40-60% versus a purely local agency.' },
  { q: 'How much does a fintech app cost in Dubai?', a: 'Fintech apps in Dubai typically cost AED 350,000 to AED 1,200,000 due to strict DFSA and UAE Central Bank compliance requirements, secure payment processing, KYC/AML integration, and multi-factor authentication. Regulatory compliance alone can add 20-30% to development costs.' },
  { q: 'What are the hidden costs of app development in Dubai?', a: 'Hidden costs include UAE data hosting (AED 5,000-25,000/year), Arabic localization (10-15% extra), App Store and Play Store fees, ongoing maintenance (15-20% of build cost annually), and compliance audits for regulated industries. Always ask your agency for a total cost of ownership breakdown.' },
  { q: 'Can I build a quality app in Dubai for under AED 100,000?', a: 'Yes, but expectations need to be realistic. Under AED 100,000, you can build a clean MVP with 5-8 screens, basic functionality, and a single platform. For anything more complex, budget at least AED 150,000-250,000. Working with a hybrid agency like Codazz can stretch your budget further without sacrificing quality.' },
];

export default function AppDevelopmentCostDubaiClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

        {/* FEATURED IMAGE */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/app-development-cost-dubai.jpg"
              alt="App development cost in Dubai"
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

        {/* ARTICLE HERO */}
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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
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
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does App Development Cost in Dubai? (2026 Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A transparent, data-driven breakdown of mobile app development costs in Dubai and the UAE for 2026. Real numbers in AED and USD, from simple MVPs to complex fintech and enterprise platforms.
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

        {/* ARTICLE BODY + SIDEBAR */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* MAIN ARTICLE */}
              <article>

                {/* Why Costs Vary */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-costs-vary">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why App Development Costs in Dubai Are Uniquely Complex</h2>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Dubai operates in a fundamentally different cost environment than most global tech hubs. The emirate&apos;s premium positioning attracts world-class talent but also commands premium pricing. A local Dubai agency in DIFC or Dubai Internet City can charge anywhere from AED 400 to AED 800 per hour&mdash;comparable to San Francisco or London rates.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    However, Dubai&apos;s unique position as a bridge between East and West creates interesting arbitrage opportunities. Smart businesses are increasingly leveraging hybrid models&mdash;partnering with companies that maintain a Dubai office for client-facing strategy while executing development through offshore engineering centers where top talent costs 60-70% less.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide gives you real pricing data from our experience delivering apps for Dubai-based businesses, from ambitious DIFC fintech startups to established retail brands and government entities pursuing Smart Dubai objectives.
                  </p>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>The Real Cost Breakdown for Dubai in 2026</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Below are real-world cost ranges for Dubai app development in 2026. All prices include design, development, QA, and initial deployment. Costs are shown in both AED and USD.
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
                      letterSpacing: '-0.03em', marginBottom: 8,
                    }}>AED 50,000 &ndash; AED 120,000</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>($13,600 &ndash; $32,700 USD)</p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      This tier covers straightforward applications with core functionality. Think a single-platform MVP with user authentication, basic CRUD operations, a clean UI, and integration with one or two APIs. Examples include a basic booking app, a simple marketplace, or a content-driven utility app. In Dubai, even simple apps typically require Arabic language support, adding 10-15% to baseline costs.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['5-8 screens', 'Single platform', 'Basic auth', 'Arabic support', '8-12 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(52,211,153,0.08)', color: 'rgba(255,255,255,0.4)',
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
                      letterSpacing: '-0.03em', marginBottom: 8,
                    }}>AED 150,000 &ndash; AED 500,000</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>($40,800 &ndash; $136,000 USD)</p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      The sweet spot for serious Dubai businesses. This tier includes cross-platform apps (iOS + Android), custom backend, third-party integrations (payment gateways like Tabby, Tamara, or Network International), push notifications, analytics, admin panels, and bilingual Arabic/English interfaces. Think e-commerce apps, delivery platforms, or booking systems.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['15-30 screens', 'iOS + Android', 'Payment integration', 'Admin panel', 'Bilingual AR/EN', '3-6 months'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(96,165,250,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(96,165,250,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Complex/Enterprise */}
                  <div style={{
                    background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.15)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
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
                      letterSpacing: '-0.03em', marginBottom: 8,
                    }}>AED 500,000 &ndash; AED 2,000,000+</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>($136,000 &ndash; $545,000+ USD)</p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Enterprise-grade platforms for major Gulf businesses, government entities, or fintech companies. Includes custom AI/ML features, complex role-based access control, multi-tenant architectures, real-time data processing, DFSA/CBUAE regulatory compliance, and microservices backends. Think super apps, banking platforms, or smart city applications aligned with Dubai&apos;s 2030 vision.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['50+ screens', 'Microservices', 'AI/ML features', 'Regulatory compliance', 'Real-time data', '6-12+ months'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(167,139,250,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(167,139,250,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Local vs Offshore */}
                <div className="reveal" style={{ marginBottom: 56 }} id="local-vs-offshore">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Dubai Agency vs Offshore: The Real Comparison</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    This is the most critical decision Dubai businesses face when commissioning an app. Here&apos;s an honest comparison:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
                    {/* Local Dubai Agency */}
                    <div style={{
                      background: 'rgba(251,146,60,0.04)', border: '1px solid rgba(251,146,60,0.15)',
                      borderRadius: 20, padding: 28,
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fb923c', marginBottom: 16 }}>Pure Dubai Agency</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                          { label: 'Hourly Rate', value: 'AED 400-800/hr' },
                          { label: 'Medium App Cost', value: 'AED 350K-700K' },
                          { label: 'Pros', value: 'Face-to-face, local understanding' },
                          { label: 'Cons', value: 'Very expensive, small teams' },
                        ].map(item => (
                          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{item.label}</span>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'right' }}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pure Offshore */}
                    <div style={{
                      background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.15)',
                      borderRadius: 20, padding: 28,
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#60a5fa', marginBottom: 16 }}>Pure Offshore</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                          { label: 'Hourly Rate', value: 'AED 75-200/hr' },
                          { label: 'Medium App Cost', value: 'AED 75K-200K' },
                          { label: 'Pros', value: 'Low cost, large teams' },
                          { label: 'Cons', value: 'Timezone gaps, no local insight' },
                        ].map(item => (
                          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{item.label}</span>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'right' }}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hybrid (Codazz) */}
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(255,255,255,0.015) 100%)',
                      border: '1px solid rgba(34,197,94,0.3)',
                      borderRadius: 20, padding: 28,
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#22c55e', marginBottom: 16 }}>Hybrid (Codazz Model)</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                          { label: 'Hourly Rate', value: 'AED 150-350/hr' },
                          { label: 'Medium App Cost', value: 'AED 120K-350K' },
                          { label: 'Pros', value: 'Dubai office + global dev centers' },
                          { label: 'Cons', value: 'None significant' },
                        ].map(item => (
                          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{item.label}</span>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'right' }}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>The Codazz Advantage:</strong> Our hybrid model gives Dubai businesses the best of both worlds. A Dubai office for strategy sessions, client meetings, and local market understanding, combined with engineering centers in India and Canada where world-class developers deliver at 40-60% lower cost than pure Dubai agencies. Same quality. Dramatically better economics.
                    </p>
                  </div>
                </div>

                {/* Factors Affecting Cost */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Key Factors That Drive Costs in Dubai</h2>

                  {[
                    { title: 'Arabic/RTL Support', desc: 'Full Arabic-first interfaces with RTL layouts, Arabic typography, and bilingual content add 10-15% to development costs. Essential for any consumer-facing app in the Gulf.', cost: '+10-15%' },
                    { title: 'Local Payment Gateways', desc: 'Integrating Tabby (BNPL), Tamara, Network International, or local bank payment APIs requires specialized knowledge of Gulf payment infrastructure.', cost: 'AED 15K-40K' },
                    { title: 'UAE Data Residency', desc: 'UAE regulations increasingly require data to be stored within the country. Setting up UAE-hosted cloud infrastructure (AWS Bahrain, Azure UAE) adds ongoing costs.', cost: 'AED 5K-25K/yr' },
                    { title: 'DFSA/CBUAE Compliance', desc: 'Fintech apps require compliance with DFSA (DIFC) or UAE Central Bank regulations. This includes KYC/AML, transaction monitoring, and regular security audits.', cost: 'AED 50K-150K' },
                    { title: 'Multi-Language Support', desc: 'Beyond Arabic and English, many Dubai apps need Hindi, Urdu, Filipino, or other languages to serve the diverse expatriate population.', cost: '+5-8% per language' },
                  ].map(item => (
                    <div key={item.title} style={{
                      display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px',
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 16, marginBottom: 12,
                    }}>
                      <div style={{ flex: 1, paddingRight: 20 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>{item.title}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap', flexShrink: 0,
                        background: 'rgba(34,197,94,0.08)', padding: '6px 14px', borderRadius: 100,
                      }}>{item.cost}</span>
                    </div>
                  ))}
                </div>

                {/* Hidden Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hidden-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Hidden Costs Most Dubai Agencies Don&apos;t Tell You</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The quoted development cost is rarely the total cost of ownership. Here are the costs Dubai businesses frequently overlook:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
                    {[
                      { label: 'Annual Maintenance', value: '15-20% of build cost', desc: 'Bug fixes, OS updates, security patches' },
                      { label: 'Cloud Hosting (UAE)', value: 'AED 5,000-25,000/yr', desc: 'AWS Bahrain or Azure UAE North' },
                      { label: 'App Store Fees', value: 'AED 370-920/yr', desc: 'Apple ($99/yr) + Google ($25 one-time)' },
                      { label: 'SSL & Security', value: 'AED 2,000-8,000/yr', desc: 'Enterprise SSL, WAF, DDoS protection' },
                      { label: 'Analytics & Monitoring', value: 'AED 3,000-15,000/yr', desc: 'Firebase, Mixpanel, crash reporting' },
                      { label: 'Marketing Launch', value: 'AED 25,000-100,000', desc: 'ASO, launch campaign, PR in Gulf media' },
                    ].map(item => (
                      <div key={item.label} style={{
                        padding: '20px', borderRadius: 16,
                        background: 'rgba(251,146,60,0.04)', border: '1px solid rgba(251,146,60,0.1)',
                      }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#fb923c', margin: '0 0 4px' }}>{item.label}</p>
                        <p style={{ fontSize: 18, fontWeight: 800, color: '#ffffff', margin: '0 0 6px' }}>{item.value}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Codazz Pricing */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz-pricing">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🏗️</div>
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
                        }}>How Codazz Prices Dubai Projects</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      We operate on a <strong style={{ color: '#ffffff' }}>fixed-price model</strong> for Dubai clients. After a thorough discovery phase (offered free of charge), we provide a detailed scope document with a locked-in price in AED. No hourly billing surprises. No scope creep charges without written approval.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Our Dubai office handles all client engagement&mdash;strategy workshops, design reviews, progress demos. Meanwhile, our engineering centers in India and Canada deliver the code. This hybrid model means Dubai businesses get premium agency service at 40-60% lower cost than a purely local team.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      Payment structure: 40% at kickoff, 30% at beta delivery, 30% at final launch. We accept AED, USD, and crypto payments for maximum flexibility.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Fixed-Price &bull; Dubai Office + Global Dev &bull; 40-60% Savings vs Local Agencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 32,
                  }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', background: 'none', border: 'none',
                            color: '#ffffff', fontSize: 16, fontWeight: 600, textAlign: 'left',
                            cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', gap: 16,
                          }}
                        >
                          {faq.q}
                          <span style={{
                            fontSize: 20, color: 'rgba(255,255,255,0.3)', flexShrink: 0,
                            transform: openFaq === i ? 'rotate(45deg)' : 'none',
                            transition: 'transform 0.2s',
                          }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* SIDEBAR */}
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally, including major Gulf-region deployments.
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

        {/* BOTTOM CTA */}
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
                }}>Get Your Free Estimate</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get a Free Dubai App Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop guessing what your app will cost. Share your idea with our Dubai team and receive a detailed, fixed-price proposal in AED within 48 hours. No commitment. No sales pitch. Just real numbers.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
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
