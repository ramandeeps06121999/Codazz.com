'use client';

import { useRef, useEffect } from 'react';

const badges = [
  { name: 'GDPR', desc: 'EU Data Protection', icon: '🇪🇺' },
  { name: 'CCPA', desc: 'California Privacy', icon: '🔐' },
  { name: 'HIPAA', desc: 'Healthcare Compliance', icon: '🏥' },
  { name: 'PCI DSS', desc: 'Payment Security', icon: '💳' },
  { name: 'SOC 2', desc: 'Type II Certified', icon: '🛡️' },
  { name: 'ISO 27001', desc: 'Info Security', icon: '✅' },
];

export default function ComplianceBadges() {
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
      {/* Subtle glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(34,197,94,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>
            Security & Compliance
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 auto', maxWidth: 700 }}>
            Enterprise-Grade Security<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>& Compliance.</span>
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', color: '#9ca3af', lineHeight: 1.7, margin: '20px auto 0', maxWidth: 560 }}>
            Every project we deliver meets the highest security and regulatory standards. Your data is protected at every layer.
          </p>
        </div>

        {/* Badges Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 16,
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {badges.map((badge, i) => (
            <div
              key={badge.name}
              className={`reveal reveal-d${i + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(24px, 4vw, 32px) 16px',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16,
                background: 'rgba(255,255,255,0.02)',
                transition: 'all 0.35s ease',
                cursor: 'default',
                textAlign: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
                e.currentTarget.style.background = 'rgba(34,197,94,0.04)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <span style={{ fontSize: 32, marginBottom: 12 }}>{badge.icon}</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em', marginBottom: 4 }}>{badge.name}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>{badge.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
