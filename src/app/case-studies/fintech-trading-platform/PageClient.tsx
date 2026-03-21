'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
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

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.2)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(255,255,255,0.06)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

export default function FintechTradingPlatformPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLDivElement>;
  const s2 = useReveal() as React.RefObject<HTMLDivElement>;
  const s3 = useReveal() as React.RefObject<HTMLDivElement>;
  const s4 = useReveal() as React.RefObject<HTMLDivElement>;
  const s5 = useReveal() as React.RefObject<HTMLDivElement>;
  const s6 = useReveal() as React.RefObject<HTMLDivElement>;
  const s7 = useReveal() as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'FinTech Trading Platform' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              FinTech &bull; Case Study
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              How We Built a FinTech Trading Platform with{' '}
              <span style={{ color: '#22c55e' }}>100K+ Active Users</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 700, margin: '0 auto 2.5rem' }}>
              A real-time, multi-asset trading platform with AI-driven analytics, institutional-grade security, and sub-50ms order execution.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1.5rem', maxWidth: 700, margin: '0 auto' }}>
              {[
                ['100K+', 'Active Users'],
                ['4.9\u2605', 'App Store Rating'],
                ['99.99%', 'Uptime'],
                ['$50M+', 'Traded Volume'],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT CHALLENGE */}
        <section ref={s1} className="section-padding">
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>The Challenge</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                A Growing FinTech Needed to Scale &mdash; Fast
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Our client, a US-based FinTech startup, had validated their product with early adopters but hit a wall. Their existing platform was a monolithic Ruby on Rails app that couldn&apos;t handle growing concurrency. Order execution times exceeded 2 seconds. The mobile experience was a web wrapper with poor performance. Compliance gaps were blocking their Series B fundraise.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '\u26A0\uFE0F', title: '2+ Second Latency', desc: 'Order execution was too slow for active traders, causing user churn.' },
                { icon: '\uD83D\uDCF1', title: 'No Native Mobile', desc: 'The mobile app was a WebView wrapper with frequent crashes and poor UX.' },
                { icon: '\uD83D\uDD12', title: 'Compliance Gaps', desc: 'Missing SOC 2 and SEC regulatory requirements were blocking fundraising.' },
              ].map(c => (
                <Card key={c.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* OUR SOLUTION */}
        <section ref={s2} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Solution</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                A Complete Platform Rebuild &mdash; Architecture to App Store
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We decomposed the monolith into event-driven microservices, built a native mobile experience with React Native, and implemented a real-time data pipeline that handles 50K+ concurrent WebSocket connections with sub-50ms latency.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '\uD83C\uDFD7\uFE0F', title: 'Microservices Architecture', desc: 'Decomposed into 12 independently deployable services with event-driven communication via Kafka, enabling zero-downtime deployments.' },
                { icon: '\uD83D\uDCF1', title: 'Native Mobile with React Native', desc: 'Built from the ground up with React Native for iOS and Android, featuring real-time charts, biometric auth, and push notifications.' },
                { icon: '\u26A1', title: 'Real-time Data Pipeline', desc: 'Custom WebSocket gateway handles 50K+ concurrent connections. Market data streams with sub-50ms latency using Redis pub/sub.' },
                { icon: '\uD83D\uDD10', title: 'Security & Compliance', desc: 'SOC 2 Type II certified infrastructure with end-to-end encryption, audit logging, and SEC-compliant trade reporting.' },
              ].map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s3} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Technology</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {[
                { cat: 'Frontend', items: ['React Native', 'TypeScript', 'Redux Toolkit', 'Victory Charts'] },
                { cat: 'Backend', items: ['Node.js', 'Express', 'Apache Kafka', 'WebSocket (ws)'] },
                { cat: 'Database', items: ['PostgreSQL', 'Redis', 'TimescaleDB', 'S3'] },
                { cat: 'Infrastructure', items: ['AWS (ECS, RDS, ElastiCache)', 'Terraform', 'DataDog', 'PagerDuty'] },
                { cat: 'Integrations', items: ['Plaid API', 'Alpaca Markets', 'Twilio', 'SendGrid'] },
                { cat: 'Security', items: ['AWS KMS', 'HashiCorp Vault', 'OAuth 2.0', 'FIDO2/WebAuthn'] },
              ].map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '4px 12px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section ref={s4} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Process</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Development Timeline</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>8 months from kickoff to App Store launch, delivered in 2-week sprint cycles.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gap: '1rem' }}>
              {[
                { phase: 'Weeks 1-2', title: 'Discovery & Architecture', desc: 'Stakeholder interviews, technical audit of existing system, architecture design, and sprint planning.' },
                { phase: 'Weeks 3-8', title: 'Core Platform Build', desc: 'Microservices scaffolding, database design, real-time data pipeline, authentication system, and Plaid integration.' },
                { phase: 'Weeks 9-16', title: 'Mobile App & Trading Engine', desc: 'React Native app development, order execution engine, real-time charting, portfolio management, and push notifications.' },
                { phase: 'Weeks 17-24', title: 'Security Hardening & Compliance', desc: 'Penetration testing, SOC 2 audit preparation, SEC reporting integration, performance optimization, and load testing.' },
                { phase: 'Weeks 25-32', title: 'Beta Testing & Launch', desc: 'Closed beta with 5,000 users, bug fixes, App Store submission, marketing site, and production deployment.' },
              ].map((p, i) => (
                <div key={p.phase} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 48, height: 48, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div style={{ paddingBottom: '1.5rem', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none', flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', color: '#22c55e', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{p.phase}</div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section ref={s5} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Results</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Measurable Impact</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>Within 6 months of launch, every key metric exceeded initial targets.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                { value: '100K+', label: 'Active Users', before: '8K users on legacy platform' },
                { value: '4.9\u2605', label: 'App Store Rating', before: 'No mobile app previously' },
                { value: '99.99%', label: 'Uptime', before: '97.5% uptime on legacy' },
                { value: '$50M+', label: 'Monthly Trade Volume', before: '$2M monthly on legacy' },
                { value: '<50ms', label: 'Order Execution', before: '2+ second latency before' },
                { value: 'SOC 2', label: 'Type II Certified', before: 'No compliance certification' },
              ].map(r => (
                <Card key={r.label}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#22c55e', marginBottom: '0.25rem' }}>{r.value}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>{r.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{r.before}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section ref={s6} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="reveal" style={{ border: '1px solid rgba(34,197,94,0.15)', borderRadius: 32, background: 'rgba(34,197,94,0.03)', padding: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center' }}>
              <blockquote style={{ margin: 0 }}>
                <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  &ldquo;Codazz didn&apos;t just rebuild our platform &mdash; they transformed our business. The new trading engine is faster, more reliable, and our users love the mobile experience. They helped us close our Series B.&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>CTO</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)' }}>Series B FinTech, New York</div>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        {/* RELATED CASE STUDIES */}
        <section ref={s7} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>Related Case Studies</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'HIPAA Telehealth Platform', industry: 'Healthcare', metric: '50K+ Patients', href: '/case-studies/healthcare-telehealth-app' },
                { title: 'E-Commerce Marketplace', industry: 'E-Commerce', metric: '340% Conversion Lift', href: '/case-studies/ecommerce-marketplace' },
              ].map(r => (
                <Link
                  key={r.href}
                  href={r.href}
                  style={{
                    display: 'block',
                    padding: '2rem',
                    borderRadius: 24,
                    background: 'rgba(255,255,255,0.015)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', letterSpacing: '0.05em' }}>{r.industry}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0.5rem 0' }}>{r.title}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>{r.metric}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Build Your <span style={{ color: '#22c55e' }}>FinTech Platform.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Whether you&apos;re rebuilding a legacy system or launching from scratch, we have the FinTech engineering expertise to deliver.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Start Your Project
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  More Case Studies
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['NDA on Day 1', 'Fixed-Price Sprints', 'SOC II Certified', '24hr Response'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>{'\u2713'} {t}</span>
                ))}
              </div>
              <TrustBadges compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
