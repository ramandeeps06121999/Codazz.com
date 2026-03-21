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
import GlobalPresence from '@/components/GlobalPresence';

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
      {/* Tech horizontal scroll */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 40, background: 'linear-gradient(90deg, #000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 40, background: 'linear-gradient(270deg, #000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
        <div
          className="loc-carousel-wrap"
          style={{
            display: 'flex',
            gap: 14,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '8px 20px',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {techCategories[activeTab].techs.map((tech) => (
            <div
              key={tech.name}
              style={{
                flexShrink: 0,
                width: 130,
                scrollSnapAlign: 'start',
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
    </div>
  );
}

// ─── ANIMATED COUNTER COMPONENT ──────────────────────────────────────────────

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Extract numeric part, prefix, and suffix
          const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
          if (!match) {
            setDisplayValue(value);
            return;
          }
          const prefix = match[1];
          const numStr = match[2].replace(/,/g, '');
          const suffix = match[3];
          const target = parseFloat(numStr);
          const isDecimal = numStr.includes('.');
          const hasCommas = match[2].includes(',');

          const duration = 1800;
          const startTime = performance.now();

          function animate(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;

            let formatted: string;
            if (isDecimal) {
              formatted = current.toFixed(numStr.split('.')[1]?.length || 1);
            } else {
              const rounded = Math.round(current);
              formatted = hasCommas ? rounded.toLocaleString() : String(rounded);
            }

            setDisplayValue(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '32px 16px', position: 'relative' }}>
      {/* Green accent line */}
      <div style={{
        width: 40,
        height: 3,
        borderRadius: 2,
        background: '#22c55e',
        margin: '0 auto 20px',
        opacity: 0.7,
      }} />
      <div style={{
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        marginBottom: 10,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {displayValue}
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
      @keyframes cityMarqueeL {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes cityMarqueeR {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .loc-hero-grid {
        display: grid;
        grid-template-columns: 1fr 420px;
        gap: 60px;
        align-items: center;
      }
      .loc-carousel-wrap::-webkit-scrollbar { display: none; }
      .loc-svc-scroll::-webkit-scrollbar { display: none; }
      .loc-city-marquee:hover .loc-city-track { animation-play-state: paused !important; }
      @media (max-width: 900px) {
        .loc-hero-grid {
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
  const faqs = (city.faqs && city.faqs.length > 0) ? city.faqs : generateFAQs(city.name, locationLabel);
  const topDevReasons = getTopDevReasons(city.name);
  const relatedCities = getRelatedCities(city);

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

        {/* ═══ 1. HERO ═══ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, padding: 'clamp(60px, 10vw, 120px) 0' }}>
            <div className="loc-hero-grid">
              <div>
                <nav className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
                  {[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }].map(crumb => (
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
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{city.isHQ ? 'Dual HQ' : locationLabel}</span>
                </div>
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  Software Development<br />Company in{' '}<span style={{ color: '#22c55e' }}>{city.name}</span>
                </h1>
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 580, margin: '0 0 36px' }}>{city.heroContext}</p>
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get a Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                    View Case Studies
                  </Link>
                </div>
                <div className="reveal reveal-d4" style={{ display: 'grid', gridTemplateColumns: `repeat(${city.stats.length}, 1fr)`, borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', maxWidth: 560 }}>
                  {city.stats.map((s, i) => (
                    <div key={s.label} style={{ padding: '18px 16px', textAlign: 'center', borderRight: i < city.stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-d3"><LeadCaptureForm cityName={city.name} /></div>
            </div>
          </div>
        </section>

        {/* ═══ 2. TRUST BAR ═══ */}
        <section ref={trustRef} style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(28px, 5vw, 48px) 0' }}>
          <div className="cb-container reveal" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 20 }}>Awards & Recognition</div>
            <TrustBadges />
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginTop: 24 }}>
              {[{ label: 'Clutch 4.9★', icon: '⭐' }, { label: 'ISO 27001', icon: '🔒' }, { label: 'SOC II', icon: '🛡️' }, { label: 'AWS Partner', icon: '☁️' }, { label: '500+ Projects', icon: '🚀' }].map(b => (
                <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{b.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 3. CLIENT LOGOS ═══ */}
        <section ref={logosRef} style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(48px, 8vw, 80px) 0', overflow: 'hidden' }}>
          <div className="cb-container reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Trusted by Industry Leaders</div>
          </div>
          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', marginBottom: 16 }}>
            <div style={{ display: 'flex', gap: 48, animation: 'marqueeScroll 35s linear infinite', width: 'max-content' }}>
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={`r1-${logo}-${i}`} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#22c55e' }}>{logo.charAt(0)}</div>
                  <span style={{ fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{logo}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
            <div style={{ display: 'flex', gap: 48, animation: 'marqueeScroll 40s linear infinite reverse', width: 'max-content' }}>
              {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((logo, i) => (
                <div key={`r2-${logo}-${i}`} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: 'rgba(255,255,255,0.4)' }}>{logo.charAt(0)}</div>
                  <span style={{ fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 4. INDUSTRIES ═══ */}
        <section ref={industriesRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="reveal" style={subLabel}>Industries We Serve</div>
              <h2 className="reveal" style={{ ...heading2, marginBottom: 16 }}>Key Industries in <span style={{ color: 'rgba(255,255,255,0.3)' }}>{city.name}</span></h2>
              {(city as CityData & { industriesIntro?: string }).industriesIntro && (
                <p className="reveal" style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 680, margin: '0 auto' }}>
                  {(city as CityData & { industriesIntro?: string }).industriesIntro}
                </p>
              )}
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
              {industryCards.map((ind, i) => (
                <Link key={ind.name} href={`/industries/${ind.name.toLowerCase().replace(/[\s&]+/g, '-')}`}
                  className={`reveal reveal-d${(i % 4) + 1}`}
                  style={{ display: 'flex', flexDirection: 'column', padding: '28px 24px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', gap: 14, transition: 'all 0.3s', minHeight: 180 }}
                  onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.25)'; t.style.background = 'rgba(34,197,94,0.04)'; t.style.transform = 'translateY(-3px)'; t.style.boxShadow = '0 16px 40px rgba(34,197,94,0.08)'; }}
                  onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; t.style.transform = ''; t.style.boxShadow = ''; }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{ind.icon}</div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{ind.name}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>{ind.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#22c55e' }}>Explore solutions</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 5. WHY THIS CITY ═══ */}
        <section ref={whyRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Why {city.name}</div>
              <h2 className="reveal" style={{ ...heading2, marginBottom: 16 }}>
                Why {city.name} Businesses<br /><span style={{ color: 'rgba(255,255,255,0.3)' }}>Choose Codazz</span>
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 600, margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>
                We don&apos;t just write code — we understand the business context, regulatory landscape, and growth challenges specific to {city.name}.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {city.whyCity.map((item, i) => (
                <div key={item.title} className={`reveal reveal-d${i + 1}`}
                  style={{ padding: '40px 36px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.2)'; t.style.background = 'rgba(34,197,94,0.03)'; t.style.transform = 'translateY(-4px)'; t.style.boxShadow = '0 24px 60px rgba(34,197,94,0.08)'; }}
                  onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; t.style.transform = ''; t.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #22c55e, transparent)' }} />
                  <div style={{ fontSize: 11, fontWeight: 800, color: '#22c55e', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>0{i + 1}</div>
                  <div style={{ fontSize: 44, marginBottom: 20 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 21, fontWeight: 600, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 6. PORTFOLIO ═══ */}
        <section ref={portfolioRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', marginBottom: 56, flexWrap: 'wrap' }}>
              {[{ value: '500+', label: 'Projects Delivered' }, { value: '4.9★', label: 'Clutch Rating' }, { value: '$2B+', label: 'Transactions Processed' }, { value: '99.99%', label: 'Uptime SLA' }].map((s, i) => (
                <div key={s.label} style={{ flex: 1, minWidth: 140, padding: '22px 28px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="reveal" style={subLabel}>Our Work</div>
              <h2 className="reveal" style={{ ...heading2, marginBottom: 16 }}>Featured Projects for <span style={{ color: 'rgba(255,255,255,0.3)' }}>{city.name} Clients</span></h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 560, margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>Real projects, real results — platforms serving millions of users worldwide.</p>
            </div>
            <div className="loc-portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 24 }}>
              {(city.portfolio && city.portfolio.length > 0 ? city.portfolio : portfolioProjects).map((project, i) => {
                const projectName = project.name;
                const projectDesc = project.description;
                const projectTech = project.techStack;
                const projectMetrics = 'metrics' in project ? (project as { metrics: { label: string; value: string }[] }).metrics : ('results' in project ? (project as { results: { label: string; value: string }[] }).results : []);
                const gradients = ['linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(0,0,0,0) 100%)', 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 100%)', 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(0,0,0,0) 100%)'];
                const categoryIcons: Record<string, string> = { 'FinTech': '💰', 'Healthcare': '🏥', 'Logistics': '🚛', 'E-Commerce': '🛒', 'SaaS': '☁️', 'Real Estate': '🏠', 'AI': '🧠', 'Media': '🎬' };
                const catKey = Object.keys(categoryIcons).find(k => projectName.toLowerCase().includes(k.toLowerCase())) || '';
                const catIcon = categoryIcons[catKey] || '🚀';
                return (
                  <div key={projectName} className={`reveal reveal-d${i + 1}`}
                    style={{ borderRadius: 28, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', overflow: 'hidden', transition: 'all 0.3s' }}
                    onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.2)'; t.style.transform = 'translateY(-4px)'; t.style.boxShadow = '0 24px 60px rgba(34,197,94,0.08)'; }}
                    onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.transform = ''; t.style.boxShadow = ''; }}>
                    <div style={{ height: 200, background: gradients[i % 3], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)', position: 'relative', gap: 16 }}>
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%)', pointerEvents: 'none' }} />
                      <div style={{ position: 'relative', zIndex: 1, width: 64, height: 64, borderRadius: 20, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>{catIcon}</div>
                      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center', padding: '0 20px' }}>
                        {projectTech.slice(0, 4).map(t => (
                          <span key={t} style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.8)', padding: '4px 10px', borderRadius: 6, background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.12)', letterSpacing: '0.04em' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ padding: '28px 28px 32px' }}>
                      <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em' }}>{projectName}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 20 }}>{projectDesc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                        {projectTech.map(t => (<span key={t} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', padding: '4px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.04)' }}>{t}</span>))}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${projectMetrics.length}, 1fr)`, gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        {projectMetrics.map(r => (
                          <div key={r.label} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', letterSpacing: '-0.02em' }}>{r.value}</div>
                            <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#22c55e'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#ffffff'; }}>
                View All Case Studies
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ 7. SERVICES ═══ */}
        <section ref={servicesRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Our Services</div>
              <h2 className="reveal" style={{ ...heading2, marginBottom: 16 }}>What We Build in <span style={{ color: 'rgba(255,255,255,0.3)' }}>{city.name}</span></h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 640, margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>
                {(city as CityData & { servicesIntro?: string }).servicesIntro || `Full-spectrum software development tailored to ${city.name}'s business landscape.`}
              </p>
            </div>
            <div className="reveal" style={{ maxWidth: 900, margin: '0 auto' }}>
              <ServiceAccordion services={servicesBreakdown} cityName={city.name} />
            </div>
            <div style={{ position: 'relative', marginTop: 56 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 20 }}>All Services in {city.name}</div>
              <div style={{ position: 'absolute', left: 0, top: 36, bottom: 0, width: 48, background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', right: 0, top: 36, bottom: 0, width: 48, background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
              <div className="loc-svc-scroll" style={{ overflowX: 'auto', scrollbarWidth: 'none' } as React.CSSProperties}>
                <div style={{ display: 'flex', gap: 12, padding: '4px 24px 24px', width: 'max-content' }}>
                  {services.map(svc => (
                    <Link key={svc.slug} href={`/locations/${city.slug}/${svc.slug}`}
                      style={{ display: 'flex', flexDirection: 'column', width: 200, flexShrink: 0, padding: '22px 20px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', gap: 10, transition: 'all 0.3s', minHeight: 140 }}
                      onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.25)'; t.style.background = 'rgba(34,197,94,0.04)'; t.style.transform = 'translateY(-3px)'; }}
                      onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; t.style.transform = ''; }}>
                      <span style={{ fontSize: 28 }}>{svc.icon}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{svc.name}</span>
                      <span style={{ fontSize: 12, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 4, marginTop: 'auto' }}>
                        Learn more <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. PROCESS — Vertical timeline ═══ */}
        <section ref={processRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>How We Work</div>
              <h2 className="reveal" style={{ ...heading2, marginBottom: 16 }}>Our Development <span style={{ color: 'rgba(255,255,255,0.3)' }}>Process</span></h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 560, margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>
                A battle-tested 5-step process refined across 500+ projects. No surprises, no scope creep — just working software delivered on time.
              </p>
            </div>
            <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
              <div style={{ position: 'absolute', left: 39, top: 40, bottom: 40, width: 2, background: 'linear-gradient(180deg, #22c55e 0%, rgba(34,197,94,0.05) 100%)', zIndex: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {(city.processSteps || processSteps).map((step, i) => (
                  <div key={i} className={`reveal reveal-d${(i % 3) + 1}`} style={{ display: 'flex', gap: 28, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 80, height: 80, borderRadius: '50%', flexShrink: 0, background: i === 0 ? '#22c55e' : 'transparent', border: `2px solid ${i === 0 ? '#22c55e' : 'rgba(34,197,94,0.3)'}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ fontSize: 20 }}>{'icon' in step ? (step as { icon: string }).icon : ['🔍', '📐', '🎨', '⚙️', '🚀'][i]}</div>
                      <div style={{ fontSize: 9, fontWeight: 800, color: i === 0 ? '#000' : '#22c55e', marginTop: 2, letterSpacing: '0.05em' }}>0{i + 1}</div>
                    </div>
                    <div style={{ flex: 1, padding: '24px 28px', borderRadius: 24, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', transition: 'all 0.3s' }}
                      onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.2)'; t.style.background = 'rgba(34,197,94,0.02)'; }}
                      onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>{step.title}</h3>
                        {'duration' in step && (<span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', padding: '4px 12px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>{(step as { duration: string }).duration}</span>)}
                      </div>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: '0 0 16px' }}>{step.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map((d: string, j: number) => (
                          <span key={j} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.45)', padding: '5px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>✓ {d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. TECH STACK ═══ */}
        <section ref={techRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="reveal" style={subLabel}>Our Tech Stack</div>
              <h2 className="reveal" style={heading2}>Technologies We Use in <span style={{ color: 'rgba(255,255,255,0.3)' }}>{city.name}</span></h2>
            </div>
            <div className="reveal" style={{ maxWidth: 900, margin: '0 auto' }}><TechTabs /></div>
          </div>
        </section>

        {/* ═══ 10. ANIMATED STATS ═══ */}
        <section ref={statsRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 'clamp(100px, 20vw, 220px)', fontWeight: 900, color: 'rgba(255,255,255,0.012)', letterSpacing: '-0.05em', pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap' }}>CODAZZ</div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>By The Numbers</div>
              <h2 className="reveal" style={heading2}>Codazz in <span style={{ color: 'rgba(255,255,255,0.3)' }}>Numbers</span></h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', borderRadius: 24, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              {[{ value: '500+', label: 'Projects Delivered', icon: '🚀' }, { value: '100+', label: 'Engineers', icon: '👨‍💻' }, { value: '24', label: 'Countries Served', icon: '🌍' }, { value: '99%', label: 'Client Satisfaction', icon: '⭐' }, { value: '8 Wks', label: 'MVP Delivery', icon: '⚡' }].map((s, i) => (
                <div key={s.label} style={{ padding: '28px 16px', textAlign: 'center', borderRight: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none', background: i % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent', transition: 'background 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.03)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = i % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent'}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                  <AnimatedStat value={s.value} label={s.label} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 11. TESTIMONIALS ═══ */}
        <section ref={testimonialsRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ marginBottom: 48 }}>
            <div style={{ textAlign: 'center' }}>
              <div className="reveal" style={subLabel}>Client Stories</div>
              <h2 className="reveal" style={heading2}>What {city.name} Clients <span style={{ color: 'rgba(255,255,255,0.3)' }}>Say About Us</span></h2>
            </div>
          </div>
          <TestimonialMarquee testimonials={city.testimonials} />
        </section>

        {/* ═══ 12. WHY CODAZZ ═══ */}
        <section ref={topDevsRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Why Codazz</div>
              <h2 className="reveal" style={heading2}>Top Software Development<br /><span style={{ color: 'rgba(255,255,255,0.3)' }}>Company in {city.name}</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))', gap: 16 }}>
              {topDevReasons.map((reason, i) => {
                const highlights = (city as CityData & { topDevsHighlights?: string[] }).topDevsHighlights;
                return (
                  <div key={reason.number} className={`reveal reveal-d${(i % 3) + 1}`}
                    style={{ padding: '28px 32px', borderTop: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid rgba(34,197,94,0.4)', borderRadius: 20, background: 'rgba(255,255,255,0.015)', transition: 'all 0.3s' }}
                    onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.background = 'rgba(34,197,94,0.03)'; t.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.background = 'rgba(255,255,255,0.015)'; t.style.transform = ''; }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#22c55e', letterSpacing: '0.12em', marginBottom: 10 }}>{reason.number}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{reason.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>
                      {reason.desc}{highlights?.[i] && <span style={{ color: 'rgba(255,255,255,0.85)' }}> {highlights[i]}</span>}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ ═══ */}
        <section ref={faqRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>FAQ</div>
              <h2 className="reveal" style={{ ...heading2, marginBottom: 16 }}>Frequently Asked Questions</h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 560, margin: '0 auto', color: 'rgba(255,255,255,0.55)' }}>
                Everything you need to know about software development in {city.name}.
              </p>
            </div>
            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto' }}><Accordion items={faqs} /></div>
          </div>
        </section>

        {/* ═══ 14. GLOBAL PRESENCE ═══ */}
        <GlobalPresence />

        {/* ═══ 15. RELATED CITIES ═══ */}
        <section ref={relatedRef} style={{ padding: 'clamp(60px, 10vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
          <div className="cb-container reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={subLabel}>Explore More</div>
            <h2 style={heading2}>We Build in <span style={{ color: 'rgba(255,255,255,0.3)' }}>Every City</span></h2>
          </div>
          <div className="loc-city-marquee" style={{ position: 'relative', width: '100%', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', marginBottom: 12 }}>
            <div className="loc-city-track" style={{ display: 'flex', gap: 12, animation: 'cityMarqueeL 40s linear infinite', width: 'max-content' }}>
              {[...relatedCities, ...relatedCities, ...relatedCities].map((rc, i) => (
                <Link key={`r1-${rc.slug}-${i}`} href={`/locations/${rc.slug}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.3s', flexShrink: 0 }}
                  onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.3)'; t.style.background = 'rgba(34,197,94,0.05)'; }}
                  onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <span style={{ fontSize: 14 }}>📍</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{rc.name}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{rc.stateAbbr}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="loc-city-marquee" style={{ position: 'relative', width: '100%', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
            <div className="loc-city-track" style={{ display: 'flex', gap: 12, animation: 'cityMarqueeR 45s linear infinite', width: 'max-content' }}>
              {[...relatedCities.slice().reverse(), ...relatedCities.slice().reverse(), ...relatedCities.slice().reverse()].map((rc, i) => (
                <Link key={`r2-${rc.slug}-${i}`} href={`/locations/${rc.slug}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.3s', flexShrink: 0 }}
                  onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(34,197,94,0.3)'; t.style.background = 'rgba(34,197,94,0.05)'; }}
                  onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.borderColor = 'rgba(255,255,255,0.06)'; t.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <span style={{ fontSize: 14 }}>📍</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{rc.name}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{rc.stateAbbr}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/locations" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 48, padding: '0 28px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#22c55e'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#ffffff'; }}>
              View All Locations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>

        {/* ═══ 16. FINAL CTA ═══ */}
        <section ref={ctaRef} style={{ padding: 'clamp(80px, 12vw, 140px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 1000, height: 500, background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="cb-container reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 20 }}>Let&apos;s Talk</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 20px' }}>
              Ready to Build Something<br />Great in {city.name}?
            </h2>
            {(city as CityData & { ctaHook?: string }).ctaHook && (
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#22c55e', fontWeight: 600, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
                {(city as CityData & { ctaHook?: string }).ctaHook}
              </p>
            )}
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: '0 0 40px', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Whether you&apos;re a {city.name} startup building your first product or an enterprise modernising legacy systems — we deliver working software on time, every time.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 40px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a href="https://calendly.com/codazz" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = ''; }}>
                📅 Book a Call
              </a>
            </div>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[{ icon: '✉️', text: 'hello@codazz.com' }, { icon: '📞', text: '+1 (403) 604-8692' }, { icon: '⏰', text: 'Response within 24 hours' }].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 16 }}>{item.icon}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
