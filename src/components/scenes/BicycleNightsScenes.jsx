import React from 'react';
import Stars from './Stars';
import Moon from './Moon';
import Fireflies from './Fireflies';

// ── Bicycle Nights scenes ───────────────────────
// Warm, grounded, real — Angeles City at night

export function EveningStartScene() {
  return (
    <>
      <Stars count={15} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Sunset gradient at horizon */}
        <rect x="0" y="0" width="400" height="80" fill="#cc6622" opacity="0.04" />
        <rect x="0" y="30" width="400" height="50" fill="#f0c040" opacity="0.03" />
        {/* Mango tree silhouettes */}
        <g opacity="0.15">
          <rect x="30" y="100" width="14" height="70" fill="#2a1a0a" rx="3" />
          <ellipse cx="37" cy="80" rx="35" ry="30" fill="#1a2a1a" />
          <rect x="340" y="110" width="12" height="60" fill="#2a1a0a" rx="3" />
          <ellipse cx="346" cy="90" rx="30" ry="28" fill="#1a2a1a" />
        </g>
        {/* Warm evening air feel */}
        <rect x="0" y="170" width="400" height="30" fill="#3a2a1a" opacity="0.08" />
      </svg>
    </>
  );
}

export function BicycleSeatScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '70%' }}>
        {/* Bicycle with child seat — warm silhouette */}
        <g transform="translate(150, 100)" opacity="0.2">
          {/* Rear wheel */}
          <circle cx="0" cy="40" r="22" fill="none" stroke={accent || '#f5d76e'} strokeWidth="2" />
          {/* Front wheel */}
          <circle cx="70" cy="40" r="22" fill="none" stroke={accent || '#f5d76e'} strokeWidth="2" />
          {/* Frame */}
          <line x1="22" y1="40" x2="35" y2="10" stroke={accent || '#f5d76e'} strokeWidth="2" />
          <line x1="35" y1="10" x2="55" y2="10" stroke={accent || '#f5d76e'} strokeWidth="2" />
          <line x1="55" y1="10" x2="70" y2="40" stroke={accent || '#f5d76e'} strokeWidth="2" />
          <line x1="22" y1="40" x2="55" y2="10" stroke={accent || '#f5d76e'} strokeWidth="2" />
          {/* Handlebars */}
          <line x1="55" y1="10" x2="60" y2="0" stroke={accent || '#f5d76e'} strokeWidth="2" />
          <line x1="56" y1="2" x2="64" y2="2" stroke={accent || '#f5d76e'} strokeWidth="2.5" strokeLinecap="round" />
          {/* Child seat behind — the little blue seat */}
          <rect x="5" y="12" width="18" height="20" rx="4" fill="#4466aa" opacity="0.3" />
          <rect x="7" y="10" width="14" height="4" rx="2" fill="#4466aa" opacity="0.25" />
          {/* Dangling sandals */}
          <ellipse cx="10" cy="38" rx="3" ry="1.5" fill="#cc8844" opacity="0.2" />
          <ellipse cx="18" cy="39" rx="3" ry="1.5" fill="#cc8844" opacity="0.2" />
        </g>
        {/* Street below */}
        <rect x="0" y="175" width="400" height="25" fill="#333" opacity="0.08" />
      </svg>
    </>
  );
}

export function AngelesStreetsScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Street with warm light spills */}
        <rect x="0" y="160" width="400" height="40" fill="#2a2a2a" opacity="0.1" />
        {/* Streetlamps — blinking on */}
        {[80, 200, 320].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="60" x2={x} y2="100" stroke="#555" strokeWidth="2" opacity="0.12" />
            <circle cx={x} cy="56" r="5" fill={accent || '#f5d76e'} opacity={0.15 + i * 0.05}
              style={{ animation: `glowPulse ${3 + i}s ease-in-out infinite`, '--glow-min': '0.1', '--glow-max': `${0.2 + i * 0.05}` }} />
            {/* Light cone */}
            <path d={`M${x - 12},70 L${x},58 L${x + 12},70`} fill={accent || '#f5d76e'} opacity="0.03" />
          </g>
        ))}
        {/* Tricycle silhouette */}
        <g transform="translate(130, 150)" opacity="0.08">
          <rect x="0" y="0" width="20" height="12" fill="#555" rx="2" />
          <circle cx="-4" cy="14" r="4" fill="none" stroke="#555" strokeWidth="1.5" />
          <circle cx="24" cy="14" r="4" fill="none" stroke="#555" strokeWidth="1.5" />
        </g>
        {/* Carinderia glow — warm orange spill */}
        <rect x="250" y="120" width="50" height="35" fill="#cc6622" opacity="0.03" rx="2" />
        <rect x="255" y="125" width="10" height="8" fill="#f0c040" opacity="0.06" rx="1" />
      </svg>
    </>
  );
}

