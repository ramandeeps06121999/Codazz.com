'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

/* ── Reveal animation hook ──────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06 }
    );
    el.querySelectorAll('.reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ── Shared style constants ─────────────────────────────────────────── */
const green = '#22c55e';
const greenBg = 'rgba(34,197,94,0.04)';
const greenBorder = 'rgba(34,197,94,0.2)';
const greenGlow = 'rgba(34,197,94,0.35)';
const subtleWhite = 'rgba(255,255,255,0.45)';
const dimWhite = 'rgba(255,255,255,0.7)';
const borderColor = 'rgba(255,255,255,0.06)';
const cardBg = 'rgba(255,255,255,0.015)';
const sectionBorder = { borderBottom: '1px solid rgba(255,255,255,0.05)' } as const;

const tagStyle: React.CSSProperties = { fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' };
const headingStyle: React.CSSProperties = { fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: 0 };
const subStyle: React.CSSProperties = { fontSize: 16, color: subtleWhite, lineHeight: 1.7, maxWidth: 560 };

/* ── Data ────────────────────────────────────────────────────────────── */

const heroStats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '95+', label: 'Avg Lighthouse Score' },
  { value: '24', label: 'Countries Served' },
  { value: '4.9/5', label: 'Client Rating' },
];

const webServices = [
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
    title: 'Next.js Development',
    desc: 'Server-rendered React applications with blazing-fast load times, perfect SEO, and enterprise-grade ISR/SSG capabilities.',
    href: '/services/web-development/nextjs-development',
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>),
    title: 'SaaS Platforms',
    desc: 'Multi-tenant SaaS architectures with subscription billing, role-based access, analytics dashboards, and API-first design.',
    href: '/services/web-development/saas-platforms',
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>),
    title: 'E-Commerce Systems',
    desc: 'Headless commerce with Shopify, custom checkout flows, inventory management, and conversion-optimized product pages.',
    href: '/services/web-development/ecommerce-systems',
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>),
    title: 'Enterprise Portals',
    desc: 'Internal tools, admin dashboards, CRM integrations, and data-rich interfaces that simplify complex business operations.',
    href: '/services/web-development/enterprise-portals',
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>),
    title: 'API & Backend Development',
    desc: 'RESTful and GraphQL APIs, microservices, serverless functions, real-time WebSocket systems, and third-party integrations.',
    href: '/services/web-development/api-backend',
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>),
    title: 'Progressive Web Apps (PWA)',
    desc: 'Offline-capable, installable web apps with push notifications, app-like UX, and native performance on any device.',
    href: '/contact',
  },
];

const benefits = [
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
    title: 'Lightning Performance',
    desc: 'Sub-2-second load times with server-side rendering, edge caching, image optimization, and code splitting. Speed directly impacts conversions and search rankings.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>),
    title: 'SEO-First Architecture',
    desc: 'Semantic HTML, structured data, dynamic sitemaps, Open Graph tags, and Core Web Vitals optimization baked into every build. Rank higher, get found faster.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>),
    title: 'WCAG 2.1 Accessible',
    desc: 'Every site meets WCAG 2.1 AA standards. Keyboard navigation, screen reader compatibility, color contrast, and ARIA labels ensure inclusivity for all users.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>),
    title: 'Infinite Scalability',
    desc: 'Cloud-native architectures on AWS and Vercel that auto-scale from 100 to 10 million users. Horizontal scaling, CDN distribution, and load balancing built in.',
  },
];

const clientLogos = [
  'TechCorp', 'HealthFlow', 'FinVault', 'EduSpark', 'LogiChain',
  'RetailHub', 'PropTech AI', 'GreenEnergy', 'DataSync', 'CloudFirst',
  'MediaPulse', 'SecureNet', 'FoodTech', 'TravelMate', 'InsureTech',
];

