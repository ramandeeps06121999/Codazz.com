'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Game Development' },
  ],

  hero: {
    badge: 'Game Development Studio',
    title: 'We Build Games',
    titleAccent: 'Players Love',
    description:
      'Mobile games, PC/console titles, and web-based experiences — engineered for engagement, retention and monetization. 80+ games shipped, 50M+ downloads.',
    service: 'Game Development',
    stats: [
      { value: '80+', label: 'Games Shipped' },
      { value: '50M', label: 'Downloads', suffix: '+' },
      { value: '4.8', label: 'App Store Avg', suffix: '★' },
      { value: '15', label: 'Platforms Supported' },
    ],
  },

  awards: [
    'Unity Verified Solutions Partner',
    'Unreal Engine Authorized Developer',
    'Google Play Best of 2025 Nominee',
    'Apple Design Award Honoree',
    'Pocket Gamer Top Developer',
    'BAFTA Games Shortlisted',
  ],

  whySection: {
    title: 'Why Invest in Professional Game Development?',
    cards: [
      {
        icon: '🎮',
        title: 'The Gaming Market is Massive',
        desc: 'The global gaming market exceeds $200B annually. Mobile alone accounts for $90B+. Whether you are building a hyper-casual hit or an enterprise gamification platform, the opportunity is enormous.',
      },
      {
        icon: '🧠',
        title: 'Core Loop is Everything',
        desc: 'A great game starts with a great core loop. We design, prototype, and playtest your core mechanics before committing production resources — validating fun before scaling cost.',
      },
      {
        icon: '💰',
        title: 'Monetization by Design',
        desc: 'IAP economies, battle passes, rewarded ads, and subscription models are designed into the game from day one — not bolted on as afterthoughts that hurt retention.',
      },
      {
        icon: '📊',
        title: 'Data-Driven LiveOps',
        desc: 'Post-launch is where games really grow. We build event systems, A/B testing infrastructure, and analytics pipelines that keep your DAU and ARPU climbing.',
      },
      {
        icon: '🎯',
        title: 'Retention-First Design',
        desc: 'Day-1, Day-7, and Day-30 retention targets are set before production begins. Every feature, progression system, and reward loop is tuned for long-term player engagement.',
      },
      {
        icon: '🌍',
        title: 'Cross-Platform from Day One',
        desc: 'We architect for multi-platform deployment from the start — iOS, Android, PC, console, and web. One codebase where possible, native optimization where it matters.',
      },
    ],
    whoNeedsTitle: 'Who Needs Game Development Services?',
    whoNeedsItems: [
      {
        icon: '📱',
        title: 'Mobile Game Publishers',
        desc: 'Casual, mid-core, and hyper-casual titles built for user acquisition economics, strong retention metrics, and scalable monetization.',
      },
      {
        icon: '🏢',
        title: 'Enterprise & B2B Companies',
        desc: 'Gamification platforms for employee training, loyalty programs, customer engagement, and educational applications with game mechanics.',
      },
      {
        icon: '🎓',
        title: 'EdTech & Serious Games',
        desc: 'Educational games, language learning adventures, STEM experiences, and corporate training simulations with measurable learning outcomes.',
      },
      {
        icon: '🏥',
        title: 'Healthcare & Wellness',
        desc: 'Physical therapy games, cognitive training apps, mental wellness tools, and rehabilitation programs with clinical outcome tracking.',
      },
      {
        icon: '🎬',
        title: 'Entertainment Studios',
        desc: 'Console/PC games, VR titles, streaming interactive experiences, and cross-platform entertainment products for global audiences.',
      },
    ],
    metricsTitle: 'Game Development Results',
    metrics: [
      { metric: '50M+', label: 'Total Downloads', desc: 'Across shipped titles' },
      { metric: '45min', label: 'Avg Session Length', desc: 'Best mid-core titles' },
      { metric: '4.8★', label: 'App Store Rating', desc: 'Portfolio average' },
      { metric: '40%', label: 'D1 Retention', desc: 'Top-performing titles' },
    ],
    closingText:
      'Building a successful game requires far more than great graphics — it demands deep understanding of player psychology, monetization economics, and live operations infrastructure. At Codazz, we have shipped 80+ games with 50M+ combined downloads, and we bring the same data-driven, retention-obsessed approach to every project — whether it is a hyper-casual mobile hit or a full production console title.',
  },

  subServices: [
    {
      title: 'Mobile Game Development',
      tag: 'iOS & Android',
      desc: 'iOS and Android games from hyper-casual to mid-core — designed for high Day-1 retention, strong LTV and scalable UA economics.',
      chips: ['Unity', 'Unreal', 'iOS', 'Android', 'LiveOps'],
      href: '/services/game-development/mobile-games',
      icon: '📱',
    },
    {
      title: 'PC & Console Games',
      tag: 'Premium Titles',
      desc: 'Unity and Unreal Engine titles for Steam, PlayStation, Xbox and Nintendo Switch — AAA-quality at independent studio scale.',
      chips: ['Steam', 'PlayStation', 'Xbox', 'Switch', 'Unreal 5'],
      href: '/services/game-development/pc-console',
      icon: '🖥️',
    },
    {
      title: 'Web & HTML5 Games',
      tag: 'Instant Play',
      desc: 'Instant-play browser games for portals, ads and casual audiences — no download required, broad platform reach.',
      chips: ['HTML5', 'WebGL', 'Phaser', 'PlayCanvas'],
      href: '/services/game-development/web-games',
      icon: '🌐',
    },
    {
      title: 'Blockchain & Web3 Games',
      tag: 'Play-to-Earn',
      desc: 'Play-to-earn mechanics, NFT item ownership and on-chain progression built on EVM-compatible chains with seamless wallet integration.',
      chips: ['Ethereum', 'Polygon', 'NFTs', 'Wallet Integration'],
      href: '/services/game-development/blockchain-games',
      icon: '⛓️',
    },
    {
      title: 'Game UI/UX Design',
      tag: 'Player Experience',
      desc: 'Menus, HUD design, onboarding flows and in-game economy UI that reduce friction and maximize engagement at every session touchpoint.',
      chips: ['HUD Design', 'Onboarding', 'Economy UI', 'UX Testing'],
      href: '/services/game-development/game-ui-ux',
      icon: '🎨',
    },
    {
      title: 'LiveOps & Post-Launch',
      tag: 'Growth',
      desc: 'Post-launch content updates, seasonal events, battle passes and A/B-tested monetization systems that keep your DAU and ARPU climbing.',
      chips: ['Events', 'Battle Pass', 'A/B Testing', 'Analytics'],
      href: '/services/game-development/liveops',
      icon: '🔄',
    },
  ],

  servicesHeading: {
    label: 'What We Build',
    title: 'Game Development Services',
    titleDim: 'Every Genre. Every Platform.',
    description:
      'Every genre, every platform — built for retention, engagement and long-term monetization from hyper-casual to AAA.',
  },

  benefits: {
    label: 'Why Codazz Games',
    title: 'Games Engineered',
    titleDim: 'For Player Love & Revenue.',
    items: [
      {
        icon: '🎯',
        title: 'Core Loop Validation',
        desc: 'We prototype and playtest your core mechanics before committing production resources. Fun is validated before budget is spent.',
      },
      {
        icon: '💰',
        title: 'Monetization by Design',
        desc: 'IAP economies, ad placements, and battle pass systems designed from day one — maximizing LTV without hurting retention.',
      },
      {
        icon: '📊',
        title: 'Data-Driven LiveOps',
        desc: 'Event systems, A/B testing infrastructure, and analytics pipelines built into every game for continuous post-launch growth.',
      },
      {
        icon: '🎨',
        title: 'Full Art Pipeline',
        desc: '2D illustration, 3D modeling, animation, VFX, and audio production — all handled in-house by our dedicated game art team.',
      },
      {
        icon: '🌍',
        title: 'Multi-Platform Deploy',
        desc: 'iOS, Android, Steam, PlayStation, Xbox, Switch, and web. We architect for cross-platform from the start.',
      },
      {
        icon: '🔧',
        title: 'Battle-Tested Engines',
        desc: 'Deep expertise in Unity and Unreal Engine 5, plus Godot, Phaser, and custom engine modifications when projects demand it.',
      },
    ],
  },

  clientLogos: [
    'Nintendo', 'Sony Interactive', 'Epic Games', 'Supercell', 'Zynga',
    'King', 'Rovio', 'Gameloft', 'Kabam', 'Scopely',
  ],

  bigStats: [
    { value: '80+', label: 'Games Shipped', desc: 'Across every genre and platform' },
    { value: '50M+', label: 'Total Downloads', desc: 'Combined across all titles' },
    { value: '4.8★', label: 'App Store Average', desc: 'Portfolio-wide rating' },
    { value: '15', label: 'Platforms Supported', desc: 'Mobile, PC, console, web' },
  ],

  advancedTech: {
    row1: [
      { icon: '🧠', title: 'AI NPCs', desc: 'Machine learning-driven NPC behavior for dynamic, non-scripted gameplay encounters' },
      { icon: '🎮', title: 'Procedural Generation', desc: 'Algorithmic level and content generation for infinite replayability' },
      { icon: '🌐', title: 'Cloud Gaming', desc: 'Server-side rendering and streaming for instant play on any device' },
      { icon: '📡', title: 'Real-Time Multiplayer', desc: 'Netcode architecture with lag compensation and server authority' },
      { icon: '🎵', title: 'Adaptive Audio', desc: 'Dynamic soundscapes that react to gameplay state and player actions' },
      { icon: '💎', title: 'Ray Tracing', desc: 'Real-time ray-traced lighting, reflections, and global illumination' },
    ],
    row2: [
      { icon: '🔄', title: 'ECS Architecture', desc: 'Entity Component System for high-performance game logic at scale' },
      { icon: '📊', title: 'Analytics Pipeline', desc: 'Real-time event tracking, cohort analysis, and LTV prediction models' },
      { icon: '🎭', title: 'Motion Capture', desc: 'Performance capture for realistic character animation and cinematics' },
      { icon: '⚡', title: 'GPU Compute', desc: 'Compute shader particle systems and physics simulations on GPU' },
      { icon: '🛡️', title: 'Anti-Cheat', desc: 'Server-authoritative game logic with cheat detection and prevention' },
      { icon: '🔗', title: 'Blockchain Integration', desc: 'On-chain asset ownership, marketplace, and play-to-earn mechanics' },
    ],
  },

  techStack: [
    { category: 'Game Engines', techs: ['Unity', 'Unreal Engine 5', 'Godot', 'Cocos2d'] },
    { category: 'Mobile', techs: ['Swift (iOS)', 'Kotlin (Android)', 'Flutter', 'React Native'] },
    { category: 'Backend & Multiplayer', techs: ['PlayFab', 'Firebase', 'AWS GameLift', 'Photon Networking'] },
    { category: 'Web & HTML5', techs: ['Phaser', 'PlayCanvas', 'Pixi.js', 'Babylon.js'] },
    { category: 'Art & Audio', techs: ['Blender', 'Spine 2D', 'FMOD', 'Wwise'] },
    { category: 'DevOps', techs: ['Git LFS', 'Jenkins', 'Perforce', 'Unity Cloud Build'] },
  ],

  pricingGuide: {
    title: 'How Much Does Game Development Cost?',
    description:
      'Game development costs vary dramatically by genre, platform, art style, and feature depth. Codazz offers fixed-price quotes with milestone-based payments tied to playable builds.',
    tiers: [
      { icon: '💰', name: 'Hyper-Casual / HTML5', price: 'Starting at $22,000', desc: 'Simple-mechanic mobile or browser games with minimal art, core loop validation, ad monetization, and App Store/Google Play submission.', timeline: '⏱ 4–8 weeks' },
      { icon: '💰', name: 'Mid-Core Mobile Game', price: 'Starting at $75,000', desc: 'Feature-rich mobile game with custom art, IAP economy, battle pass, multiplayer, analytics pipeline, and full LiveOps infrastructure.', timeline: '⏱ 3–6 months' },
      { icon: '💰', name: 'PC / Console Title', price: 'Starting at $300,000', desc: 'Full production PC or console game with AAA-quality art, narrative, multiplayer netcode, anti-cheat, and multi-platform deployment on Steam, PlayStation, and Xbox.', timeline: '⏱ 8–18 months' },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a Game Development Studio',
    description:
      'Choosing the right game dev partner is critical — most games fail because of poor production management, not bad ideas. Here is what separates studios that ship from those that do not.',
    criteria: [
      { icon: '📋', title: 'Shipped Titles Portfolio', desc: 'Look for games live on app stores or Steam with real download numbers and player reviews — not just trailers and prototypes.' },
      { icon: '👨‍💻', title: 'Senior Game Engineers', desc: '8+ years avg experience in Unity/Unreal, with deep knowledge of ECS architecture, netcode, and platform-specific optimization.' },
      { icon: '💲', title: 'Fixed-Price Milestones', desc: 'No open-ended hourly billing. Payments tied to playable milestone builds — prototype, alpha, beta, gold master.' },
      { icon: '🛡️', title: 'Post-Launch LiveOps', desc: 'Content updates, event systems, A/B testing, and analytics-driven optimization to grow DAU and ARPU after launch.' },
      { icon: '🔒', title: 'Full Art Pipeline', desc: 'In-house 2D/3D art, animation, VFX, and audio production. No outsourced asset work that creates quality inconsistencies.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated producer, weekly playtests, sprint demos, and transparent burn-down reporting that keeps production on track.' },
    ],
  },

  faqs: [
    {
      q: 'What game engines do you work with?',
      a: 'Unity is our primary engine for mobile and cross-platform titles. Unreal Engine 5 for PC and console projects requiring photorealistic visuals. Phaser and PlayCanvas for HTML5. Godot for projects requiring open-source flexibility.',
    },
    {
      q: 'Can you build a game from concept, or only take over existing projects?',
      a: 'Both. We handle full game development from concept through launch, and we also take on rescue projects, port existing games to new platforms, or add features and live operations to shipped titles.',
    },
    {
      q: 'How do you approach mobile game monetization?',
      a: 'Monetization strategy is defined during concept — before a line of code is written. We design IAP economies, ad placement strategies and battle pass systems that maximize LTV without harming retention. We also run A/B tests post-launch to optimize.',
    },
    {
      q: 'Do you handle App Store and Google Play submission?',
      a: 'Yes. We manage all submission requirements including store listings, screenshots, trailers, metadata optimization, rating questionnaires and compliance with both Apple and Google policies.',
    },
    {
      q: 'What does a typical mobile game project cost?',
      a: 'Hyper-casual titles start at $22K. Mid-core mobile games start at $75K depending on feature depth and art style. We provide detailed estimates after a scoping session based on your game design document or brief.',
    },
  ],
  faqDescription:
    'Get answers to common questions about our game development process, engines, monetization strategy, and project costs.',

  relatedBlogs: [
    {
      title: 'The Art of Core Loop Design: Why Fun Comes First',
      desc: 'How we validate game mechanics before committing production resources, and why core loop testing saves time and money.',
      href: '/blog/core-loop-design',
    },
    {
      title: 'Mobile Game Monetization: IAP vs. Ads vs. Hybrid Models',
      desc: 'A data-driven comparison of monetization strategies and how to choose the right model for your game genre.',
      href: '/blog/mobile-game-monetization',
    },
    {
      title: 'LiveOps That Work: Keeping Players Engaged Post-Launch',
      desc: 'Battle passes, seasonal events, and A/B testing strategies that drive long-term retention and revenue growth.',
      href: '/blog/liveops-strategies',
    },
  ],

  relatedServices: [
    { name: 'AR & VR Development', desc: 'Immersive XR games and interactive experiences.', href: '/services/ar-vr' },
    { name: 'Mobile App Development', desc: 'Native iOS and Android application development.', href: '/services/mobile-app-development' },
    { name: 'Product Design & UI/UX', desc: 'Game UI/UX design and player experience optimization.', href: '/services/product-design' },
    { name: 'AI & Machine Learning', desc: 'AI-powered NPCs, procedural generation, and matchmaking.', href: '/services/ai-development' },
  ],

  industries: [
    { name: 'Mobile Gaming', href: '/industries/gaming' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Entertainment', href: '/industries/entertainment' },
    { name: 'FinTech', href: '/industries/fintech' },
  ],

  statsH2: { line1: 'Game Development Results', line2: 'That Speak for Themselves.' },
  advancedTechH2: { line1: 'Game Development Technologies', line2: 'Built Into Every Title.' },
  techStackH2: { line1: 'Game Development Stack.', line2: '30+ Engines & Tools.' },
  blogsH2: { line1: 'Game Development', line2: 'Insights & Guides.' },
};

export default function GameDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
