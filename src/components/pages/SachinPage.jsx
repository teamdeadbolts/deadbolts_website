// src/pages/SachinPage.jsx
import React from 'react';
import '../styles/IndividualPersonPage.css';

const SachinPage = () => (
    <div className="profile-page-container">
            <img
                src="/images/placeholder-profile.webp"
                alt="Sachin Sangvikar"
                className="profile-photo"
            />
            <h1 className="profile-name">Sachin Sangvikar</h1>
            <h2 className="profile-role">Lead Mentor</h2>
            <p className="profile-description">
                    {/* Replace this with a full bio: interests, accomplishments, hobbies, etc. */}

            </p>
            <br/>
            <br/>
            <a href="/leadership" className="btn btn--black btn--medium">
                    Back to Team Leadership
            </a>
    </div>
);

export default SachinPage;