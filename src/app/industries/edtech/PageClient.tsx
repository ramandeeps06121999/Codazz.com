'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'EdTech' },
  ],
  hero: {
    badge: 'EDTECH SOFTWARE DEVELOPMENT',
    title: 'We Build EdTech That',
    titleAccent: 'Educates.',
    description: 'Learning management systems, virtual classrooms, adaptive learning platforms, and AI-powered tutoring tools that engage students and scale globally.',
    service: 'EdTech Development',
    stats: [
      { value: '2M+', label: 'Learners Served' },
      { value: '95%', label: 'Completion Rate' },
      { value: '50+', label: 'EdTech Projects' },
      { value: '24/7', label: 'Global Access' },
    ],
  },
  awards: [
    'Top EdTech Developer 2024',
    'SCORM & xAPI Certified',
    'WCAG 2.1 AA Compliant',
    'AWS EdStart Partner',
    'Google for Education Partner',
    'Adaptive Learning Pioneers',
  ],
  whySection: {
    title: 'Why EdTech Companies Choose Codazz',
    cards: [
      { icon: '\u{1F9E0}', title: 'Adaptive Learning Engines', desc: 'AI-powered learning paths that adjust difficulty, content, and pacing based on each student\'s performance, learning style, and goals.' },
      { icon: '\u{1F3AC}', title: 'Interactive Content Delivery', desc: 'Video streaming, interactive exercises, virtual labs, AR/VR experiences, and gamified learning modules that keep students engaged.' },
      { icon: '\u{1F4CA}', title: 'Learning Analytics', desc: 'Real-time dashboards for instructors, progress tracking for students, and institutional analytics that measure learning outcomes.' },
      { icon: '\u{267F}', title: 'Accessibility First', desc: 'WCAG 2.1 AA compliant interfaces, screen reader support, captioning, and inclusive design that ensures every learner can participate.' },
    ],
    whoNeedsTitle: 'Who Needs EdTech Development?',
    whoNeedsItems: [
      { icon: '\u{1F3EB}', title: 'Schools & Universities', desc: 'LMS platforms, virtual classrooms, student portals, and administrative systems for K-12 and higher education.' },
      { icon: '\u{1F4BB}', title: 'Online Course Platforms', desc: 'Course marketplaces, subscription-based learning platforms, and creator tools for independent educators.' },
      { icon: '\u{1F3E2}', title: 'Corporate Training', desc: 'Employee onboarding, compliance training, skill development platforms, and performance tracking systems.' },
      { icon: '\u{1F476}', title: 'Early Childhood', desc: 'Gamified learning apps, parent dashboards, and age-appropriate educational content delivery.' },
      { icon: '\u{1F4F1}', title: 'Test Prep & Tutoring', desc: 'Adaptive practice engines, tutor marketplaces, and AI-powered study assistants.' },
    ],
    metricsTitle: 'EdTech Development by the Numbers',
    metrics: [
      { metric: '2M+', label: 'Learners Served', desc: 'Across all platforms' },
      { metric: '95%', label: 'Completion Rate', desc: 'Average course completion' },
      { metric: '50+', label: 'EdTech Projects', desc: 'Delivered successfully' },
      { metric: '3x', label: 'Engagement Lift', desc: 'Gamification impact' },
    ],
    closingText: 'Whether you are building an LMS, a virtual classroom, or an AI-powered tutoring platform, Codazz brings the educational technology expertise, engagement-focused design, and scalable architecture to create learning experiences that students love and institutions trust. We build technology that makes education accessible to everyone.',
  },
  subServices: [
    { title: 'Learning Management Systems', tag: 'LMS', desc: 'Custom LMS platforms with course authoring, student enrollment, progress tracking, grading, certifications, and SCORM/xAPI compliance.', chips: ['SCORM', 'xAPI', 'Grading', 'Certificates'], href: '/contact', icon: '\u{1F4DA}' },
    { title: 'Virtual Classroom', tag: 'Live Learning', desc: 'Real-time video classrooms with whiteboarding, screen sharing, breakout rooms, hand-raising, polls, and recording for asynchronous access.', chips: ['Video', 'Whiteboard', 'Breakout', 'Recording'], href: '/contact', icon: '\u{1F3AC}' },
    { title: 'Adaptive Learning Engine', tag: 'AI', desc: 'ML-powered learning paths that personalize content difficulty, pacing, and format based on individual student performance and learning patterns.', chips: ['AI Paths', 'Personalization', 'Analytics', 'Recommendations'], href: '/contact', icon: '\u{1F9E0}' },
    { title: 'Course Marketplace', tag: 'Marketplace', desc: 'Multi-creator platforms with course hosting, payment processing, instructor dashboards, student reviews, and discovery algorithms.', chips: ['Creators', 'Payments', 'Reviews', 'Search'], href: '/contact', icon: '\u{1F3EA}' },
    { title: 'Gamification & Engagement', tag: 'Engagement', desc: 'Points, badges, leaderboards, streaks, challenges, and reward systems that drive daily engagement and course completion.', chips: ['Points', 'Badges', 'Leaderboards', 'Streaks'], href: '/contact', icon: '\u{1F3AE}' },
    { title: 'Assessment & Analytics', tag: 'Assessment', desc: 'Quiz engines, proctored exams, rubric-based grading, plagiarism detection, and learning outcome analytics dashboards.', chips: ['Quizzes', 'Proctoring', 'Rubrics', 'Analytics'], href: '/contact', icon: '\u{1F4CA}' },
  ],
  servicesHeading: {
    label: 'Our EdTech Solutions',
    title: 'Complete Learning',
    titleDim: 'Technology Services.',
    description: 'From LMS to AI tutoring, we build every layer of educational technology with engagement, accessibility, and learning outcomes at the core.',
  },
  benefits: {
    label: 'Why Codazz for EdTech',
    title: 'Built for Learning',
    titleDim: 'Outcomes That Matter.',
    items: [
      { icon: '\u{1F9E0}', title: 'AI-Powered Personalization', desc: 'Adaptive learning paths that meet every student where they are and accelerate their progress toward mastery.' },
      { icon: '\u{1F3AE}', title: 'Engagement Engineering', desc: 'Gamification, streaks, social features, and interactive content that keep learners coming back day after day.' },
      { icon: '\u{267F}', title: 'Accessibility Compliance', desc: 'WCAG 2.1 AA compliant interfaces that ensure every learner can access content regardless of ability.' },
      { icon: '\u{1F4CA}', title: 'Learning Analytics', desc: 'Real-time insights into student progress, instructor effectiveness, and institutional learning outcomes.' },
      { icon: '\u{1F310}', title: 'Global Scale', desc: 'Multi-language support, offline access, and CDN delivery for learners anywhere in the world.' },
      { icon: '\u{1F517}', title: 'Standards Compliant', desc: 'SCORM, xAPI, LTI integration that works with existing educational ecosystems and content libraries.' },
    ],
  },
  clientLogos: [
    'Coursera', 'Udemy', 'Khan Academy', 'Canvas', 'Blackboard', 'Moodle',
    'Duolingo', 'Quizlet', 'Kahoot', 'Chegg', 'Skillshare', 'MasterClass',
  ],
  bigStats: [
    { value: '2M+', label: 'Learners Served', desc: 'Across all platforms' },
    { value: '95%', label: 'Completion Rate', desc: 'Average across projects' },
    { value: '50+', label: 'EdTech Projects', desc: 'Delivered globally' },
    { value: '3x', label: 'Engagement Lift', desc: 'With gamification' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F9E0}', title: 'Adaptive Learning', desc: 'AI-personalized learning paths' },
      { icon: '\u{1F3AC}', title: 'Live Video', desc: 'Real-time virtual classrooms' },
      { icon: '\u{1F3AE}', title: 'Gamification', desc: 'Points, badges, and leaderboards' },
      { icon: '\u{1F4CA}', title: 'Learning Analytics', desc: 'Real-time outcome dashboards' },
      { icon: '\u{1F50D}', title: 'AI Tutoring', desc: 'GPT-powered study assistants' },
    ],
    row2: [
      { icon: '\u{1F4F1}', title: 'Mobile Learning', desc: 'Offline-capable learning apps' },
      { icon: '\u{1F576}\u{FE0F}', title: 'AR/VR Learning', desc: 'Immersive educational experiences' },
      { icon: '\u{1F4DD}', title: 'Auto-Grading', desc: 'AI-powered assessment evaluation' },
      { icon: '\u{267F}', title: 'Accessibility', desc: 'WCAG 2.1 AA compliant design' },
      { icon: '\u{1F310}', title: 'Multi-Language', desc: 'Global content localization' },
    ],
  },
  techStack: [
    { category: 'Frontend', techs: ['React', 'Next.js', 'React Native', 'TypeScript'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL'] },
    { category: 'Video & Real-Time', techs: ['WebRTC', 'Agora', 'Mux', 'Socket.io'] },
    { category: 'AI/ML', techs: ['TensorFlow', 'OpenAI', 'Scikit-learn', 'spaCy'] },
    { category: 'Cloud', techs: ['AWS', 'CloudFront CDN', 'Redis', 'Elasticsearch'] },
    { category: 'Standards', techs: ['SCORM', 'xAPI', 'LTI', 'IMS Global'] },
  ],
  faqs: [
    { q: 'Can you build a custom LMS for our organization?', a: 'Yes. We build custom LMS platforms with course authoring, student enrollment, progress tracking, grading, certifications, and SCORM/xAPI compliance. Unlike off-the-shelf solutions, custom LMS platforms can be tailored to your exact workflows and branding.' },
    { q: 'How does adaptive learning work?', a: 'Our adaptive learning engines use ML to analyze student performance in real-time. Based on quiz scores, time spent, and learning patterns, the system adjusts content difficulty, suggests review materials, and personalizes the learning path to optimize for mastery of each concept.' },
    { q: 'Do you build virtual classroom platforms?', a: 'Absolutely. We build real-time virtual classrooms with video conferencing, screen sharing, interactive whiteboards, breakout rooms, polls, hand-raising, and recording. Our platforms handle hundreds of concurrent classrooms with low latency.' },
    { q: 'Can you integrate with existing LMS platforms like Canvas or Moodle?', a: 'Yes. We build LTI-compliant integrations that work with Canvas, Moodle, Blackboard, and other LMS platforms. We can also build tools that embed directly into existing LMS environments, extending their functionality.' },
    { q: 'How do you handle accessibility requirements?', a: 'Accessibility is core to our EdTech development. We build to WCAG 2.1 AA standards with keyboard navigation, screen reader support, captioning for all video content, alternative text, and color contrast compliance. We conduct accessibility audits on every project.' },
    { q: 'Do you build mobile learning apps?', a: 'Yes. We build native and cross-platform learning apps with offline content access, push notification reminders, progress syncing, and mobile-optimized interactive exercises. Our apps work well even on low-bandwidth connections.' },
  ],
  faqDescription: 'Common questions about our EdTech development services, learning platform capabilities, and technical approach.',
  relatedBlogs: [
    { title: 'Building Adaptive Learning Platforms with AI', desc: 'How machine learning personalizes education at scale.', href: '/blog' },
    { title: 'Virtual Classroom Architecture Guide', desc: 'Building real-time video classrooms that scale to thousands.', href: '/blog' },
    { title: 'Gamification in EdTech: What Actually Works', desc: 'Evidence-based game mechanics that drive learning engagement.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Offline-capable learning apps with push notifications and progress syncing.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'Adaptive learning engines, AI tutoring, and automated assessment.', href: '/services/ai-ml' },
    { name: 'Product Design', desc: 'Engagement-focused UX design for learners of all ages and abilities.', href: '/services/product-design' },
    { name: 'Web Development', desc: 'LMS platforms, instructor dashboards, and virtual classroom interfaces.', href: '/services/web-development' },
  ],
  industries: [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Streaming', href: '/industries/streaming-entertainment' },
    { name: 'Fitness & Wellness', href: '/industries/fitness-wellness' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Dating & Social', href: '/industries/dating-social' },
    { name: 'On-Demand', href: '/industries/on-demand' },
  ],
};

export default function EdTechPage() {
  return <ServicePageTemplate data={pageData} />;
}
