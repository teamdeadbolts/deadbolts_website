import "../../App.css";
import HeroSection from "../HeroSection";

import HomeBlurb from "../HomeBlurb";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeBlurb
        header="FIRST Robotics"
        paragraph="FIRST is a global robotics community preparing young people for the future. Its mission is to inspire young people to be leaders and innovators in science and technology through mentor-based programs that build skills, inspire innovation, and foster self-confidence."
        image="/images/firstRobotics.jpg"
        background="#AB4501"
        leftOrRight="left"
        text="#FFFFFF"
        buttonText="Learn more about FIRST"
        buttonColor="242424"
        link="https://www.firstinspires.org/"
      />
    </>
  );
};

export default Home;
