'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'Flutter Development' },
  ],
  hero: {
    badge: 'CROSS-PLATFORM NATIVE',
    title: 'One Codebase.',
    titleAccent: 'Every Platform. Native Speed.',
    description: 'Flutter lets us ship beautiful, high-performance apps for iOS, Android, web, and desktop from a single Dart codebase \u2014 cutting your development cost by up to 60% without sacrificing quality or native feel.',
    service: 'Flutter Development',
    stats: [
      { value: '100+', label: 'Flutter Apps Shipped' },
      { value: '60%', label: 'Cost Saving vs Native' },
      { value: '1 Codebase', label: 'iOS + Android' },
      { value: '8wk', label: 'Avg Timeline' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Complete Flutter Development Services',
    items: [
      { icon: '\uD83D\uDC26', title: 'Dart & Flutter SDK', desc: 'We write clean, idiomatic Dart using Flutter\'s latest SDK. Our engineers stay current with every Flutter release, ensuring your app benefits from the latest performance improvements and APIs.' },
      { icon: '\uD83E\uDDE9', title: 'Custom Widget Library', desc: 'We design and build reusable custom widget libraries tailored to your brand, ensuring visual consistency across screens while keeping the codebase DRY and maintainable.' },
      { icon: '\u26A1', title: 'Native Performance', desc: 'Flutter compiles to native ARM code, delivering 60/120fps animations without a JavaScript bridge. We profile and optimize rendering pipelines to ensure buttery-smooth performance on all devices.' },
      { icon: '\uD83D\uDD0C', title: 'Platform Channels', desc: 'When you need to access device-specific APIs not covered by existing plugins, we write custom Platform Channels in Swift/Kotlin to bridge Flutter with native functionality seamlessly.' },
      { icon: '\uD83D\uDDA5\uFE0F', title: 'Flutter Web & Desktop', desc: 'Extend your Flutter app beyond mobile to web browsers, macOS, Windows, and Linux \u2014 all from the same codebase. We architect shared business logic with platform-adaptive UIs for each target.' },
      { icon: '\uD83D\uDD04', title: 'State Management (Riverpod/Bloc)', desc: 'We implement scalable state management using Riverpod or Bloc depending on your app\'s complexity, ensuring a predictable, testable, and maintainable application architecture.' },
    ],
  },
  portfolioCategory: 'mobile-app-development',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Architecture Design', desc: 'We define the app architecture \u2014 folder structure, state management approach, routing strategy, and third-party package selection \u2014 establishing a solid foundation before writing a single widget.' },
      { num: '02', title: 'Widget Development', desc: 'UI is built widget by widget in Flutter, with our designers and developers collaborating closely to produce pixel-perfect implementations of your Figma designs across both iOS and Android.' },
      { num: '03', title: 'Platform Testing', desc: 'We run comprehensive tests on real iOS and Android devices, covering golden widget tests, integration tests, and manual QA to catch any platform-specific rendering or behaviour differences.' },
      { num: '04', title: 'Multi-Store Launch', desc: 'We submit simultaneously to the App Store and Play Store, managing all signing, store metadata, and screenshots for both platforms. One team, one timeline, two successful launches.' },
    ],
  },
  faqs: [
    { q: 'Is Flutter truly native or a web wrapper?', a: 'Flutter is not a web wrapper or WebView. It compiles your Dart code directly to native ARM machine code and renders every pixel using its own Skia/Impeller rendering engine, bypassing both the native UI framework and a JavaScript bridge. The result is consistently fast, visually custom apps.' },
    { q: 'Flutter vs React Native \u2014 which should we choose?', a: 'Flutter excels at pixel-perfect custom UIs, consistent cross-platform rendering, and pure Dart teams. React Native is a better fit when you have a strong JavaScript/React team and need deep integration with the native component ecosystem. We can help you evaluate the right choice based on your specific needs.' },
    { q: 'Can our existing native app be ported to Flutter?', a: 'Yes, we offer Flutter migration services. We typically recommend a screen-by-screen migration strategy, running Flutter and native code side by side using Add-to-App until the full migration is complete, minimising risk and disruption to your existing users.' },
    { q: 'How does Flutter performance compare to native?', a: 'For most app categories, Flutter performance is indistinguishable from native \u2014 both achieve 60/120fps animations and fast startup times. Complex platform integrations like maps or camera may have slight overhead from Platform Channels, but these are imperceptible in practice.' },
    { q: 'Who maintains a Flutter app long-term?', a: 'Flutter is backed by Google with a strong open-source community and a growing plugin ecosystem (pub.dev). We provide post-launch maintenance packages and stay current with Flutter SDK updates, Dart upgrades, and OS compatibility requirements so your app never falls behind.' },
  ],
  faqDescription: 'Everything you need to know about our Flutter development services.',
  ctaTitle: 'Ready to Build with Flutter?',
  ctaDescription: 'Ship to iOS, Android, and web simultaneously. One team, one codebase, half the cost.',
};

export default function FlutterDevelopment() {
  return <SubServicePageTemplate data={pageData} />;
}
