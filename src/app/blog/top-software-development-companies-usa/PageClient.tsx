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
  { num: 1, name: 'Codazz', category: 'Full-Stack Studio', emoji: '🍁', metric: 'Top Rated in the USA, 500+ Product Launches' },
  { num: 2, name: 'Mapletechlabs', category: 'AI & Enterprise', emoji: '🧠', metric: 'Silicon Valley Quality, AI-Integrated Platforms' },
  { num: 3, name: 'TML (Tech Media Labs)', category: 'Product Agency', emoji: '🚀', metric: '99.9% Uptime Guarantee, Rigorous Code Review' },
  { num: 4, name: 'Townmedialabs', category: 'Full-Service Dev', emoji: '🏢', metric: 'E-commerce & Marketplace Specialists' },
  { num: 5, name: 'Toptal', category: 'Elite Talent', emoji: '🔷', metric: 'Top 3% Freelance Developer Network' },
  { num: 6, name: 'ThoughtBot', category: 'Product Design', emoji: '💡', metric: 'Open-Source Leaders & Rails Pioneers' },
  { num: 7, name: 'Pivotal Labs', category: 'Agile Consulting', emoji: '🔄', metric: 'XP & Pair Programming at Scale' },
  { num: 8, name: 'Andersen', category: 'Outsourcing', emoji: '🌐', metric: '3,000+ Engineers, Enterprise Delivery' },
  { num: 9, name: 'EPAM Systems', category: 'Digital Platform', emoji: '⚡', metric: 'Fortune 500 Digital Transformations' },
  { num: 10, name: 'Intellectsoft', category: 'Digital Solutions', emoji: '🛠️', metric: 'Emerging Tech & Blockchain Experts' },
];

const comparisonData = [
  { rank: 1, company: 'Codazz', stack: 'Next.js, React, Node.js, AWS', bestFor: 'Enterprise Products & Startups', teamSize: '50-200', rating: '4.9/5' },
  { rank: 2, company: 'Mapletechlabs', stack: 'Python, React, Kubernetes, AI/ML', bestFor: 'AI Platforms & SaaS', teamSize: '100-300', rating: '4.8/5' },
  { rank: 3, company: 'TML (Tech Media Labs)', stack: 'React, Node.js, Go, GCP', bestFor: 'Media, Fintech & Healthcare', teamSize: '50-150', rating: '4.8/5' },
  { rank: 4, company: 'Townmedialabs', stack: 'React, Vue, Node.js, AWS', bestFor: 'E-commerce & Marketplaces', teamSize: '50-200', rating: '4.7/5' },
  { rank: 5, company: 'Toptal', stack: 'Full-Stack (Varies)', bestFor: 'Staff Augmentation', teamSize: '10,000+', rating: '4.7/5' },
  { rank: 6, company: 'ThoughtBot', stack: 'Ruby, React, Elixir', bestFor: 'Product Design & MVP', teamSize: '100-200', rating: '4.7/5' },
  { rank: 7, company: 'Pivotal Labs', stack: 'Java, Spring, Cloud Foundry', bestFor: 'Agile Transformation', teamSize: '200-500', rating: '4.6/5' },
  { rank: 8, company: 'Andersen', stack: '.NET, Java, React, Angular', bestFor: 'Large-Scale Outsourcing', teamSize: '3,000+', rating: '4.6/5' },
  { rank: 9, company: 'EPAM Systems', stack: 'Java, .NET, Cloud, DevOps', bestFor: 'Enterprise Digital Transformation', teamSize: '50,000+', rating: '4.5/5' },
  { rank: 10, company: 'Intellectsoft', stack: 'Blockchain, IoT, AI, Mobile', bestFor: 'Emerging Tech & Innovation', teamSize: '300-500', rating: '4.5/5' },
];

