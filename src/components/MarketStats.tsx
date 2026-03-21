'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered', icon: '\u{1F680}' },
  { value: 150, suffix: '+', label: 'Clients Worldwide', icon: '\u{1F30D}' },
  { value: 98, suffix: '%', label: 'Client Retention Rate', icon: '\u{1F91D}' },
  { value: 50, suffix: 'M+', label: 'Users on Our Platforms', icon: '\u{1F4C8}' },
];

function AnimatedCounter({
  value,
  suffix,
  trigger,
}: {
  value: number;
  suffix: string;
  trigger: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const duration = 2000;
    let start: number | null = null;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, value]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function MarketStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTriggered(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

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
    transform: 'translate(-50%,-50%)',
    width: 900,
    height: 600,
    background:
      'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 65%)',
    pointerEvents: 'none',
  };

  const headerSubStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.25)',
    marginBottom: 20,
  };

  const headerH2Style: React.CSSProperties = {
    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
    fontWeight: 500,
    color: '#ffffff',
    letterSpacing: '-0.04em',
    lineHeight: 1.1,
    margin: '0 auto',
    maxWidth: 600,
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 'clamp(16px, 2.5vw, 24px)',
    maxWidth: 1100,
    margin: '0 auto',
  };

  const cardBase: React.CSSProperties = {
    position: 'relative',
    textAlign: 'center',
    padding: 'clamp(36px, 5vw, 52px) 24px clamp(32px, 4vw, 44px)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 28,
    background: 'rgba(255,255,255,0.02)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    cursor: 'default',
  };

  const accentLineStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60%',
    height: 2,
    background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
    borderRadius: 2,
  };

  const iconStyle: React.CSSProperties = {
    fontSize: 'clamp(1.6rem, 3vw, 2rem)',
    marginBottom: 16,
    display: 'block',
    filter: 'grayscale(0.3)',
  };

  const numberStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
    fontWeight: 600,
    color: '#ffffff',
    letterSpacing: '-0.04em',
    lineHeight: 1,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: '0.04em',
    marginTop: 14,
    textTransform: 'uppercase',
  };

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .ms-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .ms-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="section-padding"
        style={sectionStyle}
      >
        <div style={bgGlowStyle} />

        <div
          className="cb-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* Header */}
          <div
            className="reveal"
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(40px, 6vw, 72px)',
            }}
          >
            <div style={headerSubStyle}>By the Numbers</div>
            <h2 style={headerH2Style}>
              Trusted by{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #4ade80)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                500+
              </span>{' '}
              Businesses
              <br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>Worldwide.</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="ms-grid" style={gridStyle}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal reveal-d${i + 1}`}
                style={cardBase}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(34,197,94,0.25)';
                  el.style.background = 'rgba(34,197,94,0.04)';
                  el.style.transform = 'translateY(-6px)';
                  el.style.boxShadow =
                    '0 0 30px rgba(34,197,94,0.08), 0 8px 32px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.background = 'rgba(255,255,255,0.02)';
                  el.style.transform = '';
                  el.style.boxShadow = '';
                }}
              >
                {/* Green accent line */}
                <div style={accentLineStyle} />

                {/* Icon */}
                <span style={iconStyle} aria-hidden="true">
                  {stat.icon}
                </span>

                {/* Animated number */}
                <div style={numberStyle}>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    trigger={triggered}
                  />
                </div>

                {/* Label */}
                <div style={labelStyle}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
