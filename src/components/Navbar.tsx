"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@/app/styles/Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Toggle a class on <html> to prevent scrolling
    if (isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }

    // Clean up the effect when the component unmounts or menu closes
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Areeba.</Link>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </div>
      <button onClick={toggleMenu} className={styles.hamburger}>
        <span className={`${styles.bar} ${isOpen ? styles.openBar : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.openBar : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.openBar : ''}`}></span>
      </button>
    </nav>
  );
}
