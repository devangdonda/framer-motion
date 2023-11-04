import React from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

const WelcomeHome = () => {
  return (
    <motion.div
      whileInView={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 2,type: 'spring', damping:4, stiffness: 50 }}
      viewport = {{once: true}}
    >
      <Typography
        align="center"
        variant="h2"
        gutterBottom
        sx={{ textDecoration: "underline" }}
      >
        Welcome
      </Typography>
    </motion.div>
  );
};

export default WelcomeHome;
