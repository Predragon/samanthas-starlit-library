import React from 'react';
import Stars from './Stars';
import Moon from './Moon';
import Fireflies from './Fireflies';

const GREEN = '#a8e6a0';
const PINE = '#2f6b4a';
const SVG_FULL = { position: 'absolute', bottom: 0, width: '100%', height: '100%' };

/* ── Shared pieces ───────────────────────────── */
function Pine({ x, y = 190, h = 90, opacity = 0.25, color = PINE }) {
  const w = h * 0.45;
  return (
    <g opacity={opacity}>
      <rect x={x - 3} y={y - 12} width="6" height="12" fill="#4a3020" />
      <path d={`M${x},${y - h} L${x + w * 0.6},${y - h * 0.55} L${x - w * 0.6},${y - h * 0.55}Z`} fill={color} />
      <path d={`M${x},${y - h * 0.75} L${x + w * 0.8},${y - h * 0.3} L${x - w * 0.8},${y - h * 0.3}Z`} fill={color} />
      <path d={`M${x},${y - h * 0.5} L${x + w},${y - 10} L${x - w},${y - 10}Z`} fill={color} />
    </g>
  );
}

function Forest({ opacity = 0.22 }) {
  return (
    <>
      {[20, 70, 340, 385].map((x, i) => (
        <Pine key={x} x={x} h={110 + (i % 2) * 30} opacity={opacity * 0.7} color="#1f4a34" />
      ))}
      {[45, 360].map((x, i) => (
        <Pine key={x} x={x} h={90 + i * 15} opacity={opacity} />
      ))}
      <path d="M0,185 Q200,170 400,185 L400,200 L0,200Z" fill={PINE} opacity={opacity * 0.8} />
    </>
  );
}

