'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import HeroBackground from '@/components/HeroBackground';
import PortfolioShowcase from '@/components/PortfolioShowcase';

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

const stats = [
  { value: '200+', label: 'APIs Built' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<100ms', label: 'p95 Latency' },
  { value: 'REST & GraphQL', label: 'Protocol Coverage' },
];

const services = [
  { icon: '🔗', title: 'RESTful API Design', desc: 'We design clean, resource-oriented REST APIs following OpenAPI 3.0 specifications — with consistent error handling, pagination, versioning, and hypermedia links that are intuitive for any developer to integrate.' },
  { icon: '⚡', title: 'GraphQL APIs', desc: 'We build type-safe GraphQL APIs with efficient resolvers, DataLoader for N+1 prevention, persisted queries, real-time subscriptions, and schema-first development with codegen for client type safety.' },
  { icon: '🔐', title: 'Authentication & Authorization', desc: 'Robust auth systems using JWT, OAuth 2.0, and API keys — with role-based and attribute-based access control, token refresh strategies, and seamless integration with identity providers like Auth0 and Cognito.' },
  { icon: '🛡️', title: 'Rate Limiting & Security', desc: 'We implement layered security: rate limiting per user and IP, request validation with Zod/Joi, SQL injection prevention, CORS configuration, HTTPS enforcement, and security headers — protecting your API from abuse and attacks.' },
  { icon: '📖', title: 'API Documentation', desc: 'Auto-generated, interactive API documentation using Swagger UI and Redoc, supplemented with developer guides, authentication walkthroughs, code snippets in multiple languages, and a Postman collection for rapid testing.' },
  { icon: '🏗️', title: 'Microservices Architecture', desc: 'When a monolith is no longer sufficient, we architect and implement microservices with gRPC or REST communication, an API gateway, service mesh, distributed tracing, and centralised logging for operational clarity.' },
];

const steps = [
  { num: '01', title: 'API Design & Contract', desc: 'We define your API contract first — resource models, endpoint design, authentication flows, error codes, and pagination — producing an OpenAPI spec that serves as the single source of truth before any implementation begins.' },
  { num: '02', title: 'Build & Test', desc: 'We implement the API with a test-first approach: unit tests for business logic, integration tests for each endpoint, contract tests for external dependencies, and automated load tests to verify performance under realistic traffic.' },
  { num: '03', title: 'Security Audit', desc: 'Every API goes through a security review covering OWASP API Top 10 vulnerabilities, authentication bypass attempts, rate limit validation, injection testing, and mass assignment checks before any production exposure.' },
  { num: '04', title: 'Production Deploy', desc: 'We deploy with zero-downtime strategies, configure health checks and circuit breakers, set up distributed tracing with OpenTelemetry, and establish SLO-based alerting so you know about degradation before your customers do.' },
];

const faqs = [
  { q: 'REST vs GraphQL — which should we use?', a: 'REST is the right choice for most public APIs, simple CRUD operations, and when working with teams unfamiliar with GraphQL. GraphQL excels when clients have diverse data requirements, mobile apps need to minimise over-fetching, or you\'re building a BFF (Backend for Frontend) layer. Many of our projects use both — a public REST API and an internal GraphQL API for the product frontend.' },
  { q: 'How do you secure APIs against common attacks?', a: 'We implement defence in depth: input validation on every request, parameterised queries to prevent injection, JWT signature verification, CORS whitelisting, rate limiting per user and IP, brute-force protection, security headers (HSTS, CSP), and infrastructure-level WAF rules. All APIs undergo OWASP API Security Top 10 review before launch.' },
  { q: 'Monolith vs microservices — when does each make sense?', a: 'Start with a well-structured monolith — it is faster to build, easier to debug, and simpler to deploy. Migrate to microservices when you have identified specific bottlenecks, need independent scaling of particular domains, or have separate teams that cannot coordinate deployment safely. We actively discourage premature microservices for products under 12 months old.' },
  { q: 'How do you handle API versioning?', a: 'We use URL path versioning (v1, v2) for public APIs due to its explicitness and simplicity. For internal APIs, we use header-based versioning or GraphQL schema evolution with deprecation directives. We maintain deprecated versions for a minimum of 12 months after announcing sunset dates, giving integrators ample migration time.' },
  { q: 'How do you handle API rate limits at scale?', a: 'We implement distributed rate limiting using Redis with sliding window or token bucket algorithms, configurable per API key, user tier, and endpoint. Limits are communicated via standard headers (X-RateLimit-*), breaches return proper 429 responses with Retry-After headers, and we provide higher rate limit tiers for enterprise customers with SLA commitments.' },
];



export default function PageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
      `}</style>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/services/web-development" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Web Development</Link>
              <span>/</span>
              <span style={{ color: '#ffffff' }}>API & Backend Development</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>BACKEND ENGINEERING</span>
            </div>
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
              APIs & Backends Built for{' '}
              <span style={{ color: '#ffffff' }}>Performance & Scale</span>
            </h1>
            <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
              We design and build robust REST and GraphQL APIs with sub-100ms latency, 99.9% uptime, and bulletproof security. From single-purpose microservices to complex distributed backends, we engineer the foundation your product depends on.
            </p>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
              </div>
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section ref={s1} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Complete Backend Engineering Services</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {services.map((svc, i) => (
                <div key={svc.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        {/* PORTFOLIO */}
        <PortfolioShowcase category="web-development" />

        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>How We Work</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#ffffff', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s3} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, transition: '0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Build Your API?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's design and build a backend that performs under pressure, integrates seamlessly, and scales without limits.</p>
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
                Get a Free Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
