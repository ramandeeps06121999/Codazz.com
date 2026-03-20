'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

/* ═══════════════════════════════════════════════════════════════════════════════
   SHARED STYLES
   ═══════════════════════════════════════════════════════════════════════════════ */

const GREEN = '#22c55e';
const GREEN_10 = 'rgba(34,197,94,0.1)';
const GREEN_03 = 'rgba(34,197,94,0.03)';
const GREEN_20 = 'rgba(34,197,94,0.2)';
const GREEN_40 = 'rgba(34,197,94,0.4)';
const WHITE_04 = 'rgba(255,255,255,0.04)';
const WHITE_05 = 'rgba(255,255,255,0.05)';
const WHITE_06 = 'rgba(255,255,255,0.06)';
const WHITE_08 = 'rgba(255,255,255,0.08)';
const WHITE_015 = 'rgba(255,255,255,0.015)';
const WHITE_015_BG = 'rgba(255,255,255,0.015)';
const WHITE_70 = 'rgba(255,255,255,0.7)';
const WHITE_40 = 'rgba(255,255,255,0.4)';
const WHITE_25 = 'rgba(255,255,255,0.25)';
const WHITE_20 = 'rgba(255,255,255,0.2)';

const sectionBorder = { borderBottom: `1px solid ${WHITE_05}` };

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: WHITE_25,
  marginBottom: 20,
};

const h2Style: React.CSSProperties = {
  fontSize: 'clamp(2.2rem,4vw,4rem)',
  fontWeight: 500,
  color: '#ffffff',
  letterSpacing: '-0.04em',
  lineHeight: 1.05,
  margin: 0,
};

const cardBase: React.CSSProperties = {
  padding: '36px 32px',
  border: `1px solid ${WHITE_06}`,
  borderRadius: 28,
  background: WHITE_015_BG,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.35s ease',
};

function cardHover(e: React.MouseEvent<HTMLDivElement>) {
  const t = e.currentTarget;
  t.style.borderColor = GREEN_20;
  t.style.background = GREEN_03;
  t.style.transform = 'translateY(-4px)';
  t.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)';
}

function cardLeave(e: React.MouseEvent<HTMLDivElement>) {
  const t = e.currentTarget;
  t.style.borderColor = WHITE_06;
  t.style.background = WHITE_015_BG;
  t.style.transform = '';
  t.style.boxShadow = '';
}

const chipStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: WHITE_40,
  padding: '6px 14px',
  border: `1px solid ${WHITE_08}`,
  borderRadius: 100,
};

const checkSvg = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const arrowSvg = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════════ */

const heroStats = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '500+', label: 'Cloud Migrations' },
  { value: '40%', label: 'Avg Cost Savings' },
  { value: '24/7', label: 'Monitoring & Support' },
];

const cloudServices = [
  {
    title: 'AWS Architecture',
    tag: 'Cloud',
    href: '/services/cloud-devops/aws-architecture',
    desc: 'Multi-region, highly available AWS architecture with VPC design, auto-scaling groups, load balancers and disaster recovery built in from day one.',
    chips: ['EC2', 'ECS', 'Lambda', 'RDS', 'S3', 'CloudFront'],
  },
  {
    title: 'Kubernetes & Docker',
    tag: 'Containers',
    href: '/services/cloud-devops/kubernetes-docker',
    desc: 'Production-grade Kubernetes clusters with auto-scaling, rolling deployments, service mesh, and container security scanning across any cloud provider.',
    chips: ['K8s', 'Docker', 'EKS', 'Helm', 'Istio'],
  },
  {
    title: 'CI/CD Pipelines',
    tag: 'DevOps',
    href: '/services/cloud-devops/ci-cd-pipelines',
    desc: 'End-to-end automated pipelines with testing gates, security scanning, artifact management and zero-downtime blue-green deployments.',
    chips: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Jenkins'],
  },
  {
    title: 'Infrastructure as Code',
    tag: 'IaC',
    href: '/services/cloud-devops/infrastructure-as-code',
    desc: 'Version-controlled, declarative infrastructure with Terraform and Pulumi. Reproducible environments, drift detection and automated compliance.',
    chips: ['Terraform', 'Pulumi', 'AWS CDK', 'Ansible'],
  },
  {
    title: 'Performance & Scaling',
    tag: 'Optimization',
    href: '/services/cloud-devops/performance-scaling',
    desc: 'Load testing, auto-scaling policies, CDN optimization, database tuning and caching strategies to handle millions of requests per second.',
    chips: ['CloudFront', 'Redis', 'ElastiCache', 'ALB'],
  },
];

