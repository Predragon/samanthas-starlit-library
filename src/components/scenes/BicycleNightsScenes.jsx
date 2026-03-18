import React from 'react';
import Stars from './Stars';
import Moon from './Moon';
import Fireflies from './Fireflies';

// ── Bicycle Nights scenes ───────────────────────
// Warm amber palette — Angeles City at night, grounded and real

export function SunsetStartScene({ accent }) {
  return (
    <>
      <Stars count={10} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '65%' }}>
        {/* Sunset glow at horizon — warm amber */}
        <rect x="0" y="0" width="400" height="40" fill={accent || '#f5a623'} opacity="0.06" />
        <rect x="0" y="20" width="400" height="40" fill="#cc6622" opacity="0.04" />
        {/* Mango tree silhouettes */}
        <g opacity="0.15">
          <rect x="30" y="100" width="14" height="70" fill="#2a1a0a" rx="3" />
          <ellipse cx="37" cy="80" rx="35" ry="30" fill="#1a2a1a" />
          <rect x="340" y="110" width="12" height="60" fill="#2a1a0a" rx="3" />
          <ellipse cx="346" cy="90" rx="30" ry="28" fill="#1a2a1a" />
          {/* Mangoes */}
          <ellipse cx="25" cy="72" rx="3" ry="4" fill="#f5a623" opacity="0.3" />
          <ellipse cx="50" cy="85" rx="3" ry="4" fill="#f5a623" opacity="0.25" />
        </g>
        {/* Warm evening ground */}
        <rect x="0" y="170" width="400" height="30" fill="#3a2a1a" opacity="0.08" />
      </svg>
    </>
  );
}

export function BicycleSeatScene({ accent }) {
  return (
    <>
      <Stars count={18} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '70%' }}>
        {/* Bicycle with child seat — warm silhouette */}
        <g transform="translate(150, 100)" opacity="0.2">
          {/* Rear wheel */}
          <circle cx="0" cy="40" r="22" fill="none" stroke={accent || '#f5a623'} strokeWidth="2" />
          {/* Front wheel */}
          <circle cx="70" cy="40" r="22" fill="none" stroke={accent || '#f5a623'} strokeWidth="2" />
          {/* Frame */}
          <line x1="22" y1="40" x2="35" y2="10" stroke={accent || '#f5a623'} strokeWidth="2" />
          <line x1="35" y1="10" x2="55" y2="10" stroke={accent || '#f5a623'} strokeWidth="2" />
          <line x1="55" y1="10" x2="70" y2="40" stroke={accent || '#f5a623'} strokeWidth="2" />
          <line x1="22" y1="40" x2="55" y2="10" stroke={accent || '#f5a623'} strokeWidth="2" />
          {/* Handlebars */}
          <line x1="55" y1="10" x2="60" y2="0" stroke={accent || '#f5a623'} strokeWidth="2" />
          <line x1="56" y1="2" x2="64" y2="2" stroke={accent || '#f5a623'} strokeWidth="2.5" strokeLinecap="round" />
          {/* Child seat — little blue seat */}
          <rect x="5" y="12" width="18" height="20" rx="4" fill="#4466aa" opacity="0.3" />
          <rect x="7" y="10" width="14" height="4" rx="2" fill="#4466aa" opacity="0.25" />
          {/* Dangling sandals */}
          <ellipse cx="10" cy="38" rx="3" ry="1.5" fill="#cc8844" opacity="0.2" />
          <ellipse cx="18" cy="39" rx="3" ry="1.5" fill="#cc8844" opacity="0.2" />
        </g>
        <rect x="0" y="175" width="400" height="25" fill="#333" opacity="0.08" />
      </svg>
    </>
  );
}

