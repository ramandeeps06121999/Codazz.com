'use client';
import SolutionPageTemplate, { SolutionPageData } from '@/components/SolutionPageTemplate';

const pageData: SolutionPageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'LinkedIn Clone' },
  ],
  hero: {
    badge: 'Professional Network Development',
    title: 'Build a Network',
    titleAccent: 'Like LinkedIn.',
    description: 'Professional profiles, job boards, content feeds, and recruiter tools — we build the complete professional networking platform your industry needs.',
    stats: [
      { value: '$80K+', label: 'Starting Cost' },
      { value: '4-10 Mo', label: 'Development' },
      { value: '20M+', label: 'Users Supported' },
    ],
  },
  features: {
    label: 'Key Features',
    title: 'Everything Your Network',
    titleDim: 'Needs.',
    items: [
      { icon: '\u{1F464}', title: 'Professional Profiles', desc: 'Rich user profiles with work experience, education, skills, certifications, portfolio links, and endorsement sections for complete professional identity.' },
      { icon: '\u{1F4BC}', title: 'Job Board & Listings', desc: 'Full-featured job marketplace with advanced filters, easy apply, job alerts, salary insights, and company-branded career pages.' },
      { icon: '\u{1F4AC}', title: 'Professional Messaging', desc: 'LinkedIn-style messaging with InMail credits, smart replies, attachment sharing, and conversation threading for professional communication.' },
      { icon: '\u{1F4F0}', title: 'Content Feed & Articles', desc: 'Algorithm-driven content feed with posts, articles, polls, documents, and video sharing. Hashtag discovery, reactions, and comment threads.' },
      { icon: '\u{1F3E2}', title: 'Company Pages', desc: 'Branded company profiles with employee directories, job postings, product showcases, follower analytics, and content publishing tools.' },
      { icon: '\u{1F50E}', title: 'Recruiter Tools', desc: 'Advanced talent search with boolean filters, candidate pipeline management, InMail campaigns, and ATS integration for hiring teams.' },
      { icon: '\u{1F3C5}', title: 'Skills & Endorsements', desc: 'Skill assessment system with peer endorsements, skill quizzes, verified badges, and recommendations that build professional credibility.' },
      { icon: '\u{1F4DA}', title: 'Learning Platform', desc: 'Integrated e-learning with video courses, certifications, learning paths, and skill-based recommendations for professional development.' },
      { icon: '\u{1F451}', title: 'Premium Subscriptions', desc: 'Tiered membership with InMail credits, profile insights, advanced search, salary data, and learning access for power users and recruiters.' },
      { icon: '\u{1F4CA}', title: 'Analytics & Insights', desc: 'Profile view analytics, post performance metrics, industry trends, and network growth insights for users, companies, and admins.' },
    ],
  },
  process: {
    label: 'Development Process',
    title: 'How We Build',
    titleDim: 'Your Network.',
    steps: [
      { num: '01', title: 'Discovery & Design', duration: '3-4 weeks', desc: 'User research, information architecture, UI/UX design, and technical planning for the professional network.', deliverables: ['User Research', 'Information Architecture', 'UI/UX Design', 'Technical Planning'] },
      { num: '02', title: 'Core Platform MVP', duration: '12-16 weeks', desc: 'User profiles, connections, content feed, messaging, and basic search functionality.', deliverables: ['User Profiles', 'Connection Graph', 'Content Feed', 'Messaging', 'Search'] },
      { num: '03', title: 'Advanced Features', duration: '8-12 weeks', desc: 'Job board, recruiter tools, company pages, learning platform, and premium subscription system.', deliverables: ['Job Board', 'Recruiter Tools', 'Company Pages', 'Learning Platform', 'Premium Subscriptions'] },
      { num: '04', title: 'Testing & Launch', duration: '3-4 weeks', desc: 'QA, performance testing, security audit, app store submission, and production deployment.', deliverables: ['QA Testing', 'Performance Testing', 'Security Audit', 'App Store Submission', 'Production Deployment'] },
    ],
  },
  techStack: [
    { label: 'Frontend', chips: ['Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'] },
    { label: 'Backend', chips: ['Node.js', 'Java', 'GraphQL', 'Microservices'] },
    { label: 'Database', chips: ['PostgreSQL', 'Elasticsearch', 'Redis', 'Neo4j'] },
    { label: 'Cloud & DevOps', chips: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
  ],
  pricing: {
    plans: [
      { tier: 'MVP', price: '$80,000 - $120,000', desc: 'Core professional network with profiles, connections, feed, messaging, and basic job listings. Perfect for validating your concept.', features: ['Professional Profiles', 'Connection Graph', 'Content Feed', 'Messaging', 'Web & Mobile Apps'] },
      { tier: 'Full Product', price: '$150,000 - $250,000', desc: 'Complete professional platform with job board, recruiter tools, learning, company pages, and premium subscriptions.', features: ['Everything in MVP', 'Job Board & Easy Apply', 'Recruiter Tools', 'Company Pages', 'Learning Platform', 'Premium Subscriptions'], recommended: true },
    ],
  },
  faqs: [
    { q: 'How much does it cost to build a professional network like LinkedIn?', a: 'A professional networking platform like LinkedIn typically costs between $80,000 and $250,000 depending on features and complexity. An MVP with profiles, connections, and a feed can start around $80,000, while a full-featured platform with job boards, recruiter tools, and learning modules ranges from $150,000 to $250,000.' },
    { q: 'How long does it take to build a LinkedIn-like platform?', a: 'An MVP typically takes 4-5 months. A full-featured professional network with job boards, recruiter tools, content feeds, and premium subscriptions takes 7-10 months from start to launch.' },
    { q: 'What tech stack is best for a professional networking app?', a: 'We recommend Next.js for the web platform, React Native for mobile, Node.js or Java for the backend, PostgreSQL for relational data, Elasticsearch for people and job search, Neo4j for graph-based connections, and Redis for real-time features.' },
    { q: 'Can you build a networking platform for a specific industry?', a: 'Absolutely. We build niche professional networks for specific industries like healthcare, legal, tech, finance, and creative fields. Custom features such as credential verification, portfolio showcases, and industry-specific job boards can be tailored to your audience.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your platform stays secure, fast, and up-to-date.' },
  ],
  faqDescription: 'Everything you need to know about building a professional network like LinkedIn.',
  otherSolutions: [
    { name: 'Slack Clone', href: '/solutions/slack-clone', category: 'Communication', price: '$70,000' },
    { name: 'Amazon Clone', href: '/solutions/amazon-clone', category: 'Marketplace', price: '$100,000' },
    { name: 'Spotify Clone', href: '/solutions/spotify-clone', category: 'Music Streaming', price: '$80,000' },
  ],
  ctaTitle: 'Ready to Build Your Professional Network?',
  ctaDescription: 'From connections to careers — let us build the professional platform that empowers your community.',
};

export default function LinkedInClonePage() {
  return <SolutionPageTemplate data={pageData} />;
}
