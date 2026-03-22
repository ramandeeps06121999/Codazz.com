'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'AR & VR Development', href: '/services/ar-vr' },
    { label: 'Mobile AR Development' },
  ],
  hero: {
    badge: 'AR & VR DEVELOPMENT',
    title: 'Mobile AR Development with',
    titleAccent: 'ARKit & ARCore',
    description: 'We build native iOS and Android augmented reality experiences — from try-on to location-based AR — using the latest ARKit and ARCore capabilities.',
    service: 'Mobile AR Development',
    stats: [
      { value: '35+', label: 'AR Apps Delivered' },
      { value: '5M+', label: 'AR Sessions Powered' },
      { value: 'ARKit & ARCore', label: 'Certified' },
      { value: 'iOS & Android', label: 'Platform Coverage' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F34E}', title: 'ARKit (iOS) Development', desc: 'Native ARKit integration for iPhone and iPad — LiDAR scanning, plane detection, face tracking, and world tracking for high-fidelity iOS AR experiences.' },
      { icon: '\u{1F916}', title: 'ARCore (Android) Development', desc: 'Full ARCore implementation on Android — motion tracking, environmental understanding, and light estimation for immersive Android AR apps.' },
      { icon: '\u{1F3AF}', title: 'Marker-Based AR', desc: 'Image and QR code triggered AR overlays. Perfect for packaging, print media, retail displays, and educational materials that spring to life.' },
      { icon: '\u{1F310}', title: 'Markerless / Surface AR', desc: 'AR that anchors to real-world surfaces without markers. Furniture placement, interior design preview, and spatial interaction powered by plane detection.' },
      { icon: '\u{1F457}', title: 'AR Try-On Experiences', desc: 'Virtual try-on for eyewear, clothing, accessories, and cosmetics. Increase conversion and reduce returns with photorealistic AR product visualisation.' },
      { icon: '\u{1F4CD}', title: 'Location-Based AR', desc: 'GPS-anchored AR experiences for outdoor navigation, tourism, city-scale art installations, and hyperlocal marketing activations.' },
    ],
  },
  portfolioCategory: 'ar-vr',
  process: {
    label: 'Our Process',
    title: 'Our Mobile AR Development Process',
    steps: [
      { num: '01', title: 'Use Case Definition', desc: 'We map your business goals to the right AR modality — marker, markerless, face, or location — and define success metrics before a single line of code is written.' },
      { num: '02', title: 'Environment Mapping', desc: 'Our team analyzes target environments, lighting conditions, and device constraints to design an AR architecture that performs reliably in the real world.' },
      { num: '03', title: 'AR Feature Build', desc: 'Full-stack AR development using ARKit, ARCore, RealityKit, or Sceneform. 3D asset integration, occlusion, physics, and interaction are built and tested in sprints.' },
      { num: '04', title: 'Device Testing', desc: 'Rigorous testing across iOS and Android device matrix — various screen sizes, camera qualities, and OS versions — before App Store and Play Store submission.' },
    ],
  },
  faqs: [
    {
      q: 'ARKit vs ARCore \u2014 which do I need?',
      a: 'ARKit is Apple\'s framework for iOS devices (iPhone/iPad), while ARCore is Google\'s framework for Android. If you need to support both platforms, we build a cross-platform solution using Unity AR Foundation, which abstracts both SDKs. If you\'re iOS-only or Android-only, we go native for maximum performance and access to platform-specific features like LiDAR (ARKit) or Depth API (ARCore).',
    },
    {
      q: 'How accurate is surface detection?',
      a: 'Modern ARKit and ARCore surface detection is remarkably accurate — typically within 1\u20132cm on well-lit, textured surfaces. LiDAR-equipped iPhones achieve near-instant, millimetre-level accuracy. Performance degrades on reflective, uniformly colored, or poorly lit surfaces. We design experiences with these constraints in mind and implement fallback interactions for challenging environments.',
    },
    {
      q: 'Can AR work without a target image?',
      a: 'Yes. Markerless AR uses the device\'s camera and sensors to detect flat surfaces, faces, or physical space without any pre-defined target. World tracking anchors virtual objects to real-world coordinates. This enables experiences like placing furniture in a room, AR navigation overlays, or face filters — all without a printed marker.',
    },
    {
      q: 'What devices support mobile AR?',
      a: 'ARKit is supported on iPhone 6s and later running iOS 11+, and most modern iPads. ARCore is supported on hundreds of Android devices running Android 7.0+ — Google maintains an official compatibility list. For LiDAR-enhanced AR, you\'ll need iPhone 12 Pro or newer, iPad Pro 2020 or newer. We scope device requirements early so there are no surprises.',
    },
    {
      q: 'How do you measure AR experience success?',
      a: 'We instrument AR apps with custom analytics events — session duration in AR mode, interaction depth, feature engagement rates, and conversion actions (e.g. "add to cart" from AR try-on). For enterprise AR, we track task completion time reduction, error rates, and user satisfaction scores compared to baseline. Every deployment includes a measurement framework agreed at the start of the project.',
    },
  ],
  faqDescription: 'Everything you need to know about our mobile AR development services.',
  ctaTitle: 'Ready to Build Your AR App?',
  ctaDescription: 'Let\'s discuss your mobile AR project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
