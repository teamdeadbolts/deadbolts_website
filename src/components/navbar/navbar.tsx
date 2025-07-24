'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [fullTitle, setFullTitle] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  const sizeHandler = () => {
    showButton();
    showFullTitle();
  };

  useEffect(() => {
    // Only run on client side
    showButton();
    showFullTitle();

    // Add event listener
    const handleResize = () => {
      showButton();
      showFullTitle();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this runs once after mount : "fas fa-bars"

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link href="/" className={styles.navbar_logo} onClick={closeMobileMenu}>
            {fullTitle ? "Team Deadbolts" : "Deadbolts"}
            <img className={styles.navbar_img} src="/images/whitelogo.svg" alt="Logo"></img>
          </Link>
          <div className={styles.menu_icon} onClick={handleClick}>
            <i className={`${styles.fas} ${styles.fa_times}}`}></i> 
          </div>
          <ul className={styles.nav_menu}>
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