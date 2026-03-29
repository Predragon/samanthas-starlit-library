import React from 'react';
import Stars from './Stars';
import Moon from './Moon';
import Fireflies from './Fireflies';
import Waves from './Waves';

/* ── 1. Bedroom wish ─────────────────────────── */
export function SpWishScene({ accent }) {
  return (
    <>
      <Stars count={50} />
      <Moon size={45} top="5%" right="10%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '55%', opacity: 0.15 }}>
        {/* Window with star visible */}
        <rect x="150" y="15" width="100" height="80" fill="none" stroke="#667" strokeWidth="2" rx="3" />
        <line x1="200" y1="15" x2="200" y2="95" stroke="#667" strokeWidth="1.5" />
        <line x1="150" y1="55" x2="250" y2="55" stroke="#667" strokeWidth="1.5" />
        <rect x="145" y="93" width="110" height="5" fill="#445" rx="2" />
        {/* Wishing star in window */}
        <circle cx="185" cy="35" r="2.5" fill={accent || '#c8a0ff'}
          style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
        {/* Bed */}
        <path d="M40,180 L40,130 Q50,120 80,120 L330,120 Q350,120 355,130 L355,180" fill="#1a1530" opacity="0.6" />
        <ellipse cx="75" cy="125" rx="22" ry="7" fill="#2a2050" opacity="0.5" />
      </svg>
    </>
  );
}

/* ── 2. Transformation glow ──────────────────── */
export function SpTransformScene({ accent }) {
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Silver glow expanding from shoulders */}
        <radialGradient id="shoulderGlow" cx="50%" cy="60%" r="30%">
          <stop offset="0%" stopColor={accent || '#c8a0ff'} stopOpacity="0.2" />
          <stop offset="100%" stopColor={accent || '#c8a0ff'} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="120" rx="120" ry="80" fill="url(#shoulderGlow)"
          style={{ animation: 'glowPulse 3s ease-in-out infinite' }} />
        {/* Sparkle particles */}
        {Array.from({ length: 12 }, (_, i) => (
          <circle key={i}
            cx={150 + Math.cos(i * 0.52) * (50 + i * 5)}
            cy={110 + Math.sin(i * 0.52) * (30 + i * 3)}
            r={1.5} fill="#e0d0ff" opacity={0.3 - i * 0.02}
            style={{ animation: `twinkle ${1.5 + i * 0.25}s ease-in-out infinite`, animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </svg>
    </>
  );
}

/* ── 3. Wings unfold ─────────────────────────── */
export function SpWingsScene({ accent }) {
  return (
    <>
      <Stars count={40} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Left wing */}
        <g opacity="0.3" style={{ animation: 'gentleBob 3s ease-in-out infinite' }}>
          <path d="M200,110 Q160,80 120,70 Q90,65 70,80 Q60,90 80,100 Q120,95 200,110Z"
            fill={accent || '#c8a0ff'} opacity="0.25" />
          {/* Feather lines */}
          <path d="M180,100 Q150,85 120,80" fill="none" stroke="#e0d0ff" strokeWidth="0.5" opacity="0.3" />
          <path d="M170,105 Q140,92 100,88" fill="none" stroke="#e0d0ff" strokeWidth="0.5" opacity="0.25" />
        </g>
        {/* Right wing */}
        <g opacity="0.3" style={{ animation: 'gentleBob 3s ease-in-out infinite', animationDelay: '0.5s' }}>
          <path d="M200,110 Q240,80 280,70 Q310,65 330,80 Q340,90 320,100 Q280,95 200,110Z"
            fill={accent || '#c8a0ff'} opacity="0.25" />
          <path d="M220,100 Q250,85 280,80" fill="none" stroke="#e0d0ff" strokeWidth="0.5" opacity="0.3" />
          <path d="M230,105 Q260,92 300,88" fill="none" stroke="#e0d0ff" strokeWidth="0.5" opacity="0.25" />
        </g>
        {/* Central shimmer */}
        <circle cx="200" cy="110" r="4" fill="#fff" opacity="0.15"
          style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
        {/* Feather sparkles */}
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={i}
            cx={120 + i * 22} cy={75 + Math.sin(i * 0.8) * 15}
            r={1} fill="#fff" opacity={0.25}
            style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </>
  );
}

/* ── 4. Phone screen ─────────────────────────── */
export function SpPhoneScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Phone shape */}
        <g transform="translate(170, 60)" opacity="0.35">
          <rect x="0" y="0" width="60" height="100" fill="#111" rx="8" />
          <rect x="4" y="8" width="52" height="80" fill="#0a1530" rx="3" />
          {/* Screen glow */}
          <rect x="4" y="8" width="52" height="80" fill={accent || '#c8a0ff'} opacity="0.1" rx="3" />
          {/* Text lines on screen */}
          <rect x="10" y="30" width="30" height="2" fill="#667" opacity="0.5" rx="1" />
          <rect x="10" y="38" width="40" height="2" fill="#667" opacity="0.4" rx="1" />
          {/* Heart icon */}
          <circle cx="30" cy="55" r="5" fill={accent || '#c8a0ff'} opacity="0.3"
            style={{ animation: 'glowPulse 1.5s ease-in-out infinite' }} />
        </g>
        {/* Phone glow in dark room */}
        <radialGradient id="phoneGlow" cx="50%" cy="55%" r="25%">
          <stop offset="0%" stopColor={accent || '#c8a0ff'} stopOpacity="0.08" />
          <stop offset="100%" stopColor={accent || '#c8a0ff'} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="110" rx="100" ry="70" fill="url(#phoneGlow)" />
      </svg>
    </>
  );
}

