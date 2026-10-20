import React from 'react';
import Stars from './Stars';
import Moon from './Moon';
import Fireflies from './Fireflies';

const PINK = '#ff8fc8';
const SVG_FULL = { position: 'absolute', bottom: 0, width: '100%', height: '100%' };

/* ── Shared pieces ───────────────────────────── */
function Bunny({ x, y, scale = 1, opacity = 0.35, color = '#ffd6ea' }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity}>
      {/* Floppy ears */}
      <ellipse cx="-6" cy="-26" rx="4" ry="12" fill={color} transform="rotate(-15 -6 -26)" />
      <ellipse cx="6" cy="-26" rx="4" ry="12" fill={color} transform="rotate(25 6 -26)" />
      <ellipse cx="-6" cy="-26" rx="2" ry="8" fill={PINK} opacity="0.6" transform="rotate(-15 -6 -26)" />
      {/* Head & body */}
      <circle cx="0" cy="-10" r="10" fill={color} />
      <ellipse cx="0" cy="8" rx="13" ry="12" fill={color} />
      <circle cx="-3.5" cy="-11" r="1.3" fill="#2a1030" />
      <circle cx="3.5" cy="-11" r="1.3" fill="#2a1030" />
      <circle cx="0" cy="-7" r="1.4" fill={PINK} />
    </g>
  );
}

