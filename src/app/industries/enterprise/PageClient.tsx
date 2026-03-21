'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Enterprise' },
  ],
  hero: {
    badge: 'ENTERPRISE SOFTWARE DEVELOPMENT',
    title: 'We Build Enterprise Software That',
    titleAccent: 'Actually Works.',
    description: 'Internal tools, workflow automation, ERP integrations, and mission-critical systems for companies with thousands of employees and complex operations.',
    service: 'Enterprise Development',
    stats: [
      { value: '5,000+', label: 'Enterprise Users' },
      { value: 'SOC II', label: 'Certified' },
      { value: 'Zero', label: 'Critical Downtime' },
      { value: '30+', label: 'Enterprise Projects' },
    ],
  },
  awards: [
    'SOC 2 Type II Compliant',
    'ISO 27001 Aligned',
    'Top Enterprise Developer 2024',
    'AWS Enterprise Partner',
    'Microsoft Gold Partner',
    'Enterprise Architecture Experts',
  ],
  whySection: {
    title: 'Why Enterprises Choose Codazz',
    cards: [
      { icon: '\u{1F517}', title: 'Legacy System Integration', desc: 'Connecting decades-old ERP, CRM, and mainframe systems to modern interfaces and APIs without the big-bang migration risk that derails projects.' },
      { icon: '\u{1F512}', title: 'Enterprise Security', desc: 'SSO, RBAC, audit trails, and zero-trust networking that satisfies your CISO, passes penetration tests, and keeps business data protected.' },
      { icon: '\u{1F465}', title: 'Change Management', desc: 'Software that employees actually adopt. We conduct user research, design onboarding flows, and drive real utilization across the organization.' },
      { icon: '\u{2699}\u{FE0F}', title: 'Workflow Automation', desc: 'Eliminating manual processes with intelligent automation, approval chains, and integrations that save thousands of hours per month.' },
    ],
    whoNeedsTitle: 'Who Needs Enterprise Software?',
    whoNeedsItems: [
      { icon: '\u{1F3E2}', title: 'Large Organizations', desc: 'Custom internal tools, admin dashboards, and employee portals that replace spreadsheets and manual workflows.' },
      { icon: '\u{1F3ED}', title: 'Manufacturing & Operations', desc: 'ERP integrations, production tracking, quality management, and supply chain visibility systems.' },
      { icon: '\u{1F3E6}', title: 'Financial Services', desc: 'Compliance platforms, risk management tools, and regulatory reporting systems.' },
      { icon: '\u{1F3E5}', title: 'Healthcare Enterprises', desc: 'Clinical workflow automation, multi-system integration, and population health management.' },
      { icon: '\u{1F4BC}', title: 'Professional Services', desc: 'Resource management, project tracking, time billing, and client portal systems.' },
    ],
    metricsTitle: 'Enterprise Development by the Numbers',
    metrics: [
      { metric: '5,000+', label: 'Enterprise Users', desc: 'On our platforms' },
      { metric: '60%', label: 'Manual Task Reduction', desc: 'Average automation savings' },
      { metric: '$2.1M', label: 'Annual Savings', desc: 'Average per enterprise client' },
      { metric: '30+', label: 'Enterprise Projects', desc: 'Delivered successfully' },
    ],
    closingText: 'Whether you need custom ERP integrations, internal tooling, or workflow automation, Codazz builds enterprise software that survives leadership changes, acquisitions, and a decade of growth. We design for maintainability, extensibility, and the organizational realities of large companies.',
  },
  subServices: [
    { title: 'Custom ERP & CRM Systems', tag: 'ERP/CRM', desc: 'Multi-department workflow automation, approval chains, reporting dashboards, and deep integrations with SAP, Salesforce, and Oracle.', chips: ['SAP', 'Salesforce', 'Workflows', 'Dashboards'], href: '/contact', icon: '\u{1F3E2}' },
    { title: 'Enterprise Integration & APIs', tag: 'Integration', desc: 'REST and GraphQL API platforms, ESB implementations, legacy middleware bridges, and SSO unification across your technology estate.', chips: ['APIs', 'ESB', 'SSO', 'Middleware'], href: '/contact', icon: '\u{1F517}' },
    { title: 'Internal Tooling', tag: 'Tools', desc: 'Custom admin panels, operations dashboards, and employee-facing apps that replace spreadsheets and manual processes.', chips: ['Admin Panels', 'Dashboards', 'Portals', 'Automation'], href: '/contact', icon: '\u{1F6E0}\u{FE0F}' },
    { title: 'Business Intelligence', tag: 'BI', desc: 'Real-time reporting dashboards, data warehousing, and self-service analytics that empower every department.', chips: ['Power BI', 'Tableau', 'Looker', 'dbt'], href: '/contact', icon: '\u{1F4CA}' },
    { title: 'Workflow Automation', tag: 'Automation', desc: 'End-to-end process automation with approval chains, notifications, and integrations that eliminate repetitive tasks.', chips: ['Approvals', 'Notifications', 'Triggers', 'Rules'], href: '/contact', icon: '\u{2699}\u{FE0F}' },
    { title: 'MDM & Compliance', tag: 'Compliance', desc: 'Master data management, audit trails, and regulatory compliance tooling that keeps your organization aligned with standards.', chips: ['MDM', 'Audit Trail', 'RBAC', 'Compliance'], href: '/contact', icon: '\u{1F512}' },
  ],
  servicesHeading: {
    label: 'Our Enterprise Solutions',
    title: 'Mission-Critical',
    titleDim: 'Enterprise Technology.',
    description: 'From internal tools to enterprise-wide integrations, we build software that handles the complexity of large organizations with security and reliability at the core.',
  },
  benefits: {
    label: 'Why Codazz for Enterprise',
    title: 'Built for Decades',
    titleDim: 'Not Just Sprints.',
    items: [
      { icon: '\u{1F3DB}\u{FE0F}', title: 'Enterprise Architecture', desc: 'Designed for maintainability, extensibility, and the organizational realities of large companies with multi-year roadmaps.' },
      { icon: '\u{1F512}', title: 'Security & Compliance', desc: 'SOC 2 Type II, ISO 27001 alignment, penetration testing, and security architecture that passes enterprise audits.' },
      { icon: '\u{1F517}', title: 'Legacy Integration', desc: 'Deep experience connecting modern applications with SAP, Oracle, mainframes, and decades-old enterprise systems.' },
      { icon: '\u{2699}\u{FE0F}', title: 'Process Automation', desc: 'Intelligent workflow automation that eliminates manual tasks and reduces human error across departments.' },
      { icon: '\u{1F4CA}', title: 'Data-Driven Insights', desc: 'Business intelligence and analytics that turn enterprise data into actionable decisions.' },
      { icon: '\u{1F91D}', title: 'Long-Term Partnership', desc: 'Ongoing development, support, and strategic guidance as your business evolves and grows.' },
    ],
  },
  clientLogos: [
    'SAP', 'Salesforce', 'Oracle', 'Microsoft', 'ServiceNow', 'Workday',
    'Slack', 'Jira', 'Okta', 'Snowflake', 'Tableau', 'Power BI',
  ],
  bigStats: [
    { value: '5,000+', label: 'Enterprise Users', desc: 'On our platforms' },
    { value: '$2.1M', label: 'Annual Savings', desc: 'Per enterprise client' },
    { value: '60%', label: 'Task Reduction', desc: 'Through automation' },
    { value: 'Zero', label: 'Critical Downtime', desc: 'Mission-critical SLA' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F517}', title: 'API Gateway', desc: 'Unified enterprise API management' },
      { icon: '\u{1F512}', title: 'Zero-Trust', desc: 'Enterprise security architecture' },
      { icon: '\u{2699}\u{FE0F}', title: 'Workflow Engine', desc: 'Configurable business process automation' },
      { icon: '\u{1F4CA}', title: 'BI Dashboards', desc: 'Real-time business intelligence' },
      { icon: '\u{1F465}', title: 'SSO & RBAC', desc: 'Enterprise identity management' },
    ],
    row2: [
      { icon: '\u{1F916}', title: 'AI Automation', desc: 'Intelligent document processing' },
      { icon: '\u{1F4DD}', title: 'Audit Logging', desc: 'Compliance-ready activity tracking' },
      { icon: '\u{2601}\u{FE0F}', title: 'Cloud Migration', desc: 'Legacy to cloud transformation' },
      { icon: '\u{1F4F1}', title: 'Employee Apps', desc: 'Mobile-first internal tools' },
      { icon: '\u{1F527}', title: 'Microservices', desc: 'Scalable service architecture' },
    ],
  },
  techStack: [
    { category: 'Integration', techs: ['MuleSoft', 'Apache Camel', 'REST', 'GraphQL', 'gRPC'] },
    { category: 'Auth & Security', techs: ['Okta', 'Azure AD', 'SAML', 'OAuth2', 'LDAP'] },
    { category: 'Backend', techs: ['Java', '.NET', 'Python', 'Go', 'Kubernetes'] },
    { category: 'BI & Data', techs: ['Power BI', 'Tableau', 'Looker', 'dbt', 'Snowflake'] },
    { category: 'Cloud', techs: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker'] },
    { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Electron'] },
  ],
  faqs: [
    { q: 'Can you integrate with our legacy enterprise systems?', a: 'Yes. We have deep experience integrating with SAP, Oracle, Salesforce, mainframes, and custom legacy systems. We build API bridges, middleware, and data sync layers that connect modern applications to existing infrastructure without disruptive migrations.' },
    { q: 'How do you handle enterprise security requirements?', a: 'Security is foundational to our enterprise work. We implement SSO (SAML/OAuth), role-based access control, audit trails, encryption at rest and in transit, zero-trust networking, and regular penetration testing. Our processes align with SOC 2 Type II and ISO 27001 standards.' },
    { q: 'What is your approach to change management?', a: 'We design for adoption from day one. This means extensive user research with actual employees, iterative UX testing, clear onboarding flows, and phased rollouts. We have learned that the best enterprise software fails if people refuse to use it.' },
    { q: 'Can you build custom internal tools to replace spreadsheets?', a: 'Absolutely. We have replaced countless spreadsheet-based workflows with purpose-built internal tools. These typically include data entry forms, approval workflows, reporting dashboards, and integrations with existing systems, reducing errors and saving hundreds of hours per month.' },
    { q: 'Do you provide ongoing support after launch?', a: 'Yes. Enterprise software requires ongoing development, security patches, compliance updates, and feature enhancements. We offer retainer-based support packages that include dedicated development hours, priority support, and quarterly strategic reviews.' },
    { q: 'How do you handle multi-department requirements?', a: 'We use a structured discovery process that includes stakeholder interviews across departments, workflow mapping, and requirement prioritization. We build modular systems where each department gets customized views and workflows while sharing a unified data layer.' },
  ],
  faqDescription: 'Common questions about our enterprise software development services, integration capabilities, and security approach.',
  relatedBlogs: [
    { title: 'Enterprise Integration Architecture Patterns', desc: 'Best practices for connecting legacy and modern enterprise systems.', href: '/blog' },
    { title: 'Building Internal Tools That Employees Actually Use', desc: 'Design principles for enterprise software adoption and engagement.', href: '/blog' },
    { title: 'Workflow Automation: The ROI of Process Digitization', desc: 'How enterprise automation delivers measurable cost savings.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Web Development', desc: 'Internal tools, admin dashboards, and employee portals for large organizations.', href: '/services/web-development' },
    { name: 'Cloud & DevOps', desc: 'Enterprise cloud migrations, Kubernetes orchestration, and CI/CD pipelines.', href: '/services/cloud-devops' },
    { name: 'AI & Machine Learning', desc: 'Business intelligence models, process automation, and predictive analytics.', href: '/services/ai-ml' },
    { name: 'SaaS Development', desc: 'Multi-tenant enterprise platforms with SSO, RBAC, and compliance tooling.', href: '/services/saas-development' },
  ],
  industries: [
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
    { name: 'On-Demand', href: '/industries/on-demand' },
  ],
};

export default function EnterprisePage() {
  return <ServicePageTemplate data={pageData} />;
}