/* ── 5. Blue dot / map ───────────────────────── */
export function SpBluedotScene({ accent }) {
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Map outline — abstract */}
        <g opacity="0.12">
          <path d="M80,80 Q120,60 180,85 Q220,95 280,70 Q330,55 360,80 L360,160 Q300,140 220,155 Q150,165 80,150Z"
            fill="none" stroke="#4488aa" strokeWidth="1" />
          {/* Landmass shapes */}
          <path d="M120,90 Q150,80 180,95 Q160,110 120,100Z" fill="#2a3a4a" opacity="0.5" />
          <path d="M240,75 Q280,65 310,80 Q290,95 250,90Z" fill="#2a3a4a" opacity="0.5" />
        </g>
        {/* Blue dot — pulsing */}
        <circle cx="280" cy="82" r="6" fill="#4488ff" opacity="0.15"
          style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
        <circle cx="280" cy="82" r="3" fill="#4488ff" opacity="0.5"
          style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
        {/* Dotted path from Samantha to Dady */}
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={i} cx={130 + i * 20} cy={100 - Math.sin(i * 0.5) * 10}
            r={1} fill={accent || '#c8a0ff'} opacity={0.2 + i * 0.03}
            style={{ animation: `twinkle ${1 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </svg>
    </>
  );
}

/* ── 6. Liftoff over Angeles City ────────────── */
export function SpLiftoffScene({ accent }) {
  return (
    <>
      <Stars count={45} />
      <Moon size={40} top="6%" right="15%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '65%' }}>
        {/* City silhouette below — shrinking */}
        <g opacity="0.15">
          <rect x="40" y="140" width="18" height="40" fill="#1a1a2a" rx="2" />
          <rect x="70" y="130" width="22" height="50" fill="#1a1a2a" rx="2" />
          <rect x="110" y="145" width="15" height="35" fill="#1a1a2a" rx="2" />
          <rect x="150" y="135" width="25" height="45" fill="#1a1a2a" rx="2" />
          <rect x="200" y="140" width="20" height="40" fill="#1a1a2a" rx="2" />
          <rect x="240" y="128" width="30" height="52" fill="#1a1a2a" rx="2" />
          <rect x="290" y="142" width="18" height="38" fill="#1a1a2a" rx="2" />
          <rect x="320" y="135" width="25" height="45" fill="#1a1a2a" rx="2" />
          {/* Sip & Sing glow */}
          <rect x="240" y="135" width="8" height="5" fill="#f0c040" opacity="0.4" rx="1" />
        </g>
        {/* Street lamps */}
        {[60, 130, 210, 300].map((x, i) => (
          <circle key={i} cx={x} cy={170} r="2" fill="#f0c040" opacity={0.15}
            style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite` }} />
        ))}
        {/* Sparkle trail going up */}
        {Array.from({ length: 6 }, (_, i) => (
          <circle key={`t${i}`} cx={200 + (i % 2 ? 8 : -8)} cy={120 - i * 18}
            r={1.5} fill={accent || '#c8a0ff'} opacity={0.3 - i * 0.04}
            style={{ animation: `twinkle ${1.5 + i * 0.2}s ease-in-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

/* ── 7. Flight across the world ──────────────── */
export function SpFlightScene({ accent }) {
  return (
    <>
      <Stars count={55} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Clouds */}
        <ellipse cx="80" cy="70" rx="45" ry="12" fill="#fff" opacity="0.04" style={{ animation: 'drift 8s ease-in-out infinite' }} />
        <ellipse cx="300" cy="50" rx="55" ry="14" fill="#fff" opacity="0.03" style={{ animation: 'drift 10s ease-in-out infinite reverse' }} />
        {/* Ocean below */}
        <rect x="0" y="155" width="400" height="45" fill="#0a1a3a" opacity="0.15" />
        <Waves count={3} color="#4488cc" baseOpacity={0.08} yStart={155} />
        {/* Mountains with snow */}
        <g opacity="0.1">
          <path d="M280,155 L310,120 L340,155" fill="#2a2a3a" />
          <path d="M308,122 L310,120 L312,122" fill="#fff" opacity="0.4" />
          <path d="M330,155 L355,130 L380,155" fill="#2a2a3a" />
          <path d="M353,132 L355,130 L357,132" fill="#fff" opacity="0.4" />
        </g>
        {/* Silver thread over ocean */}
        <path d="M0,140 Q100,130 200,135 Q300,140 400,125" fill="none"
          stroke="#c0c0c0" strokeWidth="0.8" opacity="0.1" />
        {/* Sleeping airplane */}
        <g transform="translate(120, 90) rotate(-5)" opacity="0.08" style={{ animation: 'drift 12s ease-in-out infinite' }}>
          <ellipse cx="0" cy="0" rx="20" ry="4" fill="#aaa" />
          <path d="M-5,-4 L-10,-15 L5,-4" fill="#aaa" />
          <path d="M-5,4 L-10,15 L5,4" fill="#aaa" />
        </g>
      </svg>
    </>
  );
}

/* ── 8. Seeing Dady through the wall ─────────── */
export function SpArrivalScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <Moon size={50} top="4%" right="8%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '65%' }}>
        {/* Building with lit window */}
        <g opacity="0.2">
          <rect x="130" y="50" width="140" height="120" fill="#1a1a2a" rx="3" />
          {/* Windows — dark */}
          {[145, 190, 235].map((wx, row) => (
            [65, 95, 125].map((wy, col) => (
              <rect key={`${row}-${col}`} x={wx} y={wy} width="18" height="14" fill="#0a0a15" rx="1" />
            ))
          ))}
          {/* One lit window — warm glow */}
          <rect x="190" y="95" width="18" height="14" fill="#f0c040" opacity="0.6" rx="1" />
          <rect x="190" y="95" width="18" height="14" fill={accent || '#c8a0ff'} opacity="0.15" rx="1" />
          {/* Dady silhouette in window */}
          <circle cx="199" cy="99" r="3" fill="#1a1a2a" opacity="0.4" />
        </g>
        {/* Sparkle trail approaching */}
        {Array.from({ length: 5 }, (_, i) => (
          <circle key={i} cx={80 + i * 25} cy={90 - i * 5}
            r={1.5} fill={accent || '#c8a0ff'} opacity={0.25 - i * 0.03}
            style={{ animation: `twinkle ${1.5 + i * 0.2}s ease-in-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

/* ── 9. Landing / touching hands ─────────────── */
export function SpLandingScene({ accent }) {
  return (
    <>
      <Stars count={35} />
      <Fireflies count={6} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Two hands reaching */}
        <g opacity="0.2" transform="translate(200, 100)">
          {/* Left hand (Samantha) — small */}
          <path d="M-30,5 Q-20,-5 -8,0" fill="none" stroke={accent || '#c8a0ff'} strokeWidth="2" strokeLinecap="round" />
          {/* Right hand (Dady) — larger */}
          <path d="M8,0 Q20,-5 30,5" fill="none" stroke="#f0c040" strokeWidth="2" strokeLinecap="round" />
          {/* Spark at meeting point */}
          <circle cx="0" cy="0" r="4" fill="#fff" opacity="0.3"
            style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
        </g>
        {/* Wings fading behind — faint */}
        <g opacity="0.1">
          <path d="M200,95 Q160,70 130,65 Q110,62 100,72" fill="none"
            stroke={accent || '#c8a0ff'} strokeWidth="1" />
          <path d="M200,95 Q240,70 270,65 Q290,62 300,72" fill="none"
            stroke={accent || '#c8a0ff'} strokeWidth="1" />
        </g>
      </svg>
    </>
  );
}

/* ── 10. Magic shimmer / dissolve ────────────── */
export function SpMagicScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Central dissolve burst */}
        <radialGradient id="magicBurst" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#f0c040" stopOpacity="0.15" />
          <stop offset="50%" stopColor={accent || '#c8a0ff'} stopOpacity="0.08" />
          <stop offset="100%" stopColor={accent || '#c8a0ff'} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="100" rx="150" ry="90" fill="url(#magicBurst)"
          style={{ animation: 'glowPulse 3s ease-in-out infinite' }} />
        {/* Dissolving particles — gold and purple */}
        {Array.from({ length: 16 }, (_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const r = 40 + (i % 3) * 20;
          return (
            <circle key={i}
              cx={200 + Math.cos(angle) * r}
              cy={100 + Math.sin(angle) * r * 0.6}
              r={1.5}
              fill={i % 2 === 0 ? '#f0c040' : (accent || '#c8a0ff')}
              opacity={0.3}
              style={{ animation: `twinkle ${1.5 + (i % 4) * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.1}s` }}
            />
          );
        })}
      </svg>
    </>
  );
}

/* ── 11. Belgrade / Kalemegdan ───────────────── */
export function SpBelgradeScene({ accent }) {
  return (
    <>
      <Stars count={40} />
      <Moon size={55} top="3%" right="10%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Two rivers meeting */}
        <path d="M0,135 Q80,120 160,130 Q200,135 200,135" fill="none" stroke="#4488aa" strokeWidth="2" opacity="0.12" />
        <path d="M400,125 Q300,115 200,135" fill="none" stroke="#4488aa" strokeWidth="2" opacity="0.12" />
        <rect x="0" y="140" width="400" height="60" fill="#1a2a3a" opacity="0.12" />
        {/* Kalemegdan fortress */}
        <g opacity="0.2">
          <path d="M130,140 L130,95 L145,85 L160,85 L175,95 L175,100 L200,100 L200,90 L210,80 L220,90 L220,140" fill="#1a1a2a" />
          <rect x="168" y="75" width="12" height="25" fill="#1a1a2a" />
          <path d="M168,75 L174,65 L180,75" fill="#1a1a2a" />
          <rect x="130" y="95" width="90" height="45" fill="#f0c040" opacity="0.08" />
        </g>
        {/* Warm cobblestone glow */}
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x={100 + i * 30} y={175 + (i % 2) * 4} width="6" height="3"
            fill="#f0c040" opacity={0.06} rx="1" />
        ))}
        {/* Two figures on the wall — tiny */}
        <g opacity="0.25" transform="translate(174, 85)">
          <circle cx="0" cy="0" r="2.5" fill="#ddd" /> {/* Dady head */}
          <circle cx="8" cy="2" r="2" fill="#ddd" /> {/* Samantha head */}
        </g>
      </svg>
    </>
  );
}

