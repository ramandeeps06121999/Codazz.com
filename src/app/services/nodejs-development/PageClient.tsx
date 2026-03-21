'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import HeroBackground from '@/components/HeroBackground';


/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const heroStats = [
  { value: '300+', label: 'Node.js Projects' },
  { value: '10M+', label: 'Daily API Requests' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '4.9', label: 'Clutch Rating', suffix: '★' },
];

const awards = [
  'Clutch Top Node.js Company 2026',
  'AWS Advanced Tier Partner',
  'SOC 2 Type II Certified',
  'Clutch Top Backend Development 2026',
  'ISO 27001 Certified',
  'Google Cloud Partner',
  'Top Backend Company - GoodFirms',
  'Node.js Foundation Member',
];

const services = [
  {
    title: 'REST API Development',
    tag: 'API Engineering',
    desc: 'Scalable, versioned REST APIs built with Express or Fastify. We follow OpenAPI 3.1 specifications, implement rate limiting, JWT/OAuth2 authentication, comprehensive error handling, and auto-generate Swagger documentation. APIs that your mobile and web clients love to consume.',
    chips: ['Express', 'Fastify', 'OpenAPI 3.1', 'JWT', 'Swagger', 'Redis Rate Limiting'],
    icon: '🔌',
  },
  {
    title: 'Microservices Architecture',
    tag: 'Microservices',
    desc: 'Decompose your monolith into independently deployable Node.js microservices with well-defined boundaries. We design event-driven architectures using RabbitMQ or Kafka, implement the saga pattern for distributed transactions, and containerize services with Docker and Kubernetes.',
    chips: ['NestJS', 'RabbitMQ', 'Kafka', 'Docker', 'Kubernetes', 'Service Mesh'],
    icon: '🔷',
  },
  {
    title: 'Real-Time Applications',
    tag: 'Real-Time',
    desc: "Node.js's event-driven architecture makes it the natural choice for real-time systems. We build chat applications, live dashboards, collaborative editing tools, multiplayer game backends, and notification systems with Socket.io and WebSockets, handling 50,000+ concurrent connections on a single server.",
    chips: ['Socket.io', 'WebSockets', 'Redis Pub/Sub', 'Server-Sent Events', 'MQTT'],
    icon: '⚡',
  },
  {
    title: 'GraphQL APIs',
    tag: 'GraphQL',
    desc: 'Type-safe GraphQL APIs with Apollo Server or Pothos. We implement DataLoader for N+1 query elimination, persisted queries for performance, real-time subscriptions, and federation for composing multiple graphs into a unified supergraph across your microservices.',
    chips: ['Apollo Server', 'Pothos', 'DataLoader', 'Subscriptions', 'Federation', 'Code-First'],
    icon: '◈',
  },
  {
    title: 'Serverless & Edge Functions',
    tag: 'Serverless',
    desc: 'Node.js Lambda functions on AWS, Cloud Functions on GCP, and Vercel/Netlify edge functions for sub-50ms global response times. We architect serverless backends with event-driven triggers, optimize cold starts, and implement infrastructure-as-code with the AWS CDK or Pulumi.',
    chips: ['AWS Lambda', 'GCP Cloud Functions', 'Vercel Edge', 'CDK', 'Pulumi', 'EventBridge'],
    icon: '☁️',
  },
  {
    title: 'NestJS Enterprise Backends',
    tag: 'Enterprise',
    desc: 'Full-featured NestJS backends with dependency injection, module architecture, guards, interceptors, and pipes. Ideal for large teams needing a maintainable, opinionated structure. We add CQRS patterns, event sourcing, and clean architecture layers for domain-driven design.',
    chips: ['NestJS', 'TypeORM', 'Prisma', 'CQRS', 'Event Sourcing', 'Clean Architecture'],
    icon: '🏗️',
  },
];

