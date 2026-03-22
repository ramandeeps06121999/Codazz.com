'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'SaaS Development', href: '/services/saas-development' },
    { label: 'Multi-Tenant Architecture' },
  ],
  hero: {
    badge: 'SAAS DEVELOPMENT',
    title: 'Multi-Tenant SaaS',
    titleAccent: 'Architecture',
    description: 'Rock-solid tenant isolation, organization management and RBAC — built for the compliance and scale demands of enterprise SaaS.',
    service: 'Multi-Tenant Architecture',
    stats: [
      { value: '30+', label: 'Multi-Tenant Systems Built' },
      { value: '10M+', label: 'Records Isolated' },
      { value: '99.99%', label: 'Data Integrity' },
      { value: '2', label: 'Isolation Models Supported' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '🏗️', title: 'Tenant Isolation Design', desc: 'Schema-per-tenant for maximum isolation and compliance, or row-level security for simpler ops — we select and implement the right model for your product and regulatory context.' },
      { icon: '👥', title: 'Organization & Team Management', desc: 'Multi-level organizational hierarchies — organizations, teams, departments — with member invitations, role assignment and org-level settings management.' },
      { icon: '🔒', title: 'Tenant-Scoped Permissions (RBAC)', desc: 'Role-based access control scoped to each tenant — owners, admins, members with granular resource permissions enforced at the API and database layer.' },
      { icon: '🌐', title: 'Custom Domains per Tenant', desc: 'White-label custom domain support so each tenant can serve your app from their own domain — with automated SSL provisioning via Let\'s Encrypt.' },
      { icon: '🤖', title: 'Tenant Onboarding Automation', desc: 'Automated provisioning of tenant database schemas, default data seeding, invitation emails, and billing account creation — onboard new customers in seconds.' },
      { icon: '🛡️', title: 'Data Residency & Compliance', desc: 'GDPR-compliant data handling, tenant data export and deletion workflows, audit trails, and data residency options for EU/US tenants.' },
    ],
  },
  portfolioCategory: 'saas-development',
  process: {
    label: 'Our Process',
    title: 'Our Multi-Tenant Architecture Process',
    steps: [
      { num: '01', title: 'Isolation Model Selection', desc: 'We evaluate your product\'s compliance requirements, expected tenant count, performance SLAs and operational complexity to recommend the optimal isolation strategy.' },
      { num: '02', title: 'Database Schema Design', desc: 'Design of the tenant model, foreign key constraints, Row Level Security policies (Postgres), index strategy, and migration plan for future tenant provisioning.' },
      { num: '03', title: 'Implementation', desc: 'End-to-end implementation — tenant context middleware, RLS policies, RBAC system, custom domain infrastructure, and tenant admin portal — with comprehensive test coverage.' },
      { num: '04', title: 'Load Testing', desc: 'Load testing with realistic multi-tenant traffic patterns to verify isolation holds under concurrent load, identify N+1 queries, and validate the provisioning pipeline at scale.' },
    ],
  },
  faqs: [
    { q: 'Schema-per-tenant vs row-level isolation — which is right?', a: 'Schema-per-tenant (separate database schema per customer) provides the strongest isolation, easier per-tenant backups and restores, and is preferred for enterprise/regulated customers. Row-level security (RLS) uses a single schema with a tenant_id column and Postgres policies — simpler operations, lower provisioning overhead, and scales to thousands of tenants more easily. The right choice depends on your compliance requirements and tenant count.' },
    { q: 'How do you prevent data leakage between tenants?', a: 'We implement defence in depth: tenant context is set at the start of every request, Postgres Row Level Security policies enforce isolation at the database level even if application code has a bug, all API responses are validated for tenant scope before returning, and we write automated tests specifically designed to probe for cross-tenant data access.' },
    { q: 'Can we add multi-tenancy to an existing product?', a: 'Yes, but it requires careful planning. We conduct a codebase audit to identify all places where data is fetched without tenant scoping, design a migration path that adds tenant context without breaking existing data, and implement the changes incrementally. It\'s more complex than greenfield multi-tenancy but very achievable with the right approach.' },
    { q: 'How to handle tenant-specific customisation?', a: 'We implement a tenant configuration system — a JSON settings table per tenant that drives feature flags, UI customisation, integration credentials and workflow rules. This avoids custom code per tenant while giving tenants meaningful flexibility. For deeper customisation needs (custom fields, workflows), we build a proper extensibility layer.' },
    { q: 'How does multi-tenancy affect performance?', a: 'With proper indexing on tenant_id columns and RLS policies, the performance overhead of multi-tenancy is minimal — typically under 5% compared to a single-tenant equivalent. The bigger risk is N+1 queries and missing indexes as data grows. We profile and optimize these during load testing, and set up query monitoring in production to catch regressions early.' },
  ],
  faqDescription: 'Everything you need to know about our multi-tenant architecture services.',
  ctaTitle: 'Ready to Build Multi-Tenant?',
  ctaDescription: 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
