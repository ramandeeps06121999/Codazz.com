'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cybersecurity' },
  ],
  hero: {
    badge: 'Cybersecurity Services',
    title: 'Protect What You\'ve',
    titleAccent: 'Built.',
    description:
      'Penetration testing, security audits, compliance consulting and 24/7 threat monitoring for applications, cloud infrastructure and enterprise networks.',
    service: 'Cybersecurity',
    stats: [
      { value: '500+', label: 'Assessments Delivered' },
      { value: '99.7%', label: 'Detection Rate' },
      { value: '24/7', label: 'Monitoring' },
      { value: '0', label: 'Data Breaches on Watch' },
    ],
  },
  awards: [
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'OWASP Methodology',
    'AWS Security Partner',
    'Clutch Top Cybersecurity 2026',
    'PCI DSS Compliant',
    'HIPAA Security Experts',
    'Zero Breach Track Record',
  ],
  whySection: {
    title: 'Why Cybersecurity Can\'t Wait',
    cards: [
      { icon: '💸', title: '$4.45M Average Breach Cost', desc: 'The average cost of a data breach hit $4.45M in 2024. Prevention costs a fraction of remediation. Every day without professional security testing expands your attack surface and financial exposure.' },
      { icon: '⏱️', title: '277 Days to Detect', desc: 'Organizations take an average of 277 days to identify and contain a breach. Continuous monitoring and proactive testing shrink this window to hours, not months.' },
      { icon: '🔁', title: '83% Breached More Than Once', desc: 'Most organizations that suffer a breach get breached again. Without systematic security hardening, vulnerability remediation, and ongoing monitoring, history repeats itself.' },
      { icon: '🛡️', title: 'Shift-Left Security', desc: 'Fixing vulnerabilities in production costs 10x more than catching them in development. Our DevSecOps approach integrates security into your CI/CD pipeline from day one.' },
    ],
    whoNeedsTitle: 'Who Needs Professional Cybersecurity?',
    whoNeedsItems: [
      { icon: '🚀', title: 'Startups Pre-Fundraise', desc: 'Investors demand SOC 2 and security audits before writing checks. Get certified and de-risk your raise.' },
      { icon: '🏦', title: 'FinTech & Banking', desc: 'PCI DSS, SOX, and regulatory compliance are non-negotiable. Protect transactions and customer data.' },
      { icon: '🏥', title: 'Healthcare & HIPAA', desc: 'PHI protection, HIPAA compliance, and breach notification readiness for covered entities and business associates.' },
      { icon: '🛒', title: 'E-Commerce & Retail', desc: 'Protect payment data, customer PII, and brand reputation from increasingly sophisticated attacks.' },
      { icon: '🏢', title: 'Enterprise & SaaS', desc: 'SOC 2, ISO 27001, and enterprise security requirements from your largest customers and prospects.' },
      { icon: '🌐', title: 'Any Business Online', desc: '2,200+ cyberattacks happen daily. If you have a web presence, you need professional security.' },
    ],
    metricsTitle: 'Threat Landscape by the Numbers',
    metrics: [
      { metric: '$4.45M', label: 'Avg Breach Cost', desc: 'IBM 2024 Report' },
      { metric: '277 Days', label: 'Avg Detection Time', desc: 'IBM 2024 Report' },
      { metric: '83%', label: 'Repeat Breaches', desc: 'IBM 2024 Report' },
      { metric: '10x', label: 'Cheaper in Dev', desc: 'NIST Framework' },
      { metric: '95%', label: 'Human Error', desc: 'World Economic Forum' },
      { metric: '2,200+', label: 'Daily Attacks', desc: 'University of Maryland' },
    ],
    closingText:
      'Cybersecurity is not a one-time project — it is an ongoing discipline. At Codazz, we combine offensive testing, defensive monitoring, and compliance expertise to build layered security programs that protect your business today and adapt to tomorrow\'s threats. From startup to enterprise, we meet you where you are and build toward where you need to be.',
  },
  subServices: [
    {
      title: 'Penetration Testing',
      tag: 'Offensive',
      desc: 'Manual and automated penetration testing for web applications, networks, APIs, mobile apps and cloud infrastructure. OWASP Top 10, PTES and NIST methodology-driven engagements.',
      chips: ['Web Apps', 'APIs', 'Mobile', 'Cloud', 'Network'],
      href: '/services/cybersecurity/penetration-testing',
      icon: '🔓',
    },
    {
      title: 'Security Audits',
      tag: 'Assessment',
      desc: 'Comprehensive security audits covering architecture review, configuration assessment, access control analysis, and security policy evaluation with prioritized remediation roadmaps.',
      chips: ['Architecture Review', 'Configuration', 'Access Control', 'Policy'],
      href: '/services/cybersecurity/security-audits',
      icon: '🔍',
    },
    {
      title: 'VAPT',
      tag: 'Combined',
      desc: 'Combined vulnerability scanning and manual penetration testing that identifies, validates and prioritizes vulnerabilities across your entire attack surface with zero false positive reporting.',
      chips: ['Vulnerability Scanning', 'Pen Testing', 'CVSS', 'Remediation'],
      href: '/services/cybersecurity/vapt',
      icon: '🛡️',
    },
    {
      title: 'Cloud Security',
      tag: 'AWS / Azure / GCP',
      desc: 'Security assessments and hardening for AWS, Azure and GCP environments. IAM policy review, network segmentation, secrets management, and infrastructure-as-code scanning.',
      chips: ['AWS', 'Azure', 'GCP', 'IAM', 'Terraform'],
      href: '/services/cybersecurity/cloud-security',
      icon: '☁️',
    },
    {
      title: 'Application Security',
      tag: 'DevSecOps',
      desc: 'SAST, DAST, SCA and manual secure code review integrated into your CI/CD pipeline. Shift-left security that catches vulnerabilities in development.',
      chips: ['SAST', 'DAST', 'SCA', 'Code Review', 'CI/CD'],
      href: '/services/cybersecurity/application-security',
      icon: '💻',
    },
    {
      title: 'Incident Response',
      tag: '24/7 SLA',
      desc: 'Rapid incident response with sub-1-hour SLA for critical events. Digital forensics, malware analysis, breach containment, and post-incident hardening.',
      chips: ['Forensics', 'Malware Analysis', 'Containment', 'Recovery'],
      href: '/services/cybersecurity/incident-response',
      icon: '🚨',
    },
  ],
  servicesHeading: {
    label: 'What We Do',
    title: 'Cybersecurity Services',
    titleDim: 'End-to-end protection.',
    description:
      'End-to-end security coverage from code to cloud — offensive testing, defensive monitoring and compliance readiness for organizations at every stage.',
  },
  benefits: {
    label: 'Why Codazz Security',
    title: 'Security That Scales',
    titleDim: 'With Your Business.',
    items: [
      { icon: '🎯', title: 'Zero False Positives', desc: 'Every finding is manually validated by senior security engineers. No noise, no wasted developer time chasing phantom vulnerabilities.' },
      { icon: '⚡', title: 'Real-Time Critical Alerts', desc: 'Critical and high-severity vulnerabilities are reported immediately — not at the end of the engagement. Your team can start fixing while we keep testing.' },
      { icon: '📋', title: 'Compliance Ready', desc: 'SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR — we guide you from gap analysis to certification with policies, controls, and evidence collection.' },
      { icon: '🔄', title: 'Free Re-Testing', desc: 'After your team implements fixes, we re-test every finding at no additional cost and issue a clean verification report for stakeholders and auditors.' },
    ],
  },
  clientLogos: [
    'Stripe', 'Shopify', 'AWS', 'Google Cloud', 'Salesforce',
    'MongoDB', 'Cloudflare', 'Twilio', 'Datadog', 'Notion',
    'Figma', 'Vercel', 'Supabase', 'CrowdStrike', 'Palo Alto',
    'Splunk',
  ],
  bigStats: [
    { value: '500+', label: 'Assessments', desc: 'Security engagements delivered' },
    { value: '99.7%', label: 'Detection Rate', desc: 'Threat identification accuracy' },
    { value: '24/7', label: 'Monitoring', desc: 'Continuous threat detection' },
    { value: '0', label: 'Breaches', desc: 'On our watch' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 100+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🔬', title: 'SAST Analysis', desc: 'Static code analysis finding vulnerabilities before deployment' },
      { icon: '🌐', title: 'DAST Scanning', desc: 'Dynamic testing of running applications for runtime flaws' },
      { icon: '📦', title: 'SCA Scanning', desc: 'Software composition analysis for dependency vulnerabilities' },
      { icon: '🔐', title: 'Zero Trust', desc: 'Never trust, always verify architecture implementation' },
      { icon: '🤖', title: 'AI Threat Detection', desc: 'Machine learning-powered anomaly detection and response' },
      { icon: '☁️', title: 'CSPM', desc: 'Cloud security posture management across multi-cloud' },
    ],
    row2: [
      { icon: '🛡️', title: 'WAF Protection', desc: 'Web application firewall configuration and management' },
      { icon: '📊', title: 'SIEM Integration', desc: 'Security information and event management setup' },
      { icon: '🔑', title: 'Secrets Management', desc: 'HashiCorp Vault and AWS Secrets Manager implementation' },
      { icon: '🐳', title: 'Container Security', desc: 'Docker and Kubernetes security scanning and hardening' },
      { icon: '📋', title: 'Compliance Automation', desc: 'Vanta, Drata, and custom compliance pipeline setup' },
      { icon: '🔍', title: 'Threat Intelligence', desc: 'Proactive threat hunting and intelligence feeds' },
    ],
  },
  techStack: [
    { category: 'Pen Testing', techs: ['Burp Suite Pro', 'Metasploit', 'Nmap', 'Wireshark', 'SQLMap', 'Nuclei'] },
    { category: 'SAST / DAST', techs: ['SonarQube', 'Checkmarx', 'Snyk', 'OWASP ZAP', 'Semgrep', 'Trivy'] },
    { category: 'Cloud Security', techs: ['Prowler', 'ScoutSuite', 'CloudSploit', 'Terraform Sentinel', 'AWS Config'] },
    { category: 'SIEM & Monitoring', techs: ['Splunk', 'Elastic SIEM', 'CrowdStrike', 'Wazuh', 'Datadog Security'] },
    { category: 'Compliance', techs: ['Vanta', 'Drata', 'OneTrust', 'Tugboat Logic', 'Secureframe'] },
    { category: 'DevSecOps', techs: ['GitHub Advanced Security', 'GitLab SAST', 'HashiCorp Vault', 'Falco', 'Aqua Security'] },
  ],
  pricingGuide: {
    title: 'How Much Do Cybersecurity Services Cost?',
    description:
      'Cybersecurity pricing depends on scope, asset count, and engagement type. Codazz offers fixed-price assessments and monthly managed security retainers — no open-ended hourly billing.',
    tiers: [
      { icon: '💰', name: 'Focused Pen Test', price: 'Starting at $6,000', desc: 'Web application, API, or mobile app penetration test with OWASP methodology, detailed findings report, remediation guidance, and free re-test after fixes.', timeline: '⏱ 1–2 weeks' },
      { icon: '💰', name: 'Full Security Audit', price: 'Starting at $19,000', desc: 'Comprehensive security assessment covering infrastructure, applications, cloud, and policy review with prioritized remediation roadmap and compliance gap analysis.', timeline: '⏱ 3–6 weeks' },
      { icon: '💰', name: 'Managed Security / Compliance', price: 'Starting at $56,000', desc: 'End-to-end SOC 2 or ISO 27001 readiness, 24/7 managed SIEM, continuous vulnerability management, incident response retainer, and quarterly penetration testing.', timeline: '⏱ 3–12 months' },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a Cybersecurity Company',
    description:
      'Choosing the right security partner is critical — a weak assessment gives false confidence while your real vulnerabilities go undetected. Here is what to demand.',
    criteria: [
      { icon: '📋', title: 'Certified Professionals', desc: 'Look for OSCP, OSCE, CEH, and CISSP certifications. Ask about their manual testing methodology — automated scanners alone miss critical business logic flaws.' },
      { icon: '👨‍💻', title: 'Senior Security Engineers', desc: '8+ years avg experience in offensive security, cloud infrastructure, and compliance frameworks. Ask for sample anonymized reports.' },
      { icon: '💲', title: 'Fixed-Price Engagements', desc: 'No hourly surprises. Clearly scoped assessments with defined asset lists, testing windows, and deliverable timelines.' },
      { icon: '🛡️', title: 'Free Re-Testing', desc: 'After your team implements fixes, the vendor should re-test every finding at no additional cost and issue a clean verification report.' },
      { icon: '🔒', title: 'Compliance Expertise', desc: 'SOC 2, ISO 27001, HIPAA, PCI DSS, and GDPR — end-to-end guidance from gap analysis to certification, not just a checklist.' },
      { icon: '🕐', title: 'Real-Time Critical Alerts', desc: 'Critical vulnerabilities reported immediately during testing, not saved for the final report. Your team should start fixing while testing continues.' },
    ],
  },

  faqs: [
    { q: 'What types of penetration testing does Codazz offer?', a: 'We offer network penetration testing, web application penetration testing, mobile application testing, API security testing, cloud infrastructure testing, and social engineering assessments. Each engagement follows OWASP, PTES, and NIST methodologies with manual exploitation by certified security engineers.' },
    { q: 'How long does a typical security audit take?', a: 'A standard security audit takes 2–4 weeks depending on scope. Web application pentests typically run 1–2 weeks. Full enterprise security assessments including infrastructure, applications, and compliance review take 4–8 weeks. We provide preliminary findings within 48 hours of critical discovery.' },
    { q: 'Can you help us achieve SOC 2 or ISO 27001 compliance?', a: 'Yes. We provide end-to-end compliance readiness services for SOC 2 Type I and Type II, ISO 27001, HIPAA, PCI DSS, and GDPR. This includes gap analysis, policy development, control implementation, evidence collection, and audit preparation. Most clients achieve certification within 3–6 months.' },
    { q: 'What happens if you find a critical vulnerability during testing?', a: 'Critical and high-severity vulnerabilities are reported immediately through our secure communication channel — not at the end of the engagement. We provide a detailed remediation guide and can assist your team in patching the issue. A free re-test is included to verify the fix.' },
    { q: 'Do you offer ongoing security monitoring and managed services?', a: 'Yes. Beyond one-time assessments, we offer continuous security monitoring, managed SIEM, vulnerability management programs, and retainer-based incident response. Our managed security services include 24/7 threat detection, monthly vulnerability scans, and quarterly penetration tests.' },
    { q: 'How much do cybersecurity services cost?', a: 'Pricing depends on scope and complexity. Web application pentests start at $6,000. Full infrastructure security audits start at $19,000. Compliance readiness programs start at $30,000. Managed security retainers start at $3,800/month. Every engagement is scoped individually after a free consultation.' },
  ],
  faqDescription:
    'Get answers to common questions about our cybersecurity services, penetration testing, compliance readiness, and managed security offerings.',
  relatedBlogs: [
    { title: 'SOC 2 Compliance Guide for Startups in 2026', desc: 'Everything you need to know about achieving SOC 2 certification — timeline, cost, and process.', href: '/blog/soc2-compliance-guide-startups' },
    { title: 'OWASP Top 10 Explained: What Developers Need to Know', desc: 'A developer-friendly breakdown of the most critical web application security risks.', href: '/blog/owasp-top-10-explained' },
    { title: 'Cloud Security Best Practices for AWS, Azure & GCP', desc: 'Harden your cloud infrastructure with proven security controls and compliance frameworks.', href: '/blog/cloud-security-best-practices' },
  ],
  relatedServices: [
    { name: 'Cloud Engineering', desc: 'Secure cloud infrastructure on AWS, Azure and GCP.', href: '/services/cloud-engineering' },
    { name: 'DevOps & CI/CD', desc: 'Automated pipelines with built-in security gates.', href: '/services/devops' },
    { name: 'Web Development', desc: 'Secure, performant web applications built to last.', href: '/services/web-development' },
    { name: 'Mobile App Development', desc: 'Secure iOS and Android apps with encryption and compliance.', href: '/services/mobile-app-development' },
  ],
  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Logistics', href: '/industries/logistics' },
  ],
};

export default function CybersecurityPage() {
  return <ServicePageTemplate data={pageData} />;
}
