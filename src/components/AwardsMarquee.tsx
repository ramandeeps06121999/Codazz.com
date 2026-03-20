'use client';

const awards = [
  { label: 'Clutch Top App Dev 2026', icon: '🏆' },
  { label: 'Clutch Top GenAI 2026', icon: '🤖' },
  { label: 'Webby Honoree 2024', icon: '🌐' },
  { label: 'AWS Advanced Partner', icon: '☁️' },
  { label: 'SOC 2 Certified', icon: '🔒' },
  { label: 'ISO 27001', icon: '✅' },
  { label: 'Red Herring 100', icon: '🎯' },
];

export default function AwardsMarquee() {
  const items = [...awards, ...awards, ...awards];

  return (
    <section style={{
      background: 'linear-gradient(180deg, rgba(34,197,94,0.04) 0%, transparent 100%)',
      borderTop: '1px solid rgba(34,197,94,0.1)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      padding: '14px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 80, height: '100%', background: 'linear-gradient(to right, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: '100%', background: 'linear-gradient(to left, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div style={{
        display: 'flex',
        gap: 40,
        width: 'max-content',
        animation: 'awards-strip-scroll 25s linear infinite',
      }}>
        {items.map((award, i) => (
          <div key={`${award.label}-${i}`} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: 14 }}>{award.icon}</span>
            <span style={{
              fontSize: 12,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}>{award.label}</span>
            <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: 10, marginLeft: 8 }}>●</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes awards-strip-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