const frameworkComparison = [
  {
    name: 'Express.js',
    desc: 'Minimal, unopinionated, battle-tested. Best for APIs where you want maximum control and small bundle size. The Node.js standard for 15 years.',
    best: 'Simple APIs, legacy systems, maximum control',
    icon: '⚡',
  },
  {
    name: 'Fastify',
    desc: '2–3x faster than Express with a schema-based approach. JSON serialization via fast-json-stringify, built-in validation via Ajv. Our default for high-throughput APIs.',
    best: 'High-throughput APIs, microservices, performance-critical systems',
    icon: '🚀',
  },
  {
    name: 'NestJS',
    desc: 'TypeScript-first, Angular-inspired framework with DI, decorators, and a module system. Generates consistent, maintainable code at scale across large teams.',
    best: 'Enterprise backends, large teams, domain-driven design',
    icon: '🏢',
  },
];

const techStack = [
  { category: 'Core Runtime', techs: ['Node.js 22 LTS', 'TypeScript 5.x', 'Bun (selected projects)', 'V8 Engine'] },
  { category: 'Frameworks', techs: ['Fastify', 'NestJS', 'Express.js', 'Hono (Edge)', 'tRPC'] },
  { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch', 'SQLite'] },
  { category: 'ORMs & Query', techs: ['Prisma', 'TypeORM', 'Drizzle ORM', 'Mongoose', 'Knex.js'] },
  { category: 'Message Queues', techs: ['Apache Kafka', 'RabbitMQ', 'AWS SQS', 'BullMQ', 'Redis Streams'] },
  { category: 'Auth & Security', techs: ['Passport.js', 'JWT', 'Auth.js', 'Clerk', 'Okta', 'AWS Cognito'] },
  { category: 'Testing', techs: ['Vitest', 'Jest', 'Supertest', 'Pactum', 'k6 (load testing)'] },
  { category: 'DevOps & Infra', techs: ['Docker', 'Kubernetes', 'AWS ECS', 'Terraform', 'GitHub Actions', 'Datadog'] },
];

const performanceBenchmarks = [
  { metric: '50K+', desc: 'Concurrent WebSocket connections on a single Node.js server', source: 'Internal Benchmarks' },
  { metric: '< 5ms', desc: 'P99 API response time for cached Fastify endpoints', source: 'Production Metrics' },
  { metric: '10M+', desc: 'Daily API requests handled by our Node.js backends', source: 'Client Production Systems' },
  { metric: '3x', desc: 'Fewer servers vs Python equivalents for I/O-bound workloads', source: 'LinkedIn Case Study' },
];

const processSteps = [
  {
    num: '01',
    title: 'Technical Discovery & API Design',
    whatWeDo: 'We map your data models, define API contracts (OpenAPI spec first), assess scalability requirements, and choose the right framework and infrastructure stack before writing a line of application code.',
    whatYouGet: ['OpenAPI Specification', 'Architecture Decision Records', 'Data Model Diagrams', 'Infrastructure Plan', 'Performance Targets'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Database Design & Schema',
    whatWeDo: 'We design normalized relational schemas (PostgreSQL) or document schemas (MongoDB), plan indexes, set up connection pooling, and establish migration strategies that support zero-downtime deployments.',
    whatYouGet: ['Schema Diagrams', 'Migration Scripts', 'Index Strategy', 'Seed Data', 'Database Config'],
    duration: '1 week',
  },
  {
    num: '03',
    title: 'API Development Sprints',
    whatWeDo: 'Two-week sprints with test-driven development. Every endpoint has integration tests before it ships. A live staging environment is updated after every sprint so your frontend and mobile teams can develop against real data from day one.',
    whatYouGet: ['Sprint API Build', 'Integration Test Suite', 'Swagger Docs', 'Postman Collection', 'Changelog'],
    duration: '4–12 weeks',
  },
  {
    num: '04',
    title: 'Security Review & Penetration Testing',
    whatWeDo: 'We conduct OWASP Top 10 vulnerability analysis, review authentication and authorization logic, test for SQL injection, XSS, CSRF, and rate limiting bypass, and address all critical and high findings before production.',
    whatYouGet: ['OWASP Audit Report', 'Pen Test Report', 'Security Fixes', 'Auth Review', 'Dependency Audit'],
    duration: '1–2 weeks',
  },
  {
    num: '05',
    title: 'Load Testing & Optimization',
    whatWeDo: 'We run k6 load tests against your performance targets, identify bottlenecks in database queries and application code, implement caching layers (Redis), optimize slow queries, and tune Node.js cluster configuration.',
    whatYouGet: ['k6 Load Test Report', 'Query Optimization', 'Caching Strategy', 'Performance Baseline', 'Tuning Recommendations'],
    duration: '1–2 weeks',
  },
  {
    num: '06',
    title: 'Deployment & Observability',
    whatWeDo: 'We set up CI/CD pipelines, containerize with Docker, configure Kubernetes or ECS, implement structured logging, distributed tracing (Datadog/New Relic), and health check endpoints for production readiness.',
    whatYouGet: ['CI/CD Pipeline', 'Docker/K8s Config', 'Monitoring Dashboards', 'Runbooks', 'SLA Support Plan'],
    duration: 'Ongoing',
  },
];

const caseStudies = [
  {
    title: 'FinTech Real-Time Trading API',
    desc: 'Built a Node.js/Fastify API gateway for a trading platform processing real-time market data via WebSockets. 50,000 concurrent connections, sub-5ms P99 order processing latency, and PCI DSS compliant payment flows with Stripe Connect.',
    results: ['50K Concurrent WS Connections', '< 5ms P99 Latency', '$2.1B Transactions/Year', 'PCI DSS Compliant'],
    techStack: ['Node.js', 'Fastify', 'Socket.io', 'PostgreSQL', 'Redis', 'AWS'],
    industry: 'FinTech',
  },
  {
    title: 'E-Commerce Microservices Platform',
    desc: 'Decomposed a monolithic PHP e-commerce backend into 12 Node.js microservices coordinated via Apache Kafka. Resulted in 4x improvement in deployment frequency, zero-downtime releases, and 99.99% uptime across the Black Friday peak.',
    results: ['12 Microservices', '4x Deploy Frequency', '99.99% Black Friday Uptime', '2.4M Daily Orders'],
    techStack: ['NestJS', 'Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    industry: 'E-Commerce',
  },
  {
    title: 'Healthcare Real-Time Collaboration',
    desc: 'HIPAA-compliant real-time collaboration platform for clinical teams. Doctors share patient notes, imaging, and lab results in a shared live workspace. Built with Socket.io, end-to-end encrypted, and handling 15,000 concurrent clinical sessions.',
    results: ['15K Concurrent Sessions', 'HIPAA Certified', 'E2E Encrypted', '120 Hospital Networks'],
    techStack: ['Node.js', 'Socket.io', 'MongoDB', 'Redis', 'AWS Lambda', 'KMS'],
    industry: 'Healthcare',
  },
];

const pricingTiers = [
  {
    name: 'API Starter',
    price: '$8K – $25K',
    desc: 'REST API backend for startups and MVPs needing a clean, well-documented API layer.',
    features: [
      'Up to 20 REST endpoints',
      'JWT authentication',
      'PostgreSQL database',
      'Swagger / OpenAPI docs',
      'Docker containerization',
      'CI/CD pipeline',
      '30-day post-launch support',
    ],
    cta: 'Start Project',
    highlighted: false,
  },
  {
    name: 'Full Backend',
    price: '$35K – $90K',
    desc: 'Complete Node.js backend with real-time features, payment processing, and production infrastructure.',
    features: [
      'Unlimited endpoints',
      'Real-time (Socket.io)',
      'Stripe payment integration',
      'Redis caching layer',
      'Message queue (BullMQ)',
      'Role-based access control',
      'k6 load testing',
      '3-month SLA support',
    ],
    cta: 'Get Quote',
    highlighted: true,
  },
  {
    name: 'Enterprise Platform',
    price: 'Custom',
    desc: 'Microservices architecture, Kafka event streaming, and dedicated engineering team.',
    features: [
      'Microservices architecture',
      'Kafka / RabbitMQ event streaming',
      'Kubernetes orchestration',
      'SOC 2 / HIPAA compliance',
      'Multi-region deployment',
      'Observability stack (Datadog)',
      'Dedicated team (4–6 devs)',
      '12-month SLA + retainer',
    ],
    cta: 'Contact Us',
    highlighted: false,
  },
];

const faqs = [
  {
    q: 'Why use Node.js for backend development?',
    a: "Node.js is ideal for I/O-intensive, high-concurrency backend systems. Its event-driven, non-blocking I/O model allows a single server to handle tens of thousands of concurrent connections without spawning threads. This makes it the go-to choice for REST APIs, GraphQL servers, real-time apps, and microservices. Node.js powers Netflix, LinkedIn, Uber, and PayPal. It offers the fastest cold-start times of any server-side runtime, making it cost-effective for serverless and containerized deployments.",
  },
  {
    q: 'Express, Fastify, or NestJS — which should I use?',
    a: 'We recommend Fastify as the default for new projects — it benchmarks 2–3x faster than Express with a schema-based approach and minimal overhead. NestJS is our choice for enterprise applications and large teams where TypeScript-first architecture, dependency injection, and opinionated module structure accelerate development and reduce maintenance burden. Express remains relevant for legacy compatibility and projects where developers need maximum control with minimal magic.',
  },
  {
    q: 'How does Node.js handle high-concurrency?',
    a: "Node.js uses a single-threaded event loop with non-blocking I/O — meaning it never blocks waiting for database queries or file system operations. Instead, it registers callbacks and processes other requests while waiting. This allows a single Node.js process to handle 10,000+ concurrent connections with very low memory per connection. For CPU-intensive tasks, we use Node.js worker threads or offload to separate Python/Go services.",
  },
  {
    q: 'How much does Node.js backend development cost?',
    a: 'A simple REST API backend costs $8,000–$25,000. A full-featured backend with real-time features, payments, caching, and CI/CD infrastructure ranges from $35,000–$90,000. Enterprise microservices architectures with Kafka event streaming, Kubernetes, compliance, and dedicated teams are custom-priced. Codazz provides fixed-price quotes after a free technical discovery session.',
  },
  {
    q: 'Can you migrate our existing backend to Node.js?',
    a: "Yes — we specialize in Node.js migrations from PHP (Laravel), Python (Django/Flask), Ruby on Rails, and Java Spring. We use a strangler fig pattern, migrating one service or route at a time behind a routing layer, so the migration is invisible to users and your team can validate each piece independently. LinkedIn's Node.js migration reduced their server count from 30 to 3 — we apply the same methodology.",
  },
];

const relatedBlogs = [
  {
    title: 'Python vs Node.js for Backend Development in 2026',
    desc: 'In-depth comparison of the two most popular backend runtimes for modern APIs.',
    href: '/blog/python-vs-nodejs-backend-2026',
  },
  {
    title: 'Microservices vs Monolith: The 2026 Architecture Decision',
    desc: 'When to decompose your monolith and when to keep it together.',
    href: '/blog/microservices-vs-monolith-2026',
  },
  {
    title: 'AWS vs GCP vs Azure in 2026: Choosing the Right Cloud',
    desc: 'Cloud platform comparison for modern backend and API deployments.',
    href: '/blog/aws-vs-gcp-vs-azure-2026',
  },
];


/* ═══════════════════════════════════════════════════════════════════════════
   REVEAL HOOK
   ═══════════════════════════════════════════════════════════════════════════ */

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach(node => io.observe(node));
    return () => io.disconnect();
  }, []);
  return ref;
}


