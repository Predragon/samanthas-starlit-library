// Generate simple PWA icons as SVG files (can be used directly)
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, '..', 'public');

function makeSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${size * 0.15}" fill="#0c1a3a"/>
  <circle cx="${size * 0.7}" cy="${size * 0.22}" r="${size * 0.1}" fill="#f0c040" opacity="0.8"/>
  <circle cx="${size * 0.73}" cy="${size * 0.2}" r="${size * 0.09}" fill="#0c1a3a"/>
  <circle cx="${size * 0.25}" cy="${size * 0.15}" r="${size * 0.02}" fill="#fff" opacity="0.6"/>
  <circle cx="${size * 0.45}" cy="${size * 0.1}" r="${size * 0.015}" fill="#fff" opacity="0.5"/>
  <circle cx="${size * 0.15}" cy="${size * 0.3}" r="${size * 0.012}" fill="#fff" opacity="0.4"/>
  <text x="${size * 0.5}" y="${size * 0.68}" text-anchor="middle" font-size="${size * 0.35}">📚</text>
</svg>`;
}

// Write as SVG (browsers handle SVG icons)
writeFileSync(join(pub, 'icon-192.svg'), makeSvg(192));
writeFileSync(join(pub, 'icon-512.svg'), makeSvg(512));
console.log('Icons generated (SVG format)');
