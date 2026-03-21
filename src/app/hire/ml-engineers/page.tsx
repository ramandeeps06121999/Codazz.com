import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire ML Engineers | Machine Learning & Deep Learning Experts | Codazz',
  description: 'Hire pre-vetted ML engineers from Codazz. Python, PyTorch & TensorFlow experts for MLOps pipelines, LLM fine-tuning, computer vision, NLP & model deployment. Available in 48 hours, starting at $40/hr.',
  openGraph: {
    title: 'Hire ML Engineers | Machine Learning & Deep Learning Experts | Codazz',
    description: 'Hire pre-vetted ML engineers from Codazz. Python, PyTorch & TensorFlow experts for MLOps, LLM fine-tuning, computer vision & NLP available in 48 hours.',
    url: 'https://codazz.com/hire/ml-engineers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire ML Engineers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/ml-engineers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire an ML engineer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched ML engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours. Our engineers are ready to start building models, MLOps pipelines, and AI-powered features immediately.' } },
    { '@type': 'Question', name: 'What ML frameworks and tools do your engineers specialize in?', acceptedAnswer: { '@type': 'Answer', text: 'Our ML engineers are proficient in Python, PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face Transformers, LangChain, and JAX. For MLOps, they use MLflow, Kubeflow, DVC, Weights & Biases, and Airflow. For deployment they work with ONNX, TensorRT, TorchServe, and BentoML.' } },
    { '@type': 'Question', name: 'Can your ML engineers fine-tune and deploy large language models (LLMs)?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our ML engineers have hands-on experience fine-tuning LLMs including GPT-4, LLaMA, Mistral, and Falcon using techniques like LoRA, QLoRA, and RLHF. They build RAG pipelines, custom embeddings, and production-ready LLM APIs that integrate seamlessly into your application.' } },
    { '@type': 'Question', name: 'Do your ML engineers have experience with computer vision and NLP projects?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our ML engineers have shipped computer vision systems for object detection, image segmentation, OCR, and video analytics using YOLO, Detectron2, and OpenCV. For NLP they build text classification, sentiment analysis, named entity recognition, and semantic search systems.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring an ML engineer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'Our ML engineers start at $40/hr for mid-level engineers, $50/hr for senior engineers, and $60/hr for staff-level ML engineers and researchers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire ML Engineers',
  description: 'Hire pre-vetted senior ML engineers from Codazz. Python, PyTorch & TensorFlow experts for MLOps pipelines, LLM fine-tuning, computer vision, NLP, and production model deployment.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/ml-engineers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'ML Engineers', item: 'https://codazz.com/hire/ml-engineers' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
