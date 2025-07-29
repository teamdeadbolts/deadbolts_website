'use client'

import styles from "./heroSection.module.css";
import { ParallaxBanner, BannerLayer, EasingPreset, ParallaxProvider } from "react-scroll-parallax";
import Button from "../button/button";
import Image from "next/image";

const HeroSection = () => {
  const layers: BannerLayer[] = [
    {
      image: "/images/sky.webp",
      translateY: [0, 0],
      opacity: [1, 0.3],
      scale: [1.0, 1, EasingPreset.easeInOut],
      shouldAlwaysCompleteAnimation: true,
    },
    // {
    //   translateY: [0, 60],
    //   shouldAlwaysCompleteAnimation: true,
    //   expanded: false,
    //   children: (
    //     <div className={`${styles.gradientTop} ${styles.inset}`} />
    //   ),
    // },
    {
      image: "/images/flatirons.webp",
      translateY: [0, 15],
      scale: [1, 1.1, EasingPreset.easeInOut],
      shouldAlwaysCompleteAnimation: true,
      translateX: [0, 0],
    },
    {
      translateY: [-15, 15],
      scale: [1, 1.05, EasingPreset.easeInOut],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className={`${styles.hero_container} ${styles.inset} ${styles.center}`}>
          <h1>
            TEAM 
          </h1>
          <div className={styles.num}>10980</div>
          <div className={styles.hero_btns}>
            <Button href="/about-us" size="lg" color="#000" backgroundColor="#fff">LEARN MORE</Button>
            <Button href="https://forms.gle/uuZscsTApGWR8Bm5A" target="_blank" size="lg" color="#000" backgroundColor="#fff">JOIN US <Image src="/images/icons/arrow_forward.svg" alt="-->" width={20} height={40}/></Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={layers}
        className={styles.full}
      />
    </ParallaxProvider>
  );
};

export default HeroSection;