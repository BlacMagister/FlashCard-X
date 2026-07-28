import { ChapterData } from "../types";
import { irodoriA2_2Data } from "./irodoriA2_2Data";

export const irodoriA2_2Chapters: ChapterData[] = Array.from({ length: 18 }, (_, i) => {
  const ch = i + 1;
  const cards = irodoriA2_2Data.filter(d => d.chapter === ch).map(d => ({
    kanji: d.kanji,
    hiragana: d.hiragana || d.word,
    romaji: d.romaji,
    meaning: d.meaning
  }));

  return {
    id: 300 + ch,
    name: `Irodori Lanjut (A2) Bab ${ch}`,
    cards
  };
});
