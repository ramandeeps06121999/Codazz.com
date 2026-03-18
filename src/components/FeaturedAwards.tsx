'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

const awards = [
  {
    name: 'Clutch Top Generative AI',
    year: '2026',
    src: '/awards/Clutch-Top-GenerativeAI-Company2026.png',
    type: 'img',
  },
  {
    name: 'Top App Development',
    year: '2024',
    src: '/awards/top_clutch.co_app_development.webp',
    type: 'img',
  },
  {
    name: 'Webby Honoree',
    year: '2024',
    src: '/awards/bw_webby_honoree.webp',
    type: 'img',
  },
  {
    name: 'Flutter Service Award',
    year: '2024',
    src: '/awards/Service-Award-1-flutter.webp',
    type: 'img',
  },
  {
    name: 'AWS Advanced Tier',
    year: '2024',
    src: '/awards/aws-advance-tier.svg',
    type: 'svg',
  },
  {
    name: 'AWS Cloud Ops',
    year: '2024',
    src: '/awards/aws-cloud-op-icon.svg',
    type: 'svg',
  },
  {
    name: 'SOC II Certified',
    year: '2024',
    src: '/awards/socII-icon.svg',
    type: 'svg',
  },
  {
    name: 'ISO Certified',
    year: '2023',
    src: '/awards/ISO-icon.svg',
    type: 'svg',
  },
  {
    name: 'Red Herring 100',
    year: '2023',
    src: '/awards/red-hirring.webp',
    type: 'img',
  },
];

function AwardCard({ award }: { award: typeof awards[number] }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '16px 24px',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.03)',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        transition: 'all 0.35s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', flexShrink: 0 }}>
        <Image
          src={award.src}
          alt={award.name}
          fill
          style={{ objectFit: 'contain', filter: award.type === 'svg' ? 'brightness(0) invert(0.5)' : 'invert(1) brightness(1.2)' }}
        />
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{award.name}</div>
        <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 2 }}>{award.year}</div>
      </div>
    </div>
  );
}

export default function FeaturedAwards() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Pause animation on hover
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const pause = () => { track.style.animationPlayState = 'paused'; };
    const play = () => { track.style.animationPlayState = 'running'; };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', play);
    return () => {
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', play);
    };
  }, []);

  return (
    <section ref={sectionRef} id="awards" className="section-padding-sm" style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle radial glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>
            Recognition & Certifications
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 auto', maxWidth: 600 }}>
            Trusted, Verified &<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Globally Recognised.</span>
          </h2>
        </div>
      </div>

      {/* Single-line carousel */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 80, height: '100%', background: 'linear-gradient(to right, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: '100%', background: 'linear-gradient(to left, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: 16,
            width: 'max-content',
            animation: 'awards-scroll 30s linear infinite',
          }}
        >
          {awards.map((award) => (
            <AwardCard key={award.name} award={award} />
          ))}
          {/* Duplicate for seamless loop */}
          {awards.map((award) => (
            <AwardCard key={`dup-${award.name}`} award={award} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes awards-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
