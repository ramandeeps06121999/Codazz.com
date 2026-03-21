'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Branding & Identity', href: '/services/branding' },
    { label: 'Motion & Video Branding' },
  ],
  hero: {
    badge: 'BRANDING & IDENTITY',
    title: 'Motion That Makes Brands',
    titleAccent: 'Come Alive',
    description: 'Broadcast-quality motion branding \u2014 from logo animations and Lottie web assets to explainer videos and social motion templates \u2014 that gives your brand a dynamic visual presence across every screen.',
    service: 'Motion & Video Branding',
    stats: [
      { value: '500+', label: 'Motion assets created' },
      { value: '10M+', label: 'Video views generated' },
      { value: 'AE & Lottie', label: 'Expert team' },
      { value: 'Broadcast', label: 'Quality standard' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u2728', title: 'Logo Animation & Sting', desc: 'A signature animated logo sting that brings your brand to life \u2014 crafted in After Effects with multiple timing variants (3s, 5s, 10s) for different contexts from social to broadcast.' },
      { icon: '\u{1F39E}\uFE0F', title: 'Brand Motion Guidelines', desc: 'A motion design language system defining your brand\'s animation principles \u2014 easing curves, timing, transition styles, and motion personality that all animated assets must follow.' },
      { icon: '\u{1F4F1}', title: 'Social Media Motion Templates', desc: 'A library of editable motion templates for Instagram, TikTok, LinkedIn, and YouTube \u2014 Stories, Reels, feed posts, and ads \u2014 enabling your team to produce on-brand animated content at scale.' },
      { icon: '\u{1F3AC}', title: 'Explainer Video Production', desc: 'Script, storyboard, voiceover, and full motion graphics production for explainer videos that communicate complex products or services in under 90 seconds with visual clarity and brand consistency.' },
      { icon: '\u26A1', title: 'Lottie Animations for Web & App', desc: 'Lightweight, scalable Lottie JSON animations for web and mobile applications \u2014 micro-interactions, loading states, onboarding animations, and icon animations that enhance UX without performance cost.' },
      { icon: '\u{1F4E1}', title: 'Broadcast Graphics & Lower-Thirds', desc: 'Broadcast-quality animated graphics packages for live events, virtual conferences, and video productions \u2014 lower-thirds, transitions, title cards, and bug animations delivered in broadcast-ready formats.' },
    ],
  },
  portfolioCategory: 'branding',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Brief & Storyboard', desc: 'We develop a detailed creative brief and storyboard \u2014 mapping every scene, transition, and timing beat before any animation begins, ensuring full alignment on the visual direction.' },
      { num: '02', title: 'Style Development', desc: 'A motion styleframe is designed and approved \u2014 establishing the visual look, color palette, typography treatment, and animation mood before full production commences.' },
      { num: '03', title: 'Animation Production', desc: 'Our After Effects team animates the approved storyboard, with two rounds of revision included \u2014 refining timing, easing, and details until every frame is perfect.' },
      { num: '04', title: 'File Delivery', desc: 'Final files delivered in all required formats \u2014 MP4, MOV, GIF, WebM, Lottie JSON, and editable After Effects project files \u2014 with a clear file naming and usage guide.' },
    ],
  },
  faqs: [
    { q: 'What is a logo sting?', a: 'A logo sting (also called a logo reveal or logo animation) is a short animated sequence \u2014 typically 3\u201310 seconds \u2014 that animates your logo on screen. Used at the start or end of videos, in ads, and on brand intro cards, it adds a layer of polish and brand recognition that static logos cannot achieve.' },
    { q: 'Lottie vs GIF vs MP4 for web animations?', a: 'Lottie (JSON) is the superior choice for web and app animations \u2014 it is vector-based (scales perfectly), incredibly lightweight (often 10x smaller than GIF), and fully interactive/controllable via code. GIF has no alpha channel and poor quality. MP4 works well for video but requires autoplay considerations. We always recommend Lottie for UI animations.' },
    { q: 'How long does a brand video take to produce?', a: 'A 60\u201390 second explainer video typically takes 4\u20136 weeks from brief to delivery: 1 week for script and storyboard, 1 week for styleframes, 2\u20133 weeks for animation, and 1 week for revisions and final delivery. Logo stings and short motion assets are faster \u2014 typically 1\u20132 weeks.' },
    { q: 'Do you provide editable After Effects files?', a: 'Yes \u2014 all After Effects project files are included in our standard deliverable package. We structure projects cleanly with labelled compositions, organised layers, and clear notes so your in-house team or future agency can make updates without starting from scratch.' },
    { q: 'Can motion assets match our existing static brand?', a: 'Absolutely \u2014 and this is typically where we start. We review your existing brand guidelines, color system, typography, and static identity, then develop a motion language that feels like a natural extension of your visual identity rather than a departure from it.' },
  ],
  faqDescription: 'Everything you need to know about our motion and video branding services.',
  ctaTitle: 'Ready to Animate Your Brand?',
  ctaDescription: 'Let\'s bring your brand to life with motion design that captivates audiences across every screen.',
};

export default function MotionVideoBrandingPage() {
  return <SubServicePageTemplate data={pageData} />;
}
