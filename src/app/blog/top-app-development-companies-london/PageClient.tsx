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
  { num: 2, name: 'Revolut', category: 'FinTech Super App', emoji: '💳', metric: 'London-born neobank, 35M+ customers globally', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Monzo', category: 'Digital Banking', emoji: '🏦', metric: 'UK challenger bank, 8M+ account holders', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Wise', category: 'Global Payments', emoji: '🌍', metric: 'International money transfers, 16M+ customers', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Deliveroo', category: 'Marketplace', emoji: '🚴', metric: 'Food & grocery delivery across 10+ countries', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Babylon Health', category: 'Digital Health', emoji: '🏥', metric: 'AI-powered healthcare & NHS partnerships', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Checkout.com', category: 'Payment Infra', emoji: '💰', metric: 'Enterprise payment processing, $40B+ valuation', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Starling Bank', category: 'Challenger Bank', emoji: '⭐', metric: 'Award-winning digital bank, profitable since 2022', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Improbable', category: 'Metaverse Tech', emoji: '🌐', metric: 'Spatial computing & virtual world infrastructure', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Gousto', category: 'FoodTech', emoji: '🍽️', metric: 'AI-powered meal kit platform, 1M+ active subscribers', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026)', category: 'Business', readTime: '8 min' },
  { slug: 'top-app-development-companies-san-francisco', title: 'Top 10 App Development Companies in San Francisco (2026)', category: 'Mobile', readTime: '10 min' },
  { slug: 'ai-development-companies-usa', title: 'Top 10 AI Development Companies in the USA (2026)', category: 'AI/ML', readTime: '9 min' },
];

const faqs = [
  {
    q: 'How much does app development cost in London?',
    a: 'App development in London typically ranges from 30,000 GBP for a basic MVP to 400,000 GBP+ for enterprise-grade fintech or healthtech applications. London rates are comparable to New York but benefit from strong government R&D tax credits and the UK\'s Enterprise Investment Scheme (EIS), which can offset costs significantly for qualifying startups.',
  },
  {
    q: 'Why is London the best city for fintech app development?',
    a: 'London is the undisputed fintech capital of Europe and arguably the world. The FCA\'s regulatory sandbox allows fintech startups to test innovative products in a controlled environment. The city is home to more fintech unicorns than any other European city, with companies like Revolut, Monzo, Wise, and Checkout.com providing a deep talent pool of engineers experienced in building regulated financial applications.',
  },
  {
    q: 'What types of apps do London companies specialize in?',
    a: 'London developers excel in fintech and neobanking, digital health and NHS-integrated applications, marketplace platforms, payment infrastructure, insurtech, regulatory technology (RegTech), and enterprise SaaS. The city\'s position as a global financial center gives London developers unique expertise in compliance, KYC/AML, and real-time payment processing.',
  },
  {
    q: 'How does London compare to US cities for app development?',
    a: 'London offers world-class fintech expertise that rivals or exceeds San Francisco. Development costs are generally 10-20% lower than SF but comparable to New York. London\'s unique advantages include the FCA sandbox for fintech, NHS digital health partnerships, and access to the broader European market. For companies targeting global markets, London\'s central time zone also enables easier coordination with both US and Asian teams.',
  },
  {
    q: 'What is the tech talent market like in London?',
    a: 'London has over 600,000 tech workers, making it Europe\'s largest tech talent market. Imperial College, UCL, Oxford, and Cambridge produce world-class computer science and AI graduates. Post-Brexit visa reforms have actually made it easier for global tech talent to work in London through the Global Talent and Scale-Up visas. Major tech employers including Google DeepMind, Meta, and Amazon all have significant London engineering offices.',
  },
];

