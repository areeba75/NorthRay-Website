"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"; // Importing close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div>
      <div className={styles.logo}>
        <Link href="/">North Rays</Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <RxCross1 /> : <RxHamburgerMenu />} {/* Toggle between hamburger and close icon */}
      </div>
      </div>

      {/* Navigation links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/academy">Academy</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className={`${styles.container}`}>
        <button className={`${styles.navBtn}`}>Let's Talk</button>
      </div>
    </nav>
  );
};

export default Navbar;
