'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import HeroBackground from '@/components/HeroBackground';


/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const heroStats = [
  { value: '150+', label: 'Flutter Apps Shipped' },
  { value: '60fps', label: 'Guaranteed Performance' },
  { value: '6', label: 'Target Platforms' },
  { value: '4.9', label: 'Clutch Rating', suffix: '★' },
];

const awards = [
  'Clutch Top Flutter Company 2026',
  'Google Flutter Community Partner',
  'AWS Advanced Tier Partner',
  'SOC 2 Type II Certified',
  'Clutch Top App Development 2026',
  'ISO 27001 Certified',
  'Google Cloud Partner',
  'Top Cross-Platform Company - GoodFirms',
];

const services = [
  {
    title: 'Flutter iOS & Android Apps',
    tag: 'Mobile',
    desc: "Pixel-perfect mobile apps for iOS and Android compiled to native ARM code via Flutter's Impeller rendering engine. One Dart codebase delivers consistent, beautiful UI with 60fps animations across the full device spectrum — from budget Android handsets to iPhone Pro.",
    chips: ['Dart', 'Flutter 3.x', 'iOS', 'Android', 'Impeller', 'Material 3'],
    icon: '📱',
  },
  {
    title: 'Flutter Web Applications',
    tag: 'Web',
    desc: 'Production-ready Flutter web apps rendered in the browser via CanvasKit. Ideal for internal dashboards, admin panels, and progressive web apps where you want to share Dart business logic with your mobile codebase and reduce overall engineering overhead.',
    chips: ['Flutter Web', 'CanvasKit', 'PWA', 'HTML renderer', 'Firebase Hosting'],
    icon: '🌐',
  },
  {
    title: 'Flutter Desktop Apps',
    tag: 'Desktop',
    desc: 'Native macOS, Windows, and Linux applications from your Flutter codebase. Used by Toyota, Canonical, and enterprise teams worldwide. We build internal tooling, customer dashboards, and point-of-sale systems that share 80%+ code with mobile counterparts.',
    chips: ['macOS', 'Windows', 'Linux', 'Flutter Desktop', 'Platform Channels'],
    icon: '🖥️',
  },
  {
    title: 'Flutter MVP Development',
    tag: 'Startup',
    desc: 'Go from idea to TestFlight and Google Play Internal Testing in 6–10 weeks. We provide an opinionated Flutter starter kit with auth, navigation, state management (Riverpod), CI/CD, and analytics pre-configured — so your team ships features from Sprint 1, not infrastructure.',
    chips: ['Riverpod', 'GoRouter', 'Firebase', 'Fastlane', 'GitHub Actions'],
    icon: '🚀',
  },
  {
    title: 'Bloc & Riverpod Architecture',
    tag: 'Enterprise Architecture',
    desc: 'Enterprise Flutter apps demand rigorous state management. We architect scalable Bloc or Riverpod solutions with clean architecture layers — domain, data, presentation — enabling large teams to work in parallel without coupling and making every feature independently testable.',
    chips: ['Bloc', 'Riverpod', 'Clean Architecture', 'DDD', 'Dependency Injection'],
    icon: '🏗️',
  },
  {
    title: 'Flutter Migration & Optimization',
    tag: 'Migration & Performance',
    desc: "Migrate your existing React Native, Ionic, or Xamarin app to Flutter, or optimize your current Flutter app's performance. We conduct thorough DevTools profiling to identify shader compilation jank, widget rebuilds, and memory leaks — then fix them systematically.",
    chips: ['Flutter DevTools', 'Shader Warm-up', 'Widget Inspector', 'Memory Profiling', 'Tree Shaking'],
    icon: '⚡',
  },
];

