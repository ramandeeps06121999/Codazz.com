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

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const stats = [
  { value: '120+', label: 'Systems Modernized' },
  { value: '99.9%', label: 'Uptime During Migration' },
  { value: '60%', label: 'Avg Cost Reduction' },
  { value: '4.9\u2605', label: 'Client Rating' },
];

const legacyRisks = [
  {
    icon: '\uD83D\uDD13',
    title: 'Security Vulnerabilities',
    desc: 'Legacy systems run on outdated frameworks and unpatched dependencies. Every day without modernization expands your attack surface and regulatory risk. EOL software receives zero security patches.',
    stat: '60%',
    statLabel: 'of breaches involve unpatched vulnerabilities',
  },
  {
    icon: '\uD83D\uDCB8',
    title: 'High Maintenance Costs',
    desc: 'Maintaining legacy code costs 3\u20135x more than modern equivalents. Custom patches, vendor lock-in, expensive licensing and workarounds for outdated APIs drain engineering budgets every quarter.',
    stat: '80%',
    statLabel: 'of IT budgets spent on maintenance, not innovation',
  },
  {
    icon: '\uD83D\uDC64',
    title: 'Talent Shortage',
    desc: 'Finding developers who know COBOL, VB6, classic ASP or legacy Java frameworks is increasingly impossible. The talent pool shrinks every year as experienced engineers retire and new graduates learn modern stacks.',
    stat: '73%',
    statLabel: 'of enterprises struggle to find legacy-skilled devs',
  },
  {
    icon: '\u26A0\uFE0F',
    title: 'Integration Bottlenecks',
    desc: 'Legacy systems were never designed for APIs, webhooks or real-time data exchange. Every new tool or partner integration becomes a multi-month custom project instead of a simple API call.',
    stat: '45%',
    statLabel: 'slower time-to-market for new features',
  },
  {
    icon: '\uD83D\uDCC9',
    title: 'Scalability Ceiling',
    desc: 'Monolithic architectures and on-premise hardware hit hard performance limits. You cannot scale individual components, handle traffic spikes or expand to new regions without rebuilding.',
    stat: '3x',
    statLabel: 'infrastructure cost vs cloud-native equivalent',
  },
  {
    icon: '\uD83D\uDEAB',
    title: 'Compliance Risk',
    desc: 'Regulations like GDPR, HIPAA, SOC 2 and PCI-DSS require audit trails, encryption standards and access controls that legacy systems simply cannot provide without fundamental changes.',
    stat: '$4.2M',
    statLabel: 'average cost of a compliance breach',
  },
];

const approaches = [
  {
    icon: '\uD83D\uDD04',
    title: 'Replatform',
    subtitle: 'Lift, shift and optimize',
    desc: 'Move your existing application to modern infrastructure \u2014 cloud hosting, containerization, managed databases \u2014 with minimal code changes. Fastest path to reduced operational costs and improved reliability.',
    best: 'Best for: Stable applications that work well but are stuck on expensive or end-of-life infrastructure.',
    timeline: '4\u201312 weeks',
    risk: 'Low',
    riskColor: '#22c55e',
  },
  {
    icon: '\uD83D\uDD27',
    title: 'Refactor',
    subtitle: 'Restructure from the inside',
    desc: 'Incrementally restructure your codebase \u2014 decompose monoliths into services, replace tightly coupled components, introduce APIs and modernize the data layer while keeping the application running.',
    best: 'Best for: Applications with solid business logic that need better performance, testability and developer experience.',
    timeline: '3\u20139 months',
    risk: 'Medium',
    riskColor: '#eab308',
  },
  {
    icon: '\uD83C\uDFD7\uFE0F',
    title: 'Rebuild',
    subtitle: 'New architecture, same business logic',
    desc: 'Build a completely new application using modern frameworks and cloud-native architecture. We extract and preserve your business rules, data models and workflows while creating a system designed for the next decade.',
    best: 'Best for: Systems that are fundamentally unmaintainable and where the cost of patching exceeds the cost of rebuilding.',
    timeline: '6\u201318 months',
    risk: 'Higher',
    riskColor: '#f97316',
  },
  {
    icon: '\uD83D\uDD00',
    title: 'Replace',
    subtitle: 'Adopt a modern product',
    desc: 'Replace your custom legacy system with a modern SaaS or off-the-shelf product, customized to your workflows. We handle data migration, integration setup and change management to ensure zero disruption.',
    best: 'Best for: Commodity systems (ERP, CRM, HRIS) where custom-built is no longer a competitive advantage.',
    timeline: '2\u20136 months',
    risk: 'Low\u2013Medium',
    riskColor: '#22c55e',
  },
];

