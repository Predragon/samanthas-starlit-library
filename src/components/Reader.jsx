import React, { useState, useEffect, useCallback, useRef } from 'react';
import Cover from './Cover';
import Page from './Page';
import Navigation from './Navigation';
import SceneRenderer from './scenes/SceneRenderer';

function buildPages(story) {
  const pages = [];
  const { refrain } = story;
  let stanzaCount = 0;

  for (const page of story.pages) {
    if (page.type === 'verse') stanzaCount++;
    pages.push(page);

    if (refrain && page.type === 'verse' && refrain.afterStanzas.includes(stanzaCount)) {
      pages.push({ type: 'refrain', lines: refrain.lines, scene: 'refrain' });
    }
  }

  // Replace goodnight page's refrain with closing variant
  if (refrain) {
    const goodnightIdx = pages.findIndex(p => p.type === 'goodnight');
    if (goodnightIdx !== -1) {
      pages.splice(goodnightIdx, 0, {
        type: 'refrain',
        lines: refrain.closing,
        scene: 'refrain',
        isClosing: true
      });
    }
  }

  return pages;
}

export default function Reader({ story }) {
  const [pageIndex, setPageIndex] = useState(0);
  const touchRef = useRef(null);
  const pages = React.useMemo(() => buildPages(story), [story]);
  const total = pages.length;
  const current = pages[pageIndex];

  const theme = story.theme || {};
  const skyTop = theme.sky?.[0] || '#0c1a3a';
  const skyBottom = theme.sky?.[1] || '#070d1f';
  const accent = theme.accent || '#f0c040';

  const go = useCallback((dir) => {
    setPageIndex(i => Math.max(0, Math.min(total - 1, i + dir)));
  }, [total]);

  const goBack = useCallback(() => {
    window.location.hash = '';
  }, []);

  // Keyboard nav
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === 'Escape') goBack();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, goBack]);

  // Swipe
  function onTouchStart(e) {
    touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
  function onTouchEnd(e) {
    if (!touchRef.current) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    const dy = e.changedTouches[0].clientY - touchRef.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 1 : -1);
    }
    touchRef.current = null;
  }

  const pageStyle = {
    '--sky-top': skyTop,
    '--sky-bottom': skyBottom,
    '--accent': accent,
    background: `linear-gradient(180deg, ${skyTop}, ${skyBottom})`,
  };

  return (
    <div className="reader" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="reader-page" key={pageIndex} style={pageStyle}>
        <button className="nav-back" onClick={goBack} aria-label="Back to library">←</button>

        {current.type === 'cover' && <Cover page={current} accent={accent} />}
        {current.type === 'verse' && <Page page={current} />}
        {current.type === 'refrain' && <RefrainPage page={current} accent={accent} />}
        {current.type === 'goodnight' && <GoodnightPage page={current} />}

        {current.scene && (
          <div className="scene-container">
            <SceneRenderer scene={current.scene} storyId={story.id} accent={accent} />
          </div>
        )}

        {/* Tap zones */}
        <div className="tap-zone tap-zone-left" onClick={() => go(-1)} />
        <div className="tap-zone tap-zone-right" onClick={() => go(1)} />
      </div>

      <Navigation total={total} current={pageIndex} accent={accent} onGo={setPageIndex} />
    </div>
  );
}

function RefrainPage({ page, accent }) {
  return (
    <div className="refrain-content">
      <div className="refrain-text">
        {page.lines.map((line, i) => (
          <p key={i} className="verse-line" style={{ color: accent }}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function GoodnightPage({ page }) {
  return (
    <div className="goodnight-content">
      <div className="goodnight-text">
        {page.lines.map((line, i) => (
          <p key={i} className="verse-line">{line}</p>
        ))}
      </div>
      {page.emoji && <div className="goodnight-emoji">{page.emoji}</div>}
    </div>
  );
}
