import React, { useEffect } from "react";
import BackgroundImage from "../assets/images/bg.png";
import ProjectsComponent from "../components/03-projects/ProjectsComponent";
import Footer from "../components/footer/Footer";

const Projects = () => {
  useEffect(() => {
    document.title = "SPACEJI | PROJECTS";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={BackgroundImage}
        alt=""
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-[-1]" />
      <ProjectsComponent />
      <Footer />
    </div>
  );
};

export default Projects;
