'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'AR & VR' },
  ],

  hero: {
    badge: 'AR & VR Development',
    title: 'We Build Immersive',
    titleAccent: 'XR Experiences',
    description:
      'Augmented reality, virtual reality and mixed reality applications for mobile, headset and web — engineered for real-world impact across every platform.',
    service: 'AR & VR Development',
    stats: [
      { value: '60+', label: 'XR Apps Launched' },
      { value: 'Meta', label: 'Quest Partner' },
      { value: 'WebXR', label: 'Certified' },
      { value: '4.8', label: 'User Rating', suffix: '★' },
    ],
  },

  awards: [
    'Meta Quest Development Partner',
    'Apple Vision Pro Ready',
    'WebXR Certified Studio',
    'Unity Verified Solutions Partner',
    'Unreal Engine Authorized',
    'AWE Best Enterprise XR 2025',
  ],

  whySection: {
    title: 'Why Invest in AR & VR Development?',
    cards: [
      {
        icon: '🌐',
        title: 'The Spatial Computing Era',
        desc: 'Apple Vision Pro, Meta Quest 3, and WebXR are making immersive experiences mainstream. Businesses that adopt XR now gain a decisive competitive advantage in engagement and conversion.',
      },
      {
        icon: '🧠',
        title: '10x User Engagement',
        desc: 'XR experiences generate 10x the engagement of traditional 2D equivalents. Users spend longer, retain more information, and convert at dramatically higher rates.',
      },
      {
        icon: '🏭',
        title: 'Enterprise Training Revolution',
        desc: 'VR training reduces errors by 40%, increases retention by 85%, and cuts training time in half. Industries from manufacturing to healthcare are transforming their training programs.',
      },
      {
        icon: '🛍️',
        title: 'AR Commerce Drives Revenue',
        desc: 'AR product try-on increases conversion by 3x and reduces returns by 25%. From furniture placement to virtual fitting rooms, AR commerce is the new standard.',
      },
      {
        icon: '📱',
        title: 'No App Download Required',
        desc: 'WebXR and mobile AR work directly in the browser or camera app. Remove friction and reach users instantly without app store barriers.',
      },
      {
        icon: '🔮',
        title: 'Future-Proof Technology',
        desc: 'We build on open standards (WebXR, OpenXR) and major platforms (ARKit, ARCore, Unity) ensuring your investment stays relevant as the ecosystem evolves.',
      },
    ],
    whoNeedsTitle: 'Who Needs AR & VR Development?',
    whoNeedsItems: [
      {
        icon: '🏠',
        title: 'Real Estate & Architecture',
        desc: 'Virtual property tours, architectural visualization, and interior design previews that let buyers walk through spaces before they are built.',
      },
      {
        icon: '🏥',
        title: 'Healthcare & Medical Training',
        desc: 'Surgical simulations, anatomy education, physical therapy programs, and patient rehabilitation applications powered by immersive XR.',
      },
      {
        icon: '🛍️',
        title: 'Retail & E-Commerce',
        desc: 'Virtual try-on for apparel and accessories, 3D product configurators, AR catalogs, and in-store AR navigation that drive conversions.',
      },
      {
        icon: '🏭',
        title: 'Manufacturing & Industrial',
        desc: 'Digital twins, step-by-step assembly training, predictive maintenance guides, and remote expert assistance via AR overlays.',
      },
      {
        icon: '🎓',
        title: 'Education & Training',
        desc: 'Immersive classrooms, virtual science labs, historical recreations, and corporate training simulations with measurable learning outcomes.',
      },
    ],
    metricsTitle: 'XR Impact by the Numbers',
    metrics: [
      { metric: '10x', label: 'User Engagement', desc: 'vs. standard 2D content' },
      { metric: '85%', label: 'Training Retention', desc: 'VR vs. manual training' },
      { metric: '3x', label: 'Commerce Conversion', desc: 'AR try-on vs. static images' },
      { metric: '-25%', label: 'Product Returns', desc: 'With AR visualization' },
    ],
    closingText:
      'The XR market is projected to reach $397 billion by 2028. Whether you are building immersive training simulations, AR commerce experiences, or spatial computing applications for Apple Vision Pro, the window to establish your XR presence is now. At Codazz, we have shipped 60+ XR applications across mobile AR, VR headsets, and web — and we bring the same engineering rigor to every immersive project.',
  },

  subServices: [
    {
      title: 'Mobile AR Development',
      tag: 'iOS & Android',
      desc: 'ARKit and ARCore experiences for iOS and Android — product visualization, navigation overlays, face filters and interactive AR campaigns.',
      chips: ['ARKit', 'ARCore', 'Product Viz', 'Face Filters'],
      href: '/services/ar-vr/mobile-ar',
      icon: '📱',
    },
    {
      title: 'VR Applications',
      tag: 'Headset Experiences',
      desc: 'Meta Quest, PCVR and standalone headset applications for training, simulation, entertainment and enterprise use cases.',
      chips: ['Meta Quest', 'PCVR', 'Training Sims', 'Enterprise VR'],
      href: '/services/ar-vr/vr-applications',
      icon: '🥽',
    },
    {
      title: 'WebXR Experiences',
      tag: 'Browser-Based',
      desc: 'Browser-based AR and VR that works without an app download — accessible on any device with a standards-compliant browser.',
      chips: ['WebXR', 'Three.js', 'No Download', 'Cross-Device'],
      href: '/services/ar-vr/webxr',
      icon: '🌐',
    },
    {
      title: 'Spatial Computing',
      tag: 'Apple Vision Pro',
      desc: 'Apple Vision Pro applications and spatial interfaces that blend digital content seamlessly with the physical world.',
      chips: ['visionOS', 'RealityKit', 'Spatial UI', 'Hand Tracking'],
      href: '/services/ar-vr/spatial-computing',
      icon: '🔮',
    },
    {
      title: 'Industrial AR',
      tag: 'Enterprise',
      desc: 'Enterprise AR for manufacturing, maintenance and field service — step-by-step overlay instructions, remote assistance and quality inspection.',
      chips: ['Remote Assist', 'Digital Twins', 'QA Inspection', 'Step Overlays'],
      href: '/services/ar-vr/industrial-ar',
      icon: '🏭',
    },
    {
      title: 'AR Marketing Campaigns',
      tag: 'Brand Engagement',
      desc: 'Snapchat Lenses, Instagram filters, AR product try-ons and immersive ad campaigns that drive engagement and conversion.',
      chips: ['Snap Lenses', 'IG Filters', 'AR Try-On', 'Brand AR'],
      href: '/services/ar-vr/ar-marketing',
      icon: '📣',
    },
  ],

  servicesHeading: {
    label: 'What We Build',
    title: 'XR Development Services',
    titleDim: 'Every Platform. Every Use Case.',
    description:
      'From mobile AR filters to full enterprise VR simulations — every platform, every use case, every level of immersion.',
  },

  benefits: {
    label: 'Why Codazz XR',
    title: 'Immersive Experiences',
    titleDim: 'That Deliver Real ROI.',
    items: [
      {
        icon: '🎮',
        title: 'Full-Stack XR Development',
        desc: '3D modeling, environment design, interaction engineering, and platform deployment — all handled by our in-house team from concept to launch.',
      },
      {
        icon: '🔧',
        title: 'Cross-Platform Expertise',
        desc: 'We build for iOS, Android, Meta Quest, Apple Vision Pro, PCVR, and web browsers. One team, every platform.',
      },
      {
        icon: '🎨',
        title: 'In-House 3D Production',
        desc: 'Full 3D pipeline including modeling, texturing, rigging, animation, and optimization — no outsourced asset production.',
      },
      {
        icon: '⚡',
        title: 'Performance Engineering',
        desc: 'XR demands 90fps minimum. We optimize every polygon, shader, and draw call to deliver smooth experiences on target hardware.',
      },
      {
        icon: '📊',
        title: 'Analytics & Insights',
        desc: 'Built-in analytics for user behavior, gaze tracking, interaction heatmaps, and session metrics to continuously improve experiences.',
      },
      {
        icon: '🔒',
        title: 'Enterprise-Grade Security',
        desc: 'SOC 2 compliant, MDM-ready deployment, and enterprise SSO integration for corporate XR training and collaboration platforms.',
      },
    ],
  },

  clientLogos: [
    'Meta', 'Apple', 'Unity Technologies', 'Epic Games', 'Snap Inc.',
    'Walmart', 'IKEA', 'BMW', 'Johnson & Johnson', 'Siemens',
  ],

  bigStats: [
    { value: '60+', label: 'XR Apps Shipped', desc: 'Across every platform and use case' },
    { value: '10x', label: 'User Engagement', desc: 'vs. traditional 2D experiences' },
    { value: '85%', label: 'Training Retention', desc: 'Industrial VR training programs' },
    { value: '3x', label: 'Commerce Conversion', desc: 'AR product visualization lift' },
  ],

  advancedTech: {
    row1: [
      { icon: '🧠', title: 'AI-Powered 3D', desc: 'Neural radiance fields and AI mesh generation for rapid 3D asset creation' },
      { icon: '👋', title: 'Hand Tracking', desc: 'Controller-free interaction using computer vision hand and gesture recognition' },
      { icon: '👁️', title: 'Eye Tracking', desc: 'Foveated rendering and gaze-based interaction for natural immersive UX' },
      { icon: '🗣️', title: 'Spatial Audio', desc: '3D positional audio that creates realistic soundscapes tied to virtual environments' },
      { icon: '🌍', title: 'Cloud Anchors', desc: 'Persistent AR content anchored to real-world locations via cloud spatial mapping' },
      { icon: '📡', title: 'Multi-User Sync', desc: 'Real-time multiplayer XR with low-latency networking and state synchronization' },
    ],
    row2: [
      { icon: '🎭', title: 'Face Tracking', desc: 'Real-time facial expression mapping for avatars, filters, and social XR' },
      { icon: '🏗️', title: 'Digital Twins', desc: 'Real-time 3D replicas of physical assets synced with IoT sensor data' },
      { icon: '📐', title: 'LiDAR Scanning', desc: 'Room-scale 3D scanning for precise AR placement and spatial understanding' },
      { icon: '🎬', title: 'Volumetric Video', desc: 'Captured real-world 3D video for photorealistic immersive content' },
      { icon: '⚡', title: 'Edge Computing', desc: 'On-device ML inference for real-time object detection and scene understanding' },
      { icon: '🔗', title: 'Blockchain NFTs', desc: 'On-chain ownership of virtual assets, wearables, and XR collectibles' },
    ],
  },

  techStack: [
    { category: 'AR Platforms', techs: ['ARKit', 'ARCore', 'Vuforia', '8th Wall', 'WebXR'] },
    { category: 'VR Platforms', techs: ['Oculus SDK', 'SteamVR', 'OpenXR', 'Unity XR', 'visionOS'] },
    { category: '3D Engines', techs: ['Unity', 'Unreal Engine 5', 'Three.js', 'Babylon.js'] },
    { category: '3D Tools', techs: ['Blender', 'Maya', 'Substance Painter', 'Photogrammetry'] },
    { category: 'Audio', techs: ['FMOD', 'Wwise', 'Resonance Audio', 'Steam Audio'] },
    { category: 'Networking', techs: ['Photon', 'Mirror', 'Normcore', 'WebRTC'] },
  ],

  pricingGuide: {
    title: 'How Much Does AR & VR Development Cost?',
    description:
      'XR project costs depend heavily on platform complexity, 3D asset requirements, and interaction depth. Codazz offers fixed-price quotes with milestone-based delivery — no open-ended hourly billing.',
    tiers: [
      { icon: '💰', name: 'AR Filter / WebXR MVP', price: '$10,000 – $30,000', desc: 'Snapchat/Instagram AR filters, simple WebXR product viewers, or mobile AR proof-of-concept with basic 3D assets and single-platform deployment.', timeline: '⏱ 2–4 weeks' },
      { icon: '💰', name: 'Full AR/VR Application', price: '$40,000 – $150,000', desc: 'Complete mobile AR app, VR training simulation, or spatial computing experience with custom 3D assets, multi-scene interaction, and analytics integration.', timeline: '⏱ 8–16 weeks' },
      { icon: '💰', name: 'Enterprise XR Platform', price: '$150,000 – $500,000+', desc: 'Multi-user enterprise VR training, digital twin systems, or cross-platform XR suites with backend infrastructure, admin dashboards, and ongoing content pipelines.', timeline: '⏱ 4–8 months' },
    ],
  },

  selectionGuide: {
    title: 'How to Choose an AR & VR Development Company',
    description:
      'Choosing the right XR partner is critical — immersive development requires specialized skills most agencies simply do not have. Here is what to evaluate.',
    criteria: [
      { icon: '📋', title: 'Shipped XR Portfolio', desc: 'Look for live AR/VR apps on app stores or enterprise deployments with measurable ROI — not just demo reels or prototype videos.' },
      { icon: '👨‍💻', title: 'Senior XR Engineers', desc: '8+ years avg experience in Unity, Unreal Engine, ARKit/ARCore, and WebXR. Ask about their 3D pipeline and performance optimization process.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear milestones tied to playable builds, not just design documents and concept art.' },
      { icon: '🛡️', title: 'Post-Launch SLAs', desc: 'Platform SDK updates, 3D content pipelines, performance monitoring, and device compatibility maintenance after launch.' },
      { icon: '🔒', title: 'Enterprise Security', desc: 'SOC 2 compliance, MDM-ready deployment, and data encryption for corporate XR training and collaboration platforms.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and regular playable builds so you can experience progress firsthand.' },
    ],
  },

  faqs: [
    {
      q: 'What platforms do you build XR experiences for?',
      a: 'We develop for iOS (ARKit), Android (ARCore), Meta Quest 2/3/Pro, Apple Vision Pro, HTC Vive, Valve Index, web browsers (WebXR) and Snapchat/Instagram AR filters. Platform selection is guided by your audience and use case.',
    },
    {
      q: 'Do users need a headset to experience your AR products?',
      a: 'Not necessarily. Mobile AR works on any modern iPhone or Android device using the camera. WebXR works in a browser. VR and spatial computing experiences require headsets, but we can build progressive experiences that scale across device capabilities.',
    },
    {
      q: 'How long does an AR/VR project take to build?',
      a: 'Simple mobile AR filters take 2-4 weeks. Full mobile AR apps typically 8-16 weeks. Enterprise VR training simulations 12-20 weeks. Apple Vision Pro applications 10-18 weeks. Timeline depends heavily on 3D asset complexity and interaction depth.',
    },
    {
      q: 'Can you create the 3D assets and environments, or do we provide them?',
      a: 'We have an in-house 3D team that can create assets from scratch, work from reference images, or optimize assets you already have. We handle full 3D production including modeling, texturing, rigging and animation.',
    },
    {
      q: 'What is the ROI case for investing in AR/VR?',
      a: 'The strongest ROI cases are AR commerce (reduced returns, higher conversion), enterprise training (reduced training time and errors), and AR marketing (higher engagement and dwell time). We help you build the business case before scoping any project.',
    },
  ],
  faqDescription:
    'Get answers to the most common questions about our AR & VR development services, platforms, timelines, and investment.',

  relatedBlogs: [
    {
      title: 'The State of XR in 2026: What Every Business Needs to Know',
      desc: 'A comprehensive guide to the AR, VR, and spatial computing landscape and where the opportunities lie for enterprise adoption.',
      href: '/blog/state-of-xr-2026',
    },
    {
      title: 'AR Commerce: How Virtual Try-On is Transforming Retail',
      desc: 'Case studies and data on how AR product visualization drives conversion, reduces returns, and builds brand loyalty.',
      href: '/blog/ar-commerce-retail',
    },
    {
      title: 'Building for Apple Vision Pro: Lessons from Our First 10 Apps',
      desc: 'Technical insights and UX patterns from developing spatial computing applications for visionOS.',
      href: '/blog/apple-vision-pro-development',
    },
  ],

  relatedServices: [
    { name: 'Game Development', desc: 'Interactive games and gamified experiences across all platforms.', href: '/services/game-development' },
    { name: 'Mobile App Development', desc: 'Native and cross-platform mobile applications.', href: '/services/mobile-app-development' },
    { name: 'Product Design & UI/UX', desc: 'User-centered design for spatial and traditional interfaces.', href: '/services/product-design' },
    { name: 'AI & Machine Learning', desc: 'Computer vision and ML powering intelligent XR experiences.', href: '/services/ai-development' },
  ],

  industries: [
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Retail', href: '/industries/ecommerce' },
    { name: 'Education', href: '/industries/edtech' },
    { name: 'Manufacturing', href: '/industries/enterprise' },
    { name: 'Entertainment', href: '/industries/entertainment' },
  ],
};

export default function ARVRPage() {
  return <ServicePageTemplate data={pageData} />;
}
