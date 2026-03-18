import React from 'react';
import Stars from './Stars';
import Moon from './Moon';

export function SerbiaNightScene() {
  return (
    <>
      <Stars count={60} />
      <Moon size={45} top="8%" right="15%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%', opacity: 0.15 }}>
        {/* Rolling hills — Serbia countryside */}
        <path d="M0,140 Q80,100 160,120 Q240,140 320,110 Q380,95 400,105 L400,200 L0,200Z" fill="#1a2a1a" />
        {/* Distant church/village silhouette */}
        <rect x="180" y="105" width="6" height="20" fill="#1a1a2a" />
        <path d="M178,105 L183,92 L188,105" fill="#1a1a2a" />
        {/* Window light */}
        <rect x="220" y="118" width="4" height="5" fill="#f0c040" opacity="0.2" rx="1" />
      </svg>
    </>
  );
}

export function SvetlostShipScene({ accent }) {
  return (
    <>
      <Stars count={40} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Ship — sleek silver hull */}
        <g transform="translate(140, 80)" style={{ animation: 'gentleBob 5s ease-in-out infinite' }}>
          {/* Hull */}
          <path d="M0,20 Q10,-5 60,-8 Q110,-5 120,20 Q100,28 60,30 Q20,28 0,20Z"
            fill="#c0c8e0" opacity="0.25" stroke="#c0c8e0" strokeWidth="1" />
          {/* Window band */}
          <path d="M20,12 Q60,2 100,12" fill="none" stroke={accent || '#c0a0ff'} strokeWidth="1.5" opacity="0.4" />
          {/* Dashboard gold glow */}
          <ellipse cx="60" cy="10" rx="20" ry="8" fill="#f0c040" opacity="0.06" />
          {/* Cockpit windows */}
          {[35, 50, 65, 80].map((wx, i) => (
            <circle key={i} cx={wx} cy={10} r="3" fill={accent || '#c0a0ff'} opacity={0.2 + i * 0.03} />
          ))}
          {/* Soft engine glow */}
          <ellipse cx="0" cy="20" rx="8" ry="4" fill={accent || '#c0a0ff'} opacity="0.15" />
          <ellipse cx="120" cy="20" rx="8" ry="4" fill={accent || '#c0a0ff'} opacity="0.15" />
        </g>
        {/* Name label */}
        <text x="200" y="130" textAnchor="middle" fill={accent || '#c0a0ff'} fontSize="10"
          fontFamily="Caveat, cursive" opacity="0.4">Svetlost</text>
        {/* Soft ring emissions */}
        {[0, 1, 2].map(i => (
          <ellipse key={i} cx="200" cy="90" rx={70 + i * 20} ry={25 + i * 8}
            fill="none" stroke={accent || '#c0a0ff'} strokeWidth="0.5"
            opacity={0.08 - i * 0.02}
            style={{ animation: `glowPulse ${3 + i}s ease-in-out infinite`, '--glow-min': '0.03', '--glow-max': `${0.1 - i * 0.02}` }}
          />
        ))}
      </svg>
    </>
  );
}

export function SolarSystemScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Earth */}
        <circle cx="80" cy="120" r="16" fill="#2244aa" opacity="0.25" />
        <path d="M72,115 Q80,110 88,118" fill="#228844" opacity="0.15" />
        {/* Moon near Earth */}
        <circle cx="102" cy="110" r="5" fill="#ddd" opacity="0.2" />
        {/* Mars */}
        <circle cx="180" cy="90" r="8" fill="#cc4422" opacity="0.2" />
        {/* Flight trail */}
        <path d="M60,150 Q120,100 200,85 Q280,70 350,50" fill="none"
          stroke={accent || '#c0a0ff'} strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
        {/* Svetlost tiny */}
        <g transform="translate(250, 65)" opacity="0.3">
          <path d="M-8,2 Q0,-4 8,2 Q4,5 0,5 Q-4,5 -8,2Z" fill="#c0c8e0" />
          <ellipse cx="0" cy="2" rx="3" ry="1.5" fill={accent || '#c0a0ff'} opacity="0.3" />
        </g>
      </svg>
    </>
  );
}

