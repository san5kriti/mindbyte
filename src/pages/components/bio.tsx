'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/bio.module.css';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function BioPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
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

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <canvas ref={canvasRef} className={styles.starCanvas} />

      <main id="bio" className={styles.page}>
        <div className={styles.container}>
          <motion.div className={styles.left}>
            <h1 className={styles.heading}>Behind The Build</h1>
            <p className={styles.text}>
              Hi, I’m <strong>Sanskriti Shelke</strong> — a recent graduate in Artificial Intelligence and Computer Science from the University of Birmingham.
            </p>
            <p className={styles.text}>
              I built MindByte to reimagine how we study, by aligning cognitive science with intelligent design. It’s a project rooted in curiosity, purpose, and the belief that learning should feel natural, not overwhelming.
            </p>
            <p className={styles.text}>
              If you’d like to collaborate, share feedback, or explore an idea together, feel free to reach out.
            </p>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/mindbyte.png"
              alt="MindByte Logo"
              width={200}
              height={60}
              className={styles.logo}
            />
            <div className={styles.links}>
              <a href="mailto:sanskritishelke.r.com"><FaEnvelope /> &nbsp; email</a>
              <a href="https://www.linkedin.com/in/sanskritishelke/" target="_blank"><FaLinkedin /> &nbsp; linkedin</a>
              <a href="https://github.com/san5kriti" target="_blank"><FaGithub /> &nbsp; github</a>
              <a href="https://sanskritishelke.com/" target="_blank"><FaGlobe /> &nbsp; website</a>
            </div>
          </motion.div>
        </div>

        <footer className={styles.footer}>Sanskriti Shelke 2025</footer>
      </main>
    </div>
  );
}