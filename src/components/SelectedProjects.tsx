'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, PanInfo } from 'framer-motion';

export interface ProjectItem {
  title: string;
  subtitle: string;
  desc: string;
  results: string[];
  techStack: string[];
  industry: string;
  color: string;
}

interface SelectedProjectsProps {
  projects: ProjectItem[];
  title?: string;
  subtitle?: string;
}

function ProjectCard({ project, index, isActive }: { project: ProjectItem; index: number; isActive: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        flex: '0 0 auto',
        width: 'clamp(320px, 45vw, 520px)',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      <motion.div
        animate={{
          y: isHovered ? -12 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: isHovered
            ? `0 32px 64px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), 0 0 40px ${project.color}20`
            : '0 8px 32px -8px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Image/Gradient Header */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '16/10',
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${project.color}15 0%, rgba(0,0,0,0.5) 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Animated background pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${project.color.slice(1)}' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.6,
            }}
          />

          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8) 100%)`,
              pointerEvents: 'none',
            }}
          />

          {/* Industry badge */}
          <span
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              padding: '6px 14px',
              borderRadius: 100,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(10px)',
              color: 'rgba(255,255,255,0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {project.industry}
          </span>

          {/* Project number */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.5 }}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              fontSize: 14,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'monospace',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 28px 28px' }}>
          <div style={{ marginBottom: 12 }}>
            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 1.75rem)',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                margin: '0 0 4px 0',
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.5)',
                margin: 0,
                fontWeight: 500,
              }}
            >
              {project.subtitle}
            </p>
          </div>

          <p
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
              margin: '0 0 20px 0',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.desc}
          </p>

          {/* Results metrics */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
              Results
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
              {project.results.map((result) => (
                <div
                  key={result}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 8,
                    background: `${project.color}10`,
                    border: `1px solid ${project.color}20`,
                    fontSize: 12,
                    fontWeight: 600,
                    color: project.color,
                  }}
                >
                  {result}
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              paddingTop: 16,
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
              Tech
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 24,
            pointerEvents: 'none',
            boxShadow: `inset 0 0 0 1px ${project.color}40`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function SelectedProjects({ projects, title = 'Selected Projects', subtitle = 'Latest Work' }: SelectedProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  // Check scroll bounds
  const checkScrollBounds = useCallback(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    setCanScrollLeft(scrollEl.scrollLeft > 10);
    setCanScrollRight(scrollEl.scrollLeft < scrollEl.scrollWidth - scrollEl.clientWidth - 10);
  }, []);

  // Update active index based on scroll position
  const handleScroll = useCallback(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    checkScrollBounds();
    const cardWidth = scrollEl.scrollWidth / projects.length;
    const newIndex = Math.round(scrollEl.scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, projects.length - 1));
  }, [projects.length, checkScrollBounds]);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    checkScrollBounds();
    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, [handleScroll, checkScrollBounds]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollEl = scrollRef.current;
      if (!scrollEl) return;
      const cardWidth = 520 + 24;
      if (e.key === 'ArrowRight') {
        scrollEl.scrollBy({ left: cardWidth, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        scrollEl.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Drag handling
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    if (Math.abs(velocity) > 500 || Math.abs(offset) > 100) {
      const direction = velocity > 0 || offset > 0 ? -1 : 1;
      const cardWidth = scrollEl.scrollWidth / projects.length;
      scrollEl.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    const cardWidth = scrollEl.scrollWidth / projects.length;
    scrollEl.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="section-padding"
      style={{
        position: 'relative',
        background: '#000000',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(ellipse at 30% 50%, rgba(34,197,94,0.03) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(59,130,246,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: 16,
              }}
            >
              {title}
            </motion.div>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 500,
                color: '#ffffff',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              {subtitle}
            </h2>
          </div>

          {/* Navigation arrows */}
          <div style={{ display: 'flex', gap: 12 }}>
            <motion.button
              aria-label="Previous project"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={!canScrollLeft}
              style={{
                width: 48,
                height: 48,
                borderRadius: 50,
                border: '1px solid rgba(255,255,255,0.1)',
                background: canScrollLeft ? 'rgba(255,255,255,0.05)' : 'transparent',
                cursor: canScrollLeft ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: canScrollLeft ? 1 : 0.3,
                transition: 'all 0.3s ease',
                color: '#ffffff',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              aria-label="Next project"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToIndex(Math.min(projects.length - 1, activeIndex + 1))}
              disabled={!canScrollRight}
              style={{
                width: 48,
                height: 48,
                borderRadius: 50,
                border: '1px solid rgba(255,255,255,0.1)',
                background: canScrollRight ? 'rgba(255,255,255,0.05)' : 'transparent',
                cursor: canScrollRight ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: canScrollRight ? 1 : 0.3,
                transition: 'all 0.3s ease',
                color: '#ffffff',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Category marquee */}
        <div
          style={{
            overflow: 'hidden',
            marginBottom: 'clamp(28px, 4vw, 44px)',
            maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 0,
              animation: 'latest-work-marquee 25s linear infinite',
              width: 'max-content',
            }}
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                style={{
                  display: 'flex',
                  gap: 0,
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                {[
                  '📱 Mobile Apps',
                  '🌐 Web Platforms',
                  '🤖 AI Products',
                  '💰 FinTech',
                  '🏥 HealthTech',
                  '🛒 E-Commerce',
                  '📚 EdTech',
                  '🚚 Logistics',
                  '🏠 Real Estate',
                  '🎮 Gaming',
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '8px 20px',
                      marginRight: 12,
                      borderRadius: 100,
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.55)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
                <span style={{ display: 'inline-block', width: 32, flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          ref={scrollRef}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{
            x: springX,
            cursor: isDragging ? 'grabbing' : 'grab',
            display: 'flex',
            gap: 24,
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '20px 0 40px',
            margin: '0 -20px',
            paddingLeft: 20,
            paddingRight: 20,
          }}
          className="hide-scrollbar"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isActive={index === activeIndex} />
          ))}
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginTop: 20,
          }}
        >
          <div
            style={{
              width: 200,
              height: 3,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 100,
              overflow: 'hidden',
            }}
          >
            <motion.div
              animate={{
                width: `${((activeIndex + 1) / projects.length) * 100}%`,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #22c55e, #4ade80)',
                borderRadius: 100,
              }}
            />
          </div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'monospace',
              minWidth: 50,
              textAlign: 'right',
            }}
          >
            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)',
            marginTop: 16,
          }}
          className="drag-hint"
        >
          Drag to explore or use arrow keys
        </motion.p>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes latest-work-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .drag-hint {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
