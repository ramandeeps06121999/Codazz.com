'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Branding & Identity', href: '/services/branding' },
    { label: 'Rebranding Services' },
  ],
  hero: {
    badge: 'BRANDING & IDENTITY',
    title: 'Rebranding Done',
    titleAccent: 'With Confidence',
    description: 'A rigorous, stakeholder-led rebrand process that evolves your identity strategically \u2014 protecting what works, replacing what doesn\'t, and launching with full organizational alignment.',
    service: 'Rebranding',
    stats: [
      { value: '60+', label: 'Rebrands completed' },
      { value: 'Zero', label: 'Brand equity lost' },
      { value: 'Phased', label: 'Rollout expertise' },
      { value: '100%', label: 'Stakeholder alignment achieved' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F52C}', title: 'Brand Audit & Gap Analysis', desc: 'A thorough assessment of your current brand \u2014 what is working, what has become outdated, where equity exists, and where the identity is failing to reflect your current business reality.' },
      { icon: '\u{1F91D}', title: 'Stakeholder Research & Alignment', desc: 'Structured interviews and workshops with leadership, staff, customers, and partners \u2014 building a shared understanding of brand strengths, weaknesses, and strategic direction.' },
      { icon: '\u{1F5FA}\uFE0F', title: 'Rebrand Strategy', desc: 'A strategic rebrand rationale defining what changes, what is retained, positioning evolution, and the strategic narrative that will guide and justify the new identity.' },
      { icon: '\u2728', title: 'New Identity Design', desc: 'Full visual identity design for the rebranded organization \u2014 logo, color system, typography, and brand elements \u2014 built on the rebrand strategy with your heritage in mind.' },
      { icon: '\u{1F4CB}', title: 'Rebrand Rollout Plan', desc: 'A phased implementation roadmap covering every touchpoint \u2014 digital, print, signage, merchandise, and communications \u2014 with timelines, asset requirements, and ownership assigned.' },
      { icon: '\u{1F4E2}', title: 'Internal Brand Launch Support', desc: 'Internal communications and team launch materials to bring your organization on the rebrand journey \u2014 ensuring employees become brand champions from day one of the new identity.' },
    ],
  },
  portfolioCategory: 'branding',
  process: {
    label: 'Our Process',
    title: 'Our Rebranding Process',
    steps: [
      { num: '01', title: 'Brand Audit', desc: 'We assess your current brand comprehensively \u2014 internal perception, customer research, competitive context, asset inventory, and brand equity measurement.' },
      { num: '02', title: 'Stakeholder Alignment', desc: 'Leadership workshops and cross-functional sessions to align on rebrand rationale, strategic direction, and success criteria before any design work begins.' },
      { num: '03', title: 'New Identity Design', desc: 'The new identity is developed \u2014 with clear articulation of what was retained from the existing brand and what was evolved, and why each decision was made.' },
      { num: '04', title: 'Phased Launch', desc: 'A structured rollout plan ensures the new brand launches consistently across all channels \u2014 with internal launch first, followed by a coordinated external reveal.' },
    ],
  },
  faqs: [
    { q: 'When does a company need to rebrand?', a: 'Common triggers for rebranding include a significant strategic pivot, merger or acquisition, a dated visual identity, moving upmarket, entering new markets, recovering from reputation damage, or simply finding that the brand no longer reflects who you are and what you stand for today.' },
    { q: 'How do you protect existing brand equity?', a: 'Our rebrand process always begins with a brand equity audit \u2014 identifying what associations, visual elements, and brand assets have genuine positive value in your audience\'s minds. We design the new identity to honour and carry forward that equity rather than discarding it.' },
    { q: 'How long does a rebrand take?', a: 'A full rebrand from audit to completed identity design typically takes 10\u201316 weeks. Rollout and asset production continues beyond that depending on the number of touchpoints. We provide a detailed project timeline at the outset scoped to your specific business complexity.' },
    { q: 'How do we announce the rebrand to customers?', a: 'We develop a rebrand communications plan covering the narrative (the why behind the change), timing strategy, channel-specific messaging, and PR considerations. Internal announcement always precedes external \u2014 your team needs to be aligned advocates before the world sees the new brand.' },
    { q: 'What is included in a rebrand project?', a: 'Our rebrand projects include brand audit, stakeholder research, rebrand strategy, full visual identity design (logo, colors, typography, brand elements), brand guidelines, a phased rollout plan, and internal launch support. Asset production for specific applications (website, collateral, etc.) is scoped separately.' },
  ],
  faqDescription: 'Everything you need to know about our rebranding services.',
  ctaTitle: 'Ready to Evolve Your Brand?',
  ctaDescription: 'Let\'s discuss your rebrand and build a strategy that takes your brand confidently into its next chapter.',
};

export default function RebrandingPage() {
  return <SubServicePageTemplate data={pageData} />;
}