const caseStudies = [
  {
    title: 'FinTech SaaS Dashboard',
    industry: 'Financial Services',
    desc: 'Built a real-time financial analytics platform processing 2M+ transactions daily with Next.js, WebSocket feeds, and PostgreSQL.',
    metrics: [
      { value: '3.2x', label: 'Faster Load Times' },
      { value: '94%', label: 'User Satisfaction' },
      { value: '$2.4M', label: 'ARR After 12 Months' },
    ],
    tags: ['Next.js', 'PostgreSQL', 'WebSocket', 'AWS'],
  },
  {
    title: 'Healthcare Patient Portal',
    industry: 'Healthcare',
    desc: 'HIPAA-compliant patient portal with appointment scheduling, telehealth integration, secure messaging, and insurance verification.',
    metrics: [
      { value: '68%', label: 'Reduced No-Shows' },
      { value: '45s', label: 'Avg Session Time' },
      { value: '4.8/5', label: 'Patient Rating' },
    ],
    tags: ['React', 'Node.js', 'HIPAA', 'Twilio'],
  },
  {
    title: 'E-Commerce Platform Rebuild',
    industry: 'Retail',
    desc: 'Migrated a legacy Magento store to headless Shopify + Next.js, achieving 98 Lighthouse score and 2.3x increase in conversion rate.',
    metrics: [
      { value: '2.3x', label: 'Conversion Increase' },
      { value: '98', label: 'Lighthouse Score' },
      { value: '1.2s', label: 'Page Load Time' },
    ],
    tags: ['Next.js', 'Shopify', 'Tailwind', 'Vercel'],
  },
];

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'GraphQL', category: 'API' },
  { name: 'REST', category: 'API' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Vercel', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    whatWeDo: 'Deep-dive into your business goals, target audience, competitor landscape, and technical requirements. We audit existing systems and define KPIs.',
    whatYouGet: 'A comprehensive project brief, competitive analysis report, technical architecture document, and a fixed-price proposal with clear milestones.',
  },
  {
    num: '02',
    title: 'UX Research & Design',
    whatWeDo: 'User journey mapping, wireframing, high-fidelity mockups in Figma, interactive prototypes, and usability testing with real users.',
    whatYouGet: 'A complete design system, clickable prototype, mobile-responsive layouts, and a style guide your team can reference long-term.',
  },
  {
    num: '03',
    title: 'Frontend Development',
    whatWeDo: 'Component-based architecture with React/Next.js, responsive layouts, animations, accessibility compliance, and performance optimization.',
    whatYouGet: 'Pixel-perfect implementation, 95+ Lighthouse scores, WCAG 2.1 AA compliance, and a modular codebase that scales.',
  },
  {
    num: '04',
    title: 'Backend & API Development',
    whatWeDo: 'Database design, RESTful/GraphQL APIs, authentication systems, third-party integrations, serverless functions, and data migration.',
    whatYouGet: 'Secure, documented APIs, automated test coverage, database schemas, and integration with your existing tools and workflows.',
  },
  {
    num: '05',
    title: 'QA & Testing',
    whatWeDo: 'Automated unit/integration tests, cross-browser testing, performance load testing, security penetration testing, and accessibility audits.',
    whatYouGet: 'A bug-free product with test reports, performance benchmarks, security assessment, and confidence in production readiness.',
  },
  {
    num: '06',
    title: 'Launch & Growth',
    whatWeDo: 'Staged deployment, DNS/SSL setup, CDN configuration, analytics integration, monitoring setup, and post-launch optimization sprints.',
    whatYouGet: '99.99% uptime SLA, real-time monitoring dashboards, SEO tracking, and a dedicated team for ongoing iteration and growth.',
  },
];

const differentiators = [
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
    title: 'Fixed-Price Contracts',
    desc: 'No hourly billing surprises. Every project gets a detailed scope, fixed price, and milestone-based payments. You know exactly what you\'re investing before we write a single line of code.',
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    title: 'Senior Engineers Only',
    desc: 'No junior developers on your project. Every team member has 5+ years of experience and deep expertise in the technologies we deploy. Quality is non-negotiable.',
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>),
    title: 'US-Managed, Global Delivery',
    desc: 'Project management and architecture from North America. Development from our offices in Edmonton (Canada) and Chandigarh (India). You get timezone overlap and cost efficiency.',
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>),
    title: 'Transparent Communication',
    desc: 'Weekly demos, daily Slack updates, shared Notion workspace, and access to our project management board. You\'re never left wondering what\'s happening with your project.',
  },
];

