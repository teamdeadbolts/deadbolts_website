'use client'
import React from "react";
import styles from "./homeBlurb.module.css";
import Button from "../button/button";
import FadeInSection from "../fadeInSection/fadeInSection";
import Image from "next/image";

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
    showVertical();

    const handleResize = () => {
      showVertical();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <div
      className={styles.blurb}
      style={{
        background: props.background,
      }}
    >
      {props.leftOrRight === "left" && !vertical ? (
        <>
          <div className={styles.image}>
            <img src={props.image} alt={props.leftOrRight} />
          </div>
          <div className={styles.text} style={{ color: props.text }}>
            <FadeInSection left="right" className="fadeSec">
              <h1>{props.header}</h1>
              <p>{props.paragraph}</p>
            </FadeInSection>
            <FadeInSection left="right">
              <Button
                backgroundColor="#fff"
                size="lg"
                color={props.buttonColor}
                href={props.link}
              >
                {props.buttonText}
              </Button>
            </FadeInSection>
          </div>
        </>
      ) : (
        <>
          <div className={styles.text} style={{ color: props.text }}>
            <FadeInSection left="left">
              <h1>{props.header}</h1>
              <p>{props.paragraph}</p>
            </FadeInSection>
            <FadeInSection left="left">
              <Button
                backgroundColor="#fff"
                size="xl"
                color={props.buttonColor}
                href={props.link}
              >
                {props.buttonText}
              </Button>
            </FadeInSection>
          </div>
          <div className={styles.image}>
            <Image
              src={props.image}
              alt={props.leftOrRight}
              fill
              style={{ objectFit: "cover" }} 
              priority 
            />
          </div>
        </>
      )}
    </div>
  );
}