import { ChapterData } from "./types";

export const chapters: ChapterData[] = [
  {
    id: 18,
    name: "Bab 18",
    cards: [
      { hiragana: "できます", romaji: "dekimasu", meaning: "dapat, bisa, mampu" },
      { kanji: "洗います", hiragana: "あらいます", romaji: "araimasu", meaning: "mencuci" },
      { kanji: "弾きます", hiragana: "ひきます", romaji: "hikimasu", meaning: "bermain (untuk bermain alat musik senar dan piano)" },
      { kanji: "歌います", hiragana: "うたいます", romaji: "utaimasu", meaning: "bernyanyi, menyanyi" },
      { kanji: "集めます", hiragana: "あつめます", romaji: "atsumemasu", meaning: "mengumpulkan" },
      { kanji: "捨てます", hiragana: "すてます", romaji: "sutemasu", meaning: "membuang" },
      { kanji: "換えます", hiragana: "かえます", romaji: "kaemasu", meaning: "mengganti, menukar" },
      { kanji: "運転します", hiragana: "うんてんします", romaji: "untenshimasu", meaning: "menyetir, mengendarai" },
      { kanji: "予約します", hiragana: "よやくします", romaji: "yoyakushimasu", meaning: "memesan" },
      { kanji: "現金", hiragana: "げんきん", romaji: "genkin", meaning: "uang tunai" },
      { kanji: "趣味", hiragana: "しゅみ", romaji: "shumi", meaning: "hobi, kegemaran" },
      { kanji: "日記", hiragana: "にっき", romaji: "nikki", meaning: "catatan harian" },
      { kanji: "お祈り", hiragana: "おいのり", romaji: "oinori", meaning: "doa (〜を します : berdoa)" },
      { kanji: "課長", hiragana: "かちょう", romaji: "kachou", meaning: "kepala seksi" },
      { kanji: "部長", hiragana: "ぶちょう", romaji: "buchou", meaning: "kepala bagian" },
      { kanji: "社長", hiragana: "しゃちょう", romaji: "shachou", meaning: "direktur utama" },
      { kanji: "動物", hiragana: "どうぶつ", romaji: "doubutsu", meaning: "hewan, binatang" },
      { kanji: "馬", hiragana: "うま", romaji: "uma", meaning: "kuda" },
      { hiragana: "インターネット", romaji: "intaanetto", meaning: "internet" },
      { hiragana: "ピアノ", romaji: "piano", meaning: "piano" },
      { hiragana: "ーメートル", romaji: "-meetoru", meaning: "~ meter" },
      { kanji: "特に", hiragana: "とくに", romaji: "tokuni", meaning: "terutama, khususnya" },
      { hiragana: "ぜひ", romaji: "zehi", meaning: "benar-benar, mesti" },
      { hiragana: "なかなか", romaji: "nakanaka", meaning: "jarang, tidak mudah (diikuti bentuk negatif)" },
      { hiragana: "ほんとうですか。", romaji: "hontoudesuka.", meaning: "Betul?/Benar?" },
      { hiragana: "それはおもしろいですね。", romaji: "sore wa omoshiroidesune.", meaning: "Itu menarik ya." },
      { hiragana: "へえ", romaji: "hee", meaning: "Betul ya?/Benar ya?/Masa! (digunakan ketika terkagum atau terkejut)" }
    ]
  }
];

// For backward compatibility until App is updated
export const flashcards = chapters[0].cards;
