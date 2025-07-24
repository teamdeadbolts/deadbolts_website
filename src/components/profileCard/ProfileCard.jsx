import React from 'react';
import './styles/ProfileCard.css';

const ProfileCard = ({ image, name, role, description }) => {
  return (
    <div className="profile-card">
      <div className="profile-card__image-wrapper">
        <img src={image} alt={name} className="profile-card__image" />
      </div>
      <div className="profile-card__content">
        <h3 className="profile-card__name">{name}</h3>
        <h4 className="profile-card__role">{role}</h4>
        <p className="profile-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
