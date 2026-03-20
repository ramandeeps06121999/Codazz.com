'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function AiMlEngineersPageClient() {
  return (
    <HireDeveloperPage
      technology="AI/ML"
      breadcrumbLabel="AI/ML Engineers"
      tagline="AI & Machine Learning"
      description="Pre-vetted AI/ML engineers ready to join your team in 48 hours. Build intelligent systems with LLM integration, computer vision, NLP, predictive analytics, and production-grade MLOps pipelines."
      stats={[
        { value: '30+', label: 'AI/ML Engineers' },
        { value: '8+ Yrs', label: 'Avg Experience' },
        { value: '75+', label: 'AI Projects Shipped' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted AI/ML Experts', desc: 'Every AI/ML engineer passes our 5-stage vetting: ML system design challenge, model implementation, live pair programming with real datasets, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our AI/ML engineers work in your timezone. US, European, Middle Eastern, or APAC business hours — your engineer is online when you need them.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'AI projects involve proprietary data and algorithms. We sign enforceable NDAs before any discussion. Your data, models, and IP are fully protected.' },
        { icon: '\u26A1', title: 'Full-Stack AI', desc: 'Our engineers handle everything from data engineering and model training to API deployment and production monitoring. No gaps in your AI pipeline.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Senior AI/ML talent is expensive to hire in-house. Get the same caliber engineers at a fraction of the cost with no recruitment overhead.' },
        { icon: '\u{1F504}', title: 'LLM & GenAI Ready', desc: 'Our engineers are current with GPT-4, Claude, Gemini, LangChain, RAG architectures, fine-tuning, and prompt engineering — the skills you need right now.' },
      ]}
      profiles={[
        { id: 'A1', role: 'Senior AI/ML Engineer', experience: '9 years experience', skills: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'AWS SageMaker', 'MLflow'], projects: 'Built recommendation engines serving 5M+ users', availability: 'Available Now' },
        { id: 'A2', role: 'LLM & GenAI Specialist', experience: '7 years experience', skills: ['GPT-4/Claude APIs', 'LangChain', 'RAG', 'Fine-tuning', 'Vector DBs', 'Prompt Engineering'], projects: '15+ LLM-powered production applications', availability: 'Available Now' },
        { id: 'A3', role: 'Computer Vision Engineer', experience: '8 years experience', skills: ['PyTorch', 'OpenCV', 'YOLO', 'Detectron2', 'TensorRT', 'Edge AI'], projects: 'Deployed CV models on 100K+ devices', availability: 'Available in 1 week' },
        { id: 'A4', role: 'MLOps & Data Engineer', experience: '6 years experience', skills: ['Kubeflow', 'MLflow', 'Airflow', 'Docker', 'Kubernetes', 'Feature Stores'], projects: 'Built ML platforms processing 1B+ predictions/day', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'ML Frameworks', chips: ['TensorFlow', 'PyTorch', 'scikit-learn', 'JAX', 'Hugging Face', 'ONNX'] },
        { label: 'LLM & GenAI', chips: ['OpenAI GPT-4', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'RAG', 'Fine-tuning'] },
        { label: 'Computer Vision', chips: ['OpenCV', 'YOLO', 'Detectron2', 'MediaPipe', 'TensorRT', 'CoreML'] },
        { label: 'NLP', chips: ['spaCy', 'NLTK', 'Transformers', 'Sentence-BERT', 'Named Entity Recognition', 'Sentiment Analysis'] },
        { label: 'MLOps & Infra', chips: ['MLflow', 'Kubeflow', 'AWS SageMaker', 'Vertex AI', 'DVC', 'Feature Stores'] },
        { label: 'Data & Vector DBs', chips: ['Pinecone', 'Weaviate', 'ChromaDB', 'Milvus', 'PostgreSQL pgvector', 'Redis Vector'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire an AI/ML engineer from Codazz?', a: 'You can interview pre-matched AI/ML engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours.' },
        { q: 'What AI/ML specializations do your engineers cover?', a: 'Our AI/ML engineers specialize in LLM integration (GPT, Claude, Gemini), computer vision, NLP, predictive analytics, recommendation systems, and MLOps. We cover the full AI/ML stack from research to production.' },
        { q: 'Can your AI/ML engineers integrate with existing systems?', a: 'Yes. Our engineers regularly integrate AI capabilities into existing applications — adding LLM-powered features, building recommendation engines, or implementing computer vision pipelines within your current architecture.' },
        { q: 'What is the pricing for hiring an AI/ML engineer?', a: 'AI/ML engineers start at $35/hr for mid-level and $45-59/hr for senior and lead engineers. Transparent pricing with no hidden fees or long-term lock-in.' },
        { q: 'Do your engineers handle MLOps and model deployment?', a: 'Yes. Our AI/ML engineers handle the full lifecycle: data preparation, model training, evaluation, deployment, monitoring, and continuous improvement in production environments.' },
        { q: 'Can I start with one engineer and scale up later?', a: 'Absolutely. Many clients start with a single AI/ML engineer to build a proof of concept, then scale to a full team for production deployment. Our models are fully flexible.' },
      ]}
      startingRate="$35"
    />
  );
}
