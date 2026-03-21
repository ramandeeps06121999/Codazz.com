'use client';

import Link from 'next/link';

const solutions = [
  { emoji: '🚗', name: 'Uber Clone', category: 'Ride-Hailing', slug: 'uber-clone', desc: 'Ride-hailing app with real-time tracking, driver matching, and surge pricing.' },
  { emoji: '🏠', name: 'Airbnb Clone', category: 'Marketplace', slug: 'airbnb-clone', desc: 'Rental marketplace with listings, bookings, reviews, and host management.' },
  { emoji: '🍔', name: 'DoorDash Clone', category: 'Food Delivery', slug: 'doordash-clone', desc: 'Food delivery platform with restaurant dashboards and driver dispatch.' },
  { emoji: '🛒', name: 'Instacart Clone', category: 'Grocery Delivery', slug: 'instacart-clone', desc: 'Grocery delivery app with real-time inventory and personal shoppers.' },
  { emoji: '🎬', name: 'Netflix Clone', category: 'Streaming', slug: 'netflix-clone', desc: 'Video streaming platform with AI recommendations and content management.' },
  { emoji: '💕', name: 'Tinder Clone', category: 'Dating', slug: 'tinder-clone', desc: 'Dating app with swipe matching, chat, and location-based discovery.' },
  { emoji: '🛍️', name: 'Shopify Clone', category: 'E-Commerce', slug: 'shopify-clone', desc: 'Multi-vendor e-commerce platform with payments and inventory management.' },
  { emoji: '💬', name: 'WhatsApp Clone', category: 'Messaging', slug: 'whatsapp-clone', desc: 'Secure messaging app with E2E encryption, voice/video calls, and groups.' },
  { emoji: '🎵', name: 'Spotify Clone', category: 'Music Streaming', slug: 'spotify-clone', desc: 'Music streaming service with playlists, discovery, and artist dashboards.' },
  { emoji: '📱', name: 'TikTok Clone', category: 'Short Video', slug: 'tiktok-clone', desc: 'Short video app with AI recommendations, effects, and creator tools.' },
  { emoji: '📦', name: 'Amazon Clone', category: 'Marketplace', slug: 'amazon-clone', desc: 'Full-scale marketplace with seller tools, logistics, and reviews.' },
  { emoji: '💼', name: 'LinkedIn Clone', category: 'Professional Network', slug: 'linkedin-clone', desc: 'Professional networking platform with jobs, feeds, and messaging.' },
  { emoji: '📹', name: 'Zoom Clone', category: 'Video Conferencing', slug: 'zoom-clone', desc: 'Video conferencing app with screen sharing, recording, and breakout rooms.' },
  { emoji: '💳', name: 'Stripe Clone', category: 'Fintech', slug: 'stripe-clone', desc: 'Payment processing platform with APIs, subscriptions, and dashboards.' },
  { emoji: '⚡', name: 'Slack Clone', category: 'Team Chat', slug: 'slack-clone', desc: 'Team communication platform with channels, threads, and integrations.' },
];

const row1 = solutions.slice(0, 8);
const row2 = solutions.slice(8, 15);

function Card({ s }: { s: typeof solutions[0] }) {
  return (
    <Link href={`/solutions/${s.slug}`} style={{ textDecoration: 'none', flexShrink: 0 }}>
      <div
        className="sp-card"
        style={{
          width: 320,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 28,
          padding: '28px 24px',
          cursor: 'pointer',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s, box-shadow 0.35s',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(-8px)';
          el.style.borderColor = 'rgba(34,197,94,0.5)';
          el.style.boxShadow = '0 8px 40px rgba(34,197,94,0.12), 0 0 0 1px rgba(34,197,94,0.15)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(0)';
          el.style.borderColor = 'rgba(255,255,255,0.06)';
          el.style.boxShadow = 'none';
        }}
      >
        {/* Icon area with green gradient */}
        <div style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 100%)',
          border: '1px solid rgba(34,197,94,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          marginBottom: 18,
        }}>
          {s.emoji}
        </div>

        {/* Name + category */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: 0, whiteSpace: 'nowrap' }}>{s.name}</h3>
          <span style={{
            padding: '3px 10px',
            borderRadius: 100,
            background: 'rgba(34,197,94,0.08)',
            color: '#22c55e',
            fontSize: 11,
            fontWeight: 600,
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
          }}>
            {s.category}
          </span>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 13.5,
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.6,
          margin: '0 0 16px',
          minHeight: 44,
        }}>
          {s.desc}
        </p>

        {/* Learn More link */}
        <span style={{
          fontSize: 13,
          fontWeight: 600,
          color: '#22c55e',
          letterSpacing: '0.01em',
        }}>
          Learn More →
        </span>
      </div>
    </Link>
  );
}

export default function SolutionsPreview() {
  const animationDuration1 = 45;
  const animationDuration2 = 50;

  return (
    <section style={{
      background: '#000',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0 88px',
    }}>
      {/* Inline keyframes */}
      <style>{`
        @keyframes sp-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes sp-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .sp-marquee-track:hover {
          animation-play-state: paused !important;
        }
        .sp-marquee-row:hover .sp-marquee-track {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 500,
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.035) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: 52,
        position: 'relative',
        zIndex: 1,
        padding: '0 24px',
      }}>
        <span style={{
          display: 'inline-block',
          padding: '6px 18px',
          borderRadius: 100,
          background: 'rgba(34,197,94,0.1)',
          color: '#22c55e',
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 18,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          Ready-Made Solutions
        </span>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 800,
          color: '#fff',
          margin: '0 0 16px',
          lineHeight: 1.15,
        }}>
          Launch Faster with Proven Solutions
        </h2>
        <p style={{
          fontSize: 'clamp(15px, 1.5vw, 18px)',
          color: 'rgba(255,255,255,0.55)',
          maxWidth: 600,
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Customizable app solutions based on proven business models. Go from idea to launch in 8 weeks.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div
        className="sp-marquee-row"
        style={{
          overflow: 'hidden',
          marginBottom: 20,
          position: 'relative',
        }}
      >
        {/* Left fade */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: 'linear-gradient(90deg, #000 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: 'linear-gradient(270deg, #000 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        <div
          className="sp-marquee-track"
          style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
            animation: `sp-scroll-left ${animationDuration1}s linear infinite`,
          }}
        >
          {/* Original + duplicate for seamless loop */}
          {[...row1, ...row1].map((s, i) => (
            <Card key={`r1-${i}`} s={s} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="sp-marquee-row"
        style={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Left fade */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: 'linear-gradient(90deg, #000 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: 'linear-gradient(270deg, #000 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        <div
          className="sp-marquee-track"
          style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
            animation: `sp-scroll-right ${animationDuration2}s linear infinite`,
          }}
        >
          {/* Original + duplicate for seamless loop */}
          {[...row2, ...row2].map((s, i) => (
            <Card key={`r2-${i}`} s={s} />
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div style={{
        textAlign: 'center',
        marginTop: 52,
        position: 'relative',
        zIndex: 1,
      }}>
        <Link
          href="/solutions"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 36px',
            borderRadius: 100,
            border: '1px solid rgba(34,197,94,0.3)',
            color: '#22c55e',
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
            transition: 'all 0.3s',
            background: 'transparent',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(34,197,94,0.1)';
            e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
          }}
        >
          View All 15 Solutions →
        </Link>
      </div>
    </section>
  );
}
