'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { label: 'Infrastructure as Code' },
  ],
  hero: {
    badge: 'CLOUD & DEVOPS',
    title: 'Infrastructure as Code That',
    titleAccent: 'Eliminates Drift',
    description: 'We turn your cloud infrastructure into version-controlled, reproducible, auditable code — so every environment is consistent and every change is reviewed.',
    service: 'Infrastructure as Code',
    stats: [
      { value: '70+', label: 'IaC Projects' },
      { value: 'Terraform', label: '& Pulumi Experts' },
      { value: '100%', label: 'Reproducible Environments' },
      { value: '90%', label: 'Ops Time Saved' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '🏗️', title: 'Terraform Modules & State Management', desc: 'Reusable, versioned Terraform modules with remote state in S3 or Terraform Cloud, state locking, and workspace-based environment separation.' },
      { icon: '🐍', title: 'Pulumi (TypeScript/Python)', desc: 'Infrastructure defined in real programming languages — enabling loops, conditionals, and abstractions that HCL cannot express cleanly.' },
      { icon: '☁️', title: 'AWS CDK', desc: 'AWS Cloud Development Kit for teams preferring TypeScript or Python to define and provision AWS infrastructure with full IDE support.' },
      { icon: '🔄', title: 'GitOps Workflows', desc: 'Pull-request-driven infrastructure changes with automated plan output as PR comments, policy checks, and apply-on-merge workflows.' },
      { icon: '🌿', title: 'Environment Templating (dev/staging/prod)', desc: 'Identical environment configurations across dev, staging, and production using workspace or variable-driven parameterisation for full parity.' },
      { icon: '🔍', title: 'IaC Security Scanning (Checkov/tfsec)', desc: 'Static analysis of infrastructure code to catch misconfigurations — open security groups, public S3 buckets, and unencrypted storage — before apply.' },
    ],
  },
  portfolioCategory: 'cloud-devops',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Existing Infra Audit', desc: 'We document your current infrastructure, identify manually provisioned resources, and assess the scope of what needs to be codified.' },
      { num: '02', title: 'IaC Design', desc: 'Module structure, state backend, workspace strategy, and environment parameterisation are designed before any code is written.' },
      { num: '03', title: 'Migration & Modularisation', desc: 'Existing resources are imported into Terraform state and existing configurations are refactored into reusable, tested modules.' },
      { num: '04', title: 'CI Integration', desc: 'IaC is integrated into your CI/CD pipeline with automated plan, policy checks, and apply-on-merge so infrastructure changes go through the same review process as application code.' },
    ],
  },
  faqs: [
    { q: 'Terraform vs Pulumi vs CloudFormation — which should I use?', a: 'Terraform is the industry standard — multi-cloud, massive ecosystem, and the most widely known. It is the right default choice for most teams. Pulumi is excellent for teams who want to use real programming languages (TypeScript, Python, Go) and leverage existing software engineering practices. CloudFormation is AWS-native and requires no additional tooling, but is verbose and AWS-only — use it only if you have a strong reason to avoid third-party tooling.' },
    { q: 'How do you manage Terraform state safely?', a: 'Terraform state is stored remotely in an S3 bucket (or Terraform Cloud) with DynamoDB-based state locking to prevent concurrent applies. State buckets are versioned and encrypted. Access is restricted to CI/CD service accounts via IAM. State files are never committed to source control. Sensitive outputs in state are treated as secrets.' },
    { q: 'Can existing manually-provisioned infrastructure be imported to Terraform?', a: 'Yes — Terraform\'s import command (and the newer import blocks in Terraform 1.5+) can bring existing resources under Terraform management without destroying and recreating them. We audit existing infrastructure, generate configuration that matches it, import resources into state, and validate that a subsequent plan produces no changes before proceeding.' },
    { q: 'How do you handle secrets in IaC?', a: 'Secrets are never hardcoded in IaC code or state. We use data sources to read secrets at apply time from AWS Secrets Manager, HashiCorp Vault, or similar. For values that must be passed as inputs, we integrate with CI/CD secret stores. Checkov and tfsec scans catch hardcoded credential patterns before they reach the repository.' },
    { q: 'What is GitOps and should I use it?', a: 'GitOps is the practice of using a Git repository as the single source of truth for infrastructure state — all changes are made via pull requests, plans are posted as PR comments for review, and applies happen automatically on merge. It brings the same review, audit trail, and rollback capabilities to infrastructure that pull requests bring to application code. We recommend it for any team with more than two engineers touching infrastructure.' },
  ],
  faqDescription: 'Everything you need to know about our Infrastructure as Code services.',
  ctaTitle: 'Ready to Codify Your Infrastructure?',
  ctaDescription: 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
