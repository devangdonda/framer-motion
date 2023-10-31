import React from "react";
import "./ComponentA.css";
import { motion } from "framer-motion";

const firstVariants = {
  animation: {
    x: 0,
    type: "spring",
    transition: {
      delay: 0.5,
      stiffness: 120,
    },
  },
  init: {
    x: "-100vw",
  },
};
const ComponentA = () => {
  return (
    <motion.div
      className="main-box"
      variants={firstVariants}
      initial="init"
      animate="animation"
    >
      Hello Bro
    </motion.div>
  );
};

export default ComponentA;
