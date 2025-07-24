'use client'

import Link from "next/link";
import "./heroSection.module.css";
import { ParallaxBanner, BannerLayer, EasingPreset, ParallaxProvider } from "react-scroll-parallax";

const HeroSection = () => {
  const layers: BannerLayer[] = [
    {
      image: "../../../../public/images/sky.webp",
      translateY: [0, 0],
      opacity: [1, 0.3],
      scale: [1.0, 1, EasingPreset.easeInOut],
      shouldAlwaysCompleteAnimation: true,
    },
    {
      translateY: [0, 60],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: <div className="gradientTop inset" />,
    },
    {
      image: "../../../../public/images/flatirons.webp",
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
        <div className="hero-container inset center">
          <h1>
            TEAM 
          </h1>
          <div className="num">10980</div>
          <div className="hero-btns">
            <Link href="/about-us" className="btn learn-more btn--primary btn--large">
              LEARN MORE
            </Link>
            <Link href="https://forms.gle/uuZscsTApGWR8Bm5A" className="btn join-us btn--primary btn--large">
              JOIN US <img src="/images/icons/arrow_forward.svg" alt="Arrow"/>
            </Link>
          </div>
        </div>
      ),
    },
    // Mask layer (if needed)
    {
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: <div className="mask" />,
    },
  ];

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={layers}
        className="full"
      />
    </ParallaxProvider>
  );
};

export default HeroSection;