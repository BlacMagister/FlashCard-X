const fs = require('fs');

const text = fs.readFileSync('text_to_parse.txt', 'utf8');
const lines = text.split('\n');

let currentChapter = 7;
const cards = [];

for (const line of lines) {
  if (!line.trim()) continue;

  const chapMatch = line.match(/^(\d+)\.\s/);
  if (chapMatch && parseInt(chapMatch[1]) >= 7 && !line.includes('ここ')) {
    // If it's a chapter header, e.g. "8. 山田さんは..."
    if (parseInt(chapMatch[1]) >= 7 && !line.includes('階') && !line.match(/\d+時/)) {
        let num = parseInt(chapMatch[1]);
        if (num >= 8 && num <= 18) currentChapter = num;
        continue;
    }
  }

  // Skip sub-headers like "1. ここは台所です"
  if (line.match(/^\d+\.\s/)) continue;
  if (line.startsWith('【')) continue;

  // e.g. 玄関 genkan げ↓んかん pintu/jalan masuk
  // The structure is roughly: Word Romaji Accent Meaning
  // Because meaning can have spaces, and romaji/accent can have spaces.
  // Actually, we can split by spaces and try to reconstruct.
  // Or better, since romaji is generally ascii, and accent is hiragana/katakana with ↓/○/△
  // We can use regex.

  let word = "";
  let romaji = "";
  let meaning = "";

  // The line usually looks like: [Word] [Romaji] [Accent] [Meaning]
  // We can strip out the Accent because we don't need it.
  // Romaji is made of a-z, A-Z, spaces, -, (, ), /, ', ~
  const match = line.match(/^(.+?)\s+([a-zA-Z0-9\s\-\(\)\/\'\~]+)\s+([ぁ-んァ-ヶ○↓△\s\/・]+)\s+(.+)$/);
  if (match) {
    word = match[1].trim();
    romaji = match[2].trim();
    meaning = match[4].trim();
    cards.push({ chapter: currentChapter, word, romaji, meaning });
  } else {
    // fallback if no accent or format is weird
    const fallbackMatch = line.match(/^(.+?)\s+([a-zA-Z0-9\-\(\)\/\'\~]+(?: [a-zA-Z0-9\-\(\)\/\'\~]+)*)\s+(.+)$/);
    if (fallbackMatch) {
       word = fallbackMatch[1].trim();
       romaji = fallbackMatch[2].trim();
       meaning = fallbackMatch[3].trim();
       // try to strip accent from meaning if it accidentally fell in there
       // accent is hiragana+symbols. If meaning starts with it, strip it.
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

fs.writeFileSync('src/data/irodoriA1_2.ts', `export const irodoriA1_2 = ${JSON.stringify(cards, null, 2)};`);
console.log("Done. Wrote", cards.length, "cards.");
