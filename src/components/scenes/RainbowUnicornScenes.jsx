import React from 'react';
import Stars from './Stars';
import Moon from './Moon';
import Fireflies from './Fireflies';
import Waves from './Waves';
import Rainbow from './Rainbow';
import Unicorn, { UnicornKneeling } from './Unicorn';
import Butterfly from './Butterfly';

export function BedroomStarsScene() {
  return (
    <>
      <Stars count={45} />
      <Moon size={50} top="5%" right="12%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%', opacity: 0.15 }}>
        {/* Window frame */}
        <rect x="140" y="20" width="120" height="90" fill="none" stroke="#556" strokeWidth="2" rx="3" />
        <line x1="200" y1="20" x2="200" y2="110" stroke="#556" strokeWidth="1.5" />
        <line x1="140" y1="65" x2="260" y2="65" stroke="#556" strokeWidth="1.5" />
        {/* Windowsill */}
        <rect x="135" y="108" width="130" height="6" fill="#445" rx="2" />
        {/* Bed silhouette */}
        <path d="M50,180 L50,140 Q55,130 80,130 L320,130 Q345,130 350,140 L350,180" fill="#222" opacity="0.5" />
        <ellipse cx="80" cy="135" rx="25" ry="8" fill="#334" opacity="0.4" /> {/* pillow */}
      </svg>
    </>
  );
}

