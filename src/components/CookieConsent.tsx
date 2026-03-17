'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'clamp(12px, 3vw, 24px)',
        left: 'clamp(12px, 3vw, 24px)',
        right: 'clamp(12px, 3vw, 24px)',
        maxWidth: 480,
        zIndex: 9999,
        background: 'rgba(10,10,10,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 'clamp(14px, 3vw, 20px)',
        padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        animation: 'slideUp 0.4s ease-out',
        boxSizing: 'border-box' as const,
      }}
    >
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: '0 0 16px' }}>
        We use cookies to enhance your experience and analyze site traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.{' '}
        <Link href="/cookies" style={{ color: '#4F46E5', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          Learn more
        </Link>
      </p>
      <div className="cookie-consent-buttons" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button
          onClick={accept}
          style={{
            padding: '12px 24px',
            borderRadius: 100,
            background: '#4F46E5',
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            minHeight: 44,
          }}
        >
          Accept
        </button>
        <button
          onClick={decline}
          style={{
            padding: '12px 24px',
            borderRadius: 100,
            background: 'transparent',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14,
            fontWeight: 600,
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            minHeight: 44,
          }}
        >
          Decline
        </button>
      </div>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
