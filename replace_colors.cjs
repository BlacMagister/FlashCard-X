const fs = require('fs');

const colorMap = {
  'bg-[#FDFCF8]': 'bg-[var(--color-app-bg)]',
  'bg-white': 'bg-[var(--color-card-bg)]',
  'bg-[#5A5A40]': 'bg-[var(--color-card-back)]',
  'bg-[#E8E8DF]': 'bg-[var(--color-border-color)]',
  'bg-[#F0F0E8]': 'bg-[var(--color-border-light)]',
  'hover:bg-[#FDFCF8]': 'hover:bg-[var(--color-element-bg)]',
  'hover:bg-white': 'hover:bg-[var(--color-card-bg)]',
  'hover:bg-[#E8E8DF]': 'hover:bg-[var(--color-border-color)]',
  'text-[#2D2D24]': 'text-[var(--color-primary)]',
  'text-[#4A4A38]': 'text-[var(--color-text-main)]',
  'text-[#5A5A40]': 'text-[var(--color-text-muted)]',
  'text-[#8C8C70]': 'text-[var(--color-text-light)]',
  'text-[#DEDED1]': 'text-[var(--color-text-inverse)]',
  'text-[#A3A38A]': 'text-[var(--color-text-light)]',
  'text-white': 'text-[var(--color-app-bg)]',
  'hover:text-[#5A5A40]': 'hover:text-[var(--color-text-muted)]',
  'hover:text-[#4A4A38]': 'hover:text-[var(--color-text-main)]',
  'border-[#E8E8DF]': 'border-[var(--color-border-color)]',
  'border-[#F0F0E8]': 'border-[var(--color-border-light)]',
  'border-[#5A5A40]': 'border-[var(--color-card-back)]',
  'hover:border-[#5A5A40]': 'hover:border-[var(--color-card-back)]',
  'ring-[#5A5A40]': 'ring-[var(--color-card-back)]',
};

const files = ['src/App.tsx', 'src/components/Card.tsx', 'src/components/Challenge.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [oldClass, newClass] of Object.entries(colorMap)) {
    content = content.split(oldClass).join(newClass);
  }
  
  content = content.replace(/text-\[\#FDFCF8\]/g, 'text-[var(--color-app-bg)]');
  content = content.replace(/bg-\[\#2D2D24\]/g, 'bg-[var(--color-primary)]');
  content = content.replace(/bg-\[\#FDF2F2\]/g, 'bg-red-50 dark:bg-red-900/30');
  content = content.replace(/bg-\[\#EEF7EE\]/g, 'bg-green-50 dark:bg-green-900/30');

  fs.writeFileSync(file, content);
});
console.log("Colors replaced");
