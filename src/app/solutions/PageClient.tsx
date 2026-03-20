'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  padding: 'clamp(1.25rem, 3vw, 2rem)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.2)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(255,255,255,0.06)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

interface Solution {
  name: string;
  emoji: string;
  slug: string;
  category: string;
  categoryColor: string;
  description: string;
  features: string[];
  startingPrice: string;
}

const solutions: Solution[] = [
  {
    name: 'Uber',
    emoji: '\u{1F697}',
    slug: 'uber-clone',
    category: 'Ride-Hailing',
    categoryColor: '#3b82f6',
    description: 'On-demand ride-hailing platform with real-time GPS tracking, fare estimation, driver management, and multi-payment gateway integration.',
    features: ['Real-time GPS tracking & ETA', 'Dynamic surge pricing engine', 'Driver & rider dual apps'],
    startingPrice: '$25,000',
  },
  {
    name: 'Airbnb',
    emoji: '\u{1F3E0}',
    slug: 'airbnb-clone',
    category: 'Marketplace',
    categoryColor: '#ec4899',
    description: 'Property rental marketplace with advanced search, booking management, host dashboards, and secure payment escrow.',
    features: ['Map-based property search', 'Booking & calendar management', 'Host payout automation'],
    startingPrice: '$30,000',
  },
  {
    name: 'DoorDash',
    emoji: '\u{1F354}',
    slug: 'doordash-clone',
    category: 'Food Delivery',
    categoryColor: '#ef4444',
    description: 'Food delivery platform with restaurant management, real-time order tracking, delivery fleet optimization, and loyalty programs.',
    features: ['Restaurant partner portal', 'Real-time delivery tracking', 'Smart route optimization'],
    startingPrice: '$22,000',
  },
  {
    name: 'Instacart',
    emoji: '\u{1F6D2}',
    slug: 'instacart-clone',
    category: 'Grocery Delivery',
    categoryColor: '#22c55e',
    description: 'Grocery delivery and pickup platform with inventory sync, personal shopper workflows, and substitution management.',
    features: ['Real-time inventory sync', 'Personal shopper app', 'Substitution & refund flows'],
    startingPrice: '$25,000',
  },
  {
    name: 'Netflix',
    emoji: '\u{1F3AC}',
    slug: 'netflix-clone',
    category: 'Video Streaming',
    categoryColor: '#e11d48',
    description: 'Video streaming platform with adaptive bitrate playback, content recommendation engine, subscription management, and multi-device sync.',
    features: ['Adaptive bitrate streaming', 'AI content recommendations', 'Multi-profile & parental controls'],
    startingPrice: '$35,000',
  },
  {
    name: 'Tinder',
    emoji: '\u{1F498}',
    slug: 'tinder-clone',
    category: 'Dating & Social',
    categoryColor: '#f43f5e',
    description: 'Dating app with swipe-based matching, geolocation discovery, real-time chat, and premium subscription tiers.',
    features: ['Swipe-based matching engine', 'Geolocation-based discovery', 'In-app messaging & video calls'],
    startingPrice: '$20,000',
  },
  {
    name: 'Shopify',
    emoji: '\u{1F6CD}\uFE0F',
    slug: 'shopify-clone',
    category: 'E-Commerce',
    categoryColor: '#84cc16',
    description: 'Multi-vendor e-commerce platform with storefront builder, inventory management, payment processing, and analytics dashboard.',
    features: ['Drag-and-drop store builder', 'Multi-vendor marketplace', 'Integrated payment & shipping'],
    startingPrice: '$35,000',
  },
  {
    name: 'WhatsApp',
    emoji: '\u{1F4AC}',
    slug: 'whatsapp-clone',
    category: 'Messaging',
    categoryColor: '#22c55e',
    description: 'End-to-end encrypted messaging platform with voice/video calls, group chats, file sharing, and status updates.',
    features: ['End-to-end encryption', 'Voice & video calling', 'Group chats & file sharing'],
    startingPrice: '$28,000',
  },
  {
    name: 'Spotify',
    emoji: '\u{1F3B5}',
    slug: 'spotify-clone',
    category: 'Music Streaming',
    categoryColor: '#1db954',
    description: 'Music streaming platform with playlist management, offline downloads, artist profiles, and AI-powered music discovery.',
    features: ['Playlist creation & sharing', 'Offline download mode', 'AI-powered music discovery'],
    startingPrice: '$32,000',
  },
  {
    name: 'TikTok',
    emoji: '\u{1F4F1}',
    slug: 'tiktok-clone',
    category: 'Short Video',
    categoryColor: '#8b5cf6',
    description: 'Short-form video platform with in-app editing, AI-powered feed algorithm, creator monetization, and viral sharing features.',
    features: ['In-app video editor & effects', 'AI-powered content feed', 'Creator monetization tools'],
    startingPrice: '$38,000',
  },
];

