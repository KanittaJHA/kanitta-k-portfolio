import React from "react";
import Header from "../components/01-landing-page/header/Header";
import ExploreMySpace from "../components/01-landing-page/explore-space/ExploreMySpace";
import MyProjects from "../components/01-landing-page/my-projects/MyProjects";
import BackgroundImage from "../assets/images/bg.png";
import BackgroundVDO from "../assets/images/bg-vdo.mp4";
import TextScroller from "../components/text-scroller/TextScroller";
import Bsms from "../components/01-landing-page/BSMs/Bsms";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative w-full h-auto">
        <video
          src={BackgroundVDO}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <Header />
      </div>

      <img
        src={BackgroundImage}
        alt=""
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-[-1]" />

      <ExploreMySpace />
      <TextScroller />
      <MyProjects />
      <Bsms />
      <Footer />
    </div>
  );
};

export default Home;
