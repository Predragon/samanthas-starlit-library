import React from 'react';

export default function Navigation({ total, current, accent, onGo }) {
  // For stories with many pages, show subset of dots
  const maxDots = 20;
  const showDots = total <= maxDots;

  return (
    <nav className="nav-bar">
      {showDots ? (
        Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            className={`nav-dot ${i === current ? 'active' : ''}`}
            style={i === current ? { background: accent, boxShadow: `0 0 8px ${accent}` } : undefined}
            onClick={() => onGo(i)}
            aria-label={`Page ${i + 1}`}
          />
        ))
      ) : (
        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
          {current + 1} / {total}
        </span>
      )}
    </nav>
  );
}
