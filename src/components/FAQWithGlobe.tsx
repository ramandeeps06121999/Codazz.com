'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe } from '@/components/ui/globe';
import type { COBEOptions } from 'cobe';

interface FAQ {
  q: string;
  a: string;
}

const FAQ_GLOBE_CONFIG: COBEOptions = {
  width: 600,
  height: 600,
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
  glowColor: [0.15, 0.6, 0.3],
  markers: [
    { location: [53.5461, -113.4938], size: 0.1 },
    { location: [30.7333, 76.7794], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.06 },
    { location: [25.2048, 55.2708], size: 0.06 },
    { location: [51.5074, -0.1278], size: 0.05 },
    { location: [1.3521, 103.8198], size: 0.05 },
    { location: [-33.8688, 151.2093], size: 0.04 },
    { location: [35.6762, 139.6503], size: 0.04 },
  ],
};

export default function FAQWithGlobe({
  faqs,
  heading,
  subLabel = 'FAQ',
}: {
  faqs: FAQ[];
  heading: string;
  subLabel?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [globeVisible, setGlobeVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach((child) => io.observe(child));

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
      style={{
        padding: 'clamp(60px, 10vw, 120px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .faq-globe-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: start;
        }
        @media (max-width: 900px) {
          .faq-globe-grid {
            grid-template-columns: 1fr !important;
          }
          .faq-globe-right {
            display: none !important;
          }
        }
        .faq-globe-item:hover {
          border-color: rgba(34,197,94,0.2) !important;
          background: rgba(34,197,94,0.04) !important;
        }
      `}</style>

      {/* Subtle glow behind globe */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '40%',
          right: '-5%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 60%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="faq-globe-grid">
          {/* Left: FAQ */}
          <div>
            <div className="reveal" style={{ marginBottom: 40 }}>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                marginBottom: 20,
              }}>
                {subLabel}
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 500,
                color: '#ffffff',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                margin: 0,
              }}>
                {heading}
              </h2>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="faq-globe-item"
                  style={{
                    background: active === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                    border: `1px solid ${active === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`,
                    borderRadius: 16,
                    overflow: 'hidden',
                    transition: 'border-color 0.3s, background 0.3s',
                  }}
                >
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    aria-expanded={active === i}
                    aria-controls={`faqg-answer-${i}`}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      gap: 16,
                    }}
                  >
                    <span style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: '#ffffff',
                      textAlign: 'left',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.4,
                    }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      flexShrink: 0,
                      background: active === i ? 'linear-gradient(135deg, #22c55e, #4ade80)' : 'rgba(255,255,255,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: '0.3s',
                    }}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={active === i ? '#fff' : 'rgba(255,255,255,0.35)'}
                        strokeWidth="2.5"
                        style={{ transition: '0.3s', transform: active === i ? 'rotate(45deg)' : 'rotate(0)' }}
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>
                  <div id={`faqg-answer-${i}`} style={{
                    maxHeight: active === i ? 500 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
                  }}>
                    <p style={{
                      padding: '0 24px 20px',
                      margin: 0,
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.4)',
                      lineHeight: 1.75,
                    }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Globe */}
          <div
            className="reveal reveal-d2 faq-globe-right"
            style={{
              position: 'sticky',
              top: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: 440,
              aspectRatio: '1/1',
              margin: '0 auto',
            }}>
              {/* Glow ring */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  border: '1px solid rgba(34,197,94,0.08)',
                  pointerEvents: 'none',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: -40,
                  borderRadius: '50%',
                  border: '1px solid rgba(34,197,94,0.04)',
                  pointerEvents: 'none',
                }}
              />

              {globeVisible && <Globe config={FAQ_GLOBE_CONFIG} interactive={false} />}

              {/* Bottom label */}
              <div style={{
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                background: 'rgba(0,0,0,0.7)',
                border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 100,
                backdropFilter: 'blur(12px)',
              }}>
                <div style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 8px rgba(34,197,94,0.6)',
                  animation: 'faqGlobePulse 2s ease-in-out infinite',
                }} />
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>
                  Serving 24 Countries
                </span>
              </div>
            </div>

            <style>{`
              @keyframes faqGlobePulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
