'use client';

interface BackgroundGlowProps {
  color?: string;
  size?: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  opacity?: number;
  blur?: number;
}

export default function BackgroundGlow({
  color = '#7c3aed',
  size = 400,
  top,
  left,
  right,
  bottom,
  opacity = 0.1,
  blur = 60
}: BackgroundGlowProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        filter: `blur(${blur}px)`,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
