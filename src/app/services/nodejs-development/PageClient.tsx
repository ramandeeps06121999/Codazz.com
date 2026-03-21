'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Node.js Development' },
  ],
  hero: {
    badge: 'Node.js Development Company',
    title: 'Node.js Development',
    titleAccent: 'That Scales.',
    description:
      'High-performance REST APIs, GraphQL backends, microservices, and real-time applications built with Node.js, Express, Fastify, and NestJS. 10M+ daily API requests across client systems.',
    service: 'Node.js Development',
    stats: [
      { value: '300+', label: 'Node.js Projects' },
      { value: '10M+', label: 'Daily API Requests' },
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '4.9', label: 'Clutch Rating', suffix: '★' },
    ],
  },
  awards: [
    'Clutch Top Node.js Company 2026',
    'AWS Advanced Tier Partner',
    'SOC 2 Type II Certified',
    'Clutch Top Backend Development 2026',
    'ISO 27001 Certified',
    'Google Cloud Partner',
    'Top Backend Company - GoodFirms',
    'Node.js Foundation Member',
  ],
  whySection: {
    title: 'Why Node.js Powers the Modern Web',
    cards: [
      { icon: '⚡', title: 'Non-Blocking I/O', desc: 'Node.js handles thousands of concurrent connections with its event-driven, non-blocking architecture. Perfect for real-time apps, APIs, and microservices that need to scale.' },
      { icon: '🌐', title: 'JavaScript Everywhere', desc: 'One language for frontend and backend. Share validation logic, types, and utilities between your React/Next.js frontend and Node.js backend for faster development.' },
      { icon: '📦', title: 'Largest Ecosystem', desc: 'npm has 2M+ packages — the largest package registry in the world. Express, Fastify, NestJS, Prisma, and thousands of battle-tested libraries at your fingertips.' },
      { icon: '🚀', title: 'Startup to Enterprise', desc: 'From Netflix and LinkedIn to PayPal and Uber — Node.js powers backends at every scale. Start lean and scale to millions without switching stacks.' },
    ],
    whoNeedsTitle: 'Who Needs Node.js Development?',
    whoNeedsItems: [
      { icon: '🚀', title: 'Startups & MVPs', desc: 'Ship fast with JavaScript full-stack. Node.js lets your team build frontend and backend with the same language and shared code.' },
      { icon: '🏢', title: 'Enterprise Backend', desc: 'Microservices, API gateways, and event-driven architectures with NestJS and TypeScript for type-safe, maintainable enterprise systems.' },
      { icon: '💬', title: 'Real-Time Applications', desc: 'Chat apps, live dashboards, collaborative tools, and gaming backends powered by WebSockets and Socket.io.' },
      { icon: '🔌', title: 'API Development', desc: 'REST and GraphQL APIs that serve mobile, web, and third-party consumers with high throughput and low latency.' },
      { icon: '🛒', title: 'E-Commerce Backends', desc: 'Order management, inventory APIs, payment processing, and product search backends for high-traffic stores.' },
      { icon: '📊', title: 'Data Processing', desc: 'Stream processing, ETL pipelines, webhook handlers, and integration middleware for data-intensive applications.' },
    ],
    metricsTitle: 'Node.js Development Metrics',
    metrics: [
      { metric: '300+', label: 'Projects Delivered', desc: 'Backend systems' },
      { metric: '10M+', label: 'Daily API Requests', desc: 'Across client systems' },
      { metric: '99.99%', label: 'Uptime SLA', desc: 'Production guarantee' },
      { metric: '< 50ms', label: 'API Response', desc: 'P95 latency' },
      { metric: '50+', label: 'Engineers', desc: 'Node.js specialists' },
      { metric: '4.9★', label: 'Client Rating', desc: 'Across 90+ reviews' },
    ],
    closingText:
      'Node.js is not just a runtime — it is the backbone of the modern web. At Codazz, we have shipped 300+ Node.js projects from startup APIs to enterprise microservice architectures handling 10M+ daily requests. We build with TypeScript, NestJS, Fastify, and Prisma for type-safe, performant, and maintainable backend systems that scale effortlessly.',
  },
  subServices: [
    {
      title: 'REST API Development',
      tag: 'API Engineering',
      desc: 'Scalable, versioned REST APIs built with Express or Fastify. OpenAPI 3.1 specs, rate limiting, JWT/OAuth2 auth, and auto-generated Swagger docs.',
      chips: ['Express', 'Fastify', 'OpenAPI 3.1', 'JWT', 'Swagger', 'Rate Limiting'],
      href: '/services/nodejs-development/rest-api',
      icon: '🔌',
    },
    {
      title: 'Microservices Architecture',
      tag: 'Microservices',
      desc: 'Decompose monoliths into independently deployable Node.js microservices with event-driven communication, service discovery, and distributed tracing.',
      chips: ['NestJS', 'NATS', 'RabbitMQ', 'gRPC', 'Service Mesh'],
      href: '/services/nodejs-development/microservices',
      icon: '🧩',
    },
    {
      title: 'GraphQL Development',
      tag: 'API Layer',
      desc: 'Type-safe GraphQL APIs with Apollo Server, schema stitching, federation, subscriptions, and DataLoader for efficient data fetching.',
      chips: ['Apollo Server', 'Federation', 'Subscriptions', 'DataLoader', 'Codegen'],
      href: '/services/nodejs-development/graphql',
      icon: '📊',
    },
    {
      title: 'Real-Time Applications',
      tag: 'WebSocket',
      desc: 'Chat systems, live dashboards, collaborative editors, and notification systems using Socket.io, WebSockets, and Server-Sent Events.',
      chips: ['Socket.io', 'WebSocket', 'SSE', 'Redis Pub/Sub', 'Presence'],
      href: '/services/nodejs-development/real-time',
      icon: '💬',
    },
    {
      title: 'Serverless Node.js',
      tag: 'Cloud Functions',
      desc: 'Event-driven serverless functions on AWS Lambda, Google Cloud Functions, and Azure Functions for auto-scaling, pay-per-use workloads.',
      chips: ['AWS Lambda', 'Cloud Functions', 'Serverless Framework', 'Edge Functions'],
      href: '/services/nodejs-development/serverless',
      icon: '☁️',
    },
    {
      title: 'NestJS Enterprise',
      tag: 'Enterprise',
      desc: 'Enterprise-grade backends with NestJS — TypeScript, dependency injection, modular architecture, and built-in support for microservices, GraphQL, and WebSockets.',
      chips: ['NestJS', 'TypeScript', 'Prisma', 'TypeORM', 'CQRS'],
      href: '/services/nodejs-development/nestjs',
      icon: '🏗️',
    },
  ],
  servicesHeading: {
    label: 'What We Build',
    title: 'Node.js Development Services',
    titleDim: 'APIs that scale.',
    description:
      'Full-service Node.js development — REST APIs, GraphQL, microservices, real-time apps, serverless functions, and enterprise backends with TypeScript.',
  },
  benefits: {
    label: 'Why Codazz Node.js',
    title: 'Backend Engineering',
    titleDim: 'Done Right.',
    items: [
      { icon: '🔒', title: 'TypeScript First', desc: 'Every project uses TypeScript for type safety, better refactoring, and fewer runtime errors. Catch bugs at compile time, not in production.' },
      { icon: '⚡', title: 'Sub-50ms Latency', desc: 'Optimized with connection pooling, query optimization, caching layers, and efficient serialization for blazing-fast API responses.' },
      { icon: '🧪', title: '90%+ Test Coverage', desc: 'Comprehensive unit, integration, and E2E tests with Jest and Supertest. Every API endpoint is tested before deployment.' },
      { icon: '📊', title: 'Full Observability', desc: 'Structured logging, distributed tracing, metrics dashboards, and automated alerting for complete production visibility.' },
    ],
  },
  clientLogos: [
    'Netflix', 'LinkedIn', 'PayPal', 'Uber', 'AWS',
    'Google Cloud', 'Stripe', 'Twilio', 'MongoDB', 'Redis',
    'PostgreSQL', 'Kafka', 'Docker', 'Kubernetes', 'Datadog',
    'PagerDuty',
  ],
  bigStats: [
    { value: '300+', label: 'Projects Delivered', desc: 'Backend systems' },
    { value: '10M+', label: 'Daily Requests', desc: 'Across systems' },
    { value: '99.99%', label: 'Uptime SLA', desc: 'Production guarantee' },
    { value: '< 50ms', label: 'P95 Latency', desc: 'API response time' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 90+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🔒', title: 'TypeScript', desc: 'Type-safe Node.js for maintainable codebases' },
      { icon: '🏗️', title: 'NestJS', desc: 'Enterprise framework with dependency injection' },
      { icon: '⚡', title: 'Fastify', desc: 'High-performance HTTP framework for Node.js' },
      { icon: '📊', title: 'Prisma ORM', desc: 'Type-safe database access with auto-generated types' },
      { icon: '🔄', title: 'Event Sourcing', desc: 'Event-driven architecture for microservices' },
      { icon: '📨', title: 'Message Queues', desc: 'BullMQ, RabbitMQ, and NATS for async processing' },
    ],
    row2: [
      { icon: '🐳', title: 'Containerized', desc: 'Docker and Kubernetes for portable deployments' },
      { icon: '📈', title: 'Auto-Scaling', desc: 'Horizontal scaling with load balancing' },
      { icon: '🔐', title: 'JWT/OAuth2', desc: 'Secure authentication and authorization' },
      { icon: '💾', title: 'Redis Caching', desc: 'In-memory caching for sub-millisecond lookups' },
      { icon: '🔍', title: 'OpenTelemetry', desc: 'Distributed tracing across microservices' },
      { icon: '🧪', title: 'Contract Testing', desc: 'Pact-based API contract verification' },
    ],
  },
  techStack: [
    { category: 'Frameworks', techs: ['Express', 'Fastify', 'NestJS', 'Koa', 'Hono', 'tRPC'] },
    { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch', 'Supabase'] },
    { category: 'ORM & Query', techs: ['Prisma', 'TypeORM', 'Drizzle', 'Mongoose', 'Knex'] },
    { category: 'Messaging', techs: ['BullMQ', 'RabbitMQ', 'NATS', 'Kafka', 'SQS/SNS', 'Redis Streams'] },
    { category: 'API Layer', techs: ['GraphQL (Apollo)', 'REST (OpenAPI)', 'gRPC', 'WebSocket', 'tRPC'] },
    { category: 'DevOps', techs: ['Docker', 'Kubernetes', 'AWS ECS', 'GitHub Actions', 'Terraform', 'Datadog'] },
  ],
  pricingGuide: {
    title: 'How Much Does Node.js Development Cost?',
    description: 'Costs depend on API complexity, number of microservices, real-time requirements, and infrastructure needs. Codazz offers fixed-price quotes with performance SLAs baked in.',
    tiers: [
      { icon: '💰', name: 'REST API / MVP Backend', price: '$10,000 – $40,000', desc: 'RESTful API with auth (JWT/OAuth2), database integration (PostgreSQL/MongoDB), Swagger docs, basic tests, and Docker deployment.', timeline: '⏱ 4–8 weeks' },
      { icon: '💰', name: 'Full-Stack Backend', price: '$40,000 – $150,000', desc: 'NestJS or Fastify backend with GraphQL, real-time features (WebSocket), message queues, caching, CI/CD pipeline, monitoring, and 90%+ test coverage.', timeline: '⏱ 2–5 months' },
      { icon: '💰', name: 'Enterprise Microservices', price: '$150,000 – $400,000+', desc: 'Distributed microservices architecture with event sourcing, API gateway, service mesh, Kubernetes orchestration, distributed tracing, and 99.99% uptime SLA.', timeline: '⏱ 5–10 months' },
    ],
  },
  selectionGuide: {
    title: 'How to Choose a Node.js Development Company',
    description: 'Choosing the right Node.js partner is critical — backend architecture decisions have long-term impact on performance, scalability, and maintenance costs.',
    criteria: [
      { icon: '📋', title: 'Proven Portfolio', desc: 'Look for references with measurable results in high-throughput APIs, microservices, and real-time Node.js systems.' },
      { icon: '👨‍💻', title: 'Senior Engineers', desc: '8+ years avg experience. TypeScript, NestJS, Fastify, PostgreSQL, Redis, Kafka, Docker, and Kubernetes.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope with API endpoint milestones, performance benchmarks, and test coverage targets.' },
      { icon: '🛡️', title: 'Post-Launch SLAs', desc: 'Maintenance, security patches, performance monitoring, incident response, and uptime guarantees.' },
      { icon: '🔒', title: 'Security Certs', desc: 'SOC 2, ISO 27001, HIPAA, PCI-DSS compliant. OWASP Top 10 hardening and dependency scanning.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and production deployment coordination.' },
    ],
  },
  faqs: [
    { q: 'Is Node.js good for enterprise applications?', a: 'Yes. Companies like Netflix, LinkedIn, PayPal, and Uber use Node.js for mission-critical enterprise systems. With TypeScript, NestJS, and proper architecture patterns (CQRS, event sourcing, microservices), Node.js delivers enterprise-grade reliability, maintainability, and performance.' },
    { q: 'Node.js vs Go vs Python for backend: Which should we choose?', a: 'Choose Node.js for full-stack JavaScript teams, real-time applications, and API development. Choose Go for high-concurrency, CPU-bound workloads. Choose Python for data science, ML, and rapid prototyping. Node.js offers the best developer experience and largest ecosystem for web backends.' },
    { q: 'How does Node.js handle high concurrency?', a: 'Node.js uses an event-driven, non-blocking I/O model that handles thousands of concurrent connections on a single thread. For CPU-intensive work, Worker Threads and clustering distribute load across cores. This architecture makes Node.js ideal for I/O-heavy APIs and real-time applications.' },
    { q: 'Should we use Express or NestJS?', a: 'Express is lighter and more flexible — ideal for simple APIs and microservices. NestJS provides structure with dependency injection, modules, guards, and decorators — ideal for large enterprise applications. We recommend NestJS for projects with 3+ developers or complex domain logic.' },
    { q: 'How much does Node.js backend development cost?', a: 'A simple REST API costs $10,000-$30,000. Full-featured backends with auth, real-time features, and microservices range from $30,000-$150,000+. Node.js projects typically cost 20-30% less than comparable Java or .NET projects due to faster development velocity.' },
    { q: 'Can you migrate our existing backend to Node.js?', a: 'Yes. We migrate backends from PHP, Ruby on Rails, Java, and Python to Node.js with zero downtime. We use the strangler-fig pattern to migrate APIs incrementally, validating each endpoint before cutover.' },
  ],
  faqDescription:
    'Get answers to common questions about Node.js development, TypeScript, NestJS, API design, microservices, and backend engineering.',
  relatedBlogs: [
    { title: 'NestJS vs Express: Which Node.js Framework to Choose', desc: 'Architectural comparison for enterprise backend development in 2026.', href: '/blog/nestjs-vs-express-comparison' },
    { title: 'Building Scalable REST APIs with Node.js', desc: 'Best practices for API design, authentication, rate limiting, and documentation.', href: '/blog/scalable-rest-apis-nodejs' },
    { title: 'Node.js Microservices Architecture Guide', desc: 'Patterns, tools, and best practices for building microservices with Node.js.', href: '/blog/nodejs-microservices-guide' },
  ],
  relatedServices: [
    { name: 'Web Development', desc: 'Full-stack web applications with React and Node.js.', href: '/services/web-development' },
    { name: 'Cloud Engineering', desc: 'Scalable cloud infrastructure for Node.js backends.', href: '/services/cloud-engineering' },
    { name: 'Mobile App Development', desc: 'APIs and backends for mobile applications.', href: '/services/mobile-app-development' },
    { name: 'DevOps & CI/CD', desc: 'Automated pipelines for Node.js deployments.', href: '/services/devops' },
  ],
  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Logistics', href: '/industries/logistics' },
  ],
};

export default function NodejsDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
