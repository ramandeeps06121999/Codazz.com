'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';
import TrustBadges from '@/components/TrustBadges';
import type { CityData } from '@/data/cities';
import { cities } from '@/data/cities';
import TestimonialMarquee from '@/components/TestimonialMarquee';

// ─── REVEAL HOOK ─────────────────────────────────────────────────────────────

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

// ─── SHARED STYLES ───────────────────────────────────────────────────────────

const sectionPad: React.CSSProperties = { padding: 'clamp(60px, 10vw, 120px) 0' };
const sectionBorder: React.CSSProperties = { borderTop: '1px solid rgba(255,255,255,0.05)' };
const heading2: React.CSSProperties = { fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 };
const subLabel: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 20 };
const bodyText: React.CSSProperties = { fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 };

function hoverCard(e: React.MouseEvent, on: boolean) {
  const t = e.currentTarget as HTMLElement;
  t.style.borderColor = on ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)';
  t.style.background = on ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)';
  t.style.transform = on ? 'translateY(-4px)' : '';
  t.style.boxShadow = on ? '0 24px 60px rgba(255,255,255,0.06)' : '';
}

const cardStyle: React.CSSProperties = {
  padding: '36px 32px',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

// ─── SERVICES DATA ───────────────────────────────────────────────────────────

const services = [
  { name: 'Mobile App Development', slug: 'mobile-app-development', icon: '📱' },
  { name: 'Web Development', slug: 'web-development', icon: '🌐' },
  { name: 'AI & Machine Learning', slug: 'ai-ml', icon: '🤖' },
  { name: 'Product Design', slug: 'product-design', icon: '🎨' },
  { name: 'Blockchain & Web3', slug: 'blockchain-web3', icon: '⛓️' },
  { name: 'Cloud & DevOps', slug: 'cloud-devops', icon: '☁️' },
  { name: 'AR/VR', slug: 'ar-vr', icon: '🥽' },
  { name: 'Digital Marketing', slug: 'digital-marketing', icon: '📈' },
  { name: 'WordPress & CMS', slug: 'wordpress-cms', icon: '📝' },
  { name: 'Game Development', slug: 'game-development', icon: '🎮' },
  { name: 'Branding', slug: 'branding', icon: '✨' },
  { name: 'SaaS Development', slug: 'saas-development', icon: '🚀' },
];

// ─── SERVICES BREAKDOWN DATA ─────────────────────────────────────────────────

const servicesBreakdown = [
  {
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.',
    subServices: [
      { name: 'iOS App Development', desc: 'Swift-native apps optimized for iPhone, iPad, and Apple Watch with App Store optimization.' },
      { name: 'Android App Development', desc: 'Kotlin-first Android apps designed for the full spectrum of devices and screen sizes.' },
      { name: 'Flutter Development', desc: 'Single-codebase apps with native performance using Google\'s Flutter framework.' },
      { name: 'React Native Apps', desc: 'JavaScript-powered cross-platform apps that share 90%+ code between iOS and Android.' },
      { name: 'Cross-Platform Strategy', desc: 'Architecture decisions that maximize code reuse without sacrificing platform-specific UX.' },
      { name: 'App Store Optimization', desc: 'ASO strategies that improve discoverability, increase downloads, and boost conversion rates.' },
      { name: 'App Maintenance & Support', desc: 'Ongoing updates, bug fixes, OS compatibility, and performance monitoring post-launch.' },
    ],
  },
  {
    title: 'Web Development',
    icon: '🌐',
    description: 'Modern web applications built with cutting-edge frameworks, optimized for performance, SEO, and conversion.',
    subServices: [
      { name: 'Next.js & React Development', desc: 'Server-rendered React apps with ISR, edge functions, and blazing-fast page loads.' },
      { name: 'Progressive Web Apps (PWAs)', desc: 'App-like web experiences with offline support, push notifications, and installability.' },
      { name: 'E-Commerce Platforms', desc: 'Custom Shopify, WooCommerce, and headless commerce builds optimized for conversion.' },
      { name: 'Custom Web Portals', desc: 'Internal dashboards, admin panels, and customer portals with role-based access control.' },
      { name: 'API Development & Integration', desc: 'RESTful and GraphQL APIs connecting your web apps to third-party services and internal systems.' },
      { name: 'WordPress & CMS Development', desc: 'Custom themes, plugins, and headless WordPress setups for content-driven sites.' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    description: 'Production-ready AI solutions that automate processes, unlock insights, and create competitive advantages.',
    subServices: [
      { name: 'Custom AI Chatbots', desc: 'Conversational AI powered by GPT-4, Claude, and custom LLMs fine-tuned for your domain.' },
      { name: 'Predictive Analytics', desc: 'ML models that forecast demand, detect churn, and optimize pricing in real-time.' },
      { name: 'Computer Vision', desc: 'Image recognition, object detection, and visual inspection systems for quality assurance and security.' },
      { name: 'Natural Language Processing', desc: 'Text analysis, sentiment detection, document classification, and automated summarization.' },
      { name: 'AI Integration & APIs', desc: 'Seamless integration of OpenAI, Google Vertex AI, AWS SageMaker, and Hugging Face into your stack.' },
      { name: 'MLOps & Model Deployment', desc: 'End-to-end ML pipelines with automated retraining, monitoring, and A/B testing in production.' },
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: '⛓️',
    description: 'Decentralized applications, smart contracts, and tokenized solutions built on proven blockchain infrastructure.',
    subServices: [
      { name: 'Smart Contract Development', desc: 'Solidity, Rust, and Move contracts audited for security and optimized for gas efficiency.' },
      { name: 'DeFi Platforms', desc: 'Decentralized exchanges, lending protocols, yield aggregators, and staking platforms.' },
      { name: 'NFT Marketplaces', desc: 'Custom NFT minting, trading, and royalty distribution platforms with wallet integration.' },
      { name: 'Token Development', desc: 'ERC-20, ERC-721, and ERC-1155 token creation with vesting schedules and governance.' },
      { name: 'Blockchain Integration', desc: 'Connecting existing systems to Ethereum, Solana, Polygon, and enterprise chains.' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Cloud-native infrastructure, CI/CD pipelines, and DevOps practices that ensure 99.99% uptime and rapid deployments.',
    subServices: [
      { name: 'AWS Architecture', desc: 'EC2, Lambda, ECS/EKS, S3, RDS, and CloudFormation-based infrastructure as code.' },
      { name: 'Google Cloud Platform', desc: 'GKE, Cloud Run, BigQuery, and Firebase-based architectures for data-intensive applications.' },
      { name: 'Azure Solutions', desc: 'Azure App Services, AKS, Cosmos DB, and Active Directory integration for enterprise workloads.' },
      { name: 'CI/CD Pipeline Setup', desc: 'GitHub Actions, GitLab CI, Jenkins, and ArgoCD pipelines for automated testing and deployment.' },
      { name: 'Kubernetes & Containers', desc: 'Containerized microservices with Helm charts, service mesh, and auto-scaling on K8s clusters.' },
      { name: 'Monitoring & Observability', desc: 'Datadog, Grafana, Prometheus, and ELK stack setups for full-stack visibility and alerting.' },
    ],
  },
  {
    title: 'SaaS Development',
    icon: '🚀',
    description: 'Multi-tenant SaaS platforms with subscription billing, role management, analytics, and scalable architecture.',
    subServices: [
      { name: 'Multi-Tenant Architecture', desc: 'Shared and isolated tenant models with row-level security and custom domain support.' },
      { name: 'Subscription & Billing', desc: 'Stripe, Paddle, and custom billing integrations with usage-based pricing and invoicing.' },
      { name: 'User Management & SSO', desc: 'Auth0, Clerk, and custom auth with SAML/OIDC SSO for enterprise customers.' },
      { name: 'Analytics & Reporting', desc: 'Embedded dashboards, custom report builders, and data export functionality.' },
      { name: 'API-First Design', desc: 'Public APIs with rate limiting, versioning, webhooks, and developer documentation portals.' },
      { name: 'White-Label Solutions', desc: 'Customizable branding, theming, and feature flags for partner and reseller channels.' },
    ],
  },
];

// ─── INDUSTRY ICONS MAP ──────────────────────────────────────────────────────

const industryData: Record<string, { icon: string; desc: string }> = {
  'FinTech': { icon: '💰', desc: 'Digital banking, payment processing, trading platforms, and regulatory compliance solutions.' },
  'Healthcare': { icon: '🏥', desc: 'HIPAA-compliant apps, telehealth platforms, EHR integrations, and clinical trial management.' },
  'Real Estate': { icon: '🏠', desc: 'PropTech platforms, virtual tours, property management systems, and MLS integrations.' },
  'Real Estate Tech': { icon: '🏗️', desc: 'PropTech platforms, virtual tours, property management systems, and smart building solutions.' },
  'E-Commerce': { icon: '🛒', desc: 'Custom storefronts, marketplace platforms, inventory management, and omnichannel retail.' },
  'EdTech': { icon: '📚', desc: 'Learning management systems, virtual classrooms, assessment platforms, and student engagement tools.' },
  'Logistics': { icon: '🚛', desc: 'Fleet management, route optimization, warehouse systems, and real-time shipment tracking.' },
  'Enterprise SaaS': { icon: '🏢', desc: 'Multi-tenant platforms, workflow automation, CRM systems, and enterprise resource planning.' },
  'Media & Entertainment': { icon: '🎬', desc: 'Streaming platforms, content management, social apps, and digital publishing solutions.' },
  'AI & Machine Learning': { icon: '🧠', desc: 'Custom AI models, NLP solutions, computer vision, and intelligent automation systems.' },
  'SaaS': { icon: '☁️', desc: 'Subscription platforms, API-first products, multi-tenant architectures, and usage-based billing.' },
  'Biotech': { icon: '🧬', desc: 'Genomics dashboards, clinical trial platforms, drug discovery tools, and lab management systems.' },
  'Web3': { icon: '⛓️', desc: 'DeFi protocols, NFT marketplaces, DAO tooling, and decentralized identity solutions.' },
  'Venture Capital': { icon: '📊', desc: 'Portfolio management, deal flow tracking, LP reporting, and cap table management tools.' },
  'Startup Ecosystem': { icon: '🦄', desc: 'MVP development, rapid prototyping, investor dashboards, and growth engineering.' },
  'Aerospace': { icon: '🚀', desc: 'Mission-critical software, satellite communications, flight systems, and defense analytics.' },
  'Gaming': { icon: '🎮', desc: 'Mobile games, multiplayer backends, game analytics, and live ops platforms.' },
  'Energy': { icon: '⚡', desc: 'Smart grid systems, renewable energy monitoring, oil & gas analytics, and carbon tracking.' },
  'Oil & Gas': { icon: '🛢️', desc: 'Exploration data platforms, pipeline monitoring, safety compliance, and production analytics.' },
  'Smart City': { icon: '🌆', desc: 'IoT platforms, traffic management, urban planning tools, and connected infrastructure.' },
  'Tourism & Hospitality': { icon: '✈️', desc: 'Booking platforms, guest experience apps, property management, and travel tech solutions.' },
  'Agriculture': { icon: '🌾', desc: 'Precision farming platforms, crop monitoring, supply chain tracking, and AgTech solutions.' },
  'Insurance': { icon: '🛡️', desc: 'InsurTech platforms, claims automation, underwriting tools, and risk assessment systems.' },
  'Government': { icon: '🏛️', desc: 'Civic tech platforms, digital services, compliance systems, and public safety solutions.' },
  'Manufacturing': { icon: '🏭', desc: 'Industry 4.0 solutions, predictive maintenance, quality control, and supply chain optimization.' },
  'Automotive': { icon: '🚗', desc: 'Connected vehicle platforms, fleet management, EV charging networks, and autonomous systems.' },
  'Retail': { icon: '🏪', desc: 'POS systems, inventory management, customer analytics, and omnichannel retail solutions.' },
  'Banking': { icon: '🏦', desc: 'Core banking platforms, digital wallets, loan origination, and compliance automation.' },
  'Cybersecurity': { icon: '🔒', desc: 'Threat detection, identity management, security auditing, and zero-trust architecture.' },
  'Sports Tech': { icon: '🏃', desc: 'Performance analytics, fan engagement, ticketing platforms, and sports betting systems.' },
  'Legal Tech': { icon: '⚖️', desc: 'Contract management, legal research AI, e-discovery, and practice management systems.' },
  'Clean Tech': { icon: '🌿', desc: 'Carbon tracking, renewable energy management, sustainability reporting, and ESG platforms.' },
  'Food & Beverage': { icon: '🍽️', desc: 'Restaurant tech, food delivery platforms, inventory management, and kitchen automation.' },
  'Non-Profit': { icon: '🤝', desc: 'Donor management, impact tracking, volunteer coordination, and fundraising platforms.' },
  'Construction': { icon: '👷', desc: 'Project management, BIM integration, safety compliance, and equipment tracking systems.' },
  'Mining': { icon: '⛏️', desc: 'Resource exploration analytics, safety monitoring, fleet management, and environmental compliance.' },
  'Pharmaceutical': { icon: '💊', desc: 'Drug development platforms, clinical data management, regulatory compliance, and pharmacy systems.' },
  'Telecom': { icon: '📡', desc: 'Network management, customer portals, billing systems, and 5G infrastructure platforms.' },
};

// ─── TECHNOLOGY STACK DATA ───────────────────────────────────────────────────

const techCategories = [
  {
    name: 'Frontend',
    techs: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#ffffff' },
      { name: 'Vue.js', color: '#4FC08D' },
      { name: 'Angular', color: '#DD0031' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'Svelte', color: '#FF3E00' },
      { name: 'Three.js', color: '#ffffff' },
    ],
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Go', color: '#00ADD8' },
      { name: 'Java', color: '#ED8B00' },
      { name: 'Rust', color: '#CE422B' },
      { name: 'Ruby on Rails', color: '#CC0000' },
      { name: 'GraphQL', color: '#E10098' },
      { name: '.NET', color: '#512BD4' },
    ],
  },
  {
    name: 'Mobile',
    techs: [
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Flutter', color: '#02569B' },
      { name: 'Swift', color: '#FA7343' },
      { name: 'Kotlin', color: '#7F52FF' },
      { name: 'SwiftUI', color: '#FA7343' },
      { name: 'Jetpack Compose', color: '#4285F4' },
    ],
  },
  {
    name: 'Database',
    techs: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Redis', color: '#DC382D' },
      { name: 'MySQL', color: '#4479A1' },
      { name: 'Elasticsearch', color: '#005571' },
      { name: 'DynamoDB', color: '#4053D6' },
      { name: 'Supabase', color: '#3ECF8E' },
      { name: 'Firebase', color: '#FFCA28' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    techs: [
      { name: 'AWS', color: '#FF9900' },
      { name: 'Google Cloud', color: '#4285F4' },
      { name: 'Azure', color: '#0078D4' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Kubernetes', color: '#326CE5' },
      { name: 'Terraform', color: '#7B42BC' },
      { name: 'Vercel', color: '#ffffff' },
      { name: 'Cloudflare', color: '#F38020' },
    ],
  },
];

// ─── PORTFOLIO DATA ──────────────────────────────────────────────────────────

const portfolioProjects = [
  {
    name: 'FinPay Digital Wallet',
    category: 'FinTech',
    description: 'A next-generation digital wallet and payment platform processing over $2B in transactions annually. Built with real-time fraud detection, biometric authentication, and multi-currency support for users across 15 countries.',
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Redis', 'Stripe'],
    results: [
      { value: '10M+', label: 'Downloads' },
      { value: '4.8★', label: 'App Store Rating' },
      { value: '99.99%', label: 'Uptime' },
    ],
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.02) 100%)',
  },
  {
    name: 'MedConnect Telehealth',
    category: 'Healthcare',
    description: 'HIPAA-compliant telehealth platform connecting patients with specialists via HD video, AI-powered triage, and integrated EHR. Reduced average wait times from 14 days to under 2 hours for non-emergency consultations.',
    techStack: ['Next.js', 'Python', 'MongoDB', 'WebRTC', 'GPT-4', 'Azure'],
    results: [
      { value: '500K+', label: 'Consultations' },
      { value: '94%', label: 'Patient Satisfaction' },
      { value: '12x', label: 'Faster Access' },
    ],
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.02) 100%)',
  },
  {
    name: 'LogiTrack Fleet Platform',
    category: 'Logistics',
    description: 'Enterprise fleet management and route optimization platform serving 3,000+ vehicles across North America. Real-time GPS tracking, AI-powered route suggestions, and predictive maintenance alerts reduced fuel costs by 23%.',
    techStack: ['React', 'Go', 'PostgreSQL', 'Google Maps', 'GCP', 'Kubernetes'],
    results: [
      { value: '3,000+', label: 'Vehicles Tracked' },
      { value: '23%', label: 'Fuel Cost Reduction' },
      { value: '$4.2M', label: 'Annual Savings' },
    ],
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.02) 100%)',
  },
];

