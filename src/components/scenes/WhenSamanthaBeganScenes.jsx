import React from 'react';
import Stars from './Stars';
import Moon from './Moon';

export function BedtimeQuestionScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '55%', opacity: 0.18 }}>
        {/* Warm bedside lamp glow */}
        <circle cx="320" cy="60" r="30" fill="#f0c040" opacity="0.08" />
        <circle cx="320" cy="60" r="15" fill="#f0c040" opacity="0.15" />
        {/* Lamp shape */}
        <rect x="316" y="65" width="8" height="25" fill="#886644" opacity="0.4" />
        <path d="M308,65 Q320,50 332,65" fill="#f0c040" opacity="0.2" />
        {/* Bed */}
        <path d="M40,180 L40,120 Q50,110 80,110 L350,110 Q370,110 380,120 L380,180" fill="#2a1a2a" opacity="0.4" />
        {/* Pillow */}
        <ellipse cx="90" cy="115" rx="35" ry="10" fill="#3a2a3a" opacity="0.4" />
        {/* Blanket */}
        <path d="M50,130 Q200,115 370,130 L370,180 L50,180Z" fill={accent || '#ff80a0'} opacity="0.05" />
        {/* Window with trees outside */}
        <rect x="50" y="20" width="70" height="55" fill="none" stroke="#445" strokeWidth="1.5" rx="2" />
        <line x1="85" y1="20" x2="85" y2="75" stroke="#445" strokeWidth="1" />
        {/* Tree outside window */}
        <rect x="70" y="40" width="4" height="20" fill="#1a2a1a" opacity="0.3" />
        <ellipse cx="72" cy="35" rx="15" ry="12" fill="#1a2a1a" opacity="0.2" />
      </svg>
    </>
  );
}

export function StoryBeginsScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Warm light spreading — story beginning */}
        <circle cx="200" cy="100" r="80" fill={accent || '#ff80a0'} opacity="0.03"
          style={{ animation: 'warmPulse 4s ease-in-out infinite' }} />
        <circle cx="200" cy="100" r="40" fill="#f0c040" opacity="0.04"
          style={{ animation: 'warmPulse 3s ease-in-out infinite' }} />
        {/* Soft footprint shapes fading into nothing */}
        {Array.from({ length: 4 }, (_, i) => (
          <g key={i} opacity={0.08 - i * 0.015}>
            <ellipse cx={260 - i * 30} cy={150 - i * 10} rx={4} ry={6}
              fill={accent || '#ff80a0'} />
          </g>
        ))}
      </svg>
    </>
  );
}

export function TinyBeginningsScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Central tiny glow — the very beginning */}
        <circle cx="200" cy="100" r="6" fill={accent || '#ff80a0'} opacity="0.3"
          style={{ animation: 'heartbeat 2.5s ease-in-out infinite', '--hb-min': '0.2', '--hb-max': '0.5', '--hb-mid': '0.35' }} />
        <circle cx="200" cy="100" r="15" fill={accent || '#ff80a0'} opacity="0.08"
          style={{ animation: 'heartbeat 2.5s ease-in-out infinite' }} />
        <circle cx="200" cy="100" r="30" fill={accent || '#ff80a0'} opacity="0.04"
          style={{ animation: 'heartbeat 2.5s ease-in-out infinite' }} />
        {/* Raindrop */}
        <path d="M150,70 Q152,60 154,70 Q152,75 150,70Z" fill="#a0c0e0" opacity="0.15"
          style={{ animation: 'gentleBob 3s ease-in-out infinite' }} />
        {/* Plum seed */}
        <ellipse cx="250" cy="80" rx="3" ry="5" fill="#6633aa" opacity="0.12"
          transform="rotate(15, 250, 80)" />
        {/* Tiny bead */}
        <circle cx="180" cy="130" r="2" fill="#f0c040" opacity="0.15" />
      </svg>
    </>
  );
}

export function MamasHeartScene({ accent }) {
  return (
    <>
      <Stars count={15} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Heart-shaped warm room — soft, abstract */}
        <path d="M200,160 C200,160 140,120 140,85 C140,60 165,50 200,75 C235,50 260,60 260,85 C260,120 200,160 200,160Z"
          fill={accent || '#ff80a0'} opacity="0.06"
          style={{ animation: 'heartbeat 2s ease-in-out infinite', '--hb-min': '0.04', '--hb-max': '0.09', '--hb-mid': '0.06' }} />
        <path d="M200,160 C200,160 140,120 140,85 C140,60 165,50 200,75 C235,50 260,60 260,85 C260,120 200,160 200,160Z"
          fill="none" stroke={accent || '#ff80a0'} strokeWidth="1" opacity="0.12" />
        {/* Bloom — small flowers growing */}
        {[170, 195, 220].map((fx, i) => (
          <g key={i} style={{ animation: `gentleGrow ${3 + i}s ease-in-out infinite alternate`, animationDelay: `${i * 0.5}s` }}>
            <circle cx={fx} cy={105 + i * 8} r={3 + i} fill={accent || '#ff80a0'} opacity={0.1} />
          </g>
        ))}
        {/* Tiny curling hands */}
        <path d="M190,100 Q188,95 191,93 Q194,95 192,100" fill="none" stroke="#f0d0d0" strokeWidth="0.8" opacity="0.15" />
        {/* Tiny feet */}
        <ellipse cx="210" cy="115" rx="3" ry="2" fill="#f0d0d0" opacity="0.1" />
        <ellipse cx="215" cy="116" rx="2.5" ry="1.8" fill="#f0d0d0" opacity="0.08" />
      </svg>
    </>
  );
}