export function ParadeGroundsScene() {
  return (
    <>
      <Stars count={35} />
      <Moon size={50} top="5%" right="12%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '55%' }}>
        {/* Wide open grass — the Parade Grounds feel */}
        <rect x="0" y="130" width="400" height="70" fill="#1a2a1a" opacity="0.08" />
        {/* Old runway lines — faint */}
        <line x1="0" y1="155" x2="400" y2="155" stroke="#444" strokeWidth="1" opacity="0.06" strokeDasharray="20 15" />
        <line x1="0" y1="158" x2="400" y2="158" stroke="#444" strokeWidth="1" opacity="0.04" strokeDasharray="20 15" />
        {/* Distant hills — purple sky */}
        <path d="M0,110 Q100,85 200,95 Q300,105 400,80 L400,130 L0,130Z" fill="#2a1a3a" opacity="0.06" />
        {/* Wide open sky feel — just stars and space */}
        {/* Sweet grass hint — tiny lines */}
        {Array.from({ length: 15 }, (_, i) => (
          <line key={i} x1={20 + i * 25} y1="150" x2={22 + i * 25} y2="143"
            stroke="#2a4a2a" strokeWidth="0.8" opacity="0.08" />
        ))}
      </svg>
    </>
  );
}

export function AirplaneWatchScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Airplane with blinking lights */}
        <g style={{ animation: 'drift 8s ease-in-out infinite', '--drift-x': '40px' }}>
          {/* Fuselage */}
          <path d="M150,45 Q170,40 210,42 Q230,44 235,48 Q230,52 210,54 Q170,56 150,51Z"
            fill="#c0c8e0" opacity="0.15" />
          {/* Wings */}
          <path d="M175,48 L160,70 L200,48" fill="#c0c8e0" opacity="0.1" />
          <path d="M175,48 L160,26 L200,48" fill="#c0c8e0" opacity="0.1" />
          {/* Tail */}
          <path d="M152,46 L145,35 L155,46" fill="#c0c8e0" opacity="0.1" />
          {/* Navigation lights — blinking */}
          <circle cx="160" cy="70" r="2" fill="#ff3333" opacity="0.4"
            style={{ animation: 'twinkle 1.2s ease-in-out infinite' }} />
          <circle cx="160" cy="26" r="2" fill="#33ff33" opacity="0.4"
            style={{ animation: 'twinkle 1.2s ease-in-out infinite', animationDelay: '0.6s' }} />
          {/* Landing lights — bright */}
          <circle cx="230" cy="48" r="3" fill="#fff" opacity="0.3"
            style={{ animation: 'glowPulse 1.5s ease-in-out infinite', '--glow-min': '0.2', '--glow-max': '0.4' }} />
          <circle cx="230" cy="48" r="10" fill="#fff" opacity="0.05" />
        </g>
        {/* Tangerine sky remnant at horizon */}
        <rect x="0" y="140" width="400" height="20" fill="#cc6622" opacity="0.03" />
        {/* Ground — Parade Grounds */}
        <rect x="0" y="160" width="400" height="40" fill="#1a2a1a" opacity="0.06" />
        {/* Runway lights in distance */}
        {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
          <circle key={i} cx={x} cy="165" r="1" fill={accent || '#f5d76e'} opacity={0.1}
            style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite` }} />
        ))}
      </svg>
    </>
  );
}

export function StarbucksStopScene({ accent }) {
  return (
    <>
      <Stars count={15} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Starbucks storefront — warm glow */}
        <rect x="120" y="70" width="160" height="100" fill="#1a3a2a" opacity="0.08" rx="3" />
        {/* Window — warm interior glow */}
        <rect x="135" y="80" width="55" height="40" fill={accent || '#f5d76e'} opacity="0.06" rx="2" />
        <rect x="210" y="80" width="55" height="40" fill={accent || '#f5d76e'} opacity="0.05" rx="2" />
        {/* Green awning hint */}
        <rect x="120" y="66" width="160" height="8" fill="#006241" opacity="0.1" rx="2" />
        {/* Door glow */}
        <rect x="185" y="90" width="30" height="50" fill={accent || '#f5d76e'} opacity="0.04" rx="2" />
        {/* Warm spill of light onto sidewalk */}
        <ellipse cx="200" cy="170" rx="80" ry="15" fill={accent || '#f5d76e'} opacity="0.03" />
        {/* Ice cream hint — pink circle */}
        <circle cx="200" cy="105" r="5" fill="#ff88aa" opacity="0.1"
          style={{ animation: 'gentleBob 3s ease-in-out infinite' }} />
      </svg>
    </>
  );
}

export function SevenElevenScene({ accent }) {
  return (
    <>
      <Stars count={15} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* 7-Eleven — bright, humming store */}
        <rect x="100" y="65" width="200" height="105" fill="#115533" opacity="0.06" rx="3" />
        {/* Bright fluorescent interior — whiter light */}
        <rect x="110" y="75" width="80" height="45" fill="#fff" opacity="0.04" rx="2" />
        <rect x="210" y="75" width="80" height="45" fill="#fff" opacity="0.035" rx="2" />
        {/* Stripe hint — orange/green/red */}
        <rect x="100" y="62" width="200" height="6" fill="#ff6600" opacity="0.08" />
        <rect x="100" y="59" width="200" height="4" fill="#006633" opacity="0.06" />
        <rect x="100" y="56" width="200" height="4" fill="#cc0000" opacity="0.05" />
        {/* Donut box */}
        <g transform="translate(190, 130)" opacity="0.15">
          <rect x="0" y="0" width="20" height="12" fill="#f5d76e" rx="2" />
          <rect x="2" y="2" width="16" height="8" fill="none" stroke="#cc8844" strokeWidth="0.5" rx="1" />
          {/* Donuts inside — tiny circles */}
          <circle cx="6" cy="6" r="2.5" fill="#cc6622" opacity="0.6" />
          <circle cx="14" cy="6" r="2.5" fill="#ff88aa" opacity="0.5" />
          <circle cx="6" cy="6" r="1" fill="#f5d76e" opacity="0.5" /> {/* hole */}
          <circle cx="14" cy="6" r="1" fill="#f5d76e" opacity="0.5" />
        </g>
        {/* Bright door glow */}
        <rect x="170" y="85" width="25" height="50" fill="#fff" opacity="0.03" rx="1" />
      </svg>
    </>
  );
}

export function RideHomeScene() {
  return (
    <>
      <Stars count={35} />
      <Moon size={55} top="5%" right="12%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%' }}>
        {/* Quiet street — the city half-dreaming */}
        <rect x="0" y="160" width="400" height="40" fill="#2a2a2a" opacity="0.06" />
        {/* Distant sleeping buildings */}
        <g opacity="0.06">
          <rect x="40" y="110" width="30" height="60" fill="#222" rx="2" />
          <rect x="280" y="120" width="40" height="50" fill="#222" rx="2" />
          <rect x="350" y="115" width="25" height="55" fill="#222" rx="2" />
        </g>
        {/* One dim window still on */}
        <rect x="290" y="128" width="4" height="5" fill="#f0c040" opacity="0.06" rx="1" />
        {/* Moonbeam on road */}
        <line x1="340" y1="0" x2="200" y2="165" stroke="#c0c8e0" strokeWidth="2" opacity="0.03" />
      </svg>
    </>
  );
}

export function BeltSafeScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <Moon size={50} top="8%" right="15%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '70%' }}>
        {/* Bicycle stopped — tender moment */}
        <g transform="translate(140, 85)" opacity="0.18">
          {/* Rear wheel */}
          <circle cx="0" cy="50" r="22" fill="none" stroke={accent || '#f5d76e'} strokeWidth="1.5" />
          {/* Front wheel */}
          <circle cx="70" cy="50" r="22" fill="none" stroke={accent || '#f5d76e'} strokeWidth="1.5" />
          {/* Frame simplified */}
          <line x1="22" y1="50" x2="35" y2="20" stroke={accent || '#f5d76e'} strokeWidth="1.5" />
          <line x1="35" y1="20" x2="55" y2="20" stroke={accent || '#f5d76e'} strokeWidth="1.5" />
          <line x1="55" y1="20" x2="70" y2="50" stroke={accent || '#f5d76e'} strokeWidth="1.5" />
          {/* Belt loop — around both figures, warm golden */}
          <ellipse cx="25" cy="15" rx="18" ry="12" fill="none"
            stroke={accent || '#f5d76e'} strokeWidth="1.5" opacity="0.5"
            strokeDasharray="3 2" />
        </g>
        {/* Warm safe glow around them */}
        <ellipse cx="200" cy="110" rx="50" ry="35" fill={accent || '#f5d76e'} opacity="0.02"
          style={{ animation: 'warmPulse 4s ease-in-out infinite' }} />
        {/* Road beneath */}
        <rect x="0" y="170" width="400" height="30" fill="#2a2a2a" opacity="0.06" />
      </svg>
    </>
  );
}

export function LastLaneScene() {
  return (
    <>
      <Stars count={30} />
      <Moon size={45} top="8%" right="18%" />
      <Fireflies count={4} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%' }}>
        {/* Empty lane */}
        <rect x="0" y="160" width="400" height="40" fill="#2a2a2a" opacity="0.06" />
        {/* Sleeping sari-sari stores — closed shutters */}
        <g opacity="0.07">
          <rect x="30" y="120" width="35" height="40" fill="#333" rx="2" />
          <rect x="32" y="122" width="31" height="10" fill="#555" rx="1" /> {/* shutter */}
          <rect x="280" y="125" width="40" height="35" fill="#333" rx="2" />
          <rect x="282" y="127" width="36" height="10" fill="#555" rx="1" />
        </g>
        {/* Stray dog walking alongside */}
        <g transform="translate(300, 152)" opacity="0.1"
          style={{ animation: 'drift 6s ease-in-out infinite', '--drift-x': '-15px' }}>
          <ellipse cx="0" cy="0" rx="10" ry="5" fill="#8b7355" />
          <circle cx="10" cy="-3" r="3.5" fill="#8b7355" />
          {/* Legs */}
          <line x1="-6" y1="5" x2="-7" y2="12" stroke="#8b7355" strokeWidth="1.5" />
          <line x1="6" y1="5" x2="7" y2="12" stroke="#8b7355" strokeWidth="1.5" />
          {/* Tail up */}
          <path d="M-10,0 Q-14,-5 -12,-8" fill="none" stroke="#8b7355" strokeWidth="1.5" />
        </g>
      </svg>
    </>
  );
}

export function MammyHomeScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <Moon size={50} top="5%" right="10%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '65%' }}>
        {/* House silhouette */}
        <g opacity="0.12">
          <rect x="140" y="80" width="120" height="90" fill="#222" rx="3" />
          <path d="M130,82 L200,50 L270,82" fill="#2a2a2a" /> {/* roof */}
        </g>
        {/* Porch light — still on, warm, waiting */}
        <circle cx="200" cy="110" r="8" fill={accent || '#f5d76e'} opacity="0.2"
          style={{ animation: 'glowPulse 3s ease-in-out infinite', '--glow-min': '0.15', '--glow-max': '0.25' }} />
        <circle cx="200" cy="110" r="20" fill={accent || '#f5d76e'} opacity="0.04" />
        {/* Door — open, light spilling */}
        <rect x="190" y="105" width="20" height="35" fill={accent || '#f5d76e'} opacity="0.06" rx="2" />
        {/* Window glow */}
        <rect x="155" y="95" width="18" height="14" fill={accent || '#f5d76e'} opacity="0.04" rx="1" />
        <rect x="230" y="95" width="18" height="14" fill={accent || '#f5d76e'} opacity="0.03" rx="1" />
        {/* Warm light path to door */}
        <path d="M195,140 L180,180 L220,180 L205,140" fill={accent || '#f5d76e'} opacity="0.02" />
      </svg>
    </>
  );
}
