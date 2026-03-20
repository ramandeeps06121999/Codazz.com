'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

/* ───────────────────────── REVEAL HOOK ───────────────────────── */
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

/* ───────────────────────── DATA ───────────────────────── */

const heroStats = [
  { value: '150+', label: 'SaaS Products Shipped' },
  { value: '$2B+', label: 'Client Valuation' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '8 Wks', label: 'MVP Timeline' },
];

const saasServices = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'SaaS MVP Development',
    desc: 'Launch a lean, investor-ready SaaS MVP in 8-12 weeks. We validate your core hypothesis, build the minimum lovable product, and ship to market fast so you can acquire users without burning runway.',
    href: '/services/saas-development/saas-mvp-development',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Multi-Tenant Architecture',
    desc: 'Scalable multi-tenant systems with data isolation, org-level permissions, and tenant-scoped configurations. Built to handle 10 customers or 10,000 without re-architecting.',
    href: '/services/saas-development/multi-tenant-architecture',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
      </svg>
    ),
    title: 'Billing & Subscriptions',
    desc: 'Stripe-powered subscription billing with support for flat-rate, per-seat, usage-based, and hybrid pricing. Self-serve upgrades, proration, invoicing, and revenue recognition built in.',
    href: '/services/saas-development/billing-subscriptions',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    title: 'Auth & SSO',
    desc: 'Enterprise-grade authentication with SAML SSO, OAuth 2.0, magic links, MFA, and role-based access control. Integrate with Auth0, Clerk, or custom identity providers.',
    href: '/services/saas-development/auth-sso',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
        <path d="M3 20h18" />
      </svg>
    ),
    title: 'Analytics Dashboards',
    desc: 'Real-time analytics dashboards for your users and internal teams. Track MRR, churn, feature adoption, and custom KPIs with interactive charts, filters, and export capabilities.',
    href: '/services/saas-development/analytics-dashboards',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="2" fill="rgba(34,197,94,0.3)" />
        <circle cx="16" cy="12" r="2" fill="rgba(34,197,94,0.3)" />
        <circle cx="12" cy="18" r="2" fill="rgba(34,197,94,0.3)" />
      </svg>
    ),
    title: 'API Platform Development',
    desc: 'RESTful and GraphQL APIs with comprehensive documentation, rate limiting, versioning, and webhook systems. Enable third-party integrations and build your developer ecosystem.',
    href: '/services/saas-development/api-platform',
  },
];

const saasMetrics = [
  {
    value: 'MRR Growth',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    stat: '3.2x',
    label: 'Average MRR increase',
    desc: 'We architect pricing models, trial-to-paid flows, and upsell triggers that drive monthly recurring revenue growth from day one.',
  },
  {
    value: 'Churn Reduction',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    stat: '-47%',
    label: 'Average churn reduction',
    desc: 'Usage analytics, health scoring, and proactive engagement features help identify at-risk accounts before they cancel.',
  },
  {
    value: 'CAC Optimization',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8l-8 8M8 8h8v8" />
      </svg>
    ),
    stat: '2.1x',
    label: 'Payback period improvement',
    desc: 'Self-serve onboarding, product-led growth features, and automated activation sequences reduce your customer acquisition cost.',
  },
  {
    value: 'LTV Improvement',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    stat: '+68%',
    label: 'Average LTV increase',
    desc: 'Expansion revenue features, add-on modules, and usage-based billing tiers increase the lifetime value of every customer.',
  },
];

const pricingModels = [
  {
    title: 'Flat-Rate Subscription',
    desc: 'Simple monthly or annual pricing with tiered feature access. Ideal for products with predictable resource consumption and clear feature differentiation between plans.',
    examples: 'Basecamp, Notion, Linear',
    bestFor: 'Productivity tools, project management',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'Per-Seat Pricing',
    desc: 'Price scales with team size. We build self-serve seat management with role-based access, team invitations, and automatic billing adjustments as teams grow or shrink.',
    examples: 'Slack, Figma, GitHub',
    bestFor: 'Collaboration & team tools',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Usage-Based (Metered)',
    desc: 'Pay for what you use — API calls, storage, compute, messages, or AI tokens. We build metering infrastructure, real-time usage dashboards, and predictable billing with spend alerts.',
    examples: 'AWS, Twilio, OpenAI',
    bestFor: 'API platforms, AI/ML tools, infrastructure',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'Hybrid Model',
    desc: 'Base subscription plus usage overages. Combines the predictability of flat-rate with the scalability of metered billing. We handle proration, credits, and complex invoice generation.',
    examples: 'Vercel, Supabase, PlanetScale',
    bestFor: 'Developer tools, data platforms',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0110 10" />
        <path d="M12 12l6-6" />
      </svg>
    ),
  },
  {
    title: 'Freemium',
    desc: 'Free tier with paid upgrades. We design activation funnels, feature gates, and upgrade prompts that convert free users to paying customers without friction.',
    examples: 'Dropbox, Canva, Zoom',
    bestFor: 'Consumer SaaS, PLG products',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Credit-Based',
    desc: 'Users purchase credits and consume them for actions (AI generations, reports, exports). We build credit ledgers, top-up flows, and usage analytics with Stripe integration.',
    examples: 'Jasper AI, Copy.ai, Remove.bg',
    bestFor: 'AI-powered tools, on-demand services',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5 1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5" />
      </svg>
    ),
  },
];