const complianceItems = [
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>),
    title: 'WCAG 2.1 Accessibility',
    desc: 'Every site meets AA accessibility standards. Keyboard navigation, screen readers, ARIA labels, and color contrast ratios validated with automated and manual testing.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
    title: 'Core Web Vitals',
    desc: 'LCP under 2.5s, FID under 100ms, CLS under 0.1. We optimize for Google\'s page experience signals to ensure your site ranks and performs at its best.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    title: 'GDPR Cookie Consent',
    desc: 'Compliant cookie banners, consent management platforms, data processing agreements, and privacy-by-design architecture for EU/UK market readiness.',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>),
    title: 'PCI DSS for E-Commerce',
    desc: 'Secure payment processing with PCI DSS Level 1 compliance. Tokenized card storage, encrypted transactions, and secure checkout flows for online stores.',
  },
];

const perfMetrics = [
  {
    value: '95+',
    label: 'Lighthouse Score',
    desc: 'Average across all projects',
  },
  {
    value: '<2s',
    label: 'Page Load Time',
    desc: 'First Contentful Paint',
  },
  {
    value: '99.99%',
    label: 'Uptime SLA',
    desc: 'Guaranteed availability',
  },
  {
    value: '<0.1',
    label: 'CLS Score',
    desc: 'Cumulative Layout Shift',
  },
];

const engagementModels = [
  {
    title: 'Fixed-Price Projects',
    desc: 'Best for well-defined projects with clear requirements. You get a fixed budget, fixed timeline, and defined deliverables. No surprises.',
    ideal: 'Marketing websites, MVP launches, redesigns',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Team',
    desc: 'A full-time team of senior engineers embedded in your workflow. Perfect for ongoing product development and long-term partnerships.',
    ideal: 'SaaS products, enterprise platforms, continuous development',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Staff Augmentation',
    desc: 'Need to scale your team quickly? We embed senior developers into your existing team, following your processes and tools.',
    ideal: 'Sprint pushes, skill gaps, scaling up fast',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: 'Codazz rebuilt our entire platform in Next.js and the results were immediate. Page load dropped from 6 seconds to 1.2 seconds and our organic traffic increased 340% in 6 months.',
    name: 'Michael Torres',
    role: 'CTO, FinVault',
    industry: 'FinTech',
  },
  {
    quote: 'The team delivered a HIPAA-compliant patient portal that our 200+ clinics now rely on daily. Their understanding of healthcare compliance saved us months of development time.',
    name: 'Dr. Sarah Chen',
    role: 'VP of Digital, MedConnect',
    industry: 'Healthcare',
  },
  {
    quote: 'We went from a legacy Magento site to a headless Shopify + Next.js setup. Conversion rate jumped 2.3x and we finally have a site that loads instantly on mobile.',
    name: 'James Whitfield',
    role: 'Director of E-Commerce, LuxBrands',
    industry: 'Retail',
  },
  {
    quote: 'What impressed me most was their fixed-price model and transparent communication. Weekly demos, no scope creep, and they delivered two weeks ahead of schedule.',
    name: 'Priya Patel',
    role: 'Founder, EduSpark',
    industry: 'EdTech',
  },
];

const industries = [
  {
    name: 'FinTech & Banking',
    desc: 'PCI-compliant payment portals, trading dashboards, and banking apps with real-time data feeds and regulatory compliance.',
    href: '/industries/fintech',
  },
  {
    name: 'Healthcare & Telemedicine',
    desc: 'HIPAA-compliant patient portals, telehealth platforms, EHR integrations, and appointment scheduling systems.',
    href: '/industries/healthcare',
  },
  {
    name: 'E-Commerce & Retail',
    desc: 'Headless commerce storefronts, inventory management, dynamic pricing, and omnichannel retail experiences.',
    href: '/industries/ecommerce',
  },
  {
    name: 'SaaS & Technology',
    desc: 'Multi-tenant platforms, subscription management, analytics dashboards, and developer documentation portals.',
    href: '/industries/enterprise',
  },
  {
    name: 'Education & EdTech',
    desc: 'Learning management systems, virtual classrooms, student portals, and assessment platforms with video integration.',
    href: '/industries/edtech',
  },
  {
    name: 'Logistics & Supply Chain',
    desc: 'Fleet tracking dashboards, warehouse management systems, route optimization tools, and real-time shipment tracking.',
    href: '/industries/logistics',
  },
];

