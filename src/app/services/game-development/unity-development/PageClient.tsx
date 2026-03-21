'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Game Development', href: '/services/game-development' },
    { label: 'Unity Game Development' },
  ],
  hero: {
    badge: 'GAME DEVELOPMENT',
    title: 'Expert',
    titleAccent: 'Unity Game Development',
    description: '80+ Unity projects across mobile, PC, and console. We bring deep C# expertise, clean architecture, and full-pipeline knowledge from prototype through platform certification.',
    service: 'Unity Game Development',
    stats: [
      { value: '80+', label: 'Unity Projects Delivered' },
      { value: 'C# Expertise', label: 'Deep Technical Skill' },
      { value: 'Cross-Platform', label: 'From 1 Codebase' },
      { value: 'Mobile/PC/Console', label: 'Platform Coverage' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F3AE}', title: 'Unity 3D & 2D Development', desc: 'Full-cycle Unity game development — architecture, systems programming, gameplay, UI, audio, and content integration across 3D and 2D project types.' },
      { icon: '\u2728', title: 'HDRP & URP Rendering Pipelines', desc: 'Expert implementation of Unity\'s High Definition and Universal Render Pipelines — custom shaders, VFX Graph, Shader Graph, and post-processing for visuals that stand out.' },
      { icon: '\u{1F310}', title: 'Unity Multiplayer (Netcode/NGO)', desc: 'Multiplayer architecture using Unity Netcode for GameObjects, Relay, and Lobby services — server-authoritative designs for cheat-resistant, low-latency online experiences.' },
      { icon: '\u2601\uFE0F', title: 'Unity Services Integration', desc: 'Full Unity Gaming Services stack — Analytics, Cloud Save, Authentication, Remote Config, Economy, and A/B Testing — for data-driven live game operations.' },
      { icon: '\u26A1', title: 'Asset Optimization & Profiling', desc: 'Deep profiling with Unity Profiler, Memory Profiler, and Frame Debugger — identifying and eliminating CPU/GPU bottlenecks for silky performance on all target devices.' },
      { icon: '\u{1F4E6}', title: 'Unity Addressables & Asset Management', desc: 'Addressable Asset System implementation for on-demand content loading, DLC management, and reduced initial build sizes — critical for mobile and live service games.' },
    ],
  },
  portfolioCategory: 'game-development',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Architecture Design', desc: 'We design the project architecture before writing code — scene structure, domain separation, data flow, and system dependencies — to avoid technical debt that kills teams mid-project.' },
      { num: '02', title: 'Core Systems', desc: 'Foundation systems first: input, state management, UI framework, audio, save/load, and platform abstraction layers. Solid foundations prevent costly rewrites later in production.' },
      { num: '03', title: 'Level / Feature Build', desc: 'Gameplay features, levels, and content are built in sprint cycles with playable builds every two weeks. Continuous integration ensures the game is always in a shippable state.' },
      { num: '04', title: 'QA & Optimization', desc: 'Structured QA across target platforms and devices. Performance profiling and optimization until frame rate targets are met — then final platform certification and submission.' },
    ],
  },
  faqs: [
    {
      q: 'Unity vs Unreal Engine \u2014 which should I choose?',
      a: 'Unity excels for mobile, 2D, casual/mid-core games, VR/AR, and cross-platform projects where a single codebase targeting many platforms is important. Unreal excels for PC/console projects demanding AAA graphical fidelity — Lumen, Nanite, and Chaos Physics are genuinely ahead of Unity in raw visual capability. If your primary target is mobile or you need broad platform reach without AAA graphics, Unity is almost always the right choice. If you\'re building a cinematic action game for high-end PC/console, Unreal deserves serious consideration.',
    },
    {
      q: 'Can Unity games be published on console?',
      a: 'Yes. Unity supports PlayStation, Xbox, Nintendo Switch, and other consoles through platform-specific Unity modules. Console development requires developer accounts with the respective platform holders (Sony, Microsoft, Nintendo), which have approval processes. We have experience with console certification processes and can guide your submission. Note that Unity\'s console platforms are licensed separately from the standard Unity subscription.',
    },
    {
      q: 'How do you optimize Unity for mobile?',
      a: 'Mobile optimization is multi-layered: we use URP (not HDRP) for mobile, set aggressive draw call budgets, compress textures with ASTC, strip unused Unity modules from the build, implement aggressive LOD systems, avoid dynamic lighting in favor of baked lighting, pool GameObjects instead of instantiating, and profile on real low-end devices — not just the simulator. We target the bottom 20th percentile of your expected device spread.',
    },
    {
      q: 'Unity HDRP vs URP vs Built-in Render Pipeline \u2014 which is right for my game?',
      a: 'Built-in is legacy — don\'t start new projects on it. URP (Universal Render Pipeline) is the right choice for mobile, casual, and mid-core games — highly optimized, widely supported, good visual quality. HDRP (High Definition Render Pipeline) is for PC/console projects targeting maximum visual fidelity — ray tracing, volumetric lighting, advanced materials. HDRP does not support mobile. We select and configure the pipeline for your project\'s platform and visual targets during architecture design.',
    },
    {
      q: 'Which version of Unity do you use?',
      a: 'We work with Unity 6 (LTS) for new projects — it includes the latest Multiplayer, DOTS, and rendering improvements with long-term support. For projects with existing codebases, we work in whatever version you\'re on and manage upgrade risk carefully. We avoid non-LTS releases for production projects. All projects receive a documented Unity version and package manifest so you\'re never locked to our environment.',
    },
  ],
  faqDescription: 'Everything you need to know about our Unity game development services.',
  ctaTitle: 'Ready to Build with Unity?',
  ctaDescription: 'Let\'s discuss your Unity project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
