'use client';
import SolutionPageTemplate, { SolutionPageData } from '@/components/SolutionPageTemplate';

const pageData: SolutionPageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Stripe Clone' },
  ],
  hero: {
    badge: 'Payment Platform Development',
    title: 'Build a Payment Platform',
    titleAccent: 'Like Stripe.',
    description: 'Payment processing, subscription billing, fraud detection, and developer-first APIs \u2014 we build the complete fintech infrastructure your business requires.',
    stats: [
      { value: '$120K+', label: 'Starting Cost' },
      { value: '6-14 Mo', label: 'Development' },
      { value: '135+', label: 'Currencies' },
    ],
  },
  features: {
    label: 'Core Features',
    title: 'Everything Your Payment Platform',
    titleDim: 'Needs.',
    items: [
      { icon: '\ud83d\udcb3', title: 'Payment Processing', desc: 'High-throughput payment gateway supporting credit/debit cards, ACH, wire transfers, and digital wallets with real-time authorization and settlement.' },
      { icon: '\ud83d\udd04', title: 'Subscription Billing', desc: 'Flexible recurring billing engine with plan management, proration, trial periods, usage-based pricing, dunning, and automated invoice generation.' },
      { icon: '\ud83d\udcc4', title: 'Invoicing System', desc: 'Professional invoice creation and management with customizable templates, automatic reminders, partial payments, and tax calculation.' },
      { icon: '\ud83d\udee1\ufe0f', title: 'Fraud Detection', desc: 'AI-powered fraud prevention with real-time risk scoring, velocity checks, device fingerprinting, 3D Secure, and customizable fraud rules.' },
      { icon: '\ud83c\udf0d', title: 'Multi-Currency Support', desc: 'Process payments in 135+ currencies with automatic conversion, local payment methods, and region-specific compliance for global operations.' },
      { icon: '\u26a1', title: 'Developer APIs', desc: 'RESTful and GraphQL APIs with comprehensive SDKs, webhooks, idempotency keys, sandbox environment, and interactive API documentation.' },
      { icon: '\ud83d\udcb0', title: 'Payout Management', desc: 'Automated merchant payouts with configurable schedules, split payments, marketplace disbursements, and multi-bank account support.' },
      { icon: '\ud83d\udcca', title: 'Reporting Dashboard', desc: 'Real-time analytics with transaction monitoring, revenue metrics, churn analysis, reconciliation reports, and customizable data exports.' },
      { icon: '\ud83d\udd12', title: 'PCI Compliance', desc: 'PCI DSS Level 1 compliant infrastructure with tokenization, encrypted vault storage, secure hosted payment fields, and audit trail logging.' },
      { icon: '\ud83d\udd14', title: 'Webhooks & Events', desc: 'Reliable event notification system with retry logic, event filtering, delivery monitoring, and comprehensive webhook management console.' },
    ],
  },
  process: {
    label: 'Development Process',
    title: 'How We Build',
    titleDim: 'Your Payment Platform.',
    steps: [
      { num: '01', title: 'Discovery & Compliance', duration: '3-4 weeks', desc: 'Requirements analysis, regulatory research, PCI compliance planning, and system architecture design.', deliverables: ['Requirements Doc', 'Compliance Plan', 'System Architecture', 'PCI Roadmap'] },
      { num: '02', title: 'Core Payment Engine', duration: '16-20 weeks', desc: 'Payment processing, tokenization, merchant onboarding, basic APIs, and transaction management.', deliverables: ['Payment Gateway', 'Tokenization', 'Merchant Onboarding', 'REST APIs'] },
      { num: '03', title: 'Advanced Features', duration: '12-18 weeks', desc: 'Subscription billing, fraud detection, multi-currency, developer portal, and reporting dashboard.', deliverables: ['Subscription Billing', 'Fraud Detection', 'Multi-Currency', 'Developer Portal'] },
      { num: '04', title: 'Security & Compliance', duration: '4-6 weeks', desc: 'PCI audit preparation, penetration testing, security hardening, and compliance documentation.', deliverables: ['PCI Audit Prep', 'Pen Testing', 'Security Hardening', 'Compliance Docs'] },
      { num: '05', title: 'Launch & Certification', duration: '3-4 weeks', desc: 'PCI certification, staged rollout, monitoring setup, and post-launch support infrastructure.', deliverables: ['PCI Certification', 'Staged Rollout', 'Monitoring Setup', 'Support Infrastructure'] },
    ],
  },
  techStack: [
    { label: 'Backend', chips: ['Node.js', 'Go', 'gRPC', 'Microservices'] },
    { label: 'Database', chips: ['PostgreSQL', 'Redis', 'TimescaleDB', 'Vault'] },
    { label: 'Frontend', chips: ['React', 'Next.js', 'TypeScript', 'Storybook'] },
    { label: 'Infrastructure', chips: ['AWS', 'Docker', 'Kubernetes', 'Terraform'] },
  ],
  pricing: {
    plans: [
      {
        tier: 'MVP',
        price: '$120,000 - $180,000',
        desc: 'Core payment processing with card payments, basic APIs, merchant dashboard, and essential security. Perfect for validating your fintech concept.',
        features: ['Payment Processing', 'Merchant Dashboard', 'REST APIs & SDKs', 'Basic Reporting', 'PCI Compliance'],
      },
      {
        tier: 'Full Product',
        price: '$250,000 - $400,000',
        desc: 'Complete payment infrastructure with subscription billing, fraud detection, multi-currency, developer portal, and enterprise analytics.',
        features: ['Everything in MVP', 'Subscription Billing', 'AI Fraud Detection', 'Multi-Currency', 'Developer Portal', 'Payout Management'],
        recommended: true,
      },
    ],
  },
  faqs: [
    { q: 'How much does it cost to build a payment platform like Stripe?', a: 'A payment platform like Stripe typically costs between $120,000 and $400,000 depending on features and regulatory requirements. An MVP with core payment processing and basic APIs can start around $120,000, while a full-featured platform with subscription billing, fraud detection, and multi-currency support ranges from $250,000 to $400,000.' },
    { q: 'How long does it take to build a Stripe-like platform?', a: 'An MVP typically takes 6-7 months. A full-featured payment platform with subscription billing, fraud detection, developer APIs, and compliance features takes 10-14 months from start to launch.' },
    { q: 'What tech stack is best for a payment platform?', a: 'We recommend Node.js or Go for high-throughput backend services, PostgreSQL for transactional data, Redis for caching, React for the merchant dashboard, and robust encryption libraries. PCI DSS compliance infrastructure is built from the ground up.' },
    { q: 'How do you handle PCI compliance?', a: 'We architect payment platforms with PCI DSS Level 1 compliance in mind, including tokenization, encrypted data storage, secure API endpoints, audit logging, and regular penetration testing. We work with certified QSAs to ensure full compliance.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer ongoing maintenance, security monitoring, compliance updates, feature development, and scaling support after launch. Our team ensures your platform stays secure, compliant, and performant.' },
  ],
  faqDescription: 'Everything you need to know about building a Stripe-like payment platform.',
  otherSolutions: [
    { name: 'Shopify Clone', href: '/solutions/shopify-clone', category: 'E-Commerce', price: '$80,000+' },
    { name: 'Slack Clone', href: '/solutions/slack-clone', category: 'Communication', price: '$70,000+' },
    { name: 'Amazon Clone', href: '/solutions/amazon-clone', category: 'Marketplace', price: '$100,000+' },
  ],
  ctaTitle: 'Ready to Build Your Payment Platform?',
  ctaDescription: 'From checkout to settlement \u2014 let us build the payment infrastructure that powers your financial ecosystem.',
};

export default function StripeClonePage() {
  return <SolutionPageTemplate data={pageData} />;
}