const comparisonPoints = [
  {
    feature: 'Pricing Model',
    codazz: 'Fixed-price with milestone payments',
    others: 'Hourly billing with scope creep',
  },
  {
    feature: 'Team Seniority',
    codazz: '100% senior engineers (5+ years)',
    others: 'Mix of junior and mid-level devs',
  },
  {
    feature: 'Communication',
    codazz: 'Weekly demos + daily Slack updates',
    others: 'Monthly status emails',
  },
  {
    feature: 'Performance Guarantee',
    codazz: '95+ Lighthouse score guaranteed',
    others: 'No performance commitments',
  },
  {
    feature: 'Post-Launch Support',
    codazz: 'Dedicated maintenance retainers',
    others: 'Ad-hoc support at premium rates',
  },
  {
    feature: 'IP Ownership',
    codazz: '100% IP transfer on completion',
    others: 'Shared or restricted licensing',
  },
  {
    feature: 'Security & Compliance',
    codazz: 'SOC II, WCAG 2.1, PCI DSS built in',
    others: 'Compliance as an add-on service',
  },
];

const faqs = [
  {
    q: 'How much does web development cost in the USA?',
    a: 'Web development costs vary based on complexity. A marketing website typically costs $8,000\u2013$25,000. A custom web application ranges from $25,000\u2013$100,000+. SaaS platforms start at $40,000. We provide fixed-price quotes after a free discovery call so there are no surprises.',
  },
  {
    q: 'What technologies do you use for web development?',
    a: 'We specialize in Next.js, React, TypeScript, and Tailwind CSS for frontend. For backend, we use Node.js, Python, Django, and serverless architectures on AWS and Vercel. Our database expertise includes PostgreSQL, MongoDB, and Redis. We choose the optimal stack for each project\'s requirements.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Marketing websites typically launch in 3\u20134 weeks. Custom web applications take 8\u201316 weeks depending on complexity. SaaS platforms require 12\u201324 weeks for MVP. We provide detailed timelines with milestones after our discovery session.',
  },
  {
    q: 'Do you build SEO-optimized websites?',
    a: 'Absolutely. Every website we build includes technical SEO foundations: semantic HTML, structured data (JSON-LD), XML sitemaps, Core Web Vitals optimization, meta tag management, Open Graph tags, and accessibility compliance. Our sites consistently score 95+ on Google Lighthouse.',
  },
  {
    q: 'Can you redesign an existing website without losing SEO rankings?',
    a: 'Yes. We handle full website redesigns with careful SEO preservation including 301 redirect mapping, URL structure planning, content migration, and staged rollouts. We monitor search console data throughout the transition to ensure zero traffic loss.',
  },
  {
    q: 'Do you provide ongoing website maintenance and support?',
    a: 'Yes. We offer monthly maintenance retainers covering security updates, performance monitoring, bug fixes, content updates, and new feature development. Most clients stay with us long-term as their digital needs evolve. Plans start at $1,500/month.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve diverse industries including FinTech, Healthcare, E-Commerce, SaaS, EdTech, Logistics, Real Estate, and Enterprise. Each industry has unique compliance and UX requirements that we address with specialized expertise and dedicated project teams.',
  },
  {
    q: 'How do you ensure website security?',
    a: 'Security is built into every layer: HTTPS/SSL certificates, input validation, CSRF protection, SQL injection prevention, Content Security Policy headers, regular dependency audits, and SOC II compliant development practices. For e-commerce, we ensure PCI DSS compliance.',
  },
];

/* ── Component ───────────────────────────────────────────────────────── */

