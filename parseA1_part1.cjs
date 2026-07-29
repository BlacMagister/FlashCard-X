const fs = require('fs');

const text = fs.readFileSync('text_to_parse_1.txt', 'utf8');
const lines = text.split('\n');

let currentChapter = 1;
const cards = [];

for (const line of lines) {
  if (!line.trim()) continue;

  const chapMatch = line.match(/^(\d+)\.\s/);
  if (chapMatch) {
    let num = parseInt(chapMatch[1]);
    if (num >= 1 && num <= 6) currentChapter = num;
    continue;
  }

  let word = "";
  let romaji = "";
  let meaning = "";

  const match = line.match(/^(.+?)\s+([a-zA-Z0-9\s\-\(\)\/\'\~]+)\s+([ぁ-んァ-ヶ○↓△\s\/・]+)\s+(.+)$/);
  if (match) {
    word = match[1].trim();
    romaji = match[2].trim();
    meaning = match[4].trim();
    cards.push({ chapter: currentChapter, word, romaji, meaning });
  } else {
    const fallbackMatch = line.match(/^(.+?)\s+([a-zA-Z0-9\-\(\)\/\'\~]+(?: [a-zA-Z0-9\-\(\)\/\'\~]+)*)\s+(.+)$/);
    if (fallbackMatch) {
       word = fallbackMatch[1].trim();
       romaji = fallbackMatch[2].trim();
       meaning = fallbackMatch[3].trim();
       const accentMatch = meaning.match(/^([ぁ-んァ-ヶ○↓△\s\/・]+)\s+(.+)$/);
       if (accentMatch) {
          meaning = accentMatch[2].trim();
       }
       cards.push({ chapter: currentChapter, word, romaji, meaning });
    } else {
       console.log("Could not parse:", line);
    }
  }
}

fs.writeFileSync('src/data/irodoriA1_1.ts', `export const irodoriA1_1 = ${JSON.stringify(cards, null, 2)};`);
console.log("Done. Wrote", cards.length, "cards.");
