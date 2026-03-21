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
  { id: 'market-landscape', label: 'Market Landscape', emoji: '📊' },
  { id: 'three-sided-marketplace', label: '3-Sided Marketplace', emoji: '🔺' },
  { id: 'real-time-tracking', label: 'Real-Time Tracking', emoji: '📍' },
  { id: 'surge-pricing', label: 'Surge Pricing & Matching', emoji: '⚡' },
  { id: 'payments-ratings', label: 'Payments & Ratings', emoji: '💳' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'uber-like-app-development-guide', title: 'How to Build an Uber-Like App in 2026', category: 'Mobile', readTime: '14 min' },
  { slug: 'how-to-build-on-demand-app', title: 'How to Build an On-Demand App in 2026', category: 'Mobile', readTime: '12 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '10 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a taxi booking app like Uber?',
    a: 'A taxi booking app with rider, driver, and admin panels costs between $100,000 and $500,000. A functional MVP with real-time tracking, basic surge pricing, and Stripe payments typically costs $100K-$180K and takes 6-9 months. A production-grade platform matching Uber\'s core feature set — surge pricing, driver matching AI, fleet analytics, multiple payment methods, and regulatory compliance — costs $250K-$500K and takes 12-18 months. Cost is heavily influenced by the maps API you choose and the complexity of your matching algorithm.',
  },
  {
    q: 'What maps API should I use for a taxi app — Google Maps Platform or Mapbox?',
    a: 'Both work well, but have different cost profiles. Google Maps Platform is the industry default with the best geocoding accuracy and the most familiar UX for users. However, at scale (500K+ map loads/month) it becomes expensive. Mapbox is significantly cheaper at high volume, has excellent offline support, and offers more customization. Most early-stage taxi apps start with Google Maps for its superior geocoding and switch to Mapbox as volume grows. Budget $0.007 per map load for Google Maps and $0.50 per 1,000 map loads for Mapbox Dynamic Maps.',
  },
  {
    q: 'How does surge pricing work technically, and how do I implement it?',
    a: 'Surge pricing multiplies the base fare when demand exceeds supply in a geographic zone. Technically, it works by: (1) dividing your service area into hexagonal grid cells using H3 or S2 geospatial indexing, (2) monitoring the ratio of active ride requests to available drivers in each cell in real time, (3) applying a multiplier (1.1x to 3.0x) when the demand/supply ratio exceeds thresholds, (4) surfacing the surge to riders before booking confirmation. The multiplier is calculated continuously, typically every 30-60 seconds, using a formula that balances revenue optimization against ride abandonment rates.',
  },
  {
    q: 'What regulatory compliance is required to launch a taxi or rideshare app?',
    a: 'Regulatory requirements vary significantly by city and country. In the USA: most cities require a Transportation Network Company (TNC) license. California requires CPUC TNC authorization. New York City requires TLC licensing and per-trip fees. In the UK: PHV (Private Hire Vehicle) operator license required. In Canada: municipal taxi licenses and/or rideshare permits. Globally: driver background checks, vehicle inspections, insurance minimums (typically $1M commercial liability), and data privacy compliance (GDPR in Europe, CCPA in California). Budget $15K-$50K for legal counsel and regulatory setup before launch.',
  },
  {
    q: 'How do I handle driver matching and ensure fast pickup times?',
    a: 'Driver matching is a real-time optimization problem. The basic approach assigns the nearest available driver. A sophisticated approach uses a multi-factor matching algorithm that weights: proximity (distance and ETA), driver rating and acceptance rate, driver\'s position relative to likely next ride zones, and passenger pickup history with specific drivers. At scale, companies like Uber use machine learning to predict pickup times more accurately than GPS-estimated routes, accounting for traffic patterns, time of day, and local knowledge. For an MVP, start with simple nearest-driver matching using PostGIS geospatial queries. Add ML matching in your second major release.',
  },
];

