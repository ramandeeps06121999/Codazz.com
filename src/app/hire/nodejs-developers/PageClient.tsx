'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function NodejsDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="Node.js"
      breadcrumbLabel="Node.js Developers"
      tagline="Node.js & Backend"
      description="Pre-vetted senior Node.js developers ready to join your team in 48 hours. Build scalable APIs, microservices, real-time applications, and full-stack JavaScript solutions with battle-tested backend engineers."
      stats={[
        { value: '45+', label: 'Node.js Engineers' },
        { value: '7+ Yrs', label: 'Avg Experience' },
        { value: '200+', label: 'APIs Built' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted Backend Experts', desc: 'Every Node.js developer passes our 5-stage vetting: API architecture challenge, system design for scale, live pair programming, culture fit, and reference checks. Top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our Node.js developers work in your timezone. US, European, Middle Eastern, or APAC business hours — your developer is online when you need them.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before any code discussion. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Scalable Architecture', desc: 'Our Node.js developers build APIs that handle millions of requests. Microservices, event-driven architecture, and real-time systems are their specialty.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior Node.js developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Full-Stack Capable', desc: 'Most of our Node.js developers are full-stack proficient with React or Vue frontends, giving you versatility across your entire stack.' },
      ]}
      profiles={[
        { id: 'N1', role: 'Senior Node.js Backend Engineer', experience: '9 years experience', skills: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'], projects: '50+ production APIs built', availability: 'Available Now' },
        { id: 'N2', role: 'Node.js Microservices Architect', experience: '11 years experience', skills: ['Node.js', 'Kafka', 'gRPC', 'Kubernetes', 'MongoDB', 'Terraform'], projects: 'Architected systems serving 10M+ users', availability: 'Available Now' },
        { id: 'N3', role: 'Full-Stack Node.js Developer', experience: '6 years experience', skills: ['Node.js', 'NestJS', 'React', 'GraphQL', 'Prisma', 'Jest'], projects: '20+ SaaS platforms shipped', availability: 'Available Now' },
        { id: 'N4', role: 'Node.js Real-Time Specialist', experience: '7 years experience', skills: ['Node.js', 'Socket.io', 'WebRTC', 'Redis Pub/Sub', 'Express', 'RabbitMQ'], projects: 'Built chat systems with 500K+ concurrent users', availability: 'Available in 1 week' },
      ]}
      techCategories={[
        { label: 'Core Node.js', chips: ['Node.js 20+', 'TypeScript', 'Express.js', 'NestJS', 'Fastify', 'Koa'] },
        { label: 'Databases', chips: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Prisma', 'TypeORM'] },
        { label: 'API & Messaging', chips: ['REST', 'GraphQL', 'gRPC', 'WebSockets', 'Kafka', 'RabbitMQ'] },
        { label: 'Cloud & DevOps', chips: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Serverless'] },
        { label: 'Testing', chips: ['Jest', 'Mocha', 'Supertest', 'Artillery', 'k6', 'Postman'] },
        { label: 'Observability', chips: ['Datadog', 'New Relic', 'Prometheus', 'Grafana', 'ELK Stack', 'Sentry'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a Node.js developer from Codazz?', a: 'You can interview pre-matched Node.js developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours.' },
        { q: 'What is the experience level of your Node.js developers?', a: 'Our Node.js developers have a minimum of 4 years building production APIs and backend systems. Most have 6-10+ years of experience with microservices and real-time applications.' },
        { q: 'Can your Node.js developers work in my timezone?', a: 'Yes. We have Node.js developers across multiple time zones who align with US, European, Middle Eastern, and APAC business hours.' },
        { q: 'What is the pricing for hiring a Node.js developer?', a: 'Node.js developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. No hidden fees, no recruitment charges.' },
        { q: 'Do your Node.js developers know frontend too?', a: 'Most of our Node.js developers are proficient in React or Vue.js, making them capable full-stack engineers when your project needs it.' },
        { q: 'Can I scale the team up or down?', a: 'Absolutely. Our engagement models are fully flexible. Add more developers as your project grows or scale down after milestones. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
