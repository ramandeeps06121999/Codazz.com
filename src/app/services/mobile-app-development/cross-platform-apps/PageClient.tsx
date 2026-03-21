'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'Cross-Platform App Development' },
  ],
  hero: {
    badge: 'MULTI-PLATFORM STRATEGY',
    title: 'Reach Every Platform with',
    titleAccent: 'Half the Investment',
    description: 'We design and build cross-platform mobile apps that deliver a native-quality experience on iOS, Android, and beyond \u2014 from a single unified team and codebase. Maximize your reach while minimizing your development cost.',
    service: 'Cross-Platform App Development',
    stats: [
      { value: '500+', label: 'Multi-Platform Apps' },
      { value: '50%', label: 'Lower Dev Cost' },
      { value: '1 Team', label: 'iOS, Android & Web' },
      { value: '10wk', label: 'Avg Timeline' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Everything Your Multi-Platform App Needs',
    items: [
      { icon: '\uD83D\uDDFA\uFE0F', title: 'Platform Strategy Consulting', desc: 'We analyze your target audience, budget, and feature set to recommend the optimal cross-platform approach \u2014 Flutter, React Native, or a hybrid \u2014 with a clear cost-benefit breakdown.' },
      { icon: '\uD83C\uDFD7\uFE0F', title: 'Shared Codebase Architecture', desc: 'Our architects design modular codebases that maximize reuse of business logic, networking, and state management, while allowing clean separation of platform-specific UI and hardware integrations.' },
      { icon: '\u2705', title: 'Native Feature Parity', desc: 'Cross-platform doesn\'t mean compromise. We ensure full feature parity with native apps \u2014 camera, GPS, biometrics, push notifications, and background tasks \u2014 all working flawlessly on every platform.' },
      { icon: '\uD83D\uDCCA', title: 'Performance Benchmarking', desc: 'We run side-by-side performance benchmarks against native reference apps to validate frame rates, startup times, memory usage, and battery impact before any release.' },
      { icon: '\uD83D\uDDBC\uFE0F', title: 'UI Adaptation per Platform', desc: 'Users expect iOS apps to feel like iOS apps and Android apps to feel like Android apps. We adapt navigation patterns, typography, gestures, and component styles to match each platform\'s conventions.' },
      { icon: '\u2699\uFE0F', title: 'CI/CD for Multiple Stores', desc: 'We configure unified CI/CD pipelines using Fastlane and GitHub Actions that build, test, sign, and submit to both the App Store and Play Store simultaneously on every release branch merge.' },
    ],
  },
  portfolioCategory: 'mobile-app-development',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Platform Audit', desc: 'We assess your target platforms, user demographics, feature requirements, and existing tech stack to define the cross-platform strategy and framework selection with full justification.' },
      { num: '02', title: 'Shared Architecture', desc: 'We design the shared module boundaries \u2014 what lives in shared code vs platform-specific layers \u2014 and establish the project structure, CI pipeline, and development workflow before coding begins.' },
      { num: '03', title: 'Platform-Specific Polish', desc: 'Once the core is built, we invest time in making each platform feel native \u2014 correct iOS transitions, Android back-stack behaviour, platform-appropriate icons, and adaptive layouts for every screen size.' },
      { num: '04', title: 'Unified Launch', desc: 'We coordinate simultaneous submissions to the App Store and Play Store, synchronise release notes, manage staged rollouts on both platforms, and monitor crash rates and performance post-launch.' },
    ],
  },
  faqs: [
    { q: 'Which cross-platform framework is best?', a: 'There is no single answer \u2014 it depends on your team, design requirements, and integration needs. Flutter is best for custom, pixel-perfect UIs and multi-platform targets beyond mobile. React Native is ideal when you have a JavaScript/React team or need web code sharing. We help you evaluate objectively and pick the right fit for your project.' },
    { q: 'Do cross-platform apps feel native to users?', a: 'Modern cross-platform frameworks have closed the gap significantly. Flutter renders its own pixels (no native component overhead), and React Native renders actual native components. With thoughtful platform-adaptive UX design, users typically cannot tell the difference from a native app. We prioritise platform feel as a core deliverable.' },
    { q: 'How do you handle platform differences like navigation and gestures?', a: 'We implement platform-adaptive navigation \u2014 iOS-style stack with swipe-back, Android back-button and predictive-back gesture, and Material vs Cupertino UI components where appropriate. Our designers create platform variants for critical UX patterns rather than forcing a single design on both platforms.' },
    { q: 'What is the cost difference vs building separate native apps?', a: 'Cross-platform development typically reduces cost by 40\u201360% compared to maintaining two separate native codebases, since business logic, APIs, and state management are shared. Platform-specific UI work still requires native expertise, but the overall team size and timeline are substantially reduced.' },
    { q: 'Can you migrate our existing native app to a cross-platform framework?', a: 'Yes. We offer structured migration services with a phased approach \u2014 typically starting with new features built in the cross-platform framework while the existing native code continues to ship. This reduces risk and allows the team to build familiarity with the new stack before full migration.' },
  ],
  faqDescription: 'Everything you need to know about our cross-platform app development services.',
  ctaTitle: 'Ready to Go Cross-Platform?',
  ctaDescription: 'Let\'s discuss your platform goals and find the most efficient path to reaching your users on every device.',
};

export default function CrossPlatformApps() {
  return <SubServicePageTemplate data={pageData} />;
}