/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function NodejsDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  const sectionLabel: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.25)',
    marginBottom: 20,
  };

  const sectionH2: React.CSSProperties = {
    fontSize: 'clamp(2.2rem,4vw,4rem)',
    fontWeight: 500,
    color: '#ffffff',
    letterSpacing: '-0.04em',
    lineHeight: 1.05,
    margin: 0,
  };

  const cardBase: React.CSSProperties = {
    padding: '36px 32px',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 28,
    background: 'rgba(255,255,255,0.015)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.35s ease',
  };

  const cardHoverIn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
    e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)';
  };
  const cardHoverOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = '';
  };

  const chipStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.4)',
    padding: '6px 14px',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 100,
  };

  const greenAccentLine: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    background: 'linear-gradient(90deg,#22c55e,transparent)',
  };

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .awards-marquee-track {
          animation: marqueeScroll 30s linear infinite;
        }
        .awards-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* Breadcrumb */}
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Node.js Development' },
          ]} />
        </div>


        {/* ═══════════════════════════════════════
            1. HERO
        ═══════════════════════════════════════ */}
        <section
          className="section-padding"
          style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}
        >
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 900 }}>
              <div
                className="reveal"
                style={{
                  display: 'inline-block',
                  border: '1px solid rgba(34,197,94,0.4)',
                  borderRadius: 999,
                  padding: '6px 20px',
                  fontSize: 13,
                  color: '#22c55e',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                }}
              >
                🟢 Node.js Backend Specialists
              </div>
              <h1
                className="reveal"
                style={{
                  fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.08,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.03em',
                }}
              >
                Node.js{' '}
                <span style={{ color: '#22c55e' }}>Development</span>
                <br />
                Scalable Backends. Real-Time APIs.
              </h1>
              <p
                className="reveal"
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '2rem',
                  lineHeight: 1.7,
                  maxWidth: 680,
                }}
              >
                We build high-performance Node.js backends, REST APIs, microservices, real-time
                applications, and serverless systems. 300+ projects delivered. Express, Fastify,
                NestJS, and Socket.io specialists serving startups to Fortune 500.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link
                  href="/contact"
                  style={{
                    background: '#22c55e',
                    color: '#000',
                    padding: '16px 36px',
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    transition: '0.3s',
                  }}
                >
                  Get Free Consultation
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/case-studies"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#ffffff',
                    padding: '16px 36px',
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: '0.3s',
                  }}
                >
                  View Case Studies
                </Link>
              </div>
              <div className="reveal" style={{ display: 'flex', gap: 'clamp(20px, 3vw, 48px)', flexWrap: 'wrap' }}>
                {heroStats.map((s) => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ffffff' }}>
                      {s.value}{s.suffix && <span style={{ color: '#22c55e' }}>{s.suffix}</span>}
                    </div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            2. AWARDS MARQUEE
        ═══════════════════════════════════════ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', padding: '20px 0' }}>
          <div className="awards-marquee-track" style={{ display: 'flex', width: 'max-content' }}>
            {[...awards, ...awards, ...awards].map((award, i) => (
              <div
                key={`${award}-${i}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 32px',
                  whiteSpace: 'nowrap',
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.02em',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {award}
              </div>
            ))}
          </div>
        </section>


        {/* ═══════════════════════════════════════
            3. SERVICES GRID
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Node.js Services</div>
              <h2 style={sectionH2}>
                APIs to Microservices.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Everything Node.js Does Best.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 680 }}>
                From simple REST APIs to complex event-driven microservices architectures,
                we build Node.js backends that scale with your business and survive production.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {services.map((s) => (
                <div key={s.title} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <span style={{ fontSize: 28 }}>{s.icon}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100 }}>{s.tag}</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.chips.map(c => <span key={c} style={chipStyle}>{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            4. FRAMEWORK COMPARISON
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Framework Selection</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                Express, Fastify, or NestJS?<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>We Help You Choose.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600, margin: '20px auto 0' }}>
                Our architects evaluate your team, API complexity, and performance requirements
                to recommend the right Node.js framework — not the trendy one.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {frameworkComparison.map((fw, i) => (
                <div key={fw.name} className={`reveal-d${i + 1}`} style={{ ...cardBase, padding: '40px 36px' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{fw.icon}</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14 }}>{fw.name}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 20 }}>{fw.desc}</p>
                  <div style={{ padding: '14px 18px', background: 'rgba(34,197,94,0.06)', borderRadius: 14, border: '1px solid rgba(34,197,94,0.15)' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 6 }}>Best For</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{fw.best}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            5. PERFORMANCE BENCHMARKS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(34,197,94,0.02)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Performance</div>
              <h2 style={{ ...sectionH2, margin: '0 auto' }}>
                Node.js Performance<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>in Production.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {performanceBenchmarks.map((m, i) => (
                <div
                  key={m.metric}
                  className={`reveal-d${i + 1}`}
                  style={{ textAlign: 'center', padding: '40px 24px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.04em', lineHeight: 1 }}>{m.metric}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 12, lineHeight: 1.5 }}>{m.desc}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 8, fontWeight: 600 }}>— {m.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            6. TECH STACK
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Technology Stack</div>
              <h2 style={sectionH2}>
                Our Node.js<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Technology Stack.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
              {techStack.map((row) => (
                <div key={row.category} style={{ ...cardBase, padding: '28px 28px' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>{row.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {row.techs.map(t => (
                      <span key={t} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', padding: '5px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            7. PROCESS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Our Process</div>
              <h2 style={sectionH2}>
                How We Build<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Node.js Backends.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {processSteps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ ...cardBase, padding: '40px 40px' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 32, alignItems: 'start' }}>
                    <div style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, color: 'rgba(34,197,94,0.15)', lineHeight: 1, minWidth: 80 }}>{step.num}</div>
                    <div>
                      <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 20 }}>{step.whatWeDo}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.whatYouGet.map(d => (
                          <span key={d} style={{ fontSize: 12, fontWeight: 600, color: '#22c55e', background: 'rgba(34,197,94,0.08)', padding: '5px 14px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.15)' }}>{d}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.04)', padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)' }}>{step.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            8. CASE STUDIES
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>Case Studies</div>
                <h2 style={sectionH2}>
                  Node.js Backends<br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>We Have Built.</span>
                </h2>
              </div>
              <Link href="/case-studies" style={{ fontSize: 14, color: '#22c55e', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                View all case studies
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 20 }}>
              {caseStudies.map((cs) => (
                <div key={cs.title} style={{ ...cardBase, padding: '40px 36px' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>{cs.industry}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14 }}>{cs.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 24 }}>{cs.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                    {cs.results.map(r => (
                      <span key={r} style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.08)', padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.15)' }}>{r}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cs.techStack.map(t => <span key={t} style={chipStyle}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            9. PRICING
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Pricing</div>
              <h2 style={{ ...sectionH2, margin: '0 auto' }}>
                Node.js Development Pricing.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Fixed. Transparent. Fair.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    padding: '44px 36px',
                    border: tier.highlighted ? '1px solid rgba(34,197,94,0.4)' : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28,
                    background: tier.highlighted ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  {tier.highlighted && (
                    <div style={{ position: 'absolute', top: 20, right: 20, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#000', background: '#22c55e', padding: '5px 14px', borderRadius: 100 }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: tier.highlighted ? '#22c55e' : 'linear-gradient(90deg,rgba(34,197,94,0.3),transparent)' }} />
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 12 }}>{tier.name}</div>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>{tier.price}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 28 }}>{tier.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {tier.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '14px 28px',
                      borderRadius: 999,
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: 'none',
                      background: tier.highlighted ? '#22c55e' : 'transparent',
                      color: tier.highlighted ? '#000' : '#ffffff',
                      border: tier.highlighted ? 'none' : '1px solid rgba(255,255,255,0.2)',
                      transition: '0.3s',
                    }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            10. FAQ
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 820, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>FAQ</div>
              <h2 style={{ ...sectionH2, margin: '0 auto' }}>
                Node.js Questions<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Answered.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20,
                    overflow: 'hidden',
                    background: openFaq === i ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.01)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', textAlign: 'left', gap: 16 }}
                  >
                    <span style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <span style={{ color: '#22c55e', fontSize: 20, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            11. RELATED BLOGS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div style={sectionLabel}>Further Reading</div>
              <h2 style={sectionH2}>
                Related<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Insights & Guides.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {relatedBlogs.map((b) => (
                <Link key={b.title} href={b.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                    <div style={greenAccentLine} />
                    <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{b.title}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
                    <div style={{ marginTop: 20, fontSize: 13, color: '#22c55e', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                      Read article
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            12. CTA
        ═══════════════════════════════════════ */}
        <section className="section-padding">
          <div className="cb-container" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div className="reveal">
              <div style={sectionLabel}>Ready to Build?</div>
              <h2 style={{ ...sectionH2, margin: '0 auto 24px', textAlign: 'center' }}>
                Start Your Node.js Backend<br />
                <span style={{ color: '#22c55e' }}>Today.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 40px' }}>
                Free 60-minute technical consultation. We design your API architecture,
                recommend the right framework, and provide a fixed-price quote before development begins.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  style={{
                    background: '#22c55e',
                    color: '#000',
                    padding: '18px 44px',
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    transition: '0.3s',
                  }}
                >
                  Get Free Consultation
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/hire/nodejs-developers"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#ffffff',
                    padding: '18px 44px',
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: '0.3s',
                  }}
                >
                  Hire Node.js Developers
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
