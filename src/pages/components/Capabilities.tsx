'use client';

import styles from '@/styles/capabilities.module.css';
import {
  BrainCircuitIcon,
  LucideRepeat,
  PresentationIcon,
  BarChart2Icon,
} from 'lucide-react';
import { motion } from 'framer-motion';

const capabilitiesData = [
  {
    Icon: BrainCircuitIcon,
    title: 'Cognitive Load Theory',
    desc: 'Structured learning designed to reduce mental overload and increase retention.',
  },
  {
    Icon: LucideRepeat,
    title: 'Spaced Repetition',
    desc: 'Scientifically validated intervals that improve long-term memory recall.',
  },
  {
    Icon: PresentationIcon,
    title: 'Active Recall',
    desc: 'Optimizes memory by forcing the brain to retrieve information consciously.',
  },
  {
    Icon: BarChart2Icon,
    title: 'Feedback Loops',
    desc: 'Boosts self-awareness by analyzing learning patterns and progress.',
  },
];

export default function Capabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {capabilitiesData.map(({ Icon, title, desc }, index) => (
          <motion.div
            key={index}
            className={styles.item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
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