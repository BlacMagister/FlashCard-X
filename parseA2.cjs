const fs = require('fs');

function fixRomaji(str) {
  if (!str) return str;
  let fixed = str.replace(/ee/g, 'ei');
  fixed = fixed.replace(/oneisan/g, 'oneesan');
  
  fixed = fixed.replace(/oo/g, 'ou');
  fixed = fixed.replace(/oukii/g, 'ookii');
  fixed = fixed.replace(/oui/g, 'ooi');
  fixed = fixed.replace(/toui/g, 'tooi');
  fixed = fixed.replace(/ouku/g, 'ooku');
  fixed = fixed.replace(/koori/g, 'koori');
  fixed = fixed.replace(/toori/g, 'toori');
  return fixed;
}

const lines = fs.readFileSync('a1_words.txt', 'utf8').split('\n');
// Let's do this later if needed.
