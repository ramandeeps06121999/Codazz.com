'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Product Design', href: '/services/product-design' },
    { label: 'UI/UX Strategy' },
  ],
  hero: {
    badge: 'PRODUCT DESIGN',
    title: 'UI/UX Strategy That',
    titleAccent: 'Converts',
    description: 'We craft evidence-based UX strategies that align user needs with business goals — reducing guesswork and accelerating product-market fit.',
    service: 'UI/UX Strategy',
    stats: [
      { value: '150+', label: 'Products Designed' },
      { value: '40%', label: 'Avg Conversion Lift' },
      { value: '4.9/5', label: 'Usability Scores' },
      { value: '3wk', label: 'Strategy Sprint' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F50D}', title: 'User Research & Persona Development', desc: 'Deep qualitative and quantitative research to build accurate user personas that drive every design decision.' },
      { icon: '\u{1F4CA}', title: 'Competitive Analysis', desc: 'Thorough analysis of competitors and market leaders to identify gaps, opportunities, and strategic advantages.' },
      { icon: '\u{1F5FA}\uFE0F', title: 'Information Architecture', desc: 'Structuring content and navigation so users find what they need intuitively, reducing friction and abandonment.' },
      { icon: '\u{1F50E}', title: 'UX Audit of Existing Products', desc: 'Expert review of your current product to surface usability issues, accessibility gaps, and conversion blockers.' },
      { icon: '\u26A1', title: 'Design Sprint Facilitation', desc: 'Google Design Sprint methodology to validate ideas and solve complex problems in just five focused days.' },
      { icon: '\u{1F3AF}', title: 'Jobs-to-Be-Done Framework', desc: 'Uncovering the true motivations behind user behaviour to align product features with real needs and outcomes.' },
    ],
  },
  portfolioCategory: 'product-design',
  process: {
    label: 'Our Process',
    title: 'Our UI/UX Strategy Process',
    steps: [
      { num: '01', title: 'Research & Discovery', desc: 'We conduct stakeholder interviews, user research, and competitive audits to build a full picture of your landscape.' },
      { num: '02', title: 'Synthesis', desc: 'Raw research is distilled into insights, opportunity maps, and prioritised problem statements.' },
      { num: '03', title: 'Strategy Definition', desc: 'We define the UX vision, principles, and measurable goals that will guide the entire product experience.' },
      { num: '04', title: 'Roadmap Delivery', desc: 'A prioritised, actionable roadmap is handed over with clear milestones, KPIs, and design recommendations.' },
    ],
  },
  faqs: [
    { q: 'What is a UX strategy vs UI design?', a: 'UX strategy is the high-level plan that defines how a product will serve its users and business goals — it comes before any visual design. UI design is the execution: the visual, interactive layer users see. Strategy without execution is a document; execution without strategy is guesswork.' },
    { q: 'How long does a strategy engagement take?', a: 'Our core UX strategy sprint runs three weeks, covering research, synthesis, and roadmap delivery. For larger products or enterprises with multiple user segments, engagements typically extend to six to eight weeks to ensure thoroughness.' },
    { q: 'Do you conduct user interviews?', a: 'Yes — user interviews are central to our discovery phase. We recruit participants matching your target personas, conduct moderated sessions, and synthesise findings into actionable insights. Remote and in-person sessions are both available.' },
    { q: 'How do you measure UX success?', a: 'We define KPIs at the start of every engagement: task completion rates, time-on-task, Net Promoter Score, conversion rate, and user satisfaction scores (SUS/CSAT). These benchmarks are set before design work begins so progress is objectively measurable.' },
    { q: 'Can strategy work be done remotely?', a: 'Absolutely. We have delivered strategy engagements for clients across North America, Europe, and the Asia-Pacific region entirely remotely using Figma, Miro, Notion, and video facilitation. Timezone alignment is planned at the kickoff.' },
  ],
  faqDescription: 'Everything you need to know about our UI/UX strategy services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: "Let's discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.",
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
