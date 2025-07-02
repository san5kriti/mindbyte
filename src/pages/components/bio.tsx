// app/bio/page.tsx
import styles from '@/styles/bio.module.css';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function BioPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Left side */}
        <div className={styles.left}>
          <h1 className={styles.heading}>Behind The Build</h1>
          <p className={styles.text}>
            Hi, I’m <strong>Sanskriti Shelke</strong> a recent graduate in Artificial Intelligence and Computer Science from the University of Birmingham.
          </p>
          <p className={styles.text}>
            I built MindByte to reimagine how we study, by aligning cognitive science with intelligent design. It’s a project rooted in curiosity, purpose, and the belief that learning should feel natural, not overwhelming.
          </p>
          <p className={styles.text}>
            If you’d like to collaborate, share feedback, or explore an idea together, feel free to reach out.
          </p>
        </div>

        {/* Right side */}
        <div className={styles.right}>
          <Image
            src="/mindbyte.png"
            alt="MindByte Logo"
            width={200}
            height={60}
            className={styles.logo}
          />
          <div className={styles.links}>
            <a href="mailto:sanskritishelke.r.com">
              <FaEnvelope /> &nbsp; email
            </a>
            <a href="https://www.linkedin.com/in/sanskritishelke/" target="_blank">
              <FaLinkedin /> &nbsp; linkedin
            </a>
            <a href="https://github.com/san5kriti" target="_blank">
              <FaGithub /> &nbsp; github
            </a>
            <a href="https://sanskritishelke.com/" target="_blank">
              <FaGlobe /> &nbsp; website
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        Sanskriti Shelke 2025
      </footer>
    </main>
  );
}