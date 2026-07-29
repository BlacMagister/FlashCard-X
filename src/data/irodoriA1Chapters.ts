import { ChapterData } from "../types";
import { irodoriA1Data } from "./irodoriA1";

export const irodoriA1Chapters: ChapterData[] = Array.from({ length: 18 }, (_, i) => {
  const ch = i + 1;
  const cards = irodoriA1Data.filter(d => d.chapter === ch).map(d => ({
    kanji: d.word,
    hiragana: d.word,
    romaji: d.romaji,
    meaning: d.meaning
  }));
  return {
    id: 400 + ch, // use 400s for A1 to avoid collision
    name: `Irodori Dasar (A1) Bab ${ch}`,
    cards
  };
});
