import React, { useEffect, useState } from "react";
import { RiArrowUpCircleFill } from "react-icons/ri";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[1000] p-1 rounded-full bg-[#F5DCE0] text-[#FF9EAD] shadow-lg cursor-pointer transition-opacity duration-300 ease-in-out hover:scale-110 active:scale-90"
          aria-label="Scroll to top"
        >
          <RiArrowUpCircleFill className="text-4xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
