'use client';
import { useRef, useEffect } from 'react';

const reasons = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Fixed-Price Guarantee',
    desc: 'You know exactly what you pay before we write a single line of code. No hourly billing, no scope creep charges — ever.',
    stat: '0',
    statLabel: 'Budget overruns',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '8-Week MVP Programme',
    desc: 'From signed contract to live product in 8 weeks. Our proven Rapid Launch framework eliminates the delays that kill momentum.',
    stat: '8wk',
    statLabel: 'Average MVP delivery',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'IP Ownership on Day 1',
    desc: 'You own 100% of the code and IP from the moment we sign. NDA executed before any project discussion begins.',
    stat: '100%',
    statLabel: 'IP transferred to you',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Dedicated Senior Team',
    desc: 'You get a senior engineer, designer, and project lead — not juniors managed by a senior. Direct access, no account managers.',
    stat: 'Sr.',
    statLabel: 'Engineers only',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: '24/7 Post-Launch Support',
    desc: 'SLA-backed monitoring, incident response, and feature iterations. We\'re as invested in your success post-launch as we are on day one.',
    stat: '24/7',
    statLabel: 'Monitoring & support',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Virtual-First, Global Talent',
    desc: 'HQ in New York & Dubai, but 99% of meetings happen online. We handpick the best engineers worldwide and match your timezone — no 3am stand-ups, no travel overhead.',
    stat: '99%',
    statLabel: 'Meetings online',
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="cb-container">

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 8vw, 100px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Why Codazz</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 auto 24px', maxWidth: 800 }}>
            Built Different.<br />
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>By Design.</span>
          </h2>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgb(0,0,0)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            We're not a typical agency. Here's exactly what makes us different — and why our clients keep coming back.
          </p>
        </div>

        {/* Grid */}
        <div className="whyus-grid">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`reveal reveal-d${Math.min(i + 1, 6)}`}
              style={{
                padding: 'clamp(28px, 4vw, 48px) clamp(24px, 3.5vw, 40px)',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: 'clamp(24px, 3vw, 36px)',
                background: 'rgba(0,0,0,0.015)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(17,24,39,0.25)';
                e.currentTarget.style.background = 'rgba(17,24,39,0.03)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.06), 0 0 40px rgba(17,24,39,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                e.currentTarget.style.background = 'rgba(0,0,0,0.015)';
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Watermark stat */}
              <div aria-hidden="true" style={{ position: 'absolute', right: 20, bottom: -10, fontSize: 'clamp(48px, 10vw, 80px)', fontWeight: 900, color: 'rgba(0,0,0,0.015)', lineHeight: 1, pointerEvents: 'none', letterSpacing: '-0.05em' }}>
                {r.stat}
              </div>

              {/* Icon */}
              <div style={{ width: 60, height: 60, borderRadius: 18, background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.icon}
              </div>

              {/* Stat */}
              <div>
                <div style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.stat}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>{r.statLabel}</div>
              </div>

              {/* Text */}
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 10, letterSpacing: '-0.02em' }}>{r.title}</h3>
                <p style={{ fontSize: 14, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