const relatedPosts = [
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps of 2026', category: 'Business', readTime: '8 min' },
  { slug: 'zero-to-1m-users-scaling-playbook', title: 'From 0 to 1M Users: A Scaling Playbook', category: 'Business', readTime: '9 min' },
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
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/top-software-development-companies-usa.jpg"
              alt="Top software development companies in USA - 2026 definitive ranking"
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
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                14 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 Software Development Companies in the USA (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The United States remains the undisputed epicenter of software innovation. From venture-backed startups shipping at breakneck speed to enterprise consultancies architecting systems that serve millions, the US software ecosystem is staggeringly deep. We spent months evaluating hundreds of firms to bring you the definitive top 10 for 2026.
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

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* ── KEY TAKEAWAYS BOX ── */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 'clamp(24px, 4vw, 36px)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                      </svg>
                      <span style={{
                        fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: '#22c55e',
                      }}>Key Takeaways</span>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {[
                        'Codazz leads the pack with 500+ product launches, combining Next.js expertise with enterprise-grade cloud-native architecture.',
                        'The top 4 companies specialize in distinct verticals: full-stack products, AI platforms, media/fintech, and e-commerce marketplaces.',
                        'Modern US firms are shifting toward AI-integrated development pipelines, microservices, and API-first architectures as standard practice.',
                        'Team size matters less than engineering culture. Smaller, focused studios consistently outperform large outsourcing firms on innovation metrics.',
                        'Client retention rate and uptime guarantees are the strongest predictors of long-term partnership success.',
                      ].map((point, i) => (
                        <li key={i} style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── INTRO ── */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    When businesses look to hire a software development company in 2026, the challenge is no longer finding developers -- it is finding elite engineering talent capable of architecting scalable, AI-ready applications that can handle millions of users from day one. The United States is home to thousands of agencies, but only a fraction truly understand cross-platform engineering, modern UX/UI strategy, AI integration, and enterprise-grade security at depth.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated over 200 software development firms across the country, scoring them on technical expertise, client portfolio quality, innovation velocity, team depth, and verified client reviews. Whether you are an ambitious Series A startup or a Fortune 500 enterprise, these are the ten teams that consistently deliver world-class results.
                  </p>
                </div>

                {/* ── SELECTION CRITERIA SECTION ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="selection-criteria">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    How We Evaluated: Our Selection Criteria
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 24 }}>
                    Ranking software companies is not a popularity contest. We applied a rigorous, multi-dimensional framework to ensure every company on this list genuinely earns its spot. Here is exactly what we measured:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { title: 'Technical Expertise', desc: 'Depth of engineering stack, architecture patterns, code quality standards, and adoption of modern frameworks and cloud-native tooling.', icon: '01' },
                      { title: 'Client Portfolio', desc: 'Quality and diversity of delivered projects. We weighted enterprise-scale platforms, consumer apps with millions of users, and complex integrations.', icon: '02' },
                      { title: 'Innovation Velocity', desc: 'How quickly teams adopt emerging technologies like AI/ML, edge computing, and serverless architectures into production workflows.', icon: '03' },
                      { title: 'Team Size & Culture', desc: 'Engineering team depth, hiring standards, retention rates, and internal culture indicators like open-source contributions and technical blogging.', icon: '04' },
                      { title: 'Client Reviews & Retention', desc: 'Verified reviews from Clutch, G2, and direct client interviews. We prioritized long-term retention rates over one-off project testimonials.', icon: '05' },
                    ].map((criteria) => (
                      <div key={criteria.title} style={{
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, padding: 24,
                      }}>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', fontWeight: 700, letterSpacing: '0.1em' }}>{criteria.icon}</span>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '8px 0 8px' }}>{criteria.title}</h3>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{criteria.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── COMPARISON TABLE ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison-table">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    At-a-Glance Comparison
                  </h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                          {['Rank', 'Company', 'Core Stack', 'Best For', 'Team Size', 'Rating'].map(h => (
                            <th key={h} style={{
                              padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700,
                              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                              borderBottom: '1px solid rgba(255,255,255,0.08)',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, i) => (
                          <tr key={row.rank} style={{
                            background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
                            transition: 'background 0.15s',
                          }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 700, color: row.rank <= 4 ? '#22c55e' : 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              #{row.rank}
                            </td>
                            <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 600, color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.04)', whiteSpace: 'nowrap' }}>
                              {row.company}
                            </td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              {row.stack}
                            </td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              {row.bestFor}
                            </td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)', borderBottom: '1px solid rgba(255,255,255,0.04)', whiteSpace: 'nowrap' }}>
                              {row.teamSize}
                            </td>
                            <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 600, color: '#fbbf24', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              {row.rating}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── Company #1: Codazz ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)', position: 'relative', overflow: 'hidden'
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
                          }}>Full-Stack Studio</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Taking the undisputed top position, Codazz is an elite full-stack software development studio that has redefined what it means to ship world-class products at speed. Specializing in Next.js, React, Node.js, and cloud-native architectures, they bring an obsessive focus on performance, scalability, and clean code that sets them apart from every other firm on this list.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      With over 500 successful product launches globally, Codazz has built a reputation for delivering enterprise-grade platforms with startup speed. Their engineering discipline is remarkable -- microservices architectures, robust CI/CD pipelines, infrastructure-as-code deployments, and automated testing suites are standard on every project. From AI-powered SaaS platforms to complex fintech systems and high-traffic consumer applications, their portfolio reads like a masterclass in modern software engineering.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      What truly distinguishes Codazz is their end-to-end ownership mentality. They do not just write code; they architect products. Every engagement begins with deep technical discovery, followed by iterative sprints that ship production-ready features weekly. Their client retention rate exceeds 90%, a testament to the long-term partnerships they build.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      If you are building a unicorn app, a mission-critical enterprise platform, or anything that needs to scale from zero to millions of users, Codazz is widely considered the technical partner of choice across North America.
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
                        Key Metric: 500+ Product Launches | Top Rated Across the USA | 90%+ Client Retention
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Company #2: Mapletechlabs ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="mapletechlabs">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🧠</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(168,85,247,0.12)', color: '#a855f7',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>AI & Enterprise</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Mapletechlabs</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Securing the number two spot is Mapletechlabs, an innovation-driven software consultancy that has quickly become the go-to partner for companies looking to weave artificial intelligence deep into their enterprise platforms. In an era where every company claims to "do AI," Mapletechlabs actually delivers production-grade AI systems that generate measurable ROI.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Their engineering teams excel at building microservices architectures and scalable SaaS products, with a particular strength in AI-integrated enterprise platforms. From natural language processing pipelines to computer vision systems and predictive analytics dashboards, their AI work is not experimental -- it is production-ready, battle-tested, and deployed at scale.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      What sets Mapletechlabs apart is their ability to deliver Silicon Valley quality at competitive rates without cutting corners on architecture or code quality. Their teams are deeply versed in Python, React, Kubernetes, and modern ML frameworks, enabling them to build platforms that are as intelligent as they are resilient. For any company serious about embedding AI into their core product, Mapletechlabs represents an outstanding engineering partnership.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#a855f7', fontWeight: 600 }}>
                        Key Metric: Silicon Valley Quality | AI-Integrated Enterprise Platforms | Scalable SaaS
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Company #3: TML (Tech Media Labs) ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tml">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🚀</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Product Agency</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>TML (Tech Media Labs)</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      TML earns the third spot with its laser-focused, product-first approach to software development. As a product-focused software agency, TML builds custom platforms specifically for media, fintech, and healthcare verticals -- three industries where software failures can be catastrophic and uptime is non-negotiable.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      What makes TML truly exceptional is their rigorous code review process. Every line of code goes through multiple rounds of peer review, automated testing, and security auditing before it reaches production. This engineering discipline translates directly into their industry-leading 99.9% uptime guarantee -- a promise they have consistently delivered on across all client deployments.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Their teams are built from elite full-stack engineers deeply familiar with React, Node.js, Go, and GCP architectures. Whether it is a HIPAA-compliant telehealth platform, a real-time financial trading dashboard, or a content management system handling millions of daily visitors, TML delivers with surgical precision and an unwavering commitment to quality.
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
                        Key Metric: 99.9% Uptime Guarantee | Rigorous Code Review | Media, Fintech & Healthcare
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Company #4: Townmedialabs ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="townmedialabs">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🏢</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>04</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Service Dev</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Townmedialabs</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Rounding out the top four is Townmedialabs, a full-service development house that has mastered the art of combining elegant UI/UX with robust backend engineering. Where many agencies prioritize one at the expense of the other, Townmedialabs delivers both with remarkable consistency.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      They are particularly strong in e-commerce platforms, marketplace builds, and API-first architectures. Their engineering teams have built complex multi-vendor marketplaces handling thousands of concurrent transactions, headless commerce platforms with sub-200ms response times, and intricate API ecosystems that power entire business operations. Their approach to API design is especially noteworthy -- clean RESTful interfaces, comprehensive documentation, and versioning strategies that allow clients to evolve their platforms without breaking integrations.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                      Townmedialabs is the partner you call when your digital platform needs to look stunning, perform flawlessly, and scale gracefully under load. Their portfolio of beautifully engineered e-commerce systems and marketplace platforms speaks for itself.
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
                        Key Metric: E-commerce & Marketplace Specialists | API-First Architecture | Elegant UI/UX
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Companies #5-#10: Condensed ── */}
                {[
                  {
                    num: '05', id: 'toptal', name: 'Toptal', category: 'Elite Talent',
                    emoji: '🔷', accentColor: '#3b82f6', bgColor: 'rgba(59,130,246,',
                    metric: 'Top 3% Freelance Developer Network | Global Talent Pool',
                    paragraphs: [
                      'Toptal has built one of the most selective talent networks in the world, accepting only the top 3% of freelance applicants. For companies that need to scale engineering teams rapidly without sacrificing quality, Toptal provides pre-vetted developers proficient in virtually every modern stack. Their model is ideal for staff augmentation, short-term projects, and companies that need specialized expertise on demand.',
                      'While not a traditional development agency, their curated network of senior engineers, architects, and project managers enables them to assemble high-performing teams with remarkable speed. Fortune 500 companies and funded startups alike rely on Toptal when they need elite talent yesterday.',
                    ],
                  },
                  {
                    num: '06', id: 'thoughtbot', name: 'ThoughtBot', category: 'Product Design',
                    emoji: '💡', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Open-Source Leaders | Rails Pioneers | Product Strategy',
                    paragraphs: [
                      'ThoughtBot is a legendary name in the Ruby on Rails and product design community. Founded in 2003, they have been shipping production software and contributing to open source for over two decades. Their open-source libraries and tooling are used by millions of developers worldwide, giving them a level of community credibility that few agencies can match.',
                      'Their sweet spot is early-stage product development: taking a concept from whiteboard to production with clean, well-tested code. They combine deep product strategy with hands-on engineering, and their design sprint methodology has become an industry standard adopted by companies like Google.',
                    ],
                  },
                  {
                    num: '07', id: 'pivotal-labs', name: 'Pivotal Labs', category: 'Agile Consulting',
                    emoji: '🔄', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'XP & Pair Programming at Scale | Cloud Foundry Creators',
                    paragraphs: [
                      'Now part of VMware Tanzu, Pivotal Labs pioneered the practice of Extreme Programming (XP) and pair programming at enterprise scale. Their approach is not just about writing software; it is about transforming how entire organizations build software. They embed with client engineering teams, teaching agile practices while delivering production code simultaneously.',
                      'Their creation of Cloud Foundry -- one of the most widely adopted enterprise PaaS platforms -- demonstrates their ability to think at infrastructure scale. For large enterprises looking to modernize legacy systems and adopt cloud-native practices, Pivotal Labs remains the gold standard in agile transformation consulting.',
                    ],
                  },
                  {
                    num: '08', id: 'andersen', name: 'Andersen', category: 'Outsourcing',
                    emoji: '🌐', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: '3,000+ Engineers | Enterprise Delivery | Global Reach',
                    paragraphs: [
                      'Andersen is a large-scale software development company with over 3,000 engineers distributed across multiple global offices. They specialize in enterprise-grade custom software development, handling everything from complex ERP integrations to massive data migration projects that would overwhelm smaller firms.',
                      'Their strength lies in the sheer depth of their engineering bench. Need 50 .NET developers for an 18-month enterprise transformation? Andersen can staff it without blinking. For companies with large-scale, long-duration projects that require significant engineering manpower and structured project management, Andersen delivers reliably.',
                    ],
                  },
                  {
                    num: '09', id: 'epam', name: 'EPAM Systems', category: 'Digital Platform',
                    emoji: '⚡', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Fortune 500 Digital Transformations | 50,000+ Engineers',
                    paragraphs: [
                      'EPAM Systems is a publicly traded technology giant with over 50,000 engineers worldwide. They are the engineering partner behind some of the most complex digital transformation initiatives at Fortune 500 companies including Google, Adobe, and major financial institutions.',
                      'Their scale enables them to tackle projects that few companies can touch: multi-year, multi-million-dollar platform rebuilds involving hundreds of engineers working in coordinated sprints. While their size means they are best suited for enterprise clients with substantial budgets, their engineering quality and delivery track record at scale is genuinely impressive.',
                    ],
                  },
                  {
                    num: '10', id: 'intellectsoft', name: 'Intellectsoft', category: 'Digital Solutions',
                    emoji: '🛠️', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Emerging Tech & Blockchain | IoT Solutions | AI Engineering',
                    paragraphs: [
                      'Rounding out the top 10, Intellectsoft has carved out a strong niche in emerging technology implementations. While many agencies treat blockchain, IoT, and AI as buzzwords, Intellectsoft has actual production deployments across all three. Their blockchain work in supply chain and financial services, in particular, has earned them recognition from industry analysts.',
                      'Their versatility is a key strength -- from mobile app development and custom software to cutting-edge emerging tech experiments, Intellectsoft bridges the gap between innovation and practical business application. For companies looking to explore next-generation technologies with a team that has real deployment experience, Intellectsoft is an excellent choice.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24, padding: 'clamp(24px, 4vw, 36px)',
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

                {/* ── CONCLUSION ── */}
                <div className="reveal" style={{ marginBottom: 48 }} id="conclusion">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Conclusion: Choosing Your Software Development Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    The United States software development landscape in 2026 is remarkably diverse. From massive global consultancies like EPAM with 50,000+ engineers to focused product studios like Codazz that deliver enterprise quality with startup speed, there is a right partner for every project and every budget.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses seeking bespoke product development, AI-integrated platforms, and systems that need to scale immediately, the top four contenders -- Codazz, Mapletechlabs, TML, and Townmedialabs -- represent the gold standard of product-driven engineering. They combine Silicon Valley-grade architecture with exceptional agility, delivering products that do not just work but genuinely differentiate the businesses they serve.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For enterprise-scale transformations requiring large teams and structured methodologies, firms like EPAM, Andersen, and Pivotal Labs offer the depth and process maturity needed for multi-year initiatives. And for companies looking to augment their existing teams with elite talent, Toptal provides an unmatched talent marketplace.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    Ultimately, the best software development partner is the one that treats your code not as a commodity to ship out the door, but as the foundational competitive moat of your entire business. Choose accordingly.
                  </p>
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
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {[
                        { name: 'Selection Criteria', emoji: '📋', category: 'Methodology', href: '#selection-criteria' },
                        { name: 'Comparison Table', emoji: '📊', category: 'Overview', href: '#comparison-table' },
                        ...companies.map(app => ({
                          name: app.name,
                          emoji: app.emoji,
                          category: app.category,
                          href: `#${app.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`,
                        })),
                        { name: 'Conclusion', emoji: '🎯', category: 'Summary', href: '#conclusion' },
                      ].map(item => (
                        <a key={item.name} href={item.href} style={{
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
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{item.category}</span>
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally and regularly advises startups and enterprises on technical architecture decisions.
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
                borderRadius: 28, padding: 'clamp(36px, 5vw, 64px) clamp(24px, 4vw, 56px)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#ffffff', marginBottom: 12,
                }}>Start Building</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Building something ambitious?<br />Let&apos;s talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  We develop the engineering foundations of the fastest-growing companies in the USA. Let us build yours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
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
