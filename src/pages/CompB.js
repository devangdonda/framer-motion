import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import back from "../images/image-full.png";
import fore from "../images/image-bottom.png";

const CompB = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const foreY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <motion.img
        src={back}
        style={{
          zIndex: -10,
          width: "100%",
          height: "100%",
          y: backY,
          objectFit: "cover", // Optional, to ensure the image covers the entire container
        }}
      />
      <motion.img
        src={fore}
        style={{
          zIndex: 10,
          width: "100%",
          height: "100%",
          y: -foreY,
          objectFit: "cover", // Optional, to ensure the image covers the entire container
        }}
      />
    </div>
  );
};

export default CompB;
