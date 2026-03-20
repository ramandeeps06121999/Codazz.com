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
  { id: 'intro', label: 'Introduction', emoji: '🛒' },
  { id: 'cost-tiers', label: 'Ecommerce Cost Tiers', emoji: '💰' },
  { id: 'factors-affecting-cost', label: 'Factors Affecting Cost', emoji: '⚙️' },
  { id: 'cost-breakdown', label: 'Feature Cost Breakdown', emoji: '🔧' },
  { id: 'build-vs-buy', label: 'Custom vs Shopify/WooCommerce', emoji: '⚖️' },
  { id: 'timeline', label: 'Development Timelines', emoji: '📅' },
  { id: 'why-codazz', label: 'Why Choose Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA?', category: 'Business', readTime: '9 min' },
  { slug: 'website-cost-usa', title: 'How Much Does a Website Cost in the USA?', category: 'Business', readTime: '7 min' },
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
];

export default function EcommerceAppDevelopmentCostClient() {
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
              src="/blog_images/ecommerce-app-development-cost.jpg"
              alt="Ecommerce app development cost in 2026"
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
                11 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does Ecommerce App Development Cost in 2026?
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A complete cost breakdown for building ecommerce apps in 2026 — from simple mobile stores to multi-vendor marketplaces — covering features, payment integrations, and how to budget smartly.
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
                    Global ecommerce is projected to exceed $8 trillion in 2026. Whether you are a DTC brand launching your first mobile app, a retailer going omnichannel, or an entrepreneur building the next multi-vendor marketplace, the first question is always the same: <strong style={{ color: '#ffffff' }}>how much will this cost to build?</strong>
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The answer ranges from $15,000 for a simple mobile storefront to $500,000+ for a full-featured marketplace with AI recommendations, multi-vendor management, and real-time inventory sync. The gap is enormous because ecommerce apps are deceptively complex — behind every clean product page sits payment processing, inventory management, shipping logic, tax calculation, fraud detection, and analytics.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    In this guide, we break down every cost factor involved in building an ecommerce app in 2026, so you can budget accurately and avoid the expensive surprises that catch most founders off guard.
                  </p>
                </div>

                {/* Cost Tiers */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Ecommerce App Cost Tiers</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Every ecommerce app falls into one of three tiers based on features, scale, and business model.
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
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Simple Mobile Store</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>$15,000 - $40,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A single-vendor mobile store with product catalog, search and filtering, shopping cart, checkout with Stripe or PayPal, user accounts, order history, push notifications, and basic analytics. Think of it as your Shopify store but as a native mobile app with better performance and push notification capabilities. Ideal for DTC brands with 50-500 products.
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
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Multi-Feature Marketplace</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', marginBottom: 16, letterSpacing: '-0.02em' }}>$50,000 - $150,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A marketplace or advanced ecommerce app with multi-vendor support, vendor dashboards, commission management, advanced search with AI recommendations, wishlists, loyalty programs, multiple payment gateways, real-time inventory management, shipping calculator with carrier integrations, promo codes and flash sales, reviews and ratings, and an admin panel for operations. This is the tier most funded ecommerce startups build at.
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
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>8 - 14 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Enterprise Ecommerce Platform</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#34d399', marginBottom: 16, letterSpacing: '-0.02em' }}>$150,000 - $500,000+</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A full-scale enterprise ecommerce ecosystem with ERP integration, warehouse management system (WMS) connectivity, AI-powered personalization engine, AR try-on features, multi-currency and multi-language support, subscription commerce, B2B wholesale portals, headless commerce architecture, advanced fraud detection, PCI DSS compliance, real-time analytics with predictive forecasting, and omnichannel inventory sync. Built for brands processing millions in annual revenue.
                    </p>
                  </div>
                </div>

                {/* Factors Affecting Cost */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Factors That Affect Ecommerce App Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here are the variables that have the biggest impact on your ecommerce app budget.
                  </p>

                  {[
                    { title: 'Feature Complexity', desc: 'A basic catalog with checkout is fundamentally different from a marketplace with vendor management, dynamic pricing, and AI-powered search. Each advanced feature adds weeks of development time. Features like AR product visualization, visual search, and social commerce can add $20,000-$60,000 each.' },
                    { title: 'Payment Gateway Integrations', desc: 'Stripe alone is straightforward ($2,000-$5,000). Adding PayPal, Apple Pay, Google Pay, Klarna (buy now, pay later), and cryptocurrency payments each adds complexity. Multi-currency support with automatic tax calculation (for selling internationally) is another $5,000-$15,000.' },
                    { title: 'Inventory & Warehouse Management', desc: 'Real-time inventory sync across multiple warehouses, POS systems, and marketplaces (Amazon, eBay) requires robust integration architecture. This alone can cost $15,000-$40,000 for enterprise-grade implementations.' },
                    { title: 'Multi-Vendor Architecture', desc: 'Marketplace apps need vendor onboarding, commission structures, payout management, dispute resolution, and vendor analytics. This architectural decision adds 40-60% to the total project cost compared to a single-vendor store.' },
                    { title: 'AI Recommendations & Personalization', desc: 'Product recommendation engines, personalized search results, dynamic pricing, and customer segmentation require machine learning infrastructure. A basic recommendation system costs $10,000-$25,000. Enterprise-grade personalization with real-time behavioral analysis costs $30,000-$80,000.' },
                    { title: 'Platform Choice (Native vs Cross-Platform)', desc: 'Building separate native iOS and Android apps costs 60-80% more than a single cross-platform app using React Native or Flutter. For most ecommerce apps, cross-platform delivers 95% of the native experience at significantly lower cost.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 20, marginBottom: 28,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ flexShrink: 0, width: 4, borderRadius: 4, background: '#22c55e', opacity: 0.5 }} />
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Feature Cost Breakdown</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is what each core ecommerce feature costs to develop, so you can prioritize your MVP and plan your roadmap.
                  </p>

                  {[
                    { name: 'Product Catalog & Search', range: '$5,000 - $20,000', detail: 'Product listing pages, categories, filtering, sorting, and search. Basic keyword search is cheap. AI-powered search with typo tolerance, synonym matching, and visual search adds significant cost.' },
                    { name: 'Shopping Cart & Checkout', range: '$4,000 - $15,000', detail: 'Cart management, guest checkout, saved addresses, order summary, promo code application, tax calculation, and shipping rate calculation. The checkout flow directly impacts conversion rates — we obsess over every step.' },
                    { name: 'Payment Processing', range: '$3,000 - $18,000', detail: 'Stripe, PayPal, Apple Pay, Google Pay integration with proper error handling, retry logic, refund processing, and PCI compliance. Multi-currency support and BNPL options add to the cost.' },
                    { name: 'User Accounts & Profiles', range: '$3,000 - $10,000', detail: 'Registration, login (email, social, phone), profile management, order history, wishlists, saved payments, address book, and notification preferences.' },
                    { name: 'Admin Dashboard', range: '$8,000 - $30,000', detail: 'Order management, product management, inventory tracking, customer management, promo code creation, analytics and reporting, and content management for banners and promotions.' },
                    { name: 'Push Notifications & Marketing', range: '$3,000 - $12,000', detail: 'Abandoned cart reminders, order status updates, price drop alerts, personalized recommendations, and promotional campaigns. Deep linking to specific products from notifications.' },
                    { name: 'Shipping & Logistics', range: '$5,000 - $20,000', detail: 'Carrier integration (UPS, FedEx, USPS, Canada Post), real-time rate calculation, tracking integration, return management, and shipping label generation.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 16, marginBottom: 16,
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

                {/* Build vs Buy */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Custom App vs Shopify / WooCommerce</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The biggest decision in ecommerce development is whether to build custom or extend an existing platform. Here is our honest take.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Use Shopify / WooCommerce when:</strong> You are a single-vendor store with standard ecommerce needs, your catalog has under 5,000 products, you do not need complex multi-vendor or B2B features, and your budget is under $20,000. Shopify is excellent for getting to market fast.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Build custom when:</strong> You are building a marketplace with multiple vendors, you need complex pricing logic (auctions, negotiations, dynamic pricing), your business model requires unique checkout flows, you want AI-powered personalization that goes beyond basic recommendations, or you need deep integration with existing ERP/WMS systems.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Onshore vs offshore development:</strong> US agencies charge $150-$300/hour for ecommerce development. Offshore teams charge $35-$75/hour. At Codazz, our blended model — Edmonton-based project management with our Chandigarh engineering team — delivers enterprise-quality ecommerce apps at 40-60% less than fully domestic teams.
                  </p>
                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Pro tip:</strong> Many successful ecommerce brands start on Shopify to validate product-market fit, then migrate to a custom app once they hit $1M+ in revenue and need features that Shopify cannot support. We help clients navigate this transition regularly.
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
                    Here is a realistic timeline for each tier of ecommerce app, from initial discovery to app store launch.
                  </p>

                  {[
                    { phase: '01', name: 'Discovery & UX Design', duration: '2-3 weeks', cost: '$3,000 - $10,000', color: '#22c55e', desc: 'Market research, competitor analysis, user flow mapping, wireframing every screen, and creating a clickable prototype. We define the product catalog structure, checkout flow, and integration requirements before writing code.' },
                    { phase: '02', name: 'UI Design & Branding', duration: '2-3 weeks', cost: '$5,000 - $15,000', color: '#a78bfa', desc: 'High-fidelity designs for all screens — product pages, cart, checkout, account, search results, and admin dashboard. Mobile-first design optimized for thumb-zone navigation and fast scanning.' },
                    { phase: '03', name: 'Core Development', duration: '6-16 weeks', cost: '$15,000 - $120,000', color: '#60a5fa', desc: 'Backend API development, database architecture, frontend app development, payment integration, product management system, and order processing workflow. Two-week sprints with demos after each cycle.' },
                    { phase: '04', name: 'Integration & Testing', duration: '2-4 weeks', cost: '$5,000 - $25,000', color: '#fbbf24', desc: 'Payment gateway testing, shipping API integration, load testing for peak traffic, security audit, app store compliance review, and end-to-end checkout testing across devices.' },
                    { phase: '05', name: 'Launch & Growth', duration: 'Ongoing', cost: '$2,000 - $8,000/mo', color: '#f472b6', desc: 'App store submission, performance monitoring, A/B testing for conversion optimization, new feature development, seasonal promotions setup, and ongoing maintenance and updates.' },
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
                  }}>Why Choose Codazz for Ecommerce App Development</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    We have built ecommerce apps for DTC brands, B2B wholesalers, and multi-vendor marketplaces. Here is why clients choose us.
                  </p>

                  {[
                    { title: 'Conversion-Focused Engineering', desc: 'We do not just build features — we engineer for conversions. Every checkout step, every product page layout, every search result ranking is optimized based on ecommerce best practices and real data from hundreds of stores we have worked with.' },
                    { title: 'Full-Stack Ecommerce Expertise', desc: 'From React Native mobile apps to Node.js backends, from Stripe payment flows to Algolia search integration, we handle the complete ecommerce stack. No subcontracting, no handoffs between teams.' },
                    { title: 'Scalable Architecture from Day One', desc: 'Our ecommerce apps are built to handle Black Friday traffic from the start. Auto-scaling infrastructure, CDN-optimized image delivery, database query optimization, and caching strategies that keep your app fast under load.' },
                    { title: 'Transparent, Fixed-Price Quotes', desc: 'We provide detailed line-item estimates before starting. You know exactly what each feature costs, and we commit to delivering within budget. No hourly billing surprises.' },
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
                    { q: 'How much does a basic ecommerce app cost?', a: 'A simple single-vendor mobile store costs $15,000-$40,000. A marketplace with multi-vendor support costs $50,000-$150,000. Enterprise-grade ecommerce platforms with AI, ERP integration, and omnichannel features range from $150,000 to $500,000+.' },
                    { q: 'How long does it take to build an ecommerce app?', a: 'A simple store takes 2-4 months. A feature-rich marketplace takes 4-8 months. Enterprise ecommerce platforms take 8-14 months. These timelines include design, development, testing, and launch.' },
                    { q: 'Should I build a native app or use React Native?', a: 'For 90% of ecommerce apps, React Native or Flutter delivers the best value — one codebase for iOS and Android at 40-60% less cost than separate native apps. We only recommend native development for apps with heavy AR/VR features or extremely custom animations.' },
                    { q: 'What are the ongoing costs after launch?', a: 'Hosting and infrastructure: $200-$2,000/month. Payment processing fees: 2.9% + $0.30 per transaction (Stripe). Maintenance and updates: $2,000-$8,000/month. App store fees: $99/year (Apple) + $25 one-time (Google).' },
                    { q: 'Do I need a separate website and mobile app?', a: 'Not necessarily. A progressive web app (PWA) or responsive web app can serve both desktop and mobile users from a single codebase. However, a dedicated mobile app typically delivers 3-4x higher conversion rates than mobile web due to push notifications, faster performance, and saved payment methods.' },
                    { q: 'How do you handle product data migration?', a: 'We build custom migration scripts to transfer your product catalog, customer data, and order history from Shopify, WooCommerce, Magento, or any other platform. Migration is included in our project scope at no additional cost.' },
                    { q: 'Can you integrate with my existing ERP or inventory system?', a: 'Yes. We have integrated ecommerce apps with SAP, NetSuite, QuickBooks, TradeGecko, and dozens of custom inventory systems. API integration is a core strength of our team.' },
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
                  Get Your Ecommerce App Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your ecommerce vision with Codazz and receive a detailed cost breakdown, feature roadmap, and timeline within 48 hours — completely free.
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
