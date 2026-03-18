'use client';

import { useRef, useEffect, useState } from 'react';
import { Globe } from '@/components/ui/globe';
import type { COBEOptions } from 'cobe';
import Link from 'next/link';

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.1, 0.1, 0.1],
  markerColor: [0.133, 0.773, 0.369],
  glowColor: [0.2, 0.9, 0.4],
  markers: [
    { location: [40.7128, -74.006], size: 0.12 },
    { location: [34.0522, -118.2437], size: 0.06 },
    { location: [41.8781, -87.6298], size: 0.06 },
    { location: [37.7749, -122.4194], size: 0.06 },
    { location: [30.2672, -97.7431], size: 0.05 },
    { location: [25.7617, -80.1918], size: 0.05 },
    { location: [43.6532, -79.3832], size: 0.05 },
    { location: [25.2048, 55.2708], size: 0.1 },
    { location: [51.5074, -0.1278], size: 0.07 },
    { location: [52.52, 13.405], size: 0.05 },
    { location: [48.8566, 2.3522], size: 0.05 },
    { location: [19.076, 72.8777], size: 0.07 },
    { location: [1.3521, 103.8198], size: 0.06 },
    { location: [35.6762, 139.6503], size: 0.05 },
    { location: [22.3193, 114.1694], size: 0.05 },
    { location: [37.5665, 126.978], size: 0.04 },
    { location: [-23.5505, -46.6333], size: 0.05 },
    { location: [-34.6037, -58.3816], size: 0.04 },
    { location: [6.5244, 3.3792], size: 0.04 },
    { location: [-1.2921, 36.8219], size: 0.04 },
    { location: [-33.8688, 151.2093], size: 0.05 },
  ],
};