/* ── 12. Walking Belgrade streets ────────────── */
export function SpBelgradeWalkScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <Fireflies count={4} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Plum tree */}
        <g opacity="0.18">
          <rect x="80" y="110" width="10" height="55" fill="#5a3a1a" rx="3" />
          <ellipse cx="85" cy="90" rx="30" ry="25" fill="#2a3a2a" />
          {[70, 85, 100].map((px, i) => (
            <circle key={i} cx={px} cy={80 + i * 7} r="2.5" fill="#6633aa" opacity="0.4" />
          ))}
        </g>
        {/* Bakery — warm window */}
        <g opacity="0.2">
          <rect x="250" y="120" width="70" height="50" fill="#1a1a2a" rx="3" />
          <rect x="258" y="128" width="20" height="15" fill="#f0c040" opacity="0.4" rx="1" />
          <rect x="285" y="128" width="20" height="15" fill="#f0c040" opacity="0.3" rx="1" />
          {/* Bread shapes in window */}
          <ellipse cx="268" cy="137" rx="5" ry="3" fill="#daa520" opacity="0.3" />
        </g>
        {/* Cobblestone path */}
        <g opacity="0.08">
          {Array.from({ length: 15 }, (_, i) => (
            <rect key={i} x={30 + i * 25} y={178 + (i % 3) * 4} width="8" height="4" fill="#888" rx="1" />
          ))}
        </g>
      </svg>
    </>
  );
}

