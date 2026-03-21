'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function VueDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="Vue.js"
      breadcrumbLabel="Vue.js Developers"
      tagline="Vue 3 & Nuxt.js"
      description="Pre-vetted senior Vue.js developers ready to join your team in 48 hours. Build performant frontends, SSR applications, and enterprise Vue 3 projects with engineers who know the Composition API inside and out."
      stats={[
        { value: '40+', label: 'Vue.js Engineers' },
        { value: '6+ Yrs', label: 'Avg Experience' },
        { value: '120+', label: 'Vue Projects' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '✅', title: 'Vetted Vue.js Experts', desc: 'Every Vue developer passes our 5-stage vetting: component architecture challenge, reactivity system deep-dive, live pair programming, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '🌍', title: 'Timezone-Aligned', desc: 'Our Vue.js developers work in your timezone. US, European, Middle Eastern, or APAC business hours — your developer is online when you need them.' },
        { icon: '🔒', title: 'NDA From Day 1', desc: 'Your IP is protected before any code discussion. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '⚡', title: 'Vue 3 Composition API First', desc: 'Our developers build with Vue 3 Composition API and script setup by default, delivering highly maintainable, tree-shakeable, and testable component architectures.' },
        { icon: '💰', title: '40-60% Cost Savings', desc: 'Get senior Vue.js developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '🔄', title: 'Nuxt 3 & SSR Ready', desc: 'Our Vue developers have deep Nuxt 3 expertise — SSR, SSG, ISR, server routes, and Nuxt modules — for building SEO-optimised, production-grade web applications.' },
      ]}
      profiles={[
        { id: 'V1', role: 'Senior Vue 3 Developer', experience: '8 years experience', skills: ['Vue 3', 'Pinia', 'TypeScript', 'Vite', 'Vitest', 'Tailwind CSS'], projects: '30+ Vue 3 enterprise applications shipped', availability: 'Available Now' },
        { id: 'V2', role: 'Nuxt 3 Full-Stack Engineer', experience: '7 years experience', skills: ['Nuxt 3', 'Vue 3', 'Nitro', 'Prisma', 'PostgreSQL', 'Docker'], projects: 'Built Nuxt 3 platforms serving 500k+ monthly users', availability: 'Available Now' },
        { id: 'V3', role: 'Vue Enterprise UI Developer', experience: '9 years experience', skills: ['Vue 3', 'Vuetify 3', 'PrimeVue', 'Pinia', 'GraphQL', 'Cypress'], projects: 'Led Vue migration for Fortune 1000 enterprise dashboard', availability: 'Available in 1 week' },
        { id: 'V4', role: 'Vue + Node.js Full-Stack Developer', experience: '6 years experience', skills: ['Vue 3', 'Node.js', 'Express', 'MongoDB', 'Pinia', 'CI/CD'], projects: '20+ end-to-end SaaS products built with Vue', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Vue Ecosystem', chips: ['Vue 3', 'Vue Router 4', 'Pinia', 'Vite', 'VueUse', 'Vue Test Utils'] },
        { label: 'SSR & Meta-Frameworks', chips: ['Nuxt 3', 'Nuxt Content', 'Nuxt Modules', 'Nitro', 'Nuxt UI', 'Astro'] },
        { label: 'UI Component Libraries', chips: ['Vuetify 3', 'PrimeVue', 'Quasar', 'Element Plus', 'Naive UI', 'Headless UI'] },
        { label: 'Databases & Backend', chips: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Firebase'] },
        { label: 'Testing & Quality', chips: ['Vitest', 'Cypress', 'Playwright', 'Vue Test Utils', 'ESLint', 'Prettier'] },
        { label: 'Cloud & DevOps', chips: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Netlify', 'Kubernetes'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a Vue.js developer from Codazz?', a: 'You can interview pre-matched Vue.js developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours.' },
        { q: 'Do your Vue developers work with Vue 3 and the Composition API?', a: 'Yes. All of our Vue.js developers are proficient in Vue 3 with the Composition API, script setup syntax, and the modern Vue ecosystem including Pinia and Vite.' },
        { q: 'Can your Vue developers build server-side rendered apps with Nuxt 3?', a: 'Absolutely. Our Vue developers have extensive Nuxt 3 experience including SSR, SSG, ISR, file-based routing, server routes, and Nuxt modules for production-grade apps.' },
        { q: 'What is the pricing for hiring a Vue.js developer?', a: 'Vue.js developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees or long-term lock-in.' },
        { q: 'Can your Vue developers integrate with REST APIs and GraphQL backends?', a: 'Yes. Our Vue developers are experienced with Axios, Fetch, Apollo Client, and URQL for consuming REST APIs and GraphQL endpoints from Vue and Nuxt applications.' },
        { q: 'Can I scale the team up or down?', a: 'Yes. Our engagement models are fully flexible. Add more Vue.js developers as your project grows or scale down after milestones. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
