'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'iOS App Development' },
  ],
  hero: {
    badge: 'APPLE ECOSYSTEM',
    title: 'iOS App Development for the',
    titleAccent: 'App Store Top Charts',
    description: 'We craft high-performance native iOS applications using Swift and SwiftUI that users love and Apple approves. From concept to App Store launch, our team delivers polished, scalable apps across the entire Apple ecosystem.',
    service: 'iOS App Development',
    stats: [
      { value: '200+', label: 'iOS Apps Delivered' },
      { value: '4.8\u2605', label: 'Avg App Store Rating' },
      { value: '50M+', label: 'Total Downloads' },
      { value: '12wk', label: 'Avg Timeline' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Full-Spectrum iOS Development',
    items: [
      { icon: '\uD83C\uDF4E', title: 'Native Swift & SwiftUI', desc: 'We build fully native iOS applications using Swift and SwiftUI, ensuring peak performance, smooth animations, and seamless integration with Apple\'s latest APIs and frameworks.' },
      { icon: '\uD83D\uDCC8', title: 'App Store Optimization', desc: 'From metadata and keyword strategy to screenshot design and review management, we maximize your app\'s visibility and conversion rate on the App Store.' },
      { icon: '\uD83D\uDD14', title: 'Push Notifications & Analytics', desc: 'Implement rich push notifications, in-app messaging, and deep analytics with tools like Firebase, Mixpanel, and Apple\'s own analytics suite to drive engagement and retention.' },
      { icon: '\uD83D\uDCB3', title: 'In-App Purchases & Subscriptions', desc: 'We implement StoreKit 2 for seamless in-app purchases, auto-renewable subscriptions, and consumable products with full receipt validation and server-side verification.' },
      { icon: '\uD83C\uDFA8', title: 'iOS UI/UX Design', desc: 'Our designers craft pixel-perfect interfaces that follow Apple\'s Human Interface Guidelines, creating intuitive and visually stunning experiences that users love.' },
      { icon: '\u231A', title: 'Apple Platform Integration', desc: 'Extend your app to watchOS, tvOS, and visionOS. We build unified experiences across iPhone, iPad, Apple Watch, Apple TV, and Apple Vision Pro.' },
    ],
  },
  portfolioCategory: 'mobile-app-development',
  process: {
    label: 'Our Process',
    title: 'Our iOS App Development Process',
    steps: [
      { num: '01', title: 'Discovery & Spec', desc: 'We deep-dive into your product goals, target users, and technical requirements to define a clear specification, architecture plan, and project roadmap.' },
      { num: '02', title: 'Design & Prototype', desc: 'Our designers create high-fidelity Figma prototypes with interactive flows, ensuring the UX is validated before a single line of Swift is written.' },
      { num: '03', title: 'Swift Development', desc: 'Our engineers build your app using modern Swift and SwiftUI, with clean architecture (MVVM/TCA), thorough unit testing, and continuous integration via Xcode Cloud.' },
      { num: '04', title: 'App Store Launch', desc: 'We handle App Store Connect setup, TestFlight beta testing, App Review submission, and post-launch monitoring to ensure a successful and stable release.' },
    ],
  },
  faqs: [
    { q: 'Swift or Objective-C \u2014 which do you use?', a: 'We exclusively use Swift for all new iOS projects. Swift is Apple\'s modern, safe, and expressive language with significantly better performance and tooling than Objective-C. If you have an existing Objective-C codebase, we can incrementally migrate it to Swift.' },
    { q: 'What are the biggest App Store rejection risks?', a: 'Common rejection reasons include guideline violations around in-app purchases, privacy permissions without proper justifications, incomplete functionality, and misleading metadata. We review every submission against the latest App Store Review Guidelines before submitting, dramatically reducing rejection risk.' },
    { q: 'How long does it take to build an iOS app?', a: 'A typical iOS app with standard features takes 10\u201314 weeks from kickoff to App Store approval. Simple apps can be delivered in 6\u20138 weeks, while complex apps with custom backends, real-time features, or hardware integrations may take 16\u201324 weeks.' },
    { q: 'Should we use SwiftUI or UIKit?', a: 'For new projects targeting iOS 16+, we recommend SwiftUI for its declarative syntax, live previews, and rapid iteration. For apps requiring support for older iOS versions or complex custom UI, UIKit remains a strong choice. Many of our projects use both together.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer flexible post-launch support packages covering bug fixes, iOS version compatibility updates, performance monitoring, and feature enhancements. Most clients engage us on a monthly retainer to keep their app healthy and evolving.' },
  ],
  faqDescription: 'Everything you need to know about our iOS app development services.',
  ctaTitle: 'Ready to Build Your iOS App?',
  ctaDescription: 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function IOSAppDevelopment() {
  return <SubServicePageTemplate data={pageData} />;
}
