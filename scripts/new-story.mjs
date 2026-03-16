import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const id = process.argv[2] || 'new-story';
const title = id.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

const template = {
  id,
  title,
  emoji: "✨",
  author: "Dady Fredy",
  theme: {
    sky: ["#0c1a3a", "#070d1f"],
    accent: "#f0c040",
    mood: "gentle-wonder"
  },
  pages: [
    { type: "cover", title, subtitle: "A poem for Samantha", emoji: "✨" },
    { type: "verse", scene: "start", lines: ["First line here,", "second line here,", "third line here,", "fourth line here."] },
    { type: "goodnight", scene: "final", lines: ["Goodnight, Samantha.", "Goodnight, anak."], emoji: "✨" }
  ]
};

const path = join(__dirname, '..', 'src', 'stories', `${id}.json`);
writeFileSync(path, JSON.stringify(template, null, 2) + '\n');
console.log(`Created: ${path}`);
console.log(`Don't forget to add it to src/stories/index.js`);
