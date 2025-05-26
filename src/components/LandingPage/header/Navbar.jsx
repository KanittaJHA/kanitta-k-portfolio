import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/SPACEJI-home-logo.png";
import TypewriterText from "../../TypewriterText";
import { RiMenu2Line, RiCloseFill } from "react-icons/ri";
import styles from "./Header.module.css";

const menuItems = ["Home.", "About Me.", "Contact Us."];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMenuToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsMobileMenuOpen((prev) => !prev);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="max-w-[1440px] pt-[36px] relative z-50">
      <nav className="flex items-start justify-between max-[701px]:items-center">
        <div>
          <img src={logo} alt="SPACEJI logo" className="w-[100px]" />
        </div>

        <div className="flex-col max-[701px]:hidden">
          <div className="font-semibold text-[20px] text-[#FF9EAD] cursor-pointer mb-1 leading-[1.2] h-[28px] min-w-[104px]">
            <TypewriterText text="[ CONTACT US ]" speed={200} />
          </div>

          <ul className="flex flex-col items-start">
            {menuItems.map((item) => (
              <li
                key={item}
                className="group text-gray-500 cursor-pointer relative hover:text-[#FF9EAD] mb-1"
              >
                <span className="absolute left-0 top-0 text-[#FF9EAD] opacity-0 group-hover:opacity-100 w-4 inline-block transition-opacity duration-300">
                  /
                </span>
                <span className="transition-all duration-300 group-hover:pl-4 uppercase">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-[#FF9EAD] min-[702px]:hidden">
          <button
            onClick={handleMenuToggle}
            className={`transition-transform duration-300 ease-in-out ${
              isAnimating ? "rotate-180" : ""
            }`}
          >
            <RiMenu2Line className="text-[24px] cursor-pointer" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed flex flex-col justify-center items-center top-0 right-0 h-full w-full bg-black bg-opacity-90 z-[9999] transform transition-transform duration-400 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleMenuToggle}
          className={`absolute top-9 right-8 text-[#FF9EAD] text-[28px] transition-transform duration-300 ease-in-out ${
            isAnimating ? "rotate-180" : ""
          }`}
        >
          <RiCloseFill className="cursor-pointer" />
        </button>

        <div className="mb-10 flex justify-center">
          <img src={logo} alt="SPACEJI logo" className="w-[100px]" />
        </div>

        <div
          onClick={handleMenuToggle}
          className="font-semibold text-[20px] text-[#FF9EAD] cursor-pointer mb-4 leading-[1.2] h-[28px] min-w-[104px] text-center"
        >
          <TypewriterText text="[ PROJECTS ]" speed={200} />
        </div>

        <ul className="flex flex-col items-center gap-4">
          {menuItems.map((item) => (
            <li
              onClick={handleMenuToggle}
              key={item}
              className="group text-gray-500 text-xl cursor-pointer hover:text-[#FF9EAD] relative"
            >
              <span className="absolute left-[-20px] text-[#FF9EAD] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                /
              </span>
              <span className="uppercase transition-all duration-300 group-hover:pl-4">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="absolute w-[320px] h-[320px] right-[-100px] bottom-[-100px] flex items-center justify-center bg-black/60 shadow-[1px_1px_50px_0_rgba(207,244,255,0.25)] rounded-full">
          <div className={styles.orbitContainer2}>
            <div className={styles.orbitingStar}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