const cloudPlatforms = [
  {
    name: 'Amazon Web Services',
    badge: 'Advanced Tier Partner',
    color: '#FF9900',
    services: ['EC2 & ECS Orchestration', 'Lambda & Serverless', 'RDS & DynamoDB', 'S3 & CloudFront CDN', 'VPC & Security Groups', 'CloudFormation & CDK'],
    icon: '/awards/aws-advance-tier.svg',
  },
  {
    name: 'Google Cloud Platform',
    badge: 'Cloud Partner',
    color: '#4285F4',
    services: ['GKE Kubernetes', 'Cloud Run & Functions', 'Cloud SQL & Firestore', 'BigQuery Analytics', 'Cloud CDN & Load Balancing', 'Anthos Multi-Cloud'],
    icon: null,
  },
  {
    name: 'Microsoft Azure',
    badge: 'Cloud Partner',
    color: '#0078D4',
    services: ['AKS Kubernetes', 'Azure Functions', 'Azure SQL & Cosmos DB', 'Azure DevOps Pipelines', 'Azure Front Door CDN', 'Azure Active Directory'],
    icon: null,
  },
];

const pipelineSteps = [
  { label: 'Code', icon: '{ }', desc: 'Feature branches, PRs, code reviews' },
  { label: 'Build', icon: '\u2699', desc: 'Docker images, dependency resolution' },
  { label: 'Test', icon: '\u2714', desc: 'Unit, integration, E2E, security scans' },
  { label: 'Deploy', icon: '\u26A1', desc: 'Blue-green, canary, rolling updates' },
  { label: 'Monitor', icon: '\uD83D\uDCCA', desc: 'Metrics, logs, traces, alerts' },
  { label: 'Optimize', icon: '\uD83D\uDD27', desc: 'Cost, performance, reliability tuning' },
];

const iacTools = [
  {
    name: 'Terraform',
    desc: 'Multi-cloud infrastructure provisioning with state management, modules and workspaces for team collaboration.',
    features: ['State Locking', 'Module Registry', 'Plan & Apply', 'Drift Detection'],
  },
  {
    name: 'Ansible',
    desc: 'Agentless configuration management and application deployment with idempotent playbooks and role-based organization.',
    features: ['Playbooks', 'Inventory Mgmt', 'Vault Secrets', 'Galaxy Roles'],
  },
  {
    name: 'CloudFormation',
    desc: 'AWS-native infrastructure as code with nested stacks, change sets, and drift detection for full AWS resource coverage.',
    features: ['Nested Stacks', 'Change Sets', 'Stack Policies', 'Custom Resources'],
  },
  {
    name: 'Pulumi',
    desc: 'Infrastructure as code using real programming languages — TypeScript, Python, Go — with full IDE support and testing.',
    features: ['Real Languages', 'Unit Testing', 'Policy as Code', 'Automation API'],
  },
  {
    name: 'Helm Charts',
    desc: 'Kubernetes package management with templated manifests, versioned releases and rollback capabilities.',
    features: ['Chart Repos', 'Templating', 'Release Mgmt', 'Rollback'],
  },
];

const monitoringTools = [
  {
    name: 'Datadog',
    desc: 'Full-stack observability with infrastructure monitoring, APM, log management, and real user monitoring in a single platform.',
    category: 'APM & Monitoring',
  },
  {
    name: 'Grafana',
    desc: 'Visualization dashboards for metrics from Prometheus, CloudWatch, and custom data sources with alerting and annotations.',
    category: 'Visualization',
  },
  {
    name: 'Prometheus',
    desc: 'Time-series metrics collection with powerful PromQL queries, alerting rules, and service discovery for Kubernetes.',
    category: 'Metrics',
  },
  {
    name: 'ELK Stack',
    desc: 'Elasticsearch, Logstash, and Kibana for centralized log aggregation, full-text search, and log-based alerting.',
    category: 'Log Management',
  },
  {
    name: 'PagerDuty',
    desc: 'Incident management with on-call scheduling, escalation policies, automated runbooks, and post-incident reviews.',
    category: 'Incident Response',
  },
];

const securityPractices = [
  {
    title: 'Container Security',
    desc: 'Image scanning with Trivy and Snyk, runtime protection with Falco, network policies, and pod security standards enforced at admission.',
    items: ['Image Scanning', 'Runtime Protection', 'Network Policies', 'Pod Security'],
  },
  {
    title: 'Secrets Management',
    desc: 'Centralized secrets with HashiCorp Vault, AWS Secrets Manager, and sealed secrets for Kubernetes with automatic rotation.',
    items: ['HashiCorp Vault', 'AWS Secrets Manager', 'Auto-Rotation', 'Sealed Secrets'],
  },
  {
    title: 'Compliance Scanning',
    desc: 'Continuous compliance checks against CIS benchmarks, automated remediation, and audit-ready reporting for SOC 2 and ISO 27001.',
    items: ['CIS Benchmarks', 'Auto-Remediation', 'Audit Reports', 'Policy as Code'],
  },
  {
    title: 'Pipeline Security',
    desc: 'SAST, DAST, and SCA integrated into every pipeline. Dependency scanning, license compliance, and signed artifacts.',
    items: ['SAST & DAST', 'Dependency Scanning', 'License Compliance', 'Signed Artifacts'],
  },
];

