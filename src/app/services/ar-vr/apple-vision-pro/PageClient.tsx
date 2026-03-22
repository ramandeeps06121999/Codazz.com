'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'AR & VR Development', href: '/services/ar-vr' },
    { label: 'Apple Vision Pro Development' },
  ],
  hero: {
    badge: 'AR & VR DEVELOPMENT',
    title: 'Apple Vision Pro Development for',
    titleAccent: 'Spatial Computing',
    description: 'We are early visionOS adopters building spatial computing apps with SwiftUI, RealityKit, and Apple\'s spatial design principles for the world\'s most advanced computing platform.',
    service: 'Apple Vision Pro Development',
    stats: [
      { value: 'Early Adopters', label: 'visionOS Pioneers' },
      { value: 'SwiftUI & RealityKit', label: 'Expert Team' },
      { value: 'Spatial Computing', label: 'Category Leaders' },
      { value: '10+', label: 'visionOS Apps Shipped' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F30C}', title: 'visionOS App Development', desc: 'Full-cycle visionOS app development — from architecture and spatial design through development, TestFlight, and App Store submission on Apple Vision Pro.' },
      { icon: '\u{1F5BC}\uFE0F', title: 'SwiftUI Spatial UI', desc: 'Fluid, native visionOS interfaces built with SwiftUI — windows, volumes, and full spaces that adapt beautifully to the user\'s physical environment.' },
      { icon: '\u{1F52E}', title: 'RealityKit 3D Content', desc: 'Photorealistic 3D objects, materials, and animations built with RealityKit 2 and Reality Composer Pro — anchored to the real world with centimetre precision.' },
      { icon: '\u{1F441}\uFE0F', title: 'SharePlay & Collaboration Features', desc: 'Multi-user spatial experiences using SharePlay — shared 3D workspaces, collaborative design tools, and social viewing experiences for Vision Pro.' },
      { icon: '\u270B', title: 'Eye Tracking & Hand Gesture Input', desc: 'Fully natural visionOS input — look to focus, pinch to select, drag with hands. We design interactions that feel intuitive without any controller in hand.' },
      { icon: '\u{1F4F1}', title: 'App Migration from iPad to visionOS', desc: 'Porting existing iOS and iPadOS apps to visionOS — spatial layout adaptation, depth and layering enhancement, and platform-specific feature additions.' },
    ],
  },
  portfolioCategory: 'ar-vr',
  process: {
    label: 'Our Process',
    title: 'Our Apple Vision Pro Development Process',
    steps: [
      { num: '01', title: 'Spatial Design Strategy', desc: 'We define how your content lives in space — which views are windows, which are volumes, which warrant a full immersive space. Spatial design principles guide every decision.' },
      { num: '02', title: 'visionOS Architecture', desc: 'App architecture designed for visionOS lifecycle, window management, scene phases, and ornament placement. We plan for collaboration and Persona features from the start.' },
      { num: '03', title: 'Development', desc: 'SwiftUI and RealityKit development in sprints — spatial UI, 3D content, input handling, and system integration. Regular TestFlight builds keep you in the loop.' },
      { num: '04', title: 'TestFlight Review', desc: 'Comprehensive testing in the Vision Pro Simulator and on physical hardware. Apple\'s visionOS review guidelines are strict — we ensure full compliance before submission.' },
    ],
  },
  faqs: [
    {
      q: 'Is it worth building for Apple Vision Pro now?',
      a: 'For early-mover brands, enterprise productivity tools, and premium content experiences, yes. Vision Pro is a platform-defining device and the App Store is still sparse — meaning high-quality early apps get significant organic visibility. Enterprise customers in fields like design, surgery, AEC, and training are already deploying Vision Pro. If your audience includes early adopters or enterprise power users, now is the right time to establish presence.',
    },
    {
      q: 'How different is visionOS development from iOS development?',
      a: 'Familiar but distinctly different. Swift and SwiftUI carry over, but the spatial paradigm — windows floating in space, volumes with depth, full immersive spaces — requires rethinking layout and navigation completely. RealityKit replaces SpriteKit/SceneKit for 3D content. Input is eye tracking + pinch gesture instead of touch. Our team is trained specifically on visionOS and follows Apple\'s Human Interface Guidelines for spatial computing.',
    },
    {
      q: 'What input methods does Apple Vision Pro use?',
      a: 'Vision Pro uses eyes, hands, and voice as primary inputs. Users look at an element to focus it, then pinch their fingers to select it. Dragging is done by pinching and moving the hand. Voice input via Siri supplements these gestures. There are no physical controllers — the system tracks bare hands. This creates an incredibly natural interaction model but requires careful design to ensure targets are large enough and feedback is clear.',
    },
    {
      q: 'How do you design spatial UI for Vision Pro?',
      a: 'We design spatial UI around Apple\'s core visionOS principles: content is primary (chrome is minimal), windows live at comfortable arm\'s length, depth conveys hierarchy, and materials like glass provide context without obscuring the real world. We use Reality Composer Pro for 3D layout, reference Apple\'s WWDC sessions, and test every design on actual hardware — the simulator alone is not sufficient for spatial design validation.',
    },
    {
      q: 'How are visionOS apps distributed?',
      a: 'visionOS apps are distributed through the App Store on Vision Pro, just like iOS. You submit through App Store Connect with a separate visionOS destination. TestFlight supports visionOS for beta distribution. Enterprise apps can use Apple Business Manager for internal distribution without going through the public App Store. We handle the full submission, metadata, screenshots (captured in simulator), and review process.',
    },
  ],
  faqDescription: 'Everything you need to know about our Apple Vision Pro development services.',
  ctaTitle: 'Ready to Build for Spatial Computing?',
  ctaDescription: 'Let\'s discuss your Vision Pro project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
