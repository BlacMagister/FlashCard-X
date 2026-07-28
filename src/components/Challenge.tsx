import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FlashcardData } from "../types";
import { Clock, Target, RotateCcw } from "lucide-react";
import { chapters } from "../data";
import { getVisuallySimilarDistractors } from "../utils/kanjiSimilarity";

interface ChallengeProps {
  cards: FlashcardData[];
  onExit: () => void;
}

const TOTAL_TIME = 5; // Reduced from 10 to 5 seconds for higher difficulty

export function Challenge({ cards, onExit }: ChallengeProps) {
  const [challengeCards, setChallengeCards] = useState<FlashcardData[]>([]);
  const [initialCardsLength, setInitialCardsLength] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredCards, setAnsweredCards] = useState<Set<string>>(new Set());
  const [mistakes, setMistakes] = useState<{ card: FlashcardData, wrongAnswer: string | null }[]>([]);
  const [status, setStatus] = useState<"ready" | "playing" | "feedback" | "finished">("ready");
  
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [challengeType, setChallengeType] = useState<"meaning" | "kanji">("meaning");

  // Initialize Challenge
  const startChallenge = (type: "meaning" | "kanji") => {
    setChallengeType(type);
    // Shuffle the cards
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setChallengeCards(shuffled);
    setInitialCardsLength(shuffled.length);
    setCurrentIndex(0);
    setScore(0);
    setAnsweredCards(new Set());
    setMistakes([]);
    setStatus("playing");
    generateOptions(shuffled, 0, type);
  };

  const generateOptions = (currentCards: FlashcardData[], index: number, type: "meaning" | "kanji") => {
    if (index >= currentCards.length) return;

    const currentCard = currentCards[index];
    const correctAnswer = type === "meaning" ? currentCard.meaning : (currentCard.kanji || currentCard.hiragana);

    if (type === "meaning") {
      let otherAnswers = Array.from(new Set(currentCards.map(c => c.meaning).filter(m => m !== correctAnswer)));
      if (otherAnswers.length < 3) {
        const allAnswers = chapters.flatMap(c => c.cards.map(card => card.meaning));
        otherAnswers = Array.from(new Set(allAnswers.filter(m => m !== correctAnswer)));
      }
      const wrongOptions = otherAnswers.sort(() => Math.random() - 0.5).slice(0, 3);
      const finalOptions = [correctAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);
      setOptions(finalOptions);
    } else {
      let otherAnswers = new Set<string>();
      const allCards = chapters.flatMap(c => c.cards);
      
      if (currentCard.kanji) {
        const visuallySimilar = getVisuallySimilarDistractors(currentCard.kanji);
        for (const sim of visuallySimilar) {
          if (otherAnswers.size >= 3) break;
          otherAnswers.add(sim);
        }
        
        if (otherAnswers.size < 3) {
          const chars = currentCard.kanji.split('');
          const similarCards = allCards.filter(c => 
            c.kanji && 
            c.kanji !== currentCard.kanji && 
            chars.some(char => c.kanji!.includes(char))
          );
          const shuffledSimilar = similarCards.sort(() => Math.random() - 0.5);
          for (const sc of shuffledSimilar) {
            if (otherAnswers.size >= 3) break;
            otherAnswers.add(sc.kanji!);
          }
        }
      }

      if (otherAnswers.size < 3) {
         const shuffledCurrent = [...currentCards].sort(() => Math.random() - 0.5);
         for (const c of shuffledCurrent) {
           if (otherAnswers.size >= 3) break;
           const val = c.kanji || c.hiragana;
           if (val !== correctAnswer) otherAnswers.add(val);
         }
      }
      
      if (otherAnswers.size < 3) {
         const shuffledAll = [...allCards].sort(() => Math.random() - 0.5);
         for (const c of shuffledAll) {
           if (otherAnswers.size >= 3) break;
           const val = c.kanji || c.hiragana;
           if (val !== correctAnswer) otherAnswers.add(val);
         }
      }

      const wrongOptions = Array.from(otherAnswers).slice(0, 3);
      const finalOptions = [correctAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);
      setOptions(finalOptions);
    }

    setSelectedOption(null);
    setTimeLeft(TOTAL_TIME);
  };

  useEffect(() => {
    let timer: number;
    if (challengeType !== "kanji" && status === "playing" && timeLeft > 0) {
      timer = window.setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (challengeType !== "kanji" && status === "playing" && timeLeft === 0) {
      handleAnswer(null); // Timeout
    }
    return () => clearInterval(timer);
  }, [status, timeLeft, challengeType]);

  const handleAnswer = (option: string | null) => {
    if (status !== "playing") return;
    
    setSelectedOption(option);
    setStatus("feedback");
    
    const currentCard = challengeCards[currentIndex];
    const correctAnswer = challengeType === "meaning" ? currentCard.meaning : (currentCard.kanji || currentCard.hiragana);
    const isCorrect = option === correctAnswer;
    
    const cardId = currentCard.kanji || currentCard.hiragana;
    const isFirstTime = !answeredCards.has(cardId);
    
    if (isFirstTime) {
      if (isCorrect) {
        setScore(s => s + 1);
      }
      setAnsweredCards(prev => new Set(prev).add(cardId));
    }
    
    let updatedCards = challengeCards;
    
    if (!isCorrect) {
      setMistakes(m => {
        // Only add to mistakes list if it's the first time we got it wrong to prevent duplicates in the list
        if (!m.some(mistake => (mistake.card.kanji || mistake.card.hiragana) === cardId)) {
          return [...m, { card: currentCard, wrongAnswer: option }];
        }
        return m;
      });
      
      // Spaced repetition: add it to the end of the queue so we see it again
      updatedCards = [...challengeCards, currentCard];
      setChallengeCards(updatedCards);
    }

    setTimeout(() => {
      if (currentIndex + 1 < updatedCards.length) {
        setCurrentIndex(i => i + 1);
        generateOptions(updatedCards, currentIndex + 1, challengeType);
        setStatus("playing");
      } else {
        setStatus("finished");
      }
    }, 1500); // reduced delay to keep the pace fast
  };

  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-[var(--color-card-bg)] rounded-[32px] border border-[var(--color-border-color)] max-w-md w-full mx-auto shadow-sm text-center">
        <Target className="w-12 h-12 text-[var(--color-text-light)] mb-4" />
        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Tidak Ada Kartu</h2>
        <p className="text-[var(--color-text-muted)] mb-6">Pilih range yang valid untuk memulai tantangan.</p>
        <button
          onClick={onExit}
          className="px-6 py-2 bg-[var(--color-app-bg)] text-[var(--color-text-muted)] font-medium rounded-full border border-[var(--color-border-color)] hover:bg-[var(--color-card-bg)] hover:border-[var(--color-card-back)] transition-colors"
        >
          Kembali
        </button>
      </div>
    );
  }

  if (status === "ready") {
    return (
      <div className="flex flex-col items-center justify-center p-10 bg-[var(--color-card-bg)] rounded-[40px] border border-[var(--color-border-color)] max-w-md w-full mx-auto shadow-xl text-center">
        <div className="w-20 h-20 bg-[var(--color-primary)] text-[var(--color-app-bg)] rounded-3xl flex items-center justify-center mb-6 shadow-xl dark:shadow-none">
          <Target className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Mode Tantangan</h2>
        <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
          Buktikan hafalanmu untuk {cards.length} kartu ini! Waktu menjawab 5 detik per kartu (khusus Tebak Arti).
        </p>
        <div className="w-full space-y-3 mb-6">
          <button
            onClick={() => startChallenge("meaning")}
            className="w-full py-4 bg-[var(--color-primary)] text-[var(--color-app-bg)] font-semibold rounded-2xl shadow-[0_10px_20px_rgba(45,45,36,0.2)] hover:shadow-[0_15px_30px_rgba(45,45,36,0.3)] hover:-translate-y-1 transition-all text-lg"
          >
            Mulai (Tebak Arti)
          </button>
          <button
            onClick={() => startChallenge("kanji")}
            className="w-full py-4 bg-[var(--color-card-back)] text-[var(--color-app-bg)] font-semibold rounded-2xl shadow-[0_10px_20px_rgba(45,45,36,0.2)] hover:shadow-[0_15px_30px_rgba(45,45,36,0.3)] hover:-translate-y-1 transition-all text-lg flex items-center justify-center gap-2"
          >
            Mode Tes <span className="text-sm bg-black/20 px-2 py-0.5 rounded-md">Tebak Kanji</span>
          </button>
        </div>
        <button
          onClick={onExit}
          className="w-full py-3 text-[var(--color-text-light)] font-medium rounded-2xl hover:bg-[var(--color-app-bg)] transition-colors"
        >
          Kembali ke Mode Biasa
        </button>
      </div>
    );
  }

  if (status === "finished") {
    const persentase = initialCardsLength > 0 ? Math.round((score / initialCardsLength) * 100) : 0;
    return (
      <div className="flex flex-col items-center justify-center p-8 sm:p-10 bg-[var(--color-card-bg)] rounded-[40px] border border-[var(--color-border-color)] max-w-md w-full mx-auto shadow-xl text-center max-h-[85vh] overflow-y-auto">
        <div className="text-7xl mb-6 mt-4">
          {score === initialCardsLength ? "🏆" : score > initialCardsLength / 2 ? "👏" : "💪"}
        </div>
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-3">Tantangan Selesai!</h2>
        
        <div className="grid grid-cols-3 gap-3 w-full mb-8 mt-2">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50 p-4 rounded-2xl flex flex-col items-center justify-center">
             <span className="text-xs text-green-700 dark:text-green-400 font-medium uppercase tracking-wider mb-1">Benar</span>
             <span className="text-3xl font-bold text-green-800 dark:text-green-300">{score}</span>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 p-4 rounded-2xl flex flex-col items-center justify-center">
             <span className="text-xs text-red-700 dark:text-red-400 font-medium uppercase tracking-wider mb-1">Salah</span>
             <span className="text-3xl font-bold text-red-800 dark:text-red-300">{mistakes.length}</span>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50 p-4 rounded-2xl flex flex-col items-center justify-center">
             <span className="text-xs text-blue-700 dark:text-blue-400 font-medium uppercase tracking-wider mb-1">Skor</span>
             <span className="text-3xl font-bold text-blue-800 dark:text-blue-300">{persentase}%</span>
          </div>
        </div>

        {mistakes.length > 0 && (
          <div className="w-full text-left bg-[var(--color-app-bg)] border border-[var(--color-border-color)] rounded-2xl p-5 mb-8">
            <h3 className="text-[var(--color-text-light)] font-semibold mb-3 text-sm tracking-wider uppercase flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Perlu Diingat
            </h3>
            <div className="space-y-4 max-h-[30vh] overflow-y-auto pr-2 custom-scrollbar">
              {mistakes.map((m, idx) => (
                <div key={idx} className="border-b border-[var(--color-border-color)] pb-3 last:border-0 last:pb-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xl font-bold text-[var(--color-text-main)]">{m.card.kanji || m.card.hiragana}</span>
                    {m.card.kanji && <span className="text-sm text-[var(--color-text-light)]">{m.card.hiragana}</span>}
                  </div>
                  <div className="text-sm">
                    <div className="text-[#2E6A30] dark:text-green-400 font-medium flex gap-2">
                      <span className="w-4 text-center">✓</span> {challengeType === "meaning" ? m.card.meaning : (m.card.kanji || m.card.hiragana)}
                    </div>
                    {m.wrongAnswer ? (
                      <div className="text-[#C62828] dark:text-red-400 text-opacity-80 flex gap-2 mt-0.5">
                        <span className="w-4 text-center">✗</span> {m.wrongAnswer}
                      </div>
                    ) : (
                      <div className="text-[#C62828] dark:text-red-400 text-opacity-80 flex gap-2 mt-0.5">
                        <span className="w-4 text-center">✗</span> <i>Waktu habis</i>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => startChallenge(challengeType)}
          className="w-full py-4 bg-[var(--color-primary)] text-[var(--color-app-bg)] font-semibold rounded-2xl shadow-[0_10px_20px_rgba(45,45,36,0.2)] hover:shadow-[0_15px_30px_rgba(45,45,36,0.3)] hover:-translate-y-1 transition-all mb-3 text-lg"
        >
          Coba Lagi
        </button>
        <button
          onClick={onExit}
          className="w-full py-3 text-[var(--color-text-light)] font-medium rounded-2xl hover:bg-[var(--color-app-bg)] transition-colors mb-4"
        >
          Kembali
        </button>
      </div>
    );
  }

  const currentCard = challengeCards[currentIndex];
  const isTimeOut = status === "feedback" && selectedOption === null;
  const progressPercentage = (timeLeft / TOTAL_TIME) * 100;

  return (
    <div className="w-full max-w-[360px] sm:max-w-md mx-auto">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-sm font-semibold tracking-wider text-[var(--color-text-light)] uppercase">
          {currentIndex + 1} / {challengeCards.length}
        </span>
        {challengeType !== "kanji" && (
          <div className="flex items-center gap-2">
            <Clock className={`w-4 h-4 ${timeLeft <= 2 ? 'text-red-500 animate-pulse' : 'text-[var(--color-text-light)]'}`} />
            <span className={`text-sm font-bold font-mono ${timeLeft <= 2 ? 'text-red-500' : 'text-[var(--color-text-muted)]'}`}>
              00:0{timeLeft}
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {challengeType !== "kanji" && (
        <div className="w-full h-1.5 bg-[var(--color-border-light)] rounded-full mb-6 overflow-hidden">
          <motion.div 
            className={`h-full rounded-full ${timeLeft <= 2 ? 'bg-red-500' : 'bg-[var(--color-card-back)]'}`}
            initial={{ width: "100%" }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, ease: "linear" }}
          />
        </div>
      )}

      {/* Question Card - Hard Mode (No Romaji/Furigana) */}
      <div className="bg-[var(--color-card-bg)] rounded-[40px] p-8 sm:p-10 shadow-xl border border-[var(--color-border-color)] flex flex-col items-center justify-center min-h-[200px] mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Target className="w-24 h-24 text-[var(--color-text-muted)]" />
        </div>
        {challengeType === "meaning" ? (
          <h2 className="text-5xl sm:text-6xl font-medium text-[var(--color-primary)] text-center leading-tight z-10">
            {currentCard.kanji || currentCard.hiragana}
          </h2>
        ) : (
          <div className="z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-medium text-[var(--color-primary)] leading-tight mb-2">
              {currentCard.meaning}
            </h2>
            <span className="text-xl text-[var(--color-text-muted)] italic font-serif">
              {currentCard.romaji}
            </span>
          </div>
        )}
      </div>

      {/* Options */}
      <div className="grid gap-3">
        {options.map((option, idx) => {
          let btnClass = "bg-[var(--color-card-bg)] border-[var(--color-border-color)] text-[var(--color-text-main)] hover:border-[var(--color-card-back)] hover:bg-[var(--color-app-bg)] hover:shadow-sm";
          
          if (status === "feedback") {
            const correctAnswer = challengeType === "meaning" ? currentCard.meaning : (currentCard.kanji || currentCard.hiragana);
            if (option === correctAnswer) {
              btnClass = "bg-green-50 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400 shadow-sm"; // Correct answer
            } else if (option === selectedOption) {
              btnClass = "bg-red-50 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-400 shadow-sm"; // Selected wrong
            } else {
              btnClass = "bg-[var(--color-app-bg)] border-[var(--color-border-color)] text-[var(--color-text-light)] opacity-50"; // Others dimmed
            }
          }

          return (
            <button
              key={idx}
              disabled={status !== "playing"}
              onClick={() => handleAnswer(option)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-medium leading-relaxed ${challengeType === "kanji" ? "text-2xl sm:text-3xl text-center" : "font-serif"} ${btnClass}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      
      {/* Timeout message */}
      <div className="h-8 mt-4 flex items-center justify-center">
        <AnimatePresence>
          {isTimeOut && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="px-4 py-1.5 bg-red-50 dark:bg-red-900/30 text-[#F44336] rounded-full text-sm font-semibold border border-[#F44336]/20"
            >
              Waktu Habis!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
