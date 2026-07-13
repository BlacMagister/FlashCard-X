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
      <div className="absolute inset-0 bg-[#DEDED1] rounded-[40px] sm:rounded-[48px] rotate-2 scale-[0.98] transition-transform group-hover:rotate-3"></div>
      <div className="absolute inset-0 bg-[#E8E8DF] rounded-[40px] sm:rounded-[48px] -rotate-1 scale-[0.99] transition-transform group-hover:-rotate-2"></div>
      
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        onClick={onFlip}
      >
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-[40px] sm:rounded-[48px] shadow-[0_20px_50px_rgba(90,90,64,0.1)] border border-[#F0F0E8] flex flex-col items-center justify-center p-6 sm:p-8">
          <h2 className="text-4xl sm:text-[80px] font-medium text-[#2D2D24] text-center leading-tight">
            {card.kanji || card.hiragana}
          </h2>
          <p className="absolute bottom-6 sm:bottom-8 text-[#8C8C70] text-xs sm:text-sm italic font-serif">
            Tap or use button to reveal
          </p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#5A5A40] rounded-[40px] sm:rounded-[48px] shadow-[0_20px_50px_rgba(90,90,64,0.2)] flex flex-col items-center justify-center p-6 sm:p-8 border border-[#4A4A38] gap-2 sm:gap-4">
          <div className="flex flex-col items-center gap-1 mb-2">
            {card.kanji && (
              <p className="text-xl sm:text-3xl font-medium text-[#DEDED1] text-center leading-relaxed">
                {card.hiragana}
              </p>
            )}
            {card.romaji && (
              <p className="text-sm sm:text-base font-mono text-[#DEDED1] text-center opacity-70">
                {card.romaji}
              </p>
            )}
          </div>
          <p className="text-lg sm:text-2xl font-medium text-[#FDFCF8] text-center leading-relaxed font-serif">
            {card.meaning}
          </p>
          <p className="absolute bottom-6 sm:bottom-8 text-[#DEDED1] text-xs sm:text-sm italic font-serif opacity-80">
            Tap or use button to flip back
          </p>
        </div>
      </motion.div>
    </div>
  );
}
