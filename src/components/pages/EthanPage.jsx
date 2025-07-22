// src/pages/EthanPage.jsx
import React from 'react';
import '../styles/IndividualPersonPage.css';

const EthanPage = () => (
    <div className="profile-page-container">
        <img
            src="/images/ethan.jpeg"
            alt="Ethan Berg"
            className="profile-photo"
        />
        <h1 className="profile-name">Ethan Berg</h1>
        <h2 className="profile-role">Mechanical Co-Captain</h2>
        <p className="profile-description">
            As Mechanical Co-Captain of the Deadbolts, Ethan is instrumental in transforming ideas into functional,
            competition-ready systems. He helps guide the team’s build process with a balance of creativity, attention
            to detail, and a drive to innovate. Whether he's sketching a new concept or leading a machining session,
            Ethan’s calm leadership helps bring mechanical ideas to life.
        </p>
        <div style={{height: '1rem'}}></div>
        <p className="profile-description">
            When he’s not building robots, Ethan enjoys competitive swimming and machining with the lathe.
        </p>
        <br/>
        <br/>
        <a href="/leadership" className="btn btn--black btn--medium">
            Back to Team Leadership
        </a>
    </div>
);

export default EthanPage;