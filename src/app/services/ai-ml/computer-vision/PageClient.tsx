'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'AI & Machine Learning', href: '/services/ai-ml' },
    { label: 'Computer Vision' },
  ],
  hero: {
    badge: 'AI & MACHINE LEARNING',
    title: 'Computer Vision',
    titleAccent: 'Systems',
    description: 'We build custom computer vision solutions — from real-time object detection and quality inspection to video analytics and document intelligence — deployed to edge devices or cloud at production scale.',
    service: 'Computer Vision',
    stats: [
      { value: '40+', label: 'CV Systems Deployed' },
      { value: '99.2%', label: 'Detection Accuracy' },
      { value: 'Real-Time', label: 'Processing Capability' },
      { value: 'Edge & Cloud', label: 'Deployment Options' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F3AF}', title: 'Object Detection & Classification', desc: 'Detect, locate, and classify objects in images and video in real time. We build custom models using YOLO, Detectron2, and vision transformers trained on your specific domain and data.' },
      { icon: '\u{1F5BC}\u{FE0F}', title: 'Image Segmentation', desc: 'Pixel-level understanding of scenes with semantic and instance segmentation. Ideal for medical imaging, autonomous systems, satellite imagery analysis, and industrial quality control.' },
      { icon: '\u{1F3AC}', title: 'Video Analytics', desc: 'Extract intelligence from video streams — activity recognition, object tracking, crowd counting, anomaly detection, and behavioral analysis for security, retail, and industrial applications.' },
      { icon: '\u{1F4DD}', title: 'OCR & Document Intelligence', desc: 'Extract and structure text from scanned documents, handwriting, receipts, and ID cards using deep learning OCR. Goes beyond text extraction to understand document layout and relationships.' },
      { icon: '\u{1F50D}', title: 'Quality Inspection Systems', desc: 'Automated visual inspection for manufacturing — detect surface defects, dimensional errors, assembly mistakes, and contamination with superhuman consistency at production line speeds.' },
      { icon: '\u{1F464}', title: 'Facial Recognition & Biometrics', desc: 'Compliant face detection, recognition, and liveness detection for access control, identity verification, and attendance systems. Built with privacy-by-design and regulatory compliance in mind.' },
    ],
  },
  portfolioCategory: 'ai-ml',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Data Assessment', desc: 'We evaluate your existing image/video data, identify annotation requirements, assess data quality, and determine if additional collection or augmentation is needed to train a reliable model.' },
      { num: '02', title: 'Model Selection', desc: 'We select the optimal architecture — YOLO variants for real-time detection, ViT for high-accuracy classification, SAM for segmentation — and choose between training from scratch or fine-tuning foundation models.' },
      { num: '03', title: 'Training & Validation', desc: 'Rigorous model training with cross-validation, precision/recall optimization, and domain-specific augmentation. We benchmark against your accuracy and latency requirements before signing off.' },
      { num: '04', title: 'Edge / Cloud Deploy', desc: 'Optimized deployment to your target environment — NVIDIA Jetson and Raspberry Pi for edge, or GPU cloud for scale. Model quantization and TensorRT optimization for maximum throughput.' },
    ],
  },
  faqs: [
    { q: 'How much training data do I need for a computer vision model?', a: 'It varies by task complexity. Simple binary classifiers can work with 500\u20131,000 labeled images per class. Object detection typically needs 1,000\u20135,000 annotated images. Complex segmentation may require 10,000+. We always start with a data audit and often use transfer learning from foundation models to dramatically reduce data requirements — sometimes 100\u2013200 examples are enough with the right approach.' },
    { q: 'Should I use real-time or batch processing for my use case?', a: 'Real-time processing (under 100ms latency) is essential for live video surveillance, autonomous systems, and production line inspection. Batch processing is more cost-effective for document analysis, post-event video review, and large-scale image datasets. We match the architecture to your latency and throughput requirements — and design systems that can scale from batch to real-time as needs evolve.' },
    { q: 'Edge vs cloud inference — which is better for my situation?', a: 'Edge inference (on-device) wins when you need ultra-low latency, have bandwidth constraints, or handle sensitive data that can\'t leave the facility. Cloud inference is better for high-complexity models, variable workloads, or when edge hardware costs are prohibitive. Many production systems use both — edge for fast initial detection, cloud for detailed analysis of flagged events.' },
    { q: 'Should I use a custom model or adapt a pre-trained foundation model?', a: 'In most cases, we fine-tune pre-trained models (CLIP, SAM, YOLO) on your data — this gives better accuracy with far less data and training time than building from scratch. Custom architectures from scratch are only justified for highly specialized domains where no suitable foundation model exists. We always benchmark both approaches before committing.' },
    { q: 'How do you handle poor image quality — low light, blur, or noise?', a: 'We apply preprocessing pipelines specifically designed for your imaging conditions: adaptive histogram equalization for low light, deblurring filters, and noise reduction. During training, we augment data with simulated degradation so the model learns robustness. For critical applications, we also recommend hardware improvements (lighting, optics) alongside software solutions.' },
  ],
  faqDescription: 'Everything you need to know about our computer vision development services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s discuss your computer vision project and build something great together.',
};

export default function ComputerVisionPage() {
  return <SubServicePageTemplate data={pageData} />;
}
