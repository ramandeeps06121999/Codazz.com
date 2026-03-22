'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'SaaS Development' },
  ],

  hero: {
    badge: 'SaaS Development Company',
    title: 'Build Scalable',
    titleAccent: 'SaaS Platforms That Drive Revenue',
    description:
      'We are a full-service SaaS development company that builds multi-tenant platforms with enterprise-grade billing, authentication, analytics, and API-first architecture. From 8-week MVPs to products serving millions of users.',
    service: 'SaaS Development',
    stats: [
      { value: '150+', label: 'SaaS Products Shipped' },
      { value: '$2B+', label: 'Client Valuation' },
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '8 Wks', label: 'MVP Timeline' },
    ],
  },

  awards: [
    'Clutch Top SaaS Development 2026',
    'Clutch Top Generative AI 2026',
    'AWS Advanced Tier Partner',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'Google Cloud Partner',
    'Stripe Verified Partner',
    'Top SaaS Company - GoodFirms',
  ],

  whySection: {
    title: 'Why Companies Choose Codazz for SaaS Development',
    cards: [
      {
        icon: '⏱️',
        title: '8-Week MVP Delivery',
        desc: 'From validated idea to deployed product in 8 weeks. We use pre-built SaaS scaffolding for auth, billing, and multi-tenancy so your team can focus on what makes your product unique.',
      },
      {
        icon: '💰',
        title: 'Usage-Based Billing Expertise',
        desc: 'We have deep expertise in complex billing models — metered usage, credit systems, hybrid seat + usage pricing, and enterprise volume discounts. Stripe Billing configured to match your exact go-to-market model.',
      },
      {
        icon: '✅',
        title: '99.99% Uptime SLA',
        desc: 'Enterprise-grade infrastructure with multi-region deployment, auto-scaling, health checks, and automated failover. Your SaaS stays up even when individual services go down.',
      },
      {
        icon: '🛡️',
        title: 'SOC 2 Certified Development',
        desc: 'Our development process is SOC 2 Type II certified. We build security controls, audit logging, and compliance frameworks into every SaaS product from the architecture phase.',
      },
    ],
    whoNeedsTitle: 'Who Needs SaaS Development?',
    whoNeedsItems: [
      {
        icon: '🚀',
        title: 'Startup Founders',
        desc: 'Launch your SaaS MVP in 8-12 weeks with billing, auth, and multi-tenancy built in from day one.',
      },
      {
        icon: '🏢',
        title: 'Enterprise Teams',
        desc: 'Convert monolithic applications to scalable multi-tenant SaaS platforms with zero-downtime migration.',
      },
      {
        icon: '📈',
        title: 'Growth-Stage Companies',
        desc: 'Scale from 100 to 100,000 users with performance optimization, infrastructure hardening, and expansion revenue features.',
      },
      {
        icon: '💡',
        title: 'Product Managers',
        desc: 'Build analytics dashboards, self-serve onboarding, and product-led growth features that drive adoption and retention.',
      },
      {
        icon: '🔒',
        title: 'Compliance-First Organizations',
        desc: 'SOC 2, GDPR, HIPAA, and ISO 27001 compliance baked into your SaaS architecture from sprint one.',
      },
    ],
    metricsTitle: 'SaaS Metrics We Drive',
    metrics: [
      { metric: '3.2x', label: 'Avg MRR Growth', desc: 'Optimized pricing, trial-to-paid flows, and upsell triggers' },
      { metric: '-47%', label: 'Avg Churn Reduction', desc: 'Health scoring, proactive engagement, and retention automation' },
      { metric: '2.1x', label: 'CAC Payback Improvement', desc: 'Self-serve onboarding and product-led growth features' },
      { metric: '+68%', label: 'Avg LTV Increase', desc: 'Expansion revenue, add-on modules, and usage-based billing' },
    ],
    closingText:
      'Every architectural decision we make is tied to a business outcome. We do not just build SaaS platforms — we engineer revenue machines. From multi-tenant data isolation to Stripe-powered billing with real-time metering, proration, and self-serve management, our SaaS products are designed to scale from your first 10 customers to 10,000 without re-architecting. Our 150+ shipped products and $2B+ in client valuation are proof that our approach works.',
  },

  subServices: [
    {
      title: 'SaaS MVP Development',
      tag: 'Launch Fast',
      desc: 'Launch a lean, investor-ready SaaS MVP in 8-12 weeks. We validate your core hypothesis, build the minimum lovable product, and ship to market fast so you can acquire users without burning runway.',
      chips: ['Next.js', 'Stripe', 'Auth0', 'PostgreSQL', 'Vercel'],
      href: '/services/saas-development/saas-mvp-development',
      icon: '⚡',
    },
    {
      title: 'Multi-Tenant Architecture',
      tag: 'Scalability',
      desc: 'Scalable multi-tenant systems with data isolation, org-level permissions, and tenant-scoped configurations. Built to handle 10 customers or 10,000 without re-architecting.',
      chips: ['Row-Level Security', 'Schema Isolation', 'Custom Branding', 'Kubernetes'],
      href: '/services/saas-development/multi-tenant-architecture',
      icon: '🏗️',
    },
    {
      title: 'Billing & Subscriptions',
      tag: 'Monetization',
      desc: 'Stripe-powered subscription billing with support for flat-rate, per-seat, usage-based, and hybrid pricing. Self-serve upgrades, proration, invoicing, and revenue recognition built in.',
      chips: ['Stripe Billing', 'Metered Usage', 'Proration', 'Invoicing'],
      href: '/services/saas-development/billing-subscriptions',
      icon: '💳',
    },
    {
      title: 'Auth & SSO',
      tag: 'Security',
      desc: 'Enterprise-grade authentication with SAML SSO, OAuth 2.0, magic links, MFA, and role-based access control. Integrate with Auth0, Clerk, or custom identity providers.',
      chips: ['SAML SSO', 'OAuth 2.0', 'MFA', 'RBAC', 'Auth0'],
      href: '/services/saas-development/auth-sso',
      icon: '🔐',
    },
    {
      title: 'Analytics Dashboards',
      tag: 'Insights',
      desc: 'Real-time analytics dashboards for your users and internal teams. Track MRR, churn, feature adoption, and custom KPIs with interactive charts, filters, and export capabilities.',
      chips: ['Real-Time Data', 'Custom KPIs', 'Charts', 'Exports'],
      href: '/services/saas-development/analytics-dashboards',
      icon: '📊',
    },
    {
      title: 'API Platform Development',
      tag: 'Developer Ecosystem',
      desc: 'RESTful and GraphQL APIs with comprehensive documentation, rate limiting, versioning, and webhook systems. Enable third-party integrations and build your developer ecosystem.',
      chips: ['REST', 'GraphQL', 'Webhooks', 'OpenAPI', 'SDKs'],
      href: '/services/saas-development/api-platform',
      icon: '🔌',
    },
  ],

  servicesHeading: {
    label: 'What We Build',
    title: 'SaaS Development Services',
    titleDim: 'End-to-End Platform Engineering.',
    description:
      'End-to-end SaaS development from concept to scale. Each service designed for multi-tenant, enterprise-ready platforms.',
  },

  benefits: {
    label: 'Why Codazz',
    title: 'Built for SaaS Success',
    titleDim: 'From MVP to Market Leader.',
    items: [
      {
        icon: '🚀',
        title: 'Rapid MVP Delivery',
        desc: 'Pre-built SaaS scaffolding for auth, billing, and multi-tenancy cuts your time-to-market to 8 weeks. Focus on what makes your product unique while we handle the infrastructure.',
      },
      {
        icon: '📈',
        title: 'Revenue-Optimized Architecture',
        desc: 'We architect pricing models, trial-to-paid flows, and upsell triggers that drive 3.2x average MRR growth. Your billing system becomes your growth engine.',
      },
      {
        icon: '🔒',
        title: 'Enterprise-Grade Security',
        desc: 'SOC 2 Type II certified development process. SSO, MFA, encryption, audit logging, and compliance frameworks built in from day one — not bolted on later.',
      },
      {
        icon: '⚡',
        title: 'Infinite Scalability',
        desc: 'Multi-region deployment, auto-scaling, and 99.99% uptime SLA. Our architecture handles 10x traffic spikes without degradation or emergency re-engineering.',
      },
      {
        icon: '🔄',
        title: 'Product-Led Growth',
        desc: 'Self-serve onboarding, in-app analytics, feature gates, and automated activation sequences that reduce CAC and improve payback period by 2.1x.',
      },
      {
        icon: '🤝',
        title: 'Post-Launch Partnership',
        desc: 'Ongoing engineering retainers for monitoring, feature development, performance optimization, and infrastructure scaling. We stay with you from MVP to IPO.',
      },
    ],
  },

  clientLogos: [
    'Stripe', 'Shopify', 'Notion', 'Linear', 'Vercel',
    'Supabase', 'PostHog', 'Loom', 'Calendly', 'Figma',
    'Datadog', 'Cloudflare', 'MongoDB', 'Twilio', 'HubSpot',
  ],

  bigStats: [
    { value: '150+', label: 'SaaS Products', desc: 'Shipped across fintech, healthtech, martech, and enterprise verticals' },
    { value: '$2B+', label: 'Client Valuation', desc: 'Combined portfolio valuation of SaaS products built by Codazz' },
    { value: '99.99%', label: 'Uptime SLA', desc: 'Enterprise-grade reliability with multi-region deployment' },
    { value: '47%', label: 'Avg Churn Reduction', desc: 'Through proactive engagement and retention automation' },
    { value: '3.2x', label: 'Avg MRR Growth', desc: 'Through optimized pricing and product-led growth features' },
    { value: '8 Weeks', label: 'Avg MVP Timeline', desc: 'From validated idea to deployed SaaS with billing and auth' },
  ],

  advancedTech: {
    row1: [
      { icon: '🏗️', title: 'Multi-Tenancy', desc: 'Shared infrastructure with isolated data, tenant-scoped RLS, and custom branding per org' },
      { icon: '🔀', title: 'Microservices', desc: 'Decomposed services that scale independently with service mesh and observability' },
      { icon: '⚡', title: 'Event-Driven', desc: 'Async event streaming for real-time updates, webhooks, and decoupled workflows' },
      { icon: '🔌', title: 'API-First Design', desc: 'Every feature is an API endpoint first with OpenAPI docs and SDK generation' },
      { icon: '🔐', title: 'Zero-Trust Security', desc: 'Network segmentation, WAF, DDoS protection, and container security scanning' },
      { icon: '📊', title: 'Real-Time Analytics', desc: 'WebSocket-powered dashboards with MRR, churn, and feature adoption tracking' },
    ],
    row2: [
      { icon: '💳', title: 'Stripe Billing', desc: 'Flat-rate, per-seat, usage-based, hybrid, freemium, and credit-based pricing models' },
      { icon: '🔑', title: 'SSO & SAML', desc: 'Enterprise auth with SAML 2.0, OAuth, magic links, MFA, and RBAC' },
      { icon: '☁️', title: 'Multi-Region Deploy', desc: 'Auto-scaling Kubernetes clusters with health checks and automated failover' },
      { icon: '🛡️', title: 'SOC 2 Compliance', desc: 'Continuous monitoring, audit logging, and evidence collection for Type II' },
      { icon: '🌐', title: 'GDPR & CCPA', desc: 'Consent management, right to erasure, data portability, and breach notification' },
      { icon: '🔄', title: 'CI/CD Pipelines', desc: 'Automated testing, deployment, and rollback with feature flags and canary releases' },
    ],
  },

  techStack: [
    { category: 'Frontend', techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'GraphQL', 'REST APIs'] },
    { category: 'Database', techs: ['PostgreSQL', 'Redis', 'Prisma', 'MongoDB'] },
    { category: 'Payments', techs: ['Stripe Billing', 'Stripe Connect', 'Revenue Cat'] },
    { category: 'Authentication', techs: ['Auth0', 'Clerk', 'SAML SSO', 'OAuth 2.0'] },
    { category: 'Cloud & Infra', techs: ['AWS', 'Kubernetes', 'Docker', 'Vercel', 'Terraform'] },
  ],

  pricingGuide: {
    title: 'How Much Does SaaS Development Cost?',
    description:
      'SaaS development costs depend on feature scope, billing model complexity, compliance requirements, and multi-tenancy architecture. Codazz offers fixed-price quotes after a free discovery session.',
    tiers: [
      {
        icon: '\uD83D\uDCB0',
        name: 'SaaS MVP',
        price: 'Starting at $38,000',
        desc: 'Core product features, Stripe billing, authentication (SSO), multi-tenancy, analytics dashboard, and production deployment in 8-12 weeks.',
        timeline: '\u23F1 8–12 weeks',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Growth-Stage SaaS',
        price: 'Starting at $90,000',
        desc: 'Full-featured platform with usage-based billing, API ecosystem, advanced analytics, integrations marketplace, and SOC 2 compliance.',
        timeline: '\u23F1 4–7 months',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Enterprise SaaS Platform',
        price: 'Starting at $225,000',
        desc: 'Multi-region deployment, SAML SSO, HIPAA/SOC 2/GDPR compliance, white-label capabilities, advanced RBAC, and dedicated infrastructure.',
        timeline: '\u23F1 6–12 months',
      },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a SaaS Development Company',
    description:
      'Choosing the wrong SaaS partner means costly re-architecture, billing bugs, and churn. Here is what to evaluate before you commit.',
    criteria: [
      { icon: '\uD83D\uDCCB', title: 'Proven Portfolio', desc: 'Look for 100+ SaaS products shipped with measurable metrics — MRR growth, churn reduction, and uptime stats.' },
      { icon: '\uD83D\uDC68\u200D\uD83D\uDCBB', title: 'Senior Engineers', desc: '8+ years avg experience. Deep expertise in Next.js, Node.js, PostgreSQL, Stripe Billing, and Kubernetes.' },
      { icon: '\uD83D\uDCB2', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope, milestones, and deliverables — from MVP to scale.' },
      { icon: '\uD83D\uDEE1\uFE0F', title: 'Post-Launch SLAs', desc: 'Ongoing monitoring, feature development, infrastructure scaling, and 99.99% uptime guarantees.' },
      { icon: '\uD83D\uDD12', title: 'Security Certs', desc: 'SOC 2 Type II, ISO 27001, HIPAA, GDPR, and PCI-DSS certified development process.' },
      { icon: '\uD83D\uDD50', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and fractional CTO advisory available.' },
    ],
  },

  faqs: [
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
      a: 'SaaS development costs start at $38,000 for a focused MVP and scale to $225,000+ for a full-featured platform. The exact cost depends on the number of features, integrations, compliance requirements, billing model complexity, and whether you need multi-tenancy from day one. We provide detailed estimates after a free discovery session.',
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
  ],

  faqDescription:
    'Get answers to common questions about SaaS development, pricing, timelines, technology choices, and our development process. From MVP to enterprise scale.',

  relatedBlogs: [
    {
      title: 'How to Build a Multi-Tenant SaaS Architecture in 2026',
      desc: 'A technical deep-dive into database-per-tenant vs row-level security, tenant configuration, and scaling strategies for modern SaaS platforms.',
      href: '/blog/multi-tenant-saas-architecture',
    },
    {
      title: 'SaaS Pricing Models: Choosing the Right Monetization Strategy',
      desc: 'Flat-rate, per-seat, usage-based, or hybrid? How to choose the pricing model that maximizes revenue for your SaaS product.',
      href: '/blog/saas-pricing-models',
    },
    {
      title: 'From MVP to $1M ARR: The SaaS Development Playbook',
      desc: 'Lessons from 150+ SaaS products we have built — from market validation and MVP launch to scaling and growth engineering.',
      href: '/blog/saas-mvp-to-million-arr',
    },
  ],

  relatedServices: [
    {
      name: 'Mobile App Development',
      desc: 'Native and cross-platform mobile apps for iOS and Android with CI/CD pipelines and app store optimization.',
      href: '/services/mobile-app-development',
    },
    {
      name: 'AI Development',
      desc: 'Custom AI and machine learning solutions. LLM integration, computer vision, NLP, and predictive analytics.',
      href: '/services/ai-development',
    },
    {
      name: 'Web Development',
      desc: 'High-performance web applications with Next.js, React, and serverless architecture.',
      href: '/services/web-development',
    },
    {
      name: 'UI/UX Design',
      desc: 'User-centered design for SaaS products. Design systems, user research, wireframing, and high-fidelity UI.',
      href: '/services/ui-ux-design',
    },
  ],

  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'HR Tech', href: '/industries/hr-tech' },
  ],

  statsH2: { line1: 'SaaS Development Results', line2: 'That Speak for Themselves.' },
  advancedTechH2: { line1: 'SaaS Development Technologies', line2: 'Built Into Every Platform.' },
  techStackH2: { line1: 'SaaS Development Stack.', line2: '40+ Technologies.' },
  blogsH2: { line1: 'SaaS Development', line2: 'Insights & Guides.' },
};

export default function SaaSDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
