import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire iOS Developers | Swift & SwiftUI Engineers | Codazz',
  description: 'Hire pre-vetted iOS developers from Codazz. Senior Swift, SwiftUI & Objective-C engineers available in 48 hours. NDA from day 1, timezone-aligned, starting at $25/hr.',
  openGraph: {
    title: 'Hire iOS Developers | Swift & SwiftUI Engineers | Codazz',
    description: 'Hire pre-vetted iOS developers from Codazz. Senior Swift, SwiftUI & Objective-C engineers available in 48 hours.',
    url: 'https://codazz.com/hire/ios-developers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire iOS Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/ios-developers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire an iOS developer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched iOS developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new developer can start building immediately.' } },
    { '@type': 'Question', name: 'What is the experience level of your iOS developers?', acceptedAnswer: { '@type': 'Answer', text: 'Our iOS developers have a minimum of 4 years of professional experience building production apps for the App Store. Most have 6-10+ years of experience with Swift and UIKit.' } },
    { '@type': 'Question', name: 'Can your iOS developers work in my timezone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have iOS developers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your developer will be online during your working hours.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring an iOS developer?', acceptedAnswer: { '@type': 'Answer', text: 'Our iOS developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your intellectual property and business ideas are fully protected from the first conversation.' } },
    { '@type': 'Question', name: 'Can your iOS developers also build for iPad, watchOS, and visionOS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our iOS developers are proficient across the Apple ecosystem including iPhone, iPad, Apple Watch, Apple TV, and Apple Vision Pro using SwiftUI and platform-specific frameworks.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire iOS Developers',
  description: 'Hire pre-vetted senior iOS developers from Codazz. Swift, SwiftUI & Objective-C experts available in 48 hours with NDA protection.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/ios-developers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'iOS Developers', item: 'https://codazz.com/hire/ios-developers' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
