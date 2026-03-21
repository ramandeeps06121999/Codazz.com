'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Cloud & DevOps' },
  ],

  hero: {
    badge: 'Cloud Consulting Company',
    title: 'Cloud & DevOps',
    titleAccent: 'Services',
    description:
      'Enterprise cloud architecture, CI/CD pipelines, Kubernetes orchestration and DevSecOps — engineered for 99.99% uptime, infinite scale and full observability. AWS Advanced Tier Partner.',
    service: 'Cloud & DevOps',
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '500+', label: 'Cloud Migrations' },
      { value: '40%', label: 'Avg Cost Savings' },
      { value: '24/7', label: 'Monitoring & Support' },
    ],
  },

  awards: [
    'AWS Advanced Tier Partner',
    'SOC 2 Type II Compliant',
    'ISO 27001 Certified',
    'Clutch Top Cloud Company 2026',
    'Google Cloud Partner',
    'Top DevOps Company - GoodFirms',
    '500+ Cloud Migrations Delivered',
    '99.99% Uptime SLA Guarantee',
  ],

  whySection: {
    title: 'Why Businesses Choose Codazz for Cloud & DevOps',
    cards: [
      {
        icon: '💸',
        title: 'Runaway Cloud Bills',
        desc: 'Most companies overspend on cloud by 30-50%. Without proper FinOps practices, reserved instance planning, and right-sizing, you are burning money on idle resources and over-provisioned infrastructure every single month.',
      },
      {
        icon: '🐌',
        title: 'Slow, Painful Deployments',
        desc: 'Manual deployments that take hours, break production, and require all-hands-on-deck weekends. Without CI/CD automation, your engineering velocity is capped and your team dreads release day.',
      },
      {
        icon: '🔓',
        title: 'Security & Compliance Gaps',
        desc: 'Security as an afterthought means vulnerabilities in production, failed audits, and compliance gaps. Without DevSecOps, every container image, dependency, and config file is a potential attack vector.',
      },
      {
        icon: '📉',
        title: 'Downtime & Scaling Failures',
        desc: 'Single points of failure, no auto-scaling, no disaster recovery. When traffic spikes or a region goes down, your application goes with it — costing revenue, reputation, and customer trust.',
      },
      {
        icon: '✅',
        title: 'Our Solution: End-to-End Cloud Engineering',
        desc: 'We architect multi-cloud infrastructure with Terraform IaC, deploy via automated CI/CD pipelines, orchestrate with Kubernetes, monitor with full-stack observability, and optimize costs — all with security baked in from day one.',
      },
      {
        icon: '🏗️',
        title: 'Infrastructure as Code, Not Clickops',
        desc: 'Every piece of infrastructure is version-controlled, reproducible, and auditable. No more clicking through consoles. Terraform, Pulumi, and Ansible ensure your entire stack can be rebuilt from scratch in minutes.',
      },
    ],
    whoNeedsTitle: 'Who Needs Cloud & DevOps Services?',
    whoNeedsItems: [
      {
        icon: '🚀',
        title: 'Startups Scaling Fast',
        desc: 'You have product-market fit but your infrastructure cannot keep up. Auto-scaling, containerization, and CI/CD pipelines let you ship features daily without worrying about infrastructure.',
      },
      {
        icon: '🏢',
        title: 'Enterprises Migrating to Cloud',
        desc: 'Legacy on-premise infrastructure is expensive and inflexible. We plan and execute zero-downtime migrations to AWS, GCP, or Azure — cutting costs 30-50% while improving reliability.',
      },
      {
        icon: '🔒',
        title: 'Regulated Industries (FinTech, Healthcare)',
        desc: 'HIPAA, SOC 2, PCI DSS, ISO 27001 — we build cloud infrastructure that passes audits. Encryption, access controls, audit logging, and continuous compliance monitoring are built in.',
      },
      {
        icon: '🛒',
        title: 'E-Commerce & High-Traffic Platforms',
        desc: 'Black Friday traffic spikes should not take down your store. Auto-scaling Kubernetes clusters, CDN optimization, and caching strategies handle millions of concurrent users effortlessly.',
      },
      {
        icon: '🤖',
        title: 'AI/ML Teams Needing GPU Infrastructure',
        desc: 'Training and serving ML models requires specialized cloud infrastructure. We architect GPU clusters, model serving pipelines, and cost-optimized compute for AI workloads.',
      },
    ],
    metricsTitle: 'Cloud & DevOps Impact by the Numbers',
    metrics: [
      { metric: '99.99%', label: 'Uptime SLA', desc: 'Multi-region, auto-healing architecture' },
      { metric: '40%', label: 'Avg Cost Savings', desc: 'FinOps-driven cloud optimization' },
      { metric: '8 min', label: 'Avg Deploy Time', desc: 'Down from 4+ hours with CI/CD' },
      { metric: '500+', label: 'Cloud Migrations', desc: 'Zero-downtime track record' },
      { metric: '<15 min', label: 'Incident Response', desc: '24/7 monitoring and alerting' },
    ],
    closingText:
      'Cloud infrastructure is the foundation of every modern business. Whether you are migrating from on-premise, optimizing an existing cloud environment, or building greenfield infrastructure — Codazz delivers production-grade cloud architecture with CI/CD automation, Kubernetes orchestration, full-stack observability, and enterprise security. Our AWS Advanced Tier partnership and SOC 2 / ISO 27001 certifications mean your infrastructure is built to the highest standards from day one.',
  },

  subServices: [
    {
      title: 'AWS Architecture',
      tag: 'Cloud',
      desc: 'Multi-region, highly available AWS architecture with VPC design, auto-scaling groups, load balancers and disaster recovery built in from day one.',
      chips: ['EC2', 'ECS', 'Lambda', 'RDS', 'S3', 'CloudFront'],
      href: '/services/cloud-devops/aws-architecture',
      icon: '☁️',
    },
    {
      title: 'Kubernetes & Docker',
      tag: 'Containers',
      desc: 'Production-grade Kubernetes clusters with auto-scaling, rolling deployments, service mesh, and container security scanning across any cloud provider.',
      chips: ['K8s', 'Docker', 'EKS', 'Helm', 'Istio'],
      href: '/services/cloud-devops/kubernetes-docker',
      icon: '🐳',
    },
    {
      title: 'CI/CD Pipelines',
      tag: 'DevOps',
      desc: 'End-to-end automated pipelines with testing gates, security scanning, artifact management and zero-downtime blue-green deployments.',
      chips: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Jenkins'],
      href: '/services/cloud-devops/ci-cd-pipelines',
      icon: '⚡',
    },
    {
      title: 'Infrastructure as Code',
      tag: 'IaC',
      desc: 'Version-controlled, declarative infrastructure with Terraform and Pulumi. Reproducible environments, drift detection and automated compliance.',
      chips: ['Terraform', 'Pulumi', 'AWS CDK', 'Ansible'],
      href: '/services/cloud-devops/infrastructure-as-code',
      icon: '📝',
    },
    {
      title: 'Performance & Scaling',
      tag: 'Optimization',
      desc: 'Load testing, auto-scaling policies, CDN optimization, database tuning and caching strategies to handle millions of requests per second.',
      chips: ['CloudFront', 'Redis', 'ElastiCache', 'ALB'],
      href: '/services/cloud-devops/performance-scaling',
      icon: '📈',
    },
  ],

  servicesHeading: {
    label: 'Our Cloud & DevOps Services',
    title: 'End-to-End Cloud',
    titleDim: 'Engineering.',
    description:
      'From architecture design to production operations, we deliver cloud infrastructure that scales infinitely, deploys automatically, and stays secure — across AWS, GCP, and Azure.',
  },

  benefits: {
    label: 'Why Choose Codazz',
    title: 'Enterprise-Grade Cloud',
    titleDim: 'Built for Scale.',
    items: [
      {
        icon: '🛡️',
        title: 'Security-First Architecture',
        desc: 'DevSecOps baked into every layer — container scanning, secrets management, compliance-as-code, and continuous vulnerability assessments. SOC 2, HIPAA, PCI DSS, and ISO 27001 compliant infrastructure.',
      },
      {
        icon: '💰',
        title: '40% Average Cost Savings',
        desc: 'Our FinOps practice identifies waste, right-sizes resources, implements reserved capacity planning, and automates cost controls. Most clients see 30-60% reduction in monthly cloud spend.',
      },
      {
        icon: '⚡',
        title: 'Zero-Downtime Deployments',
        desc: 'Blue-green deployments, canary releases, and rolling updates via automated CI/CD pipelines. Ship code to production in minutes with automated testing gates and instant rollback capability.',
      },
      {
        icon: '🔍',
        title: 'Full-Stack Observability',
        desc: 'Metrics, logs, traces, and alerts unified into a single observability platform. Datadog, Grafana, Prometheus, and ELK Stack for sub-minute incident detection with automated runbooks.',
      },
      {
        icon: '🌐',
        title: 'Multi-Cloud Expertise',
        desc: 'AWS Advanced Tier Partner with deep GCP and Azure expertise. We architect cloud-agnostic infrastructure with Terraform and Kubernetes to avoid vendor lock-in and maximize flexibility.',
      },
      {
        icon: '🚀',
        title: 'Infinite Auto-Scaling',
        desc: 'Kubernetes horizontal pod autoscaling, AWS auto-scaling groups, and serverless architectures that handle traffic spikes from 100 to 10 million requests without manual intervention.',
      },
    ],
  },

  clientLogos: [
    'Amazon Web Services',
    'Google Cloud',
    'Microsoft Azure',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Datadog',
    'Grafana',
    'GitHub Actions',
    'ArgoCD',
    'Prometheus',
    'HashiCorp Vault',
  ],

  bigStats: [
    { value: '500+', label: 'Cloud Migrations', desc: 'Zero-downtime track record' },
    { value: '99.99%', label: 'Uptime SLA', desc: 'Multi-region architecture' },
    { value: '40%', label: 'Avg Cost Savings', desc: 'FinOps-driven optimization' },
    { value: '$2.4M+', label: 'Total Savings Delivered', desc: 'Across all client portfolios' },
    { value: '8 min', label: 'Avg Deploy Time', desc: 'Automated CI/CD pipelines' },
    { value: '24/7', label: 'Monitoring & Support', desc: 'Sub-15-minute incident response' },
  ],

  advancedTech: {
    row1: [
      { icon: '☁️', title: 'Multi-Region AWS', desc: 'Highly available architecture across multiple availability zones and regions' },
      { icon: '🐳', title: 'Kubernetes', desc: 'Production-grade container orchestration with auto-scaling and self-healing' },
      { icon: '🔄', title: 'GitOps & ArgoCD', desc: 'Declarative continuous delivery with git as the single source of truth' },
      { icon: '📊', title: 'Full-Stack Observability', desc: 'Unified metrics, logs, and traces with Datadog and Grafana dashboards' },
      { icon: '🔐', title: 'Secrets Management', desc: 'Centralized secrets with HashiCorp Vault and automatic rotation policies' },
      { icon: '⚙️', title: 'Infrastructure as Code', desc: 'Terraform and Pulumi for reproducible, version-controlled infrastructure' },
    ],
    row2: [
      { icon: '🛡️', title: 'Container Security', desc: 'Image scanning with Trivy and Snyk, runtime protection with Falco' },
      { icon: '💰', title: 'FinOps & Cost Optimization', desc: 'Right-sizing, reserved instances, spot strategy, and automated scheduling' },
      { icon: '🌐', title: 'CDN & Edge Computing', desc: 'CloudFront, edge functions, and global caching for sub-100ms latency' },
      { icon: '🗄️', title: 'Managed Databases', desc: 'RDS, DynamoDB, Aurora with automated backups and cross-region replication' },
      { icon: '⚡', title: 'Serverless Architecture', desc: 'AWS Lambda, Cloud Functions, and event-driven architecture at scale' },
      { icon: '📈', title: 'Auto-Scaling Policies', desc: 'HPA, cluster autoscaler, and predictive scaling for traffic spikes' },
    ],
  },

  techStack: [
    {
      category: 'Cloud Platforms',
      techs: ['AWS', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean', 'Cloudflare'],
    },
    {
      category: 'Container & Orchestration',
      techs: ['Kubernetes', 'Docker', 'EKS', 'GKE', 'AKS', 'Helm', 'Istio'],
    },
    {
      category: 'CI/CD & GitOps',
      techs: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Jenkins', 'CircleCI', 'AWS CodePipeline'],
    },
    {
      category: 'Infrastructure as Code',
      techs: ['Terraform', 'Pulumi', 'AWS CDK', 'CloudFormation', 'Ansible'],
    },
    {
      category: 'Monitoring & Observability',
      techs: ['Datadog', 'Grafana', 'Prometheus', 'ELK Stack', 'PagerDuty', 'New Relic'],
    },
    {
      category: 'Security & Compliance',
      techs: ['HashiCorp Vault', 'Trivy', 'Snyk', 'Falco', 'AWS GuardDuty', 'Sealed Secrets'],
    },
  ],

  pricingGuide: {
    title: 'How Much Do Cloud & DevOps Services Cost?',
    description:
      'Cloud and DevOps costs depend on infrastructure complexity, number of environments, compliance requirements, and ongoing managed services scope. Codazz offers fixed-price quotes after a free infrastructure audit.',
    tiers: [
      {
        icon: '\uD83D\uDCB0',
        name: 'Startup / SMB Cloud Setup',
        price: '$15,000 – $50,000',
        desc: 'AWS/GCP architecture, Terraform IaC, CI/CD pipeline, basic monitoring, and single-region deployment for startups and small teams.',
        timeline: '\u23F1 3–6 weeks',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Mid-Market Infrastructure',
        price: '$50,000 – $150,000',
        desc: 'Multi-environment Kubernetes clusters, GitOps with ArgoCD, full observability stack, FinOps optimization, and cloud migration.',
        timeline: '\u23F1 2–4 months',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Enterprise Cloud Platform',
        price: '$150,000 – $400,000+',
        desc: 'Multi-region, multi-cloud architecture with disaster recovery, DevSecOps, compliance automation (SOC 2/HIPAA), and 24/7 managed services.',
        timeline: '\u23F1 4–8 months',
      },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a Cloud & DevOps Company',
    description:
      'Choosing the right cloud partner is critical — poor infrastructure decisions cost you uptime, security, and money every month. Here is what to evaluate.',
    criteria: [
      { icon: '\uD83D\uDCCB', title: 'Proven Portfolio', desc: 'Look for 500+ cloud migrations and Kubernetes deployments with documented uptime track records.' },
      { icon: '\uD83D\uDC68\u200D\uD83D\uDCBB', title: 'Senior DevOps Engineers', desc: '8+ years avg experience. AWS/GCP certified with deep Terraform, Kubernetes, and CI/CD expertise.' },
      { icon: '\uD83D\uDCB2', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope and milestones for migration, setup, and optimization projects.' },
      { icon: '\uD83D\uDEE1\uFE0F', title: 'Post-Launch SLAs', desc: '24/7 monitoring, sub-15-minute incident response, and managed services with uptime guarantees.' },
      { icon: '\uD83D\uDD12', title: 'Security Certs', desc: 'SOC 2, ISO 27001, HIPAA, and PCI-DSS compliant infrastructure as standard practice.' },
      { icon: '\uD83D\uDD50', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and 24/7 on-call engineering support.' },
    ],
  },

  faqs: [
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
  ],

  faqDescription:
    'Everything you need to know about our cloud consulting and DevOps services. Have a question not listed here? Reach out to our team.',

  relatedBlogs: [
    {
      title: 'AWS Cost Optimization: 6 Strategies That Saved Our Clients $2.4M',
      desc: 'Practical FinOps strategies including right-sizing, reserved instances, spot instances, and automated resource scheduling that deliver 30-60% cloud savings.',
      href: '/blog/aws-cost-optimization-strategies',
    },
    {
      title: 'Kubernetes vs Serverless: Choosing the Right Architecture in 2026',
      desc: 'When to use Kubernetes container orchestration versus serverless functions — with real-world decision frameworks and cost comparisons.',
      href: '/blog/kubernetes-vs-serverless-architecture',
    },
    {
      title: 'Building SOC 2 Compliant Infrastructure on AWS',
      desc: 'A step-by-step guide to architecting cloud infrastructure that passes SOC 2 Type II audits with automated evidence collection and continuous compliance monitoring.',
      href: '/blog/soc2-compliant-aws-infrastructure',
    },
  ],

  relatedServices: [
    {
      name: 'Web Development',
      desc: 'Full-stack web platforms deployed on the cloud infrastructure we build and manage.',
      href: '/services/web-development',
    },
    {
      name: 'SaaS Development',
      desc: 'Scalable SaaS products with CI/CD pipelines, auto-scaling and zero-downtime deploys.',
      href: '/services/saas-development',
    },
    {
      name: 'AI & Machine Learning',
      desc: 'Production AI models hosted on optimized cloud infrastructure with full observability.',
      href: '/services/ai-ml',
    },
  ],

  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Enterprise', href: '/industries/enterprise' },
  ],
};

export default function CloudDevOpsPage() {
  return <ServicePageTemplate data={pageData} />;
}