function Bunny({ x, y, scale = 1, opacity = 0.4, color = '#f4f4ee', leaf = false, flip = false }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${flip ? -scale : scale}, ${scale})`} opacity={opacity}>
      {/* Upright ears */}
      <ellipse cx="-4" cy="-28" rx="3.5" ry="11" fill={color} transform="rotate(-8 -4 -28)" />
      <ellipse cx="5" cy="-28" rx="3.5" ry="11" fill={color} transform="rotate(10 5 -28)" />
      <ellipse cx="-4" cy="-28" rx="1.6" ry="7" fill="#ffc0d0" opacity="0.7" transform="rotate(-8 -4 -28)" />
      <ellipse cx="5" cy="-28" rx="1.6" ry="7" fill="#ffc0d0" opacity="0.7" transform="rotate(10 5 -28)" />
      {/* Head, body, tail */}
      <circle cx="0" cy="-11" r="9" fill={color} />
      <ellipse cx="-2" cy="6" rx="13" ry="11" fill={color} />
      <circle cx="-14" cy="9" r="4" fill="#fff" />
      <circle cx="3" cy="-12" r="1.3" fill="#1a2a20" />
      <circle cx="8" cy="-9" r="1.2" fill="#ffa0b8" />
      {leaf && (
        <path d="M-6,-20 Q2,-30 10,-20 Q2,-16 -6,-20Z" fill={GREEN} opacity="0.9" />
      )}
    </g>
  );
}

function Walker({ x, y = 185, tall = false, opacity = 0.3, color = '#e8c8a8' }) {
  // Simple silhouette: Dady (tall) or Samantha (small)
  const h = tall ? 70 : 40;
  const headR = tall ? 9 : 7;
  return (
    <g opacity={opacity}>
      <circle cx={x} cy={y - h - headR} r={headR} fill={color} />
      <rect x={x - (tall ? 10 : 7)} y={y - h} width={tall ? 20 : 14} height={h * 0.6} rx="5"
        fill={tall ? '#3a6a8a' : '#ff9fc8'} />
      <rect x={x - (tall ? 8 : 5)} y={y - h * 0.4} width={tall ? 6 : 4} height={h * 0.4} fill="#2a2a3a" />
      <rect x={x + (tall ? 2 : 1)} y={y - h * 0.4} width={tall ? 6 : 4} height={h * 0.4} fill="#2a2a3a" />
    </g>
  );
}

function Clover({ x, y, scale = 1, opacity = 0.4, four = false }) {
  const leaves = four ? [0, 90, 180, 270] : [0, 120, 240];
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity}>
      <path d="M0,0 Q2,10 -2,18" stroke="#5aa060" strokeWidth="1.5" fill="none" />
      {leaves.map(r => (
        <g key={r} transform={`rotate(${r})`}>
          <path d="M0,0 C-6,-4 -6,-12 0,-9 C6,-12 6,-4 0,0Z" fill={four ? GREEN : '#5aa060'} />
        </g>
      ))}
    </g>
  );
}

function Mushroom({ x, y, scale = 1, opacity = 0.35 }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity}>
      <rect x="-6" y="-20" width="12" height="20" fill="#f0e6d0" rx="3" />
      <path d="M-24,-18 Q0,-48 24,-18Z" fill="#d04040" />
      {[[-12, -26], [4, -34], [12, -24]].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="3" fill="#fff" opacity="0.85" />
      ))}
    </g>
  );
}

function Sparkles({ cx, cy, rx = 60, ry = 25, n = 8 }) {
  return Array.from({ length: n }, (_, i) => (
    <circle key={i} cx={cx + Math.cos(i * (6.28 / n)) * rx} cy={cy + Math.sin(i * (6.28 / n)) * ry}
      r="1.5" fill="#fff" opacity="0.35"
      style={{ animation: `twinkle ${1.4 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.12}s` }} />
  ));
}

/* ── 1. Golden evening walk ──────────────────── */
export function FwWalkScene() {
  return (
    <>
      <Stars count={12} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <radialGradient id="fwSunset" cx="50%" cy="100%" r="70%">
          <stop offset="0%" stopColor="#f0c060" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f0c060" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="200" rx="260" ry="130" fill="url(#fwSunset)" />
        <circle cx="200" cy="168" r="26" fill="#f0c060" opacity="0.3" />
        <Forest opacity={0.18} />
        {/* Winding path */}
        <path d="M150,200 Q190,180 200,170 Q210,160 205,150" stroke="#c0a070" strokeWidth="10" fill="none" opacity="0.15" />
        <Walker x={130} tall />
        <Walker x={160} />
        <line x1="140" y1="143" x2="153" y2="157" stroke="#e8c8a8" strokeWidth="3" opacity="0.3" />
      </svg>
    </>
  );
}

/* ── 2. Into the whispering forest ───────────── */
export function FwForestScene() {
  return (
    <>
      <Stars count={18} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <Forest opacity={0.28} />
        <Pine x={150} h={120} opacity={0.2} />
        <Pine x={260} h={130} opacity={0.2} />
        {/* Ferns */}
        {[100, 210, 300].map((fx, i) => (
          <g key={fx} opacity="0.25" style={{ animation: `gentleBob ${3 + i}s ease-in-out infinite` }}>
            {[-30, -10, 10, 30].map(a => (
              <path key={a} d={`M${fx},188 q${a / 2},-20 ${a},-28`} stroke="#6ab070" strokeWidth="2" fill="none" />
            ))}
          </g>
        ))}
        {/* Stream */}
        <path d="M0,194 Q100,186 200,194 Q300,200 400,190" stroke="#7ab8d8" strokeWidth="3" fill="none" opacity="0.25"
          style={{ animation: 'waveShift 5s ease-in-out infinite' }} />
        {/* Little sniffle sound */}
        <text x="232" y="165" fontSize="9" fill="#fff" opacity="0.3"
          style={{ animation: 'glowPulse 1.8s ease-in-out infinite' }}>sniff…</text>
      </svg>
    </>
  );
}

/* ── 3. Behind the red mushroom ──────────────── */
export function FwFindScene() {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <Forest opacity={0.15} />
        <Mushroom x={170} y={190} scale={2} opacity={0.35} />
        <Bunny x={235} y={178} scale={1} opacity={0.45} leaf />
        {/* Dandelion puffs */}
        {[[90, 130], [310, 120], [330, 150]].map(([dx, dy], i) => (
          <g key={dx} opacity="0.25" style={{ animation: `drift ${5 + i}s ease-in-out infinite` }}>
            {Array.from({ length: 8 }, (_, k) => (
              <line key={k} x1={dx} y1={dy} x2={dx + Math.cos(k * 0.785) * 6} y2={dy + Math.sin(k * 0.785) * 6}
                stroke="#fff" strokeWidth="1" />
            ))}
          </g>
        ))}
      </svg>
    </>
  );
}

/* ── 4. "I'm Ivana" ──────────────────────────── */
export function FwIvanaScene() {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <Forest opacity={0.12} />
        <Bunny x={200} y={160} scale={2.2} opacity={0.42} leaf />
        {/* A teardrop */}
        <ellipse cx="222" cy="140" rx="2" ry="3.5" fill="#9fd8ff" opacity="0.45"
          style={{ animation: 'glowPulse 1.8s ease-in-out infinite' }} />
        {/* The bee she followed, buzzing far away */}
        <g opacity="0.3" style={{ animation: 'drift 4s ease-in-out infinite' }}>
          <ellipse cx="320" cy="60" rx="6" ry="4" fill="#f0c040" />
          <rect x="318" y="56" width="2" height="8" fill="#2a2010" />
          <ellipse cx="318" cy="54" rx="4" ry="2.5" fill="#fff" opacity="0.6" />
          <path d="M300,75 q-10,8 -20,0 q-10,-8 -20,2" stroke="#fff" strokeDasharray="3 3" fill="none" opacity="0.5" />
        </g>
      </svg>
    </>
  );
}

/* ── 5. Hands like a cup ─────────────────────── */
export function FwPromiseScene() {
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <radialGradient id="fwHandsGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.3" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="130" rx="130" ry="70" fill="url(#fwHandsGlow)"
          style={{ animation: 'warmPulse 4s ease-in-out infinite' }} />
        {/* Cupped hands */}
        <path d="M150,140 Q150,180 200,180 Q250,180 250,140 Q225,155 200,155 Q175,155 150,140Z"
          fill="#e8c8a8" opacity="0.32" />
        <Bunny x={200} y={150} scale={1.1} opacity={0.45} leaf />
        <Sparkles cx={200} cy={110} rx={80} ry={35} n={10} />
      </svg>
    </>
  );
}

/* ── 6. Tiny paw prints ──────────────────────── */
export function FwPawprintsScene() {
  const prints = [[60, 180], [95, 170], [130, 176], [165, 164], [200, 170], [235, 158], [270, 164]];
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <Forest opacity={0.14} />
        <ellipse cx="90" cy="182" rx="55" ry="10" fill="#4a3020" opacity="0.25" />
        {prints.map(([px, py], i) => (
          <g key={i} opacity="0.35"
            style={{ animation: `twinkle 2.5s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>
            <ellipse cx={px} cy={py} rx="4" ry="5" fill="#d8c8b0" />
            <circle cx={px - 4} cy={py - 7} r="1.6" fill="#d8c8b0" />
            <circle cx={px + 4} cy={py - 7} r="1.6" fill="#d8c8b0" />
          </g>
        ))}
        {/* Log and stone */}
        <rect x="290" y="168" width="70" height="16" rx="8" fill="#6a4a30" opacity="0.28" />
        <circle cx="358" cy="176" r="7" fill="#8a6a40" opacity="0.3" />
        {/* Sleeping hedgehog */}
        <g opacity="0.3">
          <path d="M300,168 Q318,140 340,166Z" fill="#7a5a40" />
          {[305, 312, 320, 328, 335].map(sx => (
            <line key={sx} x1={sx} y1="160" x2={sx - 2} y2="148" stroke="#5a3a20" strokeWidth="1.5" />
          ))}
        </g>
        <text x="340" y="140" fontSize="10" fill="#fff" opacity="0.25"
          style={{ animation: 'floatUp 3s ease-in-out infinite' }}>z</text>
      </svg>
    </>
  );
}

