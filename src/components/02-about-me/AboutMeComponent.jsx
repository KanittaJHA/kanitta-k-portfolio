import React, { useRef } from "react";
import NavbarV2 from "../01-landing-page/header/NavbarV2";
import CodingPovImage from "../../assets/images/coding-pov.png";
import TypewriterText from "../TypewriterText";
import Card from "./Card";
import { Globe } from "./Globe";
import CopyCvButton from "./CopyCvButton";
import { Frameworks } from "./Frameworks";

const AboutMeComponent = () => {
  const grid2Container = useRef();

  return (
    <div className="w-full h-auto max-w-[1440px] px-[64px] mx-auto max-[701px]:px-[32px] mb-[64px]">
      <NavbarV2 />

      <div className="min-h-screen mt-20 md:mt-30">
        <div className="w-full text-center">
          <h2 className="text-primary text-6xl uppercase mt-[140px]">
            About Me
          </h2>

          <span className="text-secondary text-[2.5rem] max-[901px]:text-[1.8rem] max-[801px]:text-[1.6rem] max-[721px]:text-[1.3rem] uppercase">
            [
            <TypewriterText
              text=" Hi, I'm Kanitta Ket-in ]"
              speed={200}
              loop={true}
            />
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          <div className="flex items-end p-6 bg-gradient-to-b from-black to-neutral-800 rounded-2xl row-span-2 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out hover:scale-[1.01]">
            <img
              src={CodingPovImage}
              alt=""
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] 
               transition-transform duration-300 ease-out group-hover:scale-[1.85] md:group-hover:scale-[3.1] lg:group-hover:scale-[2.6] 
               transition-filter filter grayscale group-hover:filter-none"
            />
            <div className="z-10">
              <p className="uppercase text-primary text-2xl mb-2">
                Hi, I'm Kanitta Ket-in
              </p>
              <p className="leading-[18px] text-neutral-600 font-extralight uppercase max-[426px]:text-sm">
                I'm an aspiring software developer driven by a big dream and a
                deep belief in tech's power to create meaningful, human-centered
                change. I build digital solutions that solve real problems and
                contribute to a more inclusive, sustainable world.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-black"></div>
          </div>

          <div className="flex items-end p-6 bg-gradient-to-tr from-neutral-800 to-black rounded-2xl row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.01]">
            <div
              ref={grid2Container}
              className="flex items-center justify-center w-full h-full"
            >
              <p className="flex items-end text-5xl text-neutral-800 uppercase">
                Code is Craft
              </p>
              <Card
                style={{ rotate: "75deg", top: "30%", left: "20%" }}
                text="GRASP"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text="SOLID"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "74%" }}
                text="SRP"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text="DESIGN PRINCIPLES"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "30%" }}
                text="DESIGN PATTERNS"
                containerRef={grid2Container}
              />
              <Card
                style={{
                  rotate: "30deg",
                  top: "70%",
                  left: "70%",
                }}
                image="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                image="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
                containerRef={grid2Container}
              />
              <Card
                style={{
                  rotate: "45deg",
                  top: "2%",
                  left: "80%",
                  width: "50px",
                }}
                image="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
                containerRef={grid2Container}
              />
              <Card
                style={{
                  rotate: "-10deg",
                  top: "40%",
                  left: "50%",
                  width: "50px",
                }}
                image="https://cdn-icons-png.flaticon.com/256/5968/5968322.png"
                containerRef={grid2Container}
              />
              <Card
                style={{
                  rotate: "20deg",
                  top: "35%",
                  left: "2%",
                  width: "50px",
                }}
                image="https://www.manektech.com/storage/developer/1646733543.webp"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "15%", left: "65%" }}
                image="https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "0deg", top: "30%", left: "75%" }}
                image="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                containerRef={grid2Container}
              />
            </div>
          </div>

          <div className="flex items-end p-6 bg-gradient-to-tl from-black to-neutral-800 rounded-2xl row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.01]">
            <div className="z-10 w-[50%] h-full">
              <p className="mt-2 mb-2 text-2xl uppercase text-primary">
                Time Zone
              </p>
              <p className="leading-[18px] text-neutral-500 font-extralight uppercase">
                I'm based in Bangkok, Thailand, and open to onsite, remote, and
                work-from-anywhere roles globally.
              </p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>

          <div className="flex items-end p-6 bg-gradient-to-bl from-primary to-[#fa6c81] rounded-2xl row-span-1 md:col-span-2 h-[15rem] md:h-full relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.01]">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="text-center text-2xl uppercase text-neutral-900">
                Curious to know more about me ?
              </p>
              <CopyCvButton />
            </div>
          </div>

          <div className="flex items-end p-6 bg-gradient-to-br from-neutral-800 to-black rounded-2xl row-span-1 md:col-span-4 h-[15rem] md:h-full relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.01]">
            <div className="z-10 w-[50%] h-full">
              <p className="mt-2 mb-2 text-2xl uppercase text-primary">
                Tech Stack
              </p>
              <p className="leading-[18px] text-neutral-500 font-extralight uppercase max-[426px]:text-sm max-[376px]:text-[12px] max-[321px]:text-[11px]">
                I have had the opportunity to work with various programming
                languages, frameworks, and tools through past projects, which
                have helped me learn how to build well-structured and practical
                applications. I continue to grow and improve myself endlessly.
              </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Frameworks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
