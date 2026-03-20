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
  { num: 1, name: 'Codazz', category: 'Full-Stack Engineering', emoji: '🍁', metric: 'Next.js, React Native, AI & Cloud-Native Architectures', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Mapletechlabs', category: 'SaaS & Enterprise', emoji: '🧩', metric: 'Microservices, Event-Driven Architecture & Real-Time Data', accentColor: '#3b82f6', bgColor: 'rgba(59,130,246,' },
  { num: 3, name: 'TML', category: 'Product Engineering', emoji: '🚀', metric: 'Lean MVP Development & Long-Term Technical Partnerships', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Townmedialabs', category: 'Full-Stack Development', emoji: '🎨', metric: 'E-Commerce, HealthTech & Energy-Tech Platforms', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 5, name: 'Mutual Mobile', category: 'Mobile & IoT', emoji: '📱', metric: 'Enterprise Mobile Apps & Connected Device Platforms', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 6, name: 'Headspring', category: 'Custom Software', emoji: '🔧', metric: 'Enterprise .NET Solutions & Digital Transformation', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Praxent', category: 'FinTech & InsurTech', emoji: '💳', metric: 'Financial Services UX Modernization & Legacy Migration', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Inventive', category: 'Design & Dev', emoji: '✨', metric: 'User-Centered Design & Full-Stack Product Builds', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Clearlink', category: 'MarTech & Data', emoji: '📊', metric: 'Marketing Technology Platforms & Data Analytics', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Konvoy Kegs', category: 'Smart Hardware + Software', emoji: '🤖', metric: 'IoT Tracking Systems & Supply Chain Software', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const comparisonData = [
  { rank: '#1', company: 'Codazz', coreTech: 'Next.js, React Native, AI, Cloud', bestFor: 'Enterprise products at startup speed', founded: '2018', rating: '4.9' },
  { rank: '#2', company: 'Mapletechlabs', coreTech: 'Node.js, Microservices, AWS', bestFor: 'Scalable SaaS & enterprise tools', founded: '2019', rating: '4.8' },
  { rank: '#3', company: 'TML', coreTech: 'React, Python, PostgreSQL', bestFor: 'Startup MVPs & product scaling', founded: '2017', rating: '4.8' },
  { rank: '#4', company: 'Townmedialabs', coreTech: 'React, Node, API Integrations', bestFor: 'E-commerce & healthtech platforms', founded: '2018', rating: '4.7' },
  { rank: '#5', company: 'Mutual Mobile', coreTech: 'Swift, Kotlin, React Native', bestFor: 'Enterprise mobile & IoT apps', founded: '2009', rating: '4.7' },
  { rank: '#6', company: 'Headspring', coreTech: '.NET, Azure, C#', bestFor: 'Enterprise digital transformation', founded: '2005', rating: '4.6' },
  { rank: '#7', company: 'Praxent', coreTech: 'React, .NET, Flutter', bestFor: 'FinTech & InsurTech modernization', founded: '2000', rating: '4.6' },
  { rank: '#8', company: 'Inventive', coreTech: 'React, Node, Figma', bestFor: 'Design-driven product development', founded: '2015', rating: '4.5' },
  { rank: '#9', company: 'Clearlink', coreTech: 'Python, React, BigQuery', bestFor: 'MarTech & analytics platforms', founded: '2003', rating: '4.5' },
  { rank: '#10', company: 'Konvoy Kegs', coreTech: 'IoT, Embedded, Cloud', bestFor: 'Smart hardware & supply chain', founded: '2016', rating: '4.4' },
];

const relatedPosts = [
  { slug: 'app-development-companies-new-york', title: 'Top App Development Companies in New York', category: 'Business', readTime: '8 min' },
  { slug: 'choose-software-development-company-usa', title: 'How to Choose a Software Development Company in the USA', category: 'Business', readTime: '9 min' },
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA?', category: 'Business', readTime: '10 min' },
];

export default function SoftwareDevelopmentCompaniesAustinClient() {
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
            src="/blog_images/software-development-companies-austin.jpg"
            alt="Top software development companies in Austin Texas 2026"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: 'clamp(16px, 3vw, 24px)',
            }}
          />
        </div>

        {/* -- ARTICLE HERO -- */}
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
              Top 10 Software Development Companies in Austin (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Austin has cemented its position as one of America&apos;s fastest-growing tech hubs. We researched and ranked the best software development companies serving Austin&apos;s booming startup, enterprise, and energy sectors in 2026.
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

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Austin is no longer just &quot;Silicon Hills&quot; in name only. With Tesla, Oracle, and Samsung anchoring massive operations here, plus a venture capital scene that deployed over $4.2B in 2025 alone, the city has evolved into one of the most competitive software development markets in the United States. The combination of zero state income tax, a deep talent pool from UT Austin and Texas A&amp;M, and a cost-of-living advantage over the Bay Area has made Austin the destination for companies building serious technology.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But with hundreds of software agencies and development shops setting up in Austin, how do you separate the truly exceptional from the merely competent? We spent four weeks evaluating Austin-area software companies across technical depth, client outcomes, engineering culture, and long-term reliability to produce this definitive ranking.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Whether you&apos;re a Series A startup looking for your first engineering partner, a mid-market company modernizing legacy systems, or an enterprise needing a scalable platform built from scratch, this list covers the <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Top 10 Software Development Companies in Austin</strong> for 2026.
                  </p>
                </div>

                {/* ── KEY TAKEAWAYS BOX ── */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.06) 100%)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                      </svg>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#3b82f6', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Key Takeaways</span>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {[
                        'Codazz leads the pack with enterprise-grade full-stack engineering across Next.js, React Native, and AI-integrated platforms.',
                        'Austin development costs run 20-35% lower than San Francisco and New York, with comparable (often superior) talent quality.',
                        'The top firms excel in specific verticals: energy-tech, fintech, healthtech, and SaaS platforms dominate Austin\'s software landscape.',
                        'Firms ranking highest combine strong engineering culture with transparent processes and long-term client partnerships.',
                        'Austin\'s zero state income tax and UT Austin pipeline give local firms a structural hiring advantage over coastal competitors.',
                      ].map((item, i) => (
                        <li key={i} style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── COMPARISON TABLE ── */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Austin Software Companies at a Glance</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                          {['Rank', 'Company', 'Core Tech', 'Best For', 'Founded', 'Rating'].map(h => (
                            <th key={h} style={{
                              padding: '14px 16px', fontSize: 11, fontWeight: 700,
                              letterSpacing: '0.1em', textTransform: 'uppercase',
                              color: 'rgba(255,255,255,0.35)', textAlign: 'left',
                              borderBottom: '1px solid rgba(255,255,255,0.08)',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, i) => (
                          <tr key={row.company} style={{
                            background: i === 0 ? 'rgba(34,197,94,0.04)' : 'transparent',
                            borderBottom: i < comparisonData.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                          }}>
                            <td style={{ padding: '12px 16px', fontSize: 14, fontWeight: 700, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)' }}>{row.rank}</td>
                            <td style={{ padding: '12px 16px', fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{row.company}</td>
                            <td style={{ padding: '12px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.coreTech}</td>
                            <td style={{ padding: '12px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.bestFor}</td>
                            <td style={{ padding: '12px 16px', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{row.founded}</td>
                            <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 600, color: '#fbbf24' }}>{row.rating}/5</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Company 1: Codazz (highlighted) */}
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
                          }}>Full-Stack Engineering</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      A powerhouse software development studio serving Austin&apos;s booming tech scene. Codazz specializes in Next.js, React Native, cloud-native architectures, and AI-integrated platforms. Known for delivering enterprise-grade products at startup speed, Codazz has become the go-to engineering partner for Austin companies that refuse to compromise on quality or velocity.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What sets Codazz apart is their full-stack approach: they don&apos;t just write code, they engineer complete digital ecosystems. From server-side rendered applications that achieve perfect Lighthouse scores to AI-powered data pipelines that transform how energy companies optimize operations, the team delivers solutions that scale from day one. Their engineering culture prioritizes clean architecture, comprehensive testing, and documentation that makes long-term maintenance effortless.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      Austin clients particularly value Codazz&apos;s ability to ramp up quickly, embed senior engineers directly into product teams, and ship production-ready features on aggressive timelines. Their portfolio spans fintech platforms, logistics dashboards, energy-sector SaaS tools, and consumer-facing mobile apps with millions of users.
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
                        Core Strength: Next.js, React Native, AI Platforms & Cloud-Native Architectures
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'mapletechlabs', name: 'Mapletechlabs', category: 'SaaS & Enterprise',
                    emoji: '🧩', accentColor: '#3b82f6', bgColor: 'rgba(59,130,246,',
                    metric: 'Microservices, Event-Driven Architecture & Real-Time Data Processing',
                    paragraphs: [
                      'An Austin-focused software agency building scalable SaaS platforms and custom enterprise tools. Mapletechlabs\' engineering teams excel in microservices, event-driven architecture, and real-time data processing systems. Their approach to distributed systems design has made them a trusted partner for companies handling high-throughput workloads.',
                      'What makes Mapletechlabs stand out is their deep expertise in backend systems that need to scale horizontally under unpredictable load. They\'ve built real-time processing pipelines handling millions of events per second for Austin-based logistics and energy companies. Their engineering team brings a rigorous, systems-thinking approach that ensures reliability at every layer of the stack.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML (Tech Media Labs)', category: 'Product Engineering',
                    emoji: '🚀', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Lean MVP Development & Long-Term Technical Partnerships',
                    paragraphs: [
                      'A product engineering firm helping Austin startups and mid-market companies build custom software. TML is known for their lean methodology, rapid MVP development, and long-term technical partnership approach. Rather than just shipping code and walking away, TML embeds with client teams and stays involved through scaling, iteration, and growth.',
                      'From concept validation to Series B scaling, TML has guided dozens of Austin startups through the critical phases of product-market fit. Their process emphasizes user research, lean experimentation, and clean architecture that doesn\'t accumulate technical debt. Founders particularly value their transparent communication style and their willingness to challenge assumptions early rather than building the wrong thing quickly.',
                    ],
                  },
                  {
                    num: '04', id: 'townmedialabs', name: 'Townmedialabs', category: 'Full-Stack Development',
                    emoji: '🎨', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'E-Commerce, HealthTech & Energy-Tech Platforms',
                    paragraphs: [
                      'A full-stack development studio specializing in e-commerce, healthtech, and energy-tech platforms for the Austin market. Townmedialabs brings strong expertise in API integrations, data pipelines, and mobile-responsive web applications. Their team has built custom platforms for some of Austin\'s most recognized brands in the health and energy sectors.',
                      'Townmedialabs\' strength lies in taking complex, data-heavy requirements and translating them into elegant, performant user experiences. Their work on HIPAA-compliant healthtech platforms and real-time energy monitoring dashboards demonstrates an ability to navigate both technical complexity and regulatory requirements. Austin businesses choose Townmedialabs when they need a team that understands both the engineering and the domain.',
                    ],
                  },
                  {
                    num: '05', id: 'mutual-mobile', name: 'Mutual Mobile', category: 'Mobile & IoT',
                    emoji: '📱', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Enterprise Mobile Apps & Connected Device Platforms',
                    paragraphs: [
                      'One of Austin\'s most established software consultancies, Mutual Mobile has been building enterprise mobile applications and IoT platforms since 2009. Their client roster includes Google, Cisco, and Under Armour. They specialize in the intersection of mobile, cloud, and connected devices, making them ideal for companies building products that span hardware and software.',
                      'Mutual Mobile\'s longevity in Austin\'s competitive market speaks to their consistency. They\'ve navigated every major platform shift from iOS to Android to cross-platform frameworks, and their engineering teams maintain deep expertise across native and hybrid mobile architectures.',
                    ],
                  },
                  {
                    num: '06', id: 'headspring', name: 'Headspring', category: 'Custom Software',
                    emoji: '🔧', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Enterprise .NET Solutions & Digital Transformation',
                    paragraphs: [
                      'Now part of the Accenture family, Headspring has been an Austin institution in custom software development since 2005. They specialize in enterprise .NET solutions, legacy system modernization, and digital transformation engagements. Their consultative approach combines deep technical expertise with strategic business analysis to ensure technology investments deliver measurable ROI.',
                      'Headspring is particularly strong for mid-to-large enterprises dealing with complex integration landscapes and legacy code that needs to be modernized without disrupting existing operations.',
                    ],
                  },
                  {
                    num: '07', id: 'praxent', name: 'Praxent', category: 'FinTech & InsurTech',
                    emoji: '💳', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Financial Services UX Modernization & Legacy Migration',
                    paragraphs: [
                      'Austin-based Praxent has carved out a niche in financial services and insurance technology. Founded in 2000, they\'ve built a deep understanding of regulatory requirements, compliance frameworks, and the user experience challenges that plague traditional financial institutions. Their specialty is taking clunky legacy financial platforms and transforming them into modern, mobile-first experiences.',
                      'Praxent\'s focused vertical expertise means they bring pre-built knowledge of PCI compliance, KYC workflows, and financial data security to every engagement, dramatically reducing discovery time for fintech projects.',
                    ],
                  },
                  {
                    num: '08', id: 'inventive', name: 'Inventive', category: 'Design & Dev',
                    emoji: '✨', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'User-Centered Design & Full-Stack Product Builds',
                    paragraphs: [
                      'Inventive brings a design-first philosophy to software development. Based in Austin, they combine UX research, visual design, and full-stack engineering into a unified process that ensures products are both beautiful and technically sound. Their portfolio features consumer apps, enterprise dashboards, and marketing platforms that prioritize usability above all else.',
                      'For companies where user adoption and engagement are critical success metrics, Inventive\'s human-centered design methodology provides a meaningful edge over engineering-only shops.',
                    ],
                  },
                  {
                    num: '09', id: 'clearlink', name: 'Clearlink', category: 'MarTech & Data',
                    emoji: '📊', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Marketing Technology Platforms & Data Analytics',
                    paragraphs: [
                      'Clearlink operates at the intersection of marketing technology and data engineering. Their Austin teams build custom analytics platforms, customer data pipelines, and marketing automation systems that help businesses make data-driven decisions. They\'re particularly strong in building attribution models and real-time reporting dashboards that connect marketing spend to revenue outcomes.',
                      'Clearlink\'s engineering is backed by deep data science capabilities, making them a strong choice for companies where data infrastructure and analytics are core to the product.',
                    ],
                  },
                  {
                    num: '10', id: 'konvoy-kegs', name: 'Konvoy Kegs', category: 'Smart Hardware + Software',
                    emoji: '🤖', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'IoT Tracking Systems & Supply Chain Software',
                    paragraphs: [
                      'Konvoy Kegs represents Austin\'s emerging deep-tech scene. They\'ve built an intelligent IoT tracking and supply chain management platform that combines embedded hardware with cloud software to solve real-world logistics problems. Their platform uses GPS, cellular, and Bluetooth tracking to provide end-to-end visibility across complex supply chains.',
                      'While niche, Konvoy demonstrates the kind of full-stack hardware-software integration capability that\'s becoming increasingly valuable as more industries adopt IoT and connected device strategies.',
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

                {/* ── HOW WE RANKED SECTION ── */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, padding: 36,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', marginBottom: 20,
                    }}>How We Ranked These Companies</h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                      Our ranking methodology is designed to surface the companies that consistently deliver exceptional software, not just the ones with the biggest marketing budgets. Here&apos;s what we evaluated:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                      {[
                        { title: 'Technical Depth (25%)', desc: 'Breadth and depth of engineering capabilities, modern stack adoption, architecture quality, and code craftsmanship as evidenced by public work and client testimonials.' },
                        { title: 'Client Outcomes (25%)', desc: 'Verified project results, case studies, measurable impact on client businesses, and post-launch support track record.' },
                        { title: 'Engineering Culture (20%)', desc: 'Team retention rates, investment in developer growth, open-source contributions, technical blog output, and engineering process maturity.' },
                        { title: 'Austin Presence (15%)', desc: 'Local office strength, Austin hiring commitment, community involvement, and accessibility for in-person collaboration.' },
                        { title: 'Innovation & Adaptability (15%)', desc: 'Adoption of emerging technologies (AI/ML, edge computing, serverless), willingness to experiment, and ability to pivot with market needs.' },
                      ].map((criterion) => (
                        <div key={criterion.title} style={{
                          padding: '20px', borderRadius: 14,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                        }}>
                          <p style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{criterion.title}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{criterion.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </article>

              {/* -- SIDEBAR -- */}
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

        {/* -- BOTTOM CTA -- */}
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
                }}>Build With Austin&apos;s Best</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build Your Next Product in Austin?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Austin&apos;s tech ecosystem is thriving. Partner with Codazz to build enterprise-grade software with world-class engineering at a fraction of Bay Area costs. No fluff, no offshore surprises, just senior engineers shipping production code.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your Austin Project →
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
