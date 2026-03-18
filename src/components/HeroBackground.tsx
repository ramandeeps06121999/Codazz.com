'use client';

/**
 * Reusable hero background with dot grid + mesh gradients + noise texture.
 * Variants control the gradient positioning per page type.
 */
export default function HeroBackground({
  variant = 'default',
}: {
  variant?: 'default' | 'center' | 'left' | 'right' | 'wide';
}) {
  // Gradient position presets
  const gradients: Record<string, React.CSSProperties[]> = {
    default: [
      { top: -120, right: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' },
      { bottom: -80, left: '15%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' },
    ],
    center: [
      { top: -100, left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 65%)' },
    ],
    left: [
      { top: -150, left: -100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' },
      { bottom: -60, right: '20%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)' },
    ],
    right: [
      { top: -100, right: -80, width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' },
      { bottom: -80, left: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)' },
    ],
    wide: [
      { top: -200, left: '20%', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 60%)' },
      { top: -100, right: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)' },
      { bottom: -100, left: '40%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' },
    ],
  };

  return (
    <>
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          mask: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 70%)',
          WebkitMask: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Center green glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(1400px, 160vw)',
          height: 'min(1000px, 120vw)',
          background: 'radial-gradient(ellipse, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.06) 25%, rgba(34,197,94,0.02) 45%, transparent 65%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Mesh gradient blobs */}
      {(gradients[variant] || gradients.default).map((style, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            filter: 'blur(40px)',
            ...style,
          }}
        />
      ))}

      {/* Noise texture */}
      <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.3 }}>
        <filter id="hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" opacity="0.04" />
      </svg>
    </>
  );
}
