'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function AwsEngineersPageClient() {
  return (
    <HireDeveloperPage
      technology="AWS"
      breadcrumbLabel="AWS Cloud Engineers"
      tagline="AWS & Cloud Architecture"
      description="Pre-vetted senior AWS cloud engineers ready to join your team in 48 hours. Design, migrate, and optimize cloud infrastructure with certified AWS architects who have managed 200+ production environments."
      stats={[
        { value: '35+', label: 'AWS Engineers' },
        { value: '7+ Yrs', label: 'Avg Experience' },
        { value: '200+', label: 'Environments Managed' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Certified AWS Experts', desc: 'Every AWS engineer holds professional-level certifications and passes our 5-stage vetting: architecture design challenge, cost optimization review, live infrastructure debugging, culture fit, and reference checks.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our AWS engineers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your engineer is online when you are — critical for incident response.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your infrastructure details and IP are protected before any discussion begins. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Cost-Optimized Architecture', desc: 'Our AWS engineers do not just build — they optimize. Expect 30-50% cloud cost reductions through right-sizing, reserved instances, spot strategies, and serverless migration.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior AWS architects at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Seamless Integration', desc: 'Your AWS engineer integrates into your existing tools — GitHub, Jira, Slack, Terraform Cloud, Datadog. They follow your IaC standards and deployment pipelines from day one.' },
      ]}
      profiles={[
        { id: 'A1', role: 'Senior AWS Solutions Architect', experience: '9 years experience', skills: ['AWS', 'Terraform', 'CloudFormation', 'Lambda', 'ECS/EKS', 'CDK'], projects: '60+ AWS architectures designed', availability: 'Available Now' },
        { id: 'A2', role: 'AWS DevOps Engineer', experience: '7 years experience', skills: ['AWS', 'CI/CD', 'Docker', 'Kubernetes', 'GitHub Actions', 'Ansible'], projects: '40+ CI/CD pipelines built', availability: 'Available Now' },
        { id: 'A3', role: 'AWS Security & Compliance Engineer', experience: '8 years experience', skills: ['AWS', 'IAM', 'GuardDuty', 'WAF', 'KMS', 'SOC2/HIPAA'], projects: '25+ compliance audits passed', availability: 'Available in 1 week' },
        { id: 'A4', role: 'AWS Data & Analytics Engineer', experience: '6 years experience', skills: ['AWS', 'Redshift', 'Glue', 'Athena', 'Kinesis', 'S3 Data Lake'], projects: '15+ data platforms on AWS', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Compute & Containers', chips: ['EC2', 'ECS', 'EKS', 'Lambda', 'Fargate', 'App Runner'] },
        { label: 'Storage & Database', chips: ['S3', 'RDS', 'DynamoDB', 'Aurora', 'ElastiCache', 'Redshift'] },
        { label: 'Networking & Security', chips: ['VPC', 'CloudFront', 'Route 53', 'WAF', 'IAM', 'GuardDuty'] },
        { label: 'Infrastructure as Code', chips: ['Terraform', 'CloudFormation', 'CDK', 'Pulumi', 'Ansible', 'Packer'] },
        { label: 'CI/CD & Automation', chips: ['CodePipeline', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'CodeBuild', 'CodeDeploy'] },
        { label: 'Monitoring & Observability', chips: ['CloudWatch', 'Datadog', 'Prometheus', 'Grafana', 'X-Ray', 'OpenTelemetry'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire an AWS engineer from Codazz?', a: 'You can interview pre-matched AWS engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new engineer can start architecting immediately.' },
        { q: 'Are your AWS engineers certified?', a: 'Yes. Our AWS engineers hold professional-level certifications including Solutions Architect Professional, DevOps Engineer Professional, and Security Specialty. Most have 6-10+ years of hands-on AWS experience.' },
        { q: 'Can your AWS engineers work in my timezone?', a: 'Yes. We have AWS engineers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your engineer will be online during your working hours.' },
        { q: 'What is the pricing for hiring an AWS engineer?', a: 'Our AWS engineers start at $30/hr for mid-level and $40-50/hr for senior architects. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Can your AWS engineers help reduce our cloud costs?', a: 'Absolutely. Cloud cost optimization is a core skill for our AWS engineers. They typically achieve 30-50% cost savings through right-sizing, reserved instances, spot strategies, and migrating workloads to serverless where appropriate.' },
        { q: 'Can I scale the team up or down?', a: 'Yes. Our engagement models are fully flexible. Add more AWS engineers as your infrastructure grows or scale down when a milestone is complete. No long-term contracts required.' },
      ]}
      startingRate="$30"
    />
  );
}
