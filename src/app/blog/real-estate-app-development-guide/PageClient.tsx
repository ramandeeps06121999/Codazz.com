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
  { id: 'mls-integration', label: 'MLS Integration', emoji: '🔗' },
  { id: 'virtual-tours', label: 'Virtual Tours & AR', emoji: '🏠' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'monetization', label: 'Monetization', emoji: '💵' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026 Guide)', category: 'Business', readTime: '8 min' },
  { slug: 'uber-like-app-development-guide', title: 'How to Build an Uber-Like App in 2026', category: 'Mobile', readTime: '14 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a real estate app like Zillow?',
    a: 'A real estate app costs between $50,000 and $250,000 depending on features and data integrations. A basic property listing app with search and MLS integration starts at $50K-$90K. A full Zillow-like platform with Zestimate-style valuations, virtual tours, mortgage calculators, and agent CRM costs $150K-$250K.',
  },
  {
    q: 'How does MLS integration work for real estate apps?',
    a: 'MLS (Multiple Listing Service) data is accessed through RETS (Real Estate Transaction Standard) or the newer RESO Web API. You need to apply for access through individual MLS boards, sign data licensing agreements, and build an ETL pipeline to sync listing data. There are also aggregators like ListHub, Spark, and Bridge Interactive that simplify multi-MLS access.',
  },
  {
    q: 'How long does it take to build a real estate app?',
    a: 'A basic real estate app MVP takes 4-5 months. A full-featured platform with MLS integration, virtual tours, mortgage tools, and agent matching takes 8-12 months. MLS data integration alone can take 4-6 weeks due to the approval process and data normalization requirements.',
  },
  {
    q: 'What makes a real estate app successful in 2026?',
    a: 'The winning real estate apps in 2026 combine three things: hyper-local data accuracy (school ratings, walkability, crime stats, noise levels), immersive property visualization (3D tours, AR staging, drone footage), and AI-powered insights (price predictions, investment analysis, neighborhood trend forecasting). Users want to feel confident making decisions without visiting every property.',
  },
  {
    q: 'Should I build a real estate app for buyers, agents, or both?',
    a: 'Start with one primary user. Consumer-facing apps (like Zillow) need massive traffic to monetize through advertising and referral fees. Agent-facing apps (like a CRM) are easier to monetize through subscriptions. Many successful platforms start agent-first, build a valuable toolset, then expand to consumers using the agent network as a distribution channel.',
  },
  {
    q: 'How do real estate apps make money?',
    a: 'The primary revenue models are: advertising from agents and lenders ($5-$50 per lead), subscription plans for agents ($29-$299/month), mortgage referral fees ($500-$2,000 per funded loan), premium listings for sellers, and data licensing to institutional investors. Zillow generates over $1.8 billion annually using a combination of these models.',
  },
];

