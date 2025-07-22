// src/pages/ZanePage.jsx
import React from 'react';
import '../styles/IndividualPersonPage.css';

const ZanePage = () => (
    <div className="profile-page-container">
        <img
            src="/images/zane.jpg"
            alt="Zane Aloia"
            className="profile-photo"
        />
        <h1 className="profile-name">Zane Aloia</h1>
        <h2 className="profile-role">Team Captain</h2>
        <p className="profile-description">
            Zane is the Co-Founder and Team Captain of FRC Team 10980, The Deadbolts. He leads strategy sessions,
            oversees the integration of programming and mechanical systems, and drives the team’s outreach initiatives.
            With a passion for innovation and a vision for excellence, Zane is committed to building not just
            competitive robots, but a supportive and inclusive team culture that empowers every member. Prior to The Deadbolts, he helped lead a previous FRC team into the top 10% worldwide, demonstrating his ability to elevate performance and foster growth through collaborative leadership.
        </p>
        <div style={{height: '1rem'}}></div>
        <p className="profile-description">
            Outside of robotics, Zane enjoys watching Formula One and developing iOS apps.
        </p>
        <br/>
        <br/>
        <a href="/leadership" className="btn btn--black btn--medium">
            Back to Team Leadership
        </a>
    </div>
);

export default ZanePage;