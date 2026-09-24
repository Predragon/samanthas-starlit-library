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

const TEXT_SCALES = [0.85, 1, 1.15, 1.3, 1.5];
const TEXT_SCALE_KEY = 'textScale';

const SPEEDS = [0.75, 1, 1.25, 1.5];
const SPEED_KEY = 'autoPlaySpeed';

// Index of a stored value in `options`, or `fallback` if missing/unavailable
function loadIndex(key, options, fallback) {
  try {
    const i = options.indexOf(Number(localStorage.getItem(key)));
    return i === -1 ? fallback : i;
  } catch {
    return fallback;
  }
}

// Time on a page: a relaxed read-aloud pace, never shorter than 4s
function pageDuration(page) {
  const words = (page.lines || []).join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(4000, 2500 + words * 450);
}

export default function Reader({ story }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [scaleIndex, setScaleIndex] = useState(() => loadIndex(TEXT_SCALE_KEY, TEXT_SCALES, 1));
  const [autoPlay, setAutoPlay] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(() => loadIndex(SPEED_KEY, SPEEDS, 1));
  const speed = SPEEDS[speedIndex];
  const [turnDir, setTurnDir] = useState(0); // -1 = back, 1 = forward, 0 = initial
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchRef = useRef(null);
  const pages = React.useMemo(() => buildPages(story), [story]);
  const total = pages.length;
  const current = pages[pageIndex];

  const theme = story.theme || {};
  const skyTop = theme.sky?.[0] || '#0c1a3a';
  const skyBottom = theme.sky?.[1] || '#070d1f';
  const accent = theme.accent || '#f0c040';

  const go = useCallback((dir) => {
    setPageIndex(prev => {
      const next = Math.max(0, Math.min(total - 1, prev + dir));
      if (next !== prev) {
        setTurnDir(dir);
        setIsTransitioning(true);
      }
      return next;
    });
  }, [total]);

  // Clear transition flag after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const t = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(t);
    }
  }, [isTransitioning, pageIndex]);

  useEffect(() => {
    try { localStorage.setItem(TEXT_SCALE_KEY, String(TEXT_SCALES[scaleIndex])); } catch {}
  }, [scaleIndex]);

  useEffect(() => {
    try { localStorage.setItem(SPEED_KEY, String(speed)); } catch {}
  }, [speed]);

  // Auto page turn: restarts on every page or speed change, stops on the last page
  const turnDelay = pageDuration(current) / speed;
  useEffect(() => {
    if (!autoPlay) return;
    if (pageIndex >= total - 1) { setAutoPlay(false); return; }
    const t = setTimeout(() => go(1), turnDelay);
    return () => clearTimeout(t);
  }, [autoPlay, pageIndex, total, turnDelay, go]);

  const resize = (dir) => setScaleIndex(i => Math.max(0, Math.min(TEXT_SCALES.length - 1, i + dir)));

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
    '--text-scale': TEXT_SCALES[scaleIndex],
    background: `linear-gradient(180deg, ${skyTop}, ${skyBottom})`,
  };

  const turnClass = turnDir > 0 ? 'page-turn-forward' : turnDir < 0 ? 'page-turn-back' : 'page-turn-initial';

  return (
    <div className="reader" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className={`reader-page ${turnClass}`} key={pageIndex} style={pageStyle}>
        {autoPlay && (
          <div
            className="autoplay-progress"
            key={speed}
            style={{ animationDuration: `${turnDelay}ms` }}
          />
        )}
        <button className="nav-back" onClick={goBack} aria-label="Back to library">←</button>
        <div className="text-size">
          <button
            className={autoPlay ? 'active' : ''}
            onClick={() => setAutoPlay(p => !p)}
            aria-label={autoPlay ? 'Pause auto page turn' : 'Start auto page turn'}
          >{autoPlay ? '❚❚' : '▶\uFE0E'}</button>
          <button
            className="speed"
            onClick={() => setSpeedIndex(i => (i + 1) % SPEEDS.length)}
            aria-label={`Auto page turn speed ${speed}×`}
          >{speed}×</button>
          <button onClick={() => resize(-1)} disabled={scaleIndex === 0} aria-label="Smaller text">A−</button>
          <button onClick={() => resize(1)} disabled={scaleIndex === TEXT_SCALES.length - 1} aria-label="Larger text">A+</button>
        </div>

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

      <Navigation total={total} current={pageIndex} accent={accent} onGo={(i) => {
        setTurnDir(i > pageIndex ? 1 : -1);
        setIsTransitioning(true);
        setPageIndex(i);
      }} />
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
