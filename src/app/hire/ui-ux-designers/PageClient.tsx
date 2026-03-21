'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function UIUXDesignersPageClient() {
  return (
    <HireDeveloperPage
      technology="UI/UX"
      breadcrumbLabel="UI/UX Designers"
      tagline="Product & Interaction Design"
      description="Pre-vetted senior UI/UX designers ready to join your team in 48 hours. Create beautiful, conversion-optimized interfaces, design systems, and user experiences with designers who have shipped products used by millions."
      stats={[
        { value: '40+', label: 'UI/UX Designers' },
        { value: '6+ Yrs', label: 'Avg Experience' },
        { value: '200+', label: 'Products Designed' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted Design Experts', desc: 'Every UI/UX designer passes our 5-stage vetting: portfolio deep-dive, design challenge with real constraints, live whiteboard session, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our UI/UX designers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your designer is online when you are.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your product concepts and business ideas are protected before any discussion begins. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Data-Driven Design', desc: 'Our designers make decisions backed by user research, analytics, and usability testing — not assumptions. They optimize for conversion, retention, and user satisfaction.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior UI/UX designers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Dev-Ready Handoff', desc: 'Our designers deliver pixel-perfect Figma files with auto-layout, design tokens, component variants, and detailed specs that make developer handoff seamless and reduce back-and-forth.' },
      ]}
      profiles={[
        { id: 'U1', role: 'Senior Product Designer', experience: '8 years experience', skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping', 'A/B Testing', 'Accessibility'], projects: '60+ digital products shipped', availability: 'Available Now' },
        { id: 'U2', role: 'UX Design Lead', experience: '10 years experience', skills: ['UX Strategy', 'Figma', 'Journey Mapping', 'Usability Testing', 'Information Architecture', 'Workshop Facilitation'], projects: 'Led design for products with 5M+ users', availability: 'Available Now' },
        { id: 'U3', role: 'UI Designer / Visual', experience: '6 years experience', skills: ['Figma', 'Illustration', 'Motion Design', 'Brand Identity', 'Responsive Design', 'Icon Design'], projects: '40+ brand and product design projects', availability: 'Available in 1 week' },
        { id: 'U4', role: 'Design System Specialist', experience: '7 years experience', skills: ['Figma', 'Design Tokens', 'Component Libraries', 'Documentation', 'Storybook', 'Atomic Design'], projects: 'Built design systems used by 50+ developers', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Design Tools', chips: ['Figma', 'Sketch', 'Adobe XD', 'Framer', 'InVision', 'Zeplin'] },
        { label: 'Prototyping', chips: ['Figma Prototyping', 'ProtoPie', 'Principle', 'Framer Motion', 'After Effects', 'Lottie'] },
        { label: 'UX Research', chips: ['User Interviews', 'Usability Testing', 'A/B Testing', 'Heatmaps', 'Surveys', 'Persona Development'] },
        { label: 'Design Systems', chips: ['Atomic Design', 'Design Tokens', 'Component Libraries', 'Auto Layout', 'Variants', 'Documentation'] },
        { label: 'Collaboration', chips: ['FigJam', 'Miro', 'Notion', 'Jira', 'Slack', 'Loom'] },
        { label: 'Specializations', chips: ['Mobile UX', 'SaaS Dashboards', 'E-commerce UX', 'Accessibility (WCAG)', 'Data Visualization', 'Responsive Design'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a UI/UX designer from Codazz?', a: 'You can review portfolios and interview pre-matched UI/UX designers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new designer can start creating immediately.' },
        { q: 'What is the experience level of your UI/UX designers?', a: 'Our UI/UX designers have a minimum of 4 years of professional experience designing digital products. Most have 6-10+ years of experience with Figma, user research, and design systems.' },
        { q: 'Can your UI/UX designers conduct user research?', a: 'Yes. Our designers conduct user interviews, usability testing, competitive analysis, persona development, and journey mapping to inform design decisions with real user data.' },
        { q: 'What is the pricing for hiring a UI/UX designer?', a: 'Our UI/UX designers start at $25/hr for mid-level and $35-49/hr for senior and lead designers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Can your designers create design systems?', a: 'Yes. Our senior designers build scalable design systems in Figma with reusable components, design tokens, auto-layout patterns, and comprehensive documentation for seamless developer handoff.' },
        { q: 'Do you sign NDAs before starting?', a: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your product concepts and business ideas are fully protected from the first conversation.' },
      ]}
      startingRate="$25"
    />
  );
}
