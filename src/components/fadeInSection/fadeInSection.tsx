'use client'
import React, { useState, useRef, useEffect } from "react";
import "./fadeInSection.module.css";

export default function FadeInSection(props: any) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Set up window load handler
    const handleLoad = () => {
      setVisible(true);
    };
    
    // If page is already loaded, set visible immediately
    if (document.readyState === 'complete') {
      setVisible(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Set up intersection observer
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

    // Cleanup function
    return () => {
      // Remove load event listener
      window.removeEventListener('load', handleLoad);
      
      // Unobserve intersection observer
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