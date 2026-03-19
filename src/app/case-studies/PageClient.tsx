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

const caseStudies = [
  {
    slug: 'fintech-trading-platform',
    category: 'Fintech',
    title: 'AI-Powered Trading Platform',
    client: 'Fintech Client \u00b7 San Francisco',
    description: 'Built a real-time AI trading engine for a Series B fintech startup in San Francisco. The system processes 50K+ daily transactions with 99.99% uptime and 300ms average response time. We implemented ML-driven risk assessment models, real-time portfolio analytics, and automated compliance reporting \u2014 reducing operational costs by 40%.',
    metric: { value: '50K+', label: 'Daily Transactions' },
    metrics: ['99.99% Uptime', '300ms Response', '40% Cost Reduction'],
    tech: ['React', 'Python', 'AWS', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(34,197,94,0.05))',
  },
  {
    slug: 'healthcare-telehealth',
    category: 'Healthcare',
    title: 'HIPAA-Compliant Telehealth Platform',
    client: 'Healthcare Client \u00b7 Austin',
    description: 'Developed a fully HIPAA and CCPA-compliant telehealth platform for a healthcare SaaS company in Austin. The platform supports encrypted HD video consultations, integrated EHR workflows via HL7 FHIR, and a mobile-first patient experience. Over 200K+ patient sessions completed with a 4.8-star rating and 60% faster consultation times compared to the client\'s previous system.',
    metric: { value: '200K+', label: 'Patient Sessions' },
    metrics: ['4.8\u2605 Rating', 'HIPAA Compliant', '60% Faster Consults'],
    tech: ['React Native', 'WebRTC', 'Node.js', 'AWS'],
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(34,197,94,0.05))',
  },
  {
    slug: 'ecommerce-platform',
    category: 'E-Commerce',
    title: 'Enterprise E-Commerce Platform',
    client: 'E-Commerce Client \u00b7 New York',
    description: 'Migrated a legacy monolithic e-commerce platform to a headless Next.js architecture for a New York-based retail brand. The new system serves 2M+ monthly visitors with sub-second page loads, resulting in 3x revenue growth within 4 months. We integrated Stripe for payments, built a custom recommendation engine, and implemented real-time inventory sync across 12 warehouse locations.',
    metric: { value: '3x', label: 'Revenue Growth' },
    metrics: ['Sub-1s Load', '12 Warehouses', '4-Month ROI'],
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(34,197,94,0.05))',
  },
  {
    slug: 'logistics-platform',
    category: 'Logistics',
    title: 'Real-Time Logistics & Fleet Management',
    client: 'Logistics Client \u00b7 Los Angeles',
    description: 'Built an IoT-integrated fleet management platform for a logistics company in Los Angeles managing 500+ vehicles. The system tracks 15K+ daily deliveries in real time using GPS and sensor data, with AI-powered route optimization that reduced fuel costs by 25%. We integrated predictive maintenance alerts using TensorFlow, preventing an estimated $200K+ in annual vehicle downtime.',
    metric: { value: '25%', label: 'Fuel Savings' },
    metrics: ['500+ Vehicles', 'Real-time GPS', '$200K+ Savings'],
    tech: ['React', 'Python', 'TensorFlow', 'AWS IoT'],
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(34,197,94,0.05))',
  },
];

const categoryColors: Record<string, string> = {
  Fintech: '#a78bfa',
  Healthcare: '#22d3ee',
  'E-Commerce': '#34d399',
  Logistics: '#fbbf24',
};

const categories = ['All', 'Fintech', 'Healthcare', 'E-Commerce', 'Logistics'];

