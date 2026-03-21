'use client';
import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(24px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);
  return ref;
}

const tocSections = [
  { id: 'what-is-load-testing', label: 'What is Load Testing?' },
  { id: 'test-types', label: 'Types of Performance Tests' },
  { id: 'tool-comparison', label: 'Tool Comparison: k6, JMeter, Locust, Artillery, Gatling' },
  { id: 'key-metrics', label: 'Key Metrics & SLOs' },
  { id: 'writing-tests', label: 'Writing Load Test Scripts' },
  { id: 'test-scenarios', label: 'Test Scenarios & Strategies' },
  { id: 'cicd-integration', label: 'CI/CD Integration' },
  { id: 'results-interpretation', label: 'Interpreting Results' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'faq', label: 'FAQ' },
];

const relatedPosts = [
  { title: 'API Rate Limiting & Authentication Best Practices 2026', href: '/blog/api-rate-limiting-guide' },
  { title: 'Multi-Tenant Architecture Guide', href: '/blog/multi-tenant-architecture-guide' },
  { title: 'Mobile App Testing Guide 2026', href: '/blog/mobile-app-testing-guide' },
  { title: 'CI/CD Pipeline Guide 2026', href: '/blog/cicd-pipeline-guide-2026' },
];

const G = '#22c55e';

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('what-is-load-testing');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = tocSections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqItems = [
    {
      q: 'How much load should I simulate in my tests?',
      a: 'Start with your current peak traffic and multiply by 2–3x as a realistic stress target. Check your analytics for the highest concurrent users you have ever seen, then simulate 150–200% of that. For new products, use industry benchmarks: e-commerce apps typically see 5–10x traffic spikes during sales events; SaaS dashboards see 2–3x spikes Monday mornings. Work backwards from your SLO — if your p99 must stay under 500ms at 1,000 concurrent users, that is your acceptance threshold.',
    },
    {
      q: 'What is the difference between p95 and p99 latency?',
      a: 'p95 latency means 95% of all requests completed faster than that value — 5% were slower. p99 means 99% were faster — 1% were slower. p99 is more revealing because it exposes tail latency that real users experience but averages hide. A system with 50ms average latency can easily have a 2,000ms p99, meaning 1 in 100 users waits 40x longer than average. Always measure p95, p99, and p99.9 for user-facing endpoints. Set SLO thresholds on p99, not average.',
    },
    {
      q: 'Should I run load tests against production or a staging environment?',
      a: 'Both, but for different purposes. Staging tests validate new releases before deployment and can run continuously in CI/CD without risk. Production tests (often called production load testing or shadowing) reveal issues that only appear at real scale with real data distribution, real cache hit rates, and real downstream dependencies. For production, use read-only or write-to-test-user patterns, run during low-traffic windows, and have rollback procedures ready. Never run destructive load tests (deleting data, sending real emails) against production.',
    },
    {
      q: 'How do I prevent load tests from sending real emails or charging real cards?',
      a: 'Use test mode credentials for payment processors (Stripe test keys, PayPal sandbox). Route email to a test inbox (Mailtrap, SendGrid sandbox mode) by checking an environment variable. Intercept SMS via a stub service or Twilio test numbers. For databases, seed a separate set of test user IDs that your application treats as non-billable. Gate all side effects behind a feature flag or environment check: if (process.env.LOAD_TEST_MODE) return mockPaymentSuccess();',
    },
    {
      q: 'What is a good p99 latency target for a web API?',
      a: 'For interactive web APIs (user-facing endpoints), aim for p99 under 500ms. For critical checkout or payment flows, target p99 under 200ms. Background or batch endpoints can tolerate p99 up to 2–5 seconds. These are starting points — your actual SLOs should be based on user research and business requirements. Google\'s research shows that 53% of mobile users abandon sites that take longer than 3 seconds to load; Amazon found each 100ms of added latency cost 1% in revenue.',
    },
  ];

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        .toc-link { transition: color 0.2s, border-left-color 0.2s; }
        .toc-link:hover { color: ${G}; }
        .faq-btn { transition: background 0.2s; }
        .faq-btn:hover { background: rgba(34,197,94,0.08); }
        .data-table td, .data-table th { padding: 10px 14px; border: 1px solid rgba(255,255,255,0.08); }
        .data-table th { background: rgba(34,197,94,0.1); color: ${G}; font-weight: 600; }
        .data-table tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
        code { background: rgba(34,197,94,0.1); color: ${G}; padding: 2px 6px; border-radius: 4px; font-family: 'Fira Mono', monospace; font-size: 0.85em; }
        pre { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; overflow-x: auto; font-family: 'Fira Mono', monospace; font-size: 0.82em; line-height: 1.7; color: #e2e8f0; }
        pre .kw { color: #93c5fd; }
        pre .str { color: #86efac; }
        pre .cm { color: #6b7280; }
        pre .fn { color: #fbbf24; }
        @media (max-width: 1024px) { .sidebar { display: none !important; } }
      `}</style>
      <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
        <HeroBackground />
        <Navbar />
        <main ref={pageRef}>

          {/* ── HERO ── */}
          <section style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center', maxWidth: '860px', margin: '0 auto', padding: '120px 24px 60px' }}>
            <div data-reveal style={{ display: 'inline-block', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '20px', padding: '6px 18px', fontSize: '0.82rem', color: G, marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Performance Engineering · March 2026
            </div>
            <h1 data-reveal style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Load Testing Guide 2026:<br />
              <span style={{ color: G }}>Tools, Techniques &amp; Best Practices</span>
            </h1>
            <p data-reveal style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              A complete production playbook covering every type of performance test, tool comparisons (k6, JMeter, Locust, Artillery, Gatling), key metrics, CI/CD integration, results interpretation, and a real-world case study.
            </p>
            <div data-reveal style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>
              <span>20 min read</span>
              <span>·</span>
              <span>Updated March 21, 2026</span>
              <span>·</span>
              <span>By Codazz Engineering</span>
            </div>
          </section>

          {/* ── LAYOUT: ARTICLE + SIDEBAR ── */}
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px', alignItems: 'start' }}>

            {/* ── ARTICLE ── */}
            <article style={{ minWidth: 0 }}>

              {/* ── SECTION 1: WHAT IS LOAD TESTING ── */}
              <section id="what-is-load-testing" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>
                  What is Load Testing?
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '16px' }}>
                  Load testing is the practice of simulating real-world traffic on a software system to understand how it behaves under expected and peak conditions. Unlike functional testing — which checks whether features work correctly — load testing answers the question: <strong style={{ color: '#fff' }}>how many users can this system handle before it falls over?</strong>
                </p>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  In 2025, high-profile outages cost companies an average of <strong style={{ color: '#fff' }}>$5,600 per minute</strong> in lost revenue and damage to customer trust. Most of those outages were preventable — teams that ran systematic load tests before major launches and deployments caught the bottlenecks weeks before real users did. Load testing is not a luxury reserved for FAANG companies; it is table stakes for any production system serving more than a few hundred users.
                </p>

                <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                  {[
                    { label: 'Prevent Outages', desc: 'Catch breaking points before real users hit them during launches or traffic spikes.' },
                    { label: 'Validate SLOs', desc: 'Confirm that p95/p99 latency and error rate targets hold at projected user volumes.' },
                    { label: 'Size Infrastructure', desc: 'Determine exactly how many servers, pods, or DB connections you actually need.' },
                    { label: 'Find Bottlenecks', desc: 'Expose slow database queries, N+1 problems, memory leaks, and connection pool exhaustion.' },
                    { label: 'Benchmark Changes', desc: 'Compare performance before and after a refactor, upgrade, or infrastructure change.' },
                    { label: 'Build Confidence', desc: 'Ship with certainty — your team and stakeholders know the system has been pressure-tested.' },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ fontWeight: 700, color: '#fff', marginBottom: '6px', fontSize: '0.9rem' }}>{item.label}</div>
                      <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0, fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div data-reveal style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `3px solid ${G}`, borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: '8px' }}>The Load Testing Mindset</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>
                    Think of load testing as a fire drill — you run it regularly, deliberately, in controlled conditions, so that when real fire comes (a viral post, a Product Hunt launch, a Black Friday sale), your team knows exactly what will break and at what threshold. The goal is not to pass a test; the goal is to learn where your system&apos;s limits are and decide whether those limits are acceptable.
                  </p>
                </div>
              </section>

              {/* ── SECTION 2: TEST TYPES ── */}
              <section id="test-types" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Types of Performance Tests
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  &quot;Load test&quot; is often used as an umbrella term, but there are five distinct test types, each answering a different question. Running the wrong type gives you misleading confidence.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
                  {[
                    {
                      type: 'Load Test',
                      question: 'Does the system perform acceptably at expected peak load?',
                      desc: 'The baseline test. Simulate your anticipated peak concurrent users and measure throughput, latency, and error rates. Typically runs at 1x–1.5x your observed peak traffic for 10–30 minutes to verify steady-state performance.',
                      when: 'Before every major release. After infrastructure changes. After adding a new high-traffic feature.',
                      shape: 'Ramp up → steady state at target load → ramp down',
                    },
                    {
                      type: 'Stress Test',
                      question: 'What is the breaking point, and how does the system fail?',
                      desc: 'Push the system beyond its rated capacity — 2x, 5x, 10x normal load — until it degrades or fails. The goal is to find the breaking point AND observe the failure mode. Does it return errors gracefully? Queue and recover? Or deadlock and require a restart?',
                      when: 'When establishing capacity limits for the first time. After significant architectural changes. Before signing SLA contracts.',
                      shape: 'Ramp up aggressively until errors spike or latency becomes unacceptable',
                    },
                    {
                      type: 'Spike Test',
                      question: 'Can the system survive sudden traffic explosions?',
                      desc: 'Instantaneously jump from baseline to 5–10x load with no ramp-up period. Tests whether auto-scaling kicks in fast enough, whether connection pools handle the sudden surge, and whether queues absorb the burst without cascading failures.',
                      when: 'If you expect unpredictable spikes (viral social media, flash sales, sports events). After enabling auto-scaling to verify it actually works.',
                      shape: 'Low baseline → instant spike to maximum → return to baseline',
                    },
                    {
                      type: 'Soak / Endurance Test',
                      question: 'Does the system remain stable over many hours or days?',
                      desc: 'Run moderate load (50–70% of peak) for 4–24 hours or longer. Designed to catch memory leaks, connection pool exhaustion, disk space accumulation, cache poisoning, and other time-dependent degradation that short tests miss entirely.',
                      when: 'Before first production launch. Monthly as a health check. Whenever you suspect a memory leak from production metrics.',
                      shape: 'Steady moderate load for extended duration (4h, 8h, 24h)',
                    },
                    {
                      type: 'Breakpoint Test',
                      question: 'At exactly what load does each component become the bottleneck?',
                      desc: 'Systematically increase load in small increments and measure which metric degrades first at each step. Produces a capacity curve showing throughput vs latency, letting you identify the precise inflection point. More controlled and data-rich than a basic stress test.',
                      when: 'Capacity planning. Choosing between architectural options. Justifying infrastructure spend to stakeholders.',
                      shape: 'Incremental steps: 10% → 20% → 30% → … of max, measuring at each plateau',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '22px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                        <div style={{ fontWeight: 700, color: G, fontSize: '1.05rem' }}>{item.type}</div>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>{item.question}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 12px', fontSize: '0.92rem' }}>{item.desc}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: '6px', padding: '10px 14px' }}>
                          <div style={{ fontSize: '0.75rem', color: G, fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Run When</div>
                          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', lineHeight: 1.5, margin: 0 }}>{item.when}</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '6px', padding: '10px 14px' }}>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Traffic Shape</div>
                          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', lineHeight: 1.5, margin: 0 }}>{item.shape}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 3: TOOL COMPARISON ── */}
              <section id="tool-comparison" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Tool Comparison: k6, JMeter, Locust, Artillery, Gatling
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Five tools dominate the load testing landscape in 2026. Each has a distinct philosophy, scripting model, and performance profile. Here is how they compare across the dimensions that matter most.
                </p>

                <div data-reveal style={{ overflowX: 'auto', marginBottom: '32px' }}>
                  <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left' }}>Tool</th>
                        <th style={{ textAlign: 'left' }}>Language</th>
                        <th style={{ textAlign: 'left' }}>Protocol Support</th>
                        <th style={{ textAlign: 'left' }}>Max VUs (single node)</th>
                        <th style={{ textAlign: 'left' }}>CI/CD Friendly</th>
                        <th style={{ textAlign: 'left' }}>Cloud Execution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>k6</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>JavaScript / TypeScript</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>HTTP/1.1, HTTP/2, WebSocket, gRPC</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>50,000+</td>
                        <td style={{ color: G }}>Excellent</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>k6 Cloud, Grafana</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>JMeter</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>GUI / Groovy / Java</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>HTTP, HTTPS, JDBC, FTP, SOAP, SMTP</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>5,000–10,000</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Good (JMeter Maven Plugin)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>BlazeMeter, Azure Load Testing</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Locust</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Python</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>HTTP, WebSocket (custom clients)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>10,000+ (distributed)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Good</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Self-hosted distributed mode</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Artillery</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>YAML / JavaScript</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>HTTP, WebSocket, Socket.io, Kinesis</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>5,000–20,000</td>
                        <td style={{ color: G }}>Excellent (npm package)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Artillery Cloud, AWS Lambda</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Gatling</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Scala / Java / Kotlin</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>HTTP/1.1, HTTP/2, WebSocket, JMS</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>30,000+</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Good (Maven/Gradle plugin)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Gatling Enterprise</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div data-reveal style={{ display: 'grid', gap: '20px' }}>
                  {[
                    {
                      name: 'k6',
                      tagline: 'Best for modern JavaScript/TypeScript teams and CI/CD pipelines',
                      pro: 'Extremely efficient — single k6 process can simulate 50,000+ virtual users with low CPU overhead. Scripts are plain JavaScript/TypeScript. First-class CI/CD output (JUnit XML, Prometheus, Datadog). Thresholds built-in — tests fail automatically when SLOs are breached. Free, open-source, backed by Grafana Labs.',
                      con: 'No browser automation. Runs JS in a custom runtime — some Node.js APIs are unavailable. Distributed execution requires k6 Cloud (paid) or manual setup.',
                      verdict: 'First choice for API load testing in 2026. If your team writes JavaScript, start here.',
                    },
                    {
                      name: 'Apache JMeter',
                      tagline: 'Best for enterprises with GUI requirements or legacy SOAP/JDBC testing',
                      pro: 'Supports virtually every protocol out of the box. GUI makes it accessible to non-developers. Massive plugin ecosystem. Widely accepted in enterprise procurement processes. Excellent distributed testing with JMeter server nodes.',
                      con: 'GUI-based workflow is clunky for code review and version control. Java heap memory limits VU count per node. XML-based test plans are difficult to maintain as code. Thread-per-VU model means higher resource consumption than k6 or Gatling.',
                      verdict: 'Choose JMeter if you need JDBC/database testing, legacy protocol support, or your QA team requires a GUI. Avoid for greenfield HTTP API projects.',
                    },
                    {
                      name: 'Locust',
                      tagline: 'Best for Python teams who want full scripting flexibility',
                      pro: 'Real Python — full access to the Python ecosystem for data manipulation, custom auth logic, complex test scenarios. Excellent distributed mode. Clean web UI for real-time monitoring. Easy to extend with custom clients.',
                      con: 'GIL (Python\'s Global Interpreter Lock) limits per-process concurrency — requires many workers for large loads. Slower than k6 or Gatling for pure HTTP load generation. Less CI/CD tooling out of the box.',
                      verdict: 'Excellent for Python teams and complex test scenarios requiring rich data manipulation or custom protocol clients.',
                    },
                    {
                      name: 'Artillery',
                      tagline: 'Best for teams wanting a YAML-first, config-driven approach',
                      pro: 'YAML test definitions are readable by non-engineers. npm package — trivially added to any Node.js project. Built-in support for WebSocket and Socket.io. Serverless execution via AWS Lambda for massive distributed load without managing servers.',
                      con: 'YAML can become verbose for complex scenarios. Less community content than k6 or JMeter. Cloud execution features require paid tier.',
                      verdict: 'Great for teams that want simple, readable test definitions and serverless execution. Ideal for WebSocket and real-time API testing.',
                    },
                    {
                      name: 'Gatling',
                      tagline: 'Best for Java/Scala teams needing the highest single-node VU density',
                      pro: 'Asynchronous Netty-based engine — highest VU-per-core ratio among JVM tools. Excellent HTML reports with detailed percentile charts. Strong HTTP/2 support. Type-safe DSL in Scala/Kotlin catches scripting errors at compile time.',
                      con: 'Scala/Kotlin DSL has a learning curve. Slower to iterate than k6. Advanced features (distributed execution, CI dashboards) require Gatling Enterprise (paid).',
                      verdict: 'Top choice for JVM teams and any scenario where you need maximum VU density on a small number of machines.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '22px' }}>
                      <div style={{ fontWeight: 700, color: G, fontSize: '1.05rem', marginBottom: '4px' }}>{item.name}</div>
                      <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600, marginBottom: '14px' }}>{item.tagline}</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: G, fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strengths</div>
                          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem', lineHeight: 1.6, margin: 0 }}>{item.pro}</p>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Limitations</div>
                          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem', lineHeight: 1.6, margin: 0 }}>{item.con}</p>
                        </div>
                      </div>
                      <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: '6px', padding: '10px 14px', fontSize: '0.87rem' }}>
                        <strong style={{ color: G }}>Verdict: </strong><span style={{ color: 'rgba(255,255,255,0.65)' }}>{item.verdict}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 4: KEY METRICS ── */}
              <section id="key-metrics" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Key Metrics &amp; SLOs
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Collecting data is not the hard part — knowing which numbers matter and what targets to set is. These are the seven metrics every load test should capture, plus industry-standard thresholds to guide your SLO definitions.
                </p>

                <div data-reveal style={{ overflowX: 'auto', marginBottom: '32px' }}>
                  <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.87rem' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left' }}>Metric</th>
                        <th style={{ textAlign: 'left' }}>Definition</th>
                        <th style={{ textAlign: 'left' }}>Good Threshold</th>
                        <th style={{ textAlign: 'left' }}>Warning Sign</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['RPS / TPS', 'Requests (or transactions) per second processed by the system', '≥ target throughput at peak load', 'RPS plateaus or drops while errors rise'],
                        ['p50 Latency (Median)', '50th percentile response time — what the typical user experiences', '< 100ms for APIs, < 500ms for web pages', 'Above 200ms for simple read APIs'],
                        ['p95 Latency', '95% of requests complete within this time', '< 300ms for APIs, < 1s for web pages', 'Above 1s for any user-facing endpoint'],
                        ['p99 Latency', '99% of requests complete within this time — exposes tail latency', '< 500ms for APIs, < 2s for web pages', 'Above 2s for critical paths'],
                        ['Error Rate', 'Percentage of requests returning 4xx/5xx responses', '< 0.1% under normal load, < 1% under peak', 'Any sustained error rate above 0.5%'],
                        ['Throughput', 'Total data transferred per second (KB/s or MB/s)', 'Stable across test duration at target load', 'Degrading throughput with rising latency'],
                        ['Virtual Users (VUs)', 'Concurrent simulated users making requests', 'Matches or exceeds your peak concurrency target', 'System instability before reaching VU target'],
                      ].map(([metric, def, good, warn], i) => (
                        <tr key={i}>
                          <td><strong style={{ color: '#fff' }}>{metric}</strong></td>
                          <td style={{ color: 'rgba(255,255,255,0.65)' }}>{def}</td>
                          <td style={{ color: G, fontSize: '0.83rem' }}>{good}</td>
                          <td style={{ color: '#f87171', fontSize: '0.83rem' }}>{warn}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>Setting SLOs From Load Test Data</h3>
                <div data-reveal style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                  {[
                    {
                      title: 'Define objectives before running tests',
                      desc: 'Write down your SLO targets before you see any data. If you set targets after seeing results, you are rationalizing, not measuring. Example: "The checkout API must serve p99 latency under 400ms at 500 concurrent users with error rate below 0.1%."',
                    },
                    {
                      title: 'Separate read and write endpoints',
                      desc: 'GET /products and POST /orders have very different performance characteristics. Track them separately. Aggregating all endpoints into one average hides the endpoints that matter most — usually writes and search.',
                    },
                    {
                      title: 'Measure at the 95th and 99th percentile, not average',
                      desc: 'Average latency is meaningless for user experience. A p50 of 50ms with a p99 of 5,000ms means 1 in 100 users waits 5 seconds — completely unacceptable, but invisible in averages.',
                    },
                    {
                      title: 'Use k6 thresholds to auto-fail CI builds',
                      desc: 'Define thresholds in your k6 script so the test exits with a non-zero code when SLOs are breached. This gates deployments in CI/CD without requiring manual analysis of every run.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `3px solid ${G}`, borderRadius: '8px', padding: '18px' }}>
                      <div style={{ fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{item.title}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 5: WRITING TESTS ── */}
              <section id="writing-tests" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Writing Load Test Scripts
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Below are production-ready script examples for k6, Artillery, and Locust — the three most commonly used tools in modern engineering teams.
                </p>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>k6 — Load Test with Thresholds and Stages</h3>
                <pre data-reveal><code>{`// k6 load test — e-commerce API
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '2m', target: 100 },   // Ramp up to 100 VUs
    { duration: '5m', target: 100 },   // Hold at 100 VUs (steady state)
    { duration: '2m', target: 500 },   // Spike to 500 VUs
    { duration: '5m', target: 500 },   // Hold at 500 VUs
    { duration: '2m', target: 0 },     // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<300', 'p(99)<500'], // SLO thresholds
    errors: ['rate<0.01'],                          // < 1% error rate
    http_req_failed: ['rate<0.01'],
  },
};

const BASE_URL = 'https://api.yourapp.com';

export function setup() {
  // Authenticate and return shared token
  const res = http.post(\`\${BASE_URL}/auth/login\`, JSON.stringify({
    email: 'loadtest@example.com',
    password: __ENV.LOAD_TEST_PASSWORD,
  }), { headers: { 'Content-Type': 'application/json' } });

  return { token: res.json('accessToken') };
}

export default function (data) {
  const headers = {
    'Authorization': \`Bearer \${data.token}\`,
    'Content-Type': 'application/json',
  };

  // Simulate user browsing products
  const productRes = http.get(\`\${BASE_URL}/products?page=1&limit=20\`, { headers });
  check(productRes, {
    'products status 200': (r) => r.status === 200,
    'products response time OK': (r) => r.timings.duration < 300,
  });
  errorRate.add(productRes.status !== 200);

  sleep(1);

  // View a specific product
  const productId = productRes.json('data')[0]?.id ?? 'prod_001';
  const detailRes = http.get(\`\${BASE_URL}/products/\${productId}\`, { headers });
  check(detailRes, { 'product detail 200': (r) => r.status === 200 });

  sleep(2);

  // Add to cart
  const cartRes = http.post(\`\${BASE_URL}/cart/items\`, JSON.stringify({
    productId,
    quantity: 1,
  }), { headers });
  check(cartRes, { 'add to cart 200': (r) => r.status === 200 });
  errorRate.add(cartRes.status !== 200);

  sleep(1);
}`}</code></pre>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>Artillery — YAML-Based API Test</h3>
                <pre data-reveal><code>{`# artillery.yml — API load test config
config:
  target: "https://api.yourapp.com"
  phases:
    - duration: 60     # seconds
      arrivalRate: 10  # new users per second
      name: Warm up
    - duration: 300
      arrivalRate: 50
      name: Sustained load
    - duration: 120
      arrivalRate: 200
      name: Peak spike
  defaults:
    headers:
      Content-Type: "application/json"
  variables:
    token: "{{ $env.LOAD_TEST_TOKEN }}"
  ensure:
    p99: 500      # fail if p99 exceeds 500ms
    maxErrorRate: 1  # fail if error rate > 1%

scenarios:
  - name: Browse and add to cart
    weight: 70  # 70% of traffic follows this scenario
    flow:
      - get:
          url: "/products?page=1"
          headers:
            Authorization: "Bearer {{ token }}"
          expect:
            - statusCode: 200
      - think: 2
      - post:
          url: "/cart/items"
          headers:
            Authorization: "Bearer {{ token }}"
          json:
            productId: "prod_001"
            quantity: 1
          expect:
            - statusCode: 200

  - name: Search only
    weight: 30
    flow:
      - get:
          url: "/search?q=laptop"
          headers:
            Authorization: "Bearer {{ token }}"
          expect:
            - statusCode: 200`}</code></pre>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>Locust — Python-Based Distributed Test</h3>
                <pre data-reveal><code>{`# locustfile.py — distributed load test
from locust import HttpUser, task, between, events
import random
import os

class EcommerceUser(HttpUser):
    wait_time = between(1, 3)  # Wait 1-3s between tasks
    token = None

    def on_start(self):
        """Authenticate before running tasks"""
        res = self.client.post("/auth/login", json={
            "email": "loadtest@example.com",
            "password": os.environ["LOAD_TEST_PASSWORD"],
        })
        self.token = res.json()["accessToken"]
        self.client.headers.update({"Authorization": f"Bearer {self.token}"})

    @task(5)
    def browse_products(self):
        """Most common action — weight 5"""
        page = random.randint(1, 10)
        with self.client.get(
            f"/products?page={page}&limit=20",
            name="/products [paginated]",
            catch_response=True
        ) as res:
            if res.status_code != 200:
                res.failure(f"Expected 200, got {res.status_code}")
            elif res.elapsed.total_seconds() > 0.5:
                res.failure(f"Too slow: {res.elapsed.total_seconds():.2f}s")

    @task(3)
    def search(self):
        """Search — weight 3"""
        terms = ["laptop", "phone", "headphones", "monitor"]
        q = random.choice(terms)
        self.client.get(f"/search?q={q}", name="/search")

    @task(2)
    def add_to_cart(self):
        """Add to cart — weight 2"""
        self.client.post("/cart/items", json={
            "productId": f"prod_{random.randint(1, 100):03d}",
            "quantity": random.randint(1, 3),
        }, name="/cart/items [POST]")

    @task(1)
    def checkout(self):
        """Checkout — weight 1 (least frequent)"""
        self.client.post("/orders", json={
            "paymentMethodId": "pm_test_visa",
        }, name="/orders [POST]")`}</code></pre>
              </section>

              {/* ── SECTION 6: TEST SCENARIOS ── */}
              <section id="test-scenarios" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Test Scenarios &amp; Strategies
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  A realistic test scenario is the difference between a load test that finds real problems and one that gives you false confidence. These strategies ensure your tests reflect actual user behavior.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
                  {[
                    {
                      title: 'Use Real User Session Flows',
                      desc: 'Record real user sessions from production using browser HAR files or API gateway logs and replay them. This captures the exact mix of endpoints, think times, and data patterns that real users exhibit — including the rare but expensive paths like checkout and search.',
                      tip: 'k6 supports HAR file conversion via the k6-har-converter package. Artillery supports HAR replay natively.',
                    },
                    {
                      title: 'Parameterize Test Data',
                      desc: 'Never use the same user ID, product ID, or search query for every virtual user. Static test data creates artificially hot cache entries and completely distorts database query performance. Use CSV data files or generated data to ensure each VU uses unique, realistic inputs.',
                      tip: 'Prepare a CSV with 10,000 rows of test user credentials, product IDs, and search terms. Feed each VU a unique row using SharedArray in k6.',
                    },
                    {
                      title: 'Model Realistic Traffic Distribution',
                      desc: 'Not all users do the same thing. In most e-commerce apps, 60–70% of users just browse, 20–30% search, and only 5–10% complete a purchase. Model this distribution using scenario weights so your API endpoints receive realistic relative load.',
                      tip: 'Use the scenarios object in k6 or the weight field in Artillery scenarios to control traffic distribution.',
                    },
                    {
                      title: 'Include Think Time',
                      desc: 'Real users pause between actions — they read a product description, type a search query, or hesitate before clicking buy. Including sleep() calls between requests (1–5 seconds, varying randomly) dramatically changes the concurrency model and produces more realistic connection pool and session management behavior.',
                      tip: 'Use between(1, 3) in Locust or sleep(Math.random() * 2 + 1) in k6 to vary think times.',
                    },
                    {
                      title: 'Warm Up the System Before Measuring',
                      desc: 'JIT compilation, cache warming, and connection pool establishment all happen during the first few minutes of a test. Treat the first 2–3 minutes as a warm-up period and exclude those data points from your SLO evaluation. k6 stages make this straightforward.',
                      tip: 'In k6, define a startVUs stage before your primary measurement stage. In Grafana dashboards, use time range selection to exclude warm-up data.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                      <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '8px' }}>{item.title}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 12px', fontSize: '0.92rem' }}>{item.desc}</p>
                      <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: '6px', padding: '10px 14px', fontSize: '0.85rem' }}>
                        <strong style={{ color: G }}>Pro tip: </strong><span style={{ color: 'rgba(255,255,255,0.55)' }}>{item.tip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 7: CI/CD INTEGRATION ── */}
              <section id="cicd-integration" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  CI/CD Integration
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  The highest-value change you can make to your load testing practice is running tests automatically in your deployment pipeline. A test that only runs manually before quarterly releases catches problems weeks too late.
                </p>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>GitHub Actions — k6 Load Test on Every Pull Request</h3>
                <pre data-reveal><code>{`# .github/workflows/load-test.yml
name: Load Test

on:
  pull_request:
    branches: [main]
  workflow_dispatch:
    inputs:
      target_rps:
        description: 'Target requests per second'
        default: '100'

jobs:
  load-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Start staging environment
        run: |
          docker compose -f docker-compose.staging.yml up -d
          sleep 15  # Wait for services to be healthy

      - name: Run k6 load test
        uses: grafana/k6-action@v0.3.1
        with:
          filename: tests/load/smoke-test.js
          flags: --env BASE_URL=http://localhost:3000
        env:
          LOAD_TEST_PASSWORD: \${{ secrets.LOAD_TEST_PASSWORD }}

      - name: Upload results
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: load-test-results
          path: results/

      - name: Comment PR with results
        uses: actions/github-script@v7
        if: always()
        with:
          script: |
            const fs = require('fs');
            const summary = fs.readFileSync('results/summary.json', 'utf8');
            const data = JSON.parse(summary);
            const p99 = data.metrics.http_req_duration.values['p(99)'].toFixed(0);
            const errorRate = (data.metrics.http_req_failed.values.rate * 100).toFixed(2);
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: \`## Load Test Results\n- p99 latency: \${p99}ms\n- Error rate: \${errorRate}%\`,
            });`}</code></pre>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>Three-Tier Load Testing Strategy for CI/CD</h3>
                <div data-reveal style={{ display: 'grid', gap: '16px' }}>
                  {[
                    {
                      tier: 'Smoke Test (every PR)',
                      duration: '2–5 minutes',
                      vus: '5–10 VUs',
                      purpose: 'Verify the system does not crash under minimal load after every code change. Catches obvious regressions immediately. Fast enough to not slow down the PR review cycle.',
                      threshold: 'p99 < 1000ms, error rate < 1%',
                    },
                    {
                      tier: 'Load Test (staging, before deploy)',
                      duration: '15–30 minutes',
                      vus: 'Expected peak concurrency',
                      purpose: 'Validate SLO compliance at expected peak load before every production deployment. Should block deployment if thresholds are breached.',
                      threshold: 'p95 < 300ms, p99 < 500ms, error rate < 0.1%',
                    },
                    {
                      tier: 'Soak Test (weekly, overnight)',
                      duration: '4–8 hours',
                      vus: '50–70% of peak',
                      purpose: 'Detect memory leaks, connection pool exhaustion, and other time-dependent degradation. Run on a schedule rather than blocking deployments. Alert on-call if thresholds are breached.',
                      threshold: 'No error rate increase over time, no latency drift > 20%',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                        <div style={{ fontWeight: 700, color: G, fontSize: '1rem' }}>{item.tier}</div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                          <span style={{ fontSize: '0.8rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', padding: '2px 8px' }}>{item.duration}</span>
                          <span style={{ fontSize: '0.8rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', padding: '2px 8px' }}>{item.vus}</span>
                        </div>
                      </div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 10px', fontSize: '0.9rem' }}>{item.purpose}</p>
                      <div style={{ fontSize: '0.83rem', color: G }}>Threshold: <span style={{ color: 'rgba(255,255,255,0.55)' }}>{item.threshold}</span></div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 8: RESULTS INTERPRETATION ── */}
              <section id="results-interpretation" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Interpreting Results &amp; Finding Bottlenecks
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Raw numbers from a load test are a starting point, not an answer. The skill is reading the patterns and correlating metrics to identify root causes. Here are the most common failure patterns and how to diagnose them.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
                  {[
                    {
                      pattern: 'Latency increases linearly with VU count',
                      meaning: 'You are hitting a sequential bottleneck — typically a database query without an index, a lock contention issue, or a single-threaded queue processor.',
                      diagnose: 'EXPLAIN ANALYZE slow queries. Check lock wait times in your DB. Profile CPU usage per service — look for one process at 100%.',
                      fix: 'Add missing indexes. Optimize the hot query. Move sequential processing to a worker pool.',
                    },
                    {
                      pattern: 'Latency is fine but error rate spikes at high VU count',
                      meaning: 'Resource exhaustion — connection pool depleted, file descriptors maxed out, or queue full. Requests are being rejected rather than just slowed.',
                      diagnose: 'Check active DB connections vs pool size. Check open file descriptors (ulimit). Look for "connection refused" or "ECONNRESET" errors in logs.',
                      fix: 'Increase connection pool size. Raise OS ulimits. Add retry logic with backoff. Implement connection queuing.',
                    },
                    {
                      pattern: 'Latency spikes then recovers repeatedly (sawtooth pattern)',
                      meaning: 'Garbage collection pauses, periodic background jobs, or cache invalidation events causing cyclical latency spikes.',
                      diagnose: 'Correlate latency spikes with GC pause logs (JVM: -verbose:gc, Node.js: --expose-gc). Check cron job schedules. Monitor cache hit rate over time.',
                      fix: 'Tune GC settings. Move background jobs to off-peak. Stagger cache invalidation.',
                    },
                    {
                      pattern: 'Performance gradually degrades over time (soak test)',
                      meaning: 'Memory leak, connection leak, or disk fill. Resources consumed but never released, causing eventual failure.',
                      diagnose: 'Graph memory usage and heap size over time — should be flat, not steadily rising. Check open file descriptors and TCP connections over time. Monitor disk usage.',
                      fix: 'Find and fix the leak. Common culprits: unclosed database connections, event listeners not removed, log rotation not configured.',
                    },
                    {
                      pattern: 'Specific endpoints much slower than others at the same VU count',
                      meaning: 'The slow endpoints are doing more work — complex joins, external API calls, heavy computation, or missing cache.',
                      diagnose: 'Use distributed tracing (Jaeger, Tempo, Datadog APM) to break down latency by span. Which external call takes the longest? Which DB query is slowest?',
                      fix: 'Cache expensive computations. Optimize the specific DB query. Parallelize independent external API calls. Move heavy computation to async queues.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                      <div style={{ fontWeight: 700, color: '#fff', marginBottom: '8px', fontSize: '0.97rem' }}>{item.pattern}</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Meaning</div>
                          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{item.meaning}</p>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>How to Diagnose</div>
                          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{item.diagnose}</p>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: G, fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fix</div>
                          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{item.fix}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>k6 — Streaming Metrics to Grafana + Prometheus</h3>
                <pre data-reveal><code>{`# Run k6 and push metrics to Prometheus remote write
k6 run \\
  --out experimental-prometheus-rw \\
  --env K6_PROMETHEUS_RW_SERVER_URL=http://prometheus:9090/api/v1/write \\
  --env K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true \\
  tests/load/checkout.js

# Or output to InfluxDB for Grafana dashboards
k6 run \\
  --out influxdb=http://influxdb:8086/k6 \\
  tests/load/checkout.js

# Import the official k6 Grafana dashboard (ID: 2587)
# It shows RPS, p50/p95/p99 latency, error rate, VU count in real-time`}</code></pre>
              </section>

              {/* ── SECTION 9: CASE STUDY ── */}
              <section id="case-study" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Case Study: SaaS Platform Saves Black Friday
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  A B2C e-commerce SaaS serving 400+ merchant storefronts reached out to Codazz three weeks before Black Friday after their platform had gone down during the previous year&apos;s sale event. Here is what we found and fixed.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
                  {[
                    {
                      phase: 'Baseline Assessment',
                      findings: 'We ran a standard load test at 2x their estimated Black Friday peak (1,200 concurrent users). The checkout API hit p99 of 8,200ms at just 400 VUs — well before peak. The product search endpoint returned 502 errors at 600 VUs.',
                      color: '#f87171',
                    },
                    {
                      phase: 'Root Cause Analysis',
                      findings: 'Distributed tracing revealed three issues: (1) The checkout endpoint ran 23 sequential database queries due to an N+1 ORM problem — each query added ~35ms. (2) Product search used a LIKE %query% pattern with no full-text index — full table scans at scale. (3) The Node.js API had a database connection pool of just 5 connections, shared across all 16 worker processes.',
                      color: '#fbbf24',
                    },
                    {
                      phase: 'Fixes Implemented',
                      findings: 'We batched the 23 ORM queries into 3 optimized joins (checkout p99 dropped from 8,200ms to 180ms). Added PostgreSQL full-text search with GIN index (search p99 dropped from timeout to 45ms). Increased connection pool to 25 per process and added PgBouncer for connection multiplexing.',
                      color: G,
                    },
                    {
                      phase: 'Black Friday Results',
                      findings: 'The platform handled 2,800 concurrent users at peak — 2.3x the previous year\'s traffic — with p99 latency of 210ms and 0.03% error rate. Zero downtime. The merchant reported a 340% increase in Black Friday GMV vs the prior year.',
                      color: G,
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `3px solid ${item.color}`, borderRadius: '8px', padding: '20px' }}>
                      <div style={{ fontWeight: 700, color: item.color, marginBottom: '8px' }}>{item.phase}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0, fontSize: '0.92rem' }}>{item.findings}</p>
                    </div>
                  ))}
                </div>

                <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
                  {[
                    { label: 'Checkout p99 latency', before: '8,200ms', after: '180ms' },
                    { label: 'Search p99 latency', before: 'Timeout', after: '45ms' },
                    { label: 'Peak concurrent users', before: '400 (crashing)', after: '2,800 (stable)' },
                    { label: 'Error rate at peak', before: '~12%', after: '0.03%' },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                      <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>{item.before}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>→</div>
                      <div style={{ color: G, fontWeight: 700, fontSize: '1.2rem' }}>{item.after}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FAQ ── */}
              <section id="faq" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '24px' }}>
                  Frequently Asked Questions
                </h2>
                <div data-reveal style={{ display: 'grid', gap: '12px' }}>
                  {faqItems.map((item, i) => (
                    <div key={i} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        className="faq-btn"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{ width: '100%', textAlign: 'left', background: 'rgba(255,255,255,0.03)', border: 'none', padding: '18px 20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
                      >
                        <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.97rem', lineHeight: 1.4 }}>{item.q}</span>
                        <span style={{ color: G, fontSize: '1.3rem', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                      </button>
                      {openFaq === i && (
                        <div style={{ padding: '0 20px 18px', background: 'rgba(255,255,255,0.01)' }}>
                          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0, fontSize: '0.92rem' }}>{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ── CTA ── */}
              <section data-reveal style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px' }}>
                  Need Help Load Testing Your Application?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '560px', margin: '0 auto 28px' }}>
                  Codazz engineers have run load tests for SaaS platforms, fintech APIs, and e-commerce sites — and fixed the bottlenecks that tests reveal. Let us pressure-test your system before your users do.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-block', background: G, color: '#000', fontWeight: 700, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.97rem' }}>
                    Book a Free Consultation
                  </Link>
                  <Link href="/services" style={{ display: 'inline-block', border: `1px solid ${G}`, color: G, fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.97rem' }}>
                    View Our Services
                  </Link>
                </div>
              </section>

            </article>

            {/* ── SIDEBAR ── */}
            <aside className="sidebar" style={{ position: 'sticky', top: '100px' }}>

              {/* TOC */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Table of Contents</div>
                <nav style={{ display: 'grid', gap: '4px' }}>
                  {tocSections.map(({ id, label }) => (
                    <button
                      key={id}
                      className="toc-link"
                      onClick={() => scrollTo(id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        borderLeft: `2px solid ${activeSection === id ? G : 'rgba(255,255,255,0.1)'}`,
                        padding: '6px 12px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: activeSection === id ? G : 'rgba(255,255,255,0.55)',
                        fontSize: '0.85rem',
                        lineHeight: 1.4,
                        fontWeight: activeSection === id ? 600 : 400,
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Related Posts */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Related Articles</div>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {relatedPosts.map((post, i) => (
                    <Link key={i} href={post.href} style={{ textDecoration: 'none', display: 'block', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.2s' }}>
                      <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600, lineHeight: 1.4, marginBottom: '4px' }}>{post.title}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: '8px', fontSize: '0.97rem' }}>Ready to Ship Faster?</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>Let Codazz build and load-test your next product.</p>
                <Link href="/contact" style={{ display: 'block', background: G, color: '#000', fontWeight: 700, padding: '11px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Get a Free Quote
                </Link>
              </div>
            </aside>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
