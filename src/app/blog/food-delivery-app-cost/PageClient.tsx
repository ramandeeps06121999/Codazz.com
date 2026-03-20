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

const tocItems = [
  { id: 'intro', label: 'Introduction', emoji: '🍕' },
  { id: 'cost-tiers', label: 'Cost Tiers', emoji: '💰' },
  { id: 'three-apps', label: 'Three Apps You Need', emoji: '📱' },
  { id: 'factors-affecting-cost', label: 'Factors Affecting Cost', emoji: '⚙️' },
  { id: 'build-vs-buy', label: 'Build vs Clone Scripts', emoji: '⚖️' },
  { id: 'timeline', label: 'Development Timelines', emoji: '📅' },
  { id: 'why-codazz', label: 'Why Choose Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA?', category: 'Business', readTime: '9 min' },
  { slug: 'ecommerce-app-development-cost', title: 'How Much Does Ecommerce App Development Cost?', category: 'Business', readTime: '11 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
];

export default function FoodDeliveryAppCostClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);

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
              src="/blog_images/food-delivery-app-cost.jpg"
              alt="Food delivery app development cost in 2026"
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

        {/* -- ARTICLE HERO -- */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                13 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does It Cost to Build a Food Delivery App in 2026?
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A complete cost breakdown for building a food delivery platform in 2026 — covering the customer app, driver app, restaurant dashboard, and admin panel with real-time tracking, payments, and ratings.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '\ud835\udd4f' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)',
                  background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }} id="intro">
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The food delivery market is projected to surpass $500 billion globally by 2027. While DoorDash, Uber Eats, and Grubhub dominate the aggregator space, thousands of restaurants, ghost kitchens, and regional startups are building their own delivery platforms to avoid 30% commission fees and own their customer relationships. The question everyone asks first: <strong style={{ color: '#ffffff' }}>what does it actually cost to build a food delivery app?</strong>
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The complexity is often underestimated. A food delivery platform is not one app — it is three or four interconnected applications: a customer-facing ordering app, a driver/courier app, a restaurant management dashboard, and an admin panel. Each has unique requirements, and they all need to communicate in real-time.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    In this guide, we break down every cost involved in building a food delivery app in 2026 — from a basic single-restaurant ordering system to a multi-city platform competing with the major players.
                  </p>
                </div>

                {/* Cost Tiers */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Food Delivery App Cost Tiers</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    The cost varies dramatically based on the scope of your platform — a single restaurant ordering app is a very different product from a multi-city delivery marketplace.
                  </p>

                  {/* Tier 1 */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 1</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>2 - 4 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Basic Ordering & Delivery App</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>$20,000 - $50,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A single-restaurant or small chain ordering app with menu browsing, cart management, online payment, basic order tracking, push notifications for order status, and a simple restaurant dashboard to manage orders and menu items. No driver app — designed for restaurants with their own delivery staff. Ideal for restaurant chains, ghost kitchens, or single-city startups testing the market.
                    </p>
                  </div>

                  {/* Tier 2 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 2</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>4 - 8 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Mid-Range Delivery Platform</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', marginBottom: 16, letterSpacing: '-0.02em' }}>$50,000 - $120,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A full delivery platform with customer app, dedicated driver app with GPS tracking, restaurant dashboard, and admin panel. Includes real-time order tracking on a map, driver assignment algorithm, ETA calculations, multi-restaurant support, ratings and reviews, promo codes, in-app chat between customer and driver, and commission management. This is the tier most regional delivery startups build at — think "DoorDash for your city."
                    </p>
                  </div>

                  {/* Tier 3 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(52,211,153,0.12)', color: '#34d399',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 3</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>8 - 16 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Enterprise Delivery Platform</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#34d399', marginBottom: 16, letterSpacing: '-0.02em' }}>$120,000 - $300,000+</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A multi-city, multi-category delivery platform with AI-powered route optimization, surge pricing, advanced driver matching algorithms, subscription programs (like DashPass), multi-language support, loyalty programs, scheduled deliveries, group ordering, corporate accounts, API marketplace for restaurant POS integration, and advanced analytics with demand forecasting. Built for companies raising Series A+ funding and expanding across regions.
                    </p>
                  </div>
                </div>

                {/* Three Apps You Need */}
                <div className="reveal" style={{ marginBottom: 56 }} id="three-apps">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>The Three Apps You Actually Need to Build</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Most founders underestimate the scope because they only think about the customer app. In reality, you are building an interconnected ecosystem.
                  </p>

                  {[
                    { name: 'Customer App', range: '$10,000 - $80,000', detail: 'Restaurant browsing, menu viewing, search with filters (cuisine, rating, delivery time), cart management, checkout with multiple payment options, real-time order tracking on a map, order history, ratings and reviews, promo code redemption, push notifications, and saved addresses/payment methods.' },
                    { name: 'Driver / Courier App', range: '$8,000 - $50,000', detail: 'Order acceptance/rejection, GPS navigation to restaurant and customer, delivery status updates, earnings dashboard, availability toggle, delivery history, in-app communication with customer and support, document upload for verification, and heat maps showing high-demand zones.' },
                    { name: 'Restaurant Dashboard', range: '$6,000 - $40,000', detail: 'Order management (accept, prepare, ready for pickup), menu management (items, pricing, availability, photos), operating hours and delivery zone settings, sales analytics and reporting, promotional tools, and POS system integration.' },
                    { name: 'Admin Panel', range: '$8,000 - $35,000', detail: 'User management (customers, drivers, restaurants), commission and payout management, dispute resolution, platform analytics, content management for banners and promotions, driver verification and onboarding, and system configuration.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                        <span style={{ fontSize: 14, color: '#22c55e', fontWeight: 700 }}>{item.range}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Factors Affecting Cost */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Factors That Affect Food Delivery App Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    These are the key variables that determine where your project falls within the cost ranges.
                  </p>

                  {[
                    { title: 'Real-Time GPS Tracking', desc: 'Live order tracking on a map requires WebSocket connections, continuous GPS polling from the driver app, map rendering (Google Maps or Mapbox), and ETA calculations. This is one of the most technically complex features and costs $8,000-$25,000 to implement properly with battery optimization.' },
                    { title: 'Driver Assignment Algorithm', desc: 'Simple nearest-driver assignment is cheap ($3,000-$5,000). Intelligent matching that factors in driver ratings, current workload, restaurant proximity, traffic conditions, and order priority costs $10,000-$30,000. Machine learning-based optimization for route batching adds another $15,000-$40,000.' },
                    { title: 'Payment & Commission System', desc: 'Handling payments for three parties (customer pays, restaurant receives minus commission, driver gets delivery fee) requires split payment logic, automated payouts, tip management, refund processing, and tax reporting. This costs $8,000-$20,000 for a robust implementation.' },
                    { title: 'Rating & Review System', desc: 'Two-way ratings (customer rates driver/restaurant, driver rates customer), review moderation, photo reviews, and aggregate rating calculations. Simple ratings cost $3,000-$6,000. Advanced systems with sentiment analysis and fraud detection cost $8,000-$15,000.' },
                    { title: 'Notification Infrastructure', desc: 'Push notifications for order updates, driver assignments, promotions, and ETA changes need to be reliable and real-time. Building a robust notification system with SMS fallback, email triggers, and in-app alerts costs $4,000-$12,000.' },
                    { title: 'Scalability & Performance', desc: 'Lunch rush traffic can spike 10-20x above normal. Your backend needs auto-scaling, database optimization, caching layers, and CDN delivery. Architectureing for peak traffic adds $10,000-$25,000 but prevents catastrophic failures when demand surges.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 20, marginBottom: 28,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ flexShrink: 0, width: 4, borderRadius: 4, background: '#fb923c', opacity: 0.5 }} />
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Build vs Clone Scripts */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Custom Build vs Clone Scripts vs White-Label</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    You have three main paths to launching a food delivery app, each with different trade-offs.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Clone scripts ($3,000-$10,000):</strong> Pre-built solutions like Foodomaa, GloriaFood clones, or CodeCanyon scripts. Cheap and fast to deploy, but riddled with security vulnerabilities, poor code quality, limited customization, and no ongoing support. Most startups who go this route end up rebuilding from scratch within 6-12 months.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>White-label platforms ($500-$5,000/month):</strong> Services like Olo, ChowNow, or Ordermark provide branded ordering apps without custom development. Good for single restaurants but limiting for platforms. You do not own the technology, and switching costs are high.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Custom development ($20,000-$300,000+):</strong> Full ownership of the codebase, unlimited customization, and the ability to build competitive moats through technology. More expensive upfront but the only viable path for startups aiming to build a real business, not just a wrapper around someone else&apos;s platform.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Onshore vs offshore:</strong> US food delivery app developers charge $150-$250/hour. At Codazz, our blended rate with Edmonton project management and Chandigarh engineering delivers the same quality at 40-60% lower cost.
                  </p>
                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Pro tip:</strong> We have helped several clients migrate off clone scripts that were falling apart under real-world usage. The rebuild always costs more than building custom from the start. If you are serious about the food delivery business, invest in custom development from day one.
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="reveal" style={{ marginBottom: 56 }} id="timeline">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Development Timelines</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Realistic timelines for each tier, from discovery to launch.
                  </p>

                  {[
                    { phase: '01', name: 'Discovery & Product Design', duration: '2-3 weeks', cost: '$3,000 - $10,000', color: '#fb923c', desc: 'Define delivery zones, map all user flows (customer, driver, restaurant, admin), wireframe every screen, design the order lifecycle, and create technical specifications. This phase shapes the entire project.' },
                    { phase: '02', name: 'UI/UX Design', duration: '2-4 weeks', cost: '$5,000 - $18,000', color: '#a78bfa', desc: 'High-fidelity designs for all four apps. Map-centric interfaces, one-tap ordering flows, driver navigation screens, and restaurant dashboard layouts. Mobile-first with dark mode for driver night shifts.' },
                    { phase: '03', name: 'Backend & API Development', duration: '4-10 weeks', cost: '$12,000 - $60,000', color: '#60a5fa', desc: 'Real-time order management system, WebSocket infrastructure for live tracking, payment processing with split payments, driver assignment engine, notification system, and admin APIs.' },
                    { phase: '04', name: 'Frontend App Development', duration: '6-12 weeks', cost: '$15,000 - $80,000', color: '#34d399', desc: 'Customer app, driver app, and restaurant dashboard built in parallel. Map integration, real-time updates, offline-capable for driver app, and responsive admin panel. Two-week sprints with stakeholder demos.' },
                    { phase: '05', name: 'Testing & Launch', duration: '2-4 weeks', cost: '$4,000 - $15,000', color: '#f472b6', desc: 'End-to-end testing of the complete delivery flow, GPS accuracy testing, payment flow verification, load testing for peak hours, app store submission, and soft launch in a pilot zone.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 24, marginBottom: 24,
                      padding: '28px 28px', borderRadius: 20,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
                        background: item.color, borderRadius: '4px 0 0 4px',
                      }} />
                      <div style={{ flexShrink: 0, width: 48 }}>
                        <span style={{ fontSize: 24, fontWeight: 800, color: item.color, opacity: 0.7 }}>{item.phase}</span>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>{item.duration}</span>
                          <span style={{ fontSize: 13, color: item.color, fontWeight: 700 }}>{item.cost}</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Why Choose Codazz for Food Delivery App Development</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    We have built real-time logistics platforms, marketplace apps, and delivery systems. Here is why food delivery startups choose us.
                  </p>

                  {[
                    { title: 'Real-Time Systems Expertise', desc: 'WebSocket architecture, GPS tracking optimization, live map rendering, and push notification infrastructure are our core strengths. We build systems that handle thousands of concurrent deliveries without lag.' },
                    { title: 'Full Ecosystem Development', desc: 'We build all four apps — customer, driver, restaurant, and admin — as a cohesive system with shared backend infrastructure. No handoffs between different teams, no integration nightmares.' },
                    { title: 'Launch Strategy Included', desc: 'We do not just build the app and walk away. We help you plan your pilot zone launch, set up driver onboarding workflows, configure commission structures, and optimize the platform based on early user data.' },
                    { title: 'Cost-Effective Without Compromise', desc: 'Our Edmonton + Chandigarh model means you get North American project management with dedicated offshore engineers. The result: enterprise-quality delivery platforms at 40-60% less than fully US-based development.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>

                  {[
                    { q: 'How much does it cost to build an app like DoorDash?', a: 'A DoorDash-equivalent app with all features (customer app, driver app, restaurant dashboard, admin panel, real-time tracking, payments, ratings) costs $120,000-$300,000+ for custom development. However, you do not need every DoorDash feature at launch — an MVP with core functionality costs $50,000-$80,000.' },
                    { q: 'How long does it take to build a food delivery app?', a: 'A basic ordering app: 2-4 months. A full platform with driver app and real-time tracking: 4-8 months. An enterprise-grade multi-city platform: 8-16 months. We recommend launching an MVP in one city, then expanding based on traction.' },
                    { q: 'What is the ongoing cost of running a food delivery app?', a: 'Hosting and infrastructure: $500-$5,000/month depending on scale. Google Maps API: $200-$2,000/month. SMS notifications: $100-$1,000/month. Payment processing: 2.9% per transaction. Maintenance and updates: $3,000-$10,000/month.' },
                    { q: 'Should I build for iOS and Android separately?', a: 'No. Use React Native or Flutter to build one codebase that runs on both platforms. This saves 40-60% in development costs and means features ship to both platforms simultaneously. We use React Native for most food delivery projects.' },
                    { q: 'How do I compete with DoorDash and Uber Eats?', a: 'Do not try to out-feature them. Win by focusing on a specific niche (healthy food, ethnic cuisine, local restaurants only), offering lower commission rates to restaurants (15% vs 30%), providing better customer service, and building community in your target market. Technology is a tool, not a differentiator.' },
                    { q: 'Can you integrate with restaurant POS systems?', a: 'Yes. We integrate with Square, Toast, Clover, Lightspeed, and custom POS systems. POS integration allows orders to flow directly into the restaurant kitchen display system without manual entry, reducing errors and improving prep times.' },
                    { q: 'How do you handle driver onboarding and verification?', a: 'We build driver onboarding flows with document upload (license, insurance, vehicle registration), background check integration, in-app training modules, and progressive access levels. Drivers can start delivering within 24-48 hours of signup.' },
                    { q: 'What about food safety and liability features?', a: 'We implement delivery time tracking for food safety compliance, temperature-sensitive order flagging, contactless delivery documentation, driver health attestation checklists, and photo-on-delivery proof. These features protect both your platform and your customers.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>{item.q}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                    </div>
                  ))}
                </div>

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
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

        {/* -- BOTTOM CTA -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#22c55e', marginBottom: 12,
                }}>Get Your Estimate</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get Your Food Delivery App Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your delivery app concept with Codazz and receive a detailed cost breakdown, feature roadmap, and timeline within 48 hours — completely free.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free Quote →
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
