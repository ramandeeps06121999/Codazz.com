'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

/* ── SVG Icon Components ── */

function ShieldCheckIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3.5 6.5V11.5C3.5 16.45 7.02 21.07 12 22.5C16.98 21.07 20.5 16.45 20.5 11.5V6.5L12 2Z" stroke={color} strokeWidth="1.2" fill="none" opacity={0.15} />
      <path d="M12 2L3.5 6.5V11.5C3.5 16.45 7.02 21.07 12 22.5C16.98 21.07 20.5 16.45 20.5 11.5V6.5L12 2Z" stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="10" width="14" height="11" rx="2.5" stroke={color} strokeWidth="1.2" fill="none" opacity={0.15} />
      <rect x="5" y="10" width="14" height="11" rx="2.5" stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M8 10V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V10" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="15.5" r="1.5" fill={color} opacity={0.6} />
    </svg>
  );
}

function ServerShieldIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="7" rx="2" stroke={color} strokeWidth="1.2" fill="none" opacity={0.15} />
      <rect x="3" y="3" width="18" height="7" rx="2" stroke={color} strokeWidth="1.2" fill="none" />
      <circle cx="7" cy="6.5" r="1" fill={color} opacity={0.6} />
      <line x1="10" y1="6.5" x2="17" y2="6.5" stroke={color} strokeWidth="1" strokeLinecap="round" opacity={0.4} />
      <path d="M12 13L7 15.5V18.5C7 20.65 9.12 22.27 12 23C14.88 22.27 17 20.65 17 18.5V15.5L12 13Z" stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M10 18L11.5 19.5L14.5 16.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartShieldIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3.5 6.5V11.5C3.5 16.45 7.02 21.07 12 22.5C16.98 21.07 20.5 16.45 20.5 11.5V6.5L12 2Z" stroke={color} strokeWidth="1.2" fill="none" opacity={0.15} />
      <path d="M12 2L3.5 6.5V11.5C3.5 16.45 7.02 21.07 12 22.5C16.98 21.07 20.5 16.45 20.5 11.5V6.5L12 2Z" stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M12 16.5C12 16.5 7.5 13.5 7.5 10.75C7.5 9.5 8.5 8.5 9.75 8.5C10.72 8.5 11.55 9.06 12 9.88C12.45 9.06 13.28 8.5 14.25 8.5C15.5 8.5 16.5 9.5 16.5 10.75C16.5 13.5 12 16.5 12 16.5Z" fill={color} opacity={0.35} stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

function CreditCardShieldIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2.5" stroke={color} strokeWidth="1.2" fill="none" opacity={0.15} />
      <rect x="2" y="5" width="20" height="14" rx="2.5" stroke={color} strokeWidth="1.2" fill="none" />
      <line x1="2" y1="10" x2="22" y2="10" stroke={color} strokeWidth="1.2" opacity={0.4} />
      <rect x="5" y="13" width="5" height="2.5" rx="0.8" stroke={color} strokeWidth="0.8" fill={color} opacity={0.2} />
      <circle cx="18" cy="14.25" r="1" fill={color} opacity={0.5} />
    </svg>
  );
}

function CertificateIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="2" width="18" height="16" rx="2" stroke={color} strokeWidth="1.2" fill="none" opacity={0.15} />
      <rect x="3" y="2" width="18" height="16" rx="2" stroke={color} strokeWidth="1.2" fill="none" />
      <line x1="7" y1="6" x2="17" y2="6" stroke={color} strokeWidth="1" strokeLinecap="round" opacity={0.3} />
      <line x1="7" y1="9" x2="14" y2="9" stroke={color} strokeWidth="1" strokeLinecap="round" opacity={0.3} />
      <line x1="7" y1="12" x2="11" y2="12" stroke={color} strokeWidth="1" strokeLinecap="round" opacity={0.3} />
      <circle cx="17" cy="17" r="4" stroke={color} strokeWidth="1.2" fill="rgba(0,0,0,0.8)" />
      <path d="M15.5 17L16.5 18L18.5 16" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 21V23L17 22L18.5 23V21" stroke={color} strokeWidth="0.8" fill="none" opacity={0.5} />
    </svg>
  );
}

const badges = [
  { name: 'GDPR', full: 'EU Data Protection Regulation', desc: 'Full compliance with EU data protection laws. User consent management, data portability, and right-to-erasure built into every project.', Icon: ShieldCheckIcon },
  { name: 'CCPA', full: 'California Consumer Privacy Act', desc: 'California privacy compliance with opt-out mechanisms, data disclosure workflows, and consumer rights management.', Icon: LockIcon },
  { name: 'HIPAA', full: 'Healthcare Data Compliance', desc: 'End-to-end healthcare data protection. Encrypted PHI storage, audit trails, BAAs, and access controls for telehealth and EHR systems.', Icon: HeartShieldIcon },
  { name: 'PCI DSS', full: 'Payment Card Industry Standard', desc: 'Level 1 PCI DSS compliance for payment processing. Tokenized card data, secure transmission, and quarterly vulnerability scans.', Icon: CreditCardShieldIcon },
  { name: 'SOC 2', full: 'Type II Security Certification', desc: 'Independently audited security controls covering availability, processing integrity, confidentiality, and privacy.', Icon: ServerShieldIcon },
  { name: 'ISO 27001', full: 'Information Security Management', desc: 'Certified information security management system covering risk assessment, incident response, and continuous improvement.', Icon: CertificateIcon },
];

