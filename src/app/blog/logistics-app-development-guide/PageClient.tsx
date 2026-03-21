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
  { id: 'core-features', label: 'Core Features', emoji: '⚙️' },
  { id: 'route-optimization', label: 'Route Optimization', emoji: '🗺️' },
  { id: 'driver-app', label: 'Driver App', emoji: '🚛' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'monetization', label: 'Monetization', emoji: '💵' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026 Guide)', category: 'Business', readTime: '8 min' },
  { slug: 'uber-like-app-development-guide', title: 'How to Build an Uber-Like App in 2026', category: 'Mobile', readTime: '14 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a logistics app?',
    a: 'A logistics app costs between $50,000 and $250,000 depending on features and complexity. A basic MVP with order management, GPS tracking, and driver app starts at $50K-$80K. A full-featured platform with AI route optimization, warehouse management, predictive analytics, and multi-carrier integration costs $180K-$250K.',
  },
  {
    q: 'How long does it take to develop a logistics app?',
    a: 'A basic logistics app MVP takes 4-6 months. A full-featured platform with route optimization, warehouse management, driver apps, customer portals, and analytics takes 9-14 months. Integration with existing ERP and WMS systems typically adds 4-8 weeks depending on API quality and documentation.',
  },
  {
    q: 'What is the most important feature in a logistics app?',
    a: 'Real-time GPS tracking is the most critical feature. 93% of shippers and 97% of consumers consider shipment visibility essential. Beyond basic tracking, the features that differentiate winning logistics apps are AI-powered route optimization (reduces fuel costs by 15-25%), predictive ETAs (more accurate than static estimates by 40%), and exception management with proactive alerts.',
  },
  {
    q: 'Should I build a logistics app from scratch or use existing platforms?',
    a: 'It depends on your competitive advantage. If logistics is your core business and you need custom workflows, route optimization, or proprietary algorithms, build custom. If you just need basic tracking and order management, consider platforms like ShipStation or Route4Me. Most successful logistics companies build custom because off-the-shelf solutions cannot accommodate their unique operational requirements.',
  },
  {
    q: 'How does AI improve logistics app performance?',
    a: 'AI delivers measurable ROI across logistics operations. Route optimization reduces fuel costs by 15-25% and increases deliveries per driver by 20%. Demand forecasting reduces overstocking by 30% and stockouts by 45%. Predictive maintenance reduces vehicle downtime by 35%. Dynamic pricing optimizes margins in real time. Companies like UPS save $400M annually with AI-powered routing alone.',
  },
];

