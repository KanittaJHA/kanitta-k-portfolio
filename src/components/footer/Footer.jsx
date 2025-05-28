import React from "react";
import FooterImage from "../../assets/images/SPACEJI-home-logo.png";
import { Link } from "react-router-dom";
import TypewriterText from "../TypewriterText";
import styles from "./Footer.module.css";
import {
  RiPhoneFill,
  RiMailFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

const iconLinks = [
  {
    Icon: RiLinkedinBoxFill,
    href: "https://www.linkedin.com/in/kanitta-k-a866b3220/",
  },
  {
    Icon: RiGithubFill,
    href: "https://github.com/KanittaJHA?tab=repositories",
  },
  {
    Icon: RiMailFill,
    href: "mailto:kanittaketin@gmail.com",
  },
];

const iconStyle =
  "cursor-pointer hover:text-[#FF9EAD] hover:scale-110 transition-all duration-300 ease-in-out";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="relative z-20 w-full h-[410px] max-[621px]:h-[450px] max-w-[1440px] mx-auto px-[64px] flex flex-col max-[701px]:px-[32px]">
      <div className="grid grid-cols-2 max-[621px]:grid-cols-1">
        <div className="flex flex-col gap-8 w-full">
          <Link to="/" onClick={scrollToTop}>
            <img className="w-[130px]" src={FooterImage} alt="Footer Logo" />
          </Link>

          <p className="text-[#F5DCE0] font-extralight uppercase w-[85%] max-[901px]:w-[100%] max-[769px]:text-[14px]">
            Thank you so much for visiting my website. I truly appreciate you
            taking the time to explore my journey, my work, and the passion
            behind it all. Every project and every line of code here reflects my
            dreams, dedication, and the belief that technology with heart can
            make a real difference. I hope you leave with a little spark of
            inspiration and I’d love the chance to get to know you too!
          </p>

          <div>
            <div className="relative w-[85%] max-[901px]:w-[100%]">
              <input
                className="bg-[#F5DCE0] w-full pr-[130px] py-3 px-3 pl-6 rounded-full uppercase border-none outline-none max-[769px]:text-[14px]"
                type="text"
                placeholder="Enter your email"
              />
              <button className="absolute top-1/2 right-[4px] -translate-y-1/2 bg-[#FF9EAD] text-white px-10 py-2 max-[769px]:px-6 max-[769px]:text-[14px] rounded-full uppercase cursor-pointer hover:bg-black transition-all duration-300 ease-in-out">
                Subscribe
              </button>
            </div>

            <div className="flex gap-6 text-[#F5DCE0] mt-3 max-[769px]:text-[14px] max-[325px]:text-[12px] leading-0">
              {[
                { icon: <RiPhoneFill />, text: "+66 925801172" },
                { icon: <RiMailFill />, text: "KANITTAKETIN@GMAIL.COM" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`${iconStyle} flex items-center justify-center gap-2`}
                >
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full relative">
          <div className="absolute flex items-center gap-6 right-0 max-[621px]:w-full max-[621px]:flex-col max-[621px]:items-start max-[621px]:gap-2 max-[621px]:mt-8">
            <p className="uppercase text-[#FF9EAD] text-[20px]">
              [ <TypewriterText text=" follow me ]" speed={200} />
            </p>

            <div className="text-[#F5DCE0] flex items-center gap-5 text-[24px]">
              {iconLinks.map((link, i) => {
                const IconComponent = link.Icon;
                return (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <IconComponent className={iconStyle} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <p className="text-[#F5DCE0] text-center mt-20 uppercase font-extralight max-[621px]:mt-32 max-[1025px]:mt-15">
        © 2025 kanitta ket-in. All Rights Reserved
      </p>

      <div className="z-[-1] w-full max-[451px]:w-[500px] flex justify-center absolute bottom-[-150px] right-[-500px] max-[1025px]:right-[-450px] max-[769px]:right-[-380px] max-[601px]:right-[-280px] max-[501px]:right-[-250px] max-[451px]:right-[-300px]">
        <div className="relative w-[450px] h-[450px] flex items-center justify-center bg-black shadow-[1px_1px_50px_0_rgba(207,244,255,0.25)] rounded-full">
          <div className={styles.orbitContainer}>
            <div className={styles.orbitingStar}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
