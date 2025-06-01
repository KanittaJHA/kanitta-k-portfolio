import React from "react";
import Navbar from "./Navbar";
import SpaceMan from "../../../assets/images/spaceman.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="relative w-full h-[958px] max-[401px]:h-[860px] max-[376px]:h-[800px] max-[701px]:px-[32px] max-w-[1440px] mx-auto px-[64px] flex flex-col">
      <Navbar />

      <div className="relative flex justify-center h-[958px] max-[701px]:mt-[100px] max-[401px]:h-[860px] max-[376px]:h-[800px] w-full pb-20">
        <div className="relative w-full">
          <div className="absolute uppercase leading-[140px] z-[10] text-[12rem] max-[501px]:leading-[70px] max-[376px]:leading-[50px] max-[501px]:w-full max-[501px]:text-center max-[1400px]:text-[11rem] max-[1300px]:text-[10.5rem] max-[1025px]:text-[9rem] max-[801px]:text-[8rem] max-[601px]:text-[7rem] max-[501px]:text-[6rem] max-[421px]:text-[5.5rem] max-[401px]:text-[5rem] max-[376px]:text-[4rem]">
            <p className="text-primary leading-[152px] max-[1320px]:leading-[125px] max-[1025px]:leading-[90px] max-[801px]:leading-[65px] max-[501px]:leading-[80px] max-[401px]:leading-[65px] max-[376px]:leading-[60px]">
              My space
            </p>
            <p className="text-gray-400 opacity-60">evolution</p>
          </div>

          <div className="w-full flex justify-center">
            <img
              src={SpaceMan}
              alt="Spaceman"
              className={`w-[500px] z-[5] max-[801px]:w-[480px] max-[501px]:absolute max-[501px]:top-16 max-[415px]:top-18 max-[391px]:top-4 max-[321px]:top-12 ${styles.floatAnimation}`}
            />
          </div>

          <p className="absolute bottom-0 left-0 w-[250px] max-[501px]:text-center max-[501px]:w-full text-secondary text-sm max-[376px]:text-[12px] uppercase z-[10]">
            Welcome to the space of a little dreamer. Born to be a Software
            Developer. It's not just about UI, it's about creating feelings...
            And every experience you have from now on will become a meaningful
            story for me.
          </p>

          <Link to="/projects" onClick={scrollToTop}>
            <div className="absolute top-[80px] left-[850px] z-[10] max-[1216px]:left-[720px] max-[1101px]:left-[680px] max-[1025px]:left-[600px] max-[851px]:left-[550px] max-[821px]:left-[500px] max-[765px]:hidden">
              <div className="relative w-[150px] h-[150px] flex items-center justify-center bg-black/60 shadow-[1px_1px_50px_0_rgba(207,244,255,0.25)] rounded-full">
                <div className={styles.orbitContainer1}>
                  {" "}
                  <div className={styles.orbitingStar}></div>
                </div>
                <p className="absolute uppercase text-secondary text-xl text-center z-[20]">
                  DISCUSS A PROJECTS
                </p>
              </div>
            </div>
          </Link>

          <div className="absolute bottom-0 right-0 text-[12rem] max-[501px]:w-full max-[821px]:z-[20] max-[1400px]:text-[11rem] max-[1300px]:text-[10.5rem] max-[1025px]:text-[9rem] max-[801px]:text-[8rem] max-[601px]:text-[7rem] max-[501px]:text-[6rem] max-[421px]:text-[5.5rem] max-[401px]:text-[5rem] max-[376px]:text-[4rem] max-[821px]:bottom-26">
            <div className="uppercase z-[4] max-[501px]:w-full flex flex-col justify-center max-[501px]:items-center">
              <p className="text-primary whitespace-nowrap leading-[190px] max-[1300px]:leading-[180px] max-[1025px]:leading-[140px] max-[501px]:leading-[80px] max-[401px]:leading-[60px] max-[376px]:leading-[30px]">
                Of Classic
              </p>

              <p className="text-gray-400 opacity-60 z-[20] text-right uppercase leading-[160px] max-[501px]:text-center max-[1320px]:leading-[130px] max-[801px]:leading-[100px]">
                [Coding]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
