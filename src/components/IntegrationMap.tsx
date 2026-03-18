"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntegrationMapProps {
  className?: string;
}

interface TechNode {
  id: string;
  name: string;
  x: number;
  y: number;
  category: "frontend" | "backend" | "database" | "cloud";
  description: string;
  useCase: string;
  color: string;
}

interface Connection {
  from: string;
  to: string;
  label?: string;
}

const techNodes: TechNode[] = [
  {
    id: "react",
    name: "React",
    x: 25,
    y: 15,
    category: "frontend",
    description: "A JavaScript library for building user interfaces with reusable components.",
    useCase: "Dynamic UI components, state management, interactive dashboards",
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    x: 75,
    y: 15,
    category: "frontend",
    description: "React framework with server-side rendering and static site generation.",
    useCase: "SEO-optimized pages, API routes, full-stack React applications",
    color: "#FFFFFF",
  },
  {
    id: "nodejs",
    name: "Node.js",
    x: 50,
    y: 45,
    category: "backend",
    description: "JavaScript runtime built on Chrome's V8 engine for server-side execution.",
    useCase: "REST APIs, real-time services, server-side rendering",
    color: "#339933",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    x: 25,
    y: 75,
    category: "database",
    description: "Advanced open-source relational database with robust features.",
    useCase: "Structured data storage, complex queries, transactional systems",
    color: "#4169E1",
  },
  {
    id: "redis",
    name: "Redis",
    x: 75,
    y: 75,
    category: "database",
    description: "In-memory data structure store used as database, cache, and message broker.",
    useCase: "Session caching, real-time analytics, rate limiting, pub/sub",
    color: "#DC382D",
  },
  {
    id: "aws",
    name: "AWS",
    x: 50,
    y: 90,
    category: "cloud",
    description: "Comprehensive cloud computing platform with 200+ services.",
    useCase: "Hosting, scaling, storage, serverless computing, CI/CD pipelines",
    color: "#FF9900",
  },
];

const connections: Connection[] = [
  { from: "react", to: "nodejs", label: "API Calls" },
  { from: "nextjs", to: "nodejs", label: "SSR/API" },
  { from: "nodejs", to: "postgres", label: "Data Queries" },
  { from: "nodejs", to: "redis", label: "Caching" },
  { from: "postgres", to: "aws", label: "RDS Hosting" },
  { from: "redis", to: "aws", label: "ElastiCache" },
];

// Get category color for styling
const getCategoryColor = (category: TechNode["category"]) => {
  switch (category) {
    case "frontend":
      return "from-cyan-500/20 to-blue-500/20 border-cyan-400/50";
    case "backend":
      return "from-green-500/20 to-emerald-500/20 border-green-400/50";
    case "database":
      return "from-blue-500/20 to-indigo-500/20 border-blue-400/50";
    case "cloud":
      return "from-orange-500/20 to-amber-500/20 border-orange-400/50";
    default:
      return "from-gray-500/20 to-slate-500/20 border-gray-400/50";
  }
};

// Get glow color
const getGlowColor = (category: TechNode["category"]) => {
  switch (category) {
    case "frontend":
      return "shadow-cyan-500/50";
    case "backend":
      return "shadow-green-500/50";
    case "database":
      return "shadow-blue-500/50";
    case "cloud":
      return "shadow-orange-500/50";
    default:
      return "shadow-gray-500/50";
  }
};

