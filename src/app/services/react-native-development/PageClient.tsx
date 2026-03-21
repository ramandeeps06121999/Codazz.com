'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

/* ═══════════════════════════════════════════════════════════════════════════
   REVEAL HOOK
   ═══════════════════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const heroStats = [
  { value: '200+', label: 'React Native Apps' },
  { value: '40%', label: 'Lower Cost vs Native' },
  { value: '95%', label: 'Code Sharing' },
  { value: '4.9/5', label: 'App Store Rating' },
];

const rnAdvantages = [
  {
    icon: '📦',
    title: 'Single Codebase',
    desc: 'Write once, run everywhere. A single JavaScript/TypeScript codebase powers both your iOS and Android apps, eliminating duplicated logic and keeping your team focused on features — not platform maintenance.',
  },
  {
    icon: '⚡',
    title: 'Near-Native Performance',
    desc: "The new React Native architecture — JSI, Fabric renderer, and TurboModules — eliminates the JavaScript bridge bottleneck. Your UI runs at 60fps with synchronous native module access, performance users cannot distinguish from native.",
  },
  {
    icon: '🔥',
    title: 'Hot Reload & Fast Iteration',
    desc: "Fast Refresh reflects code changes instantly without rebuilding the app. This dramatically shortens feedback loops and accelerates your team's velocity when shipping features and fixing bugs.",
  },
  {
    icon: '🌐',
    title: 'Massive Ecosystem',
    desc: 'Access thousands of battle-tested npm packages, Expo modules, and native libraries. Backed by Meta, with major contributions from Microsoft, Shopify, and Coinbase — React Native has one of the richest ecosystems in mobile.',
  },
  {
    icon: '💰',
    title: 'Cost Efficiency',
    desc: 'Building separate native apps requires two teams, two codebases, and doubled QA effort. React Native eliminates that redundancy, reducing development cost by up to 40% and ongoing maintenance by up to 50%.',
  },
  {
    icon: '👥',
    title: 'Thriving Community',
    desc: 'Millions of React Native developers worldwide means abundant talent, extensive documentation, fast issue resolution, and a library for virtually every use case. Hiring is easier. Onboarding is faster.',
  },
];

const rnServices = [
  {
    icon: '🚀',
    title: 'MVP Development',
    tag: 'Startups',
    desc: 'Launch your React Native MVP in 6–10 weeks. We build the smallest viable product that validates your idea with real users — lean, focused, and ready for investor demos and early user acquisition.',
    chips: ['Expo', 'TypeScript', 'React Navigation', 'Firebase'],
  },
  {
    icon: '🏢',
    title: 'Enterprise Apps',
    tag: 'Scale',
    desc: 'Mission-critical React Native apps for mid-market and enterprise organizations. Deep API integrations, SSO, offline-first architecture, and enterprise-grade security with SOC 2, HIPAA, and PCI DSS compliance.',
    chips: ['Azure AD', 'GraphQL', 'Redux', 'Detox', 'CodePush'],
  },
  {
    icon: '🔄',
    title: 'React Native Migration',
    tag: 'Brownfield',
    desc: 'Migrate your existing native iOS or Android app to React Native incrementally. Our brownfield approach integrates React Native screens without a full rewrite, reducing risk and preserving your current user base.',
    chips: ['Brownfield', 'JSI', 'TurboModules', 'Fabric'],
  },
  {
    icon: '⚙️',
    title: 'Performance Optimization',
    tag: 'Tuning',
    desc: 'Slow renders and janky animations killing your ratings? We profile, diagnose, and fix React Native performance issues — bottlenecks, memory leaks, excessive re-renders — restoring silky 60fps smoothness.',
    chips: ['Hermes', 'Flipper', 'Perf Monitor', 'Reanimated'],
  },
  {
    icon: '📱',
    title: 'Expo Apps',
    tag: 'Expo Ecosystem',
    desc: 'Leverage the full Expo ecosystem for faster builds, OTA updates, push notifications, and EAS Build. We build managed and bare workflow Expo apps that deploy to iOS, Android, and web from one project.',
    chips: ['Expo SDK', 'EAS Build', 'EAS Update', 'Expo Router'],
  },
  {
    icon: '🔧',
    title: 'Custom Native Modules',
    tag: 'Native Bridge',
    desc: 'Need functionality not covered by the existing ecosystem? We write custom native modules in Swift/Objective-C and Kotlin/Java, exposed to JavaScript via the modern TurboModules API for zero-overhead calls.',
    chips: ['Swift', 'Kotlin', 'TurboModules', 'JSI', 'C++'],
  },
];

const techStack = [
  { category: 'Framework & Runtime', items: ['React Native 0.74+', 'Expo SDK 51', 'Hermes Engine', 'New Architecture (JSI)'] },
  { category: 'Navigation', items: ['React Navigation 6', 'Expo Router', 'Deep Linking', 'Tab & Stack Navigators'] },
  { category: 'State Management', items: ['Redux Toolkit', 'Zustand', 'Jotai', 'React Context API'] },
  { category: 'Data & Networking', items: ['React Query (TanStack)', 'Apollo Client', 'Axios', 'SWR'] },
  { category: 'UI Components', items: ['React Native Paper', 'NativeWind', 'Shopify Restyle', 'React Native Elements'] },
  { category: 'Animation', items: ['React Native Reanimated 3', 'Moti', 'Lottie', 'Skia'] },
  { category: 'OTA & Deployment', items: ['CodePush', 'EAS Update', 'Expo Updates', 'Fastlane'] },
  { category: 'Testing', items: ['Detox (E2E)', 'Jest', 'React Native Testing Library', 'Maestro'] },
];

const appTypes = [
  {
    icon: '🛒',
    title: 'E-Commerce',
    desc: 'Multi-vendor marketplaces, retail apps, and social commerce platforms with AI-powered recommendations, AR product preview, real-time inventory, and Stripe/Apple Pay/Google Pay integration.',
    examples: ['Marketplace apps', 'Retail stores', 'Subscription commerce'],
  },
  {
    icon: '💳',
    title: 'FinTech',
    desc: 'Digital wallets, trading platforms, budgeting apps, and neobank products. PCI DSS compliant with biometric auth, real-time transaction feeds, and bank-grade encryption throughout.',
    examples: ['Digital wallets', 'Trading platforms', 'Expense trackers'],
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'HIPAA-compliant telehealth platforms, patient portals, wearable data dashboards, and mental wellness apps with HL7/FHIR integration and secure WebRTC video consultations.',
    examples: ['Telehealth apps', 'Patient portals', 'Wellness trackers'],
  },
  {
    icon: '🚗',
    title: 'On-Demand',
    desc: 'Uber-like ride-hailing, food delivery, home services, and logistics apps with real-time GPS tracking, surge pricing, driver/customer dual apps, and push notification pipelines.',
    examples: ['Ride hailing', 'Food delivery', 'Home services'],
  },
  {
    icon: '💬',
    title: 'Social & Community',
    desc: 'Social networks, creator platforms, dating apps, and community tools with real-time messaging via WebSockets, live streaming, Stories, and algorithmic content feeds.',
    examples: ['Social networks', 'Dating apps', 'Creator platforms'],
  },
  {
    icon: '🏭',
    title: 'Enterprise',
    desc: 'Field service apps, inventory management, CRM mobile clients, and internal tools with SSO, offline-first sync, MDM compatibility, and role-based access control for large organizations.',
    examples: ['Field service', 'Inventory management', 'CRM mobile'],
  },
];

const comparisonRows = [
  { feature: 'Language', rn: 'JavaScript / TypeScript', flutter: 'Dart' },
  { feature: 'Code Sharing', rn: '95% iOS + Android', flutter: '95% iOS + Android' },
  { feature: 'Performance', rn: 'Near-native (JSI/Fabric)', flutter: 'Native (compiled to ARM)' },
  { feature: 'Web Developer Ramp-Up', rn: 'Very fast (React ecosystem)', flutter: 'Moderate (learn Dart)' },
  { feature: 'Ecosystem & Libraries', rn: 'Massive (npm + native modules)', flutter: 'Growing (pub.dev)' },
  { feature: 'OTA Updates', rn: 'Yes (CodePush, EAS Update)', flutter: 'Limited (Shorebird)' },
  { feature: 'Backed By', rn: 'Meta + Microsoft + Shopify', flutter: 'Google' },
  { feature: 'Best For', rn: 'JS teams, web-to-mobile, OTA-heavy apps', flutter: 'Pixel-perfect UI, greenfield projects' },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Scoping',
    desc: 'We analyse your business goals, target users, competitor apps, and technical constraints. We determine whether Expo or bare React Native is right for your project and produce a detailed technical brief before any code is written.',
    deliverables: ['Technical Brief', 'Architecture Decision', 'Competitor Audit', 'Risk Register'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Architecture & Planning',
    desc: 'We design the app architecture — navigation structure, state management strategy, API contracts, data models, and third-party integrations. A fixed-price sprint plan is agreed before development begins.',
    deliverables: ['Architecture Diagram', 'API Contracts', 'Sprint Plan', 'Fixed-Price Quote'],
    duration: '1 week',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    desc: 'Platform-specific design following Apple HIG and Material Design 3 guidelines. Interactive prototypes are validated with real users before development starts, so the engineering team builds with confidence.',
    deliverables: ['Wireframes', 'Interactive Prototype', 'Design System', 'User Test Report'],
    duration: '2–3 weeks',
  },
  {
    num: '04',
    title: 'React Native Development',
    desc: 'Two-week agile sprints. Daily standups, weekly sprint demos, and a live staging build accessible to your team at all times. Full CI/CD with automated tests run on every pull request.',
    deliverables: ['Sprint Demos', 'Staging Build', 'Code Reviews', 'CI/CD Pipeline'],
    duration: '6–16 weeks',
  },
  {
    num: '05',
    title: 'QA & Performance Testing',
    desc: 'Detox E2E tests on real iOS and Android devices. Jest unit tests, React Native Testing Library, Maestro flows, and manual exploratory testing across 100+ device/OS combinations. Performance profiled via Hermes trace.',
    deliverables: ['QA Report', 'E2E Test Suite', 'Performance Audit', 'Crash Analytics'],
    duration: '2–3 weeks',
  },
  {
    num: '06',
    title: 'Launch & Growth Support',
    desc: 'App Store and Google Play submission with full ASO optimization. OTA update pipelines via CodePush or EAS Update for rapid post-launch iterations. 24/7 monitoring, 30-day warranty, and optional retainer support.',
    deliverables: ['Store Submission', 'ASO Package', 'OTA Pipeline', 'Monitoring Dashboard'],
    duration: 'Ongoing',
  },
];

const caseStudies = [
  {
    title: 'NeoBank Mobile App',
    industry: 'FinTech',
    desc: 'Built a full-featured digital banking app in React Native with real-time transaction feeds, biometric login, card controls, P2P transfers, and a Plaid-powered account linking flow. Launched on iOS and Android simultaneously in 18 weeks.',
    metrics: ['340K Users in Year 1', '4.8★ App Store', '$180M Transactions Processed', '99.97% Uptime'],
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'On-Demand Home Services Platform',
    industry: 'On-Demand',
    desc: 'Dual-app platform (customer + provider) with real-time GPS tracking, dynamic pricing, push notifications, Stripe Connect payouts, and admin dashboard. Migrated from two separate native apps — 60% reduction in maintenance cost.',
    metrics: ['60% Lower Dev Cost', '85K Monthly Bookings', '4.7★ Google Play', '2x Faster Shipping'],
    stack: ['React Native', 'Expo', 'React Query', 'Node.js', 'MongoDB', 'GCP'],
  },
  {
    title: 'B2B Field Service App',
    industry: 'Enterprise',
    desc: 'Offline-first React Native app for 3,000 field technicians. Syncs work orders, checklists, and photo evidence automatically when connectivity is restored. Integrated with SAP via REST APIs and Azure AD SSO.',
    metrics: ['3,000 Active Technicians', '100% Offline Capable', '34% Productivity Gain', 'SAP Integrated'],
    stack: ['React Native', 'TypeScript', 'WatermelonDB', 'Azure AD', 'SAP', 'CodePush'],
  },
];

const pricingTiers = [
  {
    name: 'MVP',
    price: '$25K',
    sub: 'Starting from',
    timeline: '8–10 weeks',
    desc: 'Validate your idea fast. Core screens, auth, one key feature loop, and App Store submission for both platforms.',
    features: [
      'Up to 8 screens',
      'User authentication (email + social)',
      '1 core feature module',
      'REST API integration',
      'iOS + Android (Expo)',
      'App Store submission',
      '30-day post-launch support',
    ],
    cta: 'Start MVP',
    highlight: false,
  },
  {
    name: 'Full App',
    price: '$75K',
    sub: 'Starting from',
    timeline: '14–20 weeks',
    desc: 'Production-ready consumer or B2B app with backend, payments, push notifications, analytics, and full QA.',
    features: [
      'Unlimited screens',
      'Custom backend API (Node.js / Python)',
      'Payment integration (Stripe / Apple Pay)',
      'Push notifications (FCM / APNs)',
      'In-app analytics (Mixpanel / Amplitude)',
      'Admin dashboard',
      'Full Detox E2E test suite',
      '90-day SLA support',
    ],
    cta: 'Get a Quote',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$150K+',
    sub: 'Custom pricing',
    timeline: '5–9 months',
    desc: 'Complex enterprise apps with deep integrations, custom native modules, offline-first sync, and compliance requirements.',
    features: [
      'Custom native modules (Swift / Kotlin)',
      'Offline-first architecture (WatermelonDB)',
      'SSO / Azure AD / Okta integration',
      'ERP / CRM / EHR integration',
      'MDM-compatible deployment',
      'HIPAA / SOC 2 / PCI DSS compliance',
      'Dedicated engineering team',
      '12-month SLA + retainer',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const faqs = [
  {
    q: 'What is React Native and why should I use it for my app?',
    a: "React Native is a JavaScript framework created by Meta that compiles to real native iOS and Android components — not a WebView. Companies like Meta, Microsoft, Shopify, and Coinbase use it in production. It lets you ship on both platforms simultaneously from a single codebase, cutting development cost by up to 40% versus building two separate native apps, while delivering performance users cannot distinguish from native.",
  },
  {
    q: 'How much does React Native app development cost?',
    a: 'A simple React Native MVP typically costs $20K–$35K. A mid-complexity consumer app with backend, auth, payments, and push notifications runs $60K–$130K. Enterprise-grade applications with custom native modules, offline sync, and compliance integrations start at $150K and can reach $400K+. React Native itself saves 30–40% compared to maintaining separate iOS and Android codebases. We provide fixed-price quotes after a free discovery session.',
  },
  {
    q: 'How long does it take to build a React Native app?',
    a: "A focused MVP takes 8–10 weeks. A standard consumer app with backend, Stripe payments, push notifications, and full QA takes 14–20 weeks. Complex enterprise apps with custom native modules and deep integrations typically run 5–9 months. One of React Native's biggest advantages is launching on iOS and Android simultaneously, saving months compared to sequential native development.",
  },
  {
    q: 'Can you migrate my existing native app to React Native?',
    a: "Yes — and we specialize in it. We use a brownfield approach, integrating React Native screens incrementally into your existing native app rather than doing a risky full rewrite. This preserves your App Store history, user base, and existing functionality while progressively shifting to a unified codebase. We have migrated apps with 100K+ active users, reducing ongoing maintenance costs by 45–60%.",
  },
  {
    q: 'Is React Native as fast as a native app?',
    a: 'For the vast majority of app categories — social apps, marketplaces, FinTech, healthcare, on-demand — React Native with the new architecture (JSI, Fabric, Hermes) delivers 60fps performance that users cannot distinguish from native. The bridge bottleneck that caused earlier performance issues has been eliminated. For apps requiring intensive GPU computation like complex 3D games, native development may be preferable, and we advise honestly on whether React Native is the right fit.',
  },
  {
    q: 'Should I choose Expo or bare React Native?',
    a: "Expo is our default recommendation for most projects. The Expo SDK covers 90%+ of common requirements (camera, location, notifications, auth, payments) and EAS Build + EAS Update give you OTA updates and CI/CD out of the box. We recommend bare React Native when you need custom C++ native modules or integrations not supported by Expo's managed workflow. We evaluate this during discovery and make a transparent recommendation based on your specific requirements.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function PageClient() {
  const pageRef = useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-delay-1 { transition-delay: 0.10s; }
        .reveal-delay-2 { transition-delay: 0.20s; }
        .reveal-delay-3 { transition-delay: 0.30s; }
        .reveal-delay-4 { transition-delay: 0.40s; }
        .reveal-delay-5 { transition-delay: 0.50s; }
        .rn-card { transition: border-color 0.25s, transform 0.25s, background 0.25s; }
        .rn-card:hover { border-color: rgba(34,197,94,0.4) !important; transform: translateY(-4px); background: rgba(34,197,94,0.04) !important; }
        .pricing-card { transition: border-color 0.25s, transform 0.25s; }
        .pricing-card:hover { border-color: rgba(34,197,94,0.5) !important; transform: translateY(-6px); }
        .faq-btn { cursor: pointer; background: transparent; border: none; width: 100%; text-align: left; }
        .step-num { background: linear-gradient(135deg,#22c55e,#16a34a); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        @keyframes feat-ltr { 0%{ transform: translateX(0) } 100%{ transform: translateX(-50%) } }
        @keyframes feat-rtl { 0%{ transform: translateX(-50%) } 100%{ transform: translateX(0) } }
      `}</style>

      <Navbar />

      <main ref={pageRef} style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 96 }}>
          <HeroBackground variant="center" />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'React Native Development' },
            ]} />

            <div style={{ textAlign: 'center', marginTop: 40 }}>

              {/* Company badge */}
              <div className="reveal" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.28)',
                borderRadius: 100, padding: '8px 18px', marginBottom: 28,
              }}>
                <span style={{ fontSize: 15 }}>⚛️</span>
                <span style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  React Native Development Company
                </span>
              </div>

              {/* H1 */}
              <h1 className="reveal reveal-delay-1" style={{
                fontSize: 'clamp(32px, 6vw, 68px)', fontWeight: 900, lineHeight: 1.07,
                letterSpacing: '-0.025em', margin: '0 0 24px',
              }}>
                Build Cross-Platform Apps<br />
                <span style={{ color: '#22c55e' }}>with React Native</span>
              </h1>

              {/* Sub */}
              <p className="reveal reveal-delay-2" style={{
                fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'rgba(255,255,255,0.62)',
                maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.65,
              }}>
                Ship high-performance iOS and Android apps from a single codebase. 200+ cross-platform
                apps delivered. 40% lower cost than building native. Trusted by startups, scale-ups,
                and enterprises worldwide.
              </p>

              {/* CTA row */}
              <div className="reveal reveal-delay-3" style={{
                display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64,
              }}>
                <Link href="/contact" style={{
                  background: '#22c55e', color: '#000', fontWeight: 800, fontSize: 15,
                  padding: '14px 28px', borderRadius: 28, textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>
                  Get a Free Estimate
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="#case-studies" style={{
                  background: 'rgba(255,255,255,0.05)', color: '#fff', fontWeight: 600, fontSize: 15,
                  padding: '14px 28px', borderRadius: 28, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.11)',
                }}>
                  See Our Work
                </Link>
              </div>

              {/* Stat bar */}
              <div className="reveal reveal-delay-4" style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                background: 'rgba(255,255,255,0.04)', borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden', maxWidth: 800, margin: '0 auto',
              }}>
                {heroStats.map((s, i) => (
                  <div key={s.label} style={{
                    background: 'rgba(0,0,0,0.5)', padding: '24px 12px', textAlign: 'center',
                    borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}>
                    <div style={{ fontSize: 'clamp(20px, 3.5vw, 30px)', fontWeight: 900, color: '#22c55e', lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 6, fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. TRUST BADGES ──────────────────────────────────────────────── */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <TrustBadges />
          </div>
        </section>

        {/* ── 3. WHY REACT NATIVE ───────────────────────────────────────────── */}
        <section style={{ padding: '96px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
              <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                Why React Native
              </p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                The Smart Choice for Cross-Platform
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
                React Native powers apps used by billions of people daily. Here is why the world's best
                product teams choose it.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
              {rnAdvantages.map((adv, i) => (
                <div
                  key={adv.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} rn-card`}
                  style={{
                    background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 22, padding: '32px 28px',
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{adv.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{adv.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: 14.5, lineHeight: 1.7, margin: 0 }}>{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SERVICES ──────────────────────────────────────────────────── */}
        <section style={{ padding: '96px 24px', background: 'rgba(255,255,255,0.012)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
              <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                Our Services
              </p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                React Native Development Services
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
                From early-stage MVPs to enterprise-grade platforms — we cover the full React Native lifecycle.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
              {rnServices.map((svc, i) => (
                <div
                  key={svc.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} rn-card`}
                  style={{
                    background: '#080808', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 24, padding: '32px 28px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <span style={{ fontSize: 32 }}>{svc.icon}</span>
                    <span style={{
                      background: 'rgba(34,197,94,0.09)', color: '#22c55e',
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                      padding: '4px 10px', borderRadius: 100,
                    }}>{svc.tag}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{svc.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: 14, lineHeight: 1.7, margin: '0 0 20px' }}>{svc.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {svc.chips.map(c => (
                      <span key={c} style={{
                        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
                        color: 'rgba(255,255,255,0.62)', fontSize: 12, fontWeight: 500,
                        padding: '3px 10px', borderRadius: 100,
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4b. FEATURES MARQUEE ─────────────────────────────────────────── */}
        <section style={{ padding: '80px 0', overflow: 'hidden' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
              Key Features
            </p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              Everything You Need, Built In
            </h2>
          </div>
          {/* Row 1 — left-to-right */}
          <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ display: 'flex', gap: 12, animation: 'feat-ltr 35s linear infinite', width: 'max-content' }}>
              {['⚡ Near-Native Performance', '🔄 Hot Reload', '📱 iOS & Android', '🧩 Reusable Components', '🔗 Native Modules', '🎨 Custom Animations',
                '⚡ Near-Native Performance', '🔄 Hot Reload', '📱 iOS & Android', '🧩 Reusable Components', '🔗 Native Modules', '🎨 Custom Animations'].map((item, i) => (
                <div key={i} style={{ width: 200, padding: '16px 20px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', flexShrink: 0, fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap' }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Row 2 — right-to-left */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ display: 'flex', gap: 12, animation: 'feat-rtl 40s linear infinite', width: 'max-content' }}>
              {['📊 Hermes Engine', '🔒 Secure Storage', '📍 Maps & Location', '💳 Payment Integration', '🔔 Push Notifications', '🌐 Offline First',
                '📊 Hermes Engine', '🔒 Secure Storage', '📍 Maps & Location', '💳 Payment Integration', '🔔 Push Notifications', '🌐 Offline First'].map((item, i) => (
                <div key={i} style={{ width: 200, padding: '16px 20px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', flexShrink: 0, fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap' }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. TECH STACK ────────────────────────────────────────────────── */}
        <section style={{ padding: '96px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
              <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                Tech Stack
              </p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                Best-in-Class React Native Tooling
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
                We use the latest, most battle-tested libraries in the React Native ecosystem — no legacy tech, no shortcuts.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {techStack.map((cat, i) => (
                <div
                  key={cat.category}
                  className={`reveal reveal-delay-${(i % 4) + 1}`}
                  style={{
                    background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 18, padding: '24px 22px',
                  }}
                >
                  <p style={{
                    color: '#22c55e', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
                    textTransform: 'uppercase', margin: '0 0 14px',
                  }}>
                    {cat.category}
                  </p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {cat.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.72)' }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. APP TYPES BUILT ───────────────────────────────────────────── */}
        <section style={{ padding: '96px 24px', background: 'rgba(255,255,255,0.012)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
              <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                What We Build
              </p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                App Types We Specialize In
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
                We have shipped React Native apps across every major vertical — from consumer social to regulated enterprise.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
              {appTypes.map((type, i) => (
                <div
                  key={type.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} rn-card`}
                  style={{
                    background: '#080808', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 22, padding: '30px 26px',
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{type.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{type.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: 14, lineHeight: 1.7, margin: '0 0 16px' }}>{type.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {type.examples.map(ex => (
                      <span key={ex} style={{
                        background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)',
                        color: 'rgba(34,197,94,0.88)', fontSize: 12, fontWeight: 500,
                        padding: '3px 10px', borderRadius: 100,
                      }}>{ex}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. REACT NATIVE VS FLUTTER COMPARISON ────────────────────────── */}
        <section style={{ padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
              <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                Framework Comparison
              </p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                React Native vs Flutter
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
                Both are excellent frameworks. The right choice depends on your team, timeline, and app requirements.
                We build in both — here is an honest comparison.
              </p>
            </div>

            {/* Table */}
            <div className="reveal" style={{
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28,
              overflow: 'hidden', background: 'rgba(255,255,255,0.018)',
            }}>
              {/* Header row */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr',
                background: 'rgba(34,197,94,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}>
                <div style={{ padding: '18px 24px', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  Feature
                </div>
                <div style={{ padding: '18px 24px', fontSize: 14, fontWeight: 700, color: '#22c55e', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>⚛️</span> React Native
                </div>
                <div style={{ padding: '18px 24px', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.65)', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>🐦</span> Flutter
                </div>
              </div>

              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  style={{
                    display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr',
                    borderBottom: i < comparisonRows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.012)',
                  }}
                >
                  <div style={{ padding: '16px 24px', fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{row.feature}</div>
                  <div style={{ padding: '16px 24px', fontSize: 14, color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.05)', fontWeight: 500 }}>{row.rn}</div>
                  <div style={{ padding: '16px 24px', fontSize: 14, color: 'rgba(255,255,255,0.58)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>{row.flutter}</div>
                </div>
              ))}
            </div>

            <p className="reveal" style={{ textAlign: 'center', marginTop: 22, color: 'rgba(255,255,255,0.38)', fontSize: 13 }}>
              Not sure which framework is right for your project?{' '}
              <Link href="/contact" style={{ color: '#22c55e', textDecoration: 'none', fontWeight: 600 }}>
                Ask our team — free consultation.
              </Link>
            </p>
          </div>
        </section>

        {/* ── 8. DEVELOPMENT PROCESS ───────────────────────────────────────── */}
        <section style={{ padding: '96px 24px', background: 'rgba(255,255,255,0.012)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                Our Process
              </p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                How We Build React Native Apps
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
                A proven 6-step process refined across 200+ projects. Transparent, milestone-driven, and always on budget.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  className={`reveal reveal-delay-${(i % 3) + 1}`}
                  style={{
                    background: '#080808', border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 24, padding: '32px 36px',
                    display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 24, alignItems: 'start',
                  }}
                >
                  <div className="step-num" style={{ fontSize: 44, fontWeight: 900, lineHeight: 1 }}>{step.num}</div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{step.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: 14, lineHeight: 1.7, margin: '0 0 16px' }}>{step.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {step.deliverables.map(d => (
                        <span key={d} style={{
                          background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.18)',
                          color: '#22c55e', fontSize: 12, fontWeight: 600,
                          padding: '4px 12px', borderRadius: 100,
                        }}>{d}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{
                    background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.18)',
                    borderRadius: 14, padding: '10px 16px', textAlign: 'center', whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.35)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>Duration</p>
                    <p style={{ margin: 0, color: '#22c55e', fontSize: 13, fontWeight: 700 }}>{step.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CASE STUDIES ──────────────────────────────────────────────── */}
        <section id="case-studies" style={{ padding: '96px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
              <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                Case Studies
              </p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                React Native Apps We've Shipped
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
                Real projects. Real metrics. No mock-ups or theoretical results.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {caseStudies.map((cs, i) => (
                <div
                  key={cs.title}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{
                    background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 28, padding: '40px',
                    display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ marginBottom: 14 }}>
                      <span style={{
                        background: 'rgba(34,197,94,0.09)', border: '1px solid rgba(34,197,94,0.22)',
                        color: '#22c55e', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                        textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100,
                      }}>{cs.industry}</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 12px' }}>{cs.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: 15, lineHeight: 1.7, margin: '0 0 20px' }}>{cs.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {cs.stack.map(t => (
                        <span key={t} style={{
                          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
                          color: 'rgba(255,255,255,0.58)', fontSize: 12, padding: '3px 10px', borderRadius: 100,
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 196 }}>
                    {cs.metrics.map(m => (
                      <div key={m} style={{
                        background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.14)',
                        borderRadius: 14, padding: '12px 16px', textAlign: 'center',
                      }}>
                        <span style={{ color: '#22c55e', fontWeight: 700, fontSize: 14 }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. PRICING ──────────────────────────────────────────────────── */}
        <section style={{ padding: '96px 24px', background: 'rgba(255,255,255,0.012)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
              <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                Pricing
              </p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                Transparent, Fixed-Price Engagements
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
                No hourly billing surprises. We agree on a fixed price after discovery — and that is what you pay.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start' }}>
              {pricingTiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={`reveal reveal-delay-${i + 1} pricing-card`}
                  style={{
                    background: tier.highlight ? 'rgba(34,197,94,0.05)' : '#080808',
                    border: tier.highlight ? '2px solid rgba(34,197,94,0.38)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 28, padding: '36px 30px',
                    position: 'relative',
                  }}
                >
                  {tier.highlight && (
                    <div style={{
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      background: '#22c55e', color: '#000', fontWeight: 800, fontSize: 11,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      padding: '5px 16px', borderRadius: 100,
                    }}>Most Popular</div>
                  )}

                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 8px', fontWeight: 600 }}>
                    {tier.name}
                  </p>
                  <div style={{ fontSize: 42, fontWeight: 900, color: tier.highlight ? '#22c55e' : '#fff', lineHeight: 1, marginBottom: 4 }}>
                    {tier.price}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, margin: '0 0 4px' }}>{tier.sub}</p>
                  <p style={{ color: '#22c55e', fontSize: 12, fontWeight: 600, margin: '0 0 16px' }}>Timeline: {tier.timeline}</p>
                  <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 14, lineHeight: 1.65, margin: '0 0 24px' }}>{tier.desc}</p>

                  <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {tier.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.72)' }}>
                        <svg style={{ flexShrink: 0, marginTop: 2 }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" fill="rgba(34,197,94,0.14)" />
                          <path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center',
                    background: tier.highlight ? '#22c55e' : 'rgba(255,255,255,0.05)',
                    color: tier.highlight ? '#000' : '#fff',
                    fontWeight: 700, fontSize: 15, padding: '14px 24px',
                    borderRadius: 28, textDecoration: 'none',
                    border: tier.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  }}>
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>

            <p className="reveal" style={{ textAlign: 'center', marginTop: 22, color: 'rgba(255,255,255,0.32)', fontSize: 13 }}>
              All prices are estimates. Final quotes are provided after a free discovery session.{' '}
              <Link href="/contact" style={{ color: '#22c55e', textDecoration: 'none', fontWeight: 600 }}>
                Book yours today.
              </Link>
            </p>
          </div>
        </section>

        {/* ── 11. FAQ ───────────────────────────────────────────────────────── */}
        <section style={{ padding: '96px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ color: '#22c55e', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                FAQ
              </p>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 17, lineHeight: 1.65, margin: 0 }}>
                Everything you need to know about our React Native development services.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{
                    background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 18, overflow: 'hidden',
                    transition: 'border-color 0.2s',
                    ...(openFaq === i ? { borderColor: 'rgba(34,197,94,0.3)' } : {}),
                  }}
                >
                  <button
                    className="faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: 16, padding: '22px 24px', color: '#fff',
                    }}
                  >
                    <span style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{
                      flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                      background: openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.07)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 0.2s, transform 0.3s',
                      transform: openFaq === i ? 'rotate(180deg)' : 'none',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#000' : '#fff'} strokeWidth="2.5">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 22px', color: 'rgba(255,255,255,0.62)', fontSize: 15, lineHeight: 1.78 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. CTA ───────────────────────────────────────────────────────── */}
        <section style={{ padding: '64px 24px 120px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
            <div
              className="reveal"
              style={{
                background: 'linear-gradient(135deg, rgba(34,197,94,0.09) 0%, rgba(34,197,94,0.03) 100%)',
                border: '1px solid rgba(34,197,94,0.22)',
                borderRadius: 36, padding: '72px 48px',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* ambient glow */}
              <div aria-hidden="true" style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600, height: 300,
                background: 'radial-gradient(ellipse, rgba(34,197,94,0.1) 0%, transparent 65%)',
                filter: 'blur(60px)', pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
                  borderRadius: 100, padding: '7px 16px', marginBottom: 24,
                }}>
                  <span style={{ color: '#22c55e', fontSize: 13, fontWeight: 600 }}>
                    Free Consultation — No Commitment
                  </span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900,
                  margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em',
                }}>
                  Ready to Build Your<br />
                  <span style={{ color: '#22c55e' }}>React Native App?</span>
                </h2>

                <p style={{
                  color: 'rgba(255,255,255,0.58)', fontSize: 17, lineHeight: 1.68,
                  margin: '0 auto 36px', maxWidth: 520,
                }}>
                  Tell us about your project and get a free technical assessment, architecture recommendation,
                  and ballpark estimate — no sales pressure, no commitment required.
                </p>

                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{
                    background: '#22c55e', color: '#000', fontWeight: 800, fontSize: 16,
                    padding: '16px 34px', borderRadius: 28, textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                  }}>
                    Start Your Project
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/case-studies" style={{
                    background: 'rgba(255,255,255,0.05)', color: '#fff', fontWeight: 600, fontSize: 16,
                    padding: '16px 34px', borderRadius: 28, textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.11)',
                  }}>
                    View Case Studies
                  </Link>
                </div>

                <p style={{ marginTop: 24, color: 'rgba(255,255,255,0.28)', fontSize: 13 }}>
                  Typically respond within 4 business hours &nbsp;·&nbsp; No NDA required to start
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
