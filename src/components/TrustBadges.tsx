import Image from 'next/image';

const svgBadges = [
  { src: '/awards/aws-advance-tier.svg', alt: 'AWS Advanced Tier Partner', w: 60, h: 48 },
  { src: '/awards/socII-icon.svg', alt: 'SOC II Compliant', w: 48, h: 48 },
  { src: '/awards/ISO-icon.svg', alt: 'ISO 27001 Certified', w: 48, h: 48 },
  { src: '/awards/Webby-icon.svg', alt: 'Webby Award Honoree', w: 48, h: 48 },
];

export default function TrustBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: compact ? 20 : 32,
      padding: compact ? '24px 0' : '40px 0',
      opacity: 0.7,
    }}>
      {/* Clutch badge — text-based for guaranteed visibility */}
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 6, background: 'rgba(255,82,51,0.12)', border: '1px solid rgba(255,82,51,0.3)' }}>
          <span style={{ fontSize: compact ? 13 : 15, fontWeight: 900, color: '#FF5233', letterSpacing: '-0.03em', fontStyle: 'italic' }}>clutch</span>
        </div>
        <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Top GenAI 2026</span>
      </div>
      {svgBadges.map((b) => (
        <Image
          key={b.src}
          src={b.src}
          alt={b.alt}
          width={compact ? Math.round(b.w * 0.8) : b.w}
          height={compact ? Math.round(b.h * 0.8) : b.h}
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }}
        />
      ))}
    </div>
  );
}
