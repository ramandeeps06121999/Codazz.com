'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Game Development', href: '/services/game-development' },
    { label: 'Unreal Engine Development' },
  ],
  hero: {
    badge: 'GAME DEVELOPMENT',
    title: 'Unreal Engine 5 with',
    titleAccent: 'AAA Visuals',
    description: 'We build cinematic-quality games, simulations, and visualisations in Unreal Engine 5 — leveraging Lumen, Nanite, and Chaos to deliver experiences that redefine what real-time looks like.',
    service: 'Unreal Engine Development',
    stats: [
      { value: '30+', label: 'Unreal Projects Delivered' },
      { value: 'AAA-Quality', label: 'Visual Standard' },
      { value: 'Lumen & Nanite', label: 'Expert Implementation' },
      { value: 'PC/Console/VR', label: 'Platform Coverage' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F3AF}', title: 'Unreal Engine 5 Development', desc: 'Full-cycle UE5 game development — project setup, gameplay programming in Blueprint and C++, level design, content integration, and platform optimization for PC, console, and VR.' },
      { icon: '\u{1F4A1}', title: 'Lumen Global Illumination', desc: 'Dynamic, fully indirect lighting using Lumen — no baking, no lightmaps, fully reactive to time-of-day and dynamic objects. Cinematic lighting quality in real-time gameplay.' },
      { icon: '\u{1F3D4}\uFE0F', title: 'Nanite Virtualised Geometry', desc: 'Film-quality geometry rendered in real-time with Nanite — billions of polygons, no manual LOD authoring. Perfect for open-world environments and photorealistic architectural visualisation.' },
      { icon: '\u2699\uFE0F', title: 'Blueprint & C++ Development', desc: 'We work fluently in both Blueprint visual scripting and C++ — using each where it makes sense. C++ for performance-critical systems; Blueprint for rapid designer-controlled gameplay logic.' },
      { icon: '\u{1F4A5}', title: 'Chaos Physics & Destruction', desc: 'Physically accurate destruction, cloth, hair, and rigid body simulation using Unreal\'s Chaos Physics system — creating dynamic, reactive worlds that feel alive.' },
      { icon: '\u{1F3AC}', title: 'Unreal for Architecture & Virtual Production', desc: 'Architectural visualisation, real-time product renders, and virtual production stages using UE5 — photorealistic environments delivered faster and cheaper than traditional rendering.' },
    ],
  },
  portfolioCategory: 'game-development',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Project Scoping', desc: 'We define the technical scope — target platforms, visual quality tier, performance budgets, and required Unreal systems. Platform targets and hardware constraints are set before design begins.' },
      { num: '02', title: 'Level Design', desc: 'World building with World Partition, PCG (Procedural Content Generation), and Nanite-ready asset pipeline. Environments are designed for both visual quality and performance from the start.' },
      { num: '03', title: 'Gameplay Programming', desc: 'Gameplay Ability System, physics, AI behaviour trees, animation blueprints, and multiplayer replication — built by engineers who understand Unreal\'s architecture at a deep level.' },
      { num: '04', title: 'Optimization & Shipping', desc: 'Unreal Insights profiling, PSO caching, shader compilation optimization, and platform-specific packaging. We handle console certification submissions and Steam Deck verification.' },
    ],
  },
  faqs: [
    {
      q: 'Unreal vs Unity \u2014 which engine is right for my game?',
      a: 'Unreal 5 is the superior choice for PC and console games demanding AAA graphical fidelity — Lumen, Nanite, and Chaos physics are genuinely class-leading. It\'s also excellent for virtual production and architectural visualisation. Unity wins for mobile games, cross-platform projects (including console), 2D games, AR/VR, and projects where indie-scale budgets need to stretch further. The right engine depends on your target platform, visual goals, team\'s existing skills, and budget.',
    },
    {
      q: 'Is Unreal Engine 5 suitable for mobile games?',
      a: 'Technically yes, but practically it requires significant trade-offs. Lumen and Nanite do not work on mobile — you\'re using the older rendering path. UE5\'s base overhead is higher than Unity\'s URP, which means more aggressive optimization work and a higher minimum device spec. For most mobile games, Unity remains the better choice. UE5 on mobile makes sense for high-end action games where a restricted device range is acceptable and premium visual quality is the goal.',
    },
    {
      q: 'What is Lumen and how does it work?',
      a: 'Lumen is Unreal Engine 5\'s dynamic global illumination and reflections system. Unlike traditional baked lighting, Lumen calculates indirect light in real-time — light bouncing off walls, colour bleeding from surfaces, and fully dynamic reflections — without any precomputation. It works through a combination of screen-space and world-space ray tracing with an adaptive acceleration structure. Hardware ray tracing (RTX) enhances quality further. The result is cinematic lighting that reacts dynamically to time-of-day, explosions, and any scene change.',
    },
    {
      q: 'What is the difference between Blueprint and C++ in Unreal?',
      a: 'Blueprint is Unreal\'s visual scripting system — drag-and-drop node graphs that compile to C++. It\'s accessible to designers and non-programmers, great for rapid prototyping, and sufficient for most gameplay logic. C++ offers full engine access, better performance for CPU-intensive systems, and is required for certain low-level integrations. We use both: C++ for core systems, physics, multiplayer, and hot-path logic; Blueprint for designer-authored gameplay, UI logic, and rapid iteration on game feel.',
    },
    {
      q: 'How do Unreal Engine royalty fees work?',
      a: 'Unreal Engine is free to use. Epic Games charges a 5% royalty on gross revenue after your product earns $1 million USD in lifetime revenue. This applies to games. Non-game applications (architecture, film, training simulators) are royalty-free under standard licensing. Custom enterprise licensing is also available. For most indie and mid-scale projects the royalty kicks in only after genuine commercial success — it\'s a fair model. We help you structure your accounting to track the threshold accurately.',
    },
  ],
  faqDescription: 'Everything you need to know about our Unreal Engine development services.',
  ctaTitle: 'Ready to Build with Unreal 5?',
  ctaDescription: 'Let\'s discuss your Unreal Engine project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