export function SaturnJupiterScene({ accent }) {
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Saturn — big with rings */}
        <g transform="translate(120, 100)" opacity="0.3">
          <circle cx="0" cy="0" r="20" fill="#cc9944" />
          <ellipse cx="0" cy="0" rx="38" ry="8" fill="none" stroke="#cc9944" strokeWidth="2.5" transform="rotate(-15)" />
          {/* Tiny moons on rings */}
          <circle cx="30" cy="-6" r="2" fill="#ddd" opacity="0.5"
            style={{ animation: 'gentleBob 2s ease-in-out infinite' }} />
          <circle cx="-28" cy="8" r="1.5" fill="#ccc" opacity="0.4"
            style={{ animation: 'gentleBob 2.5s ease-in-out infinite' }} />
          {/* Diamond swings */}
          <rect x="28" y="-10" width="2" height="2" fill="#a0d0ff" opacity="0.4"
            transform="rotate(45, 29, -9)" />
        </g>
        {/* Jupiter — grand with storm */}
        <g transform="translate(300, 80)" opacity="0.25">
          <circle cx="0" cy="0" r="35" fill="#cc8844" />
          {/* Bands */}
          <path d="M-34,5 Q0,10 34,5" fill="none" stroke="#aa6633" strokeWidth="3" opacity="0.4" />
          <path d="M-33,-8 Q0,-4 33,-8" fill="none" stroke="#bb7744" strokeWidth="2" opacity="0.3" />
          {/* Great Red Spot — storm as music */}
          <ellipse cx="12" cy="8" rx="8" ry="5" fill="#cc4422" opacity="0.3" />
          {/* Music notes from storm */}
          <text x="25" y="-5" fontSize="8" fill="#f0c040" opacity="0.2">♪</text>
          <text x="35" y="-15" fontSize="6" fill="#f0c040" opacity="0.15">♫</text>
        </g>
      </svg>
    </>
  );
}

