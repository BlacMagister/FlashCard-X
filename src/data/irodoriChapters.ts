import { ChapterData } from "../types";
import { irodoriData } from "./irodori";

export const irodoriChapters: ChapterData[] = Array.from({ length: 18 }, (_, i) => {
  const ch = i + 1;
  const cards = irodoriData.filter(d => d.chapter === ch).map(d => ({
    kanji: d.kanji,
    hiragana: d.hiragana || d.word,
    romaji: d.romaji,
    meaning: d.meaning
  }));
  return {
    id: 100 + ch,
    name: `Irodori Bab ${ch}`,
    cards
  };
});
