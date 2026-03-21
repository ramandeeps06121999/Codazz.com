'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

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
  { id: 'ar-landscape', label: 'AR Market 2026', emoji: '🌍' },
  { id: 'arkit-arcore-webxr', label: 'ARKit vs ARCore vs WebXR', emoji: '⚔️' },
  { id: 'unity-vs-native', label: 'Unity vs Native AR', emoji: '🎮' },
  { id: 'marker-vs-markerless', label: 'Marker-Based vs Markerless', emoji: '🎯' },
  { id: 'spatial-computing', label: 'Spatial Computing & LIDAR', emoji: '📡' },
  { id: 'ar-retail', label: 'AR in Retail & Try-On', emoji: '🛍️' },
  { id: 'ar-construction', label: 'AR in Construction & Architecture', emoji: '🏗️' },
  { id: 'apple-vision-pro', label: 'Apple Vision Pro', emoji: '🥽' },
  { id: 'development-cost', label: 'Development Cost', emoji: '💰' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native 2026: Which Should You Choose?', category: 'Mobile Development', readTime: '15 min' },
  { slug: 'native-vs-cross-platform-2026', title: 'Native vs Cross-Platform App Development 2026', category: 'Mobile Development', readTime: '12 min' },
];

export default function ARAppDevelopmentGuideClient() {
  const mainRef = useReveal();
  const [activeSection, setActiveSection] = useState('ar-landscape');

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      let current = tocSections[0].id;
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 160) current = sec.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .prose-table { width: 100%; border-collapse: collapse; }
        .prose-table th { background: #111; color: #22c55e; font-weight: 700; padding: 12px 16px; text-align: left; border-bottom: 2px solid #22c55e33; }
        .prose-table td { padding: 11px 16px; border-bottom: 1px solid #1a1a1a; color: #d1d5db; font-size: 0.93rem; }
        .prose-table tr:hover td { background: #0d0d0d; }
        .toc-link { display: flex; align-items: center; gap: 8px; padding: 7px 12px; border-radius: 10px; font-size: 0.82rem; color: #9ca3af; text-decoration: none; transition: all 0.2s; }
        .toc-link:hover, .toc-link.active { background: #0f2a0f; color: #22c55e; }
        .faq-item summary { cursor: pointer; padding: 16px 0; font-weight: 600; color: #f9fafb; list-style: none; display: flex; justify-content: space-between; align-items: center; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] summary { color: #22c55e; }
        .chip { display: inline-block; background: #0f2a0f; color: #22c55e; border: 1px solid #22c55e44; border-radius: 20px; padding: 3px 12px; font-size: 0.78rem; font-weight: 600; }
      `}</style>

      <div style={{ background: '#000', minHeight: '100vh', color: '#f9fafb', fontFamily: "'Inter', sans-serif" }}>
        <Navbar />

        {/* Hero */}
        <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80, textAlign: 'center' }}>
          <HeroBackground />
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
              <span className="chip">Augmented Reality</span>
              <span className="chip">ARKit</span>
              <span className="chip">ARCore</span>
              <span className="chip">WebXR</span>
              <span className="chip">March 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: -1 }}>
              AR App Development Guide 2026:<br />
              <span style={{ color: '#22c55e' }}>Build Augmented Reality Applications</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#9ca3af', maxWidth: 700, margin: '0 auto 32px', lineHeight: 1.7 }}>
              The AR market is projected to reach $461 billion by 2030. From ARKit and ARCore to WebXR, Unity and native development, LIDAR scanning, retail try-on, construction visualization, and Apple Vision Pro — this is your complete technical guide to building AR applications in 2026.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', fontSize: '0.85rem', color: '#6b7280' }}>
              <span>By Raman Makkar, CEO</span>
              <span>•</span>
              <span>March 20, 2026</span>
              <span>•</span>
              <span>24 min read</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <main ref={mainRef} style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 260px', gap: 60, alignItems: 'start' }}>

          {/* Article */}
          <article>

            {/* AR Landscape */}
            <section id="ar-landscape" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  The AR Market in 2026
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  Augmented reality has crossed the chasm from novelty to utility. In 2026, AR is a mainstream tool across retail, manufacturing, healthcare, architecture, education, and entertainment. The Pokémon GO era introduced consumers to the concept; Apple Vision Pro, immersive retail try-on experiences, and industrial AR maintenance tools have made AR an expected feature in competitive products.
                </p>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 24 }}>
                  The global AR market was valued at $57 billion in 2023 and is growing at a CAGR of 43.8%. More importantly for developers: smartphone AR (accessible without additional hardware) now reaches 3.5 billion devices globally via ARKit on iOS and ARCore on Android. WebXR extends this reach to any modern browser. The addressable market for AR apps has never been larger.
                </p>
              </div>

              <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 28, padding: 32, marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>AR Market Segments 2026</h3>
                <table className="prose-table">
                  <thead>
                    <tr>
                      <th>Segment</th>
                      <th>Market Size 2026</th>
                      <th>Growth Driver</th>
                      <th>Top Use Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Enterprise AR</td><td>$18.2B</td><td>Worker productivity, training</td><td>Maintenance, assembly, logistics</td></tr>
                    <tr><td>Retail & E-Commerce AR</td><td>$12.6B</td><td>Reduced returns, conversion rates</td><td>Virtual try-on, furniture placement</td></tr>
                    <tr><td>Healthcare AR</td><td>$8.4B</td><td>Surgical precision, medical training</td><td>Surgical nav, anatomy visualization</td></tr>
                    <tr><td>Education AR</td><td>$5.9B</td><td>Interactive learning outcomes</td><td>Science labs, history immersion</td></tr>
                    <tr><td>Gaming & Entertainment</td><td>$9.8B</td><td>Location-based, mixed reality</td><td>Location games, live events</td></tr>
                    <tr><td>Architecture & Real Estate</td><td>$4.1B</td><td>Visualization before build</td><td>Virtual staging, design review</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ARKit vs ARCore vs WebXR */}
            <section id="arkit-arcore-webxr" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  ARKit vs ARCore vs WebXR: Platform Comparison
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  Choosing the right AR framework is the foundational decision in any AR project. Each platform has distinct capabilities, device coverage, and development requirements. Understanding these differences — and when to combine them — is essential for a successful AR strategy in 2026.
                </p>
              </div>

              <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 28, padding: 32, marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>ARKit vs ARCore vs WebXR — Deep Comparison</h3>
                <table className="prose-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>ARKit (Apple)</th>
                      <th>ARCore (Google)</th>
                      <th>WebXR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Platform</td><td>iOS 11+ / iPadOS</td><td>Android 7.0+ (certified)</td><td>Any modern browser</td></tr>
                    <tr><td>Language</td><td>Swift / Objective-C</td><td>Kotlin / Java / C++</td><td>JavaScript / TypeScript</td></tr>
                    <tr><td>World Tracking</td><td>Excellent (SLAM)</td><td>Excellent (SLAM)</td><td>Good (device-dependent)</td></tr>
                    <tr><td>Plane Detection</td><td>Horizontal + Vertical</td><td>Horizontal + Vertical</td><td>Limited (via Anchors)</td></tr>
                    <tr><td>LIDAR Support</td><td>Yes (iPhone 12 Pro+, iPad Pro)</td><td>No</td><td>No</td></tr>
                    <tr><td>People Occlusion</td><td>Yes (A12 Bionic+)</td><td>Depth API (limited devices)</td><td>No</td></tr>
                    <tr><td>Face Tracking</td><td>Yes (TrueDepth camera)</td><td>Yes (ARCore Face Mesh API)</td><td>Limited</td></tr>
                    <tr><td>Object Scanning</td><td>Object Detection + LIDAR scanning</td><td>Augmented Images + Cloud Anchors</td><td>No native scanning</td></tr>
                    <tr><td>Persistent Anchors</td><td>ARWorldMap</td><td>Cloud Anchors (Firebase)</td><td>WebXR Anchors (draft)</td></tr>
                    <tr><td>Multiplayer AR</td><td>Multipeer Connectivity + WorldMap</td><td>Cloud Anchors</td><td>Limited</td></tr>
                    <tr><td>App Store Distribution</td><td>App Store</td><td>Google Play</td><td>Web URL</td></tr>
                    <tr><td>Install Required</td><td>Yes</td><td>Yes (+ ARCore Services)</td><td>No</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="reveal">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f9fafb', marginBottom: 14 }}>When to Choose Each Platform</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
                  {[
                    { platform: 'ARKit', color: '#22c55e', cases: ['Premium iOS-first experiences', 'LIDAR-powered room scanning', 'People occlusion for realistic placement', 'Face filter & TrueDepth effects', 'RealityKit for photorealistic rendering'] },
                    { platform: 'ARCore', color: '#60a5fa', cases: ['Android-first or cross-platform', 'Cloud Anchors for shared AR experiences', 'Large Android device coverage', 'ARCore Geospatial API for outdoor AR', 'Depth API for occluded placement'] },
                    { platform: 'WebXR', color: '#f59e0b', cases: ['No-install experiences', 'Broad device reach', 'Marketing campaigns', '8th Wall / Niantic Lightship web AR', 'Quick prototyping and demos'] },
                  ].map(item => (
                    <div key={item.platform} style={{ background: '#0a0a0a', border: `1px solid ${item.color}33`, borderRadius: 16, padding: '20px 22px' }}>
                      <div style={{ fontWeight: 800, color: item.color, marginBottom: 12, fontSize: '1rem' }}>{item.platform}</div>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                        {item.cases.map(c => (
                          <li key={c} style={{ color: '#9ca3af', fontSize: '0.82rem', lineHeight: 1.6, paddingLeft: 14, position: 'relative', marginBottom: 4 }}>
                            <span style={{ position: 'absolute', left: 0, color: item.color }}>›</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#0f2a0f', border: '1px solid #22c55e33', borderRadius: 16, padding: '18px 22px' }}>
                  <p style={{ color: '#86efac', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong style={{ color: '#22c55e' }}>2026 Reality Check:</strong> For most commercial AR apps targeting maximum market reach, we recommend building natively for both ARKit and ARCore. Shared 3D assets (USDZ for iOS, glTF for Android) reduce duplication significantly. WebXR serves best as a complementary channel for marketing and acquisition, not as the primary AR experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Unity vs Native AR */}
            <section id="unity-vs-native" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  Unity vs Native AR Development
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  One of the most consequential decisions in any AR project is whether to build with Unity (or Unreal Engine) or go fully native with ARKit / ARCore and their respective rendering frameworks (RealityKit for iOS, SceneView for Android). There is no universal correct answer — the right choice depends on your team, content type, and platform targets.
                </p>
              </div>

              <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 28, padding: 32, marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>Unity vs Native: Comprehensive Comparison</h3>
                <table className="prose-table">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Unity (AR Foundation)</th>
                      <th>Native ARKit / RealityKit</th>
                      <th>Native ARCore / SceneView</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Code Reuse</td><td>Very High (70–90% shared)</td><td>iOS only</td><td>Android only</td></tr>
                    <tr><td>3D Content Pipeline</td><td>Unity Asset Store, FBX, glTF</td><td>USDZ, Reality Composer</td><td>glTF, Sceneform (deprecated → SceneView)</td></tr>
                    <tr><td>Rendering Quality</td><td>High (HDRP, URP)</td><td>Very High (RealityKit PBR)</td><td>Good (SceneView PBR)</td></tr>
                    <tr><td>App Size</td><td>Large (+50–100MB Unity runtime)</td><td>Small (native framework)</td><td>Small (native framework)</td></tr>
                    <tr><td>Performance</td><td>Good (C# managed memory)</td><td>Excellent (Swift/Metal)</td><td>Very Good (Kotlin/OpenGL/Vulkan)</td></tr>
                    <tr><td>Platform-Specific Features</td><td>Limited (via plugins)</td><td>Full ARKit feature access</td><td>Full ARCore feature access</td></tr>
                    <tr><td>Game-Like Experiences</td><td>Excellent</td><td>Moderate (SpriteKit integration)</td><td>Moderate</td></tr>
                    <tr><td>Team Skill Requirement</td><td>Unity / C# expertise</td><td>Swift / SwiftUI / RealityKit</td><td>Kotlin / Jetpack expertise</td></tr>
                    <tr><td>Apple Vision Pro Support</td><td>Partial (visionOS porting)</td><td>Yes (visionOS RealityKit)</td><td>No</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="reveal">
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  Our 2026 recommendation at Codazz: Unity via AR Foundation is the right choice when you need cross-platform reach, game-like interactivity, or a rich 3D content pipeline. Go native (RealityKit for iOS, SceneView for Android) when photorealism and platform-specific features (LIDAR, people occlusion, Vision Pro compatibility) are priorities, or when app performance and size are critical.
                </p>
              </div>
            </section>

            {/* Marker vs Markerless */}
            <section id="marker-vs-markerless" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  Marker-Based vs Markerless AR
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  The two fundamental AR tracking paradigms — marker-based and markerless — each excel in different contexts. Understanding the tradeoffs shapes product decisions, art production pipelines, and backend infrastructure requirements.
                </p>
              </div>

              <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 28, padding: 32, marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>AR Tracking Methods Comparison</h3>
                <table className="prose-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>How It Works</th>
                      <th>Best Use Cases</th>
                      <th>Limitations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Image Markers (2D)</td><td>Camera detects pre-registered image pattern</td><td>Product packaging, business cards, museum exhibits</td><td>Requires printed/displayed marker; lighting-sensitive</td></tr>
                    <tr><td>QR Code Anchoring</td><td>QR code triggers AR content load</td><td>Retail, events, wayfinding</td><td>Obtrusive marker; requires printing</td></tr>
                    <tr><td>Object Scanning</td><td>3D scan of physical object registered as target</td><td>Product manuals, toy activation, vehicle maintenance</td><td>Requires pre-scanning each object type</td></tr>
                    <tr><td>Plane Detection (Markerless)</td><td>SLAM detects horizontal/vertical surfaces</td><td>Furniture placement, home decor, gaming</td><td>Requires textured surfaces; struggles in low light</td></tr>
                    <tr><td>Face Tracking (Markerless)</td><td>Facial landmark detection in real-time</td><td>Filters, try-on (glasses, makeup), avatars</td><td>Front camera required; privacy considerations</td></tr>
                    <tr><td>Body Tracking (Markerless)</td><td>Skeleton pose estimation via camera</td><td>Virtual clothing try-on, fitness coaching</td><td>Requires full-body visibility; compute-intensive</td></tr>
                    <tr><td>Geospatial AR</td><td>GPS + VPS (Visual Positioning System)</td><td>Outdoor navigation, city-scale AR, events</td><td>Accuracy degrades indoors; requires mapping data</td></tr>
                    <tr><td>LIDAR Meshing</td><td>Depth sensor creates real-time 3D mesh</td><td>Occlusion, room-scale AR, spatial audio</td><td>iPhone 12 Pro+ / iPad Pro hardware required</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Spatial Computing & LIDAR */}
            <section id="spatial-computing" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  Spatial Computing & LIDAR Scanning
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  Apple&apos;s inclusion of LIDAR (Light Detection and Ranging) scanners in iPhone 12 Pro and later, and iPad Pro, fundamentally changed what is possible with mobile AR. LIDAR creates an instant, precise 3D mesh of the environment — enabling realistic object occlusion, instant plane detection even in low light, and room-scale spatial mapping that previously required dedicated depth cameras.
                </p>
              </div>

              <div className="reveal" style={{ marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f9fafb', marginBottom: 14 }}>What LIDAR Enables in ARKit</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                  {[
                    { feature: 'Instant AR', desc: 'Plane detection in < 1 second, even on untextured surfaces like white floors and walls' },
                    { feature: 'People Occlusion', desc: 'AR objects correctly appear behind real people, creating a seamless mixed reality effect' },
                    { feature: 'Scene Reconstruction', desc: 'Full 3D mesh of a room, enabling navigation paths, physics simulations, and spatial audio' },
                    { feature: 'Object Placement Accuracy', desc: 'Sub-centimeter placement precision for furniture, equipment, and architectural visualization' },
                    { feature: 'Low-Light AR', desc: 'Works in near-darkness because LIDAR emits its own infrared light — independent of visible lighting' },
                    { feature: 'RoomPlan API', desc: 'Apple\'s dedicated room scanning API generates structured room data (walls, doors, windows, furniture) in minutes' },
                  ].map(item => (
                    <div key={item.feature} style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 14, padding: '18px 20px' }}>
                      <div style={{ fontWeight: 700, color: '#22c55e', fontSize: '0.88rem', marginBottom: 8 }}>{item.feature}</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.81rem', lineHeight: 1.55 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal">
                <p style={{ color: '#9ca3af', lineHeight: 1.8 }}>
                  Spatial computing in 2026 extends beyond mobile. Apple Vision Pro and Microsoft HoloLens 2 represent the vanguard of fully spatial computing platforms where AR is not an overlay on a phone screen but the primary display mode. Building for these platforms requires a fundamentally different design philosophy: instead of placing objects in a camera view, you are placing objects in physical space that persist as users move around them, interact with them with hands and eyes, and share them with co-present users.
                </p>
              </div>
            </section>

            {/* AR in Retail */}
            <section id="ar-retail" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  AR in Retail: Virtual Try-On & Product Visualization
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  Retail AR has proven ROI at scale. IKEA Place users are 11x more likely to purchase after an AR visualization. Sephora reports a 200% increase in conversion for products with virtual try-on. Warby Parker&apos;s virtual glasses try-on drove 25% lower return rates. In 2026, AR is no longer a differentiator in retail — it is an expected feature for premium e-commerce experiences.
                </p>
              </div>

              <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 28, padding: 32, marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>Retail AR Implementation Approaches</h3>
                <table className="prose-table">
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Technology</th>
                      <th>Complexity</th>
                      <th>Proven ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Furniture / Home Decor Placement</td><td>ARKit / ARCore plane detection + USDZ/glTF models</td><td>Medium</td><td>11x purchase likelihood (IKEA)</td></tr>
                    <tr><td>Glasses & Eyewear Try-On</td><td>Face mesh tracking, 3D frame overlay</td><td>Medium–High</td><td>25% return reduction (Warby Parker)</td></tr>
                    <tr><td>Makeup & Cosmetics</td><td>Face landmark tracking, real-time shader</td><td>High</td><td>200% conversion uplift (Sephora)</td></tr>
                    <tr><td>Clothing & Fashion</td><td>Body tracking / 2D try-on (2D faster to ship)</td><td>High–Very High</td><td>40% lower returns (various)</td></tr>
                    <tr><td>Shoe Try-On</td><td>Foot tracking + 3D shoe model</td><td>High</td><td>30% conversion increase (Nike)</td></tr>
                    <tr><td>Jewelry Visualization</td><td>Hand / wrist tracking, 3D asset overlay</td><td>High</td><td>70% higher engagement</td></tr>
                    <tr><td>Paint / Wallpaper Preview</td><td>Plane detection + real-time texture replacement</td><td>Medium</td><td>60% faster decision (Dulux)</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="reveal">
                <p style={{ color: '#9ca3af', lineHeight: 1.8 }}>
                  The most overlooked factor in retail AR is 3D asset quality. The AR experience is only as good as the 3D models representing your products. USDZ (for iOS Quick Look AR) and glTF 2.0 are the standard formats. Photogrammetry-based scanning of physical products is the gold standard — capturing real materials, reflections, and dimensions. Budget 30–50% of your AR project cost specifically for 3D asset creation and optimization.
                </p>
              </div>
            </section>

            {/* AR in Construction */}
            <section id="ar-construction" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  AR in Construction, Architecture & Real Estate
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  Construction and architecture represent the fastest-growing enterprise AR use cases in 2026. The ability to overlay BIM (Building Information Modeling) data, architectural plans, and MEP (mechanical, electrical, plumbing) systems onto a physical building site in real-time is transforming how projects are designed, built, and managed.
                </p>
              </div>

              <div className="reveal" style={{ marginBottom: 28 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                  {[
                    {
                      title: 'BIM on Site',
                      desc: 'Overlay IFC/BIM models directly on construction sites using geospatial anchors. Workers can see exactly where pipes, conduits, and structural elements should be — before walls are closed.',
                      tools: 'ARKit + RealityKit, Trimble XR10, Scope AR WorkLink'
                    },
                    {
                      title: 'Architectural Visualization',
                      desc: 'Walk clients through unbuilt spaces at 1:1 scale on the actual site. Swap materials, adjust layouts, and experience the finished building before a single wall is erected.',
                      tools: 'Unity AR Foundation, Enscape AR, SketchUp Viewer'
                    },
                    {
                      title: 'Real Estate Staging',
                      desc: 'Virtually furnish empty properties, visualize renovation options, and let buyers customize finishes using AR — reducing expensive physical staging costs by 60–80%.',
                      tools: 'ARKit Quick Look, Matterport + AR, Zillow 3D Home'
                    },
                    {
                      title: 'Maintenance & Inspection',
                      desc: 'Display equipment manuals, wiring diagrams, and step-by-step procedures overlaid on physical machinery. Reduce maintenance time by up to 40% and cut errors significantly.',
                      tools: 'Microsoft HoloLens 2, Scope AR, Spatial'
                    },
                  ].map(item => (
                    <div key={item.title} style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 18, padding: '22px 24px' }}>
                      <div style={{ fontWeight: 800, color: '#22c55e', fontSize: '0.95rem', marginBottom: 10 }}>{item.title}</div>
                      <p style={{ color: '#9ca3af', fontSize: '0.83rem', lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</p>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}><strong style={{ color: '#4b5563' }}>Tools:</strong> {item.tools}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 28, padding: 32 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>Construction AR: Key Technical Challenges</h3>
                <table className="prose-table">
                  <thead>
                    <tr>
                      <th>Challenge</th>
                      <th>Solution Approach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Outdoor GPS accuracy (±3–5m)</td><td>ARCore Geospatial API + VPS + survey control points for sub-10cm accuracy</td></tr>
                    <tr><td>Large-scale BIM file performance</td><td>LOD (Level of Detail) streaming — only render nearby elements at full detail</td></tr>
                    <tr><td>Multi-user collaboration on site</td><td>Cloud Anchors (ARCore) or WorldMap sharing (ARKit) for shared spatial coordinate systems</td></tr>
                    <tr><td>Device durability on construction sites</td><td>Rugged tablets (Samsung Galaxy Tab Active, Zebra) + HoloLens for hands-free</td></tr>
                    <tr><td>IFC / BIM format conversion</td><td>Autodesk Forge API or Open CASCADE to convert IFC to glTF/USDZ for AR consumption</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Apple Vision Pro */}
            <section id="apple-vision-pro" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  Apple Vision Pro: Spatial Computing for AR Apps
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  Apple Vision Pro (visionOS) represents the most significant shift in personal computing since the iPhone. Unlike smartphone AR where digital objects are overlaid on a camera feed, Vision Pro uses passthrough video from external cameras to display true mixed reality — with eyes, hands, and voice as native input modalities, and spatial audio as a first-class citizen.
                </p>
              </div>

              <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 28, padding: 32, marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>iPhone AR vs Apple Vision Pro: Development Differences</h3>
                <table className="prose-table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>iPhone AR (ARKit)</th>
                      <th>Apple Vision Pro (visionOS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Input Method</td><td>Touch, gesture</td><td>Eyes, hands, voice</td></tr>
                    <tr><td>Display Mode</td><td>Camera passthrough on screen</td><td>True mixed reality (MR) headset</td></tr>
                    <tr><td>Window Model</td><td>Full-screen app</td><td>Floating windows in physical space</td></tr>
                    <tr><td>Primary Framework</td><td>ARKit + RealityKit</td><td>RealityKit + SwiftUI + RealityComposerPro</td></tr>
                    <tr><td>Spatial Audio</td><td>Limited</td><td>Fully spatial, head-tracked audio</td></tr>
                    <tr><td>Field of View</td><td>Camera crop</td><td>~110° horizontal spatial coverage</td></tr>
                    <tr><td>Collaboration</td><td>Limited multi-user</td><td>SharePlay spatial personas</td></tr>
                    <tr><td>Eye Tracking</td><td>No</td><td>High-precision iris-level tracking</td></tr>
                    <tr><td>Privacy</td><td>Camera feed</td><td>Isolated eye tracking; apps cannot see eyes</td></tr>
                    <tr><td>iOS App Compat</td><td>Native</td><td>iPadOS apps run in compatibility mode</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="reveal">
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 18 }}>
                  In 2026, Vision Pro is an important strategic consideration — but most AR apps should still be designed primarily for iPhone/iPad with Vision Pro as a platform extension rather than primary target. The install base is growing but remains small relative to the billions of ARKit-capable iPhones. Build for iPhone AR first; design your architecture so that a Vision Pro port is a natural extension, not a rebuild.
                </p>
                <div style={{ background: '#0f2a0f', border: '1px solid #22c55e33', borderRadius: 16, padding: '18px 22px' }}>
                  <p style={{ color: '#86efac', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    <strong style={{ color: '#22c55e' }}>Codazz Strategy:</strong> We use a &quot;iPhone AR first, visionOS ready&quot; architecture — building RealityKit-based experiences with SwiftUI that can be promoted to a Vision Pro native experience with targeted adaptations for eyes-and-hands input and spatial window layouts. This maximizes ROI while maintaining a clear Vision Pro upgrade path.
                  </p>
                </div>
              </div>
            </section>

            {/* Development Cost */}
            <section id="development-cost" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  AR App Development Cost Breakdown 2026
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 24 }}>
                  AR app costs vary enormously based on tracking complexity, 3D content volume, platform targets, and backend requirements. The single largest cost driver that teams underestimate: 3D asset creation. Every product, environment, or character that appears in AR must be built as a high-quality, optimized 3D model.
                </p>
              </div>

              <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 28, padding: 32, marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>AR App Cost by Project Type</h3>
                <table className="prose-table">
                  <thead>
                    <tr>
                      <th>Project Type</th>
                      <th>Timeline</th>
                      <th>Cost Range (USD)</th>
                      <th>Key Cost Drivers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>WebAR Campaign (8th Wall / Niantic)</td><td>4–8 weeks</td><td>$15,000–$40,000</td><td>3D assets, interaction design</td></tr>
                    <tr><td>Basic AR Feature (1 platform)</td><td>8–12 weeks</td><td>$30,000–$65,000</td><td>Tracking type, asset pipeline</td></tr>
                    <tr><td>Retail Try-On App (iOS + Android)</td><td>16–24 weeks</td><td>$80,000–$160,000</td><td>Face/body tracking, 3D asset catalog</td></tr>
                    <tr><td>AR Navigation / Geospatial</td><td>20–32 weeks</td><td>$100,000–$220,000</td><td>VPS integration, mapping, backend</td></tr>
                    <tr><td>Enterprise AR Platform</td><td>28–52 weeks</td><td>$200,000–$600,000+</td><td>BIM integration, multi-user, wearable hardware</td></tr>
                    <tr><td>Apple Vision Pro App</td><td>16–28 weeks</td><td>$90,000–$250,000</td><td>visionOS-native UX, 3D content, eye-hand input</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="reveal" style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 28, padding: 32, marginBottom: 28 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#22c55e', marginBottom: 20 }}>3D Asset Creation Cost Breakdown</h3>
                <table className="prose-table">
                  <thead>
                    <tr>
                      <th>Asset Type</th>
                      <th>Cost per Asset</th>
                      <th>Timeline</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Simple 3D Object (chair, lamp)</td><td>$200–$800</td><td>1–3 days</td><td>Manual modeling in Blender / Maya</td></tr>
                    <tr><td>Complex 3D Object (car, appliance)</td><td>$1,500–$5,000</td><td>5–15 days</td><td>High-poly + LOD versions required</td></tr>
                    <tr><td>Photogrammetry Scan</td><td>$500–$3,000</td><td>2–7 days</td><td>Requires physical product + scanning studio</td></tr>
                    <tr><td>Character / Avatar (rigged)</td><td>$3,000–$15,000</td><td>2–6 weeks</td><td>Rigging, blend shapes for expressions</td></tr>
                    <tr><td>Architectural Environment</td><td>$5,000–$30,000</td><td>3–8 weeks</td><td>From CAD/BIM or custom modeling</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Why Codazz */}
            <section id="why-codazz" style={{ marginBottom: 72 }}>
              <div className="reveal" style={{ background: 'linear-gradient(135deg, #0a1a0a 0%, #000 100%)', border: '1px solid #22c55e33', borderRadius: 28, padding: '44px 40px' }}>
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 16, color: '#f9fafb' }}>
                  Why Choose Codazz for AR App Development?
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 32 }}>
                  Codazz has delivered AR experiences for retail, construction, healthcare, and entertainment clients globally — from Edmonton, Canada and Chandigarh, India. Our AR practice spans the full stack: ARKit, ARCore, WebXR, Unity AR Foundation, RealityKit, visionOS, and enterprise AR on HoloLens.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
                  {[
                    { title: 'Native & Unity AR', desc: 'ARKit + RealityKit for iOS, ARCore + SceneView for Android, and Unity AR Foundation for cross-platform — we choose the right tool for your use case' },
                    { title: '3D Asset Pipeline', desc: 'In-house 3D modeling, photogrammetry, and asset optimization for web AR, mobile AR, and spatial computing' },
                    { title: 'Vision Pro Ready', desc: 'We design AR architectures that naturally extend to Apple Vision Pro visionOS native experiences' },
                    { title: 'Enterprise AR', desc: 'BIM integration, Cloud Anchors, multi-user AR, and HoloLens experiences for construction, manufacturing, and field service' },
                    { title: 'WebAR Campaigns', desc: '8th Wall and Niantic Lightship WebAR for no-install marketing experiences with broad device reach' },
                    { title: 'Retail & E-Commerce AR', desc: 'Virtual try-on, product visualization, and AR commerce integrations that measurably reduce returns and increase conversion' },
                  ].map(point => (
                    <div key={point.title} style={{ background: '#0a0a0a', borderRadius: 16, padding: '18px 20px', border: '1px solid #1a1a1a' }}>
                      <div style={{ fontWeight: 700, color: '#22c55e', marginBottom: 8, fontSize: '0.9rem' }}>{point.title}</div>
                      <div style={{ color: '#6b7280', fontSize: '0.82rem', lineHeight: 1.55 }}>{point.desc}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ background: '#22c55e', color: '#000', fontWeight: 700, padding: '14px 32px', borderRadius: 50, textDecoration: 'none', fontSize: '0.95rem' }}>
                    Get a Free AR Consultation
                  </Link>
                  <Link href="/services/ar-vr" style={{ border: '1px solid #22c55e', color: '#22c55e', fontWeight: 600, padding: '14px 28px', borderRadius: 50, textDecoration: 'none', fontSize: '0.95rem' }}>
                    View AR/VR Services
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" style={{ marginBottom: 72 }}>
              <div className="reveal">
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: 28, color: '#f9fafb' }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ border: '1px solid #1a1a1a', borderRadius: 20, overflow: 'hidden' }}>
                  {[
                    {
                      q: 'What is the difference between AR, VR, and MR (Mixed Reality)?',
                      a: 'Augmented Reality (AR) overlays digital content on the real world — the real environment is still visible and dominant. Virtual Reality (VR) replaces your entire field of view with a fully digital environment. Mixed Reality (MR) is a subset of AR where digital objects are anchored in physical space and can interact with real-world objects — think Apple Vision Pro, where a digital window appears to sit on your real desk. In 2026, most mobile "AR" apps are technically MR, and the terms are often used interchangeably in consumer contexts.'
                    },
                    {
                      q: 'Should I build a native AR app or use WebAR?',
                      a: 'WebAR is ideal for marketing campaigns, product launches, and experiences where removing the install barrier is critical. It reaches users instantly via a URL but sacrifices depth of tracking, performance, and access to advanced platform features like LIDAR and HealthKit. Native AR (ARKit, ARCore) is the right choice for production apps where tracking accuracy, performance, offline capability, and access to full platform APIs are required. Our typical recommendation: use WebAR for acquisition and top-of-funnel experiences; native AR for the core product experience.'
                    },
                    {
                      q: 'How long does it take to build an AR app?',
                      a: 'A basic AR feature for a single platform — like placing a single 3D object on a flat surface — takes 8–12 weeks including QA and app store submission. A full retail AR try-on experience for both iOS and Android, with a 3D asset pipeline and backend, takes 16–24 weeks. Enterprise AR platforms with BIM integration, multi-user cloud anchors, and custom hardware integration can take 12–18 months. The 3D asset pipeline is consistently the largest schedule risk — getting high-quality, AR-optimized 3D models takes time and should start as early as possible.'
                    },
                    {
                      q: 'Do AR apps work on all smartphones?',
                      a: 'ARKit requires iOS 11 or later on iPhones from iPhone 6s onward — covering virtually the entire active iOS install base. ARCore requires Android 7.0+ on certified devices — covering approximately 1 billion Android devices as of 2026, though not all Android phones are ARCore-certified. Advanced features like LIDAR-based room scanning require iPhone 12 Pro/Pro Max or later. For maximum reach, designing with graceful degradation — full LIDAR experience on capable devices, fallback to standard plane detection on others — is the best approach.'
                    },
                    {
                      q: 'How do I monetize an AR app?',
                      a: 'AR app monetization follows standard mobile app models: in-app purchases (premium 3D content, filters, environments), subscription tiers (AR feature unlocks for professional users), B2B SaaS licensing (enterprise AR platforms), advertising (branded AR experiences, sponsored try-on items), and e-commerce integration (direct purchase buttons within the AR experience). The most successful retail AR apps treat the AR experience as a conversion funnel step, not a standalone revenue center — measuring success by its impact on purchase rates and return reduction, not by direct AR feature revenue.'
                    },
                  ].map((item, i) => (
                    <details key={i} className="faq-item" style={{ borderBottom: i < 4 ? '1px solid #1a1a1a' : 'none', padding: '0 24px' }}>
                      <summary>
                        <span>{item.q}</span>
                        <span style={{ color: '#22c55e', fontSize: '1.2rem' }}>+</span>
                      </summary>
                      <p style={{ color: '#9ca3af', lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* Related Posts */}
            <div className="reveal" style={{ borderTop: '1px solid #1a1a1a', paddingTop: 40 }}>
              <h3 style={{ fontWeight: 700, color: '#f9fafb', marginBottom: 20, fontSize: '1.1rem' }}>Related Articles</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                {relatedPosts.map(post => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 16, padding: '20px 22px', display: 'block' }}>
                    <div style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 600, marginBottom: 8 }}>{post.category} · {post.readTime}</div>
                    <div style={{ color: '#f9fafb', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.4 }}>{post.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* TOC Sidebar */}
          <aside style={{ position: 'sticky', top: 100, height: 'fit-content' }}>
            <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 20, padding: '22px 16px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14, paddingLeft: 12 }}>Table of Contents</div>
              {tocSections.map(s => (
                <a key={s.id} href={`#${s.id}`} className={`toc-link${activeSection === s.id ? ' active' : ''}`}>
                  <span>{s.emoji}</span>
                  <span>{s.label}</span>
                </a>
              ))}
              <div style={{ marginTop: 20, padding: '16px', background: '#0f2a0f', borderRadius: 14, textAlign: 'center' }}>
                <div style={{ fontSize: '0.8rem', color: '#86efac', marginBottom: 10, fontWeight: 600 }}>Build Your AR App</div>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', fontWeight: 700, padding: '10px 20px', borderRadius: 50, textDecoration: 'none', fontSize: '0.82rem', display: 'block' }}>
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </aside>
        </main>

        <Footer />
      </div>
    </>
  );
}
