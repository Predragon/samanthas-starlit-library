import React, { useState, useEffect } from 'react';
import Library from './components/Library';
import Reader from './components/Reader';
import { getStory } from './stories/index';

export default function App() {
  const [storyId, setStoryId] = useState(null);

  useEffect(() => {
    function onHash() {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith('/read/')) {
        setStoryId(hash.replace('/read/', ''));
      } else {
        setStoryId(null);
      }
    }
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (storyId) {
    const story = getStory(storyId);
    if (story) return <Reader story={story} />;
  }

  return <Library onSelect={(id) => { window.location.hash = `/read/${id}`; }} />;
}
