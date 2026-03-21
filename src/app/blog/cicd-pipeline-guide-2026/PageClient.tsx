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
  { id: 'cicd-concepts', label: 'CI/CD Concepts', emoji: '🔄' },
  { id: 'tool-comparison', label: 'Tools: GitHub vs Jenkins vs GitLab', emoji: '⚔️' },
  { id: 'pipeline-stages', label: 'Pipeline Stages', emoji: '🏗️' },
  { id: 'docker-cicd', label: 'Docker in CI/CD', emoji: '🐳' },
  { id: 'environments', label: 'Environment Management', emoji: '🌿' },
  { id: 'deployment-strategies', label: 'Blue-Green & Canary', emoji: '🚀' },
  { id: 'secrets', label: 'Secrets Management', emoji: '🔒' },
  { id: 'performance', label: 'Pipeline Performance', emoji: '⚡' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'aws-architecture-guide-2026', title: 'AWS Architecture Best Practices 2026', category: 'Cloud', readTime: '22 min' },
  { slug: 'microservices-vs-monolith-2026', title: 'Microservices vs Monolith 2026', category: 'Architecture', readTime: '18 min' },
  { slug: 'python-vs-nodejs-backend-2026', title: 'Python vs Node.js for Backend 2026', category: 'Engineering', readTime: '13 min' },
];

