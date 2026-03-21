'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import AwardsMarquee from '@/components/AwardsMarquee';

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

/* ── Animated Counter ── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const numMatch = value.match(/(\d+)/);
        if (!numMatch) { setDisplay(value); return; }
        const target = parseInt(numMatch[1], 10);
        const prefix = value.slice(0, value.indexOf(numMatch[1]));
        const suffix = value.slice(value.indexOf(numMatch[1]) + numMatch[1].length);
        const duration = 1600;
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          setDisplay(`${prefix}${current}${suffix}`);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <p style={{
        fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#22c55e',
        letterSpacing: '-0.04em', margin: '0 0 8px', lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
      }}>{display}</p>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', margin: 0, fontWeight: 500, letterSpacing: '0.02em' }}>{label}</p>
    </div>
  );
}

/* ── SVG Icons for Values ── */
const ValueIcons = {
  innovation: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l.548 2.32a.5.5 0 01-.486.607H9.929a.5.5 0 01-.486-.607l.548-2.32z"/>
    </svg>
  ),
  quality: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
  transparency: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
    </svg>
  ),
  clientFirst: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  ),
  global: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ),
  learning: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      <path d="M12 14l9-5-9-5-9 5 9 5zM12 14v7"/>
    </svg>
  ),
};

const values = [
  {
    icon: ValueIcons.innovation,
    title: 'Innovation',
    desc: 'We push boundaries with cutting-edge technology. Every project is an opportunity to build something that did not exist before.',
  },
  {
    icon: ValueIcons.quality,
    title: 'Quality',
    desc: 'We hold our code, architecture, and processes to the highest standard. Mediocre work does not leave our doors.',
  },
  {
    icon: ValueIcons.transparency,
    title: 'Transparency',
    desc: 'No jargon, no surprises, no vanity metrics. You always know exactly where your project stands and what it costs.',
  },
  {
    icon: ValueIcons.clientFirst,
    title: 'Client-First',
    desc: 'Your success is our only metric. We measure ourselves by the outcomes we create for the businesses we build with.',
  },
  {
    icon: ValueIcons.global,
    title: 'Global Thinking',
    desc: 'We source the best talent worldwide and build products that work across cultures, languages, and time zones.',
  },
  {
    icon: ValueIcons.learning,
    title: 'Continuous Learning',
    desc: 'Technology evolves daily. Our engineers dedicate time every week to research, experimentation, and growth.',
  },
];

const timeline = [
  { year: '2018', title: 'Founded', desc: 'Raman Makkar launches TML Branding Agency in Edmonton, Canada.' },
  { year: '2020', title: 'First 100 Projects', desc: 'Crossed the 100-project milestone. Team grew to 30+ engineers with a virtual-first model.' },
  { year: '2022', title: 'International Expansion', desc: 'Expanded operations to 24 countries. Opened Chandigarh development center.' },
  { year: '2024', title: '500+ Projects', desc: 'Surpassed 500 projects delivered. Launched Codazz AI Labs for applied AI research.' },
];