/* ── 7. The wise owl ─────────────────────────── */
export function FwOwlScene() {
  return (
    <>
      <Stars count={40} />
      <Moon size={44} top="8%" right="12%" />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        {/* Oak tree */}
        <g opacity="0.25">
          <rect x="230" y="80" width="26" height="120" fill="#4a3020" />
          <path d="M243,95 Q200,80 180,100" stroke="#4a3020" strokeWidth="8" fill="none" />
          <circle cx="245" cy="55" r="55" fill={PINE} />
          <circle cx="195" cy="70" r="35" fill={PINE} />
          <circle cx="295" cy="70" r="35" fill={PINE} />
        </g>
        {/* Owl on the branch */}
        <g transform="translate(185, 92)" opacity="0.45">
          <ellipse cx="0" cy="0" rx="13" ry="16" fill="#a08060" />
          <path d="M-11,-12 L-8,-20 L-3,-13Z M11,-12 L8,-20 L3,-13Z" fill="#a08060" />
          <circle cx="-5" cy="-5" r="5" fill="#fff" />
          <circle cx="5" cy="-5" r="5" fill="#fff" />
          <circle cx="-5" cy="-5" r="2.5" fill="#1a1a10" style={{ animation: 'twinkle 3s ease-in-out infinite' }} />
          <circle cx="5" cy="-5" r="2.5" fill="#1a1a10" style={{ animation: 'twinkle 3s ease-in-out infinite' }} />
          <path d="M-2,1 L0,5 L2,1Z" fill="#f0c040" />
        </g>
        <text x="130" y="70" fontSize="12" fill="#fff" opacity="0.28" fontStyle="italic"
          style={{ animation: 'glowPulse 2.4s ease-in-out infinite' }}>Hoo?</text>
        <Walker x={90} tall opacity={0.22} />
        <Walker x={118} opacity={0.22} />
      </svg>
    </>
  );
}

