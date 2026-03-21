'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const tocSections = [
  { id: 'ai-healthcare-landscape', label: 'Healthcare AI Landscape', emoji: '🏥' },
  { id: 'ai-diagnostics', label: 'AI Diagnostics', emoji: '🔬' },
  { id: 'drug-discovery', label: 'Drug Discovery', emoji: '💊' },
  { id: 'remote-monitoring', label: 'Remote Patient Monitoring', emoji: '📡' },
  { id: 'predictive-analytics', label: 'Predictive Analytics', emoji: '📊' },
  { id: 'clinical-decision', label: 'Clinical Decision Support', emoji: '🧠' },
  { id: 'hipaa-compliance', label: 'HIPAA-Compliant AI', emoji: '🔒' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ai-trends-2026', title: 'Top AI Development Trends 2026: What Every Business Needs to Know', category: 'AI & Technology', readTime: '21 min' },
  { slug: 'healthcare-app-trends-2026', title: 'Healthcare App Trends 2026: Telehealth, Wearables & AI', category: 'Healthcare', readTime: '18 min' },
  { slug: 'ai-agent-development-guide', title: 'How to Build AI Agents in 2026: Complete Development Guide', category: 'AI & Technology', readTime: '24 min' },
];

export default function AiInHealthcare2026Client() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="/blog_images/ai-in-healthcare-2026.jpg"
              alt="AI in healthcare transforming patient care and medical diagnostics"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Healthcare AI</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                22 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              AI in Healthcare 2026: How AI is Transforming Patient Care
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              From AI-powered diagnostics that catch cancer earlier to drug discovery pipelines that cut development time by years, artificial intelligence is fundamentally reshaping every corner of healthcare.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(180,253,131,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    Healthcare is undergoing its most significant transformation since the advent of electronic health records. AI healthcare software is no longer experimental &mdash; it&apos;s deployed in hospitals, clinics, and pharma labs worldwide, saving lives and cutting costs.
                  </p>
                  <p>
                    The global AI in healthcare market surpassed $45 billion in 2025 and is projected to reach $188 billion by 2030. From radiology departments using AI to detect tumors invisible to the human eye, to pharmaceutical companies using machine learning to discover drugs in months instead of years, the impact is measurable and accelerating.
                  </p>
                  <p style={{ fontSize: 18, color: '#b4fd83', fontWeight: 600, margin: '24px 0' }}>
                    This guide explores six critical areas where AI is transforming healthcare in 2026, with real-world examples, technology deep-dives, and practical guidance for healthcare organizations.
                  </p>
                </div>

                {/* AI Healthcare Landscape */}
                <h2 id="ai-healthcare-landscape" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The AI Healthcare Landscape in 2026</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>$188B</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Projected Market by 2030</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>950+</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>FDA-Approved AI Medical Devices</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>38%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Reduction in Diagnostic Errors</p>
                  </div>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p><strong style={{ color: '#ffffff' }}>Key drivers of AI adoption in healthcare:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Physician Burnout Crisis:</strong> Over 63% of physicians report burnout. AI automates documentation, triage, and administrative tasks, giving doctors back hours per day.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Data Explosion:</strong> A single hospital generates 50 petabytes of data annually. AI is the only way to extract actionable insights from this volume.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Aging Population:</strong> By 2030, 1 in 6 people worldwide will be over 60. AI-powered remote monitoring and predictive care are essential to scaling healthcare delivery.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Cost Pressure:</strong> US healthcare spending exceeds $4.5 trillion. AI can reduce administrative waste (estimated at $1 trillion annually) and improve outcomes simultaneously.</li>
                    <li><strong style={{ color: '#ffffff' }}>Regulatory Support:</strong> The FDA&apos;s AI/ML action plan and Health Canada&apos;s guidance provide clear pathways for AI medical device approval.</li>
                  </ul>
                </div>

                {/* AI Diagnostics */}
                <h2 id="ai-diagnostics" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AI-Powered Diagnostics</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    AI diagnostics is the most mature application of AI in healthcare. Deep learning models now match or exceed radiologist accuracy in detecting cancers, fractures, and retinal diseases &mdash; and they never get tired or distracted.
                  </p>

                  <div style={{
                    background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(180,253,131,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;AI won&apos;t replace radiologists. But radiologists who use AI will replace those who don&apos;t. The combination of human judgment and AI pattern recognition catches 30-40% more early-stage cancers than either alone.&quot;
                    </p>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Breakthrough diagnostic applications:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Radiology AI:</strong> Convolutional neural networks analyze X-rays, CT scans, and MRIs with sub-millimeter precision. Google&apos;s LYNA detects breast cancer metastases with 99% accuracy. AI triage systems prioritize critical scans, reducing report turnaround from hours to minutes.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Pathology AI:</strong> Digital pathology with AI-powered image analysis detects cellular abnormalities that human pathologists miss. Paige AI&apos;s prostate cancer detection system was the first FDA-approved AI pathology tool.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Dermatology AI:</strong> Smartphone-based skin cancer detection apps use deep learning to analyze lesion images. Studies show AI matches board-certified dermatologists in melanoma detection.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Ophthalmology AI:</strong> IDx-DR autonomously detects diabetic retinopathy without specialist interpretation. This is critical in regions with ophthalmologist shortages.</li>
                    <li><strong style={{ color: '#ffffff' }}>Cardiac AI:</strong> ECG analysis algorithms detect atrial fibrillation, heart failure risk, and even potassium imbalances from a standard 12-lead ECG &mdash; conditions traditionally requiring blood tests.</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>AI Diagnostics Technology Stack</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Component</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Technology</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Image Analysis</strong></td>
                        <td style={{ padding: '12px 8px' }}>CNNs, Vision Transformers, U-Net</td>
                        <td style={{ padding: '12px 8px' }}>Medical image segmentation and classification</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>NLP</strong></td>
                        <td style={{ padding: '12px 8px' }}>BioBERT, ClinicalBERT, Med-PaLM</td>
                        <td style={{ padding: '12px 8px' }}>Clinical note analysis and medical Q&A</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Data Pipeline</strong></td>
                        <td style={{ padding: '12px 8px' }}>FHIR, HL7, DICOM integration</td>
                        <td style={{ padding: '12px 8px' }}>Healthcare data interoperability</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Model Training</strong></td>
                        <td style={{ padding: '12px 8px' }}>Federated learning, differential privacy</td>
                        <td style={{ padding: '12px 8px' }}>Privacy-preserving model development</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Deployment</strong></td>
                        <td style={{ padding: '12px 8px' }}>HIPAA-compliant cloud, edge inference</td>
                        <td style={{ padding: '12px 8px' }}>Secure, low-latency predictions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Drug Discovery */}
                <h2 id="drug-discovery" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AI in Drug Discovery</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Traditional drug discovery takes 10-15 years and costs $2.6 billion per approved drug. AI is compressing this timeline dramatically. AI-discovered drug candidates have entered clinical trials in as little as 18 months from target identification &mdash; a process that traditionally takes 4-5 years.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 24, marginBottom: 24,
                  }}>
                    <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Target Identification</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>AI analyzes genomic, proteomic, and metabolomic data to identify disease targets. Graph neural networks map protein-protein interactions and predict druggable targets with unprecedented accuracy.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Molecule Generation</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Generative AI designs novel molecules optimized for efficacy, selectivity, and ADMET properties. Models like AlphaFold predict 3D protein structures, enabling rational drug design at scale.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Clinical Trial Optimization</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>AI identifies optimal patient cohorts, predicts adverse events, and enables adaptive trial designs. This reduces trial failures (currently 90%) and accelerates time-to-approval.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Drug Repurposing</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>AI screens existing approved drugs for new therapeutic uses. This approach discovered that baricitinib (a rheumatoid arthritis drug) could treat COVID-19, validated by clinical trials.</p>
                    </div>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Leading AI drug discovery platforms:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Insilico Medicine:</strong> First AI-designed drug to enter Phase II clinical trials. Their platform integrates target discovery, molecule generation, and clinical trial prediction.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Recursion Pharmaceuticals:</strong> Uses computer vision and biological imaging at scale to map cellular biology and discover new drug candidates.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Isomorphic Labs (Google DeepMind):</strong> Leveraging AlphaFold&apos;s protein structure predictions for structure-based drug design.</li>
                    <li><strong style={{ color: '#ffffff' }}>Exscientia:</strong> AI-designed molecules with optimized properties entering clinical trials at a fraction of traditional costs.</li>
                  </ul>
                </div>

                {/* Remote Patient Monitoring */}
                <h2 id="remote-monitoring" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AI-Powered Remote Patient Monitoring</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Remote patient monitoring (RPM) powered by AI is transforming chronic disease management. Instead of episodic clinic visits, patients are continuously monitored through wearable devices, with AI algorithms detecting deterioration before symptoms appear.
                  </p>

                  <div style={{
                    background: 'rgba(180,253,131,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(180,253,131,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;The shift from reactive to proactive healthcare is the defining transformation of our generation. AI-powered RPM can detect heart failure decompensation 7-14 days before hospitalization, giving clinicians time to intervene.&quot;
                    </p>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Key RPM applications:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Heart Failure Monitoring:</strong> Wearable sensors track weight, heart rate variability, respiration rate, and activity levels. AI algorithms detect subtle changes indicating fluid retention days before symptoms manifest, reducing hospital readmissions by 40%.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Diabetes Management:</strong> Continuous glucose monitors paired with AI provide real-time insulin dosing recommendations. AI predicts hypoglycemic events 30-60 minutes in advance, allowing preventive action.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Post-Surgical Recovery:</strong> AI monitors recovery patterns, detects infection early through vital sign anomalies, and adjusts care plans in real-time. This reduces post-surgical complications by 25%.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Mental Health Monitoring:</strong> AI analyzes speech patterns, sleep quality, activity levels, and phone usage patterns to detect depression and anxiety episodes, enabling earlier intervention.</li>
                    <li><strong style={{ color: '#ffffff' }}>Elderly Care:</strong> Smart home sensors combined with AI detect falls, medication non-adherence, and changes in daily routines that may indicate cognitive decline.</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#b4fd83', margin: 0 }}>40%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Fewer Hospital Readmissions</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>$36B</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>RPM Market by 2028</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>88%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Patient Satisfaction Rate</p>
                  </div>
                </div>

                {/* Predictive Analytics */}
                <h2 id="predictive-analytics" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Predictive Analytics in Healthcare</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Predictive analytics uses machine learning to forecast patient outcomes, disease progression, and resource needs. Instead of reacting to crises, healthcare organizations can anticipate and prevent them.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Predictive Analytics Use Cases</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Application</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Data Sources</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Sepsis Prediction</strong></td>
                          <td style={{ padding: '12px 8px' }}>Vitals, labs, clinical notes</td>
                          <td style={{ padding: '12px 8px' }}>4-6 hour early warning, 20% mortality reduction</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Readmission Risk</strong></td>
                          <td style={{ padding: '12px 8px' }}>EHR, social determinants, claims</td>
                          <td style={{ padding: '12px 8px' }}>30-day readmission reduced by 25%</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Disease Progression</strong></td>
                          <td style={{ padding: '12px 8px' }}>Genomics, imaging, longitudinal data</td>
                          <td style={{ padding: '12px 8px' }}>Personalized treatment timing</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Resource Planning</strong></td>
                          <td style={{ padding: '12px 8px' }}>Historical admissions, seasonality, events</td>
                          <td style={{ padding: '12px 8px' }}>95% bed occupancy prediction accuracy</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px 8px' }}><strong style={{ color: '#b4fd83' }}>Epidemic Forecasting</strong></td>
                          <td style={{ padding: '12px 8px' }}>Population health, mobility, environmental</td>
                          <td style={{ padding: '12px 8px' }}>2-4 week outbreak prediction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Real-world predictive analytics wins:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Epic&apos;s Sepsis Prediction Model:</strong> Deployed across 100+ hospital systems, this model analyzes 80+ variables in real-time to alert clinicians 4-6 hours before sepsis onset, reducing mortality by 18-20%.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Johns Hopkins:</strong> Their early warning system reduced cardiac arrests by 30% by predicting patient deterioration 12 hours in advance.</li>
                    <li><strong style={{ color: '#ffffff' }}>Kaiser Permanente:</strong> Uses predictive models to identify high-risk patients for proactive outreach, reducing emergency visits by 15% and hospitalizations by 10%.</li>
                  </ul>
                </div>

                {/* Clinical Decision Support */}
                <h2 id="clinical-decision" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Clinical Decision Support Systems</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    AI-powered clinical decision support systems (CDSS) augment physician judgment by synthesizing vast amounts of medical literature, patient data, and treatment guidelines in real-time. These systems don&apos;t replace clinical expertise &mdash; they enhance it.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 24, marginBottom: 24,
                  }}>
                    <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                      <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>Treatment Recommendations</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>AI analyzes patient history, genomics, and current evidence to suggest personalized treatment protocols. Oncology CDSS systems match patients to clinical trials and optimize chemotherapy regimens based on tumor genomics.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Drug Interaction Alerts</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>Beyond simple interaction checks, AI-powered systems consider patient-specific factors (age, renal function, genetics) to predict adverse drug events with much higher specificity than rule-based systems.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Ambient Clinical Intelligence</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>AI listens to doctor-patient conversations, automatically generates clinical notes, extracts diagnoses and treatment plans, and updates the EHR. This gives physicians 2-3 hours back per day.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Care Pathway Optimization</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>AI analyzes outcomes data across thousands of similar patients to identify optimal care pathways, reducing length of stay and improving outcomes through evidence-based standardization.</p>
                    </div>
                  </div>

                  <p>
                    <strong style={{ color: '#ffffff' }}>The ambient AI revolution:</strong> Companies like Nuance (Microsoft), Abridge, and Nabla are deploying AI systems that sit in the exam room (with consent) and automatically document visits. Early adopters report physician satisfaction scores increasing by 40% and documentation time dropping by 70%.
                  </p>
                </div>

                {/* HIPAA Compliance */}
                <h2 id="hipaa-compliance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Building HIPAA-Compliant AI Systems</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Healthcare AI must operate within strict regulatory frameworks. HIPAA compliance isn&apos;t optional &mdash; violations can result in fines up to $1.5 million per incident. Building AI that protects patient privacy while delivering clinical value requires careful architecture decisions from Day 1.
                  </p>

                  {[
                    { num: 1, title: 'Data De-identification', desc: 'Implement HIPAA Safe Harbor or Expert Determination methods before any data enters ML pipelines. Use automated PHI detection tools to scan training datasets. Remember: even model outputs can contain PHI through memorization.' },
                    { num: 2, title: 'Federated Learning', desc: 'Train models across multiple institutions without centralizing patient data. Each hospital trains on local data, and only model weights (not patient data) are shared. This enables large-scale model training while maintaining strict data sovereignty.' },
                    { num: 3, title: 'Encryption & Access Controls', desc: 'End-to-end encryption for data in transit and at rest. Role-based access controls for model endpoints. Audit logging for every prediction request. BAA agreements with all cloud providers and AI vendors.' },
                    { num: 4, title: 'Model Explainability', desc: 'Clinical AI must be interpretable. Use SHAP values, attention maps, and feature importance scores so clinicians understand why the AI made a recommendation. This is both a regulatory requirement and essential for clinical trust.' },
                    { num: 5, title: 'Continuous Monitoring', desc: 'Deploy model monitoring for data drift, performance degradation, and bias. Healthcare data distributions change (seasonal diseases, new treatments, demographic shifts), and models must be continuously validated against real-world outcomes.' },
                    { num: 6, title: 'Regulatory Documentation', desc: 'Maintain detailed documentation of training data provenance, model architecture, validation results, and deployment decisions. The FDA requires this for SaMD (Software as a Medical Device) approval, and it protects against liability.' },
                  ].map((step) => (
                    <div key={step.num} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                        <div style={{
                          minWidth: 40, height: 40, borderRadius: '50%',
                          background: 'rgba(180,253,131,0.15)', border: '1px solid rgba(180,253,131,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 16, fontWeight: 700, color: '#b4fd83',
                        }}>{step.num}</div>
                        <div>
                          <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{step.title}</h3>
                          <p style={{ fontSize: 15, margin: 0 }}>{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Choose Codazz for Healthcare AI Development</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(180,253,131,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(180,253,131,0.2)' }}>
                    <h4 style={{ color: '#b4fd83', marginBottom: 8 }}>HIPAA-First Architecture</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Every healthcare AI system we build starts with HIPAA compliance baked into the architecture. De-identification, encryption, access controls, and audit trails are foundational, not afterthoughts.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Clinical AI Expertise</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Our team has built AI solutions for diagnostics, RPM, clinical decision support, and EHR integration. We understand HL7/FHIR, DICOM, and the clinical workflow context that makes AI adoption successful.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>FDA/Health Canada Ready</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>We build documentation, validation, and quality management systems aligned with FDA SaMD guidance and Health Canada requirements for AI-powered medical devices.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Rapid POC to Production</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Go from proof-of-concept to production-grade healthcare AI in 8-16 weeks. We validate clinical value quickly, then scale with enterprise-grade infrastructure and compliance.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How much does it cost to build AI healthcare software?', a: 'A basic AI integration (clinical chatbot, appointment triage) costs $40K-$100K. An AI diagnostics system with medical imaging analysis runs $150K-$500K. A full AI-powered RPM platform with predictive analytics costs $200K-$800K+. Costs depend heavily on regulatory requirements (FDA/Health Canada approval adds $100K-$300K in documentation and validation).' },
                  { q: 'Is AI in healthcare FDA-approved?', a: 'Over 950 AI/ML-enabled medical devices have received FDA authorization as of 2026. The FDA has a dedicated Digital Health Center of Excellence and an AI/ML action plan. Most approvals are through the 510(k) pathway for AI-assisted diagnostics. The FDA also introduced a framework for continuously learning AI systems that can update without full resubmission.' },
                  { q: 'How do you ensure HIPAA compliance in AI systems?', a: 'HIPAA compliance requires: (1) Data de-identification before model training, (2) BAA agreements with all vendors, (3) Encryption at rest and in transit, (4) Role-based access controls, (5) Audit logging of all data access, (6) Regular security assessments. We also recommend federated learning to avoid centralizing PHI and differential privacy to prevent model memorization of patient data.' },
                  { q: 'Can AI replace doctors?', a: 'No, and that is not the goal. AI augments physician capabilities by handling data-intensive tasks (image analysis, documentation, literature review) and flagging critical findings. The best outcomes come from human-AI collaboration, where AI handles pattern recognition at scale and physicians provide clinical judgment, empathy, and complex reasoning. Studies consistently show human+AI outperforms either alone.' },
                  { q: 'How long does it take to deploy AI in a hospital setting?', a: 'A pilot deployment of an AI diagnostic tool takes 3-6 months including EHR integration, clinical validation, and staff training. Scaling across a health system takes 6-18 months. Key factors: IT infrastructure readiness, clinical champion buy-in, EHR integration complexity (Epic vs. Cerner vs. custom), and regulatory requirements for your specific use case.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden',
                  }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: '100%', padding: 24, background: 'none', border: 'none', cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left',
                      }}
                    >
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', margin: 0 }}>{faq.q}</h3>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"
                        style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', flexShrink: 0 }}>
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 24px 24px' }}>
                        <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Build AI-Powered Healthcare Software?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free consultation for your healthcare AI project. We&apos;ll assess your clinical use case, recommend the right AI approach, and provide a HIPAA-compliant architecture blueprint.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Start Your Healthcare AI Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 0', fontSize: 14,
                            color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author Card */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%',
                        background: 'rgba(180,253,131,0.15)', border: '1px solid rgba(180,253,131,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 15, fontWeight: 700, color: '#b4fd83',
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>
                      Raman leads Codazz&apos;s healthcare AI practice, helping hospitals and healthtech startups build HIPAA-compliant AI solutions that improve patient outcomes.
                    </p>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 16,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#b4fd83', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
