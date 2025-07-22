// src/pages/CoenPage.jsx
import React from 'react';
import '../styles/IndividualPersonPage.css';

const CoenPage = () => (
    <div className="profile-page-container">
        <img
            src="/images/coen.jpg"
            alt="Coen Shields"
            className="profile-photo"
        />
        <h1 className="profile-name">Coen Shields</h1>
        <h2 className="profile-role">Programming Captain</h2>
        <p className="profile-description">
            As Programming Captain of the Deadbolts, Coen leads the development of the team’s software systems. From autonomous routines to real-time controls, he helps ensure the robot’s brain is just as powerful as its body. Coen plays a key role in making the robot smarter and more adaptable each season.
        </p>
        <div style={{ height: '1rem' }}></div>
        <p className="profile-description">
            When he isn't busy programming, Coen is an avid rock climber who enjoys challenging routes and high-altitude adventures.
        </p>
    </div>
);

export default CoenPage;