'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import GlobalPresence from '@/components/GlobalPresence';


/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const heroStats = [
  { value: '500+', label: 'Apps Built' },
  { value: '100+', label: 'Engineers' },
  { value: '4.9', label: 'Clutch Rating', suffix: '★' },
  { value: '16+', label: 'Years Experience' },
];

const awards = [
  'Clutch Top App Development 2026',
  'Clutch Top Generative AI 2026',
  'Webby Award Honoree 2024',
  'AWS Advanced Tier Partner',
  'SOC 2 Type II Certified',
  'ISO 27001 Certified',
  'Google Cloud Partner',
  'Top Mobile App Company - GoodFirms',
];

const subServices = [
  {
    title: 'Android App Development',
    tag: 'Google Ecosystem',
    desc: 'Kotlin-first Android apps built for the full device spectrum. From phones and tablets to foldables and Android Auto, we deliver Google Play-optimized experiences that scale to billions of devices worldwide.',
    chips: ['Kotlin', 'Java', 'Jetpack Compose', 'ML Kit', 'Firebase'],
    href: '/services/mobile-app-development/android-app-development',
    icon: '🤖',
  },
  {
    title: 'iOS App Development',
    tag: 'Apple Ecosystem',
    desc: 'Native Swift and SwiftUI apps engineered for precision, performance, and seamless App Store delivery. We build consumer apps, enterprise tools, and everything in between for the Apple ecosystem.',
    chips: ['Swift', 'SwiftUI', 'CoreML', 'ARKit', 'HealthKit'],
    href: '/services/mobile-app-development/ios-app-development',
    icon: '🍎',
  },
  {
    title: 'Flutter App Development',
    tag: 'Cross-Platform',
    desc: 'Pixel-perfect UIs compiled to native ARM code. Flutter delivers true cross-platform performance with a single Dart codebase for iOS, Android, web, and desktop — cutting development time by 40%.',
    chips: ['Dart', 'Flutter', 'Material Design', 'Riverpod', 'Bloc'],
    href: '/services/mobile-app-development/flutter-app-development',
    icon: '🦋',
  },
  {
    title: 'React Native App Development',
    tag: 'Cross-Platform',
    desc: 'JavaScript-powered native apps used by Meta, Microsoft, and Shopify. React Native combines web development speed with native performance, enabling rapid iteration and hot reloading during development.',
    chips: ['JavaScript', 'TypeScript', 'Expo', 'Redux', 'React Navigation'],
    href: '/services/mobile-app-development/react-native-app-development',
    icon: '⚛️',
  },
  {
    title: 'Web App Development',
    tag: 'Progressive Web Apps',
    desc: 'Installable, offline-first Progressive Web Apps that bridge the gap between web and native. PWAs deliver app-like experiences through the browser with push notifications, background sync, and home screen installation.',
    chips: ['PWA', 'Next.js', 'Service Workers', 'WebAssembly', 'IndexedDB'],
    href: '/services/web-development',
    icon: '🌐',
  },
  {
    title: 'Wearable App Development',
    tag: 'Emerging Tech',
    desc: 'Standalone and companion apps for Apple Watch (watchOS), Wear OS, and smart devices. From health monitoring to industrial IoT dashboards, we build for every screen and sensor.',
    chips: ['watchOS', 'Wear OS', 'HealthKit', 'BLE', 'Sensors'],
    href: '/services/mobile-app-development/wearable-app-development',
    icon: '⌚',
  },
];

const benefits = [
  {
    title: 'Enhanced Security & Compliance',
    desc: 'Enterprise-grade security with end-to-end encryption, biometric authentication, and compliance with HIPAA, PCI DSS, SOC 2, and GDPR. Every app undergoes rigorous penetration testing before launch.',
    icon: '🛡️',
  },
  {
    title: 'Accelerated Digital Transformation',
    desc: 'Replace legacy systems with modern mobile-first solutions. Our apps integrate with existing enterprise infrastructure — ERP, CRM, HRM — to streamline operations and boost employee productivity by up to 34%.',
    icon: '🚀',
  },
  {
    title: 'Competitive Edge with AI & AR',
    desc: 'Embed cutting-edge AI/ML models, computer vision, natural language processing, and augmented reality directly into your mobile app. Deliver personalized experiences that competitors cannot replicate.',
    icon: '🧠',
  },
  {
    title: 'Scalability & Performance',
    desc: 'Cloud-native architectures built on AWS, GCP, and Azure that auto-scale from 100 to 10 million users. Sub-200ms API responses, 99.99% uptime SLAs, and CDN-backed content delivery worldwide.',
    icon: '📈',
  },
];

const clientLogos = [
  'Stripe', 'Shopify', 'Microsoft', 'AWS', 'Google Cloud', 'Salesforce',
  'MongoDB', 'Cloudflare', 'Twilio', 'SendGrid', 'Segment', 'Datadog',
  'Notion', 'Figma', 'Vercel', 'Supabase',
];

const bigStats = [
  { value: '500+', label: 'Apps Built', desc: 'Across iOS, Android & Web' },
  { value: '100+', label: 'Awards Won', desc: 'Clutch, Webby, GoodFirms' },
  { value: '4.9★', label: 'Client Rating', desc: 'Across 127+ Reviews' },
  { value: '16+', label: 'Years in Business', desc: 'Since 2010' },
  { value: '250+', label: 'Engineers', desc: 'Full-Time, In-House' },
];

