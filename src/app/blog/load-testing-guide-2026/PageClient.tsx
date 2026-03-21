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
  { id: 'test-types', label: 'Types of Performance Tests', emoji: '📊' },
  { id: 'tool-comparison', label: 'k6 vs JMeter vs Locust vs Artillery', emoji: '⚖️' },
  { id: 'k6-scripts', label: 'Writing k6 Scripts', emoji: '✍️' },
  { id: 'key-metrics', label: 'Key Metrics: Throughput & Latency', emoji: '📈' },
  { id: 'bottlenecks', label: 'Finding Bottlenecks', emoji: '🔍' },
  { id: 'cicd-integration', label: 'CI/CD Integration', emoji: '🔄' },
  { id: 'cloud-load-testing', label: 'Cloud Load Testing', emoji: '☁️' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'aws-architecture-guide-2026', title: 'AWS Architecture Best Practices 2026', category: 'Cloud', readTime: '22 min' },
  { slug: 'microservices-vs-monolith-2026', title: 'Microservices vs Monolith 2026', category: 'Architecture', readTime: '18 min' },
  { slug: 'cicd-pipeline-guide-2026', title: 'CI/CD Pipeline Guide 2026', category: 'DevOps', readTime: '19 min' },
];

export default function LoadTestingGuide2026Client() {
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
              src="/blog_images/load-testing-guide-2026.jpg"
              alt="Load testing guide 2026 with k6 JMeter performance testing best practices"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 28px)',
              }}
            />
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(40px, 8vw, 80px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
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
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>Performance Testing</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
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
                20 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Load Testing Guide 2026: k6, JMeter &amp; Performance Testing Best Practices
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A complete guide to performance testing in 2026. Covers every test type (load, stress, spike, soak, volume), compares k6 vs JMeter vs Locust vs Artillery, teaches you to write real k6 scripts, interpret p95 latency, find database and API bottlenecks, integrate into CI/CD, and scale with cloud platforms.
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
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#22c55e',
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
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
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
                    Your app passed unit tests, integration tests, and a manual QA pass. Then you launched — and the database fell over at 500 concurrent users. Load testing is the discipline that prevents this exact scenario, and in 2026 the tools have never been better.
                  </p>
                  <p>
                    The difference between a system that survives a viral moment and one that collapses is nearly always discovered (or not discovered) during pre-production performance testing. Netflix, Shopify, and Stripe all run thousands of load tests per week. Most startups run zero until something breaks in production.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we embed load testing into every production launch — this guide shares exactly how we do it.
                  </p>
                </div>

                {/* Section: Test Types */}
                <h2 id="test-types" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Types of Performance Tests</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    Performance testing is not a single test — it is a family of test types, each designed to answer a different question about your system. Using only load tests is like checking only blood pressure during a physical. Here are the five test types every team should know:
                  </p>
                </div>

                <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 40 }}>
                  {[
                    {
                      type: 'Load Test',
                      color: '#22c55e',
                      question: 'Can the system handle expected peak traffic?',
                      description: 'Ramp users up to your expected peak (e.g. 1,000 concurrent), hold for 20–30 minutes, then ramp down. Validates that SLAs are met under normal peak conditions.',
                      metrics: ['p95 latency < 500ms', 'Error rate < 0.1%', 'Throughput meets target RPS'],
                    },
                    {
                      type: 'Stress Test',
                      color: '#f59e0b',
                      question: 'Where does the system break?',
                      description: 'Keep increasing load beyond expected peak until the system fails. Finds the breaking point, reveals which component fails first, and validates that failure is graceful (circuit breakers, queue overflow, not data corruption).',
                      metrics: ['Breaking point VUs', 'Failure mode (graceful vs crash)', 'Recovery time after overload'],
                    },
                    {
                      type: 'Spike Test',
                      color: '#3b82f6',
                      question: 'Can the system handle sudden traffic bursts?',
                      description: 'Go from 100 to 5,000 users in 30 seconds, then back to 100. Simulates viral moments, flash sales, or DDoS patterns. Tests auto-scaling speed and connection pool resilience.',
                      metrics: ['Time to scale out', 'Error rate during spike', 'Recovery speed post-spike'],
                    },
                    {
                      type: 'Soak Test',
                      color: '#8b5cf6',
                      question: 'Does the system degrade over time?',
                      description: 'Run moderate load (60–80% of peak) for 12–24 hours. Finds memory leaks, connection pool exhaustion, growing database query times, and disk fill-up issues that only appear over extended periods.',
                      metrics: ['Memory growth over time', 'DB connection count drift', 'P95 latency trend over hours'],
                    },
                    {
                      type: 'Volume Test',
                      color: '#ec4899',
                      question: 'Does the system degrade with large data sets?',
                      description: 'Test with production-scale data volumes — millions of rows, large payloads, deep pagination. Reveals N+1 query problems, missing indexes, and full-table scans that do not appear with small test data.',
                      metrics: ['Query time at 1M vs 10M rows', 'Payload size impact', 'Pagination performance'],
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                      border: `1px solid ${item.color}22`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <span style={{
                          fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                          color: item.color, background: `${item.color}15`, padding: '4px 12px', borderRadius: 100,
                        }}>{item.type}</span>
                      </div>
                      <p style={{ color: '#ffffff', fontWeight: 600, fontSize: 16, margin: '0 0 8px' }}>{item.question}</p>
                      <p style={{ fontSize: 14, margin: '0 0 16px', lineHeight: 1.7 }}>{item.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {item.metrics.map((m, j) => (
                          <span key={j} style={{
                            fontSize: 12, color: item.color, background: `${item.color}10`,
                            padding: '4px 10px', borderRadius: 8, fontFamily: 'monospace',
                          }}>{m}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section: Tool Comparison */}
                <h2 id="tool-comparison" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>k6 vs JMeter vs Locust vs Artillery</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    The load testing tool landscape in 2026 has four serious contenders. Each has distinct strengths. Here is an honest comparison so you can pick the right one for your stack, team, and use case:
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14 }}>Tool</th>
                          <th style={{ textAlign: 'left', padding: '12px 10px', color: '#22c55e', fontSize: 14 }}>Language</th>
                          <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14 }}>Max VUs</th>
                          <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14 }}>CI/CD</th>
                          <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14 }}>Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['k6', 'JavaScript/TypeScript', '50,000+', 'Native', 'Developers, API testing, CI/CD'],
                          ['JMeter', 'Java (GUI + XML)', '~10,000', 'Plugin required', 'QA teams, legacy enterprises'],
                          ['Locust', 'Python', '~20,000', 'Good (CLI-first)', 'Python teams, custom protocols'],
                          ['Artillery', 'YAML + JavaScript', '~5,000', 'Excellent (serverless)', 'Serverless, quick YAML tests'],
                        ].map(([tool, lang, vus, ci, bestFor], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 10px', color: '#22c55e', fontWeight: 700 }}>{tool}</td>
                            <td style={{ padding: '12px 10px', fontFamily: 'monospace', fontSize: 13 }}>{lang}</td>
                            <td style={{ padding: '12px 10px', textAlign: 'center' }}>{vus}</td>
                            <td style={{ padding: '12px 10px', fontSize: 13 }}>{ci}</td>
                            <td style={{ padding: '12px 10px', fontSize: 13 }}>{bestFor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 24, marginBottom: 40,
                  border: '1px solid rgba(34,197,94,0.15)',
                }}>
                  <h4 style={{ color: '#22c55e', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Our Recommendation</h4>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                    <strong style={{ color: '#ffffff' }}>Start with k6.</strong> It uses JavaScript/TypeScript (no new language to learn for most teams), runs as a single binary with zero dependencies, generates detailed terminal output and HTML reports, has native Grafana Cloud integration, and runs inside GitHub Actions without any plugins. JMeter is still the enterprise choice where you need GUI-driven test creation or protocol diversity (JMS, LDAP, SMTP). Locust wins if your team is Python-first and you need complex custom behaviour. Artillery is excellent if you are already serverless-heavy and want YAML-first test definitions.
                  </p>
                </div>

                {/* Section: k6 Scripts */}
                <h2 id="k6-scripts" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Writing k6 Scripts</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    k6 tests are plain JavaScript files. A test has three parts: options (VU count, duration, thresholds), setup (optional data prep), and default function (the scenario each virtual user runs). Here is a complete, production-ready k6 script for API load testing:
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Complete k6 Load Test Script</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// load-test.js — Production-ready k6 load test
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('error_rate');
const authDuration = new Trend('auth_duration', true);

export const options = {
  stages: [
    { duration: '2m', target: 100 },   // Ramp up to 100 VUs
    { duration: '10m', target: 100 },  // Hold at 100 VUs (steady state)
    { duration: '5m', target: 500 },   // Ramp up to peak
    { duration: '10m', target: 500 },  // Hold at peak
    { duration: '3m', target: 0 },     // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1500'],
    http_req_failed: ['rate<0.01'],
    error_rate: ['rate<0.01'],
    auth_duration: ['p(95)<200'],
  },
};

const BASE_URL = __ENV.BASE_URL || 'https://api.example.com';

export function setup() {
  const res = http.post(\`\${BASE_URL}/auth/login\`, JSON.stringify({
    email: 'loadtest@example.com',
    password: 'TestPassword123!',
  }), { headers: { 'Content-Type': 'application/json' } });

  check(res, { 'setup: login success': r => r.status === 200 });
  return { token: res.json('token') };
}

export default function (data) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': \`Bearer \${data.token}\`,
  };

  // Auth endpoint
  const loginStart = Date.now();
  const authRes = http.post(\`\${BASE_URL}/auth/refresh\`, null, { headers });
  authDuration.add(Date.now() - loginStart);

  const authOk = check(authRes, {
    'auth: status 200': r => r.status === 200,
    'auth: has token': r => r.json('token') !== undefined,
  });
  errorRate.add(!authOk);
  sleep(1);

  // Products list
  const listRes = http.get(\`\${BASE_URL}/products?page=1&limit=20\`, { headers });
  const listOk = check(listRes, {
    'products: status 200': r => r.status === 200,
    'products: has items': r => r.json('items')?.length > 0,
  });
  errorRate.add(!listOk);
  sleep(2);

  // Single product (randomised)
  const productId = Math.floor(Math.random() * 1000) + 1;
  const detailRes = http.get(\`\${BASE_URL}/products/\${productId}\`, { headers });
  check(detailRes, {
    'product detail: 200 or 404': r => [200, 404].includes(r.status),
  });
  sleep(1);
}`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Spike Test Configuration</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// spike-test.js — Simulates a viral traffic burst
export const options = {
  stages: [
    { duration: '1m', target: 50 },     // Normal baseline
    { duration: '30s', target: 5000 },  // SPIKE: 100x in 30 seconds
    { duration: '3m', target: 5000 },   // Hold the spike
    { duration: '1m', target: 50 },     // Recover back to normal
    { duration: '2m', target: 50 },     // Verify recovery (no degradation)
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.05'],
  },
};`}</pre>
                  </div>
                </div>

                {/* Section: Key Metrics */}
                <h2 id="key-metrics" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Key Metrics: Throughput, p95 Latency &amp; Error Rate</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    A load test generates dozens of metrics. Most teams look at average response time and miss the real signal. Here are the metrics that actually matter and how to interpret them:
                  </p>
                </div>

                <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 40 }}>
                  {[
                    {
                      metric: 'Throughput (RPS)',
                      color: '#22c55e',
                      good: '> target RPS without errors',
                      bad: 'RPS plateaus while latency rises',
                      explain: 'Requests per second your system handles successfully. When RPS stops growing even as you add VUs, you have found your saturation point. This is your system ceiling — not a bug, just physics.',
                    },
                    {
                      metric: 'p95 Latency',
                      color: '#3b82f6',
                      good: '< 500ms for APIs, < 2s for pages',
                      bad: '> 1s (API) or > 3s (pages)',
                      explain: 'The response time that 95% of your requests complete within. Always use p95/p99 — never average. Average latency hides the long tail. If your average is 200ms but p99 is 8s, 1 in 100 users waits 8 seconds. That is a real UX problem.',
                    },
                    {
                      metric: 'Error Rate',
                      color: '#f59e0b',
                      good: '< 0.1% at target load',
                      bad: '> 1% (investigate immediately)',
                      explain: 'The percentage of requests returning 5xx or connection errors. Under normal load, error rate should be near zero. Errors under load usually signal database connection pool exhaustion, memory pressure, or downstream service timeouts.',
                    },
                    {
                      metric: 'Apdex Score',
                      color: '#8b5cf6',
                      good: '> 0.9 (excellent)',
                      bad: '< 0.7 (unacceptable)',
                      explain: 'Application Performance Index: a standard score from 0–1 based on your latency targets. Requests within T are "satisfied" (1.0), within 4T are "tolerating" (0.5), beyond are "frustrated" (0). Set T = your SLA threshold (usually 500ms for APIs).',
                    },
                    {
                      metric: 'Virtual Users (VUs)',
                      color: '#ec4899',
                      good: 'Matches real concurrent user count',
                      bad: 'Too high: saturates before real traffic would',
                      explain: 'Each VU represents one concurrent user executing your scenario. 1,000 VUs does not equal 1,000 RPS. With 1s think time between requests, 1,000 VUs generates ~500 RPS. Model VU count based on your real concurrency, not total daily users.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                      border: `1px solid ${item.color}22`,
                    }}>
                      <h3 style={{ color: item.color, fontSize: 18, fontWeight: 700, margin: '0 0 12px' }}>{item.metric}</h3>
                      <p style={{ fontSize: 14, margin: '0 0 12px', lineHeight: 1.7 }}>{item.explain}</p>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 12, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '4px 10px', borderRadius: 8 }}>
                          Good: {item.good}
                        </span>
                        <span style={{ fontSize: 12, color: '#ef4444', background: 'rgba(239,68,68,0.1)', padding: '4px 10px', borderRadius: 8 }}>
                          Bad: {item.bad}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section: Bottlenecks */}
                <h2 id="bottlenecks" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Finding Bottlenecks: DB vs API vs CDN</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    High latency under load has a root cause. The debugging workflow is systematic: start at the top of the stack and narrow down. Here is how to identify whether your bottleneck is the database, API server, CDN, or network layer.
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {[
                      {
                        step: '1',
                        title: 'Check API server CPU and memory first',
                        detail: 'If CPU > 80% under load, your bottleneck is compute. Scale horizontally (add instances) or profile the hot path to find O(n²) loops and synchronous blocking. If memory grows monotonically during a soak test, you have a memory leak.',
                        color: '#22c55e',
                      },
                      {
                        step: '2',
                        title: 'Check database connection pool saturation',
                        detail: 'If API CPU is fine but latency is high, look at your DB. Check pg_stat_activity (PostgreSQL) or SHOW PROCESSLIST (MySQL). If connection count is at max pool size, add pgBouncer or increase pool size. This is the #1 bottleneck we find in production systems.',
                        color: '#f59e0b',
                      },
                      {
                        step: '3',
                        title: 'Check slow queries with EXPLAIN ANALYZE',
                        detail: 'If DB connections are fine but DB response times are high, run EXPLAIN ANALYZE on your slowest queries. Sequential scans on large tables, N+1 query patterns, and missing indexes are the three most common culprits.',
                        color: '#3b82f6',
                      },
                      {
                        step: '4',
                        title: 'Check external API and downstream service latency',
                        detail: 'Add OpenTelemetry distributed tracing. If your API is waiting on a payment gateway or third-party service, add circuit breakers (fail fast when downstream is slow) and timeouts. Never let an upstream dependency take your service down.',
                        color: '#8b5cf6',
                      },
                      {
                        step: '5',
                        title: 'Check CDN hit rate for static assets',
                        detail: 'If static asset requests have high latency, check your CDN hit rate in CloudFront or Cloudflare. A hit rate below 80% means you are not caching effectively. Add cache-control headers and consider edge caching for API responses where possible.',
                        color: '#ec4899',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.06)',
                        display: 'flex', gap: 20,
                      }}>
                        <div style={{
                          fontSize: 24, fontWeight: 800, color: item.color,
                          lineHeight: 1, minWidth: 36, flexShrink: 0,
                        }}>{item.step}</div>
                        <div>
                          <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0, fontSize: 16 }}>{item.title}</h4>
                          <p style={{ fontSize: 14, margin: 0, lineHeight: 1.7 }}>{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: CI/CD Integration */}
                <h2 id="cicd-integration" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>CI/CD Integration</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    The best load tests are the ones that run automatically on every deployment. Here is how to integrate k6 into GitHub Actions so performance regressions are caught before they reach production:
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>GitHub Actions: k6 in CI/CD Pipeline</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# .github/workflows/load-test.yml
name: Load Tests

on:
  push:
    branches: [main, staging]
  pull_request:
    branches: [main]

jobs:
  load-test:
    runs-on: ubuntu-latest
    environment: staging

    steps:
      - uses: actions/checkout@v4

      - name: Wait for deployment
        run: sleep 30

      - name: Run k6 smoke test (every PR)
        uses: grafana/k6-action@v0.3.1
        with:
          filename: tests/smoke-test.js
        env:
          BASE_URL: \${{ secrets.STAGING_URL }}

      - name: Run k6 load test (main branch only)
        if: github.ref == 'refs/heads/main'
        uses: grafana/k6-action@v0.3.1
        with:
          filename: tests/load-test.js
          flags: --out cloud
        env:
          BASE_URL: \${{ secrets.STAGING_URL }}
          K6_CLOUD_TOKEN: \${{ secrets.K6_CLOUD_TOKEN }}

      - name: Upload HTML report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: k6-report
          path: k6-report.html`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 24, marginBottom: 40,
                  border: '1px solid rgba(34,197,94,0.15)',
                }}>
                  <h4 style={{ color: '#22c55e', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>CI/CD Load Testing Strategy</h4>
                  <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15, lineHeight: 1.8 }}>
                    <li><strong style={{ color: '#ffffff' }}>Every PR:</strong> Smoke test (10 VUs, 1 minute) — catch hard crashes fast</li>
                    <li><strong style={{ color: '#ffffff' }}>Every merge to main:</strong> Full load test (target peak VUs, 20 minutes)</li>
                    <li><strong style={{ color: '#ffffff' }}>Nightly:</strong> Soak tests (8+ hours) to detect memory leaks</li>
                    <li><strong style={{ color: '#ffffff' }}>Pre-release:</strong> Stress tests to find the new breaking point after each major feature</li>
                  </ul>
                </div>

                {/* Section: Cloud Load Testing */}
                <h2 id="cloud-load-testing" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Cloud Load Testing: BlazeMeter &amp; k6 Cloud</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    Running 10,000+ VUs from a single machine is impractical — you would be testing your CI machine&apos;s network card, not your server. Cloud load testing platforms distribute your test across multiple nodes in multiple regions, generating realistic global traffic patterns.
                  </p>
                </div>

                <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 40 }}>
                  {[
                    {
                      name: 'Grafana k6 Cloud',
                      badge: 'Best for k6 users',
                      badgeColor: '#22c55e',
                      pricing: 'Free: 50 VU-hours/month. Pro: ~$49/month',
                      highlights: [
                        'Native k6 script execution in the cloud',
                        'Multi-region load injection (20+ regions)',
                        'Real-time dashboards in Grafana',
                        'GitHub Actions: 1 flag (--out cloud)',
                        'Baseline comparison to catch regressions',
                      ],
                      best: 'Teams already using k6 locally who want to scale to 100k+ VUs',
                    },
                    {
                      name: 'BlazeMeter',
                      badge: 'Best for JMeter teams',
                      badgeColor: '#f59e0b',
                      pricing: 'Free: 50 concurrent users. Plans from $99/month',
                      highlights: [
                        'Run JMeter scripts in cloud without local JMeter',
                        'Supports k6, Gatling, Selenium, and more',
                        'Enterprise reporting and SLA tracking',
                        'CI/CD plugins for Jenkins, Azure DevOps, Bamboo',
                        'APM integrations: Dynatrace, New Relic, Datadog',
                      ],
                      best: 'Enterprise QA teams migrating JMeter scripts to cloud',
                    },
                    {
                      name: 'AWS Distributed Load Testing',
                      badge: 'Best for AWS-native teams',
                      badgeColor: '#3b82f6',
                      pricing: 'Pay-as-you-go (~$0.01/VU-hour on Fargate)',
                      highlights: [
                        'Deploys Taurus/JMeter workers in your own AWS account',
                        'No data leaves your environment (compliance-friendly)',
                        'CloudFormation template for easy setup',
                        'Integrates with CloudWatch for result analysis',
                        'Scales to 500+ worker containers automatically',
                      ],
                      best: 'Teams with strict data residency requirements or existing AWS footprint',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                      border: `1px solid ${item.badgeColor}22`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                        <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 700, margin: 0 }}>{item.name}</h3>
                        <span style={{
                          fontSize: 11, fontWeight: 700, color: item.badgeColor,
                          background: `${item.badgeColor}15`, padding: '3px 10px', borderRadius: 100,
                          letterSpacing: '0.08em',
                        }}>{item.badge}</span>
                      </div>
                      <p style={{ fontSize: 13, color: '#22c55e', margin: '0 0 12px', fontFamily: 'monospace' }}>{item.pricing}</p>
                      <ul style={{ paddingLeft: 20, margin: '0 0 12px', fontSize: 14, lineHeight: 1.8 }}>
                        {item.highlights.map((h, j) => <li key={j}>{h}</li>)}
                      </ul>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                        <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Best for:</strong> {item.best}
                      </p>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  {
                    q: 'How many virtual users should I use in a load test?',
                    a: 'Match your expected peak concurrent users, not your total daily users. If you have 50,000 daily active users and your average session is 10 minutes, your peak concurrency is roughly 350 concurrent users. Run your load test at 1× peak (baseline), 2× peak (stress), and 10× peak (spike). For brand new products, start with 100–500 VUs and observe which resources saturate first.',
                  },
                  {
                    q: 'What is the difference between p95 and average response time?',
                    a: 'Average response time hides outliers. If 95 requests complete in 100ms and 5 take 10 seconds, your average is ~595ms but p95 is 100ms and p99 is 10s. The 5 users who waited 10 seconds will bounce and never return. Always set SLA thresholds on p95 and p99, never average. A good target: p95 < 500ms, p99 < 2s under peak load.',
                  },
                  {
                    q: 'Should I load test in production or staging?',
                    a: 'Both, for different reasons. Staging first: catch bugs and obvious performance issues before they impact real users. Production occasionally: with careful safeguards (start with low VU counts, monitor in real-time, have a kill switch). Staging environments often have smaller instance sizes, so production load tests are the only way to validate real-world behaviour.',
                  },
                  {
                    q: 'How do I load test WebSocket connections and real-time features?',
                    a: 'k6 has native WebSocket support via the k6/ws module. Each VU maintains one persistent WebSocket connection, so 1,000 VUs equals 1,000 concurrent WebSocket connections. Watch your server file descriptor limit (ulimit -n) — the default 1,024 on Linux will be your bottleneck. Increase to 65,535+ for WebSocket load tests.',
                  },
                  {
                    q: 'What is a good p95 latency target for APIs in 2026?',
                    a: 'Industry benchmarks in 2026: read APIs (GET /products) should target p95 < 200ms; write APIs (POST /orders) p95 < 500ms; authentication endpoints p95 < 100ms; search with full-text p95 < 800ms; file upload/processing p95 < 5s. Amazon found that every 100ms of latency reduces conversion by 1% — use this to justify the engineering time for performance work.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 28, padding: 40, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Need Help Setting Up Load Testing for Your App?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
                    We&apos;ll design and implement a complete performance testing suite — load, stress, spike, and soak tests — integrated into your CI/CD pipeline with real-time dashboards.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '16px 32px', borderRadius: 12,
                    fontWeight: 700, textDecoration: 'none', fontSize: 16,
                    transition: 'transform 0.2s',
                  }}>
                    Get a Free Performance Audit
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 0', fontSize: 14,
                          color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          display: 'block', padding: 16,
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: 12, textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.06)',
                          transition: 'all 0.2s',
                        }}>
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
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
