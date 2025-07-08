import { useState } from "react";
import styles from "../styles/demo.module.css";
import Link from "next/link";

export default function DemoPage() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateFlashcards = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error("API error:", err);
      setResult("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/mind.mp4" type="video/mp4" />
      </video>

      {/* Home Button in top-left corner */}
      <div className={styles.topLeft}>
        <Link href="/">
          <button className={styles.homeButton}>← Home</button>
        </Link>
      </div>

      {/* Main Content */}
      <div className={styles.overlay}>
        <img
          src="/mindbytelogo2.png"
          alt="MindByte Logo"
          className={styles.logo}
        />

        <p className={styles.subtitle}>
          Enter any topic below — MindByte’s intelligent engine will instantly
          craft flashcards tailored to your mind.
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

        {result && (
          <div className={styles.result}>
            <pre>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}