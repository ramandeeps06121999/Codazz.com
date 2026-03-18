'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Tech stack data organized by category
const techCategories = [
  {
    name: 'Frontend',
    color: '#61dafb',
    techs: [
      { name: 'React', icon: '⚛️', desc: 'Component-based UI library' },
      { name: 'Next.js', icon: '▲', desc: 'Full-stack React framework' },
      { name: 'TypeScript', icon: '◈', desc: 'Type-safe JavaScript' },
      { name: 'Tailwind', icon: '🌊', desc: 'Utility-first CSS' },
    ]
  },
  {
    name: 'Mobile',
    color: '#34d399',
    techs: [
      { name: 'Swift', icon: '🦉', desc: 'iOS native development' },
      { name: 'Kotlin', icon: '🟣', desc: 'Android modern language' },
      { name: 'Flutter', icon: '🦋', desc: 'Cross-platform SDK' },
      { name: 'React Native', icon: '📱', desc: 'Native mobile apps' },
    ]
  },
  {
    name: 'Backend',
    color: '#fbbf24',
    techs: [
      { name: 'Node.js', icon: '🟢', desc: 'JavaScript runtime' },
      { name: 'Python', icon: '🐍', desc: 'Versatile backend language' },
      { name: 'GraphQL', icon: '◈', desc: 'API query language' },
      { name: 'PostgreSQL', icon: '🐘', desc: 'Advanced SQL database' },
    ]
  },
  {
    name: 'AI / ML',
    color: '#a78bfa',
    techs: [
      { name: 'TensorFlow', icon: '🧠', desc: 'Machine learning platform' },
      { name: 'OpenAI', icon: '🤖', desc: 'AI model integration' },
      { name: 'PyTorch', icon: '🔥', desc: 'Deep learning framework' },
      { name: 'HuggingFace', icon: '🤗', desc: 'ML model hub' },
    ]
  },
  {
    name: 'Cloud',
    color: '#60a5fa',
    techs: [
      { name: 'AWS', icon: '☁️', desc: 'Cloud infrastructure' },
      { name: 'Google Cloud', icon: '🔷', desc: 'Enterprise cloud platform' },
      { name: 'Kubernetes', icon: '☸️', desc: 'Container orchestration' },
      { name: 'Docker', icon: '🐳', desc: 'Containerization platform' },
    ]
  },
  {
    name: 'Web3',
    color: '#f472b6',
    techs: [
      { name: 'Solidity', icon: '⬡', desc: 'Smart contract language' },
      { name: 'Ethereum', icon: '◆', desc: 'Blockchain platform' },
      { name: 'IPFS', icon: '📦', desc: 'Decentralized storage' },
      { name: 'Hardhat', icon: '⛑️', desc: 'Web3 dev environment' },
    ]
  },
];

const stats = [
  { value: '50+', label: 'Technologies' },
  { value: '7', label: 'Categories' },
  { value: '99.9%', label: 'Uptime' },
];

// 3D Card Component
function TechCard({ tech, categoryColor, index }: { tech: typeof techCategories[0]['techs'][0]; categoryColor: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
        style={{
          boxShadow: isHovered ? `0 0 40px ${categoryColor}20` : 'none',
        }}
      >
        {/* Glow effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${categoryColor}15, transparent 70%)`,
          }}
        />
        
        {/* Top accent line */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] transition-all duration-300 group-hover:w-20"
          style={{ background: categoryColor }}
        />

        {/* Icon */}
        <div className="relative mb-4">
          <motion.div
            animate={{ y: isHovered ? -8 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-4xl"
          >
            {tech.icon}
          </motion.div>
          
          {/* Floating particles on hover */}
          {isHovered && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: -20 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-2 w-1 h-1 rounded-full"
                style={{ background: categoryColor }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: -15, x: 10 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="absolute top-0 left-6 w-1.5 h-1.5 rounded-full"
                style={{ background: categoryColor }}
              />
            </>
          )}
        </div>

        {/* Tech name */}
        <h4 className="relative text-white font-semibold text-lg mb-1">
          {tech.name}
        </h4>

        {/* Description - reveals on hover */}
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            height: isHovered ? 'auto' : 0,
          }}
          transition={{ duration: 0.2 }}
          className="relative text-sm text-white/50 overflow-hidden"
        >
          {tech.desc}
        </motion.p>

        {/* Bottom corner accent */}
        <div 
          className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${categoryColor}10 50%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Category Section
function CategorySection({ category, index }: { category: typeof techCategories[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Category header */}
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-3 h-3 rounded-full"
          style={{ 
            background: category.color,
            boxShadow: `0 0 20px ${category.color}`,
          }}
        />
        <h3 className="text-2xl font-medium text-white tracking-tight">
          {category.name}
        </h3>
        <div 
          className="flex-1 h-px opacity-20"
          style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
        />
      </div>

      {/* Tech cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {category.techs.map((tech, techIndex) => (
          <TechCard 
            key={tech.name} 
            tech={tech} 
            categoryColor={category.color}
            index={techIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="tech-stack" 
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* Animated background glow following cursor */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.15), transparent 40%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-white/60 tracking-wide">Technology Foundation</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Built With the Tools
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              of Tomorrow
            </span>
          </h2>

          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            A curated stack of best-in-class technologies — chosen for reliability, 
            performance, and scalability.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-12 lg:gap-20 mb-20 flex-wrap"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/40 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {techCategories.map((category, index) => (
            <CategorySection 
              key={category.name} 
              category={category} 
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="text-white/60">Need a custom tech stack?</span>
            <a 
              href="/contact" 
              className="text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              Let&apos;s talk →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
