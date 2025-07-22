// src/pages/AboutUs.jsx

import React from 'react';
import '../styles/AboutUs.css';
import '../styles/Button.css';
import {Button} from "../Button";

    const AboutUs = () => (
        <div className="about-us-container">
            <h1 className="about-us-heading">About The Deadbolts</h1>

            <section className="about-us-section">
                <h2>Our Mission</h2>
                <p className="about-us-text">
                    Founded in 2025, The Deadbolts are on a mission to build a team where students can explore engineering, programming, and design while learning what it means to work together toward a shared goal. Through hands-on problem-solving and real-world challenges, we’re developing the technical skills and leadership experience that will stay with us long after high school.
                </p>
            </section>

            <section className="about-us-section">
                <h2>Our Journey</h2>
                <p className="about-us-text">
                    Our story is just beginning. As a rookie team entering our first season, we’re starting from the ground up by assembling our tools, learning the ropes, and building a strong foundation together. We may be new, but we’re hungry to learn and determined to make the most of every opportunity that comes our way.
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
            <section className="about-us-section">
                <h2>Our Drive</h2>
                <p className="about-us-text">
                    What pushes us forward isn’t just the thrill of competition. It’s the chance to build something real with people who care. We’re driven by curiosity, collaboration, and a shared belief that high school students can take on big challenges. We are ready to show up and give it everything we’ve got.
                </p>
            </section>

            <a href="/leadership" className="btn btn--black btn--medium">
                Meet the Leadership Team
            </a>
        </div>
    );

export default AboutUs;
