'use client';

import { useRef, useEffect } from 'react';

/* ── SVG Icon Components ── */

function ShieldCheckIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L3.5 6.5V11.5C3.5 16.45 7.02 21.07 12 22.5C16.98 21.07 20.5 16.45 20.5 11.5V6.5L12 2Z"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        opacity={0.15}
      />
      <path
        d="M12 2L3.5 6.5V11.5C3.5 16.45 7.02 21.07 12 22.5C16.98 21.07 20.5 16.45 20.5 11.5V6.5L12 2Z"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="10" width="14" height="11" rx="2.5" stroke={color} strokeWidth="1.2" fill="none" opacity={0.15} />
      <rect x="5" y="10" width="14" height="11" rx="2.5" stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M8 10V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V10" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="15.5" r="1.5" fill={color} opacity={0.6} />
    </svg>
  );
}

function ServerShieldIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L3.5 6.5V11.5C3.5 16.45 7.02 21.07 12 22.5C16.98 21.07 20.5 16.45 20.5 11.5V6.5L12 2Z"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        opacity={0.15}
      />
      <path
        d="M12 2L3.5 6.5V11.5C3.5 16.45 7.02 21.07 12 22.5C16.98 21.07 20.5 16.45 20.5 11.5V6.5L12 2Z"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M12 16.5C12 16.5 7.5 13.5 7.5 10.75C7.5 9.5 8.5 8.5 9.75 8.5C10.72 8.5 11.55 9.06 12 9.88C12.45 9.06 13.28 8.5 14.25 8.5C15.5 8.5 16.5 9.5 16.5 10.75C16.5 13.5 12 16.5 12 16.5Z" fill={color} opacity={0.35} stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

function CreditCardShieldIcon({ size = 36, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

/* ── Central Verified Shield (focal point) ── */
function CentralShield() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer glow ring */}
      <circle cx="40" cy="40" r="38" stroke="rgba(34,197,94,0.08)" strokeWidth="1" fill="none" />
      <circle cx="40" cy="40" r="34" stroke="rgba(34,197,94,0.12)" strokeWidth="0.5" fill="none" />
      {/* Shield body */}
      <path
        d="M40 12L18 22V36C18 50.36 27.36 63.56 40 67C52.64 63.56 62 50.36 62 36V22L40 12Z"
        fill="rgba(34,197,94,0.06)"
        stroke="rgba(34,197,94,0.35)"
        strokeWidth="1.2"
      />
      <path
        d="M40 16L22 24.5V36C22 48.3 29.8 59.5 40 62.8C50.2 59.5 58 48.3 58 36V24.5L40 16Z"
        fill="rgba(34,197,94,0.04)"
        stroke="rgba(34,197,94,0.2)"
        strokeWidth="0.8"
      />
      {/* Check mark */}
      <path d="M30 40L37 47L52 32" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Badge Data ── */

const badges = [
  {
    name: 'GDPR',
    desc: 'EU Data Protection Regulation',
    Icon: ShieldCheckIcon,
  },
  {
    name: 'CCPA',
    desc: 'California Consumer Privacy Act',
    Icon: LockIcon,
  },
  {
    name: 'HIPAA',
    desc: 'Healthcare Data Compliance',
    Icon: HeartShieldIcon,
  },
  {
    name: 'PCI DSS',
    desc: 'Payment Card Industry Standard',
    Icon: CreditCardShieldIcon,
  },
  {
    name: 'SOC 2',
    desc: 'Type II Security Certification',
    Icon: ServerShieldIcon,
  },
  {
    name: 'ISO 27001',
    desc: 'Information Security Management',
    Icon: CertificateIcon,
  },
];

/* ── Styles ── */

const sectionStyle: React.CSSProperties = {
  background: '#000000',
  borderTop: '1px solid rgba(255,255,255,0.06)',
  position: 'relative',
  overflow: 'hidden',
};

const bgGlowStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  background: 'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 60%)',
  pointerEvents: 'none',
};

const containerStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
  maxWidth: 1100,
  margin: '0 auto',
  padding: '0 24px',
};

const headerLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#22c55e',
  marginBottom: 20,
  opacity: 0.7,
};

const headingStyle: React.CSSProperties = {
  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
  fontWeight: 500,
  color: '#ffffff',
  letterSpacing: '-0.04em',
  lineHeight: 1.1,
  margin: '0 auto',
  maxWidth: 700,
};

const headingFadedStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.2)',
};

const subTextStyle: React.CSSProperties = {
  fontSize: 'clamp(14px, 2.5vw, 16px)',
  color: '#9ca3af',
  lineHeight: 1.7,
  margin: '20px auto 0',
  maxWidth: 560,
};

const centralShieldWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto clamp(40px, 6vw, 56px)',
  position: 'relative',
};

const centralLabelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(34,197,94,0.6)',
  marginTop: 14,
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 16,
  maxWidth: 960,
  margin: '0 auto',
};

const badgeBaseStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'clamp(28px, 4vw, 40px) 20px',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.02)',
  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
  cursor: 'default',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
};

const badgeIconWrapperStyle: React.CSSProperties = {
  width: 64,
  height: 64,
  borderRadius: '50%',
  background: 'rgba(34,197,94,0.05)',
  border: '1px solid rgba(34,197,94,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 18,
  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
};

const badgeNameStyle: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 700,
  color: '#ffffff',
  letterSpacing: '-0.01em',
  marginBottom: 6,
};

const badgeDescStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  color: 'rgba(255,255,255,0.35)',
  letterSpacing: '0.02em',
  lineHeight: 1.5,
};

const badgeShineStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 1,
  background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.15), transparent)',
  opacity: 0,
  transition: 'opacity 0.4s ease',
};

const dividerLineStyle: React.CSSProperties = {
  width: 60,
  height: 1,
  background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)',
  margin: '0 auto clamp(32px, 5vw, 48px)',
};

/* ── Responsive style tag for grid on mobile ── */
const responsiveCSS = `
  @media (max-width: 768px) {
    .cb-premium-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 480px) {
    .cb-premium-grid {
      grid-template-columns: 1fr !important;
      gap: 12px !important;
    }
  }
`;

/* ── Component ── */

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
    <section ref={ref} className="section-padding" style={sectionStyle}>
      <style>{responsiveCSS}</style>

      {/* Background glow */}
      <div style={bgGlowStyle} />

      <div style={containerStyle}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <div style={headerLabelStyle}>Security &amp; Compliance</div>
          <h2 style={headingStyle}>
            Enterprise-Grade Security<br />
            <span style={headingFadedStyle}>&amp; Compliance Standards.</span>
          </h2>
          <p style={subTextStyle}>
            Every project we deliver meets the highest security and regulatory standards.
            Your data is protected at every layer of our infrastructure.
          </p>
        </div>

        {/* Central Shield Focal Point */}
        <div className="reveal reveal-d1" style={centralShieldWrapperStyle}>
          <div style={{
            position: 'absolute',
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <CentralShield />
          <div style={centralLabelStyle}>Verified &amp; Certified</div>
        </div>

        {/* Divider */}
        <div className="reveal reveal-d2" style={dividerLineStyle} />

        {/* Badges Grid */}
        <div className="cb-premium-grid" style={gridStyle}>
          {badges.map((badge, i) => (
            <div
              key={badge.name}
              className={`reveal reveal-d${Math.min(i + 1, 6)}`}
              style={badgeBaseStyle}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(34,197,94,0.2)';
                el.style.background = 'rgba(34,197,94,0.04)';
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,197,94,0.08), inset 0 1px 0 rgba(34,197,94,0.06)';
                const shine = el.querySelector('.badge-shine') as HTMLElement;
                if (shine) shine.style.opacity = '1';
                const iconWrap = el.querySelector('.badge-icon-wrap') as HTMLElement;
                if (iconWrap) {
                  iconWrap.style.background = 'rgba(34,197,94,0.1)';
                  iconWrap.style.borderColor = 'rgba(34,197,94,0.25)';
                  iconWrap.style.boxShadow = '0 0 20px rgba(34,197,94,0.1)';
                }
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.background = 'rgba(255,255,255,0.02)';
                el.style.transform = '';
                el.style.boxShadow = '';
                const shine = el.querySelector('.badge-shine') as HTMLElement;
                if (shine) shine.style.opacity = '0';
                const iconWrap = el.querySelector('.badge-icon-wrap') as HTMLElement;
                if (iconWrap) {
                  iconWrap.style.background = 'rgba(34,197,94,0.05)';
                  iconWrap.style.borderColor = 'rgba(34,197,94,0.1)';
                  iconWrap.style.boxShadow = '';
                }
              }}
            >
              {/* Top shine line */}
              <div className="badge-shine" style={badgeShineStyle} />
              {/* Icon */}
              <div className="badge-icon-wrap" style={badgeIconWrapperStyle}>
                <badge.Icon size={32} color="#22c55e" />
              </div>
              {/* Text */}
              <span style={badgeNameStyle}>{badge.name}</span>
              <span style={badgeDescStyle}>{badge.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