const flutterAdvantages = [
  {
    title: 'Pixel-Perfect UI on Every Platform',
    desc: "Flutter's own rendering engine draws every pixel — it doesn't delegate to native UI components. This means your app looks exactly the same on iOS 18, Android 15, Chrome, and macOS — no platform quirks, no subtle inconsistencies.",
    icon: '🎨',
  },
  {
    title: 'Compiled to Native ARM Code',
    desc: "Dart is AOT (ahead-of-time) compiled to native ARM code, not interpreted JavaScript. Flutter apps start faster, consume less memory, and deliver true 60fps (120fps on ProMotion) without the JS bridge overhead that React Native's old architecture had.",
    icon: '⚡',
  },
  {
    title: 'Six Platforms, One Codebase',
    desc: 'iOS, Android, web, macOS, Windows, and Linux — all from one Dart codebase. Share your business logic, state management, networking, and data models across every platform. Only diverge for genuine platform-specific behaviors.',
    icon: '♾️',
  },
  {
    title: 'Rich Widget Library',
    desc: "Flutter's 200+ Material and Cupertino widgets plus Impeller's GPU-accelerated rendering enable complex, custom UI that would take weeks in native — scroll physics, custom painters, hero animations, and morphing shapes — in days.",
    icon: '🧩',
  },
];

const platforms = [
  { name: 'iOS', icon: '🍎', detail: 'iPhone & iPad, App Store, TestFlight, HealthKit, ARKit' },
  { name: 'Android', icon: '🤖', detail: 'Phones, tablets, foldables, Google Play, Wear OS' },
  { name: 'Web', icon: '🌐', detail: 'Chrome, Safari, Firefox — CanvasKit & HTML renderer' },
  { name: 'macOS', icon: '💻', detail: 'App Store & direct distribution, M-series optimized' },
  { name: 'Windows', icon: '🪟', detail: 'MSIX packaging, Microsoft Store, enterprise deployment' },
  { name: 'Linux', icon: '🐧', detail: 'Snap, Flatpak, deb/rpm — enterprise & embedded' },
];

const techStack = [
  { category: 'Core', techs: ['Flutter 3.x', 'Dart 3', 'Impeller Renderer', 'Material 3', 'Cupertino'] },
  { category: 'State Management', techs: ['Bloc / Cubit', 'Riverpod 2.x', 'Provider', 'GetX', 'MobX'] },
  { category: 'Navigation', techs: ['GoRouter', 'Auto Route', 'Navigator 2.0', 'Deep Linking'] },
  { category: 'Backend & APIs', techs: ['Dio', 'Retrofit', 'GraphQL Flutter', 'gRPC', 'REST'] },
  { category: 'Firebase', techs: ['Firestore', 'Auth', 'Cloud Messaging', 'Remote Config', 'Analytics'] },
  { category: 'Storage & DB', techs: ['Hive', 'Isar', 'SQLite (Drift)', 'SharedPreferences', 'Supabase'] },
  { category: 'Testing', techs: ['flutter_test', 'Mockito', 'Integration Tests', 'Golden Tests', 'Patrol E2E'] },
  { category: 'DevOps', techs: ['Fastlane', 'Codemagic', 'GitHub Actions', 'Firebase App Distribution', 'Shorebird'] },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Platform Strategy',
    whatWeDo: 'We define which of the six Flutter platforms to target, the right state management approach for your team size, and the overall architecture. We assess whether Bloc, Riverpod, or a hybrid approach fits your product complexity.',
    whatYouGet: ['Platform Strategy Document', 'Architecture Diagram', 'State Management Decision', 'API Contract', 'Sprint Plan'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Design System in Flutter',
    whatWeDo: "We build your design system as Flutter widgets in Widgetbook (Flutter's Storybook), ensuring every component is documented, theme-aware, and responsive across all target screen sizes before app development begins.",
    whatYouGet: ['Figma Design Files', 'Flutter Widgetbook', 'Theme Config', 'Responsive Breakpoints', 'Accessibility Audit'],
    duration: '2–3 weeks',
  },
  {
    num: '03',
    title: 'Feature Development Sprints',
    whatWeDo: 'Two-week agile sprints with daily standups, live Flutter builds delivered via Firebase App Distribution or TestFlight, and continuous golden test screenshots to catch UI regressions automatically.',
    whatYouGet: ['Sprint Builds (FDA/TestFlight)', 'Weekly Reports', 'Golden Test Suite', 'API Docs', 'Code Reviews'],
    duration: '4–14 weeks',
  },
  {
    num: '04',
    title: 'QA & Performance Profiling',
    whatWeDo: 'We run Patrol E2E tests across 40+ real device/OS combinations, conduct Flutter DevTools performance profiling to eliminate shader jank and widget rebuilds, and verify 60fps on target device tiers.',
    whatYouGet: ['Patrol E2E Test Suite', 'DevTools Performance Report', 'Frame Rate Analysis', 'Memory Audit', 'Crash Baseline'],
    duration: '2–3 weeks',
  },
  {
    num: '05',
    title: 'Store Submission & ASO',
    whatWeDo: 'We handle App Store and Google Play submission, including screenshots generated from Flutter integration tests, metadata localization, ASO keyword optimization, and privacy manifest compliance for iOS 17+.',
    whatYouGet: ['Store Listings', 'ASO Package', 'Privacy Manifest', 'Localized Screenshots', 'Review Compliance Checklist'],
    duration: '1–2 weeks',
  },
  {
    num: '06',
    title: 'OTA Updates & SLA Support',
    whatWeDo: 'Shorebird OTA (over-the-air) updates let us patch Dart code without a store review. We monitor crash rates via Sentry, track user behavior, and provide proactive performance updates and feature development.',
    whatYouGet: ['Shorebird OTA Pipeline', 'Sentry Crash Monitoring', 'SLA Support Plan', 'Performance Reports', 'Feature Roadmap'],
    duration: 'Ongoing',
  },
];

