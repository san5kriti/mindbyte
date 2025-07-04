import styles from '@/styles/Home.module.css';
import About from '../pages/about'; // wherever your About.tsx lives (adjust if needed)

export default function Home() {
  const scrollToAbout = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      {/* Background Video */}
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/mind.mp4" type="video/mp4" />
      </video>

      <div className={styles.initials}>SS.</div>

      {/* Hero Content */}
      <div className={styles.content}>
    
        <div className={styles.heroText}>
          <h1>Intelligent Study.<br />Powered by Neural Design.<br />For Thinkers.</h1>
          <p>
            Designed to replace outdated study habits with smart, neuroscience-inspired methods. Transform how you absorb, retain, and master knowledge.
          </p>
        </div>

        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.scrollButton} onClick={scrollToAbout}>
            Learn More
          </button>
          <button className={styles.scrollButton}>Demo</button>
        </div>
      </div>

      
      <About />
    </div>
  );
}