export function GrowingScene({ accent }) {
  return (
    <>
      <Stars count={10} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Warm surrounding glow */}
        <ellipse cx="200" cy="100" rx="120" ry="80" fill={accent || '#ff80a0'} opacity="0.03" />
        {/* Growing form — abstract, gentle curves */}
        <g style={{ animation: 'gentleGrow 4s ease-in-out infinite alternate' }}>
          <ellipse cx="200" cy="95" rx="20" ry="25" fill={accent || '#ff80a0'} opacity="0.08" />
        </g>
        {/* Wiggle lines — movement */}
        <path d="M185,90 Q190,85 195,90" fill="none" stroke="#f0d0d0" strokeWidth="0.8" opacity="0.12"
          style={{ animation: 'drift 2s ease-in-out infinite', '--drift-x': '3px' }} />
        <path d="M205,105 Q210,100 215,105" fill="none" stroke="#f0d0d0" strokeWidth="0.8" opacity="0.1"
          style={{ animation: 'drift 2.5s ease-in-out infinite', '--drift-x': '-3px' }} />
        {/* Mama's belly — gentle arc */}
        <path d="M130,150 Q200,90 270,150" fill="none" stroke={accent || '#ff80a0'} strokeWidth="1.5" opacity="0.08" />
        {/* Joy bubbles */}
        {Array.from({ length: 5 }, (_, i) => (
          <circle key={i} cx={180 + i * 10} cy={140 - i * 8} r={1.5}
            fill="#f0c040" opacity={0.1}
            style={{ animation: `floatUp ${3 + i * 0.5}s ease-out infinite`, '--start-opacity': '0.1' }} />
        ))}
      </svg>
    </>
  );
}

export function DadyWhispersScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Warm glow */}
        <circle cx="200" cy="100" r="60" fill={accent || '#ff80a0'} opacity="0.03" />
        {/* Sound waves — whispers reaching inward */}
        {[0, 1, 2].map(i => (
          <path key={i}
            d={`M${130 - i * 15},${90 + i * 5} Q${165 - i * 10},${80 + i * 3} ${130 - i * 15},${110 + i * 5}`}
            fill="none" stroke={accent || '#ff80a0'} strokeWidth="1"
            opacity={0.1 - i * 0.025}
            style={{ animation: `glowPulse ${2 + i}s ease-in-out infinite`, '--glow-min': '0.04', '--glow-max': `${0.12 - i * 0.03}` }}
          />
        ))}
        {/* Central heart — tiny beating */}
        <circle cx="200" cy="100" r="8" fill={accent || '#ff80a0'} opacity="0.15"
          style={{ animation: 'heartbeat 2s ease-in-out infinite', '--hb-min': '0.1', '--hb-max': '0.25', '--hb-mid': '0.18' }} />
        {/* Two voice lines — Mama and Dady */}
        <path d="M270,80 Q240,90 215,95" fill="none" stroke="#f0c040" strokeWidth="0.8" opacity="0.08"
          strokeDasharray="2 3" />
        <path d="M280,110 Q250,105 220,100" fill="none" stroke="#a0c0ff" strokeWidth="0.8" opacity="0.08"
          strokeDasharray="2 3" />
      </svg>
    </>
  );
}