// ─── DEVELOPMENT PROCESS DATA ────────────────────────────────────────────────

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Research',
    icon: '🔍',
    description: 'We immerse ourselves in your business, market, and users. Through stakeholder interviews, competitive analysis, and user research, we define the exact problem to solve.',
    deliverables: ['Project Brief', 'User Personas', 'Competitive Analysis', 'Technical Feasibility Report'],
    duration: '1-2 weeks',
  },
  {
    step: 2,
    title: 'Strategy & Architecture',
    icon: '📐',
    description: 'We translate insights into a technical roadmap. Architecture decisions, technology selection, sprint planning, and milestone definitions ensure clarity before a single line of code is written.',
    deliverables: ['System Architecture', 'Tech Stack Selection', 'Sprint Roadmap', 'Cost Estimation'],
    duration: '1-2 weeks',
  },
  {
    step: 3,
    title: 'UI/UX Design',
    icon: '🎨',
    description: 'Our designers create pixel-perfect interfaces validated by real users. From wireframes to interactive prototypes, every screen is optimized for engagement and conversion.',
    deliverables: ['Wireframes', 'UI Kit & Design System', 'Interactive Prototypes', 'Usability Testing'],
    duration: '2-3 weeks',
  },
  {
    step: 4,
    title: 'Development & QA',
    icon: '⚙️',
    description: 'Agile sprints with daily standups, bi-weekly demos, and continuous integration. Every feature is built, tested, and reviewed before merging to the main branch.',
    deliverables: ['Working Software', 'Unit & Integration Tests', 'CI/CD Pipeline', 'Sprint Demos'],
    duration: '6-12 weeks',
  },
  {
    step: 5,
    title: 'Launch & Scale',
    icon: '🚀',
    description: 'We handle deployment, monitoring, and post-launch optimization. From beta rollout to full launch, we ensure zero-downtime deployments and rapid iteration based on real user data.',
    deliverables: ['Production Deployment', 'Monitoring Setup', 'Performance Optimization', 'Growth Roadmap'],
    duration: '1-2 weeks',
  },
];

