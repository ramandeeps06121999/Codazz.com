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
  { id: 'app-categories', label: 'App Categories', emoji: '✈️' },
  { id: 'gds-apis', label: 'GDS & Flight APIs', emoji: '🔌' },
  { id: 'hotel-maps', label: 'Hotel & Maps APIs', emoji: '🗺️' },
  { id: 'ai-features', label: 'AI Travel Assistants', emoji: '🤖' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'cost-breakdown', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '10 min' },
  { slug: 'uber-like-app-development-guide', title: 'How to Build an Uber-Like App in 2026', category: 'Mobile', readTime: '14 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
];

const faqs = [
  {
    q: 'How much does it cost to build a travel app in 2026?',
    a: 'Travel app development costs range from $80,000 to $600,000+ depending on scope. A basic travel companion or itinerary app starts around $80K-$120K. A full booking platform with GDS integration, hotel APIs, payment processing, and AI recommendations costs $250K-$600K+. The biggest cost drivers are GDS API integration complexity, real-time inventory management, and multi-currency payment handling across markets.',
  },
  {
    q: 'Do I need to integrate with a GDS (Amadeus, Sabre, Travelport) to build a travel app?',
    a: 'It depends on your business model. If you want access to live global flight inventory and fares, GDS integration is essential. Amadeus and Sabre provide access to 95%+ of global airline seats. However, GDS integration is expensive (setup costs $50K-$150K) and involves complex certification processes. Alternatives include using aggregator APIs like Duffel or Kiwi.com, which provide simpler access to flight content at lower cost with less regulatory overhead.',
  },
  {
    q: 'What is the best approach for offline functionality in a travel app?',
    a: 'Offline functionality is critical for travel apps since users frequently lack data connectivity at airports, on planes, and abroad. The recommended approach is: cache itineraries, booking confirmations, and maps to local device storage using SQLite or WatermelonDB. Use service workers for web apps. Sync changes when connectivity returns. Key data to cache offline: flight details, hotel addresses, local maps tiles, emergency contacts, and currency conversion rates. Apps with robust offline support see 40% higher user retention.',
  },
  {
    q: 'How do AI travel assistants work, and should I build one?',
    a: 'AI travel assistants use large language models (GPT-4, Claude) combined with real-time travel data APIs to provide personalized recommendations, answer travel questions, and proactively surface relevant information (visa requirements, weather, local events). Building a basic AI chatbot using OpenAI APIs costs $20K-$50K. A sophisticated assistant that integrates booking data, learns user preferences, and provides proactive alerts costs $80K-$150K. ROI is strong: apps with AI assistants see 35% higher booking conversion and 50% lower support costs.',
  },
  {
    q: 'How long does it take to build a travel booking app?',
    a: 'A travel app MVP with itinerary planning, basic hotel search, and offline support takes 5-7 months. A full booking platform with GDS integration, hotel APIs, payments, AI recommendations, and admin dashboard takes 12-18 months. GDS certification alone can add 2-4 months. Budget extra time for payment gateway compliance (PCI DSS), data privacy compliance (GDPR for European users), and App Store review processes.',
  },
];

