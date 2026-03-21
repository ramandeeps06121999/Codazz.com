'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function AndroidDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="Android"
      breadcrumbLabel="Android Developers"
      tagline="Kotlin & Jetpack Compose"
      description="Pre-vetted senior Android developers ready to join your team in 48 hours. Build high-performance native Android apps, Wear OS experiences, and Android TV applications with engineers who have shipped 100+ apps to the Play Store."
      stats={[
        { value: '55+', label: 'Android Engineers' },
        { value: '7+ Yrs', label: 'Avg Experience' },
        { value: '130+', label: 'Apps on Play Store' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted Android Experts', desc: 'Every Android developer passes our 5-stage vetting: Kotlin architecture challenge, system design for Android, live pair programming, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our Android developers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your developer is online when you are.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before a single line of code is discussed. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Play Store Ready', desc: 'Our Android developers build apps that pass Google Play review seamlessly. They understand Play Store policies, signing, internal testing tracks, and staged rollouts.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior Android developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Modern Android Stack', desc: 'Our Android developers use Jetpack Compose, Kotlin Coroutines, Hilt, Room, and Material 3. They follow Google recommended architecture patterns and best practices.' },
      ]}
      profiles={[
        { id: 'A1', role: 'Senior Android Developer', experience: '8 years experience', skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room', 'Hilt', 'Coroutines'], projects: '45+ apps shipped to Play Store', availability: 'Available Now' },
        { id: 'A2', role: 'Android Tech Lead', experience: '10 years experience', skills: ['Kotlin', 'Java', 'Clean Architecture', 'CI/CD', 'Gradle', 'Performance'], projects: 'Led Android teams of 6-15 engineers', availability: 'Available Now' },
        { id: 'A3', role: 'Android/Kotlin Specialist', experience: '6 years experience', skills: ['Kotlin', 'Jetpack Compose', 'KMM', 'Ktor', 'Material 3', 'Compose Navigation'], projects: '25+ Compose-first production apps', availability: 'Available in 1 week' },
        { id: 'A4', role: 'Full-Stack Android Developer', experience: '7 years experience', skills: ['Kotlin', 'Firebase', 'Node.js', 'GraphQL', 'Wear OS', 'Android TV'], projects: '30+ end-to-end Android products', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Core Android', chips: ['Kotlin', 'Jetpack Compose', 'Java', 'Android SDK', 'Kotlin Coroutines', 'Kotlin Flows'] },
        { label: 'Architecture', chips: ['MVVM', 'Clean Architecture', 'MVI', 'Multi-Module', 'Hilt/Dagger', 'Jetpack Navigation'] },
        { label: 'Jetpack Libraries', chips: ['Room', 'WorkManager', 'DataStore', 'CameraX', 'Paging 3', 'Media3'] },
        { label: 'Testing & CI/CD', chips: ['JUnit', 'Espresso', 'Compose Testing', 'Mockk', 'GitHub Actions', 'Fastlane'] },
        { label: 'Networking & Data', chips: ['Retrofit', 'OkHttp', 'gRPC', 'Apollo GraphQL', 'Ktor Client', 'Moshi'] },
        { label: 'Platform Extensions', chips: ['Wear OS', 'Android TV', 'Android Auto', 'Material 3', 'Firebase', 'Google Maps'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire an Android developer from Codazz?', a: 'You can interview pre-matched Android developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new developer can start building immediately.' },
        { q: 'What is the experience level of your Android developers?', a: 'Our Android developers have a minimum of 4 years building production apps for the Play Store. Most have 6-10+ years of experience with Kotlin, Jetpack, and the Android SDK.' },
        { q: 'Kotlin or Java — which do your Android developers use?', a: 'Our developers are proficient in both. For new projects we recommend Kotlin with Jetpack Compose as the modern standard, but we also maintain and extend legacy Java codebases.' },
        { q: 'What is the pricing for hiring an Android developer?', a: 'Our Android developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Can your Android developers build for Wear OS and Android TV?', a: 'Yes. Our Android developers are experienced with Wear OS, Android TV, and Android Auto. They leverage platform-specific APIs and design guidelines for each form factor.' },
        { q: 'Do you sign NDAs before starting?', a: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your intellectual property and business ideas are fully protected from the first conversation.' },
      ]}
      startingRate="$25"
    />
  );
}
