import React, { useEffect } from "react";
import BackgroundImage from "../assets/images/bg.png";
import Footer from "../components/footer/Footer";
import AboutMeComponent from "../components/02-about-me/AboutMeComponent";

const AboutMe = () => {
  useEffect(() => {
    document.title = "SPACEJI | ABOUT ME";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={BackgroundImage}
        alt=""
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-[-1]" />
      <AboutMeComponent />
      <Footer />
    </div>
  );
};

export default AboutMe;
