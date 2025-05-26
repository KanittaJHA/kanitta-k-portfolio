import React from "react";
import styles from "./textScroller.module.css";

const message = "MY space evolution";
const repeatCount = 10;

const TextScroller = ({ className }) => {
  const renderMessages = () =>
    Array.from({ length: repeatCount }).map((_, index) => (
      <li key={index} className="flex items-center gap-[16px]">
        <p className="h-[53px]">{message}</p>
        <span className="w-[30px] h-[30px] bg-[#FF9EAD] rounded-full"></span>
      </li>
    ));

  return (
    <div
      className={`w-full text-[#F5DCE0] text-[40px] h-[30px] flex items-center overflow-hidden bg-transparent ${className}`}
    >
      <ul className={`uppercase gap-[16px] ${styles.textScroller}`}>
        {renderMessages()}
        {renderMessages()}
      </ul>
    </div>
  );
};

export default TextScroller;
