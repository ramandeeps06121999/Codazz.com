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
  { id: 'why-costs-differ', label: 'Why Canadian Costs Differ', emoji: '🍁' },
  { id: 'cost-breakdown', label: 'Cost Breakdown by Type', emoji: '💰' },
  { id: 'factors-affecting-cost', label: 'Factors That Affect Cost', emoji: '⚙️' },
  { id: 'city-comparison', label: 'Toronto vs Vancouver vs Others', emoji: '🏙️' },
  { id: 'canadian-vs-offshore', label: 'Canadian vs Offshore', emoji: '🇨🇦' },
  { id: 'hidden-costs', label: 'Hidden Costs', emoji: '🔍' },
  { id: 'codazz-advantage', label: 'The Codazz Advantage', emoji: '🚀' },
  { id: 'getting-started', label: 'Getting Started', emoji: '📍' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026 Guide)', category: 'Business', readTime: '10 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top Software Development Companies in the USA (2026)', category: 'Business', readTime: '9 min' },
];

export default function AppDevelopmentCostCanadaClient() {
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
              src="/blog_images/app-development-cost-canada.jpg"
              alt="App development cost in Canada"
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 18, 2026</span>
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
              How Much Does App Development Cost in Canada? (2026 Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A transparent, data-driven breakdown of mobile app development costs in Canada for 2026. From simple MVPs to complex enterprise platforms, here is what Canadian businesses should actually expect to pay.
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

                {/* Why Canadian Costs Are Different */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-costs-differ">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why Canadian App Development Costs Are Different</h2>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    If you have been researching mobile app development costs online, most of the numbers you have seen are quoted in US dollars from American agencies. That can be deeply misleading for Canadian businesses. The Canadian app development market operates in its own economic ecosystem, and understanding the differences is critical before you sign a contract or set a budget.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Canada has emerged as one of the top five global tech hubs. Toronto alone now ranks as the third-largest tech market in North America behind only San Francisco and New York, with over 400,000 tech workers across the Greater Toronto Area. Vancouver, Montreal, and Ottawa round out a national ecosystem that attracts top-tier engineering talent from around the world, thanks in part to Canada&apos;s immigration-friendly policies and world-class universities like Waterloo, U of T, and UBC.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The result? Canadian businesses have access to exceptional development talent at rates that are <strong style={{ color: '#ffffff' }}>20-35% lower than comparable American agencies</strong>, largely due to the CAD/USD exchange rate and lower overhead costs. A senior full-stack developer in Toronto earns an average of $135,000 CAD, compared to $180,000 USD ($245,000 CAD) for the same role in San Francisco.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    But &ldquo;cheaper&rdquo; does not mean &ldquo;cheap.&rdquo; Building a quality mobile application in Canada is still a significant investment. The federal SR&ED tax credit programme can offset 15-35% of eligible R&D expenditures, and provincial incentives like the Ontario Interactive Digital Media Tax Credit (OIDMTC) further reduce the effective cost. These are advantages that American businesses simply do not have access to.
                  </p>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>App Development Cost Breakdown by Type (2026 CAD)</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is what you should expect to pay a reputable Canadian agency in 2026. These numbers are in Canadian dollars and reflect all-in costs including discovery, design, development, QA testing, and initial deployment to the App Store and Google Play.
                  </p>

                  {/* Simple App / MVP */}
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
                    }}>$25,000 &ndash; $50,000 CAD</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      This tier covers straightforward applications with core functionality. Think a single-platform MVP with user authentication, basic CRUD operations, a clean UI, and integration with one or two third-party APIs. Examples include a basic booking app for a local Toronto service business, a simple e-commerce storefront, or a content-driven utility app. At this budget, you are validating your idea with real users before committing to a full build. Most Canadian startups should start here.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['5-8 screens', 'Single platform', 'Basic auth', 'Simple backend', '6-10 weeks'].map(tag => (
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
                      }}>Mid-Complexity App</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#60a5fa',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>$50,000 &ndash; $150,000 CAD</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      This is where most serious Canadian business applications land. Multi-platform apps (iOS + Android) with custom UI/UX design, real-time features like messaging or push notifications, Stripe or Moneris payment processing, admin dashboards, and moderate backend complexity. Think a marketplace app connecting Canadian service providers, a health and wellness platform with booking and tracking, or a B2B SaaS mobile companion app. This tier typically requires a team of 4-6 people including designers, developers, and a project manager.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['15-30 screens', 'iOS + Android', 'Payment integration', 'Real-time features', 'Admin panel', '12-20 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(96,165,250,0.08)', color: 'rgba(255,255,255,0.4)',
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
                      }}>Enterprise App</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#a78bfa',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>$150,000 &ndash; $500,000+ CAD</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Enterprise-grade applications with advanced architecture built for scale. AI/ML integration, complex data pipelines, microservices backend, advanced security requirements (PIPEDA compliance, SOC 2), offline-first capabilities, and custom hardware integrations (IoT, Bluetooth, NFC). Think a Canadian fintech platform handling regulated financial transactions, a healthcare records system compliant with provincial health data regulations, or an enterprise logistics solution for cross-border Canada-US operations. These projects typically run 6-18 months with teams of 8-15 people.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['50+ screens', 'AI/ML features', 'Microservices', 'PIPEDA compliance', 'IoT integration', 'Custom APIs', '6-18 months'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(167,139,250,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(167,139,250,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Factors Affecting Cost */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>6 Factors That Directly Affect Your App Cost in Canada</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Two apps that look identical on the surface can differ by hundreds of thousands of dollars in development cost. Understanding these variables will help you make smarter decisions about where to invest and where to cut back.
                  </p>

                  {[
                    { num: '01', title: 'Platform Choice (iOS, Android, or Cross-Platform)', desc: 'Building separate native iOS (Swift) and Android (Kotlin) apps nearly doubles your development cost compared to a cross-platform solution using Flutter or React Native. In 2026, cross-platform frameworks have matured dramatically. For 90% of Canadian business apps, Flutter delivers native-quality performance at 30-40% lower cost. We only recommend separate native builds for graphics-intensive games or apps requiring deep hardware integration.' },
                    { num: '02', title: 'Features & Complexity', desc: 'Every feature has a cost multiplier. A basic user login with email and password takes hours. Social login with Apple, Google, and Facebook takes days. Real-time chat, video calling, payment processing, and offline sync are exponentially more expensive than static content displays. AI-powered features like recommendation engines or natural language processing can add $30,000-$80,000 CAD to your budget.' },
                    { num: '03', title: 'Design Requirements', desc: 'A basic Material Design or iOS Human Interface Guidelines-compliant app costs significantly less than a fully custom design system with micro-animations, custom illustrations, branded interactions, and dark mode support. Premium UX design for a Canadian app typically runs $15,000-$45,000 CAD depending on screen count and complexity.' },
                    { num: '04', title: 'Backend Infrastructure', desc: 'A serverless Firebase or Supabase backend is far cheaper to build than a custom microservices architecture on AWS or GCP. But if you need to handle hundreds of thousands of concurrent Canadian users, process sensitive financial data, or maintain data residency in Canada (a requirement for many regulated industries), cutting corners on infrastructure will cost you significantly more down the line.' },
                    { num: '05', title: 'Third-Party Integrations', desc: 'Each API integration (Stripe, Moneris, Twilio, Salesforce, Shopify, Interac) adds development time. Simple REST API integrations take 2-5 days each. Complex integrations with legacy enterprise systems or Canadian banking APIs can take weeks and become the single most expensive line item on a project.' },
                    { num: '06', title: 'AI/ML Features', desc: 'The demand for AI-powered mobile apps has exploded in Canada. Adding features like intelligent search, personalized recommendations, computer vision, or conversational AI chatbots requires specialized ML engineers whose rates are 30-50% higher than standard developers. A basic AI feature might add $20,000 CAD. A sophisticated ML pipeline with custom model training can add $100,000+ CAD.' },
                  ].map(factor => (
                    <div key={factor.num} style={{
                      display: 'flex', gap: 20, marginBottom: 24,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <span style={{
                        fontSize: 14, fontWeight: 800, color: 'rgba(34,197,94,0.4)',
                        flexShrink: 0, width: 28,
                      }}>{factor.num}</span>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{factor.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{factor.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* City Comparison */}
                <div className="reveal" style={{ marginBottom: 56 }} id="city-comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Toronto vs Vancouver vs Other Canadian Cities: Developer Rates Compared</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Not all Canadian cities are created equal when it comes to app development. Location affects everything from hourly rates to the depth of available talent. Here is how the major Canadian tech markets stack up in 2026.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 16, marginBottom: 28 }}>
                    {[
                      { city: 'Toronto', rate: '$150 - $250/hr', talent: 'Largest talent pool in Canada', strengths: 'Fintech, AI, enterprise', color: '#34d399' },
                      { city: 'Vancouver', rate: '$140 - $230/hr', talent: 'Strong West Coast tech scene', strengths: 'Gaming, VR/AR, cleantech', color: '#60a5fa' },
                      { city: 'Montreal', rate: '$120 - $200/hr', talent: 'AI research capital', strengths: 'AI/ML, gaming, biotech', color: '#a78bfa' },
                      { city: 'Ottawa', rate: '$130 - $210/hr', talent: 'Government & enterprise focus', strengths: 'Security, GovTech, telecom', color: '#f59e0b' },
                      { city: 'Calgary / Edmonton', rate: '$110 - $180/hr', talent: 'Growing tech ecosystem', strengths: 'Energy tech, logistics, agtech', color: '#ec4899' },
                      { city: 'Waterloo', rate: '$130 - $220/hr', talent: 'World-class CS graduates', strengths: 'Deep tech, SaaS, R&D', color: '#06b6d4' },
                    ].map(c => (
                      <div key={c.city} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 20, padding: 24,
                      }}>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: c.color, marginBottom: 8 }}>{c.city}</h3>
                        <p style={{ fontSize: 18, fontWeight: 800, color: '#ffffff', marginBottom: 12 }}>{c.rate}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 6, lineHeight: 1.6 }}>{c.talent}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>Strengths: {c.strengths}</p>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Toronto remains the undisputed leader</strong> for app development in Canada. The city&apos;s tech ecosystem employs over 400,000 workers, hosts the headquarters of major tech companies like Shopify and Wealthsimple, and produces more tech talent than any other Canadian city. The University of Toronto, Ryerson (now TMU), and the proximity to the University of Waterloo create a pipeline of world-class engineers.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    However, do not overlook Montreal for AI-heavy projects. With institutions like Mila (the Quebec AI Institute) and researchers like Yoshua Bengio, Montreal has become the de facto capital of AI research in Canada. If your app relies heavily on machine learning, a Montreal-based team or a hybrid Toronto-Montreal engagement can deliver exceptional results.
                  </p>
                </div>

                {/* Canadian vs Offshore */}
                <div className="reveal" style={{ marginBottom: 56 }} id="canadian-vs-offshore">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Canadian Agencies vs Offshore: The Real Math</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    The most common question we hear from Canadian founders: &ldquo;Why would I pay $150-$250/hr CAD for a Toronto developer when I can hire offshore for $25-$75/hr?&rdquo; It is a completely fair question. Here is the honest, no-BS answer based on our experience rescuing dozens of failed offshore projects.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20, marginBottom: 28,
                  }}>
                    <div style={{
                      background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                      borderRadius: 20, padding: 28,
                    }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>Canadian Agencies</h3>
                      <p style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>$150 &ndash; $250/hr CAD</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {['Same timezone (EST/PST)', 'PIPEDA compliance built-in', 'Accountable under Canadian law', 'IP protection under Canadian law', 'In-person meetings possible', 'Understanding of Canadian market', 'SR&ED tax credit eligible', 'Bilingual teams available'].map(item => (
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
                      <p style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>$25 &ndash; $75/hr CAD</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {['8-12 hour timezone difference', 'May not understand PIPEDA/Canadian regs', 'Limited legal recourse from Canada', 'IP ownership can be murky', 'Communication barriers', 'No SR&ED eligibility', 'Higher project management overhead', 'Cultural context gaps'].map(item => (
                          <p key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ color: '#f87171', fontSize: 14 }}>&#10007;</span> {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Let us run the real numbers on a mid-complexity app. An offshore team might quote you $45,000 CAD. A Canadian agency quotes $120,000 CAD. The offshore option looks like a no-brainer, right? Now factor in the <strong style={{ color: '#ffffff' }}>total cost of ownership</strong>: 3-4 rounds of rework due to miscommunication ($15,000-$25,000), hiring a local consultant to fix PIPEDA compliance issues ($10,000-$20,000), project management overhead from managing an 11-hour timezone gap ($8,000-$15,000), and rebuilding modules that were not built to Canadian accessibility standards ($10,000-$20,000).
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Your $45,000 offshore project just became a $90,000-$125,000 project, and it took twice as long. We have seen this pattern repeat with over 40 Canadian companies that came to us after a failed offshore engagement. The initial savings evaporate when you account for rework, compliance remediation, and opportunity cost. <strong style={{ color: '#ffffff' }}>Cheap is expensive.</strong>
                  </p>
                </div>

                {/* Hidden Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hidden-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Hidden Costs Most Canadian Agencies Won&apos;t Tell You About</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    The development quote is only the beginning. Here are the ongoing costs that catch most Canadian business owners off guard. Budget for these from day one, or your &ldquo;affordable&rdquo; app will drain your runway faster than you expect.
                  </p>

                  {[
                    { title: 'App Store Fees', cost: '$99 - $299 USD/yr', desc: 'Apple charges $99 USD/year for a standard developer account and $299 USD/year for enterprise distribution. Google charges a one-time $25 USD fee. If you are a Canadian startup, remember these are billed in USD, adding another 35% due to exchange rates.' },
                    { title: 'Cloud Hosting & Infrastructure', cost: '$200 - $5,000+/mo', desc: 'Your app needs servers. AWS Canada (ca-central-1 region in Montreal) or GCP northamerica-northeast1 hosting costs scale with your user base. A small app might cost $200/month, but a scaled platform with real-time features serving Canadian users can easily hit $5,000+/month. Data residency in Canada is mandatory for many regulated industries.' },
                    { title: 'Ongoing Maintenance', cost: '15-20% of build/yr', desc: 'iOS and Android release major updates annually. Each requires testing and potential code changes. Add security patches, dependency updates, bug fixes, and library maintenance. Budget 15-20% of your initial build cost per year. On a $100,000 app, that is $15,000-$20,000 annually just to keep the lights on.' },
                    { title: 'PIPEDA & Privacy Compliance', cost: '$5,000 - $25,000', desc: 'Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) governs how you collect, use, and store personal data. If you operate in Quebec, you also need to comply with Law 25 (Quebec&apos;s privacy legislation). Proper compliance requires privacy impact assessments, consent management systems, and data handling procedures.' },
                    { title: 'Feature Updates & Iteration', cost: '$2K - $20K/month', desc: 'Your version one is never your final product. User feedback, market changes, and competitive pressure will drive continuous iteration. Most successful Canadian apps budget for at least one significant update per quarter, plus ongoing minor improvements.' },
                    { title: 'Marketing & User Acquisition', cost: '$5K - $50K+/month', desc: 'Building the app is only half the battle. App Store Optimization (ASO), paid acquisition campaigns on Canadian channels, content marketing, and influencer partnerships are ongoing investments. Customer acquisition costs in Canada average $3.50-$8.00 CAD per install for non-gaming apps.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                      padding: '20px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.03)',
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

                {/* Codazz Advantage */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz-advantage">
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
                      }}>🍁</div>
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
                        }}>How Codazz Delivers More for Less</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz is headquartered in <strong style={{ color: '#ffffff' }}>Toronto</strong>, with additional offices in New York and Dubai. This is not a coincidence. Our Toronto HQ gives us access to Canada&apos;s deepest engineering talent pool, while our global presence allows us to assemble the right team for every project regardless of geography. Every project is led by senior Toronto-based architects who ensure quality, compliance, and clear communication.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      We operate on a <strong style={{ color: '#ffffff' }}>fixed-price model</strong> for 90% of our projects. After a thorough discovery phase (which we offer free of charge), we provide a detailed scope document with a locked-in price. No hourly billing surprises. No scope creep charges without written approval. Every feature, every screen, and every integration is documented with its associated cost before a single line of code is written.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Our <strong style={{ color: '#ffffff' }}>8-week MVP programme</strong> is designed specifically for Canadian startups and SMBs who want to validate their app idea without committing to a six-figure budget. For a fixed price starting at $35,000 CAD, we deliver a production-ready MVP with core features, clean design, and deployment to both app stores. Over 60% of our MVP clients go on to commission a full build within six months.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: '#ffffff' }}>Real example:</strong> A Toronto-based proptech startup approached us after receiving quotes of $180,000-$240,000 CAD from two Bay Street agencies. We delivered the same scope, a multi-platform real estate marketplace with AI-powered property matching and Interac payment integration, for $128,000 CAD. Delivered on time. On budget. The app hit 10,000 downloads in its first quarter.
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
                        Toronto HQ &bull; Fixed-Price Model &bull; 8-Week MVP Programme &bull; No Hidden Fees
                      </span>
                    </div>
                  </div>
                </div>

                {/* Getting Started */}
                <div className="reveal" style={{ marginBottom: 56 }} id="getting-started">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Getting Started: How to Get an Accurate Quote</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Ready to move forward with your app? Here is exactly how the process works when you engage with Codazz. No sales gimmicks, no pressure, just a structured approach to getting you real numbers.
                  </p>

                  {[
                    { step: '01', title: 'Share Your Idea', desc: 'Fill out our contact form or book a call. Tell us what you want to build, who your users are, and what problem you are solving. You do not need a detailed spec. A napkin sketch and a clear vision are enough to get started.' },
                    { step: '02', title: 'Free Discovery Session', desc: 'We schedule a 60-minute discovery call with a senior architect from our Toronto team. We will map out your core features, identify technical risks, and discuss your timeline and budget expectations. This call is completely free with no obligation.' },
                    { step: '03', title: 'Detailed Proposal (48 Hours)', desc: 'Within 48 hours of our discovery call, you receive a comprehensive proposal. This includes a feature-by-feature cost breakdown, a recommended tech stack, a project timeline with milestones, and a fixed-price quote. No vague estimates. Real numbers you can take to your board or investors.' },
                    { step: '04', title: 'Kickoff & Build', desc: 'Once approved, we start building. You get access to a shared project dashboard, weekly progress demos, and a direct Slack channel with your development team. We follow two-week sprints with deliverable milestones so you can see progress every step of the way.' },
                  ].map(item => (
                    <div key={item.step} style={{
                      display: 'flex', gap: 20, marginBottom: 24,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <span style={{
                        fontSize: 14, fontWeight: 800, color: '#22c55e',
                        flexShrink: 0, width: 28,
                      }}>{item.step}</span>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)',
                    marginTop: 28,
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Bottom line:</strong> You do not need to have everything figured out before reaching out. The best apps are built through collaborative discovery between your domain expertise and our technical expertise. Whether you are a first-time founder in Toronto or an enterprise CTO in Vancouver, the process starts with a simple conversation.
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 300+ bespoke product launches globally.
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
                }}>Ready to Build?</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get a Free App Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop guessing what your app will cost. Share your idea with our Toronto team and receive a detailed, fixed-price proposal within 48 hours. No commitment. No sales pitch. Just real numbers from a Canadian agency that understands your market.
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
