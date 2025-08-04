import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // Is it a good idea to use the right image dimensions? Yes. Am I going to do it? No.
  return (
      <div className={styles.footer_container}>
        <div className={styles.social_media_wrapper}>
          <Link
              className={styles.social_icon_link}
              href="https://github.com/teamdeadbolts"
              target="_blank"
              aria-label="Github"
          >
            <Image src="/images/logos/githubcoloricon.webp" width={100} height={100} alt="Github" />
          </Link>
          <Link
              className={styles.social_icon_link}
              href="https://www.instagram.com/deadbolts10980/"
              target="_blank"
              aria-label="Instagram"
          >
            <Image src="/images/logos/instagramcoloricon.webp" alt="Instagram" width={100} height={100} />
          </Link>
          <Link
              className={styles.social_icon_link}
              href="https://youtube.com/@deadbolts10980?si=1HgPkahZiKMXkQQC"
              target="_blank"
              aria-label="Youtube"
          >
            <Image src="/images/logos/youtubecoloricon.webp" alt="youtube" width={100} height={100}/>
          </Link>
          <Link
              className={styles.social_icon_link}
              href="https://www.thebluealliance.com/team/10980"
              target="_blank"
              aria-label="TBA"
          >
            <Image src="/images/logos/tbacoloricon.webp" alt="TBA" width={100} height={100}/>
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
        <br />
        <p className={styles.nonprofitStatement}>
          The Deadbolts FRC Team is a 501(c)(3) nonprofit organization registered in the State of Colorado. Contributions are tax-deductible to the extent permitted by law. EIN available upon request.
        </p>
      </div>
  );
};

export default Footer;