export default function WebDevelopmentPage() {
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
        .reveal-d5 { transition-delay: 0.5s; }

        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logos-track {
          display: flex;
          gap: 48px;
          animation: scrollLogos 30s linear infinite;
          width: max-content;
        }
        .logos-track:hover { animation-play-state: paused; }

        .service-card {
          padding: 36px 32px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 28px;
          background: rgba(255,255,255,0.015);
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .service-card:hover {
          border-color: rgba(34,197,94,0.2) !important;
          background: rgba(34,197,94,0.03) !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(255,255,255,0.04);
        }

        .tech-pill {
          padding: 10px 20px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          transition: all 0.3s ease;
        }
        .tech-pill:hover {
          border-color: rgba(34,197,94,0.3);
          background: rgba(34,197,94,0.06);
          color: #ffffff;
        }

        .process-card {
          padding: 40px 36px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 28px;
          background: rgba(255,255,255,0.015);
          transition: all 0.35s ease;
        }
        .process-card:hover {
          border-color: rgba(34,197,94,0.15);
          background: rgba(34,197,94,0.02);
        }

        .testimonial-card {
          padding: 40px 36px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 28px;
          background: rgba(255,255,255,0.015);
          transition: all 0.35s ease;
        }
        .testimonial-card:hover {
          border-color: rgba(34,197,94,0.15);
          transform: translateY(-2px);
        }

        .faq-item {
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-item.active {
          background: rgba(34,197,94,0.04);
          border-color: rgba(34,197,94,0.2);
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-form-col { margin-top: 40px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-right: none !important; }
          .case-card-metrics { flex-direction: column; gap: 16px !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Web Development' },
          ]} />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1. HERO — H1 + stats + CTAs + inline lead form
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="wide" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 64, alignItems: 'center' }}>
              {/* Left column */}
              <div>
                <div className="reveal" style={{ display: 'inline-block', border: `1px solid ${greenBorder}`, borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                  #1 Rated Web Development Company in the USA
                </div>
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Web Development<br />
                  <span style={{ color: green }}>Company</span> That Builds<br />
                  What Others Can&apos;t
                </h1>
                <p className="reveal reveal-d2" style={{ fontSize: '1.15rem', color: dimWhite, marginBottom: '2rem', lineHeight: 1.75, maxWidth: 540 }}>
                  From high-converting marketing sites to complex SaaS platforms and enterprise portals. We engineer web experiences using Next.js, React, and Node.js that score 95+ on Lighthouse and rank on page one.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                  <Link href="/contact" style={{ background: green, color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 16px 40px ${greenGlow}`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                    View Our Work
                  </Link>
                </div>
                {/* Hero stats */}
                <div className="reveal reveal-d4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
                  {heroStats.map((s, i) => (
                    <div key={i} style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>{s.value}</div>
                      <div style={{ fontSize: 11, color: subtleWhite, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right column — inline lead form */}
              <div className="hero-form-col reveal reveal-d3">
                <ServiceHeroForm service="Web Development" />
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            2. AWARDS STRIP — Trust badges
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ ...sectionBorder, padding: '32px 0' }}>
          <div className="cb-container reveal">
            <TrustBadges compact />
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            3. WEB SERVICES GRID — 6 cards linking to sub-pages
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Our Web Services</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16 }}>
              Full-Spectrum Web Development Services
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 56 }}>
              Six specialized practice areas, each led by senior engineers with 5+ years of domain expertise.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {webServices.map((s, i) => (
                <Link key={s.title} href={s.href} className="service-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${green},transparent)` }} />
                  <div style={{ marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: dimWhite, lineHeight: 1.7, margin: '0 0 16px' }}>{s.desc}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: green, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            4. BENEFITS — Why invest in professional web development
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Why It Matters</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16 }}>
              Why Invest in Professional Web Development
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 56 }}>
              Your website is your most important sales tool. A 1-second delay in page load reduces conversions by 7%.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {benefits.map((b, i) => (
                <div key={b.title} className="reveal" style={{
                  padding: '40px 32px',
                  border: `1px solid ${borderColor}`,
                  borderRadius: 28,
                  background: cardBg,
                  transition: 'all 0.35s ease',
                  transitionDelay: `${i * 0.08}s`,
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = greenBorder; e.currentTarget.style.background = greenBg; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.background = cardBg; }}>
                  <div style={{ marginBottom: 20 }}>{b.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: dimWhite, lineHeight: 1.75, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            5. CLIENT LOGOS — Scrolling brand names
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section style={{ ...sectionBorder, padding: '48px 0', overflow: 'hidden' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{ ...tagStyle, color: subtleWhite }}>Trusted By Industry Leaders</span>
          </div>
          <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
            <div className="logos-track">
              {[...clientLogos, ...clientLogos].map((name, i) => (
                <div key={i} style={{ fontSize: 18, fontWeight: 600, color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap', letterSpacing: '-0.01em', flexShrink: 0 }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            6. CASE STUDIES — 3 web projects with metrics
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Case Studies</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16 }}>
              Real Projects. Real Results.
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 56 }}>
              Here&apos;s how we&apos;ve helped companies like yours transform their digital presence.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {caseStudies.map((cs, i) => (
                <div key={i} className="reveal" style={{
                  padding: 'clamp(32px, 4vw, 48px)',
                  border: `1px solid ${borderColor}`,
                  borderRadius: 28,
                  background: cardBg,
                  transitionDelay: `${i * 0.1}s`,
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: green, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{cs.industry}</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{cs.title}</h3>
                  <p style={{ fontSize: 15, color: dimWhite, lineHeight: 1.75, marginBottom: 28, maxWidth: 640 }}>{cs.desc}</p>
                  {/* Metrics row */}
                  <div className="case-card-metrics" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 24 }}>
                    {cs.metrics.map((m, j) => (
                      <div key={j}>
                        <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>{m.value}</div>
                        <div style={{ fontSize: 12, color: subtleWhite, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 6 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cs.tags.map(tag => (
                      <span key={tag} style={{ padding: '5px 14px', borderRadius: 100, fontSize: 12, fontWeight: 500, color: subtleWhite, border: `1px solid ${borderColor}`, background: 'rgba(255,255,255,0.02)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: green, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                View All Case Studies
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            7. TECH STACK — 18 technologies
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Technology Stack</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16 }}>
              Modern Technologies, Battle-Tested
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 48 }}>
              We don&apos;t chase trends. We use proven technologies that deliver performance, maintainability, and scalability.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {techStack.map((t, i) => (
                <div key={t.name} className="tech-pill" style={{ transitionDelay: `${i * 0.03}s` }}>
                  <span style={{ fontWeight: 600, color: '#ffffff' }}>{t.name}</span>
                  <span style={{ color: subtleWhite, marginLeft: 8, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            8. DEVELOPMENT PROCESS — 6 steps
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Our Process</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16 }}>
              How We Build Web Applications
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 56 }}>
              A proven 6-phase methodology refined over 500+ projects. Every step has clear deliverables so you always know what&apos;s next.
            </p>
            <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 20 }}>
              {processSteps.map((step, i) => (
                <div key={i} className="process-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 46, height: 46, borderRadius: '50%', background: green, color: '#000', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: green, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>What We Do</div>
                    <p style={{ fontSize: 14, color: dimWhite, lineHeight: 1.75, margin: 0 }}>{step.whatWeDo}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: subtleWhite, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>What You Get</div>
                    <p style={{ fontSize: 14, color: dimWhite, lineHeight: 1.75, margin: 0 }}>{step.whatYouGet}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            9. WHY CODAZZ — 4 differentiators
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Why Codazz</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16 }}>
              What Sets Us Apart
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 56 }}>
              We&apos;re not a body shop. We&apos;re a product engineering partner that treats every project like our own.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {differentiators.map((d, i) => (
                <div key={d.title} className="reveal" style={{
                  padding: '40px 32px',
                  border: `1px solid ${borderColor}`,
                  borderRadius: 28,
                  background: cardBg,
                  transition: 'all 0.35s ease',
                  transitionDelay: `${i * 0.08}s`,
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = greenBorder; e.currentTarget.style.background = greenBg; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.background = cardBg; }}>
                  <div style={{ marginBottom: 20 }}>{d.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>{d.title}</h3>
                  <p style={{ fontSize: 14, color: dimWhite, lineHeight: 1.75, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            10. COMPLIANCE — WCAG, Core Web Vitals, GDPR, PCI DSS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Compliance & Standards</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16 }}>
              Built to the Highest Standards
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 56 }}>
              Compliance isn&apos;t an afterthought. We engineer accessibility, performance, privacy, and security into every layer.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {complianceItems.map((c, i) => (
                <div key={c.title} className="reveal" style={{
                  padding: '36px 28px',
                  border: `1px solid ${borderColor}`,
                  borderRadius: 24,
                  background: cardBg,
                  transitionDelay: `${i * 0.08}s`,
                }}>
                  <div style={{ marginBottom: 16 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em' }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: dimWhite, lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            11. PERFORMANCE METRICS — Big numbers
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={tagStyle}>Performance Benchmarks</span>
              <h2 style={{ ...headingStyle, margin: '16px auto 0', textAlign: 'center' }}>
                Websites That Don&apos;t Just Look Good &mdash; They Perform
              </h2>
            </div>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
              {perfMetrics.map((m, i) => (
                <div key={i} className="reveal" style={{
                  padding: 'clamp(32px, 4vw, 48px) clamp(20px, 3vw, 40px)',
                  borderRight: i < 3 ? `1px solid ${borderColor}` : 'none',
                  textAlign: 'center',
                  transitionDelay: `${i * 0.1}s`,
                }}>
                  <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: green, letterSpacing: '-0.04em', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', margin: '12px 0 6px' }}>{m.label}</div>
                  <div style={{ fontSize: 13, color: subtleWhite }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            12. TESTIMONIALS — 4 cards
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Client Testimonials</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 56 }}>
              What Our Clients Say
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill={green} stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: dimWhite, lineHeight: 1.75, margin: '0 0 28px', fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: `1px solid ${borderColor}`, paddingTop: 20 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: subtleWhite, marginTop: 2 }}>{t.role}</div>
                    <div style={{ fontSize: 11, color: green, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{t.industry}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            12b. ENGAGEMENT MODELS — 3 ways to work with us
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Engagement Models</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16 }}>
              Flexible Ways to Work Together
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 56 }}>
              Whether you need a one-time build or an ongoing engineering partner, we have a model that fits.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: 20,
            }}>
              {engagementModels.map((model, i) => (
                <div
                  key={model.title}
                  className="reveal"
                  style={{
                    padding: '40px 32px',
                    border: `1px solid ${borderColor}`,
                    borderRadius: 28,
                    background: cardBg,
                    transition: 'all 0.35s ease',
                    transitionDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = greenBorder;
                    e.currentTarget.style.background = greenBg;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = borderColor;
                    e.currentTarget.style.background = cardBg;
                  }}
                >
                  <div style={{ marginBottom: 20 }}>{model.icon}</div>
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: 12,
                    letterSpacing: '-0.02em',
                  }}>
                    {model.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    color: dimWhite,
                    lineHeight: 1.75,
                    margin: '0 0 20px',
                  }}>
                    {model.desc}
                  </p>
                  <div style={{
                    padding: '12px 16px',
                    background: 'rgba(34,197,94,0.06)',
                    borderRadius: 12,
                    border: `1px solid rgba(34,197,94,0.1)`,
                  }}>
                    <div style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: green,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: 4,
                    }}>
                      Ideal For
                    </div>
                    <div style={{
                      fontSize: 13,
                      color: dimWhite,
                    }}>
                      {model.ideal}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            12c. INDUSTRIES — 6 industry verticals
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Industries We Serve</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16 }}>
              Web Development for Every Industry
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 56 }}>
              Domain-specific expertise means faster delivery, fewer revisions, and software that meets regulatory and UX standards from day one.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {industries.map((ind, i) => (
                <Link
                  key={ind.name}
                  href={ind.href}
                  className="reveal"
                  style={{
                    padding: '36px 32px',
                    border: `1px solid ${borderColor}`,
                    borderRadius: 28,
                    background: cardBg,
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    transition: 'all 0.35s ease',
                    transitionDelay: `${i * 0.07}s`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = greenBorder;
                    e.currentTarget.style.background = greenBg;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = borderColor;
                    e.currentTarget.style.background = cardBg;
                    e.currentTarget.style.transform = '';
                  }}
                >
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: 10,
                    letterSpacing: '-0.02em',
                  }}>
                    {ind.name}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    color: dimWhite,
                    lineHeight: 1.75,
                    margin: '0 0 16px',
                  }}>
                    {ind.desc}
                  </p>
                  <span style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: green,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                    Explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            12c. HOW WE COMPARE — Comparison table
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 16 }}>
              <span style={tagStyle}>How We Compare</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 16, textAlign: 'center' }}>
              Codazz vs. Other Web Development Agencies
            </h2>
            <p className="reveal reveal-d2" style={{ ...subStyle, marginBottom: 48, textAlign: 'center', margin: '0 auto 48px' }}>
              See why 500+ companies choose Codazz over traditional agencies and freelancers.
            </p>
            <div className="reveal reveal-d3" style={{
              border: `1px solid ${borderColor}`,
              borderRadius: 24,
              overflow: 'hidden',
            }}>
              {/* Table header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                background: 'rgba(34,197,94,0.06)',
                borderBottom: `1px solid ${borderColor}`,
              }}>
                <div style={{
                  padding: '18px 24px',
                  fontSize: 12,
                  fontWeight: 700,
                  color: subtleWhite,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  Feature
                </div>
                <div style={{
                  padding: '18px 24px',
                  fontSize: 12,
                  fontWeight: 700,
                  color: green,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  Codazz
                </div>
                <div style={{
                  padding: '18px 24px',
                  fontSize: 12,
                  fontWeight: 700,
                  color: subtleWhite,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  Typical Agency
                </div>
              </div>
              {/* Table rows */}
              {comparisonPoints.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    borderBottom: i < comparisonPoints.length - 1 ? `1px solid ${borderColor}` : 'none',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{
                    padding: '16px 24px',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#ffffff',
                  }}>
                    {row.feature}
                  </div>
                  <div style={{
                    padding: '16px 24px',
                    fontSize: 14,
                    color: dimWhite,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="2.5" style={{ flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {row.codazz}
                  </div>
                  <div style={{
                    padding: '16px 24px',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" style={{ flexShrink: 0 }}>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {row.others}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            13. FAQ — 8 web-specific FAQs
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={tagStyle}>Frequently Asked Questions</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...headingStyle, marginBottom: 48 }}>
              Web Development FAQs
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className={`faq-item reveal ${openFaq === i ? 'active' : ''}`} style={{ transitionDelay: `${i * 0.05}s` }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '24px 28px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left', paddingRight: 16 }}>{faq.q}</span>
                    <div style={{
                      width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.03)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? green : 'rgba(255,255,255,0.4)'} strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    style={{
                      maxHeight: openFaq === i ? 300 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease',
                    }}
                  >
                    <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: dimWhite, lineHeight: 1.75 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            14. CTA WITH FORM — Bottom lead capture
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 64, alignItems: 'center' }}>
              {/* Left — CTA copy */}
              <div>
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: `1px solid ${greenBorder}`, borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: green, boxShadow: `0 0 8px ${green}` }} />
                  <span style={tagStyle}>Start Your Project</span>
                </div>
                <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 20px' }}>
                  Ready to Build a Website<br />
                  That <span style={{ color: green }}>Drives Revenue?</span>
                </h2>
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: dimWhite, lineHeight: 1.75, margin: '0 0 32px', maxWidth: 480 }}>
                  Join 500+ companies that trust Codazz to build their digital products. Get a free project assessment and fixed-price quote within 48 hours.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    'Free discovery call with a senior engineer',
                    'Detailed technical proposal within 48 hours',
                    'Fixed-price contracts with milestone payments',
                    'NDA protection and IP ownership transfer',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: dimWhite }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="reveal reveal-d4" style={{ marginTop: 40 }}>
                  <TrustBadges compact />
                </div>
              </div>
              {/* Right — Form */}
              <div className="hero-form-col reveal reveal-d2">
                <ServiceHeroForm service="Web Development" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
