export interface FlashcardData {
  kanji?: string;
  hiragana: string;
  romaji?: string;
  meaning: string;
  no?: string;
}

export interface ChapterData {
  id: number;
  name: string;
  cards: FlashcardData[];
}
