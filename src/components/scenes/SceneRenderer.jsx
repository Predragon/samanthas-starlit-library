import React from 'react';
import Stars from './Stars';
import Moon from './Moon';
import Fireflies from './Fireflies';
import Dolphin from './Dolphin';
import Waves from './Waves';
import Jellyfish from './Jellyfish';
import Rainbow from './Rainbow';
import Whale from './Whale';

export default function SceneRenderer({ scene, storyId, accent }) {
  const S = SCENES[scene] || SCENES['default'];
  return <S accent={accent} storyId={storyId} />;
}

// ── Midnight Ride scenes ────────────────────────
function StartScene() {
  return (
    <>
      <Stars count={50} />
      <Moon />
    </>
  );
}

function BikesScene() {
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

function FireflyScene() {
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

function RooftopsScene() {
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

function CometsScene() {
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

function OwlsScene() {
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

function AuroraScene() {
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

function DescentScene() {
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

function TreeScene() {
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

function FinalScene() {
  return (
    <>
      <Stars count={50} />
      <Moon size={70} top="5%" right="10%" />
    </>
  );
}

// ── Sky Dolphins scenes ─────────────────────────

function OceanStartScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <Moon size={55} top="5%" right="10%" />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        <Waves count={5} color={accent} baseOpacity={0.2} yStart={120} />
        {/* Silver fin breaking water */}
        <g style={{ animation: 'gentleBob 3s ease-in-out infinite' }}>
          <path d="M200,125 L195,110 L205,110 Z" fill="#c0c8e0" opacity="0.5" />
        </g>
        {/* Splash droplets */}
        {[190, 195, 205, 210].map((x, i) => (
          <circle key={i} cx={x} cy={118 - i * 3} r="1.5" fill="#c0c8e0" opacity={0.3 - i * 0.05}
            style={{ animation: `floatUp ${2 + i * 0.3}s ease-out infinite`, '--start-opacity': '0.3' }}
          />
        ))}
      </svg>
    </>
  );
}

function DolphinsRisingScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        <Waves count={3} color={accent} baseOpacity={0.12} yStart={160} />
        {/* Three dolphins rising */}
        <Dolphin x={80} y={130} scale={0.7} color={accent} opacity={0.35} />
        <Dolphin x={180} y={100} scale={1} color="#c0c8e0" opacity={0.5} />
        <Dolphin x={280} y={120} scale={0.6} color={accent} opacity={0.3} flip />
        {/* Splash effects */}
        {[120, 220, 310].map((x, i) => (
          <circle key={i} cx={x} cy={155} r={2} fill="#fff" opacity={0.2}
            style={{ animation: `floatUp ${1.5 + i * 0.3}s ease-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

function BayaniStarScene({ accent }) {
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Two large dolphins with labels */}
        <g style={{ animation: 'gentleBob 4s ease-in-out infinite' }}>
          <Dolphin x={100} y={100} scale={1.4} color="#4488cc" opacity={0.5} label="Bayani" />
        </g>
        <g style={{ animation: 'gentleBob 3.5s ease-in-out infinite', animationDelay: '0.5s' }}>
          <Dolphin x={220} y={120} scale={1.2} color="#c0c8e0" opacity={0.4} label="Star" />
        </g>
        {/* Stardust trail */}
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={i} cx={160 + i * 15} cy={90 + Math.sin(i) * 10} r={1 + Math.random()}
            fill="#f0c040" opacity={0.3 - i * 0.03}
            style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

function FlamingoCloudScene() {
  return (
    <>
      <Stars count={20} />
      <Fireflies count={6} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Cloud */}
        <ellipse cx="200" cy="130" rx="80" ry="20" fill="#fff" opacity="0.06" />
        {/* Flamingo silhouette */}
        <g transform="translate(185, 95)" opacity="0.35">
          <ellipse cx="0" cy="0" rx="12" ry="8" fill="#ff6688" /> {/* body */}
          <path d="M-5,-8 C-3,-20 3,-22 2,-8" fill="none" stroke="#ff6688" strokeWidth="2" /> {/* neck */}
          <circle cx="0" cy="-22" r="4" fill="#ff6688" /> {/* head */}
          {/* Polka dots on body */}
          {[-5, 0, 5].map((dx, i) => (
            <circle key={i} cx={dx} cy={-1 + i * 2 - 2} r="1.5" fill="#fff" opacity="0.3" />
          ))}
          {/* Legs */}
          <line x1="-3" y1="8" x2="-5" y2="25" stroke="#ff6688" strokeWidth="1.5" />
          <line x1="3" y1="8" x2="5" y2="25" stroke="#ff6688" strokeWidth="1.5" />
        </g>
        {/* Turtle with goggles */}
        <g transform="translate(280, 140)" opacity="0.25">
          <ellipse cx="0" cy="0" rx="10" ry="6" fill="#448844" />
          <circle cx="8" cy="-3" r="3" fill="#448844" />
          {/* Goggles */}
          <circle cx="9" cy="-4" r="2" fill="none" stroke="#4488ff" strokeWidth="0.8" />
        </g>
        {/* Parrot silhouettes */}
        <g transform="translate(100, 80)" opacity="0.15">
          <ellipse cx="0" cy="0" rx="6" ry="8" fill="#44cc44" />
          <path d="M-4,8 L-6,18" stroke="#44cc44" strokeWidth="1" />
          <path d="M4,8 L6,18" stroke="#44cc44" strokeWidth="1" />
        </g>
      </svg>
    </>
  );
}

function RainbowJellyfishScene({ accent }) {
  return (
    <>
      <Stars count={20} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        <Rainbow x={200} y={80} width={280} opacity={0.2} />
        {/* Jellyfish */}
        <Jellyfish x={120} y={130} scale={1.2} color="#ff88cc" opacity={0.35} />
        <Jellyfish x={200} y={150} scale={0.8} color="#88ccff" opacity={0.3} />
        <Jellyfish x={300} y={135} scale={1} color="#ccbb44" opacity={0.25} />
        {/* Elephant on cloud */}
        <g transform="translate(320, 80)" opacity="0.2">
          <ellipse cx="0" cy="10" rx="30" ry="8" fill="#fff" opacity="0.3" /> {/* cloud */}
          <ellipse cx="0" cy="0" rx="12" ry="8" fill="#888" /> {/* body */}
          <path d="M10,-2 C14,0 16,6 14,10" fill="none" stroke="#888" strokeWidth="2" /> {/* trunk */}
          <circle cx="-8" cy="-6" r="5" fill="#888" opacity="0.7" /> {/* ear */}
        </g>
      </svg>
    </>
  );
}

function MoonbeamWhaleScene({ accent }) {
  return (
    <>
      <Stars count={30} />
      <Moon size={50} top="3%" right="15%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        <Whale x={200} y={100} scale={1.3} color="#f0c040" opacity={0.2} />
        {/* Gold stars tumbling from mouth */}
        {Array.from({ length: 6 }, (_, i) => (
          <g key={i} style={{ animation: `floatUp ${3 + i * 0.5}s ease-out infinite`, animationDelay: `${i * 0.4}s` }}>
            <circle cx={300 + i * 12} cy={100 + i * 5} r={2} fill="#f0c040" opacity={0.5 - i * 0.06} />
          </g>
        ))}
        {/* Moonbeam stream from moon */}
        <line x1="340" y1="20" x2="270" y2="90" stroke="#f0c040" strokeWidth="1" opacity="0.1" />
        <line x1="350" y1="25" x2="280" y2="95" stroke="#f0c040" strokeWidth="2" opacity="0.05" />
      </svg>
    </>
  );
}

function AnimalsBedtimeScene() {
  return (
    <>
      <Stars count={15} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Warm cinnamon tint overlay */}
        <rect x="0" y="0" width="400" height="200" fill="#cc8844" opacity="0.03" />
        {/* Tiger in hammock */}
        <g transform="translate(80, 110)" opacity="0.3">
          {/* Hammock curve */}
          <path d="M-30,0 Q0,15 30,0" fill="none" stroke="#886644" strokeWidth="1.5" />
          <path d="M-30,0 L-35,-20" stroke="#886644" strokeWidth="1" />
          <path d="M30,0 L35,-20" stroke="#886644" strokeWidth="1" />
          {/* Tiger body */}
          <ellipse cx="0" cy="8" rx="15" ry="6" fill="#cc8844" />
          {/* Stripes */}
          {[-8, -3, 2, 7].map((sx, i) => (
            <line key={i} x1={sx} y1="3" x2={sx + 1} y2="12" stroke="#664422" strokeWidth="1.5" opacity="0.5" />
          ))}
        </g>
        {/* Dancing bear */}
        <g transform="translate(200, 130)" opacity="0.25" style={{ animation: 'gentleBob 2s ease-in-out infinite' }}>
          <ellipse cx="0" cy="0" rx="14" ry="16" fill="#885533" />
          <circle cx="0" cy="-14" r="8" fill="#885533" />
          <circle cx="-4" cy="-16" r="1.5" fill="#221100" />
          <circle cx="4" cy="-16" r="1.5" fill="#221100" />
          {/* Arms out */}
          <line x1="-14" y1="-5" x2="-22" y2="-12" stroke="#885533" strokeWidth="3" strokeLinecap="round" />
          <line x1="14" y1="-5" x2="22" y2="-12" stroke="#885533" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* Penguin with book */}
        <g transform="translate(310, 140)" opacity="0.25">
          <ellipse cx="0" cy="0" rx="8" ry="12" fill="#222" />
          <ellipse cx="0" cy="2" rx="5" ry="8" fill="#ddd" />
          <circle cx="0" cy="-8" r="5" fill="#222" />
          <circle cx="-2" cy="-9" r="1" fill="#fff" />
          <circle cx="2" cy="-9" r="1" fill="#fff" />
          {/* Book */}
          <rect x="6" y="-3" width="8" height="6" fill="#cc4444" opacity="0.5" rx="1" />
        </g>
      </svg>
    </>
  );
}

function PlanetsMoonScene() {
  return (
    <>
      <Stars count={35} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Big moon center */}
        <circle cx="200" cy="80" r="40" fill="#ffeebb" opacity="0.15" />
        <circle cx="200" cy="80" r="40" fill="none" stroke="#ffeebb" strokeWidth="1" opacity="0.3" />
        {/* Saturn */}
        <g transform="translate(100, 60)" opacity="0.25">
          <circle cx="0" cy="0" r="12" fill="#cc9944" />
          <ellipse cx="0" cy="0" rx="22" ry="5" fill="none" stroke="#cc9944" strokeWidth="1.5"
            transform="rotate(-20)" />
        </g>
        {/* Mars dot */}
        <circle cx="320" cy="50" r="6" fill="#cc4422" opacity="0.2" />
        {/* Owl with cello */}
        <g transform="translate(300, 130)" opacity="0.2">
          <ellipse cx="0" cy="0" rx="10" ry="14" fill="#665544" />
          <circle cx="-3" cy="-6" r="3" fill="#f0c040" opacity="0.6" />
          <circle cx="3" cy="-6" r="3" fill="#f0c040" opacity="0.6" />
          {/* Cello lines */}
          <line x1="12" y1="-10" x2="12" y2="15" stroke="#886644" strokeWidth="1.5" />
          <ellipse cx="12" cy="5" rx="4" ry="8" fill="none" stroke="#886644" strokeWidth="1" />
        </g>
      </svg>
    </>
  );
}

function DolphinDescentScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        <Waves count={4} color={accent} baseOpacity={0.15} yStart={150} />
        {/* Single large dolphin gliding down */}
        <g style={{ animation: 'descendGlide 6s ease-in-out infinite alternate' }}>
          <Dolphin x={150} y={80} scale={1.8} color={accent} opacity={0.45} />
        </g>
        {/* Curved descent lines */}
        <path d="M220,50 Q260,80 280,130" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.15"
          strokeDasharray="4 4" />
        <path d="M230,45 Q270,75 290,125" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.1"
          strokeDasharray="4 4" />
        {/* Sea-spray diamond particles */}
        {Array.from({ length: 5 }, (_, i) => (
          <rect key={i} x={260 + i * 10} y={120 + i * 5} width="3" height="3"
            fill="#c0c8e0" opacity={0.2 - i * 0.03}
            transform={`rotate(45, ${262 + i * 10}, ${121 + i * 5})`}
            style={{ animation: `twinkle ${2 + i * 0.5}s ease-in-out infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

function StillWaterScene({ accent }) {
  return (
    <>
      <Stars count={40} />
      <Moon size={65} top="3%" right="10%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        <Waves count={5} color={accent} baseOpacity={0.1} yStart={130} />
        {/* Golden moonbeam stream */}
        <line x1="340" y1="0" x2="200" y2="130" stroke="#f0c040" strokeWidth="3" opacity="0.06" />
        <line x1="345" y1="0" x2="205" y2="130" stroke="#f0c040" strokeWidth="1" opacity="0.1" />
        {/* Water reflection */}
        <rect x="0" y="150" width="400" height="50" fill={accent} opacity="0.04" />
        {/* Sleeping dolphins */}
        <g opacity="0.3">
          <Dolphin x={130} y={155} scale={0.8} color={accent} opacity={0.4} />
          <Dolphin x={230} y={160} scale={0.7} color="#c0c8e0" opacity={0.3} flip />
        </g>
      </svg>
    </>
  );
}

function PromiseScene({ accent }) {
  return (
    <>
      <Stars count={50} />
      <Moon size={80} top="2%" right="8%" crescent={false} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        {/* Ghost/translucent dolphin silhouette */}
        <g style={{ animation: 'gentleBob 5s ease-in-out infinite' }}>
          <Dolphin x={140} y={100} scale={2} color={accent} opacity={0.15} />
        </g>
        {/* Twinkling stars around dolphin */}
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={i}
            cx={180 + Math.cos(i * 0.8) * 60}
            cy={100 + Math.sin(i * 0.8) * 40}
            r={1.5}
            fill="#f0c040"
            opacity={0.4}
            style={{ animation: `twinkle ${2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </>
  );
}

function RefrainScene({ accent }) {
  return (
    <>
      <Stars count={15} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        <Waves count={6} color={accent} baseOpacity={0.1} yStart={100} />
        {/* Ghost dolphin silhouettes */}
        <Dolphin x={100} y={140} scale={0.6} color={accent} opacity={0.12} />
        <Dolphin x={260} y={150} scale={0.5} color={accent} opacity={0.08} flip />
      </svg>
    </>
  );
}

// ── Generic fallback scenes ─────────────────────

function CloudsScene() {
  return (
    <>
      <Stars count={30} />
      <Moon size={50} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%', opacity: 0.08 }}>
        <ellipse cx="100" cy="100" rx="60" ry="20" fill="#fff" />
        <ellipse cx="300" cy="80" rx="50" ry="15" fill="#fff" />
        <ellipse cx="200" cy="140" rx="70" ry="18" fill="#fff" />
      </svg>
    </>
  );
}

function FlightScene() {
  return (
    <>
      <Stars count={40} />
      <Moon />
    </>
  );
}

function OceanScene({ accent }) {
  return (
    <>
      <Stars count={25} />
      <Moon size={50} />
      <svg viewBox="0 0 400 200" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
        <Waves count={4} color={accent || '#40c9c9'} baseOpacity={0.15} yStart={130} />
      </svg>
    </>
  );
}

function DefaultScene() {
  return <Stars count={35} />;
}

// ── Scene registry ──────────────────────────────
const SCENES = {
  // Midnight Ride
  start: StartScene,
  bikes: BikesScene,
  firefly: FireflyScene,
  rooftops: RooftopsScene,
  comets: CometsScene,
  owls: OwlsScene,
  aurora: AuroraScene,
  descent: DescentScene,
  tree: TreeScene,
  final: FinalScene,

  // Sky Dolphins
  'ocean-start': OceanStartScene,
  'dolphins-rising': DolphinsRisingScene,
  'bayani-star': BayaniStarScene,
  'flamingo-cloud': FlamingoCloudScene,
  'rainbow-jellyfish': RainbowJellyfishScene,
  'moonbeam-whale': MoonbeamWhaleScene,
  'animals-bedtime': AnimalsBedtimeScene,
  'planets-moon': PlanetsMoonScene,
  'dolphin-descent': DolphinDescentScene,
  'still-water': StillWaterScene,
  'promise': PromiseScene,
  'refrain': RefrainScene,

  // Generic fallbacks
  clouds: CloudsScene,
  flight: FlightScene,
  ocean: OceanScene,
  default: DefaultScene,
};
