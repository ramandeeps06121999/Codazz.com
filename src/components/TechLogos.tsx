'use client';
import React from 'react';

interface TechLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

// Simple SVG icons for technologies
export function ReactLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="0.5" fill="none">
        <ellipse rx="10" ry="4" cx="12" cy="12"/>
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)"/>
        <ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)"/>
      </g>
    </svg>
  );
}

export function NextjsLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="12" fill="#000"/>
      <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  );
}

export function TypeScriptLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#3178c6" className={className}>
      <rect width="24" height="24" rx="3" fill="#3178c6"/>
      <path d="M14 10h4v2h-1.5v6h-2v-6H14v-2zm-4 0v1.5h-2V18H6v-6.5H4V10h6z" fill="#fff"/>
    </svg>
  );
}

export function NodejsLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#539e43" className={className}>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5L18.5 9 12 12.5 5.5 9 12 4.5zM5 10.5l6 3v5.5l-6-3v-5.5zm14 0v5.5l-6 3v-5.5l6-3z" fill="#539e43"/>
    </svg>
  );
}

export function PythonLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M12 2c-2 0-4 0-4 2v2h4v1H6c-2 0-2 2-2 4s0 4 2 4h2v-2c0-2 2-2 4-2h4c2 0 2-2 2-4V4c0-2-2-2-4-2h-4z" fill="#3776ab"/>
      <path d="M12 22c2 0 4 0 4-2v-2h-4v-1h6c2 0 2-2 2-4s0-4-2-4h-2v2c0 2-2 2-4 2H8c-2 0-2 2-2 4v4c0 2 2 2 4 2h4z" fill="#ffd43b"/>
    </svg>
  );
}

export function GraphQLLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#e535ab" className={className}>
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="none" stroke="#e535ab" strokeWidth="1"/>
      <circle cx="12" cy="12" r="2" fill="#e535ab"/>
      <circle cx="6" cy="9" r="1.5" fill="#e535ab"/>
      <circle cx="18" cy="9" r="1.5" fill="#e535ab"/>
      <circle cx="6" cy="15" r="1.5" fill="#e535ab"/>
      <circle cx="18" cy="15" r="1.5" fill="#e535ab"/>
      <circle cx="12" cy="5" r="1.5" fill="#e535ab"/>
      <circle cx="12" cy="19" r="1.5" fill="#e535ab"/>
    </svg>
  );
}

export function PostgreSQLLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#336791" className={className}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15c-1.5 0-2.5-1-2.5-2.5V9c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5v5.5c0 1.5-1 2.5-2.5 2.5zm0-9c-.5 0-1 .5-1 1v5.5c0 .5.5 1 1 1s1-.5 1-1V9c0-.5-.5-1-1-1z" fill="#336791"/>
    </svg>
  );
}

export function MongoDBLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#47a248" className={className}>
      <path d="M12 2c1 2 2 5 2 8s-1 6-2 8c-1-2-2-5-2-8s1-6 2-8z" fill="#47a248"/>
    </svg>
  );
}

export function RedisLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#dc382d" className={className}>
      <rect x="4" y="6" width="16" height="4" rx="1" fill="#dc382d"/>
      <rect x="4" y="11" width="16" height="4" rx="1" fill="#a32422"/>
      <rect x="4" y="16" width="16" height="4" rx="1" fill="#7a0c00"/>
    </svg>
  );
}

export function TensorFlowLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#ff6f00" className={className}>
      <rect x="4" y="4" width="7" height="7" fill="#ff6f00"/>
      <rect x="13" y="4" width="7" height="7" fill="#ffa000"/>
      <rect x="4" y="13" width="7" height="7" fill="#ffa000"/>
      <rect x="13" y="13" width="7" height="7" fill="#ffca28"/>
    </svg>
  );
}

export function OpenAILogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#10a37f" className={className}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 4c3.5 0 6 2.5 6 6s-2.5 6-6 6-6-2.5-6-6 2.5-6 6-6z" fill="#10a37f"/>
    </svg>
  );
}

export function LangChainLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1c3c3c" className={className}>
      <circle cx="8" cy="12" r="3" fill="#1c3c3c"/>
      <circle cx="16" cy="8" r="3" fill="#2d5a5a"/>
      <circle cx="16" cy="16" r="3" fill="#3d7a7a"/>
      <line x1="11" y1="11" x2="14" y2="9" stroke="#1c3c3c" strokeWidth="1"/>
      <line x1="11" y1="13" x2="14" y2="15" stroke="#1c3c3c" strokeWidth="1"/>
    </svg>
  );
}

export function HuggingFaceLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffbd59" className={className}>
      <circle cx="12" cy="12" r="10" fill="#ffbd59"/>
      <circle cx="8" cy="10" r="2" fill="#000"/>
      <circle cx="16" cy="10" r="2" fill="#000"/>
      <path d="M8 15c1.5 2 4.5 2 6 0" stroke="#000" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

export function AWSLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#ff9900" className={className}>
      <path d="M6 12c0-3 2-5 6-5s6 2 6 5c0 3-2 5-6 5" stroke="#ff9900" strokeWidth="2" fill="none"/>
      <path d="M18 15l3 3-3 3" stroke="#ff9900" strokeWidth="2" fill="none"/>
    </svg>
  );
}

