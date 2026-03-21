'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'AR & VR Development', href: '/services/ar-vr' },
    { label: 'VR Application Development' },
  ],
  hero: {
    badge: 'AR & VR DEVELOPMENT',
    title: 'VR Applications That',
    titleAccent: 'Transport Users',
    description: 'From Meta Quest standalone apps to high-fidelity PC VR simulations, we build immersive virtual reality experiences for enterprise and consumer markets.',
    service: 'VR Application Development',
    stats: [
      { value: '25+', label: 'VR Apps Delivered' },
      { value: 'Meta Quest & PC VR', label: 'Platform Coverage' },
      { value: '60fps', label: 'Guaranteed Performance' },
      { value: 'Enterprise & Consumer', label: 'Market Reach' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F97D}', title: 'Meta Quest Development (Unity/Unreal)', desc: 'Standalone VR apps for Meta Quest 2, 3, and Pro — optimized for the mobile GPU constraints of the platform while delivering immersive, hand-tracked experiences.' },
      { icon: '\u{1F4BB}', title: 'PC VR (SteamVR)', desc: 'High-fidelity PC VR experiences for Valve Index, HTC Vive, and Windows Mixed Reality headsets via SteamVR. Maximum visual quality with no hardware compromise.' },
      { icon: '\u{1F3ED}', title: 'VR Training Simulations', desc: 'Safe, scalable, and cost-effective VR training for high-risk industries — manufacturing, healthcare, aviation, and defence — with scenario branching and performance tracking.' },
      { icon: '\u{1F3AC}', title: '360\u00B0 Video & Virtual Tours', desc: 'Immersive 360\u00B0 video production and interactive virtual tours for real estate, hospitality, events, and cultural institutions. Browser and headset compatible.' },
      { icon: '\u{1F465}', title: 'VR Social Spaces', desc: 'Multi-user VR environments for events, collaboration, and community. Custom avatar systems, spatial audio, and real-time interaction for up to hundreds of concurrent users.' },
      { icon: '\u26A1', title: 'Performance Optimization for VR', desc: 'Profiling and optimization of existing VR projects to hit stable 72\u2013120fps targets. Draw call reduction, LOD systems, occlusion culling, and shader optimization.' },
    ],
  },
  portfolioCategory: 'ar-vr',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Concept & Storyboard', desc: 'We define the VR experience narrative, interaction model, and comfort guidelines. Storyboards and reference material align the team before any development begins.' },
      { num: '02', title: 'Environment Design', desc: '3D artists build optimized virtual environments — geometry, textures, lighting, and audio — designed for the target headset\'s rendering budget from the ground up.' },
      { num: '03', title: 'Interaction Build', desc: 'Hand tracking, controller input, locomotion systems, physics interactions, and UI in 3D space — all built to VR best practices for comfort and intuitiveness.' },
      { num: '04', title: 'Comfort Testing', desc: 'Systematic comfort testing with real users to eliminate motion sickness triggers. Frame rate is validated, locomotion is tuned, and the experience ships feeling polished and safe.' },
    ],
  },
  faqs: [
    {
      q: 'Which VR headset should I target?',
      a: 'It depends on your use case and budget. Meta Quest 3 offers the best standalone VR reach — no PC required, massive install base, and app store distribution. PC VR (SteamVR) delivers the highest visual fidelity for experiences where a high-end PC is available. For enterprise training, we often recommend Quest for its portability and affordability. We\'ll help you pick the right platform during discovery.',
    },
    {
      q: 'How do you prevent VR motion sickness?',
      a: 'We follow established VR comfort guidelines: maintaining a locked 72fps minimum (ideally 90\u2013120fps), avoiding artificial locomotion where possible, offering teleportation as an alternative, keeping the horizon stable, and never moving the camera independent of user input. Our comfort testing phase with real users catches and eliminates any remaining discomfort triggers before launch.',
    },
    {
      q: 'What is the ROI of VR training vs traditional training?',
      a: 'Studies consistently show VR training delivers 40\u201370% better knowledge retention compared to classroom or video-based training. It eliminates travel costs, scales infinitely without additional instructors, and allows safe practice of dangerous scenarios. Most enterprise VR training deployments achieve full ROI within 12\u201318 months through reduced training time, fewer incidents, and lower instructor costs.',
    },
    {
      q: 'What is the difference between standalone and PC-tethered VR?',
      a: 'Standalone VR (Meta Quest) runs entirely on hardware built into the headset — no PC needed. This makes it portable and accessible but limits graphical complexity. PC-tethered VR connects to a powerful desktop PC via USB or Wi-Fi, enabling cinema-quality rendering. For consumer apps, standalone is usually the right choice. For high-fidelity industrial or enterprise simulations, PC VR often delivers better results.',
    },
    {
      q: 'How do you distribute a VR app?',
      a: 'For Meta Quest, apps are distributed through the Meta Horizon Store (public) or App Lab (unlisted/enterprise). PC VR apps go on Steam, which has the largest PC VR audience. For enterprise, we configure MDM-based sideloading or private distribution so your organization can push apps to a fleet of headsets without a public storefront. We guide you through the certification and submission process.',
    },
  ],
  faqDescription: 'Everything you need to know about our VR application development services.',
  ctaTitle: 'Ready to Enter Virtual Reality?',
  ctaDescription: 'Let\'s discuss your VR project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