const migrationServices = [
  {
    icon: '\uD83E\uDDE9',
    title: 'Monolith to Microservices',
    desc: 'Decompose tightly coupled monoliths into independently deployable microservices. We use the strangler-fig pattern to migrate incrementally \u2014 no big-bang rewrites, no downtime. Each service gets its own database, CI/CD pipeline and scaling policy.',
    features: ['Domain-driven decomposition', 'Event-driven architecture', 'API gateway setup', 'Independent scaling per service', 'Service mesh implementation'],
  },
  {
    icon: '\u2601\uFE0F',
    title: 'On-Prem to Cloud',
    desc: 'Migrate from physical data centers and co-located servers to AWS, Azure or Google Cloud. We handle infrastructure-as-code, containerization with Docker and Kubernetes, managed database migration and cost optimization from day one.',
    features: ['AWS / Azure / GCP migration', 'Infrastructure as Code (Terraform)', 'Container orchestration (K8s)', 'Cost optimization & right-sizing', 'Disaster recovery setup'],
  },
  {
    icon: '\uD83D\uDDC4\uFE0F',
    title: 'Database Migration',
    desc: 'Move from legacy databases \u2014 Oracle, SQL Server, MySQL on-prem \u2014 to modern managed solutions. PostgreSQL, MongoDB, DynamoDB, Aurora or Cloud SQL with zero data loss, schema optimization and query performance tuning.',
    features: ['Zero-downtime migration', 'Schema redesign & optimization', 'Data validation & reconciliation', 'Read replica setup', 'Automated backup configuration'],
  },
  {
    icon: '\uD83D\uDD17',
    title: 'API-First Modernization',
    desc: 'Wrap legacy systems with modern RESTful and GraphQL APIs so they can integrate with any modern tool, partner or platform. Build an API layer that decouples your business logic from the legacy implementation.',
    features: ['REST & GraphQL API design', 'API gateway & rate limiting', 'OAuth 2.0 / JWT authentication', 'OpenAPI documentation', 'Versioning & deprecation strategy'],
  },
];

const beforeAfter = [
  { category: 'Architecture', before: 'Monolithic, tightly coupled', after: 'Microservices, loosely coupled' },
  { category: 'Deployment', before: 'Manual, weeks-long releases', after: 'CI/CD, multiple deploys per day' },
  { category: 'Infrastructure', before: 'On-prem servers, fixed capacity', after: 'Cloud-native, auto-scaling' },
  { category: 'Scaling', before: 'Vertical only, hardware limits', after: 'Horizontal, infinite elasticity' },
  { category: 'Security', before: 'Unpatched, EOL dependencies', after: 'Automated patching, zero-trust' },
  { category: 'Monitoring', before: 'Server logs, manual checks', after: 'Real-time observability, alerts' },
  { category: 'Recovery', before: 'Hours to days of downtime', after: 'Sub-minute failover, multi-region' },
  { category: 'Cost Model', before: 'CapEx, over-provisioned', after: 'OpEx, pay-per-use' },
  { category: 'Integration', before: 'Point-to-point, brittle', after: 'API-first, event-driven' },
  { category: 'Developer Experience', before: 'Tribal knowledge required', after: 'Documented, testable, onboard in days' },
];

