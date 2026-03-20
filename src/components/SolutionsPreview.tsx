'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

const solutions = [
  { emoji: '🚗', name: 'Uber Clone', category: 'Ride-Hailing', slug: 'uber-clone', desc: 'Build a ride-hailing app with real-time tracking, driver matching, and surge pricing.' },
  { emoji: '🏠', name: 'Airbnb Clone', category: 'Marketplace', slug: 'airbnb-clone', desc: 'Launch a rental marketplace with listings, bookings, reviews, and host management.' },
  { emoji: '🍔', name: 'DoorDash Clone', category: 'Food Delivery', slug: 'doordash-clone', desc: 'Create a food delivery platform with restaurant dashboards and driver dispatch.' },
  { emoji: '🛍️', name: 'Shopify Clone', category: 'E-Commerce', slug: 'shopify-clone', desc: 'Build a multi-vendor e-commerce platform with payments and inventory management.' },
  { emoji: '📱', name: 'TikTok Clone', category: 'Short Video', slug: 'tiktok-clone', desc: 'Develop a short video app with AI recommendations, effects, and creator tools.' },
  { emoji: '💬', name: 'WhatsApp Clone', category: 'Messaging', slug: 'whatsapp-clone', desc: 'Build a secure messaging app with E2E encryption, voice/video calls, and groups.' },
];

export default function SolutionsPreview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.1)', color: '#22c55e', fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Ready-Made Solutions
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>
            Launch Faster with Proven Solutions
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.6)', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
            Customizable app solutions based on proven business models. Go from idea to launch in 8 weeks.
          </p>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24, marginBottom: 40 }}>
          {solutions.map(s => (
            <Link key={s.slug} href={`/solutions/${s.slug}`} style={{ textDecoration: 'none' }}>
              <div
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: 32, transition: 'all 0.3s', cursor: 'pointer' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#22c55e'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{s.emoji}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>{s.name}</h3>
                  <span style={{ padding: '3px 10px', borderRadius: 100, background: 'rgba(34,197,94,0.1)', color: '#22c55e', fontSize: 12, fontWeight: 600 }}>{s.category}</span>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: '0 0 16px' }}>{s.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#22c55e' }}>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center' }}>
          <Link href="/solutions" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'all 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
          >
            View All 15 Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}
