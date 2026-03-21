'use client';

import { useRef, useEffect, useState } from 'react';

/* ─── Company stats (animated counters) ───────────────────────────── */
const primaryStats = [
  {
    value: 500,
    suffix: '+',
    label: 'Projects Delivered',
    context: 'Across web, mobile & AI',
    icon: '🚀',
  },
  {
    value: 150,
    suffix: '+',
    label: 'Clients Worldwide',
    context: 'From startups to enterprises',
    icon: '🌍',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Retention Rate',
    context: 'Partners who stay long-term',
    icon: '🤝',
  },
  {
    value: 50,
    suffix: 'M+',
    label: 'Users on Our Platforms',
    context: 'Real users, real impact',
    icon: '📈',
  },
];

/* ─── Market stats (bottom row) ───────────────────────────────────── */
const marketStats = [
  { value: '$522B', label: 'App Market by 2027', context: 'Global mobile economy' },
  { value: '230B', label: 'Downloads per Year', context: 'Consumer app installs' },
  { value: '13.4%', label: 'CAGR Growth Rate', context: 'Fastest growing tech sector' },
  { value: '6.3B', label: 'Smartphone Users', context: 'Addressable global audience' },
];

/* ─── Marquee items ────────────────────────────────────────────────── */
const marqueeItems = [
  '📱 $522B Mobile App Market by 2027',
  '🚀 230B App Downloads/Year',
  '💰 $935B App Revenue by 2026',
  '📈 13.4% CAGR Growth',
  '🤖 AI in 75% of Apps by 2026',
  '🌐 6.3B Smartphone Users',
  '☁️ 90% Apps Use Cloud',
  '🔒 Cybersecurity Top Priority',
];

/* ─── Animated counter ─────────────────────────────────────────────── */
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

    function step(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
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

/* ─── Main component ───────────────────────────────────────────────── */
export default function MarketStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  /* Trigger counters when section enters viewport */
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
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Scroll-reveal for .reveal elements */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes market-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Marquee strip ── */
        .ms-marquee-track {
          display: flex;
          width: max-content;
          animation: market-marquee 30s linear infinite;
          will-change: transform;
        }
        .ms-marquee-track:hover {
          animation-play-state: paused;
        }
        .ms-marquee-wrap {
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 8%,
            #000 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 8%,
            #000 92%,
            transparent 100%
          );
        }

        /* ── Primary stat cards (border-bottom only) ── */
        .ms-primary-card {
          position: relative;
          text-align: center;
          padding: clamp(32px,5vw,52px) clamp(16px,3vw,32px) clamp(28px,4vw,44px);
          border-bottom: 1px solid rgba(255,255,255,0.10);
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          cursor: default;
        }
        .ms-primary-card:not(:last-child) {
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .ms-primary-card:hover .ms-num {
          text-shadow: 0 0 24px rgba(34,197,94,0.55), 0 0 60px rgba(34,197,94,0.25);
        }
        .ms-primary-card:hover {
          background: rgba(34,197,94,0.03);
        }

        /* ── Market stat cards (dark bordered) ── */
        .ms-market-card {
          padding: clamp(24px,3.5vw,36px) clamp(20px,3vw,32px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          background: rgba(255,255,255,0.015);
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          cursor: default;
        }
        .ms-market-card:hover {
          border-color: rgba(34,197,94,0.22);
          background: rgba(34,197,94,0.035);
          transform: translateY(-4px);
        }

        /* ── Responsive grids ── */
        @media (max-width: 900px) {
          .ms-primary-grid { grid-template-columns: repeat(2,1fr) !important; }
          .ms-primary-card:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.06) !important; }
          .ms-primary-card:nth-child(even) { border-right: none !important; }
        }
        @media (max-width: 540px) {
          .ms-primary-grid { grid-template-columns: 1fr !important; }
          .ms-primary-card { border-right: none !important; }
          .ms-market-grid  { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="section-padding"
        style={{
          background: '#000000',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 1000,
            height: 700,
            background:
              'radial-gradient(ellipse, rgba(34,197,94,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>

          {/* ── Section header ───────────────────────────────────────── */}
          <div
            className="reveal"
            style={{ textAlign: 'center', marginBottom: 'clamp(32px,5vw,56px)' }}
          >
            {/* Pill label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: 999,
                background: 'rgba(34,197,94,0.07)',
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#22c55e',
                }}
              >
                Market Intelligence
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                margin: '0 auto',
                maxWidth: 640,
                color: '#ffffff',
              }}
            >
              The Mobile App Market
              <br />
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>Is Exploding.</span>
            </h2>
          </div>

          {/* ── Marquee strip ─────────────────────────────────────────── */}
          <div
            className="reveal ms-marquee-wrap"
            style={{ marginBottom: 'clamp(40px,6vw,72px)' }}
          >
            <div className="ms-marquee-track">
              {/* Render twice for seamless loop */}
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    padding: '10px 0',
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.65)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {item}
                  </span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: '#22c55e',
                      margin: '0 28px',
                      flexShrink: 0,
                    }}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* ── Primary stats — 4 columns, border-bottom style ────────── */}
          <div
            className="ms-primary-grid reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              marginBottom: 'clamp(40px,6vw,64px)',
            }}
          >
            {primaryStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`ms-primary-card reveal reveal-d${i + 1}`}
              >
                {/* Icon */}
                <div
                  style={{
                    fontSize: 'clamp(1.4rem,2.5vw,1.8rem)',
                    marginBottom: 16,
                    filter: 'grayscale(0.2)',
                  }}
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>

                {/* Animated number */}
                <div
                  className="ms-num"
                  style={{
                    fontSize: 'clamp(2.5rem,5vw,4rem)',
                    fontWeight: 800,
                    color: '#22c55e',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    transition: 'text-shadow 0.35s ease',
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    trigger={triggered}
                  />
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    marginTop: 12,
                  }}
                >
                  {stat.label}
                </div>

                {/* Context */}
                <div
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.25)',
                    marginTop: 6,
                    letterSpacing: '0.01em',
                  }}
                >
                  {stat.context}
                </div>
              </div>
            ))}
          </div>

          {/* ── Market stats — dark bordered cards (bottom row) ─────────── */}
          <div
            className="ms-market-grid reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'clamp(12px,2vw,20px)',
            }}
          >
            {marketStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`ms-market-card reveal reveal-d${i + 1}`}
              >
                {/* Value */}
                <div
                  style={{
                    fontSize: 'clamp(1.6rem,3vw,2.25rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.02em',
                    marginBottom: 6,
                  }}
                >
                  {stat.label}
                </div>

                {/* Context */}
                <div
                  style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {stat.context}
                </div>

                {/* Bottom accent line */}
                <div
                  style={{
                    marginTop: 16,
                    height: 2,
                    borderRadius: 2,
                    background:
                      'linear-gradient(90deg, #22c55e 0%, rgba(34,197,94,0.1) 100%)',
                    width: '40%',
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
