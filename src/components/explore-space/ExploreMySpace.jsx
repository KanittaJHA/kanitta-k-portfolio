import React from "react";
import ExploreHeaderImage from "../../assets/images/explore-header.png";
import ExploreImage from "../../assets/images/explore.jpg";
import TypewriterText from "../TypewriterText";
import styles from "./ExploreMySpace.module.css";

const ExploreMySpace = () => {
  return (
    <section className="relative w-full h-[853px] max-[991px]:h-[814px] max-[901px]:h-[712px] max-[801px]:h-[662px] max-[782px]:h-[670px] max-[781px]:h-[660px] max-[721px]:h-[595px] max-[681px]:h-[614px] max-[601px]:h-[605px] max-[373px]:h-[600px] max-[536px]:h-[620px] max-[472px]:h-[600px] max-[372px]:h-[620px] max-[308px]:h-[636px] my-[62px] max-w-[1440px] mx-auto px-[64px] max-[701px]:px-[32px]">
      <img
        className="h-[369px] w-full object-cover rounded-[16px] max-[991px]:h-[330px] max-[801px]:h-[310px]"
        src={ExploreHeaderImage}
        alt=""
      />

      <div className="w-full flex justify-center">
        <div className="relative top-[-75px] w-[150px] h-[150px] max-[801px]:h-[130px] max-[801px]:w-[130px] max-[501px]:h-[110px] max-[501px]:w-[110px] flex items-center justify-center bg-black shadow-[1px_1px_50px_0_rgba(207,244,255,0.25)] rounded-full">
          <div className={styles.orbitContainer}>
            <div className={styles.orbitingStar}></div>
          </div>
        </div>
      </div>

      <div className="flex relative top-[-150px] max-[901px]:top-[-135px] max-[681px]:top-[-60px] mt-6">
        <div className="flex flex-col justify-center max-[681px]:items-center">
          <div className="uppercase text-[#FF9EAD] max-[681px]:text-center">
            <h2 className="text-[3.5rem] leading-[3rem] max-[913px]:text-[3.3rem] max-[901px]:text-[2.8rem] max-[801px]:text-[2.6rem] max-[781px]:text-[2.3rem] max-[721px]:text-[2.2rem] max-[601px]:text-[1.65rem] max-[901px]:leading-[2.5rem] max-[781px]:leading-[2.2rem] max-[721px]:leading-[2rem]">
              Explore My space
              <br />
              <span className="text-[2.5rem] max-[901px]:text-[1.8rem] max-[801px]:text-[1.6rem] max-[721px]:text-[1.3rem]">
                [
                <TypewriterText text=" discover my future ]" speed={200} />
              </span>
            </h2>
          </div>

          <p className="uppercase text-[#F5DCE0] max-[681px]:text-center w-[60%] max-[795px]:w-[72%] max-[721px]:w-[80%] max-[681px]:w-[100%] text-[18px] max-[901px]:text-[16px] max-[721px]:text-[14px] max-[601px]:text-[12px] font-extralight mt-16 max-[901px]:mt-7 max-[721px]:mt-6 max-[681px]:mt-4">
            believe that when technology is shaped with heart and empathy, it
            can change the world one small step at a time through software that
            truly cares about people and solves real problems. If you’d like to
            discover the inspiration, intention, and journey behind my path as a
            software developer, let’s get to know each other more on this page
          </p>

          <button
            className={`uppercase w-[250px] max-[721px]:w-[200px] max-[421px]:w-[160px] py-2 text-[20px] max-[681px]:text-[16px] mt-10 max-[721px]:mt-8 max-[681px]:mt-6 text-white rounded-full hover:rounded-xl transition-all duration-500 cursor-pointer  ${styles.gradientMove}`}
          >
            discover MORE
          </button>
        </div>

        <div className="w-full  flex flex-col max-[681px]:hidden">
          <img
            className="h-[460px] object-cover rounded-[16px] rounded-tl-[64px] max-[901px]:h-[342px] max-[781px]:h-[332px] max-[721px]:h-[276px]"
            src={ExploreImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreMySpace;
