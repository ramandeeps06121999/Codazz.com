'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'React Native Development' },
  ],
  hero: {
    badge: 'React Native Development Company',
    title: 'React Native App',
    titleAccent: 'Development.',
    description:
      'JavaScript-powered native apps used by Meta, Microsoft, and Shopify. React Native combines web development speed with native performance, enabling rapid iteration and hot reloading.',
    service: 'React Native Development',
    stats: [
      { value: '200+', label: 'React Native Apps' },
      { value: '40%', label: 'Lower Cost vs Native' },
      { value: '95%', label: 'Code Sharing' },
      { value: '4.9/5', label: 'App Store Rating' },
    ],
  },
  awards: [
    'Clutch Top React Native Company 2026',
    'Meta React Native Partner',
    'AWS Advanced Tier Partner',
    'SOC 2 Type II Certified',
    'Clutch Top App Development 2026',
    'ISO 27001 Certified',
    'Top Cross-Platform Company - GoodFirms',
    'Expo Certified Developer',
  ],
  whySection: {
    title: 'Why React Native Dominates Cross-Platform Development',
    cards: [
      { icon: '📦', title: 'Single Codebase', desc: 'Write once, run everywhere. A single JavaScript/TypeScript codebase powers both iOS and Android apps, eliminating duplicated logic and keeping your team focused on features.' },
      { icon: '⚡', title: 'Near-Native Performance', desc: 'React Native\'s New Architecture with TurboModules and Fabric renderer delivers performance indistinguishable from native apps for 95% of use cases.' },
      { icon: '🔥', title: 'Hot Reloading', desc: 'See changes in milliseconds with Fast Refresh. React Native\'s developer experience dramatically accelerates iteration speed during development.' },
      { icon: '🌐', title: 'Massive Ecosystem', desc: 'Leverage the entire JavaScript/npm ecosystem, React web expertise, and thousands of React Native packages. Your web React developers become mobile developers overnight.' },
    ],
    whoNeedsTitle: 'Who Needs React Native Development?',
    whoNeedsItems: [
      { icon: '🚀', title: 'Startups & MVPs', desc: 'Ship on iOS and Android with one team. React Native is the fastest path from idea to app stores with proven scalability.' },
      { icon: '🌐', title: 'React Web Teams', desc: 'Already have React web developers? They can build mobile apps immediately. Same patterns, same tools, new platform.' },
      { icon: '🏢', title: 'Enterprise', desc: 'Unified mobile strategy with TypeScript, shared business logic, and consistent UI across platforms and web applications.' },
      { icon: '🛒', title: 'E-Commerce', desc: 'Fast, responsive shopping experiences with smooth animations, payment integrations, and push notifications.' },
      { icon: '🏦', title: 'FinTech', desc: 'Secure, compliant mobile banking and trading apps with biometric auth, encryption, and real-time data.' },
      { icon: '📱', title: 'Existing Native App Teams', desc: 'Add React Native modules to existing iOS/Android apps for faster feature delivery without full rewrites.' },
    ],
    metricsTitle: 'React Native Impact Metrics',
    metrics: [
      { metric: '200+', label: 'RN Apps Shipped', desc: 'To production' },
      { metric: '40%', label: 'Cost Savings', desc: 'vs dual native teams' },
      { metric: '95%', label: 'Code Sharing', desc: 'Across platforms' },
      { metric: '4.9/5', label: 'App Store Rating', desc: 'Average across apps' },
      { metric: '50%', label: 'Faster Development', desc: 'vs native approach' },
      { metric: '100M+', label: 'Users Served', desc: 'Across client apps' },
    ],
    closingText:
      'React Native powers the mobile apps of Meta, Microsoft, Shopify, Discord, and Bloomberg. At Codazz, we have shipped 200+ React Native apps — from startup MVPs to enterprise platforms. We build with the New Architecture (Fabric, TurboModules), Expo, and TypeScript for maximum performance, reliability, and developer velocity.',
  },
  subServices: [
    {
      title: 'React Native iOS & Android',
      tag: 'Mobile',
      desc: 'Production-quality mobile apps for iOS and Android from a single TypeScript codebase. The New Architecture delivers native-grade performance.',
      chips: ['TypeScript', 'New Architecture', 'Fabric', 'TurboModules', 'Hermes'],
      href: '/services/react-native-development/mobile',
      icon: '📱',
    },
    {
      title: 'Expo Development',
      tag: 'Rapid Development',
      desc: 'Build and deploy React Native apps faster with Expo\'s managed workflow. OTA updates, EAS Build, and zero native configuration for most features.',
      chips: ['Expo SDK', 'EAS Build', 'OTA Updates', 'Expo Router', 'Expo Modules'],
      href: '/services/react-native-development/expo',
      icon: '🚀',
    },
    {
      title: 'React Native for Web',
      tag: 'Universal',
      desc: 'Share code between mobile and web with React Native for Web. Build truly universal apps that run on iOS, Android, and browsers from a single codebase.',
      chips: ['React Native Web', 'Universal Components', 'Responsive', 'SSR'],
      href: '/services/react-native-development/web',
      icon: '🌐',
    },
    {
      title: 'Native Module Development',
      tag: 'Platform APIs',
      desc: 'Custom native modules for platform-specific features — camera, Bluetooth, biometrics, AR, and hardware APIs not covered by existing packages.',
      chips: ['Swift Modules', 'Kotlin Modules', 'TurboModules', 'JSI'],
      href: '/services/react-native-development/native-modules',
      icon: '🔧',
    },
    {
      title: 'React Native Migration',
      tag: 'Modernization',
      desc: 'Migrate from native iOS/Android, Cordova, Ionic, or older React Native versions to the latest New Architecture with Fabric and TurboModules.',
      chips: ['Native to RN', 'New Architecture', 'Expo Migration', 'Code Audit'],
      href: '/services/react-native-development/migration',
      icon: '🔄',
    },
    {
      title: 'Backend for React Native',
      tag: 'Full-Stack',
      desc: 'Node.js, Python, and Go backends designed for React Native apps. REST, GraphQL, real-time WebSockets, and push notification infrastructure.',
      chips: ['Node.js', 'GraphQL', 'WebSocket', 'Push Notifications', 'Firebase'],
      href: '/services/react-native-development/backend',
      icon: '🔗',
    },
  ],
  servicesHeading: {
    label: 'What We Build',
    title: 'React Native Services',
    titleDim: 'JavaScript meets native.',
    description:
      'Full-service React Native development from MVP to enterprise — mobile apps, Expo projects, universal web/mobile apps, native modules, and backend integration.',
  },
  benefits: {
    label: 'Why Codazz React Native',
    title: 'React Native Experts',
    titleDim: 'Who Deliver.',
    items: [
      { icon: '⚡', title: 'New Architecture Ready', desc: 'We build exclusively on React Native\'s New Architecture — Fabric renderer, TurboModules, and Hermes engine for maximum performance.' },
      { icon: '🧪', title: 'Thoroughly Tested', desc: 'Jest, Detox, and Maestro E2E testing with 90%+ code coverage. Every app is tested across real devices before shipping.' },
      { icon: '📦', title: 'Code Sharing Excellence', desc: '95% shared code between iOS and Android. Shared business logic, API layers, and state management with platform-adaptive UI.' },
      { icon: '🚀', title: 'Rapid OTA Updates', desc: 'Ship bug fixes and features without App Store review using Expo EAS Updates and CodePush for instant deployment.' },
    ],
  },
  clientLogos: [
    'Meta', 'Microsoft', 'Shopify', 'Discord', 'Bloomberg',
    'Stripe', 'AWS', 'Firebase', 'Expo', 'Redux',
    'React Navigation', 'Reanimated', 'Hermes', 'TypeScript',
    'Detox', 'Sentry',
  ],
  bigStats: [
    { value: '200+', label: 'RN Apps Shipped', desc: 'To production' },
    { value: '40%', label: 'Cost Savings', desc: 'vs native development' },
    { value: '95%', label: 'Code Sharing', desc: 'Across platforms' },
    { value: '100M+', label: 'Users Served', desc: 'Across client apps' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 80+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🏗️', title: 'Fabric Renderer', desc: 'New rendering architecture for synchronous layout' },
      { icon: '⚡', title: 'TurboModules', desc: 'Lazy-loaded native modules with JSI binding' },
      { icon: '🔥', title: 'Hermes Engine', desc: 'Optimized JS engine for React Native apps' },
      { icon: '🎬', title: 'Reanimated 3', desc: 'Worklet-based animations running on UI thread' },
      { icon: '📱', title: 'Expo Modules', desc: 'Modular native API access with Swift/Kotlin' },
      { icon: '🔄', title: 'OTA Updates', desc: 'Instant app updates without store review' },
    ],
    row2: [
      { icon: '🧭', title: 'Expo Router', desc: 'File-based routing with deep linking support' },
      { icon: '📊', title: 'Flipper', desc: 'Debugging platform for React Native apps' },
      { icon: '🧪', title: 'Detox E2E', desc: 'Gray-box end-to-end testing for mobile' },
      { icon: '🔗', title: 'JSI', desc: 'JavaScript Interface for direct native access' },
      { icon: '🎯', title: 'CodePush', desc: 'Over-the-air JavaScript bundle updates' },
      { icon: '📦', title: 'MMKV', desc: 'Ultra-fast key-value storage for React Native' },
    ],
  },
  techStack: [
    { category: 'React Native Core', techs: ['React Native 0.75+', 'Expo SDK 52', 'TypeScript', 'Hermes', 'New Architecture'] },
    { category: 'State & Data', techs: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'Jotai', 'MMKV', 'WatermelonDB'] },
    { category: 'Navigation & UI', techs: ['Expo Router', 'React Navigation', 'Reanimated 3', 'Gesture Handler', 'NativeWind'] },
    { category: 'Testing', techs: ['Jest', 'Detox', 'Maestro', 'React Native Testing Library', 'Appium'] },
    { category: 'Backend', techs: ['Node.js', 'Firebase', 'Supabase', 'GraphQL', 'REST APIs', 'WebSocket'] },
    { category: 'CI/CD & Deploy', techs: ['EAS Build', 'Fastlane', 'GitHub Actions', 'CodePush', 'TestFlight', 'App Distribution'] },
  ],
  pricingGuide: {
    title: 'How Much Does React Native App Development Cost?',
    description: 'Costs depend on app complexity, native module requirements, backend needs, and third-party integrations. Codazz offers fixed-price quotes — React Native saves 30-40% vs separate native iOS and Android teams.',
    tiers: [
      { icon: '💰', name: 'React Native MVP', price: '$20,000 – $50,000', desc: 'Cross-platform app for iOS and Android with core features, Expo managed workflow, Firebase/Supabase backend, auth, and App Store deployment.', timeline: '⏱ 5–8 weeks' },
      { icon: '💰', name: 'Full-Featured App', price: '$50,000 – $200,000', desc: 'Production app with custom native modules, complex navigation, payment integration, push notifications, analytics, OTA updates, and CI/CD via EAS Build.', timeline: '⏱ 3–6 months' },
      { icon: '💰', name: 'Enterprise RN Platform', price: '$200,000 – $500,000+', desc: 'Multi-app ecosystem with shared component library, custom TurboModules, offline-first sync, role-based access, admin dashboard, and web + mobile code sharing.', timeline: '⏱ 5–10 months' },
    ],
  },
  selectionGuide: {
    title: 'How to Choose a React Native Development Company',
    description: 'Choosing the right React Native partner is critical — New Architecture expertise, native module skills, and JavaScript ecosystem depth all matter.',
    criteria: [
      { icon: '📋', title: 'Proven Portfolio', desc: 'Look for references with measurable results in React Native apps using the New Architecture, Expo, and TypeScript.' },
      { icon: '👨‍💻', title: 'Senior Engineers', desc: '8+ years avg experience. TypeScript, Fabric, TurboModules, Expo SDK, Reanimated, and native iOS/Android bridging.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope with platform milestones, App Store submission, and OTA update strategy.' },
      { icon: '🛡️', title: 'Post-Launch SLAs', desc: 'App Store updates, React Native version upgrades, OTA hotfixes, performance monitoring, and crash resolution.' },
      { icon: '🔒', title: 'Security Certs', desc: 'SOC 2, ISO 27001, HIPAA, PCI-DSS compliant. Secure storage, certificate pinning, and biometric auth.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and App Store review coordination.' },
    ],
  },
  faqs: [
    { q: 'Is React Native still relevant in 2026?', a: 'Absolutely. React Native powers apps from Meta, Microsoft, Shopify, Discord, and Bloomberg. The New Architecture (Fabric, TurboModules, Hermes) has eliminated historical performance concerns. It remains the top choice for teams with JavaScript/React expertise.' },
    { q: 'React Native vs Flutter: Which should we choose?', a: 'Choose React Native if your team knows JavaScript/TypeScript or you need to share code with a React web app. Choose Flutter for pixel-perfect custom UIs and broader platform support (desktop, embedded). Both deliver excellent production apps — the best choice depends on your team and requirements.' },
    { q: 'Can React Native achieve native-level performance?', a: 'Yes, with the New Architecture. Fabric renderer enables synchronous layout, TurboModules provide lazy-loaded native access via JSI, and Hermes engine optimizes JavaScript execution. For 95% of apps, React Native performance is indistinguishable from native.' },
    { q: 'How much does a React Native app cost?', a: 'A React Native MVP costs $20,000-$50,000. Full-featured apps range from $50,000-$200,000+. React Native saves 30-40% compared to separate native iOS and Android development due to shared codebase, single team, and unified testing.' },
    { q: 'Can you add React Native to our existing native app?', a: 'Yes. React Native supports incremental adoption. We can add React Native screens to your existing Swift/Kotlin app, letting you migrate features gradually without disrupting your current codebase or development workflow.' },
    { q: 'Do you use Expo or bare React Native?', a: 'We primarily use Expo (SDK 52+) which now supports custom native modules through Expo Modules API. For projects requiring specialized native code, we use bare React Native with the New Architecture. Most projects benefit from Expo\'s superior developer experience and EAS build system.' },
  ],
  faqDescription:
    'Get answers to common questions about React Native development, the New Architecture, Expo, costs, and cross-platform app development.',
  relatedBlogs: [
    { title: 'React Native New Architecture: Complete Guide', desc: 'Understanding Fabric, TurboModules, and Hermes for production React Native apps.', href: '/blog/react-native-new-architecture-guide' },
    { title: 'Flutter vs React Native in 2026', desc: 'Comprehensive comparison of the two leading cross-platform mobile frameworks.', href: '/blog/flutter-vs-react-native-2026' },
    { title: 'Expo SDK 52: What You Need to Know', desc: 'New features, performance improvements, and migration guide for the latest Expo release.', href: '/blog/expo-sdk-52-guide' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Full-service mobile development across all platforms.', href: '/services/mobile-app-development' },
    { name: 'Flutter Development', desc: 'Dart-based cross-platform alternative.', href: '/services/flutter-development' },
    { name: 'Web Development', desc: 'React web apps with shared code.', href: '/services/web-development' },
    { name: 'UI/UX Design', desc: 'Conversion-optimized mobile app designs.', href: '/services/ui-ux-design' },
  ],
  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Logistics', href: '/industries/logistics' },
  ],
};

export default function ReactNativeDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