function Sock({ x, y, scale = 1, color = PINK, rotate = 0, hearts = false, stripes = false, opacity = 0.35 }) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotate}) scale(${scale})`} opacity={opacity}>
      <path d="M0,0 L10,0 L10,22 Q10,30 18,30 L22,30 Q28,30 28,36 Q28,42 20,42 L6,42 Q0,42 0,34Z" fill={color} />
      <rect x="-1" y="-3" width="12" height="5" fill="#fff" opacity="0.35" rx="1" />
      {stripes && [8, 15, 22].map(sy => (
        <rect key={sy} x="0" y={sy} width="10" height="3" fill="#fff" opacity="0.3" />
      ))}
      {hearts && (
        <>
          <text x="2" y="16" fontSize="7" fill="#fff" opacity="0.7">♥</text>
          <text x="12" y="39" fontSize="6" fill="#fff" opacity="0.7">♥</text>
        </>
      )}
    </g>
  );
}

function SockMonster({ x, y, scale = 1, opacity = 0.3, crying = false, happy = false }) {
  const colors = ['#8a8aa0', '#6a90c0', '#c0a060', '#80b090', '#a070c0', '#c07070'];
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity}>
      <g style={{ animation: 'gentleBob 4s ease-in-out infinite' }}>
      {/* Lumpy body of socks */}
      {Array.from({ length: 14 }, (_, i) => (
        <ellipse key={i}
          cx={Math.cos(i * 1.7) * 22} cy={-40 + (i % 7) * 10}
          rx="14" ry="9" fill={colors[i % colors.length]}
          transform={`rotate(${i * 37} ${Math.cos(i * 1.7) * 22} ${-40 + (i % 7) * 10})`} />
      ))}
      {/* Big googly eyes */}
      <circle cx="-10" cy="-38" r="7" fill="#fff" />
      <circle cx="10" cy="-38" r="7" fill="#fff" />
      <circle cx="-9" cy="-37" r="3" fill="#1a0a20" />
      <circle cx="11" cy="-37" r="3" fill="#1a0a20" />
      {/* Pink heart-sock nose */}
      <ellipse cx="0" cy="-26" rx="6" ry="4" fill={PINK} />
      <text x="-2.5" y="-24" fontSize="5" fill="#fff">♥</text>
      {/* Mouth */}
      {happy
        ? <path d="M-9,-16 Q0,-8 9,-16" fill="none" stroke="#1a0a20" strokeWidth="2" />
        : <path d="M-8,-14 Q0,-19 8,-14" fill="none" stroke="#1a0a20" strokeWidth="2" />}
      {crying && (
        <>
          <ellipse cx="-14" cy="-28" rx="1.8" ry="3" fill="#9fd8ff" style={{ animation: 'glowPulse 1.6s ease-in-out infinite' }} />
          <ellipse cx="15" cy="-27" rx="1.8" ry="3" fill="#9fd8ff" style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
        </>
      )}
      </g>
    </g>
  );
}

function Crown({ x, y, scale = 1, opacity = 0.4 }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity}
      style={{ animation: 'glowPulse 2.5s ease-in-out infinite' }}>
      <path d="M0,12 L0,0 L6,6 L12,-3 L18,6 L24,0 L24,12Z" fill="#f0c040" />
      <circle cx="12" cy="6" r="2" fill={PINK} />
    </g>
  );
}

function PinkBed({ opacity = 0.3 }) {
  return (
    <g opacity={opacity}>
      <path d="M40,190 L40,140 Q50,128 85,128 L330,128 Q350,128 356,140 L356,190" fill="#3a1a40" />
      <path d="M50,150 Q200,138 350,150 L350,190 L50,190Z" fill={PINK} opacity="0.35" />
      <ellipse cx="90" cy="134" rx="28" ry="9" fill="#ffd6ea" opacity="0.5" />
    </g>
  );
}

function Closet({ x = 300, open = false, opacity = 0.25 }) {
  return (
    <g opacity={opacity}>
      <rect x={x} y="40" width="70" height="150" fill="#2a1430" stroke="#5a3a60" strokeWidth="2" rx="3" />
      {open ? (
        <>
          <rect x={x + 4} y="44" width="62" height="146" fill="#000" opacity="0.6" />
          <path d={`M${x},40 L${x - 28},50 L${x - 28},182 L${x},190Z`} fill="#3a1e40" stroke="#5a3a60" strokeWidth="1.5" />
          <radialGradient id="closetGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={PINK} stopOpacity="0.5" />
            <stop offset="100%" stopColor={PINK} stopOpacity="0" />
          </radialGradient>
          <ellipse cx={x + 35} cy="115" rx="34" ry="70" fill="url(#closetGlow)"
            style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
        </>
      ) : (
        <>
          <line x1={x + 35} y1="40" x2={x + 35} y2="190" stroke="#5a3a60" strokeWidth="1.5" />
          <circle cx={x + 30} cy="115" r="2" fill="#c0a0c0" />
          <circle cx={x + 40} cy="115" r="2" fill="#c0a0c0" />
        </>
      )}
    </g>
  );
}

/* ── 1. Pink castle bedroom ──────────────────── */
export function SmCastleScene() {
  return (
    <>
      <Stars count={45} />
      <Moon size={42} top="6%" right="12%" />
      <svg viewBox="0 0 400 200" style={{ ...SVG_FULL, height: '65%' }}>
        {/* Castle towers in the distance */}
        <g opacity="0.18">
          <rect x="20" y="40" width="30" height="100" fill={PINK} />
          <path d="M15,40 L35,10 L55,40Z" fill="#ff6fb0" />
          <rect x="350" y="50" width="28" height="90" fill={PINK} />
          <path d="M345,50 L364,20 L383,50Z" fill="#ff6fb0" />
        </g>
        <PinkBed />
        <Bunny x={120} y={128} scale={0.8} />
      </svg>
    </>
  );
}

/* ── 2. Goodnight kiss, closet creaks ────────── */
export function SmGoodnightScene() {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        {/* Lamp switching off */}
        <g opacity="0.3">
          <rect x="40" y="110" width="6" height="40" fill="#5a3a60" />
          <path d="M28,110 L58,110 L50,90 L36,90Z" fill="#f0c040" opacity="0.4" />
        </g>
        <Closet x={300} />
        {/* Creak lines */}
        {[0, 1, 2].map(i => (
          <path key={i} d={`M${290 - i * 8},${100 + i * 12} q-6,4 0,8`} fill="none" stroke={PINK}
            strokeWidth="1.5" opacity="0.3"
            style={{ animation: `twinkle ${1.2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} />
        ))}
        <text x="150" y="110" fontSize="22" fill={PINK} opacity="0.15"
          style={{ animation: 'glowPulse 2s ease-in-out infinite' }}>♥</text>
      </svg>
    </>
  );
}

