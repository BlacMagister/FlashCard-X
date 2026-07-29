const { irodoriA1_1 } = require('./src/data/irodoriA1_1.ts');
// since it's ts, we have to read it or parse JSON? Wait, I can just write a script that concatenates the files and replaces export const.
const fs = require('fs');

const f1 = fs.readFileSync('src/data/irodoriA1_1.ts', 'utf8');
const f2 = fs.readFileSync('src/data/irodoriA1_2.ts', 'utf8');

// The files start with `export const irodoriA1_x = [\n`
// and end with `];\n`

const d1 = f1.replace('export const irodoriA1_1 = [', '').replace('];', '');
const d2 = f2.replace('export const irodoriA1_2 = [', '').replace('];', '');

const extra = `
  ,
  { "chapter": 1, "word": "痛い！", "romaji": "itai!", "meaning": "Aduh!" },
  { "chapter": 2, "word": "え？", "romaji": "e?", "meaning": "Hah?" },
  { "chapter": 4, "word": "あれ？", "romaji": "are?", "meaning": "Lho?" },
  { "chapter": 5, "word": "すごい！", "romaji": "sugoi!", "meaning": "Wah, hebat!" },
  { "chapter": 5, "word": "え～！", "romaji": "ee!", "meaning": "Hah?!" },
  { "chapter": 15, "word": "本当！", "romaji": "hontoo!", "meaning": "Iya, benar!" }
`;

const combined = `import { FlashcardData } from "../types";\n\nexport const irodoriA1Data: FlashcardData[] = [\n${d1},${d2}${extra}\n];\n`;

fs.writeFileSync('src/data/irodoriA1.ts', combined);