const caseStudies = [
  {
    title: 'FinTech Platform Migration to AWS',
    industry: 'FinTech',
    challenge: 'Legacy on-premise infrastructure with 99.5% uptime, high costs, and 4-hour deployment cycles slowing product velocity.',
    solution: 'Migrated to AWS EKS with Terraform IaC, implemented blue-green deployments via ArgoCD, and built comprehensive Datadog monitoring.',
    results: [
      { metric: '99.99%', label: 'Uptime Achieved' },
      { metric: '47%', label: 'Cost Reduction' },
      { metric: '8 min', label: 'Deploy Time' },
      { metric: '3x', label: 'Release Velocity' },
    ],
  },
  {
    title: 'Healthcare SaaS — HIPAA on AWS',
    industry: 'Healthcare',
    challenge: 'Growing telehealth platform needed HIPAA-compliant infrastructure that could scale from 5,000 to 500,000 concurrent users.',
    solution: 'Architected HIPAA-compliant AWS environment with encrypted VPCs, RDS with automated backups, CloudFront CDN, and auto-scaling ECS clusters.',
    results: [
      { metric: 'HIPAA', label: 'Full Compliance' },
      { metric: '100x', label: 'Scale Capacity' },
      { metric: '38%', label: 'Cost Savings' },
      { metric: '<200ms', label: 'API Latency' },
    ],
  },
  {
    title: 'E-Commerce Cloud Cost Optimization',
    industry: 'E-Commerce',
    challenge: 'Monthly AWS bill of $180,000 with significant waste from over-provisioned instances, unused EBS volumes, and no reserved capacity.',
    solution: 'Implemented FinOps practices: right-sized 140+ instances, purchased savings plans, moved cold data to S3 Glacier, and automated resource scheduling.',
    results: [
      { metric: '$75K', label: 'Monthly Savings' },
      { metric: '42%', label: 'Bill Reduction' },
      { metric: '0', label: 'Performance Impact' },
      { metric: '2 weeks', label: 'Time to Value' },
    ],
  },
];

const complianceFrameworks = [
  {
    name: 'SOC 2 Type II',
    desc: 'We build and maintain infrastructure that passes SOC 2 Type II audits. Automated evidence collection, access controls, and continuous monitoring.',
    icon: '/awards/socII-icon.svg',
  },
  {
    name: 'ISO 27001',
    desc: 'Information security management systems with documented policies, risk assessments, and regular internal audits mapped to ISO 27001 controls.',
    icon: '/awards/ISO-icon.svg',
  },
  {
    name: 'HIPAA on AWS',
    desc: 'HIPAA-eligible AWS services, encrypted data at rest and in transit, BAA management, audit logging, and PHI access controls.',
    icon: null,
  },
  {
    name: 'PCI DSS',
    desc: 'Payment card data protection with network segmentation, encryption, vulnerability scanning, and penetration testing on schedule.',
    icon: null,
  },
  {
    name: 'FedRAMP Awareness',
    desc: 'We help organizations understand FedRAMP requirements and architect cloud environments that align with FedRAMP control baselines.',
    icon: null,
  },
];

const costOptimizationStrategies = [
  { title: 'Right-Sizing', pct: '25%', desc: 'Analyze utilization patterns and resize instances, databases, and storage to match actual workload requirements.' },
  { title: 'Reserved Instances & Savings Plans', pct: '35%', desc: 'Commit to 1-3 year terms on predictable workloads for up to 72% discount versus on-demand pricing.' },
  { title: 'Spot Instances', pct: '60%', desc: 'Run fault-tolerant and batch workloads on spot instances for up to 90% savings with graceful interruption handling.' },
  { title: 'Resource Scheduling', pct: '30%', desc: 'Automatically shut down dev/staging environments outside business hours. No more paying for idle resources.' },
  { title: 'Storage Tiering', pct: '50%', desc: 'Move infrequently accessed data to S3 Glacier, Intelligent-Tiering, and lifecycle policies to slash storage costs.' },
  { title: 'Containerization', pct: '40%', desc: 'Consolidate workloads into containers for higher server utilization, reducing the total number of instances needed.' },
];

const testimonials = [
  {
    quote: 'Codazz migrated our entire platform to AWS in 6 weeks with zero downtime. Our monthly cloud bill dropped 47% and deployment time went from hours to minutes.',
    name: 'Michael Torres',
    role: 'CTO, FinPayments',
    metric: '47% cost reduction',
  },
  {
    quote: 'Their Kubernetes expertise is top-tier. They built an auto-scaling cluster that handles our Black Friday traffic spikes without any manual intervention.',
    name: 'Sarah Chen',
    role: 'VP Engineering, ShopStream',
    metric: '10x traffic handling',
  },
  {
    quote: 'The DevSecOps pipeline they built gave us SOC 2 compliance in 8 weeks instead of the 6 months our auditors expected. Incredible turnaround.',
    name: 'David Park',
    role: 'Head of Security, MedSecure',
    metric: 'SOC 2 in 8 weeks',
  },
];

