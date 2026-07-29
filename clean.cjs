const fs = require('fs');
let content = fs.readFileSync('src/data/irodoriA1.ts', 'utf8');

// The meaning string might have hiragana + symbols at the start.
// Example: "meaning": "おはよう（ございま↓す） Selamat pagi." -> we want to remove the Japanese part if there is Indonesian right after.
// Actually, an easier way is just to remove all Japanese characters and specific symbols from the `meaning` string, 
// EXCEPT when the meaning itself relies on it (which is rare).
// To be safe, we can just replace anything that looks like a Japanese accent sequence at the START of the meaning string, or just remove ○, ↓, △.

// Let's just remove the raw symbols ↓, ○, △
content = content.replace(/[↓○△]/g, '');

// Also some meanings have the hiragana repeated: "meaning": "おはよう（ございます） Selamat pagi."
// We can leave it, it's not harmful and sometimes adds context.

fs.writeFileSync('src/data/irodoriA1.ts', content);
