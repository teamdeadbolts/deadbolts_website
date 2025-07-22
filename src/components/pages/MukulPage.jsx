// src/pages/MukulPage.jsx
import React from 'react';
import '../styles/IndividualPersonPage.css';

const MukulPage = () => (
    <div className="profile-page-container">
        <img
            src="/images/mukul.jpg"
            alt="Mukul Naidu"
            className="profile-photo"
        />
        <h1 className="profile-name">Mukul Naidu</h1>
        <h2 className="profile-role">Mechanical Co-Captain</h2>
        <p className="profile-description">
            As Mechanical Co-Captain of the Deadbolts, Mukul helps lead the design and fabrication of the team’s robot. Known for his precision and collaborative spirit, he plays a key role in turning creative ideas into reliable systems on the field. Whether it’s brainstorming mechanisms or refining parts in the shop, Mukul brings a strong technical focus to everything he builds.
        </p>
        <div style={{ height: '1rem' }}></div>
        <p className="profile-description">
            Outside of robotics, Mukul enjoys woodworking and can often be found crafting detailed projects in his garage.
        </p>
    </div>
);

export default MukulPage;