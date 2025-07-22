import React from "react";
import { Button } from "./Button";
import "./styles/HeroSection.css";
import "../App.css";
import { ParallaxBanner } from "react-scroll-parallax";

const HeroSection = () => {
  const background = {
    image: "/images/sky.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [-15, 15],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      // <div className="inset center">
      //   <h1 className="headline white">Hello World!</h1>
      // </div>
      <div className="hero-container inset center">
        <h1>
          TEAM 
        </h1>
        <div className="num">10980</div>
        <div className="hero-btns">
          <Button
            className="btns learn-more"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            linkTo={"/AboutUs"}
          >
            LEARN MORE
          </Button>
          <Button
            className="btns join-us"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            linkTo={"https://forms.gle/uuZscsTApGWR8Bm5A"}
          >
            JOIN US <img src="/images/icons/arrow_forward.svg" alt="Arrow" />
          </Button>
        </div>
      </div>
    ),
  };

  const foreground = {
    image: "images/flatirons.png",
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
        // mask,
        //gradientOverlay,
        gradientOverlay2,
        foreground,
        headline,
      ]}
      className="full"
    />
  );
};

export default HeroSection;
