import React, { useState, useRef, useEffect } from "react";
import "./styles/FadeInSection.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();
  window.onload = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (domRef.current === null) return;
    if (window.IntersectionObserver === undefined) return;
    let domRefCurrent = domRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);

        try {
          observer.unobserve(domRefCurrent);
        } catch (error) {
          console.error(error);
        }
      }
    });

    observer.observe(domRefCurrent);

    return () => {
      try {
        observer.unobserve(domRefCurrent);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section-${props.left === "left" ? "left" : "right"} ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {props.children}
    </div>
  );
}
