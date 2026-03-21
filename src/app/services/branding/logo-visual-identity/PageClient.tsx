'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Branding & Identity', href: '/services/branding' },
    { label: 'Logo & Visual Identity' },
  ],
  hero: {
    badge: 'BRANDING & IDENTITY',
    title: 'Logos That',
    titleAccent: 'Make an Impact',
    description: 'Award-winning logo design and complete visual identity systems \u2014 built to be distinctive, versatile, and timeless across every touchpoint your brand inhabits.',
    service: 'Logo & Visual Identity',
    stats: [
      { value: '200+', label: 'Logos designed' },
      { value: '15+', label: 'Design awards won' },
      { value: 'All formats', label: 'Delivered on completion' },
      { value: '100%', label: 'Client satisfaction rate' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u270F\uFE0F', title: 'Primary Logo Design', desc: 'A distinctive primary logo mark crafted from scratch \u2014 combining mark, wordmark, or lettermark in a design system built to last decades, not seasons.' },
      { icon: '\u{1F504}', title: 'Logo Variations (Horizontal/Icon/Mono)', desc: 'A full suite of logo variations including horizontal lockup, stacked version, standalone icon mark, monochrome, reversed, and minimum size rules for every context.' },
      { icon: '\u{1F3A8}', title: 'Color Palette Definition', desc: 'A primary and secondary color system with precise HEX, RGB, CMYK, and Pantone specifications \u2014 selected for brand personality, accessibility, and cross-media consistency.' },
      { icon: '\u{1F524}', title: 'Typography Selection', desc: 'Carefully curated primary and secondary typefaces with hierarchy rules \u2014 display fonts, body fonts, and web-safe alternatives that reinforce your brand personality.' },
      { icon: '\u{1F5BC}\uFE0F', title: 'Icon & Illustration Style', desc: 'A custom icon set and illustration style guide that extends your visual identity across UI, marketing materials, and social content with a consistent aesthetic language.' },
      { icon: '\u{1F300}', title: 'Brand Pattern & Texture Design', desc: 'Unique brand patterns, textures, and graphic elements that add depth to your visual identity system \u2014 turning packaging, presentations, and backgrounds into branded experiences.' },
    ],
  },
  portfolioCategory: 'branding',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Brief & Inspiration', desc: 'A detailed creative brief session exploring your brand personality, audience, competitive context, and visual references \u2014 giving our designers a precise creative north star.' },
      { num: '02', title: 'Concept Development', desc: 'Our design team develops 3 distinct logo concepts with rationale \u2014 different strategic directions for you to review, react to, and build on.' },
      { num: '03', title: 'Refinement', desc: 'Your chosen concept direction is refined across two rounds of revisions \u2014 refining proportions, color, spacing, and variations until every detail is perfect.' },
      { num: '04', title: 'Final Delivery', desc: 'All final logo files delivered in every format required \u2014 AI, EPS, SVG, PNG, JPG, PDF \u2014 alongside a logo usage guide covering dos and don\'ts.' },
    ],
  },
  faqs: [
    { q: 'How many logo concepts do we receive?', a: 'We present 3 distinct logo concepts at the first review stage \u2014 each taking a different creative and strategic direction. You select one direction to develop further, with two rounds of refinement included in our standard package.' },
    { q: 'What file formats are delivered?', a: 'All final logos are delivered in AI (editable vector), EPS (print vector), SVG (web vector), PDF (print-ready), PNG with transparent background (multiple sizes), and JPG. We also provide dark, light, and monochrome versions.' },
    { q: 'How long does logo design take?', a: 'Our standard logo design process takes 3\u20134 weeks from brief to final delivery. This includes concept development (week 1\u20132), your review, refinement (week 3), and final file delivery (week 4). Rush timelines are available for an additional fee.' },
    { q: 'Can you work with an existing brand color?', a: 'Absolutely. If you have an established brand color or equity elements you wish to retain, we incorporate these constraints into the brief and design within them \u2014 while still delivering a fresh, refined identity.' },
    { q: 'Do you design for both digital and print?', a: 'Yes. Every logo system we create is designed to work perfectly across all applications \u2014 digital screens, social media, print collateral, signage, embroidery, and merchandise. We specify colors in both RGB/HEX for digital and CMYK/Pantone for print.' },
  ],
  faqDescription: 'Everything you need to know about our logo and visual identity services.',
  ctaTitle: 'Ready to Build Your Identity?',
  ctaDescription: 'Let\'s create a visual identity that makes your brand impossible to ignore.',
};

export default function LogoVisualIdentityPage() {
  return <SubServicePageTemplate data={pageData} />;
}