const caseStudies = [
  {
    title: 'E-Commerce Marketplace with AR Try-On',
    desc: 'Multi-vendor Flutter marketplace with AI-powered product recommendations, ARKit/ARCore try-on feature, real-time inventory sync, and Stripe-powered checkout. Launched on iOS and Android in 16 weeks. Revenue grew 340% in year one.',
    results: ['340% Revenue Growth', '85K MAU', '4.7★ App Store', '16 Weeks to Launch'],
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Go Backend', 'ARKit/ARCore', 'Stripe'],
    industry: 'E-Commerce',
  },
  {
    title: 'Enterprise Fleet Management Suite',
    desc: 'Flutter mobile and desktop app for tracking 5,000+ vehicles in real-time with WebSocket-based GPS streams, driver performance analytics, and a shared Dart domain model across iOS, Android, and macOS admin portal.',
    results: ['5,000+ Vehicles Tracked', 'iOS + Android + macOS', '80% Code Shared', '< 1s Map Updates'],
    techStack: ['Flutter', 'Bloc', 'WebSockets', 'Google Maps', 'Firebase', 'NestJS'],
    industry: 'Logistics',
  },
  {
    title: 'EdTech Adaptive Learning Platform',
    desc: 'Flutter app with ML-powered content difficulty adjustment, offline-first lesson caching with Hive, video streaming, and gamification system. Student engagement increased 67% and course completion doubled in the first semester.',
    results: ['67% Engagement Increase', '2x Completion Rate', '100% Offline Support', '4.9★ Rating'],
    techStack: ['Flutter', 'Hive (offline)', 'Riverpod', 'Firebase', 'Python ML', 'AWS CloudFront'],
    industry: 'EdTech',
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$18K – $40K',
    desc: 'Flutter MVPs for startups validating product-market fit.',
    features: [
      'iOS + Android (Flutter)',
      'Up to 14 screens',
      'User auth & onboarding',
      'Firebase backend',
      'Push notifications',
      'App Store submission',
      '30-day post-launch support',
    ],
    cta: 'Start MVP',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$45K – $110K',
    desc: 'Full-featured Flutter apps with custom animations, backend, and integrations.',
    features: [
      'iOS + Android + Web (optional)',
      'Custom widget library',
      'Bloc / Riverpod architecture',
      'REST / GraphQL APIs',
      'Payments (Stripe)',
      'Analytics & A/B testing',
      'CI/CD (Codemagic)',
      '3-month SLA support',
    ],
    cta: 'Get Quote',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Dedicated Flutter teams for enterprise apps with compliance and desktop targets.',
    features: [
      'Dedicated Flutter team (4–8 devs)',
      'iOS + Android + macOS/Windows',
      'Bloc clean architecture',
      'Offline-first with Isar/Drift',
      'SSO / SAML',
      'HIPAA / SOC 2 compliance',
      'Golden test regression suite',
      '24/7 SLA monitoring',
    ],
    cta: 'Contact Us',
    highlighted: false,
  },
];