export default function CicdPipelineGuide2026Client() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
              src="/blog_images/cicd-pipeline-guide-2026.jpg"
              alt="CI/CD pipeline best practices GitHub Actions Jenkins GitLab 2026"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 28px)',
              }}
            />
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(40px, 8vw, 80px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
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
              }}>DevOps</span>
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
                20 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              CI/CD Pipeline Best Practices 2026: GitHub Actions, Jenkins &amp; GitLab
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A complete guide to building production-grade CI/CD pipelines in 2026. Compares GitHub Actions, Jenkins, GitLab CI, and CircleCI. Covers pipeline stages, Docker integration, blue-green and canary deployments, secrets management, and pipeline optimization techniques that cut build times by 60%.
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
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
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
                    Shipping software used to mean developers pushing directly to servers at 2am on a Friday. In 2026, that approach is considered reckless. CI/CD (Continuous Integration / Continuous Delivery) pipelines automate building, testing, and deploying code — turning a dangerous manual process into a reliable, repeatable system.
                  </p>
                  <p>
                    The difference between a team that ships daily and a team that ships monthly often comes down to CI/CD maturity. Teams with solid pipelines catch bugs before production, deploy with confidence, and spend their time building features rather than fighting fires.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we&apos;ve built CI/CD pipelines for 50+ products across GitHub Actions, GitLab CI, Jenkins, and CircleCI. Here&apos;s everything we&apos;ve learned.
                  </p>
                </div>

                {/* Section: CI/CD Concepts */}
                <h2 id="cicd-concepts" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>CI/CD Concepts: What They Actually Mean</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    These terms are often used interchangeably but have distinct meanings. Understanding the distinction shapes how you design your pipeline:
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      {
                        term: 'Continuous Integration (CI)',
                        color: '#3b82f6',
                        def: 'Developers merge code to a shared branch frequently (multiple times per day). Each merge triggers an automated build and test suite. The goal: catch integration bugs early, before they compound.',
                        key: 'Key metric: Time from commit to test results. Target: under 10 minutes.',
                      },
                      {
                        term: 'Continuous Delivery (CD)',
                        color: '#8b5cf6',
                        def: 'Every passing CI build produces a deployable artifact. Deployment to staging is automatic. Deployment to production requires a human approval step. The codebase is always in a deployable state.',
                        key: 'Key metric: Deployment frequency. Target: deploy to staging on every merge.',
                      },
                      {
                        term: 'Continuous Deployment',
                        color: '#22c55e',
                        def: 'The next step beyond Delivery — every passing pipeline run is automatically deployed to production with no human approval. Requires extremely high test coverage and robust monitoring/rollback capabilities.',
                        key: 'Key metric: Change failure rate. Target: < 1% of deployments cause production incidents.',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 24, borderRadius: 16,
                        border: `1px solid ${item.color}22`,
                        borderLeft: `4px solid ${item.color}`,
                      }}>
                        <h3 style={{ color: item.color, fontSize: 18, fontWeight: 700, margin: '0 0 12px' }}>{item.term}</h3>
                        <p style={{ fontSize: 15, margin: '0 0 12px', lineHeight: 1.7 }}>{item.def}</p>
                        <p style={{ fontSize: 13, margin: 0, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>{item.key}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Tool Comparison */}
                <h2 id="tool-comparison" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>GitHub Actions vs Jenkins vs GitLab CI vs CircleCI</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    The right CI/CD tool depends on your team size, budget, existing infrastructure, and how much you want to self-manage. Here&apos;s an honest comparison:
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Factor</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>GitHub Actions</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#f59e0b', fontSize: 14 }}>Jenkins</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#f97316', fontSize: 14 }}>GitLab CI</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#3b82f6', fontSize: 14 }}>CircleCI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Hosting', 'Managed (GitHub)', 'Self-hosted', 'Managed or self-hosted', 'Managed'],
                          ['Cost', 'Free (2,000 min/mo), then $0.008/min', 'Free (infra cost only)', 'Free tier, $19/mo+', '$15/mo per user'],
                          ['Setup time', '5 minutes', '2-4 hours + plugins', '15 minutes', '10 minutes'],
                          ['Config format', 'YAML (.github/workflows)', 'Groovy (Jenkinsfile)', 'YAML (.gitlab-ci.yml)', 'YAML (config.yml)'],
                          ['Ecosystem', '20,000+ marketplace actions', 'Largest plugin library', 'Built-in GitLab features', 'Orbs marketplace'],
                          ['Self-hosted runners', 'Yes (GitHub Actions Runner)', 'Yes (native)', 'Yes (GitLab Runner)', 'Yes (self-hosted)'],
                          ['Docker support', 'Excellent (native)', 'Good (Docker plugin)', 'Excellent (native)', 'Excellent (native)'],
                          ['Best for', 'GitHub-native teams, OSS', 'Enterprise, complex pipelines', 'GitLab users, full DevSecOps', 'Speed, developer experience'],
                        ].map(([factor, gh, jenkins, gitlab, circle], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 8px', color: '#ffffff', fontWeight: 600, fontSize: 13 }}>{factor}</td>
                            <td style={{ padding: '12px 8px', fontSize: 12 }}>{gh}</td>
                            <td style={{ padding: '12px 8px', fontSize: 12 }}>{jenkins}</td>
                            <td style={{ padding: '12px 8px', fontSize: 12 }}>{gitlab}</td>
                            <td style={{ padding: '12px 8px', fontSize: 12 }}>{circle}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 24, marginBottom: 40,
                  border: '1px solid rgba(34,197,94,0.15)',
                }}>
                  <h4 style={{ color: '#22c55e', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Our Recommendation at Codazz</h4>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                    <strong style={{ color: '#ffffff' }}>GitHub Actions</strong> is the default for most teams in 2026. It&apos;s zero-config for GitHub users, has the largest action marketplace, and the free tier covers most startups. Use <strong style={{ color: '#ffffff' }}>Jenkins</strong> if you have complex enterprise requirements or need to run on proprietary infrastructure. Use <strong style={{ color: '#ffffff' }}>GitLab CI</strong> if your team is on GitLab — the integrated DevSecOps platform is genuinely excellent. Use <strong style={{ color: '#ffffff' }}>CircleCI</strong> for the best raw pipeline performance and developer experience.
                  </p>
                </div>

                {/* Section: Pipeline Stages */}
                <h2 id="pipeline-stages" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Pipeline Stages: Build, Test, Security Scan, Deploy</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    A production-grade pipeline has distinct stages that run in sequence. Each stage acts as a quality gate — if it fails, the pipeline stops. Here&apos;s the standard flow with GitHub Actions:
                  </p>

                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24, marginTop: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  # Stage 1: Build & Lint
  build:
    runs-on: ubuntu-latest
    outputs:
      image-tag: \${{ steps.meta.outputs.tags }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build

  # Stage 2: Test (unit + integration, parallel)
  test:
    needs: build
    runs-on: ubuntu-latest
    strategy:
      matrix:
        test-suite: [unit, integration, e2e]
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run test:\${{ matrix.test-suite }}
        env:
          DATABASE_URL: postgresql://postgres:test@localhost/test
      - uses: codecov/codecov-action@v4

  # Stage 3: Security Scan
  security:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # Dependency vulnerability scan
      - run: npm audit --audit-level=high
      # SAST: Static Application Security Testing
      - uses: github/codeql-action/init@v3
        with: { languages: javascript-typescript }
      - uses: github/codeql-action/analyze@v3
      # Container image vulnerability scan
      - uses: aquasecurity/trivy-action@master
        with:
          image-ref: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
          severity: CRITICAL,HIGH
          exit-code: '1'

  # Stage 4: Build & Push Docker Image
  docker:
    needs: [test, security]
    runs-on: ubuntu-latest
    if: github.event_name == 'push'
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          registry: \${{ env.REGISTRY }}
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  # Stage 5: Deploy to Staging
  deploy-staging:
    needs: docker
    runs-on: ubuntu-latest
    environment: staging
    if: github.ref == 'refs/heads/develop'
    steps:
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: \${{ secrets.AWS_STAGING_ROLE }}
          aws-region: us-east-1
      - run: |
          aws ecs update-service \\
            --cluster staging \\
            --service api \\
            --force-new-deployment

  # Stage 6: Deploy to Production (requires approval)
  deploy-production:
    needs: docker
    runs-on: ubuntu-latest
    environment: production  # GitHub environment with required reviewers
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: \${{ secrets.AWS_PROD_ROLE }}
          aws-region: us-east-1
      - run: |
          aws ecs update-service \\
            --cluster production \\
            --service api \\
            --force-new-deployment`}</pre>
                  </div>
                </div>

                {/* Section: Docker in CI/CD */}
                <h2 id="docker-cicd" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Docker in CI/CD: Best Practices</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Docker is the standard packaging format for CI/CD in 2026. A well-crafted Dockerfile is the difference between 2-minute builds and 15-minute builds.
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      {
                        title: 'Multi-Stage Builds: Reduce Image Size by 80%',
                        detail: 'Use separate build and runtime stages. The build stage installs all dev dependencies and compiles code. The runtime stage copies only the compiled output. A Node.js app built this way goes from 1.2GB to 150MB — faster pull times, smaller attack surface, lower registry costs.',
                      },
                      {
                        title: 'Layer Caching: The Biggest Build Speed Win',
                        detail: 'Copy package.json BEFORE copying source code. Docker caches layers — if package.json hasn\'t changed, npm install is skipped. With BuildKit cache mounts (--mount=type=cache), you can cache the node_modules directory across builds even on ephemeral CI runners. Typical savings: 60-70% of build time.',
                      },
                      {
                        title: '.dockerignore: Keep the Context Small',
                        detail: 'Exclude node_modules, .git, *.log, coverage/, .env files, and test artifacts from the build context. A large build context (even if files aren\'t copied) slows down image builds. A proper .dockerignore cuts build context from 500MB to under 10MB.',
                      },
                      {
                        title: 'Scan Images Before Pushing',
                        detail: 'Use Trivy, Snyk, or AWS ECR Enhanced Scanning to scan container images for vulnerabilities before they reach your registry. Block pushes for CRITICAL severity findings. Scan base images weekly even without code changes — vulnerabilities are discovered in base images continuously.',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.7 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Production Dockerfile: Node.js App</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# Multi-stage Dockerfile: Node.js API
# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Cache mount: reuse node_modules across builds
RUN --mount=type=cache,target=/root/.npm \\
    npm ci --only=production

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \\
    npm ci
COPY . .
RUN npm run build

# Stage 3: Runtime (minimal image)
FROM node:20-alpine AS runner
WORKDIR /app

# Security: non-root user
RUN addgroup --system --gid 1001 nodejs && \\
    adduser --system --uid 1001 nextjs

# Copy only what's needed
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000
ENV NODE_ENV=production PORT=3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \\
  CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["node", "dist/index.js"]`}</pre>
                  </div>
                </div>

                {/* Section: Environments */}
                <h2 id="environments" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Environment Management: Dev / Staging / Production</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Environment isolation prevents the classic &ldquo;it worked on staging&rdquo; failures. Each environment should be as identical to production as possible, differing only in scale and data.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Aspect</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: 14 }}>Development</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#f59e0b', fontSize: 14 }}>Staging</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>Production</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Deployment trigger', 'Manual / hot reload', 'Auto on develop merge', 'Manual approval after staging'],
                          ['Data', 'Seeded fake data', 'Anonymized production copy', 'Real user data'],
                          ['Scale', '1 instance', '1-2 instances (scaled down)', 'Auto-scaling (2-N instances)'],
                          ['Secrets', 'Local .env file', 'Secrets Manager (staging)', 'Secrets Manager (prod)'],
                          ['Monitoring', 'Console logs', 'Full monitoring (lower alerts)', 'Full monitoring + PagerDuty'],
                          ['Feature flags', 'All flags enabled', 'Test specific flags', 'Controlled rollout'],
                          ['External services', 'Mock / sandbox APIs', 'Vendor sandbox/test accounts', 'Production API keys'],
                        ].map(([aspect, dev, staging, prod], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 8px', color: '#ffffff', fontWeight: 600, fontSize: 13 }}>{aspect}</td>
                            <td style={{ padding: '12px 8px', fontSize: 12 }}>{dev}</td>
                            <td style={{ padding: '12px 8px', fontSize: 12 }}>{staging}</td>
                            <td style={{ padding: '12px 8px', fontSize: 12 }}>{prod}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section: Deployment Strategies */}
                <h2 id="deployment-strategies" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Deployment Strategies: Blue-Green &amp; Canary</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    How you deploy is as important as what you deploy. The right strategy eliminates downtime and limits blast radius when something goes wrong.
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginTop: 24 }}>
                    {[
                      {
                        name: 'Rolling Deployment',
                        color: '#6b7280',
                        risk: 'Medium',
                        downtime: 'Zero',
                        howItWorks: 'Replace instances one-by-one. Old and new version run simultaneously during rollout. Simple to set up with ECS or Kubernetes. No extra infrastructure cost.',
                        whenToUse: 'Default for most applications. Good when new and old versions are backward compatible.',
                        weakness: 'Rollback requires another rolling deployment. Some requests may hit old or new version randomly during rollout.',
                      },
                      {
                        name: 'Blue-Green Deployment',
                        color: '#22c55e',
                        risk: 'Low',
                        downtime: 'Zero',
                        howItWorks: 'Maintain two identical environments (blue = live, green = new). Deploy new version to green, run smoke tests, then switch the load balancer from blue to green in seconds. Instant rollback: switch back to blue.',
                        whenToUse: 'High-stakes releases, database schema changes, zero-downtime requirement.',
                        weakness: '2x infrastructure cost during deployment. Database migrations require careful management.',
                      },
                      {
                        name: 'Canary Deployment',
                        color: '#f59e0b',
                        risk: 'Very Low',
                        downtime: 'Zero',
                        howItWorks: 'Route a small percentage of traffic (1%, 5%, 10%) to the new version. Monitor error rates and performance. Gradually increase traffic if metrics look healthy. Automatic rollback if error threshold is exceeded.',
                        whenToUse: 'Major changes, new features with uncertain performance characteristics, very high-traffic systems.',
                        weakness: 'Complex to set up. Requires robust metrics and alerting. Not suitable for breaking API changes.',
                      },
                    ].map((strategy, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 24, borderRadius: 16,
                        border: `1px solid ${strategy.color}33`,
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                          <h3 style={{ color: strategy.color, fontSize: 20, fontWeight: 700, margin: 0 }}>{strategy.name}</h3>
                          <div style={{ display: 'flex', gap: 8 }}>
                            <span style={{ fontSize: 12, padding: '4px 10px', borderRadius: 100, background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)' }}>Risk: {strategy.risk}</span>
                            <span style={{ fontSize: 12, padding: '4px 10px', borderRadius: 100, background: 'rgba(34,197,94,0.1)', color: '#22c55e' }}>Downtime: {strategy.downtime}</span>
                          </div>
                        </div>
                        <p style={{ fontSize: 14, margin: '0 0 10px', lineHeight: 1.7 }}><strong style={{ color: '#ffffff' }}>How it works:</strong> {strategy.howItWorks}</p>
                        <p style={{ fontSize: 14, margin: '0 0 10px', lineHeight: 1.7 }}><strong style={{ color: '#ffffff' }}>When to use:</strong> {strategy.whenToUse}</p>
                        <p style={{ fontSize: 14, margin: 0, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}><strong style={{ color: 'rgba(255,255,255,0.6)' }}>Watch out for:</strong> {strategy.weakness}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Secrets Management */}
                <h2 id="secrets" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Secrets Management in CI/CD Pipelines</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Leaked secrets in CI/CD pipelines are one of the most common causes of security breaches. In 2026, every CI/CD tool has native secret storage — there is no excuse for hardcoding credentials.
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      {
                        title: 'Never Use Static Long-Lived Credentials',
                        detail: 'Instead of AWS Access Key ID + Secret, use OIDC (OpenID Connect) to let GitHub Actions/GitLab CI assume an IAM role directly. No secrets to store, no secrets to rotate, no secrets to leak. GitHub Actions and most CI providers support OIDC with AWS, GCP, and Azure natively.',
                      },
                      {
                        title: 'Use Your CI Tool\'s Native Secret Storage',
                        detail: 'GitHub Actions Secrets, GitLab CI Variables, and Jenkins Credentials are encrypted at rest and injected at runtime. Secrets are masked in logs. Scope secrets to specific environments (staging secrets != production secrets). Rotate secrets on a schedule — most breaches use old, forgotten credentials.',
                      },
                      {
                        title: 'Runtime Secrets: Fetch from Vault',
                        detail: 'For production, don\'t inject secrets as environment variables at all. Instead, have your application fetch secrets from AWS Secrets Manager, HashiCorp Vault, or GCP Secret Manager at startup. This gives you audit logs, fine-grained access control, and instant revocation if a secret is compromised.',
                      },
                      {
                        title: 'Secret Scanning: Block Accidental Commits',
                        detail: 'Enable GitHub Advanced Security Secret Scanning to detect accidentally committed API keys, passwords, and tokens. Install pre-commit hooks with detect-secrets or gitleaks locally. AWS, Stripe, GitHub, and Slack all partner with GitHub to automatically revoke secrets that are committed publicly.',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#22c55e', marginBottom: 8, marginTop: 0, fontSize: 15 }}>{item.title}</h4>
                        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.7 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>GitHub Actions: OIDC Authentication with AWS (No Static Keys)</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# GitHub Actions: OIDC — no long-lived AWS credentials needed
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write   # Required for OIDC
      contents: read

    steps:
      - uses: actions/checkout@v4

      # Assume IAM role via OIDC — no secrets stored in GitHub
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789:role/GitHubActionsDeployRole
          role-session-name: GitHubActions
          aws-region: us-east-1
          # The role is only assumable by this specific GitHub repo + branch

      # Fetch application secrets at runtime from Secrets Manager
      - name: Get secrets
        run: |
          DATABASE_URL=$(aws secretsmanager get-secret-value \\
            --secret-id prod/app/database-url \\
            --query SecretString --output text)
          echo "::add-mask::\$DATABASE_URL"
          echo "DATABASE_URL=\$DATABASE_URL" >> \$GITHUB_ENV

      - run: ./deploy.sh`}</pre>
                  </div>
                </div>

                {/* Section: Performance */}
                <h2 id="performance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Pipeline Performance Optimization</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Slow pipelines kill developer productivity. Every extra minute waiting for a build is a context switch, a coffee break, and a distraction. Here are the highest-impact optimizations:
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Optimization</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>Typical Time Savings</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Difficulty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Parallelize test suites with matrix strategy', '40-60%', 'Low'],
                          ['Docker layer caching (BuildKit + GHA cache)', '50-70% of Docker build time', 'Low'],
                          ['Dependency caching (npm, pip, Gradle)', '30-50% of install time', 'Low'],
                          ['Run security scans in parallel with tests', '20-30% of total pipeline', 'Low'],
                          ['Incremental builds (only rebuild changed packages)', '60-80% on monorepos', 'Medium'],
                          ['Self-hosted runners (more CPU, no queue wait)', '20-50% overall', 'Medium'],
                          ['Test sharding (split tests across runners)', '50-70% of test time', 'Medium'],
                          ['Skip unchanged services (turborepo, nx)', '70-90% on monorepos', 'High'],
                        ].map(([opt, savings, diff], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{opt}</td>
                            <td style={{ padding: '12px 8px', color: '#22c55e', fontWeight: 600, fontSize: 13 }}>{savings}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13, color: diff === 'Low' ? '#22c55e' : diff === 'Medium' ? '#f59e0b' : '#f97316' }}>{diff}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 24, marginBottom: 40,
                  border: '1px solid rgba(34,197,94,0.15)',
                }}>
                  <h4 style={{ color: '#22c55e', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Real World Result</h4>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                    A client came to us with a 45-minute CI pipeline that ran all tests sequentially on a single runner. By implementing parallel test matrix (3 runners), Docker layer caching, and dependency caching, we cut pipeline time to 8 minutes. Developer satisfaction went up, and deployment frequency doubled within a month.
                  </p>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  {
                    q: 'What is the difference between GitHub Actions and Jenkins in 2026?',
                    a: 'GitHub Actions is a managed, cloud-hosted CI/CD service tightly integrated with GitHub. It requires zero infrastructure management and has 20,000+ pre-built actions. Jenkins is self-hosted, free, and highly customizable but requires significant setup and ongoing maintenance. In 2026, GitHub Actions is the better default for most teams. Jenkins makes sense for complex enterprise pipelines, regulated industries requiring on-premise infrastructure, or teams with existing Jenkins expertise and investment.',
                  },
                  {
                    q: 'How long should a CI/CD pipeline take?',
                    a: 'Target under 10 minutes for CI (commit to test results) and under 15 minutes for full CD (commit to production-ready artifact). Pipelines over 20 minutes significantly harm developer productivity — developers context-switch and lose flow. If your pipeline is slow, parallelize test suites, add Docker layer caching, and cache dependencies. These three changes typically cut pipeline time by 60-70%.',
                  },
                  {
                    q: 'What is blue-green deployment and when should I use it?',
                    a: 'Blue-green deployment maintains two identical environments. The live version is blue, the new version is green. You deploy to green, run smoke tests, then switch the load balancer to green instantly. Rollback is equally instant — switch back to blue. Use blue-green for high-stakes releases, database migrations, and any time you need guaranteed zero-downtime rollback. The cost is running two environments simultaneously during deployment (typically minutes to hours).',
                  },
                  {
                    q: 'How should I manage secrets in CI/CD pipelines?',
                    a: 'Never hardcode secrets. Use OIDC (OpenID Connect) to let your CI system assume cloud IAM roles without storing static credentials. Store application secrets in your cloud provider\'s secrets manager (AWS Secrets Manager, GCP Secret Manager, Azure Key Vault). Use your CI tool\'s built-in secret storage for any credentials that must be stored there — scope them to specific environments and rotate them on a schedule. Enable secret scanning to catch accidental commits.',
                  },
                  {
                    q: 'Should I use canary or blue-green deployments for production?',
                    a: 'Canary deployments are better for large-scale systems where you want to test new versions on a subset of real traffic before full rollout. They require sophisticated monitoring and automated rollback triggers. Blue-green is simpler, has instant rollback, but costs more (two full environments). For most startups and mid-size companies, blue-green with good smoke tests is the right choice. Switch to canary when you have high traffic volume, mature observability, and the team has the operational maturity to manage gradual rollouts.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 28, padding: 40, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Need Help Building Your CI/CD Pipeline?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
                    We design and implement production-grade CI/CD pipelines for startups and enterprises. From GitHub Actions setup to multi-environment deployments with canary releases and automated rollbacks.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '16px 32px', borderRadius: 12,
                    fontWeight: 700, textDecoration: 'none', fontSize: 16,
                    transition: 'transform 0.2s',
                  }}>
                    Get a Free CI/CD Pipeline Review
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 0', fontSize: 14,
                          color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          display: 'block', padding: 16,
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: 12, textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.06)',
                          transition: 'all 0.2s',
                        }}>
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
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
