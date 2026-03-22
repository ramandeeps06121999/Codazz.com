'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'AI & Machine Learning', href: '/services/ai-ml' },
    { label: 'AI Automation' },
  ],
  hero: {
    badge: 'AI & MACHINE LEARNING',
    title: 'AI Automation That',
    titleAccent: 'Works',
    description: 'We design and deploy intelligent automation workflows that eliminate repetitive work, reduce errors, and free your team to focus on what matters — saving an average of 70% in manual processing time.',
    service: 'AI Automation',
    stats: [
      { value: '80+', label: 'Automation Workflows Built' },
      { value: '70%', label: 'Avg Time Saved' },
      { value: '500K+', label: 'Tasks Automated Monthly' },
      { value: '6wk', label: 'Avg Deployment Timeline' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{2699}\u{FE0F}', title: 'Workflow Automation with AI', desc: 'End-to-end automation of complex multi-step business workflows using AI decision-making. We map your processes and design intelligent pipelines that adapt to exceptions and edge cases.' },
      { icon: '\u{1F4C4}', title: 'Document Processing & Extraction', desc: 'Automate extraction of structured data from invoices, contracts, forms, and reports using LLMs and OCR. Reduce manual data entry by up to 95% while improving accuracy.' },
      { icon: '\u{1F4E7}', title: 'Email & Communication Automation', desc: 'AI-powered email triage, drafting, and routing. Auto-classify incoming messages, generate context-aware responses, and escalate priority issues without human intervention.' },
      { icon: '\u{1F504}', title: 'Data Pipeline Automation', desc: 'Intelligent ETL pipelines that clean, transform, and enrich data using AI models. Handle unstructured inputs, detect anomalies, and maintain data quality automatically at scale.' },
      { icon: '\u{1F9E0}', title: 'Decision Automation', desc: 'Replace manual approval workflows with AI-driven decision engines. Automate credit scoring, content moderation, lead qualification, and compliance checks with explainable AI.' },
      { icon: '\u{1F916}', title: 'RPA + AI Hybrid Workflows', desc: 'Combine traditional Robotic Process Automation with AI intelligence to handle both structured and unstructured tasks. We integrate with UiPath, Automation Anywhere, and custom RPA stacks.' },
    ],
  },
  portfolioCategory: 'ai-ml',
  process: {
    label: 'Our Process',
    title: 'Our AI Automation Process',
    steps: [
      { num: '01', title: 'Process Audit', desc: 'We map your existing workflows, identify bottleneck tasks, quantify time costs, and rank automation opportunities by ROI potential and implementation feasibility.' },
      { num: '02', title: 'Automation Design', desc: 'We design the automation architecture — defining triggers, AI decision points, data flows, exception handling, and human-in-the-loop checkpoints for edge cases.' },
      { num: '03', title: 'AI Integration', desc: 'We build and integrate the automation system with your existing tools (CRM, ERP, Slack, email), train AI components on your data, and configure monitoring dashboards.' },
      { num: '04', title: 'Monitor & Optimize', desc: 'Post-launch, we monitor accuracy and throughput, retrain models as data drifts, and continuously add new automation use cases to grow your ROI over time.' },
    ],
  },
  faqs: [
    { q: 'Which business processes are best suited for AI automation?', a: 'The best candidates are high-volume, repetitive tasks with clear rules or patterns — like data entry, invoice processing, email triage, report generation, and lead qualification. Processes that currently consume significant manual hours but don\'t require nuanced human judgment are ideal starting points. We conduct a process audit to rank your opportunities by ROI.' },
    { q: 'How is AI automation different from traditional RPA?', a: 'Traditional RPA follows rigid rules and breaks when interfaces or formats change. AI automation adds intelligence — it can understand unstructured data (PDFs, emails, images), make contextual decisions, handle variability, and improve over time through learning. We often combine both: RPA handles structured UI interactions while AI handles the cognitive tasks.' },
    { q: 'How do you handle exceptions and edge cases in automated workflows?', a: 'We design explicit exception handling into every workflow — with confidence thresholds, fallback logic, and human-in-the-loop escalation for cases where the AI is uncertain. You get a dashboard to review flagged exceptions, and we use those cases to continuously improve model accuracy over time.' },
    { q: 'What ROI can we realistically expect from AI automation?', a: 'Most clients see 50\u201380% reduction in manual processing time for automated tasks, with payback periods of 3\u20139 months. One document processing client reduced invoice processing costs from $12/invoice to $0.80. ROI depends on volume, current labor cost, and process complexity — we model this during the audit phase before you commit.' },
    { q: 'How long does it take to deploy a first automation?', a: 'A focused, well-scoped automation can be live in 4\u20136 weeks: 1\u20132 weeks for process analysis and design, 2\u20133 weeks for development and integration, and 1 week for testing and go-live. More complex multi-system automations typically take 8\u201312 weeks. We prioritize getting a first win into production quickly, then expand from there.' },
  ],
  faqDescription: 'Everything you need to know about our AI automation services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s discuss your automation project and build something great together.',
};

export default function AIAutomationPage() {
  return <SubServicePageTemplate data={pageData} />;
}
