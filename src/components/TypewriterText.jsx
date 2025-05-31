import React, { useState, useEffect } from "react";

const TypewriterText = ({ text, speed = 200, onComplete, loop = false }) => {
  // <--- เพิ่ม loop prop, ค่าเริ่มต้นเป็น false
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
        // เมื่อพิมพ์เสร็จ
        if (onComplete) {
          onComplete(); // เรียก onComplete หากมี
        }
        if (loop) {
          // <--- เพิ่ม logic สำหรับ loop
          setDisplayedText(""); // รีเซ็ตข้อความที่แสดง
          setIndex(0); // รีเซ็ต index
        } else {
          setIsPlaying(false); // หยุดการเล่นหากไม่ loop
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isPlaying, speed, text, onComplete, loop]); // <--- เพิ่ม loop เข้าไปใน dependency array

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
