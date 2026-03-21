'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function MLEngineersPageClient() {
  return (
    <HireDeveloperPage
      technology="ML Engineer"
      breadcrumbLabel="ML Engineers"
      tagline="Python, PyTorch & TensorFlow"
      description="Pre-vetted senior ML engineers ready to join your team in 48 hours. Build and deploy production-grade machine learning models, MLOps pipelines, LLM-powered applications, computer vision systems, and NLP solutions with engineers who have shipped models running at scale in production."
      stats={[
        { value: '35+', label: 'ML Engineers' },
        { value: '6+ Yrs', label: 'Avg Experience' },
        { value: '200+', label: 'Models Deployed' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '✅', title: 'Vetted ML Experts', desc: 'Every ML engineer passes our 5-stage vetting: ML theory assessment, model-building challenge, MLOps pipeline review, live coding session, and reference checks. We verify real production experience — not just notebook tutorials. Only the top 3% qualify.' },
        { icon: '🤖', title: 'LLM & Generative AI Specialists', desc: 'Our ML engineers have hands-on experience fine-tuning LLMs using LoRA, QLoRA, and RLHF. They build RAG pipelines, semantic search, AI agents, and custom Hugging Face Transformers deployments that power real product features.' },
        { icon: '🔁', title: 'MLOps & Production Pipelines', desc: 'Our engineers build robust MLOps pipelines using MLflow, Kubeflow, DVC, and Airflow. They automate data versioning, model training, evaluation, A/B testing, and continuous deployment — turning experiments into reliable production systems.' },
        { icon: '👁️', title: 'Computer Vision & NLP', desc: 'Our ML engineers deliver computer vision systems (YOLO, Detectron2, OpenCV) for object detection, segmentation, and OCR, as well as NLP pipelines for classification, NER, sentiment analysis, and multilingual semantic search.' },
        { icon: '⚡', title: 'Model Deployment & Optimization', desc: 'Our engineers optimize models for production using ONNX, TensorRT, and quantization techniques. They deploy via TorchServe, BentoML, AWS SageMaker, and Vertex AI, achieving low-latency inference at scale.' },
        { icon: '💸', title: '40-60% Cost Savings', desc: 'Get senior ML engineers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required. Engage for a specific ML project or embed long-term in your AI engineering team.' },
      ]}
      profiles={[
        { id: 'ML1', role: 'Senior ML Engineer', experience: '6 years experience', skills: ['Python', 'PyTorch', 'scikit-learn', 'MLflow', 'AWS SageMaker', 'Docker'], projects: 'Shipped 15+ models to production serving 1M+ daily requests', availability: 'Available Now' },
        { id: 'ML2', role: 'LLM & GenAI Engineer', experience: '5 years experience', skills: ['Python', 'LangChain', 'Hugging Face', 'LoRA', 'RAG', 'OpenAI API'], projects: 'Fine-tuned and deployed LLaMA and Mistral for enterprise clients', availability: 'Available Now' },
        { id: 'ML3', role: 'Computer Vision Engineer', experience: '7 years experience', skills: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'TensorRT', 'ONNX'], projects: 'Built real-time defect detection system for manufacturing (99.2% accuracy)', availability: 'Available in 1 week' },
        { id: 'ML4', role: 'MLOps Engineer', experience: '6 years experience', skills: ['Kubeflow', 'MLflow', 'Airflow', 'DVC', 'Kubernetes', 'Terraform'], projects: 'Built end-to-end MLOps platform reducing model deployment time by 80%', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Languages & Frameworks', chips: ['Python', 'PyTorch', 'TensorFlow', 'Keras', 'JAX', 'scikit-learn'] },
        { label: 'LLMs & GenAI', chips: ['Hugging Face', 'LangChain', 'LlamaIndex', 'OpenAI API', 'LoRA / QLoRA', 'RAG Pipelines'] },
        { label: 'MLOps & Pipelines', chips: ['MLflow', 'Kubeflow', 'DVC', 'Weights & Biases', 'Airflow', 'Prefect'] },
        { label: 'Model Deployment', chips: ['ONNX', 'TensorRT', 'TorchServe', 'BentoML', 'AWS SageMaker', 'Vertex AI'] },
        { label: 'Computer Vision', chips: ['YOLO', 'Detectron2', 'OpenCV', 'Torchvision', 'Albumentations', 'Roboflow'] },
        { label: 'Data & Infrastructure', chips: ['Pandas', 'Spark', 'Dask', 'Ray', 'PostgreSQL', 'Pinecone'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire an ML engineer from Codazz?', a: 'You can interview pre-matched ML engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours. Our engineers are ready to start building models, MLOps pipelines, and AI-powered features immediately.' },
        { q: 'What ML frameworks and tools do your engineers specialize in?', a: 'Our ML engineers are proficient in Python, PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face Transformers, LangChain, and JAX. For MLOps they use MLflow, Kubeflow, DVC, Weights & Biases, and Airflow. For deployment they work with ONNX, TensorRT, TorchServe, and BentoML.' },
        { q: 'Can your ML engineers fine-tune and deploy large language models (LLMs)?', a: 'Yes. Our ML engineers have hands-on experience fine-tuning LLMs including GPT-4, LLaMA, Mistral, and Falcon using LoRA, QLoRA, and RLHF. They build RAG pipelines, custom embeddings, and production-ready LLM APIs that integrate seamlessly into your application.' },
        { q: 'Do your ML engineers have experience with computer vision and NLP projects?', a: 'Yes. Our ML engineers have shipped computer vision systems for object detection, image segmentation, OCR, and video analytics using YOLO, Detectron2, and OpenCV. For NLP they build text classification, sentiment analysis, named entity recognition, and semantic search systems.' },
        { q: 'What is the pricing for hiring an ML engineer from Codazz?', a: 'Our ML engineers start at $40/hr for mid-level engineers, $50/hr for senior engineers, and $60/hr for staff-level ML engineers and researchers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Do you sign NDAs before starting?', a: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your models, datasets, training pipelines, and business logic are fully protected from the first conversation.' },
      ]}
      startingRate="$40"
    />
  );
}
