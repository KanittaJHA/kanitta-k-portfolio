import React, { useState, useEffect } from "react";

const TypewriterText = ({ text, speed = 200, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else {
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isPlaying, speed, text, onComplete]);

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {displayedText}
    </span>
  );
};

export default TypewriterText;
