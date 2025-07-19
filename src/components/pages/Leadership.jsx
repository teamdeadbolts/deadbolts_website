import React from 'react';
import ProfileCard from '../ProfileCard';
import '../styles/Leadership.css';

const Leadership = () => {
  return (
    <div className="leadership-container">
      <h1>Our Leadership Team</h1>
      <div className="leadership-grid">
        <ProfileCard
          image="/images/zane.jpg"
          name="Zane Aloia"
          role="Team Captain"
          description=""
        />
        <ProfileCard
          image="/images/ethan.jpg"
          name="Ethan Berg"
          role="Mechanical Co-Lead"
          description=""
        />
        <ProfileCard
          image="/images/mukul.jpg"
          name="Mukul Naidu"
          role="Mechanical Co-Lead"
          description=""
        />
        <ProfileCard
          image="/images/coen.jpg"
          name="Coen Shields"
          role="Programming Captain"
          description=""
        />
      </div>
      <h1>Our Mentors</h1>
      <div className="leadership-grid">
        <ProfileCard
          image="/images/placeholder-profile.jpg"
          name="Sachin Sangvikar"
          role="Lead Mentor"
          description=""
        />
      </div>
    </div>
  );
};

export default Leadership;