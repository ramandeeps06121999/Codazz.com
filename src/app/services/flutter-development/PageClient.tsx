'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Flutter Development' },
  ],
  hero: {
    badge: 'Flutter Development Company',
    title: 'Flutter App Development',
    titleAccent: 'Company.',
    description:
      'Pixel-perfect, 60fps cross-platform apps for iOS, Android, web, and desktop — from a single Dart codebase. 150+ Flutter apps shipped with the Impeller rendering engine.',
    service: 'Flutter Development',
    stats: [
      { value: '150+', label: 'Flutter Apps Shipped' },
      { value: '60fps', label: 'Guaranteed Performance' },
      { value: '6', label: 'Target Platforms' },
      { value: '4.9', label: 'Clutch Rating', suffix: '★' },
    ],
  },
  awards: [
    'Clutch Top Flutter Company 2026',
    'Google Flutter Community Partner',
    'AWS Advanced Tier Partner',
    'SOC 2 Type II Certified',
    'Clutch Top App Development 2026',
    'ISO 27001 Certified',
    'Google Cloud Partner',
    'Top Cross-Platform Company - GoodFirms',
  ],
  whySection: {
    title: 'Why Flutter Is the Future of Cross-Platform Development',
    cards: [
      { icon: '🎯', title: 'One Codebase, Six Platforms', desc: 'A single Dart codebase compiles to native ARM code for iOS, Android, web, macOS, Windows, and Linux. Write once, deploy everywhere with pixel-perfect consistency.' },
      { icon: '⚡', title: '60fps Guaranteed Performance', desc: 'Flutter\'s Impeller rendering engine delivers consistent 60fps animations with no jank. GPU-accelerated rendering rivals native performance on every platform.' },
      { icon: '💰', title: '40% Lower Development Cost', desc: 'One team, one codebase, one testing pipeline. Flutter eliminates the need for separate iOS and Android teams, cutting development costs by 30-40%.' },
      { icon: '🚀', title: 'Hot Reload for Rapid Iteration', desc: 'See code changes instantly with Flutter\'s sub-second hot reload. Build, experiment, and iterate faster than any other cross-platform framework.' },
    ],
    whoNeedsTitle: 'Who Needs Flutter Development?',
    whoNeedsItems: [
      { icon: '🚀', title: 'Startups & MVPs', desc: 'Launch on iOS and Android simultaneously with a single codebase. Get to market faster with Flutter\'s rapid development cycle.' },
      { icon: '🏢', title: 'Enterprise', desc: 'Unified mobile and desktop apps for internal tools, field operations, and customer-facing products across all platforms.' },
      { icon: '🛒', title: 'E-Commerce', desc: 'Beautiful, performant shopping experiences with smooth animations, complex UIs, and payment integrations on every device.' },
      { icon: '🏥', title: 'Healthcare & FinTech', desc: 'Compliant cross-platform apps with biometric auth, encryption, and real-time data sync for regulated industries.' },
      { icon: '🎮', title: 'Gaming & Social', desc: 'Engagement-focused apps with complex animations, real-time features, and rich media experiences.' },
      { icon: '📱', title: 'Existing App Teams', desc: 'Add Flutter modules to existing native apps for new features without rewriting your entire codebase.' },
    ],
    metricsTitle: 'Flutter Development Metrics',
    metrics: [
      { metric: '150+', label: 'Flutter Apps', desc: 'Shipped to production' },
      { metric: '60fps', label: 'Performance', desc: 'Guaranteed with Impeller' },
      { metric: '95%', label: 'Code Sharing', desc: 'Across platforms' },
      { metric: '40%', label: 'Cost Savings', desc: 'vs dual native teams' },
      { metric: '6', label: 'Platforms', desc: 'From one codebase' },
      { metric: '4.9★', label: 'Client Rating', desc: 'Across 60+ reviews' },
    ],
    closingText:
      'Flutter has matured from Google\'s experiment into the leading cross-platform framework used by BMW, eBay, Alibaba, and Google itself. At Codazz, we have shipped 150+ Flutter apps — from startup MVPs to enterprise platforms serving millions. Our team builds with Dart 3, Flutter 3.x, Impeller, and modern state management (Riverpod, Bloc) to deliver apps that look and feel truly native on every platform.',
  },
  subServices: [
    {
      title: 'Flutter iOS & Android Apps',
      tag: 'Mobile',
      desc: 'Pixel-perfect mobile apps for iOS and Android compiled to native ARM code via Flutter\'s Impeller engine. Beautiful UI with 60fps animations across all devices.',
      chips: ['Dart', 'Flutter 3.x', 'iOS', 'Android', 'Impeller', 'Material 3'],
      href: '/services/flutter-development/mobile',
      icon: '📱',
    },
    {
      title: 'Flutter Web Applications',
      tag: 'Web',
      desc: 'Progressive web apps and admin dashboards built with Flutter Web. Same codebase, same UI, deployed to the browser with full responsiveness.',
      chips: ['Flutter Web', 'PWA', 'CanvasKit', 'Responsive', 'SEO'],
      href: '/services/flutter-development/web',
      icon: '🌐',
    },
    {
      title: 'Flutter Desktop Apps',
      tag: 'Desktop',
      desc: 'Native desktop applications for macOS, Windows, and Linux from your Flutter codebase. Ideal for internal tools, kiosks, and cross-platform productivity apps.',
      chips: ['macOS', 'Windows', 'Linux', 'Multi-Window', 'Native Menus'],
      href: '/services/flutter-development/desktop',
      icon: '🖥️',
    },
    {
      title: 'Flutter for Embedded',
      tag: 'IoT & Kiosks',
      desc: 'Flutter UIs for embedded devices, kiosks, and smart displays. Touch-optimized interfaces running on resource-constrained hardware.',
      chips: ['Embedded Linux', 'Kiosk Mode', 'Touch UI', 'Custom Embedder'],
      href: '/services/flutter-development/embedded',
      icon: '📺',
    },
    {
      title: 'Flutter Migration',
      tag: 'Modernization',
      desc: 'Migrate existing native iOS, Android, or React Native apps to Flutter for unified codebases and reduced maintenance overhead.',
      chips: ['Native to Flutter', 'React Native to Flutter', 'Gradual Migration'],
      href: '/services/flutter-development/migration',
      icon: '🔄',
    },
    {
      title: 'Flutter Backend Integration',
      tag: 'Full-Stack',
      desc: 'Complete backend development with Firebase, Supabase, or custom Node.js/Go APIs designed specifically for Flutter app architectures.',
      chips: ['Firebase', 'Supabase', 'Node.js', 'GraphQL', 'REST APIs'],
      href: '/services/flutter-development/backend',
      icon: '🔗',
    },
  ],
  servicesHeading: {
    label: 'What We Build',
    title: 'Flutter Development Services',
    titleDim: 'Six platforms, one team.',
    description:
      'End-to-end Flutter development for mobile, web, desktop, and embedded platforms — from UI design and architecture to backend integration and App Store deployment.',
  },
  benefits: {
    label: 'Why Codazz Flutter',
    title: 'Flutter Expertise',
    titleDim: 'That Ships.',
    items: [
      { icon: '🎨', title: 'Pixel-Perfect UI', desc: 'Custom widgets, complex animations, and platform-adaptive designs that look and feel native on every device and screen size.' },
      { icon: '⚡', title: '60fps on Every Device', desc: 'Impeller rendering engine, optimized widget trees, and performance profiling ensure smooth animations even on budget Android devices.' },
      { icon: '🧪', title: 'Tested & Reliable', desc: 'Comprehensive unit, widget, and integration tests with 90%+ code coverage. Golden tests for pixel-perfect UI verification.' },
      { icon: '🚀', title: 'CI/CD & Deployment', desc: 'Automated build, test, and deploy pipelines for iOS, Android, web, and desktop from a single CI/CD workflow.' },
    ],
  },
  clientLogos: [
    'Google', 'BMW', 'eBay', 'Alibaba', 'Toyota', 'Tencent',
    'Stripe', 'AWS', 'Firebase', 'Supabase', 'Cloudflare',
    'Riverpod', 'Bloc', 'GetX', 'Dart', 'Material Design',
  ],
  bigStats: [
    { value: '150+', label: 'Flutter Apps', desc: 'Shipped to production' },
    { value: '60fps', label: 'Performance', desc: 'Guaranteed minimum' },
    { value: '95%', label: 'Code Sharing', desc: 'Across platforms' },
    { value: '40%', label: 'Cost Savings', desc: 'vs native teams' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 60+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🎨', title: 'Impeller Engine', desc: 'Next-gen rendering for jank-free 60fps animations' },
      { icon: '🧩', title: 'Riverpod', desc: 'Modern reactive state management for scalable apps' },
      { icon: '📦', title: 'Bloc Pattern', desc: 'Predictable state management for complex business logic' },
      { icon: '🔥', title: 'Hot Reload', desc: 'Sub-second code changes for rapid development' },
      { icon: '🧪', title: 'Golden Tests', desc: 'Pixel-perfect UI regression testing' },
      { icon: '📱', title: 'Platform Channels', desc: 'Native iOS/Android API access from Dart' },
    ],
    row2: [
      { icon: '🌐', title: 'Flutter Web', desc: 'CanvasKit and HTML renderer for web deployment' },
      { icon: '🖥️', title: 'Flutter Desktop', desc: 'Native macOS, Windows, and Linux applications' },
      { icon: '🔗', title: 'FFI', desc: 'Foreign function interface for C/C++ integration' },
      { icon: '📊', title: 'DevTools', desc: 'Flutter DevTools for profiling and debugging' },
      { icon: '🎯', title: 'Material 3', desc: 'Google Material Design 3 implementation' },
      { icon: '🔄', title: 'Isolates', desc: 'Concurrent programming for heavy computations' },
    ],
  },
  techStack: [
    { category: 'Flutter & Dart', techs: ['Flutter 3.x', 'Dart 3', 'Impeller', 'Material 3', 'Cupertino', 'Custom Widgets'] },
    { category: 'State Management', techs: ['Riverpod', 'Bloc/Cubit', 'Provider', 'GetX', 'MobX'] },
    { category: 'Backend', techs: ['Firebase', 'Supabase', 'Node.js', 'Go', 'GraphQL', 'REST APIs'] },
    { category: 'Testing', techs: ['Flutter Test', 'Integration Tests', 'Golden Tests', 'Mockito', 'Patrol'] },
    { category: 'CI/CD', techs: ['Codemagic', 'GitHub Actions', 'Fastlane', 'Firebase App Distribution', 'TestFlight'] },
    { category: 'Tools & Services', techs: ['Firebase Analytics', 'Sentry', 'Amplitude', 'RevenueCat', 'Stripe'] },
  ],
  pricingGuide: {
    title: 'How Much Does Flutter App Development Cost?',
    description: 'Costs depend on app complexity, number of target platforms, backend requirements, and third-party integrations. Codazz offers fixed-price quotes — Flutter saves 30-40% vs building separate native apps.',
    tiers: [
      { icon: '💰', name: 'Flutter MVP', price: 'Starting at $19,000', desc: 'Cross-platform app for iOS and Android with core features, basic backend (Firebase/Supabase), authentication, and App Store deployment.', timeline: '⏱ 6–10 weeks' },
      { icon: '💰', name: 'Full-Featured App', price: 'Starting at $45,000', desc: 'Production app with custom UI, complex animations, payment integration, push notifications, analytics, CI/CD pipeline, and multi-platform (mobile + web) deployment.', timeline: '⏱ 3–6 months' },
      { icon: '💰', name: 'Enterprise Flutter Platform', price: 'Starting at $150,000', desc: 'Multi-platform deployment (iOS, Android, web, desktop), offline-first architecture, role-based access, custom backend APIs, admin dashboard, and enterprise integrations.', timeline: '⏱ 5–10 months' },
    ],
  },
  selectionGuide: {
    title: 'How to Choose a Flutter Development Company',
    description: 'Choosing the right Flutter partner is critical — cross-platform expertise, native platform knowledge, and Dart proficiency all matter.',
    criteria: [
      { icon: '📋', title: 'Proven Portfolio', desc: 'Look for references with measurable results in Flutter apps across iOS, Android, web, and desktop platforms.' },
      { icon: '👨‍💻', title: 'Senior Engineers', desc: '8+ years avg experience. Dart, Flutter 3.x, Impeller, Riverpod/Bloc, platform channels, and CI/CD with Codemagic.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope with platform milestones, App Store submission, and post-launch support.' },
      { icon: '🛡️', title: 'Post-Launch SLAs', desc: 'App Store updates, OS compatibility patches, performance monitoring, and crash resolution guarantees.' },
      { icon: '🔒', title: 'Security Certs', desc: 'SOC 2, ISO 27001, HIPAA, PCI-DSS compliant. Secure storage, certificate pinning, and biometric auth.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and App Store review coordination.' },
    ],
  },
  faqs: [
    { q: 'Is Flutter good enough for production apps?', a: 'Absolutely. Flutter powers apps from Google, BMW, eBay, Alibaba, and Toyota. With the Impeller rendering engine, Flutter delivers 60fps performance that rivals native apps. We have shipped 150+ Flutter apps to production serving millions of users.' },
    { q: 'How does Flutter compare to React Native?', a: 'Flutter offers superior UI consistency (pixel-perfect across platforms), better animation performance (Impeller vs JavaScript bridge), and broader platform support (web + desktop). React Native has a larger ecosystem and JavaScript talent pool. We recommend Flutter for UI-heavy apps and React Native for React-experienced teams.' },
    { q: 'Can Flutter apps access native device features?', a: 'Yes. Flutter provides platform channels for direct access to native iOS and Android APIs. Camera, Bluetooth, GPS, biometrics, push notifications, in-app purchases — everything available natively is accessible from Flutter through plugins or custom platform channels.' },
    { q: 'How much does Flutter app development cost?', a: 'A Flutter MVP starts at $19,000. Full-featured apps start at $45,000. Enterprise platforms start at $150,000. Flutter saves 30-40% compared to building separate native iOS and Android apps because you maintain a single codebase, single team, and single testing pipeline.' },
    { q: 'Can you migrate our existing native app to Flutter?', a: 'Yes. We offer two approaches: full migration (rebuild in Flutter) or gradual migration (add Flutter screens to your existing native app). The add-to-app approach lets you migrate feature by feature without disrupting your existing app.' },
    { q: 'Do Flutter apps look native on iOS and Android?', a: 'Yes. Flutter provides Material Design and Cupertino widget libraries that adapt to each platform. We build adaptive UIs that use iOS-native patterns on iPhone and Material Design on Android, so users feel at home on their platform.' },
  ],
  faqDescription:
    'Get answers to common questions about Flutter development, cross-platform apps, performance, costs, and migration from native or React Native.',
  relatedBlogs: [
    { title: 'Flutter vs React Native in 2026: Complete Comparison', desc: 'Performance, ecosystem, and developer experience compared for cross-platform mobile development.', href: '/blog/flutter-vs-react-native-2026' },
    { title: 'Flutter Architecture Best Practices', desc: 'Clean architecture, state management, and scalable patterns for production Flutter apps.', href: '/blog/flutter-architecture-best-practices' },
    { title: 'Impeller Rendering Engine: Why Flutter Performance Changed', desc: 'Deep dive into Flutter\'s new rendering engine and what it means for app performance.', href: '/blog/flutter-impeller-engine' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Full-service mobile development across all platforms.', href: '/services/mobile-app-development' },
    { name: 'React Native Development', desc: 'JavaScript-based cross-platform alternative.', href: '/services/react-native-development' },
    { name: 'UI/UX Design', desc: 'Conversion-optimized designs for Flutter apps.', href: '/services/ui-ux-design' },
    { name: 'Cloud Engineering', desc: 'Scalable backends for Flutter applications.', href: '/services/cloud-engineering' },
  ],
  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Enterprise', href: '/industries/enterprise' },
  ],
};

export default function FlutterDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