export default function RealEstateAppDevelopmentGuideClient() {
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
              src="/blog_images/real-estate-app-development-guide.jpg"
              alt="real estate app development guide"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>Mobile</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                14 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              Real Estate App Development Guide 2026: Build Like Zillow
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              Everything you need to build a real estate platform: MLS integration, virtual tours, mortgage calculators, AI-powered valuations, and the complete cost breakdown for 2026.
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

                {/* Market Opportunity */}
                <div className="reveal" style={{ marginBottom: 56 }} id="market-opportunity">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    The Real Estate Tech Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global PropTech market is projected to reach $86 billion by 2027, growing at 16% annually. Real estate remains one of the largest asset classes in the world, worth over $380 trillion globally, yet the buying and selling process is still remarkably analog. This disconnect between market size and digital maturity creates enormous opportunities for innovative real estate apps.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, the real estate app landscape is bifurcating. On one side, you have the giants: Zillow, Redfin, and Realtor.com dominating general property search. On the other, a wave of specialized platforms is gaining traction: apps focused on investment property analysis, commercial real estate, luxury homes, vacation rentals, new construction, and specific geographic markets. The lesson is clear: do not try to out-Zillow Zillow. Find a niche and own it.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Key trend:</strong> AI-powered property valuation and investment analysis tools are the fastest-growing segment in PropTech. Apps that help investors identify undervalued properties, predict appreciation, and analyze rental yields are commanding premium subscription prices ($99-$299/month) with extremely low churn.
                    </p>
                  </div>
                </div>

                {/* Core Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="core-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Core Features for a Real Estate App
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A competitive real estate app in 2026 needs features across three categories: property discovery, evaluation tools, and transaction facilitation. Here is the comprehensive feature list:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { feature: 'Advanced Property Search', desc: 'Map-based browsing, filters (price, beds, baths, sqft, lot size, year built), polygon draw search, commute time filter' },
                      { feature: 'Property Detail Pages', desc: 'HD photos, floor plans, property history, tax records, HOA info, school ratings, walkability score, crime data' },
                      { feature: 'MLS Data Integration', desc: 'Real-time sync with multiple MLS boards. Listing status, price changes, days on market, comparable sales' },
                      { feature: 'AI Property Valuation', desc: 'Automated home value estimates using ML models trained on sales data, comparable properties, and market trends' },
                      { feature: 'Mortgage Calculator', desc: 'Interactive calculator with current rates, down payment scenarios, PMI estimation, tax and insurance inclusion' },
                      { feature: 'Virtual Tours & 3D Walkthroughs', desc: 'Matterport-style 3D tours, 360-degree photos, AR furniture staging, drone footage integration' },
                      { feature: 'Saved Searches & Alerts', desc: 'Custom search criteria with instant push notifications when matching properties hit the market' },
                      { feature: 'Agent Matching', desc: 'AI-powered agent recommendations based on specialization, area expertise, ratings, and transaction volume' },
                      { feature: 'Neighborhood Insights', desc: 'Demographics, school ratings, commute analysis, local amenities, noise levels, future development plans' },
                      { feature: 'Investment Analysis', desc: 'Cap rate calculator, rental yield estimation, appreciation forecasting, cash flow projections for investors' },
                      { feature: 'Favorites & Collections', desc: 'Save, organize, compare, and share properties with family or partners for collaborative decision-making' },
                      { feature: 'Scheduling & Tours', desc: 'Book in-person or virtual tours directly through the app with calendar integration for agents' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MLS Integration */}
                <div className="reveal" style={{ marginBottom: 56 }} id="mls-integration">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    MLS Integration: The Technical Deep Dive
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    MLS (Multiple Listing Service) integration is the backbone of any real estate app. There are over 580 MLS boards in the United States, each with its own data format, access rules, and licensing requirements. Getting this right is one of the biggest technical challenges in real estate app development.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Here is how MLS integration works in practice:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      { step: 'Data Access', desc: 'Apply for IDX (Internet Data Exchange) or VOW (Virtual Office Website) access through individual MLS boards. IDX allows displaying listings on your platform; VOW provides additional data for registered users. Approval takes 2-6 weeks per board.', detail: 'Alternatively, use aggregator services like Bridge Interactive, Spark API, or ListHub that provide access to multiple MLS boards through a single API. This is faster but more expensive ($500-$5,000/month).' },
                      { step: 'Data Normalization', desc: 'Each MLS uses different field names, data formats, and classification systems. A "single family home" might be coded as "SF", "SFR", "SINGLE_FAMILY", or "1" depending on the MLS. You need an ETL pipeline that normalizes this data into a consistent schema.', detail: 'The RESO (Real Estate Standards Organization) Data Dictionary has made this easier, but many smaller MLS boards still use legacy RETS feeds with non-standard field names.' },
                      { step: 'Real-Time Sync', desc: 'Listings change constantly: new listings, price reductions, status changes (pending, sold), and delistings. Your system needs to sync with MLS data feeds every 15-30 minutes to stay current. Stale data destroys user trust.', detail: 'Implement incremental updates (only sync changed records) rather than full data dumps to reduce bandwidth and processing time. Use timestamps and modification flags from the MLS feed.' },
                      { step: 'Photo Management', desc: 'A single listing can have 30-60 high-resolution photos. At scale, you are managing millions of images. Store photos in S3 with CloudFront CDN, generate multiple resolutions (thumbnail, medium, full), and implement lazy loading for performance.', detail: 'Total storage for a medium-sized MLS (50,000 active listings) can exceed 2TB of photos. Plan for $200-$500/month in storage and CDN costs.' },
                    ].map((item, i) => (
                      <div key={item.step} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>{i + 1}</div>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.step}</h3>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Virtual Tours */}
                <div className="reveal" style={{ marginBottom: 56 }} id="virtual-tours">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Virtual Tours, 3D Walkthroughs & AR
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    In 2026, virtual property tours are no longer a nice-to-have. They are expected. Over 70% of home buyers view virtual tours before scheduling an in-person visit. Properties with 3D tours receive 87% more views and sell 31% faster. Here are the technologies you can integrate:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { tech: 'Matterport Integration', desc: 'Industry-standard 3D home tours. Embed Matterport scans directly in your app via their SDK. Users can walk through properties in a dollhouse view or floor-by-floor navigation.', cost: '$2,000-$5,000 to integrate' },
                      { tech: '360-Degree Photo Tours', desc: 'More affordable than Matterport. Agents capture 360-degree photos with consumer cameras (Insta360, Ricoh Theta). Link them into a guided walkthrough experience.', cost: '$500-$1,500 to integrate' },
                      { tech: 'AR Furniture Staging', desc: 'Let buyers virtually stage empty rooms using AR. Place furniture, change wall colors, and visualize renovations. Uses ARKit (iOS) and ARCore (Android).', cost: '$15,000-$30,000 to build' },
                      { tech: 'Drone Footage & Aerial Views', desc: 'Integrate drone video for lot visualization, neighborhood context, and property boundary mapping. Particularly valuable for rural properties and large estates.', cost: '$1,000-$3,000 to integrate' },
                    ].map(item => (
                      <div key={item.tech} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.tech}</p>
                        <p style={{ fontSize: 12, fontWeight: 600, color: '#22c55e', margin: '0 0 10px' }}>{item.cost}</p>
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
                      { layer: 'Mobile Apps', tech: 'React Native or Flutter', why: 'Cross-platform for iOS and Android. React Native has excellent map libraries; Flutter offers smoother animations for 3D tour navigation.' },
                      { layer: 'Backend', tech: 'Node.js (NestJS) or Python (Django)', why: 'Handles MLS data processing, search indexing, and API serving. Python is preferred if you plan AI-powered valuations (NumPy, scikit-learn).' },
                      { layer: 'Search Engine', tech: 'Elasticsearch', why: 'Essential for fast, faceted property search. Handles geo-queries (search within polygon), filtering by dozens of attributes, and autocomplete.' },
                      { layer: 'Database', tech: 'PostgreSQL + PostGIS + Redis', why: 'PostgreSQL for listings and users. PostGIS for geospatial queries. Redis for caching search results and frequently accessed listings.' },
                      { layer: 'Maps', tech: 'Mapbox or Google Maps', why: 'Property markers, polygon drawing, heatmaps (price, school ratings), and neighborhood boundaries. Mapbox offers more customization; Google Maps has better data coverage.' },
                      { layer: 'Media & CDN', tech: 'AWS S3 + CloudFront', why: 'Store millions of property photos and virtual tour assets. CloudFront CDN ensures fast loading globally. Generate multiple image sizes for responsive display.' },
                      { layer: 'MLS Data Pipeline', tech: 'Apache Airflow or custom ETL', why: 'Scheduled MLS data ingestion, normalization, and indexing. Handles incremental updates every 15-30 minutes across multiple MLS boards.' },
                      { layer: 'AI/ML Engine', tech: 'Python (TensorFlow / XGBoost)', why: 'Property valuation models, price prediction, comparable property analysis, and investment return forecasting. Deployed as a microservice.' },
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
                    Cost Breakdown: How Much Does a Real Estate App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Real estate apps are among the more complex applications to build due to MLS data integration, map-heavy interfaces, and the need for accurate valuation tools. Here is the realistic cost breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP / Basic',
                        price: '$50,000 - $90,000',
                        timeline: '4-5 months',
                        color: '#22c55e',
                        features: ['Property search with map & filters', 'Single MLS integration', 'Property detail pages with photos', 'Basic mortgage calculator', 'Saved searches & favorites', 'Push notification alerts', 'Contact agent functionality'],
                      },
                      {
                        tier: 'Standard',
                        price: '$100,000 - $170,000',
                        timeline: '6-8 months',
                        color: '#3b82f6',
                        features: ['Everything in MVP', 'Multi-MLS integration', 'AI-powered property valuation', 'Virtual tour embedding (Matterport)', 'Neighborhood insights & analytics', 'Agent matching & profiles', 'Advanced mortgage tools', 'Comparable sales analysis', 'User accounts & dashboard'],
                      },
                      {
                        tier: 'Enterprise / Full Platform',
                        price: '$180,000 - $250,000+',
                        timeline: '9-12 months',
                        color: '#a855f7',
                        features: ['Everything in Standard', 'AR furniture staging', 'Investment analysis tools', 'Agent CRM & lead management', 'Automated market reports', 'Price prediction ML models', 'Multi-city & multi-country', 'API for third-party integrations', 'White-label for brokerages', 'Document signing integration'],
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
                      <strong style={{ color: '#34d399' }}>Ongoing costs:</strong> Real estate apps have significant ongoing expenses. MLS data fees ($200-$2,000/month per board), map API usage ($500-$3,000/month at scale), Elasticsearch hosting ($200-$800/month), photo storage ($200-$500/month), and server infrastructure ($500-$2,000/month). Budget $2,000-$8,000/month for operational costs.
                    </p>
                  </div>
                </div>

                {/* Monetization */}
                <div className="reveal" style={{ marginBottom: 56 }} id="monetization">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Monetization: How Real Estate Apps Make Money
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { model: 'Agent Advertising', revenue: '$5-$50 per lead', desc: 'The Zillow Premier Agent model. Agents pay for exclusive leads in specific zip codes. Higher-value markets command premium lead prices. This is the largest revenue driver for most real estate platforms.' },
                      { model: 'Agent Subscriptions', revenue: '$29-$299/month', desc: 'Recurring subscription for agents to list on the platform, access CRM tools, view market analytics, and receive prioritized lead routing.' },
                      { model: 'Mortgage Referrals', revenue: '$500-$2,000 per funded loan', desc: 'Refer buyers to mortgage lenders and earn a referral fee for each funded loan. With average home prices over $400K in the US, this is a high-value revenue stream.' },
                      { model: 'Premium Listings', revenue: '$50-$500 per listing', desc: 'Sellers or their agents pay for enhanced visibility: featured placement, highlighted borders, priority in search results, and social media promotion.' },
                      { model: 'Data & Analytics', revenue: '$99-$299/month', desc: 'Subscription-based access to market analytics, investment analysis tools, price trend data, and automated valuation reports for investors and analysts.' },
                      { model: 'Transaction Services', revenue: '0.5-1% of transaction', desc: 'Offer integrated services: title insurance, home inspection scheduling, moving services, home warranty. Earn referral fees or transaction percentages.' },
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
                    Why Build Your Real Estate App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Real estate apps are among the most data-intensive consumer applications we build. They require expertise in geospatial databases, MLS data pipelines, search engine architecture, map rendering optimization, and AI/ML for property valuations. Our team has built PropTech platforms that handle millions of listings across multiple MLS boards.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We understand the unique challenges: MLS licensing complexity, photo-heavy interfaces that need to load fast, valuation models that need to be accurate enough for users to trust, and search experiences that need to feel instant even when querying millions of records. We build real estate apps that agents and buyers actually want to use.
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
                  Ready to Build Your Real Estate Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your PropTech vision with our team. We will map out MLS integrations, design your search experience, and deliver a detailed fixed-price proposal within 48 hours.
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
