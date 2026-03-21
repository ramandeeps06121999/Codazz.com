'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'WordPress & CMS', href: '/services/wordpress-cms' },
    { label: 'Site Speed Optimization' },
  ],
  hero: {
    badge: 'WORDPRESS & CMS',
    title: 'WordPress Site Speed',
    titleAccent: 'Optimization',
    description: 'Transform a slow, frustrating WordPress site into a 90+ Lighthouse score performer \u2014 passing Core Web Vitals, ranking higher, and converting more.',
    service: 'Site Speed Optimization',
    stats: [
      { value: '90+', label: 'Lighthouse Score Achieved' },
      { value: '3x', label: 'Avg Load Time Improvement' },
      { value: '100%', label: 'Core Web Vitals Passing' },
      { value: '30%', label: 'Revenue Uplift' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F50D}', title: 'Core Web Vitals Audit & Fix', desc: 'Comprehensive LCP, FID/INP and CLS audit with prioritised remediation \u2014 we identify exactly what is killing your scores and fix it.' },
      { icon: '\u{1F5BC}\uFE0F', title: 'Image Optimization & WebP', desc: 'Batch conversion to WebP/AVIF, responsive image srcsets, lazy loading implementation and proper width/height attributes to eliminate layout shift.' },
      { icon: '\u26A1', title: 'Caching Strategy', desc: 'Redis object caching, full-page caching via WP Rocket or W3 Total Cache, browser caching headers, and Varnish configuration for enterprise sites.' },
      { icon: '\u{1F5C4}\uFE0F', title: 'Database Optimization', desc: 'WordPress database cleanup \u2014 remove post revisions, transients, spam comments \u2014 plus slow query analysis and indexing for large tables.' },
      { icon: '\u{1F310}', title: 'CDN Setup & Configuration', desc: 'Cloudflare or BunnyCDN integration with proper cache rules, asset minification, HTTP/2 push, and edge caching for global audiences.' },
      { icon: '\u{1F50C}', title: 'Plugin Audit & Cleanup', desc: 'We audit every installed plugin for performance impact, identify conflicts and bloat, replace heavy plugins with lightweight alternatives.' },
    ],
  },
  portfolioCategory: 'wordpress-cms',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Speed Audit & Baseline', desc: 'We run comprehensive speed tests (Lighthouse, WebPageTest, GTmetrix) across multiple pages and devices to establish a performance baseline and identify the biggest impact fixes.' },
      { num: '02', title: 'Fix Prioritisation', desc: 'All findings are ranked by potential performance gain vs implementation effort. We focus on the 20% of fixes that deliver 80% of the performance improvement first.' },
      { num: '03', title: 'Implementation', desc: 'Systematic implementation of fixes on a staging environment \u2014 image optimization, caching, code minification, render-blocking resource elimination, font optimization and more.' },
      { num: '04', title: 'Verify & Monitor', desc: 'Post-implementation testing across devices and real user scenarios, Core Web Vitals verification, and ongoing monitoring setup with alerts for performance regressions.' },
    ],
  },
  faqs: [
    { q: 'Why is my WordPress site slow?', a: 'Common culprits include unoptimized images (often the single biggest factor), too many plugins (especially page builders), no caching configured, cheap shared hosting, unminified CSS/JS, render-blocking scripts, and a bloated database full of post revisions and transients. Most WordPress sites have multiple issues stacking on top of each other.' },
    { q: 'What is a good PageSpeed score?', a: 'Google considers 90+ a "Good" score. For most business sites, we target 90+ on desktop and 75+ on mobile (mobile is harder due to smaller CPU budgets). More importantly, we focus on Core Web Vitals: LCP under 2.5s, INP under 200ms, and CLS under 0.1 \u2014 these are the metrics that directly influence Google rankings and user experience.' },
    { q: 'Do I need a CDN?', a: 'If your audience is spread across multiple regions \u2014 yes, absolutely. A CDN caches your assets at edge locations globally, meaning a user in London gets served content from a London server rather than your origin in Sydney. For single-region audiences, a CDN still helps with DDoS protection, asset optimization and reduced origin load.' },
    { q: 'Will speed optimization break my site?', a: 'We perform all optimization work on a staging copy of your site first, never on production. Each change is tested before the next is applied. We have a rollback plan at every step. In 5+ years of speed optimization work, we have never had an optimization cause an unrecoverable issue on a production site.' },
    { q: 'How do you handle image optimization?', a: 'We convert all images to WebP (with AVIF for supporting browsers), compress them with quality settings tuned to be imperceptible to the human eye, implement responsive srcsets so mobile devices download smaller files, add proper lazy loading, and set explicit width/height attributes to prevent layout shift. For large sites, we automate this via Cloudflare Images or a custom pipeline.' },
  ],
  faqDescription: 'Everything you need to know about our WordPress site speed optimization services.',
  ctaTitle: 'Ready to Speed Up Your Site?',
  ctaDescription: 'Let\'s transform your WordPress performance and hit 90+ Lighthouse scores that drive real business results.',
};

export default function SiteSpeedOptimisationPage() {
  return <SubServicePageTemplate data={pageData} />;
}
