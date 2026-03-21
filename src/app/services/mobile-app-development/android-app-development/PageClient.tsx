'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'Android App Development' },
  ],
  hero: {
    badge: 'GOOGLE ECOSYSTEM',
    title: 'Android Apps That Dominate the',
    titleAccent: 'Play Store',
    description: 'We build high-quality native Android applications in Kotlin with Jetpack Compose that perform flawlessly across the full spectrum of Android devices. From Play Store strategy to production launch, we cover every step.',
    service: 'Android App Development',
    stats: [
      { value: '150+', label: 'Android Apps Delivered' },
      { value: '10M+', label: 'Play Store Installs' },
      { value: '4.7\u2605', label: 'Avg Rating' },
      { value: '10wk', label: 'Avg Timeline' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'End-to-End Android Expertise',
    items: [
      { icon: '\uD83E\uDD16', title: 'Kotlin & Jetpack Compose', desc: 'We build modern Android apps with Kotlin and Jetpack Compose, Google\'s declarative UI toolkit. Clean architecture patterns like MVVM and Clean Architecture ensure maintainable, testable codebases.' },
      { icon: '\uD83C\uDFA8', title: 'Material Design 3', desc: 'Your app will look and feel at home on Android with full Material You implementation \u2014 dynamic color theming, adaptive layouts, and motion design that meets Google\'s standards.' },
      { icon: '\uD83D\uDCE6', title: 'Google Play Publishing', desc: 'We manage the full Play Store submission process including store listing optimization, content rating setup, staged rollouts, and Play Console monitoring post-launch.' },
      { icon: '\uD83D\uDD25', title: 'Firebase Integration', desc: 'From Firestore and Realtime Database to Remote Config, Crashlytics, and FCM push notifications, we leverage the full Firebase ecosystem to accelerate development and operations.' },
      { icon: '\uD83D\uDCFA', title: 'Android Wear & TV', desc: 'Extend your reach beyond phones. We develop companion apps for Wear OS smartwatches and Android TV / Google TV, giving users a seamless experience across all their screens.' },
      { icon: '\u2699\uFE0F', title: 'Background Services & Notifications', desc: 'We implement WorkManager, foreground services, and Android\'s modern notification system to keep your app reliable, battery-efficient, and engaging even when not in the foreground.' },
    ],
  },
  portfolioCategory: 'mobile-app-development',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Research & Architecture', desc: 'We analyze your target audience, device landscape, and business requirements to define the optimal Android architecture, third-party integrations, and development approach.' },
      { num: '02', title: 'UI/UX Design', desc: 'Our designers create adaptive layouts that look great on every screen size \u2014 from compact phones to large foldables \u2014 following Material Design 3 principles throughout.' },
      { num: '03', title: 'Kotlin Development', desc: 'We write clean, idiomatic Kotlin using Jetpack Compose for UI, coroutines for async work, Hilt for dependency injection, and Retrofit for networking with full unit and UI test coverage.' },
      { num: '04', title: 'Play Store Launch', desc: 'We configure signing, create all required store assets, submit for review, and monitor the rollout via Play Console \u2014 then iterate rapidly based on early user feedback.' },
    ],
  },
  faqs: [
    { q: 'Kotlin or Java \u2014 which do you use?', a: 'Kotlin is our default for all new Android projects. It is Google\'s officially preferred language for Android, offering null safety, coroutines, extension functions, and significantly more concise code than Java. For legacy Java codebases we can maintain or incrementally migrate to Kotlin.' },
    { q: 'How do you handle Android device fragmentation?', a: 'We design adaptive layouts using Jetpack\'s WindowSizeClass system, test across a matrix of screen densities, OS versions, and OEM skins using Firebase Test Lab, and define a clear minimum API level strategy based on your target audience\'s device data.' },
    { q: 'How long does Google Play approval take?', a: 'Initial Play Store reviews typically take 1\u20133 days for new apps and a few hours for updates. We prepare complete, policy-compliant submissions to avoid delays. Sensitive app categories (health, finance, VPN) may require additional review and verification steps.' },
    { q: 'What is the minimum Android version you support?', a: 'We typically target Android 8.0 (API 26) as the minimum, which covers over 95% of active Android devices. For apps with specific hardware requirements or enterprise deployments, we can adjust the min SDK based on your actual user demographics.' },
    { q: 'Can you port our iOS app to Android?', a: 'Yes. We offer structured iOS-to-Android porting with a proper architecture review rather than a literal translation. This often results in a better app since we can take advantage of Android-specific patterns and Jetpack libraries while maintaining feature parity with your iOS version.' },
  ],
  faqDescription: 'Everything you need to know about our Android app development services.',
  ctaTitle: 'Ready to Build Your Android App?',
  ctaDescription: 'Let\'s build a world-class Android experience that reaches billions of users on the Google Play Store.',
};

export default function AndroidAppDevelopment() {
  return <SubServicePageTemplate data={pageData} />;
}
