'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Branding & Identity', href: '/services/branding' },
    { label: 'Brand Guidelines' },
  ],
  hero: {
    badge: 'BRANDING & IDENTITY',
    title: 'Brand Guidelines That',
    titleAccent: 'Protect Your Identity',
    description: 'Comprehensive brand guidelines in Figma and PDF that give every team member, agency, and partner the rules they need to represent your brand consistently and confidently.',
    service: 'Brand Guidelines',
    stats: [
      { value: '150+', label: 'Brand guidelines created' },
      { value: '2\u20132000', label: 'Team sizes served' },
      { value: 'Figma & PDF', label: 'Dual format delivery' },
      { value: 'Lifetime', label: 'Reference document value' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u2705', title: 'Logo Usage Rules', desc: 'Clear documentation of correct and incorrect logo usage \u2014 spacing rules, minimum sizes, approved color variations, and prohibited treatments to protect brand consistency.' },
      { icon: '\u{1F3A8}', title: 'Color System Documentation', desc: 'Complete color specifications for every brand color in HEX, RGB, CMYK, and Pantone \u2014 with usage rules, hierarchy, and accessible combinations documented for every application.' },
      { icon: '\u{1F524}', title: 'Typography Guidelines', desc: 'Typography system documentation covering font families, weights, sizes, line heights, and hierarchy rules for headings, body, captions, and UI across digital and print contexts.' },
      { icon: '\u{1F4F8}', title: 'Photography & Imagery Style', desc: 'Art direction guidelines defining your brand\'s photographic aesthetic \u2014 subject matter, composition, color grading, mood, and what to avoid \u2014 ensuring visual consistency across all imagery.' },
      { icon: '\u{1F4AC}', title: 'Voice & Tone Guide', desc: 'Written guidelines defining how your brand communicates \u2014 personality traits, vocabulary, sentence structure, and tone adjustments for different contexts such as social, formal comms, and advertising.' },
      { icon: '\u{1F4D0}', title: 'Digital & Print Application Examples', desc: 'Real-world application examples showing how the brand system applies to business cards, email signatures, social templates, presentations, and advertising \u2014 giving teams immediate practical reference.' },
    ],
  },
  portfolioCategory: 'branding',
  process: {
    label: 'Our Process',
    title: 'Our Brand Guidelines Process',
    steps: [
      { num: '01', title: 'Brand Asset Audit', desc: 'We audit all existing brand assets \u2014 logos, colors, fonts, photography \u2014 documenting what exists, what is inconsistent, and what needs to be created or standardized.' },
      { num: '02', title: 'Guidelines Structure', desc: 'We define the scope and structure of your guidelines document, mapping all sections required and aligning with your team on depth, format, and primary use cases.' },
      { num: '03', title: 'Documentation', desc: 'Our designers write and design the full guidelines document \u2014 clear, beautifully laid out, and written so that non-designers can apply the rules without ambiguity.' },
      { num: '04', title: 'Figma Library Setup', desc: 'A comprehensive Figma component library is built alongside the guidelines, giving your design and development teams a live, editable single source of truth for all brand components.' },
    ],
  },
  faqs: [
    { q: 'What is included in brand guidelines?', a: 'Our standard brand guidelines cover logo usage, color system, typography, photography and imagery style, iconography, voice and tone, and application examples across key digital and print touchpoints. The scope is tailored to your needs and the complexity of your identity system.' },
    { q: 'What format are guidelines delivered in?', a: 'We deliver brand guidelines in both an interactive Figma file (for design teams) and a polished PDF (for wider team distribution). Both formats are updated simultaneously and branded to match your identity.' },
    { q: 'How do we keep guidelines up to date?', a: 'The Figma file serves as your living brand document \u2014 easily updatable as your brand evolves. We build it with versioning in mind, and we offer ongoing brand management retainers for clients who update their identity regularly. The PDF can be regenerated from Figma at any time.' },
    { q: 'Do you create a Figma component library?', a: 'Yes \u2014 Figma library setup is included in our brand guidelines packages. We build a fully structured component library including colors, text styles, logos, icons, and core UI components, all connected to your brand variables for easy global updates.' },
    { q: 'Can you create guidelines for an existing brand?', a: 'Absolutely. Many of our guidelines projects are for established brands that have grown organically without a formal system. We audit what exists, standardize and codify the current identity, fill gaps, and create a definitive guidelines document from your existing assets.' },
  ],
  faqDescription: 'Everything you need to know about our brand guidelines services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s create brand guidelines that give your whole team the confidence to apply your brand consistently.',
};

export default function BrandGuidelinesPage() {
  return <SubServicePageTemplate data={pageData} />;
}
