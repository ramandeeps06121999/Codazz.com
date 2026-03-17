'use client';

const partners = [
  'Stripe', 'Shopify', 'Salesforce', 'Microsoft', 'Google Cloud',
  'AWS', 'Twilio', 'HubSpot', 'Zendesk', 'Atlassian',
  'Datadog', 'Vercel', 'MongoDB', 'Cloudflare', 'Figma',
];

function PartnerPill({ name }: { name: string }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '10px 28px', border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: 100, minWidth: 120, height: 44, flexShrink: 0,
        background: 'rgba(0,0,0,0.015)', transition: '0.3s', cursor: 'default',
        whiteSpace: 'nowrap' as const,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; }}
    >
      <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.55)', letterSpacing: '-0.01em' }}>{name}</span>
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '52px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 200, height: '100%', background: 'linear-gradient(to right, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: '100%', background: 'linear-gradient(to left, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Label */}
      <div style={{ textAlign: 'center', marginBottom: 32, position: 'relative', zIndex: 3 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(0,0,0,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Trusted by 150+ companies worldwide
        </span>
      </div>

      <div style={{ marginBottom: 10, display: 'flex', gap: 10, width: 'max-content', animation: 'marquee-l 40s linear infinite' }}>
        {[...partners, ...partners].map((name, i) => (
          <PartnerPill key={`${name}-${i}`} name={name} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, width: 'max-content', animation: 'marquee-r 45s linear infinite' }}>
        {[...partners.slice(8), ...partners, ...partners.slice(0, 8)].map((name, i) => (
          <PartnerPill key={`${name}-r-${i}`} name={name} />
        ))}
      </div>
    </section>
  );
}