const techStack = [
  { label: 'Backend', chips: ['Node.js', 'Python', 'Go', '.NET Core', 'Java (Spring Boot)', 'Rust'] },
  { label: 'Frontend', chips: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular'] },
  { label: 'Cloud & DevOps', chips: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] },
  { label: 'Databases', chips: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'Elasticsearch'] },
  { label: 'Messaging & Events', chips: ['Kafka', 'RabbitMQ', 'SQS/SNS', 'EventBridge'] },
  { label: 'Monitoring', chips: ['Datadog', 'Grafana', 'Prometheus', 'New Relic', 'PagerDuty'] },
];

const processSteps = [
  { num: '01', title: 'Assessment', desc: 'Deep-dive audit of your existing systems \u2014 architecture mapping, dependency analysis, performance profiling, security scanning, and business-criticality scoring. We document everything and identify quick wins versus long-term priorities.' },
  { num: '02', title: 'Strategy', desc: 'Based on assessment findings, we recommend the optimal modernization approach for each component \u2014 replatform, refactor, rebuild or replace. You get a detailed roadmap with timelines, cost projections and risk mitigation plans.' },
  { num: '03', title: 'Pilot', desc: 'We select one bounded context or service and modernize it end-to-end as a proof of concept. This validates our approach, uncovers integration challenges early, and gives your team confidence before committing to a full migration.' },
  { num: '04', title: 'Migration', desc: 'Phased migration using strangler-fig patterns. We build the new alongside the old, route traffic incrementally, and validate at every step. Your business keeps running with zero interruption throughout the entire process.' },
  { num: '05', title: 'Testing', desc: 'Comprehensive validation \u2014 automated regression testing, load testing, data reconciliation, security audits and user acceptance testing. We do not cut over until every metric matches or exceeds the legacy baseline.' },
  { num: '06', title: 'Cutover & Optimization', desc: 'Final cutover with rollback procedures in place. Post-migration, we optimize performance, right-size cloud resources, set up monitoring dashboards and conduct a knowledge transfer to your team for ongoing operations.' },
];

const caseStudy = {
  title: 'Enterprise ERP Modernization',
  subtitle: 'Manufacturing \u2014 $2B Revenue Company',
  challenge: 'A 15-year-old monolithic ERP system built on classic ASP and SQL Server was costing $1.2M/year in maintenance, suffering weekly outages, and blocking integration with modern supply chain tools.',
  solution: 'Phased migration over 10 months using the strangler-fig pattern. Decomposed into 12 microservices on AWS with a React frontend. Zero downtime during the entire migration. Full API layer for partner integrations.',
  results: [
    { value: '72%', label: 'Cost Reduction', sub: 'Annual IT spend dropped from $1.2M to $340K' },
    { value: '99.99%', label: 'Uptime', sub: 'From weekly outages to near-perfect availability' },
    { value: '10x', label: 'Faster Deploys', sub: 'From monthly releases to multiple deploys per day' },
    { value: '3 Days', label: 'New Integration', sub: 'Partner integrations that took months now take days' },
  ],
};

