import React from 'react';

export default function Butterfly({ x = 0, y = 0, scale = 1, color = '#e0a0ff', opacity = 0.4 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}
      style={{ animation: `gentleBob ${3 + Math.random() * 2}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }}>
      {/* Upper wings */}
      <ellipse cx="-6" cy="-4" rx="6" ry="8" fill={color} opacity="0.6" transform="rotate(-15)" />
      <ellipse cx="6" cy="-4" rx="6" ry="8" fill={color} opacity="0.6" transform="rotate(15)" />
      {/* Lower wings */}
      <ellipse cx="-5" cy="4" rx="4" ry="5" fill={color} opacity="0.4" transform="rotate(10)" />
      <ellipse cx="5" cy="4" rx="4" ry="5" fill={color} opacity="0.4" transform="rotate(-10)" />
      {/* Body */}
      <line x1="0" y1="-6" x2="0" y2="7" stroke={color} strokeWidth="1.5" opacity="0.8" />
      {/* Antennae */}
      <line x1="0" y1="-6" x2="-3" y2="-10" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <line x1="0" y1="-6" x2="3" y2="-10" stroke={color} strokeWidth="0.5" opacity="0.5" />
    </g>
  );
}
