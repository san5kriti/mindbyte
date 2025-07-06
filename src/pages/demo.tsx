'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DemoPage() {
  const [prompt, setPrompt] = useState('');
  const [flashcards, setFlashcards] = useState<{ question: string; answer: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setFlashcards([]);

    try {
      const res = await fetch('/api/generate-flashcards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: prompt }),
      });

      const data = await res.json();
      const raw = data.flashcards || '';
      const flashcardPairs = raw.split(/Question:\s*/).filter(Boolean);

      const cards = flashcardPairs.map((chunk: string) => {
        const [question, answer] = chunk.split(/Answer:\s*/);
        return {
          question: question?.trim() || '',
          answer: answer?.trim() || '',
        };
      });
      setFlashcards(cards);
    } catch (err) {
      console.error('❌ Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* 🔄 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        src="/video.mp4"
      />

      {/* 🔳 Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"></div>

      {/* 🌟 Main UI */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 text-center">
        {/* 🧠 Logo */}
        <Image src="/neural-map.png" alt="MindByte Logo" width={90} height={90} className="mb-4" />
        <h1 className="text-5xl font-bold tracking-widest mb-4">MINDBYTE</h1>
        <p className="text-lg max-w-xl mb-8">
          Enter any topic below, MindByte’s intelligent engine will instantly craft flashcards tailored to your mind. <br /> From Physics to Philosophy, we decode it for you.
        </p>

        {/* 🔍 Prompt + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mb-8">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            placeholder="e.g. Quantum Entanglement"
          />
          <button
            onClick={handleGenerate}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            {loading ? 'Generating...' : 'Generate Flashcards'}
          </button>
        </div>

        {/* 🧾 Flashcard Display */}
        <div className="w-full max-w-2xl space-y-4">
          {flashcards.map((card, idx) => (
            <div key={idx} className="bg-gray-900 bg-opacity-90 p-4 rounded shadow">
              <h3 className="font-semibold text-lg">Q: {card.question}</h3>
              <p className="mt-1 text-gray-300">A: {card.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}