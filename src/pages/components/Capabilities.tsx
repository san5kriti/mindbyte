'use client';
import styles from '@/styles/capabilities.module.css';
import {
  BrainCircuitIcon,
  LucideRepeat,
  PresentationIcon,
  BarChart2Icon,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Capabilities() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {[{
          Icon: BrainCircuitIcon, title: 'Cognitive Load Theory', desc: 'Structured learning to reduce mental overwhelm...',
        }, {
          Icon: LucideRepeat, title: 'Spaced Repetition', desc: 'Scientifically proven technique...',
        }, {
          Icon: PresentationIcon, title: 'Active Recall', desc: 'Forcing the brain to retrieve info...',
        }, {
          Icon: BarChart2Icon, title: 'Feedback Loops', desc: 'Self-awareness through performance metrics...',
        }].map(({ Icon, title, desc }, i) => (
          <motion.div
            key={i}
            className={styles.item}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <Icon className={styles.icon} />
            <h4>{title}</h4>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}