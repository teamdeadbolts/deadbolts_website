import "../../App.css";
import HeroSection from "../HeroSection";

import HomeBlurb from "../HomeBlurb";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeBlurb
        header="FIRST Robotics"
        paragraph="FIRST is an international robotics community dedicated to equipping young people with STEM skills for the future. It aims to cultivate leadership and innovation in science and technology through programs that develop skills, spark creativity, and build confidence."
        image="/images/firstRobotics.webp"
        background="#CAF0F8"
        leftOrRight="left"
        text="#000000"
        buttonText="Learn more about FIRST"
        buttonColor="E7301B"
        link="https://www.firstinspires.org/"
      />
    </>
  );
};

export default Home;