const legacySystems = [
  {
    icon: '\uD83D\uDCBB',
    name: 'COBOL & Mainframe',
    desc: 'IBM mainframes, AS/400 systems, COBOL programs and JCL batch jobs still running mission-critical processes. We migrate business logic to modern languages while preserving decades of institutional knowledge.',
    migrateTo: 'Node.js, Python, .NET Core on cloud',
  },
  {
    icon: '\uD83C\uDF10',
    name: 'Classic ASP & VB6',
    desc: 'Windows Server applications built on classic ASP, VBScript and Visual Basic 6. These systems cannot scale, lack modern security and are impossible to hire for.',
    migrateTo: 'React + .NET Core or Next.js',
  },
  {
    icon: '\u2615',
    name: 'Legacy Java (J2EE)',
    desc: 'Enterprise Java applications on WebSphere, JBoss or Tomcat with heavy XML configuration, EJBs and monolithic WAR deployments. We modernize to Spring Boot microservices or migrate to alternative stacks.',
    migrateTo: 'Spring Boot, Quarkus or Node.js',
  },
  {
    icon: '\uD83D\uDC98',
    name: 'Legacy PHP',
    desc: 'PHP 5.x applications, custom WordPress backends, CakePHP or CodeIgniter monoliths with spaghetti code, no tests and tangled database queries throughout the view layer.',
    migrateTo: 'Laravel, Next.js or headless architecture',
  },
  {
    icon: '\uD83D\uDDC3\uFE0F',
    name: 'On-Prem Databases',
    desc: 'Self-managed Oracle, SQL Server, MySQL or legacy NoSQL databases running on physical hardware with manual backup scripts and no disaster recovery automation.',
    migrateTo: 'Aurora, Cloud SQL, DynamoDB, MongoDB Atlas',
  },
  {
    icon: '\uD83D\uDCE6',
    name: 'Legacy ERP & CRM',
    desc: 'Custom-built or heavily modified ERP, CRM and inventory management systems that no one dares touch. Brittle integrations, zero documentation and tribal knowledge required to operate.',
    migrateTo: 'Modern SaaS + custom API layer',
  },
];

const whyChooseUs = [
  {
    title: 'Zero-Downtime Guarantee',
    desc: 'Every migration uses strangler-fig patterns and blue-green deployments. Your business keeps running at full capacity throughout the entire modernization process.',
    icon: '\u2705',
  },
  {
    title: 'Data Integrity First',
    desc: 'We run parallel environments with real-time data syncs, automated validation checks and comprehensive reconciliation reports before any cutover happens.',
    icon: '\uD83D\uDD12',
  },
  {
    title: 'Rollback at Every Step',
    desc: 'Every migration phase has a tested rollback procedure. If anything looks off, we can revert instantly. No big-bang migrations, no irreversible changes.',
    icon: '\u21A9\uFE0F',
  },
  {
    title: 'Knowledge Transfer Built In',
    desc: 'We do not just modernize and leave. Every project includes documentation, architecture decision records, runbooks and hands-on training for your team.',
    icon: '\uD83D\uDCDA',
  },
  {
    title: 'Incremental Value Delivery',
    desc: 'You see measurable improvements within weeks, not months. Our phased approach means cost savings, performance gains and security improvements start accumulating from the pilot phase.',
    icon: '\uD83D\uDCC8',
  },
  {
    title: 'Cross-Stack Expertise',
    desc: 'From COBOL mainframes to classic ASP to legacy Java, we have migrated systems across every technology generation. No legacy system is too old or too complex.',
    icon: '\uD83E\uDDE0',
  },
];

const roiMetrics = [
  {
    label: 'Infrastructure Cost',
    legacy: '$15,000\u2013$50,000/mo',
    modern: '$3,000\u2013$12,000/mo',
    savings: '60\u201380%',
    detail: 'Cloud-native auto-scaling replaces over-provisioned physical servers. Pay only for what you use.',
  },
  {
    label: 'Developer Productivity',
    legacy: '2\u20134 features/quarter',
    modern: '10\u201320 features/quarter',
    savings: '4\u20135x',
    detail: 'Modern tooling, CI/CD pipelines and microservice architecture let developers ship faster with fewer bugs.',
  },
  {
    label: 'Downtime Cost',
    legacy: '4\u201312 hours/month',
    modern: '<5 minutes/month',
    savings: '99.9%',
    detail: 'Auto-healing containers, multi-AZ deployment and automated failover eliminate costly outages.',
  },
  {
    label: 'Security Incidents',
    legacy: '3\u20136 incidents/year',
    modern: '0\u20131 incident/year',
    savings: '80\u201395%',
    detail: 'Automated patching, dependency scanning and zero-trust architecture dramatically reduce attack surface.',
  },
  {
    label: 'Hiring & Onboarding',
    legacy: '3\u20136 months to hire + train',
    modern: '2\u20134 weeks onboarding',
    savings: '75%',
    detail: 'Modern stacks attract top talent and documented codebases slash onboarding time.',
  },
];

