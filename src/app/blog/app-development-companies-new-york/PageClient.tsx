'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '🍁', metric: 'Native, Cross-Platform & Enterprise App Development', accentColor: '#111827', bgColor: 'rgba(17,24,39,' },
  { num: 2, name: 'Townmedialabs', category: 'Creative Mobile', emoji: '🎨', metric: 'User-friendly apps for New York businesses', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'TML', category: 'Growth Apps', emoji: '🚀', metric: 'Rapid user acquisition & scale-up focus', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Lift Interactive', category: 'UX-Focused Apps', emoji: '✨', metric: 'Award-winning UX design & development', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Pixel Jar', category: 'E-Commerce Mobile', emoji: '🛒', metric: 'Mobile commerce & retail app specialists', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Box Clever', category: 'Strategy & Design', emoji: '📐', metric: 'Strategy-first app design & prototyping', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Vog App Developers', category: 'NYC Metro', emoji: '📱', metric: 'NYC metro area mobile development', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Helcim', category: 'FinTech Mobile', emoji: '💳', metric: 'Payment & financial technology apps', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Jobber', category: 'Field Service Apps', emoji: '🔧', metric: 'Home service & field management solutions', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Drivewyze', category: 'Transportation Tech', emoji: '🚛', metric: 'Connected vehicle & logistics platforms', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026)', category: 'Business', readTime: '9 min' },
  { slug: 'ai-development-companies-usa', title: 'Top AI Development Companies in the USA (2026)', category: 'Technology', readTime: '10 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
];

