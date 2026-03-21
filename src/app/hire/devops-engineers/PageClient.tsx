'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function DevOpsEngineersPageClient() {
  return (
    <HireDeveloperPage
      technology="DevOps"
      breadcrumbLabel="DevOps Engineers"
      tagline="AWS, Kubernetes & CI/CD"
      description="Pre-vetted senior DevOps engineers ready to join your team in 48 hours. Automate deployments, optimize cloud infrastructure, and build resilient CI/CD pipelines with engineers who have managed production systems serving millions of users."
      stats={[
        { value: '35+', label: 'DevOps Engineers' },
        { value: '8+ Yrs', label: 'Avg Experience' },
        { value: '200+', label: 'Infra Projects' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted DevOps Experts', desc: 'Every DevOps engineer passes our 5-stage vetting: infrastructure architecture challenge, Kubernetes & Terraform live exercise, incident response simulation, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our DevOps engineers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your engineer is online when you are.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your infrastructure details and business operations are protected before any discussion begins. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: '99.99% Uptime Focus', desc: 'Our DevOps engineers design for reliability: auto-scaling, multi-region failover, health checks, alerting, and disaster recovery. They keep your systems running 24/7.' },
        { icon: '\u{1F4B0}', title: '30-50% Cloud Savings', desc: 'Get senior DevOps engineers who optimize your cloud spend. Right-sizing, reserved instances, spot fleets, and storage tiering — they find savings without sacrificing performance.' },
        { icon: '\u{1F504}', title: 'Multi-Cloud Expertise', desc: 'Our DevOps engineers are certified on AWS, GCP, and Azure. They design multi-cloud and hybrid-cloud architectures, ensuring you avoid vendor lock-in and maximize flexibility.' },
      ]}
      profiles={[
        { id: 'D1', role: 'Senior DevOps Engineer', experience: '8 years experience', skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'Prometheus'], projects: '60+ production infrastructure projects', availability: 'Available Now' },
        { id: 'D2', role: 'Cloud Architect', experience: '12 years experience', skills: ['AWS', 'GCP', 'Azure', 'Multi-cloud', 'Cost Optimization', 'Security'], projects: 'Architected infrastructure for 10M+ user platforms', availability: 'Available Now' },
        { id: 'D3', role: 'SRE / Platform Engineer', experience: '7 years experience', skills: ['Kubernetes', 'Helm', 'ArgoCD', 'Datadog', 'PagerDuty', 'Chaos Engineering'], projects: 'Maintained 99.99% uptime for fintech platforms', availability: 'Available in 1 week' },
        { id: 'D4', role: 'DevSecOps Engineer', experience: '9 years experience', skills: ['AWS', 'Terraform', 'Vault', 'SAST/DAST', 'SOC 2', 'HIPAA'], projects: '25+ compliance-ready infrastructure deployments', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Cloud Platforms', chips: ['AWS', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean', 'Vercel', 'Cloudflare'] },
        { label: 'Containers & Orchestration', chips: ['Docker', 'Kubernetes', 'Helm', 'ECS/Fargate', 'Istio', 'Kustomize'] },
        { label: 'IaC & Configuration', chips: ['Terraform', 'Pulumi', 'CloudFormation', 'Ansible', 'Chef', 'CDK'] },
        { label: 'CI/CD Pipelines', chips: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD', 'CircleCI', 'Spinnaker'] },
        { label: 'Monitoring & Observability', chips: ['Prometheus', 'Grafana', 'Datadog', 'New Relic', 'ELK Stack', 'PagerDuty'] },
        { label: 'Security & Compliance', chips: ['HashiCorp Vault', 'AWS IAM', 'SAST/DAST', 'SOC 2', 'HIPAA', 'Zero Trust'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a DevOps engineer from Codazz?', a: 'You can interview pre-matched DevOps engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new engineer can start optimizing your infrastructure immediately.' },
        { q: 'What cloud platforms do your DevOps engineers work with?', a: 'Our DevOps engineers are certified and experienced with AWS, Google Cloud Platform, and Microsoft Azure. They design multi-cloud and hybrid-cloud architectures tailored to your specific needs.' },
        { q: 'Can your DevOps engineers set up CI/CD pipelines?', a: 'Yes. Our DevOps engineers design and implement CI/CD pipelines using GitHub Actions, GitLab CI, Jenkins, CircleCI, and ArgoCD. They automate testing, building, and deployment for faster, safer releases.' },
        { q: 'What is the pricing for hiring a DevOps engineer?', a: 'Our DevOps engineers start at $30/hr for mid-level and $40-55/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Can your DevOps engineers help reduce cloud costs?', a: 'Yes. Our engineers perform cloud cost audits, implement auto-scaling, right-size instances, optimize storage, and set up cost monitoring dashboards. Clients typically save 30-50% on their cloud bills.' },
        { q: 'Do you sign NDAs before starting?', a: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your infrastructure details and business operations are fully protected from the first conversation.' },
      ]}
      startingRate="$30"
    />
  );
}