const caseStudies = [
  {
    title: 'FinTech Trading Platform',
    desc: 'Built a real-time stock trading app with sub-50ms order execution, biometric authentication, and PCI DSS compliance. Processed $2.1B in transactions in the first year.',
    results: ['2.1B+ Transactions', '50ms Latency', '4.8★ App Store', '340K Users'],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    industry: 'FinTech',
  },
  {
    title: 'Healthcare Telehealth App',
    desc: 'HIPAA-compliant telehealth platform with video consultations, EHR integration, e-prescriptions, and wearable health data sync. Adopted by 120+ clinics across 14 states.',
    results: ['120+ Clinics', '500K Consultations', 'HIPAA Certified', '99.99% Uptime'],
    techStack: ['Swift', 'Kotlin', 'Python', 'GCP', 'WebRTC'],
    industry: 'Healthcare',
  },
  {
    title: 'E-Commerce Marketplace',
    desc: 'Multi-vendor marketplace app with AI-powered product recommendations, AR try-on, real-time inventory sync, and integrated logistics tracking. Grew to 85K monthly active users.',
    results: ['85K MAU', '28% Conv. Rate', '$12M GMV Year 1', '4.7★ Rating'],
    techStack: ['Flutter', 'Go', 'MongoDB', 'AWS', 'Algolia'],
    industry: 'E-Commerce',
  },
];