export default function TopAppDevelopmentCompaniesLondonClient() {
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
              src="/blog_images/top-app-development-companies-london.jpg"
              alt="Top app development companies in London"
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
              Top 10 App Development Companies in London (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              London is the fintech capital of Europe and one of the world&apos;s most vibrant tech ecosystems. From neobanking revolutionaries to digital health innovators, London&apos;s app developers are building products used by hundreds of millions worldwide. Here are the top 10 leading the charge.
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
                    London has cemented its position as Europe&apos;s undisputed technology capital and one of the top three global tech hubs alongside San Francisco and New York. The city&apos;s unique combination of deep financial services expertise, world-class universities, a supportive regulatory environment, and access to the broader European market has created an app development ecosystem that punches far above its weight.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, London leads the world in fintech innovation. The FCA&apos;s regulatory sandbox has enabled companies like Revolut, Monzo, and Wise to test groundbreaking financial products before full launch, creating a flywheel of fintech talent and capital that continues to accelerate. Beyond fintech, London&apos;s digital health sector is booming, driven by NHS digital transformation initiatives and a growing ecosystem of healthtech startups.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated the most impactful app development companies in the London market to compile this definitive ranking of the <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Top 10 App Development Companies in London</strong> for 2026.
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
                      Codazz leads the London app development market by combining North American engineering scale with deep expertise in the fintech, healthtech, and enterprise verticals that London businesses demand. With over 500+ successful product launches globally, Codazz has built a strong portfolio of regulated financial applications, digital health platforms, and cross-border commerce systems that serve the UK and European markets.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Their engineering teams bring critical expertise in FCA-compliant app architectures, GDPR-compliant data handling, Open Banking API integration, and PSD2 strong customer authentication. They build using React Native and Flutter for rapid cross-platform deployment, backed by microservices architectures that handle the real-time transaction volumes London&apos;s fintech companies require.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      For London fintech startups navigating the FCA sandbox, enterprises digitalising their operations, and healthtech companies building NHS-integrated platforms, Codazz is the engineering partner that understands both the technology and the regulatory landscape.
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
                        Key Metric: 500+ Product Launches | FinTech & Regulated App Experts
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'revolut', name: 'Revolut', category: 'FinTech Super App',
                    emoji: '💳', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'London-born neobank, 35M+ customers globally',
                    paragraphs: [
                      'Revolut is London\'s most valuable fintech company and arguably the most ambitious financial super app on the planet. What started as a currency exchange card has evolved into a comprehensive financial platform offering banking, crypto trading, stock investing, insurance, and travel services. Their mobile engineering team processes millions of transactions daily across 35+ countries.',
                      'Revolut\'s engineering culture is legendary for its speed. They ship features at a pace that traditional banks cannot comprehend, with continuous deployment pipelines that push updates multiple times per day. Their mobile app is a masterclass in fintech UX, making complex financial operations feel simple and instant.',
                    ],
                  },
                  {
                    num: '03', id: 'monzo', name: 'Monzo', category: 'Digital Banking',
                    emoji: '🏦', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'UK challenger bank, 8M+ account holders',
                    paragraphs: [
                      'Monzo is the UK\'s most beloved challenger bank, with over 8 million account holders who chose a coral-coloured card over their traditional high street bank. Their mobile-first engineering approach has set the standard for digital banking experiences worldwide. Real-time spending notifications, instant money splitting, salary sorting, and budgeting tools were all pioneered by Monzo\'s London engineering team.',
                      'What makes Monzo remarkable from an engineering perspective is their commitment to transparency. They publish detailed engineering blog posts about their infrastructure decisions, making them a crucial contributor to London\'s broader fintech knowledge base.',
                    ],
                  },
                  {
                    num: '04', id: 'wise', name: 'Wise', category: 'Global Payments',
                    emoji: '🌍', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'International money transfers, 16M+ customers',
                    paragraphs: [
                      'Wise (formerly TransferWise) has fundamentally disrupted international money transfers from its London headquarters. Their mobile app processes over $10 billion in cross-border payments monthly, using a clever peer-to-peer matching system that dramatically reduces fees compared to traditional banks. Their engineering team has built one of the most sophisticated multi-currency financial platforms in existence.',
                    ],
                  },
                  {
                    num: '05', id: 'deliveroo', name: 'Deliveroo', category: 'Marketplace',
                    emoji: '🚴', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Food & grocery delivery across 10+ countries',
                    paragraphs: [
                      'London-headquartered Deliveroo has built one of Europe\'s most technically sophisticated marketplace platforms. Their mobile apps coordinate a three-sided marketplace of restaurants, riders, and customers in real time, using machine learning to optimize delivery routes, predict order volumes, and personalize restaurant recommendations. Their engineering team handles the enormous complexity of operating across different regulatory environments in 10+ countries.',
                    ],
                  },
                  {
                    num: '06', id: 'babylon-health', name: 'Babylon Health', category: 'Digital Health',
                    emoji: '🏥', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'AI-powered healthcare & NHS partnerships',
                    paragraphs: [
                      'Babylon Health represents London\'s growing strength in digital health technology. Their AI-powered platform enables patients to check symptoms, book GP appointments, and access healthcare services through their mobile app. Their partnership with the NHS has given them access to one of the world\'s largest healthcare datasets, enabling them to build AI diagnostic tools that are genuinely advancing the state of digital medicine.',
                    ],
                  },
                  {
                    num: '07', id: 'checkout-com', name: 'Checkout.com', category: 'Payment Infra',
                    emoji: '💰', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Enterprise payment processing, $40B+ valuation',
                    paragraphs: [
                      'Checkout.com is London\'s payment infrastructure giant, processing payments for some of the world\'s largest companies including Sony, Klarna, and Shein. Valued at over $40 billion, their engineering team has built a payment processing platform that handles enterprise-scale transaction volumes with the reliability and security that global commerce demands. Their mobile SDKs are used by thousands of apps worldwide.',
                    ],
                  },
                  {
                    num: '08', id: 'starling-bank', name: 'Starling Bank', category: 'Challenger Bank',
                    emoji: '⭐', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Award-winning digital bank, profitable since 2022',
                    paragraphs: [
                      'Starling Bank stands out among London\'s challenger banks as the first to achieve sustainable profitability. Founded by Anne Boden, their engineering team has built a complete banking platform from scratch, including current accounts, business accounts, lending, and a marketplace of financial products. Their mobile app consistently wins "Best Banking App" awards, and their Banking-as-a-Service platform powers other fintechs.',
                    ],
                  },
                  {
                    num: '09', id: 'improbable', name: 'Improbable', category: 'Metaverse Tech',
                    emoji: '🌐', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Spatial computing & virtual world infrastructure',
                    paragraphs: [
                      'Improbable is building the infrastructure for virtual worlds and spatial computing from its London headquarters. Their technology enables massive-scale simulated environments that can support thousands of concurrent users with physics-accurate interactions. While the metaverse hype has cooled, Improbable\'s engineering in distributed computing and real-time simulation remains cutting-edge, with applications in defence, urban planning, and entertainment.',
                    ],
                  },
                  {
                    num: '10', id: 'gousto', name: 'Gousto', category: 'FoodTech',
                    emoji: '🍽️', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'AI-powered meal kit platform, 1M+ active subscribers',
                    paragraphs: [
                      'Gousto has built the UK\'s leading meal kit platform with over 1 million active subscribers. Their mobile app uses AI to personalise menu recommendations, predict demand to minimise food waste, and optimise supply chain logistics across their fulfilment centres. Their engineering team has solved the complex challenge of managing fresh food inventory in real time while maintaining the seamless ordering experience that drives customer retention.',
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

                {/* Why London section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why London for App Development?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    London offers a unique combination of advantages that make it one of the world&apos;s premier locations for app development. The FCA&apos;s regulatory sandbox has created the most innovation-friendly environment for fintech in the world, allowing startups to test financial products with real customers under regulatory oversight before committing to full compliance.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The NHS provides a massive addressable market for digital health applications, with active programmes to digitise patient care, prescription management, and telehealth services. London&apos;s healthtech ecosystem benefits from this institutional demand in ways that US cities simply cannot replicate.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Post-Brexit, London has actually strengthened its position as a global tech hub. The UK&apos;s new visa programmes have made it easier to attract international engineering talent, and the city&apos;s central time zone enables collaboration with teams across North America, Europe, and Asia. With Imperial College, UCL, Oxford, and Cambridge providing world-class AI and computer science research, London&apos;s talent pipeline is among the strongest globally.
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
                    Conclusion: Choosing Your London Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    London&apos;s app development ecosystem is the strongest in Europe and rivals the best in the world. The companies on this list represent the pinnacle of fintech engineering, digital health innovation, and consumer app excellence.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For companies looking to build regulated fintech products, NHS-integrated health platforms, or consumer apps targeting the European market, Codazz leads this list by combining global engineering scale with the deep regulatory and compliance expertise that London&apos;s market demands.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    When selecting your London development partner, prioritise teams that understand FCA compliance, GDPR, Open Banking standards, and the unique requirements of building apps for the UK and European markets.
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
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)\.]+/g, '-').replace(/-$/, '')}`} style={{
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
                }}>Build Your App in London</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  FinTech-Grade Engineering for London&apos;s Most Ambitious Companies.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Build FCA-compliant fintech apps, NHS-integrated health platforms, and enterprise solutions with Codazz. Engineering excellence meets regulatory expertise.
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
