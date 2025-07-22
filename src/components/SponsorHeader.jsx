import React from "react";
import { Button } from "./Button";
import "./styles/SponsorHeader.css";

const SponsorHeader = () => {
return (
    <div className="sponsor-header">
        <div className="sponsor-text">
            <h1>Support Our Team</h1>
            <h3>Help Us Build the Future—One Robot at a Time</h3>
            <div style={{height: '1rem'}}></div>
            <p>
                We're Team Deadbolts, a brand-new FIRST Robotics Competition (FRC) team driven by curiosity, grit, and a
                mission to make STEM accessible for every student in our community.
                As a rookie team, we're starting from scratch with no robot parts, no tools, and no legacy infrastructure.
                But what we do have is passion, big ideas, and a team of high schoolers ready to take on the world.
                <br/>
                <br/>
                <br/>
                Our fundraising goal for this season is $30,000, which will cover:</p>
            <ul>
                <li>Robot parts and competition materials</li>
                <li>Tools, electronics, and workspace equipment</li>
                <li>Competition registration fees</li>
                <li>Travel, lodging, and transportation</li>
                <li>Outreach events and STEM education initiatives</li>
            </ul>
            <p>We can't do it alone. That's where you come in.</p>
            <Button buttonStyle={"btn--black"} buttonSize={"btn--medium"}
                    linkTo={"https://forms.gle/uuZscsTApGWR8Bm5A"}>
                Become a Sponsor
            </Button>
        </div>
    </div>
);
};

export default SponsorHeader;