export default function CaseStudiesPageClient() {
  const pageRef = useReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = caseStudies.filter(
    cs => activeCategory === 'All' || cs.category === activeCategory
  );

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(120px, 12vw, 160px) 0 clamp(48px, 6vw, 80px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="wide" />
          <div className="cb-container">
            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Case Studies' },
            ]} />

            <div className="reveal" style={{ marginBottom: 24, marginTop: 32 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#ffffff',
              }}>
                Client Success Stories
              </span>
            </div>
            <h1 className="reveal reveal-d1" style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 700, color: '#ffffff',
              lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24, maxWidth: 800,
            }}>
              Our Work Speaks<br />for Itself
            </h1>
            <p className="reveal reveal-d2" style={{
              fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
              maxWidth: 600, marginBottom: 48,
            }}>
              Real results from real projects. These aren&apos;t hypothetical scenarios &mdash; each case study represents a product we architected, built, and shipped to production. Explore how we&apos;ve helped businesses across fintech, healthcare, e-commerce, and logistics build scalable, high-performance software that drives measurable ROI.
            </p>

            {/* Category filter pills */}
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                    background: activeCategory === cat ? '#22c55e' : 'rgba(255,255,255,0.03)',
                    color: activeCategory === cat ? '#ffffff' : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES GRID ── */}
        <section style={{ paddingBottom: 'clamp(48px, 8vw, 100px)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)', marginBottom: 40,
            }}>
              {activeCategory === 'All' ? 'All Projects' : activeCategory + ' Projects'}
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
              gap: 24,
            }}>
              {filtered.map((cs, i) => {
                const accentColor = categoryColors[cs.category] || '#22c55e';
                return (
                  <Link key={cs.slug} href={`/case-studies/${cs.slug}`} style={{ textDecoration: 'none' }}>
                    <article
                      className={`reveal reveal-d${Math.min(i + 1, 4)}`}
                      style={{
                        background: 'rgba(255,255,255,0.015)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 24,
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(17,24,39,0.25)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.03)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.015)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Placeholder image area — 16:9 */}
                      <div style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        background: cs.gradient,
                        borderBottom: '1px solid rgba(255,255,255,0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}>
                        {/* Decorative grid pattern */}
                        <div style={{
                          position: 'absolute', inset: 0, opacity: 0.15,
                          backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
                          backgroundSize: '24px 24px',
                        }} />
                        {/* Metric callout in image */}
                        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                          <div style={{
                            fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em',
                            lineHeight: 1,
                          }}>
                            {cs.metric.value}
                          </div>
                          <div style={{
                            fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.45)', marginTop: 8,
                          }}>
                            {cs.metric.label}
                          </div>
                        </div>
                      </div>

                      {/* Card body */}
                      <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        {/* Category badge */}
                        <div style={{ marginBottom: 16 }}>
                          <span style={{
                            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                            background: `${accentColor}18`, color: accentColor,
                            padding: '4px 12px', borderRadius: 100,
                          }}>
                            {cs.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontSize: 20, fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 8,
                        }}>
                          {cs.title}
                        </h3>

                        {/* Client */}
                        <p style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 12,
                        }}>
                          {cs.client}
                        </p>

                        {/* Description */}
                        <p style={{
                          fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
                          marginBottom: 24, flexGrow: 1,
                        }}>
                          {cs.description}
                        </p>

                        {/* Tech stack tags */}
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                          {cs.tech.map(t => (
                            <span key={t} style={{
                              fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)',
                              padding: '5px 12px', border: '1px solid rgba(255,255,255,0.06)',
                              borderRadius: 100, background: 'rgba(255,255,255,0.03)',
                            }}>
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Additional metrics */}
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                          {cs.metrics.map((m: string) => (
                            <span key={m} style={{
                              fontSize: 10, fontWeight: 700, color: '#22c55e',
                              padding: '4px 10px', border: '1px solid rgba(34,197,94,0.2)',
                              borderRadius: 100, background: 'rgba(34,197,94,0.05)',
                              letterSpacing: '0.04em', textTransform: 'uppercase',
                            }}>
                              {m}
                            </span>
                          ))}
                        </div>

                        {/* CTA link */}
                        <div style={{
                          paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.03)',
                          marginTop: 'auto',
                        }}>
                          <span style={{
                            fontSize: 13, fontWeight: 600, color: '#ffffff',
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                          }}>
                            Read Case Study
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ padding: 'clamp(32px, 6vw, 64px) 0' }}>
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
              gap: 32,
              textAlign: 'center',
            }}>
              {[
                { value: '500+', label: 'Projects Shipped' },
                { value: '150+', label: 'Happy Clients' },
                { value: '99%', label: 'Satisfaction Rate' },
                { value: '24', label: 'Countries Served' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff',
                    letterSpacing: '-0.03em', lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)', marginTop: 10,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY WORK WITH US ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: 16 }}>Why Us</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 16 }}>What Makes Our Work Different</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {[
                { title: 'Fixed-Price Contracts', desc: 'You know exactly what you\'ll pay before we write a line of code. No hourly billing, no scope creep surprises.' },
                { title: 'Weekly Progress Demos', desc: 'Every week you see working software. Not wireframes, not slide decks — actual running code you can interact with.' },
                { title: 'Production-Grade From Day One', desc: 'CI/CD pipelines, automated testing, monitoring, and error tracking are set up in the first sprint, not as an afterthought.' },
                { title: 'Your IP, 100%', desc: 'Every line of code, every design file, every deployment script — it\'s all yours. Full IP transfer on every project.' },
              ].map(item => (
                <div key={item.title} style={{
                  background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 24, padding: 32,
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 48px)', textAlign: 'center',
              }}
            >
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#ffffff', display: 'block', marginBottom: 20,
              }}>
                Let&apos;s Build Together
              </span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                letterSpacing: '-0.03em', marginBottom: 16,
              }}>
                Have a Similar Project?
              </h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.4)', marginBottom: 40,
                maxWidth: 500, margin: '0 auto 40px',
                lineHeight: 1.7,
              }}>
                Tell us about your idea and we&apos;ll show you how we can turn it into a success story.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  height: 52, padding: '0 36px', borderRadius: 100,
                  background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#d9220a';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#22c55e';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
