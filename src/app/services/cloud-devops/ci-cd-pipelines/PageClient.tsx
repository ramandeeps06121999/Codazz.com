'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { label: 'CI/CD Pipeline Development' },
  ],
  hero: {
    badge: 'CLOUD & DEVOPS',
    title: 'CI/CD Pipelines That',
    titleAccent: 'Ship Faster, Safer',
    description: 'Automated build, test, and deployment pipelines that eliminate manual processes, catch issues early, and let your team ship with confidence every day.',
    service: 'CI/CD Pipelines',
    stats: [
      { value: '100+', label: 'Pipelines Built' },
      { value: '10x', label: 'Faster Release Cycles' },
      { value: '<5min', label: 'Build Times' },
      { value: 'Zero', label: 'Downtime Deployments' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '⚙️', title: 'GitHub Actions & GitLab CI', desc: 'Purpose-built pipelines in GitHub Actions or GitLab CI with reusable workflows, caching strategies, and parallel job execution.' },
      { icon: '🧪', title: 'Automated Testing Integration', desc: 'Unit, integration, and end-to-end tests wired into every pipeline stage so no code reaches production without full test coverage.' },
      { icon: '🐳', title: 'Docker Build & Push', desc: 'Optimized multi-stage Docker builds with layer caching, vulnerability scanning, and automated pushes to ECR, GCR, or Docker Hub.' },
      { icon: '🌿', title: 'Environment Promotion (dev→staging→prod)', desc: 'Automated promotion gates between environments with required approvals, smoke tests, and automatic rollback triggers on failure.' },
      { icon: '🟦', title: 'Blue-Green & Canary Deployments', desc: 'Zero-downtime deployment strategies that shift traffic gradually and roll back instantly if error rates or latency thresholds are breached.' },
      { icon: '🛡️', title: 'Pipeline Security (SAST/DAST)', desc: 'Static and dynamic security analysis integrated into the pipeline, blocking deployments that introduce new vulnerabilities or expose secrets.' },
    ],
  },
  portfolioCategory: 'cloud-devops',
  process: {
    label: 'Our Process',
    title: 'Our CI/CD Pipeline Development Process',
    steps: [
      { num: '01', title: 'Current State Audit', desc: 'We map your existing deployment process, identify bottlenecks, manual steps, and security gaps that a pipeline will address.' },
      { num: '02', title: 'Pipeline Design', desc: 'We design the full pipeline architecture: stages, triggers, environment strategy, secrets management, and rollback procedures.' },
      { num: '03', title: 'Implementation', desc: 'Pipelines are built incrementally — starting with CI (build and test), then CD (deploy to staging), then production promotion with approval gates.' },
      { num: '04', title: 'Training & Handover', desc: 'Your team receives documentation and a live walkthrough so they can confidently maintain, extend, and troubleshoot the pipeline independently.' },
    ],
  },
  faqs: [
    { q: 'GitHub Actions vs Jenkins vs CircleCI — which should I use?', a: 'GitHub Actions is our default recommendation for teams already on GitHub — it requires zero infrastructure, has an enormous marketplace of actions, and costs nothing for public repos. Jenkins is powerful but requires self-hosting and maintenance overhead that most teams underestimate. CircleCI and BuildKite are strong alternatives for teams needing more advanced parallelism or hybrid cloud/on-premise runners.' },
    { q: 'How do you handle secrets in CI/CD?', a: 'Secrets are never hardcoded in pipeline YAML or committed to source control. We use the native secrets store of the CI platform (GitHub Encrypted Secrets, GitLab CI Variables) for basic cases, and integrate with HashiCorp Vault or AWS Secrets Manager for teams with more complex requirements. Secret scanning tools (GitGuardian, truffleHog) are added to the pipeline to catch accidental exposure.' },
    { q: 'What is a blue-green deployment?', a: 'Blue-green deployment maintains two identical production environments. The current live version runs on "blue" and the new version is deployed to "green." Once the green environment passes health checks, traffic is switched over instantly. If issues arise, traffic is switched back to blue in seconds. This eliminates downtime and provides a near-instant rollback capability.' },
    { q: 'How do you prevent bad code reaching production?', a: 'Multiple gates stand between a commit and production: automated linting and formatting checks, unit and integration tests, security scanning (SAST), dependency vulnerability scanning, container image scanning, environment-specific smoke tests, and mandatory human approval for production promotion. A deployment that fails any gate is blocked automatically.' },
    { q: 'How long does it take to set up a full CI/CD pipeline?', a: 'A basic CI pipeline (build, test, lint) for a single service typically takes two to three days. A full CI/CD setup with multiple environments, Docker, promotion gates, blue-green deployments, and security scanning for a multi-service application typically takes two to three weeks. Legacy monolith migrations take longer depending on the existing test coverage.' },
  ],
  faqDescription: 'Everything you need to know about our CI/CD pipeline services.',
  ctaTitle: 'Ready to Ship Faster?',
  ctaDescription: 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