export default function AboutPage() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>
        <article>

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(120px, 12vw, 180px) 0 clamp(60px, 8vw, 100px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <div className="cb-container">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
            <div style={{ marginTop: 40, maxWidth: 800 }}>
              <div className="reveal" style={{ marginBottom: 20 }}>
                <span style={{
                  display: 'inline-block', padding: '6px 16px', borderRadius: 100,
                  background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)',
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#22c55e',
                }}>Est. 2018</span>
              </div>
              <h1 className="reveal reveal-d1" style={{
                fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800, color: '#ffffff',
                lineHeight: 1.0, letterSpacing: '-0.05em', marginBottom: 28,
              }}>
                Our Story
              </h1>
              <p className="reveal reveal-d2" style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
                maxWidth: 640, marginBottom: 48,
              }}>
                We believe world-class engineering should be accessible to every company, not just those with $100M budgets. From Edmonton to the world, we build software that moves industries forward.
              </p>
              {/* Animated Hero Stats */}
              <div className="reveal reveal-d3" style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
                maxWidth: 520,
                padding: '32px 0',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <AnimatedStat value="500+" label="Projects Delivered" />
                <AnimatedStat value="100+" label="Engineers" />
                <AnimatedStat value="24" label="Countries Served" />
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <TrustBadges compact />
          </div>
        </section>

        {/* ── FOUNDER SECTION ── */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>

              {/* Founder Visual */}
              <div className="reveal" style={{
                background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(34,197,94,0.01) 100%)',
                border: '1px solid rgba(34,197,94,0.12)',
                borderRadius: 32, padding: 'clamp(40px, 5vw, 64px)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Decorative ring */}
                <div aria-hidden="true" style={{
                  position: 'absolute', top: -60, right: -60, width: 200, height: 200,
                  borderRadius: '50%', border: '1px solid rgba(34,197,94,0.08)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28,
                  boxShadow: '0 0 40px rgba(34,197,94,0.2)',
                }}>
                  <span style={{ fontSize: 28, fontWeight: 800, color: '#000' }}>RM</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', marginBottom: 4, letterSpacing: '-0.03em' }}>Raman Makkar</h3>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>CEO &amp; Founder</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{
                    padding: '8px 16px', borderRadius: 100,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)',
                  }}>Edmonton, Canada</span>
                  <span style={{
                    padding: '8px 16px', borderRadius: 100,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)',
                  }}>Chandigarh, India</span>
                </div>
              </div>

              {/* Founder Text */}
              <div>
                <div className="reveal" style={{ marginBottom: 16 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.25)',
                  }}>Meet the Founder</span>
                </div>
                <h2 className="reveal reveal-d1" style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.04em', marginBottom: 24, lineHeight: 1.1,
                }}>
                  Built by an engineer,<br />for builders.
                </h2>
                <div className="reveal reveal-d2">
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Raman Makkar founded Codazz in 2018 after seeing a gap between what startups needed and what agencies delivered. Most agencies optimized for billable hours. Raman wanted to build one that optimized for outcomes.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    What started as TML Branding Agency in Edmonton has grown into a global engineering firm. Raman has personally led the architecture of trading platforms processing 50K+ daily transactions and telehealth systems serving 200K+ patients.
                  </p>
                  <blockquote style={{
                    margin: 0, padding: '20px 24px',
                    borderLeft: '3px solid #22c55e',
                    background: 'rgba(34,197,94,0.03)',
                    borderRadius: '0 12px 12px 0',
                  }}>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                      &ldquo;Every company, regardless of size, deserves technology that competes at the highest level.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16, textAlign: 'center' }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}>Our Journey</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff',
              letterSpacing: '-0.04em', marginBottom: 64, lineHeight: 1.1, textAlign: 'center',
            }}>
              Company Milestones
            </h2>

            {/* Vertical Timeline */}
            <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
              {/* Vertical line */}
              <div aria-hidden="true" style={{
                position: 'absolute', left: 20, top: 0, bottom: 0,
                width: 2, background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))',
              }} />

              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`reveal reveal-d${Math.min(i + 1, 4)}`}
                  style={{
                    position: 'relative', paddingLeft: 56,
                    marginBottom: i < timeline.length - 1 ? 48 : 0,
                  }}
                >
                  {/* Green dot */}
                  <div style={{
                    position: 'absolute', left: 12, top: 4,
                    width: 18, height: 18, borderRadius: '50%',
                    background: i === timeline.length - 1 ? '#22c55e' : 'rgba(34,197,94,0.25)',
                    border: `3px solid ${i === timeline.length - 1 ? '#22c55e' : 'rgba(34,197,94,0.15)'}`,
                    boxShadow: i === timeline.length - 1 ? '0 0 16px rgba(34,197,94,0.4)' : 'none',
                  }} />
                  {/* Pulse ring on latest */}
                  {i === timeline.length - 1 && (
                    <div aria-hidden="true" style={{
                      position: 'absolute', left: 6, top: -2,
                      width: 30, height: 30, borderRadius: '50%',
                      border: '2px solid rgba(34,197,94,0.3)',
                      animation: 'pulse 2s ease-in-out infinite',
                    }} />
                  )}
                  <span style={{
                    display: 'inline-block', padding: '4px 14px', borderRadius: 100,
                    background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)',
                    fontSize: 12, fontWeight: 800, color: '#22c55e',
                    letterSpacing: '0.05em', marginBottom: 12,
                  }}>{item.year}</span>
                  <h3 style={{
                    fontSize: 20, fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.02em', marginBottom: 8,
                  }}>{item.title}</h3>
                  <p style={{
                    fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0,
                  }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16, textAlign: 'center' }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}>What We Stand For</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff',
              letterSpacing: '-0.04em', marginBottom: 60, lineHeight: 1.1, textAlign: 'center',
            }}>
              Our Core Values
            </h2>
            <div className="values-grid" style={{ display: 'grid', gap: 20 }}>
              {values.map((val, i) => (
                <div
                  key={val.title}
                  className={`reveal reveal-d${Math.min(i + 1, 6)}`}
                  style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(34,197,94,0.2)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(34,197,94,0.03)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.015)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    {val.icon}
                  </div>
                  <h3 style={{
                    fontSize: 17, fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.02em', marginBottom: 12,
                  }}>{val.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM STATS ── */}
        <section style={{
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'linear-gradient(180deg, rgba(34,197,94,0.02) 0%, transparent 100%)',
        }}>
          <div className="cb-container">
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            }}>
              {[
                { value: '100+', label: 'Engineers Worldwide' },
                { value: '16+', label: 'Years Experience' },
                { value: '24', label: 'Countries Served' },
                { value: '98%', label: 'Client Retention' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    padding: '56px 20px', textAlign: 'center',
                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                >
                  <AnimatedStat value={stat.value} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFICES ── */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16, textAlign: 'center' }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}>Where We Are</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff',
              letterSpacing: '-0.04em', marginBottom: 60, lineHeight: 1.1, textAlign: 'center',
            }}>
              Our Offices
            </h2>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 24, maxWidth: 760, margin: '0 auto',
            }}>
              {/* Edmonton HQ */}
              <div className="reveal reveal-d1" style={{
                background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(34,197,94,0.01) 100%)',
                border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: 'clamp(32px, 4vw, 48px)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div aria-hidden="true" style={{
                  position: 'absolute', top: -40, right: -40, width: 120, height: 120,
                  borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  display: 'inline-block', padding: '6px 14px', borderRadius: 100,
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                  fontSize: 11, fontWeight: 800, color: '#22c55e',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24,
                }}>Headquarters</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', marginBottom: 8, letterSpacing: '-0.03em' }}>
                  Edmonton, Canada
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>
                  Corporate headquarters. Strategy, business development, and client relations.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
                    MST (UTC-7)
                  </span>
                </div>
              </div>

              {/* Chandigarh Dev Center */}
              <div className="reveal reveal-d2" style={{
                background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(34,197,94,0.01) 100%)',
                border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: 'clamp(32px, 4vw, 48px)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div aria-hidden="true" style={{
                  position: 'absolute', top: -40, right: -40, width: 120, height: 120,
                  borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  display: 'inline-block', padding: '6px 14px', borderRadius: 100,
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                  fontSize: 11, fontWeight: 800, color: '#22c55e',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24,
                }}>Dev Center</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', marginBottom: 8, letterSpacing: '-0.03em' }}>
                  Chandigarh, India
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>
                  Primary development center. Engineering, QA, DevOps, and AI research teams.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
                    IST (UTC+5:30)
                  </span>
                </div>
              </div>
            </div>

            <p className="reveal reveal-d3" style={{
              textAlign: 'center', marginTop: 32,
              fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7,
            }}>
              Combined 12.5-hour timezone coverage for near-continuous development cycles.
            </p>
          </div>
        </section>

        {/* ── AWARDS MARQUEE ── */}
        <AwardsMarquee />

        {/* ── CTA ── */}
        <section className="section-padding">
          <div className="cb-container">
            <div
              className="reveal"
              style={{
                textAlign: 'center', padding: 'clamp(48px, 6vw, 96px) clamp(20px, 4vw, 48px)',
                background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 32, position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Glow */}
              <div aria-hidden="true" style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 500, height: 500,
                background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#22c55e', display: 'block', marginBottom: 20, position: 'relative',
              }}>Let&apos;s Build Together</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', fontWeight: 800, color: '#ffffff',
                letterSpacing: '-0.04em', marginBottom: 20, lineHeight: 1.1, position: 'relative',
              }}>
                Want to work with us?
              </h2>
              <p style={{
                fontSize: 18, color: 'rgba(255,255,255,0.4)', maxWidth: 500,
                margin: '0 auto 40px', lineHeight: 1.7, position: 'relative',
              }}>
                From seed-stage startups to public companies &mdash; we help every kind of builder ship software that matters.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '18px 44px', borderRadius: 100, background: '#22c55e', color: '#000',
                    fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                    Start a Project
                  </button>
                </Link>
                <Link href="/case-studies" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '18px 44px', borderRadius: 100,
                    background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.7)',
                    fontSize: 16, fontWeight: 600, border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                    View Case Studies
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        </article>
      </main>
      <Footer />

      {/* Pulse animation for timeline */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </>
  );
}
