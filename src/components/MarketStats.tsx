'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered', prefix: '' },
  { value: 150, suffix: '+', label: 'Clients Worldwide', prefix: '' },
  { value: 98, suffix: '%', label: 'Client Retention Rate', prefix: '' },
  { value: 50, suffix: 'M+', label: 'Users on Our Platforms', prefix: '' },
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  }, [value, hasAnimated]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate]);

  return (
    <div ref={ref} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1 }}>
      {prefix}{count}{suffix}
    </div>
  );
}

export default function MarketStats() {
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
    <section ref={ref} className="section-padding" style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(34,197,94,0.03) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>
            By the Numbers
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 auto', maxWidth: 600 }}>
            Trusted by <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>500+</span> Businesses<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>Worldwide.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-d${i + 1}`}
              style={{
                textAlign: 'center',
                padding: 'clamp(32px, 5vw, 48px) 24px',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20,
                background: 'rgba(255,255,255,0.02)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.15)';
                e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.transform = '';
              }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em', marginTop: 12, textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