const pricingTiers = [
  {
    tier: 'Assessment & Pilot',
    price: '$25,000+',
    desc: 'Complete system audit, architecture mapping, modernization roadmap and a single-service pilot migration to prove the approach.',
    features: ['Full system architecture audit', 'Dependency & risk analysis', 'Modernization roadmap & cost model', 'Single-service pilot migration', 'Knowledge transfer documentation', '2\u20134 week delivery'],
  },
  {
    tier: 'Application Modernization',
    price: '$75,000+',
    desc: 'End-to-end modernization of a single application — from re-platforming or refactoring to full rebuild with cloud-native architecture.',
    features: ['Complete application migration', 'Database migration & optimization', 'CI/CD pipeline setup', 'Monitoring & observability', 'Load testing & security audit', '8\u201320 week delivery'],
    featured: true,
  },
  {
    tier: 'Enterprise Program',
    price: '$250,000+',
    desc: 'Multi-system modernization program with dedicated team, phased migration roadmap, and ongoing optimization post-cutover.',
    features: ['Multi-application migration', 'Dedicated modernization team', 'API layer & integration hub', 'Training & change management', 'Post-migration optimization', '6\u201318 month delivery'],
  },
];

const testimonials = [
  {
    quote: 'Codazz migrated our 12-year-old monolith to microservices without a single minute of downtime. Our infrastructure costs dropped 65% and our deployment frequency went from monthly to daily.',
    name: 'Sarah Chen',
    role: 'VP Engineering',
    company: 'Financial Services Company',
  },
  {
    quote: 'We had been told by three other consultancies that our COBOL system was impossible to migrate without a year of downtime. Codazz did it in 8 months with zero disruption to our operations.',
    name: 'Michael Torres',
    role: 'CTO',
    company: 'Insurance Enterprise',
  },
  {
    quote: 'The ROI was clear within the first quarter. Our maintenance costs dropped from $80K/month to $18K/month, and our team can now ship features in days instead of months.',
    name: 'Priya Sharma',
    role: 'Director of IT',
    company: 'Healthcare Platform',
  },
];

const faqs = [
  { q: 'How long does a legacy modernization project typically take?', a: 'Timelines vary by scope. A targeted re-platforming of a single application takes 8\u201316 weeks. A full monolith-to-microservices migration for an enterprise system typically runs 6\u201318 months with phased rollouts. We always start with a 2\u20134 week assessment and pilot phase so you see value early.' },
  { q: 'Can you modernize our system without downtime?', a: 'Yes. We use strangler-fig patterns, blue-green deployments and incremental migration strategies that keep your existing system running while we build and cut over to the modernized version. Zero-downtime migration is a core requirement in every project we take on.' },
  { q: 'What is the difference between re-platforming, refactoring and rebuilding?', a: 'Re-platforming moves your application to a new infrastructure (e.g., cloud) with minimal code changes. Refactoring restructures the internal codebase for better performance and maintainability. Rebuilding means creating a new application from scratch using modern architecture while preserving business logic and data.' },
  { q: 'Will we lose data during migration?', a: 'Absolutely not. Data integrity is non-negotiable. We run parallel environments, perform incremental data syncs and execute comprehensive validation checks before any cutover. Every migration includes rollback procedures and data reconciliation reports.' },
  { q: 'How much does legacy modernization cost?', a: 'Cost depends on system complexity, chosen approach and timeline. A focused re-platforming project starts around $50,000. Full enterprise modernization programs range from $150,000 to $500,000+. We provide detailed cost-benefit analysis during the assessment phase so ROI is clear before committing.' },
  { q: 'What technologies do you migrate legacy systems to?', a: 'We migrate to modern stacks including Node.js, Python, Go, .NET Core, React, Next.js, and cloud-native architectures on AWS, Azure and GCP. Database migrations cover PostgreSQL, MongoDB, DynamoDB and more. The target stack is chosen based on your team capabilities, performance needs and long-term strategy.' },
];


