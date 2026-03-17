'use client';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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

const techStack = ['React', 'Python', 'TensorFlow', 'AWS IoT', 'PostgreSQL', 'MapBox'];

const metrics = [
  { value: '15K+', label: 'Daily Deliveries' },
  { value: '25%', label: 'Fuel Savings' },
  { value: 'Real-Time', label: 'Tracking' },
  { value: '98%', label: 'On-Time Rate' },
];

export default function LogisticsCaseStudyClient() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#ffffff', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(100px, 12vw, 140px) 0 clamp(40px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="wide" />
          <div className="cb-container">
            <div className="reveal">
              <Breadcrumb items={[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Real-Time Logistics & Fleet Management' },
              ]} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 16 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#111827',
                padding: '5px 14px', borderRadius: 100,
              }}>Logistics</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>Logistics Client &middot; Los Angeles</span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Real-Time Logistics &amp; Fleet Management
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              We built an intelligent logistics platform that combines IoT fleet tracking, ML-powered route optimization, and a real-time operations dashboard to transform last-mile delivery operations.
            </p>

            {/* Placeholder image */}
            <div className="reveal reveal-d4" style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(17,24,39,0.08), rgba(0,0,0,0.03))',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 48,
            }}>
              <span style={{ fontSize: 15, color: 'rgba(0,0,0,0.25)', fontWeight: 500 }}>
                Case Study Visual — Coming Soon
              </span>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW GRID ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 24,
            }}>
              {[
                { title: 'Challenge', text: 'A Los Angeles-based logistics company managing a fleet of 500+ vehicles had no real-time visibility into operations. Routes were planned manually, fuel costs were spiraling, and on-time delivery rates had dropped below 80%.' },
                { title: 'Solution', text: 'Codazz built a full-stack logistics platform with IoT device integration for real-time fleet tracking, a TensorFlow-based route optimization engine, and a MapBox-powered operations dashboard — delivered in 4 months.' },
                { title: 'Results', text: 'The platform now manages 15K+ daily deliveries with a 98% on-time rate, 25% reduction in fuel costs, and complete real-time visibility across the entire fleet from a single dashboard.' },
              ].map((card) => (
                <div key={card.title} style={{
                  padding: 'clamp(24px, 4vw, 36px)', borderRadius: 24,
                  background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <p style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#111827', marginBottom: 16,
                  }}>{card.title}</p>
                  <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, margin: 0 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE CHALLENGE ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#111827', marginBottom: 16,
              }}>The Challenge</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Blind Spots Across the Entire Fleet</h2>

              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                Our client operated a fleet of over 500 delivery vehicles across California, serving everything from same-day e-commerce parcels to scheduled B2B shipments. Despite the scale of their operation, dispatchers were still planning routes using spreadsheets and static maps. There was no real-time visibility into where vehicles were, whether drivers were on schedule, or if routes were being followed.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                Fuel costs had become the single largest line item on their P&L, and the manual routing process meant that drivers were frequently taking suboptimal paths, idling in traffic, or making unnecessary detours. Customer complaints about late deliveries were increasing month over month, and the on-time delivery rate had fallen below 80%.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                The client needed a unified platform that could track every vehicle in real time, automatically optimize routes based on live traffic and delivery constraints, and give operations managers a single pane of glass to monitor performance, identify bottlenecks, and make data-driven decisions.
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR SOLUTION ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#111827', marginBottom: 16,
              }}>Our Solution</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>IoT, Machine Learning, and Real-Time Visibility</h2>

              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                We started by integrating IoT GPS trackers across the entire fleet using AWS IoT Core as the ingestion layer. Each vehicle reported its position, speed, fuel level, and engine diagnostics every 10 seconds via MQTT. This telemetry data flowed into a time-series database, giving us a rich historical dataset for analysis and a real-time stream for live tracking.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                The route optimization engine was built with Python and TensorFlow. We trained a model on 18 months of historical delivery data combined with real-time traffic feeds, weather conditions, and delivery time windows. The model generates optimized routes each morning and dynamically re-routes vehicles throughout the day as conditions change — accounting for traffic incidents, new priority orders, and driver break schedules.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                The operations dashboard was built with React and MapBox GL, rendering real-time vehicle positions on an interactive map with color-coded status indicators, geofence alerts, and delivery progress tracking. Dispatchers could click any vehicle to see its current route, estimated arrival times, and historical performance metrics. PostgreSQL powered the analytics backend, supporting complex queries across millions of delivery records for reporting and forecasting.
              </p>

              {/* Tech stack badges */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {techStack.map(tech => (
                  <span key={tech} style={{
                    fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.5)',
                    padding: '10px 20px', border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: 100, background: 'rgba(0,0,0,0.03)',
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY RESULTS ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#111827', marginBottom: 16,
            }}>Key Results</p>
            <h2 className="reveal" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
              letterSpacing: '-0.03em', marginBottom: 40,
            }}>Operational Excellence, Delivered</h2>

            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
              gap: 24,
            }}>
              {metrics.map((m) => (
                <div key={m.label} style={{
                  padding: 'clamp(20px, 4vw, 36px)', borderRadius: 24, textAlign: 'center',
                  background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <div style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, color: '#111827', marginBottom: 8 }}>{m.value}</div>
                  <div style={{
                    fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.4)',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              maxWidth: 760,
              padding: 'clamp(24px, 4vw, 48px)', borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(17,24,39,0.06), rgba(0,0,0,0.015))',
              border: '1px solid rgba(17,24,39,0.15)',
              position: 'relative',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 24, opacity: 0.15 }}>
                <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p style={{
                fontSize: 20, color: 'rgba(0,0,0,0.6)', lineHeight: 1.7,
                fontStyle: 'italic', marginBottom: 24,
              }}>
                &ldquo;Before Codazz, we were flying blind. Now we have real-time visibility into every vehicle, every route, every delivery. The fuel savings alone paid for the entire project within six months. Our dispatchers went from managing chaos to managing optimization — and our customers have noticed the difference.&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: '0 0 4px' }}>VP of Operations</p>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', margin: 0 }}>Leading Los Angeles Logistics Company</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ paddingBottom: 'clamp(60px, 10vw, 120px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              background: 'rgba(17,24,39,0.04)', border: '1px solid rgba(17,24,39,0.15)',
              borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 56px)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#111827', marginBottom: 12,
                }}>Start a Similar Project</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Need Smarter Logistics?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  From IoT integration to ML-powered optimization, we build logistics platforms that cut costs and improve delivery performance. Let&apos;s talk.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#111827', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get in Touch →
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
