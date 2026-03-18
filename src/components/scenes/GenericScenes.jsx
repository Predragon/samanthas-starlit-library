import React from 'react';
import Stars from './Stars';
import Moon from './Moon';
import Waves from './Waves';

export function CloudsScene() {
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

export function FlightScene() {
  return (
    <>
      <Stars count={40} />
      <Moon />
    </>
  );
}

export function OceanScene({ accent }) {
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

export function DefaultScene() {
  return <Stars count={35} />;
}
