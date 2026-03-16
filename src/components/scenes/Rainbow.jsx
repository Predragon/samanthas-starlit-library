import React from 'react';

const COLORS = ['#ff4444', '#ff8844', '#ffcc00', '#44cc44', '#4488ff', '#4444cc', '#8844cc'];

export default function Rainbow({ x = 200, y = 60, width = 300, opacity = 0.25 }) {
  return (
    <g className="rainbow-arc" opacity={opacity}>
      {COLORS.map((color, i) => {
        const r = width / 2 - i * 5;
        return (
          <path
            key={i}
            d={`M${x - r},${y} A${r},${r} 0 0,1 ${x + r},${y}`}
            fill="none"
            stroke={color}
            strokeWidth="4"
            opacity={0.6}
          />
        );
      })}
    </g>
  );
}