/* ── 3. The Sock Monster appears ─────────────── */
export function SmMonsterScene() {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <Closet x={300} open />
        <SockMonster x={250} y={185} scale={1.3} opacity={0.35} />
        {/* Tumbling socks */}
        <Sock x={60} y={140} rotate={-20} stripes color="#6a90c0" opacity={0.2} />
        <Sock x={130} y={155} rotate={15} color="#c0a060" opacity={0.2} />
      </svg>
    </>
  );
}

/* ── 4. Dady snatched into Sock Land ─────────── */
export function SmSnatchScene() {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <Closet x={300} open />
        {/* Whoosh swirl into the closet */}
        {[0, 1, 2, 3].map(i => (
          <path key={i} d={`M${60 + i * 40},${80 + i * 15} Q${180 + i * 20},${40 + i * 10} 330,115`}
            fill="none" stroke={PINK} strokeWidth="2" strokeDasharray="6 6" opacity={0.25 - i * 0.04}
            style={{ animation: `drift ${3 + i}s ease-in-out infinite` }} />
        ))}
        {/* Dady wrapped in socks — a sock cocoon */}
        <g transform="translate(200, 110) rotate(-20)" opacity="0.35">
          <ellipse cx="0" cy="0" rx="14" ry="30" fill="#8a8aa0" />
          {[-18, -6, 6, 18].map(sy => (
            <rect key={sy} x="-14" y={sy} width="28" height="5" fill="#6a90c0" opacity="0.8" />
          ))}
          <circle cx="0" cy="-36" r="9" fill="#e8c8a8" />
        </g>
      </svg>
    </>
  );
}