/* ── 8. Dusk falls, fireflies arrive ─────────── */
export function FwDuskScene() {
  return (
    <>
      <Stars count={50} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <Forest opacity={0.32} />
        <Walker x={180} tall opacity={0.2} />
        <Walker x={210} opacity={0.2} />
        <line x1="190" y1="143" x2="203" y2="157" stroke="#e8c8a8" strokeWidth="3" opacity="0.2" />
        {/* Crickets' song */}
        {[0, 1, 2].map(i => (
          <text key={i} x={70 + i * 120} y={175 - i * 6} fontSize="10" fill={GREEN} opacity="0.25"
            style={{ animation: `twinkle ${1.2 + i * 0.4}s ease-in-out infinite` }}>♪</text>
        ))}
      </svg>
      <Fireflies count={18} />
    </>
  );
}

/* ── 9. The silver willow ────────────────────── */
export function FwWillowScene() {
  return (
    <>
      <Stars count={40} />
      <Moon size={40} top="6%" right="10%" />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <rect x="192" y="60" width="16" height="140" fill="#4a3a30" opacity="0.25" />
        <ellipse cx="200" cy="55" rx="85" ry="35" fill="#8ab0a0" opacity="0.2" />
        {/* Weeping branches, parted in the middle */}
        {Array.from({ length: 16 }, (_, i) => {
          const bx = 120 + i * 11;
          const parted = bx > 175 && bx < 225;
          return (
            <path key={i} d={`M${bx},60 Q${bx + (parted ? (bx < 200 ? -25 : 25) : 4)},130 ${bx + (parted ? (bx < 200 ? -30 : 30) : 0)},${parted ? 150 : 185}`}
              stroke="#b8d8c8" strokeWidth="2" fill="none" opacity="0.25"
              style={{ animation: `gentleBob ${3 + (i % 4)}s ease-in-out infinite` }} />
          );
        })}
        {/* Glimpse of the meadow beyond */}
        <ellipse cx="200" cy="175" rx="30" ry="18" fill={GREEN} opacity="0.2"
          style={{ animation: 'glowPulse 3s ease-in-out infinite' }} />
      </svg>
      <Fireflies count={10} />
    </>
  );
}

