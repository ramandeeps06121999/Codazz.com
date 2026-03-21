'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Telemedicine' },
  ],
  hero: {
    badge: 'TELEMEDICINE & DIGITAL HEALTH',
    title: 'We Build Telehealth Platforms That',
    titleAccent: 'Patients Trust.',
    description: 'HIPAA-compliant video consultations, EHR integrations, e-prescribing, remote patient monitoring and patient portal systems for modern healthcare.',
    service: 'Telemedicine Development',
    stats: [
      { value: '500K+', label: 'Consultations' },
      { value: 'HIPAA', label: 'Compliant' },
      { value: '99.9%', label: 'Uptime' },
      { value: '38 States', label: 'Coverage' },
    ],
  },
  awards: [
    'Top Telehealth Developer 2024',
    'HIPAA Compliance Experts',
    'EHR Integration Certified',
    'SOC 2 Type II Compliant',
    'HL7 FHIR Specialists',
    'Remote Patient Monitoring Partners',
  ],
  whySection: {
    title: 'Why Telehealth Companies Choose Codazz',
    cards: [
      { icon: '\u{1F3DB}\u{FE0F}', title: 'HIPAA & Regulatory Compliance', desc: 'Meeting stringent healthcare data protection requirements including HIPAA, HITECH, SOC 2 and state-level telehealth regulations across all 50 states.' },
      { icon: '\u{1F517}', title: 'EHR/EMR Integration', desc: 'Connecting with legacy healthcare systems like Epic, Cerner, Allscripts and athenahealth through HL7 FHIR APIs while maintaining data integrity and security.' },
      { icon: '\u{1F4F9}', title: 'Reliable Video Quality', desc: 'Delivering crystal-clear, low-latency video consultations even on poor network connections with adaptive quality, reconnection handling and fallback options.' },
      { icon: '\u{1F465}', title: 'Patient & Provider Experience', desc: 'Building interfaces that patients of all ages and technical abilities can use confidently, while giving providers efficient clinical workflows.' },
    ],
    whoNeedsTitle: 'Who Needs Telemedicine Development?',
    whoNeedsItems: [
      { icon: '\u{1F3E5}', title: 'Health Systems & Hospitals', desc: 'Virtual care programs, patient portals, and remote consultation platforms for large healthcare organizations.' },
      { icon: '\u{1F4F1}', title: 'Telehealth Startups', desc: 'Direct-to-consumer telehealth platforms with video visits, prescriptions, and ongoing care management.' },
      { icon: '\u{1F48A}', title: 'Digital Pharmacy', desc: 'E-prescribing platforms, medication management apps, and pharmacy integration systems.' },
      { icon: '\u{1F4CA}', title: 'Remote Monitoring Companies', desc: 'IoT-powered remote patient monitoring platforms with wearable integration and clinical alerts.' },
      { icon: '\u{1F9E0}', title: 'Mental Health Platforms', desc: 'Therapy and counseling platforms with scheduling, video sessions, and progress tracking.' },
    ],
    metricsTitle: 'Telemedicine Development by the Numbers',
    metrics: [
      { metric: '500K+', label: 'Consultations', desc: 'Across client platforms' },
      { metric: '95%', label: 'Patient Satisfaction', desc: 'Post-visit surveys' },
      { metric: '38', label: 'States Covered', desc: 'Multi-state compliance' },
      { metric: '10x', label: 'Visit Growth', desc: 'Within 12 months' },
    ],
    closingText: 'Whether you are building a telehealth platform, a remote patient monitoring system, or a digital pharmacy, Codazz brings the HIPAA compliance expertise, EHR integration experience, and patient-centered design to create healthcare technology that providers trust and patients love using.',
  },
  subServices: [
    { title: 'Video Consultation Platform', tag: 'Video', desc: 'HIPAA-compliant video calls with screen sharing, virtual waiting rooms, session recording, multi-participant support and automatic transcription for clinical notes.', chips: ['HIPAA Video', 'Waiting Room', 'Recording', 'Transcription'], href: '/contact', icon: '\u{1F4F9}' },
    { title: 'Patient Mobile App', tag: 'Patient', desc: 'Full-featured patient app with appointment scheduling, provider search, symptom checker, prescription management, lab results and secure messaging with care teams.', chips: ['Scheduling', 'Rx Management', 'Lab Results', 'Messaging'], href: '/contact', icon: '\u{1F4F1}' },
    { title: 'E-Prescribing & Pharmacy', tag: 'Rx', desc: 'Electronic prescribing with drug interaction checks, formulary verification, pharmacy network integration, prescription tracking and automated refill requests.', chips: ['Drug Checks', 'Formulary', 'Pharmacy', 'Refills'], href: '/contact', icon: '\u{1F48A}' },
    { title: 'EHR/EMR Integration Layer', tag: 'Integration', desc: 'HL7 FHIR-compliant integration engine connecting with Epic, Cerner, Allscripts and other EHR systems for seamless clinical data exchange and care continuity.', chips: ['HL7 FHIR', 'Epic', 'Cerner', 'Allscripts'], href: '/contact', icon: '\u{1F517}' },
    { title: 'Remote Patient Monitoring', tag: 'RPM', desc: 'IoT device integration for vitals tracking, wearable data ingestion, threshold alerts, care plan adherence monitoring and automated escalation workflows.', chips: ['IoT Devices', 'Vitals', 'Alerts', 'Adherence'], href: '/contact', icon: '\u{1F4CA}' },
    { title: 'Compliance & Security Suite', tag: 'Compliance', desc: 'End-to-end encryption, audit logging, access controls, BAA management, penetration testing and automated HIPAA compliance monitoring with real-time alerts.', chips: ['Encryption', 'Audit Logs', 'BAA', 'Pen Testing'], href: '/contact', icon: '\u{1F6E1}\u{FE0F}' },
  ],
  servicesHeading: {
    label: 'Our Telehealth Solutions',
    title: 'Complete Digital Health',
    titleDim: 'Platform Infrastructure.',
    description: 'From video consultations to remote monitoring, we build every component of telehealth platforms with HIPAA compliance, EHR integration, and patient experience at the core.',
  },
  benefits: {
    label: 'Why Codazz for Telemedicine',
    title: 'Built for Healthcare',
    titleDim: 'Without Compromise.',
    items: [
      { icon: '\u{1F3E5}', title: 'Healthcare Domain Expertise', desc: 'Our team understands clinical workflows, medical terminology and the unique UX needs of patients and providers. We speak healthcare fluently.' },
      { icon: '\u{1F512}', title: 'Compliance-First Engineering', desc: 'HIPAA compliance is not an afterthought. Every line of code, every API call and every data store is designed with patient privacy as the foundation.' },
      { icon: '\u{1F517}', title: 'Integration Specialists', desc: 'We have deep experience integrating with Epic, Cerner, Allscripts and other EHR systems through HL7 FHIR, ensuring seamless clinical data exchange.' },
      { icon: '\u{1F4F9}', title: 'Reliable Video Infrastructure', desc: 'Crystal-clear video consultations with adaptive quality, reconnection handling, and fallback options for any network condition.' },
      { icon: '\u{1F4F1}', title: 'Patient-Centered Design', desc: 'Accessible interfaces designed for patients of all ages and technical abilities, with intuitive navigation and clear clinical information.' },
      { icon: '\u{2601}\u{FE0F}', title: 'HIPAA Cloud Infrastructure', desc: 'Healthcare-grade cloud deployments with encryption at rest and in transit, audit logging, and disaster recovery.' },
    ],
  },
  clientLogos: [
    'Teladoc', 'Amwell', 'MDLive', 'Doctor on Demand', 'Hims & Hers', 'Cerebral',
    'Ro', 'Nurx', 'PlushCare', 'Sesame Care', 'K Health', 'Talkiatry',
  ],
  bigStats: [
    { value: '500K+', label: 'Consultations', desc: 'Across platforms' },
    { value: '95%', label: 'Patient Satisfaction', desc: 'Post-visit surveys' },
    { value: '38', label: 'States Covered', desc: 'Multi-state compliance' },
    { value: '99.9%', label: 'Uptime', desc: 'Healthcare reliability' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F4F9}', title: 'HIPAA Video', desc: 'Encrypted video consultations' },
      { icon: '\u{1F517}', title: 'EHR Integration', desc: 'Epic, Cerner, Allscripts' },
      { icon: '\u{1F48A}', title: 'E-Prescribing', desc: 'Drug checks and pharmacy' },
      { icon: '\u{1F4CA}', title: 'Remote Monitoring', desc: 'IoT vitals tracking' },
      { icon: '\u{1F512}', title: 'Encryption', desc: 'End-to-end data protection' },
    ],
    row2: [
      { icon: '\u{1F4CB}', title: 'Digital Intake', desc: 'Smart patient forms' },
      { icon: '\u{1F5D3}\u{FE0F}', title: 'Smart Scheduling', desc: 'Provider availability engine' },
      { icon: '\u{1F4B3}', title: 'Insurance & Billing', desc: 'Claims and copay processing' },
      { icon: '\u{1F916}', title: 'AI Triage', desc: 'Symptom-based routing' },
      { icon: '\u{1F4AC}', title: 'Secure Messaging', desc: 'HIPAA-compliant chat' },
    ],
  },
  techStack: [
    { category: 'Video & Comms', techs: ['WebRTC', 'Twilio', 'Vonage', 'Daily.co'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'HL7 FHIR', 'GraphQL'] },
    { category: 'Security', techs: ['AES-256', 'OAuth2', 'Vault', 'WAF'] },
    { category: 'Cloud', techs: ['AWS HIPAA', 'Azure Health', 'Kubernetes', 'Terraform'] },
    { category: 'Mobile', techs: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
    { category: 'Integrations', techs: ['Epic', 'Cerner', 'Allscripts', 'Surescripts'] },
  ],
  faqs: [
    { q: 'Can you build a HIPAA-compliant telehealth platform?', a: 'Yes. HIPAA compliance is built into every layer of our telehealth platforms: encrypted video calls, secure messaging, audit logging, access controls, BAA management, and regular penetration testing. We have built platforms serving patients across 38 states with zero compliance incidents.' },
    { q: 'Do you integrate with EHR systems like Epic and Cerner?', a: 'Absolutely. We have deep experience with HL7 FHIR APIs for Epic, Cerner, Allscripts, and athenahealth. Our integration layer handles patient records, clinical notes, lab results, prescriptions, and scheduling data with full data integrity and security.' },
    { q: 'How do you ensure video quality on poor networks?', a: 'Our video infrastructure uses adaptive bitrate streaming, automatic quality adjustment, reconnection handling, and fallback to audio-only when necessary. We test across various network conditions to ensure reliable consultations even on 3G connections.' },
    { q: 'Can you build e-prescribing functionality?', a: 'Yes. We integrate with Surescripts and pharmacy networks for electronic prescribing with drug interaction checks, formulary verification, prescription tracking, and automated refill requests. All compliant with DEA and state-level prescribing regulations.' },
    { q: 'Do you support remote patient monitoring?', a: 'Yes. We build RPM platforms that integrate with IoT devices and wearables for continuous vitals monitoring, threshold-based alerts, care plan adherence tracking, and automated escalation workflows to clinical teams when readings fall outside parameters.' },
    { q: 'Can you handle multi-state telehealth compliance?', a: 'Yes. We implement state-by-state telehealth regulations including provider licensing verification, prescribing restrictions, informed consent requirements, and billing rules. Our compliance engine automatically enforces the correct rules based on patient and provider locations.' },
  ],
  faqDescription: 'Common questions about our telemedicine platform development services, HIPAA compliance, and EHR integration capabilities.',
  relatedBlogs: [
    { title: 'Building HIPAA-Compliant Telehealth Platforms', desc: 'Security architecture for healthcare applications.', href: '/blog' },
    { title: 'EHR Integration: Epic, Cerner & HL7 FHIR', desc: 'Technical guide to healthcare system interoperability.', href: '/blog' },
    { title: 'Remote Patient Monitoring: IoT in Healthcare', desc: 'How connected devices are transforming patient care.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'HIPAA-compliant patient and provider apps with video calls, messaging and health tracking.', href: '/services/mobile-app-development' },
    { name: 'Web Development', desc: 'Provider dashboards, patient portals and admin panels with EHR integration.', href: '/services/web-development' },
    { name: 'AI & Machine Learning', desc: 'Symptom checkers, triage algorithms, clinical decision support and predictive health analytics.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'HIPAA-compliant cloud infrastructure with encryption, audit logging and disaster recovery.', href: '/services/cloud-devops' },
  ],
  industries: [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Fitness & Wellness', href: '/industries/fitness-wellness' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Dating & Social', href: '/industries/dating-social' },
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'On-Demand', href: '/industries/on-demand' },
    { name: 'Streaming', href: '/industries/streaming-entertainment' },
  ],
};

export default function TelemedicinePage() {
  return <ServicePageTemplate data={pageData} />;
}
