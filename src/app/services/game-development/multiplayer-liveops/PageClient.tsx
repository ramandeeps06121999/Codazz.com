'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Game Development', href: '/services/game-development' },
    { label: 'Multiplayer & LiveOps Development' },
  ],
  hero: {
    badge: 'GAME DEVELOPMENT',
    title: 'Multiplayer & LiveOps Development at',
    titleAccent: 'Scale',
    description: 'We build real-time multiplayer infrastructure and the LiveOps systems that keep players engaged and spending — from netcode architecture through seasonal events and anti-cheat.',
    service: 'Multiplayer & LiveOps Development',
    stats: [
      { value: '20+', label: 'Multiplayer Games Shipped' },
      { value: '10,000', label: 'Concurrent Players Supported' },
      { value: '99.9%', label: 'Server Uptime' },
      { value: '3x LTV', label: 'LiveOps Uplift Achieved' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F310}', title: 'Real-Time Multiplayer (Photon/Mirror/NGO)', desc: 'Low-latency multiplayer architecture built with Photon Fusion, Mirror, or Unity Netcode for GameObjects — server-authoritative or client-predicted, depending on your game genre.' },
      { icon: '\u{1F5A5}\uFE0F', title: 'Dedicated Game Servers', desc: 'Managed dedicated server infrastructure on AWS, Google Cloud, or Multiplay — auto-scaling, regional deployment, and sub-50ms latency for players worldwide.' },
      { icon: '\u{1F3AF}', title: 'Matchmaking Systems', desc: 'Skill-based, region-based, and party matchmaking systems — reducing queue times and improving match quality from day one with ELO, TrueSkill, and custom rating algorithms.' },
      { icon: '\u{1F3AA}', title: 'LiveOps & Seasonal Events', desc: 'Full LiveOps infrastructure — seasonal battle passes, limited-time events, daily/weekly challenges, and flash sales — the content engine that drives long-term player engagement and revenue.' },
      { icon: '\u{1F4CA}', title: 'Player Progression & Economy Design', desc: 'XP systems, virtual currency economies, item rarity frameworks, and reward calendars designed to create compelling long-term goals without pay-to-win imbalance.' },
      { icon: '\u{1F6E1}\uFE0F', title: 'Anti-Cheat Integration', desc: 'Server-side validation, rate limiting, input sanity checking, and integration with Easy Anti-Cheat or GameGuard — protecting your game economy and competitive integrity.' },
    ],
  },
  portfolioCategory: 'game-development',
  process: {
    label: 'Our Process',
    title: 'Our Multiplayer & LiveOps Development Process',
    steps: [
      { num: '01', title: 'Network Architecture', desc: 'We design the full network topology — authoritative server model, state synchronisation strategy, tick rate, packet structure, and latency compensation — before a line of code is written.' },
      { num: '02', title: 'Server Setup', desc: 'Cloud infrastructure provisioned with auto-scaling, regional failover, monitoring (Prometheus/Grafana), and deployment pipelines. Load tests validate capacity before launch.' },
      { num: '03', title: 'Gameplay Netcode', desc: 'Client-side prediction, lag compensation, and interpolation implemented for smooth, cheat-resistant gameplay across variable network conditions. Rigorously tested at simulated high latency.' },
      { num: '04', title: 'LiveOps System Build', desc: 'CMS-driven event system, push notification integration, remote config, A/B testing framework, and analytics dashboard — everything needed to run your game as a live service post-launch.' },
    ],
  },
  faqs: [
    {
      q: 'Photon Fusion vs Mirror vs Unity Netcode \u2014 which should I use?',
      a: 'Photon Fusion is best for real-time competitive games (shooters, fighting games) — it has excellent client-side prediction, rollback netcode, and managed cloud relay infrastructure included. Mirror is a mature, open-source option well-suited to MMO-style or turn-based games where you want full control over server infrastructure. Unity Netcode for GameObjects (NGO) is Unity\'s first-party solution — simpler to integrate with Unity services but less feature-complete than Photon for competitive real-time. We recommend based on your genre, latency requirements, and budget.',
    },
    {
      q: 'How do you architect a game for 10,000+ concurrent players?',
      a: 'Horizontal scaling is the key. Individual game servers handle small groups (typically 2\u2013100 players per room/match). A lobby and matchmaking tier routes players to available server instances. Auto-scaling adds server capacity as load increases. Regional deployment minimises latency. A global load balancer and service mesh handle traffic distribution. We stress-test with simulated load before launch to validate the architecture holds under realistic peak traffic, not just average load.',
    },
    {
      q: 'What is LiveOps and why does it matter for my game?',
      a: 'LiveOps (Live Operations) is the ongoing practice of updating and evolving your game post-launch to keep players engaged and monetizing. It includes seasonal content (battle passes, themed cosmetics), time-limited events that create FOMO and re-engagement, daily missions that create login habits, and limited-time sales. Games with active LiveOps consistently show 2\u20135x higher LTV than games shipped and left static. It\'s the difference between a game and a live service.',
    },
    {
      q: 'How do you prevent cheating in multiplayer games?',
      a: 'Cheating prevention is layered. Server authority is the foundation — the server validates all game-critical actions and clients cannot dictate outcomes. On top of this we add input sanity checking (detecting impossible actions), rate limiting, anomaly detection in analytics, and client-side anti-cheat software (EAC, BattleEye) for PC titles. For competitive games, replay systems enable manual review and ban appeals. No solution is perfect, but the combination of server authority and active monitoring catches and deters the vast majority of cheaters.',
    },
    {
      q: 'Should I self-host game servers or use a cloud gaming service?',
      a: 'Self-managed cloud (AWS, GCP, or Azure with game server frameworks like Agones) gives you maximum control, predictable costs at scale, and full flexibility — but requires DevOps expertise. Managed platforms like Unity Gaming Services, Photon, or Multiplay abstract the infrastructure and reduce setup time significantly — at higher per-CCU cost. For games under 1,000 CCU, managed services almost always win on total cost and speed. For games with 10,000+ CCU, self-managed infrastructure typically becomes more economical. We help you model both options for your expected scale.',
    },
  ],
  faqDescription: 'Everything you need to know about our multiplayer and LiveOps development services.',
  ctaTitle: 'Ready to Go Live at Scale?',
  ctaDescription: 'Let\'s discuss your multiplayer project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
