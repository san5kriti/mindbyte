import { useState } from "react";
import styles from "../styles/demo.module.css";
import Link from "next/link";

type Flashcard = {
  question: string;
  answer: string;
};

export default function DemoPage() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [error, setError] = useState("");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null); // 💡 NEW

  const generateFlashcards = async () => {
    setLoading(true);
    setError("");
    setFlashcards([]);
    setFlippedIndex(null); // Reset flipped state on new query
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();
      if (data.flashcards) {
        setFlashcards(data.flashcards);
      } else {
        setError("No flashcards received.");
      }
    } catch (err) {
      console.error("API error:", err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFlip = (index: number) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/mind.mp4" type="video/mp4" />
      </video>

      <div className={styles.topLeft}>
        <Link href="/">
          <button className={styles.homeButton}>← Home</button>
        </Link>
      </div>

      <div className={styles.overlay}>
        <img src="/mindbytelogo2.png" alt="MindByte Logo" className={styles.logo} />

        <p className={styles.subtitle}>
          Enter any topic below — MindByte’s intelligent engine will instantly craft flashcards tailored to your mind.
        </p>

        <div className={styles.inputSection}>
          <input
            type="text"
            value={topic}
            placeholder="e.g. Quantum Entanglement"
            onChange={(e) => setTopic(e.target.value)}
            className={styles.input}
          />
          <button
            className={styles.scrollButton2}
            onClick={generateFlashcards}
            disabled={loading || !topic.trim()}
          >
            {loading ? "Thinking..." : "Generate Flashcards"}
          </button>
        </div>

        {error && <p style={{ color: "salmon", marginTop: "2rem" }}>{error}</p>}

        {flashcards.length > 0 && (
          <div className={styles.result}>
            {flashcards.map((card, i) => (
              <div
                key={i}
                className={`${styles.flipCard} ${flippedIndex === i ? styles.flipped : ""}`}
                onClick={() => toggleFlip(i)}
              >
                <div className={styles.flipInner}>
                  <div className={styles.flipFront}>
                    <strong>Q{i + 1}:</strong> {card.question}
                  </div>
                  <div className={styles.flipBack}>
                    <strong>A{i + 1}:</strong> {card.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}