export default function TravelAppDevelopmentGuideClient() {
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
              src="/blog_images/travel-app-development-guide.jpg"
              alt="travel app development guide 2026"
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
              <span className="reveal reveal-d1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', color: '#34d399', padding: '5px 14px', borderRadius: 100 }}>Travel</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                19 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840 }}>
              Travel App Development Guide 2026: Build Booking &amp; Itinerary Apps
            </h1>

            <p className="reveal reveal-d3" style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 720, marginBottom: 48, fontWeight: 400 }}>
              From GDS API integration and hotel inventory to AI travel assistants and offline functionality. The complete guide to building travel apps that convert browsers into bookers.
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
                    The Travel Tech Market in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The global travel technology market reached $12.5 billion in 2025 and is forecast to hit $19.8 billion by 2029, growing at 12.3% annually. Online travel bookings account for 63% of all travel transactions globally, up from 49% in 2020. Mobile has overtaken desktop for travel searches, with 58% of all travel bookings now made via smartphone. This shift is creating enormous demand for high-quality travel apps that deliver seamless booking experiences.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The post-pandemic travel boom combined with AI-driven personalization is reshaping the industry. Travelers expect apps to remember their preferences, proactively surface deals, manage disruptions automatically, and provide AI-assisted planning. Legacy OTAs (Online Travel Agencies) like Expedia and Booking.com are losing ground to specialized vertical apps that serve niche traveler segments with superior UX and smarter recommendations.
                  </p>
                  <div style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Market Opportunity:</strong> 72% of travelers say they would switch to an app that offers better AI personalization. The average traveler uses 7 different apps during trip planning. Vertical travel apps (business travel, luxury, backpacker, family) that solve a specific pain point are growing 3x faster than general OTA apps. There is significant white space for well-executed niche travel applications.
                    </p>
                  </div>
                </div>

                {/* App Categories */}
                <div className="reveal" style={{ marginBottom: 56 }} id="app-categories">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Travel App Categories: Which Type Should You Build?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Travel apps span a wide spectrum from simple trip organizers to complex booking platforms. Understanding which category fits your business model determines your technology requirements, regulatory obligations, and development costs.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        category: 'Flight & Hotel Booking',
                        examples: 'OTA, direct booking engine',
                        desc: 'Full booking platform with real-time inventory from airlines and hotels. Requires GDS integration or direct supplier APIs, payment processing, PCI DSS compliance, and booking management systems. Highest complexity and cost.',
                        complexity: 'Very High',
                        cost: '$250K-$600K+',
                      },
                      {
                        category: 'Itinerary Planner',
                        examples: 'TripIt, Wanderlog',
                        desc: 'Organizes travel plans, imports booking confirmations, suggests activities, and creates day-by-day itineraries. Integrates with email parsing, calendar APIs, Google Places, and activity booking APIs. No transactional complexity.',
                        complexity: 'Medium',
                        cost: '$80K-$180K',
                      },
                      {
                        category: 'Local Experience Guide',
                        examples: 'Airbnb Experiences, Viator',
                        desc: 'Marketplace for local tours, activities, and experiences. Connects travelers with experience providers. Requires two-sided marketplace infrastructure, booking engine, review system, and provider payout management.',
                        complexity: 'High',
                        cost: '$150K-$350K',
                      },
                      {
                        category: 'Travel Expense Tracker',
                        examples: 'TravelBank, Expensify Travel',
                        desc: 'Tracks travel spending, manages receipts, enforces travel policies, and integrates with corporate expense systems. Strong B2B market — companies spend $1.3 trillion annually on business travel.',
                        complexity: 'Medium-High',
                        cost: '$100K-$250K',
                      },
                      {
                        category: 'Destination Guide',
                        examples: 'Lonely Planet, Culture Trip',
                        desc: 'Content-rich app with destination information, curated recommendations, maps, and offline content. Monetizes via affiliate bookings, premium content subscriptions, and sponsored listings.',
                        complexity: 'Medium',
                        cost: '$60K-$150K',
                      },
                      {
                        category: 'Business Travel Management',
                        examples: 'TripActions, Navan',
                        desc: 'Enterprise platform for corporate travel booking, policy enforcement, approval workflows, duty of care, and spend analytics. B2B SaaS model with high contract values ($50K-$500K+ annually per enterprise).',
                        complexity: 'Very High',
                        cost: '$300K-$700K+',
                      },
                    ].map(item => (
                      <div key={item.category} style={{ padding: '20px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.category}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: '0 0 10px', fontStyle: 'italic' }}>{item.examples}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: '0 0 12px', lineHeight: 1.6 }}>{item.desc}</p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#f59e0b', background: 'rgba(245,158,11,0.1)', padding: '3px 10px', borderRadius: 100 }}>{item.complexity}</span>
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100 }}>{item.cost}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GDS APIs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="gds-apis">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    GDS & Flight Search API Integration
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    A Global Distribution System (GDS) is the backbone of flight booking. GDS networks aggregate real-time seat inventory, fares, and availability from virtually every commercial airline in the world. Choosing the right flight data source determines your coverage, costs, and booking capabilities.
                  </p>

                  {/* Architecture diagram */}
                  <div style={{ padding: '28px', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Flight Data Architecture</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                      {['Your App', '→', 'Flight Search API', '→', 'GDS / Aggregator', '→', 'Airline Inventory'].map((node, i) => (
                        node === '→'
                          ? <span key={i} style={{ color: 'rgba(255,255,255,0.2)', fontSize: 20 }}>→</span>
                          : <div key={i} style={{ padding: '10px 18px', borderRadius: 10, background: i === 0 ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.08)'}`, fontSize: 13, fontWeight: 600, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.7)' }}>{node}</div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
                    {[
                      {
                        name: 'Amadeus for Developers',
                        type: 'GDS / NDC',
                        coverage: '400+ airlines, 2M+ hotels',
                        desc: 'The most developer-friendly GDS with a modern REST API. Offers both test and production environments. Flight Offers Search, Flight Inspiration, and Trip Purpose Prediction APIs are standouts. Amadeus processes 1 billion travel transactions annually. Ideal for startups due to free sandbox access and well-documented APIs.',
                        bestFor: 'Startups, booking platforms, OTAs',
                        pricing: 'Per-booking fee + monthly access',
                      },
                      {
                        name: 'Sabre Developer Studio',
                        type: 'GDS',
                        coverage: '400+ airlines, full global network',
                        desc: 'One of the three major GDS networks. Strong North American airline content. Offers REST and SOAP APIs. Sabre Red API provides comprehensive shopping, booking, and ticketing capabilities. Better for enterprise-grade platforms that need deep airline PNR (Passenger Name Record) management.',
                        bestFor: 'Enterprise booking platforms, TMCs',
                        pricing: 'Negotiated enterprise contracts',
                      },
                      {
                        name: 'Travelport Universal API',
                        type: 'GDS',
                        coverage: '400+ airlines, strong European content',
                        desc: 'Travelport (formerly Galileo + Worldspan) has excellent European airline coverage. Universal API provides access to flights, hotels, and car rentals. Particularly strong for corporate travel management platforms targeting European markets.',
                        bestFor: 'European focus, corporate travel',
                        pricing: 'Per-segment booking fees',
                      },
                      {
                        name: 'Duffel API',
                        type: 'NDC Aggregator',
                        coverage: '300+ airlines via NDC',
                        desc: 'Modern REST API that aggregates NDC (New Distribution Capability) content directly from airlines, bypassing traditional GDS. Faster access to rich content, ancillaries, and better pricing. Significantly simpler integration than traditional GDS — ideal for startups that want direct airline relationships without full GDS complexity.',
                        bestFor: 'Modern startups, NDC-first platforms',
                        pricing: 'Per-booking flat fee',
                      },
                      {
                        name: 'Skyscanner API / Google Flights API',
                        type: 'Metasearch',
                        coverage: 'Global aggregated fares',
                        desc: 'Metasearch APIs surface the best available fares from hundreds of sources without enabling direct booking. Users click through to airlines or OTAs to complete purchase. Best for inspiration and fare comparison features. Skyscanner API is invite-only for high-volume partners. Google Flights data is accessible via Travel Feeds.',
                        bestFor: 'Fare comparison, travel inspiration',
                        pricing: 'CPA (cost per acquisition) model',
                      },
                    ].map(api => (
                      <div key={api.name} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                          <div>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{api.name}</h3>
                            <div style={{ display: 'flex', gap: 8 }}>
                              <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '2px 10px', borderRadius: 100 }}>{api.type}</span>
                              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', padding: '2px 10px', borderRadius: 100, background: 'rgba(255,255,255,0.04)' }}>{api.coverage}</span>
                            </div>
                          </div>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.04)', padding: '4px 12px', borderRadius: 100 }}>{api.pricing}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 10 }}>{api.desc}</p>
                        <p style={{ fontSize: 12, color: '#22c55e', margin: 0 }}>Best for: {api.bestFor}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hotel & Maps APIs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hotel-maps">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Hotel APIs, Maps Integration & Offline Functionality
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Hotel and accommodation inventory is the other half of a complete travel booking platform. Maps and offline functionality are the features that travelers value most once they are at the destination.
                  </p>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Hotel Inventory APIs</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 32 }}>
                    {[
                      { api: 'Expedia Rapid API', inventory: '3M+ properties', desc: 'Access to the full Expedia Group portfolio including Expedia, Hotels.com, and Vrbo. Strong North American and European inventory. Commission-based revenue sharing. Fastest to get started among major hotel APIs.' },
                      { api: 'Booking.com Affiliate API', inventory: '2.9M+ properties', desc: 'Excellent global coverage especially in Europe and Asia. Real-time availability and pricing. Competitive commission rates (15-25%). Best for apps targeting European and Asian travelers.' },
                      { api: 'Amadeus Hotel Search API', inventory: '150K+ hotels', desc: 'Part of the Amadeus ecosystem. Ideal if you are already integrating Amadeus for flights — single API relationship. Coverage is narrower than Expedia/Booking.com but deeply integrated with GDS booking flows.' },
                      { api: 'Airbnb API (Partners)', inventory: '7M+ listings', desc: 'Invite-only for approved software partners. Access to the full Airbnb inventory including unique stays, experiences, and long-term rentals. High conversion rates due to brand trust. Apply via Airbnb Partner Program.' },
                      { api: 'Hotelbeds / Bedsonline', inventory: '180K+ hotels (B2B)', desc: 'Wholesale B2B hotel rates not publicly available. Significantly cheaper inventory than consumer-facing OTAs. Ideal for corporate travel platforms, tour operators, and business travel apps.' },
                      { api: 'Google Hotel API', inventory: 'Universal feed', desc: 'List hotel rates on Google Search, Google Maps, and Google Travel via Hotel Ads. Not a booking API but a distribution channel. Essential for OTAs wanting visibility in Google Travel.' },
                    ].map(item => (
                      <div key={item.api} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>{item.api}</p>
                        <p style={{ fontSize: 12, fontWeight: 600, color: '#22c55e', margin: '0 0 8px' }}>{item.inventory}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Maps & Offline Functionality</h3>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {[
                      { feature: 'Google Maps Platform', desc: 'Industry-standard for places search, directions, street view, and geocoding. Places API surfaces 200M+ locations globally. Route planning for airport transfers and local navigation. Pricing: $7 per 1,000 map loads — budget carefully at scale.' },
                      { feature: 'Mapbox', desc: 'Better pricing at scale compared to Google Maps. Excellent custom map styling. Offline map tile downloads via Mapbox Maps SDK for mobile — users can cache destination maps before departure. Strong 3D terrain visualization for adventure travel apps.' },
                      { feature: 'HERE Maps API', desc: 'Strong alternative with excellent offline maps and routing. Used by BMW, Audi, and major automotive brands. Best offline navigation performance. Good pricing for high-volume use cases. Particularly strong in Europe and Middle East.' },
                      { feature: 'OpenStreetMap + MapLibre', desc: 'Open-source maps with no per-call pricing. Ideal for startups concerned about Google Maps scaling costs. Requires self-hosting tile servers or using providers like Maptiler. Great for custom map features and offline-first apps.' },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 6px' }}>{item.feature}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 24, padding: '20px 24px', borderRadius: 16, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)' }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Offline Strategy:</strong> Download and cache itinerary data, booking PDFs, offline maps for the destination city, essential phrases (if language app), currency rates, and emergency contact numbers. Use SQLite or WatermelonDB for local storage. Service workers handle offline web app caching. Users who can access their travel app offline show 40% higher satisfaction scores and 25% lower support ticket volume.
                    </p>
                  </div>
                </div>

                {/* AI Features */}
                <div className="reveal" style={{ marginBottom: 56 }} id="ai-features">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    AI Travel Assistants: The 2026 Differentiator
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    AI is transforming travel apps from passive booking tools into intelligent travel companions. Apps with AI features see dramatically higher engagement, booking conversion, and user retention. Here are the AI capabilities that matter most in 2026:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
                    {[
                      {
                        feature: 'AI Trip Planner',
                        impact: '+35% booking conversion',
                        desc: 'Conversational trip planning powered by LLMs. Users describe their ideal trip ("beach vacation under $3,000 for a family of 4 in July") and the AI generates complete itineraries with flights, hotels, and activities. Integrates real-time pricing from booking APIs to ensure recommendations are bookable.',
                        tech: 'GPT-4 / Claude + RAG pipeline + booking APIs',
                      },
                      {
                        feature: 'Personalized Recommendations',
                        impact: '+28% click-through rate',
                        desc: 'Machine learning models that learn traveler preferences from booking history, browsing behavior, and explicit feedback. Surfaces personalized hotel recommendations, flight upgrades, and destination suggestions. Cold-start problem solved by combining demographic signals with collaborative filtering.',
                        tech: 'Collaborative filtering + content-based ML + embedding models',
                      },
                      {
                        feature: 'Price Prediction & Alerts',
                        impact: '+45% return visits',
                        desc: 'Predict flight and hotel price trends using time-series ML models trained on historical fare data. Alert users when prices drop, when to book now vs wait, and optimal booking windows for their specific routes. Google Flights does this well — replicating it for niche markets is a competitive opportunity.',
                        tech: 'Time-series forecasting (Prophet, LSTM) + push notifications',
                      },
                      {
                        feature: 'AI Customer Support',
                        impact: '-50% support costs',
                        desc: 'LLM-powered chatbot handles booking changes, refund requests, visa questions, travel advisories, and general travel assistance 24/7. Escalates to human agents for complex disputes. Reduces support team cost by 50% while handling 80% of queries without human intervention.',
                        tech: 'Fine-tuned LLM + RAG + ticketing system integration',
                      },
                      {
                        feature: 'Disruption Management',
                        impact: '+60% traveler satisfaction',
                        desc: 'Automatically detects flight delays, cancellations, and schedule changes via airline APIs. Proactively offers rebooking options, hotel extensions, or ground transportation alternatives. Handles the most painful travel experiences automatically, turning disruptions into loyalty-building moments.',
                        tech: 'Real-time airline APIs + GPT-4 + notification system',
                      },
                      {
                        feature: 'Visual Search & Inspiration',
                        impact: '+22% top-of-funnel engagement',
                        desc: 'Computer vision allows users to find destinations by uploading photos. "Find me places that look like this" search powered by image embeddings and destination photo databases. Pinterest-style discovery for travelers who know the vibe they want but not the destination.',
                        tech: 'CLIP embeddings + vector database + destination photos',
                      },
                    ].map(item => (
                      <div key={item.feature} style={{ padding: '24px 28px', borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.feature}</h3>
                          <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '4px 12px', borderRadius: 100 }}>{item.impact}</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>Tech: {item.tech}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Recommended Tech Stack for Travel Apps
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {[
                      { layer: 'Mobile App', tech: 'React Native or Flutter', why: 'Cross-platform for iOS and Android. React Native excels at offline-first with WatermelonDB. Flutter delivers smooth map animations and complex UI. Both support background sync for itinerary updates.' },
                      { layer: 'Web Frontend', tech: 'Next.js 14 (App Router)', why: 'Server-side rendering for SEO-critical destination and flight search pages. Streaming for fast initial paint. ISR (Incremental Static Regeneration) for destination guides that update daily.' },
                      { layer: 'Backend API', tech: 'Node.js (NestJS) + Python', why: 'NestJS for main booking and user management APIs. Python microservices for AI/ML features: price prediction, recommendation engine, and LLM orchestration with LangChain.' },
                      { layer: 'Search & Availability', tech: 'Elasticsearch + Redis', why: 'Elasticsearch for fast destination, hotel, and activity search with fuzzy matching and faceting. Redis for caching real-time flight and hotel availability — reduces API call costs by 70%.' },
                      { layer: 'Database', tech: 'PostgreSQL + MongoDB', why: 'PostgreSQL for structured booking data, user accounts, and financial records. MongoDB for flexible itinerary documents, destination content, and user preference profiles.' },
                      { layer: 'Payments', tech: 'Stripe + PayPal + Braintree', why: 'Stripe for cards and digital wallets. PayPal for users without cards. Braintree for multi-currency processing. All three required for global travel apps. PCI DSS Level 1 compliance mandatory.' },
                      { layer: 'AI / LLM Layer', tech: 'OpenAI API + LangChain + Pinecone', why: 'OpenAI GPT-4 for travel planning and support chat. LangChain for RAG pipeline orchestration. Pinecone vector database for semantic destination search and personalization embeddings.' },
                      { layer: 'Infrastructure', tech: 'AWS (ECS + RDS + CloudFront)', why: 'ECS Fargate for containerized microservices without EC2 management. RDS Aurora for managed PostgreSQL. CloudFront CDN for global destination content and image delivery. Route 53 for geo-routing.' },
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
                    Cost Breakdown: How Much Does a Travel App Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Travel app development costs vary enormously based on the type of app and integration requirements. A destination guide or itinerary planner can launch for $80K-$120K. A full OTA with GDS integration and AI features can cost $400K-$600K+. Here is the breakdown:
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        tier: 'MVP / Companion App',
                        price: '$80,000 - $150,000',
                        timeline: '5-7 months',
                        color: '#22c55e',
                        features: [
                          'Itinerary planning and management',
                          'Booking import (email parsing)',
                          'Offline maps and content caching',
                          'Google Places integration',
                          'Push notifications for trip reminders',
                          'Basic AI chatbot (FAQ handling)',
                          'User accounts and profiles',
                          'iOS and Android apps',
                        ],
                      },
                      {
                        tier: 'Booking Platform',
                        price: '$200,000 - $350,000',
                        timeline: '9-14 months',
                        color: '#3b82f6',
                        features: [
                          'Everything in MVP',
                          'Flight search via Duffel or Amadeus API',
                          'Hotel search via Expedia Rapid API',
                          'Payment processing (Stripe, multi-currency)',
                          'PCI DSS compliance setup',
                          'Booking management and cancellations',
                          'Price alerts and fare tracking',
                          'AI trip planning assistant',
                          'Admin portal and analytics',
                        ],
                      },
                      {
                        tier: 'Full OTA / Enterprise',
                        price: '$400,000 - $600,000+',
                        timeline: '14-20 months',
                        color: '#a855f7',
                        features: [
                          'Everything in Booking Platform',
                          'Full GDS integration (Amadeus/Sabre/Travelport)',
                          'NDC content direct from airlines',
                          'Multi-hotel inventory (Expedia + Booking.com)',
                          'Ancillary upselling (seats, bags, insurance)',
                          'Advanced AI personalization engine',
                          'Disruption management automation',
                          'Corporate travel policy enforcement',
                          'Multi-language and multi-currency',
                          'Loyalty program integration',
                          'GDPR and CCPA compliance',
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
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
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
                      <strong style={{ color: '#34d399' }}>Hidden Costs to Budget For:</strong> GDS certification ($10K-$30K setup), PCI DSS compliance audit ($15K-$50K for Level 1), IATA accreditation if issuing tickets ($5K-$20K), legal review of supplier agreements, and ongoing GDS/API subscription costs ($2K-$15K/month at scale).
                    </p>
                  </div>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 20 }}>
                    Why Build Your Travel App with Codazz
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Travel apps sit at the intersection of real-time data, complex supplier integrations, AI personalization, and strict compliance requirements. Our team at Codazz has navigated GDS certifications, hotel API partnerships, PCI DSS compliance, and AI travel assistant development for clients ranging from travel startups to enterprise corporate travel platforms.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    We know which APIs to use for your specific market, how to architect caching layers that slash API costs, and how to build AI features that actually drive booking conversion rather than just adding demo value. We deliver travel apps that are fast, reliable, and profitable.
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
                  Ready to Build Your Travel App?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your travel app vision with our team. We will map the right API integrations, architecture, and AI features for your market — and deliver a detailed fixed-price proposal within 48 hours.
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
