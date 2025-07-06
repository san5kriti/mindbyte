'use client';

import styles from '@/styles/behindscience.module.css';
import Capabilities from './Capabilities';
import { motion } from 'framer-motion';

export default function BehindTheScience() {
  return (
    <div id="features" className={styles.videoSection}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/behind.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlayContent}>
        <div className={styles.whyItWorks}>
  <motion.div
    className={styles.textColumn}
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <h3>Cognitive Science in Action</h3>
    <p>
      MindByte isn't just a study tool, it's a rethink of how learning should feel. Rooted in <em>cognitive load theory</em>, <em>spaced repetition</em>, and <em>active recall</em>, it reshapes traditional study habits into something sharper, smarter, and science-backed.
      <br /><br />
      From AI-generated <strong>flashcards</strong> to <strong>personalized quizzes</strong> that mirror real exam pressure, MindByte adapts to how your brain learns best. Your <strong>AI study companion</strong> keeps you focused, while <strong>progress dashboards</strong> help you track what’s working and what’s not, in real time.
      <br /><br />
      The result? A deeply personal, UI friendly, data-driven study experience that blends neuroscience with machine intelligence designed to help you learn faster, remember longer, and feel more confident every step of the way.
    </p>
  </motion.div>


  <motion.div
  className={styles.imageColumn}
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
  viewport={{ once: true }}
>
  <img
    src="/brain2.gif"
    alt="brain gifs"
    className={styles.neuralImage}
  />
</motion.div>

          <Capabilities />
        </div>
      </div>
    </div>
  );
}
