import styles from '@/styles/Home.module.css';
import About from '../pages/about'; 
import Navbar from '../pages/components/navbar'; 
import Link from 'next/link';

export default function Home() {
  const scrollToAbout = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className={styles.container}>
       <Navbar />
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

      {/* might not need this? <div className={styles.initials}>SS.</div> */}
      

      {/* Hero Content */}
      <div className={styles.content}>
    
        <div className={styles.heroText}>
  <h1>
  Intelligent Study.<br />
  Powered by Neural Design.<br />
  For{" "}
  <span className={styles.wordSwitcher}>
    <span className={styles.word}>Thinkers.</span>
    <span className={styles.word}>Students.</span>
    <span className={styles.word}>Learners.</span>
    <span className={styles.word}>You.</span>
  </span>
</h1>
  

  <p>
    Designed to replace outdated study habits with smart, neuroscience-inspired methods.
    <br/> Transform how you absorb, retain, and master knowledge.
  </p>
</div>
        

        {/* Buttons */}
        <div className={styles.buttonGroup}>
        <Link href="#about">
          <button className={styles.scrollButton2}>Learn More</button>
        </Link>
        <Link href="/demo">
           <button className={styles.scrollButton2}>Demo</button>
         </Link>
        </div>
      </div>
  
      <About />
    </div>
  );
}