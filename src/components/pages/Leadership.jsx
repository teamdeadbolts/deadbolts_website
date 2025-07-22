import React from 'react';
import ProfileCard from '../ProfileCard';
import '../styles/Leadership.css';
import { Link } from 'react-router-dom';

const Leadership = () => {
    return (
        <div className="leadership-container">
            <h1>Our Leadership Team</h1>
            <div className="leadership-grid">
                <Link to="/leadership/Zane-Aloia" className="leadership-link">
                    <ProfileCard
                        image="/images/zane.jpg"
                        name="Zane Aloia"
                        role="Team Captain"
                        description=""
                    />
                </Link>
                <Link to="/leadership/Ethan-Berg" className="leadership-link">
                    <ProfileCard
                        image="/images/ethan.jpeg"
                        name="Ethan Berg"
                        role="Mechanical Co-Captain"
                        description=""
                    />
                </Link>
                <Link to="/leadership/Mukul-Naidu" className="leadership-link">
                    <ProfileCard
                        image="/images/mukul.jpg"
                        name="Mukul Naidu"
                        role="Mechanical Co-Captain"
                        description=""
                    />
                </Link>
                <Link to="/leadership/Coen-Shields" className="leadership-link">
                    <ProfileCard
                        image="/images/coen.jpg"
                        name="Coen Shields"
                        role="Programming Captain"
                        description=""
                    />
                </Link>
            </div>
            <h2>Our Mentors</h2>
            <div className="leadership-grid">
                <Link to="/leadership/Sachin-Sangvikar" className="leadership-link">
                    <ProfileCard
                        image="/images/placeholder-profile.jpg"
                        name="Sachin Sangvikar"
                        role="Lead Mentor"
                        description=""
                    />
                </Link>
            </div>
        </div>
    );
};

export default Leadership;