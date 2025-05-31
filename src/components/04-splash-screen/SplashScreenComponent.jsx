import React, { useState, useEffect } from "react";
import { RiApps2AiFill, RiTriangleFill } from "react-icons/ri";
import TypewriterText from "../TypewriterText";
import styles from "./SplashScreenComponent.module.css";

const SplashScreenComponent = ({ onZoomFinished }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [percent, setPercent] = useState(0);
  const [startTriangleAnimation, setStartTriangleAnimation] = useState(false);
  const [startCircleZoom, setStartCircleZoom] = useState(false);
  const [hideContent, setHideContent] = useState(false);

  const lines = [
    { text: "Loading. . .", colorClass: "text-secondary" },
    {
      text: "mission : . . . . . . initialized.",
      colorClass: "text-secondary",
    },
    { text: "system check : . . . . . . completed." },
    { text: "warning : >>>>>>>>>> for", colorClass: "text-primary" },
    {
      text: "the best experience, do not look away.",
      colorClass: "text-primary",
    },
    { text: "Let the light guide you.", colorClass: "text-primary" },
  ];

  useEffect(() => {
    let intervalId;
    if (percent < 100) {
      let speed = 100;

      if (percent >= 90) {
        speed = 200;
      }

      intervalId = setInterval(() => {
        setPercent((prevPercent) => {
          const newPercent = prevPercent + 1;
          return newPercent > 100 ? 100 : newPercent;
        });
      }, speed);
    } else {
      clearInterval(intervalId);
      setHideContent(true);
      setStartTriangleAnimation(true);

      const TRIANGLE_ANIMATION_DURATION = 2000;
      const CIRCLE_ZOOM_DURATION = 1400;

      const zoomStartTimer = setTimeout(() => {
        setStartCircleZoom(true);
      }, TRIANGLE_ANIMATION_DURATION);

      const navigateTimer = setTimeout(() => {
        if (onZoomFinished) {
          onZoomFinished();
        }
      }, TRIANGLE_ANIMATION_DURATION + CIRCLE_ZOOM_DURATION);

      return () => {
        clearTimeout(zoomStartTimer);
        clearTimeout(navigateTimer);
      };
    }

    return () => clearInterval(intervalId);
  }, [percent, onZoomFinished]);

  const handleTypewriterComplete = () => {
    if (currentLine < lines.length - 1) {
      setTimeout(() => {
        setCurrentLine((prevLine) => prevLine + 1);
      }, 2);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen max-h-[801px]:overflow-hidden w-full max-w-[1440px]">
      <div className="grid grid-cols-2">
        <div className="relative w-[1000px] left-[-350px] max-[1025px]:left-[-500px] max-[966px]:left-[-560px] max-[821px]:left-[-590px] max-[770px]:left-[-620px] max-[710px]:left-[-660px] max-[601px]:left-[-700px] max-[411px]:left-[-750px]">
          <div
            className={`${
              styles.loadingCircle
            } w-[1000px] h-[1000px] bg-black/60 rounded-full shadow-[1px_1px_160px_0_rgba(207,244,255,0.25)] flex items-center justify-center p-40 max-[1025px]:p-25 max-[966px]:p-18 max-[821px]:p-16 max-[601px]:p-11 max-[411px]:p-10 ${
              startCircleZoom ? styles.circleZoomIn : ""
            }`}
          >
            <div
              className={`w-full flex items-center justify-end transition-opacity duration-500 ${
                hideContent ? "opacity-0" : "opacity-100"
              }`}
            >
              <ul className="text-secondary max-[770px]:text-sm max-[411px]:text-[12px] max-[411px]:leading-[15px] max-[411px]:px-3 z-10 border-2 border-neutral-700 rounded-tl-[20px] rounded-br-[20px] w-[300px] h-[170px] px-5 leading-[20px] flex flex-col max-[770px]:w-[260px] max-[770px]:h-[170px] max-[710px]:w-[220px] max-[411px]:h-[135px] max-[411px]:w-[180px]">
                <li className="w-full flex items-center justify-end mb-1 mt-3">
                  <RiApps2AiFill className="text-primary" />
                </li>
                {lines.map((line, index) => (
                  <li
                    key={index}
                    className={`${line.colorClass} ${
                      index > currentLine
                        ? "opacity-0"
                        : "opacity-100 transition-opacity duration-500"
                    }`}
                  >
                    {index <= currentLine && (
                      <>
                        / &nbsp; &nbsp;
                        <TypewriterText
                          text={line.text}
                          speed={42}
                          onComplete={
                            index === currentLine
                              ? handleTypewriterComplete
                              : undefined
                          }
                        />
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`${styles.triangleOrbiter} ${
                startTriangleAnimation ? styles.triangleAnimation : ""
              }`}
            >
              <RiTriangleFill
                className={`${styles.triangleIcon} text-secondary text-2xl`}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div
            className={`flex items-center justify-center w-full h-full transition-opacity duration-500 max-[521px]:items-end max-[521px]:pb-46 ${
              hideContent ? "opacity-0" : "opacity-100"
            }`}
          >
            <p
              className="text-[12rem] text-primary max-[770px]:text-[10rem] max-[710px]:text-[8rem] max-[601px]:text-[6.5rem] max-[521px]:text-[4.5rem]"
              style={{ opacity: percent === 0 ? 0.01 : percent / 100 }}
            >
              {percent}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreenComponent;
