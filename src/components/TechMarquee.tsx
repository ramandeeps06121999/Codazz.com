'use client';

const techItems = [
  { icon: '🤖', label: 'AI / LLM Integration' },
  { icon: '🧠', label: 'Machine Learning' },
  { icon: '🔮', label: 'Computer Vision' },
  { icon: '⛓️', label: 'Blockchain / Web3' },
  { icon: '🥽', label: 'AR / VR / Spatial Computing' },
  { icon: '📱', label: 'React Native' },
  { icon: '🦋', label: 'Flutter' },
  { icon: '🔗', label: 'GraphQL / REST APIs' },
  { icon: '☁️', label: 'Cloud Native (AWS / GCP)' },
  { icon: '🐳', label: 'Kubernetes / Docker' },
  { icon: '⚡', label: 'Edge Computing' },
  { icon: '🌐', label: 'IoT Integration' },
  { icon: '📊', label: 'Real-Time Analytics' },
  { icon: '🎯', label: 'Predictive Analytics' },
  { icon: '🔄', label: 'CI/CD Pipelines' },
  { icon: '🛰️', label: 'WebSockets / Streaming' },
];

const duplicated = [...techItems, ...techItems];

export default function TechMarquee() {
  return (
    <section style={{
      background: '#000000',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900, height: 500,
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ textAlign: 'center', padding: 'clamp(56px,8vw,96px) 24px clamp(36px,5vw,56px)', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 18px', borderRadius: 100, marginBottom: 24,
          background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
            Advanced Technologies
          </span>
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.75rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.08,
          color: '#ffffff',
          margin: '0 auto 20px',
          maxWidth: 760,
        }}>
          Cutting-Edge Tech<br />
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>Built Into Every App.</span>
        </h2>
        <p style={{
          fontSize: 'clamp(14px, 2.5vw, 17px)',
          color: '#9ca3af',
          lineHeight: 1.7,
          maxWidth: 540,
          margin: '0 auto',
        }}>
          We do not just build apps — we engineer intelligent, connected, future-proof mobile experiences.
        </p>
      </div>

      {/* Marquee row 1 — left to right */}
      <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 14 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: 120, height: '100%', background: 'linear-gradient(to right, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: '100%', background: 'linear-gradient(to left, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', gap: 12, width: 'max-content', animation: 'tech-marquee-ltr 35s linear infinite' }}>
          {duplicated.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 20px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 100,
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              <span style={{ fontSize: 15 }}>{item.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right to left (offset half) */}
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(56px,8vw,96px)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: 120, height: '100%', background: 'linear-gradient(to right, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: '100%', background: 'linear-gradient(to left, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', gap: 12, width: 'max-content', animation: 'tech-marquee-rtl 40s linear infinite' }}>
          {[...duplicated].reverse().map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 20px',
              background: 'rgba(34,197,94,0.04)',
              border: '1px solid rgba(34,197,94,0.1)',
              borderRadius: 100,
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              <span style={{ fontSize: 15 }}>{item.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(34,197,94,0.55)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes tech-marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes tech-marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
