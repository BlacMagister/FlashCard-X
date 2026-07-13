import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, BookOpen, List, LayoutGrid } from "lucide-react";
import { chapters } from "./data";
import { Card } from "./components/Card";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
};

export default function App() {
  const [viewMode, setViewMode] = useState<"flashcard" | "list">("flashcard");
  const [selectedChapterId, setSelectedChapterId] = useState(chapters[0].id);
  
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
    <div className="min-h-screen bg-[#FDFCF8] flex flex-col items-center justify-center p-4 font-sans text-[#4A4A38] overflow-hidden">
      
      {/* Header */}
      <div className="mb-8 flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-[#5A5A40] rounded-xl flex items-center justify-center shadow-sm">
          <div className="text-white font-bold text-2xl">X</div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-[#4A4A38]">Flashcard X</h1>
        </div>
      </div>

      {/* Settings Row */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-6 bg-white px-6 py-3 rounded-full shadow-[0_2px_10px_rgba(90,90,64,0.05)] border border-[#E8E8DF]">
        <div className="flex items-center gap-2 text-sm font-medium text-[#8C8C70]">
          <BookOpen className="w-4 h-4" />
          <select 
            value={selectedChapterId}
            onChange={(e) => setSelectedChapterId(Number(e.target.value))}
            className="bg-[#FDFCF8] border border-[#E8E8DF] rounded-md text-[#4A4A38] focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40] px-2 py-1 cursor-pointer font-medium"
          >
            {chapters.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                {chapter.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-[1px] h-6 bg-[#E8E8DF]"></div>

        <div className="flex items-center gap-3 text-sm font-medium text-[#8C8C70]">
          <span>Range:</span>
          <input 
            type="number" 
            min={1} 
            max={flashcards.length} 
            value={rangeStart} 
            onChange={handleStartChange}
            className="w-14 h-8 text-center bg-[#FDFCF8] border border-[#E8E8DF] rounded-md text-[#4A4A38] focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40]"
          />
          <span>-</span>
          <input 
            type="number" 
            min={1} 
            max={flashcards.length} 
            value={rangeEnd} 
            onChange={handleEndChange}
            className="w-14 h-8 text-center bg-[#FDFCF8] border border-[#E8E8DF] rounded-md text-[#4A4A38] focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40]"
          />
        </div>

        <div className="w-[1px] h-6 bg-[#E8E8DF]"></div>

        <div className="flex bg-[#FDFCF8] rounded-md p-1 border border-[#E8E8DF]">
          <button 
             onClick={() => setViewMode("flashcard")}
             className={`px-3 py-1.5 rounded-sm text-sm font-medium transition-colors flex items-center gap-2 ${viewMode === "flashcard" ? "bg-white shadow-sm text-[#4A4A38]" : "text-[#8C8C70] hover:text-[#4A4A38]"}`}
          >
            <LayoutGrid className="w-4 h-4" />
            Card
          </button>
          <button 
             onClick={() => setViewMode("list")}
             className={`px-3 py-1.5 rounded-sm text-sm font-medium transition-colors flex items-center gap-2 ${viewMode === "list" ? "bg-white shadow-sm text-[#4A4A38]" : "text-[#8C8C70] hover:text-[#4A4A38]"}`}
          >
            <List className="w-4 h-4" />
            List
          </button>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="w-full max-w-3xl bg-white rounded-[24px] sm:rounded-[32px] p-2 sm:p-4 shadow-[0_10px_40px_rgba(90,90,64,0.08)] border border-[#E8E8DF] max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col">
            {flashcards.map((c, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-[#F0F0E8] last:border-0 hover:bg-[#FDFCF8] transition-colors gap-2 sm:gap-6">
                <div className="flex items-start sm:items-center gap-4 sm:w-1/2">
                  <span className="text-xs font-bold text-[#DEDED1] w-5 sm:w-6 pt-1 sm:pt-0 shrink-0">{i + 1}</span>
                  <div className="flex flex-col gap-1">
                    {c.kanji && <span className="text-2xl sm:text-3xl font-medium text-[#2D2D24] leading-tight">{c.kanji}</span>}
                    <span className={`${c.kanji ? 'text-sm text-[#8C8C70]' : 'text-2xl sm:text-3xl font-medium text-[#2D2D24]'} leading-tight`}>
                      {c.hiragana}
                    </span>
                    {c.romaji && (
                      <span className="text-xs font-mono text-[#A3A38A] leading-none">
                        {c.romaji}
                      </span>
                    )}
                  </div>
                </div>
                <div className="sm:w-1/2 sm:pl-4 mt-2 sm:mt-0">
                  <span className="text-base sm:text-lg text-[#5A5A40] font-serif leading-relaxed">
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
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={`${selectedChapterId}-${activeCards[safeIndex]?.hiragana}`} // Unique key ensures isFlipped state resets on chapter change as well
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Card 
                    card={activeCards[safeIndex]} 
                    isFlipped={isFlipped}
                    onFlip={() => setIsFlipped(!isFlipped)}
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-white rounded-[48px] border border-[#E8E8DF] text-[#8C8C70]">
                No cards in range
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6 sm:gap-10">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0 || activeCards.length === 0}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#E8E8DF] flex shrink-0 items-center justify-center text-[#8C8C70] hover:bg-white hover:text-[#5A5A40] disabled:opacity-40 disabled:cursor-not-allowed transition-colors active:scale-95"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </button>

            <div className="flex flex-col items-center gap-3">
              <button 
                onClick={() => setIsShuffled(!isShuffled)}
                className={`flex items-center justify-center gap-2 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full transition-colors border ${
                  isShuffled ? "bg-[#5A5A40] text-white border-[#5A5A40]" : "text-[#8C8C70] border-[#E8E8DF] hover:bg-white hover:text-[#5A5A40]"
                }`}
              >
                <Shuffle className="w-3 h-3 sm:w-4 sm:h-4" />
                Shuffle {isShuffled ? "ON" : "OFF"}
              </button>
              
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                disabled={activeCards.length === 0}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-[#5A5A40] text-[#FDFCF8] rounded-full text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all min-w-[120px] sm:min-w-[160px] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isFlipped ? "Tutup Kartu" : "Buka Kartu"}
              </button>
            </div>

            <button
              onClick={nextCard}
              disabled={safeIndex === activeCards.length - 1 || activeCards.length === 0}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#E8E8DF] flex shrink-0 items-center justify-center text-[#8C8C70] hover:bg-white hover:text-[#5A5A40] disabled:opacity-40 disabled:cursor-not-allowed transition-colors active:scale-95"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </button>
          </div>

          {/* Progress Indicator & Restart */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 h-[80px]">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C8C70] font-bold">Progress</span>
              <span className="text-sm font-semibold text-[#5A5A40]">
                {activeCards.length > 0 ? safeIndex + 1 : 0} / {activeCards.length}
              </span>
            </div>

            {safeIndex === activeCards.length - 1 && activeCards.length > 0 && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={restart}
                className="flex items-center gap-2 text-sm font-semibold text-[#8C8C70] hover:text-[#5A5A40] transition-colors px-6 py-2 rounded-full hover:bg-[#E8E8DF]"
              >
                <RotateCcw className="w-4 h-4" strokeWidth={2.5} />
                Mulai Ulang
              </motion.button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