export default function TaxiBookingAppDevelopmentClient() {
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

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/taxi-booking-app-development.jpg"
              alt="taxi booking app development guide 2026"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
          </div>
        </div>

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>On-Demand</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                20 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              Taxi Booking App Development Guide 2026: Build Like Uber &amp; Lyft
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From 3-sided marketplace architecture and real-time GPS tracking to surge pricing algorithms, driver matching, and regulatory compliance. The definitive guide to building a taxi or rideshare app in 2026.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, color: '#ffffff' }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[{ label: 'Twitter', icon: '𝕏' }, { label: 'LinkedIn', icon: 'in' }].map(s => (
                  <button key={s.label} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)', fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{ padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)', color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)', fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
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

              <article>

                {/* Market Landscape */}
                <div className="reveal" style={{ marginBottom: 56 }} id="market-landscape">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The Ride-Hailing Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global ride-hailing market is valued at $285 billion in 2026 and forecast to reach $485 billion by 2030 at a 14.2% CAGR. Uber operates in 70+ countries but holds only 68% of the US market, leaving significant room for regional competitors. In markets across Southeast Asia (Grab), Latin America (99, inDrive), Africa (Bolt, SafeBoda), and the Middle East (Careem), local players consistently outperform global incumbents by solving region-specific problems.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The opportunity for new entrants lies in vertical specialization: premium executive transport, women-only rides, medical transport, school run services, and electric vehicle fleets. These niches are underserved by generalist platforms and command higher margins. Corporate taxi accounts — companies contracting fleets for employee transportation — represent a $47 billion B2B segment growing at 18% annually.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Key Insight:</strong> 73% of riders say they would switch from Uber or Lyft for a 10-15% cheaper alternative with similar reliability. Competing on price via lower commission rates (Uber charges 25-30%, while challenger apps can operate at 15-20%) is a proven market entry strategy in mature ride-hailing markets. The technology barrier is lower than ever — the real moat is driver supply and geographic density.
                    </p>
                  </div>
                </div>

                {/* 3-Sided Marketplace */}
                <div className="reveal" style={{ marginBottom: 56 }} id="three-sided-marketplace">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The 3-Sided Marketplace: Rider, Driver, Admin
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A taxi booking platform is a 3-sided marketplace. Each participant has fundamentally different needs, workflows, and interfaces. Getting all three right is the engineering challenge that separates successful platforms from failed ones.
                  </p>

                  {/* Architecture diagram */}
                  <div style={{ padding: '28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 28 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Platform Architecture</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
                      {[
                        { label: 'Rider App', color: '#22c55e', features: ['Book ride', 'Live tracking', 'Payments', 'Rate driver', 'Ride history'] },
                        { label: 'Driver App', color: '#3b82f6', features: ['Accept trips', 'Navigation', 'Earnings dashboard', 'Go online/offline', 'Rate rider'] },
                        { label: 'Admin Panel', color: '#a855f7', features: ['Fleet overview', 'Driver approval', 'Fare management', 'Dispute resolution', 'Analytics'] },
                      ].map(panel => (
                        <div key={panel.label} style={{ padding: '16px 20px', borderRadius: 14, background: `${panel.color}08`, border: `1px solid ${panel.color}25` }}>
                          <p style={{ fontSize: 14, fontWeight: 700, color: panel.color, margin: '0 0 12px' }}>{panel.label}</p>
                          {panel.features.map(f => (
                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                              <div style={{ width: 5, height: 5, borderRadius: '50%', background: panel.color, flexShrink: 0 }} />
                              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{f}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Core Backend: Real-Time Matching Engine + WebSocket Server + PostgreSQL + Redis</span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: 16 }}>
                    {[
                      {
                        panel: 'Rider App',
                        color: '#22c55e',
                        features: [
                          { name: 'Ride Booking Flow', desc: 'Enter pickup and destination, view ETA and fare estimate, choose vehicle type (economy, premium, XL), confirm booking. Fare upfront pricing builds trust and reduces cancellations.' },
                          { name: 'Live Driver Tracking', desc: 'Real-time map showing driver location, animated vehicle icon, countdown ETA. Driver photo, name, rating, and vehicle details displayed. Meeting point pin for complex pickup locations.' },
                          { name: 'Multiple Stop Rides', desc: 'Add intermediate stops within a single trip. Common for commuters who need school drop-off before the office. Fare recalculates dynamically as stops are added.' },
                          { name: 'Scheduled Rides', desc: 'Book a ride up to 7 days in advance. Driver assigned 15 minutes before pickup. Critical for airport runs and early morning trips where on-demand availability is uncertain.' },
                          { name: 'Safety Features', desc: 'Share trip status with trusted contacts, SOS button with emergency services connection, anonymous contact masking (rider calls driver through the app), and ride recording option.' },
                        ],
                      },
                      {
                        panel: 'Driver App',
                        color: '#3b82f6',
                        features: [
                          { name: 'Trip Request Handling', desc: 'Incoming trip notification with rider name, pickup distance, destination area, and estimated earnings. 15-second acceptance window. Auto-decline if no action (protects rider experience).' },
                          { name: 'Navigation Integration', desc: 'Turn-by-turn navigation with pickup and dropoff points. Avoid toll options. Real-time traffic rerouting. One-tap call to rider for complex pickup locations.' },
                          { name: 'Earnings Dashboard', desc: 'Daily, weekly, and monthly earnings breakdown. Per-trip fare details including base fare, surge multiplier, and platform commission. Streak bonuses and incentive tracking.' },
                          { name: 'Shift Management', desc: 'Go online/offline with single tap. Break scheduling. Preferred zone selection for working specific neighborhoods. Fuel expense logging for tax purposes.' },
                          { name: 'Document Management', desc: 'Upload and track license, insurance, and vehicle registration expiry dates. In-app renewal reminders. Required document status visible at a glance.' },
                        ],
                      },
                      {
                        panel: 'Admin Panel',
                        color: '#a855f7',
                        features: [
                          { name: 'Fleet Overview Map', desc: 'Real-time heatmap of active drivers. Demand vs supply visualization by zone. Surge area boundaries shown live. Filter by vehicle type, status, and rating.' },
                          { name: 'Driver Onboarding & Approval', desc: 'Review driver applications with background check integration (Checkr, Sterling). Approve vehicle inspections. Deactivate drivers based on rating thresholds or policy violations.' },
                          { name: 'Dynamic Fare Management', desc: 'Set base fares, per-km rates, per-minute waiting charges, and minimum fares by zone. Configure surge pricing thresholds and maximum multipliers. A/B test fare structures.' },
                          { name: 'Dispute Resolution', desc: 'Review ride recordings and GPS traces for disputed trips. Issue refunds, adjust fares, and document resolutions. Track dispute patterns to improve app and policy.' },
                          { name: 'Analytics & Reporting', desc: 'Revenue by zone, time, and vehicle type. Driver utilization rates. Average ETA and on-trip time. Cancellation rate analysis. Custom date range exports for finance team.' },
                        ],
                      },
                    ].map(panel => (
                      <div key={panel.panel} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderLeft: `3px solid ${panel.color}` }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: panel.color, marginBottom: 16 }}>{panel.panel} — Key Features</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
                          {panel.features.map(item => (
                            <div key={item.name} style={{ padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                              <p style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.name}</p>
                              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real-Time Tracking */}
                <div className="reveal" style={{ marginBottom: 56 }} id="real-time-tracking">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Real-Time Tracking: The Technical Architecture
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Real-time GPS tracking is the most technically demanding component of a taxi app. The system must handle thousands of concurrent drivers sending location updates every 2-5 seconds, process those updates with sub-second latency, and push the relevant updates to the right rider app — all simultaneously.
                  </p>

                  {/* Data flow diagram */}
                  <div style={{ padding: '28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Real-Time Location Data Flow</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                      {['Driver GPS (2s)', '→', 'WebSocket Server', '→', 'Redis Pub/Sub', '→', 'Rider WebSocket', '→', 'Map Update'].map((node, i) => (
                        node === '→'
                          ? <span key={i} style={{ color: 'rgba(255,255,255,0.2)', fontSize: 18 }}>→</span>
                          : <div key={i} style={{ padding: '8px 14px', borderRadius: 8, background: i === 0 ? 'rgba(59,130,246,0.12)' : i === 8 ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? 'rgba(59,130,246,0.3)' : i === 8 ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.08)'}`, fontSize: 12, fontWeight: 600, color: i === 0 ? '#3b82f6' : i === 8 ? '#22c55e' : 'rgba(255,255,255,0.7)' }}>{node}</div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: 16 }}>
                    {[
                      {
                        component: 'WebSocket Server (Socket.io)',
                        desc: 'Maintains persistent bidirectional connections with driver and rider apps. Receives GPS coordinates from driver apps every 2-5 seconds. Routes updates to the corresponding rider watching that driver. Socket.io handles connection management, reconnection logic, and room-based message routing automatically.',
                        detail: 'Horizontal scaling: each Socket.io server node handles 10K-50K concurrent connections. Use Redis adapter to share state across nodes. At 10,000 concurrent drivers sending updates every 3 seconds, you need 3,333 messages/second throughput.',
                      },
                      {
                        component: 'Redis for State & Pub/Sub',
                        desc: 'Redis stores the current driver locations as geo-indexed hashes using GEOADD. The GEOSEARCH command finds all available drivers within a radius in O(N+log(M)) time — fast enough for real-time matching. Redis Pub/Sub routes driver location updates to the correct WebSocket server node handling the watching rider.',
                        detail: 'Use Redis Cluster for high availability. Store driver state (online, on-trip, heading home) as Redis hashes with TTL expiry. Automatically removes stale driver locations if GPS updates stop (driver closed app).',
                      },
                      {
                        component: 'Maps API Integration',
                        desc: 'Google Maps Platform or Mapbox provides: geocoding (address to lat/lng), reverse geocoding (lat/lng to address), directions API for routing, distance matrix for ETA calculations, places autocomplete for destination search, and static/dynamic maps for the UI.',
                        detail: 'Cost optimization: cache directions and ETA results in Redis for 30-60 seconds. Use the Distance Matrix API in batch mode. Pre-compute popular airport-to-downtown routes. At 100K daily rides with 5 API calls each, uncached = $1,750/day in Google Maps fees. With caching = $350/day.',
                      },
                      {
                        component: 'Location Smoothing & Dead Reckoning',
                        desc: 'Raw GPS coordinates are noisy. Apply a Kalman filter or simple moving average to smooth driver position updates on the rider\'s map. Implement dead reckoning — predict driver position between GPS updates based on last known speed and heading — to create smooth animated movement rather than jumpy location dots.',
                        detail: 'Client-side interpolation using the Maps SDK animation API creates the smooth vehicle movement experience riders expect from Uber. Interpolate between GPS fixes at 60fps for a native-quality tracking experience.',
                      },
                    ].map(item => (
                      <div key={item.component} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{item.component}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>{item.desc}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.05)' }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Surge Pricing & Matching */}
                <div className="reveal" style={{ marginBottom: 56 }} id="surge-pricing">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Surge Pricing Algorithm & Driver Matching Logic
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Surge pricing and driver matching are the algorithms that determine whether your platform is profitable and whether riders get picked up in reasonable time. Both are real-time optimization problems that need to balance multiple competing objectives.
                  </p>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Surge Pricing Implementation</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 28 }}>
                    {[
                      { step: '1. Zone Indexing', desc: 'Divide your service area into H3 hexagonal cells (Uber\'s approach) or S2 cells (Google\'s library). H3 resolution 8 cells cover approximately 0.74 km² each — granular enough to capture micro-demand spikes at stadiums, airports, and concert venues.' },
                      { step: '2. Demand/Supply Ratio', desc: 'Every 30 seconds, count active ride requests vs available drivers in each cell and adjacent cells. Demand/Supply ratio > 1.5 triggers 1.2x surge. Ratio > 2.5 triggers 1.5x surge. Ratio > 4.0 triggers 2.0x surge. Cap surge at regulatory limits (varies by city).' },
                      { step: '3. Surge Communication', desc: 'Surface surge multiplier to rider before booking confirmation with clear messaging. Show estimated time until surge ends based on supply forecasting. Transparency reduces cancellations and complaint rates. Mandatory in many jurisdictions (EU DSA, NYC regulations).' },
                      { step: '4. Driver Incentives', desc: 'Surge zones shown to nearby offline drivers with projected earnings. "Earn 2x in downtown for the next 45 minutes" notifications pull supply to high-demand areas. Incentive effectiveness measured and tuned continuously using A/B testing.' },
                      { step: '5. Supply Forecasting', desc: 'ML models trained on historical patterns predict demand spikes 15-60 minutes ahead. Major events (concerts, sports games) pre-loaded into the surge calendar. Proactive driver incentives deployed before the spike, not after, reducing wait times.' },
                      { step: '6. Surge Cap Compliance', desc: 'Many jurisdictions cap surge during emergencies (hurricanes, disasters). Maintain a regulatory rules engine that automatically caps multipliers based on declared emergencies and city-specific regulations. Legal exposure from non-compliance is significant.' },
                    ].map(item => (
                      <div key={item.step} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', margin: '0 0 6px' }}>{item.step}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Driver Matching Algorithm</h3>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {[
                      { approach: 'Simple Nearest Driver (MVP)', desc: 'PostGIS GEOSEARCH query returns all online drivers within a radius. Assign the closest by road ETA. Simple, fast, and works well at low driver density. Latency: < 100ms. Implement this first.', when: 'MVP phase, < 500 concurrent drivers' },
                      { approach: 'Multi-Factor Scoring', desc: 'Score each candidate driver on: estimated pickup ETA (weight 0.5), driver rating (weight 0.2), driver acceptance rate (weight 0.15), driver\'s heading direction relative to pickup (weight 0.1), time since last trip (weight 0.05). Assign driver with highest composite score.', when: '1,000-10,000 concurrent drivers' },
                      { approach: 'Batch Optimization (Uber/Lyft approach)', desc: 'Instead of matching each request individually, batch incoming requests every 500ms and solve a global assignment problem using the Hungarian algorithm or similar. Maximizes overall system efficiency — reduces average wait time across all riders by 8-12% vs greedy assignment.', when: 'High-density markets, 10K+ concurrent drivers' },
                      { approach: 'ML-Predicted ETAs', desc: 'Replace Google Maps ETA estimates with ML-predicted travel times trained on your historical trip data. Accounts for local traffic patterns, time-of-day effects, road closures, and seasonal variation. Improves ETA accuracy by 20-35%, reducing "driver is 3 min away" experiences that turn into 9 minutes.', when: 'Mature platform with 100K+ historical trips' },
                    ].map(item => (
                      <div key={item.approach} style={{ padding: '20px 24px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                          <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.approach}</p>
                          <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)', padding: '3px 10px', borderRadius: 100, whiteSpace: 'nowrap' }}>{item.when}</span>
                        </div>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payments & Ratings */}
                <div className="reveal" style={{ marginBottom: 56 }} id="payments-ratings">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Payment Integration & Rating System
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Payments and trust systems are the financial and social infrastructure of your platform. Get these wrong and no amount of engineering excellence will save the business.
                  </p>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Payment Stack</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12, marginBottom: 28 }}>
                    {[
                      { component: 'Stripe', role: 'Primary payments', desc: 'Card processing, digital wallets (Apple Pay, Google Pay), and Stripe Connect for multi-party payouts to drivers. PCI DSS Level 1 compliant. 2.9% + $0.30 per transaction.' },
                      { component: 'Stripe Connect', role: 'Driver payouts', desc: 'Marketplace payments that automatically split each fare between your platform commission and driver earnings. Instant payouts available. Handles tax reporting (1099-K in USA) automatically.' },
                      { component: 'Cash Payments', role: 'Emerging markets', desc: 'Critical for markets where card penetration is low (Southeast Asia, Africa, Latin America). Require specific accounting flow: rider pays cash, platform invoices driver for commission separately.' },
                      { component: 'Wallet System', role: 'In-app credits', desc: 'In-app wallet reduces transaction fees (one payment loads $50, used across 10 trips = 1 payment fee vs 10). Promo credits, referral bonuses, and corporate accounts managed as wallet balances.' },
                      { component: 'Fraud Detection', role: 'Risk management', desc: 'Stripe Radar + custom rules for detecting fake trips, GPS spoofing, and driver collusion. Trip GPS traces validated against the fare. Flag trips where GPS and fare are inconsistent.' },
                      { component: 'Multi-Currency', role: 'International ops', desc: 'If operating in multiple countries, Stripe\'s multi-currency support handles FX automatically. Set fares in local currency. Platform consolidates revenue in home currency with daily FX settlement.' },
                    ].map(item => (
                      <div key={item.component} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 2px' }}>{item.component}</p>
                        <p style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>{item.role}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Rating & Trust System</h3>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {[
                      { feature: 'Bidirectional Rating', desc: 'Both riders and drivers rate each other after every trip (1-5 stars). Rating prompts appear immediately after trip completion, not the next time the app is opened. Timing matters: same-session prompts get 3x higher completion rates. Public display of driver ratings builds rider confidence.' },
                      { feature: 'Rating Thresholds & Consequences', desc: 'Drivers below 4.6 stars (Uber\'s threshold) receive performance coaching. Drivers below 4.2 stars are deactivated. Riders with low ratings may be declined by high-rated drivers. Communicate thresholds transparently to both sides — it reduces gaming behavior.' },
                      { feature: 'Review Content Analysis', desc: 'NLP analysis of written reviews surfaces specific issues (dirty car, reckless driving, inappropriate behavior) without manual moderation. Auto-flag reviews mentioning safety concerns for immediate human review. Positive themes (great conversation, smooth ride) surfaced in driver profile.' },
                      { feature: 'Dispute Resolution Flow', desc: 'Riders dispute trips via in-app chat within 24 hours of completion. Admin reviews GPS trace, fare calculation, and driver notes. Partial or full refund issued with explanation. Dispute pattern analysis identifies systemic issues (specific route GPS errors, pricing calculation bugs).' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { layer: 'Rider & Driver Apps', tech: 'React Native', why: 'Single codebase for iOS and Android. Excellent maps library ecosystem (react-native-maps). Background location tracking support. Fast enough for smooth map animations. Faster time-to-market vs native.' },
                      { layer: 'Maps & Routing', tech: 'Google Maps Platform + Mapbox', why: 'Google Maps for geocoding accuracy and places autocomplete (industry best). Mapbox for the in-trip driver tracking map (better pricing at scale, smoother animations). Use both together for cost optimization.' },
                      { layer: 'Real-Time Server', tech: 'Node.js + Socket.io', why: 'Node.js non-blocking I/O handles thousands of concurrent WebSocket connections efficiently. Socket.io simplifies room management for rider-to-driver updates. Deploy horizontally behind a load balancer.' },
                      { layer: 'Matching Engine', tech: 'Go (Golang)', why: 'High-performance geospatial matching requires low-latency computation. Go handles concurrent matching tasks with goroutines. PostGIS-backed driver lookup via Golang database/sql driver. Sub-50ms matching latency achievable.' },
                      { layer: 'Database', tech: 'PostgreSQL + PostGIS + Redis', why: 'PostgreSQL for trips, users, and financial records. PostGIS extension for geospatial driver queries (find drivers within 5km). Redis for real-time driver locations (GEOADD/GEOSEARCH) and WebSocket state.' },
                      { layer: 'Admin Dashboard', tech: 'Next.js + Deck.gl', why: 'Server-rendered admin portal with Deck.gl for WebGL-powered fleet visualization maps handling thousands of simultaneous driver markers without performance degradation.' },
                      { layer: 'Payments', tech: 'Stripe + Stripe Connect', why: 'Stripe for rider card processing and digital wallets. Stripe Connect for automatic driver payouts with platform commission split. Stripe Radar for fraud detection. PCI DSS compliance handled by Stripe.' },
                      { layer: 'Notifications', tech: 'Firebase Cloud Messaging (FCM)', why: 'Push notifications for trip status updates, surge alerts, and earnings summaries. FCM is free and handles both iOS (via APNs) and Android. Critical: trip request notifications must arrive within 1 second.' },
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
                    Cost Breakdown: How Much Does a Taxi App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A functional taxi booking app with rider, driver, and admin panels costs between $100,000 and $500,000. The variance is driven by real-time infrastructure complexity, matching algorithm sophistication, and the number of markets you want to support at launch.
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP',
                        price: '$100,000 - $180,000',
                        timeline: '6-9 months',
                        color: '#22c55e',
                        features: [
                          'Rider app (iOS + Android)',
                          'Driver app (iOS + Android)',
                          'Real-time GPS tracking (Google Maps)',
                          'Basic nearest-driver matching',
                          'Stripe payment integration',
                          'Fixed-price fare calculation',
                          'Basic surge pricing (on/off)',
                          'Push notifications (FCM)',
                          'Admin panel (fleet overview)',
                          'Driver onboarding flow',
                          'Ride history and receipts',
                          'Star rating system',
                        ],
                      },
                      {
                        tier: 'Standard Platform',
                        price: '$200,000 - $350,000',
                        timeline: '10-14 months',
                        color: '#3b82f6',
                        features: [
                          'Everything in MVP',
                          'Multi-factor driver matching algorithm',
                          'Dynamic surge pricing with zone mapping',
                          'Scheduled rides',
                          'Multiple vehicle categories',
                          'In-app wallet and promo codes',
                          'Ride sharing / carpooling',
                          'Driver earnings analytics',
                          'Corporate account management',
                          'Advanced admin analytics',
                          'Dispute resolution system',
                          'Background check API integration (Checkr)',
                        ],
                      },
                      {
                        tier: 'Production Scale',
                        price: '$350,000 - $500,000+',
                        timeline: '14-20 months',
                        color: '#a855f7',
                        features: [
                          'Everything in Standard',
                          'ML-powered demand forecasting',
                          'Batch optimization matching engine (Go)',
                          'ML-predicted ETAs (trained on trip data)',
                          'Fleet management dashboard',
                          'Multi-city regulatory rules engine',
                          'EV charging station routing for EV fleets',
                          'API access for enterprise clients',
                          'Fraud detection (GPS spoofing, fare manipulation)',
                          'Driver AI coaching system',
                          'Multi-currency and multi-language',
                          'TNC license compliance tooling',
                          'GDPR and CCPA compliance infrastructure',
                        ],
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
                      <strong style={{ color: '#34d399' }}>Ongoing Operational Costs:</strong> Google Maps API ($5K-$30K/month at scale), Stripe fees (2.9% of GMV), server infrastructure ($3K-$15K/month), Checkr background checks ($30-$50 per driver), TNC licensing fees ($5K-$50K per city), and commercial liability insurance ($10K-$50K/month). Plan for these in your unit economics before launch.
                    </p>
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Taxi App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Taxi booking apps are deceptively complex: the real-time WebSocket infrastructure, geospatial matching, surge pricing, multi-party payments, and regulatory compliance all need to work flawlessly simultaneously. A broken trip confirmation or a delayed push notification costs you a rider permanently. Our team at Codazz has built real-time marketplace platforms that process thousands of concurrent transactions without degradation.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We architect taxi platforms that scale from day one. Your matching algorithm will evolve from simple nearest-driver to multi-factor scoring as your fleet grows — we design the system to support this evolution without costly rewrites. We handle the hard parts: geospatial infrastructure, WebSocket scaling, surge pricing compliance, and Stripe Connect driver payouts.
                  </p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button style={{ padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                        Get a Free Consultation
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
                        <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}>
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"/></svg>
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
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.15s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0 }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)', background: 'transparent', transition: 'all 0.2s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
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
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Get Started</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Ready to Build Your Ride-Hailing Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your taxi app vision with our team. We will map the real-time architecture, matching algorithm, and regulatory requirements for your market — and deliver a fixed-price proposal within 48 hours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
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
