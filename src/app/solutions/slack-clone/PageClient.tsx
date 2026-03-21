'use client';
import SolutionPageTemplate, { SolutionPageData } from '@/components/SolutionPageTemplate';

const pageData: SolutionPageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Slack Clone' },
  ],
  hero: {
    badge: 'Team Communication Development',
    title: 'Build a Chat App',
    titleAccent: 'Like Slack.',
    description: 'Channels, threads, integrations, and video huddles — we build the complete team communication platform that keeps your users connected and productive.',
    stats: [
      { value: '$70K+', label: 'Starting Cost' },
      { value: '4-10 Mo', label: 'Development' },
      { value: '100K+', label: 'Users Supported' },
    ],
  },
  features: {
    label: 'Key Features',
    title: 'Everything Your Communication App',
    titleDim: 'Needs.',
    items: [
      { icon: '#', title: 'Channels', desc: 'Organized conversation spaces with public, private, and shared channels. Topic-based communication with pinned messages, bookmarks, and channel descriptions.' },
      { icon: '\u{1F4AC}', title: 'Direct Messaging', desc: 'One-on-one and group direct messages with typing indicators, read receipts, message editing, deletion, and rich text formatting with markdown support.' },
      { icon: '\u{1F4CE}', title: 'File Sharing', desc: 'Drag-and-drop file sharing with previews for images, PDFs, code snippets, and documents. Cloud storage integration with Google Drive, Dropbox, and OneDrive.' },
      { icon: '\u{1F9F5}', title: 'Thread Conversations', desc: 'Threaded replies to keep conversations organized without cluttering the main channel. Follow threads, reply notifications, and thread summaries.' },
      { icon: '\u{1F50C}', title: 'App Integrations', desc: 'Extensible platform with a marketplace of integrations for tools like Jira, GitHub, Google Workspace, Salesforce, and custom webhook-based bots.' },
      { icon: '\u{1F50D}', title: 'Powerful Search', desc: 'Full-text search across all messages, files, and channels with advanced filters by date, person, channel, and file type. Search modifiers and saved searches.' },
      { icon: '\u{1F4F9}', title: 'Video Huddles', desc: 'Instant audio and video huddles within channels or DMs with screen sharing, live captions, and the ability to invite external guests.' },
      { icon: '\u26A1', title: 'Workflow Builder', desc: 'No-code workflow automation with triggers, conditions, and actions. Automate onboarding, approvals, standups, and custom business processes.' },
      { icon: '\u{1F604}', title: 'Custom Emoji & Reactions', desc: 'Message reactions with standard and custom emoji, emoji packs, status updates with emoji, and fun engagement features like polls and surveys.' },
      { icon: '\u{1F527}', title: 'Admin Controls', desc: 'Enterprise administration with workspace management, user provisioning, SSO/SAML, data retention policies, compliance exports, and audit logs.' },
    ],
  },
  process: {
    label: 'Development Process',
    title: 'How We Build',
    titleDim: 'Your Communication App.',
    steps: [
      { num: '01', title: 'Discovery & Design', duration: '2-3 weeks', desc: 'User research, information architecture, real-time messaging design, and UI/UX wireframes.', deliverables: ['User Research', 'Information Architecture', 'Messaging Design', 'UI/UX Wireframes'] },
      { num: '02', title: 'Core Messaging MVP', duration: '12-14 weeks', desc: 'Channels, direct messaging, file sharing, notifications, search, and user management.', deliverables: ['Channels', 'Direct Messaging', 'File Sharing', 'Notifications', 'Search', 'User Management'] },
      { num: '03', title: 'Advanced Features', duration: '8-12 weeks', desc: 'Threads, app integrations, video huddles, workflow builder, and enterprise admin controls.', deliverables: ['Thread Conversations', 'App Integrations', 'Video Huddles', 'Workflow Builder', 'Enterprise Admin'] },
      { num: '04', title: 'Testing & Launch', duration: '3-4 weeks', desc: 'Load testing, real-time performance optimization, security audit, and production deployment.', deliverables: ['Load Testing', 'Performance Optimization', 'Security Audit', 'Production Deployment'] },
    ],
  },
  techStack: [
    { label: 'Frontend', chips: ['React', 'Electron', 'React Native', 'TypeScript'] },
    { label: 'Real-Time', chips: ['WebSocket', 'Socket.io', 'Redis Pub/Sub', 'Event Sourcing'] },
    { label: 'Backend', chips: ['Node.js', 'Go', 'GraphQL', 'Microservices'] },
    { label: 'Database & Search', chips: ['PostgreSQL', 'Redis', 'Elasticsearch', 'S3'] },
  ],
  pricing: {
    plans: [
      { tier: 'MVP', price: '$70,000 - $100,000', desc: 'Core team messaging with channels, DMs, file sharing, notifications, and search. Perfect for validating your communication concept.', features: ['Channels & DMs', 'File Sharing', 'Notifications', 'Message Search', 'Web & Mobile Apps'] },
      { tier: 'Full Product', price: '$140,000 - $220,000', desc: 'Complete communication platform with threads, integrations, video huddles, workflows, and enterprise admin controls.', features: ['Everything in MVP', 'Thread Conversations', 'App Integrations', 'Video Huddles', 'Workflow Builder', 'Enterprise Admin'], recommended: true },
    ],
  },
  faqs: [
    { q: 'How much does it cost to build a team communication app like Slack?', a: 'A team communication app like Slack typically costs between $70,000 and $220,000 depending on features and complexity. An MVP with channels, messaging, and file sharing can start around $70,000, while a full-featured platform with threads, integrations, video huddles, and workflows ranges from $140,000 to $220,000.' },
    { q: 'How long does it take to build a Slack-like app?', a: 'An MVP typically takes 4-5 months. A full-featured team communication platform with app integrations, video huddles, workflows, and enterprise controls takes 7-10 months from start to launch.' },
    { q: 'What tech stack is best for a team messaging app?', a: 'We recommend React or Electron for desktop, React Native for mobile, Node.js with WebSocket for real-time messaging, PostgreSQL for persistent data, Redis for presence and caching, and Elasticsearch for message search.' },
    { q: 'Can you build a communication app for a specific industry?', a: 'Absolutely. We build industry-specific communication platforms for healthcare (HIPAA-compliant), finance, government, and education with custom compliance features, data residency controls, and specialized integrations.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your platform stays secure, fast, and reliable as your user base grows.' },
  ],
  faqDescription: 'Everything you need to know about building a team communication app like Slack.',
  otherSolutions: [
    { name: 'LinkedIn Clone', href: '/solutions/linkedin-clone', category: 'Professional Network', price: '$80,000' },
    { name: 'Spotify Clone', href: '/solutions/spotify-clone', category: 'Music Streaming', price: '$80,000' },
    { name: 'Amazon Clone', href: '/solutions/amazon-clone', category: 'Marketplace', price: '$100,000' },
  ],
  ctaTitle: 'Ready to Build Your Communication App?',
  ctaDescription: 'From channels to huddles — let us build the team communication platform that keeps your users connected.',
};

export default function SlackClonePage() {
  return <SolutionPageTemplate data={pageData} />;
}