export function HeartbeatScene({ accent }) {
  return (
    <>
      <Stars count={15} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Central heartbeat — the star of this scene */}
        <circle cx="200" cy="95" r="12" fill={accent || '#ff80a0'} opacity="0.2"
          style={{ animation: 'heartbeat 1.8s ease-in-out infinite', '--hb-min': '0.15', '--hb-max': '0.4', '--hb-mid': '0.25' }} />
        <circle cx="200" cy="95" r="25" fill={accent || '#ff80a0'} opacity="0.06"
          style={{ animation: 'heartbeat 1.8s ease-in-out infinite', '--hb-min': '0.04', '--hb-max': '0.1' }} />
        <circle cx="200" cy="95" r="45" fill={accent || '#ff80a0'} opacity="0.03"
          style={{ animation: 'heartbeat 1.8s ease-in-out infinite', '--hb-min': '0.02', '--hb-max': '0.05' }} />
        {/* ECG-style heartbeat line */}
        <path d="M100,100 L160,100 L175,100 L185,80 L195,115 L205,85 L215,100 L240,100 L300,100"
          fill="none" stroke={accent || '#ff80a0'} strokeWidth="1.5" opacity="0.12"
          style={{ animation: 'glowPulse 1.8s ease-in-out infinite', '--glow-min': '0.08', '--glow-max': '0.18' }} />
        {/* Tap tap tap — ripples */}
        {[0, 1, 2].map(i => (
          <circle key={i} cx="200" cy="95" r={55 + i * 20}
            fill="none" stroke={accent || '#ff80a0'} strokeWidth="0.5"
            opacity={0.06 - i * 0.015}
            style={{ animation: `glowPulse ${1.8 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </>
  );
}

export function ArrivalDayScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Bright, warm light — the special day */}
        <circle cx="200" cy="80" r="70" fill="#f0c040" opacity="0.04"
          style={{ animation: 'warmPulse 3s ease-in-out infinite' }} />
        <circle cx="200" cy="80" r="35" fill="#fff" opacity="0.04"
          style={{ animation: 'warmPulse 2s ease-in-out infinite' }} />
        {/* Sparkles of magic */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const r = 50 + Math.random() * 30;
          return (
            <circle key={i}
              cx={200 + Math.cos(angle) * r}
              cy={80 + Math.sin(angle) * r}
              r={1.5} fill="#f0c040" opacity={0.2}
              style={{ animation: `sparkleIn ${2 + i * 0.3}s ease-out infinite`, animationDelay: `${i * 0.2}s` }}
            />
          );
        })}
        {/* Soft warm ground — arrival warmth */}
        <rect x="0" y="160" width="400" height="40" fill={accent || '#ff80a0'} opacity="0.03" />
      </svg>
    </>
  );
}

export function FirstCryScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Burst of light — the first cry */}
        <circle cx="200" cy="90" r="20" fill="#fff" opacity="0.06"
          style={{ animation: 'heartbeat 2s ease-in-out infinite', '--hb-min': '0.04', '--hb-max': '0.1' }} />
        <circle cx="200" cy="90" r="50" fill={accent || '#ff80a0'} opacity="0.04" />
        {/* Sound ripples — the cry fills the air */}
        {[0, 1, 2, 3].map(i => (
          <circle key={i} cx="200" cy="90" r={25 + i * 18}
            fill="none" stroke={accent || '#ff80a0'} strokeWidth="0.8"
            opacity={0.1 - i * 0.02}
            style={{ animation: `glowPulse ${1.5 + i * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {/* Ten tiny sparkles — ten little fingers */}
        {Array.from({ length: 10 }, (_, i) => {
          const angle = (i / 10) * Math.PI * 2;
          return (
            <circle key={i}
              cx={200 + Math.cos(angle) * 65}
              cy={90 + Math.sin(angle) * 40}
              r={1.5} fill="#f0c040" opacity={0.25}
              style={{ animation: `twinkle ${2 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
            />
          );
        })}
      </svg>
    </>
  );
}

export function FirstHoldScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Warm embrace glow — two circles overlapping */}
        <circle cx="185" cy="95" r="40" fill="#f0c040" opacity="0.03" /> {/* Dady */}
        <circle cx="215" cy="95" r="40" fill={accent || '#ff80a0'} opacity="0.03" /> {/* Mama */}
        {/* Where they overlap — the baby, brightest */}
        <ellipse cx="200" cy="95" rx="20" ry="18" fill="#fff" opacity="0.05"
          style={{ animation: 'warmPulse 3s ease-in-out infinite' }} />
        {/* Tiny heartbeat still going */}
        <circle cx="200" cy="95" r="5" fill={accent || '#ff80a0'} opacity="0.2"
          style={{ animation: 'heartbeat 2s ease-in-out infinite', '--hb-min': '0.15', '--hb-max': '0.3' }} />
        {/* Kiss sparkle */}
        <circle cx="200" cy="75" r="2" fill="#f0c040" opacity="0.2"
          style={{ animation: 'twinkle 2s ease-in-out infinite' }} />
        {/* Joy tears — tiny drops rising */}
        {[0, 1].map(i => (
          <path key={i} d={`M${175 + i * 50},${80} Q${176 + i * 50},${75} ${177 + i * 50},${80}`}
            fill="#a0c0e0" opacity="0.08"
            style={{ animation: `floatUp ${4 + i}s ease-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

export function BrightWorldScene({ accent }) {
  return (
    <>
      <Stars count={50} />
      <Moon size={60} top="5%" right="12%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Stars leaning in — drawn toward center */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const outerR = 90;
          const innerR = 40;
          return (
            <line key={i}
              x1={200 + Math.cos(angle) * outerR}
              y1={100 + Math.sin(angle) * outerR * 0.6}
              x2={200 + Math.cos(angle) * innerR}
              y2={100 + Math.sin(angle) * innerR * 0.6}
              stroke="#f0c040" strokeWidth="0.5" opacity="0.08"
              style={{ animation: `glowPulse ${3 + i * 0.2}s ease-in-out infinite` }}
            />
          );
        })}
        {/* Central warm glow — Samantha's light */}
        <circle cx="200" cy="100" r="25" fill={accent || '#ff80a0'} opacity="0.06"
          style={{ animation: 'warmPulse 4s ease-in-out infinite' }} />
        <circle cx="200" cy="100" r="10" fill="#f0c040" opacity="0.08"
          style={{ animation: 'warmPulse 3s ease-in-out infinite' }} />
      </svg>
    </>
  );
}