const marqueeItems = [
  { icon: '🔒', label: 'GDPR Compliant' }, { icon: '🏥', label: 'HIPAA Certified' },
  { icon: '✅', label: 'SOC 2 Type II' }, { icon: '💳', label: 'PCI DSS Level 1' },
  { icon: '📋', label: 'ISO 27001' }, { icon: '🔐', label: 'AES-256 Encryption' },
  { icon: '🕵️', label: 'Penetration Tested' }, { icon: '🏛️', label: 'CCPA Compliant' },
  { icon: '🛡️', label: 'Zero-Trust Architecture' }, { icon: '🔑', label: 'MFA Enforced' },
  { icon: '☁️', label: 'AWS Security Hub' }, { icon: '📡', label: '99.99% Uptime SLA' },
];

export default function ComplianceBadges() {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const CARD_W = 320;
  const GAP = 16;

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (CARD_W + GAP));
    setActiveIndex(Math.min(idx, badges.length - 1));
  }, []);

  const scrollTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, badges.length - 1));
    scrollRef.current?.scrollTo({ left: clamped * (CARD_W + GAP), behavior: 'smooth' });
    setActiveIndex(clamped);
  };

  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section ref={ref} className="section-padding" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes security-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .compliance-scroll::-webkit-scrollbar { display: none; }
        .compliance-scroll { scrollbar-width: none; scroll-snap-type: x mandatory; }
        .compliance-card { scroll-snap-align: start; scroll-snap-stop: always; }
        .compliance-card:hover { border-color: rgba(34,197,94,0.25) !important; background: rgba(34,197,94,0.04) !important; transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,197,94,0.1); }
        .compliance-card:hover .compliance-icon { background: rgba(34,197,94,0.12) !important; border-color: rgba(34,197,94,0.3) !important; box-shadow: 0 0 24px rgba(34,197,94,0.15); }
      `}</style>

      {/* Background glow */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="reveal cb-container" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#22c55e', opacity: 0.7, marginBottom: 20 }}>Security & Compliance</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 auto', maxWidth: 700 }}>
            Enterprise-Grade Security<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>& Compliance Standards.</span>
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', color: '#9ca3af', lineHeight: 1.7, margin: '20px auto 0', maxWidth: 560 }}>
            Every project meets the highest security and regulatory standards. Your data is protected at every layer.
          </p>
        </div>

        {/* Security Marquee Strip */}
        <div className="reveal" style={{ position: 'relative', overflow: 'hidden', margin: '0 0 clamp(32px,5vw,48px)', padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 100, height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: 100, height: '100%', background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ display: 'flex', gap: 48, width: 'max-content', animation: 'security-marquee 30s linear infinite' }}>
            {doubled.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', flexShrink: 0 }}>
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.label}</span>
                <span style={{ color: 'rgba(34,197,94,0.3)', fontSize: 8, marginLeft: 12 }}>◆</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="reveal" style={{ position: 'relative' }}>
          {/* Fade edges */}
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 'clamp(40px, 8vw, 80px)', height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: 'clamp(40px, 8vw, 80px)', height: '100%', background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="compliance-scroll"
            style={{ display: 'flex', gap: GAP, overflowX: 'auto', padding: '8px clamp(24px, 5vw, 60px) 8px', cursor: 'grab' }}
          >
            {badges.map((badge) => (
              <div
                key={badge.name}
                className="compliance-card"
                style={{
                  flex: `0 0 ${CARD_W}px`,
                  padding: 'clamp(28px, 4vw, 36px) clamp(24px, 3vw, 32px)',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top shine */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)' }} />

                {/* Icon */}
                <div className="compliance-icon" style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20, transition: 'all 0.4s ease',
                }}>
                  <badge.Icon size={32} color="#22c55e" />
                </div>

                {/* Name */}
                <span style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', marginBottom: 4 }}>{badge.name}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(34,197,94,0.6)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>{badge.full}</span>

                {/* Description */}
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, flex: 1 }}>{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots + arrows */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 32 }}>
          <button onClick={() => scrollTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous"
            style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: activeIndex > 0 ? 'rgba(255,255,255,0.05)' : 'transparent', cursor: activeIndex > 0 ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: activeIndex > 0 ? 1 : 0.3, transition: '0.3s', color: '#fff' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>

          <div style={{ display: 'flex', gap: 8 }}>
            {badges.map((_, i) => (
              <button key={i} onClick={() => scrollTo(i)} aria-label={`Badge ${i + 1}`}
                style={{ width: activeIndex === i ? 28 : 8, height: 8, borderRadius: 100, border: 'none', background: activeIndex === i ? '#22c55e' : 'rgba(255,255,255,0.12)', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)', padding: 0 }} />
            ))}
          </div>

          <button onClick={() => scrollTo(activeIndex + 1)} disabled={activeIndex === badges.length - 1} aria-label="Next"
            style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: activeIndex < badges.length - 1 ? 'rgba(255,255,255,0.05)' : 'transparent', cursor: activeIndex < badges.length - 1 ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: activeIndex < badges.length - 1 ? 1 : 0.3, transition: '0.3s', color: '#fff' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
