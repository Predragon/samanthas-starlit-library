import React from 'react';

export default function Waves({ count = 3, color = '#40c9c9', baseOpacity = 0.15, yStart = 70 }) {
  return (
    <svg className="wave-group" viewBox="0 0 400 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
      {Array.from({ length: count }, (_, i) => {
        const y = yStart + i * 10;
        const opacity = baseOpacity - i * 0.03;
        return (
          <path
            key={i}
            className="wave-line"
            d={`M-20,${y} Q50,${y - 8} 100,${y} T220,${y} T340,${y} T420,${y}`}
            stroke={color}
            style={{
              '--wave-opacity': Math.max(0.05, opacity),
              '--wave-dur': `${3 + i}s`,
              '--wave-delay': `${i * 0.5}s`,
              '--wave-dx': `${-15 - i * 5}px`,
            }}
          />
        );
      })}
    </svg>
  );
}
