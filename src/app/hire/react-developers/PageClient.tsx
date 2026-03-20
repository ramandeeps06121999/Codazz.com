'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function ReactDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="React"
      breadcrumbLabel="React Developers"
      tagline="React & Next.js"
      description="Pre-vetted senior React and Next.js developers ready to join your team in 48 hours. Build high-performance web applications, SPAs, and complex front-end architectures with engineers who have shipped 100+ production React apps."
      stats={[
        { value: '60+', label: 'React Engineers' },
        { value: '6+ Yrs', label: 'Avg Experience' },
        { value: '100+', label: 'React Apps Built' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted React Experts', desc: 'Every React developer passes our 5-stage vetting: React architecture challenge, system design, live pair programming with hooks/context, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our React developers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your developer is online when you are.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before a single line of code is discussed. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Production-Ready Code', desc: 'Our React developers write clean, tested, well-documented code with proper TypeScript types, error boundaries, and performance optimization built in.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior React developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Seamless Integration', desc: 'Your React developer integrates into your existing tools — GitHub, Jira, Slack, Linear, Figma. They follow your coding standards and PR workflow from day one.' },
      ]}
      profiles={[
        { id: 'R1', role: 'Senior React/Next.js Developer', experience: '8 years experience', skills: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'TailwindCSS', 'Jest'], projects: '40+ production React apps shipped', availability: 'Available Now' },
        { id: 'R2', role: 'Full-Stack React Developer', experience: '6 years experience', skills: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'AWS', 'Docker'], projects: '25+ SaaS platforms built', availability: 'Available Now' },
        { id: 'R3', role: 'React Frontend Architect', experience: '10 years experience', skills: ['React', 'Next.js', 'Micro-frontends', 'Webpack', 'Performance', 'A11y'], projects: 'Led teams of 8-15 engineers', availability: 'Available in 1 week' },
        { id: 'R4', role: 'React Native + Web Developer', experience: '7 years experience', skills: ['React', 'React Native', 'Expo', 'TypeScript', 'Firebase', 'Zustand'], projects: '15+ cross-platform apps', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Core React', chips: ['React 18+', 'Next.js 14+', 'TypeScript', 'Server Components', 'Suspense', 'Concurrent Mode'] },
        { label: 'State Management', chips: ['Redux Toolkit', 'Zustand', 'Jotai', 'React Query', 'SWR', 'Context API'] },
        { label: 'Styling & UI', chips: ['TailwindCSS', 'Styled Components', 'CSS Modules', 'Radix UI', 'Framer Motion', 'Storybook'] },
        { label: 'Testing & Quality', chips: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'ESLint', 'Prettier'] },
        { label: 'Build & Deploy', chips: ['Vercel', 'AWS Amplify', 'Docker', 'GitHub Actions', 'Webpack', 'Vite'] },
        { label: 'Backend Integration', chips: ['REST APIs', 'GraphQL', 'tRPC', 'WebSockets', 'Prisma', 'Supabase'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a React developer from Codazz?', a: 'You can interview pre-matched React developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new developer can start building immediately.' },
        { q: 'What is the experience level of your React developers?', a: 'Our React developers have a minimum of 4 years of professional experience and have passed a rigorous 5-stage vetting process. Most have 6-10+ years building production React applications.' },
        { q: 'Can your React developers work in my timezone?', a: 'Yes. We have React developers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your developer will be online during your working hours.' },
        { q: 'What is the pricing for hiring a React developer?', a: 'Our React developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Do you sign NDAs before starting?', a: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your intellectual property and business ideas are fully protected from the first conversation.' },
        { q: 'Can I scale the team up or down?', a: 'Yes. Our engagement models are fully flexible. Add more React developers as your project grows or scale down when a milestone is complete. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
