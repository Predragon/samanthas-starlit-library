import React from 'react';
import stories from '../stories/index';

export default function Library({ onSelect }) {
  return (
    <div className="library">
      <header className="library-header">
        <h1 className="library-title">Samantha's Starlit Library</h1>
        <p className="library-subtitle">Bedtime poems by Dady Fredy</p>
      </header>
      <div className="bookshelf">
        {stories.map(story => {
          const verseCount = story.pages.filter(p => p.type === 'verse').length;
          return (
            <button
              key={story.id}
              className="book-card"
              onClick={() => onSelect(story.id)}
            >
              <span className="book-emoji">{story.emoji}</span>
              <span className="book-title">{story.title}</span>
              <span className="book-count">{verseCount} verses</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
