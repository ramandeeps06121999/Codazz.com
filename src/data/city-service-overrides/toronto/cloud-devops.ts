export const torontoCloudDevopsOverride = {
  heroDescription:
    "Toronto runs on cloud infrastructure that has to satisfy Bay Street auditors, OSFI examiners, PHIPA privacy officers, and startup founders who want to ship every Friday afternoon. Codazz builds, migrates, and operates cloud and DevOps platforms for Toronto companies that need all of those things at once. We are based in Edmonton and Chandigarh and serve Toronto clients remotely, with overlapping hours that line up cleanly with King Street West standups and Downtown core change windows. Our engineers have designed AWS ca-central-1 landing zones for FinTech startups in the MaRS District, Azure Canada Central tenants for insurance carriers near Bay and Adelaide, and Google Cloud northamerica-northeast1 pipelines for Shopify-adjacent commerce teams. We understand that a Toronto workload is rarely a generic workload. Scotiabank and TD-adjacent integrations mean OSFI B-13 outsourcing reviews. Sunnybrook and UHN integrations mean PHIPA. Ontario Ministry projects mean Bill 194. We write Terraform modules, build GitHub Actions and GitLab pipelines, wire up ArgoCD on EKS and AKS, and own 24x7 SRE rotations that keep PagerDuty quiet while your Toronto team sleeps. Whether you are a Series A scaling on AWS, a credit union moving off VMware, or a public sector vendor onboarding to GC Cloud, we bring Canadian residency, compliance, and cost discipline to every environment we touch.",
  servicesIntro:
    "Codazz delivers end-to-end cloud and DevOps engineering for Toronto clients across AWS ca-central-1, Microsoft Azure Canada Central (Toronto), and Google Cloud northamerica-northeast1 (Montreal). Our services cover greenfield landing zones, lift-and-shift migrations from Markham and Mississauga data centres, container platform builds on EKS, AKS, and GKE, CI/CD pipelines with GitHub Actions, GitLab, and Azure DevOps, plus 24x7 SRE support. Big Five bank integrations almost always trigger an OSFI B-13 outsourcing and technology risk review, so we ship control mappings, residency evidence, and third-party risk artifacts alongside the infrastructure. We also support FinOps tagging, CAD cost dashboards, SOC 2 Type II readiness, ISO 27001 Annex A controls, and disaster recovery across Canadian regions with tested RTO and RPO numbers your auditors will sign off on.",
  processIntro:
    "Every Toronto engagement opens with a Canadian data residency discovery session. We map which datasets must remain in Canada under CRA, PHIPA, or OSFI guidance, which can legally route through US regions with contractual safeguards, and which third-party SaaS tools already process Toronto data abroad. We run an explicit OSFI B-13 outsourcing review step for any regulated financial workload, documenting concentration risk, exit strategy, and subcontractor chains before a single Terraform apply. From there we move into landing zone design, pilot migrations, cutover, and a hypercare window tuned to Toronto business hours. Every phase produces evidence artifacts your internal audit, privacy office, and OSFI liaison can drop straight into their working papers.",
  techIntro:
    "Our default Toronto stack is Kubernetes on EKS or AKS, Terraform for infrastructure, ArgoCD for GitOps, and Prometheus plus Grafana for observability, because this combination gives Toronto teams a portable control plane that survives cloud-provider negotiations with TD, RBC, or Scotiabank procurement. Azure Canada Central is our preferred landing spot for financial clients who want an in-province Toronto region and existing Microsoft ELAs, while AWS ca-central-1 wins for FinTech startups prioritizing managed services and Wealthsimple-style patterns. ArgoCD and Terraform give us reproducible deploys that survive OSFI audit sampling, and Kubernetes network policies plus PrivateLink keep regulated traffic off the public internet.",
  industryExpertise:
    "FinTech is our deepest Toronto vertical. We have built OSFI B-13 aligned AWS and Azure environments for challenger banks, payments platforms, and wealth startups, with end-to-end evidence for concentration risk, exit planning, and subcontractor disclosure. HealthTech clients in the Discovery District and University Avenue corridor rely on us for PHIPA-compliant architectures on Azure Canada Central, including encrypted PHI stores, consent-aware logging, and Information and Privacy Commissioner of Ontario ready audit trails. For Ontario public sector vendors we align with Bill 194, the Cyber Security and AI directives, and the Government of Canada Cloud Adoption Strategy, including Protected B workloads on GC Cloud through AWS ca-central-1 and Azure Canada. Our engineers understand the difference between a Scotiabank procurement questionnaire and a Sunnybrook privacy impact assessment, and we write documentation that speaks both languages without slowing delivery.",

  faqs: [
    {
      q: "What AWS region should a Toronto company use for data residency?",
      a: "For Canadian data residency on AWS, Toronto companies use ca-central-1, which is physically located in Montreal but dedicated to Canadian customers with data stored in-country. It offers three Availability Zones for multi-AZ high availability, and supports almost every service Toronto clients need including RDS, Aurora, EKS, Lambda, and KMS with Canadian key material. For OSFI regulated workloads we pair ca-central-1 with ca-west-1 in Calgary for disaster recovery, giving you a two-region Canadian footprint that satisfies both residency and business continuity expectations from auditors and internal risk committees.",
    },
    {
      q: "How do OSFI B-13 rules affect cloud migrations for Toronto banks?",
      a: "OSFI Guideline B-13 on Technology and Cyber Risk Management and the related B-10 third-party framework require federally regulated financial institutions in Toronto to treat cloud providers as material outsourcing arrangements. That means documented risk assessments, concentration risk analysis across AWS, Azure, and Google, contractual audit and inspection rights, exit strategies, and subcontractor transparency. We build these artifacts into the migration itself: Terraform modules produce residency evidence, runbooks include exit procedures, and landing zones enforce logging and key management controls that map directly to B-13 expected outcomes, so your OSFI liaison is not scrambling at review time.",
    },
    {
      q: "How much does a cloud migration cost for a Toronto business?",
      a: "For Toronto clients, a straightforward lift-and-shift of roughly 30 to 80 VMs into AWS ca-central-1 or Azure Canada Central typically lands between CAD 80,000 and CAD 180,000. A re-architecture to containers on EKS or AKS with CI/CD, observability, and HA across two Canadian regions runs CAD 180,000 to CAD 350,000. Greenfield DevOps platform builds start around CAD 40,000 for a focused scope and extend to CAD 150,000 for full GitOps, secrets, and policy-as-code. Full platform engineering programs for mid-market Toronto FinTech and HealthTech clients generally sit between CAD 200,000 and CAD 1 million across a 6 to 18 month roadmap.",
    },
    {
      q: "Can you set up multi-region HA across AWS Canada and US?",
      a: "Yes. A common Toronto pattern is active-active or active-passive across AWS ca-central-1 and us-east-1 or us-east-2, with Route 53 latency or failover routing, Aurora Global Database for sub-second cross-region replication, and S3 Cross-Region Replication for object storage. We only move data across the border where your legal, privacy, and OSFI positions allow it, and we tag datasets explicitly so residency-restricted data stays pinned to Canadian regions. For workloads that must stay entirely in Canada, we use ca-central-1 paired with ca-west-1 in Calgary for DR, giving you a fully Canadian multi-region footprint.",
    },
    {
      q: "Do you help with PHIPA-compliant cloud setups for Ontario health clients?",
      a: "Yes, PHIPA work is a significant part of our Toronto HealthTech practice. We design Azure Canada Central and AWS ca-central-1 environments with customer-managed KMS keys, private networking, immutable audit logs, and role-based access aligned to circle-of-care principles. We document logical safeguards for the Information and Privacy Commissioner of Ontario, build breach notification runbooks, and integrate with EMRs and HIE gateways used by Sunnybrook, UHN, and community networks. Every architecture ships with a privacy impact assessment input package so your privacy officer can complete the PIA without reverse-engineering the infrastructure.",
    },
    {
      q: "What's the difference between AWS Canada Central and Azure Canada Central for Toronto?",
      a: "AWS Canada Central (ca-central-1) is physically in the Montreal area but dedicated to Canadian customers. Azure Canada Central is actually located in the Greater Toronto Area, paired with Canada East in Quebec City. For Toronto financial institutions that prefer in-province infrastructure and already hold Microsoft enterprise agreements, Azure Canada Central is a natural fit. For startups, SaaS companies, and teams wanting the broadest managed service catalog, AWS ca-central-1 usually wins. We often run hybrid architectures using both regions with PrivateLink, ExpressRoute, and Direct Connect so workloads land where regulation, latency, and cost economics make the most sense.",
    },
    {
      q: "How do you handle SOC 2 and ISO 27001 compliance for Toronto SaaS?",
      a: "For Toronto SaaS clients chasing enterprise deals with TD, Manulife, or Sun Life, SOC 2 Type II and ISO 27001 are table stakes. We build compliance into the platform rather than bolt it on: Terraform modules ship with CIS benchmarks, logging centralizes into a tamper-evident store, secrets live in AWS Secrets Manager or Azure Key Vault, and access is SSO plus conditional access with hardware MFA. We prepare evidence packages for auditors like MNP, KPMG, and Schellman, map controls to ISO 27001 Annex A, and run quarterly access reviews and change management reports so your Type II audit period is clean.",
    },
    {
      q: "Can you work with Government of Canada GC Cloud for public sector clients?",
      a: "Yes. For Ontario public sector and federal vendors, we align architectures with the Government of Canada Cloud Adoption Strategy and the Directive on Service and Digital. We deploy Protected B workloads on AWS ca-central-1 and Azure Canada Central through the GC Cloud brokering service, implement ITSG-33 aligned controls, and produce Security Assessment and Authorization documentation. For Ontario Ministry projects we layer in Bill 194 expectations, including the Cyber Security and AI directives. We have delivered environments that meet both federal and provincial bars, so your program can sell into Queens Park and Ottawa without maintaining two separate stacks.",
    },
  ],

  whyCity: [
    {
      icon: "🍁",
      title: "Canadian Data Residency",
      desc: "Every Toronto architecture defaults to AWS ca-central-1, Azure Canada Central, or Google Cloud northamerica-northeast1, with explicit tagging for data that must remain in Canada under CRA, PHIPA, or contractual obligations.",
    },
    {
      icon: "🏦",
      title: "OSFI B-13 Expertise",
      desc: "We ship OSFI B-13 and B-10 ready artifacts including concentration risk, exit strategies, and subcontractor disclosure so Toronto banks, credit unions, and FinTechs pass outsourcing reviews without rearchitecting.",
    },
    {
      icon: "🛡️",
      title: "PHIPA & Bill 194 Compliance",
      desc: "Ontario health and public sector clients get Azure and AWS designs that align with PHIPA, Bill 194 cyber and AI directives, and the Government of Canada Cloud Adoption Strategy, with IPC-ready evidence baked in.",
    },
    {
      icon: "⚡",
      title: "Multi-Cloud Patterns",
      desc: "Kubernetes on EKS and AKS, Terraform, and ArgoCD let us run AWS ca-central-1 multi-AZ with PrivateLink to Azure Canada Central so Toronto banks, insurers, and SaaS teams avoid single-provider lock-in.",
    },
  ],
};
