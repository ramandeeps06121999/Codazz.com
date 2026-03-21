'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Healthcare' },
  ],
  hero: {
    badge: 'HEALTHCARE SOFTWARE DEVELOPMENT',
    title: 'We Build Healthcare Software That',
    titleAccent: 'Saves Lives.',
    description: 'HIPAA-compliant EHR integrations, patient portals, clinical decision support, and health data platforms built by engineers who understand healthcare workflows.',
    service: 'Healthcare Development',
    stats: [
      { value: '500K+', label: 'Patients Served' },
      { value: 'HIPAA', label: 'Compliant' },
      { value: 'HL7 FHIR', label: 'Integrated' },
      { value: '40+', label: 'Health Projects' },
    ],
  },
  awards: [
    'HIPAA Compliant Development',
    'SOC 2 Type II Aligned',
    'HL7 FHIR Certified',
    'Top HealthTech Developer 2024',
    'AWS Healthcare Partner',
    'ONC Health IT Certified',
  ],
  whySection: {
    title: 'Why Healthcare Organizations Choose Codazz',
    cards: [
      { icon: '\u{1F3E5}', title: 'HIPAA-First Engineering', desc: 'Every line of code, every API call, every data store is designed with patient privacy as the foundation. HIPAA compliance is not an afterthought.' },
      { icon: '\u{1F517}', title: 'EHR/EMR Integration Experts', desc: 'Deep experience integrating with Epic, Cerner, Allscripts, and athenahealth through HL7 FHIR APIs while maintaining data integrity and security.' },
      { icon: '\u{1F9EC}', title: 'Clinical Workflow Understanding', desc: 'Our team understands clinical workflows, medical terminology, and the unique UX needs of patients and providers. We speak healthcare fluently.' },
      { icon: '\u{1F512}', title: 'End-to-End Data Security', desc: 'AES-256 encryption, audit logging, role-based access controls, BAA management, and automated compliance monitoring with real-time alerts.' },
    ],
    whoNeedsTitle: 'Who Needs Healthcare Software Development?',
    whoNeedsItems: [
      { icon: '\u{1F3E5}', title: 'Hospitals & Health Systems', desc: 'Custom clinical applications, patient portals, and EHR integrations that improve care delivery and operational efficiency.' },
      { icon: '\u{1F4F1}', title: 'Digital Health Startups', desc: 'HIPAA-compliant MVPs, telehealth platforms, and health apps that pass investor scrutiny and regulatory review.' },
      { icon: '\u{1F48A}', title: 'Pharmaceutical Companies', desc: 'Clinical trial management, drug interaction databases, and patient adherence platforms.' },
      { icon: '\u{1F9EA}', title: 'Diagnostic Labs', desc: 'Lab information systems, result portals, and integration with provider ordering systems.' },
      { icon: '\u{1FA7A}', title: 'Medical Device Companies', desc: 'Companion apps, remote monitoring platforms, and regulatory-compliant data collection systems.' },
    ],
    metricsTitle: 'Healthcare Development by the Numbers',
    metrics: [
      { metric: '500K+', label: 'Patients Served', desc: 'Across client platforms' },
      { metric: '99.9%', label: 'Uptime Achieved', desc: 'Mission-critical systems' },
      { metric: 'Zero', label: 'HIPAA Violations', desc: 'Across all projects' },
      { metric: '40+', label: 'Health Projects', desc: 'Delivered successfully' },
    ],
    closingText: 'Whether you are building a telehealth platform, a patient engagement app, or integrating with legacy EHR systems, Codazz brings the compliance expertise, clinical understanding, and engineering rigor to ship healthcare products that providers trust and patients love. We build technology that improves health outcomes.',
  },
  subServices: [
    { title: 'Patient Portal & Engagement', tag: 'Patient', desc: 'Secure patient portals with appointment scheduling, lab results, messaging, prescription management, and health education resources.', chips: ['Portal', 'Scheduling', 'Messaging', 'Results'], href: '/contact', icon: '\u{1F4F1}' },
    { title: 'EHR/EMR Integration', tag: 'Integration', desc: 'HL7 FHIR-compliant integration engines connecting with Epic, Cerner, Allscripts and other systems for seamless clinical data exchange.', chips: ['FHIR', 'Epic', 'Cerner', 'HL7'], href: '/contact', icon: '\u{1F517}' },
    { title: 'Telehealth Platforms', tag: 'Telehealth', desc: 'HIPAA-compliant video consultation platforms with virtual waiting rooms, e-prescribing, and clinical note integration.', chips: ['Video', 'E-Prescribe', 'Scheduling', 'Chat'], href: '/contact', icon: '\u{1F4F9}' },
    { title: 'Clinical Decision Support', tag: 'Clinical', desc: 'AI-powered diagnostic tools, drug interaction checkers, clinical pathways, and evidence-based treatment recommendation engines.', chips: ['AI Diagnostics', 'Drug Checks', 'Pathways', 'Alerts'], href: '/contact', icon: '\u{1F9E0}' },
    { title: 'Remote Patient Monitoring', tag: 'RPM', desc: 'IoT device integration for vitals tracking, wearable data ingestion, threshold alerts, and automated escalation workflows.', chips: ['IoT', 'Wearables', 'Alerts', 'Dashboards'], href: '/contact', icon: '\u{1FA7A}' },
    { title: 'Health Data & Analytics', tag: 'Analytics', desc: 'Population health dashboards, clinical analytics, outcomes tracking, and regulatory reporting platforms.', chips: ['Population Health', 'Outcomes', 'BI', 'Reporting'], href: '/contact', icon: '\u{1F4CA}' },
  ],
  servicesHeading: {
    label: 'Our Healthcare Solutions',
    title: 'Comprehensive Health',
    titleDim: 'Technology Services.',
    description: 'From patient engagement to clinical analytics, we build every layer of healthcare technology with HIPAA compliance, interoperability, and clinical workflows at the core.',
  },
  benefits: {
    label: 'Why Codazz for Healthcare',
    title: 'Built for Clinical',
    titleDim: 'Grade Reliability.',
    items: [
      { icon: '\u{1F512}', title: 'HIPAA-Compliant by Default', desc: 'Encryption, audit logging, access controls, and BAA management baked into every project from day one.' },
      { icon: '\u{1F517}', title: 'Interoperability Experts', desc: 'Deep experience with HL7 FHIR, Epic, Cerner, and healthcare data exchange standards.' },
      { icon: '\u{1F9EC}', title: 'Clinical Domain Knowledge', desc: 'Our team understands clinical workflows, medical terminology, and provider/patient UX needs.' },
      { icon: '\u{1F916}', title: 'AI-Powered Health Insights', desc: 'Machine learning for diagnostics, risk prediction, treatment recommendations, and population health analytics.' },
      { icon: '\u{1F3E5}', title: 'Multi-State Compliance', desc: 'Experience navigating state-level telehealth regulations, licensing requirements, and data residency laws.' },
      { icon: '\u{1F91D}', title: 'Long-Term Support', desc: 'Ongoing compliance updates, security patches, and feature development as healthcare regulations evolve.' },
    ],
  },
  clientLogos: [
    'Epic', 'Cerner', 'Allscripts', 'athenahealth', 'Teladoc', 'Amwell',
    'Veracyte', 'Hims & Hers', 'Oscar Health', 'Ro', 'Nurx', 'GoodRx',
  ],
  bigStats: [
    { value: '500K+', label: 'Patients Served', desc: 'Across all platforms' },
    { value: 'Zero', label: 'HIPAA Violations', desc: 'Clean compliance record' },
    { value: '40+', label: 'Health Projects', desc: 'Delivered globally' },
    { value: '99.9%', label: 'Uptime SLA', desc: 'Clinical-grade reliability' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F9E0}', title: 'AI Diagnostics', desc: 'ML models for clinical decision support' },
      { icon: '\u{1F517}', title: 'FHIR Integration', desc: 'Interoperable health data exchange' },
      { icon: '\u{1F4F9}', title: 'Telehealth Video', desc: 'Low-latency HIPAA-compliant video' },
      { icon: '\u{1FA7A}', title: 'Remote Monitoring', desc: 'IoT and wearable device data pipelines' },
      { icon: '\u{1F510}', title: 'Data Encryption', desc: 'AES-256 at rest and in transit' },
    ],
    row2: [
      { icon: '\u{1F4CA}', title: 'Health Analytics', desc: 'Population health and outcomes dashboards' },
      { icon: '\u{1F4F1}', title: 'Patient Apps', desc: 'Accessible mobile health experiences' },
      { icon: '\u{1F4DD}', title: 'E-Prescribing', desc: 'Drug interaction checks and pharmacy integration' },
      { icon: '\u{2601}\u{FE0F}', title: 'HIPAA Cloud', desc: 'AWS and Azure HIPAA-eligible infrastructure' },
      { icon: '\u{1F916}', title: 'NLP for Clinical Notes', desc: 'Automated documentation and coding' },
    ],
  },
  techStack: [
    { category: 'Backend', techs: ['Node.js', 'Python', 'Java', 'HL7 FHIR', 'GraphQL'] },
    { category: 'Frontend', techs: ['React', 'Next.js', 'React Native', 'TypeScript'] },
    { category: 'Video & Comms', techs: ['WebRTC', 'Twilio', 'Vonage', 'Daily.co'] },
    { category: 'Security', techs: ['AES-256', 'OAuth2', 'Vault', 'WAF', 'mTLS'] },
    { category: 'Cloud', techs: ['AWS HIPAA', 'Azure Health', 'Kubernetes', 'Terraform'] },
    { category: 'AI/ML', techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'] },
  ],
  faqs: [
    { q: 'Is your development process HIPAA compliant?', a: 'Yes. HIPAA compliance is foundational to our healthcare development process. We implement encryption at rest and in transit, role-based access controls, audit logging, and BAA management. Our infrastructure runs on HIPAA-eligible cloud services, and every team member completes HIPAA training.' },
    { q: 'Can you integrate with our existing EHR system?', a: 'Absolutely. We have deep experience integrating with Epic, Cerner, Allscripts, athenahealth, and other EHR systems through HL7 FHIR APIs. We handle the complexity of clinical data mapping, authentication, and data validation.' },
    { q: 'Do you build telehealth platforms?', a: 'Yes. We build complete telehealth platforms with HIPAA-compliant video consultations, virtual waiting rooms, e-prescribing, appointment scheduling, and EHR integration. Our platforms support multi-state practice with appropriate licensing compliance.' },
    { q: 'How do you handle protected health information (PHI)?', a: 'PHI is encrypted at rest using AES-256 and in transit using TLS 1.3. Access is controlled through role-based permissions with multi-factor authentication. All access is logged and auditable. We implement data minimization principles and retain PHI only as required by regulation.' },
    { q: 'Can you build AI-powered clinical decision support tools?', a: 'Yes. We build ML-powered diagnostic assistance, risk prediction models, treatment recommendation engines, and clinical NLP systems. All AI features include appropriate clinical disclaimers and are designed to augment, not replace, clinical judgment.' },
    { q: 'What about regulatory compliance beyond HIPAA?', a: 'We have experience with HITECH, SOC 2, state-level telehealth regulations, FDA software requirements (SaMD), and ONC Health IT certification. We work with your compliance team to ensure all applicable regulations are addressed.' },
  ],
  faqDescription: 'Common questions about our healthcare software development services, HIPAA compliance, and clinical integration capabilities.',
  relatedBlogs: [
    { title: 'Building HIPAA-Compliant Health Applications', desc: 'A technical guide to healthcare data security and compliance architecture.', href: '/blog' },
    { title: 'HL7 FHIR Integration: The Complete Guide', desc: 'How to integrate with EHR systems using modern interoperability standards.', href: '/blog' },
    { title: 'AI in Healthcare: Clinical Decision Support', desc: 'How machine learning is transforming clinical workflows and patient outcomes.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'HIPAA-compliant patient and provider apps with video calls and health tracking.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'Clinical decision support, diagnostic AI, and health analytics platforms.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'HIPAA-compliant cloud infrastructure with encryption and disaster recovery.', href: '/services/cloud-devops' },
    { name: 'Web Development', desc: 'Patient portals, provider dashboards, and admin panels with EHR integration.', href: '/services/web-development' },
  ],
  industries: [
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Telemedicine', href: '/industries/telemedicine' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Fitness & Wellness', href: '/industries/fitness-wellness' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Real Estate', href: '/industries/real-estate' },
  ],
};

export default function HealthcarePage() {
  return <ServicePageTemplate data={pageData} />;
}