const advantages = [
  {
    icon: '\u26A1',
    title: 'Faster Launch',
    stat: '8 weeks vs 6 months',
    description: 'Skip months of discovery and architecture. Our pre-built foundations are production-tested, so you go live in weeks, not quarters.',
  },
  {
    icon: '\u2705',
    title: 'Proven UX',
    stat: 'Based on apps with billions of users',
    description: 'Every flow is modeled on apps that millions use daily. No guesswork on navigation, onboarding, or checkout \u2014 it already works.',
  },
  {
    icon: '\u{1F4B0}',
    title: 'Cost Effective',
    stat: '60% less than building from scratch',
    description: 'Reuse battle-tested modules for auth, payments, chat, and more. You only pay for customization, branding, and unique features.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Choose Your Base',
    description: 'Pick the solution that matches your business model. Each comes with a proven feature set, database schema, and API layer ready to go.',
  },
  {
    step: '02',
    title: 'Customize Features',
    description: 'Add, remove, or modify features to fit your market. Need multi-language support? Crypto payments? Custom analytics? We build it in.',
  },
  {
    step: '03',
    title: 'Brand It Yours',
    description: 'Your logo, colors, typography, and tone of voice applied across every screen. Your users will never know it started from a template.',
  },
  {
    step: '04',
    title: 'Launch & Scale',
    description: 'We handle deployment, App Store submission, and post-launch monitoring. Cloud infrastructure auto-scales as your user base grows.',
  },
];

export default function SolutionsIndexPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Ready-Made Solutions
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Launch Your App Faster with <span style={{ color: '#22c55e' }}>Proven Solutions</span>
            </h1>
            <p className="reveal" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 660, margin: '0 auto 2.5rem' }}>
              Skip the guesswork. Our customizable solutions are built on the same architecture that powers the world&apos;s most successful apps. Choose a proven model, make it yours, and launch in weeks.
            </p>
            <p className="reveal" style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
              Every solution includes native iOS &amp; Android apps, an admin dashboard, API backend, payment integration, and full source code ownership. You get a production-ready product &mdash; not a prototype.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem, 2vw, 1.5rem)', maxWidth: 600, margin: '0 auto' }}>
              {[['10', 'App Solutions'], ['8 Weeks', 'Avg. Launch Time'], ['60%', 'Cost Savings']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: 16 }}>Our Solutions</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Choose Your Starting Point</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: 640, margin: '0 auto' }}>Each solution is fully customizable. Pick the model closest to your vision, and we&apos;ll tailor it to your exact needs.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {solutions.map(solution => (
                <Card key={solution.slug}>
                  {/* Emoji + Category */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: `${solution.categoryColor}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 }}>
                      {solution.emoji}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: solution.categoryColor, background: `${solution.categoryColor}15`, padding: '4px 12px', borderRadius: 999 }}>
                      {solution.category}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/solutions/${solution.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 style={{ fontWeight: 700, fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {solution.name} Clone
                    </h3>
                  </Link>

                  {/* Description */}
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.85rem, 1.5vw, 0.92rem)', lineHeight: 1.65, marginBottom: '1rem' }}>
                    {solution.description}
                  </p>

                  {/* Key Features */}
                  <div style={{ marginBottom: '1.25rem', flexGrow: 1 }}>
                    {solution.features.map(feature => (
                      <div key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                        <span style={{ color: '#22c55e', fontSize: 14, lineHeight: 1.7, flexShrink: 0 }}>{'\u2713'}</span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em', marginBottom: 2 }}>Starting from</div>
                      <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', fontWeight: 800, color: '#22c55e' }}>{solution.startingPrice}</div>
                    </div>
                    <Link
                      href={`/solutions/${solution.slug}`}
                      style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                    >
                      Learn More &rarr;
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE READY-MADE SOLUTIONS */}
        <section ref={s2} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: 16 }}>Why Ready-Made</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Choose a Proven Solution?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: 640, margin: '0 auto' }}>Building from scratch is expensive and slow. Our solutions give you a massive head start without compromising on quality or customization.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {advantages.map(item => (
                <Card key={item.title}>
                  <div style={{ fontSize: 40, marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.title}</h3>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', marginBottom: 12, letterSpacing: '0.02em' }}>{item.stat}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section ref={s3} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: 16 }}>How It Works</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>From Idea to Launch in 4 Steps</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: 640, margin: '0 auto' }}>Our streamlined process gets your custom app to market faster than any traditional development approach.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {processSteps.map(item => (
                <div key={item.step} style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: 'rgba(34,197,94,0.3)', marginBottom: 12, letterSpacing: '-0.04em' }}>{item.step}</div>
                  <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Not Sure Which Solution <span style={{ color: '#22c55e' }}>Fits?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Tell us about your business idea and we&apos;ll recommend the best starting point, estimate the timeline, and map out customizations &mdash; completely free.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)', borderRadius: 999, fontWeight: 700, fontSize: 'clamp(0.9rem, 2vw, 1rem)', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Consultation
                </Link>
                <Link href="/services" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)', borderRadius: 999, fontWeight: 600, fontSize: 'clamp(0.9rem, 2vw, 1rem)', textDecoration: 'none', display: 'inline-block' }}>
                  View Custom Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