export function MilkyWayScene({ accent }) {
  return (
    <>
      <Stars count={70} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
        {/* Milky Way band — diagonal silver stream */}
        <path d="M-20,180 Q100,120 200,100 Q300,80 420,20"
          fill="none" stroke="#c0c8e0" strokeWidth="40" opacity="0.04" />
        <path d="M-20,180 Q100,120 200,100 Q300,80 420,20"
          fill="none" stroke="#c0c8e0" strokeWidth="15" opacity="0.06" />
        <path d="M-20,180 Q100,120 200,100 Q300,80 420,20"
          fill="none" stroke="#fff" strokeWidth="2" opacity="0.08" />
        {/* Dense star clusters along the band */}
        {Array.from({ length: 20 }, (_, i) => {
          const t = i / 20;
          const cx = -20 + t * 440;
          const cy = 180 - t * 160 + (Math.random() - 0.5) * 30;
          return (
            <circle key={i} cx={cx} cy={cy} r={0.5 + Math.random() * 1.5}
              fill="#fff" opacity={0.15 + Math.random() * 0.2}
              style={{ animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite` }}
            />
          );
        })}
        {/* Silver shimmer — "srebrna" */}
        <path d="M-10,175 Q110,115 210,95 Q310,75 410,25"
          fill="none" stroke={accent || '#c0a0ff'} strokeWidth="1" opacity="0.1"
          style={{ animation: 'glowPulse 4s ease-in-out infinite', '--glow-min': '0.05', '--glow-max': '0.12' }}
        />
      </svg>
    </>
  );
}

export function GalaxiesScene({ accent }) {
  return (
    <>
      <Stars count={50} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
        {/* Spiral galaxy — pinwheel */}
        <g transform="translate(120, 80)" opacity="0.2">
          <ellipse cx="0" cy="0" rx="30" ry="12" fill={accent || '#c0a0ff'} opacity="0.15" transform="rotate(-30)" />
          <ellipse cx="0" cy="0" rx="20" ry="8" fill="#fff" opacity="0.1" transform="rotate(-30)" />
          {/* Spiral arms */}
          <path d="M0,0 Q15,-10 25,-5 Q30,5 20,12" fill="none" stroke={accent || '#c0a0ff'} strokeWidth="1" opacity="0.2" />
          <path d="M0,0 Q-15,10 -25,5 Q-30,-5 -20,-12" fill="none" stroke={accent || '#c0a0ff'} strokeWidth="1" opacity="0.2" />
          <circle cx="0" cy="0" r="3" fill="#fff" opacity="0.2" />
        </g>
        {/* Elliptical galaxy — lantern glow */}
        <g transform="translate(300, 60)" opacity="0.15">
          <ellipse cx="0" cy="0" rx="20" ry="20" fill="#f0c040" opacity="0.2" />
          <ellipse cx="0" cy="0" rx="12" ry="12" fill="#f0c040" opacity="0.15" />
          <circle cx="0" cy="0" r="4" fill="#fff" opacity="0.15" />
        </g>
        {/* Small distant galaxies */}
        {[{ x: 60, y: 140 }, { x: 220, y: 160 }, { x: 350, y: 130 }].map((g, i) => (
          <ellipse key={i} cx={g.x} cy={g.y} rx={8 + i * 3} ry={3 + i}
            fill={accent || '#c0a0ff'} opacity={0.08 - i * 0.01}
            style={{ animation: `glowPulse ${4 + i}s ease-in-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

export function StarNurseryScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
        {/* Nebula dust cloud — pink and gold */}
        <ellipse cx="200" cy="100" rx="150" ry="80" fill="#cc4488" opacity="0.04" />
        <ellipse cx="180" cy="90" rx="100" ry="60" fill="#ff88aa" opacity="0.05" />
        <ellipse cx="220" cy="110" rx="80" ry="50" fill="#f0c040" opacity="0.04" />
        {/* Baby stars being born — tiny bright sparks */}
        {Array.from({ length: 10 }, (_, i) => {
          const cx = 140 + Math.random() * 120;
          const cy = 60 + Math.random() * 80;
          return (
            <g key={i}>
              <circle cx={cx} cy={cy} r={1 + Math.random() * 2}
                fill={i % 2 ? '#f0c040' : '#ff88aa'} opacity={0.3 + Math.random() * 0.3}
                style={{ animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }}
              />
              {/* Tiny glow around newborn star */}
              <circle cx={cx} cy={cy} r={3 + Math.random() * 3}
                fill={i % 2 ? '#f0c040' : '#ff88aa'} opacity="0.05" />
            </g>
          );
        })}
        {/* Wisps of dust */}
        <path d="M100,70 Q150,60 200,80 Q250,100 300,85" fill="none" stroke="#ff88aa" strokeWidth="8" opacity="0.03" />
        <path d="M120,120 Q180,100 240,120 Q300,140 340,115" fill="none" stroke="#f0c040" strokeWidth="6" opacity="0.03" />
      </svg>
    </>
  );
}

export function DeepSpaceScene({ accent }) {
  return (
    <>
      <Stars count={80} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
        {/* Vast emptiness with distant galaxies */}
        {Array.from({ length: 5 }, (_, i) => (
          <ellipse key={i}
            cx={50 + i * 80} cy={40 + (i % 3) * 50}
            rx={4 + i * 2} ry={2 + i}
            fill={accent || '#c0a0ff'} opacity={0.05 + i * 0.01}
            transform={`rotate(${i * 30}, ${50 + i * 80}, ${40 + (i % 3) * 50})`}
          />
        ))}
        {/* Love glow — warm center light */}
        <circle cx="200" cy="100" r="50" fill={accent || '#c0a0ff'} opacity="0.03"
          style={{ animation: 'glowPulse 5s ease-in-out infinite', '--glow-min': '0.02', '--glow-max': '0.05' }}
        />
        <circle cx="200" cy="100" r="20" fill="#f0c040" opacity="0.04"
          style={{ animation: 'glowPulse 3s ease-in-out infinite', '--glow-min': '0.03', '--glow-max': '0.06' }}
        />
      </svg>
    </>
  );
}

export function HomewardScene({ accent }) {
  return (
    <>
      <Stars count={50} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
        {/* Milky Way band returning */}
        <path d="M420,180 Q300,120 200,100 Q100,80 -20,20"
          fill="none" stroke="#c0c8e0" strokeWidth="25" opacity="0.04" />
        {/* Solar system in view — tiny dots */}
        <circle cx="300" cy="140" r="10" fill="#2244aa" opacity="0.12" /> {/* Earth */}
        <circle cx="260" cy="130" r="5" fill="#cc4422" opacity="0.08" /> {/* Mars */}
        <circle cx="200" cy="110" r="15" fill="#cc8844" opacity="0.06" /> {/* Jupiter */}
        <circle cx="140" cy="100" r="10" fill="#cc9944" opacity="0.06" /> {/* Saturn */}
        <ellipse cx="140" cy="100" rx="18" ry="4" fill="none" stroke="#cc9944" strokeWidth="1" opacity="0.08" />
        {/* Svetlost heading home */}
        <g transform="translate(330, 150)" opacity="0.3" style={{ animation: 'drift 4s ease-in-out infinite', '--drift-x': '-10px' }}>
          <path d="M-6,1 Q0,-3 6,1 Q3,3 0,4 Q-3,3 -6,1Z" fill="#c0c8e0" />
          <ellipse cx="0" cy="1" rx="2" ry="1" fill={accent || '#c0a0ff'} opacity="0.4" />
        </g>
      </svg>
    </>
  );
}
