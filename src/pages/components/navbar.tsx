// components/Navbar.tsx
import Link from "next/link";
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="#home" className={styles.logoLink}>
        <img
          src="/mindbytelogo2.png"
          alt="MindByte Logo"
          className={styles.logo}
        />
      </Link>

      <ul className={styles.navLinks}>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#demo">Demo</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}