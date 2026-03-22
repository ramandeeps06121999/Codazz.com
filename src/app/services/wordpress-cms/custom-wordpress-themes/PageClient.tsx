'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'WordPress & CMS', href: '/services/wordpress-cms' },
    { label: 'Custom WordPress Themes' },
  ],
  hero: {
    badge: 'WORDPRESS & CMS',
    title: 'Custom WordPress',
    titleAccent: 'Theme Development',
    description: 'Hand-coded, pixel-perfect WordPress themes built from your Figma designs \u2014 no page builders, no bloat, just fast and beautiful sites.',
    service: 'Custom WordPress Themes',
    stats: [
      { value: '100+', label: 'Custom Themes Built' },
      { value: '98+', label: 'PageSpeed Score' },
      { value: '100%', label: 'Pixel-Perfect from Figma' },
      { value: '0', label: 'Page Builders Used' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F3A8}', title: 'Bespoke Theme Development', desc: 'Hand-coded WordPress themes built from scratch \u2014 no Elementor, no Divi. Clean, semantic HTML and CSS that performs.' },
      { icon: '\u{1F5BC}\uFE0F', title: 'Figma / XD to WordPress', desc: 'We translate your design files into pixel-perfect WordPress themes with meticulous attention to spacing, typography and interaction.' },
      { icon: '\u{1F9F1}', title: 'Gutenberg Custom Blocks', desc: 'Powerful, reusable custom blocks for the Block Editor that give your team a flexible, page-builder-like experience \u2014 without the bloat.' },
      { icon: '\u{1F476}', title: 'Child Theme Development', desc: 'Safe child themes that inherit parent theme styles while allowing full customisation \u2014 your edits survive every parent update.' },
      { icon: '\u26A1', title: 'Theme Performance Optimization', desc: 'We audit and optimize every asset \u2014 critical CSS inlining, deferred JS, image lazy loading \u2014 to hit 90+ Lighthouse scores.' },
      { icon: '\u{1F6D2}', title: 'WooCommerce Theme Integration', desc: 'Custom WooCommerce template overrides so your shop pages match your brand exactly, with conversion-focused layouts.' },
    ],
  },
  portfolioCategory: 'wordpress-cms',
  process: {
    label: 'Our Process',
    title: 'Our Custom WordPress Theme Development Process',
    steps: [
      { num: '01', title: 'Design Review', desc: 'We audit your Figma or XD files, flag any ambiguities, and align on component inventory, breakpoints and animation behaviour before writing a single line of code.' },
      { num: '02', title: 'Theme Architecture', desc: 'We plan the file structure, template hierarchy, custom post types, taxonomies and block patterns that will power the theme \u2014 built for maintainability from day one.' },
      { num: '03', title: 'Block & Template Development', desc: 'Iterative development with weekly check-ins. Each template and block is reviewed in staging before moving on, keeping scope tight and quality high.' },
      { num: '04', title: 'QA & Handover', desc: 'Cross-browser and device QA, Lighthouse performance testing, accessibility audit, and a training session so your team can manage content confidently.' },
    ],
  },
  faqs: [
    { q: 'Custom theme vs premium theme \u2014 which is better?', a: 'Premium themes are fast to deploy but come with thousands of lines of code you\'ll never use, making them slow and hard to customise cleanly. A custom theme is built for your exact requirements \u2014 nothing more, nothing less \u2014 resulting in better performance, easier maintenance, and a unique look that reflects your brand.' },
    { q: 'Do you use page builders like Elementor?', a: 'No. We build hand-coded themes using the native WordPress Block Editor (Gutenberg) for content management. Page builders add significant JavaScript overhead, generate bloated markup, and create long-term lock-in. Our approach results in faster sites and cleaner code.' },
    { q: 'How do you ensure the theme is fast?', a: 'Performance is baked in from the start: we only load assets on pages that need them, inline critical CSS, defer non-critical JavaScript, use modern image formats (WebP/AVIF), and configure server-side caching. We target a 90+ Lighthouse score as a baseline, not a bonus.' },
    { q: 'Can we edit content ourselves after launch?', a: 'Absolutely. Every custom theme we build includes intuitive Gutenberg blocks and Full Site Editing (FSE) patterns so your team can manage pages, posts and global settings without touching code. We include a handover training session and documentation.' },
    { q: 'Does the theme work with any plugins?', a: 'We code to WordPress standards, so the theme is compatible with all well-coded plugins. We also test compatibility with common plugins you plan to use (WooCommerce, SEO plugins, forms, etc.) during QA before launch.' },
  ],
  faqDescription: 'Everything you need to know about our custom WordPress theme development services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s discuss your project and build a custom WordPress theme that performs beautifully.',
};

export default function CustomWordPressThemesPage() {
  return <SubServicePageTemplate data={pageData} />;
}
