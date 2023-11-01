import React from "react";
import "./ComponentA.css";
import { motion } from "framer-motion";

const parentVariants = {
  visible: {
    x: 0,
    transition: {
      type: "spring",
      mass: 1,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 2,
    },
  },
  hidden: {
    x: "-100vw",
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const buttonVariants = {
    hover: {
        scale: 1.2,
        transition: {
            duration: 0.3,
            repeatType: 'mirror',
            repeat: Infinity
        }
    }
}
const ComponentA = () => {
  return (
    <>
      <motion.div
        className="main-box"
        variants={parentVariants}
        initial="hidden"
        animate="visible"
      >
        Hello Bro
        <motion.div className="child1-box" variants={childVariants}>
          Hello Bro
        </motion.div>
        <motion.div className="child2-box" variants={childVariants}>
          Hello Bro
        </motion.div>
      </motion.div>
      <motion.button className="button"
      variants={buttonVariants}
      whileHover='hover'>
        Click Me
      </motion.button>
    </>
  );
};

export default ComponentA;