// ─── CLIENT LOGOS ────────────────────────────────────────────────────────────

const clientLogos = [
  'Stripe', 'Shopify', 'Salesforce', 'Microsoft', 'Google Cloud',
  'AWS', 'MongoDB', 'Cloudflare', 'Vercel', 'GitHub',
  'Twilio', 'HubSpot', 'Slack', 'Datadog', 'Snowflake', 'Confluent',
];

// ─── FAQ GENERATOR ───────────────────────────────────────────────────────────

function generateFAQs(cityName: string, locationLabel: string) {
  return [
    {
      q: `How much does app development cost in ${cityName}?`,
      a: `App development costs in ${cityName} typically range from $25,000 to $250,000+ depending on complexity, features, and platform requirements. A simple MVP starts around $25,000-$50,000, while enterprise-grade applications with AI, real-time features, and multi-platform deployment can exceed $150,000. At Codazz, we offer transparent pricing with detailed proposals — contact us for a free estimate tailored to your project.`,
    },
    {
      q: `How long does it take to build an app in ${cityName}?`,
      a: `Development timelines in ${cityName} vary by project scope. A lean MVP can be delivered in 8-12 weeks, while comprehensive platforms typically take 4-6 months. Complex enterprise solutions may require 6-12 months. Our agile methodology ensures you see working software every 2 weeks, with deployment-ready builds throughout the process.`,
    },
    {
      q: `Does Codazz have an office in ${cityName}?`,
      a: `Codazz serves ${locationLabel} through our distributed engineering model with dual headquarters in Edmonton (Canada) and Chandigarh (India), plus offices in New York and Dubai. We work with ${cityName} clients through dedicated project managers, regular video calls, and on-site visits when needed. Many of our ${cityName} clients prefer this model for its cost-effectiveness and access to top-tier global talent.`,
    },
    {
      q: `What industries do you serve in ${cityName}?`,
      a: `In ${cityName}, we serve a wide range of industries including FinTech, Healthcare, E-Commerce, Real Estate, SaaS, Logistics, EdTech, and more. Our team has deep domain expertise built over 500+ projects across 24 countries. We understand the regulatory requirements, user expectations, and competitive landscape specific to ${cityName}'s market.`,
    },
    {
      q: `What technologies does Codazz use for development?`,
      a: `We use a modern tech stack tailored to each project's needs. For frontend, we work with React, Next.js, Vue.js, and Angular. For mobile, React Native, Flutter, Swift, and Kotlin. Our backend expertise spans Node.js, Python, Go, and Java. We deploy on AWS, Google Cloud, and Azure with Docker and Kubernetes for containerization.`,
    },
    {
      q: `Do you offer post-launch support and maintenance?`,
      a: `Absolutely. We provide comprehensive post-launch support including bug fixes, security patches, OS updates, performance optimization, and feature enhancements. Our maintenance plans include 24/7 monitoring, regular security audits, and guaranteed SLA response times. Over 95% of our clients continue working with us after launch.`,
    },
    {
      q: `How does Codazz ensure project quality and security?`,
      a: `Quality and security are built into every stage of our process. We follow SOC II compliance, ISO 27001 standards, and industry-specific regulations (HIPAA, PCI-DSS, GDPR). Our QA process includes automated testing (unit, integration, E2E), code reviews, security audits, and performance benchmarking before every release.`,
    },
    {
      q: `Can I hire dedicated developers from Codazz in ${cityName}?`,
      a: `Yes, we offer dedicated team engagement models for ${cityName} businesses. You can hire individual developers or entire squads (developer + designer + QA + PM) who work exclusively on your project. This model gives you full control over the team while we handle recruitment, HR, and infrastructure. Developers are available within 1-2 weeks.`,
    },
  ];
}

