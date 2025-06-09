import styles from '@/styles/capabilities.module.css';
import { Code, BrainCog, GraduationCap, BrainCircuitIcon, LucideRepeat, BarChart3Icon, RectangleHorizontalIcon, PresentationIcon, BarChart2Icon } from 'lucide-react'; // optional: use lucide or your own SVGs

export default function Capabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.item}>
          <BrainCircuitIcon className={styles.icon} />
          <h4>Cognitive Load Theory</h4>
          <p>Structured learning to reduce mental overwhelm and improve processing bandwidth.</p>
        </div>
        <div className={styles.item}>
          <LucideRepeat className={styles.icon} />
          <h4>Spaced Repetition</h4>
          <p>Scientifically proven technique to encode long-term memory by timing reviews just right.</p>
        </div>
        <div className={styles.item}>
          <PresentationIcon className={styles.icon} />
          <h4>Active Recall</h4>
          <p>Forcing the brain to retrieve info (like flashcards or questions) creates durable neural connections.</p>
        </div>
        <div className={styles.item}>
          <BarChart2Icon className={styles.icon} />
          <h4>Feedback Loops</h4>
          <p>Self-awareness through performance metrics helps learners adapt, reflect, and accelerate mastery.</p>
        </div>
      </div>
    </section>
  );
}