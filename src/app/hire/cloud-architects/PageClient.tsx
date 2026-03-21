'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function CloudArchitectsPageClient() {
  return (
    <HireDeveloperPage
      technology="Cloud Architect"
      breadcrumbLabel="Cloud Architects"
      tagline="AWS, GCP & Azure"
      description="Pre-vetted senior cloud architects ready to join your team in 48 hours. Design multi-cloud strategies, optimize cloud costs with FinOps, build resilient infrastructure, and implement enterprise-grade disaster recovery with architects who have designed systems serving millions of users."
      stats={[
        { value: '25+', label: 'Cloud Architects' },
        { value: '7+ Yrs', label: 'Avg Experience' },
        { value: '150+', label: 'Cloud Migrations' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '✅', title: 'Certified Cloud Experts', desc: 'Every architect passes our 5-stage vetting: cloud design challenge, infrastructure audit, live architecture review, cost optimization assessment, and reference checks. All hold AWS, GCP, or Azure professional certifications. Only the top 3% qualify.' },
        { icon: '☁️', title: 'Multi-Cloud Expertise', desc: 'Our cloud architects design vendor-agnostic architectures across AWS, GCP, and Azure. They prevent vendor lock-in by leveraging Terraform and cloud-native tools to build portable, interoperable infrastructure that scales across providers.' },
        { icon: '💰', title: 'FinOps & Cost Optimization', desc: 'Our architects are trained FinOps practitioners who have consistently reduced client cloud bills by 30-60%. They implement reserved instance strategies, right-size workloads, eliminate waste, and set up real-time cost anomaly alerts.' },
        { icon: '🔒', title: 'Security & Compliance First', desc: 'Our cloud architects implement zero-trust security models, IAM least-privilege policies, encryption at rest and in transit, VPC design, and compliance frameworks (SOC 2, HIPAA, GDPR, PCI-DSS) from day one.' },
        { icon: '🔄', title: 'Disaster Recovery & HA', desc: 'Our architects design battle-tested disaster recovery plans with RPO/RTO targets, active-active and active-passive failover strategies, automated backups, and chaos engineering validation to ensure your systems stay online.' },
        { icon: '💸', title: '40-60% Cost Savings', desc: 'Get senior cloud architects at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required. Engage for architecture sprints or embed long-term in your engineering team.' },
      ]}
      profiles={[
        { id: 'CA1', role: 'AWS Solutions Architect', experience: '7 years experience', skills: ['AWS', 'Terraform', 'EKS', 'RDS Aurora', 'CloudFront', 'Lambda'], projects: 'Architected AWS infrastructure for 3 Series-B SaaS startups', availability: 'Available Now' },
        { id: 'CA2', role: 'Multi-Cloud Architect', experience: '9 years experience', skills: ['AWS', 'GCP', 'Azure', 'Terraform', 'Pulumi', 'Kubernetes'], projects: 'Designed multi-cloud strategy reducing cloud costs by 45%', availability: 'Available Now' },
        { id: 'CA3', role: 'GCP Cloud Architect', experience: '6 years experience', skills: ['GCP', 'BigQuery', 'GKE', 'Cloud Run', 'Dataflow', 'Terraform'], projects: 'Migrated 200TB data warehouse to BigQuery for Fortune 500', availability: 'Available in 1 week' },
        { id: 'CA4', role: 'Azure Solutions Architect', experience: '8 years experience', skills: ['Azure', 'AKS', 'Azure AD', 'ARM Templates', 'Bicep', 'Azure DevOps'], projects: 'Led Azure enterprise migration for 10,000-seat organization', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Cloud Platforms', chips: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Oracle Cloud', 'IBM Cloud', 'Alibaba Cloud'] },
        { label: 'Infrastructure as Code', chips: ['Terraform', 'Pulumi', 'AWS CDK', 'Azure Bicep', 'ARM Templates', 'Ansible'] },
        { label: 'Container & Orchestration', chips: ['Kubernetes', 'Amazon EKS', 'Google GKE', 'Azure AKS', 'Docker', 'Helm'] },
        { label: 'FinOps & Cost Tools', chips: ['AWS Cost Explorer', 'CloudHealth', 'Spot.io', 'Kubecost', 'Infracost', 'Azure Cost Management'] },
        { label: 'Networking & Security', chips: ['VPC Design', 'Zero-Trust', 'IAM/RBAC', 'WAF', 'AWS Shield', 'Azure Firewall'] },
        { label: 'Observability & DR', chips: ['Datadog', 'Grafana', 'AWS CloudWatch', 'PagerDuty', 'Chaos Engineering', 'Velero'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a cloud architect from Codazz?', a: 'You can interview pre-matched cloud architects within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours. Our architects are available for immediate engagement on AWS, GCP, and Azure projects.' },
        { q: 'What cloud certifications do your architects hold?', a: 'Our cloud architects hold certifications including AWS Solutions Architect Professional, AWS DevOps Engineer, Google Professional Cloud Architect, Google Professional Data Engineer, Microsoft Azure Solutions Architect Expert (AZ-305), and Azure DevOps Engineer Expert (AZ-400).' },
        { q: 'Can your cloud architects design multi-cloud and hybrid cloud strategies?', a: 'Yes. Our cloud architects specialize in multi-cloud and hybrid cloud strategy. They use Terraform and Pulumi to build vendor-agnostic architectures that prevent lock-in, optimize costs, and maximize availability across AWS, GCP, and Azure simultaneously.' },
        { q: 'What is FinOps and do your architects have expertise in cloud cost optimization?', a: 'FinOps is the practice of bringing financial accountability to cloud spending. Our cloud architects analyze cloud bills, implement reserved instance strategies, right-size workloads, set up cost anomaly detection, and have consistently reduced client cloud bills by 30-60%.' },
        { q: 'What is the pricing for hiring a cloud architect from Codazz?', a: 'Our cloud architects start at $45/hr for mid-level certified architects, $55/hr for senior architects, and $65/hr for principal and staff-level architects with multi-cloud expertise. Transparent pricing with no hidden fees or long-term lock-in.' },
        { q: 'Do you sign NDAs before starting?', a: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your infrastructure designs, cost data, and business architecture are fully protected from the first conversation.' },
      ]}
      startingRate="$45"
    />
  );
}
