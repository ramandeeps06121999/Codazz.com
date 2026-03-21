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
  { id: 'market-overview', label: 'Market Overview', emoji: '📊' },
  { id: 'three-apps', label: 'The 3 Apps You Need', emoji: '📱' },
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'development-timeline', label: 'Timeline', emoji: '📅' },
  { id: 'monetization', label: 'Monetization', emoji: '💵' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'uber-like-app-development-guide', title: 'How to Build an Uber-Like App in 2026: Complete Guide', category: 'Mobile', readTime: '14 min' },
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026 Guide)', category: 'Business', readTime: '8 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide: From Idea to Launch in 90 Days', category: 'Business', readTime: '14 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a food delivery app like DoorDash?',
    a: 'A food delivery app costs between $40,000 and $300,000 depending on scope. A basic MVP with one customer-facing app starts at $40K-$75K. A full three-app ecosystem (customer, driver, restaurant) with advanced features like real-time tracking, AI recommendations, and analytics costs $150K-$300K.',
  },
  {
    q: 'Do I need three separate apps for food delivery?',
    a: 'Yes. A complete food delivery platform requires three apps: a customer app for browsing and ordering, a driver/courier app for deliveries, and a restaurant dashboard for managing orders and menus. You also need an admin panel for overall platform management. Some startups launch with just the customer app and a web-based restaurant portal to reduce initial costs.',
  },
  {
    q: 'How long does it take to build a food delivery app?',
    a: 'A basic food delivery MVP takes 4-5 months. A full-featured platform with all three apps, real-time tracking, payment integration, and restaurant management takes 7-10 months. We recommend launching the customer app first and rolling out the restaurant and driver apps in phases.',
  },
  {
    q: 'What is the best tech stack for a food delivery app in 2026?',
    a: 'We recommend React Native or Flutter for mobile apps, Node.js or Python for the backend, PostgreSQL with Redis for data, Firebase for real-time order tracking, Stripe Connect for split payments, and Google Maps for delivery routing and ETA calculations.',
  },
  {
    q: 'How do food delivery apps make money?',
    a: 'Food delivery platforms have multiple revenue streams: commission from restaurants (15-30% per order), delivery fees from customers ($1.99-$5.99), service fees (10-15% of order), subscription plans ($9.99/month for free delivery), advertising from featured restaurants, and surge pricing during peak hours.',
  },
  {
    q: 'Can I compete with DoorDash and Uber Eats?',
    a: 'Yes, but not head-on. The most successful new food delivery apps focus on niches: specific cuisines, health-conscious meals, local-only restaurants, grocery delivery, alcohol delivery, or underserved geographic markets. Niche platforms can achieve 2-4x higher customer retention than general-purpose apps.',
  },
];