/* ── 13. "Where your tata grew" ──────────────── */
export function SpTataScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <Moon size={50} top="5%" right="12%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Park with swing */}
        <g opacity="0.15">
          <rect x="150" y="100" width="4" height="70" fill="#666" />
          <rect x="250" y="100" width="4" height="70" fill="#666" />
          <rect x="148" y="100" width="110" height="3" fill="#666" />
          {/* Swing */}
          <line x1="190" y1="103" x2="185" y2="140" stroke="#888" strokeWidth="1" />
          <line x1="210" y1="103" x2="205" y2="140" stroke="#888" strokeWidth="1" />
          <rect x="183" y="139" width="24" height="3" fill="#885533" rx="1" />
        </g>
        {/* School silhouette */}
        <g opacity="0.1">
          <rect x="30" y="130" width="80" height="40" fill="#1a1a2a" rx="2" />
          <rect x="55" y="120" width="30" height="15" fill="#1a1a2a" />
          <path d="M55,120 L70,110 L85,120" fill="#1a1a2a" />
          {/* Windows */}
          {[40, 60, 80].map((wx, i) => (
            <rect key={i} x={wx} y={140} width="8" height="8" fill="#223" opacity="0.5" rx="1" />
          ))}
        </g>
        {/* Lemonade glass — tiny detail */}
        <g transform="translate(320, 155)" opacity="0.15">
          <rect x="0" y="0" width="10" height="14" fill="#ffe080" rx="2" opacity="0.4" />
          <line x1="5" y1="-3" x2="12" y2="-6" stroke="#886" strokeWidth="1" />
        </g>
        {/* Two figures holding hands */}
        <g opacity="0.2" transform="translate(200, 160)">
          <circle cx="-5" cy="-8" r="3" fill="#ccc" />
          <line x1="-5" y1="-5" x2="-5" y2="5" stroke="#ccc" strokeWidth="1.5" />
          <circle cx="8" cy="-5" r="2.5" fill="#ccc" />
          <line x1="8" y1="-2.5" x2="8" y2="5" stroke="#ccc" strokeWidth="1.5" />
          <line x1="-2" y1="0" x2="5" y2="0" stroke={accent || '#c8a0ff'} strokeWidth="1" opacity="0.5" />
        </g>
      </svg>
    </>
  );
}

