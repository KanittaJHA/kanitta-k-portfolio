import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/SPACEJI-home-logo.png";
import TypewriterText from "../../TypewriterText";
import { RiCloseFill, RiApps2AiFill } from "react-icons/ri";
import styles from "./Header.module.css";

const menuLinks = [
  { text: "Home.", path: "/home", type: "route" },
  { text: "About Me.", path: "/about-me", type: "route" },
  { text: "Contact Me.", path: "#contact", type: "scroll" },
];
const projectsLink = { text: "Projects.", path: "/projects", type: "route" };

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentActiveItem, setCurrentActiveItem] = useState(null);

  const [isScrollLinkExplicitlyActive, setIsScrollLinkExplicitlyActive] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!isScrollLinkExplicitlyActive) {
      setCurrentActiveItem(location.pathname);
    }
  }, [location.pathname, isScrollLinkExplicitlyActive]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setIsAnimating(false);
    }
  }, [location.pathname]);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsScrollLinkExplicitlyActive(false);
    window.scrollTo({
      top: 0,
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
    });
  };

  return (
    <div className="max-w-[1440px] pt-[36px] relative z-50">
      <nav
        className={`flex items-start justify-between max-[701px]:items-center max-[701px]:fixed max-[701px]:top-0 max-[701px]:left-0 max-[701px]:right-0 max-[701px]:w-full max-[701px]:z-50 max-[701px]:pt-5 max-[701px]:pb-5 max-[701px]:px-[32px] transition-all duration-300 ease-in-out ${
          isScrolled
            ? "max-[701px]:bg-black/80 max-[701px]:backdrop-blur-md"
            : ""
        }`}
        style={{ boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none" }}
      >
        <div>
          <Link to="/home" onClick={scrollToTop}>
            {" "}
            <img src={logo} alt="SPACEJI logo" className="w-[100px]" />
          </Link>
        </div>

        <div className="flex-col max-[701px]:hidden">
          <div className="font-semibold text-[20px] text-primary cursor-pointer mb-1 leading-[1.2] h-[28px] min-w-[104px]">
            <Link
              to={projectsLink.path}
              onClick={() => scrollToTop()}
              className="flex items-center group relative"
            >
              <span
                className={`absolute left-0 top-0 text-primary w-4 inline-block transition-opacity duration-300
                  ${
                    currentActiveItem === projectsLink.path
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              >
                /
              </span>
              <span
                className={`transition-all duration-300 uppercase
                  ${currentActiveItem === projectsLink.path ? "pl-4" : ""}
                `}
              >
                <TypewriterText text="[ PROJECTS ]" speed={200} loop={true} />
              </span>
            </Link>
          </div>

          <ul className="flex flex-col items-start">
            {menuLinks.map((item) => {
              const isActive = currentActiveItem === item.path;
              return (
                <li
                  key={item.text}
                  className="group text-gray-500 cursor-pointer relative hover:text-primary mb-1"
                >
                  {item.type === "route" ? (
                    <Link
                      to={item.path}
                      onClick={() => {
                        scrollToTop();
                      }}
                      className="flex items-center"
                    >
                      <span
                        className={`absolute left-0 top-0 text-primary w-4 inline-block transition-opacity duration-300
                          ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }
                        `}
                      >
                        /
                      </span>
                      <span
                        className={`transition-all duration-300 uppercase
                          ${isActive ? "pl-4 text-primary" : "group-hover:pl-4"}
                        `}
                      >
                        {item.text}
                      </span>
                    </Link>
                  ) : (
                    <span
                      onClick={scrollToBottom}
                      className="flex items-center"
                    >
                      <span
                        className={`absolute left-0 top-0 text-primary opacity-0 group-hover:opacity-100 w-4 inline-block transition-opacity duration-300
                          ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }
                        `}
                      >
                        /
                      </span>
                      <span
                        className={`transition-all duration-300 uppercase
                          ${isActive ? "pl-4 text-primary" : "group-hover:pl-4"}
                        `}
                      >
                        {item.text}
                      </span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-primary min-[701px]:hidden h-[24px]">
          <button
            onClick={handleMenuToggle}
            className={`transition-transform duration-300 ease-in-out ${
              isAnimating ? "rotate-180" : ""
            }`}
          >
            <RiApps2AiFill className="text-[24px] cursor-pointer" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed flex flex-col justify-center items-center right-0 h-full w-full bg-black bg-opacity-90 z-[9999] transform transition-transform duration-400 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: 0 }}
      >
        <button
          onClick={handleMenuToggle}
          className={`absolute top-4 left-8 text-primary text-[28px] transition-transform duration-300 ease-in-out ${
            isAnimating ? "rotate-180" : ""
          }`}
        >
          <RiCloseFill className="cursor-pointer" />
        </button>

        <div className="mb-10 flex justify-center">
          <Link
            to="/"
            onClick={() => {
              scrollToTop();
              handleMenuToggle();
            }}
          >
            <img src={logo} alt="SPACEJI logo" className="w-[100px]" />
          </Link>
        </div>

        <div className="font-semibold text-[20px] text-primary cursor-pointer mb-4 leading-[1.2] h-[28px] min-w-[104px] text-center">
          <Link
            to={projectsLink.path}
            onClick={() => {
              scrollToTop();
              handleMenuToggle();
            }}
            className="flex items-center group relative justify-center"
          >
            <span
              className={`absolute left-[-20px] text-primary transition-opacity duration-300
                ${
                  currentActiveItem === projectsLink.path
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            >
              /
            </span>
            <span
              className={`uppercase transition-all duration-300
                ${currentActiveItem === projectsLink.path ? "pl-4" : ""}
              `}
            >
              <TypewriterText text="[ PROJECTS ]" speed={200} loop={true} />
            </span>
          </Link>
        </div>

        <ul className="flex flex-col items-center gap-4">
          {menuLinks.map((item) => {
            const isActive = currentActiveItem === item.path;
            return (
              <li
                key={item.text}
                className="group text-gray-500 text-xl cursor-pointer hover:text-primary relative"
              >
                {item.type === "route" ? (
                  <Link
                    to={item.path}
                    onClick={() => {
                      scrollToTop();
                      handleMenuToggle();
                    }}
                    className="flex items-center"
                  >
                    <span
                      className={`absolute left-[-20px] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }
                      `}
                    >
                      /
                    </span>
                    <span
                      className={`uppercase transition-all duration-300
                        ${isActive ? "pl-4 text-primary" : "group-hover:pl-4"}
                      `}
                    >
                      {item.text}
                    </span>
                  </Link>
                ) : (
                  <span
                    onClick={() => {
                      scrollToBottom();
                      handleMenuToggle();
                    }}
                    className="flex items-center"
                  >
                    <span
                      className={`absolute left-[-20px] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }
                      `}
                    >
                      /
                    </span>
                    <span
                      className={`uppercase transition-all duration-300
                        ${isActive ? "pl-4 text-primary" : "group-hover:pl-4"}
                      `}
                    >
                      {item.text}
                    </span>
                  </span>
                )}
              </li>
            );
          })}
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
