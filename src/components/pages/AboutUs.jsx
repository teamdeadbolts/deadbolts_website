
// src/pages/AboutUs.jsx

import React from 'react';
import '../styles/AboutUs.css';
import '../styles/Button.css';

    const AboutUs = () => (
      <div className="about-us-container">
            <h1 className="about-us-heading">About The Deadbolts #10980</h1>

            <section className="about-us-section">
              <h2>Our Mission</h2>
              <p className="about-us-text">
                Founded in 2025, The Deadbolts are on a mission to spark curiosity and foster
                collaboration through hands-on robotics. As a rookie team based in Colorado,
                we believe in learning by doing, pushing creative boundaries, and engineering
                solutions that make a real impact.
              </p>
            </section>

            <section className="about-us-section">
              <h2>Our Journey</h2>
              <p className="about-us-text">
                From our first build session to the competition floor, our journey has been
                powered by passion and teamwork. Guided by student leaders and mentors,
                we've tackled challenges head-on, designed innovative mechanisms, and
                celebrated every milestone together.
              </p>
            </section>

            <section className="about-us-section">
              <h2>Our Values</h2>
              <ul className="about-us-text">
                <li><strong>Innovation:</strong> Embracing new ideas to solve complex problems.</li>
                <li><strong>Teamwork:</strong> Working together to achieve collective success.</li>
                <li><strong>Community:</strong> Engaging local businesses and inspiring the next generation.</li>
              </ul>
            </section>

            <a href="/leadership" className="btn btn--black btn--medium">
              Meet the Team
            </a>
          </div>
    );

    export default AboutUs;
