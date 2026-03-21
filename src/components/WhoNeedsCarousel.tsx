'use client';

import { useRef, useCallback, useState } from 'react';

export interface WhoNeedsItem {
  icon: string;
  title: string;
  desc: string;
}

interface WhoNeedsCarouselProps {
  items: WhoNeedsItem[];
}

export default function WhoNeedsCarousel({ items }: WhoNeedsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const CARD_W = 300;
  const GAP = 20;

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (CARD_W + GAP));
    setActiveIndex(Math.min(idx, items.length - 1));
  }, [items.length]);

  const scrollTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, items.length - 1));
    scrollRef.current?.scrollTo({ left: clamped * (CARD_W + GAP), behavior: 'smooth' });
    setActiveIndex(clamped);
  };

  return (
    <div style={{ position: 'relative' }}>
      <style>{`
        .who-needs-scroll::-webkit-scrollbar { display: none; }
        .who-needs-scroll { scrollbar-width: none; scroll-snap-type: x mandatory; }
        .who-needs-card {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .who-needs-card:hover {
          border-color: rgba(34,197,94,0.25) !important;
          background: rgba(34,197,94,0.04) !important;
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(34,197,94,0.1);
        }
      `}</style>

      {/* Fade edges */}
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 'clamp(40px, 8vw, 80px)', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: 'clamp(40px, 8vw, 80px)', height: '100%', background: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="who-needs-scroll"
        style={{
          display: 'flex',
          gap: GAP,
          overflowX: 'auto',
          padding: '8px clamp(24px, 5vw, 60px) 8px',
          cursor: 'grab',
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="who-needs-card"
            style={{
              flex: `0 0 ${CARD_W}px`,
              padding: 'clamp(28px, 4vw, 36px)',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top shine */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)' }} />

            {/* Icon */}
            <div style={{ fontSize: 'clamp(32px, 5vw, 40px)' }}>{item.icon}</div>

            {/* Title */}
            <h4 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
              {item.title}
            </h4>

            {/* Description */}
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0, flex: 1 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation - Below carousel */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 32 }}>
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)',
            background: activeIndex > 0 ? 'rgba(255,255,255,0.05)' : 'transparent',
            cursor: activeIndex > 0 ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: activeIndex > 0 ? 1 : 0.3,
            transition: '0.3s',
            color: '#fff',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div style={{ display: 'flex', gap: 8 }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Item ${i + 1}`}
              style={{
                width: activeIndex === i ? 28 : 8,
                height: 8,
                borderRadius: 100,
                border: 'none',
                background: activeIndex === i ? '#22c55e' : 'rgba(255,255,255,0.12)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scrollTo(activeIndex + 1)}
          disabled={activeIndex === items.length - 1}
          aria-label="Next"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)',
            background: activeIndex < items.length - 1 ? 'rgba(255,255,255,0.05)' : 'transparent',
            cursor: activeIndex < items.length - 1 ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: activeIndex < items.length - 1 ? 1 : 0.3,
            transition: '0.3s',
            color: '#fff',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