export default function IntegrationMap({ className = "" }: IntegrationMapProps) {
  const [selectedNode, setSelectedNode] = useState<TechNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Calculate connection paths
  const connectionPaths = useMemo(() => {
    return connections.map((conn) => {
      const fromNode = techNodes.find((n) => n.id === conn.from)!;
      const toNode = techNodes.find((n) => n.id === conn.to)!;
      return {
        ...conn,
        fromNode,
        toNode,
      };
    });
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[500px] ${className}`}>
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Category Labels */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 text-xs font-medium text-green-400/70 uppercase tracking-widest">
        Backend Layer
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs font-medium text-blue-400/70 uppercase tracking-widest">
        Data & Cloud Layer
      </div>

      {/* SVG Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          {/* Gradient for connection lines */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.4)" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        {connectionPaths.map((conn, index) => {
          const x1 = conn.fromNode.x;
          const y1 = conn.fromNode.y;
          const x2 = conn.toNode.x;
          const y2 = conn.toNode.y;

          return (
            <g key={`${conn.from}-${conn.to}`}>
              {/* Base line */}
              <line
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity={0.6}
              />
              
              {/* Animated pulse dot */}
              <motion.circle
                r="4"
                fill={conn.fromNode.color}
                filter="url(#glow)"
                initial={{
                  cx: `${x1}%`,
                  cy: `${y1}%`,
                }}
                animate={{
                  cx: [`${x1}%`, `${x2}%`],
                  cy: [`${y1}%`, `${y2}%`],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  delay: index * 0.3,
                  ease: "linear",
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Tech Nodes */}
      {techNodes.map((node) => (
        <motion.button
          key={node.id}
          className={`absolute w-16 h-16 -ml-8 -mt-8 rounded-full border-2 bg-gradient-to-br ${getCategoryColor(
            node.category
          )} backdrop-blur-sm flex items-center justify-center cursor-pointer transition-shadow duration-300 ${
            hoveredNode === node.id ? `shadow-lg ${getGlowColor(node.category)}` : ""
          }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          onClick={() => setSelectedNode(node)}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: techNodes.indexOf(node) * 0.1,
          }}
        >
          {/* Inner glow effect */}
          <div
            className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ${
              hoveredNode === node.id ? "opacity-100" : ""
            }`}
            style={{
              background: `radial-gradient(circle, ${node.color}30 0%, transparent 70%)`,
            }}
          />
          
          {/* Node content - Tech logo placeholder */}
          <span className="relative z-10 text-xs font-bold text-white/90">
            {node.name.slice(0, 2).toUpperCase()}
          </span>
          
          {/* Pulse animation for active nodes */}
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: node.color }}
            animate={{
              scale: [1, 1.3, 1.5],
              opacity: [0.5, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.button>
      ))}

      {/* Node Labels */}
      {techNodes.map((node) => (
        <motion.div
          key={`label-${node.id}`}
          className="absolute -ml-10 text-center pointer-events-none"
          style={{
            left: `${node.x}%`,
            top: `calc(${node.y}% + 45px)`,
            width: "80px",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + techNodes.indexOf(node) * 0.1 }}
        >
          <span className="text-xs font-medium text-white/80">{node.name}</span>
        </motion.div>
      ))}

      {/* Tooltip / Detail Panel */}
      <AnimatePresence>
        {selectedNode && (
          <>
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNode(null)}
            />
            
            {/* Detail Card */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-80"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div
                className={`rounded-2xl border bg-gradient-to-br ${getCategoryColor(
                  selectedNode.category
                )} backdrop-blur-xl p-6 shadow-2xl`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white"
                    style={{ backgroundColor: selectedNode.color }}
                  >
                    {selectedNode.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedNode.name}</h3>
                    <span className="text-xs text-white/60 uppercase tracking-wide">
                      {selectedNode.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="ml-auto text-white/50 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-1">Description</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{selectedNode.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-1">Common Use Cases</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{selectedNode.useCase}</p>
                  </div>
                </div>

                {/* Connected Nodes */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">
                    Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {connections
                      .filter((c) => c.from === selectedNode.id || c.to === selectedNode.id)
                      .map((conn) => {
                        const otherId = conn.from === selectedNode.id ? conn.to : conn.from;
                        const otherNode = techNodes.find((n) => n.id === otherId)!;
                        return (
                          <span
                            key={otherId}
                            className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70"
                          >
                            {conn.label} → {otherNode.name}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <motion.div
        className="absolute bottom-4 left-4 text-xs text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Click any node for details
      </motion.div>
    </div>
  );
}
