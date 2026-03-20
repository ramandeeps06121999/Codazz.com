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
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '🍁', metric: 'Native, Cross-Platform & Enterprise App Development', accentColor: '#22c55e', bgColor: 'rgba(17,24,39,' },
  { num: 2, name: 'Scopely', category: 'Gaming & Mobile', emoji: '🎮', metric: 'Billion-dollar mobile gaming studio', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Headspace', category: 'Health & Wellness', emoji: '🧘', metric: 'LA-born mental health app, 70M+ downloads', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Riot Games', category: 'Gaming Tech', emoji: '⚔️', metric: 'League of Legends, Valorant mobile engineering', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Tinder', category: 'Consumer Social', emoji: '🔥', metric: 'LA-headquartered, 75M+ monthly active users', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Dollar Shave Club', category: 'D2C Mobile', emoji: '🪒', metric: 'Pioneered D2C mobile commerce in LA', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Honey (PayPal)', category: 'E-Commerce Tech', emoji: '🍯', metric: 'LA-built coupon engine, acquired for $4B', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Jam City', category: 'Mobile Gaming', emoji: '🕹️', metric: 'Top-grossing casual mobile games', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Snap Inc.', category: 'AR & Social', emoji: '👻', metric: 'Snapchat, AR innovation, 750M+ MAU', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Bird', category: 'Mobility Tech', emoji: '🛴', metric: 'LA-born micro-mobility platform', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026)', category: 'Business', readTime: '8 min' },
  { slug: 'top-app-development-companies-san-francisco', title: 'Top 10 App Development Companies in San Francisco (2026)', category: 'Mobile', readTime: '10 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

const faqs = [
  {
    q: 'How much does app development cost in Los Angeles?',
    a: 'App development in Los Angeles ranges from $40,000 for a basic MVP to $400,000+ for complex entertainment, gaming, or streaming applications. LA agencies often specialize in media-rich apps with video, AR, and social features, which can increase costs compared to simpler utility apps.',
  },
  {
    q: 'Why is Los Angeles a good city for app development?',
    a: 'LA sits at the intersection of entertainment, technology, and culture. The city is home to major studios, streaming platforms, and gaming companies, creating a unique talent pool that excels at building engaging consumer experiences. The influencer economy and creator tools space is also dominated by LA-based companies.',
  },
  {
    q: 'What types of apps do LA companies specialize in?',
    a: 'Los Angeles companies excel at entertainment apps, streaming platforms, mobile gaming, social media, AR/VR experiences, influencer and creator tools, D2C commerce, and health and wellness applications. The city\'s entertainment industry DNA gives LA developers an edge in building highly engaging, content-rich mobile experiences.',
  },
  {
    q: 'How long does it take to build an app in Los Angeles?',
    a: 'A typical MVP takes 3-5 months. Full-featured apps with streaming, gaming, or AR capabilities take 6-14 months. LA agencies are experienced with iterative launches that allow you to test market fit early while building out premium features in subsequent sprints.',
  },
  {
    q: 'Should I choose an LA agency or a remote team?',
    a: 'If your app involves entertainment, media, gaming, or the creator economy, an LA-based or LA-experienced team offers significant domain expertise. For companies in these verticals, the ability to tap into LA\'s entertainment tech network provides strategic advantages beyond just code. Codazz offers teams experienced in LA\'s entertainment tech market with global engineering scale.',
  },
];

export default function TopAppDevelopmentCompaniesLosAngelesClient() {
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
              src="/blog_images/top-app-development-companies-los-angeles.jpg"
              alt="Top app development companies in Los Angeles"
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
              }}>Mobile</span>
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
              Top 10 App Development Companies in Los Angeles (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Los Angeles is where entertainment meets technology. From mobile gaming giants to streaming innovators and the creator economy, LA&apos;s tech scene is producing some of the most engaging consumer apps on the planet. Here are the top 10 companies leading the charge.
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
                  { label: 'Twitter', icon: '\u{1d54f}' },
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

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Los Angeles has quietly evolved from an entertainment capital into one of America&apos;s most dynamic technology hubs. The convergence of Hollywood&apos;s storytelling expertise, a massive gaming industry, and the explosive growth of the creator economy has produced a unique breed of app developers who understand how to build products that captivate millions.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, LA&apos;s tech ecosystem is thriving. The city is home to billion-dollar mobile gaming studios, the world&apos;s most popular dating and social apps, pioneering AR/VR companies, and a growing wave of AI-native startups. With USC, UCLA, and Caltech feeding the talent pipeline, and major players like Snap, Riot Games, and Tinder headquartered here, Los Angeles offers a unique flavor of app development that blends consumer psychology with engineering excellence.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated the most impactful app development companies operating in the LA market to compile this definitive ranking of the <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Top 10 App Development Companies in Los Angeles</strong> for 2026.
                  </p>
                </div>

                {/* Company 1: Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Stack Apps</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz takes the top spot in Los Angeles by bringing a rare combination of entertainment-grade UX design and enterprise-level engineering rigor. With over 500+ successful product launches globally, Codazz has built a deep portfolio of consumer apps, streaming platforms, and media-rich mobile experiences that resonate with LA&apos;s demanding digital audience.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Their engineering teams specialize in building high-performance apps that handle video streaming, real-time social features, and AI-powered personalization, all the hallmarks of successful LA-born applications. They leverage React Native and Flutter for rapid cross-platform deployment, backed by scalable cloud infrastructure on AWS and GCP that can handle millions of concurrent users.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      For entertainment companies, streaming startups, and consumer brands looking to launch in the LA market, Codazz delivers the polish and performance that this city&apos;s users expect.
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
                        Key Metric: 500+ Product Launches | Entertainment & Consumer App Experts
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'scopely', name: 'Scopely', category: 'Gaming & Mobile',
                    emoji: '🎮', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Billion-dollar mobile gaming studio',
                    paragraphs: [
                      'Scopely is one of LA\'s crown jewels in mobile gaming. Valued at over $5 billion, this Venice Beach-based studio has built some of the highest-grossing mobile games on both iOS and Android. Their engineering team is a masterclass in real-time multiplayer infrastructure, in-app monetization systems, and the kind of engagement loops that keep users coming back for years.',
                      'For companies looking to build gaming or gamified mobile experiences in LA, Scopely\'s engineering DNA represents the gold standard of what\'s possible when entertainment creativity meets technical excellence.',
                    ],
                  },
                  {
                    num: '03', id: 'headspace', name: 'Headspace', category: 'Health & Wellness',
                    emoji: '🧘', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'LA-born mental health app, 70M+ downloads',
                    paragraphs: [
                      'Born in Santa Monica, Headspace has become the world\'s most recognized meditation and mental health app with over 70 million downloads. Their engineering team pioneered the integration of personalized content delivery, sleep tracking, and adaptive wellness programs into a single, beautifully designed mobile experience.',
                      'Headspace demonstrates LA\'s unique ability to merge wellness culture with cutting-edge technology, creating apps that feel both deeply human and technically sophisticated.',
                    ],
                  },
                  {
                    num: '04', id: 'riot-games', name: 'Riot Games', category: 'Gaming Tech',
                    emoji: '⚔️', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'League of Legends, Valorant mobile engineering',
                    paragraphs: [
                      'Riot Games\' West Los Angeles headquarters is ground zero for some of the most technically demanding mobile game development on Earth. Their mobile ports of League of Legends and Valorant required solving extraordinarily complex problems in network latency optimization, cross-platform rendering, and real-time competitive matchmaking at massive scale.',
                    ],
                  },
                  {
                    num: '05', id: 'tinder', name: 'Tinder', category: 'Consumer Social',
                    emoji: '🔥', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'LA-headquartered, 75M+ monthly active users',
                    paragraphs: [
                      'Headquartered in West Hollywood, Tinder revolutionized mobile social networking with its iconic swipe interface. With over 75 million monthly active users, their engineering team handles some of the most complex real-time matching algorithms, geolocation services, and content moderation systems in the consumer app space. Tinder\'s LA DNA is evident in its focus on visual design and cultural relevance.',
                    ],
                  },
                  {
                    num: '06', id: 'dollar-shave-club', name: 'Dollar Shave Club', category: 'D2C Mobile',
                    emoji: '🪒', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Pioneered D2C mobile commerce in LA',
                    paragraphs: [
                      'Dollar Shave Club\'s Marina del Rey team pioneered the direct-to-consumer mobile commerce model that countless LA startups have since emulated. Their mobile app engineering focuses on subscription management, personalized product recommendations, and frictionless checkout experiences. Acquired by Unilever for $1 billion, they prove that LA can build consumer apps that disrupt entire industries.',
                    ],
                  },
                  {
                    num: '07', id: 'honey', name: 'Honey (PayPal)', category: 'E-Commerce Tech',
                    emoji: '🍯', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'LA-built coupon engine, acquired for $4B',
                    paragraphs: [
                      'Built in downtown LA and acquired by PayPal for $4 billion, Honey\'s engineering team created one of the most sophisticated real-time coupon and deal-finding engines on the internet. Their mobile app processes millions of product prices and promotional codes in real time, using machine learning to surface savings that are genuinely relevant to each user. A testament to LA\'s ability to produce world-class e-commerce technology.',
                    ],
                  },
                  {
                    num: '08', id: 'jam-city', name: 'Jam City', category: 'Mobile Gaming',
                    emoji: '🕹️', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Top-grossing casual mobile games',
                    paragraphs: [
                      'Jam City is a Culver City-based mobile gaming powerhouse that has produced multiple top-grossing titles. Their engineering team excels at building games that combine Hollywood-quality visual assets with addictive gameplay mechanics. With licensed properties from Harry Potter and Disney, Jam City represents the perfect intersection of LA\'s entertainment industry and mobile engineering expertise.',
                    ],
                  },
                  {
                    num: '09', id: 'snap-inc', name: 'Snap Inc.', category: 'AR & Social',
                    emoji: '👻', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Snapchat, AR innovation, 750M+ MAU',
                    paragraphs: [
                      'Santa Monica-based Snap Inc. is the undisputed leader in mobile augmented reality. Snapchat\'s engineering team has built the most advanced real-time AR platform on mobile, processing billions of camera-based interactions daily. With over 750 million monthly active users, their innovations in ephemeral content, AR lenses, and spatial computing continue to define the future of mobile social media.',
                    ],
                  },
                  {
                    num: '10', id: 'bird', name: 'Bird', category: 'Mobility Tech',
                    emoji: '🛴', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'LA-born micro-mobility platform',
                    paragraphs: [
                      'Born in Venice Beach, Bird pioneered the electric scooter-sharing model that swept across global cities. Their mobile app engineering combines real-time GPS tracking, payment processing, IoT device management, and urban mapping into a seamless user experience. Bird represents LA\'s growing strength in mobility tech and sustainable transportation solutions.',
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
                          {app.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Why LA section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why Los Angeles for App Development?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Los Angeles offers a unique advantage for app development that no other city can replicate: the intersection of entertainment, culture, and technology. The city&apos;s entertainment industry has spent a century mastering audience engagement, and that expertise now flows directly into mobile app development through shared talent pools and cross-industry collaboration.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The gaming industry in LA generates billions in mobile revenue annually, creating a deep bench of engineers experienced in real-time systems, monetization, and user retention. The influencer and creator economy, largely centered in LA, drives demand for innovative social and commerce tools that are pushing the boundaries of mobile technology.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    With USC, UCLA, and Caltech producing world-class engineering graduates, and venture capital firms increasingly opening LA offices, the city&apos;s tech ecosystem is maturing rapidly. For consumer-facing apps that need to captivate and retain users, LA&apos;s unique cultural DNA provides an edge that pure engineering hubs cannot match.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', border: 'none', background: 'transparent',
                            color: '#ffffff', fontSize: 16, fontWeight: 600, textAlign: 'left',
                            cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          }}
                        >
                          {faq.q}
                          <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Conclusion: Choosing Your LA Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Los Angeles&apos;s app development ecosystem thrives at the intersection of entertainment and technology. The companies on this list represent the best of what LA has to offer, from billion-dollar gaming studios to pioneering social and commerce platforms.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses looking to build consumer apps that captivate and engage, Codazz leads this list by combining entertainment-grade design sensibility with the engineering depth needed to scale to millions of users. Their track record of 500+ launches speaks for itself.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    When choosing your LA development partner, look for teams that understand not just code, but the art of building products that users genuinely love.
                  </p>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside>
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
                      {companies.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '')}`} style={{
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
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{app.category}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

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
                }}>Build Your App in Los Angeles</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Entertainment-Grade Apps. Enterprise-Grade Engineering.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Build mobile experiences that captivate LA&apos;s demanding digital audience. Codazz combines consumer app expertise with the engineering rigor to scale.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
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
