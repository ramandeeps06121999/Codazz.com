'use client';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { target: 500, suffix: '+', label: 'Systems Engineered', desc: 'Apps, platforms & enterprise tools shipped globally' },
  { target: 150, suffix: '+', label: 'Enterprise Partners', desc: 'Serving Fortune 500s to Series A startups worldwide' },
  { target: 99,  suffix: '%', label: 'Client Satisfaction', desc: 'Measured across 500+ post-launch surveys' },
  { target: 12,  suffix: '+', label: 'Global Offices',     desc: 'Engineering hubs across 4 continents' },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ s, index, active }: { s: typeof stats[0]; index: number; active: boolean }) {
  const count = useCounter(s.target, 1600, active);
  return (
    <div
      className={`reveal reveal-d${index + 1}`}
      style={{
        padding: 'clamp(24px, 4vw, 52px) clamp(20px, 3vw, 44px)',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '24px',
        background: 'rgba(0,0,0,0.015)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(17,24,39,0.05)'; e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(17,24,39,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ width: 28, height: 3, background: '#111827', borderRadius: 2, marginBottom: 'clamp(20px, 3vw, 36px)' }} />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 16 }}>
        <span style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 700, color: '#111827', lineHeight: 1, letterSpacing: '-0.04em' }}>
          {count}
        </span>
        <span style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 700, color: '#111827' }}>{s.suffix}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: '#111827', letterSpacing: '-0.01em', marginBottom: 10 }}>{s.label}</div>
      <div style={{ fontSize: 13, color: 'rgb(0,0,0)', lineHeight: 1.6 }}>{s.desc}</div>
    </div>
  );
}

export default function SuccessMetrics() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          setActive(true);
        }
      }),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'clamp(20px, 4vw, 40px)', marginBottom: 'clamp(40px, 6vw, 80px)', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>By The Numbers</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              The Results<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Speak Loudly.</span>
            </h2>
          </div>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgb(0,0,0)', maxWidth: 360, lineHeight: 1.7, margin: 0 }}>
            A decade of engineering excellence, measured in outcomes — not outputs.
          </p>
        </div>

        <div className="stats-grid" style={{ gap: 2 }}>
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
