'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Enterprise Portal Development' },
  ],
  hero: {
    badge: 'ENTERPRISE SOFTWARE',
    title: 'Enterprise Portals Built for',
    titleAccent: 'Security & Scale',
    description: 'We build secure, compliant enterprise portals that integrate with your existing identity infrastructure, automate complex workflows, and give thousands of users a modern, intuitive experience \u2014 with the audit trails and access controls your organization demands.',
    service: 'Enterprise Portal Development',
    stats: [
      { value: '40+', label: 'Enterprise Portals' },
      { value: '10,000+', label: 'Daily Active Users' },
      { value: 'SSO/LDAP', label: 'Integration Ready' },
      { value: 'SOC2', label: 'Compliant Builds' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Enterprise-Grade Capabilities',
    items: [
      { icon: '\uD83D\uDD11', title: 'Role-Based Access Control', desc: 'We design granular RBAC systems with hierarchical roles, permission inheritance, and dynamic policy evaluation \u2014 ensuring every user sees exactly what they should, and nothing more, across every module of the portal.' },
      { icon: '\uD83D\uDD10', title: 'SSO & LDAP Integration', desc: 'Seamless integration with your existing identity infrastructure \u2014 Active Directory, Azure AD, Okta, Ping Identity, and any SAML 2.0 or OIDC-compatible provider \u2014 giving employees a single sign-on experience across all corporate systems.' },
      { icon: '\u2699\uFE0F', title: 'Workflow Automation', desc: 'We build configurable approval workflows, notification chains, escalation rules, and task routing engines that digitise manual business processes \u2014 reducing processing times from days to minutes and eliminating paper-based bottlenecks.' },
      { icon: '\uD83D\uDCCA', title: 'Data Dashboards & Reporting', desc: 'Executive and operational dashboards with real-time data visualisations, scheduled reports, custom KPI tracking, and drill-down analytics \u2014 built with tools like Recharts, Nivo, or embedded BI solutions like Metabase.' },
      { icon: '\uD83D\uDCC1', title: 'Document Management', desc: 'Secure document storage with version control, access-controlled sharing, full-text search, approval workflows, and automated retention policies \u2014 integrated with SharePoint, Box, or a custom document store as required.' },
      { icon: '\uD83D\uDCCB', title: 'Audit Logging & Compliance', desc: 'Immutable, tamper-evident audit logs capturing every user action, data access event, and system change \u2014 with compliance reporting for SOC2, ISO 27001, HIPAA, and GDPR requirements built in from day one.' },
    ],
  },
  portfolioCategory: 'web-development',
  process: {
    label: 'Our Process',
    title: 'Our Enterprise Portal Development Process',
    steps: [
      { num: '01', title: 'Requirements Gathering', desc: 'We run structured discovery with key stakeholders across IT, compliance, and business units to document functional requirements, integration needs, security policies, and success metrics before any design work begins.' },
      { num: '02', title: 'Architecture', desc: 'We design the system architecture covering identity integration, data model, permission structure, integration points with legacy systems, infrastructure topology, and disaster recovery strategy \u2014 fully documented and reviewed.' },
      { num: '03', title: 'Phased Build', desc: 'We build in phases aligned to your business priorities \u2014 typically core authentication and primary workflows first, then reporting and advanced features \u2014 delivering usable increments every 2\u20133 weeks for stakeholder validation.' },
      { num: '04', title: 'Rollout & Training', desc: 'We manage a controlled rollout with pilot user groups, monitor adoption metrics, provide admin and end-user training documentation, and offer hypercare support for the first 30 days post-launch.' },
    ],
  },
  faqs: [
    { q: 'How do you handle legacy system integration?', a: 'We begin with a legacy system audit to understand available integration points \u2014 REST APIs, SOAP web services, direct database access, flat-file exports, or screen scraping as a last resort. We build adapter layers and transformation services that normalise data from legacy systems without requiring changes to the legacy system itself, protecting existing business continuity.' },
    { q: 'Can you integrate SSO with our existing identity provider?', a: 'Yes. We integrate with any SAML 2.0 or OIDC-compatible identity provider \u2014 including Active Directory Federation Services, Azure AD/Entra ID, Okta, Ping Identity, and Google Workspace. For environments without a modern IdP, we can configure LDAP-based authentication with the portal acting as the SSO-enabled front door.' },
    { q: 'How do you ensure compliance with regulations like SOC2 or HIPAA?', a: 'We design compliance in from the start rather than bolting it on. This includes encrypted data at rest and in transit, immutable audit logging, role-based access with least-privilege principles, session management controls, automated data retention and purge policies, and penetration testing before go-live. We produce compliance documentation artefacts to support your audit processes.' },
    { q: 'On-premise or cloud deployment \u2014 which do you support?', a: 'Both. We build cloud-native deployments on AWS, Azure, or GCP using containerized workloads with Kubernetes for scalability and resilience. For organizations with data sovereignty requirements or existing on-premise infrastructure, we support deployment to private cloud or on-premise Kubernetes clusters with the same architecture.' },
    { q: 'How do you handle change management for a new enterprise portal?', a: 'Change management is built into our delivery process. We involve business stakeholders throughout via regular demos and feedback sessions, run a controlled pilot with power users before broad rollout, provide role-specific training materials and video walkthroughs, and establish a feedback channel for the first 60 days. Adoption metrics are tracked and reported to leadership throughout.' },
  ],
  faqDescription: 'Everything you need to know about our enterprise portal development services.',
  ctaTitle: 'Ready to Modernise Your Enterprise Portal?',
  ctaDescription: 'Let\'s discuss your requirements and design a secure, scalable portal that your organization will actually use.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
