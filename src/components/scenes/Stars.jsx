import React, { useMemo } from 'react';

export default function Stars({ count = 40, layer = 'full' }) {
  const stars = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: layer === 'full' ? `${Math.random() * 100}%` : `${Math.random() * 50}%`,
      size: 1 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.5,
      dur: 2 + Math.random() * 4,
      delay: Math.random() * 3,
    })),
    [count, layer]
  );

  return (
    <div className="stars-layer">
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            '--opacity': s.opacity,
            '--dur': `${s.dur}s`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
