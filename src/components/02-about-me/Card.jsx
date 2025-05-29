import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-pointer"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute uppercase px-1 py-3 text-xl text-center rounded-full ring ring-[#F5DCE0] font-[450] bg-[#FF9EAD] w-[12rem] cursor-pointer text-neutral-800 hover:text-white hover:bg-neutral-800 hover:ring-neutral-700"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
