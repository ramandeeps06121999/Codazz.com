'use client';

import { useRef, useEffect } from 'react';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const defaultBrands = [
  'Stripe', 'Shopify', 'Salesforce', 'Microsoft', 'Google Cloud', 'AWS',
  'MongoDB', 'Cloudflare', 'Twilio', 'HubSpot', 'Zendesk', 'Atlassian',
  'Vercel', 'Figma', 'Datadog', 'Notion',
];

function BrandItem({ name }: { name: string }) {
  return (
    <div
      className="client-logo-item"
      style={{
        flexShrink: 0,
        padding: '14px 32px',
        fontSize: 'clamp(14px, 2vw, 16px)',
        fontWeight: 600,
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        transition: 'color 0.3s ease',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      {name}
    </div>
  );
}

export default function ClientLogosMarquee({
  brands = defaultBrands,
  heading = 'Trusted By Leading Brands',
  speed = 35,
}: {
  brands?: string[];
  heading?: string;
  speed?: number;
}) {
  const sectionRef = useReveal();

  // Split brands into two rows
  const mid = Math.ceil(brands.length / 2);
  const row1 = brands.slice(0, mid);
  const row2 = brands.slice(mid);

  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 100px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes client-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes client-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .client-track-left {
          animation: client-scroll-left ${speed}s linear infinite;
        }
        .client-track-right {
          animation: client-scroll-right ${speed * 1.2}s linear infinite;
        }
        .client-track-left:hover,
        .client-track-right:hover {
          animation-play-state: paused;
        }
        .client-logo-item:hover {
          color: #22c55e !important;
        }
      `}</style>

      {/* Header */}
      <div className="cb-container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 52px)' }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: 20,
          }}>
            Technology Partners
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 500,
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            margin: 0,
          }}>
            {heading}
          </h2>
        </div>
      </div>

      {/* Row 1 - scrolls left */}
      <div
        className="reveal"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          marginBottom: 8,
        }}
      >
        {/* Left edge fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 120,
            height: '100%',
            background: 'linear-gradient(to right, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* Right edge fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 120,
            height: '100%',
            background: 'linear-gradient(to left, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div
          className="client-track-left"
          style={{
            display: 'flex',
            width: 'max-content',
          }}
        >
          {doubled1.map((brand, i) => (
            <BrandItem key={`r1-${i}`} name={brand} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div
        className="reveal"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Left edge fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 120,
            height: '100%',
            background: 'linear-gradient(to right, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* Right edge fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 120,
            height: '100%',
            background: 'linear-gradient(to left, #000000, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div
          className="client-track-right"
          style={{
            display: 'flex',
            width: 'max-content',
          }}
        >
          {doubled2.map((brand, i) => (
            <BrandItem key={`r2-${i}`} name={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
