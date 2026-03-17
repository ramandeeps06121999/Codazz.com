'use client';
import { useRef, useEffect } from 'react';

const rows = [
  { feature: 'Fixed-Price Contract',       us: true,  agency: false, freelancer: false },
  { feature: 'Dedicated Senior Engineers', us: true,  agency: false, freelancer: true  },
  { feature: 'IP Ownership Day 1',         us: true,  agency: false, freelancer: true  },
  { feature: '8-Week MVP Delivery',        us: true,  agency: false, freelancer: false },
  { feature: 'NDA Signed Upfront',         us: true,  agency: true,  freelancer: false },
  { feature: '24/7 Post-Launch SLA',       us: true,  agency: true,  freelancer: false },
  { feature: 'Transparent Weekly Demos',   us: true,  agency: false, freelancer: false },
  { feature: 'Full Source Code Handover',  us: true,  agency: false, freelancer: true  },
  { feature: 'Scalable to Enterprise',     us: true,  agency: true,  freelancer: false },
];

const Check = () => (
  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(79,70,229,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
  </div>
);

const Cross = () => (
  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
  </div>
);

export default function ComparisonTable() {
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
    <section ref={ref} className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="cb-container">

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 8vw, 80px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>How We Compare</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 auto', maxWidth: 800 }}>
            Why Clients Choose Us<br />
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>Over the Alternatives.</span>
          </h2>
        </div>

        {/* Table */}
        <div className="reveal reveal-d1 comparison-table" style={{ border: '1px solid rgba(0,0,0,0.06)', borderRadius: 40, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <div className="comparison-table-inner" style={{ overflow: 'hidden', minWidth: 600 }}>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'rgba(0,0,0,0.02)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ padding: 'clamp(14px, 2vw, 28px) clamp(16px, 3vw, 40px)', fontSize: 13, fontWeight: 700, color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</div>
            {[
              { label: 'Codazz', highlight: true },
              { label: 'Traditional Agency', highlight: false },
              { label: 'Freelancer', highlight: false },
            ].map(col => (
              <div key={col.label} style={{ padding: 'clamp(14px, 2vw, 28px) clamp(16px, 3vw, 32px)', textAlign: 'center', borderLeft: '1px solid rgba(0,0,0,0.04)', background: col.highlight ? 'rgba(79,70,229,0.05)' : 'transparent' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: col.highlight ? '#4F46E5' : 'rgba(0,0,0,0.55)', letterSpacing: '-0.01em' }}>{col.label}</div>
                {col.highlight && <div style={{ width: 32, height: 2, background: '#4F46E5', borderRadius: 1, margin: '8px auto 0' }} />}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                borderBottom: i < rows.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                transition: '0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <div style={{ padding: 'clamp(12px, 2vw, 22px) clamp(16px, 3vw, 40px)', fontSize: 15, color: 'rgba(0,0,0,0.55)', fontWeight: 500, display: 'flex', alignItems: 'center' }}>{row.feature}</div>
              <div style={{ padding: 'clamp(12px, 2vw, 22px) clamp(16px, 3vw, 32px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(0,0,0,0.04)', background: 'rgba(79,70,229,0.02)' }}>
                <Check />
              </div>
              <div style={{ padding: 'clamp(12px, 2vw, 22px) clamp(16px, 3vw, 32px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(0,0,0,0.04)' }}>
                {row.agency ? <Check /> : <Cross />}
              </div>
              <div style={{ padding: 'clamp(12px, 2vw, 22px) clamp(16px, 3vw, 32px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(0,0,0,0.04)' }}>
                {row.freelancer ? <Check /> : <Cross />}
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* CTA below table */}
        <div className="reveal reveal-d2" style={{ textAlign: 'center', marginTop: 60 }}>
          <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', marginBottom: 28 }}>Ready to work with a team that checks every box?</p>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
