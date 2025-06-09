import styles from '@/styles/about.module.css';
import Marquee from "react-fast-marquee";
import BehindScience from './components/behindscience'; // ✅ Correct path and casing

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

      {/* ✅ Modular Cognitive Science Section */}
      <BehindScience />

      {/* About the Creator */}
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About the Creator</h2>
        <div className={styles.gridContainer}>
          <div className={styles.socialColumn}>
            <ul className={styles.socialList}>
              <li><a href="https://github.com/san5kriti" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/sanskritishelke" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://sanskritishelke.com" target="_blank" rel="noopener noreferrer">Website</a></li>
              <li><a href="https://medium.com/@sans" target="_blank" rel="noopener noreferrer">Medium</a></li>
            </ul>
          </div>

          <div className={styles.bioColumn}>
            <p>
              I'm <strong>Sanskriti Shelke</strong>, a 19-year-old based in Singapore, graduating with a BSc in Artificial Intelligence & Computer Science from the University of Birmingham. I began my undergraduate journey at 16, driven by an insatiable curiosity for how intelligence works — biological, artificial, and everything in between.
            </p>
            <p>
              My work lies at the intersection of <em>machine learning</em>, <em>quantum computing</em>, and <em>software engineering</em>. I specialize in <strong>hybrid AI-quantum systems</strong> and intelligent optimization techniques, with a deep interest in <strong>space tech</strong> and <strong>applied AI</strong> for scientific discovery.
            </p>
            <h3 className={styles.subheading}>Why I Built MindByte</h3>
            <p>
              MindByte was born out of <strong>frustration</strong> and <strong>hope</strong>. I saw how many brilliant students — including myself — struggled not with intelligence, but with outdated study methods: cramming, passive rereading, last-minute burnout cycles.
            </p>
            <p>
              I wanted to create a learning companion that understood how the <em>brain</em> works and supported why it struggles. By fusing <strong>neuroscience</strong> with <strong>AI</strong>, MindByte is designed to make learning feel natural, effective, and even fun.
            </p>
            <p>
              From <em>spaced flashcards</em> and <em>low-stakes quizzes</em> to <em>smart dashboards</em> and <em>personalized study plans</em>, it's my attempt to make smart learning a <strong>right</strong>, not a privilege.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}