export function AngelesEveningScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Street */}
        <rect x="0" y="160" width="400" height="40" fill="#2a2a2a" opacity="0.1" />
        {/* Streetlamps — amber glow, blinking on */}
        {[80, 200, 320].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="60" x2={x} y2="100" stroke="#555" strokeWidth="2" opacity="0.12" />
            <circle cx={x} cy="56" r="5" fill={accent || '#f5a623'} opacity={0.12 + i * 0.05}
              style={{ animation: `glowPulse ${3 + i}s ease-in-out infinite`, '--glow-min': '0.08', '--glow-max': `${0.18 + i * 0.04}` }} />
            <path d={`M${x - 12},70 L${x},58 L${x + 12},70`} fill={accent || '#f5a623'} opacity="0.03" />
          </g>
        ))}
        {/* Tricycle silhouette */}
        <g transform="translate(130, 150)" opacity="0.08">
          <rect x="0" y="0" width="20" height="12" fill="#555" rx="2" />
          <circle cx="-4" cy="14" r="4" fill="none" stroke="#555" strokeWidth="1.5" />
          <circle cx="24" cy="14" r="4" fill="none" stroke="#555" strokeWidth="1.5" />
        </g>
        {/* Carinderia glow — warm amber spill */}
        <rect x="250" y="120" width="50" height="35" fill={accent || '#f5a623'} opacity="0.03" rx="2" />
        <rect x="255" y="125" width="10" height="8" fill={accent || '#f5a623'} opacity="0.06" rx="1" />
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
        {/* Wide open grass */}
        <rect x="0" y="130" width="400" height="70" fill="#1a2a1a" opacity="0.08" />
        {/* Old runway lines */}
        <line x1="0" y1="155" x2="400" y2="155" stroke="#444" strokeWidth="1" opacity="0.06" strokeDasharray="20 15" />
        <line x1="0" y1="158" x2="400" y2="158" stroke="#444" strokeWidth="1" opacity="0.04" strokeDasharray="20 15" />
        {/* Purple hills */}
        <path d="M0,110 Q100,85 200,95 Q300,105 400,80 L400,130 L0,130Z" fill="#2a1a3a" opacity="0.06" />
        {/* Grass blades */}
        {Array.from({ length: 15 }, (_, i) => (
          <line key={i} x1={20 + i * 25} y1="150" x2={22 + i * 25} y2="143"
            stroke="#2a4a2a" strokeWidth="0.8" opacity="0.08" />
        ))}
      </svg>
    </>
  );
}

