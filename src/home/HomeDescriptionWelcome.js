import React from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper/Paper";
import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box/Box";

const HomeDescriptionWelcome = () => {
  const theme = useTheme();
  return (
    <>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: "90vw", opacity: 0 }}
        transition={{
          duration: 1.6,
          type: "spring",
          damping: 4,
          stiffness: 50,
        }}
        viewport={{ once: true }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            width: "auto",
            margin: 5,
            marginTop: 3,
            [theme.breakpoints.up("md")]: {
              width: "35%",
            },
            boxSizing: "border-box",
          }}
        >
          <Typography align="center" gutterBottom sx={{ padding: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit
            ut quam officia laborum alias, dolorem vel pariatur odio. Repellat,
            molestias ipsum consequuntur earum odit totam hic excepturi. Tempore
            ducimus eligendi blanditiis nulla necessitatibus! In nulla fugiat
            alias itaque deleniti natus suscipit, eligendi dolorem ea, aliquid
            quidem libero quo illo!
          </Typography>
        </Paper>
      </motion.div>
      <motion.div sx={{display:'flex', justifyContent:'flex-end'}}
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: "-90vw", opacity: 0 }}
        transition={{
          duration: 1.6,
          type: "spring",
          damping: 4,
          stiffness: 50,
        }}
        viewport={{ once: true }}
      >
        <Paper
          component="motion.div"
          elevation={3}
          sx={{
            display: "flex",
            width: "auto",
            boxSizing: "border-box",
            margin: 5,
            marginTop: 3,
            alignSelf: "end",
            [theme.breakpoints.up("md")]: {
              width: "35%",
            },
          }}
        >
          <Typography align="center" gutterBottom sx={{ padding: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit
            ut quam officia laborum alias, dolorem vel pariatur odio. Repellat,
            molestias ipsum consequuntur earum odit totam hic excepturi. Tempore
            ducimus eligendi blanditiis nulla necessitatibus! In nulla fugiat
            alias itaque deleniti natus suscipit, eligendi dolorem ea, aliquid
            quidem libero quo illo!
          </Typography>
        </Paper>
      </motion.div>
    </>
  );
};

export default HomeDescriptionWelcome;
