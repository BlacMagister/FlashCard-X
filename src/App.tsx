import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, BookOpen, List, LayoutGrid, Target, Moon, Sun } from "lucide-react";
import { chapters } from "./data";
import { Card } from "./components/Card";
import { Challenge } from "./components/Challenge";
import { ChapterSelect } from "./components/ChapterSelect";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
  }),
};

export default function App() {
  const [viewMode, setViewMode] = useState<"flashcard" | "list" | "challenge">("flashcard");
  const [selectedChapterId, setSelectedChapterId] = useState(chapters[0].id);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  
  const currentChapter = useMemo(() => {
    return chapters.find(c => c.id === selectedChapterId) || chapters[0];
  }, [selectedChapterId]);

  const flashcards = currentChapter.cards;

  const [rangeStart, setRangeStart] = useState<number | "">(1);
  const [rangeEnd, setRangeEnd] = useState<number | "">(flashcards.length);
  const [isShuffled, setIsShuffled] = useState(false);

  // Reset settings when chapter changes
  useEffect(() => {
    setRangeStart(1);
    setRangeEnd(flashcards.length);
    setIsShuffled(false);
  }, [flashcards]);

  // We need to keep a stable randomized array if shuffled, and update it when range changes or shuffle toggles.
  const activeCards = useMemo(() => {
    // Ensure bounds
    const startNum = typeof rangeStart === 'number' ? rangeStart : 1;
    const endNum = typeof rangeEnd === 'number' ? rangeEnd : flashcards.length;
    
    // Only enforce valid range for slicing, let state hold invalid values temporarily
    const validStart = Math.max(1, startNum);
    const validEnd = Math.min(flashcards.length, Math.max(validStart, endNum));
    
    let cards = flashcards.slice(validStart - 1, validEnd);
    
    if (isShuffled) {
      // Create a new array and shuffle it using Fisher-Yates
      cards = [...cards];
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }
    return cards;
  }, [flashcards, rangeStart, rangeEnd, isShuffled]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Derive a safe index for rendering to prevent out-of-bounds errors when activeCards shrinks
  const safeIndex = Math.min(currentIndex, Math.max(0, activeCards.length - 1));

  // Reset index when activeCards changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [activeCards]);

  const nextCard = useCallback(() => {
    if (currentIndex < activeCards.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, activeCards.length]);

  const prevCard = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const restart = () => {
    setDirection(-1);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in inputs
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "SELECT") return;
      
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextCard();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevCard();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextCard, prevCard]);

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valStr = e.target.value;
    if (valStr === "") {
      setRangeStart("");
      return;
    }
    const val = parseInt(valStr);
    if (!isNaN(val)) {
      // Don't cap with rangeEnd here to allow typing e.g. replacing "1" with "12"
      setRangeStart(Math.max(1, Math.min(val, flashcards.length)));
    }
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valStr = e.target.value;
    if (valStr === "") {
      setRangeEnd("");
      return;
    }
    const val = parseInt(valStr);
    if (!isNaN(val)) {
      setRangeEnd(Math.max(1, Math.min(val, flashcards.length)));
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-app-bg)] flex flex-col items-center justify-center p-4 font-sans text-[var(--color-text-main)] overflow-hidden">
      
      {/* Header */}
      <div className="mb-8 w-full max-w-3xl flex items-center justify-between">
        <div className="w-12 h-12 opacity-0 pointer-events-none"></div> {/* Spacer for centering */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center shadow-sm">
            <div className="text-[var(--color-app-bg)] font-bold text-2xl">X</div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text-main)]">Flashcard X</h1>
          </div>
        </div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-12 h-12 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-border-color)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-element-hover)] transition-colors"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Settings Row */}
      <div className="mb-8 w-full max-w-3xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-[var(--color-card-bg)] px-6 py-4 md:py-3 rounded-[32px] shadow-sm border border-[var(--color-border-color)]">
        <ChapterSelect 
          chapters={chapters} 
          selectedChapterId={selectedChapterId} 
          onSelect={setSelectedChapterId} 
        />

        <div className="hidden md:block w-[1px] h-6 bg-[var(--color-border-color)]"></div>

        <div className="flex items-center gap-3 text-sm font-medium text-[var(--color-text-light)]">
          <span>Range:</span>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              min={1} 
              max={flashcards.length} 
              value={rangeStart} 
              onChange={handleStartChange}
              className="w-16 h-9 text-center bg-[var(--color-app-bg)] border border-[var(--color-border-color)] rounded-xl text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-card-back)] focus:ring-1 focus:ring-[var(--color-card-back)] font-medium"
            />
            <span className="text-[#E8E8DF]">-</span>
            <input 
              type="number" 
              min={1} 
              max={flashcards.length} 
              value={rangeEnd} 
              onChange={handleEndChange}
              className="w-16 h-9 text-center bg-[var(--color-app-bg)] border border-[var(--color-border-color)] rounded-xl text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-card-back)] focus:ring-1 focus:ring-[var(--color-card-back)] font-medium"
            />
          </div>
        </div>

        <div className="hidden md:block w-[1px] h-6 bg-[var(--color-border-color)]"></div>
        <div className="md:hidden w-full h-[1px] bg-[var(--color-border-color)] my-1"></div>

        <div className="flex bg-[var(--color-app-bg)] rounded-xl p-1 border border-[var(--color-border-color)] w-full md:w-auto overflow-x-auto custom-scrollbar">
          <button 
             onClick={() => setViewMode("flashcard")}
             className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${viewMode === "flashcard" ? "bg-[var(--color-card-bg)] shadow-sm text-[var(--color-text-main)] border border-[var(--color-border-color)]" : "text-[var(--color-text-light)] hover:text-[var(--color-text-main)] border border-transparent"}`}
          >
            <LayoutGrid className="w-4 h-4" />
            Card
          </button>
          <button 
             onClick={() => setViewMode("list")}
             className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${viewMode === "list" ? "bg-[var(--color-card-bg)] shadow-sm text-[var(--color-text-main)] border border-[var(--color-border-color)]" : "text-[var(--color-text-light)] hover:text-[var(--color-text-main)] border border-transparent"}`}
          >
            <List className="w-4 h-4" />
            List
          </button>
          <button 
             onClick={() => setViewMode("challenge")}
             className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${viewMode === "challenge" ? "bg-[var(--color-card-bg)] shadow-sm text-[var(--color-text-main)] border border-[var(--color-border-color)]" : "text-[var(--color-text-light)] hover:text-[var(--color-text-main)] border border-transparent"}`}
          >
            <Target className="w-4 h-4" />
            Tantangan
          </button>
        </div>
      </div>

      {viewMode === "challenge" ? (
        <div className="w-full h-full flex-1 flex flex-col justify-center">
          <Challenge cards={activeCards} onExit={() => setViewMode("flashcard")} />
        </div>
      ) : viewMode === "list" ? (
        <div className="w-full max-w-3xl bg-[var(--color-card-bg)] rounded-[24px] sm:rounded-[32px] p-2 sm:p-4 shadow-[0_10px_40px_rgba(90,90,64,0.08)] border border-[var(--color-border-color)] max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col">
            {flashcards.map((c, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-[var(--color-border-light)] last:border-0 hover:bg-[var(--color-app-bg)] transition-colors gap-2 sm:gap-6">
                <div className="flex items-start sm:items-center gap-4 sm:w-1/2">
                  <span className="text-xs font-bold text-[var(--color-text-inverse)] w-5 sm:w-6 pt-1 sm:pt-0 shrink-0">{i + 1}</span>
                  <div className="flex flex-col gap-1">
                    {c.kanji && <span className="text-2xl sm:text-3xl font-medium text-[var(--color-primary)] leading-tight">{c.kanji}</span>}
                    <span className={`${c.kanji ? 'text-sm text-[var(--color-text-light)]' : 'text-2xl sm:text-3xl font-medium text-[var(--color-primary)]'} leading-tight`}>
                      {c.hiragana}
                    </span>
                    {c.romaji && (
                      <span className="text-xs font-mono text-[var(--color-text-light)] leading-none">
                        {c.romaji}
                      </span>
                    )}
                  </div>
                </div>
                <div className="sm:w-1/2 sm:pl-4 mt-2 sm:mt-0">
                  <span className="text-base sm:text-lg text-[var(--color-text-muted)] font-serif leading-relaxed">
                    {c.meaning}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Main Flashcard Area */}
          <div className="relative w-full max-w-[320px] sm:max-w-[520px] h-[340px] sm:h-[400px]">
            {activeCards.length > 0 ? (
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={`card-${selectedChapterId}-${safeIndex}-${activeCards[safeIndex]?.kanji || 'none'}-${activeCards[safeIndex]?.hiragana}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Card 
                    card={activeCards[safeIndex]} 
                    isFlipped={isFlipped}
                    onFlip={() => setIsFlipped(!isFlipped)}
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[var(--color-card-bg)] rounded-[48px] border border-[var(--color-border-color)] text-[var(--color-text-light)]">
                No cards in range
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6 sm:gap-10">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0 || activeCards.length === 0}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[var(--color-border-color)] flex shrink-0 items-center justify-center text-[var(--color-text-light)] hover:bg-[var(--color-card-bg)] hover:text-[var(--color-text-muted)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors active:scale-95"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </button>

            <div className="flex flex-col items-center gap-3">
              <button 
                onClick={() => setIsShuffled(!isShuffled)}
                className={`flex items-center justify-center gap-2 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full transition-colors border ${
                  isShuffled ? "bg-[var(--color-primary)] text-[var(--color-app-bg)] border-[var(--color-primary)]" : "text-[var(--color-text-light)] border-[var(--color-border-color)] hover:bg-[var(--color-card-bg)] hover:text-[var(--color-text-muted)]"
                }`}
              >
                <Shuffle className="w-3 h-3 sm:w-4 sm:h-4" />
                Shuffle {isShuffled ? "ON" : "OFF"}
              </button>
              
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                disabled={activeCards.length === 0}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-[var(--color-primary)] text-[var(--color-app-bg)] rounded-full text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all min-w-[120px] sm:min-w-[160px] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isFlipped ? "Tutup Kartu" : "Buka Kartu"}
              </button>
            </div>

            <button
              onClick={nextCard}
              disabled={safeIndex === activeCards.length - 1 || activeCards.length === 0}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[var(--color-border-color)] flex shrink-0 items-center justify-center text-[var(--color-text-light)] hover:bg-[var(--color-card-bg)] hover:text-[var(--color-text-muted)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors active:scale-95"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </button>
          </div>

          {/* Progress Indicator & Restart */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 h-[80px]">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-light)] font-bold">Progress</span>
              <span className="text-sm font-semibold text-[var(--color-text-muted)]">
                {activeCards.length > 0 ? safeIndex + 1 : 0} / {activeCards.length}
              </span>
            </div>

            {safeIndex === activeCards.length - 1 && activeCards.length > 0 && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={restart}
                className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-light)] hover:text-[var(--color-text-muted)] transition-colors px-6 py-2 rounded-full hover:bg-[var(--color-border-color)]"
              >
                <RotateCcw className="w-4 h-4" strokeWidth={2.5} />
                Mulai Ulang
              </motion.button>
            )}
          </div>
        </>
      )}

      <div className="mt-auto pt-8 pb-4 w-full flex justify-center items-center">
        <p className="text-sm font-medium text-[var(--color-text-light)] tracking-wide">
          create by <span className="font-semibold text-[var(--color-text-muted)]">Galuh</span>
        </p>
      </div>
    </div>
  );
}
