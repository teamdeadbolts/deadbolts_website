'use client'
import React from "react";
import "./homeBlurb.module.css";
import { Button } from "../button/button";
import FadeInSection from "../fadeInSection/fadeInSection";

//TODO: Fix mobile spacing weirdness
export default function HomeBlurb(props: {
  header: string,
  paragraph: string,
  image: string,
  background: string,
  leftOrRight: string,
  text: string,
  buttonText: string,
  buttonColor: string,
  link: string
}) {
  const [vertical, setVertical] = React.useState(false);
  
  const showVertical = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 960) {
      setVertical(true);
    } else {
      setVertical(false);
    }
  };

  React.useEffect(() => {
    // Only run on client side
    showVertical();

    // Add event listener
    const handleResize = () => {
      showVertical();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this runs once after mount

  return (
    <div
      className={`blurb ${props.leftOrRight}`}
      style={{
        background: props.background,
      }}
    >
      {props.leftOrRight === "left" && !vertical ? (
        <>
          <div className={`image`}>
            <img src={props.image} alt={props.leftOrRight} />
          </div>
          <div className={`text`} style={{ color: props.text }}>
            <FadeInSection left="right" className="fadeSec">
              <h1>{props.header}</h1>
              <p>{props.paragraph}</p>
            </FadeInSection>
            <FadeInSection left="right">
              <Button
                buttonStyle={`btn--${props.buttonColor}`}
                linkTo={props.link}
              >
                {props.buttonText}
              </Button>
            </FadeInSection>
          </div>
        </>
      ) : (
        <>
          <div className={`text`} style={{ color: props.text }}>
            <FadeInSection left="left">
              <h1>{props.header}</h1>
              <p>{props.paragraph}</p>
            </FadeInSection>
            <FadeInSection left="left">
              <Button
                buttonStyle={`btn--${props.buttonColor}`}
                linkTo={props.link}
              >
                {props.buttonText}
              </Button>
            </FadeInSection>
          </div>
          <div className={`image`}>
            <img src={props.image} alt={props.image} />
          </div>
        </>
      )}
    </div>
  );
}