const faqs = [
  {
    q: 'How much does cloud migration cost?',
    a: 'Cloud migration costs typically range from $15,000 to $250,000+ depending on infrastructure complexity, data volume, compliance requirements, and the number of applications being migrated. We provide a free infrastructure audit with a detailed cost estimate before any commitment.',
  },
  {
    q: 'What is the difference between DevOps and DevSecOps?',
    a: 'DevOps focuses on automating software delivery through CI/CD pipelines, infrastructure as code, and monitoring. DevSecOps integrates security practices directly into every stage of the pipeline — including container scanning, secrets management, compliance checks, and vulnerability assessments — so security is never an afterthought.',
  },
  {
    q: 'How long does a typical cloud migration take?',
    a: 'A typical cloud migration takes 4 to 16 weeks depending on the size and complexity of your infrastructure. Simple lift-and-shift migrations can be completed in 4-6 weeks, while re-architecture projects with database migrations and compliance requirements may take 12-16 weeks.',
  },
  {
    q: 'Do you support multi-cloud environments?',
    a: 'Yes. We architect and manage multi-cloud environments across AWS, Google Cloud, and Microsoft Azure. We use Terraform and Pulumi to maintain consistent infrastructure across providers, ensuring vendor flexibility and disaster recovery capabilities.',
  },
  {
    q: 'What cloud cost savings can I expect?',
    a: 'Our clients typically see 30-60% reduction in cloud spending through right-sizing, reserved instance planning, spot instance strategies, resource tagging, and eliminating idle resources. The average savings across our portfolio is 40%.',
  },
  {
    q: 'Can you help with SOC 2 and HIPAA compliance on AWS?',
    a: 'Absolutely. We have deep experience building SOC 2 Type II, HIPAA, PCI DSS, and ISO 27001 compliant infrastructure on AWS and other cloud platforms. We implement encryption, access controls, audit logging, and continuous compliance monitoring.',
  },
  {
    q: 'What CI/CD tools do you use?',
    a: 'We work with GitHub Actions, GitLab CI, Jenkins, CircleCI, ArgoCD, and AWS CodePipeline. Our pipelines include automated testing, security scanning, container image building, and zero-downtime deployments to Kubernetes or serverless environments.',
  },
  {
    q: 'Do you provide ongoing cloud management and support?',
    a: 'Yes. We offer 24/7 managed cloud services including infrastructure monitoring, incident response, cost optimization reviews, security patching, and capacity planning. Our SLAs guarantee 99.99% uptime with sub-15-minute incident response.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   REVEAL HOOK
   ═══════════════════════════════════════════════════════════════════════════════ */

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 },
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════════════════════ */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: `1px solid ${WHITE_06}`,
        transition: 'all 0.3s ease',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
          fontWeight: 600,
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: 'inherit',
          gap: 16,
          letterSpacing: '-0.01em',
        }}
      >
        {q}
        <span
          style={{
            fontSize: 24,
            color: GREEN,
            flexShrink: 0,
            transition: 'transform 0.3s',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 400 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: WHITE_70,
            lineHeight: 1.8,
            paddingBottom: 24,
            margin: 0,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════════ */

export default function CloudDevOpsPage() {
  const heroRef = useReveal() as React.RefObject<HTMLElement>;
  const awardsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const platformsRef = useReveal() as React.RefObject<HTMLElement>;
  const pipelineRef = useReveal() as React.RefObject<HTMLElement>;
  const iacRef = useReveal() as React.RefObject<HTMLElement>;
  const monitorRef = useReveal() as React.RefObject<HTMLElement>;
  const securityRef = useReveal() as React.RefObject<HTMLElement>;
  const casesRef = useReveal() as React.RefObject<HTMLElement>;
  const complianceRef = useReveal() as React.RefObject<HTMLElement>;
  const costRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Cloud & DevOps' },
            ]}
          />
        </div>

        {/* ═══════════════════════════════════════
            1. HERO — Cloud & DevOps Services
        ═══════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="section-padding"
          style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}
        >
          <HeroBackground variant="center" />
          <div
            className="cb-container"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
                gap: 'clamp(40px, 6vw, 80px)',
                alignItems: 'center',
              }}
            >
              {/* Left — Copy */}
              <div>
                <div
                  className="reveal"
                  style={{
                    display: 'inline-block',
                    border: `1px solid ${GREEN_40}`,
                    borderRadius: 999,
                    padding: '6px 20px',
                    fontSize: 13,
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  Cloud Consulting Company
                </div>
                <h1
                  className="reveal"
                  style={{
                    fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                    fontWeight: 800,
                    lineHeight: 1.08,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  Cloud & DevOps{' '}
                  <span style={{ color: GREEN }}>Services</span>
                </h1>
                <p
                  className="reveal"
                  style={{
                    fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
                    color: WHITE_70,
                    marginBottom: '2rem',
                    lineHeight: 1.75,
                    maxWidth: 540,
                  }}
                >
                  Enterprise cloud architecture, CI/CD pipelines, Kubernetes orchestration and DevSecOps — engineered for 99.99% uptime, infinite scale and full observability. AWS Advanced Tier Partner.
                </p>
                <div
                  className="reveal"
                  style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
                >
                  <Link
                    href="/contact"
                    style={{
                      background: GREEN,
                      color: '#000',
                      padding: '14px 32px',
                      borderRadius: 999,
                      fontWeight: 700,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    Get Free Cloud Audit {arrowSvg}
                  </Link>
                  <Link
                    href="#case-studies"
                    style={{
                      border: `1px solid ${WHITE_08}`,
                      color: '#ffffff',
                      padding: '14px 32px',
                      borderRadius: 999,
                      fontWeight: 600,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    View Case Studies
                  </Link>
                </div>
                {/* Hero Stats */}
                <div
                  className="reveal"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(12px, 2vw, 24px)' }}
                >
                  {heroStats.map(s => (
                    <div key={s.label} style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                          fontWeight: 700,
                          color: '#ffffff',
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: WHITE_40,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginTop: 4,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Lead Capture Form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm service="Cloud & DevOps" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            2. AWARDS & TRUST BADGES
        ═══════════════════════════════════════ */}
        <section ref={awardsRef} style={{ ...sectionBorder, padding: 'clamp(40px, 5vw, 60px) 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 24 }}>
              <p style={{ ...labelStyle, marginBottom: 16, textAlign: 'center' }}>Trusted & Certified</p>
            </div>
            <div className="reveal reveal-d1">
              <TrustBadges />
            </div>
            <div
              className="reveal reveal-d2"
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 'clamp(16px, 3vw, 40px)',
                marginTop: 32,
              }}
            >
              {[
                'AWS Advanced Tier Partner',
                'SOC 2 Type II Compliant',
                'ISO 27001 Certified',
                'Clutch Top Cloud Company 2026',
              ].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {checkSvg}
                  <span style={{ fontSize: 14, color: WHITE_70, fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            3. CLOUD SERVICES GRID
        ═══════════════════════════════════════ */}
        <section ref={servicesRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Our Cloud & DevOps Services</div>
              <h2 style={h2Style}>
                End-to-End Cloud<br />
                <span style={{ color: WHITE_20 }}>Engineering.</span>
              </h2>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                gap: 20,
              }}
            >
              {cloudServices.map(s => (
                <Link
                  key={s.title}
                  href={s.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={cardBase}
                    onMouseEnter={cardHover}
                    onMouseLeave={cardLeave}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: `linear-gradient(90deg,${GREEN},transparent)`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        background: GREEN_10,
                        padding: '5px 14px',
                        borderRadius: 100,
                        marginBottom: 20,
                        display: 'inline-block',
                      }}
                    >
                      {s.tag}
                    </span>
                    <h3
                      style={{
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                        fontWeight: 600,
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                        marginBottom: 12,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: WHITE_70,
                        lineHeight: 1.7,
                        marginBottom: 24,
                      }}
                    >
                      {s.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.chips.map(c => (
                        <span key={c} style={chipStyle}>
                          {c}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        marginTop: 20,
                        fontSize: 13,
                        fontWeight: 600,
                        color: GREEN,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      Learn More
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            4. CLOUD PLATFORMS
        ═══════════════════════════════════════ */}
        <section ref={platformsRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Cloud Platforms</div>
              <h2 style={h2Style}>
                Multi-Cloud<br />
                <span style={{ color: WHITE_20 }}>Expertise.</span>
              </h2>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: 24,
              }}
            >
              {cloudPlatforms.map(p => (
                <div
                  key={p.name}
                  style={{
                    ...cardBase,
                    padding: 'clamp(28px, 4vw, 44px) clamp(24px, 3vw, 36px)',
                  }}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${p.color}, transparent)`,
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 8,
                    }}
                  >
                    {p.icon && (
                      <Image
                        src={p.icon}
                        alt={p.name}
                        width={36}
                        height={28}
                        style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }}
                      />
                    )}
                    <h3
                      style={{
                        fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                        margin: 0,
                      }}
                    >
                      {p.name}
                    </h3>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: p.color,
                      marginBottom: 24,
                      display: 'inline-block',
                    }}
                  >
                    {p.badge}
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {p.services.map(svc => (
                      <li
                        key={svc}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          fontSize: 14,
                          color: WHITE_70,
                        }}
                      >
                        {checkSvg}
                        {svc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            5. DEVOPS PIPELINE
        ═══════════════════════════════════════ */}
        <section ref={pipelineRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center' }}>
              <div style={{ ...labelStyle, textAlign: 'center' }}>DevOps Pipeline</div>
              <h2 style={{ ...h2Style, textAlign: 'center' }}>
                From Code to Production<br />
                <span style={{ color: WHITE_20 }}>in Minutes.</span>
              </h2>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
                gap: 0,
                position: 'relative',
              }}
            >
              {pipelineSteps.map((step, i) => (
                <div
                  key={step.label}
                  style={{
                    textAlign: 'center',
                    padding: 'clamp(24px, 3vw, 40px) clamp(12px, 2vw, 20px)',
                    position: 'relative',
                    borderRight: i < pipelineSteps.length - 1 ? `1px solid ${WHITE_06}` : 'none',
                  }}
                >
                  {/* Connector arrow */}
                  {i < pipelineSteps.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        right: -8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: GREEN,
                        fontSize: 16,
                        zIndex: 2,
                      }}
                    >
                      &#x25B6;
                    </div>
                  )}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      border: `2px solid ${GREEN_40}`,
                      background: GREEN_10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      margin: '0 auto 16px',
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: 8,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.label}
                  </h3>
                  <p style={{ fontSize: 13, color: WHITE_40, lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* Pipeline flow line */}
            <div
              className="reveal reveal-d2"
              style={{
                height: 3,
                background: `linear-gradient(90deg, ${GREEN}, ${GREEN_40}, transparent)`,
                borderRadius: 4,
                marginTop: 8,
              }}
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            6. INFRASTRUCTURE — IaC Tools
        ═══════════════════════════════════════ */}
        <section ref={iacRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Infrastructure as Code</div>
              <h2 style={h2Style}>
                Declarative. Reproducible.<br />
                <span style={{ color: WHITE_20 }}>Version-Controlled.</span>
              </h2>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: 20,
              }}
            >
              {iacTools.map(tool => (
                <div
                  key={tool.name}
                  style={cardBase}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: `linear-gradient(90deg,${GREEN},transparent)`,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: 12,
                    }}
                  >
                    {tool.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: WHITE_70,
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {tool.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {tool.features.map(f => (
                      <span
                        key={f}
                        style={{
                          ...chipStyle,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            7. MONITORING & OBSERVABILITY
        ═══════════════════════════════════════ */}
        <section ref={monitorRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Monitoring & Observability</div>
              <h2 style={h2Style}>
                Full-Stack<br />
                <span style={{ color: WHITE_20 }}>Visibility.</span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: WHITE_70,
                  maxWidth: 560,
                  lineHeight: 1.75,
                  marginTop: 20,
                }}
              >
                Metrics, logs, traces and alerts — unified into a single observability platform. Sub-minute incident detection with automated runbooks.
              </p>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                gap: 20,
              }}
            >
              {monitoringTools.map(tool => (
                <div
                  key={tool.name}
                  style={{
                    ...cardBase,
                    padding: '32px 28px',
                  }}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: GREEN,
                      marginBottom: 16,
                      display: 'inline-block',
                    }}
                  >
                    {tool.category}
                  </span>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: 10,
                    }}
                  >
                    {tool.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: WHITE_70,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            8. SECURITY — DevSecOps
        ═══════════════════════════════════════ */}
        <section ref={securityRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>DevSecOps</div>
              <h2 style={h2Style}>
                Security Baked In.<br />
                <span style={{ color: WHITE_20 }}>Not Bolted On.</span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: WHITE_70,
                  maxWidth: 560,
                  lineHeight: 1.75,
                  marginTop: 20,
                }}
              >
                Shift-left security across every layer — from container images to production runtime. Continuous scanning, automated remediation and compliance-as-code.
              </p>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: 20,
              }}
            >
              {securityPractices.map(practice => (
                <div
                  key={practice.title}
                  style={cardBase}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'linear-gradient(90deg, #ef4444, transparent)',
                    }}
                  />
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: 12,
                    }}
                  >
                    {practice.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: WHITE_70,
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {practice.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {practice.items.map(item => (
                      <span
                        key={item}
                        style={{
                          ...chipStyle,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            9. CASE STUDIES
        ═══════════════════════════════════════ */}
        <section ref={casesRef} id="case-studies" className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Case Studies</div>
              <h2 style={h2Style}>
                Real Results.<br />
                <span style={{ color: WHITE_20 }}>Proven Impact.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {caseStudies.map((cs, idx) => (
                <div
                  key={cs.title}
                  className={`reveal reveal-d${idx + 1}`}
                  style={{
                    padding: 'clamp(28px, 4vw, 48px)',
                    border: `1px solid ${WHITE_06}`,
                    borderRadius: 28,
                    background: WHITE_015_BG,
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = GREEN_20;
                    e.currentTarget.style.background = GREEN_03;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = WHITE_06;
                    e.currentTarget.style.background = WHITE_015_BG;
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        background: GREEN_10,
                        padding: '5px 14px',
                        borderRadius: 100,
                      }}
                    >
                      {cs.industry}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: 20,
                    }}
                  >
                    {cs.title}
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                      gap: 24,
                      marginBottom: 28,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#ef4444',
                          marginBottom: 8,
                        }}
                      >
                        Challenge
                      </div>
                      <p style={{ fontSize: 14, color: WHITE_70, lineHeight: 1.7, margin: 0 }}>
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: GREEN,
                          marginBottom: 8,
                        }}
                      >
                        Solution
                      </div>
                      <p style={{ fontSize: 14, color: WHITE_70, lineHeight: 1.7, margin: 0 }}>
                        {cs.solution}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: 16,
                      padding: '24px 0 0',
                      borderTop: `1px solid ${WHITE_06}`,
                    }}
                  >
                    {cs.results.map(r => (
                      <div key={r.label} style={{ textAlign: 'center' }}>
                        <div
                          style={{
                            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                            fontWeight: 700,
                            color: GREEN,
                          }}
                        >
                          {r.metric}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: WHITE_40,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            marginTop: 4,
                          }}
                        >
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            10. COMPLIANCE
        ═══════════════════════════════════════ */}
        <section ref={complianceRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Compliance & Certifications</div>
              <h2 style={h2Style}>
                Audit-Ready<br />
                <span style={{ color: WHITE_20 }}>Infrastructure.</span>
              </h2>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                gap: 20,
              }}
            >
              {complianceFrameworks.map(fw => (
                <div
                  key={fw.name}
                  style={{
                    ...cardBase,
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  {fw.icon && (
                    <div style={{ marginBottom: 16 }}>
                      <Image
                        src={fw.icon}
                        alt={fw.name}
                        width={40}
                        height={40}
                        style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }}
                      />
                    </div>
                  )}
                  {!fw.icon && (
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        border: `2px solid ${GREEN_40}`,
                        background: GREEN_10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 16,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                  )}
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: 10,
                    }}
                  >
                    {fw.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: WHITE_70,
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {fw.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            11. COST OPTIMIZATION
        ═══════════════════════════════════════ */}
        <section ref={costRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Cloud Cost Optimization</div>
              <h2 style={h2Style}>
                Cut Your Cloud Bill.<br />
                <span style={{ color: WHITE_20 }}>Average 40% Savings.</span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: WHITE_70,
                  maxWidth: 560,
                  lineHeight: 1.75,
                  marginTop: 20,
                }}
              >
                Most companies overspend on cloud by 30-50%. Our FinOps practice identifies waste, right-sizes resources and implements automated cost controls — without sacrificing performance.
              </p>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: 20,
              }}
            >
              {costOptimizationStrategies.map(strategy => (
                <div
                  key={strategy.title}
                  style={cardBase}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 16,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                        margin: 0,
                      }}
                    >
                      {strategy.title}
                    </h3>
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: GREEN,
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    >
                      up to {strategy.pct}
                    </span>
                  </div>
                  {/* Savings bar */}
                  <div
                    style={{
                      height: 4,
                      background: WHITE_06,
                      borderRadius: 4,
                      marginBottom: 16,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: strategy.pct,
                        height: '100%',
                        background: `linear-gradient(90deg, ${GREEN}, ${GREEN_40})`,
                        borderRadius: 4,
                        transition: 'width 1s ease',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: WHITE_70,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {strategy.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* Summary stat */}
            <div
              className="reveal reveal-d2"
              style={{
                marginTop: 48,
                padding: '36px 40px',
                border: `1px solid ${GREEN_20}`,
                borderRadius: 28,
                background: GREEN_03,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 'clamp(24px, 4vw, 60px)',
                flexWrap: 'wrap',
                textAlign: 'center',
              }}
            >
              {[
                { value: '$2.4M+', label: 'Total Cloud Savings Delivered' },
                { value: '40%', label: 'Average Bill Reduction' },
                { value: '150+', label: 'FinOps Audits Completed' },
                { value: '0', label: 'Performance Degradation' },
              ].map(s => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      fontWeight: 700,
                      color: GREEN,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: WHITE_40,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            12. TESTIMONIALS
        ═══════════════════════════════════════ */}
        <section ref={testimonialRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center' }}>
              <div style={{ ...labelStyle, textAlign: 'center' }}>Client Testimonials</div>
              <h2 style={{ ...h2Style, textAlign: 'center' }}>
                What Our Clients<br />
                <span style={{ color: WHITE_20 }}>Say About Us.</span>
              </h2>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: 24,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    ...cardBase,
                    padding: 'clamp(28px, 4vw, 40px)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  {/* Star rating */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg
                        key={star}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={GREEN}
                        stroke="none"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      color: WHITE_70,
                      lineHeight: 1.75,
                      flex: 1,
                      marginBottom: 24,
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    style={{
                      borderTop: `1px solid ${WHITE_06}`,
                      paddingTop: 20,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: 2,
                        }}
                      >
                        {t.name}
                      </div>
                      <div style={{ fontSize: 13, color: WHITE_40 }}>{t.role}</div>
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: GREEN,
                        background: GREEN_10,
                        padding: '5px 12px',
                        borderRadius: 100,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            13. FAQ
        ═══════════════════════════════════════ */}
        <section ref={faqRef} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: 'clamp(40px, 6vw, 80px)',
                alignItems: 'start',
              }}
            >
              <div className="reveal" style={{ position: 'sticky', top: 120 }}>
                <div style={labelStyle}>FAQ</div>
                <h2 style={h2Style}>
                  Frequently Asked<br />
                  <span style={{ color: WHITE_20 }}>Questions.</span>
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: WHITE_70,
                    lineHeight: 1.75,
                    marginTop: 20,
                    maxWidth: 400,
                  }}
                >
                  Everything you need to know about our cloud consulting and DevOps services. Have a question not listed here? Reach out to our team.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 28,
                    fontSize: 15,
                    fontWeight: 600,
                    color: GREEN,
                    textDecoration: 'none',
                  }}
                >
                  Ask a Question {arrowSvg}
                </Link>
              </div>
              <div className="reveal reveal-d1">
                {faqs.map(faq => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            14. BOTTOM CTA — Lead Capture Form
        ═══════════════════════════════════════ */}
        <section
          ref={ctaRef}
          className="section-padding"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 900,
              height: 600,
              background: 'radial-gradient(ellipse,rgba(34,197,94,0.09) 0%,transparent 65%)',
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                gap: 'clamp(40px, 6vw, 80px)',
                alignItems: 'center',
              }}
            >
              {/* Left — CTA Copy */}
              <div className="reveal">
                <div style={labelStyle}>Ready to Scale?</div>
                <h2
                  style={{
                    ...h2Style,
                    fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                  }}
                >
                  Let&apos;s Build Your<br />
                  <span style={{ color: GREEN }}>Cloud Infrastructure.</span>
                </h2>
                <p
                  style={{
                    fontSize: 17,
                    color: WHITE_40,
                    maxWidth: 480,
                    lineHeight: 1.75,
                    marginTop: 20,
                    marginBottom: 32,
                  }}
                >
                  Tell us about your stack. We&apos;ll return a free infrastructure audit and cost-reduction estimate within 48 hours.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    marginBottom: 36,
                  }}
                >
                  {[
                    'Free Infrastructure Audit',
                    'Zero Downtime Migrations',
                    'SOC 2 & HIPAA Compliant',
                    '48hr Response Guarantee',
                    'NDA Signed on Day 1',
                  ].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      {checkSvg}
                      <span style={{ fontSize: 15, color: WHITE_70, fontWeight: 500 }}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
                <TrustBadges compact />
              </div>

              {/* Right — Form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm service="Cloud & DevOps" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding-sm" style={{ borderTop: `1px solid ${WHITE_05}` }}>
          <div className="cb-container">
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                marginBottom: 40,
                textAlign: 'center',
              }}
            >
              Related Services
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 20,
              }}
            >
              {[
                {
                  name: 'Web Development',
                  href: '/services/web-development',
                  desc: 'Full-stack web platforms deployed on the cloud infrastructure we build and manage.',
                },
                {
                  name: 'SaaS Development',
                  href: '/services/saas-development',
                  desc: 'Scalable SaaS products with CI/CD pipelines, auto-scaling and zero-downtime deploys.',
                },
                {
                  name: 'AI & Machine Learning',
                  href: '/services/ai-ml',
                  desc: 'Production AI models hosted on optimized cloud infrastructure with full observability.',
                },
              ].map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  style={{
                    display: 'block',
                    padding: '28px 24px',
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${WHITE_06}`,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = GREEN_20;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = WHITE_06;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>
                    {s.name}
                  </div>
                  <div style={{ fontSize: 13, color: WHITE_40, lineHeight: 1.6 }}>
                    {s.desc}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: WHITE_40,
                marginBottom: 24,
              }}
            >
              Industries We Serve
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
              ].map(ind => (
                <a
                  key={ind.href}
                  href={ind.href}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 500,
                    color: WHITE_70,
                    background: WHITE_04,
                    border: `1px solid ${WHITE_06}`,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = WHITE_06;
                    e.currentTarget.style.color = WHITE_70;
                  }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