export function AirplaneTakeoffScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Airplane climbing — moving upward */}
        <g style={{ animation: 'drift 8s ease-in-out infinite', '--drift-x': '30px' }}>
          <path d="M160,55 Q180,48 220,50 Q240,52 245,56 Q240,60 220,62 Q180,64 160,59Z"
            fill="#c0c8e0" opacity="0.15" />
          <path d="M185,56 L170,78 L210,56" fill="#c0c8e0" opacity="0.1" />
          <path d="M185,56 L170,34 L210,56" fill="#c0c8e0" opacity="0.1" />
          <path d="M162,54 L155,43 L165,54" fill="#c0c8e0" opacity="0.1" />
          {/* Navigation lights */}
          <circle cx="170" cy="78" r="2" fill="#ff3333" opacity="0.4"
            style={{ animation: 'twinkle 1.2s ease-in-out infinite' }} />
          <circle cx="170" cy="34" r="2" fill="#33ff33" opacity="0.4"
            style={{ animation: 'twinkle 1.2s ease-in-out infinite', animationDelay: '0.6s' }} />
          {/* Bright nose */}
          <circle cx="240" cy="56" r="3" fill="#fff" opacity="0.25" />
        </g>
        {/* Tangerine sky remnant */}
        <rect x="0" y="140" width="400" height="20" fill={accent || '#f5a623'} opacity="0.04" />
        {/* Ground */}
        <rect x="0" y="160" width="400" height="40" fill="#1a2a1a" opacity="0.06" />
        {/* Runway lights */}
        {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
          <circle key={i} cx={x} cy="165" r="1" fill={accent || '#f5a623'} opacity={0.1}
            style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite` }} />
        ))}
      </svg>
    </>
  );
}

export function AirplaneLandingScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Airplane descending — very low, big */}
        <g style={{ animation: 'gentleBob 4s ease-in-out infinite' }}>
          <path d="M120,50 Q150,42 200,44 Q240,46 250,52 Q240,58 200,60 Q150,62 120,56Z"
            fill="#c0c8e0" opacity="0.2" />
          <path d="M155,52 L135,80 L195,52" fill="#c0c8e0" opacity="0.12" />
          <path d="M155,52 L135,24 L195,52" fill="#c0c8e0" opacity="0.12" />
          {/* Landing lights — very bright, forward-facing */}
          <circle cx="248" cy="52" r="5" fill="#fff" opacity="0.3"
            style={{ animation: 'glowPulse 1.5s ease-in-out infinite', '--glow-min': '0.2', '--glow-max': '0.4' }} />
          <circle cx="248" cy="52" r="15" fill="#fff" opacity="0.05" />
          {/* Wing lights */}
          <circle cx="135" cy="80" r="2" fill="#ff3333" opacity="0.5"
            style={{ animation: 'twinkle 1s ease-in-out infinite' }} />
          <circle cx="135" cy="24" r="2" fill="#33ff33" opacity="0.5"
            style={{ animation: 'twinkle 1s ease-in-out infinite', animationDelay: '0.5s' }} />
        </g>
        {/* Ground with cricket hint */}
        <rect x="0" y="160" width="400" height="40" fill="#1a2a1a" opacity="0.06" />
        {/* Runway lights */}
        {[80, 140, 200, 260, 320].map((x, i) => (
          <circle key={i} cx={x} cy="165" r="1.5" fill={accent || '#f5a623'} opacity={0.12}
            style={{ animation: `twinkle ${1.5 + i * 0.2}s ease-in-out infinite` }} />
        ))}
      </svg>
    </>
  );
}

export function StarbucksScene({ accent }) {
  return (
    <>
      <Stars count={12} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Storefront — warm glow */}
        <rect x="120" y="70" width="160" height="100" fill="#1a3a2a" opacity="0.08" rx="3" />
        {/* Windows — warm interior */}
        <rect x="135" y="80" width="55" height="40" fill={accent || '#f5a623'} opacity="0.06" rx="2" />
        <rect x="210" y="80" width="55" height="40" fill={accent || '#f5a623'} opacity="0.05" rx="2" />
        {/* Green awning */}
        <rect x="120" y="66" width="160" height="8" fill="#006241" opacity="0.1" rx="2" />
        {/* Door glow */}
        <rect x="185" y="90" width="30" height="50" fill={accent || '#f5a623'} opacity="0.04" rx="2" />
        {/* Light spill on sidewalk */}
        <ellipse cx="200" cy="170" rx="80" ry="15" fill={accent || '#f5a623'} opacity="0.03" />
        {/* Ice cream — pink */}
        <circle cx="200" cy="105" r="5" fill="#ff88aa" opacity="0.12"
          style={{ animation: 'gentleBob 3s ease-in-out infinite' }} />
      </svg>
    </>
  );
}

export function SevenElevenScene({ accent }) {
  return (
    <>
      <Stars count={12} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Bright store */}
        <rect x="100" y="65" width="200" height="105" fill="#115533" opacity="0.06" rx="3" />
        {/* Fluorescent interior */}
        <rect x="110" y="75" width="80" height="45" fill="#fff" opacity="0.04" rx="2" />
        <rect x="210" y="75" width="80" height="45" fill="#fff" opacity="0.035" rx="2" />
        {/* Stripe — orange/green/red */}
        <rect x="100" y="62" width="200" height="6" fill="#ff6600" opacity="0.08" />
        <rect x="100" y="59" width="200" height="4" fill="#006633" opacity="0.06" />
        <rect x="100" y="56" width="200" height="4" fill="#cc0000" opacity="0.05" />
        {/* Donut box */}
        <g transform="translate(185, 125)" opacity="0.18">
          <rect x="0" y="0" width="24" height="14" fill={accent || '#f5a623'} rx="2" />
          <rect x="2" y="2" width="20" height="10" fill="none" stroke="#cc8844" strokeWidth="0.5" rx="1" />
          {/* Donuts */}
          <circle cx="7" cy="7" r="3" fill="#6b3e1c" opacity="0.6" />
          <circle cx="17" cy="7" r="3" fill="#ff88aa" opacity="0.5" />
          <circle cx="7" cy="7" r="1.2" fill={accent || '#f5a623'} opacity="0.5" />
          <circle cx="17" cy="7" r="1.2" fill={accent || '#f5a623'} opacity="0.5" />
          {/* Sprinkles on pink one */}
          {[14, 16, 18, 15, 19].map((sx, i) => (
            <rect key={i} x={sx} y={5 + i * 0.8} width="1" height="0.5"
              fill={['#ff3333', '#33ff33', '#3333ff', '#ffff00', '#ff33ff'][i]} opacity="0.4"
              transform={`rotate(${i * 30}, ${sx}, ${5 + i * 0.8})`} />
          ))}
        </g>
        {/* Door glow */}
        <rect x="170" y="85" width="25" height="50" fill="#fff" opacity="0.03" rx="1" />
      </svg>
    </>
  );
}

export function MoonlitRideScene() {
  return (
    <>
      <Stars count={35} />
      <Moon size={55} top="5%" right="12%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%' }}>
        {/* Quiet street */}
        <rect x="0" y="160" width="400" height="40" fill="#2a2a2a" opacity="0.06" />
        {/* Sleeping buildings */}
        <g opacity="0.06">
          <rect x="40" y="110" width="30" height="60" fill="#222" rx="2" />
          <rect x="280" y="120" width="40" height="50" fill="#222" rx="2" />
          <rect x="350" y="115" width="25" height="55" fill="#222" rx="2" />
        </g>
        {/* One dim window */}
        <rect x="290" y="128" width="4" height="5" fill="#f0c040" opacity="0.06" rx="1" />
        {/* Moonbeam on road */}
        <line x1="340" y1="0" x2="200" y2="165" stroke="#c0c8e0" strokeWidth="2" opacity="0.03" />
      </svg>
    </>
  );
}

export function BeltSafetyScene({ accent }) {
  return (
    <>
      <Stars count={28} />
      <Moon size={50} top="8%" right="15%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '70%' }}>
        {/* Bicycle stopped */}
        <g transform="translate(140, 85)" opacity="0.18">
          <circle cx="0" cy="50" r="22" fill="none" stroke={accent || '#f5a623'} strokeWidth="1.5" />
          <circle cx="70" cy="50" r="22" fill="none" stroke={accent || '#f5a623'} strokeWidth="1.5" />
          <line x1="22" y1="50" x2="35" y2="20" stroke={accent || '#f5a623'} strokeWidth="1.5" />
          <line x1="35" y1="20" x2="55" y2="20" stroke={accent || '#f5a623'} strokeWidth="1.5" />
          <line x1="55" y1="20" x2="70" y2="50" stroke={accent || '#f5a623'} strokeWidth="1.5" />
          {/* Belt loop — golden, around both */}
          <ellipse cx="25" cy="15" rx="18" ry="12" fill="none"
            stroke={accent || '#f5a623'} strokeWidth="1.5" opacity="0.5"
            strokeDasharray="3 2" />
        </g>
        {/* Safe warm glow */}
        <ellipse cx="200" cy="110" rx="50" ry="35" fill={accent || '#f5a623'} opacity="0.025"
          style={{ animation: 'warmPulse 4s ease-in-out infinite' }} />
        <rect x="0" y="170" width="400" height="30" fill="#2a2a2a" opacity="0.06" />
      </svg>
    </>
  );
}

export function WhisperRideScene({ accent }) {
  return (
    <>
      <Stars count={35} />
      <Moon size={55} top="5%" right="10%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%' }}>
        {/* Very quiet street — softer than moonlit-ride */}
        <rect x="0" y="165" width="400" height="35" fill="#222" opacity="0.05" />
        {/* Warm amber glow around cyclist — protective feeling */}
        <ellipse cx="200" cy="140" rx="40" ry="25" fill={accent || '#f5a623'} opacity="0.02"
          style={{ animation: 'warmPulse 5s ease-in-out infinite' }} />
        {/* Moonbeam path ahead */}
        <line x1="330" y1="10" x2="250" y2="165" stroke="#c0c8e0" strokeWidth="1.5" opacity="0.03" />
      </svg>
    </>
  );
}

export function LastLaneScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <Moon size={45} top="8%" right="18%" />
      <Fireflies count={3} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%' }}>
        <rect x="0" y="160" width="400" height="40" fill="#2a2a2a" opacity="0.06" />
        {/* Sleeping sari-sari stores */}
        <g opacity="0.07">
          <rect x="30" y="120" width="35" height="40" fill="#333" rx="2" />
          <rect x="32" y="122" width="31" height="10" fill="#555" rx="1" />
          <rect x="280" y="125" width="40" height="35" fill="#333" rx="2" />
          <rect x="282" y="127" width="36" height="10" fill="#555" rx="1" />
        </g>
        {/* Stray dog */}
        <g transform="translate(300, 152)" opacity="0.1"
          style={{ animation: 'drift 6s ease-in-out infinite', '--drift-x': '-15px' }}>
          <ellipse cx="0" cy="0" rx="10" ry="5" fill="#8b7355" />
          <circle cx="10" cy="-3" r="3.5" fill="#8b7355" />
          <line x1="-6" y1="5" x2="-7" y2="12" stroke="#8b7355" strokeWidth="1.5" />
          <line x1="6" y1="5" x2="7" y2="12" stroke="#8b7355" strokeWidth="1.5" />
          <path d="M-10,0 Q-14,-5 -12,-8" fill="none" stroke="#8b7355" strokeWidth="1.5" />
        </g>
      </svg>
    </>
  );
}

export function SipAndSingScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '65%' }}>
        {/* Sip & Sing building — karaoke bar, home */}
        <rect x="110" y="70" width="180" height="100" fill="#222" opacity="0.1" rx="3" />
        {/* Sign — dimming but still glowing */}
        <rect x="140" y="60" width="120" height="16" fill={accent || '#f5a623'} opacity="0.06" rx="3" />
        <text x="200" y="73" textAnchor="middle" fill={accent || '#f5a623'} fontSize="9"
          fontFamily="Caveat, cursive" opacity="0.2">Sip & Sing</text>
        {/* Karaoke lights dimming — colored dots fading */}
        {['#ff4444', '#44ff44', '#4444ff', '#ff44ff', '#ffff44'].map((c, i) => (
          <circle key={i} cx={145 + i * 26} cy="85" r="2.5" fill={c} opacity={0.06 - i * 0.008}
            style={{ animation: `glowPulse ${3 + i}s ease-in-out infinite`, '--glow-min': '0.03', '--glow-max': '0.08' }} />
        ))}
        {/* Windows — warm interior fading */}
        <rect x="130" y="90" width="30" height="25" fill={accent || '#f5a623'} opacity="0.04" rx="2" />
        <rect x="240" y="90" width="30" height="25" fill={accent || '#f5a623'} opacity="0.03" rx="2" />
        {/* Door — open, amber light */}
        <rect x="180" y="95" width="25" height="45" fill={accent || '#f5a623'} opacity="0.05" rx="2" />
        {/* Music note — last sleepy spark */}
        <text x="220" y="82" fontSize="10" fill={accent || '#f5a623'} opacity="0.08"
          style={{ animation: 'floatUp 5s ease-out infinite', '--start-opacity': '0.1' }}>♪</text>
      </svg>
    </>
  );
}

export function MammyWaitingScene({ accent }) {
  return (
    <>
      <Stars count={15} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '65%' }}>
        {/* Interior — warm, closing-up feel */}
        <rect x="80" y="60" width="240" height="110" fill="#1a1510" opacity="0.06" rx="3" />
        {/* Counter/register area */}
        <rect x="100" y="120" width="80" height="30" fill="#333" opacity="0.06" rx="2" />
        {/* Broom — leaning */}
        <line x1="280" y1="80" x2="275" y2="160" stroke="#886644" strokeWidth="2" opacity="0.08" />
        {/* Warm single light — the still-on light */}
        <circle cx="200" cy="70" r="6" fill={accent || '#f5a623'} opacity="0.12"
          style={{ animation: 'glowPulse 3s ease-in-out infinite', '--glow-min': '0.08', '--glow-max': '0.15' }} />
        <circle cx="200" cy="70" r="20" fill={accent || '#f5a623'} opacity="0.02" />
        {/* Floor — just swept */}
        <rect x="90" y="155" width="220" height="15" fill="#2a2010" opacity="0.04" />
      </svg>
    </>
  );
}

export function MammyKissScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <Moon size={45} top="5%" right="12%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Warm doorway glow — everything melted */}
        <rect x="165" y="70" width="70" height="100" fill={accent || '#f5a623'} opacity="0.04" rx="3" />
        {/* Donut box being handed over */}
        <g transform="translate(190, 115)" opacity="0.15"
          style={{ animation: 'gentleBob 4s ease-in-out infinite' }}>
          <rect x="0" y="0" width="22" height="12" fill={accent || '#f5a623'} rx="2" />
          <circle cx="7" cy="6" r="3" fill="#6b3e1c" opacity="0.5" />
          <circle cx="15" cy="6" r="3" fill="#ff88aa" opacity="0.4" />
        </g>
        {/* Warm light spill */}
        <ellipse cx="200" cy="170" rx="60" ry="12" fill={accent || '#f5a623'} opacity="0.025" />
        {/* Kiss sparkle */}
        <circle cx="200" cy="90" r="2" fill="#fff" opacity="0.15"
          style={{ animation: 'twinkle 2s ease-in-out infinite' }} />
      </svg>
    </>
  );
}

export function CarriedToBedScene({ accent }) {
  return (
    <>
      <Stars count={15} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }}>
        {/* Quiet back interior — past the karaoke floor */}
        <rect x="80" y="70" width="240" height="100" fill="#1a1510" opacity="0.05" rx="3" />
        {/* Sleeping microphones on stands */}
        <g opacity="0.06">
          <line x1="120" y1="90" x2="120" y2="150" stroke="#666" strokeWidth="1.5" />
          <circle cx="120" cy="88" r="4" fill="#444" />
          <line x1="260" y1="95" x2="260" y2="150" stroke="#666" strokeWidth="1.5" />
          <circle cx="260" cy="93" r="4" fill="#444" />
        </g>
        {/* Still empty floor */}
        <rect x="90" y="155" width="220" height="15" fill="#2a2010" opacity="0.03" />
        {/* Stairway hint — going up */}
        <g opacity="0.05">
          {[0, 1, 2, 3].map(i => (
            <rect key={i} x={300} y={140 - i * 12} width="25" height="3" fill="#555" />
          ))}
        </g>
        {/* Warm light from above — the bedroom upstairs */}
        <ellipse cx="312" cy="95" rx="15" ry="10" fill={accent || '#f5a623'} opacity="0.03" />
      </svg>
    </>
  );
}
