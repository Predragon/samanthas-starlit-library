import React from 'react';
import Stars from './Stars';
import Moon from './Moon';
import Fireflies from './Fireflies';

export function StartScene() {
  return (
    <>
      <Stars count={50} />
      <Moon />
    </>
  );
}

export function BikesScene() {
  return (
    <>
      <Stars count={30} />
      <Moon size={50} top="5%" right="15%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%', opacity: 0.2 }}>
        {/* Road */}
        <path d="M0,160 Q100,140 200,150 T400,140" fill="none" stroke="#556" strokeWidth="2" />
        {/* Simple bike silhouettes */}
        <circle cx="120" cy="145" r="12" fill="none" stroke="#f0c040" strokeWidth="1.5" opacity="0.4" />
        <circle cx="140" cy="145" r="12" fill="none" stroke="#f0c040" strokeWidth="1.5" opacity="0.4" />
        <circle cx="250" cy="140" r="10" fill="none" stroke="#f0c040" strokeWidth="1.5" opacity="0.3" />
        <circle cx="268" cy="140" r="10" fill="none" stroke="#f0c040" strokeWidth="1.5" opacity="0.3" />
      </svg>
    </>
  );
}

export function FireflyScene() {
  return (
    <>
      <Stars count={20} />
      <Fireflies count={12} />
      {/* Tree silhouettes */}
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '70%', opacity: 0.15 }}>
        <path d="M30,200 L30,100 C30,60 70,40 50,100 L50,200" fill="#1a2a1a" />
        <path d="M350,200 L350,110 C350,70 390,50 370,110 L370,200" fill="#1a2a1a" />
        <ellipse cx="40" cy="80" rx="30" ry="40" fill="#1a2a1a" />
        <ellipse cx="360" cy="90" rx="25" ry="35" fill="#1a2a1a" />
      </svg>
    </>
  );
}

export function RooftopsScene() {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%', opacity: 0.15 }}>
        {/* Rooftop silhouettes */}
        <path d="M0,200 L0,120 L40,80 L80,120 L80,100 L120,60 L160,100 L160,110 L200,70 L240,110 L240,130 L280,90 L320,130 L320,120 L360,80 L400,120 L400,200Z" fill="#1a1a2a" />
        {/* Chimneys */}
        <rect x="50" y="85" width="8" height="20" fill="#1a1a2a" />
        <rect x="190" y="75" width="8" height="15" fill="#1a1a2a" />
        {/* Warm window */}
        <rect x="100" y="110" width="6" height="8" fill="#f0c040" opacity="0.3" rx="1" />
        <rect x="260" y="120" width="6" height="8" fill="#f0c040" opacity="0.2" rx="1" />
      </svg>
    </>
  );
}

export function CometsScene() {
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
        {/* Comet */}
        <g style={{ animation: 'descendGlide 3s ease-in-out infinite alternate' }}>
          <line x1="280" y1="30" x2="200" y2="80" stroke="#c0c0e0" strokeWidth="1.5" opacity="0.5" />
          <line x1="280" y1="30" x2="210" y2="75" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
          <circle cx="280" cy="30" r="3" fill="#fff" opacity="0.8" />
          <circle cx="280" cy="30" r="6" fill="#fff" opacity="0.15" />
        </g>
      </svg>
    </>
  );
}

export function OwlsScene() {
  return (
    <>
      <Stars count={20} />
      <Moon size={45} top="10%" right="18%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%', opacity: 0.25 }}>
        {/* Fence */}
        <line x1="0" y1="140" x2="400" y2="140" stroke="#445" strokeWidth="2" />
        {[80, 160, 240, 320].map(x => (
          <line key={x} x1={x} y1="120" x2={x} y2="160" stroke="#445" strokeWidth="3" />
        ))}
        {/* Owl on fence */}
        <g transform="translate(160, 105)" style={{ animation: 'gentleBob 3s ease-in-out infinite' }}>
          <ellipse cx="0" cy="0" rx="10" ry="12" fill="#665544" />
          <circle cx="-4" cy="-4" r="3" fill="#f0c040" opacity="0.8" />
          <circle cx="4" cy="-4" r="3" fill="#f0c040" opacity="0.8" />
          <circle cx="-4" cy="-4" r="1.5" fill="#221100" />
          <circle cx="4" cy="-4" r="1.5" fill="#221100" />
        </g>
      </svg>
    </>
  );
}

export function AuroraScene() {
  return (
    <>
      <Stars count={30} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
        {/* Aurora bands */}
        {[
          { color: '#40cc80', y: 30, opacity: 0.12 },
          { color: '#8040cc', y: 50, opacity: 0.1 },
          { color: '#4080cc', y: 70, opacity: 0.08 },
        ].map((b, i) => (
          <path
            key={i}
            d={`M-20,${b.y} Q100,${b.y - 20} 200,${b.y + 10} T420,${b.y - 5}`}
            fill="none"
            stroke={b.color}
            strokeWidth="20"
            opacity={b.opacity}
            style={{ animation: `waveShift ${5 + i}s ease-in-out infinite`, '--wave-dx': `${-30 + i * 10}px` }}
          />
        ))}
      </svg>
    </>
  );
}

export function DescentScene() {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%', opacity: 0.15 }}>
        {/* Sloping hill */}
        <path d="M0,100 Q100,50 200,80 Q300,110 400,60 L400,200 L0,200Z" fill="#1a2a1a" />
      </svg>
    </>
  );
}

export function TreeScene() {
  return (
    <>
      <Stars count={40} />
      <Fireflies count={5} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '70%', opacity: 0.2 }}>
        {/* Old oak */}
        <rect x="185" y="100" width="30" height="100" fill="#3a2a1a" rx="5" />
        <ellipse cx="200" cy="80" rx="70" ry="55" fill="#2a3a2a" />
        <ellipse cx="180" cy="75" rx="40" ry="35" fill="#223322" />
      </svg>
    </>
  );
}

export function FinalScene() {
  return (
    <>
      <Stars count={50} />
      <Moon size={70} top="5%" right="10%" />
    </>
  );
}
