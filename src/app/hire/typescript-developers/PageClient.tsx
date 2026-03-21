'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function TypeScriptDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="TypeScript"
      breadcrumbLabel="TypeScript Developers"
      tagline="TypeScript & Full-Stack"
      description="Pre-vetted senior TypeScript developers ready to join your team in 48 hours. Build type-safe frontends, robust Node.js backends, and scalable full-stack applications with engineers who write strict, production-grade TypeScript."
      stats={[
        { value: '45+', label: 'TypeScript Engineers' },
        { value: '6+ Yrs', label: 'Avg Experience' },
        { value: '130+', label: 'TypeScript Projects' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '✅', title: 'Strict-Mode TypeScript Experts', desc: 'Every developer passes our 5-stage vetting: type-system architecture challenge, generics & advanced patterns, live pair programming, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '🌍', title: 'Timezone-Aligned', desc: 'Our TypeScript developers work in your timezone. US, European, Middle Eastern, or APAC business hours — your developer is online when you need them.' },
        { icon: '🔒', title: 'NDA From Day 1', desc: 'Your IP is protected before any code discussion. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '⚡', title: 'Full-Stack TypeScript', desc: 'Our developers handle everything from React and Next.js frontends to NestJS and Node.js backends, sharing types end-to-end for zero runtime surprises.' },
        { icon: '💰', title: '40-60% Cost Savings', desc: 'Get senior TypeScript developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '🔄', title: 'Type-Safe by Default', desc: 'Our developers enforce strict typing across the entire stack — Zod for runtime validation, tRPC for end-to-end type safety, and Prisma for type-safe database access.' },
      ]}
      profiles={[
        { id: 'T1', role: 'Senior React + TypeScript Engineer', experience: '8 years experience', skills: ['TypeScript', 'React', 'Next.js', 'Zod', 'TanStack Query', 'Tailwind CSS'], projects: '30+ type-safe React applications shipped', availability: 'Available Now' },
        { id: 'T2', role: 'NestJS Backend Architect', experience: '9 years experience', skills: ['TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'GraphQL', 'Docker'], projects: 'Architected NestJS microservices handling 10M+ requests/day', availability: 'Available Now' },
        { id: 'T3', role: 'Full-Stack TypeScript Developer', experience: '7 years experience', skills: ['TypeScript', 'Next.js', 'tRPC', 'Prisma', 'Node.js', 'AWS'], projects: '25+ end-to-end TypeScript SaaS products', availability: 'Available in 1 week' },
        { id: 'T4', role: 'TypeScript Platform Engineer', experience: '10 years experience', skills: ['TypeScript', 'Node.js', 'Fastify', 'Turborepo', 'Vitest', 'GitHub Actions'], projects: 'Built shared monorepo tooling adopted by 50+ engineers', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Frontend Frameworks', chips: ['React', 'Next.js', 'Remix', 'Astro', 'SvelteKit', 'Solid.js'] },
        { label: 'Backend & APIs', chips: ['NestJS', 'Node.js', 'Fastify', 'Express', 'tRPC', 'GraphQL'] },
        { label: 'Type Safety & Validation', chips: ['Zod', 'Prisma', 'TypeORM', 'class-validator', 'io-ts', 'Valibot'] },
        { label: 'Databases', chips: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'PlanetScale', 'Supabase'] },
        { label: 'Tooling & Build', chips: ['Vite', 'Turborepo', 'esbuild', 'tsup', 'Vitest', 'Jest'] },
        { label: 'Cloud & DevOps', chips: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a TypeScript developer from Codazz?', a: 'You can interview pre-matched TypeScript developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours.' },
        { q: 'What TypeScript frameworks do your developers specialise in?', a: 'Our TypeScript developers are proficient in React, Next.js, NestJS, Node.js, tRPC, and Zod. Most have experience across both frontend and backend TypeScript development.' },
        { q: 'Do your TypeScript developers use strict mode and advanced type patterns?', a: 'Yes. Our developers write production TypeScript with strict mode enabled, leveraging generics, conditional types, mapped types, utility types, and discriminated unions.' },
        { q: 'What is the pricing for hiring a TypeScript developer?', a: 'TypeScript developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees or long-term lock-in.' },
        { q: 'Can I hire TypeScript developers for both frontend and backend projects?', a: 'Absolutely. Our talent pool includes dedicated frontend engineers (React, Next.js), backend engineers (NestJS, Node.js, Fastify), and full-stack developers comfortable across the entire TypeScript ecosystem.' },
        { q: 'Can I scale the team up or down?', a: 'Yes. Our engagement models are fully flexible. Add more TypeScript developers as your project grows or scale down after milestones. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
