import "../../App.css";
import HeroSection from "../HeroSection";

import React from "react";
import HomeBlurb from "../HomeBlurb";

const Home = () => {
  return (
    <>
      <HeroSection />

      <HomeBlurb
        header="What is FIRST?"
        paragraph="FIRST (For Inspiration and Recognition of Science and Technology) is a global robotics community preparing young people for the future. Its mission is to inspire young people to be leaders and innovators in science and technology through mentor-based programs that build skills, inspire innovation, and foster self-confidence, communication, and leadership."
        image="/images/firstChamps.jpg"
        background="#ab4545"
        leftOrRight="left"
        text="#242424"
        buttonText="Check out FIRST"
        buttonColor="black"
        link="https://www.firstinspires.org/"
      />
    </>
  );
};

export default Home;