/* ─── COMPONENT ────────────────────────────────────────────────────────────── */

export default function LegacyModernizationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

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
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Legacy System Modernization' },
          ]} />
        </div>

        {/* ════════════════════════════════════════════ HERO ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Legacy System Modernization
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Modernize Your Legacy Systems. Unlock Growth.
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              We migrate monoliths to microservices, move on-prem to cloud, and re-engineer aging applications &mdash; with zero downtime and zero data loss.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Free Modernization Assessment
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                See Our Work
              </Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { value: '120+', label: 'Systems Modernized' },
                { value: '99.9%', label: 'Uptime During Migration' },
                { value: '60%', label: 'Avg Cost Reduction' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ STATS BAR ════════════════════════════════════════════ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))' }}>
              {stats.map((s, i) => (
                <div key={i} className="reveal" style={{ padding: 'clamp(28px, 4vw, 48px) 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingLeft: i > 0 ? 'clamp(16px, 3vw, 40px)' : 0, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ WHY MODERNIZE ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>The Problem</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>Why Legacy Systems Are Costing You</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 600, margin: '0 0 56px', lineHeight: 1.7 }}>Every year you delay modernization, the technical debt compounds. Security risks grow, costs climb, and your best engineers leave.</p>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {legacyRisks.map(r => (
                <div key={r.title} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(239,68,68,0.25)'; e.currentTarget.style.background = 'rgba(239,68,68,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#ef4444,transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{r.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{r.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 20px' }}>{r.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ef4444' }}>{r.stat}</span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{r.statLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ MODERNIZATION APPROACHES ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Our Approaches</div>
                <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                  Four Paths to Modern
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 400, lineHeight: 1.75, margin: 0 }}>
                Not every system needs a full rebuild. We match the right modernization strategy to your business reality.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {approaches.map((a, idx) => (
                <div key={a.title}
                  style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{a.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 4px' }}>{a.title}</h3>
                  <div style={{ fontSize: 13, color: '#22c55e', fontWeight: 500, marginBottom: 16 }}>{a.subtitle}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 16px', flex: 1 }}>{a.desc}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: '0 0 20px', fontStyle: 'italic' }}>{a.best}</p>
                  <div style={{ display: 'flex', gap: 20, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Timeline</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{a.timeline}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Risk Level</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: a.riskColor }}>{a.risk}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ MIGRATION SERVICES ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Migration Services</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>End-to-End Migration Capabilities</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 0 56px', lineHeight: 1.7 }}>From architecture decomposition to database migration to API modernization &mdash; we handle every layer of your stack.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {migrationServices.map((svc, i) => (
                <div key={svc.title} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, overflow: 'hidden', background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease', transitionDelay: `${i * 0.08}s` }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ padding: 'clamp(28px, 4vw, 44px)' }}>
                    <div style={{ fontSize: 36, marginBottom: 16 }}>{svc.icon}</div>
                    <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 12px' }}>{svc.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>{svc.desc}</p>
                  </div>
                  <div style={{ padding: 'clamp(28px, 4vw, 44px)', borderLeft: '1px solid rgba(255,255,255,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Key Deliverables</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {svc.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ BEFORE / AFTER ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Transformation</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                Before &amp; After Modernization
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>See exactly how your system transforms across every dimension that matters.</p>
            </div>
            <div className="reveal reveal-d1" style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ padding: '16px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Dimension</div>
                <div style={{ padding: '16px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ef4444', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>Before</div>
                <div style={{ padding: '16px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>After</div>
              </div>
              {/* Rows */}
              {beforeAfter.map((row, i) => (
                <div key={row.category} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < beforeAfter.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,197,94,0.03)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ padding: '16px 24px', fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{row.category}</div>
                  <div style={{ padding: '16px 24px', fontSize: 14, color: 'rgba(255,255,255,0.45)', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>{row.before}</div>
                  <div style={{ padding: '16px 24px', fontSize: 14, color: 'rgba(255,255,255,0.8)', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>{row.after}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ TECH STACK ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                  The Modern Stack We Migrate You To
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 380, lineHeight: 1.75, margin: 0 }}>
                Battle-tested technologies chosen for scalability, developer experience and long-term support.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techStack.map(cat => (
                <div key={cat.label}
                  style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c}
                        style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ COMMON LEGACY SYSTEMS ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Systems We Modernize</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>Legacy Platforms We Transform</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 580, margin: '0 0 56px', lineHeight: 1.7 }}>No matter what your legacy stack looks like, we have migrated it before. Here are the most common systems we modernize.</p>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {legacySystems.map(ls => (
                <div key={ls.name} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{ls.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{ls.name}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 20px' }}>{ls.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 12 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    <span style={{ fontSize: 13, color: '#22c55e', fontWeight: 500 }}>Migrate to: {ls.migrateTo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ WHY CHOOSE US ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Why Codazz</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                Why Companies Trust Us With Their Modernization
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>We have been modernizing legacy systems for over a decade. Here is what sets our approach apart.</p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {whyChooseUs.map(w => (
                <div key={w.title} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{w.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{w.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ ROI COMPARISON ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>ROI</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                The Business Case for Modernization
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>Modernization is not just a technology decision. It is a business decision with measurable, compounding returns.</p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {roiMetrics.map((m, i) => (
                <div key={m.label}
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, overflow: 'hidden', background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ padding: '24px 28px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>Metric</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff' }}>{m.label}</div>
                  </div>
                  <div style={{ padding: '24px 28px', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ef4444', marginBottom: 8 }}>Legacy</div>
                    <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>{m.legacy}</div>
                  </div>
                  <div style={{ padding: '24px 28px', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 8 }}>Modernized</div>
                    <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>{m.modern}</div>
                  </div>
                  <div style={{ padding: '24px 28px', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>Improvement</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: '#22c55e' }}>{m.savings}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4, lineHeight: 1.5 }}>{m.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ PROCESS ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Our Process</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 60px' }}>Assessment to Cutover in Six Phases</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))', zIndex: 0 }} />
              {processSteps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 32, paddingBottom: i < processSteps.length - 1 ? 48 : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                  <div style={{ paddingTop: 10 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0, maxWidth: 600 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ PRICING ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Pricing</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                Transparent Modernization Pricing
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>Every project is scoped individually based on system complexity. These tiers give you a starting framework for budgeting.</p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {pricingTiers.map(plan => (
                <div key={plan.tier}
                  style={{
                    padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 40px)',
                    border: plan.featured ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28,
                    background: plan.featured ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = plan.featured ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  {plan.featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />}
                  {plan.featured && (
                    <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 16 }}>Most Popular</span>
                  )}
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 8px' }}>{plan.tier}</h3>
                  <div style={{ fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 16 }}>{plan.price}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>{plan.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 48, padding: '0 28px', borderRadius: 100, background: plan.featured ? '#22c55e' : 'transparent', border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.1)', color: plan.featured ? '#000' : '#ffffff', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginTop: 32, transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; if (plan.featured) e.currentTarget.style.boxShadow = '0 12px 30px rgba(34,197,94,0.3)'; else e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; if (!plan.featured) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                    Get Started <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ TESTIMONIALS ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Testimonials</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                What Our Clients Say
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={i}
                  style={{ padding: '40px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(34,197,94,0.3)" style={{ marginBottom: 20 }}><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" /></svg>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, margin: '0 0 28px', fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{t.role}, {t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ CASE STUDY ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Case Study</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Real Results From Real Migrations</h2>

            <div className="reveal reveal-d2" style={{ border: '1px solid rgba(34,197,94,0.2)', borderRadius: 28, overflow: 'hidden', background: 'rgba(34,197,94,0.02)' }}>
              <div style={{ padding: 'clamp(32px, 4vw, 56px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
                  <div>
                    <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 6px' }}>{caseStudy.title}</h3>
                    <div style={{ fontSize: 14, color: '#22c55e', fontWeight: 500 }}>{caseStudy.subtitle}</div>
                  </div>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, padding: '8px 20px', transition: '0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}>
                    View All Case Studies <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 32, marginBottom: 40 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>Challenge</div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>Solution</div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>{caseStudy.solution}</p>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 24 }}>
                  {caseStudy.results.map((r, i) => (
                    <div key={i}>
                      <div style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.value}</div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: '8px 0 4px' }}>{r.label}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{r.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ FAQ ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 760 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Common Questions About Legacy Modernization</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)', border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`, borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.06}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ ANTI-PATTERNS ════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ef4444', marginBottom: 20 }}>Warning</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                Modernization Anti-Patterns We Help You Avoid
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>Most modernization projects fail not because of technology, but because of approach. Here is what not to do.</p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  bad: 'Big-Bang Rewrite',
                  good: 'Strangler-fig incremental migration',
                  why: 'Full rewrites take 2\u20133x longer than estimated, cost 3\u20135x more, and fail 70% of the time. Incremental migration delivers value continuously.',
                },
                {
                  bad: 'Lift-and-Shift Without Optimization',
                  good: 'Re-platform with cloud-native optimization',
                  why: 'Moving a poorly architected app to the cloud just gives you a poorly architected cloud app with a bigger bill. Optimize during migration.',
                },
                {
                  bad: 'Modernizing Everything at Once',
                  good: 'Prioritize by business value and risk',
                  why: 'Not every system needs modernization. Focus on systems that block growth, cost the most, or carry the highest security risk.',
                },
                {
                  bad: 'Ignoring Data Migration Until the End',
                  good: 'Data migration as a first-class workstream',
                  why: 'Data is always harder than code. Start early, run parallel syncs, and validate continuously. Never leave data migration as the last step.',
                },
                {
                  bad: 'No Rollback Plan',
                  good: 'Tested rollback at every migration phase',
                  why: 'Every cutover needs a tested, documented rollback procedure. If you cannot roll back safely, you are not ready to cut over.',
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}>
                  <div style={{ padding: '24px 28px', background: 'rgba(239,68,68,0.04)', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444' }}>Avoid</span>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>{item.bad}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item.why}</div>
                  </div>
                  <div style={{ padding: '24px 28px', background: 'rgba(34,197,94,0.03)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e' }}>Instead</span>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff' }}>{item.good}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ INDUSTRIES ════════════════════════════════════════════ */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Industries We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
              ].map((ind) => (
                <a key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ CTA ════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get Started</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Stop Maintaining. Start <span style={{ color: '#22c55e' }}>Modernizing.</span>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
              120+ legacy systems modernized. Zero data lost. Get a free assessment and see what&apos;s possible for your stack.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Free Modernization Assessment <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                See Migration Case Studies
              </Link>
            </div>
            <div className="reveal reveal-d3" style={{ marginTop: 40, padding: '28px 36px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 12px #22c55e' }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: '#ffffff' }}>Available Now</span>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
                Book a 30-minute call with a senior modernization architect. We will review your current architecture,
                identify the highest-impact modernization opportunities, and give you a preliminary cost estimate &mdash;
                all at no charge and with no obligation.
              </p>
            </div>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              {['Zero-downtime migrations', 'SOC 2 compliant process', 'Rollback guarantee', 'Free assessment'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </div>
              ))}
            </div>
            <TrustBadges compact />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
