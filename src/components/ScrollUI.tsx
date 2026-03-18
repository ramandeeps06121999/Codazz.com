'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionNav from './SectionNav';

export default function ScrollUI() {
  const [progress, setProgress] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowCTA(scrollTop > window.innerHeight * 0.8);
      setShowBackTop(scrollTop > window.innerHeight * 2);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <SectionNav />
      {/* Scroll progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 2,
        background: 'rgba(255,255,255,0.06)', zIndex: 9999, pointerEvents: 'none',
      }}>
        <div style={{
          height: '100%', background: 'linear-gradient(90deg, #22c55e, #4ade80)',
          width: `${progress}%`,
          transition: 'width 0.1s linear',
          boxShadow: '0 0 8px rgba(34,197,94,0.6)',
        }} />
      </div>

      {/* Floating CTA */}
      <div style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 999,
        opacity: showCTA ? 1 : 0,
        transform: showCTA ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        pointerEvents: showCTA ? 'auto' : 'none',
      }}>
        <Link href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          height: 52, padding: '0 28px', borderRadius: 100,
          background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#fff', fontSize: 14, fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 8px 32px rgba(34,197,94,0.4), 0 2px 8px rgba(0,0,0,0.4)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.5), 0 4px 12px rgba(0,0,0,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(34,197,94,0.4), 0 2px 8px rgba(0,0,0,0.4)'; }}
        >
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#0a0a14', opacity: 0.5 }} />
          Book a Free Call
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed', bottom: showCTA ? 100 : 32, right: 32, zIndex: 998,
          width: 48, height: 48, borderRadius: '50%',
          background: 'linear-gradient(135deg, #22c55e, #4ade80)', border: '1px solid rgba(34,197,94,0.3)',
          color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: showBackTop ? 1 : 0, pointerEvents: showBackTop ? 'auto' : 'none',
          transition: 'opacity 0.3s, transform 0.3s, bottom 0.3s',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.05)'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
        aria-label="Back to top"
        className="hide-mobile"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6" /></svg>
      </button>
    </>
  );
}
