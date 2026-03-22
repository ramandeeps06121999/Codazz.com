'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { label: 'Kubernetes & Docker' },
  ],
  hero: {
    badge: 'CLOUD & DEVOPS',
    title: 'Kubernetes & Docker That',
    titleAccent: 'Scales Effortlessly',
    description: 'Production-grade containerization and orchestration that reduces infrastructure costs, eliminates deployment headaches, and handles any traffic spike.',
    service: 'Kubernetes & Docker',
    stats: [
      { value: '60+', label: 'K8s Clusters' },
      { value: '99.99%', label: 'Pod Uptime' },
      { value: '80%', label: 'Infra Cost Reduction vs VMs' },
      { value: '10x', label: 'Auto-Scaling Traffic Handled' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '🐳', title: 'Docker Containerization', desc: 'Converting legacy and greenfield applications into optimized, multi-stage Docker images with minimal attack surface and fast build times.' },
      { icon: '☸️', title: 'Kubernetes Cluster Setup (EKS/GKE/AKS)', desc: 'Production-grade Kubernetes clusters on managed cloud providers — configured with RBAC, network policies, and node auto-provisioning.' },
      { icon: '⛵', title: 'Helm Chart Development', desc: 'Reusable, parameterised Helm charts for your applications and third-party dependencies, enabling consistent deployments across environments.' },
      { icon: '⚖️', title: 'Auto-scaling & Load Balancing', desc: 'Horizontal Pod Autoscaler, Vertical Pod Autoscaler, and KEDA event-driven scaling configured to handle traffic spikes without over-provisioning.' },
      { icon: '🕸️', title: 'Service Mesh (Istio)', desc: 'Istio service mesh for mTLS between services, advanced traffic management, circuit breaking, and distributed tracing across microservices.' },
      { icon: '🔐', title: 'Container Security & Image Scanning', desc: 'Image vulnerability scanning with Trivy or Snyk, admission controllers, runtime security with Falco, and CIS Kubernetes Benchmark hardening.' },
    ],
  },
  portfolioCategory: 'cloud-devops',
  process: {
    label: 'Our Process',
    title: 'Our Kubernetes & Docker Process',
    steps: [
      { num: '01', title: 'Container Strategy', desc: 'We assess your application architecture, team capabilities, and deployment requirements to design the right containerization approach.' },
      { num: '02', title: 'Dockerization', desc: 'Applications are containerized with optimized, production-hardened Dockerfiles, image scanning integrated into the build pipeline.' },
      { num: '03', title: 'Kubernetes Setup', desc: 'Clusters are provisioned on your chosen managed provider with all production requirements: RBAC, networking, storage, monitoring, and ingress.' },
      { num: '04', title: 'Production Hardening', desc: 'Security policies, resource quotas, pod disruption budgets, and disaster recovery procedures are implemented and tested before go-live.' },
    ],
  },
  faqs: [
    { q: 'Do I need Kubernetes or is Docker Compose enough?', a: 'Docker Compose is perfectly suited for local development and simple single-server deployments with a handful of services. Kubernetes becomes necessary when you need auto-scaling, multi-node high availability, rolling deployments with zero downtime, or are running many services across a team of engineers. For early-stage startups, Docker Compose on a single VM often scales further than expected.' },
    { q: 'EKS vs GKE vs AKS — which managed Kubernetes should I use?', a: 'GKE is the most mature and operationally polished managed Kubernetes, making it a top choice for pure Kubernetes workloads. EKS is the natural choice if you are heavily invested in AWS services. AKS integrates best with Azure AD and Microsoft tooling. All three are production-ready — the right choice usually follows your primary cloud provider.' },
    { q: 'How do you handle stateful applications in Kubernetes?', a: 'Stateful workloads use StatefulSets with persistent volumes backed by cloud-native storage (EBS, GCP Persistent Disk, Azure Disk). For databases we typically recommend managed cloud databases (RDS, Cloud SQL) rather than running them in-cluster, unless there is a specific technical or cost requirement to do so.' },
    { q: 'What is a service mesh and do I need one?', a: 'A service mesh like Istio or Linkerd manages communication between microservices — providing mutual TLS encryption, traffic management (canary, circuit breaking), and distributed tracing. You need it when you have ten or more microservices, need zero-trust networking between services, or require fine-grained traffic control. For smaller deployments, it adds more complexity than benefit.' },
    { q: 'How do you manage Kubernetes upgrades?', a: 'Cluster upgrades follow a defined process: upgrade control plane first via the managed provider, then cordon and drain nodes one availability zone at a time while new nodes running the target version are provisioned. We test all workloads against the new version in a staging cluster first. Automated upgrade tooling like Karpenter simplifies node lifecycle management on an ongoing basis.' },
  ],
  faqDescription: 'Everything you need to know about our Kubernetes and Docker services.',
  ctaTitle: 'Ready to Containerize?',
  ctaDescription: 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
