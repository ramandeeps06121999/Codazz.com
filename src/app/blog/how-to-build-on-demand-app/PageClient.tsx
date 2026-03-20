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
  { id: 'on-demand-economy', label: 'On-Demand Economy', emoji: '📦' },
  { id: 'types', label: 'Types of On-Demand Apps', emoji: '📱' },
  { id: 'step-by-step', label: 'Step-by-Step Guide', emoji: '🛠️' },
  { id: 'features', label: 'Must-Have Features', emoji: '✅' },
  { id: 'real-time', label: 'Real-Time Architecture', emoji: '⚡' },
  { id: 'tech-stack', label: 'Technology Stack', emoji: '⚙️' },
  { id: 'costs', label: 'Costs & Timeline', emoji: '💰' },
  { id: 'mistakes', label: 'Common Mistakes', emoji: '⚠️' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-to-build-marketplace-app', title: 'How to Build a Marketplace App in 2026', category: 'Business', readTime: '16 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
];

export default function HowToBuildOnDemandAppClient() {
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
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&h=675&fit=crop"
              alt="On-demand service app and real-time technology"
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
              Photo by <a href="https://unsplash.com/@markusspiske" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Markus Spiske</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
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
              }}>Engineering</span>
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
              How to Build an On-Demand Service App in 2026
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Real-time matching, GPS tracking, surge pricing, and rating systems. The complete technical playbook for building the next Uber, DoorDash, or TaskRabbit.
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
                    The on-demand economy is worth $335 billion and growing at 20% annually. Consumers now expect everything—from rides to groceries to home repairs—at the tap of a button.
                  </p>
                  <p>
                    Uber proved the model. DoorDash scaled it. Now every service industry is being &ldquo;Uberized.&rdquo; Plumbing, dog walking, tutoring, car washing, laundry, healthcare—if there&apos;s a service, someone is building an on-demand app for it.
                  </p>
                  <p>
                    But on-demand apps are technically the most complex type of mobile application. Real-time GPS tracking, instant matching algorithms, dynamic pricing, and handling thousands of concurrent requests requires architecture that most development teams get wrong the first time.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    This guide covers the exact architecture, features, and strategies from 25+ on-demand apps we&apos;ve built at Codazz.
                  </p>
                </div>

                {/* On-Demand Economy */}
                <h2 id="on-demand-economy" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The On-Demand Economy in 2026</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop"
                    alt="On-demand delivery and service economy"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@blakewisz" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Blake Wisz</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>$335B</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>On-Demand Market Size</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>22.4M</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Gig Workers in the US</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>86%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Users Prefer On-Demand</p>
                  </div>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p><strong style={{ color: '#ffffff' }}>What makes on-demand apps unique:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Real-Time Everything:</strong> Location tracking, instant matching, live ETAs, and status updates every few seconds</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Three-Sided Platform:</strong> Customer app + Provider app + Admin dashboard, all synchronized in real time</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Location-Centric:</strong> GPS is the backbone. Every feature depends on accurate, real-time location data</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Dynamic Pricing:</strong> Surge pricing during high demand, discounts during low demand, zone-based pricing</li>
                    <li><strong style={{ color: '#ffffff' }}>High Concurrency:</strong> Thousands of providers and customers interacting simultaneously</li>
                  </ul>
                </div>

                {/* Types */}
                <h2 id="types" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Types of On-Demand Apps</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Type</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Examples</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Key Feature</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Ride-Hailing</strong></td>
                        <td style={{ padding: '12px 8px' }}>Uber, Lyft, Bolt</td>
                        <td style={{ padding: '12px 8px' }}>Real-time matching + GPS</td>
                        <td style={{ padding: '12px 8px' }}>$150K-350K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Food Delivery</strong></td>
                        <td style={{ padding: '12px 8px' }}>DoorDash, Uber Eats</td>
                        <td style={{ padding: '12px 8px' }}>Restaurant + driver matching</td>
                        <td style={{ padding: '12px 8px' }}>$120K-300K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Home Services</strong></td>
                        <td style={{ padding: '12px 8px' }}>Handy, Thumbtack</td>
                        <td style={{ padding: '12px 8px' }}>Scheduling + skill matching</td>
                        <td style={{ padding: '12px 8px' }}>$80K-200K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Grocery/Retail</strong></td>
                        <td style={{ padding: '12px 8px' }}>Instacart, Gopuff</td>
                        <td style={{ padding: '12px 8px' }}>Inventory + delivery routing</td>
                        <td style={{ padding: '12px 8px' }}>$100K-250K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Freelance/Gig</strong></td>
                        <td style={{ padding: '12px 8px' }}>TaskRabbit, Wonolo</td>
                        <td style={{ padding: '12px 8px' }}>Skill matching + scheduling</td>
                        <td style={{ padding: '12px 8px' }}>$90K-220K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Healthcare</strong></td>
                        <td style={{ padding: '12px 8px' }}>DispatchHealth, Heal</td>
                        <td style={{ padding: '12px 8px' }}>Provider matching + compliance</td>
                        <td style={{ padding: '12px 8px' }}>$150K-350K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Step-by-Step */}
                <h2 id="step-by-step" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step-by-Step: Building an On-Demand App</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                    alt="Software development and engineering"
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', borderRadius: 12, marginBottom: 16 }}
                  />
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                    Photo by <a href="https://unsplash.com/@lukechesser" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Luke Chesser</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>Unsplash</a>
                  </p>
                </div>

                {[
                  { num: 1, title: 'Validate Demand in One Geography', desc: 'On-demand apps live and die by local density. You need enough providers AND customers in a small area to create instant matches.', detail: 'Pick one city or even one neighborhood. Can you find 20 service providers willing to join? Can you get 100 customers requesting services? Validate with manual matching (WhatsApp + spreadsheet) before building the app.' },
                  { num: 2, title: 'Design the Three-App Architecture', desc: 'Every on-demand platform needs three separate but connected apps: Customer App, Provider App, and Admin Dashboard.', detail: 'Customer App: request service, track provider, pay, rate. Provider App: accept/reject jobs, navigate, manage earnings, availability toggle. Admin Dashboard: monitor all activity, manage users, handle disputes, view analytics.' },
                  { num: 3, title: 'Build the Real-Time Matching Engine', desc: 'This is the heart of your on-demand app. When a customer requests a service, you need to find the best available provider in seconds.', detail: 'Implement geospatial queries (PostGIS or MongoDB geospatial) to find nearby providers. Factor in: distance, estimated arrival time, provider rating, completion rate, and current workload. Use WebSockets for instant notifications.' },
                  { num: 4, title: 'Implement GPS Tracking & Live Maps', desc: 'Customers need to see their provider moving toward them in real time. This requires continuous location updates with minimal battery drain.', detail: 'Use Google Maps SDK or Mapbox for map rendering. Implement background location tracking on the provider app (every 5-10 seconds). Batch location updates to reduce server load. Show smooth animations for location updates on the customer side.' },
                  { num: 5, title: 'Build the Booking & Scheduling System', desc: 'Some on-demand services are instant (ride-hailing). Others are scheduled (home services). Your booking system needs to handle both.', detail: 'Instant bookings: real-time matching + acceptance flow (provider has 15-30 seconds to accept). Scheduled bookings: calendar integration, time slot management, automated reminders, and buffer time between jobs.' },
                  { num: 6, title: 'Implement Dynamic Pricing', desc: 'Pricing in on-demand apps is complex: base fare, per-mile/minute charges, surge multipliers, service fees, tips, and promotions all factor in.', detail: 'Build a pricing engine that handles: base rate + distance rate + time rate + surge multiplier + service fee - promotional discount. Implement surge pricing based on supply/demand ratio in real-time. Show price estimates BEFORE the customer confirms.' },
                  { num: 7, title: 'Set Up Payment Processing', desc: 'On-demand payments need to be seamless, automatic, and support splitting between your platform and the service provider.', detail: 'Use Stripe Connect for payment splitting. Implement: saved cards, Apple Pay/Google Pay, in-app tipping, automatic charging after service completion, refund processing, and weekly provider payouts.' },
                  { num: 8, title: 'Build the Rating & Review System', desc: 'Ratings are critical for quality control. Bad providers get deactivated. Bad customers get flagged. Both sides need accountability.', detail: 'Implement two-way ratings (customer rates provider AND provider rates customer). Calculate rolling averages. Set minimum rating thresholds (e.g., below 4.2 = deactivation warning). Add written review options and photo uploads for proof of service.' },
                  { num: 9, title: 'Add Push Notifications & Communication', desc: 'On-demand apps are notification-heavy. Every status change triggers a notification. Every message needs to be instant.', detail: 'Implement: job request notifications, acceptance confirmations, provider arrival alerts, service completion notifications, receipt/invoice delivery, and promotional notifications. Use in-app chat (not phone numbers) for privacy.' },
                  { num: 10, title: 'Build the Admin Dashboard', desc: 'Your operations team needs to see everything happening in real time. The admin dashboard is your command center.', detail: 'Build: live map showing all active providers and jobs, real-time analytics (requests, completions, cancellations), user management, dispute resolution workflow, pricing controls, and promotional campaign management.' },
                  { num: 11, title: 'Launch in One Zone with Manual Ops', desc: 'Launch in a single zone (one city or neighborhood) with a small number of vetted providers. Handle edge cases manually at first.', detail: 'Onboard 15-30 providers. Run a 2-week soft launch with friends and family. Monitor every single job. Handle cancellations, no-shows, and disputes personally. This reveals gaps your code can\'t predict.' },
                  { num: 12, title: 'Optimize, Then Expand Zone by Zone', desc: 'Once unit economics work in Zone 1, replicate the playbook in adjacent zones. Each new zone is a mini-launch.', detail: 'Track: average matching time, provider utilization rate, customer repeat rate, cost per acquisition, and lifetime value. Don\'t expand until Zone 1 metrics are healthy. Each new zone needs its own provider recruitment effort.' },
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
                }}>Must-Have On-Demand Features</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Customer App</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Service request with location picker</li>
                      <li style={{ marginBottom: 6 }}>Real-time provider tracking on map</li>
                      <li style={{ marginBottom: 6 }}>Price estimation before booking</li>
                      <li style={{ marginBottom: 6 }}>In-app payment & tipping</li>
                      <li>Two-way rating & review</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Provider App</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Online/offline availability toggle</li>
                      <li style={{ marginBottom: 6 }}>Job accept/reject with countdown</li>
                      <li style={{ marginBottom: 6 }}>Turn-by-turn navigation</li>
                      <li style={{ marginBottom: 6 }}>Earnings dashboard & payout history</li>
                      <li>Document upload for verification</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Admin Dashboard</h4>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                      <li style={{ marginBottom: 6 }}>Live map with all active jobs</li>
                      <li style={{ marginBottom: 6 }}>Real-time analytics & KPIs</li>
                      <li style={{ marginBottom: 6 }}>User & provider management</li>
                      <li style={{ marginBottom: 6 }}>Pricing & surge controls</li>
                      <li>Dispute resolution workflow</li>
                    </ul>
                  </div>
                </div>

                {/* Real-Time Architecture */}
                <h2 id="real-time" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Real-Time Architecture Deep Dive</h2>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <p style={{ fontSize: 16, fontStyle: 'italic', margin: '0 0 16px', color: '#ffffff' }}>
                    &ldquo;The difference between a good on-demand app and a great one is latency. Users expect matching in under 10 seconds and location updates every 3-5 seconds.&rdquo;
                  </p>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p style={{ marginBottom: 16 }}><strong style={{ color: '#ffffff' }}>Critical real-time components:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>WebSocket Connections:</strong> Persistent connections for instant bi-directional communication. Socket.io or AWS API Gateway WebSockets. Handle 10K+ concurrent connections.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>Geospatial Indexing:</strong> Use Redis with GEO commands or PostGIS for spatial queries. &ldquo;Find all available drivers within 5km&rdquo; must return in under 50ms.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>Event-Driven Architecture:</strong> Use message queues (RabbitMQ, Kafka) to decouple matching, notifications, and analytics. Events: job_requested, provider_matched, provider_arrived, job_completed.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#b4fd83' }}>Location Batching:</strong> Don&apos;t send location updates one at a time. Batch provider locations and broadcast every 3-5 seconds to reduce server load by 80%.</li>
                    <li><strong style={{ color: '#b4fd83' }}>ETA Calculation:</strong> Use Google Directions API or OSRM for real-time ETA. Cache common routes. Update ETA every 30 seconds during active jobs.</li>
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
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Mobile</strong></td>
                        <td style={{ padding: '12px 8px' }}>Flutter or React Native</td>
                        <td style={{ padding: '12px 8px' }}>2 apps (customer + provider), cross-platform</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Backend</strong></td>
                        <td style={{ padding: '12px 8px' }}>Node.js or Go</td>
                        <td style={{ padding: '12px 8px' }}>High concurrency, async I/O</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Real-Time</strong></td>
                        <td style={{ padding: '12px 8px' }}>Socket.io / Redis Pub/Sub</td>
                        <td style={{ padding: '12px 8px' }}>WebSocket management, message broadcasting</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Database</strong></td>
                        <td style={{ padding: '12px 8px' }}>PostgreSQL + PostGIS + Redis</td>
                        <td style={{ padding: '12px 8px' }}>Geospatial queries, caching, session store</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Maps & Routing</strong></td>
                        <td style={{ padding: '12px 8px' }}>Google Maps Platform</td>
                        <td style={{ padding: '12px 8px' }}>Directions, geocoding, Places, ETA</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Message Queue</strong></td>
                        <td style={{ padding: '12px 8px' }}>RabbitMQ or Apache Kafka</td>
                        <td style={{ padding: '12px 8px' }}>Event processing, decoupled services</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Payments</strong></td>
                        <td style={{ padding: '12px 8px' }}>Stripe Connect</td>
                        <td style={{ padding: '12px 8px' }}>Split payments, automatic payouts</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Cloud</strong></td>
                        <td style={{ padding: '12px 8px' }}>AWS (ECS + ElastiCache + RDS)</td>
                        <td style={{ padding: '12px 8px' }}>Auto-scaling, managed services</td>
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
                        <td style={{ padding: '12px 8px' }}>2-3 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$5K-12K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>UI/UX Design (3 Apps)</strong></td>
                        <td style={{ padding: '12px 8px' }}>4-6 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$15K-40K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Backend & Real-Time Engine</strong></td>
                        <td style={{ padding: '12px 8px' }}>8-12 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$35K-100K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Customer & Provider Mobile Apps</strong></td>
                        <td style={{ padding: '12px 8px' }}>8-14 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$30K-90K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Admin Dashboard</strong></td>
                        <td style={{ padding: '12px 8px' }}>3-5 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$10K-30K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>QA & Beta Testing</strong></td>
                        <td style={{ padding: '12px 8px' }}>3-4 weeks</td>
                        <td style={{ padding: '12px 8px' }}>$8K-20K</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 600 }}>
                        <td style={{ padding: '12px 8px', color: '#ffffff' }}>Total (MVP)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>4-7 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$70K-200K</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px', color: '#ffffff' }}>Total (Full Product)</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>8-14 months</td>
                        <td style={{ padding: '12px 8px', color: '#b4fd83' }}>$200K-350K+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mistakes */}
                <h2 id="mistakes" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Common On-Demand App Mistakes to Avoid</h2>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Launching in Too Many Cities:</strong> Uber launched in ONE city (San Francisco). DoorDash launched in ONE city (Palo Alto). Spreading thin means you never hit critical mass anywhere. One zone, done right, beats 10 zones done poorly.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Polling Instead of WebSockets:</strong> Using HTTP polling for location updates kills your server and drains phone batteries. Use WebSockets or Server-Sent Events for real-time data. The difference: 500ms latency vs 10-second delays.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>No Offline Handling:</strong> Users in elevators, tunnels, and dead zones lose connectivity. Your app should handle offline gracefully: queue actions, show cached data, and sync when reconnected.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>Ignoring Provider Experience:</strong> Founders obsess over the customer app but ship a terrible provider app. Happy providers = better service = happy customers. The provider app deserves equal investment.</li>
                    <li style={{ marginBottom: 16 }}><strong style={{ color: '#ff6b6b' }}>No Cancellation Policy:</strong> Without clear cancellation policies and fees, customers and providers cancel freely, destroying matching efficiency. Implement cancellation fees after a grace period.</li>
                    <li><strong style={{ color: '#ff6b6b' }}>Manual Dispatch at Scale:</strong> Some startups manually dispatch jobs to providers. This works for 10 jobs/day but breaks at 100. Build automated matching from the start; refine the algorithm over time.</li>
                  </ul>
                </div>

                {/* Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Choose Codazz for On-Demand Development</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>25+ On-Demand Apps Built</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Ride-hailing, delivery, home services, and healthcare. We&apos;ve solved real-time matching, GPS tracking, and dynamic pricing at scale.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Real-Time Architecture Experts</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>WebSockets, geospatial queries, event-driven architecture, and high-concurrency backends are our core strengths.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Launch Strategy Included</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We help you plan your zone-by-zone launch, provider onboarding, and customer acquisition strategy alongside development.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Scalable from Day 1</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Our architecture handles 50 jobs/day to 50,000 jobs/day without rewrites. Auto-scaling infrastructure that grows with you.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How many providers do I need to launch?', a: 'For a single zone launch, aim for 15-30 vetted providers. This ensures a customer can find an available provider within 10-15 minutes during peak hours. More important than total count is provider density in your launch zone and their availability commitment (minimum 20 hours/week).' },
                  { q: 'Should I build one app or two separate apps (customer + provider)?', a: 'Two separate apps, always. The user experiences are fundamentally different. Combining them creates UX confusion, larger app size, and slower development cycles. Share backend infrastructure, but keep the apps separate. This also allows independent app store optimization.' },
                  { q: 'How do I handle surge pricing without alienating users?', a: 'Transparency is key. Always show the surge multiplier and estimated total BEFORE the customer confirms. Explain why ("High demand in your area"). Cap surge multipliers (usually 3-4x max). Implement automatic surge expiration after demand normalizes. Offer "wait for lower price" options.' },
                  { q: 'What are the ongoing costs after launch?', a: 'Plan for $8K-25K/month: Google Maps API ($2K-8K based on usage), AWS hosting ($1K-5K), Stripe fees (2.9% + $0.30 per transaction), push notifications ($500-1K), monitoring ($500-1K), and support ($3K-10K). Google Maps is often the largest ongoing cost.' },
                  { q: 'Can I use Flutter for both customer and provider apps?', a: 'Yes, and we recommend it. Flutter excels at on-demand apps because of: smooth animations for map movements, shared business logic between apps, excellent GPS and WebSocket support, and cross-platform deployment. This saves 30-40% development time compared to building separate iOS/Android apps.' },
                  { q: 'How do I handle provider background checks?', a: 'Use services like Checkr or Sterling for automated background checks. Implement a multi-step onboarding: identity verification (Jumio/Onfido), background check, document verification (license, insurance), and in-person or video onboarding. Most on-demand apps require clear background checks before activation.' },
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
                    Ready to Build Your On-Demand App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free consultation with our on-demand development team. We&apos;ll review your concept, design the real-time architecture, and provide a detailed project estimate.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Get Your Free On-Demand Consultation
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
