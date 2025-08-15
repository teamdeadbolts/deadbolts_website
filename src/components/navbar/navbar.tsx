'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

function Navbar() {
  const [click, setClick] = useState(false);
  const [_button, setButton] = useState(true);
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


  useEffect(() => {
      const handleResize = () => {
      showButton();
      showFullTitle();
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

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
          <ul className={`${styles.nav_menu} ${click ? styles.active : ""}`}>
            <li className={styles.nav_item}>
              <Link href="/" className={styles.nav_links} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={`${styles.nav_item} ${styles.dropdown}`}>
              <div className={styles.nav_links}>
                About Us
              </div>
                <ul className={styles.dropdown_menu}>
                  <li>
                    <Link href="/about-us" className={styles.dropdown_link} onClick={closeMobileMenu}>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/leadership" className={styles.dropdown_link} onClick={closeMobileMenu}>
                      Leadership
                    </Link>
                  </li>
                </ul>
            </li>
            <li className={`${styles.nav_item} ${styles.dropdown}`}>
              <div className={styles.nav_links}>
                Sponsors
              </div>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link href="/sponsors" className={styles.dropdown_link} onClick={closeMobileMenu}>
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="https://account.venmo.com/u/teamdeadbolts" target="_blank" className={styles.dropdown_link} onClick={closeMobileMenu}>
                    Donate
                  </Link>
                </li>
              </ul>
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