'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'AI & Machine Learning', href: '/services/ai-ml' },
    { label: 'AI Chatbots' },
  ],
  hero: {
    badge: 'AI & MACHINE LEARNING',
    title: 'AI Chatbots That',
    titleAccent: 'Actually Resolve',
    description: 'We build LLM-powered chatbots that understand your business, answer from your knowledge base, and resolve 85% of queries without human intervention — across web, WhatsApp, Slack, and voice.',
    service: 'AI Chatbots',
    stats: [
      { value: '70+', label: 'Chatbots Deployed' },
      { value: '85%', label: 'Query Resolution Rate' },
      { value: '24/7', label: 'Availability' },
      { value: '40%', label: 'Support Cost Reduction' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F916}', title: 'LLM-Powered Conversational AI', desc: 'Build intelligent chatbots powered by GPT-4, Claude, or Gemini that understand nuance, maintain context across conversations, and deliver human-quality responses to complex queries.' },
      { icon: '\u{1F4D6}', title: 'Knowledge Base Integration', desc: 'Connect your chatbot to your documentation, FAQs, product catalog, and internal knowledge using RAG. The bot answers accurately from your data, with citations, not generic LLM responses.' },
      { icon: '\u{1F4F1}', title: 'Multi-Channel Deployment', desc: 'Deploy a single chatbot across web widget, WhatsApp Business, Slack, Microsoft Teams, and mobile apps. Unified conversation management with channel-specific UX optimization.' },
      { icon: '\u{1F91D}', title: 'Handoff to Human Agents', desc: 'Seamless escalation to live agents when the bot reaches its limits or when customers request it. Integrates with Intercom, Zendesk, HubSpot, and custom support systems with full context passed over.' },
      { icon: '\u{1F4CA}', title: 'Chatbot Analytics & Improvement', desc: 'Track resolution rates, conversation drop-offs, unhandled queries, and CSAT scores. We implement feedback loops that continuously improve bot accuracy from real user interactions.' },
      { icon: '\u{1F399}\u{FE0F}', title: 'Voice Bot Integration', desc: 'Extend your chatbot to voice channels — phone support, smart speakers, and IVR replacement. We integrate with Twilio, ElevenLabs, and Google Dialogflow for natural voice experiences.' },
    ],
  },
  portfolioCategory: 'ai-ml',
  process: {
    label: 'Our Process',
    title: 'Our AI Chatbot Development Process',
    steps: [
      { num: '01', title: 'Conversation Design', desc: 'We map your key user journeys, define intents, design conversation flows, and create fallback strategies. Good conversation design is the foundation of a bot that users actually enjoy talking to.' },
      { num: '02', title: 'Knowledge Base Setup', desc: 'We ingest and structure your documentation, product data, and FAQs into a vector database. Content is chunked, embedded, and indexed for fast semantic retrieval during live conversations.' },
      { num: '03', title: 'Integration & Testing', desc: 'We integrate the bot with your backend systems, CRM, and ticketing tools. Extensive testing covers edge cases, adversarial inputs, tone consistency, and accuracy against your knowledge base.' },
      { num: '04', title: 'Launch & Tune', desc: 'After go-live, we monitor conversation logs, analyze failure modes, retune prompts, and expand the knowledge base weekly. Chatbot performance compounds over the first 90 days of operation.' },
    ],
  },
  faqs: [
    { q: 'Should I use a GPT-powered chatbot or a rule-based one?', a: 'For most modern use cases, LLM-powered chatbots significantly outperform rule-based systems. They handle natural language variation, multi-turn context, and ambiguous queries that rule-based bots fail on. Rule-based bots are still appropriate for very simple, high-stakes flows where exact behavior must be controlled (e.g., payment confirmations). We often use a hybrid: LLM for understanding intent, rules for critical action steps.' },
    { q: 'How do I train the chatbot on our specific documentation?', a: 'We use RAG (Retrieval Augmented Generation) — your documentation is split into chunks, converted into vector embeddings, and stored in a vector database (Pinecone, Weaviate, or pgvector). When a user asks a question, the most relevant chunks are retrieved and given to the LLM as context, so answers are grounded in your actual content. No fine-tuning required — updates to your docs are reflected in minutes.' },
    { q: 'What happens when the bot doesn\'t know the answer?', a: 'We configure explicit handling for low-confidence responses: the bot acknowledges uncertainty rather than hallucinating, offers to escalate to a human agent, and logs the query for knowledge base improvement. Over time, the most frequent unhandled queries get new content added, and bot coverage expands continuously. A good bot that knows its limits is far better than one that confidently gives wrong answers.' },
    { q: 'Which channels can the chatbot be deployed on?', a: 'Our chatbots are built with a channel-agnostic core and deployed to any combination of: web chat widget, WhatsApp Business API, Slack, Microsoft Teams, Facebook Messenger, SMS (via Twilio), iOS/Android apps, and voice (phone/IVR). A single conversation engine handles all channels with appropriate formatting and interaction patterns per channel.' },
    { q: 'How do we measure whether the chatbot is actually working?', a: 'We instrument every deployment with a metrics dashboard covering: containment rate (queries resolved without human), first-response time, user satisfaction (thumbs up/down + CSAT surveys), escalation rate, and topic distribution. We set baseline targets before launch and review metrics weekly for the first 3 months, making data-driven improvements to consistently push resolution rates higher.' },
  ],
  faqDescription: 'Everything you need to know about our AI chatbot development services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s discuss your chatbot project and build something great together.',
};

export default function AIChatbotsPage() {
  return <SubServicePageTemplate data={pageData} />;
}
