import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/SPACEJI-home-logo.png";
import TypewriterText from "../../TypewriterText";
import { RiCloseFill, RiApps2AiFill } from "react-icons/ri";
import styles from "./Header.module.css";

const menuLinks = [
  { text: "Projects.", path: "/projects", type: "route" },
  { text: "Home.", path: "/", type: "route" },
  { text: "About Me.", path: "/about-me", type: "route" },
  { text: "Contact Us.", path: "#contact", type: "scroll" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeScrollLink, setActiveScrollLink] = useState(null);

  const location = useLocation();

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

  useEffect(() => {
    const currentIsRoute = menuLinks.some(
      (link) => link.type === "route" && link.path === location.pathname
    );
    if (activeScrollLink && currentIsRoute) {
      setActiveScrollLink(null);
    }
  }, [location.pathname]);

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
    window.scrollTo({
      top: 0,
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50
          transition-all duration-300 ease-in-out
          ${isScrolled ? "bg-black/80 backdrop-blur-md" : ""}`}
        style={{ boxShadow: isScrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none" }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[64px] py-7 max-[701px]:px-[32px] max-[701px]:py-5">
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => {
                scrollToTop();
              }}
            >
              <img src={logo} alt="SPACEJI logo" className="w-[100px]" />
            </Link>
          </div>

          <div className="flex items-center max-[701px]:hidden">
            <ul className="flex items-center gap-8">
              {menuLinks.map((item) => {
                const isRouteActive =
                  item.type === "route" && location.pathname === item.path;
                const isScrollActive =
                  item.type === "scroll" && activeScrollLink === item.path;
                const isActive = isRouteActive || isScrollActive;

                return (
                  <li
                    key={item.text}
                    className="flex items-center group text-[18px] cursor-pointer relative"
                  >
                    {item.type === "route" ? (
                      <Link
                        to={item.path}
                        onClick={() => {
                          scrollToTop();
                          setActiveScrollLink(null);
                        }}
                        className="flex items-center"
                      >
                        <span
                          className={`absolute left-0 top-0 text-[#FF9EAD] w-4 inline-block transition-opacity duration-300
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
                            ${
                              isActive
                                ? "pl-4 text-[#FF9EAD]"
                                : "group-hover:pl-4 text-gray-500 group-hover:text-[#FF9EAD]"
                            }
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
                          className={`absolute left-0 top-0 text-[#FF9EAD] opacity-0 w-4 inline-block transition-opacity duration-300
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
                            ${
                              isActive
                                ? "pl-4 text-[#FF9EAD]"
                                : "group-hover:pl-4 text-gray-500 group-hover:text-[#FF9EAD]"
                            }
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

          <div className="text-[#FF9EAD] min-[701px]:hidden h-[24px]">
            <button
              onClick={handleMenuToggle}
              className={`transition-transform duration-300 ease-in-out ${
                isAnimating ? "rotate-180" : ""
              }`}
            >
              <RiApps2AiFill className="text-[24px] cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed flex flex-col justify-center items-center top-0 right-0 h-full w-full bg-black bg-opacity-90 z-[9999] transform transition-transform duration-400 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleMenuToggle}
          className={`absolute top-4 left-8 text-[#FF9EAD] text-[28px] transition-transform duration-300 ease-in-out ${
            isAnimating ? "rotate-180" : ""
          }`}
        >
          <RiCloseFill className="cursor-pointer" />
        </button>
        <div className="mb-10 flex justify-center">
          <Link to="/" onClick={handleMenuToggle}>
            <img src={logo} alt="SPACEJI logo" className="w-[100px]" />
          </Link>
        </div>

        <div className="font-semibold text-[20px] text-[#FF9EAD] cursor-pointer mb-4 leading-[1.2] h-[28px] min-w-[104px] text-center">
          <Link
            to="/projects"
            onClick={() => {
              scrollToTop();
              handleMenuToggle();
            }}
          >
            <TypewriterText text="[ PROJECTS ]" speed={200} />
          </Link>
        </div>

        <ul className="flex flex-col items-center gap-4">
          {menuLinks
            .filter((item) => item.path !== "/projects")
            .map((item) => {
              const isRouteActive =
                item.type === "route" && location.pathname === item.path;
              const isScrollActive =
                item.type === "scroll" && activeScrollLink === item.path;
              const isActive = isRouteActive || isScrollActive;

              return (
                <li
                  key={item.text}
                  className="group text-xl cursor-pointer relative"
                >
                  {item.type === "route" ? (
                    <Link
                      to={item.path}
                      onClick={() => {
                        scrollToTop();
                        setActiveScrollLink(null);
                        handleMenuToggle();
                      }}
                      className="flex items-center"
                    >
                      <span
                        className={`absolute left-[-20px] text-[#FF9EAD] transition-opacity duration-300
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
                          ${
                            isActive
                              ? "pl-4 text-[#FF9EAD]"
                              : "group-hover:pl-4 text-gray-500 group-hover:text-[#FF9EAD]"
                          }
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
                        className={`absolute left-[-20px] text-[#FF9EAD] opacity-0 transition-opacity duration-300
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
                          ${
                            isActive
                              ? "pl-4 text-[#FF9EAD]"
                              : "group-hover:pl-4 text-gray-500 group-hover:text-[#FF9EAD]"
                          }
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
    </>
  );
};

export default Navbar;
