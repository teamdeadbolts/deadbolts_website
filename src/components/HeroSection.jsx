import "./styles/HeroSection.css";
import "../App.css";
import { ParallaxBanner } from "react-scroll-parallax";

const HeroSection = () => {
  const background = {
    image: "/images/sky.webp",
    translateY: [0, 0],
    opacity: [1, 0.3],
    scale: [1.0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [-15, 15],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="hero-container inset center">
        <h1>
          TEAM 
        </h1>
        <div className="num">10980</div>
        <div className="hero-btns">
          <a href="/AboutUs" className="btn learn-more btn--primary btn--large">
            LEARN MORE
          </a>
          <a href="https://forms.gle/uuZscsTApGWR8Bm5A" className="btn join-us btn--primary btn--large">
            JOIN US <img src="/images/icons/arrow_forward.svg" alt="Arrow"/>
          </a>

        </div>
      </div>
    ),
  };

  const foreground = {
    image: "images/flatirons.webp",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    translateX: [0, 0],
  };
  //
  // const gradientOverlay = {
  //   opacity: [0, 1, "easeOutCubic"],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: <div className="gradient inset" />,
  // };

  const gradientOverlay2 = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradientTop inset" />,
  };

  const mask = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="mask" />,
  };

  return (
    <ParallaxBanner
      layers={[
        background,
        gradientOverlay2,
        foreground,
        headline,
      ]}
      className="full"
    />
  );
};

export default HeroSection;