const faqs = [
  {
    q: 'What is Flutter and why should I choose it over React Native?',
    a: "Flutter is Google's cross-platform framework that compiles Dart to native ARM code and renders every pixel itself using the Impeller engine — unlike React Native which bridges to native UI components. The key differences: Flutter gives you pixel-identical UI across all platforms (no platform-specific rendering quirks), superior animation performance because the renderer runs on the GPU, and targets six platforms (iOS, Android, Web, macOS, Windows, Linux) from one codebase. React Native targets fewer platforms natively and still relies on JavaScript at runtime. For UI-intensive apps, Flutter consistently outperforms.",
  },
  {
    q: 'How much does Flutter app development cost?',
    a: 'A Flutter MVP typically costs $18,000–$40,000. A mid-complexity app with custom animations, backend, and integrations ranges from $45,000–$110,000. Enterprise apps with multi-platform targets, compliance requirements, and dedicated teams are priced on a custom basis. Flutter saves 30–40% vs building separate native apps. Codazz provides fixed-price quotes after a free discovery session — no surprises.',
  },
  {
    q: 'Which state management solution does Codazz use for Flutter?',
    a: 'We evaluate state management on a per-project basis. For enterprise apps with large teams, complex business logic, and strict separation of concerns, we use Bloc/Cubit. For most consumer and mid-complexity apps, we prefer Riverpod 2.x for its ergonomics and compile-time safety. For rapid prototypes, Provider or GetX may be appropriate. We document the decision in an Architecture Decision Record at the start of every project.',
  },
  {
    q: 'Can Flutter apps really target web and desktop?',
    a: "Yes, and in production. Flutter web is mature for dashboards, admin portals, and PWAs. Flutter desktop (macOS, Windows) is used by Toyota's navigation system, Canonical's Ubuntu installer, and countless enterprise internal tools. We recommend a platform strategy session to decide which targets make sense for your product — sharing 80%+ of code across platforms while platform-adapting the remaining 20% for genuine platform differences.",
  },
  {
    q: 'How does Flutter achieve 60fps performance?',
    a: "Flutter's Impeller rendering engine compiles shaders ahead-of-time during build, eliminating the shader compilation jank that plagued early Flutter apps. Dart's AOT compilation means no interpreter overhead. The widget tree diff algorithm minimizes redraws. Combined with Flutter DevTools for profiling and our performance optimization process, we guarantee 60fps on target device tiers — and 120fps on ProMotion iPhones and Android flagships.",
  },
];

const marketStats = [
  { stat: '46%', desc: 'of cross-platform developers use Flutter globally in 2026', source: 'Stack Overflow Survey' },
  { stat: '1M+', desc: 'Flutter apps published on app stores worldwide', source: 'Google Flutter Team' },
  { stat: '6', desc: 'production platforms targeted from one Flutter codebase', source: 'Flutter Official' },
  { stat: '35%', desc: 'cost savings vs building separate native apps', source: 'Industry Average' },
];

