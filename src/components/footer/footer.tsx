import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.social_media_wrapper}>
        <Link
          className={styles.social_icon_link}
          href="https://github.com/teamdeadbolts"
          target="_blank"
          aria-label="Github"
        >
          <img src="/images/logos/githubcoloricon.webp" alt="Github"></img>
        </Link>
        <Link
            className={styles.social_icon_link}
            href="https://www.instagram.com/deadbolts10980/"
            target="_blank"
            aria-label="Instagram"
        >
          <img src="/images/logos/instagramcoloricon.webp" alt="Instagram"></img>
        </Link>
        <Link
            className={styles.social_icon_link}
            href="https://youtube.com/@deadbolts10980?si=1HgPkahZiKMXkQQC"
            target="_blank"
            aria-label="Youtube"
        >
          <img src="/images/logos/youtubecoloricon.webp" alt="youtube"></img>
        </Link>
        <Link
            className={styles.social_icon_link}
            href="https://www.thebluealliance.com/team/10980"
            target="_blank"
            aria-label="TBA"
        >
          <img src="/images/logos/tbacoloricon.webp" alt="TBA"></img>
        </Link>
      </div>
      <div className={styles.contact_us_wrapper}>
        <div className={styles.contact_us}>
          <h4>Contact Us</h4>
          <h6>——————</h6>
          <p className={styles.deadboltsEmail}>
            <Link href="mailto: teamdeadbolts@gmail.com ?subject=Deadbolts Robotics Inquiry">
              teamdeadbolts@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