export default function FoodDeliveryAppDevelopmentGuideClient() {
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
              src="/blog_images/food-delivery-app-development-guide.jpg"
              alt="food delivery app development guide"
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
                15 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Food Delivery App Development Guide 2026: Build Like DoorDash
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A complete technical and business guide to building a food delivery platform. Three apps, one ecosystem: customer ordering, driver delivery, and restaurant management. Real costs, real timelines, real strategies.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
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

                {/* Market Overview */}
                <div className="reveal" style={{ marginBottom: 56 }} id="market-overview">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The Food Delivery Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global online food delivery market is expected to surpass $340 billion by 2027. What started as a convenience has become a lifestyle. In the United States alone, over 60% of consumers order food delivery at least once a week, and the average American spends over $2,400 annually on food delivery services. This is not a trend. It is a permanent behavioral shift.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But here is what most people miss: despite the dominance of DoorDash, Uber Eats, and Grubhub, the market is far from saturated. These platforms are generalists. They serve every restaurant and every customer the same way. This creates massive opportunities for niche food delivery apps that serve specific dietary needs (keto, vegan, halal), specific cuisines, specific demographics (elderly, college students), or specific geographies (rural areas, small towns) where the big players have thin coverage.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Key stat:</strong> Local and niche food delivery apps in underserved markets achieve 40-60% lower customer acquisition costs and 2x higher order frequency compared to national platforms, because they curate restaurants their customers actually want.
                    </p>
                  </div>
                </div>

                {/* The 3 Apps You Need */}
                <div className="reveal" style={{ marginBottom: 56 }} id="three-apps">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The 3 Apps You Need to Build
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A food delivery platform is not one app. It is an ecosystem of three interconnected applications, each serving a different user with different needs. Understanding this from day one is critical to budgeting and planning correctly.
                  </p>

                  {[
                    {
                      app: 'Customer App',
                      icon: '🛒',
                      color: '#22c55e',
                      desc: 'The consumer-facing app where users browse restaurants, place orders, track delivery in real-time, and manage payments. This is your storefront and the most important app for user acquisition.',
                      features: ['Restaurant browsing with filters & search', 'Menu viewing with photos & dietary tags', 'Cart management & checkout', 'Real-time order & delivery tracking', 'In-app payments & tip functionality', 'Order history & re-ordering', 'Ratings, reviews & favorites', 'Push notifications & promotions', 'Address management & GPS auto-detect', 'Scheduled orders & group ordering'],
                    },
                    {
                      app: 'Driver / Courier App',
                      icon: '🚗',
                      color: '#3b82f6',
                      desc: 'The delivery partner app that couriers use to accept orders, navigate to restaurants and customers, manage their earnings, and track their performance metrics.',
                      features: ['Order acceptance with earnings preview', 'Optimized route navigation', 'Delivery status updates (picked up, en route, delivered)', 'Earnings dashboard & payout history', 'Availability toggle & shift scheduling', 'In-app communication with customer', 'Photo proof of delivery', 'Multi-order batching support'],
                    },
                    {
                      app: 'Restaurant Dashboard',
                      icon: '🍳',
                      color: '#f59e0b',
                      desc: 'The merchant-facing app (typically a tablet app or web dashboard) where restaurants manage their menu, accept or reject orders, set availability, and view analytics.',
                      features: ['Order management (accept, prepare, ready)', 'Menu management & item availability', 'Operating hours & holiday schedules', 'Sales analytics & reports', 'Customer feedback & ratings', 'Prep time estimation & adjustment', 'Integration with POS systems', 'Promotional tools & featured listings'],
                    },
                  ].map(app => (
                    <div key={app.app} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${app.color}25`, borderLeft: `3px solid ${app.color}`, marginBottom: 20 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <span style={{ fontSize: 28 }}>{app.icon}</span>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{app.app}</h3>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>{app.desc}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
                        {app.features.map(f => (
                          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: app.color, flexShrink: 0 }} />
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Advanced Features That Set You Apart
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Beyond the basics, these advanced features are what differentiate a successful food delivery platform from yet another DoorDash clone. In 2026, users expect intelligent experiences:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { feature: 'AI-Powered Recommendations', desc: 'Machine learning that suggests restaurants and dishes based on order history, time of day, weather, and dietary preferences. Increases average order value by 15-25%.' },
                      { feature: 'Smart Delivery Routing', desc: 'AI-optimized routes that factor in traffic, restaurant prep time, and multi-order batching to reduce delivery times and increase driver earnings.' },
                      { feature: 'Real-Time Order Tracking', desc: 'Live map showing driver location with accurate ETA updates. Integration with restaurant kitchen status for "preparing" and "ready for pickup" stages.' },
                      { feature: 'Dynamic Pricing', desc: 'Automated surge pricing during peak hours and bad weather. Includes transparent communication to customers about why prices are higher.' },
                      { feature: 'Loyalty & Rewards Program', desc: 'Points-based system with tiered rewards. Free delivery after X orders, birthday discounts, and streak bonuses for consecutive weekly orders.' },
                      { feature: 'Group Ordering', desc: 'Allow multiple people to add items to a single order. Essential for office lunches, family orders, and social dining experiences.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Food delivery apps have unique technical requirements: real-time order tracking, concurrent kitchen-driver-customer communication, payment splitting, and location-based restaurant discovery. Here is the stack we use at Codazz:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { layer: 'Mobile Apps', tech: 'Flutter or React Native', why: 'Cross-platform development for iOS and Android from a single codebase. Flutter excels at smooth animations for order tracking maps.' },
                      { layer: 'Backend API', tech: 'Node.js (NestJS) or Python (FastAPI)', why: 'High-concurrency event-driven architecture handles thousands of simultaneous orders and real-time status updates.' },
                      { layer: 'Real-Time Engine', tech: 'Socket.io + Redis Pub/Sub', why: 'WebSocket connections push live order status and driver location to all parties. Redis Pub/Sub enables horizontal scaling.' },
                      { layer: 'Database', tech: 'PostgreSQL + Redis + Elasticsearch', why: 'PostgreSQL for orders and users. Redis for caching menus and active orders. Elasticsearch for restaurant search and filtering.' },
                      { layer: 'Payments', tech: 'Stripe Connect', why: 'Multi-party payments: customer pays, platform takes commission, restaurant and driver receive their cuts automatically.' },
                      { layer: 'Maps & Routing', tech: 'Google Maps Platform', why: 'Restaurant discovery, delivery ETA calculation, driver routing, and distance-based fee calculation.' },
                      { layer: 'Cloud & DevOps', tech: 'AWS (ECS + RDS + CloudFront)', why: 'Container orchestration for auto-scaling during lunch and dinner rush. CloudFront CDN for fast menu image loading.' },
                      { layer: 'Notifications', tech: 'Firebase + Twilio', why: 'Push notifications for order updates. SMS fallback for delivery confirmations and OTP verification.' },
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
                    Cost Breakdown: How Much Does a Food Delivery App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The cost to build a food delivery platform ranges from $40,000 to $300,000+ depending on which apps you build, the feature set, and the level of AI integration. Here is the breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP / Single App',
                        price: '$40,000 - $75,000',
                        timeline: '3-5 months',
                        color: '#22c55e',
                        features: ['Customer app only (iOS + Android)', 'Restaurant listing & menu browsing', 'Order placement & basic tracking', 'Stripe payment integration', 'Web-based restaurant portal', 'Basic admin dashboard'],
                      },
                      {
                        tier: 'Standard / Full Ecosystem',
                        price: '$90,000 - $180,000',
                        timeline: '6-8 months',
                        color: '#3b82f6',
                        features: ['Customer + Driver + Restaurant apps', 'Real-time GPS delivery tracking', 'In-app chat & calling', 'Rating & review system', 'Promo codes & referral program', 'Advanced analytics dashboard', 'Multi-payment methods', 'Push notification system'],
                      },
                      {
                        tier: 'Enterprise / AI-Powered',
                        price: '$200,000 - $300,000+',
                        timeline: '9-12 months',
                        color: '#a855f7',
                        features: ['Everything in Standard', 'AI food recommendations', 'Smart delivery routing & batching', 'Dynamic surge pricing', 'Loyalty & rewards program', 'Group ordering', 'POS system integration', 'Multi-city & multi-language', 'Advanced fraud detection'],
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
                      <strong style={{ color: '#34d399' }}>Pro tip:</strong> Start with the customer app MVP and a web-based restaurant portal. This lets you validate demand with 50-60% less upfront investment. Build the native driver app and restaurant app once you have proven product-market fit with your first 20-30 restaurant partners.
                    </p>
                  </div>
                </div>

                {/* Development Timeline */}
                <div className="reveal" style={{ marginBottom: 56 }} id="development-timeline">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Development Timeline
                  </h2>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {[
                      { phase: 'Discovery & Market Research', duration: '2-3 weeks', tasks: 'Competitor analysis, restaurant partner outreach, feature prioritization, wireframing all three apps' },
                      { phase: 'UI/UX Design', duration: '4-5 weeks', tasks: 'Customer app, driver app, restaurant dashboard, and admin panel design with user testing' },
                      { phase: 'Backend & API Development', duration: '8-10 weeks', tasks: 'Order management system, real-time tracking, payment splitting, restaurant onboarding, menu management' },
                      { phase: 'Customer App Development', duration: '8-10 weeks', tasks: 'Restaurant browsing, ordering flow, real-time tracking, payments, ratings (parallel with backend)' },
                      { phase: 'Driver App Development', duration: '5-6 weeks', tasks: 'Order acceptance, navigation, earnings dashboard, delivery confirmation' },
                      { phase: 'Restaurant Dashboard', duration: '4-5 weeks', tasks: 'Order management, menu editor, analytics, operating hours, POS integration' },
                      { phase: 'Testing & QA', duration: '3-4 weeks', tasks: 'End-to-end order flow testing, payment testing, load testing during simulated peak hours' },
                      { phase: 'Launch', duration: '1-2 weeks', tasks: 'Phased rollout, restaurant onboarding, driver recruitment, soft launch in target market' },
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

                {/* Monetization */}
                <div className="reveal" style={{ marginBottom: 56 }} id="monetization">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Monetization: How Food Delivery Apps Make Money
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Food delivery platforms have one of the richest monetization models in the app economy. Here are the revenue streams that make the business model work:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { model: 'Restaurant Commission', revenue: '15-30% per order', desc: 'The primary revenue driver. Charge restaurants a percentage of every order placed through your platform. Average is 20-25% for delivery orders, 10-15% for pickup.' },
                      { model: 'Delivery Fee', revenue: '$1.99-$5.99 per order', desc: 'Charged to customers based on distance and demand. Many platforms offer free delivery as a promotional tool or for subscription members.' },
                      { model: 'Service Fee', revenue: '10-15% of order total', desc: 'A separate platform fee charged to customers on top of food prices. Covers payment processing, customer support, and platform maintenance.' },
                      { model: 'Subscription (Delivery Pass)', revenue: '$9.99-$14.99/month', desc: 'Monthly subscription offering free delivery, reduced service fees, and exclusive deals. DashPass has over 18 million subscribers.' },
                      { model: 'Featured Listings & Ads', revenue: '$50-$500/month per restaurant', desc: 'Restaurants pay for premium placement in search results, category pages, and promotional banners within the app.' },
                      { model: 'Surge Pricing', revenue: '1.2x-2x multiplier', desc: 'Dynamic delivery fees during peak hours (lunch, dinner, bad weather). Transparent pricing keeps customers informed while boosting revenue.' },
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
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Food Delivery App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We have built food delivery and on-demand platforms for clients ranging from local startups to regional restaurant chains. Our team understands the specific challenges: handling peak-hour traffic spikes, designing intuitive three-sided marketplaces, integrating with POS systems, and building reliable real-time order tracking that works even on spotty cellular networks.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We build custom. No white-label templates. Your food delivery app will be engineered specifically for your market, your cuisine niche, and your business model. From the algorithms that match orders to drivers to the commission structures that keep restaurants happy, everything is built to your specifications.
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
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
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
                  Ready to Build Your Food Delivery Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your food delivery concept with our team and receive a detailed technical proposal with fixed pricing within 48 hours. We have built this before and we know exactly what it takes.
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
