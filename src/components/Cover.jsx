import React from 'react';

export default function Cover({ page, accent }) {
  return (
    <div className="cover-content">
      <div className="cover-emoji">{page.emoji}</div>
      <h1 className="cover-title" style={{ color: accent }}>{page.title}</h1>
      <p className="cover-subtitle">{page.subtitle}</p>
      {page.dedication && <p className="cover-dedication">{page.dedication}</p>}
      <p className="cover-tap">tap to begin</p>
    </div>
  );
}
