'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function ReactNativeDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="React Native"
      breadcrumbLabel="React Native Developers"
      tagline="React Native & JavaScript"
      description="Pre-vetted senior React Native developers ready to join your team in 48 hours. Ship high-performance iOS and Android apps from a single JavaScript codebase with true native feel."
      stats={[
        { value: '35+', label: 'RN Engineers' },
        { value: '5+ Yrs', label: 'Avg Experience' },
        { value: '70+', label: 'Apps Shipped' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '✅', title: 'Vetted React Native Experts', desc: 'Every developer passes our 5-stage vetting: component architecture challenge, native module implementation, live pair programming in JavaScript/TypeScript, culture fit, and reference checks.' },
        { icon: '🌍', title: 'Timezone-Aligned', desc: 'Our React Native developers work in your timezone. US, European, Middle Eastern, or APAC business hours — your developer is always available during your working hours.' },
        { icon: '🔒', title: 'NDA From Day 1', desc: 'Your IP is protected before any code discussion. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '⚡', title: 'One Codebase, iOS & Android', desc: 'Our React Native developers ship apps that run natively on both iOS and Android from a single JavaScript codebase, with access to all platform APIs via native modules.' },
        { icon: '💰', title: '40-60% Cost Savings', desc: 'React Native cuts development time dramatically over maintaining two native codebases. Combined with our competitive rates, you get maximum ROI on your app investment.' },
        { icon: '🔄', title: 'OTA Update Specialists', desc: 'Our developers implement CodePush-powered over-the-air updates so you can ship hot fixes and features to users without waiting for App Store or Play Store review cycles.' },
      ]}
      profiles={[
        { id: 'RN1', role: 'Senior React Native Developer', experience: '7 years experience', skills: ['React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'React Navigation', 'Firebase'], projects: '25+ React Native apps on App Store & Play Store', availability: 'Available Now' },
        { id: 'RN2', role: 'React Native Mobile Architect', experience: '9 years experience', skills: ['React Native', 'Native Modules', 'Hermes Engine', 'Kotlin', 'Swift', 'GraphQL'], projects: 'Architected apps with 500K+ active users', availability: 'Available Now' },
        { id: 'RN3', role: 'React Native Full-Stack Developer', experience: '6 years experience', skills: ['React Native', 'Expo', 'Node.js', 'Zustand', 'Supabase', 'REST APIs'], projects: '18+ end-to-end mobile products', availability: 'Available Now' },
        { id: 'RN4', role: 'React Native Performance Engineer', experience: '5 years experience', skills: ['React Native', 'Hermes', 'Metro Bundler', 'CodePush', 'Reanimated 3', 'Flipper'], projects: '12+ performance-optimised React Native apps', availability: 'Available in 1 week' },
      ]}
      techCategories={[
        { label: 'Core React Native', chips: ['React Native 0.73+', 'TypeScript', 'JSX/TSX', 'Expo SDK', 'Metro Bundler', 'Hermes Engine'] },
        { label: 'Navigation & State', chips: ['React Navigation 6', 'Expo Router', 'Redux Toolkit', 'Zustand', 'Jotai', 'MobX'] },
        { label: 'Backend & Data', chips: ['Firebase', 'Supabase', 'REST APIs', 'GraphQL', 'AsyncStorage', 'SQLite (Expo)'] },
        { label: 'Native Integration', chips: ['Native Modules', 'Turbo Modules', 'Kotlin/Swift Bridges', 'Push Notifications', 'Deep Linking', 'In-App Purchases'] },
        { label: 'OTA & CI/CD', chips: ['CodePush', 'EAS Build', 'Fastlane', 'GitHub Actions', 'Bitrise', 'App Center'] },
        { label: 'UI & Animation', chips: ['React Native Paper', 'NativeWind', 'Reanimated 3', 'Skia', 'Lottie', 'Gesture Handler'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a React Native developer from Codazz?', a: 'You can interview pre-matched React Native developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours.' },
        { q: 'What is the experience level of your React Native developers?', a: 'Our React Native developers have a minimum of 4 years building production iOS and Android apps. Most have 5-8+ years of mobile experience including native modules and Hermes engine tuning.' },
        { q: 'Can your React Native developers work with Expo?', a: 'Yes. Our developers are fluent in both the Expo managed workflow and bare React Native. They handle EAS Build, Expo SDK upgrades, and CodePush OTA deployments.' },
        { q: 'What is the pricing for hiring a React Native developer?', a: 'React Native developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees or long-term lock-in.' },
        { q: 'React Native or Flutter — which should I choose?', a: 'React Native is ideal if your team already works in React/JavaScript and you need a wide third-party ecosystem. Flutter offers richer native performance and true multi-platform coverage. We can help evaluate both for your specific project needs.' },
        { q: 'Can I scale the team up or down?', a: 'Absolutely. Our engagement models are fully flexible. Add more React Native developers as your project grows or scale down after milestones. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
