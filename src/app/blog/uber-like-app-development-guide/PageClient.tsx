'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
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

const tocSections = [
  { id: 'market-opportunity', label: 'Market Opportunity', emoji: '📊' },
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'development-timeline', label: 'Development Timeline', emoji: '📅' },
  { id: 'revenue-model', label: 'Revenue Model', emoji: '💵' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026 Guide)', category: 'Business', readTime: '8 min' },
  { slug: 'food-delivery-app-development-guide', title: 'Food Delivery App Development Guide 2026', category: 'Mobile', readTime: '14 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide: From Idea to Launch in 90 Days', category: 'Business', readTime: '14 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build an Uber-like app?',
    a: 'Building an Uber-like ride-sharing app costs between $45,000 and $200,000 depending on complexity. A basic MVP with core ride-booking features starts around $45K-$70K, while a full-featured platform with driver management, real-time tracking, payments, and analytics costs $120K-$200K.',
  },
  {
    q: 'How long does it take to develop a ride-sharing app?',
    a: 'A basic ride-sharing MVP takes 3-4 months to develop. A fully featured Uber-clone with driver and rider apps, admin dashboard, payment integration, and real-time tracking takes 6-9 months. Factor in additional time for testing, QA, and app store approvals.',
  },
  {
    q: 'What tech stack is best for an Uber-like app?',
    a: 'We recommend React Native or Flutter for cross-platform mobile apps, Node.js or Python for the backend, PostgreSQL with Redis for data, Google Maps or Mapbox for mapping, and Stripe for payments. WebSockets handle real-time communication between drivers and riders.',
  },
  {
    q: 'Can I start with an MVP and add features later?',
    a: 'Absolutely. We recommend launching with core features (ride booking, GPS tracking, payments, driver/rider profiles) and iterating based on user feedback. Most successful ride-sharing apps launched with less than 30% of their current feature set.',
  },
  {
    q: 'How do Uber-like apps make money?',
    a: 'The primary revenue model is commission per ride (typically 20-30% of the fare). Additional revenue streams include surge pricing, subscription plans for frequent riders, in-app advertising, corporate accounts, and delivery services using the same driver network.',
  },
  {
    q: 'Do I need separate apps for drivers and riders?',
    a: 'Yes. You need at minimum two apps: a rider-facing app for booking and tracking rides, and a driver-facing app for accepting rides and navigation. Most platforms also build an admin dashboard for managing operations, analytics, and driver onboarding.',
  },
];

export default function UberLikeAppDevelopmentGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100,
              }}>Mobile</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                14 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How to Build an Uber-Like App in 2026: Complete Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Everything you need to know about building a ride-sharing platform from scratch: features, tech stack, realistic cost breakdown, development timeline, and how to actually make money with it.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[{ label: 'Twitter', icon: '𝕏' }, { label: 'LinkedIn', icon: 'in' }].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)',
                  background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY + SIDEBAR */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* MAIN ARTICLE */}
              <article>

                {/* Market Opportunity */}
                <div className="reveal" style={{ marginBottom: 56 }} id="market-opportunity">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The Ride-Sharing Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global ride-sharing market is projected to reach $245 billion by 2027, growing at a CAGR of 16.8%. While Uber and Lyft dominate the North American market, there are massive opportunities in niche verticals and regional markets that remain underserved. From luxury ride services and corporate shuttle platforms to medical transportation and college campus networks, the &ldquo;Uber model&rdquo; is being applied to dozens of new categories.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The key insight for 2026: you do not need to compete with Uber head-on. The most successful ride-sharing startups are carving out profitable niches. HopSkipDrive focuses exclusively on children&apos;s transportation. Alto built a premium fleet-owned model. Zum targets school districts. Each of these companies found success by solving a specific transportation problem better than Uber ever could.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)', marginBottom: 20 }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Market insight:</strong> Niche ride-sharing apps targeting specific demographics or use cases (medical transport, corporate shuttles, women-only rides) can achieve 3-5x higher user retention than general-purpose platforms because they solve a specific pain point exceptionally well.
                    </p>
                  </div>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features Your Uber-Like App Needs
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a ride-sharing platform requires three distinct applications: a rider app, a driver app, and an admin dashboard. Each serves a different user and demands its own UX considerations. Here is the feature breakdown by application:
                  </p>

                  {/* Rider App */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Rider App Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 32 }}>
                    {[
                      { feature: 'User Registration & Profile', desc: 'Social login, phone verification, saved addresses' },
                      { feature: 'Real-Time GPS Tracking', desc: 'Live driver location on map with ETA updates' },
                      { feature: 'Ride Booking & Scheduling', desc: 'Instant booking, advance scheduling, ride-later' },
                      { feature: 'Fare Estimation', desc: 'Upfront pricing with route preview and surge indicators' },
                      { feature: 'In-App Payments', desc: 'Credit card, wallet, Apple Pay, Google Pay integration' },
                      { feature: 'Rating & Reviews', desc: 'Two-way rating system with feedback options' },
                      { feature: 'Ride History', desc: 'Past trips, receipts, re-book favorite routes' },
                      { feature: 'Push Notifications', desc: 'Driver arrival, ride status, promotions, receipts' },
                      { feature: 'SOS / Safety Features', desc: 'Emergency button, live trip sharing with contacts' },
                      { feature: 'Promo Codes & Referrals', desc: 'Discount codes, referral program, loyalty rewards' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Driver App */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Driver App Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 32 }}>
                    {[
                      { feature: 'Driver Onboarding', desc: 'Document upload, background check status, vehicle registration' },
                      { feature: 'Ride Requests', desc: 'Accept/decline rides with pickup details and fare preview' },
                      { feature: 'Navigation Integration', desc: 'Turn-by-turn directions via Google Maps or Waze' },
                      { feature: 'Earnings Dashboard', desc: 'Daily/weekly earnings, trip history, payout schedule' },
                      { feature: 'Availability Toggle', desc: 'Go online/offline, set preferred zones and hours' },
                      { feature: 'Heat Maps', desc: 'Surge zones and high-demand areas for maximizing earnings' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Admin Dashboard */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Admin Dashboard Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { feature: 'Fleet Management', desc: 'Monitor all drivers, vehicles, and active rides in real-time' },
                      { feature: 'Analytics & Reporting', desc: 'Revenue, rides, user growth, driver performance metrics' },
                      { feature: 'Surge Pricing Controls', desc: 'Configure dynamic pricing rules by zone and time' },
                      { feature: 'User & Driver Management', desc: 'Approve drivers, manage disputes, handle refunds' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack for 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Choosing the right tech stack is critical for a ride-sharing app because of the real-time nature of the platform. You need low-latency communication, efficient geospatial queries, and rock-solid reliability. Here is what we recommend at Codazz for Uber-like apps in 2026:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 20 }}>
                    {[
                      { layer: 'Mobile Frontend', tech: 'React Native or Flutter', why: 'Single codebase for iOS and Android. Flutter offers smoother animations for map-heavy UIs; React Native has a larger ecosystem.' },
                      { layer: 'Backend', tech: 'Node.js with Express or NestJS', why: 'Non-blocking I/O is perfect for handling thousands of concurrent WebSocket connections from drivers and riders.' },
                      { layer: 'Real-Time Layer', tech: 'Socket.io or Firebase Realtime Database', why: 'WebSocket-based communication for live location updates, ride status changes, and chat between driver and rider.' },
                      { layer: 'Database', tech: 'PostgreSQL + PostGIS + Redis', why: 'PostGIS handles geospatial queries (find nearest drivers). Redis caches active ride states and driver locations for sub-millisecond reads.' },
                      { layer: 'Maps & Navigation', tech: 'Google Maps Platform or Mapbox', why: 'Route calculation, ETA estimation, geocoding, and turn-by-turn navigation. Google Maps has better coverage; Mapbox offers more customization.' },
                      { layer: 'Payments', tech: 'Stripe Connect', why: 'Split payments between platform and drivers, handle refunds, manage payouts to driver bank accounts automatically.' },
                      { layer: 'Cloud Infrastructure', tech: 'AWS (ECS + RDS + ElastiCache)', why: 'Auto-scaling containers handle traffic spikes. Multi-AZ deployment ensures 99.99% uptime for mission-critical ride operations.' },
                      { layer: 'Push Notifications', tech: 'Firebase Cloud Messaging + APNs', why: 'Reliable delivery of ride alerts, driver arrival notifications, and promotional messages across both platforms.' },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 8px' }}>{item.layer}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.tech}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does an Uber-Like App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The cost to build an Uber-like app ranges from $45,000 to $200,000+ depending on the scope, features, and complexity. Here is a realistic breakdown by tier:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP / Basic',
                        price: '$45,000 - $70,000',
                        timeline: '3-4 months',
                        color: '#22c55e',
                        features: ['Basic rider & driver apps', 'GPS tracking & ride booking', 'Stripe payment integration', 'Rating system', 'Push notifications', 'Simple admin panel'],
                      },
                      {
                        tier: 'Standard',
                        price: '$80,000 - $140,000',
                        timeline: '5-7 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'Surge pricing algorithm', 'Scheduled rides', 'In-app chat & calling', 'Advanced analytics dashboard', 'Referral & promo system', 'Multi-payment methods', 'Driver heat maps'],
                      },
                      {
                        tier: 'Enterprise / Full-Featured',
                        price: '$150,000 - $200,000+',
                        timeline: '8-12 months',
                        color: '#a855f7',
                        features: ['Everything in Standard', 'AI-powered demand prediction', 'Multi-city support & geo-fencing', 'Corporate accounts & billing', 'Advanced safety features (facial verification)', 'Driver leasing/rental program', 'API for third-party integrations', 'Multi-language & multi-currency'],
                      },
                    ].map(tier => (
                      <div key={tier.tier} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${tier.color}25`, borderLeft: `3px solid ${tier.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.color, margin: '0 0 4px' }}>{tier.tier}</p>
                            <p style={{ fontSize: 24, fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.03em' }}>{tier.price}</p>
                          </div>
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', padding: '6px 16px', borderRadius: 100 }}>{tier.timeline}</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
                          {tier.features.map(f => (
                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: tier.color, flexShrink: 0 }} />
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Important:</strong> These costs include design, development, testing, and deployment for both iOS and Android. They do not include ongoing costs like server hosting ($500-$3,000/month depending on scale), Google Maps API fees ($2-$7 per 1,000 requests), or Apple/Google developer accounts ($99-$125/year).
                    </p>
                  </div>
                </div>

                {/* Development Timeline */}
                <div className="reveal" style={{ marginBottom: 56 }} id="development-timeline">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Development Timeline
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Here is a realistic timeline for building an Uber-like ride-sharing app from scratch, assuming an MVP-first approach:
                  </p>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {[
                      { phase: 'Discovery & Planning', duration: '2-3 weeks', tasks: 'Market research, feature prioritization, wireframing, technical architecture' },
                      { phase: 'UI/UX Design', duration: '3-4 weeks', tasks: 'Rider app, driver app, and admin dashboard designs with interactive prototypes' },
                      { phase: 'Backend Development', duration: '6-8 weeks', tasks: 'API development, database design, real-time WebSocket layer, payment integration' },
                      { phase: 'Mobile App Development', duration: '8-10 weeks', tasks: 'Rider and driver apps with maps, GPS tracking, notifications (runs parallel with backend)' },
                      { phase: 'Admin Dashboard', duration: '3-4 weeks', tasks: 'Fleet monitoring, analytics, user management, pricing controls' },
                      { phase: 'Testing & QA', duration: '2-3 weeks', tasks: 'End-to-end testing, performance testing, security audit, real-world ride simulation' },
                      { phase: 'Launch & Deployment', duration: '1-2 weeks', tasks: 'App store submission, server deployment, monitoring setup, soft launch' },
                    ].map((phase, i) => (
                      <div key={phase.phase} style={{ display: 'flex', gap: 20, padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>{i + 1}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                            <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>{phase.phase}</p>
                            <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>{phase.duration}</span>
                          </div>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{phase.tasks}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue Model */}
                <div className="reveal" style={{ marginBottom: 56 }} id="revenue-model">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Revenue Model: How Uber-Like Apps Make Money
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A well-designed ride-sharing platform has multiple revenue streams. Here are the most effective monetization strategies for 2026:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 20 }}>
                    {[
                      { model: 'Commission Per Ride', revenue: '20-30% of fare', desc: 'The primary revenue stream. Platform takes a percentage of every completed ride. Industry standard is 20-25% for standard rides, higher for premium tiers.' },
                      { model: 'Surge / Dynamic Pricing', revenue: '1.5x-3x multiplier', desc: 'Automatically increase prices during high-demand periods. Riders pay more, drivers earn more, and the platform takes a larger cut.' },
                      { model: 'Subscription Plans', revenue: '$9.99-$24.99/month', desc: 'Offer riders monthly passes with benefits like no surge pricing, priority pickup, or discounted rates for frequent commuters.' },
                      { model: 'Corporate Accounts', revenue: '$500-$5,000/month', desc: 'Enterprise billing for businesses. Companies pre-pay for employee rides with centralized invoicing and travel policy controls.' },
                      { model: 'In-App Advertising', revenue: '$2-$8 CPM', desc: 'Display ads in the rider app during ride wait times. Partner with local businesses for location-based promotions.' },
                      { model: 'Delivery Services', revenue: '25-35% commission', desc: 'Leverage the same driver network for package and food delivery. This is how Uber built UberEats into a $10B+ business.' },
                    ].map(item => (
                      <div key={item.model} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.model}</p>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', margin: '0 0 10px' }}>{item.revenue}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Ride-Sharing App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    At Codazz, we have built multiple ride-sharing and on-demand transportation platforms for clients across North America. Our team understands the unique engineering challenges of real-time geospatial applications: handling concurrent WebSocket connections at scale, optimizing route calculations, building fair driver-matching algorithms, and ensuring sub-second response times for ride requests.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We do not sell white-label templates. Every Uber-like app we build is custom-engineered for your specific market, regulatory requirements, and business model. Whether you are building a medical transportation platform that needs HIPAA compliance or a luxury ride service targeting high-net-worth individuals, we architect solutions that scale from day one.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{
                        padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000',
                        fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                      }}>
                        Get a Free Consultation
                      </button>
                    </Link>
                    <Link href="/solutions/uber-clone" style={{ textDecoration: 'none' }}>
                      <button style={{
                        padding: '14px 32px', borderRadius: 100, background: 'rgba(255,255,255,0.03)',
                        color: '#ffffff', fontSize: 14, fontWeight: 700,
                        border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', transition: 'all 0.2s',
                      }}>
                        View Our Uber Clone Solution
                      </button>
                    </Link>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Frequently Asked Questions
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', background: 'rgba(255,255,255,0.02)',
                            border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', gap: 16, textAlign: 'left',
                          }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"
                            style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                            <polyline points="6 9 12 15 18 9"/>
                          </svg>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px', background: 'rgba(255,255,255,0.02)' }}>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {/* Table of Contents */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0 }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px', borderRadius: 12,
                          border: '1px solid rgba(255,255,255,0.03)', background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
                          <p style={{ fontSize: 11, color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>{post.readTime} read</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="reveal" style={{
              background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
              borderRadius: 28, padding: '64px 56px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Get Started</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Ready to Build Your Ride-Sharing App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your vision with our team and receive a detailed technical proposal with fixed pricing within 48 hours. No commitment. No sales pitch. Just real numbers from engineers who have built this before.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free Estimate
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