export default function LogisticsAppDevelopmentGuideClient() {
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
              src="/blog_images/logistics-app-development-guide.jpg"
              alt="logistics app development guide"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>Logistics</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                17 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              Logistics & Supply Chain App Development Guide 2026
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From route optimization and GPS tracking to warehouse management and driver apps. The complete guide to building logistics software that cuts costs and accelerates delivery.
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
                    The Logistics Tech Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global logistics technology market is worth $82 billion and projected to reach $140 billion by 2028, growing at 14.2% annually. Supply chain disruptions over the past five years have accelerated digital transformation across the industry. Companies that invested in logistics technology reduced operational costs by 15-30% and improved delivery times by 25%. In 2026, logistics apps are not optional but operational necessities.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The biggest shift in 2026 is AI-driven logistics. Route optimization algorithms that used to be the domain of enterprise giants like UPS and FedEx are now accessible through cloud APIs. Real-time supply chain visibility has moved from spreadsheets and phone calls to live dashboards and automated alerts. Last-mile delivery optimization alone is a $55 billion opportunity, and companies that nail it see 30% lower delivery costs and 40% fewer failed deliveries.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Opportunity:</strong> 68% of logistics companies still rely on manual processes and legacy systems for dispatch and route planning. Companies that digitize operations see 20% revenue growth within 18 months. The combination of AI route optimization + real-time tracking + predictive analytics is the winning formula that separates industry leaders from laggards.
                    </p>
                  </div>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features for Your Logistics App
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A logistics app typically consists of three interconnected portals: admin/dispatch dashboard, driver/carrier mobile app, and customer tracking portal. Here are the essential features across all three:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { feature: 'Order Management', desc: 'Create, assign, and track shipments from pickup to delivery. Batch order import via CSV/API. Priority levels, special handling instructions, SLA tracking.' },
                      { feature: 'Real-Time GPS Tracking', desc: 'Live vehicle tracking on map with ETAs, speed, and route deviation alerts. Geofencing for warehouse entry/exit notifications. Historical route playback.' },
                      { feature: 'Route Optimization', desc: 'AI-powered multi-stop route planning considering traffic, weather, vehicle capacity, delivery windows, and driver hours. Saves 15-25% on fuel costs.' },
                      { feature: 'Warehouse Management', desc: 'Inventory tracking, bin location management, pick-pack-ship workflows, barcode/QR scanning, stock level alerts, and receiving dock scheduling.' },
                      { feature: 'Dispatch Dashboard', desc: 'Centralized command center with fleet overview, driver availability, pending orders, SLA violations, and drag-and-drop order assignment.' },
                      { feature: 'Proof of Delivery', desc: 'Digital signature capture, photo documentation, barcode verification, timestamp and GPS location logging. Eliminates paper-based POD disputes.' },
                      { feature: 'Customer Portal', desc: 'Self-service tracking page with real-time shipment status, estimated delivery window, delivery history, and support chat integration.' },
                      { feature: 'Fleet Management', desc: 'Vehicle maintenance scheduling, fuel tracking, inspection checklists, insurance and registration tracking, and total cost of ownership analysis.' },
                      { feature: 'Analytics Dashboard', desc: 'On-time delivery rate, cost per delivery, driver performance, route efficiency, fuel consumption trends, and customer satisfaction metrics.' },
                      { feature: 'Multi-Carrier Integration', desc: 'Connect with FedEx, UPS, DHL, USPS, and regional carriers via API. Rate shopping across carriers. Automated label generation and tracking sync.' },
                      { feature: 'Notifications & Alerts', desc: 'Delivery status updates for customers, dispatch alerts for drivers, SLA warning notifications, vehicle maintenance reminders, and exception alerts.' },
                      { feature: 'Document Management', desc: 'Digital bill of lading, commercial invoices, customs documentation, and compliance certificates. Auto-generated and attached to shipments.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Route Optimization */}
                <div className="reveal" style={{ marginBottom: 56 }} id="route-optimization">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Route Optimization: The Technology That Pays for Itself
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Route optimization is the single highest-ROI feature in logistics software. UPS famously saves $400 million annually by avoiding left turns. Even small optimizations in route planning compound into massive savings across thousands of daily deliveries. Here are the approaches that work in 2026:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      {
                        name: 'Vehicle Routing Problem (VRP) Solvers',
                        desc: 'The classic algorithmic approach. Uses constraint-based optimization to find the most efficient routes considering vehicle capacity, delivery time windows, driver hours of service, and pickup/dropoff sequences. Google OR-Tools provides open-source VRP solvers.',
                        pros: 'Deterministic, handles constraints well, proven at scale',
                        cons: 'Computationally expensive for 500+ stops, static optimization',
                      },
                      {
                        name: 'Machine Learning Route Prediction',
                        desc: 'ML models trained on historical delivery data predict actual travel times more accurately than map-based estimates. Considers time-of-day patterns, seasonal trends, local events, and construction. Amazon uses this to achieve 95% ETA accuracy.',
                        pros: 'More accurate ETAs, learns from real-world data',
                        cons: 'Requires historical data, model training infrastructure',
                      },
                      {
                        name: 'Real-Time Dynamic Routing',
                        desc: 'Recalculates routes in real time as conditions change: new orders, traffic incidents, driver breaks, and vehicle breakdowns. Uses streaming data from GPS, traffic APIs, and order management to continuously optimize active routes.',
                        pros: 'Adapts to changing conditions, handles exceptions',
                        cons: 'Complex infrastructure, requires reliable connectivity',
                      },
                      {
                        name: 'Hybrid Approach (Recommended)',
                        desc: 'Combine VRP solvers for initial route planning, ML for accurate travel time prediction, and real-time re-routing for dynamic adjustments. This three-layer approach delivers 15-25% cost reduction compared to manual planning and 5-10% improvement over static optimization alone.',
                        pros: 'Best overall performance, handles all scenarios',
                        cons: 'Most complex to build, requires ongoing ML model tuning',
                      },
                    ].map(algo => (
                      <div key={algo.name} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{algo.name}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 12 }}>{algo.desc}</p>
                        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 12, color: '#22c55e' }}>Pros: {algo.pros}</span>
                          <span style={{ fontSize: 12, color: '#f59e0b' }}>Cons: {algo.cons}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Driver App */}
                <div className="reveal" style={{ marginBottom: 56 }} id="driver-app">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The Driver App: Your Most Critical Interface
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Your driver app will be used by people who are driving, loading trucks, and navigating unfamiliar neighborhoods. It needs to be dead simple, work offline, and never get in the way of the job. Driver adoption is the number one factor that determines whether your logistics app succeeds or fails. Here is what the driver app needs:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { feature: 'Turn-by-Turn Navigation', desc: 'Integrated maps with optimized route sequencing. One-tap navigation to next stop. Large, readable UI for driving. Voice guidance with delivery-specific instructions (gate codes, loading dock locations).', priority: 'Critical' },
                      { feature: 'Stop Management', desc: 'Ordered stop list with delivery details, customer notes, and time windows. Swipe to mark complete, skip, or reschedule. Automatic sequence optimization as stops are completed or added.', priority: 'Critical' },
                      { feature: 'Digital Proof of Delivery', desc: 'Capture signature on screen, take photos of delivered packages, scan barcodes for verification. Auto-attach GPS coordinates and timestamp. Works offline with auto-sync.', priority: 'Critical' },
                      { feature: 'Offline Mode', desc: 'Full functionality without internet: route viewing, POD capture, status updates. Queues all changes and syncs when connectivity returns. Essential for rural and underground deliveries.', priority: 'Critical' },
                      { feature: 'Communication Hub', desc: 'One-tap call or message to dispatch. Customer call masking (driver calls show company number). Pre-written quick messages: running late, arrived, need access.', priority: 'High' },
                      { feature: 'Vehicle Inspection', desc: 'Digital pre-trip and post-trip inspection checklists with photo documentation. Required by DOT regulations. Auto-submitted to fleet management for compliance records.', priority: 'High' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>{item.feature}</p>
                          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.priority === 'Critical' ? '#ef4444' : '#f59e0b', background: item.priority === 'Critical' ? 'rgba(239,68,68,0.1)' : 'rgba(245,158,11,0.1)', padding: '3px 10px', borderRadius: 100 }}>{item.priority}</span>
                        </div>
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
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { layer: 'Driver App', tech: 'React Native or Flutter', why: 'Cross-platform for iOS and Android. React Native has excellent offline-first libraries (WatermelonDB). Flutter excels at map-heavy UIs with smooth performance.' },
                      { layer: 'Admin Dashboard', tech: 'Next.js (React) + Mapbox GL', why: 'Server-rendered admin portal with real-time map visualization. Mapbox GL handles thousands of simultaneous vehicle markers with WebGL performance.' },
                      { layer: 'Backend', tech: 'Node.js (NestJS) or Go', why: 'Go excels at handling thousands of concurrent GPS position updates. NestJS provides a structured framework for complex business logic and API integrations.' },
                      { layer: 'Real-Time Tracking', tech: 'WebSocket (Socket.io) + Redis Pub/Sub', why: 'Push GPS updates from drivers to dashboard in real time. Redis Pub/Sub handles message routing across server instances. Sub-second latency for live tracking.' },
                      { layer: 'Route Optimization', tech: 'Google OR-Tools + Python ML', why: 'OR-Tools for VRP solving with constraints. Python ML models for travel time prediction. Deployed as microservices called by the main backend.' },
                      { layer: 'Database', tech: 'PostgreSQL (PostGIS) + TimescaleDB', why: 'PostGIS extension for geospatial queries (vehicles within radius, geofencing). TimescaleDB for time-series GPS telemetry data. Handles billions of location records.' },
                      { layer: 'Maps & Geocoding', tech: 'Mapbox or Google Maps Platform', why: 'Mapbox offers better pricing at scale and custom styling. Google Maps has superior geocoding accuracy. Both provide routing, traffic, and ETA APIs.' },
                      { layer: 'Message Queue', tech: 'Apache Kafka or AWS SQS', why: 'Handle high-volume GPS event streams, order updates, and notification triggers. Kafka for real-time streaming analytics. SQS for simpler async processing.' },
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
                    Cost Breakdown: How Much Does a Logistics App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a logistics app ranges from $50,000 to $250,000+ depending on features, integrations, and optimization capabilities. Here is the breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP',
                        price: '$50,000 - $80,000',
                        timeline: '4-6 months',
                        color: '#22c55e',
                        features: ['Order management with status tracking', 'Basic GPS vehicle tracking', 'Driver mobile app with navigation', 'Digital proof of delivery', 'Customer tracking portal', 'Basic reporting dashboard', 'Push notifications and alerts'],
                      },
                      {
                        tier: 'Standard',
                        price: '$100,000 - $160,000',
                        timeline: '7-10 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'AI-powered route optimization', 'Warehouse management (basic)', 'Fleet management and maintenance', 'Multi-carrier API integration', 'Advanced analytics dashboard', 'Customer self-service portal', 'Offline mode for driver app'],
                      },
                      {
                        tier: 'Full-Featured',
                        price: '$180,000 - $250,000+',
                        timeline: '10-14 months',
                        color: '#a855f7',
                        features: ['Everything in Standard', 'Dynamic real-time route re-optimization', 'Full warehouse management (WMS)', 'Predictive analytics and demand forecasting', 'ERP/TMS system integration', 'Custom pricing and billing engine', 'Multi-language and multi-currency', 'IoT sensor integration (temperature, humidity)', 'Compliance and regulatory reporting'],
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
                </div>

                {/* Monetization */}
                <div className="reveal" style={{ marginBottom: 56 }} id="monetization">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Monetization: How Logistics Apps Generate Revenue
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Logistics apps monetize differently than consumer apps. The revenue models are B2B-focused with higher contract values, longer sales cycles, and stronger retention. Here are the models that work:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { model: 'SaaS Subscription', revenue: '$500-$10,000+/month', desc: 'Per-vehicle or per-user monthly pricing. Tiered plans based on fleet size, features, and API call volume. Enterprise plans with custom SLAs and dedicated support. This is the dominant model for logistics tech.' },
                      { model: 'Per-Transaction Fees', revenue: '$0.10-$2.00 per delivery', desc: 'Charge per delivery, shipment, or order processed. Works well for marketplace models connecting shippers with carriers. Scales naturally with customer growth.' },
                      { model: 'Platform Marketplace', revenue: '5-15% commission', desc: 'Connect shippers with carriers and take a percentage of each transaction. Uber Freight model. Requires critical mass on both sides but creates strong network effects.' },
                      { model: 'API Access / Integration', revenue: '$0.001-$0.05 per API call', desc: 'Sell route optimization, geocoding, or ETA prediction as API services to other businesses. Metered pricing based on usage. Creates developer ecosystem.' },
                      { model: 'White-Label Licensing', revenue: '$5,000-$50,000 setup + monthly', desc: 'License your platform to other logistics companies who rebrand it as their own. Setup fee plus monthly licensing. Lower customer acquisition cost, higher margins.' },
                      { model: 'Data & Analytics', revenue: '$1,000-$10,000/month', desc: 'Premium analytics packages: industry benchmarking, market intelligence, demand prediction, and lane pricing data. Aggregated and anonymized data products for enterprise customers.' },
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
                    Why Build Your Logistics App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Logistics apps demand real-time GPS processing at scale, AI-powered route optimization, offline-capable mobile apps, and integrations with dozens of carrier APIs and ERP systems. Our team at Codazz has deep experience building supply chain platforms that handle thousands of concurrent vehicles and millions of daily GPS events.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We do not use templates. Your logistics app will be custom-engineered with route optimization algorithms tuned to your specific delivery patterns, a driver app designed for real-world conditions, and analytics that surface actionable cost-saving insights. We build logistics software that pays for itself within months.
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
                  Ready to Build Your Logistics Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your logistics requirements with our team. We will analyze your operations, recommend optimization strategies, and provide a detailed fixed-price proposal within 48 hours.
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
