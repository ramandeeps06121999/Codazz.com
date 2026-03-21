'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Streaming & Entertainment' },
  ],
  hero: {
    badge: 'OTT STREAMING & ENTERTAINMENT',
    title: 'We Engineer Streaming Platforms That',
    titleAccent: 'Never Buffer.',
    description: 'Video-on-demand, live streaming, music platforms and content management systems with adaptive bitrate, global CDN delivery and AI-powered recommendations.',
    service: 'Streaming & Entertainment Development',
    stats: [
      { value: '10M+', label: 'Streams Delivered' },
      { value: '4K HDR', label: 'Adaptive Quality' },
      { value: '< 2s', label: 'Start Time' },
      { value: '99.99%', label: 'Uptime' },
    ],
  },
  awards: [
    'Top Streaming Developer 2024',
    'Video Engineering Experts',
    'Multi-DRM Certified',
    'Global CDN Partners',
    'Adaptive Bitrate Pioneers',
    'AI Recommendation Engine Specialists',
  ],
  whySection: {
    title: 'Why Streaming Companies Choose Codazz',
    cards: [
      { icon: '\u{1F310}', title: 'Global Content Delivery', desc: 'Delivering high-quality video to millions of concurrent viewers across geographies with minimal latency, buffering and startup time.' },
      { icon: '\u{1F512}', title: 'Content Protection & DRM', desc: 'Protecting premium content from piracy with multi-DRM encryption, watermarking, geo-restrictions and secure token-based access controls.' },
      { icon: '\u{1F4C9}', title: 'Subscriber Churn', desc: 'Retaining subscribers in a hyper-competitive market through personalized recommendations, engagement features and optimized content discovery.' },
      { icon: '\u{1F4CA}', title: 'Monetization Complexity', desc: 'Balancing SVOD, AVOD, TVOD, freemium tiers, pay-per-view and bundle deals while maximizing revenue per subscriber.' },
    ],
    whoNeedsTitle: 'Who Needs Streaming Platform Development?',
    whoNeedsItems: [
      { icon: '\u{1F3AC}', title: 'OTT Platforms', desc: 'Netflix-style video-on-demand platforms with content libraries, user profiles, and personalized discovery.' },
      { icon: '\u{1F3B5}', title: 'Music Streaming Services', desc: 'Audio streaming platforms with playlist curation, offline playback, and social sharing.' },
      { icon: '\u{1F4E1}', title: 'Live Event Broadcasters', desc: 'Live sports, concerts, and event streaming with ultra-low latency and interactive features.' },
      { icon: '\u{1F4FA}', title: 'Media Companies', desc: 'Content publishers transitioning to direct-to-consumer streaming with their own branded platforms.' },
      { icon: '\u{1F3AE}', title: 'Gaming & Esports', desc: 'Game streaming, esports broadcasting, and interactive viewer engagement platforms.' },
    ],
    metricsTitle: 'Streaming Development by the Numbers',
    metrics: [
      { metric: '10M+', label: 'Monthly Streams', desc: 'Across client platforms' },
      { metric: '< 2s', label: 'Start Time', desc: 'Buffer-free playback' },
      { metric: '40%', label: 'Churn Reduction', desc: 'With AI recommendations' },
      { metric: '99.99%', label: 'Uptime', desc: 'Zero outages during peaks' },
    ],
    closingText: 'Whether you are building an OTT video platform, a live streaming service, or a music streaming app, Codazz brings the video engineering expertise, CDN optimization, and AI-powered discovery to build streaming experiences that viewers love and subscribers stick with. We measure success in watch time, not just downloads.',
  },
  subServices: [
    { title: 'VOD & Live Streaming Platform', tag: 'VOD', desc: 'Complete OTT platform with adaptive bitrate streaming, multi-device playback, offline downloads, watch history and resume-where-you-left-off across all screens.', chips: ['ABR', 'Offline', 'Multi-Device', 'Resume'], href: '/contact', icon: '\u{1F3AC}' },
    { title: 'AI Recommendation Engine', tag: 'AI', desc: 'Machine learning-powered content discovery with collaborative filtering, viewing pattern analysis, trending algorithms and personalized homepages that reduce churn.', chips: ['ML Models', 'Collaborative', 'Trending', 'Personalized'], href: '/contact', icon: '\u{1F916}' },
    { title: 'Content Management System', tag: 'CMS', desc: 'Headless CMS for managing video assets, metadata, categories, schedules, geo-restrictions and editorial curation with bulk upload and automated transcoding pipelines.', chips: ['Metadata', 'Transcoding', 'Scheduling', 'Geo-Rules'], href: '/contact', icon: '\u{1F4CB}' },
    { title: 'Subscription & Monetization', tag: 'Revenue', desc: 'Flexible monetization supporting SVOD, AVOD, TVOD, freemium tiers, pay-per-view, bundle deals and in-app purchases with analytics on revenue per subscriber.', chips: ['SVOD', 'AVOD', 'TVOD', 'PPV'], href: '/contact', icon: '\u{1F4B3}' },
    { title: 'Live Streaming & Events', tag: 'Live', desc: 'Ultra-low latency live streaming for sports, concerts and events with real-time chat, polls, reactions, DVR functionality and instant replay capabilities.', chips: ['Low Latency', 'Chat', 'DVR', 'Replay'], href: '/contact', icon: '\u{1F4E1}' },
    { title: 'DRM & Content Security', tag: 'Security', desc: 'Multi-DRM integration (Widevine, FairPlay, PlayReady) with forensic watermarking, token authentication, device management and anti-piracy monitoring.', chips: ['Widevine', 'FairPlay', 'PlayReady', 'Watermark'], href: '/contact', icon: '\u{1F6E1}\u{FE0F}' },
  ],
  servicesHeading: {
    label: 'Our Streaming Solutions',
    title: 'End-to-End Streaming',
    titleDim: 'Platform Infrastructure.',
    description: 'From content ingest to global playback, we build every layer of streaming technology with adaptive quality, content protection, and viewer engagement at the core.',
  },
  benefits: {
    label: 'Why Codazz for Streaming',
    title: 'Built for Binge-Worthy',
    titleDim: 'Experiences.',
    items: [
      { icon: '\u{1F3A5}', title: 'Video Engineering Experts', desc: 'Our team has deep expertise in video transcoding, adaptive bitrate streaming, CDN optimization and DRM implementation for premium content delivery.' },
      { icon: '\u{1F4F1}', title: 'Multi-Platform Specialists', desc: 'We ship native apps across iOS, Android, Smart TVs, streaming devices and web with consistent UX and synced user state across every screen.' },
      { icon: '\u{1F4C8}', title: 'Retention-Focused', desc: 'Every feature is designed to keep viewers engaged from AI recommendations to personalized notifications. We reduce churn and grow lifetime value.' },
      { icon: '\u{1F512}', title: 'Content Protection', desc: 'Multi-DRM encryption, forensic watermarking, and anti-piracy monitoring that protects your premium content investment.' },
      { icon: '\u{26A1}', title: 'Sub-2s Start Time', desc: 'Optimized video delivery pipeline with global CDN, edge caching, and adaptive bitrate for buffer-free playback worldwide.' },
      { icon: '\u{1F4B0}', title: 'Monetization Expertise', desc: 'SVOD, AVOD, TVOD, and hybrid models with A/B tested paywalls and subscription optimization.' },
    ],
  },
  clientLogos: [
    'Netflix', 'Disney+', 'Hulu', 'HBO Max', 'Amazon Prime', 'Apple TV+',
    'Spotify', 'YouTube', 'Peacock', 'Paramount+', 'Crunchyroll', 'Mux',
  ],
  bigStats: [
    { value: '10M+', label: 'Monthly Streams', desc: 'Across platforms' },
    { value: '< 2s', label: 'Start Time', desc: 'Buffer-free playback' },
    { value: '40%', label: 'Churn Reduction', desc: 'AI recommendations' },
    { value: '99.99%', label: 'Uptime', desc: 'Zero peak outages' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F3AC}', title: 'Adaptive Bitrate', desc: 'HLS & DASH streaming' },
      { icon: '\u{1F916}', title: 'AI Discovery', desc: 'ML recommendation engine' },
      { icon: '\u{1F512}', title: 'Multi-DRM', desc: 'Widevine, FairPlay, PlayReady' },
      { icon: '\u{1F4FA}', title: 'Multi-Platform', desc: 'TV, mobile, web apps' },
      { icon: '\u{1F310}', title: 'Global CDN', desc: 'Edge-cached delivery' },
    ],
    row2: [
      { icon: '\u{1F4E1}', title: 'Live Streaming', desc: 'Ultra-low latency events' },
      { icon: '\u{1F4CA}', title: 'Viewer Analytics', desc: 'Engagement heatmaps' },
      { icon: '\u{1F4CB}', title: 'Headless CMS', desc: 'Content management' },
      { icon: '\u{1F4B3}', title: 'Monetization', desc: 'SVOD, AVOD, TVOD' },
      { icon: '\u{2601}\u{FE0F}', title: 'Auto-Scaling', desc: 'Peak traffic infrastructure' },
    ],
  },
  techStack: [
    { category: 'Video', techs: ['FFmpeg', 'HLS', 'DASH', 'WebRTC'] },
    { category: 'Backend', techs: ['Node.js', 'Go', 'Python', 'GraphQL'] },
    { category: 'CDN & Cloud', techs: ['CloudFront', 'Akamai', 'AWS MediaServices', 'GCP'] },
    { category: 'AI & Data', techs: ['TensorFlow', 'Spark', 'Elasticsearch', 'Redis'] },
    { category: 'DRM', techs: ['Widevine', 'FairPlay', 'PlayReady', 'BuyDRM'] },
    { category: 'Mobile & TV', techs: ['React Native', 'Swift', 'Kotlin', 'Roku SDK'] },
  ],
  faqs: [
    { q: 'Can you build a streaming platform like Netflix?', a: 'Yes. We build complete OTT platforms with video transcoding pipelines, adaptive bitrate streaming, content management systems, personalized recommendation engines, multi-device apps, and subscription management. Our architecture handles millions of concurrent streams with sub-2-second start times.' },
    { q: 'How do you handle content protection and DRM?', a: 'We implement multi-DRM solutions integrating Widevine (Android/Chrome), FairPlay (Apple), and PlayReady (Microsoft) for comprehensive device coverage. This includes forensic watermarking, token-based authentication, device management, and real-time anti-piracy monitoring.' },
    { q: 'Do you build live streaming platforms?', a: 'Absolutely. We build ultra-low latency live streaming infrastructure for sports, concerts, and events with real-time chat, polls, reactions, DVR functionality, instant replay, and multi-camera switching. Our systems handle massive concurrent viewer spikes.' },
    { q: 'How do you reduce subscriber churn?', a: 'We implement AI-powered recommendation engines with collaborative filtering, viewing pattern analysis, and personalized content discovery. Combined with engagement notifications, A/B tested thumbnails, and retention analytics, our platforms typically achieve 30-40% churn reduction.' },
    { q: 'What monetization models do you support?', a: 'We build flexible monetization supporting SVOD (subscriptions), AVOD (ad-supported), TVOD (transactional/rental), freemium tiers, pay-per-view events, and bundle deals. Each model includes analytics on revenue per subscriber and conversion optimization.' },
    { q: 'Can you build apps for Smart TVs and streaming devices?', a: 'Yes. We develop native apps for iOS, Android, Apple TV, Roku, Fire TV, Samsung Tizen, LG webOS, Android TV, and web browsers. All apps share synced watch progress, user profiles, and consistent UX across every screen size.' },
  ],
  faqDescription: 'Common questions about our streaming and entertainment platform development services, video engineering, and content delivery capabilities.',
  relatedBlogs: [
    { title: 'Building Streaming Platforms That Never Buffer', desc: 'Architecture for adaptive bitrate delivery at global scale.', href: '/blog' },
    { title: 'Multi-DRM Content Protection: The Complete Guide', desc: 'How to protect premium video content across all devices.', href: '/blog' },
    { title: 'AI Recommendations That Reduce Streaming Churn', desc: 'ML-powered content discovery that keeps subscribers engaged.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Native streaming apps for iOS, Android, tablets and Smart TVs with offline downloads.', href: '/services/mobile-app-development' },
    { name: 'Web Development', desc: 'Responsive web players with adaptive streaming, DRM and content discovery interfaces.', href: '/services/web-development' },
    { name: 'AI & Machine Learning', desc: 'Recommendation engines, content tagging, churn prediction and personalization algorithms.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'Global CDN infrastructure with auto-scaling, transcoding pipelines and 99.99% uptime.', href: '/services/cloud-devops' },
  ],
  industries: [
    { name: 'Dating & Social', href: '/industries/dating-social' },
    { name: 'Fantasy Sports', href: '/industries/fantasy-sports' },
    { name: 'Fitness & Wellness', href: '/industries/fitness-wellness' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Food Delivery', href: '/industries/food-delivery' },
    { name: 'On-Demand', href: '/industries/on-demand' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
  ],
};

export default function StreamingEntertainmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
