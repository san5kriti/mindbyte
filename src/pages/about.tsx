import styles from '@/styles/about.module.css';
import Marquee from "react-fast-marquee";
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
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
        MindByte is your AI-powered cognitive learning companion — designed to replace outdated study habits with smart, neuroscience-inspired methods. From interactive flashcards and gamified quizzes to an intelligent study planner and real-time performance insights, MindByte transforms how you absorb, retain, and master knowledge.
      </p>

      {/* Optional: keep cards or remove */}
      {/* 
      <div className={styles.featuresGrid}>
        <div className={styles.featureCard}>...</div>
        ...
      </div>
      */}

      {/* ✨ MARQUEE SECTION */}
      <Marquee speed={40} gradient={false} pauseOnHover className={styles.marqueeRow}>
        <div className={styles.feature}>🦾 AI Companion</div>
        <div className={styles.feature}>🗻 Smart Study Plans</div>
        <div className={styles.feature}>📈 Progress Insights</div>
        <div className={styles.feature}>🗒️ Flashcards</div>
        <div className={styles.feature}>📅 Daily Scheduler</div>
        <div className={styles.feature}>📝 Gamified Quizzes</div>
        <div className={styles.feature}>🧩 Adaptive Learning</div>
      </Marquee>

      <div className={styles.videoWrapper}>
        <video className={styles.aboutVideo} controls autoPlay muted loop playsInline>
          <source src="/brain.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>



      <div className={styles.whyItWorks}>
  <div className={styles.textColumn}>
    <h3>Cognitive Science in Action</h3>
    <p>


MindByte is grounded in the science of <em>cognitive load theory</em>, <em>active recall</em>, and <em>spaced repetition</em>, transforming traditional study habits into a highly optimized learning process.<br /><br />

💡 <strong>Flashcards</strong> promote active recall, compelling the brain to retrieve information — a proven method for strengthening long-term memory.<br />
🧠 <strong>Spaced quizzes</strong> are designed to reduce cognitive fatigue while enhancing retention through low-stakes repetition.<br />
⏰ <strong>Performance dashboards</strong> mirror feedback loops used in cognitive science, helping learners track progress, adapt strategies, and target knowledge gaps effectively.<br /><br />

By integrating neuroscience with artificial intelligence, MindByte delivers a <strong>personalized, data-informed</strong> study experience — bridging the gap between how the brain naturally learns and how modern tools can support it. The result: <strong>smarter, faster, and more enduring learning</strong> for every learner.
    </p>
  </div>

  <div className={styles.imageColumn}>
    <img
      src="/neural-map.png"
      alt="Neural pathways"
      className={styles.neuralImage}
    />
  </div>
</div>
    </section>
  );
}