const resultStats = [
  { value: '150+', label: 'SaaS Products', sub: 'Shipped to market across fintech, healthtech, martech, and enterprise verticals' },
  { value: '$2B+', label: 'Client Valuation', sub: 'Combined portfolio valuation of SaaS products built by Codazz' },
  { value: '99.99%', label: 'Uptime SLA', sub: 'Enterprise-grade reliability with multi-region deployment and automated failover' },
  { value: '47%', label: 'Avg Churn Reduction', sub: 'Through proactive engagement features, health scoring, and retention automation' },
  { value: '3.2x', label: 'Avg MRR Growth', sub: 'Through optimized pricing, expansion revenue, and product-led growth features' },
  { value: '8 Weeks', label: 'Avg MVP Timeline', sub: 'From validated idea to deployed SaaS product with billing, auth, and core features' },
];

const clientLogos = [
  'Stripe', 'Shopify', 'Notion', 'Linear', 'Vercel',
  'Supabase', 'PostHog', 'Loom', 'Calendly', 'Figma',
  'Datadog', 'Cloudflare', 'MongoDB', 'Twilio', 'HubSpot',
];

const caseStudies = [
  {
    tag: 'FinTech SaaS',
    title: 'B2B Payment Orchestration Platform',
    desc: 'Built a multi-tenant payment platform with real-time transaction processing, compliance engine, and merchant analytics dashboard. Scaled from 0 to 2,400 merchants in 14 months.',
    metrics: [
      { value: '$4.2M', label: 'ARR' },
      { value: '2,400+', label: 'Active Merchants' },
      { value: '0.3%', label: 'Monthly Churn' },
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe Connect', 'AWS'],
  },
  {
    tag: 'HR Tech SaaS',
    title: 'Employee Engagement & Analytics Platform',
    desc: 'Developed a multi-tenant HR analytics platform with real-time pulse surveys, sentiment analysis, and predictive attrition modeling. Integrated with Workday, BambooHR, and Slack.',
    metrics: [
      { value: '$2.8M', label: 'ARR' },
      { value: '180K+', label: 'Active Users' },
      { value: '340%', label: 'YoY User Growth' },
    ],
    stack: ['React', 'Python', 'PostgreSQL', 'Redis', 'Kubernetes'],
  },
  {
    tag: 'MarTech SaaS',
    title: 'AI-Powered Content Marketing Platform',
    desc: 'Built an AI content platform with multi-channel publishing, SEO optimization engine, and performance analytics. Usage-based billing with Stripe for AI credits and seat-based team plans.',
    metrics: [
      { value: '$1.6M', label: 'ARR' },
      { value: '8,200+', label: 'Active Teams' },
      { value: '1.8%', label: 'Monthly Churn' },
    ],
    stack: ['Next.js', 'OpenAI', 'PostgreSQL', 'Stripe', 'Vercel'],
  },
];

const techStack = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Prisma', category: 'Database' },
  { name: 'Stripe Billing', category: 'Payments' },
  { name: 'Auth0', category: 'Auth' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Cloud' },
  { name: 'Docker', category: 'Cloud' },
  { name: 'Vercel', category: 'Cloud' },
  { name: 'Terraform', category: 'Cloud' },
];

const processSteps = [
  {
    num: '01',
    title: 'Market Validation',
    desc: 'We analyze your target market, competitive landscape, and user personas. Output: validated problem-solution fit, feature prioritization matrix, and go-to-market architecture.',
    duration: 'Week 1-2',
  },
  {
    num: '02',
    title: 'MVP Architecture',
    desc: 'System design for multi-tenancy, billing, auth, and core features. We define the data model, API contracts, and infrastructure topology to ensure you never hit a scaling wall.',
    duration: 'Week 2-3',
  },
  {
    num: '03',
    title: 'Core Build',
    desc: 'Two-week sprints with daily standups and continuous deployment. Frontend, backend, billing integration, and auth system built in parallel by specialized teams.',
    duration: 'Week 3-6',
  },
  {
    num: '04',
    title: 'Beta Launch',
    desc: 'Staged rollout to beta users with feature flags, error tracking, and user analytics. We gather feedback, fix issues, and iterate on the core experience before public launch.',
    duration: 'Week 6-7',
  },
  {
    num: '05',
    title: 'Scale & Optimize',
    desc: 'Performance optimization, load testing, security audit, and infrastructure hardening. We ensure your SaaS handles 10x traffic without degradation.',
    duration: 'Week 7-8',
  },
  {
    num: '06',
    title: 'Growth Features',
    desc: 'Post-launch feature development: analytics dashboards, team collaboration, API marketplace, and expansion revenue features. We stay with you as you scale.',
    duration: 'Ongoing',
  },
];

const architecturePatterns = [
  {
    title: 'Multi-Tenancy',
    desc: 'Shared infrastructure with isolated data. Each tenant gets their own schema, configuration, and permission boundaries while sharing compute resources for cost efficiency.',
    features: ['Database-per-tenant or schema-per-tenant', 'Tenant-scoped row-level security', 'Custom branding per organization', 'Data isolation & encryption'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <circle cx="12" cy="12" r="2" fill="rgba(34,197,94,0.3)" />
      </svg>
    ),
  },
  {
    title: 'Microservices',
    desc: 'Decomposed services that scale independently. Each service owns its data, communicates via APIs or events, and can be deployed without affecting the rest of the system.',
    features: ['Independent deployment cycles', 'Service mesh with observability', 'Circuit breakers & retries', 'API gateway with rate limiting'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="4" r="2" />
        <circle cx="20" cy="4" r="2" />
        <circle cx="4" cy="20" r="2" />
        <circle cx="20" cy="20" r="2" />
        <line x1="9.5" y1="9.5" x2="5.5" y2="5.5" />
        <line x1="14.5" y1="9.5" x2="18.5" y2="5.5" />
        <line x1="9.5" y1="14.5" x2="5.5" y2="18.5" />
        <line x1="14.5" y1="14.5" x2="18.5" y2="18.5" />
      </svg>
    ),
  },
  {
    title: 'Event-Driven',
    desc: 'Asynchronous event streaming for real-time features. Events are published, consumed, and processed independently, enabling real-time updates and decoupled workflows.',
    features: ['Event sourcing with replay', 'Real-time WebSocket updates', 'Async job processing queues', 'Webhook delivery with retries'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'API-First Design',
    desc: 'Every feature is an API endpoint first, UI second. This enables third-party integrations, mobile apps, and developer ecosystems from the ground up.',
    features: ['OpenAPI/Swagger documentation', 'Versioned REST & GraphQL APIs', 'SDK generation for clients', 'Developer portal & sandbox'],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
];

const securityFeatures = [
  {
    category: 'Authentication & Access',
    items: [
      'Single Sign-On (SAML 2.0, OAuth 2.0, OpenID Connect)',
      'Multi-factor authentication (TOTP, SMS, WebAuthn)',
      'Role-based access control with custom policies',
      'Session management with configurable timeouts',
      'IP allowlisting and geo-blocking',
      'Magic link and passwordless authentication',
    ],
  },
  {
    category: 'Data Protection',
    items: [
      'AES-256 encryption at rest for all data stores',
      'TLS 1.3 encryption for all data in transit',
      'Field-level encryption for sensitive PII/PHI',
      'Automated data backup with point-in-time recovery',
      'Data residency controls for regional compliance',
      'Secure key management with AWS KMS or Vault',
    ],
  },
  {
    category: 'Monitoring & Audit',
    items: [
      'Comprehensive audit logging for all user actions',
      'Real-time security event monitoring and alerting',
      'Automated vulnerability scanning and patching',
      'Penetration testing before every major release',
      'Incident response playbooks and escalation procedures',
      'SOC 2 continuous monitoring with evidence collection',
    ],
  },
  {
    category: 'Infrastructure Security',
    items: [
      'Network segmentation with VPC isolation',
      'Web Application Firewall (WAF) with custom rules',
      'DDoS protection and rate limiting',
      'Container security scanning in CI/CD pipelines',
      'Infrastructure as Code with security policy enforcement',
      'Zero-trust network architecture',
    ],
  },
];

const differentiators = [
  {
    title: '8-Week MVP Delivery',
    desc: 'From validated idea to deployed product in 8 weeks. We use pre-built SaaS scaffolding for auth, billing, and multi-tenancy so your team can focus on what makes your product unique.',
    stat: '8 weeks',
    statLabel: 'average MVP delivery',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Usage-Based Billing Expertise',
    desc: 'We have deep expertise in complex billing models — metered usage, credit systems, hybrid seat + usage pricing, and enterprise volume discounts. Stripe Billing configured to match your exact go-to-market model.',
    stat: '50+',
    statLabel: 'billing integrations shipped',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: '99.99% Uptime SLA',
    desc: 'Enterprise-grade infrastructure with multi-region deployment, auto-scaling, health checks, and automated failover. Your SaaS stays up even when individual services go down.',
    stat: '99.99%',
    statLabel: 'uptime guarantee',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'SOC 2 Certified Development',
    desc: 'Our development process is SOC 2 Type II certified. We build security controls, audit logging, and compliance frameworks into every SaaS product from the architecture phase.',
    stat: 'SOC 2',
    statLabel: 'Type II certified',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const complianceFrameworks = [
  {
    name: 'SOC 2 Type II',
    desc: 'Annual audits covering security, availability, processing integrity, confidentiality, and privacy. Full audit trail and controls documentation.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: 'GDPR',
    desc: 'Data processing agreements, consent management, right to erasure, data portability, and breach notification workflows built into every SaaS product.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    name: 'CCPA',
    desc: 'California Consumer Privacy Act compliance with do-not-sell controls, data access requests, and automated privacy policy management.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    name: 'ISO 27001',
    desc: 'Information security management system with risk assessment, access controls, incident response, and continuous monitoring aligned to ISO standards.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: 'Codazz took our SaaS from concept to $2M ARR in 11 months. Their multi-tenant architecture handled our enterprise clients from day one — zero re-architecture needed as we scaled.',
    name: 'David Chen',
    role: 'CEO',
    company: 'PayFlow',
  },
  {
    quote: 'The billing system they built handles 14 different pricing tiers, usage metering, and proration flawlessly. Our finance team went from manual invoicing to fully automated revenue recognition.',
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'DataSync',
  },
  {
    quote: 'We needed SOC 2 compliance for enterprise deals. Codazz had the audit controls, encryption, and access logging built in from sprint one. We closed our first Fortune 500 customer 3 months after launch.',
    name: 'Michael Torres',
    role: 'VP Engineering',
    company: 'SecureStack',
  },
  {
    quote: 'Their 8-week MVP timeline sounded aggressive, but they delivered on week 7. The product was polished enough to demo to investors, and we closed our Series A two months later.',
    name: 'Emily Park',
    role: 'Founder',
    company: 'InsightAI',
  },
];

const faqs = [
  {
    q: 'How long does it take to build a SaaS MVP?',
    a: 'Most SaaS MVPs ship in 8-12 weeks with Codazz. This includes market validation, architecture design, core feature development, billing integration, auth setup, and production deployment. Complex enterprise SaaS with advanced integrations may extend to 16-20 weeks. We scope aggressively and cut non-essential features to hit the timeline.',
  },
  {
    q: 'What tech stack do you use for SaaS development?',
    a: 'Frontend: Next.js, React, TypeScript. Backend: Node.js or Python. Database: PostgreSQL with Prisma ORM, Redis for caching. Payments: Stripe Billing. Auth: Auth0 or Clerk. Infrastructure: AWS with Kubernetes, Docker, and Terraform. API: REST and GraphQL with full OpenAPI documentation. We adapt based on your specific requirements.',
  },
  {
    q: 'How much does SaaS development cost?',
    a: 'SaaS development costs range from $50,000-$150,000 for a focused MVP and $150,000-$500,000+ for a full-featured platform. The exact cost depends on the number of features, integrations, compliance requirements, billing model complexity, and whether you need multi-tenancy from day one. We provide detailed estimates after a free discovery session.',
  },
  {
    q: 'Do you build multi-tenant architectures from day one?',
    a: 'Yes, and we strongly recommend it. Multi-tenancy is significantly more expensive to retrofit than to build correctly upfront. We architect data isolation (schema-per-tenant or row-level security), org-level permissions, tenant configuration, and custom branding at the database schema level from sprint one.',
  },
  {
    q: 'Can you handle enterprise security and compliance?',
    a: 'Absolutely. We implement SOC 2, GDPR, CCPA, HIPAA, and ISO 27001 compliance as core architecture decisions. This includes SSO (SAML/OAuth2), role-based access control with custom policies, comprehensive audit logging, encryption at rest and in transit, and automated compliance reporting dashboards.',
  },
  {
    q: 'Do you help with subscription billing and pricing models?',
    a: 'Yes. We design and implement billing architectures for every model: flat-rate, per-seat, usage-based (metered), tiered, credit-based, and hybrid pricing. We configure Stripe Billing with your exact logic, build self-serve upgrade/downgrade flows, handle proration, and set up revenue recognition and reporting.',
  },
  {
    q: 'What happens after the SaaS product launches?',
    a: 'We offer ongoing engineering retainers covering monitoring, bug fixes, feature development, performance optimization, and infrastructure scaling. Many clients engage us for 6-18 months post-launch. We also provide fractional CTO services and technical advisory for fundraising rounds.',
  },
  {
    q: 'Can you migrate our existing app to a SaaS model?',
    a: 'Yes. We have extensive experience converting monolithic applications to multi-tenant SaaS platforms. This includes data isolation strategy, billing system integration, user management refactoring, API layer development, and phased migration planning to ensure zero downtime during the transition.',
  },
];

/* ───────────────────────── INLINE STYLES ───────────────────────── */

const sectionPad: React.CSSProperties = { padding: 'clamp(60px, 10vw, 120px) 0' };
const sectionBorder: React.CSSProperties = { borderBottom: '1px solid rgba(255,255,255,0.05)' };
const labelStyle: React.CSSProperties = { fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 };
const h2Style: React.CSSProperties = { fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px', color: '#ffffff' };
const subStyle: React.CSSProperties = { fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, lineHeight: 1.7, margin: '0 0 56px' };
const cardStyle: React.CSSProperties = {
  padding: '36px 32px',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.35s ease',
};

function cardHoverIn(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
  e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
  e.currentTarget.style.transform = 'translateY(-4px)';
  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
}
function cardHoverOut(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
  e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
  e.currentTarget.style.transform = '';
  e.currentTarget.style.boxShadow = '';
}

/* ───────────────────────── COMPONENT ───────────────────────── */

export default function SaaSDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useReveal() as React.RefObject<HTMLElement>;
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;
  const s7 = useReveal() as React.RefObject<HTMLElement>;
  const s8 = useReveal() as React.RefObject<HTMLElement>;
  const s9 = useReveal() as React.RefObject<HTMLElement>;
  const s10 = useReveal() as React.RefObject<HTMLElement>;
  const s11 = useReveal() as React.RefObject<HTMLElement>;
  const s12 = useReveal() as React.RefObject<HTMLElement>;
  const s13 = useReveal() as React.RefObject<HTMLElement>;
  const s14 = useReveal() as React.RefObject<HTMLElement>;
  const s15 = useReveal() as React.RefObject<HTMLElement>;
  const s16 = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
        .reveal-d5 { transition-delay: 0.5s; }
        @keyframes marquee-l { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-r { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes pulse-green { 0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); } 50% { box-shadow: 0 0 0 8px rgba(34,197,94,0); } }
        .testimonial-card-hover:hover { border-color: rgba(34,197,94,0.2) !important; background: rgba(34,197,94,0.03) !important; transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.3); }
      `}</style>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'SaaS Development' },
          ]} />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center', ...sectionPad }}>
          <HeroBackground variant="wide" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              {/* Left — Copy */}
              <div>
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 28 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse-green 2s infinite' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', letterSpacing: '0.08em', textTransform: 'uppercase' }}>SaaS Development Company</span>
                </div>
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Build Scalable <span style={{ color: '#22c55e' }}>SaaS Platforms</span> That Drive Revenue
                </h1>
                <p className="reveal reveal-d2" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.7, maxWidth: 520 }}>
                  We are a full-service SaaS development company that builds multi-tenant platforms with enterprise-grade billing, authentication, analytics, and API-first architecture. From 8-week MVPs to products serving millions of users.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Start Your SaaS Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                    View Case Studies
                  </Link>
                </div>
                {/* Hero stats */}
                <div className="reveal reveal-d4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(12px, 2vw, 24px)' }}>
                  {heroStats.map((s, i) => (
                    <div key={i} style={{ textAlign: 'center', padding: '16px 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>{s.value}</div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Lead Form */}
              <div className="reveal reveal-d3">
                <ServiceHeroForm service="SaaS Development" />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 2 — AWARDS STRIP / TRUST BADGES
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s1} style={{ ...sectionBorder, padding: 'clamp(24px, 4vw, 40px) 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
                Recognized by Industry Leaders
              </p>
              <TrustBadges />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 3 — SAAS SERVICES GRID
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s2} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={labelStyle}>What We Build</div>
            <h2 className="reveal reveal-d1" style={h2Style}>SaaS Development Services</h2>
            <p className="reveal reveal-d2" style={subStyle}>End-to-end SaaS development from concept to scale. Each service designed for multi-tenant, enterprise-ready platforms.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {saasServices.map((s, i) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={cardStyle}
                    onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                    <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 16, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)' }}>
                      {s.icon}
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 16px' }}>{s.desc}</p>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 4 — SAAS METRICS THAT MATTER
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s3} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={labelStyle}>SaaS Metrics That Matter</div>
            <h2 className="reveal reveal-d1" style={h2Style}>We Build SaaS Products That Move the Needle</h2>
            <p className="reveal reveal-d2" style={subStyle}>Every architectural decision we make is tied to a business outcome. Here is how we help our clients win on the metrics that matter.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {saasMetrics.map((m, i) => (
                <div key={m.value} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ ...cardStyle, padding: '40px 32px' }}
                  onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {m.icon}
                    </div>
                    <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#22c55e', letterSpacing: '-0.03em' }}>{m.stat}</div>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>{m.value}</h3>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>{m.label}</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 5 — CLIENT LOGOS MARQUEE
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s4} style={{ padding: 'clamp(40px, 6vw, 80px) 0', ...sectionBorder, overflow: 'hidden', position: 'relative' }}>
          {/* Edge fades */}
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 'clamp(60px, 15vw, 200px)', height: '100%', background: 'linear-gradient(to right, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: 'clamp(60px, 15vw, 200px)', height: '100%', background: 'linear-gradient(to left, #000000, transparent)', zIndex: 2, pointerEvents: 'none' }} />

          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Trusted by 150+ SaaS Companies Worldwide
              </span>
            </div>
          </div>

          <div className="reveal" style={{ marginBottom: 10, display: 'flex', gap: 12, width: 'max-content', animation: 'marquee-l 35s linear infinite' }}>
            {[...clientLogos, ...clientLogos].map((name, i) => (
              <div key={`l-${i}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 28px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, minWidth: 120, height: 44, flexShrink: 0, background: 'rgba(255,255,255,0.03)', whiteSpace: 'nowrap' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '-0.01em' }}>{name}</span>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ display: 'flex', gap: 12, width: 'max-content', animation: 'marquee-r 40s linear infinite' }}>
            {[...clientLogos.slice(8), ...clientLogos, ...clientLogos.slice(0, 8)].map((name, i) => (
              <div key={`r-${i}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 28px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, minWidth: 120, height: 44, flexShrink: 0, background: 'rgba(255,255,255,0.03)', whiteSpace: 'nowrap' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '-0.01em' }}>{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 6 — CASE STUDIES
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s5} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={labelStyle}>Case Studies</div>
            <h2 className="reveal reveal-d1" style={h2Style}>SaaS Products We Have Built</h2>
            <p className="reveal reveal-d2" style={subStyle}>Real results from real SaaS products. Here are three platforms we built from zero to revenue.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {caseStudies.map((cs, i) => (
                <div key={i} className={`reveal reveal-d${Math.min(i + 1, 3)}`}
                  style={{ ...cardStyle, padding: 'clamp(32px, 4vw, 48px)', borderRadius: 28 }}
                  onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(24px, 4vw, 48px)', alignItems: 'start' }}>
                    <div>
                      <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: '#22c55e', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 100, padding: '5px 14px', marginBottom: 16 }}>
                        {cs.tag}
                      </span>
                      <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 16 }}>{cs.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 20px' }}>{cs.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {cs.stack.map(t => (
                          <span key={t} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, padding: '4px 12px' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                      {cs.metrics.map((m, mi) => (
                        <div key={mi} style={{ textAlign: 'center', padding: 20, borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.08)' }}>
                          <div style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>{m.value}</div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 8 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 7 — SAAS TECH STACK
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s6} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={labelStyle}>Technology</div>
            <h2 className="reveal reveal-d1" style={h2Style}>Our SaaS Tech Stack</h2>
            <p className="reveal reveal-d2" style={subStyle}>Battle-tested technologies chosen for scalability, developer experience, and long-term maintainability.</p>
            <div className="reveal reveal-d3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))', gap: 12 }}>
              {techStack.map(t => (
                <div key={t.name} style={{
                  padding: '20px 24px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 16,
                  background: 'rgba(255,255,255,0.015)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 8 — DEVELOPMENT PROCESS
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s7} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={labelStyle}>How We Build</div>
            <h2 className="reveal reveal-d1" style={h2Style}>SaaS Development Process</h2>
            <p className="reveal reveal-d2" style={subStyle}>A proven 6-phase process designed specifically for SaaS products. From market validation to growth features.</p>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {/* Timeline line */}
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))', zIndex: 0 }} />
              {processSteps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 'clamp(20px, 3vw, 36px)', paddingBottom: i < processSteps.length - 1 ? 'clamp(36px, 5vw, 56px)' : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                  <div style={{ paddingTop: 8, flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>{step.title}</h3>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 100, padding: '3px 12px' }}>{step.duration}</span>
                    </div>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0, maxWidth: 600 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 9 — SAAS ARCHITECTURE PATTERNS
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s8} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={labelStyle}>Architecture</div>
            <h2 className="reveal reveal-d1" style={h2Style}>SaaS Architecture We Build</h2>
            <p className="reveal reveal-d2" style={subStyle}>Enterprise-grade architecture patterns that scale from your first 10 customers to 10,000 without re-engineering.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {architecturePatterns.map((a, i) => (
                <div key={a.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`}
                  style={{ ...cardStyle, padding: '40px 32px' }}
                  onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ marginBottom: 24, width: 64, height: 64, borderRadius: 18, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {a.icon}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{a.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 20 }}>{a.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {a.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 9B — SAAS PRICING MODELS
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s15} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={labelStyle}>Billing Architecture</div>
            <h2 className="reveal reveal-d1" style={h2Style}>SaaS Pricing Models We Implement</h2>
            <p className="reveal reveal-d2" style={subStyle}>Your pricing model is your growth engine. We architect billing systems for every model, powered by Stripe with real-time metering, proration, and self-serve management.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {pricingModels.map((pm, i) => (
                <div key={pm.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`}
                  style={{ ...cardStyle, padding: '36px 28px' }}
                  onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {pm.icon}
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{pm.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 16px' }}>{pm.desc}</p>
                  <div style={{ padding: '12px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', marginBottom: 8 }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Examples</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{pm.examples}</div>
                  </div>
                  <div style={{ padding: '12px 16px', borderRadius: 12, background: 'rgba(34,197,94,0.03)', border: '1px solid rgba(34,197,94,0.08)' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Best For</div>
                    <div style={{ fontSize: 13, color: '#22c55e', fontWeight: 600 }}>{pm.bestFor}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 9C — RESULTS & IMPACT
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s16} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ ...labelStyle, textAlign: 'center' }}>Results & Impact</div>
            <h2 className="reveal reveal-d1" style={{ ...h2Style, textAlign: 'center', maxWidth: 600, margin: '0 auto 16px' }}>The Numbers Behind Our SaaS Products</h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>Real metrics from 150+ SaaS products we have built and scaled across industries.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {resultStats.map((r, i) => (
                <div key={r.label} className={`reveal`}
                  style={{ ...cardStyle, padding: '40px 32px', textAlign: 'center', transitionDelay: `${i * 0.08}s` }}
                  onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                    fontWeight: 800,
                    color: '#22c55e',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}>
                    {r.value}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>{r.label}</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{r.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 10 — WHY CODAZZ FOR SAAS
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s9} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={labelStyle}>Why Codazz</div>
            <h2 className="reveal reveal-d1" style={h2Style}>Why Companies Choose Codazz for SaaS Development</h2>
            <p className="reveal reveal-d2" style={subStyle}>Four reasons we are the SaaS development company founders and CTOs trust with their most important product.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {differentiators.map((d, i) => (
                <div key={d.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`}
                  style={{ ...cardStyle, padding: '40px 32px', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {d.icon}
                    </div>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{d.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 20px', flex: 1 }}>{d.desc}</p>
                  <div style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.08)' }}>
                    <span style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 800, color: '#22c55e' }}>{d.stat}</span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginLeft: 8 }}>{d.statLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 11 — COMPLIANCE
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s10} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ ...labelStyle, textAlign: 'center' }}>Compliance & Security</div>
            <h2 className="reveal reveal-d1" style={{ ...h2Style, textAlign: 'center', maxWidth: 600, margin: '0 auto 16px' }}>Enterprise-Grade Compliance Built In</h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>Security and compliance are architecture decisions, not afterthoughts. We build every SaaS platform with these frameworks from day one.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {complianceFrameworks.map((c, i) => (
                <div key={c.name} className={`reveal reveal-d${Math.min(i + 1, 4)}`}
                  style={{ ...cardStyle, padding: '40px 32px', textAlign: 'center' }}
                  onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ width: 72, height: 72, borderRadius: 20, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    {c.icon}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{c.name}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 11B — SECURITY FEATURES DEEP DIVE
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ ...labelStyle, textAlign: 'center' }}>Security Architecture</div>
            <h2 style={{ ...h2Style, textAlign: 'center', maxWidth: 640, margin: '0 auto 16px' }}>Security Features Built Into Every SaaS Product</h2>
            <p style={{ ...subStyle, textAlign: 'center', maxWidth: 580, margin: '0 auto 56px' }}>Security is not a feature we add later. These controls are embedded in our architecture from sprint one.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {securityFeatures.map((sf, i) => (
                <div key={sf.category} style={{
                  ...cardStyle,
                  padding: '32px 28px',
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#22c55e', letterSpacing: '-0.01em', marginBottom: 20, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.08em' }}>{sf.category}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {sf.items.map((item, ii) => (
                      <li key={ii} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 6L9 17l-5-5" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 12 — TESTIMONIALS
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s11} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ ...labelStyle, textAlign: 'center' }}>Testimonials</div>
            <h2 className="reveal reveal-d1" style={{ ...h2Style, textAlign: 'center', margin: '0 auto 56px' }}>What Our SaaS Clients Say</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={t.name} className={`reveal testimonial-card-hover`}
                  style={{ ...cardStyle, padding: '36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24, transitionDelay: `${i * 0.1}s` }}>
                  {/* Quote icon */}
                  <div>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(34,197,94,0.25)" style={{ marginBottom: 16 }}>
                      <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                    </svg>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontStyle: 'italic', margin: 0 }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 20 }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#22c55e', flexShrink: 0 }}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 13 — FAQ
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s12} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="reveal" style={{ ...labelStyle, textAlign: 'center' }}>FAQ</div>
            <h2 className="reveal reveal-d1" style={{ ...h2Style, textAlign: 'center', margin: '0 auto 48px' }}>Frequently Asked Questions About SaaS Development</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal"
                  style={{
                    background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                    border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`,
                    borderRadius: 20,
                    overflow: 'hidden',
                    transition: '0.3s',
                    transitionDelay: `${i * 0.04}s`,
                  }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 28px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    gap: 16,
                  }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{
                      width: 30, height: 30, borderRadius: '50%',
                      background: openFaq === i ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.03)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  <div style={{
                    maxHeight: openFaq === i ? 300 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}>
                    <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 14 — CTA WITH FORM
        ══════════════════════════════════════════════════════════════ */}
        <section ref={s13} style={{ ...sectionPad, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              {/* Left — CTA copy */}
              <div>
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 28 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse-green 2s infinite' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Get Started</span>
                </div>
                <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 20px' }}>
                  Ready to Build Your <span style={{ color: '#22c55e' }}>SaaS Platform?</span>
                </h2>
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 32px', maxWidth: 480 }}>
                  150+ SaaS products shipped. $2B+ in client valuation. From 8-week MVPs to enterprise platforms serving millions of users. Tell us about your SaaS idea and get a custom architecture proposal within 48 hours.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    'Free architecture consultation',
                    'Custom project proposal within 48 hours',
                    'Fixed-price or retainer engagement models',
                    'NDA protection from day one',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'rgba(255,255,255,0.6)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="reveal reveal-d4" style={{ marginTop: 40 }}>
                  <TrustBadges compact />
                </div>
              </div>

              {/* Right — Lead Form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm service="SaaS Development" />
              </div>
            </div>
          </div>
        </section>

        {/* Industries strip */}
        <section ref={s14} style={{ padding: 'clamp(40px, 6vw, 60px) 0', ...sectionBorder }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p className="reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Industries We Serve</p>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
                { name: 'Real Estate', href: '/industries/real-estate' },
                { name: 'HR Tech', href: '/industries/hr-tech' },
              ].map(ind => (
                <Link key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            RELATED SERVICES
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={labelStyle}>Related Services</div>
            <h2 style={{ ...h2Style, marginBottom: 48 }}>Explore More Development Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {[
                {
                  title: 'Mobile App Development',
                  desc: 'Native and cross-platform mobile apps for iOS and Android. React Native, Flutter, and Swift development with CI/CD pipelines and app store optimization.',
                  href: '/services/mobile-app-development',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <line x1="12" y1="18" x2="12" y2="18" />
                    </svg>
                  ),
                },
                {
                  title: 'AI Development',
                  desc: 'Custom AI and machine learning solutions. LLM integration, computer vision, NLP, predictive analytics, and AI-powered automation for your business.',
                  href: '/services/ai-development',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" />
                      <path d="M6 10a6 6 0 0012 0" />
                      <path d="M12 16v6M8 22h8" />
                    </svg>
                  ),
                },
                {
                  title: 'Web Development',
                  desc: 'High-performance web applications and platforms. Next.js, React, Node.js with serverless architecture, headless CMS, and enterprise integrations.',
                  href: '/services/web-development',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  ),
                },
                {
                  title: 'UI/UX Design',
                  desc: 'User-centered design for SaaS products. Design systems, user research, wireframing, prototyping, and high-fidelity UI design that converts.',
                  href: '/services/ui-ux-design',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M12 19l7-7 3 3-7 7-3-3z" />
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                      <path d="M2 2l7.586 7.586" />
                      <circle cx="11" cy="11" r="2" />
                    </svg>
                  ),
                },
              ].map(svc => (
                <Link key={svc.title} href={svc.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    ...cardStyle,
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    height: '100%',
                  }}
                    onMouseEnter={cardHoverIn}
                    onMouseLeave={cardHoverOut}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: 'rgba(34,197,94,0.06)',
                      border: '1px solid rgba(34,197,94,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {svc.icon}
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', margin: 0 }}>{svc.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{svc.desc}</p>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'auto' }}>
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
