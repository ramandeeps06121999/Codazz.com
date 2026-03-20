'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function FlutterDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="Flutter"
      breadcrumbLabel="Flutter Developers"
      tagline="Flutter & Dart"
      description="Pre-vetted senior Flutter developers ready to join your team in 48 hours. Build pixel-perfect cross-platform apps for iOS, Android, Web, and Desktop from a single codebase."
      stats={[
        { value: '40+', label: 'Flutter Engineers' },
        { value: '5+ Yrs', label: 'Avg Experience' },
        { value: '80+', label: 'Flutter Apps Shipped' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted Flutter Experts', desc: 'Every Flutter developer passes our 5-stage vetting: widget architecture challenge, platform channel implementation, live pair programming in Dart, culture fit, and reference checks.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our Flutter developers work in your timezone. US, European, Middle Eastern, or APAC business hours — your developer is always available.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before any code discussion. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'One Codebase, All Platforms', desc: 'Our Flutter developers ship apps that run natively on iOS, Android, Web, macOS, Windows, and Linux — all from a single Dart codebase.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Flutter itself saves you 40% over native development. Combined with our competitive rates, you get maximum ROI on your app investment.' },
        { icon: '\u{1F504}', title: 'Native Integration Experts', desc: 'When you need platform-specific features, our Flutter developers handle native iOS/Android integration through platform channels seamlessly.' },
      ]}
      profiles={[
        { id: 'F1', role: 'Senior Flutter Developer', experience: '7 years experience', skills: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'Riverpod', 'CI/CD'], projects: '30+ Flutter apps on App Store & Play Store', availability: 'Available Now' },
        { id: 'F2', role: 'Flutter Mobile Architect', experience: '9 years experience', skills: ['Flutter', 'Clean Architecture', 'Platform Channels', 'Kotlin', 'Swift', 'GraphQL'], projects: 'Architected apps with 1M+ downloads', availability: 'Available Now' },
        { id: 'F3', role: 'Flutter Full-Stack Developer', experience: '6 years experience', skills: ['Flutter', 'Dart', 'Node.js', 'Firebase', 'Supabase', 'REST APIs'], projects: '20+ end-to-end mobile products', availability: 'Available Now' },
        { id: 'F4', role: 'Flutter Web & Desktop Developer', experience: '5 years experience', skills: ['Flutter Web', 'Flutter Desktop', 'Dart', 'Responsive UI', 'Hive', 'GetX'], projects: '10+ multi-platform Flutter apps', availability: 'Available in 1 week' },
      ]}
      techCategories={[
        { label: 'Core Flutter', chips: ['Flutter 3.x', 'Dart 3', 'Material Design 3', 'Cupertino Widgets', 'Custom Painters', 'Animations'] },
        { label: 'State Management', chips: ['BLoC/Cubit', 'Riverpod', 'Provider', 'GetX', 'MobX', 'Redux'] },
        { label: 'Backend & Data', chips: ['Firebase', 'Supabase', 'REST APIs', 'GraphQL', 'Hive', 'Drift/Moor'] },
        { label: 'Native Integration', chips: ['Platform Channels', 'Method Channels', 'FFI', 'Kotlin/Swift', 'Push Notifications', 'Deep Linking'] },
        { label: 'Testing & CI/CD', chips: ['Widget Tests', 'Integration Tests', 'Codemagic', 'Fastlane', 'GitHub Actions', 'Flutter Analyze'] },
        { label: 'Advanced', chips: ['Custom Render Objects', 'Isolates', 'WebRTC', 'AR Integration', 'ML Kit', 'Maps & Location'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a Flutter developer from Codazz?', a: 'You can interview pre-matched Flutter developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours.' },
        { q: 'What is the experience level of your Flutter developers?', a: 'Our Flutter developers have a minimum of 4 years building production cross-platform apps. Most have 5-8+ years of mobile development experience including native iOS/Android.' },
        { q: 'Can your Flutter developers build for web and desktop too?', a: 'Yes. Our Flutter developers build apps that run on iOS, Android, Web, macOS, Windows, and Linux from a single codebase with native performance on each platform.' },
        { q: 'What is the pricing for hiring a Flutter developer?', a: 'Flutter developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees or long-term lock-in.' },
        { q: 'Flutter or React Native — which should I choose?', a: 'Flutter offers better performance, richer widget library, and true multi-platform support (mobile, web, desktop). React Native has a larger ecosystem and suits teams already proficient in React. We can help evaluate both for your project.' },
        { q: 'Can I scale the team up or down?', a: 'Absolutely. Our engagement models are fully flexible. Add more Flutter developers as your project grows or scale down after milestones. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
