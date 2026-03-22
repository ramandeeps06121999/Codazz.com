'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'AR & VR Development', href: '/services/ar-vr' },
    { label: 'WebXR Development' },
  ],
  hero: {
    badge: 'AR & VR DEVELOPMENT',
    title: 'WebXR Development That Runs',
    titleAccent: 'In Any Browser',
    description: 'We build browser-native AR and VR experiences using the WebXR API, Three.js, and A-Frame — zero app install required, maximum audience reach.',
    service: 'WebXR Development',
    stats: [
      { value: '20+', label: 'WebXR Experiences Built' },
      { value: 'Browser-Native', label: 'AR & VR Delivery' },
      { value: 'Zero', label: 'App Install Barrier' },
      { value: 'Three.js & A-Frame', label: 'Expert Team' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F310}', title: 'WebXR API Development', desc: 'Native WebXR Device API integration for immersive AR and VR sessions directly in the browser — no plugins, no app downloads, maximum reach.' },
      { icon: '\u{1F537}', title: 'Three.js & A-Frame Scenes', desc: 'High-performance 3D scenes built with Three.js for programmatic control or A-Frame for declarative HTML-like markup. Both optimized for immersive WebXR sessions.' },
      { icon: '\u{1F4F1}', title: 'Browser-Based AR', desc: 'AR overlays via WebXR AR Session — place 3D objects on real-world surfaces through the browser camera on supported Android devices and iOS via compatible apps.' },
      { icon: '\u{1F97D}', title: 'Immersive VR in Browser', desc: 'Full 6DOF VR experiences delivered through the browser for Meta Quest, PC VR headsets, and desktop preview modes — zero friction entry for users.' },
      { icon: '\u26A1', title: 'WebGL Performance Optimization', desc: 'Profiling and optimization of WebGL render pipelines — draw call batching, texture compression, level of detail, and shader optimization for smooth browser XR.' },
      { icon: '\u{1F52C}', title: 'Cross-Device WebXR Testing', desc: 'Systematic testing across Chrome Android, Meta Quest Browser, Safari (iOS WebXR polyfill), and desktop browsers to ensure consistent experience quality.' },
    ],
  },
  portfolioCategory: 'ar-vr',
  process: {
    label: 'Our Process',
    title: 'Our WebXR Development Process',
    steps: [
      { num: '01', title: 'Experience Design', desc: 'We define the interaction model, content hierarchy, and performance budget based on target devices. WebXR experiences are designed for zero-friction access from day one.' },
      { num: '02', title: '3D Scene Build', desc: 'Our 3D team constructs optimized WebGL scenes — geometry, materials, lighting, and audio — built for browser performance constraints rather than native app luxury.' },
      { num: '03', title: 'WebXR Integration', desc: 'WebXR Device API integration for AR hit-testing, VR session management, controller input, hand tracking, and DOM overlay for hybrid 2D/3D interfaces.' },
      { num: '04', title: 'Cross-Device Testing', desc: 'Live testing on Meta Quest Browser, Chrome Android, iOS polyfill, and desktop. We validate frame rates, interaction fidelity, and graceful degradation on unsupported devices.' },
    ],
  },
  faqs: [
    {
      q: 'What is WebXR and how is it different from native AR/VR?',
      a: 'WebXR is a browser API that enables immersive AR and VR experiences to run directly in a web browser — no app download required. Native AR/VR apps (ARKit, ARCore, Unity, Unreal) are installed from an app store and access platform APIs directly. WebXR trades some performance and device feature access for zero friction distribution. Users click a URL and they\'re in XR.',
    },
    {
      q: 'Which browsers support WebXR?',
      a: 'Chrome for Android and the Meta Quest Browser have the best WebXR AR and VR support. Firefox Reality (Quest) also supports WebXR. Safari on iOS does not natively support WebXR, but the WebXR Viewer app from Mozilla provides AR capabilities. Desktop Chrome and Edge support WebXR VR with connected headsets. We build with progressive enhancement so non-XR browsers receive a 3D preview fallback.',
    },
    {
      q: 'What are the performance limitations of WebXR?',
      a: 'WebXR runs inside a browser\'s JavaScript and WebGL sandbox, which means higher CPU overhead than native apps, limited access to platform-specific optimizations, and no direct GPU memory management. For most AR overlays and mid-complexity VR scenes these limits are acceptable. For highly complex simulations or AAA-quality visuals, native development is typically more appropriate. We\'ll advise which approach fits your requirements.',
    },
    {
      q: 'Can WebXR work on mobile phones?',
      a: 'Yes. WebXR AR is supported on Android devices running Chrome 81+, enabling real-world surface detection and 3D object placement through the browser camera. iOS support is more limited — native WebXR AR requires the Mozilla WebXR Viewer. WebXR VR (headset sessions) works on Meta Quest Browser and mobile VR viewers. We design experiences that degrade gracefully to 3D on unsupported mobile browsers.',
    },
    {
      q: 'Should I choose WebXR or a native app for my use case?',
      a: 'Choose WebXR when zero-friction distribution matters most — marketing campaigns, product configurators, event experiences, and demos where users won\'t install an app. Choose native AR/VR when you need maximum performance, access to platform-specific hardware (LiDAR, eye tracking, haptics), app store monetization, or offline capability. Many projects benefit from a WebXR MVP that validates the concept before a native build.',
    },
  ],
  faqDescription: 'Everything you need to know about our WebXR development services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s discuss your WebXR project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
