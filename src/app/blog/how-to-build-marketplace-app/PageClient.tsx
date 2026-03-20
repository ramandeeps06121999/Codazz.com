'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

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
  { id: 'marketplace-model', label: 'Marketplace Models', emoji: '🏪' },
  { id: 'types', label: 'Types of Marketplaces', emoji: '📱' },
  { id: 'step-by-step', label: 'Step-by-Step Guide', emoji: '🛠️' },
  { id: 'features', label: 'Must-Have Features', emoji: '✅' },
  { id: 'chicken-egg', label: 'Chicken & Egg Problem', emoji: '🥚' },
  { id: 'tech-stack', label: 'Technology Stack', emoji: '⚙️' },
  { id: 'costs', label: 'Costs & Timeline', emoji: '💰' },
  { id: 'mistakes', label: 'Common Mistakes', emoji: '⚠️' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'mvp-development-guide', title: 'The Complete MVP Development Guide', category: 'Business', readTime: '14 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
];

export default function HowToBuildMarketplaceAppClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=675&fit=crop"
              alt="Marketplace platform development and e-commerce"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 8, textAlign: 'center' }}>
              Photo by <a href="https://unsplash.com/@campaign_creators" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Campaign Creators</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
            </p>
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
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
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                16 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              How to Build a Marketplace App in 2026: Step-by-Step Guide
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              From solving the chicken-and-egg problem to building trust systems, the complete playbook for launching a successful two-sided marketplace.
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
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(180,253,131,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    Airbnb. Uber. Upwork. Etsy. The most valuable tech companies of the last decade are marketplaces.
                  </p>
                  <p>
                    Marketplace businesses are uniquely powerful because of network effects: every new seller attracts more buyers, and every new buyer attracts more sellers. Once you hit critical mass, your marketplace becomes nearly impossible to displace.
                  </p>
                  <p>
                    But marketplaces are also the hardest type of app to build. You need both supply AND demand from Day 1. You need trust systems, payment escrow, dispute resolution, and algorithms that match the right buyer with the right seller.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    This guide breaks down every step, from concept to scale, based on 30+ marketplace apps we&apos;ve built at Codazz.
                  </p>
                </div>

                {/* Marketplace Models */}
                <h2 id="marketplace-model" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Understanding Marketplace Models</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
                    alt="Business model and marketplace strategy planning"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@parabol" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Parabol</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Commission Model</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Take 5-30% of each transaction. Used by Airbnb (3%+14%), Uber (25%), Upwork (10-20%). Best for high-volume marketplaces.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Subscription Model</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Monthly/annual fees for sellers. Used by Shopify, LinkedIn Premium. More predictable revenue but harder to attract initial sellers.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Listing Fee Model</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Charge per listing. Used by Etsy ($0.20/listing), Craigslist (select categories). Good for high-volume, low-value transactions.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Freemium + Promoted</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Free basic listings, paid promotion. Used by Facebook Marketplace, Indeed. Low barrier to entry, monetize through visibility.</p>
                  </div>
                </div>

                {/* Types */}
                <h2 id="types" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Types of Marketplace Apps</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Type</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Examples</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Key Challenge</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Service</strong></td>
                        <td style={{ padding: '12px 8px' }}>Thumbtack, TaskRabbit</td>
                        <td style={{ padding: '12px 8px' }}>Quality control</td>
                        <td style={{ padding: '12px 8px' }}>$80K-200K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Product</strong></td>
                        <td style={{ padding: '12px 8px' }}>Etsy, Amazon</td>
                        <td style={{ padding: '12px 8px' }}>Logistics & shipping</td>
                        <td style={{ padding: '12px 8px' }}>$100K-300K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Rental</strong></td>
                        <td style={{ padding: '12px 8px' }}>Airbnb, Turo</td>
                        <td style={{ padding: '12px 8px' }}>Trust & insurance</td>
                        <td style={{ padding: '12px 8px' }}>$120K-350K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>B2B</strong></td>
                        <td style={{ padding: '12px 8px' }}>Alibaba, Faire</td>
                        <td style={{ padding: '12px 8px' }}>Large order complexity</td>
                        <td style={{ padding: '12px 8px' }}>$150K-400K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Freelance/P2P</strong></td>
                        <td style={{ padding: '12px 8px' }}>Upwork, Fiverr</td>
                        <td style={{ padding: '12px 8px' }}>Escrow & disputes</td>
                        <td style={{ padding: '12px 8px' }}>$90K-250K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>On-Demand</strong></td>
                        <td style={{ padding: '12px 8px' }}>Uber, DoorDash</td>
                        <td style={{ padding: '12px 8px' }}>Real-time matching</td>
                        <td style={{ padding: '12px 8px' }}>$150K-400K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Step-by-Step */}
                <h2 id="step-by-step" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step-by-Step: Building a Marketplace App</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop"
                    alt="Development roadmap and planning"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@martenbjork" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Marten Bjork</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                {[
                  { num: 1, title: 'Validate the Market Opportunity', desc: 'Before writing a line of code, prove that people want what you\'re building. The graveyard of failed marketplaces is full of "great ideas" nobody needed.', detail: 'Talk to 50+ potential users on both sides. Can you manually match 10 buyers with 10 sellers? If you can\'t do it by hand, an app won\'t help.' },
                  { num: 2, title: 'Define Your Niche (Go Narrow)', desc: 'Every successful marketplace started narrow. Airbnb: air mattresses for conference attendees. Uber: black cars in San Francisco. Amazon: books.', detail: 'Pick one vertical, one geography, one user segment. "A marketplace for everything" is a marketplace for nobody. Own a niche, then expand.' },
                  { num: 3, title: 'Design the Two-Sided Experience', desc: 'Your marketplace has two distinct user groups with different needs. Design separate flows for each, but ensure they converge seamlessly.', detail: 'Buyer flow: Search, filter, compare, book/purchase, pay, review. Seller flow: Onboard, list, manage availability, receive bookings, get paid, respond to reviews.' },
                  { num: 4, title: 'Build the Matching Algorithm', desc: 'The core of any marketplace is how well you connect supply with demand. This is your competitive moat.', detail: 'Start simple: keyword search + filters + location. Then layer in relevance scoring, personalized recommendations, and AI-powered matching. Track match quality with conversion rates.' },
                  { num: 5, title: 'Implement Payment Escrow', desc: 'Payments in marketplaces are complex. You\'re not just processing a payment—you\'re holding funds, taking a commission, and releasing money to sellers.', detail: 'Use Stripe Connect for payment splitting. Implement escrow: hold buyer payment until service is delivered or product shipped. Handle refunds, disputes, and chargebacks automatically.' },
                  { num: 6, title: 'Build Trust & Safety Systems', desc: 'Trust is everything in a marketplace. Users are transacting with strangers. Your platform must make that feel safe.', detail: 'Implement: identity verification, reviews & ratings (2-way), fraud detection, content moderation, dispute resolution workflow, insurance/guarantees, and reporting mechanisms.' },
                  { num: 7, title: 'Create Search & Discovery', desc: 'If buyers can\'t find what they want in 30 seconds, they leave. Search is the #1 feature that determines marketplace success.', detail: 'Build faceted search with auto-complete, smart filters, location-based results, saved searches, and category browsing. Use Elasticsearch or Algolia for fast, relevant results.' },
                  { num: 8, title: 'Build Messaging & Notifications', desc: 'Buyers and sellers need to communicate. But you also need to keep conversations on-platform to protect both parties and capture data.', detail: 'Build in-app messaging with read receipts, file sharing, and template responses. Add push notifications for new messages, booking updates, and price alerts.' },
                  { num: 9, title: 'Implement Analytics & Admin Dashboard', desc: 'You need to see everything happening in your marketplace. Build a comprehensive admin panel from Day 1.', detail: 'Track: GMV, take rate, liquidity (% of listings that convert), buyer/seller ratio, average transaction value, repeat purchase rate, and time-to-first-transaction.' },
                  { num: 10, title: 'Launch Supply Side First', desc: 'Always onboard supply before demand. Buyers who visit an empty marketplace never come back. Sellers can wait because the platform is free to list.', detail: 'Manually onboard 50-100 quality sellers. Help them create compelling profiles and listings. Offer free listings for the first 6 months. Then turn on demand.' },
                  { num: 11, title: 'Activate Demand Through Targeted Channels', desc: 'Don\'t blast generic ads. Target buyers in the exact niche your initial supply serves.', detail: 'Use SEO for long-tail searches (e.g., "hire freelance logo designer"), content marketing, and partnerships. Offer first-time buyer discounts to reduce friction.' },
                  { num: 12, title: 'Measure, Iterate, Expand', desc: 'Once you have product-market fit in your niche, it\'s time to expand. But data must drive every decision.', detail: 'Expand to adjacent categories, new geographies, or new user segments. Each expansion is like launching a new marketplace—apply the same niche-first strategy.' },
                ].map((step) => (
                  <div key={step.num} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{
                        minWidth: 40, height: 40, borderRadius: '50%',
                        background: 'rgba(180,253,131,0.15)', border: '1px solid rgba(180,253,131,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, fontWeight: 700, color: '#b4fd83',
                      }}>{step.num}</div>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{step.title}</h3>
                        <p style={{ fontSize: 15, marginBottom: 8 }}>{step.desc}</p>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{step.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Features */}
                <h2 id="features" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Must-Have Marketplace Features</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>For Buyers</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Advanced search & filters</li>
                      <li style={{ marginBottom: 6 }}>Seller profiles & verified reviews</li>
                      <li style={{ marginBottom: 6 }}>Secure payment processing</li>
                      <li style={{ marginBottom: 6 }}>Order tracking & notifications</li>
                      <li>Dispute resolution & buyer protection</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>For Sellers</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Easy listing creation & management</li>
                      <li style={{ marginBottom: 6 }}>Calendar & availability management</li>
                      <li style={{ marginBottom: 6 }}>Earnings dashboard & payouts</li>
                      <li style={{ marginBottom: 6 }}>Analytics & performance metrics</li>
                      <li>Promotional tools & featured listings</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Platform</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Admin dashboard & content moderation</li>
                      <li style={{ marginBottom: 6 }}>Automated commission & payouts</li>
                      <li style={{ marginBottom: 6 }}>Fraud detection & prevention</li>
                      <li style={{ marginBottom: 6 }}>Analytics: GMV, take rate, liquidity</li>
                      <li>In-app messaging & notifications</li>
                    </ul>
                  </div>
                </div>

                {/* Chicken & Egg */}
                <h2 id="chicken-egg" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Solving the Chicken-and-Egg Problem</h2>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <p style={{ fontSize: 16, fontStyle: 'italic', margin: '0 0 16px', color: '#ffffff' }}>
                    &ldquo;The biggest challenge in marketplace development isn&apos;t technology. It&apos;s getting both sides of the market to show up.&rdquo;
                  </p>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p style={{ marginBottom: 16 }}><strong style={{ color: '#ffffff' }}>Proven strategies to bootstrap your marketplace:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>Single-Player Mode:</strong> Make the platform useful for one side even without the other. OpenTable gave restaurants a reservation system before connecting diners.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>Fake It Strategy:</strong> Manually fulfill the supply side yourself. DoorDash founders delivered food themselves for the first year.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>Subsidize One Side:</strong> Offer free access to sellers (Etsy) or buyers (Uber credits). The side you subsidize depends on which is harder to acquire.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>Constrain the Market:</strong> Launch in one city, one category, one demographic. Density beats coverage.</li>
                    <li><strong style={{ color: '#b4fd83' }}>Piggyback on Existing Platforms:</strong> Scrape Craigslist listings (Airbnb), import from other platforms, or integrate with existing communities.</li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <h2 id="tech-stack" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Recommended Technology Stack</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Layer</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Technology</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Web Frontend</strong></td>
                        <td style={{ padding: '12px 8px' }}>Next.js / React</td>
                        <td style={{ padding: '12px 8px' }}>SEO-critical for discovery</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Mobile</strong></td>
                        <td style={{ padding: '12px 8px' }}>React Native or Flutter</td>
                        <td style={{ padding: '12px 8px' }}>Cross-platform, fast iteration</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Backend</strong></td>
                        <td style={{ padding: '12px 8px' }}>Node.js / Python</td>
                        <td style={{ padding: '12px 8px' }}>Real-time, async operations</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Database</strong></td>
                        <td style={{ padding: '12px 8px' }}>PostgreSQL + Elasticsearch</td>
                        <td style={{ padding: '12px 8px' }}>Relational data + fast search</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Payments</strong></td>
                        <td style={{ padding: '12px 8px' }}>Stripe Connect</td>
                        <td style={{ padding: '12px 8px' }}>Split payments, escrow, payouts</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Real-Time</strong></td>
                        <td style={{ padding: '12px 8px' }}>Socket.io / Pusher</td>
                        <td style={{ padding: '12px 8px' }}>Chat, live updates, notifications</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Maps</strong></td>
                        <td style={{ padding: '12px 8px' }}>Google Maps / Mapbox</td>
                        <td style={{ padding: '12px 8px' }}>Location-based features</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Cloud</strong></td>
                        <td style={{ padding: '12px 8px' }}>AWS / GCP</td>
                        <td style={{ padding: '12px 8px' }}>Scalable, cost-effective</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Costs */}
                <h2 id="costs" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Costs & Timeline</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Phase</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Duration</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Market Research & Validation</strong></td>
                        <td style={{ padding: '12px 8px' }}>2-4 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$5K-15K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>UI/UX Design (Both Sides)</strong></td>
                        <td style={{ padding: '12px 8px' }}>4-6 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$15K-35K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Core Development</strong></td>
                        <td style={{ padding: '12px 8px' }}>10-16 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$50K-150K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Payment Integration & Testing</strong></td>
                        <td style={{ padding: '12px 8px' }}>2-4 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$10K-25K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>QA & Beta Testing</strong></td>
                        <td style={{ padding: '12px 8px' }}>3-4 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$8K-20K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 600 }}>
                        <td style={{ padding: '12px 8px', color: '#ffffff' }}>Total (MVP)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>4-7 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$60K-180K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px', color: '#ffffff' }}>Total (Full Product)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>8-14 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$150K-350K+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mistakes */}
                <h2 id="mistakes" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Common Marketplace Mistakes to Avoid</h2>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Going Too Broad:</strong> &ldquo;A marketplace for everything&rdquo; fails because you can&apos;t build critical mass in any category. Start with one niche, dominate it, then expand.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Ignoring Supply Quality:</strong> 100 bad listings are worse than 10 great ones. Curate aggressively in the early days. Remove low-quality providers quickly.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>No Escrow/Payment Protection:</strong> Letting users transact off-platform means you lose revenue and can&apos;t protect either party. Make on-platform payment mandatory.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Building Mobile-First:</strong> Most marketplaces should launch web-first. SEO drives organic discovery, and web has lower development costs. Add mobile after product-market fit.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Neglecting Trust Systems:</strong> Without reviews, verification, and dispute resolution, users won&apos;t transact with strangers. Build trust features from Day 1.</li>
                    <li><strong style={{ color: '#ff6b6b' }}>Wrong Pricing Model:</strong> Charging sellers too much too early kills supply growth. Start free, prove value, then introduce fees gradually.</li>
                  </ul>
                </div>

                {/* Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Choose Codazz for Marketplace Development</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>30+ Marketplaces Built</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Service, product, rental, B2B, and P2P. We understand the unique challenges of every marketplace model.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Stripe Connect Experts</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Deep expertise in payment splitting, escrow, multi-currency support, and complex payout schedules.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Go-to-Market Strategy</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We don&apos;t just build the tech. We help you solve the chicken-and-egg problem with proven launch strategies.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Scale-Ready Architecture</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Our marketplace architecture handles 100 users to 100K users without rewrites. Built for growth from Day 1.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'Should I build web or mobile first for my marketplace?', a: 'Web first in almost every case. Marketplace discovery is heavily driven by SEO (people searching "hire a plumber near me"). A web app also has lower development costs and faster iteration cycles. Add mobile apps after you\'ve found product-market fit.' },
                  { q: 'How do I handle payments between buyers and sellers?', a: 'Use Stripe Connect. It handles payment splitting (your commission vs. seller payout), escrow, chargebacks, and 1099 tax reporting for sellers. Alternative: PayPal for Marketplaces. Avoid building custom payment splitting—it\'s a compliance nightmare.' },
                  { q: 'What take rate (commission) should I charge?', a: 'Industry averages: Service marketplaces 15-25%, product marketplaces 10-20%, rental marketplaces 10-15%. Start lower to attract supply, increase as your marketplace becomes more valuable. Always charge the side with more to gain.' },
                  { q: 'How do I prevent buyers and sellers from going off-platform?', a: 'Make on-platform transactions more valuable than off-platform: offer payment protection, dispute resolution, insurance, and reviews. Some marketplaces also delay sharing contact info until payment is confirmed.' },
                  { q: 'How many sellers do I need before launching to buyers?', a: 'Aim for 50-100 quality listings in your launch geography/category. Buyers need to feel like there\'s enough choice. But 100 great listings beats 1,000 mediocre ones. Quality over quantity always.' },
                  { q: 'Can I use a no-code platform to build my marketplace?', a: 'For validation, yes. Tools like Sharetribe, Arcadier, or Bubble can launch a basic marketplace in weeks. But for scale, custom development is essential. No-code marketplaces break at 5,000-10,000 users due to performance and customization limits.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)' }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Build Your Marketplace?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free consultation. We&apos;ll help you define your marketplace model, validate your niche, and create a development roadmap.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Get Your Free Marketplace Consultation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 0', fontSize: 14,
                            color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 16,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#b4fd83', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