const locations = [
  { city: 'New York', flag: 'HQ', highlight: true },
  { city: 'Dubai', flag: 'HQ', highlight: true },
  { city: 'London', flag: 'EU' },
  { city: 'Singapore', flag: 'APAC' },
  { city: 'Tokyo', flag: 'APAC' },
  { city: 'Sydney', flag: 'APAC' },
];

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export default function GlobalPresence() {
  const sectionRef = useRef<HTMLElement>(null);
  const [globeVisible, setGlobeVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('gp-visible');
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.gp-reveal').forEach(child => io.observe(child));

    // Only mount the globe when section is near the viewport
    const globeIo = new IntersectionObserver(
      ([entry]) => setGlobeVisible(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    globeIo.observe(el);

    return () => { io.disconnect(); globeIo.disconnect(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid background */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Soft glow behind globe */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(900px, 120vw)', height: 'min(900px, 120vw)',
        background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <div className="gp-reveal" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 100, padding: '8px 20px', marginBottom: 28,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%', background: '#22c55e',
              boxShadow: '0 0 8px rgba(34,197,94,0.6)',
              animation: 'gpPulse 2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#ffffff',
            }}>Global Engineering Network</span>
          </div>

          <h2 className="gp-reveal" style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800,
            color: '#ffffff', letterSpacing: '-0.05em', lineHeight: 1.05,
            margin: '0 auto 20px', maxWidth: 700,
          }}>
            One Team.<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>46 Locations. 24 Countries.</span>
          </h2>

          <p className="gp-reveal" style={{
            fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.7, maxWidth: 540, margin: '0 auto',
          }}>
            The best engineers from around the world, working virtually to build world-class software for every kind of builder.
          </p>
        </div>

        {/* Globe + Stats layout */}
        <div className="gp-grid" style={{
          display: 'grid', gap: 'clamp(32px, 4vw, 60px)',
          alignItems: 'center',
        }}>
          {/* Globe */}
          <div className="gp-reveal gp-globe-wrap" style={{
            position: 'relative', width: '100%',
            maxWidth: 520, aspectRatio: '1/1', margin: '0 auto',
          }}>
            {globeVisible && <Globe config={GLOBE_CONFIG} />}

            {/* HQ Labels */}
            <div style={{
              position: 'absolute', top: '16%', left: '6%',
              display: 'flex', alignItems: 'center', gap: 8,
              pointerEvents: 'none',
              animation: 'gpFadeSlide 0.8s ease-out 0.6s both',
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%', background: '#22c55e',
                boxShadow: '0 0 12px rgba(34,197,94,0.6)',
              }} />
              <span style={{
                fontSize: 10, fontWeight: 800, color: '#ffffff',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                background: 'rgba(0,0,0,0.7)', padding: '3px 8px',
                borderRadius: 4, backdropFilter: 'blur(4px)',
              }}>New York HQ</span>
            </div>
            <div style={{
              position: 'absolute', top: '34%', right: '4%',
              display: 'flex', alignItems: 'center', gap: 8,
              pointerEvents: 'none',
              animation: 'gpFadeSlide 0.8s ease-out 0.9s both',
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%', background: '#22c55e',
                boxShadow: '0 0 12px rgba(34,197,94,0.6)',
              }} />
              <span style={{
                fontSize: 10, fontWeight: 800, color: '#ffffff',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                background: 'rgba(0,0,0,0.7)', padding: '3px 8px',
                borderRadius: 4, backdropFilter: 'blur(4px)',
              }}>Dubai HQ</span>
            </div>

            {/* Bottom label */}
            <div style={{
              position: 'absolute', bottom: '8%', left: '50%',
              transform: 'translateX(-50%)', textAlign: 'center', pointerEvents: 'none',
            }}>
              <span style={{
                fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Drag to explore</span>
            </div>
          </div>

          {/* Right side: stats + locations */}
          <div>
            {/* Animated stats */}
            <div className="gp-reveal gp-stats-row" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
              marginBottom: 40,
            }}>
              {[
                { value: 46, suffix: '', label: 'Locations' },
                { value: 24, suffix: '', label: 'Countries' },
                { value: 150, suffix: '+', label: 'Engineers' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 20, padding: 'clamp(20px, 3vw, 28px)',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800,
                    letterSpacing: '-0.04em', lineHeight: 1,
                    background: 'linear-gradient(135deg, #22c55e, #4ade80)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)',
                    textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8,
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key locations grid */}
            <div className="gp-reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
              marginBottom: 32,
            }}>
              {locations.map(loc => (
                <div key={loc.city} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '14px 16px', borderRadius: 14,
                  background: loc.highlight ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${loc.highlight ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.04)'}`,
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: loc.highlight ? '#22c55e' : 'rgba(255,255,255,0.2)',
                    boxShadow: loc.highlight ? '0 0 8px rgba(34,197,94,0.5)' : 'none',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{
                      fontSize: 13, fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.01em',
                    }}>{loc.city}</div>
                    <div style={{
                      fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.25)',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>{loc.flag}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="gp-reveal" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 28px', borderRadius: 100,
                background: '#ffffff', color: '#000000',
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,255,255,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                About Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 28px', borderRadius: 100,
                border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)',
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                transition: 'all 0.3s', background: 'rgba(255,255,255,0.02)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gp-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .gp-grid {
            grid-template-columns: 1fr !important;
          }
          .gp-globe-wrap {
            max-width: 400px !important;
          }
          .gp-stats-row {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .gp-stats-row {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .gp-grid > div:last-child > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .gp-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .gp-visible .gp-reveal,
        .gp-reveal.gp-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .gp-reveal:nth-child(2) { transition-delay: 0.1s; }
        .gp-reveal:nth-child(3) { transition-delay: 0.2s; }
        .gp-reveal:nth-child(4) { transition-delay: 0.3s; }
        @keyframes gpPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(34,197,94,0.6); }
          50% { opacity: 0.6; box-shadow: 0 0 16px rgba(34,197,94,0.8); }
        }
        @keyframes gpFadeSlide {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
