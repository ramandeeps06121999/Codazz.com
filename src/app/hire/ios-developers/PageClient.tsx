'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function iOSDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="iOS"
      breadcrumbLabel="iOS Developers"
      tagline="Swift & SwiftUI"
      description="Pre-vetted senior iOS developers ready to join your team in 48 hours. Build high-performance native iPhone, iPad, and Apple Watch apps with engineers who have shipped 100+ apps to the App Store."
      stats={[
        { value: '45+', label: 'iOS Engineers' },
        { value: '7+ Yrs', label: 'Avg Experience' },
        { value: '120+', label: 'Apps on App Store' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted iOS Experts', desc: 'Every iOS developer passes our 5-stage vetting: Swift architecture challenge, system design for Apple platforms, live pair programming, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our iOS developers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your developer is online when you are.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before a single line of code is discussed. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'App Store Ready', desc: 'Our iOS developers build apps that pass App Store review the first time. They understand Apple guidelines, provisioning, TestFlight, and release management inside out.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior iOS developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Full Apple Ecosystem', desc: 'Our iOS developers build across iPhone, iPad, Apple Watch, Apple TV, and Apple Vision Pro. They leverage SwiftUI, UIKit, Core Data, CloudKit, and platform-specific APIs.' },
      ]}
      profiles={[
        { id: 'I1', role: 'Senior iOS Developer', experience: '8 years experience', skills: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Combine', 'XCTest'], projects: '50+ apps shipped to App Store', availability: 'Available Now' },
        { id: 'I2', role: 'iOS Tech Lead', experience: '10 years experience', skills: ['Swift', 'Objective-C', 'MVVM-C', 'CI/CD', 'Fastlane', 'Performance'], projects: 'Led iOS teams of 5-12 engineers', availability: 'Available Now' },
        { id: 'I3', role: 'iOS/SwiftUI Specialist', experience: '6 years experience', skills: ['SwiftUI', 'Combine', 'WidgetKit', 'CloudKit', 'StoreKit', 'Swift Concurrency'], projects: '20+ SwiftUI production apps', availability: 'Available in 1 week' },
        { id: 'I4', role: 'iOS + watchOS Developer', experience: '7 years experience', skills: ['Swift', 'WatchKit', 'HealthKit', 'CoreBluetooth', 'ARKit', 'Metal'], projects: '15+ apps across Apple platforms', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Core iOS', chips: ['Swift 5.9+', 'SwiftUI', 'UIKit', 'Objective-C', 'Swift Concurrency', 'Combine'] },
        { label: 'Architecture', chips: ['MVVM', 'MVVM-C', 'Clean Architecture', 'TCA', 'VIPER', 'Modular Design'] },
        { label: 'Apple Frameworks', chips: ['Core Data', 'CloudKit', 'HealthKit', 'ARKit', 'StoreKit', 'WidgetKit'] },
        { label: 'Testing & CI/CD', chips: ['XCTest', 'XCUITest', 'Fastlane', 'TestFlight', 'Bitrise', 'GitHub Actions'] },
        { label: 'Networking & Storage', chips: ['URLSession', 'Alamofire', 'gRPC', 'Realm', 'SQLite', 'Keychain'] },
        { label: 'Multimedia & Graphics', chips: ['AVFoundation', 'Core Animation', 'Metal', 'Vision', 'Core ML', 'SpriteKit'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire an iOS developer from Codazz?', a: 'You can interview pre-matched iOS developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new developer can start building immediately.' },
        { q: 'What is the experience level of your iOS developers?', a: 'Our iOS developers have a minimum of 4 years building production apps for the App Store. Most have 6-10+ years of experience with Swift, UIKit, and SwiftUI.' },
        { q: 'Can your iOS developers work in my timezone?', a: 'Yes. We have iOS developers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your developer will be online during your working hours.' },
        { q: 'What is the pricing for hiring an iOS developer?', a: 'Our iOS developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Can your iOS developers also build for Apple Watch and Vision Pro?', a: 'Yes. Our iOS developers are proficient across the Apple ecosystem including iPhone, iPad, Apple Watch, Apple TV, and Apple Vision Pro using SwiftUI and platform-specific frameworks.' },
        { q: 'Do you sign NDAs before starting?', a: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your intellectual property and business ideas are fully protected from the first conversation.' },
      ]}
      startingRate="$25"
    />
  );
}
