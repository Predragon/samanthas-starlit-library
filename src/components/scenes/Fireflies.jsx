import React, { useMemo } from 'react';

export default function Fireflies({ count = 8 }) {
  const flies = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      top: `${20 + Math.random() * 60}%`,
      dur: 4 + Math.random() * 4,
      twinkle: 1.5 + Math.random() * 2,
      delay: Math.random() * 3,
      dx: -20 + Math.random() * 40,
      dy: -20 + Math.random() * 10,
      dx2: -15 + Math.random() * 30,
      dy2: -30 + Math.random() * 20,
      dx3: -10 + Math.random() * 20,
      dy3: -15 + Math.random() * 30,
    })),
    [count]
  );

  return (
    <>
      {flies.map(f => (
        <div
          key={f.id}
          className="firefly"
          style={{
            left: f.left,
            top: f.top,
            '--dur': `${f.dur}s`,
            '--twinkle': `${f.twinkle}s`,
            '--delay': `${f.delay}s`,
            '--dx': `${f.dx}px`,
            '--dy': `${f.dy}px`,
            '--dx2': `${f.dx2}px`,
            '--dy2': `${f.dy2}px`,
            '--dx3': `${f.dx3}px`,
            '--dy3': `${f.dy3}px`,
          }}
        />
      ))}
    </>
  );
}
