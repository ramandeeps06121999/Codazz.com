'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Product Design', href: '/services/product-design' },
    { label: 'Design Systems' },
  ],
  hero: {
    badge: 'PRODUCT DESIGN',
    title: 'Design Systems That',
    titleAccent: 'Scale Teams',
    description: 'We build the single source of truth your design and engineering teams need to ship consistently, accessibly, and at speed.',
    service: 'Design Systems',
    stats: [
      { value: '50+', label: 'Design Systems Built' },
      { value: '60%', label: 'Faster Feature Delivery' },
      { value: 'Figma +', label: 'Storybook' },
      { value: '1000+', label: 'Engineers Using Our Systems' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F9E9}', title: 'Component Library Design', desc: 'A comprehensive set of reusable UI components with all states, variants, and responsive behaviours documented and ready to implement.' },
      { icon: '\u{1F3A8}', title: 'Design Token Architecture', desc: 'Semantic design tokens for color, spacing, typography, and elevation — creating a single source of truth for design and code.' },
      { icon: '\u{1F4D0}', title: 'Figma Component Library', desc: 'A fully organized Figma library with auto-layout components, variants, and interactive states that mirror your production component library.' },
      { icon: '\u{1F4D6}', title: 'Storybook Documentation', desc: 'Interactive component documentation in Storybook so engineers can browse, test, and integrate components without guesswork.' },
      { icon: '\u267F', title: 'Accessibility Standards (WCAG 2.1)', desc: 'Every component built to WCAG 2.1 AA standards with color contrast ratios, keyboard navigation, ARIA labels, and focus management.' },
      { icon: '\u{1F3DB}\uFE0F', title: 'Design System Governance', desc: 'Contribution guidelines, versioning strategy, and governance processes so your system stays consistent as teams and products grow.' },
    ],
  },
  portfolioCategory: 'product-design',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Audit & Foundation', desc: 'We audit your existing UI for inconsistencies, establish design principles, and define the token architecture that underpins everything.' },
      { num: '02', title: 'Component Design', desc: 'Core components are designed in Figma with all states and variants, reviewed against accessibility standards before any code is written.' },
      { num: '03', title: 'Documentation', desc: 'Components are documented in Storybook with usage guidelines, do/don\'t examples, and prop specifications for engineering teams.' },
      { num: '04', title: 'Team Adoption', desc: 'We run adoption workshops, create onboarding guides, and establish contribution workflows so the system lives on after handoff.' },
    ],
  },
  faqs: [
    { q: 'When does a company need a design system?', a: 'If you have more than one designer, more than one front-end engineer, or more than one product surface — you need a design system. Signs you\'re overdue: inconsistent button styles across pages, different teams rebuilding the same components, and designers spending time on pixel-pushing instead of product thinking.' },
    { q: 'Figma library vs Storybook — what\'s the difference?', a: 'A Figma component library is for designers — it\'s the source of truth for visual design, containing all components, variants, and tokens in a shared Figma workspace. Storybook is for engineers — it\'s a live, interactive documentation site where developers can view, test, and reference coded components. Both should exist and stay in sync.' },
    { q: 'How do you keep design and code in sync?', a: 'We implement design tokens as a shared layer — defined once and consumed by both Figma (via plugins like Tokens Studio) and code (as CSS variables or JSON). Combined with a defined contribution and review process, this keeps design and engineering aligned as the system evolves.' },
    { q: 'How long does it take to build a design system?', a: 'A foundational design system covering 30-50 core components typically takes eight to twelve weeks. Larger enterprise systems with extensive documentation, multiple themes, and Storybook integration can run sixteen to twenty weeks. The size depends heavily on the number of product surfaces and existing design debt.' },
    { q: 'Can you build on top of an existing system like MUI or Radix?', a: 'Absolutely. Building on top of established component libraries like Material UI, Radix UI, or Shadcn is often the fastest path to a production-ready system. We can theme and extend these libraries to match your brand while inheriting their accessibility foundations — saving significant build time.' },
  ],
  faqDescription: 'Everything you need to know about our design systems services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: "Let's discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.",
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
