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
  { num: 1, name: 'Codazz', category: 'Premium App Studio', emoji: '🍁', metric: 'iOS, Android, Flutter & React Native', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Mapletechlabs', category: 'Mobile-First Agency', emoji: '🏗️', metric: 'Fintech, Healthtech & On-Demand Apps', accentColor: '#3b82f6', bgColor: 'rgba(59,130,246,' },
  { num: 3, name: 'TML', category: 'Rapid Prototyping', emoji: '🚀', metric: 'Media, Social & E-Commerce Mobile', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Townmedialabs', category: 'UX-Driven Studio', emoji: '🎨', metric: 'Real-Time Features & Mobile Payments', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 5, name: 'Fueled', category: 'Venture-Backed Apps', emoji: '⚡', metric: 'Award-winning mobile products', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 6, name: 'Savvy Apps', category: 'Strategy & Dev', emoji: '🧠', metric: 'Strategy-led app development', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 7, name: 'Worry Free Labs', category: 'Full-Service Dev', emoji: '🛡️', metric: 'End-to-end product development', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Dom & Tom', category: 'Digital Innovation', emoji: '💡', metric: 'Emerging tech & enterprise mobile', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 9, name: 'Clearbridge Mobile', category: 'Enterprise Mobile', emoji: '🏢', metric: 'Enterprise-grade mobile solutions', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 10, name: 'Rootstrap', category: 'Growth Engineering', emoji: '🌱', metric: 'Growth-focused mobile development', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const comparisonData = [
  { rank: 1, company: 'Codazz', platform: 'iOS, Android, Flutter, React Native', clients: 'Startups, Enterprises, SMBs', avgProject: '$50K - $500K+', rating: '4.9/5' },
  { rank: 2, company: 'Mapletechlabs', platform: 'Native iOS/Android, React Native', clients: 'Fintech Startups, Health Orgs', avgProject: '$40K - $300K', rating: '4.8/5' },
  { rank: 3, company: 'TML', platform: 'React Native, Swift, Kotlin', clients: 'Media Companies, E-Commerce', avgProject: '$35K - $250K', rating: '4.8/5' },
  { rank: 4, company: 'Townmedialabs', platform: 'Flutter, Native iOS/Android', clients: 'Consumer Brands, Startups', avgProject: '$30K - $200K', rating: '4.7/5' },
  { rank: 5, company: 'Fueled', platform: 'iOS, Android, React Native', clients: 'VC-Backed Startups, Brands', avgProject: '$75K - $500K+', rating: '4.7/5' },
  { rank: 6, company: 'Savvy Apps', platform: 'iOS, Android, Web', clients: 'Enterprises, Government', avgProject: '$50K - $400K', rating: '4.6/5' },
  { rank: 7, company: 'Worry Free Labs', platform: 'React Native, Flutter, Native', clients: 'Startups, Mid-Market', avgProject: '$25K - $200K', rating: '4.6/5' },
  { rank: 8, company: 'Dom & Tom', platform: 'iOS, Android, AR/VR, IoT', clients: 'Fortune 500, Enterprises', avgProject: '$75K - $500K+', rating: '4.6/5' },
  { rank: 9, company: 'Clearbridge Mobile', platform: 'Native iOS/Android, Flutter', clients: 'Financial Services, Healthcare', avgProject: '$100K - $500K+', rating: '4.5/5' },
  { rank: 10, company: 'Rootstrap', platform: 'React Native, iOS, Android', clients: 'Startups, Scale-Ups', avgProject: '$50K - $300K', rating: '4.5/5' },
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
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/app-development-companies-new-york.jpg"
              alt="Top app development companies in New York City skyline"
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
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Updated Mar 2026</span>
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
              Top 10 Mobile App Development Companies in New York (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              New York City is the beating heart of American innovation. We vetted dozens of agencies and studios to find the 10 best mobile app development companies serving the NYC market in 2026.
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

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    New York City is far more than Wall Street and Broadway. Over the past decade, the five boroughs have become one of the world&apos;s most dynamic technology ecosystems. Anchored by world-class research institutions like NYU, Columbia, and Cornell Tech, and fueled by the densest concentration of venture capital outside Silicon Valley, NYC is where ambitious founders and Fortune 500 enterprises turn when they need mobile apps that perform at scale.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The city&apos;s unique advantage lies in its cross-industry expertise. From fintech firms in Midtown to healthtech startups in the Flatiron District, from media giants in Hudson Yards to e-commerce disruptors in SoHo, New York app developers work across every vertical imaginable. That breadth of experience translates into mobile products that are smarter, more user-centric, and built for the real world.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Whether you are a seed-stage startup looking to build an MVP, a mid-market company modernizing legacy workflows, or an enterprise launching a consumer-facing super app, choosing the right development partner is the single most important decision you will make. We evaluated dozens of New York-area agencies and product studios on technical depth, design quality, client portfolio, scalability, and post-launch support to bring you this definitive ranking of the <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Top 10 Mobile App Development Companies in New York</strong> for 2026.
                  </p>
                </div>

                {/* ── KEY TAKEAWAYS BOX ── */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(59,130,246,0.06) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                      </svg>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>Key Takeaways</h3>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {[
                        'Codazz leads the NYC market with pixel-perfect cross-platform apps built in Flutter and React Native, backed by a global engineering team.',
                        'Mapletechlabs is the go-to agency for NYC startups in fintech, healthtech, and on-demand services requiring native mobile performance.',
                        'TML (Tech Media Labs) excels at rapid prototyping and enterprise-grade code quality, especially for media and social platforms.',
                        'Average project costs range from $25K for MVPs to $500K+ for enterprise-grade applications across the top NYC firms.',
                        'Cross-platform frameworks (Flutter, React Native) dominate the NYC market, cutting development time by 30-40% without sacrificing quality.',
                        'The best NYC agencies combine local market knowledge with global engineering talent for cost-effective, high-quality delivery.',
                      ].map((item, i) => (
                        <li key={i} style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── COMPANY #1: CODAZZ (Featured) ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
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
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Premium App Studio</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz is a premium app development studio delivering iOS, Android, and cross-platform apps using Flutter and React Native. Known for pixel-perfect designs and blazing performance, Codazz serves the NYC market with global engineering talent that operates across time zones for continuous delivery cycles.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What sets Codazz apart is the depth of their full-stack capability. They don&apos;t just ship a front-end; they architect the entire product ecosystem, from scalable backend APIs and cloud infrastructure on AWS and GCP, to CI/CD pipelines, real-time analytics dashboards, and post-launch growth engineering. Their team integrates machine learning and AI features directly into mobile applications, giving clients a competitive edge that template-based agencies cannot match.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      With 500+ successful product launches spanning fintech, healthtech, e-commerce, SaaS, and enterprise mobility, Codazz has built a reputation for turning ambitious app ideas into market-leading products. Their transparent fixed-price and dedicated-team engagement models make them accessible to startups and enterprises alike.
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
                        500+ Product Launches | iOS, Android, Flutter & React Native | 4.9/5 Rating
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── COMPANIES #2-#10 ── */}
                {[
                  {
                    num: '02', id: 'mapletechlabs', name: 'Mapletechlabs', category: 'Mobile-First Agency',
                    emoji: '🏗️', accentColor: '#3b82f6', bgColor: 'rgba(59,130,246,',
                    metric: 'Fintech, Healthtech & On-Demand Apps',
                    paragraphs: [
                      'Mapletechlabs is a mobile-first development agency building high-performance native and cross-platform apps for NYC startups and enterprises. They are specialists in fintech, healthtech, and on-demand service apps, with a deep understanding of the regulatory and compliance requirements that come with these verticals.',
                      'Their engineering team excels at building apps that handle complex real-time data flows, whether it is live stock tickers, patient vitals monitoring, or driver-rider matching algorithms. Mapletechlabs combines rigorous QA automation with agile sprint cycles to deliver production-ready apps on aggressive timelines, making them a favorite among VC-backed NYC startups racing to market.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML (Tech Media Labs)', category: 'Rapid Prototyping',
                    emoji: '🚀', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Media, Social & E-Commerce Mobile',
                    paragraphs: [
                      'TML is a NYC-focused app development firm combining rapid prototyping with enterprise-grade code quality. They have a strong portfolio in media apps, social platforms, and e-commerce mobile experiences, having worked with some of the city\'s most recognizable digital brands.',
                      'What makes TML stand out is their speed-to-quality ratio. They can take an idea from whiteboard sketch to interactive prototype in under two weeks, then iterate toward a production build without accumulating technical debt. Their proprietary component library accelerates development by 40%, and their post-launch analytics integration ensures every feature decision is backed by real user data.',
                    ],
                  },
                  {
                    num: '04', id: 'townmedialabs', name: 'Townmedialabs', category: 'UX-Driven Studio',
                    emoji: '🎨', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Real-Time Features & Mobile Payments',
                    paragraphs: [
                      'Townmedialabs is a user-experience driven app studio known for building beautifully crafted mobile apps that scale. Their expertise in real-time features, push notification systems, and mobile payment integrations makes them the ideal partner for consumer-facing products that demand flawless UX and rock-solid reliability.',
                      'Their design team conducts deep user research and usability testing before a single line of code is written, resulting in apps with industry-leading engagement metrics. Townmedialabs has a particular strength in building apps with complex real-time architectures, from live chat and collaboration tools to location-based services and streaming platforms.',
                    ],
                  },
                  {
                    num: '05', id: 'fueled', name: 'Fueled', category: 'Venture-Backed Apps',
                    emoji: '⚡', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Award-winning mobile products',
                    paragraphs: [
                      'Fueled is one of New York\'s most established mobile app development agencies, with a client roster that includes major brands, VC-backed startups, and celebrity ventures. Based in the Flatiron District, they specialize in building award-winning iOS and Android apps that consistently rank in the top charts.',
                      'Their strength lies in combining world-class design with deep technical execution. Fueled has been recognized by Apple, Google, and numerous industry awards for the quality of their work. They are best suited for companies with larger budgets who want a premium agency experience with white-glove service.',
                    ],
                  },
                  {
                    num: '06', id: 'savvy-apps', name: 'Savvy Apps', category: 'Strategy & Dev',
                    emoji: '🧠', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Strategy-led app development',
                    paragraphs: [
                      'Savvy Apps takes a strategy-first approach to mobile development. Before any design or code begins, they run intensive discovery workshops to validate the business model, map user journeys, and define success metrics. This makes them an ideal partner for enterprises and funded startups who want to minimize risk before committing a large budget to a build.',
                      'Their portfolio spans government agencies, healthcare organizations, and enterprise clients, reflecting their ability to navigate complex stakeholder environments and deliver apps that meet strict compliance and accessibility standards.',
                    ],
                  },
                  {
                    num: '07', id: 'worry-free-labs', name: 'Worry Free Labs', category: 'Full-Service Dev',
                    emoji: '🛡️', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'End-to-end product development',
                    paragraphs: [
                      'Worry Free Labs lives up to their name by offering truly end-to-end product development. From initial ideation and UX research through to development, QA, deployment, and ongoing maintenance, they handle every stage of the mobile app lifecycle under one roof.',
                      'Based in New York, they serve startups and mid-market companies with flexible engagement models. Their transparent communication style and detailed project dashboards give clients full visibility into progress, budgets, and timelines, earning them a reputation for being one of the most trustworthy agencies in the NYC market.',
                    ],
                  },
                  {
                    num: '08', id: 'dom-and-tom', name: 'Dom & Tom', category: 'Digital Innovation',
                    emoji: '💡', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Emerging tech & enterprise mobile',
                    paragraphs: [
                      'Dom & Tom is a New York-born digital product agency that pushes the boundaries of what mobile apps can do. They are early adopters of emerging technologies including AR/VR, IoT integrations, blockchain, and conversational AI, making them the go-to partner for innovation-focused enterprises.',
                      'With offices in New York and a global development team, they have delivered complex mobile solutions for Fortune 500 companies, government agencies, and high-growth startups. Their apps frequently incorporate cutting-edge features like spatial computing interfaces and real-time AI-powered personalization.',
                    ],
                  },
                  {
                    num: '09', id: 'clearbridge-mobile', name: 'Clearbridge Mobile', category: 'Enterprise Mobile',
                    emoji: '🏢', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Enterprise-grade mobile solutions',
                    paragraphs: [
                      'Clearbridge Mobile focuses on enterprise-grade mobile applications for industries where security, compliance, and scalability are non-negotiable. Serving the NYC financial services, healthcare, and insurance sectors, they build apps that handle sensitive data with bank-level security while delivering consumer-grade user experiences.',
                      'Their team includes certified security engineers and compliance specialists who ensure every app meets SOC 2, HIPAA, PCI-DSS, and other regulatory standards from day one.',
                    ],
                  },
                  {
                    num: '10', id: 'rootstrap', name: 'Rootstrap', category: 'Growth Engineering',
                    emoji: '🌱', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Growth-focused mobile development',
                    paragraphs: [
                      'Rootstrap rounds out our top 10 with a growth-engineering methodology that bakes analytics, A/B testing, and user acquisition strategies directly into the development process. They are particularly strong at helping startups and scale-ups go from MVP to product-market fit.',
                      'With a presence in New York and distributed teams, Rootstrap has worked with high-profile clients and celebrity-backed ventures. If your primary goal is getting to 10,000 users fast and iterating based on real data, Rootstrap is a strong contender for your development partner.',
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

                {/* ── COMPARISON TABLE ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison-table">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>NYC App Development Companies: Head-to-Head Comparison</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                          {['Rank', 'Company', 'Platform Focus', 'Key Clients', 'Avg Project Size', 'Rating'].map(header => (
                            <th key={header} style={{
                              padding: '14px 16px', textAlign: 'left',
                              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                              color: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.08)',
                              whiteSpace: 'nowrap',
                            }}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, i) => (
                          <tr key={row.company} style={{
                            background: i === 0 ? 'rgba(34,197,94,0.04)' : 'transparent',
                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                          }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>#{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.platform}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.clients}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{row.avgProject}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{row.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── WHY NEW YORK ── */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why New York for App Development?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    New York offers a unique combination of advantages for mobile app development that few cities on Earth can match. NYU, Columbia, and Cornell Tech are home to some of the world&apos;s top AI and computer science research programs, producing graduates who are immediately employable in machine learning, computer vision, and natural language processing.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The city&apos;s unparalleled access to venture capital, with over $35 billion invested in NYC startups annually, creates a flywheel effect: more funding attracts more talent, which produces better products, which attracts more funding. Fortune 500 headquarters dot Manhattan, providing enterprise clients who demand best-in-class mobile experiences. New York State also offers generous R&D tax credits and innovation incentives that reduce operational overhead for tech companies.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Combined with a thriving startup ecosystem anchored by incubators like TechStars NYC, Grand Central Tech, and the NYU Future Labs, the city continues to cement its position alongside Silicon Valley as America&apos;s premier tech hub. Whether you are building a fintech super app, a healthtech platform, or a consumer social product, New York has the talent, capital, and infrastructure to make it happen.
                  </p>
                </div>

                {/* ── RANKING METHODOLOGY ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="methodology">
                  <div style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="M9 14l2 2 4-4"/>
                      </svg>
                      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>Our Ranking Methodology</h2>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                      Our editorial team evaluated each company using a rigorous, multi-factor methodology designed to identify the app development partners that consistently deliver exceptional results for their clients. Here is how we scored each firm:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
                      {[
                        { title: 'Technical Excellence (25%)', desc: 'Code quality, architecture decisions, tech stack breadth, and ability to deliver native and cross-platform apps.' },
                        { title: 'Design & UX Quality (20%)', desc: 'UI polish, user research processes, accessibility compliance, and App Store / Play Store ratings of shipped products.' },
                        { title: 'Client Portfolio (20%)', desc: 'Diversity and caliber of clients served, industry verticals covered, and complexity of delivered projects.' },
                        { title: 'Scalability & Process (15%)', desc: 'Ability to scale teams, CI/CD maturity, QA automation, and DevOps infrastructure quality.' },
                        { title: 'Post-Launch Support (10%)', desc: 'Ongoing maintenance, monitoring, performance optimization, and client retention rates.' },
                        { title: 'Innovation & Thought Leadership (10%)', desc: 'Adoption of emerging tech, open-source contributions, industry recognition, and published case studies.' },
                      ].map((item) => (
                        <div key={item.title} style={{
                          padding: '20px', borderRadius: 12,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                          <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.title}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                        </div>
                      ))}
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
                      <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '8px 0' }} />
                      <a href="#comparison-table" style={{
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
                        <span style={{ fontSize: 14 }}>📊</span>
                        <span>Comparison Table</span>
                      </a>
                      <a href="#methodology" style={{
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
                        <span style={{ fontSize: 14 }}>📋</span>
                        <span>Methodology</span>
                      </a>
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
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
                }}>Build Your App in New York</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Your App Idea Deserves World-Class Engineering.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop settling for cookie-cutter apps built on templates. Let Codazz engineer a custom mobile experience that scales with your business, powered by New York&apos;s best talent.
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
