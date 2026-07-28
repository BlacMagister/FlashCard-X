import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, ChevronDown, Check } from "lucide-react";
import { ChapterData } from "../types";

interface ChapterSelectProps {
  chapters: ChapterData[];
  selectedChapterId: number;
  onSelect: (id: number) => void;
}

export function ChapterSelect({ chapters, selectedChapterId, onSelect }: ChapterSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const regularChapters = chapters.filter(c => !c.name.toLowerCase().includes("irodori"));
  const irodoriChapters = chapters.filter(c => c.name.toLowerCase().includes("irodori"));
  
  const selectedChapter = chapters.find(c => c.id === selectedChapterId);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-3 bg-[var(--color-app-bg)] border border-[var(--color-border-color)] rounded-xl text-[var(--color-text-main)] px-4 py-2 hover:border-[var(--color-card-back)] focus:outline-none focus:ring-2 focus:ring-[var(--color-card-back)] focus:ring-opacity-50 transition-all min-w-[220px]"
      >
        <div className="flex items-center gap-2 font-medium">
          <BookOpen className="w-4 h-4 text-[var(--color-text-light)]" />
          <span className="truncate max-w-[150px] text-left">{selectedChapter?.name || "Pilih Bab"}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-[var(--color-text-light)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 w-72 left-1/2 -translate-x-1/2 bg-[var(--color-card-bg)] border border-[var(--color-border-color)] rounded-xl shadow-lg overflow-hidden flex flex-col max-h-96"
          >
            <div className="overflow-y-auto p-2 scrollbar-thin">
              <div className="mb-2">
                <div className="px-3 py-1.5 text-xs font-bold tracking-wider text-[var(--color-text-light)] uppercase">
                  Minna no Nihongo (Bab)
                </div>
                {regularChapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      onSelect(chapter.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedChapterId === chapter.id 
                        ? 'bg-[var(--color-card-back)] text-white' 
                        : 'text-[var(--color-text-main)] hover:bg-[var(--color-app-bg)]'
                    }`}
                  >
                    {chapter.name}
                    {selectedChapterId === chapter.id && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
              
              <div className="h-px bg-[var(--color-border-color)] my-2 w-full"></div>

              <div>
                <div className="px-3 py-1.5 text-xs font-bold tracking-wider text-[var(--color-text-light)] uppercase">
                  Irodori (Bab Khusus)
                </div>
                {irodoriChapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      onSelect(chapter.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedChapterId === chapter.id 
                        ? 'bg-[var(--color-card-back)] text-white' 
                        : 'text-[var(--color-text-main)] hover:bg-[var(--color-app-bg)]'
                    }`}
                  >
                    {chapter.name}
                    {selectedChapterId === chapter.id && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