// ─── TOP DEVELOPERS REASONS ──────────────────────────────────────────────────

function getTopDevReasons(cityName: string) {
  return [
    {
      number: '01',
      title: 'Proven Track Record',
      desc: `Over 500 projects delivered across 24 countries with a 99% client satisfaction rate. Our ${cityName} clients benefit from the same battle-tested processes that have built platforms serving millions of users worldwide.`,
    },
    {
      number: '02',
      title: 'Full-Spectrum Technology Expertise',
      desc: `From React and Node.js to AI/ML and blockchain, our 100+ engineers cover every technology stack. No subcontracting, no learning on your dime — we have in-house experts for every layer of your application.`,
    },
    {
      number: '03',
      title: 'Rapid Delivery with 8-Week MVPs',
      desc: `Our agile methodology and pre-built component libraries allow us to ship MVPs in as little as 8 weeks. ${cityName} startups and enterprises alike benefit from our speed-to-market advantage.`,
    },
    {
      number: '04',
      title: 'Cost-Effective Without Compromise',
      desc: `Our global delivery model means ${cityName} businesses get Silicon Valley-quality engineering at 40-60% lower cost than local agencies. No compromise on quality, communication, or delivery timelines.`,
    },
    {
      number: '05',
      title: 'Dedicated Teams & Transparent Communication',
      desc: `Every ${cityName} project gets a dedicated project manager, bi-weekly sprint demos, and real-time Slack/Teams access to your development team. You're never left guessing about progress or next steps.`,
    },
    {
      number: '06',
      title: 'Post-Launch Partnership',
      desc: `We don't disappear after launch. 95% of our clients continue working with us for maintenance, scaling, and new feature development. Your success is our success — long after the initial deployment.`,
    },
  ];
}

