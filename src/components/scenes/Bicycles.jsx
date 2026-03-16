export default function Bicycles({ y = 72, x1 = 30, x2 = 52, scale = 2, c1 = '#c8d6e5', c2 = '#f5d76e' }) {
  function Bike({ cx, cy, color }) {
    return (
      <g transform={`translate(${cx},${cy}) scale(${scale})`}>
        <circle cx="0" cy="0" r="14" fill="none" stroke={color} strokeWidth="1.8" className="bike-wheel" />
        <circle cx="40" cy="0" r="14" fill="none" stroke={color} strokeWidth="1.8" className="bike-wheel" style={{ animationDirection: 'reverse' }} />
        <line x1="15" y1="0" x2="22" y2="-22" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="22" y1="-22" x2="38" y2="-20" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="15" y1="0" x2="38" y2="-20" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="15" y1="0" x2="40" y2="0" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="40" y1="0" x2="38" y2="-20" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="38" y1="-20" x2="42" y2="-26" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <line x1="20" y1="-24" x2="26" y2="-24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </g>
    );
  }

  const viewH = 960;
  const byPx1 = viewH * y / 100;
  const byPx2 = viewH * y / 100;
  const bxPx1 = 720 * x1 / 100;
  const bxPx2 = 720 * x2 / 100;

  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 720 960" preserveAspectRatio="xMidYMid meet">
      <Bike cx={bxPx1} cy={byPx1} color={c1} />
      <Bike cx={bxPx2} cy={byPx2} color={c2} />
    </svg>
  );
}
