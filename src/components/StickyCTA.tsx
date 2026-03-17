'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 900,
      background: 'rgba(0,0,0,0.95)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(79,70,229,0.2)',
      padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 24px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'clamp(8px, 2vw, 16px)',
      transform: visible ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <span style={{ fontSize: 'clamp(12px, 2.5vw, 14px)', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }} className="sticky-cta-text">
        Ready to build something great?
      </span>
      <Link href="/contact" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 44,
        padding: '0 clamp(14px, 3vw, 20px)',
        borderRadius: 100,
        background: '#4F46E5',
        color: '#fff',
        fontSize: 'clamp(12px, 2.5vw, 13px)',
        fontWeight: 700,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
        Get Free Consultation
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        style={{
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.4)',
          cursor: 'pointer',
          padding: 8,
          fontSize: 18,
          lineHeight: 1,
          minWidth: 44,
          minHeight: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        ×
      </button>
    </div>
  );
}
