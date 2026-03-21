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
  { id: 'business-models', label: 'Business Models', emoji: '🏪' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'pos-integration', label: 'POS Integration', emoji: '🔗' },
  { id: 'cold-chain', label: 'Cold Chain Logistics', emoji: '❄️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'food-delivery-app-development-guide', title: 'Food Delivery App Development Guide 2026', category: 'Mobile', readTime: '14 min' },
  { slug: 'how-to-build-on-demand-app', title: 'How to Build an On-Demand App: Complete Guide', category: 'Mobile', readTime: '12 min' },
  { slug: 'uber-like-app-development-guide', title: 'How to Build an Uber-Like App in 2026', category: 'Mobile', readTime: '14 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a grocery delivery app like Instacart?',
    a: 'Building a grocery delivery app like Instacart costs between $80,000 and $300,000+. A focused MVP with product catalog, cart, slot booking, and shopper app starts around $80K-$120K. A full-featured platform with POS integrations, inventory sync, dark store management, and real-time driver tracking costs $180K-$300K+. Ongoing infrastructure runs $1,500-$6,000/month at scale.',
  },
  {
    q: 'What is the difference between the dark store model and third-party store integration?',
    a: 'A dark store is a micro-fulfillment center dedicated entirely to online orders — no walk-in customers. It enables faster picking (10-15 minutes vs 30-45 minutes in a retail store), better inventory accuracy, and optimized shelf layouts for picking speed. Third-party store integration (like Instacart\'s original model) partners with existing supermarkets where shoppers pick from live retail shelves. Dark stores offer better margins and speed; third-party integration offers lower upfront capital and faster geographic expansion.',
  },
  {
    q: 'How do I integrate with existing supermarket POS systems?',
    a: 'POS integration typically happens through middleware APIs or direct vendor SDKs. For major chains, you work with their IT teams to implement webhook-based inventory feeds. For independent grocers, solutions like NCR, Lightspeed, Clover, and Square all have APIs. The integration syncs product availability, pricing, and stock levels in near real-time. Expect 4-8 weeks of integration work per POS system type, plus ongoing maintenance as vendors release updates.',
  },
  {
    q: 'How do grocery delivery apps handle perishable and temperature-sensitive items?',
    a: 'Cold chain compliance requires temperature-controlled storage zones in your fulfillment centers, insulated delivery bags for drivers, and routing algorithms that minimize time for frozen/refrigerated items. The app tracks item categories and automatically groups orders by temperature zone during picking. You also need driver onboarding that includes food safety training and vehicle temperature checks. Some platforms use IoT sensors in delivery bags to monitor temperature during transit.',
  },
  {
    q: 'What is the best revenue model for a grocery delivery app?',
    a: 'Most successful grocery delivery apps combine multiple revenue streams: delivery fees ($2.99-$9.99 per order), express delivery premiums, subscription memberships ($9.99-$14.99/month for free delivery), retailer listing fees from grocery partners, in-app advertising from CPG brands, and private label commissions. Instacart+ (formerly Instacart Express) generated significant recurring revenue through its membership model. We recommend launching with delivery fees and adding subscription after 1,000+ monthly active users.',
  },
];

