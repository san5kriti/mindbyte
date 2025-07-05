// components/Navbar.tsx
import Link from "next/link";
import styles from '@/styles/Navbar.module.css';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
  <div className={styles.left}>
    <Link href="#home" className={styles.logoLink}>
      <img src="/mindbytelogo2.png" alt="MindByte Logo" className={styles.logo} />
    </Link>
  </div>

  <ul className={styles.navLinks}>
    <li><Link href="#about">About</Link></li>
    <li><Link href="#features">Features</Link></li>
    <li><Link href="#demo">Demo</Link></li>
    <li><Link href="#contact">Contact</Link></li>
  </ul>

  <div className={styles.right}>
    <a
      href="https://github.com/san5kriti"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.githubIcon}
    >
      <FaGithub size={28} />
    </a>
  </div>
</nav>

  );
}