export function UnicornArrivalScene({ accent }) {
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Rainbow spiral trail */}
        {['#ff4444', '#ff8844', '#ffcc00', '#44cc44', '#4488ff', '#8844cc'].map((c, i) => (
          <circle key={i} cx={200 + Math.cos(i * 1.2) * (40 + i * 8)} cy={60 + Math.sin(i * 1.2) * (20 + i * 5)}
            r={2} fill={c} opacity={0.2 - i * 0.02}
            style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite` }}
          />
        ))}
        {/* Sparkle particles descending */}
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={`sp${i}`} cx={170 + i * 8} cy={40 + i * 12} r={1.5}
            fill={accent || '#e0a0ff'} opacity={0.3}
            style={{ animation: `twinkle ${1.5 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
        {/* Unicorn */}
        <g style={{ animation: 'gentleBob 4s ease-in-out infinite' }}>
          <Unicorn x={140} y={100} scale={1.3} opacity={0.45} maneColor={accent || '#e0a0ff'} />
        </g>
        {/* Cloud wisps */}
        <ellipse cx="120" cy="90" rx="40" ry="10" fill="#fff" opacity="0.04" />
        <ellipse cx="260" cy="110" rx="50" ry="12" fill="#fff" opacity="0.03" />
      </svg>
    </>
  );
}

export function CloudGallopScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Clouds */}
        <ellipse cx="80" cy="80" rx="50" ry="14" fill="#fff" opacity="0.05" />
        <ellipse cx="320" cy="60" rx="60" ry="16" fill="#fff" opacity="0.04" />
        <ellipse cx="200" cy="120" rx="70" ry="15" fill="#fff" opacity="0.03" />
        {/* Unicorn galloping */}
        <g style={{ animation: 'drift 5s ease-in-out infinite', '--drift-x': '20px' }}>
          <Unicorn x={130} y={110} scale={1.1} opacity={0.4} maneColor={accent || '#e0a0ff'} />
        </g>
        {/* Cinnamon trees below — warm brown silhouettes */}
        <g opacity="0.12">
          <ellipse cx="100" cy="180" rx="25" ry="15" fill="#8b5e3c" />
          <rect x="96" y="180" width="8" height="20" fill="#6b3e1c" />
          <ellipse cx="300" cy="175" rx="20" ry="12" fill="#8b5e3c" />
          <rect x="296" y="175" width="8" height="25" fill="#6b3e1c" />
        </g>
        {/* Hoofprint sparkles */}
        {Array.from({ length: 5 }, (_, i) => (
          <circle key={i} cx={220 + i * 20} cy={130 + i * 3} r={1}
            fill={accent || '#e0a0ff'} opacity={0.25 - i * 0.04}
            style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

export function BelgradeGlowScene() {
  return (
    <>
      <Stars count={30} />
      <Moon size={55} top="3%" right="10%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Two rivers meeting — Sava and Danube */}
        <path d="M0,140 Q80,125 160,135 Q200,140 200,140" fill="none" stroke="#4488aa" strokeWidth="2" opacity="0.12" />
        <path d="M400,130 Q300,120 200,140" fill="none" stroke="#4488aa" strokeWidth="2" opacity="0.12" />
        {/* Water surface */}
        <rect x="0" y="145" width="400" height="55" fill="#1a2a3a" opacity="0.15" />
        {/* Kalemegdan fortress silhouette — glowing golden */}
        <g opacity="0.2">
          <path d="M130,145 L130,100 L145,90 L160,90 L175,100 L175,105 L200,105 L200,95 L210,85 L220,95 L220,145" fill="#1a1a2a" />
          {/* Tower */}
          <rect x="168" y="80" width="12" height="25" fill="#1a1a2a" />
          <path d="M168,80 L174,70 L180,80" fill="#1a1a2a" />
          {/* Golden glow */}
          <rect x="130" y="100" width="90" height="45" fill="#f0c040" opacity="0.08" />
        </g>
        {/* Warm window lights in fortress */}
        {[142, 155, 185, 205].map((wx, i) => (
          <rect key={i} x={wx} y={110 + (i % 2) * 10} width="4" height="5"
            fill="#f0c040" opacity={0.2 + i * 0.03} rx="1" />
        ))}
        {/* Moonlight reflection on water */}
        <line x1="330" y1="145" x2="300" y2="195" stroke="#f0c040" strokeWidth="2" opacity="0.06" />
      </svg>
    </>
  );
}

export function SerbianFeastScene() {
  return (
    <>
      <Stars count={15} />
      <Fireflies count={4} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Warm tint */}
        <rect x="0" y="0" width="400" height="200" fill="#cc8844" opacity="0.02" />
        {/* Plum tree */}
        <g opacity="0.2">
          <rect x="90" y="110" width="12" height="60" fill="#5a3a1a" rx="3" />
          <ellipse cx="96" cy="90" rx="35" ry="30" fill="#2a3a2a" />
          {/* Plums */}
          {[80, 95, 110].map((px, i) => (
            <circle key={i} cx={px} cy={80 + i * 8} r="3" fill="#6633aa" opacity="0.5" />
          ))}
        </g>
        {/* Bear baking pogača */}
        <g transform="translate(130, 130)" opacity="0.25">
          <ellipse cx="0" cy="0" rx="14" ry="16" fill="#885533" />
          <circle cx="0" cy="-14" r="8" fill="#885533" />
          <circle cx="-3" cy="-15" r="1.5" fill="#221100" />
          <circle cx="3" cy="-15" r="1.5" fill="#221100" />
          {/* Pogača — round bread */}
          <ellipse cx="18" cy="5" rx="8" ry="5" fill="#daa520" opacity="0.6" />
        </g>
        {/* Hedgehogs with tea */}
        <g transform="translate(270, 150)" opacity="0.2">
          <ellipse cx="0" cy="0" rx="8" ry="6" fill="#8b7355" />
          {/* Spines */}
          {[-5, -2, 1, 4].map((sx, i) => (
            <line key={i} x1={sx} y1="-4" x2={sx - 1} y2="-10" stroke="#6b5335" strokeWidth="1" />
          ))}
          {/* Teacup */}
          <ellipse cx="12" cy="2" rx="4" ry="3" fill="none" stroke="#cc8844" strokeWidth="1" opacity="0.5" />
        </g>
        {/* Cricket with gusle */}
        <g transform="translate(330, 140)" opacity="0.18">
          <ellipse cx="0" cy="0" rx="4" ry="7" fill="#336633" />
          {/* Gusle — one string */}
          <line x1="6" y1="-8" x2="6" y2="8" stroke="#886644" strokeWidth="1.5" />
          <ellipse cx="6" cy="6" rx="3" ry="4" fill="none" stroke="#886644" strokeWidth="1" />
        </g>
      </svg>
    </>
  );
}

export function ButterflyOceanScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Butterflies */}
        <Butterfly x={80} y={60} scale={1.2} color="#e0a0ff" opacity={0.4} />
        <Butterfly x={160} y={40} scale={0.8} color="#ffb0c0" opacity={0.35} />
        <Butterfly x={250} y={55} scale={1} color="#a0d0ff" opacity={0.3} />
        <Butterfly x={320} y={70} scale={0.7} color="#ffe0a0" opacity={0.3} />
        <Butterfly x={120} y={80} scale={0.6} color="#a0ffb0" opacity={0.25} />
        {/* Sapphire ocean below */}
        <rect x="0" y="140" width="400" height="60" fill="#1a3060" opacity="0.2" />
        <Waves count={3} color="#4488cc" baseOpacity={0.12} yStart={140} />
        {/* Coral islands */}
        <g opacity="0.15">
          <ellipse cx="120" cy="165" rx="25" ry="8" fill="#cc6644" />
          <ellipse cx="300" cy="170" rx="20" ry="6" fill="#cc8866" />
          {/* Tiny palm on island */}
          <line x1="120" y1="158" x2="120" y2="148" stroke="#336633" strokeWidth="1.5" />
          <path d="M115,148 Q120,143 125,148" fill="none" stroke="#338833" strokeWidth="1.5" />
        </g>
      </svg>
    </>
  );
}