const relatedBlogs = [
  {
    title: 'Flutter vs React Native in 2026: Which Should You Choose?',
    desc: 'In-depth comparison of the two leading cross-platform frameworks.',
    href: '/blog/flutter-vs-react-native-2026',
  },
  {
    title: 'Native vs Cross-Platform: The 2026 Decision Guide',
    desc: 'When to go native and when cross-platform makes more business sense.',
    href: '/blog/native-vs-cross-platform-2026',
  },
  {
    title: 'MVP Development Guide: From Idea to Launch in 2026',
    desc: 'Step-by-step guide to building and launching your minimum viable product.',
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

export default function FlutterDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

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
            { label: 'Flutter Development' },
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
            <div style={{ maxWidth: 900 }}>
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
                🦋 Flutter Specialists
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
                Flutter App{' '}
                <span style={{ color: '#22c55e' }}>Development</span>
                <br />
                Beautiful. Fast. Everywhere.
              </h1>
              <p
                className="reveal"
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '2rem',
                  lineHeight: 1.7,
                  maxWidth: 680,
                }}
              >
                We build pixel-perfect Flutter apps for iOS, Android, web, macOS, Windows, and
                Linux from a single Dart codebase. 150+ Flutter apps shipped with genuine
                60fps performance and 30–40% lower development cost vs native.
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
              <div className="reveal" style={{ display: 'flex', gap: 'clamp(20px, 3vw, 48px)', flexWrap: 'wrap' }}>
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
            3. SERVICES GRID
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Flutter Services</div>
              <h2 style={sectionH2}>
                Every Platform.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>One Beautiful Codebase.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 680 }}>
                From iOS and Android MVPs to enterprise apps running on macOS and Windows desktops,
                we build Flutter solutions that scale across every screen your users have.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {services.map((s) => (
                <div key={s.title} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <span style={{ fontSize: 28 }}>{s.icon}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100 }}>{s.tag}</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.chips.map(c => <span key={c} style={chipStyle}>{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            4. FLUTTER ADVANTAGES
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Why Flutter?</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                What Makes Flutter<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Different.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {flutterAdvantages.map((a, i) => (
                <div key={a.title} className={`reveal-d${i + 1}`} style={{ ...cardBase, padding: '48px 36px' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{a.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14 }}>{a.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            5. PLATFORM TARGETS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(34,197,94,0.02)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Platform Coverage</div>
              <h2 style={{ ...sectionH2, margin: '0 auto' }}>
                Six Platforms.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>One Codebase.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 16 }}>
              {platforms.map((p, i) => (
                <div
                  key={p.name}
                  className={`reveal-d${i + 1}`}
                  style={{ textAlign: 'center', padding: '36px 24px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={{ fontSize: 40, marginBottom: 12 }}>{p.icon}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{p.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            6. MARKET STATS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Market Data</div>
              <h2 style={{ ...sectionH2, margin: '0 auto' }}>
                Flutter by<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>the Numbers.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {marketStats.map((m, i) => (
                <div
                  key={m.stat}
                  className={`reveal-d${i + 1}`}
                  style={{ textAlign: 'center', padding: '40px 24px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.04em', lineHeight: 1 }}>{m.stat}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 12, lineHeight: 1.5 }}>{m.desc}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 8, fontWeight: 600 }}>— {m.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            7. TECH STACK
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Technology Stack</div>
              <h2 style={sectionH2}>
                Our Flutter<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Technology Stack.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
              {techStack.map((row) => (
                <div key={row.category} style={{ ...cardBase, padding: '28px 28px' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>{row.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {row.techs.map(t => (
                      <span key={t} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', padding: '5px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            8. PROCESS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Our Process</div>
              <h2 style={sectionH2}>
                How We Build<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Flutter Apps.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {processSteps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ ...cardBase, padding: '40px 40px' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 32, alignItems: 'start' }}>
                    <div style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, color: 'rgba(34,197,94,0.15)', lineHeight: 1, minWidth: 80 }}>{step.num}</div>
                    <div>
                      <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600, color: '#ffffff', marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 20 }}>{step.whatWeDo}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.whatYouGet.map(d => (
                          <span key={d} style={{ fontSize: 12, fontWeight: 600, color: '#22c55e', background: 'rgba(34,197,94,0.08)', padding: '5px 14px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.15)' }}>{d}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.04)', padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)' }}>{step.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            9. CASE STUDIES
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>Case Studies</div>
                <h2 style={sectionH2}>
                  Flutter Apps<br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>We Have Shipped.</span>
                </h2>
              </div>
              <Link href="/case-studies" style={{ fontSize: 14, color: '#22c55e', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                View all case studies
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 20 }}>
              {caseStudies.map((cs) => (
                <div key={cs.title} style={{ ...cardBase, padding: '40px 36px' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>{cs.industry}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14 }}>{cs.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 24 }}>{cs.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                    {cs.results.map(r => (
                      <span key={r} style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.08)', padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.15)' }}>{r}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cs.techStack.map(t => <span key={t} style={chipStyle}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            10. PRICING
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Pricing</div>
              <h2 style={{ ...sectionH2, margin: '0 auto' }}>
                Flutter Development Pricing.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Fixed. Transparent. Fair.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    padding: '44px 36px',
                    border: tier.highlighted ? '1px solid rgba(34,197,94,0.4)' : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28,
                    background: tier.highlighted ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  {tier.highlighted && (
                    <div style={{ position: 'absolute', top: 20, right: 20, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#000', background: '#22c55e', padding: '5px 14px', borderRadius: 100 }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: tier.highlighted ? '#22c55e' : 'linear-gradient(90deg,rgba(34,197,94,0.3),transparent)' }} />
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 12 }}>{tier.name}</div>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>{tier.price}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 28 }}>{tier.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {tier.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '14px 28px',
                      borderRadius: 999,
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: 'none',
                      background: tier.highlighted ? '#22c55e' : 'transparent',
                      color: tier.highlighted ? '#000' : '#ffffff',
                      border: tier.highlighted ? 'none' : '1px solid rgba(255,255,255,0.2)',
                      transition: '0.3s',
                    }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            11. FAQ
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 820, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>FAQ</div>
              <h2 style={{ ...sectionH2, margin: '0 auto' }}>
                Flutter Questions<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Answered.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20,
                    overflow: 'hidden',
                    background: openFaq === i ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.01)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', textAlign: 'left', gap: 16 }}
                  >
                    <span style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <span style={{ color: '#22c55e', fontSize: 20, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            12. RELATED BLOGS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div style={sectionLabel}>Further Reading</div>
              <h2 style={sectionH2}>
                Related<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Insights & Guides.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {relatedBlogs.map((b) => (
                <Link key={b.title} href={b.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                    <div style={greenAccentLine} />
                    <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{b.title}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
                    <div style={{ marginTop: 20, fontSize: 13, color: '#22c55e', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                      Read article
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════
            13. CTA
        ═══════════════════════════════════════ */}
        <section className="section-padding">
          <div className="cb-container" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div className="reveal">
              <div style={sectionLabel}>Ready to Build?</div>
              <h2 style={{ ...sectionH2, margin: '0 auto 24px', textAlign: 'center' }}>
                Start Your Flutter App<br />
                <span style={{ color: '#22c55e' }}>Today.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 40px' }}>
                Free 60-minute Flutter architecture consultation. Fixed-price quote.
                NDA signed on Day 1 — your idea is always protected.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  style={{
                    background: '#22c55e',
                    color: '#000',
                    padding: '18px 44px',
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
                  href="/hire/flutter-developers"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#ffffff',
                    padding: '18px 44px',
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: '0.3s',
                  }}
                >
                  Hire Flutter Developers
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
