import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { grammarQuestions, GrammarQuestion } from '../data/grammarQuestions';
import { Settings, Target, ChevronRight, RotateCcw, X, Check, BookOpen } from 'lucide-react';

interface Result {
  question: GrammarQuestion;
  userAnswer: string;
  isCorrect: boolean;
}

export function GrammarPractice({ onExit }: { onExit: () => void }) {
  const [stage, setStage] = useState<'setup' | 'quiz' | 'results'>('setup');
  const [questionCount, setQuestionCount] = useState<number>(10);
  
  const [activeQuestions, setActiveQuestions] = useState<GrammarQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Result[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const startQuiz = () => {
    // Shuffle and pick
    const shuffled = [...grammarQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    setActiveQuestions(selected);
    setCurrentIndex(0);
    setResults([]);
    setSelectedAnswer(null);
    setStage('quiz');
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) return;
    
    const currentQ = activeQuestions[currentIndex];
    const isCorrect = selectedAnswer === currentQ.answer;
    
    setResults(prev => [...prev, {
      question: currentQ,
      userAnswer: selectedAnswer,
      isCorrect
    }]);

    setSelectedAnswer(null);

    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setStage('results');
    }
  };

  if (stage === 'setup') {
    return (
      <div className="w-full max-w-lg bg-[var(--color-card-bg)] rounded-[32px] p-8 shadow-[0_10px_40px_rgba(90,90,64,0.08)] border border-[var(--color-border-color)]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3 text-[var(--color-primary)]">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-xl font-bold">Latihan Tata Bahasa</h2>
          </div>
          <button onClick={onExit} className="p-2 text-[var(--color-text-light)] hover:text-[var(--color-text-muted)] hover:bg-[var(--color-app-bg)] rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[var(--color-text-muted)] mb-2">
              Jumlah Soal
            </label>
            <div className="flex flex-col gap-2">
              <input 
                type="range" 
                min="5" 
                max={grammarQuestions.length} 
                step="5"
                value={questionCount} 
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full accent-[var(--color-primary)]"
              />
              <div className="flex justify-between text-xs text-[var(--color-text-light)] font-medium px-1">
                <span>5</span>
                <span>{questionCount} soal</span>
                <span>{grammarQuestions.length}</span>
              </div>
            </div>
            <p className="text-xs text-[var(--color-text-light)] mt-2">
              Total tersedia: {grammarQuestions.length} soal (Otomatis diacak)
            </p>
          </div>

          <button 
            onClick={startQuiz}
            className="w-full py-4 bg-[var(--color-primary)] text-[var(--color-app-bg)] rounded-xl font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Mulai Latihan
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'quiz') {
    const currentQ = activeQuestions[currentIndex];
    
    return (
      <div className="w-full max-w-2xl bg-[var(--color-card-bg)] rounded-[32px] p-6 sm:p-10 shadow-[0_10px_40px_rgba(90,90,64,0.08)] border border-[var(--color-border-color)] flex flex-col min-h-[400px]">
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm font-semibold text-[var(--color-text-light)]">
            Soal {currentIndex + 1} dari {activeQuestions.length}
          </div>
          <button onClick={onExit} className="p-2 text-[var(--color-text-light)] hover:text-[var(--color-text-muted)] hover:bg-[var(--color-app-bg)] rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-main)] mb-8 whitespace-pre-wrap leading-relaxed">
            {currentQ.question}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 mt-auto">
            {currentQ.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className={`py-4 px-6 rounded-xl border-2 text-left font-medium transition-all ${
                  selectedAnswer === opt 
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 text-[var(--color-primary)]' 
                    : 'border-[var(--color-border-light)] text-[var(--color-text-muted)] hover:border-[var(--color-border-color)] hover:bg-[var(--color-app-bg)]'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button 
            onClick={nextQuestion}
            disabled={!selectedAnswer}
            className="w-full py-4 bg-[var(--color-primary)] text-[var(--color-app-bg)] rounded-xl font-semibold shadow-md hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {currentIndex + 1 === activeQuestions.length ? 'Selesai' : 'Selanjutnya'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Results stage
  const correctCount = results.filter(r => r.isCorrect).length;
  const wrongResults = results.filter(r => !r.isCorrect);
  const score = Math.round((correctCount / activeQuestions.length) * 100);

  return (
      <div className="w-full max-w-3xl bg-[var(--color-card-bg)] rounded-[32px] p-6 sm:p-10 shadow-[0_10px_40px_rgba(90,90,64,0.08)] border border-[var(--color-border-color)] max-h-[85vh] flex flex-col">
      <div className="flex justify-between items-center mb-8 shrink-0">
        <h2 className="text-2xl font-bold text-[var(--color-text-main)]">Hasil Latihan</h2>
        <button onClick={onExit} className="p-2 text-[var(--color-text-light)] hover:text-[var(--color-text-muted)] hover:bg-[var(--color-app-bg)] rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
        <div className="flex flex-col items-center justify-center mb-10 p-6 bg-[var(--color-app-bg)] rounded-2xl">
          <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">{score}%</div>
          <p className="text-[var(--color-text-muted)] font-medium">
            Benar {correctCount} dari {activeQuestions.length} soal
          </p>
        </div>

        {wrongResults.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-4">Pembahasan Soal yang Salah</h3>
            {wrongResults.map((res, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[var(--color-app-bg)] border border-[var(--color-border-color)]">
                <p className="font-semibold text-[var(--color-text-main)] mb-4">{res.question.question}</p>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-[var(--color-text-light)] line-through">{res.userAnswer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-[var(--color-primary)]">{res.question.answer}</span>
                  </div>
                </div>
                <div className="bg-[var(--color-card-bg)] p-4 rounded-xl text-sm text-[var(--color-text-muted)] leading-relaxed">
                  <span className="font-semibold block mb-1">Penjelasan:</span>
                  {res.question.explanation}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {wrongResults.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg font-medium text-[var(--color-primary)]">Luar biasa! Semua jawaban benar! 🎉</p>
          </div>
        )}
      </div>

      <div className="mt-8 shrink-0">
        <button 
          onClick={() => setStage('setup')}
          className="w-full py-4 bg-[var(--color-card-bg)] border-2 border-[var(--color-border-color)] text-[var(--color-text-muted)] rounded-xl font-semibold hover:bg-[var(--color-app-bg)] transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
