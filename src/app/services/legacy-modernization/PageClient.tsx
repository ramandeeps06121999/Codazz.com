'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Legacy System Modernization' },
  ],
  hero: {
    badge: 'Legacy System Modernization',
    title: 'Modernize Your Legacy Systems.',
    titleAccent: 'Unlock Growth.',
    description:
      'We migrate monoliths to microservices, move on-prem to cloud, and re-engineer aging applications — with zero downtime and zero data loss.',
    service: 'Legacy Modernization',
    stats: [
      { value: '120+', label: 'Systems Modernized' },
      { value: '99.9%', label: 'Uptime During Migration' },
      { value: '60%', label: 'Avg Cost Reduction' },
      { value: '4.9', label: 'Client Rating', suffix: '★' },
    ],
  },
  awards: [
    'Clutch Top Modernization Company 2026',
    'AWS Migration Competency',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'Azure Migration Partner',
    'Google Cloud Partner',
    'Top IT Services - GoodFirms',
    'Zero-Downtime Track Record',
  ],
  whySection: {
    title: 'Why Legacy Systems Are Holding You Back',
    cards: [
      { icon: '🔓', title: 'Security Vulnerabilities', desc: 'Legacy systems run on outdated frameworks and unpatched dependencies. Every day without modernization expands your attack surface. EOL software receives zero security patches.' },
      { icon: '💸', title: 'High Maintenance Costs', desc: 'Maintaining legacy code costs 3-5x more than modern equivalents. Custom patches, vendor lock-in, expensive licensing, and workarounds drain engineering budgets every quarter.' },
      { icon: '👤', title: 'Talent Shortage', desc: 'Finding developers who know COBOL, VB6, classic ASP, or legacy Java frameworks is increasingly impossible. The talent pool shrinks as experienced engineers retire.' },
      { icon: '⚠️', title: 'Integration Bottlenecks', desc: 'Legacy systems were never designed for APIs or real-time data exchange. Every new integration becomes a multi-month custom project instead of a simple API call.' },
    ],
    whoNeedsTitle: 'Who Needs Legacy Modernization?',
    whoNeedsItems: [
      { icon: '🏭', title: 'Manufacturing & Enterprise', desc: 'Aging ERP systems, custom-built inventory management, and on-prem databases costing millions in maintenance and downtime.' },
      { icon: '🏦', title: 'Financial Services', desc: 'COBOL mainframes, legacy trading platforms, and monolithic banking applications that cannot meet modern regulatory requirements.' },
      { icon: '🏥', title: 'Healthcare', desc: 'Legacy EHR systems, HIPAA compliance gaps, and on-prem medical record databases that need cloud migration.' },
      { icon: '🏛️', title: 'Government & Public Sector', desc: 'Decades-old systems running on unsupported platforms that need modernization without disrupting citizen services.' },
      { icon: '🛒', title: 'Retail & E-Commerce', desc: 'Monolithic platforms struggling with traffic spikes, slow feature delivery, and outdated payment integrations.' },
      { icon: '📦', title: 'Logistics & Supply Chain', desc: 'Legacy tracking systems, manual processes, and disconnected databases that limit real-time visibility.' },
    ],
    metricsTitle: 'Modernization Impact',
    metrics: [
      { metric: '60-80%', label: 'Cost Reduction', desc: 'Infrastructure savings' },
      { metric: '4-5x', label: 'Developer Productivity', desc: 'Features per quarter' },
      { metric: '99.9%', label: 'Uptime', desc: 'Post-modernization' },
      { metric: '80-95%', label: 'Fewer Incidents', desc: 'Security improvements' },
      { metric: '75%', label: 'Faster Hiring', desc: 'Modern stack appeal' },
      { metric: '10x', label: 'Faster Deploys', desc: 'Monthly to daily' },
    ],
    closingText:
      'Legacy modernization is not just a technology project — it is a business transformation. At Codazz, we use strangler-fig patterns and blue-green deployments to migrate your systems incrementally, ensuring zero downtime and zero data loss. Every project includes rollback procedures, data validation, and comprehensive knowledge transfer. You see measurable improvements within weeks, not months.',
  },
  subServices: [
    {
      title: 'Monolith to Microservices',
      tag: 'Architecture',
      desc: 'Decompose tightly coupled monoliths into independently deployable microservices using the strangler-fig pattern — no big-bang rewrites, no downtime.',
      chips: ['Domain-Driven', 'Event-Driven', 'API Gateway', 'Service Mesh'],
      href: '/services/legacy-modernization/microservices',
      icon: '🧩',
    },
    {
      title: 'On-Prem to Cloud',
      tag: 'Cloud Migration',
      desc: 'Migrate from physical data centers to AWS, Azure, or GCP with infrastructure-as-code, containerization, and cost optimization from day one.',
      chips: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
      href: '/services/legacy-modernization/cloud-migration',
      icon: '☁️',
    },
    {
      title: 'Database Migration',
      tag: 'Data',
      desc: 'Move from legacy databases — Oracle, SQL Server, MySQL on-prem — to modern managed solutions with zero data loss and schema optimization.',
      chips: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Aurora', 'Cloud SQL'],
      href: '/services/legacy-modernization/database-migration',
      icon: '🗄️',
    },
    {
      title: 'API-First Modernization',
      tag: 'Integration',
      desc: 'Wrap legacy systems with modern RESTful and GraphQL APIs so they can integrate with any modern tool, partner, or platform.',
      chips: ['REST', 'GraphQL', 'API Gateway', 'OAuth 2.0', 'OpenAPI'],
      href: '/services/legacy-modernization/api-modernization',
      icon: '🔗',
    },
    {
      title: 'Replatform & Refactor',
      tag: 'Incremental',
      desc: 'Move existing applications to modern infrastructure with minimal code changes, or incrementally restructure for better performance and maintainability.',
      chips: ['Lift & Shift', 'Containers', 'CI/CD', 'Blue-Green Deploy'],
      href: '/services/legacy-modernization/replatform',
      icon: '🔄',
    },
    {
      title: 'Full Rebuild',
      tag: 'Greenfield',
      desc: 'Build completely new applications using modern frameworks and cloud-native architecture while preserving business rules, data models, and workflows.',
      chips: ['React', 'Node.js', 'Go', 'Cloud-Native', 'Microservices'],
      href: '/services/legacy-modernization/rebuild',
      icon: '🏗️',
    },
  ],
  servicesHeading: {
    label: 'How We Modernize',
    title: 'Legacy Modernization Services',
    titleDim: 'Zero-downtime guaranteed.',
    description:
      'From re-platforming and refactoring to full rebuilds and API-first modernization — we choose the right approach for each component of your system.',
  },
  benefits: {
    label: 'Why Codazz Modernization',
    title: 'Modernization That',
    titleDim: 'Protects Your Business.',
    items: [
      { icon: '✅', title: 'Zero-Downtime Guarantee', desc: 'Every migration uses strangler-fig patterns and blue-green deployments. Your business runs at full capacity throughout the entire process.' },
      { icon: '🔒', title: 'Data Integrity First', desc: 'Parallel environments with real-time data syncs, automated validation, and comprehensive reconciliation reports before any cutover.' },
      { icon: '↩️', title: 'Rollback at Every Step', desc: 'Every migration phase has a tested rollback procedure. No big-bang migrations, no irreversible changes.' },
      { icon: '📚', title: 'Knowledge Transfer Built In', desc: 'Documentation, architecture decision records, runbooks, and hands-on training for your team included in every project.' },
    ],
  },
  clientLogos: [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
    'Terraform', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka',
    'Datadog', 'PagerDuty', 'GitHub', 'GitLab', 'New Relic',
    'Grafana',
  ],
  bigStats: [
    { value: '120+', label: 'Systems Modernized', desc: 'Across industries' },
    { value: '99.9%', label: 'Uptime', desc: 'During migration' },
    { value: '60%', label: 'Cost Reduction', desc: 'Average savings' },
    { value: '10x', label: 'Faster Deploys', desc: 'Post-modernization' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 70+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🧩', title: 'Strangler Fig Pattern', desc: 'Incremental migration without downtime or risk' },
      { icon: '🐳', title: 'Containerization', desc: 'Docker and Kubernetes for portable, scalable workloads' },
      { icon: '📦', title: 'Infrastructure as Code', desc: 'Terraform and Pulumi for reproducible environments' },
      { icon: '🔄', title: 'Blue-Green Deploys', desc: 'Zero-downtime deployments with instant rollback' },
      { icon: '📊', title: 'Observability', desc: 'Full-stack monitoring with Datadog and Grafana' },
      { icon: '🔐', title: 'Zero Trust', desc: 'Modern security architecture for cloud-native apps' },
    ],
    row2: [
      { icon: '📨', title: 'Event Sourcing', desc: 'Event-driven architecture for microservices communication' },
      { icon: '🗃️', title: 'Data Pipelines', desc: 'ETL and real-time streaming for data migration' },
      { icon: '🧪', title: 'Canary Releases', desc: 'Gradual traffic shifting for safe deployments' },
      { icon: '🔗', title: 'API Gateway', desc: 'Kong, AWS API Gateway for service orchestration' },
      { icon: '📋', title: 'Service Mesh', desc: 'Istio and Linkerd for microservice communication' },
      { icon: '⚡', title: 'Serverless', desc: 'AWS Lambda and Cloud Functions for event-driven workloads' },
    ],
  },
  techStack: [
    { category: 'Backend', techs: ['Node.js', 'Python', 'Go', '.NET Core', 'Java (Spring Boot)', 'Rust'] },
    { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular'] },
    { category: 'Cloud & DevOps', techs: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] },
    { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'Elasticsearch'] },
    { category: 'Messaging & Events', techs: ['Kafka', 'RabbitMQ', 'SQS/SNS', 'EventBridge'] },
    { category: 'Monitoring', techs: ['Datadog', 'Grafana', 'Prometheus', 'New Relic', 'PagerDuty'] },
  ],
  pricingGuide: {
    title: 'How Much Does Legacy Modernization Cost?',
    description: 'Costs depend on system complexity, number of components, chosen migration strategy, and timeline urgency. Codazz offers fixed-price quotes with phased milestones and clear ROI projections.',
    tiers: [
      { icon: '💰', name: 'Targeted Re-Platform', price: 'Starting at $30,000', desc: 'Migrate a single legacy application to cloud infrastructure with containerization, CI/CD, and basic monitoring. Ideal for quick wins and cost reduction.', timeline: '⏱ 8–12 weeks' },
      { icon: '💰', name: 'Application Modernization', price: 'Starting at $60,000', desc: 'Decompose a monolith into microservices, migrate databases, add API layers, and implement full observability. Includes knowledge transfer and documentation.', timeline: '⏱ 4–8 months' },
      { icon: '💰', name: 'Enterprise Transformation', price: 'Starting at $188,000', desc: 'Multi-system modernization program — monolith decomposition, cloud migration, database re-platforming, API-first integration, and full organizational change management.', timeline: '⏱ 8–18 months' },
    ],
  },
  selectionGuide: {
    title: 'How to Choose a Legacy Modernization Company',
    description: 'Choosing the right modernization partner is critical — one wrong migration can mean data loss or extended downtime.',
    criteria: [
      { icon: '📋', title: 'Proven Portfolio', desc: 'Look for references with measurable results in monolith-to-microservices, cloud migration, and zero-downtime cutovers.' },
      { icon: '👨‍💻', title: 'Senior Engineers', desc: '8+ years avg experience. AWS/Azure/GCP, Docker, Kubernetes, Terraform, and legacy stack familiarity (COBOL, .NET, Java).' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope with phased milestones, rollback procedures, and data validation checkpoints.' },
      { icon: '🛡️', title: 'Post-Launch SLAs', desc: 'Maintenance, monitoring, incident response, and uptime guarantees for modernized systems.' },
      { icon: '🔒', title: 'Security Certs', desc: 'SOC 2, ISO 27001, HIPAA, PCI-DSS compliant. Zero-trust architecture and encrypted data migration.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and stakeholder alignment meetings.' },
    ],
  },
  faqs: [
    { q: 'How long does a legacy modernization project typically take?', a: 'Timelines vary by scope. A targeted re-platforming of a single application takes 8-16 weeks. A full monolith-to-microservices migration for an enterprise system typically runs 6-18 months with phased rollouts. We always start with a 2-4 week assessment and pilot phase so you see value early.' },
    { q: 'Can you modernize our system without downtime?', a: 'Yes. We use strangler-fig patterns, blue-green deployments and incremental migration strategies that keep your existing system running while we build and cut over to the modernized version. Zero-downtime migration is a core requirement in every project we take on.' },
    { q: 'What is the difference between re-platforming, refactoring and rebuilding?', a: 'Re-platforming moves your application to a new infrastructure (e.g., cloud) with minimal code changes. Refactoring restructures the internal codebase for better performance and maintainability. Rebuilding means creating a new application from scratch using modern architecture while preserving business logic and data.' },
    { q: 'Will we lose data during migration?', a: 'Absolutely not. Data integrity is non-negotiable. We run parallel environments, perform incremental data syncs and execute comprehensive validation checks before any cutover. Every migration includes rollback procedures and data reconciliation reports.' },
    { q: 'How much does legacy modernization cost?', a: 'Cost depends on system complexity, chosen approach and timeline. A focused re-platforming project starts at $30,000. Full enterprise modernization programs start at $60,000. We provide detailed cost-benefit analysis during the assessment phase so ROI is clear before committing.' },
    { q: 'What technologies do you migrate legacy systems to?', a: 'We migrate to modern stacks including Node.js, Python, Go, .NET Core, React, Next.js, and cloud-native architectures on AWS, Azure and GCP. Database migrations cover PostgreSQL, MongoDB, DynamoDB and more. The target stack is chosen based on your team capabilities, performance needs and long-term strategy.' },
  ],
  faqDescription:
    'Get answers to common questions about legacy modernization, cloud migration, monolith decomposition, and enterprise system transformation.',
  relatedBlogs: [
    { title: 'Monolith to Microservices: A Step-by-Step Guide', desc: 'How to decompose a monolithic application into microservices without downtime.', href: '/blog/monolith-to-microservices-guide' },
    { title: 'Cloud Migration Cost Calculator: What to Expect', desc: 'Budgeting guide for migrating from on-prem to AWS, Azure, or GCP.', href: '/blog/cloud-migration-cost-guide' },
    { title: 'The Strangler Fig Pattern Explained', desc: 'The safest approach to legacy modernization — incremental migration without risk.', href: '/blog/strangler-fig-pattern-explained' },
  ],
  relatedServices: [
    { name: 'Cloud Engineering', desc: 'Modern cloud infrastructure on AWS, Azure, and GCP.', href: '/services/cloud-engineering' },
    { name: 'DevOps & CI/CD', desc: 'Automated pipelines for continuous deployment.', href: '/services/devops' },
    { name: 'Web Development', desc: 'Modern web applications to replace legacy frontends.', href: '/services/web-development' },
    { name: 'Cybersecurity', desc: 'Security hardening for modernized systems.', href: '/services/cybersecurity' },
  ],
  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Government', href: '/industries/government' },
  ],
};

export default function LegacyModernizationPage() {
  return <ServicePageTemplate data={pageData} />;
}