export default function GroceryDeliveryAppDevelopmentClient() {
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
              src="/blog_images/grocery-delivery-app-development.jpg"
              alt="grocery delivery app development guide instacart"
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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How to Build a Grocery Delivery App Like Instacart (2026 Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Everything you need to know about building a grocery delivery platform: core features, dark store vs third-party models, POS integration, cold chain logistics, tech stack, and a realistic cost breakdown from $80K to $300K+.
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
                    The Grocery Delivery Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global online grocery market is projected to hit $1.1 trillion by 2027, growing at a staggering CAGR of 24.8%. The COVID-19 pandemic permanently shifted consumer behavior: more than 60% of households that tried grocery delivery for the first time during lockdowns continued ordering online after restrictions lifted. In the United States alone, online grocery sales surpassed $150 billion in 2025.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The opportunity is not just in replicating Instacart. The most promising niches include ethnic grocery delivery (serving underserved communities with specific food needs), farm-to-door platforms connecting local producers directly to consumers, B2B restaurant supply platforms, and ultra-fast 10-minute grocery delivery modeled after Getir and Gorillas. Each of these represents a real market where a well-built platform can capture significant share.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)', marginBottom: 20 }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Market insight:</strong> The average order value for online grocery is $85-$110, significantly higher than restaurant food delivery at $35-$50. This means your platform generates more revenue per transaction, improving unit economics even with higher fulfillment complexity.
                    </p>
                  </div>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Q-commerce (quick commerce) targeting 10-30 minute delivery windows is a $72 billion segment growing at 30%+ annually. Platforms like DoorDash Dash Mart, Amazon Fresh, and regional players are investing heavily in urban micro-fulfillment. If you are building in a metropolitan area, this is where the most defensible competitive moats can be built through logistics network density.
                  </p>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features Your Grocery Delivery App Needs
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A grocery delivery platform requires four interconnected applications: a customer app, a shopper/picker app, a driver app, and an admin dashboard. Each serves a distinct user with unique requirements. Here is the complete feature breakdown:
                  </p>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Customer App Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 32 }}>
                    {[
                      { feature: 'Product Catalog & Search', desc: 'Hierarchical categories, faceted search, barcode scanning, voice search' },
                      { feature: 'Smart Cart & Substitutions', desc: 'AI-driven substitution suggestions when items are out of stock' },
                      { feature: 'Delivery Slot Booking', desc: 'Real-time slot availability, express delivery options, advance scheduling' },
                      { feature: 'Real-Time Driver Tracking', desc: 'Live GPS map showing shopper picking and driver en route' },
                      { feature: 'Inventory Sync Display', desc: 'Real-time stock levels, "low stock" warnings, availability alerts' },
                      { feature: 'Personalized Recommendations', desc: 'ML-powered "buy again", seasonal promotions, dietary filters' },
                      { feature: 'Multi-List Management', desc: 'Save multiple shopping lists, share lists with family members' },
                      { feature: 'In-App Chat with Shopper', desc: 'Real-time messaging to approve substitutions or add last-minute items' },
                      { feature: 'Digital Coupons & Loyalty', desc: 'Store-specific coupons, loyalty points, cashback rewards' },
                      { feature: 'Multiple Payment Methods', desc: 'Cards, Apple Pay, Google Pay, EBT/SNAP, store credit' },
                      { feature: 'Order History & Reorder', desc: 'One-tap reorder of previous baskets, spending analytics' },
                      { feature: 'Nutrition & Allergy Info', desc: 'Detailed product information, ingredient lists, dietary badges' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Shopper / Picker App Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 32 }}>
                    {[
                      { feature: 'Optimized Pick List', desc: 'Aisle-sequenced picking route for maximum efficiency' },
                      { feature: 'Barcode Scanning', desc: 'Verify correct items with barcode confirmation to prevent errors' },
                      { feature: 'Substitution Workflow', desc: 'Photo substitution approval, customer chat, intelligent alternatives' },
                      { feature: 'Weight & Produce Handling', desc: 'Variable-weight item recording, produce selection guidance' },
                      { feature: 'Multi-Order Batching', desc: 'Pick multiple orders simultaneously with clear separation workflow' },
                      { feature: 'Earnings & Performance', desc: 'Real-time earnings, tips, completion rate, quality scores' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Admin Dashboard Features</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { feature: 'Inventory Management', desc: 'Real-time stock levels, reorder triggers, wastage tracking' },
                      { feature: 'Order Operations', desc: 'Live order board, SLA monitoring, exception handling' },
                      { feature: 'Driver & Shopper Management', desc: 'Onboarding, performance scoring, zone assignments' },
                      { feature: 'Analytics & Revenue', desc: 'GMV, AOV, fill rates, substitution rates, delivery times' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Models */}
                <div className="reveal" style={{ marginBottom: 56 }} id="business-models">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Dark Store Model vs Third-Party Store Integration
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    The fundamental business model decision for your grocery delivery platform determines your unit economics, scalability, and differentiation. The two dominant models are the dark store (owned fulfillment center) and the third-party retailer aggregator model. Many mature platforms use a hybrid approach.
                  </p>
                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        model: 'Dark Store Model',
                        subtitle: 'Owned Micro-Fulfillment Centers',
                        color: '#22c55e',
                        pros: [
                          'Ultra-fast delivery: 10-30 minute windows achievable',
                          'Full inventory control and accuracy (98%+ fill rates)',
                          'Optimized shelf layout purely for picking speed',
                          'Higher margins: no retailer revenue share',
                          'Ability to offer private-label products',
                          'Consistent quality and cold chain compliance',
                        ],
                        cons: [
                          'High upfront capital: $150K-$500K per fulfillment node',
                          'Requires owned inventory and procurement operations',
                          'Limited SKU count vs full supermarket',
                          'Slower geographic expansion',
                        ],
                      },
                      {
                        model: 'Third-Party Store Integration',
                        subtitle: 'Retailer Aggregator Model (Instacart Original)',
                        color: '#3b82f6',
                        pros: [
                          'No inventory ownership: zero procurement risk',
                          'Instant access to 50,000+ SKUs per partner store',
                          'Rapid geographic expansion by adding store partners',
                          'Lower upfront capital requirements',
                          'Full store brand selection customers already trust',
                        ],
                        cons: [
                          'Lower fill rates (75-85%) due to retail shelf availability',
                          'Longer delivery windows (1-4 hours typical)',
                          'Revenue sharing with retail partners reduces margins',
                          'Less control over customer experience',
                          'Picking in live retail stores is slower and less efficient',
                        ],
                      },
                    ].map(item => (
                      <div key={item.model} style={{ padding: '28px 32px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}25`, borderLeft: `3px solid ${item.color}` }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color, margin: '0 0 4px' }}>{item.model}</p>
                        <p style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 20px' }}>{item.subtitle}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                          <div>
                            <p style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Advantages</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              {item.pros.map(p => (
                                <div key={p} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', flexShrink: 0, marginTop: 6 }} />
                                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{p}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(239,68,68,0.8)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Challenges</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              {item.cons.map(c => (
                                <div key={c} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(239,68,68,0.6)', flexShrink: 0, marginTop: 6 }} />
                                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{c}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Recommendation:</strong> Start with third-party store integration to validate demand and build your customer base with lower capital risk. Once you reach 500+ daily orders in a market, open a dark store node to serve your highest-frequency customers with ultra-fast delivery — this hybrid approach is how Instacart evolved its business model.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack for 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Grocery delivery apps have unique technical challenges: large product catalogs (50,000+ SKUs), real-time inventory sync with external systems, perishable item handling, multi-party coordination (customer, shopper, driver), and complex substitution logic. Here is the stack we recommend at Codazz:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { layer: 'Mobile Apps', tech: 'React Native or Flutter', why: 'Single codebase for customer, shopper, and driver apps across iOS and Android. Flutter\'s performance is excellent for image-heavy product catalog UIs.' },
                      { layer: 'Backend API', tech: 'Node.js (NestJS) or Python (FastAPI)', why: 'NestJS for complex domain modeling; FastAPI for ML-heavy recommendation and substitution engines. Microservices architecture for independent scaling of catalog, orders, and logistics.' },
                      { layer: 'Product Catalog & Search', tech: 'Elasticsearch + PostgreSQL', why: 'Elasticsearch handles full-text product search with faceting, synonyms, and typo tolerance. PostgreSQL stores structured product data, pricing, and inventory.' },
                      { layer: 'Real-Time Layer', tech: 'Firebase Realtime / Pusher', why: 'Live order status updates, shopper-customer chat, driver location streaming. Firebase works well for rapid development; Pusher for more control at scale.' },
                      { layer: 'Mapping & Routing', tech: 'Google Maps Platform + OSRM', why: 'Google Maps for customer-facing tracking; OSRM (open-source) for internal route optimization of driver dispatch and multi-stop delivery batching.' },
                      { layer: 'Payments', tech: 'Stripe + EBT Integration', why: 'Stripe handles cards and digital wallets. EBT/SNAP integration (via Stripe or Forage API) is essential for US grocery compliance and capturing a significant customer segment.' },
                      { layer: 'Inventory Sync', tech: 'Event-driven (Kafka or SQS)', why: 'Message queues handle high-throughput inventory updates from POS systems and warehouse management systems without overwhelming your primary database.' },
                      { layer: 'Infrastructure', tech: 'AWS (EKS + Aurora + S3)', why: 'Kubernetes for auto-scaling during peak hours (evenings and weekends). Aurora PostgreSQL for managed database. S3 + CloudFront for product image CDN.' },
                    ].map(item => (
                      <div key={item.layer} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', margin: '0 0 8px' }}>{item.layer}</p>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.tech}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* POS Integration */}
                <div className="reveal" style={{ marginBottom: 56 }} id="pos-integration">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Integrating with POS Systems and Retail Partners
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    POS integration is the most technically complex aspect of building a third-party model grocery platform. You need near-real-time inventory feeds, price synchronization, and order injection into the retailer&apos;s existing workflow. Here is how to approach each major POS system:
                  </p>
                  <div style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
                    {[
                      { pos: 'NCR Emerald / Aloha', method: 'NCR Connected Payments API + EDI feeds', notes: 'Used by major chains like Kroger. Supports real-time price feeds and inventory queries. Requires retailer IT cooperation and formal partnership.' },
                      { pos: 'Lightspeed Retail', method: 'Lightspeed Retail API (REST)', notes: 'Well-documented API ideal for independent grocers. Supports webhooks for inventory changes, product catalog sync, and order management.' },
                      { pos: 'Square for Retail', method: 'Square Catalog API + Inventory API', notes: 'Strong documentation, easy OAuth setup. Great for small-to-medium independent grocers. Real-time inventory webhooks available.' },
                      { pos: 'Clover POS', method: 'Clover REST API + Webhooks', notes: 'Used widely in independent grocery stores. Supports product catalog sync and inventory level queries with developer-friendly SDK.' },
                      { pos: 'Custom / Legacy Systems', method: 'Middleware ETL Layer (CSV/FTP or EDI)', notes: 'Many regional chains use proprietary or legacy systems. Requires building a middleware adapter that ingests batch inventory files (hourly or daily) and maps to your product schema.' },
                    ].map(item => (
                      <div key={item.pos} style={{ display: 'flex', gap: 20, padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ flexShrink: 0, width: 8, borderRadius: 4, background: 'rgba(34,197,94,0.3)', alignSelf: 'stretch' }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                            <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.pos}</p>
                            <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600, background: 'rgba(34,197,94,0.08)', padding: '3px 10px', borderRadius: 100 }}>{item.method}</span>
                          </div>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>{item.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Engineering tip:</strong> Build a unified product schema adapter layer in your backend that normalizes data from all POS sources into a consistent internal format. This means adding a new retailer requires only building one new adapter, not touching your core platform logic. This architecture paid off significantly for Instacart as they scaled to thousands of retail partners.
                    </p>
                  </div>
                </div>

                {/* Cold Chain */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cold-chain">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cold Chain Logistics: Handling Perishables at Scale
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Temperature-sensitive items (fresh produce, dairy, meat, frozen foods) account for 40-60% of grocery basket value. Mishandling these items leads to food safety risks, customer complaints, and regulatory liability. Your platform must enforce cold chain compliance at every step: storage, picking, handoff, and delivery.
                  </p>
                  <div style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
                    {[
                      { phase: 'Storage & Fulfillment', icon: '🏭', tasks: 'Dark stores require separate temperature zones: ambient (15-22°C), chilled (0-4°C), and frozen (-18°C or below). Each zone needs dedicated shelf space and picking equipment. Temperature monitoring sensors with automatic alerts for deviations.' },
                      { phase: 'Picking & Packing', icon: '📦', tasks: 'Pickers use insulated totes for chilled and frozen items. Pick sequences are optimized to minimize time perishables spend at ambient temperature. The shopper app flags temperature-sensitive items with handling instructions and time limits.' },
                      { phase: 'Driver Handoff', icon: '🤝', tasks: 'Staged order bags are labeled by temperature category. Drivers use vehicle-specific insulated bags or refrigerated compartments. The driver app records bag handoff with temperature category acknowledgment for compliance documentation.' },
                      { phase: 'Delivery Window', icon: '🚗', tasks: 'Routing algorithms prioritize deliveries with frozen/chilled items. Maximum delivery window caps (typically 60-90 minutes for perishables) are enforced in slot booking. IoT temperature sensors in delivery bags feed data back to operations dashboards.' },
                      { phase: 'Customer Communication', icon: '📱', tasks: 'App clearly communicates temperature bag return policy. Customers receive handling instructions for perishable items. Automatic flagging of deliveries that exceeded time limits for proactive customer service outreach.' },
                    ].map((item, i) => (
                      <div key={item.phase} style={{ display: 'flex', gap: 20, padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                            <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>{i + 1}</span>
                            <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.phase}</p>
                          </div>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>{item.tasks}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Cost Breakdown: How Much Does a Grocery Delivery App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a grocery delivery platform is more complex than a restaurant delivery app due to the larger product catalog, inventory management requirements, and multi-party coordination. Here is a realistic cost breakdown by tier:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP / Basic',
                        price: '$80,000 - $120,000',
                        timeline: '4-5 months',
                        color: '#22c55e',
                        features: ['Customer app (iOS + Android)', 'Shopper picking app', 'Basic product catalog (manual upload)', 'Delivery slot booking', 'Stripe payment integration', 'Real-time order tracking', 'Admin dashboard', 'Push notifications'],
                      },
                      {
                        tier: 'Standard',
                        price: '$130,000 - $200,000',
                        timeline: '6-9 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'POS integration (1-2 systems)', 'Real-time inventory sync', 'Smart substitution engine', 'In-app shopper chat', 'Multi-store support', 'Driver app with route optimization', 'EBT/SNAP payment support', 'Loyalty & coupon system', 'Analytics dashboard'],
                      },
                      {
                        tier: 'Enterprise / Full-Featured',
                        price: '$220,000 - $350,000+',
                        timeline: '10-15 months',
                        color: '#a855f7',
                        features: ['Everything in Standard', 'Dark store management system', 'Multiple POS integrations', 'ML recommendation engine', 'IoT cold chain monitoring', 'Demand forecasting & auto-reorder', 'White-label retailer portals', 'Multi-city operations', 'Advanced fraud detection', 'API for third-party integrations'],
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
                      <strong style={{ color: '#34d399' }}>Important:</strong> These development costs do not include dark store build-out ($150K-$500K per location), product catalog data licensing ($5K-$20K/month for databases like Syndigo or 1WorldSync), or ongoing infrastructure costs ($2,000-$8,000/month at scale). Factor these operational costs into your total investment planning.
                    </p>
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Grocery Delivery App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    At Codazz, we have built on-demand delivery platforms for clients across North America, the Middle East, and Asia. Grocery delivery sits at the intersection of our deepest expertise areas: large-scale product catalogs, real-time logistics coordination, third-party system integration, and consumer mobile apps with exceptional UX.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We understand the nuances that separate a great grocery app from a merely functional one: the substitution UX that keeps customers from canceling when items are out of stock, the picking sequence optimization that reduces shopper time by 30%, the cold chain alerting that prevents food safety incidents, and the inventory accuracy systems that get you to 95%+ fill rates. These details are what build customer loyalty in a category where switching costs are low.
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
                    <Link href="/services/mobile-app-development" style={{ textDecoration: 'none' }}>
                      <button style={{
                        padding: '14px 32px', borderRadius: 100, background: 'rgba(255,255,255,0.03)',
                        color: '#ffffff', fontSize: 14, fontWeight: 700,
                        border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', transition: 'all 0.2s',
                      }}>
                        View Mobile App Services
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
                  Ready to Build Your Grocery Delivery App?
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
