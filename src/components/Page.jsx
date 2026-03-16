import React from 'react';

export default function Page({ page }) {
  return (
    <div className="verse-text">
      {page.lines.map((line, i) => (
        <p key={i} className="verse-line">{line}</p>
      ))}
    </div>
  );
}
