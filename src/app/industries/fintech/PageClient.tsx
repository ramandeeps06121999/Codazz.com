'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Fintech' },
  ],
  hero: {
    badge: 'FINTECH SOFTWARE DEVELOPMENT',
    title: 'We Build Fintech That',
    titleAccent: 'Moves Money.',
    description: 'Payment systems, neobanks, lending platforms, and crypto infrastructure built by engineers who understand PCI-DSS, KYC/AML, and financial-grade security from day one.',
    service: 'Fintech Development',
    stats: [
      { value: '$2B+', label: 'Transactions Processed' },
      { value: '99.99%', label: 'Uptime SLA' },
      { value: 'PCI-DSS', label: 'Compliant' },
      { value: '50+', label: 'Fintech Projects' },
    ],
  },
  awards: [
    'PCI-DSS Level 1 Certified',
    'SOC 2 Type II Compliant',
    'ISO 27001 Aligned',
    'Top Fintech Developer 2024',
    'AWS Financial Services Partner',
    'Stripe Verified Partner',
  ],
  whySection: {
    title: 'Why Fintech Companies Choose Codazz',
    cards: [
      { icon: '\u{1F512}', title: 'Security-First Architecture', desc: 'We build with encryption at rest and in transit, tokenization, HSM integration, and zero-trust networking. Your financial data is protected at every layer of the stack.' },
      { icon: '\u{1F3DB}\u{FE0F}', title: 'Regulatory Compliance Built In', desc: 'PCI-DSS, SOX, KYC/AML, GDPR, and state-level money transmitter requirements are baked into our development process from sprint one.' },
      { icon: '\u{26A1}', title: 'Real-Time Transaction Processing', desc: 'Sub-second payment processing, real-time balance updates, and event-driven architectures that handle millions of transactions without breaking a sweat.' },
      { icon: '\u{1F4CA}', title: 'Fraud Detection & Prevention', desc: 'ML-powered fraud scoring, velocity checks, device fingerprinting, and behavioral analytics that catch suspicious activity before it costs you money.' },
    ],
    whoNeedsTitle: 'Who Needs Fintech Development?',
    whoNeedsItems: [
      { icon: '\u{1F3E6}', title: 'Neobanks & Digital Banks', desc: 'Building digital-first banking experiences with seamless onboarding, real-time notifications, and modern financial products.' },
      { icon: '\u{1F4B3}', title: 'Payment Companies', desc: 'Processing millions of transactions with sub-second latency, multi-currency support, and PCI-compliant infrastructure.' },
      { icon: '\u{1F4B0}', title: 'Lending Platforms', desc: 'Automated underwriting, credit scoring, loan origination, and portfolio management systems that scale.' },
      { icon: '\u{1FA99}', title: 'Crypto & DeFi Projects', desc: 'Wallet infrastructure, exchange platforms, smart contract development, and blockchain integrations.' },
      { icon: '\u{1F4C8}', title: 'Investment & WealthTech', desc: 'Robo-advisors, portfolio management tools, market data platforms, and trading infrastructure.' },
    ],
    metricsTitle: 'Fintech Development by the Numbers',
    metrics: [
      { metric: '$2B+', label: 'Transactions Processed', desc: 'Across all client platforms' },
      { metric: '99.99%', label: 'Uptime Achieved', desc: 'Mission-critical SLA' },
      { metric: '< 200ms', label: 'Payment Latency', desc: 'End-to-end processing' },
      { metric: '50+', label: 'Fintech Projects', desc: 'Delivered successfully' },
    ],
    closingText: 'Whether you are building a neobank, a payment gateway, or a lending platform, Codazz brings the regulatory knowledge, security expertise, and engineering firepower to ship financial products that institutions trust and consumers love. We do not just build apps — we build financial infrastructure.',
  },
  subServices: [
    { title: 'Payment Processing Systems', tag: 'Payments', desc: 'PCI-DSS compliant payment gateways, multi-currency processing, recurring billing, and real-time settlement systems with fraud prevention built in.', chips: ['Stripe', 'Plaid', 'Dwolla', 'ACH'], href: '/contact', icon: '\u{1F4B3}' },
    { title: 'Neobank & Digital Banking', tag: 'Banking', desc: 'Core banking integrations, digital account opening, card management, real-time notifications, and mobile-first banking experiences.', chips: ['KYC/AML', 'Core Banking', 'Card Issuing', 'Ledger'], href: '/contact', icon: '\u{1F3E6}' },
    { title: 'Lending & Credit Platforms', tag: 'Lending', desc: 'Automated underwriting, credit scoring models, loan origination systems, and portfolio management dashboards.', chips: ['Credit Scoring', 'Origination', 'Servicing', 'Collections'], href: '/contact', icon: '\u{1F4B0}' },
    { title: 'Crypto & Blockchain', tag: 'Crypto', desc: 'Wallet infrastructure, exchange platforms, smart contract development, DeFi protocols, and blockchain integrations.', chips: ['Ethereum', 'Solana', 'Smart Contracts', 'DeFi'], href: '/contact', icon: '\u{1FA99}' },
    { title: 'Investment & WealthTech', tag: 'Investing', desc: 'Robo-advisors, portfolio management, market data platforms, and trading infrastructure with real-time analytics.', chips: ['Portfolio', 'Robo-Advisor', 'Market Data', 'Trading'], href: '/contact', icon: '\u{1F4C8}' },
    { title: 'RegTech & Compliance', tag: 'Compliance', desc: 'KYC/AML automation, transaction monitoring, regulatory reporting, and compliance management platforms.', chips: ['KYC', 'AML', 'SAR Filing', 'Audit Trail'], href: '/contact', icon: '\u{1F6E1}\u{FE0F}' },
  ],
  servicesHeading: {
    label: 'Our Fintech Solutions',
    title: 'Full-Stack Financial',
    titleDim: 'Technology Services.',
    description: 'From payment processing to blockchain infrastructure, we build every layer of fintech with security, compliance, and performance at the core.',
  },
  benefits: {
    label: 'Why Codazz for Fintech',
    title: 'Built for Financial',
    titleDim: 'Grade Performance.',
    items: [
      { icon: '\u{1F512}', title: 'Bank-Grade Security', desc: 'End-to-end encryption, tokenization, HSM integration, and zero-trust architecture that passes the strictest security audits.' },
      { icon: '\u{1F3DB}\u{FE0F}', title: 'Regulatory Expertise', desc: 'PCI-DSS, SOX, KYC/AML compliance built into our development process. We have navigated financial regulations across multiple jurisdictions.' },
      { icon: '\u{26A1}', title: 'Real-Time Processing', desc: 'Event-driven architectures that process millions of transactions per day with sub-200ms latency and 99.99% uptime.' },
      { icon: '\u{1F4CA}', title: 'ML-Powered Fraud Prevention', desc: 'Real-time fraud scoring, behavioral analytics, and risk models that protect your platform and your users.' },
      { icon: '\u{1F310}', title: 'Multi-Currency & Global', desc: 'Multi-currency processing, cross-border payments, and compliance with international financial regulations.' },
      { icon: '\u{1F91D}', title: 'Long-Term Partnership', desc: 'Ongoing support, compliance updates, and feature development as financial regulations and technology evolve.' },
    ],
  },
  clientLogos: [
    'Stripe', 'Plaid', 'Square', 'PayPal', 'Wise', 'Revolut',
    'Coinbase', 'Robinhood', 'Brex', 'Affirm', 'Chime', 'SoFi',
  ],
  bigStats: [
    { value: '$2B+', label: 'Transactions Processed', desc: 'Across all platforms' },
    { value: '99.99%', label: 'Uptime SLA', desc: 'Mission-critical systems' },
    { value: '50+', label: 'Fintech Projects', desc: 'Delivered globally' },
    { value: '< 200ms', label: 'Processing Time', desc: 'End-to-end latency' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F9E0}', title: 'AI Fraud Detection', desc: 'ML models that score transactions in real-time' },
      { icon: '\u{26D3}\u{FE0F}', title: 'Blockchain Integration', desc: 'Smart contracts and DeFi protocol development' },
      { icon: '\u{1F510}', title: 'Zero-Trust Security', desc: 'Multi-layer authentication and encryption' },
      { icon: '\u{1F4CA}', title: 'Real-Time Analytics', desc: 'Live dashboards for transaction monitoring' },
      { icon: '\u{2601}\u{FE0F}', title: 'Cloud-Native Infra', desc: 'Auto-scaling for peak transaction volumes' },
    ],
    row2: [
      { icon: '\u{1F4F1}', title: 'Mobile Banking', desc: 'Native iOS and Android financial apps' },
      { icon: '\u{1F4B1}', title: 'Multi-Currency', desc: 'Cross-border payment processing' },
      { icon: '\u{1F916}', title: 'KYC Automation', desc: 'AI-powered identity verification' },
      { icon: '\u{1F4DD}', title: 'Regulatory Reporting', desc: 'Automated compliance documentation' },
      { icon: '\u{1F527}', title: 'API-First Design', desc: 'RESTful and GraphQL financial APIs' },
    ],
  },
  techStack: [
    { category: 'Backend', techs: ['Node.js', 'Go', 'Python', 'Java', 'gRPC'] },
    { category: 'Frontend', techs: ['React', 'Next.js', 'React Native', 'TypeScript'] },
    { category: 'Database', techs: ['PostgreSQL', 'Redis', 'MongoDB', 'TimescaleDB'] },
    { category: 'Security', techs: ['Vault', 'HSM', 'AES-256', 'OAuth2', 'mTLS'] },
    { category: 'Cloud & Infra', techs: ['AWS', 'Kubernetes', 'Terraform', 'Kafka'] },
    { category: 'Integrations', techs: ['Stripe', 'Plaid', 'Dwolla', 'Marqeta', 'Galileo'] },
  ],
  faqs: [
    { q: 'Do you build PCI-DSS compliant payment systems?', a: 'Yes. PCI-DSS compliance is core to our fintech development process. We implement tokenization, encryption at rest and in transit, secure key management with HSMs, and network segmentation. We help clients achieve and maintain PCI-DSS Level 1 certification.' },
    { q: 'Can you integrate with existing banking infrastructure?', a: 'Absolutely. We have deep experience integrating with core banking systems, card networks, ACH processors, and third-party APIs like Plaid, Stripe, Marqeta, and Galileo. We handle the complexity of legacy system integration while building modern user experiences.' },
    { q: 'How do you handle KYC/AML compliance?', a: 'We build automated KYC/AML workflows with identity verification (document + selfie), sanctions screening, PEP checks, and transaction monitoring. We integrate with providers like Jumio, Onfido, and Socure while maintaining audit trails for regulatory examinations.' },
    { q: 'What is your experience with real-time payment processing?', a: 'We have built payment systems processing millions of transactions daily with sub-200ms latency. Our event-driven architectures use Kafka for reliable message processing, Redis for caching, and PostgreSQL with optimized indexes for transaction storage.' },
    { q: 'Do you work with cryptocurrency and blockchain projects?', a: 'Yes. We have built wallet infrastructure, exchange platforms, smart contracts on Ethereum and Solana, and DeFi protocol integrations. We understand both the technical and regulatory aspects of crypto development.' },
    { q: 'How do you ensure the security of financial applications?', a: 'We implement defense-in-depth: encryption at every layer, zero-trust networking, regular penetration testing, dependency scanning, secure SDLC practices, and SOC 2 aligned processes. Every commit goes through security review, and we conduct quarterly security assessments.' },
  ],
  faqDescription: 'Common questions about our fintech software development services, compliance capabilities, and technical approach.',
  relatedBlogs: [
    { title: 'Building PCI-DSS Compliant Payment Systems', desc: 'A technical guide to payment security architecture and compliance requirements.', href: '/blog' },
    { title: 'Real-Time Fraud Detection with Machine Learning', desc: 'How ML models can catch fraudulent transactions in milliseconds.', href: '/blog' },
    { title: 'Neobank Architecture: Building Digital-First Banking', desc: 'The technology stack and architectural decisions behind modern digital banks.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Native iOS and Android apps for banking, payments, and financial management.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'Fraud detection models, credit scoring algorithms, and financial forecasting.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'Secure, auto-scaling infrastructure for mission-critical financial systems.', href: '/services/cloud-devops' },
    { name: 'Blockchain Development', desc: 'Smart contracts, DeFi protocols, and crypto wallet infrastructure.', href: '/services/blockchain' },
  ],
  industries: [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Food Delivery', href: '/industries/food-delivery' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
  ],
};

export default function FintechPage() {
  return <ServicePageTemplate data={pageData} />;
}