/* ── 10. The moonlit clover meadow ───────────── */
export function FwMeadowScene() {
  return (
    <>
      <Stars count={50} />
      <Moon size={50} top="8%" right="14%" />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <path d="M0,160 Q200,140 400,160 L400,200 L0,200Z" fill="#3a7a4a" opacity="0.22" />
        {Array.from({ length: 12 }, (_, i) => (
          <Clover key={i} x={20 + i * 33} y={168 + (i % 3) * 8} scale={0.9} opacity={0.3} />
        ))}
        {/* Mama rabbit, standing tall */}
        <g transform="translate(290, 150) scale(1.8)">
          <Bunny x={0} y={0} opacity={0.4} color="#e0d8cc" flip />
        </g>
        <text x="225" y="85" fontSize="11" fill="#fff" opacity="0.3" fontStyle="italic"
          style={{ animation: 'glowPulse 2s ease-in-out infinite' }}>Ivana!</text>
        <Bunny x={100} y={150} scale={0.9} opacity={0.4} leaf />
      </svg>
    </>
  );
}

/* ── 11. Reunited ────────────────────────────── */
export function FwReunionScene() {
  return (
    <>
      <Stars count={45} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <path d="M0,170 Q200,155 400,170 L400,200 L0,200Z" fill="#3a7a4a" opacity="0.2" />
        <g transform="translate(200, 168) scale(2)">
          <Bunny x={8} y={0} opacity={0.4} color="#e0d8cc" flip />
        </g>
        <Bunny x={175} y={175} scale={0.9} opacity={0.45} leaf />
        {/* Brothers and sisters tumbling in */}
        {[[90, 182], [125, 178], [290, 180], [325, 184]].map(([bx, by], i) => (
          <g key={i} style={{ animation: `gentleBob ${1.6 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}>
            <Bunny x={bx} y={by} scale={0.65} opacity={0.32} color={i % 2 ? '#d8ccb8' : '#f0ece4'} flip={i > 1} />
          </g>
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <text key={i} x={150 + i * 20} y={110 - (i % 2) * 15} fontSize={10 + (i % 3) * 3} fill="#ffb0c8" opacity="0.3"
            style={{ animation: `floatUp ${3 + i * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>♥</text>
        ))}
      </svg>
    </>
  );
}

/* ── 12. The four-leaf clover gift ───────────── */
export function FwCloverScene() {
  return (
    <>
      <Stars count={45} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <radialGradient id="fwCloverGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.35" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="95" rx="110" ry="75" fill="url(#fwCloverGlow)"
          style={{ animation: 'warmPulse 4s ease-in-out infinite' }} />
        <g style={{ animation: 'gentleBob 4s ease-in-out infinite' }}>
          <Clover x={200} y={90} scale={3.2} opacity={0.5} four />
        </g>
        <Sparkles cx={200} cy={90} rx={75} ry={45} n={10} />
      </svg>
    </>
  );
}

/* ── 13. Goodbye, Ivana ──────────────────────── */
export function FwGoodbyeScene() {
  return (
    <>
      <Stars count={45} />
      <Moon size={40} top="7%" right="12%" />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <path d="M0,175 Q200,162 400,175 L400,200 L0,200Z" fill="#3a7a4a" opacity="0.18" />
        <g style={{ animation: 'gentleBob 2s ease-in-out infinite' }}>
          <Bunny x={300} y={178} scale={1.1} opacity={0.42} leaf flip />
        </g>
        <Walker x={110} tall opacity={0.24} />
        <Walker x={140} opacity={0.24} />
        {/* Waving arm & blown kisses */}
        <line x1="146" y1="155" x2="156" y2="138" stroke="#e8c8a8" strokeWidth="3" opacity="0.28" />
        {[0, 1, 2].map(i => (
          <text key={i} x={175 + i * 30} y={130 - i * 8} fontSize="11" fill="#ffb0c8" opacity="0.3"
            style={{ animation: `drift ${3 + i}s ease-in-out infinite` }}>♥</text>
        ))}
      </svg>
      <Fireflies count={8} />
    </>
  );
}

/* ── 14. A kind heart is the best light ──────── */
export function FwProudScene() {
  return (
    <>
      <Stars count={55} />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <radialGradient id="fwHeartGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0d080" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f0d080" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="100" rx="120" ry="80" fill="url(#fwHeartGlow)"
          style={{ animation: 'warmPulse 4s ease-in-out infinite' }} />
        <text x="200" y="125" fontSize="70" textAnchor="middle" fill="#f0d080" opacity="0.22"
          style={{ animation: 'heartbeat 2s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>♥</text>
        <Forest opacity={0.12} />
      </svg>
      <Fireflies count={10} />
    </>
  );
}

/* ── 15. Riding home on Dady's shoulders ─────── */
export function FwShouldersScene() {
  return (
    <>
      <Stars count={50} />
      <Moon size={42} top="7%" right="14%" />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        <Forest opacity={0.22} />
        <path d="M0,194 Q100,186 200,194 Q300,200 400,190" stroke="#7ab8d8" strokeWidth="3" fill="none" opacity="0.2"
          style={{ animation: 'waveShift 5s ease-in-out infinite' }} />
        <g style={{ animation: 'gentleBob 3s ease-in-out infinite' }}>
          <Walker x={200} tall opacity={0.28} />
          {/* Samantha on top */}
          <g opacity="0.28">
            <circle cx="200" cy="80" r="7" fill="#e8c8a8" />
            <rect x="193" y="87" width="14" height="16" rx="5" fill="#ff9fc8" />
            <rect x="186" y="98" width="6" height="14" rx="3" fill="#ff9fc8" transform="rotate(-25 189 98)" />
            <rect x="208" y="98" width="6" height="14" rx="3" fill="#ff9fc8" transform="rotate(25 211 98)" />
          </g>
          <Clover x={214} y={84} scale={0.7} opacity={0.45} four />
        </g>
      </svg>
      <Fireflies count={6} />
    </>
  );
}

/* ── 16. Two girls, one moon ─────────────────── */
export function FwSleepyScene() {
  return (
    <>
      <Stars count={60} />
      <Moon size={46} top="6%" right="44%" />
      <svg viewBox="0 0 400 200" style={SVG_FULL}>
        {/* Samantha's bed (left) */}
        <g opacity="0.25">
          <path d="M20,190 L20,150 Q28,140 55,140 L170,140 Q182,140 186,150 L186,190" fill="#3a2a40" />
          <path d="M28,158 Q100,148 180,158 L180,190 L28,190Z" fill="#ff9fc8" opacity="0.35" />
          <ellipse cx="60" cy="146" rx="22" ry="7" fill="#fff" opacity="0.5" />
        </g>
        <Clover x={88} y={142} scale={0.6} opacity={0.4} four />
        {/* Ivana's burrow (right) */}
        <path d="M230,200 Q230,145 310,140 Q390,145 390,200Z" fill="#4a3020" opacity="0.28" />
        <path d="M270,200 Q270,165 310,162 Q350,165 350,200Z" fill="#000" opacity="0.3" />
        <g transform="translate(310, 192) scale(0.9)">
          <ellipse cx="0" cy="-6" rx="16" ry="10" fill="#f4f4ee" opacity="0.35" />
          <ellipse cx="8" cy="-16" rx="9" ry="3" fill="#f4f4ee" opacity="0.35" />
        </g>
        {/* Zzz from both */}
        {['z', 'z', 'Z'].map((z, i) => (
          <text key={`s${i}`} x={110 + i * 12} y={125 - i * 12} fontSize={9 + i * 3} fill="#fff" opacity="0.25"
            style={{ animation: `floatUp ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}>{z}</text>
        ))}
        {['z', 'z', 'Z'].map((z, i) => (
          <text key={`i${i}`} x={320 + i * 10} y={150 - i * 10} fontSize={7 + i * 2} fill={GREEN} opacity="0.25"
            style={{ animation: `floatUp ${3.4 + i * 0.5}s ease-in-out infinite`, animationDelay: `${0.3 + i * 0.5}s` }}>{z}</text>
        ))}
      </svg>
      <Fireflies count={5} />
    </>
  );
}
