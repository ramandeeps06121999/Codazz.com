'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'AI Agent Development' },
  ],
  hero: {
    badge: 'AI Agent Development',
    title: 'Build Autonomous',
    titleAccent: 'AI Agents.',
    description:
      'Custom AI agents that reason, plan, execute multi-step tasks, and interact with real-world tools and APIs. From task automation to customer-facing copilots — agents that actually get work done.',
    service: 'AI Agent Development',
    stats: [
      { value: '50+', label: 'AI Agents Built' },
      { value: '10M+', label: 'Decisions/Day' },
      { value: '99.9%', label: 'Accuracy Rate' },
      { value: '40%', label: 'Avg Cost Reduction' },
    ],
  },
  awards: [
    'Clutch Top AI Company 2026',
    'LangChain Certified Partner',
    'OpenAI Function Calling Expert',
    'AWS ML Competency',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'CrewAI Partner',
    'Top AI Development - GoodFirms',
  ],
  whySection: {
    title: 'Why AI Agents Are the Next Frontier',
    cards: [
      { icon: '🤖', title: 'Beyond Chatbots', desc: 'AI agents do not just answer questions — they take action. They plan multi-step workflows, call APIs, query databases, send emails, and complete complex tasks autonomously.' },
      { icon: '🔄', title: 'Continuous Autonomous Operation', desc: 'Agents work 24/7 without fatigue. They monitor systems, process incoming data, make decisions, and trigger actions — scaling your team without headcount.' },
      { icon: '🧠', title: 'Reasoning & Planning', desc: 'Modern AI agents use chain-of-thought reasoning to break complex goals into sub-tasks, evaluate progress, recover from errors, and adapt their approach dynamically.' },
      { icon: '🔗', title: 'Tool-Augmented Intelligence', desc: 'Agents extend LLM capabilities by calling external tools — search engines, databases, APIs, calculators, and custom functions — grounding decisions in real-world data.' },
    ],
    whoNeedsTitle: 'Who Needs AI Agents?',
    whoNeedsItems: [
      { icon: '🏢', title: 'Enterprise Operations', desc: 'Automate complex workflows — data entry, report generation, invoice processing, email triage, and cross-system coordination.' },
      { icon: '💬', title: 'Customer Support', desc: 'AI agents that resolve issues end-to-end — checking accounts, processing refunds, updating records, and escalating complex cases.' },
      { icon: '📊', title: 'Data & Analytics', desc: 'Research agents that gather data from multiple sources, analyze trends, and produce reports without manual intervention.' },
      { icon: '💻', title: 'Software Engineering', desc: 'Coding agents that write, test, debug, and deploy code — integrated into your development workflow.' },
      { icon: '🛒', title: 'Sales & Marketing', desc: 'Lead qualification, personalized outreach, proposal generation, and CRM updates running autonomously.' },
      { icon: '⚖️', title: 'Legal & Compliance', desc: 'Contract review agents, regulatory monitoring, and compliance documentation that work around the clock.' },
    ],
    metricsTitle: 'AI Agent Impact',
    metrics: [
      { metric: '50+', label: 'Agents Built', desc: 'In production' },
      { metric: '10M+', label: 'Daily Decisions', desc: 'Autonomous actions' },
      { metric: '99.9%', label: 'Accuracy', desc: 'Task completion rate' },
      { metric: '40%', label: 'Cost Reduction', desc: 'Average savings' },
      { metric: '24/7', label: 'Operation', desc: 'Continuous autonomy' },
      { metric: '80%', label: 'Task Automation', desc: 'Repetitive work eliminated' },
    ],
    closingText:
      'AI agents represent the most significant shift in enterprise automation since the cloud. At Codazz, we build production-grade AI agents that go beyond demos — agents with robust error handling, human-in-the-loop checkpoints, audit logging, and graceful degradation. From single-purpose task agents to multi-agent orchestration systems, we engineer autonomous AI that your business can trust.',
  },
  subServices: [
    {
      title: 'Task Automation Agents',
      tag: 'Workflow',
      desc: 'Agents that autonomously execute complex multi-step business tasks — data entry, report generation, invoice processing, and email triage with self-verification.',
      chips: ['Multi-Step Planning', 'Tool Calling', 'Self-Verification', 'Error Recovery'],
      href: '/services/ai-agent-development/task-automation',
      icon: '⚙️',
    },
    {
      title: 'Customer Support Agents',
      tag: 'Customer Facing',
      desc: 'AI agents that resolve customer issues end-to-end — checking accounts, processing refunds, updating records, and escalating when needed.',
      chips: ['Account Lookup', 'Refund Processing', 'Ticket Resolution', 'HITL'],
      href: '/services/ai-agent-development/support-agents',
      icon: '💬',
    },
    {
      title: 'Research & Analysis Agents',
      tag: 'Intelligence',
      desc: 'Agents that gather data from multiple sources, analyze patterns, and produce structured reports — market research, competitive analysis, and due diligence.',
      chips: ['Web Search', 'Data Analysis', 'Report Generation', 'Multi-Source'],
      href: '/services/ai-agent-development/research-agents',
      icon: '🔍',
    },
    {
      title: 'Multi-Agent Systems',
      tag: 'Orchestration',
      desc: 'Teams of specialized AI agents that collaborate on complex tasks — with a supervisor agent coordinating planning, execution, and quality control.',
      chips: ['CrewAI', 'AutoGen', 'Agent Orchestration', 'Supervisor Pattern'],
      href: '/services/ai-agent-development/multi-agent',
      icon: '🤝',
    },
    {
      title: 'Coding Agents',
      tag: 'Developer Tools',
      desc: 'AI agents integrated into your development workflow — code generation, automated testing, PR reviews, bug triage, and documentation generation.',
      chips: ['Code Gen', 'Auto Testing', 'PR Review', 'Bug Triage', 'Docs'],
      href: '/services/ai-agent-development/coding-agents',
      icon: '💻',
    },
    {
      title: 'Sales & Marketing Agents',
      tag: 'Revenue',
      desc: 'Lead qualification, personalized outreach, proposal generation, and CRM updates running autonomously to accelerate your sales pipeline.',
      chips: ['Lead Scoring', 'Outreach', 'Proposals', 'CRM Sync', 'Follow-Up'],
      href: '/services/ai-agent-development/sales-agents',
      icon: '📈',
    },
  ],
  servicesHeading: {
    label: 'What We Build',
    title: 'AI Agent Services',
    titleDim: 'Autonomous intelligence.',
    description:
      'Custom AI agents for task automation, customer support, research, multi-agent orchestration, coding assistance, and sales acceleration — built for production reliability.',
  },
  benefits: {
    label: 'Why Codazz AI Agents',
    title: 'Agents That Work',
    titleDim: 'In the Real World.',
    items: [
      { icon: '🛡️', title: 'Human-in-the-Loop', desc: 'Configurable checkpoints where humans approve, modify, or override agent decisions for high-stakes actions. Trust with control.' },
      { icon: '📋', title: 'Full Audit Trail', desc: 'Every agent decision, tool call, and action is logged with timestamps, reasoning traces, and input/output records for compliance and debugging.' },
      { icon: '🔄', title: 'Graceful Error Recovery', desc: 'Agents handle failures intelligently — retrying with alternative strategies, escalating to humans, and never getting stuck in infinite loops.' },
      { icon: '📊', title: 'Performance Dashboards', desc: 'Real-time monitoring of agent success rates, latency, cost, and task completion metrics with automated alerting.' },
    ],
  },
  clientLogos: [
    'OpenAI', 'Anthropic', 'LangChain', 'CrewAI', 'AutoGen',
    'AWS', 'Google Cloud', 'Azure', 'Pinecone', 'Weaviate',
    'Stripe', 'Salesforce', 'HubSpot', 'Slack', 'MongoDB',
    'Redis',
  ],
  bigStats: [
    { value: '50+', label: 'Agents Built', desc: 'In production' },
    { value: '10M+', label: 'Daily Decisions', desc: 'Autonomous actions' },
    { value: '99.9%', label: 'Accuracy', desc: 'Task completion' },
    { value: '40%', label: 'Cost Savings', desc: 'Average reduction' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 40+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🧠', title: 'ReAct Pattern', desc: 'Reasoning + Acting for structured problem solving' },
      { icon: '🔗', title: 'Tool Calling', desc: 'Function calling for API and database interaction' },
      { icon: '📋', title: 'Planning Engine', desc: 'Multi-step task decomposition and execution planning' },
      { icon: '🤝', title: 'Multi-Agent', desc: 'CrewAI and AutoGen for agent team collaboration' },
      { icon: '💾', title: 'Agent Memory', desc: 'Short-term and long-term memory for context retention' },
      { icon: '🔄', title: 'Self-Reflection', desc: 'Agents evaluate their own outputs for quality' },
    ],
    row2: [
      { icon: '🛡️', title: 'HITL Checkpoints', desc: 'Human approval gates for high-stakes decisions' },
      { icon: '📊', title: 'Observability', desc: 'Full trace logging of agent reasoning and actions' },
      { icon: '⚡', title: 'Streaming Actions', desc: 'Real-time visibility into agent execution progress' },
      { icon: '🔐', title: 'Sandboxed Execution', desc: 'Isolated environments for safe tool execution' },
      { icon: '🎯', title: 'Evaluation Pipeline', desc: 'Automated testing of agent accuracy and reliability' },
      { icon: '🔀', title: 'Fallback Chains', desc: 'Graceful degradation when primary strategies fail' },
    ],
  },
  techStack: [
    { category: 'Agent Frameworks', techs: ['LangChain Agents', 'CrewAI', 'AutoGen', 'LangGraph', 'Semantic Kernel'] },
    { category: 'LLM Providers', techs: ['GPT-4o', 'Claude 4', 'Gemini Pro', 'Llama 3', 'Mistral', 'Cohere'] },
    { category: 'Tool Integration', techs: ['REST APIs', 'Database Queries', 'Web Search', 'Email', 'Slack', 'CRM'] },
    { category: 'Memory & State', techs: ['Redis', 'PostgreSQL', 'Pinecone', 'LangGraph State', 'Conversation Memory'] },
    { category: 'Monitoring', techs: ['LangSmith', 'Langfuse', 'Helicone', 'Datadog', 'Custom Dashboards'] },
    { category: 'Infrastructure', techs: ['AWS Bedrock', 'Azure OpenAI', 'Docker', 'Kubernetes', 'Modal'] },
  ],
  pricingGuide: {
    title: 'How Much Does AI Agent Development Cost?',
    description:
      'AI agent costs depend on task complexity, number of tool integrations, multi-agent orchestration needs, and safety requirements. Codazz offers fixed-price quotes after a free scoping session.',
    tiers: [
      {
        icon: '\uD83D\uDCB0',
        name: 'Single-Purpose Agent',
        price: 'Starting at $15,000',
        desc: 'Task-specific AI agent with 3-5 tool integrations, basic error recovery, audit logging, and human-in-the-loop checkpoints.',
        timeline: '\u23F1 4–6 weeks',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Multi-Agent System',
        price: 'Starting at $38,000',
        desc: 'Orchestrated agent teams with supervisor patterns, 10+ tool integrations, complex planning, memory systems, and performance dashboards.',
        timeline: '\u23F1 2–5 months',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Enterprise Agent Platform',
        price: 'Starting at $112,000',
        desc: 'Organization-wide agent infrastructure with custom tool frameworks, sandboxed execution, compliance controls, and 24/7 monitoring.',
        timeline: '\u23F1 4–8 months',
      },
    ],
  },

  selectionGuide: {
    title: 'How to Choose an AI Agent Development Company',
    description:
      'Choosing the wrong partner for AI agents means unreliable automation, security risks, and runaway costs. Here is what to evaluate.',
    criteria: [
      { icon: '\uD83D\uDCCB', title: 'Proven Portfolio', desc: 'Look for 50+ production agents with measurable task completion rates and documented reliability metrics.' },
      { icon: '\uD83D\uDC68\u200D\uD83D\uDCBB', title: 'Senior AI Engineers', desc: '8+ years avg experience. Deep expertise in LangChain, CrewAI, AutoGen, and LLM function calling.' },
      { icon: '\uD83D\uDCB2', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope covering agent design, tool integrations, testing, and deployment.' },
      { icon: '\uD83D\uDEE1\uFE0F', title: 'Post-Launch SLAs', desc: 'Agent monitoring, performance optimization, cost management, and incident response with defined SLAs.' },
      { icon: '\uD83D\uDD12', title: 'Safety & Compliance', desc: 'SOC 2, ISO 27001, sandboxed execution, human-in-the-loop gates, and comprehensive audit trails.' },
      { icon: '\uD83D\uDD50', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and real-time support during critical agent rollouts.' },
    ],
  },

  faqs: [
    { q: 'What is an AI agent and how is it different from a chatbot?', a: 'A chatbot responds to questions with text. An AI agent takes autonomous actions — it reasons about goals, plans multi-step workflows, calls APIs, queries databases, sends emails, and completes complex tasks with minimal human intervention. Think of agents as AI-powered employees, not just conversational interfaces.' },
    { q: 'Are AI agents reliable enough for production use?', a: 'With proper engineering, yes. Our agents include error recovery mechanisms, human-in-the-loop checkpoints for high-stakes decisions, comprehensive audit logging, and automated quality monitoring. We design for graceful degradation — agents never get stuck or make irreversible mistakes without human approval.' },
    { q: 'What can AI agents automate?', a: 'Virtually any knowledge work: customer support ticket resolution, data entry and processing, report generation, email triage, lead qualification, contract review, code generation, research and analysis, invoice processing, and complex multi-system workflows. If it involves reasoning over information and taking actions, an agent can likely handle it.' },
    { q: 'How do you handle AI agent safety?', a: 'Multiple layers: sandboxed tool execution, configurable human approval gates, action limits and budgets, comprehensive audit logging, automated quality checks, and graceful error recovery. For high-stakes actions (financial transactions, data deletion), agents always require human confirmation.' },
    { q: 'How much does AI agent development cost?', a: 'A single-purpose task agent starts at $15,000. Multi-agent systems with complex orchestration start at $38,000. Ongoing operational costs depend on LLM API usage and start at $375/month.' },
    { q: 'Can AI agents work with our existing tools and systems?', a: 'Yes. Agents integrate with any system that has an API — CRMs (Salesforce, HubSpot), databases, email providers, Slack, project management tools, ERPs, and custom internal systems. We build custom tool integrations for your specific workflow.' },
  ],
  faqDescription:
    'Get answers to common questions about AI agent development, autonomous AI, multi-agent systems, safety, and enterprise deployment.',
  relatedBlogs: [
    { title: 'Building Production AI Agents: Architecture Guide', desc: 'Patterns, tools, and best practices for reliable autonomous AI agents.', href: '/blog/production-ai-agents-guide' },
    { title: 'Multi-Agent Systems: When One Agent Is Not Enough', desc: 'How to orchestrate teams of AI agents for complex enterprise workflows.', href: '/blog/multi-agent-systems-guide' },
    { title: 'AI Agent Safety: Human-in-the-Loop Patterns', desc: 'Design patterns for building AI agents that humans can trust and control.', href: '/blog/ai-agent-safety-patterns' },
  ],
  relatedServices: [
    { name: 'Generative AI', desc: 'Custom AI solutions for content and automation.', href: '/services/generative-ai' },
    { name: 'RAG Development', desc: 'Knowledge-grounded AI for accurate responses.', href: '/services/rag-development' },
    { name: 'LLM Integration', desc: 'Production LLM integrations powering agents.', href: '/services/llm-integration' },
    { name: 'Data Engineering', desc: 'Data pipelines for agent knowledge bases.', href: '/services/data-engineering' },
  ],
  industries: [
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Legal', href: '/industries/legal' },
  ],

  statsH2: { line1: 'AI Agent Development Results', line2: 'That Speak for Themselves.' },
  advancedTechH2: { line1: 'AI Agent Technologies', line2: 'Built Into Every Agent.' },
  techStackH2: { line1: 'AI Agent Development Stack.', line2: '30+ Frameworks & Tools.' },
  blogsH2: { line1: 'AI Agent Development', line2: 'Insights & Guides.' },
};

export default function AIAgentDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