export default function AppDevelopmentCompaniesNewYorkClient() {
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

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img 
              src="/blog_images/app-development-companies-new-york.jpg" 
              alt="App development companies in New York"
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
                background: 'rgba(17,24,39,0.12)', color: '#111827',
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
                8 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 Mobile App Development Companies in New York (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              New York is one of America&apos;s most exciting tech hubs. Here are the top 10 mobile app development companies building the future from the Big Apple.
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
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#111827',
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
                  background: copied ? 'rgba(17,24,39,0.1)' : 'rgba(0,0,0,0.02)',
                  color: copied ? '#111827' : 'rgba(0,0,0,0.45)',
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
                    fontSize: 18, color: 'rgb(0,0,0)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    New York is more than Wall Street and media. Over the past five years, the city has cemented itself as one of America&apos;s fastest-growing technology ecosystems, fueled by world-class research at NYU, Columbia, and Cornell Tech, and a state government actively courting tech investment.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    With unmatched access to venture capital, a thriving talent pipeline from top universities, and an innovation ecosystem that spans every industry vertical, New York is attracting app developers, AI researchers, and product studios at record pace.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    Whether you are a startup looking to build an MVP, an enterprise modernizing legacy systems, or a scale-up expanding across the East Coast, choosing the right mobile app development partner is critical. We evaluated dozens of New York-area agencies and product studios to bring you this definitive ranking of the <strong style={{ color: 'rgba(0,0,0,0.65)' }}>Top 10 Mobile App Development Companies in New York</strong> for 2026.
                  </p>
                </div>

                {/* Company 1: Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(17,24,39,0.1) 0%, rgba(0,0,0,0.015) 100%)', border: '1px solid rgba(17,24,39,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(17,24,39,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(17,24,39,0.1)', border: '1px solid rgba(17,24,39,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(17,24,39,0.15)', color: '#111827',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Stack Apps</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      New York&apos;s premier app development agency. We build native iOS, Android, and cross-platform apps using React Native and Flutter. From MVPs to enterprise-grade solutions, our New York headquarters serves as the command center for 300+ successful product launches.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      What sets Codazz apart is our full-stack approach. We don&apos;t just build the front-end mobile experience; we architect the entire product ecosystem including scalable backend APIs, cloud infrastructure on AWS and GCP, CI/CD pipelines, and analytics dashboards. Our team leverages New York&apos;s AI talent pool to integrate machine learning features directly into mobile applications, giving our clients a competitive edge that template-based agencies simply cannot match.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#111827', fontWeight: 600 }}>
                        Key Metric: 300+ Product Launches | Native, Cross-Platform & Enterprise
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'townmedialabs', name: 'Townmedialabs', category: 'Creative Mobile',
                    emoji: '🎨', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'User-friendly apps for New York businesses',
                    paragraphs: [
                      'A rising New York digital agency combining creative design with robust mobile development. Townmedialabs excels at building user-friendly apps for local New York businesses. Their design-first philosophy ensures every app they ship feels intuitive and polished, while their engineering team delivers reliable, performant code under the hood.',
                      'They have quickly built a reputation in the New York startup community for delivering on time and under budget, making them an excellent partner for small to mid-sized businesses entering the mobile space for the first time.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML', category: 'Growth Apps',
                    emoji: '🚀', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Rapid user acquisition & scale-up focus',
                    paragraphs: [
                      'TML builds mobile applications designed for rapid user acquisition and growth, specializing in startups and scale-ups across New York. Their growth-engineering methodology bakes analytics, A/B testing, and push notification strategies directly into the development process.',
                      'If your primary goal is getting to 10,000 users fast and iterating based on real data, TML is a strong contender for your development partner.',
                    ],
                  },
                  {
                    num: '04', id: 'lift-interactive', name: 'Lift Interactive', category: 'UX-Focused Apps',
                    emoji: '✨', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Award-winning UX design & development',
                    paragraphs: [
                      'Lift Interactive has been a fixture in New York\'s digital scene for over fifteen years. They are known for their meticulous UX research process, conducting user interviews and usability testing before writing a single line of code. Their apps consistently win design awards and earn high ratings on both the App Store and Google Play.',
                    ],
                  },
                  {
                    num: '05', id: 'pixel-jar', name: 'Pixel Jar', category: 'E-Commerce Mobile',
                    emoji: '🛒', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Mobile commerce & retail app specialists',
                    paragraphs: [
                      'If you are a New York retailer looking to launch a mobile shopping experience, Pixel Jar is your go-to partner. They specialize in e-commerce mobile apps with deep integrations into Shopify, WooCommerce, and custom payment gateways. Their apps are optimized for conversion with features like one-tap checkout, personalized recommendations, and real-time inventory sync.',
                    ],
                  },
                  {
                    num: '06', id: 'box-clever', name: 'Box Clever', category: 'Strategy & Design',
                    emoji: '📐', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Strategy-first app design & prototyping',
                    paragraphs: [
                      'Box Clever takes a strategy-first approach to app development. Before any design or code begins, they run intensive discovery workshops to validate the business model, map user journeys, and define success metrics. This makes them an ideal partner for enterprises and funded startups who want to minimize risk before committing six figures to a build.',
                    ],
                  },
                  {
                    num: '07', id: 'vog-app-developers', name: 'Vog App Developers', category: 'NYC Metro',
                    emoji: '📱', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'NYC metro area mobile development',
                    paragraphs: [
                      'Operating across the NYC metro area, Vog App Developers has built a massive portfolio of over 200 mobile apps for clients ranging from local restaurants to national brands. They offer flexible engagement models including dedicated teams, fixed-price projects, and ongoing retainers, making them accessible to businesses of all sizes across New York.',
                    ],
                  },
                  {
                    num: '08', id: 'helcim', name: 'Helcim', category: 'FinTech Mobile',
                    emoji: '💳', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Payment & financial technology apps',
                    paragraphs: [
                      'While Helcim is primarily known as a payments company, their in-house mobile engineering team has built one of America\'s most polished FinTech apps. Their expertise in PCI compliance, secure transaction processing, and financial UX design makes them a valuable partner for any New York business building payment-related mobile solutions.',
                    ],
                  },
                  {
                    num: '09', id: 'jobber', name: 'Jobber', category: 'Field Service Apps',
                    emoji: '🔧', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Home service & field management solutions',
                    paragraphs: [
                      'Jobber is New York\'s homegrown success story in field service management. Their mobile platform powers thousands of home service businesses across North America with features like job scheduling, GPS tracking, invoicing, and customer communication. While they primarily build their own product, their engineering expertise and open API make them a key player in New York\'s app development ecosystem.',
                    ],
                  },
                  {
                    num: '10', id: 'drivewyze', name: 'Drivewyze', category: 'Transportation Tech',
                    emoji: '🚛', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Connected vehicle & logistics platforms',
                    paragraphs: [
                      'Drivewyze represents New York\'s strength in transportation technology. Their connected vehicle platform processes millions of data points from commercial trucks across North America. Their mobile apps integrate with weigh station bypass systems, safety alerts, and fleet management tools, showcasing the kind of complex, real-time mobile engineering talent that exists in New York.',
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
                          fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8,
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
                          {app.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Why New York section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why New York for App Development?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    New York offers a unique combination of advantages for mobile app development that few American cities can match. NYU, Columbia, and Cornell Tech are home to some of the world&apos;s top AI and computer science research programs, producing graduates who are immediately employable in machine learning, computer vision, and natural language processing.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    New York&apos;s unparalleled access to venture capital, Fortune 500 headquarters, and a diverse talent pool make it the ideal location for building enterprise and consumer mobile applications. The state offers R&D tax credits and innovation incentives that reduce operational overhead for tech companies.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    Combined with a thriving startup ecosystem anchored by incubators like TechStars NYC and the NYC Innovation Hub, the city continues to be America&apos;s premier tech hub alongside Silicon Valley. If you are building a mobile app in 2026, New York deserves a serious look.
                  </p>
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
                      {companies.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '')}`} style={{
                          fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#111827';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(17,24,39,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,0,0,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{app.category}</span>
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
                        background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#111827', flexShrink: 0,
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
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(17,24,39,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(17,24,39,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,0,0,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#111827', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgb(0,0,0)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
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
                background: 'rgba(17,24,39,0.04)', border: '1px solid rgba(17,24,39,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#111827', marginBottom: 12,
                }}>Build Your App in New York</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Your App Idea Deserves World-Class Engineering.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop settling for cookie-cutter apps built on templates. Let Codazz engineer a custom mobile experience that scales with your business, powered by New York&apos;s best talent.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#111827', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your App Project →
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
