import { ChapterData } from "../types";
import { irodoriA2Data } from "./irodoriA2Data";

export const irodoriA2Chapters: ChapterData[] = Array.from({ length: 18 }, (_, i) => {
  const ch = i + 1;
  const cards = irodoriA2Data.filter(d => d.chapter === ch).map(d => ({
    kanji: d.kanji,
    hiragana: d.hiragana || d.word,
    romaji: d.romaji,
    meaning: d.meaning
  }));

  return {
    id: 200 + ch,
    name: `Irodori Dasar (A2) Bab ${ch}`,
    cards
  };
});
