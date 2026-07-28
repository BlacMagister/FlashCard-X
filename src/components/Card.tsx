import { motion } from "motion/react";
import { FlashcardData } from "../types";

interface CardProps {
  card: FlashcardData;
  isFlipped: boolean;
  onFlip: () => void;
}

export function Card({ card, isFlipped, onFlip }: CardProps) {
  return (
    <div className="w-full h-full [perspective:1000px] relative group">
      {/* Background stacked cards for depth effect */}
      <div className="absolute inset-0 bg-[var(--color-border-light)] rounded-[40px] sm:rounded-[48px] rotate-2 scale-[0.98] transition-transform group-hover:rotate-3"></div>
      <div className="absolute inset-0 bg-[var(--color-border-color)] rounded-[40px] sm:rounded-[48px] -rotate-1 scale-[0.99] transition-transform group-hover:-rotate-2"></div>
      
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onClick={onFlip}
      >
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-[var(--color-card-bg)] rounded-[40px] sm:rounded-[48px] shadow-xl border border-[var(--color-border-light)] flex flex-col items-center justify-center p-6 sm:p-8">
          <h2 className="text-4xl sm:text-[80px] font-medium text-[var(--color-primary)] text-center leading-tight">
            {card.kanji || card.hiragana}
          </h2>
          <p className="absolute bottom-6 sm:bottom-8 text-[var(--color-text-light)] text-xs sm:text-sm italic font-serif">
            Tap or use button to reveal
          </p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[var(--color-card-back)] rounded-[40px] sm:rounded-[48px] shadow-xl flex flex-col items-center justify-center p-6 sm:p-8 border border-[var(--color-border-color)] gap-2 sm:gap-4">
          <div className="flex flex-col items-center gap-1 mb-2">
            {card.kanji && (
              <p className="text-xl sm:text-3xl font-medium text-[var(--color-text-inverse)] text-center leading-relaxed">
                {card.hiragana}
              </p>
            )}
            {card.romaji && (
              <p className="text-sm sm:text-base font-mono text-[var(--color-text-inverse)] text-center opacity-70">
                {card.romaji}
              </p>
            )}
          </div>
          <p className="text-lg sm:text-2xl font-medium text-[var(--color-app-bg)] text-center leading-relaxed font-serif">
            {card.meaning}
          </p>
          <p className="absolute bottom-6 sm:bottom-8 text-[var(--color-text-inverse)] text-xs sm:text-sm italic font-serif opacity-80">
            Tap or use button to flip back
          </p>
        </div>
      </motion.div>
    </div>
  );
}
