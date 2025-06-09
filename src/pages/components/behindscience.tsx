import styles from '@/styles/behindscience.module.css';
import Capabilities from './Capabilities';

export default function BehindTheScience() {
  return (
    <div className={styles.videoSection}>
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
          <div className={styles.textColumn}>
            <h3>Cognitive Science in Action</h3>
            <p>
              MindByte is grounded in the science of <em>cognitive load theory</em>, <em>active recall</em>, and <em>spaced repetition</em>, transforming traditional study habits into a highly optimized learning process.<br /><br />
              
              Take charge of your learning with AI generated <strong>flashcards</strong>, <strong>personalised tests</strong> to simulate real exam questions, <strong>progress reports</strong> and even your very own <strong>AI study companion</strong> to reassure and guide you throughout your learning journey.<br /><br />
              By integrating neuroscience with artificial intelligence, MindByte delivers a <strong>personalized, data-informed</strong> study experience — bridging the gap between how the brain naturally learns and how modern tools can support it. The result: <strong>smarter, faster, and more enduring learning</strong> for every learner.
            </p>
          </div>

          <div className={styles.imageColumn}>
            <img src="/image2.png" alt="Neural pathways" className={styles.neuralImage} />
          </div>
          <Capabilities />
        </div>
      </div>
    </div>
  );
}