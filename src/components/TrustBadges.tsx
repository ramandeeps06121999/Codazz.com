import Image from 'next/image';

const badges = [
  { src: '/awards/Clutch-Top-GenerativeAI-Company2026.png', alt: 'Clutch Top Generative AI Company 2026', w: 60, h: 48 },
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
      {badges.map((b) => (
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
