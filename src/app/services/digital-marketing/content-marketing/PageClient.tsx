'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Content Marketing' },
  ],
  hero: {
    badge: 'DIGITAL MARKETING',
    title: 'Content Marketing That',
    titleAccent: 'Attracts & Converts',
    description: 'Strategic content marketing that builds your authority, drives organic traffic, and nurtures prospects through the funnel — from first click to loyal customer.',
    service: 'Content Marketing',
    stats: [
      { value: '500+', label: 'Content strategies executed' },
      { value: '400%', label: 'Avg blog traffic growth' },
      { value: '60+', label: 'Content types produced' },
      { value: 'SEO-first', label: 'Approach on every asset' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F5C2}\uFE0F', title: 'Content Strategy & Audit', desc: 'A full audit of your existing content, competitive gap analysis, and a prioritised content roadmap mapped to your buyer journey and SEO keyword targets.' },
      { icon: '\u270D\uFE0F', title: 'Blog & Long-Form Writing', desc: 'Expert-written blog posts, ultimate guides, and pillar content that establishes topical authority, attracts organic traffic, and earns backlinks naturally.' },
      { icon: '\u{1F3AC}', title: 'Video Scripts & Production', desc: 'Compelling scripts for explainer videos, YouTube content, social shorts, and webinars — plus full production coordination with our video team.' },
      { icon: '\u{1F4CA}', title: 'Infographic & Visual Content', desc: 'Data-driven infographics, comparison charts, and visual storytelling assets that communicate complex ideas instantly and earn social shares.' },
      { icon: '\u{1F4E7}', title: 'Email Newsletter Content', desc: 'Engaging email campaigns and newsletter content that nurtures your subscriber list, drives repeat traffic, and keeps your brand top of mind.' },
      { icon: '\u{1F4E1}', title: 'Content Distribution & Promotion', desc: 'Amplification strategies across organic social, email, paid promotion, and outreach to ensure your content reaches the audiences who matter most.' },
    ],
  },
  portfolioCategory: 'digital-marketing',
  process: {
    label: 'Our Process',
    title: 'Our Content Marketing Process',
    steps: [
      { num: '01', title: 'Content Audit', desc: 'We analyze your existing content library for performance, gaps, and cannibalisation, then benchmark against top-ranking competitors in your niche.' },
      { num: '02', title: 'Strategy & Calendar', desc: 'We develop a content strategy covering topics, formats, word counts, target keywords, and a publishing calendar aligned to your business goals.' },
      { num: '03', title: 'Production', desc: 'Our writers, designers, and video team produce content to a detailed brief — with your subject matter experts interviewed where needed for authentic expertise.' },
      { num: '04', title: 'Distribution & Measurement', desc: 'Published content is actively promoted and tracked — organic rankings, traffic, engagement, and lead generation attributed to each piece over time.' },
    ],
  },
  faqs: [
    { q: 'How is content marketing different from SEO?', a: 'SEO is the technical and strategic discipline of ranking in search engines. Content marketing is the creation of valuable assets that serve that strategy — and more. Great content marketing spans SEO, social, email, and thought leadership. They work best together under a unified strategy.' },
    { q: 'How long does content marketing take to work?', a: 'SEO-driven content typically takes 3\u20136 months to gain significant organic traction as Google indexes, evaluates, and ranks new content. Social and email content can drive traffic immediately. We set realistic timelines for each channel in your content strategy.' },
    { q: 'Who writes the content — do we need to provide information?', a: 'Our writers research your industry thoroughly and handle most content independently. For technical or specialist topics, we may conduct a 20\u201330 minute interview with your team to capture genuine expertise and proprietary insights that set your content apart.' },
    { q: 'How do you measure content ROI?', a: 'We track organic sessions, keyword rankings, time on page, social shares, backlinks earned, email open rates, and most importantly — leads and revenue attributed to content touchpoints via GA4 and your CRM.' },
    { q: 'How much content do we need per month?', a: 'It depends on your goals, competition, and budget. A minimum viable program typically includes 4 long-form blog posts per month. High-competition sectors often require 8\u201312 pieces per month across multiple formats to see meaningful results at pace.' },
  ],
  faqDescription: 'Everything you need to know about our content marketing services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: "Let's build a content strategy that grows your organic presence and drives real business results.",
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