export function GoogleCloudLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M12 4c-4 0-7 3-7 7 0 1 .2 2 .5 3H4v3h16v-3h-1.5c.3-1 .5-2 .5-3 0-4-3-7-7-7z" fill="#4285f4"/>
      <circle cx="12" cy="11" r="2" fill="#fff"/>
    </svg>
  );
}

export function KubernetesLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#326ce5" className={className}>
      <circle cx="12" cy="12" r="10" fill="#326ce5"/>
      <path d="M12 6v4M8 8l2.5 3.5M16 8l-2.5 3.5M7 13l4 1M17 13l-4 1M10 17l2-3M14 17l-2-3" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  );
}

export function DockerLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ed" className={className}>
      <rect x="4" y="10" width="4" height="4" fill="#2496ed"/>
      <rect x="9" y="10" width="4" height="4" fill="#2496ed"/>
      <rect x="14" y="10" width="4" height="4" fill="#2496ed"/>
      <rect x="9" y="6" width="4" height="4" fill="#2496ed"/>
      <path d="M4 15h16v2c0 2-2 4-4 4H8c-2 0-4-2-4-4v-2z" fill="#2496ed"/>
    </svg>
  );
}

export function SolidityLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#363636" className={className}>
      <polygon points="12,2 20,8 16,16 8,16 4,8" fill="#363636"/>
      <polygon points="12,8 16,12 12,16 8,12" fill="#fff"/>
    </svg>
  );
}

export function EthersjsLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#2535a0" className={className}>
      <polygon points="12,2 22,12 12,22 2,12" fill="#2535a0"/>
      <circle cx="12" cy="12" r="4" fill="#fff"/>
    </svg>
  );
}

export function IPFSLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#4a9ea1" className={className}>
      <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" fill="#4a9ea1"/>
      <circle cx="12" cy="12" r="3" fill="#fff"/>
    </svg>
  );
}

export function HardhatLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff100" className={className}>
      <path d="M4 10h16v6c0 3-2 5-5 5H9c-3 0-5-2-5-5v-6z" fill="#fff100"/>
      <rect x="7" y="6" width="10" height="4" fill="#ff6b35"/>
    </svg>
  );
}

export function SwiftLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#f05138" className={className}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 4c3 0 5.5 2 6 5-2-1-4-1-6 0-2 1-3 3-3 5 0 2 1 4 3 5-3-1-5-4-5-7 0-4 3-8 5-8z" fill="#f05138"/>
    </svg>
  );
}

export function KotlinLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <polygon points="0,0 12,12 0,24" fill="#7f52ff"/>
      <polygon points="12,0 24,0 24,24 0,24" fill="#7f52ff"/>
      <polygon points="12,0 24,0 12,12" fill="#a97bff"/>
    </svg>
  );
}

export function FlutterLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#02569b" className={className}>
      <path d="M4 4h8l-8 8H4V4zm8 8h8v8h-8v-8z" fill="#02569b"/>
      <path d="M12 12l8-8v8h-8z" fill="#45d1fd"/>
    </svg>
  );
}

export function ReactNativeLogo({ className = '', size = 40 }: TechLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#61dafb" className={className}>
      <circle cx="12" cy="12" r="1.5" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="0.5" fill="none">
        <ellipse rx="9" ry="3.5" cx="12" cy="12"/>
        <ellipse rx="9" ry="3.5" cx="12" cy="12" transform="rotate(60 12 12)"/>
        <ellipse rx="9" ry="3.5" cx="12" cy="12" transform="rotate(120 12 12)"/>
      </g>
      <rect x="10" y="18" width="4" height="3" fill="#61dafb"/>
    </svg>
  );
}

// Default export for dynamic usage
export default function TechLogo({ name, className = '', size = 40 }: TechLogoProps & { name: string }) {
  const logos: Record<string, React.FC<TechLogoProps>> = {
    React: ReactLogo,
    'Next.js': NextjsLogo,
    TypeScript: TypeScriptLogo,
    'Node.js': NodejsLogo,
    Python: PythonLogo,
    GraphQL: GraphQLLogo,
    PostgreSQL: PostgreSQLLogo,
    MongoDB: MongoDBLogo,
    Redis: RedisLogo,
    TensorFlow: TensorFlowLogo,
    OpenAI: OpenAILogo,
    LangChain: LangChainLogo,
    HuggingFace: HuggingFaceLogo,
    AWS: AWSLogo,
    'Google Cloud': GoogleCloudLogo,
    Kubernetes: KubernetesLogo,
    Docker: DockerLogo,
    Solidity: SolidityLogo,
    'Ethers.js': EthersjsLogo,
    IPFS: IPFSLogo,
    Hardhat: HardhatLogo,
    Swift: SwiftLogo,
    Kotlin: KotlinLogo,
    Flutter: FlutterLogo,
    'React Native': ReactNativeLogo,
  };
  
  const LogoComponent = logos[name] || ReactLogo;
  return <LogoComponent className={className} size={size} />;
}