export function MeadowGallopScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <Fireflies count={8} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Mountains */}
        <g opacity="0.12">
          <path d="M0,160 L80,90 L160,150 L240,80 L320,140 L400,100 L400,200 L0,200Z" fill="#2a2a3a" />
          {/* Snow caps */}
          <path d="M78,92 L80,90 L82,92" fill="#fff" opacity="0.3" />
          <path d="M238,82 L240,80 L242,82" fill="#fff" opacity="0.3" />
        </g>
        {/* Plum orchards — small round trees */}
        {[60, 140, 220, 340].map((tx, i) => (
          <g key={i} opacity={0.1 + i * 0.02}>
            <rect x={tx - 2} y="165" width="4" height="15" fill="#5a3a1a" />
            <circle cx={tx} cy="160" r="10" fill="#2a3a2a" />
            <circle key={`p${i}`} cx={tx + 5} cy={157} r="2" fill="#6633aa" opacity="0.4" />
          </g>
        ))}
        {/* White meadow flowers */}
        {Array.from({ length: 10 }, (_, i) => (
          <circle key={i} cx={30 + i * 38} cy={185 + (i % 3) * 4} r="1.5"
            fill="#fff" opacity={0.15} />
        ))}
        {/* Eagle silhouette high */}
        <g transform="translate(300, 40)" opacity="0.1">
          <path d="M-15,0 Q-8,-5 0,-2 Q8,-5 15,0 Q8,2 0,0 Q-8,2 -15,0Z" fill="#333" />
        </g>
        {/* Rivers of light — faint rainbow streaks */}
        <path d="M0,130 Q100,120 200,135 Q300,145 400,125" fill="none" stroke={accent || '#e0a0ff'} strokeWidth="1.5" opacity="0.08" />
      </svg>
    </>
  );
}

export function UnicornDescentScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <Moon size={60} top="3%" right="10%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Unicorn descending */}
        <g style={{ animation: 'descendGlide 6s ease-in-out infinite alternate' }}>
          <Unicorn x={130} y={90} scale={1.2} opacity={0.4} maneColor={accent || '#e0a0ff'} />
        </g>
        {/* Moonlight diamonds in hair */}
        {Array.from({ length: 6 }, (_, i) => (
          <rect key={i}
            x={200 + i * 15} y={80 + i * 8}
            width="3" height="3"
            fill="#fff" opacity={0.25 - i * 0.03}
            transform={`rotate(45, ${201 + i * 15}, ${81 + i * 8})`}
            style={{ animation: `twinkle ${1.5 + i * 0.3}s ease-in-out infinite` }}
          />
        ))}
        {/* Soft evening clouds */}
        <ellipse cx="100" cy="140" rx="60" ry="12" fill="#fff" opacity="0.03" />
        <ellipse cx="300" cy="155" rx="50" ry="10" fill="#fff" opacity="0.025" />
      </svg>
    </>
  );
}

export function UnicornLandingScene({ accent }) {
  return (
    <>
      <Stars count={40} />
      <Moon size={65} top="3%" right="10%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Dewy grass ground */}
        <rect x="0" y="165" width="400" height="35" fill="#1a2a1a" opacity="0.1" />
        {/* Dew drops */}
        {Array.from({ length: 12 }, (_, i) => (
          <circle key={i} cx={25 + i * 32} cy={172 + (i % 3) * 5} r="1"
            fill="#a0d0ff" opacity="0.2"
            style={{ animation: `twinkle ${2 + i * 0.2}s ease-in-out infinite` }}
          />
        ))}
        {/* Kneeling unicorn */}
        <UnicornKneeling x={150} y={130} scale={1.3} opacity={0.35} maneColor={accent || '#e0a0ff'} />
        {/* Rainbow resting — faint arc behind */}
        <Rainbow x={200} y={100} width={200} opacity={0.08} />
        {/* Fading sparkle trail */}
        {Array.from({ length: 5 }, (_, i) => (
          <circle key={`t${i}`} cx={100 + i * 50} cy={120 - i * 5} r={1.5}
            fill={accent || '#e0a0ff'} opacity={0.15 - i * 0.02}
            style={{ animation: `twinkle ${3 + i * 0.5}s ease-in-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}
