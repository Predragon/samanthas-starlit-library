import React from 'react';

export default function Jellyfish({ x = 0, y = 0, scale = 1, color = '#ff88cc', opacity = 0.4 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity} className="jellyfish-glow">
      {/* Bell */}
      <ellipse cx="0" cy="0" rx="14" ry="10" fill={color} opacity="0.5" />
      <ellipse cx="0" cy="0" rx="14" ry="10" fill="none" stroke={color} strokeWidth="1" opacity="0.8" />
      {/* Inner glow */}
      <ellipse cx="0" cy="-2" rx="8" ry="5" fill={color} opacity="0.3" />
      {/* Tentacles */}
      {[-8, -3, 3, 8].map((tx, i) => (
        <path
          key={i}
          d={`M${tx},8 Q${tx + (i % 2 ? 3 : -3)},18 ${tx},28`}
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0.5"
          style={{ animation: `drift ${2 + i * 0.5}s ease-in-out infinite`, '--drift-x': `${2 + i}px` }}
        />
      ))}
    </g>
  );
}
