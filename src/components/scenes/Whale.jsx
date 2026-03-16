import React from 'react';

export default function Whale({ x = 200, y = 50, scale = 1, color = '#f0c040', opacity = 0.2 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
      {/* Body outline — translucent whale shape */}
      <path
        d="M-80,0 C-60,-35 -20,-50 30,-40 C60,-30 90,-10 80,10 C70,30 30,40 -10,35 C-40,30 -70,20 -80,0Z"
        fill={color}
        opacity="0.15"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Tail */}
      <path
        d="M-78,0 C-95,-15 -110,-20 -100,-5 C-110,10 -95,15 -78,0Z"
        fill={color}
        opacity="0.1"
        stroke={color}
        strokeWidth="1"
      />
      {/* Eye */}
      <circle cx="50" cy="-15" r="3" fill={color} opacity="0.5" />
      {/* Mouth opening for stars */}
      <path
        d="M75,-5 C85,0 85,10 75,15"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Glow */}
      <ellipse cx="0" cy="0" rx="70" ry="35" fill={color} opacity="0.05"
        style={{ animation: 'glowPulse 4s ease-in-out infinite', '--glow-min': '0.03', '--glow-max': '0.08' }}
      />
    </g>
  );
}
