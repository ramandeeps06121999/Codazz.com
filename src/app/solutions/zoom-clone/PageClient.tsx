'use client';
import SolutionPageTemplate, { SolutionPageData } from '@/components/SolutionPageTemplate';

const pageData: SolutionPageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Zoom Clone' },
  ],
  hero: {
    badge: 'Video Conferencing Development',
    title: 'Build a Video App',
    titleAccent: 'Like Zoom.',
    description: 'HD video calls, screen sharing, breakout rooms, and enterprise-grade encryption \u2014 we build the complete video conferencing platform your business demands.',
    stats: [
      { value: '$70K+', label: 'Starting Cost' },
      { value: '4-9 Mo', label: 'Development' },
      { value: '1000+', label: 'Participants' },
    ],
  },
  features: {
    label: 'Core Features',
    title: 'Everything Your Video Platform',
    titleDim: 'Needs.',
    items: [
      { icon: '\ud83d\udcf9', title: 'HD Video Calls', desc: 'Crystal-clear video conferencing with adaptive bitrate, bandwidth optimization, gallery view, speaker view, and support for up to 1000 participants.' },
      { icon: '\ud83d\udda5\ufe0f', title: 'Screen Sharing', desc: 'Full-screen, application, or tab sharing with annotation tools, remote control capabilities, and optimized frame rates for presentations.' },
      { icon: '\ud83c\udfa8', title: 'Virtual Backgrounds', desc: 'AI-powered background blur, replacement, and custom virtual backgrounds without a green screen. Support for video backgrounds and branded templates.' },
      { icon: '\ud83c\udfe0', title: 'Breakout Rooms', desc: 'Dynamic breakout room management with auto or manual assignment, timer controls, broadcast messaging, and seamless return to main session.' },
      { icon: '\ud83d\udd34', title: 'Cloud Recording', desc: 'Automatic cloud recording with speaker detection, transcription, chapter markers, searchable content, and secure sharing with access controls.' },
      { icon: '\ud83d\udce2', title: 'Webinar Mode', desc: 'Large-scale webinar hosting with panelist management, Q&A, polls, hand raising, registration pages, and attendee analytics.' },
      { icon: '\ud83d\udcc5', title: 'Calendar Integration', desc: 'Native integration with Google Calendar, Outlook, and Apple Calendar for one-click meeting scheduling, reminders, and join links.' },
      { icon: '\ud83d\udeaa', title: 'Waiting Room', desc: 'Secure waiting room with custom branding, host approval controls, and participant queue management for controlled meeting access.' },
      { icon: '\ud83d\udd12', title: 'E2E Encryption', desc: 'End-to-end encryption for all communications with zero-knowledge architecture, meeting passcodes, and advanced security controls.' },
      { icon: '\ud83d\udcdd', title: 'Whiteboard', desc: 'Collaborative digital whiteboard with drawing tools, shapes, sticky notes, templates, and persistent boards that can be shared across meetings.' },
    ],
  },
  process: {
    label: 'Development Process',
    title: 'How We Build',
    titleDim: 'Your Video Platform.',
    steps: [
      { num: '01', title: 'Discovery & Architecture', duration: '2-3 weeks', desc: 'Requirements analysis, media server architecture, UI/UX design, and WebRTC infrastructure planning.', deliverables: ['Requirements Analysis', 'Media Server Architecture', 'UI/UX Design', 'WebRTC Planning'] },
      { num: '02', title: 'Core Video MVP', duration: '12-14 weeks', desc: 'HD video calls, screen sharing, chat, scheduling, and basic meeting management with up to 100 participants.', deliverables: ['HD Video Calls', 'Screen Sharing', 'In-Meeting Chat', 'Meeting Scheduling'] },
      { num: '03', title: 'Advanced Features', duration: '8-10 weeks', desc: 'Breakout rooms, recording, webinars, virtual backgrounds, whiteboard, and E2E encryption.', deliverables: ['Breakout Rooms', 'Cloud Recording', 'Webinar Mode', 'Virtual Backgrounds'] },
      { num: '04', title: 'Testing & Optimization', duration: '3-4 weeks', desc: 'Load testing, latency optimization, cross-platform QA, security audit, and production deployment.', deliverables: ['Load Testing', 'Latency Optimization', 'Security Audit', 'Production Deploy'] },
    ],
  },
  techStack: [
    { label: 'Frontend', chips: ['React', 'Electron', 'React Native', 'TypeScript'] },
    { label: 'Real-Time', chips: ['WebRTC', 'mediasoup (SFU)', 'WebSocket', 'TURN/STUN'] },
    { label: 'Backend', chips: ['Node.js', 'Go', 'Redis', 'PostgreSQL'] },
    { label: 'Cloud & DevOps', chips: ['AWS', 'Docker', 'Kubernetes', 'Global CDN'] },
  ],
  pricing: {
    plans: [
      {
        tier: 'MVP',
        price: '$70,000 - $100,000',
        desc: 'Core video conferencing with HD calls, screen sharing, chat, and scheduling. Perfect for validating your concept.',
        features: ['HD Video Calls', 'Screen Sharing', 'In-Meeting Chat', 'Meeting Scheduling', 'Web & Mobile Apps'],
      },
      {
        tier: 'Full Product',
        price: '$130,000 - $200,000',
        desc: 'Complete video platform with breakout rooms, recording, webinars, virtual backgrounds, and enterprise security.',
        features: ['Everything in MVP', 'Breakout Rooms', 'Cloud Recording', 'Webinar Mode', 'Virtual Backgrounds', 'E2E Encryption'],
        recommended: true,
      },
    ],
  },
  faqs: [
    { q: 'How much does it cost to build a video conferencing app like Zoom?', a: 'A video conferencing app like Zoom typically costs between $70,000 and $200,000 depending on features and complexity. An MVP with core video calls and screen sharing can start around $70,000, while a full-featured platform with webinars, recording, and E2E encryption ranges from $130,000 to $200,000.' },
    { q: 'How long does it take to build a Zoom-like app?', a: 'An MVP typically takes 4-5 months. A full-featured video conferencing platform with breakout rooms, webinars, recording, and enterprise features takes 6-9 months from start to launch.' },
    { q: 'What tech stack is best for a video conferencing app?', a: 'We recommend WebRTC for real-time video, a selective forwarding unit (SFU) like mediasoup for scalability, React or Electron for desktop, React Native for mobile, Node.js for signaling, and Redis for session management.' },
    { q: 'Can you build a video platform for a specific industry?', a: 'Absolutely. We build specialized video platforms for telehealth (HIPAA-compliant), education, legal, and corporate use cases with custom features like virtual classrooms, patient intake, and compliance recording.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your platform stays secure, fast, and reliable under heavy usage.' },
  ],
  faqDescription: 'Everything you need to know about building a Zoom-like video conferencing platform.',
  otherSolutions: [
    { name: 'Slack Clone', href: '/solutions/slack-clone', category: 'Team Communication', price: '$70,000+' },
    { name: 'WhatsApp Clone', href: '/solutions/whatsapp-clone', category: 'Messaging', price: '$70,000+' },
    { name: 'Stripe Clone', href: '/solutions/stripe-clone', category: 'Payment Platform', price: '$120,000+' },
  ],
  ctaTitle: 'Ready to Build Your Video Platform?',
  ctaDescription: 'From one-on-one calls to large-scale webinars \u2014 let us build the video conferencing platform that connects your world.',
};

export default function ZoomClonePage() {
  return <SolutionPageTemplate data={pageData} />;
}
