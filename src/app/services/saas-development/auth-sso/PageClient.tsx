'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'SaaS Development', href: '/services/saas-development' },
    { label: 'Authentication & SSO' },
  ],
  hero: {
    badge: 'SAAS DEVELOPMENT',
    title: 'SaaS Authentication',
    titleAccent: '& SSO',
    description: 'Secure auth infrastructure that scales from consumer to enterprise — SAML SSO, MFA, RBAC and audit logs that win you deals and pass security reviews.',
    service: 'Authentication & SSO',
    stats: [
      { value: '40+', label: 'Auth Systems Built' },
      { value: 'SOC2', label: 'Compliant Patterns' },
      { value: 'SAML', label: 'OIDC & OAuth2' },
      { value: 'Enterprise', label: 'SSO Ready' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '🔑', title: 'Email/Password & Social Auth', desc: 'Secure credential auth with bcrypt hashing, brute-force protection, and social OAuth2 (Google, GitHub, Microsoft) — the baseline every SaaS needs.' },
      { icon: '🏢', title: 'SSO (SAML 2.0 & OIDC)', desc: 'Enterprise SSO integration allowing customers to connect their corporate identity provider (Okta, Azure AD, Google Workspace) via SAML 2.0 or OIDC.' },
      { icon: '🛡️', title: 'Multi-Factor Authentication', desc: 'TOTP-based MFA (Google Authenticator, Authy), SMS fallback, backup codes, and MFA enforcement policies per organization — critical for enterprise deals.' },
      { icon: '👤', title: 'Role-Based Access Control (RBAC)', desc: 'Flexible RBAC with custom roles, granular resource-level permissions, and a permission management UI so admins can configure access without engineering.' },
      { icon: '📋', title: 'Audit Logs & Session Management', desc: 'Immutable audit logs of all authentication and permission events, active session listing with remote revocation, and suspicious activity detection.' },
      { icon: '🔄', title: 'Auth Migration from Legacy Systems', desc: 'Secure migration of existing user password hashes (bcrypt, scrypt, pbkdf2), session tokens, and permissions from legacy systems with zero forced re-registration.' },
    ],
  },
  portfolioCategory: 'saas-development',
  process: {
    label: 'Our Process',
    title: 'Our Authentication & SSO Process',
    steps: [
      { num: '01', title: 'Auth Requirements', desc: 'We map your user types, access control requirements, enterprise customer expectations and compliance obligations to define the full scope of your auth system.' },
      { num: '02', title: 'Provider Selection', desc: 'Evaluate Auth0, Clerk, Supabase Auth, WorkOS, or custom implementation against your requirements — recommending the right tool for your scale, budget and control needs.' },
      { num: '03', title: 'Implementation', desc: 'Full auth system implementation — registration, login, MFA, SSO, RBAC, session management, audit logs — with security-first patterns throughout.' },
      { num: '04', title: 'Security Audit', desc: 'Pre-launch security review covering token handling, session fixation, CSRF protection, rate limiting, and common auth vulnerabilities (OWASP Top 10 auth issues).' },
    ],
  },
  faqs: [
    { q: 'Auth0 vs Clerk vs custom auth — what should I use?', a: 'Clerk offers the best developer experience and built-in UI components — great for B2C SaaS moving fast. Auth0 has the deepest enterprise SSO support and compliance certifications — good for B2B enterprise. WorkOS is purpose-built for adding enterprise features (SSO, SCIM, Audit Logs) to an existing auth system. Custom auth gives maximum control but requires expertise to implement securely. We help you choose based on your go-to-market motion and security requirements.' },
    { q: 'What is SSO and when do I need it?', a: 'Single Sign-On allows users to log in with their corporate identity provider (like Okta or Azure AD) instead of a separate username/password. You need SSO when selling to mid-market and enterprise customers — it is commonly a hard requirement in security questionnaires and procurement processes. Without SSO, you will lose deals. Budget to build it before you hit $1M ARR.' },
    { q: 'How to implement RBAC correctly?', a: 'Start with a small set of well-defined roles (Owner, Admin, Member) and granular permissions rather than trying to model every edge case upfront. Enforce permissions at the API layer — never rely solely on UI hiding. Store permission checks in a central location (a permissions service or utility) so they can be audited. Add custom roles as a paid feature when enterprise customers request it.' },
    { q: 'How do enterprise customers connect their identity provider?', a: 'Via SAML 2.0 or OIDC. The enterprise IT admin configures your app as a Service Provider in their identity provider (Okta, Azure AD, etc.), exchanges metadata, and maps user attributes. We build the self-serve SSO configuration flow so enterprise admins can connect their IdP without contacting your support team, using WorkOS or Auth0 as the SAML/OIDC broker.' },
    { q: 'How do you handle auth security?', a: 'We implement defence in depth: HTTPS everywhere, httpOnly secure cookies for session tokens, CSRF protection on state-changing endpoints, rate limiting on auth endpoints, account lockout after failed attempts, secure password reset flows with short-lived tokens, and regular token rotation. We also implement monitoring for anomalous login patterns and provide alerts for suspicious activity.' },
  ],
  faqDescription: 'Everything you need to know about our authentication and SSO services.',
  ctaTitle: 'Ready to Secure Your SaaS?',
  ctaDescription: 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
