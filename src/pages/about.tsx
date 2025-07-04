'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/about.module.css';
import Marquee from 'react-fast-marquee';
import BehindScience from './components/behindscience';
import BioPage from './components/bio';
import { motion } from 'framer-motion';

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Size canvas to aboutSection, not full screen
    const section = document.getElementById("about");
    if (!section) return;

    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2,
    }));

    function animateStars() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
        }
      });

      requestAnimationFrame(animateStars);
    }

    animateStars();
  }, []);

  return (
    <div className={styles.aboutWrapper}>
      <canvas ref={canvasRef} className={styles.starCanvas} />

      <motion.section
        id="about"
        className={styles.aboutSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className={styles.aboutTitle}>
          Intelligent Study. Powered by Neural Design. For{' '}
          <span className={styles.wordSwitcher}>
            <span className={styles.word}>Thinkers.</span>
            <span className={styles.word}>Students.</span>
            <span className={styles.word}>Learners.</span>
            <span className={styles.word}>You.</span>
          </span>
        </h2>

        <p className={styles.aboutText}>
          MindByte is your AI-powered cognitive learning companion — designed to replace outdated study habits with smart, neuroscience-inspired methods.
          From interactive flashcards and gamified quizzes to an intelligent study planner and real-time performance insights, MindByte transforms how you absorb, retain, and master knowledge.
        </p>

        <div className={styles.videoWrapper}>
          <video className={styles.aboutVideo} controls autoPlay muted loop playsInline>
            <source src="/brain.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Marquee speed={40} gradient={false} pauseOnHover className={styles.marqueeRow}>
          <div className={styles.feature}>🦾 AI Companion</div>
          <div className={styles.feature}>🗻 Smart Study Plans</div>
          <div className={styles.feature}>📈 Progress Insights</div>
          <div className={styles.feature}>🗒️ Flashcards</div>
          <div className={styles.feature}>📅 Daily Scheduler</div>
          <div className={styles.feature}>📝 Gamified Quizzes</div>
          <div className={styles.feature}>🧩 Adaptive Learning</div>
        </Marquee>

        <BehindScience />
        <BioPage />
      </motion.section>
    </div>
  );
}