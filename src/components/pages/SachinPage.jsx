// src/pages/SachinPage.jsx
import React from 'react';
import '../styles/IndividualPersonPage.css';

const SachinPage = () => (
    <div className="profile-page-container">
        <img
            src="/images/placeholder-profile.jpg"
            alt="Sachin Sangvikar"
            className="profile-photo"
        />
        <h1 className="profile-name">Sachin Sangvikar</h1>
        <h2 className="profile-role">Lead Mentor</h2>
        <p className="profile-description">
            {/* Replace this with a full bio: interests, accomplishments, hobbies, etc. */}

        </p>
    </div>
);

export default SachinPage;