// ─── RELATED CITIES HELPER ───────────────────────────────────────────────────

function getRelatedCities(currentCity: CityData): CityData[] {
  // First, get cities from the same country
  const sameCountry = cities.filter(c => c.country === currentCity.country && c.slug !== currentCity.slug);
  if (sameCountry.length >= 6) return sameCountry.slice(0, 6);
  // If not enough, add from other countries
  const others = cities.filter(c => c.country !== currentCity.country && c.slug !== currentCity.slug);
  return [...sameCountry, ...others].slice(0, 6);
}

// ─── ACCORDION COMPONENT ────────────────────────────────────────────────────

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
              background: isOpen ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)',
              borderColor: isOpen ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%',
                padding: '24px 28px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: 'clamp(15px, 2vw, 17px)',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                letterSpacing: '-0.01em',
              }}
            >
              <span>{item.q}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  opacity: 0.4,
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              style={{
                maxHeight: isOpen ? 300 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}
            >
              <div style={{ padding: '0 28px 24px', ...bodyText, lineHeight: 1.8 }}>
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── SERVICE ACCORDION COMPONENT ─────────────────────────────────────────────

function ServiceAccordion({ services: svcList, cityName }: { services: typeof servicesBreakdown; cityName: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {svcList.map((svc, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 28,
              background: isOpen ? 'rgba(34,197,94,0.02)' : 'rgba(255,255,255,0.015)',
              borderColor: isOpen ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.06)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%',
                padding: '28px 32px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>{svc.icon}</span>
              <div style={{ flex: 1 }}>
                <div>{svc.title}</div>
                {!isOpen && (
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 400, marginTop: 4 }}>
                    {svc.subServices.length} specialized services in {cityName}
                  </div>
                )}
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  opacity: 0.3,
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              style={{
                maxHeight: isOpen ? 1200 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.5s ease',
              }}
            >
              <div style={{ padding: '0 32px 32px' }}>
                <p style={{ ...bodyText, marginTop: 0, marginBottom: 28 }}>{svc.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 12 }}>
                  {svc.subServices.map((sub, j) => (
                    <div
                      key={j}
                      style={{
                        padding: '20px 24px',
                        borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.04)',
                        background: 'rgba(255,255,255,0.01)',
                      }}
                    >
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}>
                        <span style={{ color: '#22c55e', marginRight: 8 }}>&#9656;</span>
                        {sub.name}
                      </div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                        {sub.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── INLINE FORM COMPONENT ───────────────────────────────────────────────────

function LeadCaptureForm({ cityName }: { cityName: string }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: `Location Page - ${cityName}` }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  }, [formData, cityName]);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.04)',
    color: '#ffffff',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  };

  if (submitted) {
    return (
      <div style={{
        padding: '48px 32px',
        borderRadius: 28,
        border: '1px solid rgba(34,197,94,0.2)',
        background: 'rgba(34,197,94,0.05)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>&#10003;</div>
        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>Thank You!</h3>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
          We&apos;ll get back to you within 24 hours with a custom proposal for your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      padding: '36px 32px',
      borderRadius: 28,
      border: '1px solid rgba(255,255,255,0.08)',
      background: 'rgba(255,255,255,0.02)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 12 }}>
        Free Project Estimate
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 24, letterSpacing: '-0.02em' }}>
        Get a Quote in 24 Hours
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
          style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
        />
        <input
          type="email"
          placeholder="Work Email"
          required
          value={formData.email}
          onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
          style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
          style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
        />
        <textarea
          placeholder="Tell us about your project..."
          rows={3}
          value={formData.message}
          onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={e => e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
        />
        <button
          type="submit"
          disabled={submitting}
          style={{
            width: '100%',
            height: 52,
            borderRadius: 100,
            border: 'none',
            background: '#22c55e',
            color: '#000',
            fontSize: 14,
            fontWeight: 700,
            cursor: submitting ? 'not-allowed' : 'pointer',
            opacity: submitting ? 0.7 : 1,
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
          onMouseEnter={e => { if (!submitting) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(34,197,94,0.35)'; }}}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
        >
          {submitting ? 'Sending...' : 'Get Free Quote'}
          {!submitting && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          )}
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, justifyContent: 'center' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Your data is protected &bull; NDA available</span>
      </div>
    </form>
  );
}

// ─── TECH TABS COMPONENT ─────────────────────────────────────────────────────

function TechTabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      {/* Tab buttons */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40, justifyContent: 'center' }}>
        {techCategories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setActiveTab(i)}
            style={{
              padding: '12px 28px',
              borderRadius: 100,
              border: `1px solid ${activeTab === i ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)'}`,
              background: activeTab === i ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.02)',
              color: activeTab === i ? '#22c55e' : 'rgba(255,255,255,0.5)',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>
      {/* Tech grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 160px), 1fr))', gap: 16 }}>
        {techCategories[activeTab].techs.map((tech) => (
          <div
            key={tech.name}
            style={{
              padding: '24px 20px',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.015)',
              textAlign: 'center',
              transition: 'all 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}33`;
              (e.currentTarget as HTMLElement).style.background = `${tech.color}08`;
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.015)';
              (e.currentTarget as HTMLElement).style.transform = '';
            }}
          >
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: `${tech.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 14px',
              fontSize: 20,
              fontWeight: 700,
              color: tech.color,
            }}>
              {tech.name.charAt(0)}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ANIMATED COUNTER COMPONENT ──────────────────────────────────────────────

function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '32px 16px' }}>
      <div style={{
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        marginBottom: 8,
      }}>
        {value}
      </div>
      <div style={{
        fontSize: 13,
        fontWeight: 600,
        color: 'rgba(255,255,255,0.35)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        {label}
      </div>
    </div>
  );
}

// ─── MARQUEE CSS KEYFRAME INJECTION ──────────────────────────────────────────

function MarqueeStyles() {
  return (
    <style>{`
      @keyframes marqueeScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .loc-hero-form-grid {
        display: grid;
        grid-template-columns: 1fr 420px;
        gap: 60px;
        align-items: center;
      }
      @media (max-width: 900px) {
        .loc-hero-form-grid {
          grid-template-columns: 1fr !important;
          gap: 40px !important;
        }
      }
      @media (max-width: 600px) {
        .loc-process-timeline {
          grid-template-columns: 1fr !important;
        }
        .loc-stats-row {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        .loc-related-grid {
          grid-template-columns: 1fr !important;
        }
        .loc-portfolio-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function PageClient({ city }: { city: CityData }) {
  const heroRef = useRef<HTMLElement>(null);
  const trustRef = useReveal() as React.RefObject<HTMLElement>;
  const logosRef = useReveal() as React.RefObject<HTMLElement>;
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const portfolioRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialsRef = useReveal() as React.RefObject<HTMLElement>;
  const topDevsRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;
  const relatedRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const locationLabel = city.country === 'UAE' ? `${city.name}, UAE` : `${city.name}, ${city.state}`;
  const faqs = generateFAQs(city.name, locationLabel);
  const topDevReasons = getTopDevReasons(city.name);
  const relatedCities = getRelatedCities(city);

  // Build enriched industry cards
  const industryCards = city.localIndustries.map(name => {
    const data = industryData[name];
    return {
      name,
      icon: data?.icon || '💼',
      desc: data?.desc || `Custom software solutions tailored for ${name} businesses in ${city.name}.`,
    };
  });

  return (
    <>
      <MarqueeStyles />
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* ════════════════════════════════════════════════════════════════════
            1. HERO — Two-column layout with lead capture form
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <HeroBackground variant="center" />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1, padding: 'clamp(60px, 10vw, 120px) 0' }}>
            {/* Breadcrumb */}
            <nav className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Locations', href: '/locations' },
              ].map((crumb) => (
                <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Link href={crumb.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#22c55e'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                    {crumb.label}
                  </Link>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>/</span>
                </span>
              ))}
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{city.name}</span>
            </nav>

            <div className="loc-hero-form-grid">
              {/* Left column — H1, description, stats */}
              <div>
                {/* Badge */}
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {city.isHQ ? 'Dual HQ' : locationLabel}
                  </span>
                </div>

                {/* H1 */}
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  Software Development Company in{' '}<span style={{ color: '#ffffff' }}>{city.name}</span>
                </h1>

                {/* Hero context */}
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 640, margin: '0 0 36px' }}>
                  {city.heroContext}
                </p>

                {/* CTAs */}
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get a Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                    View Case Studies
                  </Link>
                </div>

                {/* Stats row */}
                <div className="reveal reveal-d4" style={{ display: 'grid', gridTemplateColumns: `repeat(${city.stats.length}, 1fr)`, gap: 16, maxWidth: 600 }}>
                  {city.stats.map((s, i) => (
                    <div key={s.label} style={{ textAlign: 'center', borderRight: i < city.stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingRight: i < city.stats.length - 1 ? 16 : 0 }}>
                      <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — Lead capture form */}
              <div className="reveal reveal-d3">
                <LeadCaptureForm cityName={city.name} />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            2. TRUST BADGES
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={trustRef} style={{ ...sectionBorder, padding: 'clamp(32px, 6vw, 56px) 0' }}>
          <div className="cb-container reveal" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 20 }}>
              Awards & Recognition
            </div>
            <TrustBadges />
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginTop: 24 }}>
              {[
                { label: 'Clutch 4.9★', icon: '⭐' },
                { label: 'ISO 27001', icon: '🔒' },
                { label: 'SOC II', icon: '🛡️' },
                { label: 'AWS Partner', icon: '☁️' },
                { label: '500+ Projects', icon: '🚀' },
              ].map(badge => (
                <div key={badge.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{badge.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            3. CLIENT LOGOS — Scrolling marquee
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={logosRef} style={{ ...sectionBorder, padding: 'clamp(40px, 6vw, 64px) 0', overflow: 'hidden' }}>
          <div className="cb-container reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={subLabel}>Trusted by Industry Leaders</div>
          </div>
          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
            <div style={{ display: 'flex', gap: 60, animation: 'marqueeScroll 30s linear infinite', width: 'max-content' }}>
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={`${logo}-${i}`} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0' }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontWeight: 800,
                    color: 'rgba(255,255,255,0.2)',
                  }}>
                    {logo.charAt(0)}
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.25)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            4. INDUSTRIES WE SERVE — Rich cards
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={industriesRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Industries We Serve</div>
              <h2 className="reveal" style={{ ...heading2, marginBottom: 16 }}>
                Key Industries in <span style={{ color: '#ffffff' }}>{city.name}</span>
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 640, margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
                We bring deep domain expertise to the industries that power {city.name}&apos;s economy. Our engineers understand your regulatory landscape, user expectations, and competitive dynamics.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {industryCards.map((ind, i) => (
                <div
                  key={ind.name}
                  className={`reveal reveal-d${(i % 4) + 1}`}
                  style={cardStyle}
                  onMouseEnter={e => hoverCard(e, true)}
                  onMouseLeave={e => hoverCard(e, false)}
                >
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{ind.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.01em' }}>{ind.name}</h3>
                  <p style={{ ...bodyText, margin: 0, fontSize: 14 }}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            5. WHY THIS CITY — Expanded cards
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={whyRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Why {city.name}</div>
              <h2 className="reveal" style={heading2}>
                Why Businesses in <span style={{ color: '#ffffff' }}>{city.name}</span> Choose Codazz
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 640, margin: '16px auto 0', color: 'rgba(255,255,255,0.7)' }}>
                We don&apos;t just write code — we understand the business context, regulatory landscape, and growth challenges specific to {city.name}.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {city.whyCity.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-d${i + 1}`}
                  style={{ ...cardStyle, padding: '40px 36px' }}
                  onMouseEnter={e => hoverCard(e, true)}
                  onMouseLeave={e => hoverCard(e, false)}
                >
                  <div style={{ fontSize: 40, marginBottom: 24 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 14, letterSpacing: '-0.02em' }}>{item.title}</h3>
                  <p style={{ ...bodyText, margin: 0, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            6. PORTFOLIO SHOWCASE
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={portfolioRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Our Work</div>
              <h2 className="reveal" style={heading2}>
                Featured Projects for {city.name} Clients
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 640, margin: '16px auto 0', color: 'rgba(255,255,255,0.7)' }}>
                Real projects, real results. Here&apos;s a glimpse of the platforms we&apos;ve built for businesses like yours.
              </p>
            </div>

            <div className="loc-portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 24 }}>
              {portfolioProjects.map((project, i) => (
                <div
                  key={project.name}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    borderRadius: 28,
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.015)',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.2)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 60px rgba(255,255,255,0.06)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLElement).style.transform = '';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  {/* Screenshot placeholder */}
                  <div style={{
                    height: 200,
                    background: project.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Mock app screen */}
                    <div style={{
                      width: '70%',
                      height: '75%',
                      borderRadius: 12,
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 16,
                      gap: 8,
                    }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                      </div>
                      <div style={{ width: '60%', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />
                      <div style={{ width: '80%', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.05)' }} />
                      <div style={{ flex: 1, borderRadius: 8, background: 'rgba(255,255,255,0.03)', marginTop: 4 }} />
                    </div>
                  </div>

                  <div style={{ padding: '28px 28px 32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <span style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#22c55e',
                        padding: '4px 12px',
                        borderRadius: 100,
                        background: 'rgba(34,197,94,0.08)',
                        border: '1px solid rgba(34,197,94,0.15)',
                      }}>
                        {project.category}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>{project.name}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 20 }}>{project.description}</p>

                    {/* Tech stack tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                      {project.techStack.map(tech => (
                        <span key={tech} style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: 'rgba(255,255,255,0.4)',
                          padding: '5px 12px',
                          borderRadius: 8,
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${project.results.length}, 1fr)`, gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                      {project.results.map(r => (
                        <div key={r.label} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', letterSpacing: '-0.02em' }}>{r.value}</div>
                          <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
              <Link href="/case-studies" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                height: 52, padding: '0 32px', borderRadius: 100,
                border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff',
                fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#22c55e'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#ffffff'; }}>
                View All Case Studies
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            7. SERVICES BREAKDOWN — Accordion sections
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={servicesRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Our Services</div>
              <h2 className="reveal" style={heading2}>
                What We Build in <span style={{ color: '#ffffff' }}>{city.name}</span>
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 640, margin: '16px auto 0', color: 'rgba(255,255,255,0.7)' }}>
                Full-spectrum software development tailored to {city.name}&apos;s business landscape. Click each service to explore our specialized capabilities.
              </p>
            </div>

            <div className="reveal" style={{ maxWidth: 900, margin: '0 auto' }}>
              <ServiceAccordion services={servicesBreakdown} cityName={city.name} />
            </div>

            {/* Quick-link grid for all 12 services */}
            <div className="reveal" style={{ marginTop: 56 }}>
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.3)' }}>All Services in {city.name}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 12 }}>
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/locations/${city.slug}/${svc.slug}`}
                    style={{
                      ...cardStyle,
                      padding: '24px 24px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      borderRadius: 20,
                    }}
                    onMouseEnter={e => hoverCard(e, true)}
                    onMouseLeave={e => hoverCard(e, false)}
                  >
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{svc.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{svc.name}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>in {city.name}</div>
                    </div>
                    <svg style={{ flexShrink: 0, opacity: 0.2 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            8. DEVELOPMENT PROCESS — Timeline
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={processRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div className="reveal" style={subLabel}>Our Process</div>
              <h2 className="reveal" style={heading2}>
                How We Build Software in {city.name}
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 640, margin: '16px auto 0', color: 'rgba(255,255,255,0.7)' }}>
                A proven 5-step methodology refined over 500+ projects. From discovery to launch, every phase is designed to minimize risk and maximize ROI.
              </p>
            </div>

            {/* Timeline */}
            <div className="loc-process-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, position: 'relative' }}>
              {/* Connector line — desktop only */}
              <div style={{
                position: 'absolute',
                top: 44,
                left: '10%',
                right: '10%',
                height: 2,
                background: 'linear-gradient(90deg, rgba(34,197,94,0.3), rgba(34,197,94,0.1))',
                zIndex: 0,
              }} />

              {processSteps.map((step, i) => (
                <div
                  key={step.step}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Step circle */}
                  <div style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    border: '2px solid rgba(34,197,94,0.2)',
                    background: 'rgba(34,197,94,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    marginBottom: 20,
                  }}>
                    {step.icon}
                  </div>

                  {/* Step number */}
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', letterSpacing: '0.1em', marginBottom: 8 }}>
                    STEP {step.step}
                  </div>

                  <h3 style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>
                    {step.description}
                  </p>

                  {/* Duration badge */}
                  <div style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.3)',
                    padding: '6px 14px',
                    borderRadius: 100,
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.02)',
                    marginBottom: 16,
                  }}>
                    {step.duration}
                  </div>

                  {/* Deliverables */}
                  <div style={{ textAlign: 'left', width: '100%' }}>
                    {step.deliverables.map(d => (
                      <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            9. TECHNOLOGY STACK — Tabbed section
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={techRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Technology Stack</div>
              <h2 className="reveal" style={heading2}>
                Technologies We Use in {city.name}
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 640, margin: '16px auto 0', color: 'rgba(255,255,255,0.7)' }}>
                We choose the right technology for every project — not the trendy one. Our engineers are experts in 40+ technologies across the full stack.
              </p>
            </div>
            <div className="reveal" style={{ maxWidth: 900, margin: '0 auto' }}>
              <TechTabs />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            10. STATS SECTION — Big numbers
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={statsRef} style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1200, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="reveal" style={subLabel}>By The Numbers</div>
              <h2 className="reveal" style={heading2}>
                Codazz in Numbers
              </h2>
            </div>
            <div className="reveal loc-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '100+', label: 'Engineers' },
                { value: '24', label: 'Countries Served' },
                { value: '99%', label: 'Client Satisfaction' },
                { value: '8-Week', label: 'MVP Delivery' },
              ].map(stat => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            11. TESTIMONIALS
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={testimonialsRef} style={{ ...sectionBorder }}>
          <div className="cb-container" style={{ textAlign: 'center', paddingTop: 'clamp(60px, 10vw, 100px)' }}>
            <div className="reveal" style={subLabel}>Client Stories</div>
            <h2 className="reveal" style={{ ...heading2, marginBottom: 8 }}>
              What Clients in {city.name} Say About Us
            </h2>
            <p className="reveal" style={{ ...bodyText, maxWidth: 560, margin: '0 auto', color: 'rgba(255,255,255,0.5)' }}>
              Don&apos;t take our word for it. Here&apos;s what our {city.name} clients have to say.
            </p>
          </div>
          <TestimonialMarquee testimonials={city.testimonials} heading="" />
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            12. TOP DEVELOPERS SECTION — SEO targeting
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={topDevsRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Why We&apos;re #1</div>
              <h2 className="reveal" style={heading2}>
                Top Software Development Company in {city.name}
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 680, margin: '16px auto 0', color: 'rgba(255,255,255,0.7)' }}>
                Codazz is consistently ranked among the top software development companies in {city.name} by Clutch, GoodFirms, and Manifest. Here&apos;s why businesses choose us over the competition.
              </p>
            </div>

            <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {topDevReasons.map((reason, i) => (
                <div
                  key={reason.number}
                  className={`reveal reveal-d${(i % 4) + 1}`}
                  style={{
                    display: 'flex',
                    gap: 24,
                    padding: '32px 36px',
                    borderRadius: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.015)',
                    transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
                    alignItems: 'flex-start',
                  }}
                  onMouseEnter={e => hoverCard(e, true)}
                  onMouseLeave={e => hoverCard(e, false)}
                >
                  <div style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: 800,
                    color: 'rgba(34,197,94,0.2)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: 48,
                  }}>
                    {reason.number}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 8, letterSpacing: '-0.01em' }}>
                      {reason.title}
                    </h3>
                    <p style={{ ...bodyText, margin: 0, fontSize: 14 }}>{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            13. FAQ SECTION — Accordion
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={faqRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>FAQ</div>
              <h2 className="reveal" style={heading2}>
                Frequently Asked Questions About Software Development in {city.name}
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 640, margin: '16px auto 0', color: 'rgba(255,255,255,0.7)' }}>
                Everything you need to know about working with Codazz in {city.name}.
              </p>
            </div>
            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto' }}>
              <Accordion items={faqs} />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            14. RELATED LOCATIONS
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={relatedRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="reveal" style={subLabel}>Other Locations</div>
              <h2 className="reveal" style={heading2}>
                We Also Serve These Cities
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 600, margin: '16px auto 0', color: 'rgba(255,255,255,0.7)' }}>
                Explore our software development services in other major cities around the world.
              </p>
            </div>
            <div className="loc-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
              {relatedCities.map((rc, i) => {
                const rcLabel = rc.country === 'UAE' ? `${rc.name}, UAE` : `${rc.name}, ${rc.state}`;
                return (
                  <Link
                    key={rc.slug}
                    href={`/locations/${rc.slug}`}
                    className={`reveal reveal-d${(i % 4) + 1}`}
                    style={{
                      ...cardStyle,
                      padding: '28px 28px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      borderRadius: 24,
                    }}
                    onMouseEnter={e => hoverCard(e, true)}
                    onMouseLeave={e => hoverCard(e, false)}
                  >
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: 'rgba(34,197,94,0.06)',
                      border: '1px solid rgba(34,197,94,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      flexShrink: 0,
                    }}>
                      📍
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{rc.name}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 3 }}>{rcLabel}</div>
                    </div>
                    <svg style={{ flexShrink: 0, opacity: 0.2 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                );
              })}
            </div>

            <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/locations" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                height: 48, padding: '0 28px', borderRadius: 100,
                border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff',
                fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: '0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                View All 48 Locations
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            15. CTA — Enhanced with secondary form
        ════════════════════════════════════════════════════════════════════ */}
        <section ref={ctaRef} style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1000, height: 500, background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="loc-hero-form-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
              {/* Left — CTA text */}
              <div style={{ maxWidth: 560 }}>
                <div className="reveal" style={subLabel}>Let&apos;s Talk</div>
                <h2 className="reveal" style={{ ...heading2, marginBottom: 20, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                  Ready to Build Something Great in <span style={{ color: '#ffffff' }}>{city.name}</span>?
                </h2>
                <p className="reveal" style={{ ...bodyText, marginBottom: 36, color: 'rgba(255,255,255,0.7)' }}>
                  Whether you need a mobile app, a web platform, or an AI-powered solution, our team is ready to bring your vision to life. Get a free consultation and project estimate within 24 hours.
                </p>

                <div className="reveal" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    height: 56, padding: '0 40px', borderRadius: 100,
                    background: '#22c55e', color: '#000',
                    fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    transition: '0.3s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Start Your Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <a href="https://calendly.com/codazz" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    height: 56, padding: '0 32px', borderRadius: 100,
                    border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff',
                    fontSize: 14, fontWeight: 500, textDecoration: 'none',
                    transition: '0.3s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    Book a Call
                  </a>
                </div>

                {/* Quick contact details */}
                <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { icon: '✉️', text: 'hello@codazz.com' },
                    { icon: '📞', text: '+1 (825) 365-4567' },
                    { icon: '⏰', text: 'Response within 24 hours' },
                  ].map(item => (
                    <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 16 }}>{item.icon}</span>
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — CTA form */}
              <div className="reveal">
                <LeadCaptureForm cityName={city.name} />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
