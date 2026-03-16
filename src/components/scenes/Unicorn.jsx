import React from 'react';

export default function Unicorn({
  x = 0, y = 0, scale = 1, color = '#fff', hornColor = '#e0d0ff',
  flip = false, opacity = 0.5, maneColor = '#e0a0ff'
}) {
  const tx = flip
    ? `translate(${x},${y}) scale(${-scale},${scale})`
    : `translate(${x},${y}) scale(${scale})`;

  return (
    <g transform={tx} opacity={opacity} className="unicorn-svg">
      {/* Body */}
      <ellipse cx="40" cy="20" rx="30" ry="18" fill={color} opacity="0.9" />
      {/* Neck */}
      <path d="M60,8 C62,-8 68,-18 70,-25" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />
      {/* Head */}
      <ellipse cx="72" cy="-30" rx="10" ry="8" fill={color} />
      {/* Horn — moonstone glow */}
      <line x1="74" y1="-38" x2="78" y2="-55" stroke={hornColor} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="74" y1="-38" x2="78" y2="-55" stroke="#fff" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
      {/* Horn glow */}
      <circle cx="78" cy="-55" r="4" fill={hornColor} opacity="0.3" />
      {/* Eye */}
      <circle cx="76" cy="-31" r="1.5" fill="#333" />
      <circle cx="76.5" cy="-31.5" r="0.5" fill="#fff" />
      {/* Ear */}
      <path d="M68,-36 L66,-44 L72,-38" fill={color} />
      {/* Mane — flowing rainbow-tinted */}
      <path d="M65,-20 C58,-25 55,-15 50,-22 C45,-18 48,-10 45,-15" fill="none" stroke={maneColor} strokeWidth="2" opacity="0.6" />
      <path d="M67,-15 C60,-20 57,-10 52,-17" fill="none" stroke="#a0d0ff" strokeWidth="1.5" opacity="0.4" />
      <path d="M68,-24 C62,-30 58,-22 54,-28" fill="none" stroke="#ffb0c0" strokeWidth="1.5" opacity="0.4" />
      {/* Legs */}
      <line x1="22" y1="35" x2="18" y2="55" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <line x1="35" y1="36" x2="33" y2="55" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <line x1="48" y1="36" x2="50" y2="55" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <line x1="58" y1="34" x2="62" y2="55" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Tail — rainbow wisps */}
      <path d="M10,18 C0,10 -8,15 -12,8" fill="none" stroke={maneColor} strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
      <path d="M10,20 C2,14 -5,20 -10,14" fill="none" stroke="#a0d0ff" strokeWidth="2" opacity="0.35" strokeLinecap="round" />
      <path d="M10,22 C3,18 -3,24 -8,18" fill="none" stroke="#ffb0c0" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
    </g>
  );
}

export function UnicornKneeling({
  x = 0, y = 0, scale = 1, color = '#fff', hornColor = '#e0d0ff',
  opacity = 0.4, maneColor = '#e0a0ff'
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
      {/* Body — lower */}
      <ellipse cx="40" cy="10" rx="28" ry="15" fill={color} opacity="0.9" />
      {/* Neck — bowed */}
      <path d="M58,0 C60,-12 64,-18 62,-25" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" />
      {/* Head — lowered */}
      <ellipse cx="60" cy="-28" rx="9" ry="7" fill={color} />
      {/* Horn */}
      <line x1="62" y1="-35" x2="64" y2="-50" stroke={hornColor} strokeWidth="2" strokeLinecap="round" />
      <circle cx="64" cy="-50" r="3" fill={hornColor} opacity="0.3" />
      {/* Eye closed — sleeping */}
      <path d="M64,-29 C65,-28 66,-29" fill="none" stroke="#666" strokeWidth="1" />
      {/* Folded legs */}
      <path d="M22,22 L18,28 L28,28" fill={color} opacity="0.8" />
      <path d="M55,22 L58,28 L48,28" fill={color} opacity="0.8" />
      {/* Mane draped */}
      <path d="M55,-18 C48,-22 45,-12 40,-18" fill="none" stroke={maneColor} strokeWidth="2" opacity="0.5" />
      <path d="M56,-14 C50,-18 47,-8 42,-14" fill="none" stroke="#a0d0ff" strokeWidth="1.5" opacity="0.35" />
      {/* Tail at rest */}
      <path d="M12,8 C4,4 -2,10 -6,6" fill="none" stroke={maneColor} strokeWidth="2" opacity="0.4" strokeLinecap="round" />
    </g>
  );
}
