'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          router.replace('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a14',
        color: '#fff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
        padding: '0 24px',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          margin: 0,
          background: 'linear-gradient(135deg, #4F46E5, #ff6b4a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        404
      </h1>
      <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)', marginTop: 16, marginBottom: 8 }}>
        This page doesn&apos;t exist or has moved.
      </p>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 32 }}>
        Redirecting to homepage in {seconds} second{seconds !== 1 ? 's' : ''}...
      </p>
      <a
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          height: 48,
          padding: '0 32px',
          borderRadius: 100,
          background: '#4F46E5',
          color: '#fff',
          fontSize: 14,
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'opacity 0.3s',
        }}
      >
        Go to Homepage
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
