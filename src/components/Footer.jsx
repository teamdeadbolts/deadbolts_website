import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-media-wrapper">
        <Link
          className="social-icon-link github"
          to="https://github.com/teamdeadbolts"
          target="_blank"
          aria-label="Github"
        >
          <img src="/images/logos/githubcoloricon.png" alt="Github"></img>
        </Link>
        <Link
            className="social-icon-link instagram"
            to="https://www.instagram.com/deadbolts10980/"
            target="_blank"
            aria-label="Instagram"
        >
          <img src="/images/logos/instagramcoloricon.png" alt="Instagram"></img>
        </Link>
        <Link
            className="social-icon-link youtube"
            to="https://youtube.com/@deadbolts10980?si=1HgPkahZiKMXkQQC"
            target="_blank"
            aria-label="Youtube"
        >
          <img src="/images/logos/youtubecoloricon.png" alt="youtube"></img>
        </Link>
        <Link
            className="social-icon-link tba"
            to="https://www.thebluealliance.com/team/10980"
            target="_blank"
            aria-label="TBA"
        >
          <img src="/images/logos/tbacoloricon.png" alt="TBA"></img>
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
