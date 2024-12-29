// components/Footer.js
import Link from 'next/link';
import styles from '@/app/styles/Footer.module.css';
import React from "react";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      
        {/* Navigation Links */}
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Copyright Section */}
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Areeba&apos;s Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

