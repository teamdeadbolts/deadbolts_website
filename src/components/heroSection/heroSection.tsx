'use client';

import { useEffect } from "react";
import styles from "./heroSection.module.css";
import Button from "../button/button";
import Image from "next/image";

const HeroSection = () => {
  useEffect(() => {
    let latestScrollY = 0;
    let ticking = false;
    const maxScale = 0.1;

    const updateParallax = () => {
      // Update CSS variables
      document.documentElement.style.setProperty("--sky-offset", `${latestScrollY * 0.2}px`);
      document.documentElement.style.setProperty("--content-offset", `${latestScrollY * 0.34}px`);
      
      const scale = 1 + latestScrollY / (850 / maxScale);
      document.documentElement.style.setProperty("--mountains-scale", scale.toString());

      // latestScrollY: 0 - 850 
      const progress = latestScrollY / 850; // 0 → 1
      const eased = 1 - Math.pow(progress, 2);
      const alpha = eased * 0.8;
      document.documentElement.style.setProperty("--gradient-a", alpha.toString());
      ticking = false;
    };

    const onScroll = () => {
      latestScrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(() => {
      latestScrollY = window.scrollY;
      updateParallax();
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.gradient} />
      {/* Sky */}
      <div className={`${styles.layer} ${styles.sky}`}>
        <Image
          src="/images/sky.webp"
          alt="Sky background"
          fill
          priority
          sizes="200vw"
          style={{ objectFit: "cover" }}
          quality={85}
        />
      </div>

      {/* Mountains */}
      <div className={`${styles.layer} ${styles.mountains}`}>
        <Image
          src="/images/flatirons.webp"
          alt="Flatirons mountains"
          fill
          priority
          sizes="200vw"
          style={{ objectFit: "cover" }}
          quality={85}
        />
      </div>

      {/* Content */}
      <div className={`${styles.layer} ${styles.content}`}>
        <h1>TEAM</h1>
        <div className={styles.num}>10980</div>
        <div className={styles.hero_btns}>
          <Button href="/about-us" size="lg" color="#000" backgroundColor="#fff">
            LEARN MORE
          </Button>
          <Button
            href="https://forms.gle/uuZscsTApGWR8Bm5A"
            target="_blank"
            size="lg"
            color="#000"
            backgroundColor="#fff"
          >
            JOIN US
            <Image
              src="/images/icons/arrow_forward.svg"
              alt="-->"
              width={20}
              height={40}
            />
          </Button>
        </div>
        <div className={`${styles.hero_btn} ${styles.bold}`}>
          <Button
            href="https://www.gofundme.com/f/your-campaign"
            target="_blank"
            size="lg"
            color="#fff"
            backgroundColor="#051017"
            fontSize={35}
            width={350}
            variant="secondary"
          >
            DONATE
          </Button>
        </div>
      </div>
      ,
    </section>
  );
};

export default HeroSection;