/* ── 14. Powers fading ───────────────────────── */
export function SpFadingScene({ accent }) {
  return (
    <>
      <Stars count={35} />
      <Moon size={50} top="5%" right="12%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Fading wings — very faint */}
        <g opacity="0.08">
          <path d="M200,110 Q160,80 120,70 Q90,65 70,80 Q60,90 80,100 Q120,95 200,110Z"
            fill={accent || '#c8a0ff'} />
          <path d="M200,110 Q240,80 280,70 Q310,65 330,80 Q340,90 320,100 Q280,95 200,110Z"
            fill={accent || '#c8a0ff'} />
        </g>
        {/* Falling sparkles — dissolving */}
        {Array.from({ length: 10 }, (_, i) => (
          <circle key={i}
            cx={140 + i * 14}
            cy={90 + i * 8}
            r={1.5 - i * 0.1}
            fill={accent || '#c8a0ff'}
            opacity={0.2 - i * 0.015}
            style={{ animation: `floatUp ${3 + i * 0.3}s ease-in-out infinite reverse`, animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {/* Dawn hint at horizon */}
        <rect x="0" y="175" width="400" height="25" fill="#2a1a30" opacity="0.08" />
        <rect x="0" y="185" width="400" height="15" fill="#4a2a40" opacity="0.04" />
      </svg>
    </>
  );
}

/* ── 15. Promise — "I'll fly to you" ─────────── */
export function SpPromiseScene({ accent }) {
  return (
    <>
      <Stars count={45} />
      <Moon size={55} top="4%" right="10%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Sky with constellation-like dots forming a wing shape */}
        {Array.from({ length: 7 }, (_, i) => {
          const x = 150 + i * 15;
          const y = 60 + Math.sin(i * 0.7) * 15;
          return (
            <circle key={i} cx={x} cy={y} r={2}
              fill="#fff" opacity={0.2}
              style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite` }}
            />
          );
        })}
        {/* Connecting lines — constellation */}
        <path d="M150,60 L165,50 L180,55 L195,45 L210,52 L225,48 L240,55"
          fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.08" />
      </svg>
    </>
  );
}

/* ── 16. Embrace — "flew into me" ────────────── */
export function SpEmbraceScene({ accent }) {
  return (
    <>
      <Stars count={35} />
      <Fireflies count={5} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Warm glow around center */}
        <radialGradient id="embraceGlow" cx="50%" cy="55%" r="35%">
          <stop offset="0%" stopColor="#f0c040" stopOpacity="0.1" />
          <stop offset="60%" stopColor={accent || '#c8a0ff'} stopOpacity="0.04" />
          <stop offset="100%" stopColor={accent || '#c8a0ff'} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="110" rx="130" ry="80" fill="url(#embraceGlow)"
          style={{ animation: 'glowPulse 4s ease-in-out infinite' }} />
        {/* Heart shape — subtle */}
        <path d="M200,130 Q185,110 190,100 Q195,90 200,95 Q205,90 210,100 Q215,110 200,130Z"
          fill={accent || '#c8a0ff'} opacity="0.1"
          style={{ animation: 'glowPulse 3s ease-in-out infinite' }} />
      </svg>
    </>
  );
}

/* ── 17. Waking — stone in hand ──────────────── */
export function SpWakingScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '55%', opacity: 0.15 }}>
        {/* Window — morning hint */}
        <rect x="150" y="15" width="100" height="80" fill="none" stroke="#667" strokeWidth="2" rx="3" />
        <line x1="200" y1="15" x2="200" y2="95" stroke="#667" strokeWidth="1.5" />
        <line x1="150" y1="55" x2="250" y2="55" stroke="#667" strokeWidth="1.5" />
        {/* Early dawn light in window */}
        <rect x="152" y="17" width="96" height="76" fill="#2a1a40" opacity="0.2" rx="2" />
        <rect x="145" y="93" width="110" height="5" fill="#445" rx="2" />
        {/* Bed */}
        <path d="M40,180 L40,130 Q50,120 80,120 L330,120 Q350,120 355,130 L355,180" fill="#1a1530" opacity="0.6" />
        <ellipse cx="75" cy="125" rx="22" ry="7" fill="#2a2050" opacity="0.5" />
        {/* Belgrade stone — tiny warm glow */}
        <ellipse cx="200" cy="140" rx="6" ry="4" fill="#887766" opacity="0.6" />
        <circle cx="200" cy="140" r="8" fill={accent || '#c8a0ff'} opacity="0.08"
          style={{ animation: 'glowPulse 3s ease-in-out infinite' }} />
      </svg>
    </>
  );
}

/* ── 18. Final — superpower is "we" ──────────── */
export function SpFinalScene({ accent }) {
  return (
    <>
      <Stars count={50} />
      <Fireflies count={8} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Gentle constellation forming heart */}
        {[
          [180, 70], [190, 60], [200, 65], [210, 60], [220, 70],
          [215, 80], [200, 95], [185, 80],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={1.5}
            fill="#fff" opacity={0.2}
            style={{ animation: `twinkle ${2 + i * 0.25}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
        {/* "we" glow */}
        <radialGradient id="weGlow" cx="50%" cy="40%" r="25%">
          <stop offset="0%" stopColor={accent || '#c8a0ff'} stopOpacity="0.1" />
          <stop offset="100%" stopColor={accent || '#c8a0ff'} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="80" rx="80" ry="50" fill="url(#weGlow)"
          style={{ animation: 'glowPulse 4s ease-in-out infinite' }} />
        {/* Belgrade stone glow — on the ground */}
        <ellipse cx="200" cy="170" rx="5" ry="3" fill="#887766" opacity="0.15" />
        <circle cx="200" cy="170" r="10" fill={accent || '#c8a0ff'} opacity="0.05"
          style={{ animation: 'glowPulse 3s ease-in-out infinite' }} />
      </svg>
    </>
  );
}
