import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-media-wrapper">
        <Link
          className="social-icon-link instagram"
          to="https://www.instagram.com/deadbolts10980/"
          target="_blank"
          aria-label="Instagram"
        >
          <img src="/images/logos/instagramIconWhite.png" alt="Instagram"></img>
        </Link>
        <Link
          className="social-icon-link github"
          to="https://github.com/teamdeadbolts"
          target="_blank"
          aria-label="Github"
        >
          <img src="/images/logos/githubIconWhite.png" alt="Github"></img>
        </Link>
        <Link
          className="social-icon-link tba"
          to="https://www.thebluealliance.com/team/10980"
          target="_blank"
          aria-label="TBA"
        >
          <img src="/images/logos/theblueallianceIconWhite.png" alt="TBA"></img>
        </Link>
      </div>

      <div className="contact-us-wrapper">
        <div className="contact-us">
          <h4>Contact Us</h4>
          <h6>——————</h6>
          <p className="deadboltsEmail">
            <a href="mailto: teamdeadbolts@gmail.com ?subject=Deadbolts Robotics Inquiry">
              teamdeadbolts@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
