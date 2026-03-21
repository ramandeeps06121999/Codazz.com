'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Product Design', href: '/services/product-design' },
    { label: 'Wireframing & UX Design' },
  ],
  hero: {
    badge: 'PRODUCT DESIGN',
    title: 'Wireframing That',
    titleAccent: 'Aligns Teams',
    description: 'From first sketch to handoff-ready specs, we wireframe every screen and flow so your team builds the right product — fast.',
    service: 'Wireframing & UX Design',
    stats: [
      { value: '200+', label: 'Products Wireframed' },
      { value: '90%', label: 'Stakeholder Approval Rate' },
      { value: 'Figma', label: 'First Workflow' },
      { value: '1wk', label: 'To First Wireframes' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F4D0}', title: 'Low-Fidelity Wireframes', desc: 'Fast, focused lo-fi sketches that communicate layout and hierarchy without visual distraction — perfect for early alignment.' },
      { icon: '\u{1F5C2}\uFE0F', title: 'User Flow Mapping', desc: 'Visual maps of every path a user can take through your product, ensuring no dead ends and logical task completion.' },
      { icon: '\u{1F4F1}', title: 'Responsive Layout Planning', desc: 'Wireframes across desktop, tablet, and mobile breakpoints so responsive behaviour is considered from day one.' },
      { icon: '\u{1F4DA}', title: 'Interaction Pattern Library', desc: 'A documented set of reusable interaction patterns that ensures consistency across every screen and user journey.' },
      { icon: '\u{1F91D}', title: 'Stakeholder Review Sessions', desc: 'Structured review workshops that gather consolidated feedback efficiently, preventing scope drift and misalignment.' },
      { icon: '\u{1F4E6}', title: 'Handoff-Ready Wireframe Specs', desc: 'Annotated wireframes with spacing, component notes, and interaction specs ready for visual designers and developers.' },
    ],
  },
  portfolioCategory: 'product-design',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Brief & User Flows', desc: 'We start with your goals, user journeys, and content inventory to map every screen and flow before drawing a single frame.' },
      { num: '02', title: 'Low-Fi Wireframes', desc: 'Rapid low-fidelity wireframes are produced for key screens, focusing on structure, hierarchy, and navigation logic.' },
      { num: '03', title: 'Stakeholder Review', desc: 'We facilitate a focused review session, gather consolidated feedback, and document all approved changes.' },
      { num: '04', title: 'Refined Specs', desc: 'Final wireframes are annotated with specs, component notes, and interaction guidance — fully ready for design or development.' },
    ],
  },
  faqs: [
    { q: 'Lo-fi vs hi-fi wireframes — which do I need?', a: 'Lo-fi wireframes are grayscale layouts focused on structure and content hierarchy — ideal for early alignment and fast iteration. Hi-fi wireframes include realistic typography, spacing, and sometimes color — useful when moving into visual design or developer handoff. Most projects benefit from lo-fi first, then hi-fi after stakeholder sign-off.' },
    { q: 'How many rounds of revisions are included?', a: 'Our standard wireframing engagement includes two rounds of structured revisions. Additional revision rounds can be added as needed. We recommend consolidating feedback through a single stakeholder review to keep iterations efficient and the timeline on track.' },
    { q: 'Do you use Figma or other tools?', a: 'We work Figma-first. All wireframes, user flow diagrams, and handoff specs are delivered as organised Figma files. If your team uses other tools like Sketch, Miro, or Balsamiq, we can accommodate — just let us know at kickoff.' },
    { q: 'Can wireframes be tested with users?', a: 'Yes — even lo-fi wireframes can be linked into clickable prototypes for lightweight usability testing. This is highly recommended before investing in full visual design, as it catches navigation issues and usability problems at the cheapest possible stage.' },
    { q: 'What files do I receive at the end?', a: 'You receive a fully organised Figma file containing all wireframes, annotated specs, user flow diagrams, and a component inventory. Exports as PDF and PNG are also provided for stakeholder presentations. You own all delivered files outright.' },
  ],
  faqDescription: 'Everything you need to know about our wireframing and UX design services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: "Let's discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.",
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
