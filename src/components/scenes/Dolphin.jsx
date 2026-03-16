import React from 'react';

export default function Dolphin({
  x = 0, y = 0, scale = 1, color = '#40c9c9', flip = false, opacity = 0.6, label = null
}) {
  const tx = flip ? `translate(${x},${y}) scale(${-scale},${scale})` : `translate(${x},${y}) scale(${scale})`;

  return (
    <g transform={tx} opacity={opacity} className="dolphin-svg">
      {/* Body arc */}
      <path
        d="M0,0 C10,-20 40,-30 60,-20 C75,-12 80,0 70,10 C60,18 30,20 10,12 C0,8 -5,5 0,0Z"
        fill={color}
      />
      {/* Dorsal fin */}
      <path
        d="M30,-18 C32,-30 40,-32 38,-20Z"
        fill={color}
        opacity="0.8"
      />
      {/* Tail fluke */}
      <path
        d="M-2,2 C-12,-8 -18,-5 -14,2 C-18,8 -12,12 -2,4Z"
        fill={color}
        opacity="0.7"
      />
      {/* Eye */}
      <circle cx="55" cy="-8" r="2" fill="#fff" opacity="0.9" />
      {/* Smile line */}
      <path
        d="M58,-4 C62,-2 64,0 62,2"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Label if provided */}
      {label && (
        <text
          x="35" y="30"
          textAnchor="middle"
          fill="#fff"
          fontSize="8"
          fontFamily="Caveat, cursive"
          opacity="0.7"
        >
          {label}
        </text>
      )}
    </g>
  );
}