const advancedTech = [
  {
    title: 'AI & Machine Learning',
    desc: 'Embed intelligent features like predictive analytics, NLP chatbots, image recognition, recommendation engines, and on-device ML using CoreML and ML Kit.',
    icon: '🤖',
  },
  {
    title: 'IoT Connectivity',
    desc: 'Connect smartphones to smart devices, industrial sensors, and wearables via Bluetooth LE, MQTT, and custom IoT protocols. Real-time data streaming and device management dashboards.',
    icon: '📡',
  },
  {
    title: 'Cloud Architecture',
    desc: 'Serverless, microservices, and containerized backends on AWS, GCP, and Azure. Auto-scaling infrastructure with multi-region deployment and 99.99% uptime guarantees.',
    icon: '☁️',
  },
  {
    title: 'Blockchain & Web3',
    desc: 'Decentralized apps with smart contract integration, cryptocurrency wallets, NFT marketplaces, and token-gated experiences on Ethereum, Solana, and Polygon.',
    icon: '🔗',
  },
  {
    title: 'Big Data Analytics',
    desc: 'Real-time analytics dashboards, event tracking, user behavior analysis, and business intelligence integrations. Process millions of events per second with streaming pipelines.',
    icon: '📊',
  },
  {
    title: 'AR/VR Experiences',
    desc: 'Augmented reality product visualization, virtual try-on, spatial computing, and immersive training environments using ARKit, ARCore, and Unity.',
    icon: '🥽',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Validation',
    whatWeDo: 'Deep-dive into your business goals, market landscape, competitor analysis, and technical constraints. We validate your concept with user research and feasibility assessment before committing resources.',
    whatYouGet: ['Product Brief', 'Competitive Analysis', 'User Personas', 'Feasibility Report', 'Risk Assessment'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    whatWeDo: 'Define the product roadmap, technology architecture, sprint plan, and success metrics. We create a detailed project plan with fixed milestones, deliverables, and a transparent budget breakdown.',
    whatYouGet: ['Technology Architecture', 'Project Roadmap', 'Sprint Plan', 'Budget Breakdown', 'KPI Framework'],
    duration: '1 week',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    whatWeDo: 'User journey mapping, wireframes, and high-fidelity interactive prototypes. Every screen is designed with accessibility (WCAG 2.1 AA) in mind and validated with real users before development begins.',
    whatYouGet: ['Wireframes', 'Interactive Prototype', 'Design System', 'Accessibility Audit', 'User Test Results'],
    duration: '2–3 weeks',
  },
  {
    num: '04',
    title: 'Development & Engineering',
    whatWeDo: 'Two-week agile sprints with daily standups, live staging builds, and full code reviews. CI/CD pipelines ensure continuous integration and automated testing with every commit.',
    whatYouGet: ['Sprint Demos', 'Staging Builds', 'API Documentation', 'Code Reviews', 'CI/CD Pipeline'],
    duration: '6–16 weeks',
  },
  {
    num: '05',
    title: 'Quality Assurance',
    whatWeDo: 'Rigorous testing across 200+ real device/OS combinations. Automated and manual testing including performance, security, accessibility, and regression testing before every release.',
    whatYouGet: ['QA Test Reports', 'Performance Audit', 'Security Penetration Test', 'Accessibility Review', 'Crash Analytics'],
    duration: '2–3 weeks',
  },
  {
    num: '06',
    title: 'Deployment & Support',
    whatWeDo: 'App Store and Google Play submission with ASO optimization. Phased rollout strategy, 24/7 monitoring, and ongoing SLA support to keep your app performant as you scale.',
    whatYouGet: ['Store Submission', 'ASO Package', 'Launch Analytics', 'Monitoring Dashboard', 'SLA Support Plan'],
    duration: 'Ongoing',
  },
];

const whyChooseUs = [
  {
    title: 'In-House Engineering Team',
    desc: 'No freelancers, no offshore outsourcing black boxes. Every line of code is written by our 250+ senior engineers working under one roof with direct client communication. You get a dedicated team lead, daily standups, and full transparency.',
    icon: '👥',
  },
  {
    title: 'Fixed-Price Guarantee',
    desc: 'No surprise invoices. No scope creep billing. We provide a fixed-price quote after discovery, and that is the price you pay. If our estimate is wrong, we absorb the cost — not you. 98% of our projects ship on budget.',
    icon: '💰',
  },
  {
    title: 'Post-Launch SLA Support',
    desc: '24/7 monitoring, proactive OS update compatibility, performance optimization, and feature development. Every engagement includes a 30-day warranty, with flexible retainer options for ongoing support and growth.',
    icon: '🛡️',
  },
  {
    title: 'App Store Expertise',
    desc: 'We have navigated 500+ App Store and Google Play reviews. We handle submissions, rejections, metadata optimization, ASO, and review compliance so you can focus on growing your business — not fighting platform bureaucracy.',
    icon: '⭐',
  },
];

const complianceBadges = [
  { title: 'GDPR', desc: 'EU General Data Protection Regulation compliance for user data privacy and consent management.' },
  { title: 'CCPA', desc: 'California Consumer Privacy Act compliance for user data rights and transparency.' },
  { title: 'HIPAA', desc: 'Health Insurance Portability and Accountability Act compliance for protected health information.' },
  { title: 'PCI DSS', desc: 'Payment Card Industry Data Security Standard for secure payment processing.' },
  { title: 'SOC 2', desc: 'Type II certification for security, availability, processing integrity, and confidentiality.' },
  { title: 'ISO 27001', desc: 'International standard for information security management systems.' },
];

const techStackGrid = [
  { category: 'Mobile - iOS', techs: ['Swift', 'SwiftUI', 'Objective-C', 'CoreML', 'ARKit', 'HealthKit', 'CloudKit', 'XCTest'] },
  { category: 'Mobile - Android', techs: ['Kotlin', 'Java', 'Jetpack Compose', 'ML Kit', 'Room DB', 'CameraX', 'Espresso', 'Hilt'] },
  { category: 'Cross-Platform', techs: ['Flutter', 'React Native', 'Dart', 'TypeScript', 'Expo', 'Ionic', 'Capacitor'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'Go', 'Java Spring', 'Ruby on Rails', 'GraphQL', 'gRPC', 'REST'] },
  { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Firestore', 'Supabase', 'Elasticsearch'] },
  { category: 'Cloud & DevOps', techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CircleCI'] },
  { category: 'AI/ML', techs: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face', 'CoreML', 'ML Kit'] },
  { category: 'Tools & Services', techs: ['Firebase', 'Stripe', 'Twilio', 'SendGrid', 'Algolia', 'Segment', 'Sentry', 'Datadog'] },
];

const marketStats = [
  { stat: '$569B', desc: 'Projected mobile app market revenue by 2027', source: 'Gartner' },
  { stat: '11.8%', desc: 'Enterprise mobile market CAGR through 2028', source: 'MarketsandMarkets' },
  { stat: '96%', desc: 'US adults who own a smartphone in 2026', source: 'Pew Research' },
  { stat: '4.4hrs', desc: 'Average daily time spent on mobile apps', source: 'data.ai' },
  { stat: '255B', desc: 'Global app downloads projected in 2027', source: 'Statista' },
  { stat: '73%', desc: 'Mobile share of global e-commerce sales', source: 'eMarketer' },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'FinPay Technologies',
    quote: 'Codazz delivered our trading app 2 weeks ahead of schedule. The real-time execution engine they built handles $50M in daily volume without breaking a sweat. Best technical team we have ever worked with.',
    rating: 5,
  },
  {
    name: 'Michael Torres',
    role: 'CEO',
    company: 'MedConnect Health',
    quote: 'Building a HIPAA-compliant telehealth app seemed impossible in 4 months. Codazz not only delivered on time but built a platform that 120 clinics now rely on daily. Their healthcare expertise is unmatched.',
    rating: 5,
  },
  {
    name: 'Jessica Park',
    role: 'VP Product',
    company: 'ShopStream',
    quote: 'The AR try-on feature Codazz built increased our conversion rate by 28%. Their Flutter expertise meant we launched on both platforms simultaneously. Revenue grew 340% in the first year.',
    rating: 5,
  },
  {
    name: 'David Okafor',
    role: 'Founder',
    company: 'LogiTrack',
    quote: 'Our fleet management app tracks 5,000+ vehicles in real-time. Codazz built the entire platform from scratch — driver app, dispatcher dashboard, and customer tracking portal. Flawless execution.',
    rating: 5,
  },
  {
    name: 'Amanda Liu',
    role: 'Head of Digital',
    company: 'EduSphere',
    quote: 'Codazz transformed our educational content into an adaptive learning platform. Student engagement increased 67% and course completion rates doubled. Their UX design team is phenomenal.',
    rating: 5,
  },
  {
    name: 'Robert Kline',
    role: 'CIO',
    company: 'Nexus Enterprise',
    quote: 'We needed an enterprise app that integrated with SAP, Salesforce, and our custom ERP. Codazz handled the complexity beautifully. 4,000 employees now use the app daily. Zero downtime since launch.',
    rating: 5,
  },
];

const faqs = [
  { q: 'Who are the top mobile app developers in 2026?', a: 'The top mobile app development companies in 2026 include Codazz (4.9★ Clutch, 500+ apps), Toptal, WillowTree, and Intellectsoft. Codazz is recognized for its full in-house engineering team of 250+ developers, fixed-price guarantees, and deep expertise across iOS, Android, Flutter, and React Native platforms.' },
  { q: 'How much does it cost to build a mobile app?', a: 'Mobile app development costs range from $25,000 for a simple MVP to $150,000–$500,000+ for complex enterprise applications. Key cost factors include platform choice (native vs. cross-platform), feature complexity, backend infrastructure, third-party integrations, and compliance requirements. Codazz provides fixed-price quotes after a free discovery session — no surprise invoices.' },
  { q: 'How long does mobile app development take?', a: 'A basic MVP can be delivered in 8–12 weeks. Full-featured consumer apps typically take 4–6 months. Enterprise-grade applications with complex integrations may take 6–12 months. We provide a detailed milestone plan with sprint-by-sprint deliverables before development begins.' },
  { q: 'Should I choose native or cross-platform development?', a: 'Native apps (Swift for iOS, Kotlin for Android) offer the best performance and full access to platform APIs. Cross-platform frameworks like Flutter and React Native deliver 90–95% of native quality at 30–40% lower cost. Choose native for performance-critical apps; choose cross-platform for faster time-to-market and budget efficiency.' },
  { q: 'Do you sign NDAs before project discussions?', a: 'Yes — always. We sign a mutual NDA on Day 1, before any project discussion takes place. Your idea, intellectual property, and business strategy are fully protected from the very first conversation.' },
  { q: 'What technologies do you use for app development?', a: 'We use Swift/SwiftUI for iOS, Kotlin/Jetpack Compose for Android, Flutter (Dart) and React Native (TypeScript) for cross-platform. Backend: Node.js, Python, Go, Java Spring. Cloud: AWS, GCP, Azure. Databases: PostgreSQL, MongoDB, Redis, Firestore. Plus AI/ML, blockchain, AR/VR, and IoT capabilities.' },
  { q: 'How do you handle post-launch support?', a: 'Every engagement includes a 30-day post-launch warranty. Beyond that, we offer flexible SLA retainers covering 24/7 monitoring, bug fixes, OS update compatibility, performance optimization, feature development, and dedicated account management. Most clients retain us for ongoing support and growth.' },
  { q: 'Can you integrate AI and machine learning into my app?', a: 'Absolutely. We have deep expertise in AI/ML integration including NLP chatbots, computer vision, predictive analytics, recommendation engines, voice assistants, and on-device ML using CoreML and ML Kit. We also build custom models using TensorFlow, PyTorch, and OpenAI APIs.' },
  { q: 'Will you handle App Store and Google Play submission?', a: 'Yes. We manage the entire submission process including screenshots, descriptions, metadata optimization, rating compliance, and review feedback. We have navigated 500+ store reviews and know exactly how to get your app approved quickly and ranked well through ASO.' },
  { q: 'Can you work with our existing codebase or team?', a: 'Yes. We regularly audit and extend existing applications. We can work as a standalone team, as an extension of your in-house team, or provide specialized expertise for specific features. We conduct a thorough code review during discovery and provide an honest assessment before committing to scope.' },
];

const relatedBlogs = [
  {
    title: 'How Much Does App Development Cost in 2026?',
    desc: 'Complete breakdown of mobile app development costs by platform, complexity, and feature set.',
    href: '/blog/how-much-does-app-development-cost-2026',
  },
  {
    title: 'Flutter vs React Native in 2026: Which Should You Choose?',
    desc: 'In-depth comparison of the two leading cross-platform frameworks for mobile development.',
    href: '/blog/flutter-vs-react-native-2026',
  },
  {
    title: 'MVP Development Guide: From Idea to Launch',
    desc: 'Step-by-step guide to building and launching your minimum viable product in 2026.',
    href: '/blog/mvp-development-guide',
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

export default function MobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Section refs
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  // Shared styles
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
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        {/* Breadcrumb */}
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Mobile App Development' },
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }} className="hero-layout-grid">
              {/* Left column */}
              <div>
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
                  #1 Rated on Clutch
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
                  Mobile App Development Company{' '}
                  <span style={{ color: '#22c55e' }}>USA</span>
                </h1>
                <p
                  className="reveal"
                  style={{
                    fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '2rem',
                    lineHeight: 1.7,
                    maxWidth: 600,
                  }}
                >
                  We build high-performance iOS, Android, Flutter, and React Native apps for
                  startups and enterprises. 500+ apps shipped, 4.9-star Clutch rating,
                  100+ in-house engineers. From MVP to millions of users — your app starts here.
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
                {/* Hero stats */}
                <div className="reveal" style={{ display: 'flex', gap: 'clamp(20px, 3vw, 40px)', flexWrap: 'wrap' }}>
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

              {/* Right column — Lead Form */}
              <div className="reveal hero-form-col">
                <ServiceHeroForm service="Mobile App Development" />
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
            2.5. WHY MOBILE APP DEVELOPMENT IS ESSENTIAL
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 24px' }}>
                Why Mobile App Development is Essential for Your Business
              </h2>
            </div>

            {/* Problem & Solution Cards */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, marginBottom: 60 }}>
              {[
                {
                  icon: '📱',
                  title: 'Problem 1: Desktop-Only Limits Your Reach',
                  desc: 'Over 70% of web traffic comes from mobile devices. If your customers can only reach you on desktop, you\'re leaving massive revenue on the table. Desktop-first strategies are yesterday\'s approach.'
                },
                {
                  icon: '⚡',
                  title: 'Problem 2: Generic Apps Don\'t Compete',
                  desc: 'Off-the-shelf solutions and outdated mobile experiences can\'t match your competitors. Custom mobile apps deliver personalized experiences, faster performance, and features that users actually want and expect.'
                },
                {
                  icon: '🚀',
                  title: 'Solution 1: Mobile Apps Drive Revenue',
                  desc: 'Mobile apps increase customer engagement by 2-3x. Users spend 88% of their mobile time in apps, not browsers. Custom mobile apps unlock new revenue streams: in-app purchases, subscriptions, premium features, and direct customer relationships.'
                },
                {
                  icon: '🔒',
                  title: 'Solution 2: iOS + Android Covers All Users',
                  desc: 'iOS dominates spending in wealthy markets, Android owns global user base. Building for both platforms with expert development ensures you don\'t lose customers to platform limitations, fragmentation, or poor performance.'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`reveal-d${i + 1}`}
                  style={{
                    ...cardBase,
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                  }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 36 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Who Needs Mobile App Development */}
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 28, padding: 'clamp(36px, 4vw, 48px)', marginBottom: 60 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', margin: '0 0 28px' }}>Who Needs Mobile App Development Services?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16 }}>
                {[
                  { icon: '🚀', title: 'Startups & Entrepreneurs', desc: 'Launch your MVP and acquire users on iOS and Android. Mobile-first is the fastest path to product-market fit.' },
                  { icon: '🏢', title: 'SMBs & Growing Companies', desc: 'Reach new customers, increase loyalty, and compete with larger enterprises. Custom apps give you unfair advantage.' },
                  { icon: '🌍', title: 'Enterprise & Established Brands', desc: 'Modernize customer experiences, launch apps across regions, and build direct distribution channels.' },
                  { icon: '💰', title: 'E-Commerce & Retail', desc: 'Drive repeat purchases, increase AOV, and build customer loyalty through personalized mobile experiences.' },
                  { icon: '🏥', title: 'Healthcare & SaaS', desc: 'Enable remote access, improve patient/user outcomes, and capture mobile-first user bases.' },
                  { icon: '🎮', title: 'Gaming & Social', desc: 'Leverage iOS and Android capabilities for engagement, monetization, and viral growth.' }
                ].map((item, i) => (
                  <div key={i} style={{ padding: '16px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="reveal" style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', margin: '0 0 28px' }}>What You'll Achieve with Professional Mobile App Development</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 16 }}>
                {[
                  { metric: '3-5x', label: 'User Engagement', desc: 'vs. Web-only solutions' },
                  { metric: '35-50%', label: 'Revenue Growth', desc: 'Within first 12 months' },
                  { metric: '2M+', label: 'Active Users', desc: 'Average per successful app' },
                  { metric: '4.6★', label: 'Average Rating', desc: 'Apps built by our team' }
                ].map((item, i) => (
                  <div key={i} style={{ padding: '28px 24px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{item.metric}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.label}</h4>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Paragraph */}
            <div className="reveal" style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, margin: 0 }}>
                Mobile app development isn't a luxury anymore — it's a business necessity. Whether you're building for iOS, Android, or both platforms, you need an expert partner who understands user experience, platform best practices, and business strategy. Codazz has shipped 500+ apps across industries, helped companies acquire millions of users, and generated billions in transaction value. Our team brings 16+ years of mobile expertise, proven methodologies, and a track record of shipping apps on time. Let us help you build an app that drives real business results.
              </p>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            3. SUB-SERVICES GRID
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Our Services</div>
              <h2 style={sectionH2}>
                Every Platform.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Every Device. Every User.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 680 }}>
                From native iOS and Android to cross-platform Flutter and React Native, we engineer mobile
                experiences that your customers love and your business depends on.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {subServices.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <div
                    style={cardBase}
                    onMouseEnter={cardHoverIn}
                    onMouseLeave={cardHoverOut}
                  >
                    <div style={greenAccentLine} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                      <span style={{ fontSize: 28 }}>{s.icon}</span>
                      <span style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#22c55e',
                        background: 'rgba(34,197,94,0.1)',
                        padding: '5px 14px',
                        borderRadius: 100,
                      }}>{s.tag}</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.chips.map(c => <span key={c} style={chipStyle}>{c}</span>)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            4. BENEFITS SECTION
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Why Mobile App Development?</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                The Strategic Advantage<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>of Going Mobile.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className={`reveal-d${i + 1}`}
                  style={{ ...cardBase, padding: '48px 36px' }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{b.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14 }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            5. CLIENT LOGOS MARQUEE
        ═══════════════════════════════════════ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '48px 0', overflow: 'hidden' }}>
          <div className="cb-container" style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
              Trusted by Teams Building With
            </div>
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div
              style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }}
            />
            <div
              style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }}
            />
            <div className="client-logos-track" style={{ display: 'flex', width: 'max-content' }}>
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  style={{
                    padding: '16px 40px',
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.2)',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em',
                  }}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            6. STATS SECTION
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>By the Numbers</div>
              <h2 style={{ ...sectionH2, margin: '0 auto' }}>
                Results That<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Speak for Themselves.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
              {bigStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`reveal-d${i + 1}`}
                  style={{
                    textAlign: 'center',
                    padding: 'clamp(32px, 4vw, 48px) 24px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 24,
                    background: 'rgba(255,255,255,0.015)',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginTop: 12 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            7. CASE STUDIES
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>Case Studies</div>
                <h2 style={sectionH2}>
                  Featured<br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>Projects.</span>
                </h2>
              </div>
              <Link href="/case-studies" style={{ fontSize: 14, fontWeight: 600, color: '#22c55e', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                View All Case Studies
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 24 }}>
              {caseStudies.map((cs, i) => (
                <div
                  key={cs.title}
                  className={`reveal-d${i + 1}`}
                  style={{ ...cardBase, padding: '40px 36px', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={greenAccentLine} />
                  <span style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#22c55e',
                    background: 'rgba(34,197,94,0.1)',
                    padding: '5px 14px',
                    borderRadius: 100,
                    display: 'inline-block',
                    marginBottom: 20,
                    alignSelf: 'flex-start',
                  }}>{cs.industry}</span>
                  <h3 style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14 }}>{cs.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 24, flex: 1 }}>{cs.desc}</p>

                  {/* Results metrics */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 24 }}>
                    {cs.results.map(r => (
                      <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        {r}
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cs.techStack.map(t => <span key={t} style={chipStyle}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            8. ADVANCED TECHNOLOGIES
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Advanced Technologies</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                Cutting-Edge Tech<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Built Into Every App.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                We do not just build apps — we engineer intelligent, connected, future-proof mobile experiences.
              </p>
            </div>

            {/* Marquee row 1: LTR */}
            <style>{`
              @keyframes feat-marquee-ltr { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              @keyframes feat-marquee-rtl { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
            `}</style>
            <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 16 }}>
              {/* Fade masks */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ display: 'flex', gap: 16, animation: 'feat-marquee-ltr 35s linear infinite', width: 'max-content' }}>
                {[
                  { icon: '🤖', title: 'AI/ML Integration', desc: 'Predictive analytics, NLP chatbots, and on-device ML with CoreML & ML Kit.' },
                  { icon: '📡', title: 'IoT Integration', desc: 'Connect apps to smart devices via Bluetooth LE, MQTT, and custom IoT protocols.' },
                  { icon: '☁️', title: 'Cloud Native', desc: 'Serverless & microservice backends on AWS, GCP, Azure with 99.99% uptime.' },
                  { icon: '🔗', title: 'Blockchain / Web3', desc: 'Smart contracts, crypto wallets, NFT marketplaces on Ethereum & Solana.' },
                  { icon: '📊', title: 'Big Data Analytics', desc: 'Real-time dashboards and streaming pipelines processing millions of events/sec.' },
                  { icon: '🥽', title: 'AR/VR Experiences', desc: 'Immersive AR/VR with ARKit, ARCore, and Unity for spatial computing.' },
                  { icon: '🤖', title: 'AI/ML Integration', desc: 'Predictive analytics, NLP chatbots, and on-device ML with CoreML & ML Kit.' },
                  { icon: '📡', title: 'IoT Integration', desc: 'Connect apps to smart devices via Bluetooth LE, MQTT, and custom IoT protocols.' },
                  { icon: '☁️', title: 'Cloud Native', desc: 'Serverless & microservice backends on AWS, GCP, Azure with 99.99% uptime.' },
                  { icon: '🔗', title: 'Blockchain / Web3', desc: 'Smart contracts, crypto wallets, NFT marketplaces on Ethereum & Solana.' },
                  { icon: '📊', title: 'Big Data Analytics', desc: 'Real-time dashboards and streaming pipelines processing millions of events/sec.' },
                  { icon: '🥽', title: 'AR/VR Experiences', desc: 'Immersive AR/VR with ARKit, ARCore, and Unity for spatial computing.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '20px 24px', borderRadius: 16, flexShrink: 0, width: 220,
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex', flexDirection: 'column', gap: 10,
                  }}>
                    <span style={{ fontSize: 24 }}>{item.icon}</span>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marquee row 2: RTL */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Fade masks */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ display: 'flex', gap: 16, animation: 'feat-marquee-rtl 40s linear infinite', width: 'max-content' }}>
                {[
                  { icon: '🔄', title: 'Real-Time Sync', desc: 'WebSocket and Firebase-powered live data sync across all user devices.' },
                  { icon: '📴', title: 'Offline Mode', desc: 'Full offline-first architecture with local storage and background sync.' },
                  { icon: '🔔', title: 'Push Notifications', desc: 'Personalized, segmented push via FCM & APNs with rich media support.' },
                  { icon: '🪪', title: 'Biometric Auth', desc: 'Face ID, Touch ID, and fingerprint login with secure enclave storage.' },
                  { icon: '🔗', title: 'Deep Linking', desc: 'Universal and app links for seamless web-to-app navigation flows.' },
                  { icon: '💳', title: 'In-App Purchases', desc: 'StoreKit 2 & Google Play Billing with subscription management & analytics.' },
                  { icon: '🔄', title: 'Real-Time Sync', desc: 'WebSocket and Firebase-powered live data sync across all user devices.' },
                  { icon: '📴', title: 'Offline Mode', desc: 'Full offline-first architecture with local storage and background sync.' },
                  { icon: '🔔', title: 'Push Notifications', desc: 'Personalized, segmented push via FCM & APNs with rich media support.' },
                  { icon: '🪪', title: 'Biometric Auth', desc: 'Face ID, Touch ID, and fingerprint login with secure enclave storage.' },
                  { icon: '🔗', title: 'Deep Linking', desc: 'Universal and app links for seamless web-to-app navigation flows.' },
                  { icon: '💳', title: 'In-App Purchases', desc: 'StoreKit 2 & Google Play Billing with subscription management & analytics.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '20px 24px', borderRadius: 16, flexShrink: 0, width: 220,
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex', flexDirection: 'column', gap: 10,
                  }}>
                    <span style={{ fontSize: 24 }}>{item.icon}</span>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            9. DEVELOPMENT PROCESS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={sectionLabel}>Our Process</div>
              <h2 style={sectionH2}>
                How We Build<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Your App.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 680 }}>
                A battle-tested six-step process refined over 500+ projects. Every step is transparent,
                collaborative, and designed to minimize risk while maximizing quality.
              </p>
            </div>

            {/* Process pill marquee strip */}
            <style>{`
              @keyframes proc-marquee-ltr { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            `}</style>
            <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 48 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ display: 'flex', gap: 12, animation: 'proc-marquee-ltr 20s linear infinite', width: 'max-content', alignItems: 'center' }}>
                {[
                  { num: '01', label: 'Discovery' },
                  { num: '02', label: 'Design' },
                  { num: '03', label: 'Development' },
                  { num: '04', label: 'QA Testing' },
                  { num: '05', label: 'Launch' },
                  { num: '06', label: 'Support' },
                  { num: '01', label: 'Discovery' },
                  { num: '02', label: 'Design' },
                  { num: '03', label: 'Development' },
                  { num: '04', label: 'QA Testing' },
                  { num: '05', label: 'Launch' },
                  { num: '06', label: 'Support' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '8px 16px', borderRadius: 100,
                      border: '1px solid rgba(34,197,94,0.2)',
                      background: 'rgba(34,197,94,0.04)',
                    }}>
                      <span style={{ fontSize: 10, fontWeight: 800, color: '#22c55e', letterSpacing: '0.05em' }}>{step.num}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.01em' }}>{step.label}</span>
                    </div>
                    {i % 6 < 5 && (
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M1 5h14M10 1l4 4-4 4" stroke="rgba(34,197,94,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Vertical connecting line */}
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(34,197,94,0.05))', zIndex: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {processSteps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`reveal reveal-d${i + 1}`}
                    style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'start', padding: '32px 0' }}
                  >
                    {/* Circle */}
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%',
                      border: '2px solid rgba(34,197,94,0.4)',
                      background: 'rgba(34,197,94,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 800, color: '#ffffff',
                      flexShrink: 0, position: 'relative', zIndex: 1,
                    }}>{step.num}</div>

                    {/* Content */}
                    <div
                      style={{
                        padding: 'clamp(24px, 3vw, 36px) clamp(20px, 3vw, 40px)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: 28,
                        background: 'rgba(255,255,255,0.015)',
                        transition: 'all 0.35s ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' }}>{step.duration}</span>
                      </div>

                      {/* What We Do */}
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>What We Do</div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{step.whatWeDo}</p>
                      </div>

                      {/* What You Get */}
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>What You Get</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {step.whatYouGet.map(d => (
                            <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100 }}>
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            10. WHY CHOOSE CODAZZ
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Why Codazz</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                The Standard Other Agencies<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Cannot Match.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {whyChooseUs.map((w, i) => (
                <div
                  key={w.title}
                  className={`reveal-d${i + 1}`}
                  style={{ ...cardBase, padding: '48px 36px' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
                    e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 24px 60px rgba(255,255,255,0.06), 0 0 40px rgba(34,197,94,0.05)';
                  }}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 36, marginBottom: 24 }}>{w.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14 }}>{w.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            11. COMPLIANCE & SECURITY
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Compliance & Security</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                Enterprise-Grade<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Security Standards.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                Every app we build meets the strictest security and compliance standards in your industry.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: 16 }}>
              {complianceBadges.map((badge, i) => (
                <div
                  key={badge.title}
                  className={`reveal-d${i + 1}`}
                  style={{
                    textAlign: 'center',
                    padding: '32px 20px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 24,
                    background: 'rgba(255,255,255,0.015)',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', letterSpacing: '-0.02em', marginBottom: 12 }}>{badge.title}</div>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{badge.desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop: 40 }}>
              <TrustBadges />
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            12. TECH STACK GRID
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>Technology Stack</div>
                <h2 style={sectionH2}>
                  40+ Technologies.<br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>One Seamless Stack.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 380, lineHeight: 1.75, margin: 0 }}>
                Best-in-class tools chosen for performance, reliability, and long-term maintainability.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techStackGrid.map(cat => (
                <div
                  key={cat.category}
                  style={{
                    padding: 'clamp(24px, 3vw, 36px)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 28,
                    background: 'rgba(255,255,255,0.015)',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}
                >
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 20 }}>{cat.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.techs.map(t => (
                      <span
                        key={t}
                        style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}
                      >{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            13. MARKET INTELLIGENCE
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Market Intelligence</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                The Mobile App Market<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Is Exploding.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                The numbers make the case: mobile is not optional — it is the primary channel for customer engagement, commerce, and enterprise productivity.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 16 }}>
              {marketStats.map((ms, i) => (
                <div
                  key={ms.stat}
                  className={`reveal-d${i + 1}`}
                  style={{
                    textAlign: 'center',
                    padding: '36px 20px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 24,
                    background: 'rgba(255,255,255,0.015)',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.03em', lineHeight: 1 }}>{ms.stat}</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, margin: '12px 0 8px' }}>{ms.desc}</p>
                  <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{ms.source}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            14. TESTIMONIALS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Client Testimonials</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                What Our Clients<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Say About Us.</span>
              </h2>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`reveal-d${i + 1}`}
                  style={{ ...cardBase, padding: '40px 32px', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  {/* Star rating */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#22c55e" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, flex: 1, margin: '0 0 24px' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{t.role}, {t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            15. FAQ SECTION
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 860 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Frequently Asked Questions</div>
              <h2 style={sectionH2}>
                Everything You Need<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>to Know.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                    border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`,
                    borderRadius: 20,
                    overflow: 'hidden',
                    transition: 'border-color 0.3s, background 0.3s',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
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
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left', letterSpacing: '-0.01em', paddingRight: 16 }}>{faq.q}</span>
                    <div style={{
                      width: 30, height: 30, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.03)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'transform 0.3s',
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  <div style={{
                    maxHeight: openFaq === i ? 400 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}>
                    <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            16. GLOBAL PRESENCE
        ═══════════════════════════════════════ */}
        <GlobalPresence />

        {/* ═══════════════════════════════════════
            17. RELATED BLOGS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>From Our Blog</div>
                <h2 style={sectionH2}>
                  Related<br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>Insights.</span>
                </h2>
              </div>
              <Link href="/blog" style={{ fontSize: 14, fontWeight: 600, color: '#22c55e', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                View All Articles
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {relatedBlogs.map((blog, i) => (
                <Link
                  key={blog.href}
                  href={blog.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    className={`reveal-d${i + 1}`}
                    style={{
                      padding: '32px 28px',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24,
                      background: 'rgba(255,255,255,0.015)',
                      transition: 'all 0.35s ease',
                      height: '100%',
                    }}
                    onMouseEnter={cardHoverIn}
                    onMouseLeave={cardHoverOut}
                  >
                    <div style={greenAccentLine} />
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>Blog</div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.4 }}>{blog.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{blog.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            17. CTA WITH FORM
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse,rgba(34,197,94,0.09) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }} className="cta-layout-grid">
              {/* Left — text */}
              <div className="reveal">
                <div style={sectionLabel}>Ready to Build?</div>
                <h2 style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  Your App Could Be<br />
                  <span style={{ color: '#22c55e' }}>Next.</span>
                </h2>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                  Tell us about your idea. A senior engineer will review your project and
                  respond with a custom assessment and proposal within 48 hours — no commitment required.
                </p>

                {/* Trust strip */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                  {['NDA on Day 1', 'Fixed-Price Guarantee', '48hr Custom Proposal', 'No Commitment Required', 'Free Architecture Consultation'].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>

                <TrustBadges compact />

                {/* Quick contact options */}
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 24 }}>
                  <Link
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      height: 52,
                      padding: '0 32px',
                      borderRadius: 100,
                      background: '#22c55e',
                      color: '#000',
                      fontSize: 15,
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: '0.3s',
                    }}
                  >
                    Schedule a Call
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <a
                    href="mailto:hello@codazz.com"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      height: 52,
                      padding: '0 32px',
                      borderRadius: 100,
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#ffffff',
                      fontSize: 15,
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: '0.3s',
                    }}
                  >
                    hello@codazz.com
                  </a>
                </div>
              </div>

              {/* Right — form */}
              <div className="reveal cta-form-col">
                <ServiceHeroForm service="Mobile App Development" />
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            RELATED SERVICES
        ═══════════════════════════════════════ */}
        <section className="section-padding-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Related Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {[
                { name: 'Web Development', href: '/services/web-development', desc: 'Full-stack web platforms and SaaS products engineered for speed and scale.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Custom AI models, NLP, computer vision, and intelligent automation solutions.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'AWS, GCP, Azure infrastructure with CI/CD, containers, and auto-scaling.' },
                { name: 'AR / VR Development', href: '/services/ar-vr', desc: 'Immersive augmented and virtual reality experiences for mobile and headset.' },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    display: 'block', padding: '28px 24px', borderRadius: 16,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none', transition: 'all 0.3s ease', color: 'inherit',
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{s.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* Industries We Serve */}
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
                { name: 'Real Estate', href: '/industries/real-estate' },
                { name: 'Media & Entertainment', href: '/industries/media' },
              ].map((ind) => (
                <Link
                  key={ind.href}
                  href={ind.href}
                  style={{
                    padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* ═══════════════════════════════════════
          STYLES
      ═══════════════════════════════════════ */}
      <style>{`
        /* Awards Marquee */
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

        /* Client Logos Marquee */
        @keyframes logosScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .client-logos-track {
          animation: logosScroll 25s linear infinite;
        }
        .client-logos-track:hover {
          animation-play-state: paused;
        }

        /* Hero layout responsive */
        .hero-layout-grid {
          display: grid !important;
          grid-template-columns: 1fr 400px !important;
        }
        @media (max-width: 1024px) {
          .hero-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-form-col {
            max-width: 480px;
          }
        }
        @media (max-width: 640px) {
          .hero-form-col {
            max-width: 100%;
          }
        }

        /* CTA layout responsive */
        .cta-layout-grid {
          display: grid !important;
          grid-template-columns: 1fr 420px !important;
        }
        @media (max-width: 1024px) {
          .cta-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-form-col {
            max-width: 480px;
          }
        }
        @media (max-width: 640px) {
          .cta-form-col {
            max-width: 100%;
          }
        }

        /* General mobile fixes */
        @media (max-width: 768px) {
          .stats-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
