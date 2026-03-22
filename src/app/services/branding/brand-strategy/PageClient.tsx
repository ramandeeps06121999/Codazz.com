'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Branding & Identity', href: '/services/branding' },
    { label: 'Brand Strategy' },
  ],
  hero: {
    badge: 'BRANDING & IDENTITY',
    title: 'Brand Strategy That',
    titleAccent: 'Defines Markets',
    description: 'A rigorous brand strategy that positions you distinctly in the market, articulates your purpose clearly, and gives your team the strategic foundation to build a brand that lasts.',
    service: 'Brand Strategy',
    stats: [
      { value: '80+', label: 'Brand strategies delivered' },
      { value: '3x', label: 'Avg brand recognition lift' },
      { value: '6-week', label: 'Strategy sprint' },
      { value: 'F500 & startups', label: 'Client range' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F3AF}', title: 'Brand Positioning & Differentiation', desc: 'Define the unique space your brand occupies in the market \u2014 crafting a positioning statement that clearly articulates why customers should choose you over every alternative.' },
      { icon: '\u{1F465}', title: 'Audience Persona Development', desc: 'Deep-dive research into your target customers \u2014 their motivations, pain points, buying triggers, and media habits \u2014 building detailed personas that guide every brand decision.' },
      { icon: '\u{1F52D}', title: 'Competitive Landscape Analysis', desc: 'A structured audit of your competitive environment \u2014 positioning maps, messaging analysis, visual identity review \u2014 identifying white space for your brand to own.' },
      { icon: '\u{1F3D7}\uFE0F', title: 'Brand Architecture', desc: 'Strategic organization of your brand portfolio \u2014 whether you operate a single brand, endorsed brand, or house of brands \u2014 with clear hierarchy and relationship rules.' },
      { icon: '\u{1F5E3}\uFE0F', title: 'Messaging Framework & Tone of Voice', desc: 'A messaging hierarchy from core value proposition to audience-specific proof points, plus tone of voice guidelines that make your brand instantly recognizable in any context.' },
      { icon: '\u{1F4A1}', title: 'Brand Values & Purpose Definition', desc: 'Articulation of your brand\'s why \u2014 purpose, mission, vision, and values \u2014 creating the internal north star that aligns your team and resonates with values-driven customers.' },
    ],
  },
  portfolioCategory: 'branding',
  process: {
    label: 'Our Process',
    title: 'Our Brand Strategy Process',
    steps: [
      { num: '01', title: 'Discovery & Research', desc: 'Stakeholder interviews, customer research, competitor analysis, and category immersion \u2014 building the factual foundation every great brand strategy is built upon.' },
      { num: '02', title: 'Positioning Workshop', desc: 'A facilitated strategy workshop bringing together your leadership team to align on purpose, audience, competitive context, and positioning direction.' },
      { num: '03', title: 'Strategy Development', desc: 'We synthesise all inputs into a comprehensive brand strategy document \u2014 positioning, personas, architecture, messaging framework, and tone of voice.' },
      { num: '04', title: 'Brand Brief', desc: 'A concise, shareable brand brief distilling the strategy into an actionable reference document for your design, marketing, and content teams.' },
    ],
  },
  faqs: [
    { q: 'What is brand strategy vs brand identity?', a: 'Brand strategy is the thinking \u2014 your positioning, purpose, messaging, and audience definition. Brand identity is the visual and verbal expression of that strategy \u2014 your logo, colors, typography, and tone of voice. Strategy always comes first; identity should express it.' },
    { q: 'How long does brand strategy take?', a: 'Our brand strategy sprint takes 6 weeks from kickoff to final deliverable. This includes discovery, research, a positioning workshop, two rounds of review, and final documentation. Larger organizations with complex architectures may require 8\u201310 weeks.' },
    { q: 'Who needs to be involved from our team?', a: 'We typically work with your CEO or founder, marketing lead, and one or two senior team members who understand your customers deeply. We facilitate the process \u2014 you provide the expertise about your business, customers, and ambitions.' },
    { q: 'How do you measure brand strategy success?', a: 'Brand strategy success is measured over time through brand tracking studies (awareness, consideration, preference), NPS scores, share of voice in earned media, employee engagement surveys, and commercial metrics like win rates and average deal value.' },
    { q: 'Do you work with B2B or B2C brands?', a: 'Both. Our team has developed brand strategies for B2C consumer brands, SaaS companies, professional services firms, D2C e-commerce businesses, and enterprise B2B organizations. The strategic process adapts to your category and customer type.' },
  ],
  faqDescription: 'Everything you need to know about our brand strategy services.',
  ctaTitle: 'Ready to Define Your Brand?',
  ctaDescription: 'Let\'s build a brand strategy that positions you distinctly and drives lasting commercial growth.',
};

export default function BrandStrategyPage() {
  return <SubServicePageTemplate data={pageData} />;
}