/* ── 5. Samantha the Brave ───────────────────── */
export function SmBraveScene() {
  return (
    <>
      <Stars count={40} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <radialGradient id="braveGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={PINK} stopOpacity="0.25" />
          <stop offset="100%" stopColor={PINK} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="120" rx="140" ry="80" fill="url(#braveGlow)" />
        <Crown x={176} y={60} scale={2} opacity={0.45} />
        <Bunny x={260} y={170} scale={1.1} opacity={0.35} />
        {Array.from({ length: 10 }, (_, i) => (
          <circle key={i} cx={200 + Math.cos(i * 0.63) * 70} cy={75 + Math.sin(i * 0.63) * 30}
            r="1.5" fill="#fff" opacity="0.35"
            style={{ animation: `twinkle ${1.4 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </svg>
    </>
  );
}

/* ── 6. Into Sock Land ───────────────────────── */
export function SmSocklandScene() {
  return (
    <>
      <Stars count={30} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        {/* Rolling sock-hills */}
        <path d="M0,160 Q80,120 160,155 Q240,185 320,140 Q370,120 400,145 L400,200 L0,200Z" fill="#a070c0" opacity="0.18" />
        <path d="M0,180 Q100,155 200,175 Q300,195 400,170 L400,200 L0,200Z" fill={PINK} opacity="0.15" />
        {/* Sock-river */}
        <path d="M0,188 Q120,178 220,190 Q320,200 400,186" fill="none" stroke="#6a90c0" strokeWidth="4" opacity="0.25"
          style={{ animation: 'waveShift 5s ease-in-out infinite' }} />
        {/* Sock-trees: trunks with sock leaves */}
        {[70, 300].map((tx, i) => (
          <g key={tx}>
            <rect x={tx} y="95" width="6" height="55" fill="#5a3a40" opacity="0.25" />
            <Sock x={tx - 22} y={70} rotate={-30} color={i ? '#80b090' : PINK} stripes opacity={0.22} />
            <Sock x={tx + 10} y={62} rotate={30} color={i ? '#c0a060' : '#a070c0'} hearts opacity={0.22} />
          </g>
        ))}
        {/* Sock-birdies */}
        {[0, 1, 2].map(i => (
          <path key={i} d={`M${170 + i * 30},${50 + i * 8} q5,-5 10,0 q5,-5 10,0`} fill="none" stroke="#fff"
            strokeWidth="1.5" opacity="0.3" style={{ animation: `drift ${5 + i}s ease-in-out infinite` }} />
        ))}
      </svg>
    </>
  );
}

/* ── 7. The crying monster on its stone ──────── */
export function SmCryingScene() {
  return (
    <>
      <Stars count={30} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <path d="M0,175 Q200,160 400,175 L400,200 L0,200Z" fill="#a070c0" opacity="0.15" />
        <ellipse cx="140" cy="182" rx="50" ry="14" fill="#8a8aa0" opacity="0.2" />
        <SockMonster x={140} y={172} scale={1.1} crying />
        {/* Stripy sock-throne with Dady */}
        <g opacity="0.3">
          <rect x="270" y="110" width="60" height="75" fill="#6a90c0" rx="6" />
          {[120, 135, 150, 165].map(sy => (
            <rect key={sy} x="270" y={sy} width="60" height="6" fill="#fff" opacity="0.3" />
          ))}
          <circle cx="300" cy="135" r="10" fill="#e8c8a8" />
          <rect x="288" y="146" width="24" height="26" fill="#3a5a8a" rx="4" />
        </g>
      </svg>
    </>
  );
}

/* ── 8. "Why are you crying?" ────────────────── */
export function SmWhyScene() {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <SockMonster x={250} y={180} scale={1.2} crying />
        <Crown x={90} y={115} scale={1.2} opacity={0.35} />
        <Bunny x={140} y={180} scale={0.7} opacity={0.3} />
        {/* Lonely single sock */}
        <Sock x={330} y={60} rotate={10} color="#8a8aa0" opacity={0.18} />
        <text x="320" y="55" fontSize="14" fill="#fff" opacity="0.25">?</text>
      </svg>
    </>
  );
}

/* ── 9. Button finds the matching sock ───────── */
export function SmNookScene() {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        {/* Dark nook */}
        <path d="M240,200 Q240,120 300,110 Q360,120 360,200Z" fill="#000" opacity="0.35" />
        <radialGradient id="nookGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={PINK} stopOpacity="0.45" />
          <stop offset="100%" stopColor={PINK} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="300" cy="170" rx="40" ry="25" fill="url(#nookGlow)"
          style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
        <Sock x={286} y={150} rotate={-70} hearts opacity={0.5} />
        <Bunny x={150} y={175} scale={1.2} opacity={0.4} />
        {/* Pointing sparkle trail */}
        {Array.from({ length: 6 }, (_, i) => (
          <circle key={i} cx={175 + i * 18} cy={160 + Math.sin(i) * 4} r="1.5" fill="#fff" opacity="0.35"
            style={{ animation: `twinkle ${1 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }} />
        ))}
      </svg>
    </>
  );
}

/* ── 10. A perfect pair ──────────────────────── */
export function SmMatchScene() {
  return (
    <>
      <Stars count={40} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <Sock x={160} y={60} rotate={-10} hearts opacity={0.5} />
        <Sock x={210} y={60} rotate={10} hearts opacity={0.5} />
        {/* Hearts floating up */}
        {Array.from({ length: 8 }, (_, i) => (
          <text key={i} x={110 + i * 25} y={160 - (i % 3) * 20} fontSize={10 + (i % 3) * 3} fill={PINK} opacity="0.3"
            style={{ animation: `floatUp ${3 + i * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>♥</text>
        ))}
      </svg>
    </>
  );
}

/* ── 11. Sorry — and a big woolly hug ────────── */
export function SmSorryScene() {
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <SockMonster x={200} y={180} scale={1.4} happy opacity={0.32} />
        {/* Samantha & Dady inside the hug */}
        <g opacity="0.3">
          <circle cx="175" cy="150" r="9" fill="#e8c8a8" />
          <circle cx="225" cy="140" r="11" fill="#e8c8a8" />
        </g>
        <Crown x={166} y={132} scale={0.75} opacity={0.4} />
        <Sock x={60} y={150} rotate={-25} color="#6a90c0" stripes opacity={0.15} />
        <Sock x={320} y={145} rotate={20} color="#80b090" opacity={0.15} />
      </svg>
    </>
  );
}

/* ── 12. Home again, tucked in ───────────────── */
export function SmHomeScene() {
  return (
    <>
      <Stars count={40} />
      <Moon size={40} top="7%" right="14%" />
      <svg viewBox="0 0 400 200" style={{ ...SVG_FULL, height: '70%' }}>
        <Closet x={20} opacity={0.18} />
        <PinkBed />
        <Bunny x={120} y={128} scale={0.8} />
        <text x="250" y="110" fontSize="26" fill={PINK} opacity="0.25"
          style={{ animation: 'heartbeat 1.6s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>♥</text>
      </svg>
    </>
  );
}

/* ── 13. The bravest kind of heart ───────────── */
export function SmProudScene() {
  return (
    <>
      <Stars count={50} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <radialGradient id="heartGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={PINK} stopOpacity="0.3" />
          <stop offset="100%" stopColor={PINK} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="100" rx="120" ry="80" fill="url(#heartGlow)"
          style={{ animation: 'warmPulse 4s ease-in-out infinite' }} />
        <text x="200" y="125" fontSize="70" textAnchor="middle" fill={PINK} opacity="0.22"
          style={{ animation: 'heartbeat 2s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>♥</text>
        <Crown x={188} y={45} scale={1} opacity={0.4} />
      </svg>
    </>
  );
}

/* ── 14. Lost socks playing in Sock Land ─────── */
export function SmLostSocksScene() {
  const socks = [
    { x: 50, y: 70, r: -20, c: '#6a90c0', s: true },
    { x: 120, y: 110, r: 15, c: '#c0a060' },
    { x: 190, y: 60, r: -5, c: PINK, h: true },
    { x: 260, y: 100, r: 25, c: '#80b090', s: true },
    { x: 330, y: 65, r: -15, c: '#a070c0' },
  ];
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        {socks.map((k, i) => (
          <g key={i} style={{ animation: `gentleBob ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>
            <Sock x={k.x} y={k.y} rotate={k.r} color={k.c} stripes={k.s} hearts={k.h} opacity={0.25} />
          </g>
        ))}
        <SockMonster x={200} y={195} scale={0.7} happy opacity={0.2} />
      </svg>
    </>
  );
}

/* ── 15. Sleepy time ─────────────────────────── */
export function SmSleepyScene() {
  return (
    <>
      <Stars count={55} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        {/* Pink moon */}
        <circle cx="330" cy="40" r="22" fill={PINK} opacity="0.3"
          style={{ animation: 'glowPulse 4s ease-in-out infinite' }} />
        <circle cx="338" cy="35" r="20" fill="#12061a" opacity="0.9" />
        <PinkBed opacity={0.25} />
        <Bunny x={120} y={128} scale={0.8} opacity={0.3} />
        {/* Zzz */}
        {['z', 'z', 'Z'].map((z, i) => (
          <text key={i} x={150 + i * 14} y={110 - i * 14} fontSize={10 + i * 4} fill="#fff" opacity="0.25"
            style={{ animation: `floatUp ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}>{z}</text>
        ))}
      </svg>
      <Fireflies count={6} />
    </>
  );
}
