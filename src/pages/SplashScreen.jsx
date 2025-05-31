import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SplashScreenComponent from "../components/04-splash-screen/SplashScreenComponent";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [zoomFinished, setZoomFinished] = useState(false);

  const handleZoomFinished = () => {
    setZoomFinished(true);
  };

  useEffect(() => {
    if (zoomFinished) {
      const timer = setTimeout(() => {
        navigate("/home");
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [navigate, zoomFinished]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src="https://res.cloudinary.com/dvhhq4hhh/image/upload/v1748708105/splash-screen-bg_dpoitf.avif"
        alt=""
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-[-1]" />
      <SplashScreenComponent onZoomFinished={handleZoomFinished} />
    </div>
  );
};

export default SplashScreen;
