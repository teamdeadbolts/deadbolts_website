'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

function Navbar() {
  const [click, setClick] = useState(false);
  const [_button, setButton] = useState(true);
  const [fullTitle, setFullTitle] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  const showButton = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const showFullTitle = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 960) {
      setFullTitle(false);
    } else {
      setFullTitle(true);
    }
  };


  useEffect(() => {
      const handleResize = () => {
      showButton();
      showFullTitle();
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link href="/" className={styles.navbar_logo} onClick={closeMobileMenu}>
            {fullTitle ? "Team Deadbolts" : "Deadbolts"}
            <Image className={styles.navbar_img} src="/images/whitelogo.svg" alt="Logo" width={50} height={50}/>
          </Link>
          <div className={styles.menu_icon} onClick={handleClick}>
            <Image
              src={click ? "/images/icons/close.svg" : "/images/icons/hamburger_menu.svg"}
              alt="Menu Icon"
              width={25}
              height={25}
              className={styles.menu_icon_img}
            />
          </div>
          <button className={styles.theme_toggle} onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? '🌙' : '☀️'}
          </button>
          <ul className={`${styles.nav_menu} ${click ? styles.active : ""}`}>
            <li className={styles.nav_item}>
              <Link href="/" className={styles.nav_links} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                  href="/about-us"
                  className={styles.nav_links}
                  onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                  href="/sponsors"
                  className={styles.nav_links}
                  onClick={closeMobileMenu}
              >
                Sponsors
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                  href="/leadership"
                  className={styles.nav_links}
                  onClick={closeMobileMenu}
              >
                Leadership
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                  href="/calendar"
                  className={styles.nav_links}
                  onClick={closeMobileMenu}
              >
                Calendar
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link
                  href="https://forms.gle/mosNsy8xmnHaEtRm6"
                  target="_blank"
                  className={styles.nav_links}
                  onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;