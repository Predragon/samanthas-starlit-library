import React from 'react';

export default function Moon({ size = 60, top = '8%', right = '12%', crescent = true }) {
  return (
    <div className="moon" style={{ width: size, height: size, top, right }}>
      {crescent && (
        <div
          className="moon-crescent"
          style={{ width: size * 0.83, height: size * 0.83, top: -size * 0.08, left: size * 0.2 }}
        />
      )}
    </div>
  );
}
