import React, { useRef } from "react";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box/Box";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const CompA = () => {
  const ref = useRef(null);
  const theme = useTheme();
  const light = theme.palette.mode === "light";
  return (
    <>
      <Paper 
        elevation={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
          backgroundColor: light ? theme.palette.success.light : "#1b5e20",
          height: "100vh",
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            width: "auto",
            margin: 4,
            [theme.breakpoints.up("sm")]: {
              width: "60%",
            },
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Hi, I’m Devang Donda. Nice to meet you.
          </Typography>
          <Typography align="center" gutterBottom sx={{ lineHeight: 1.5 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illo
            consequatur sint reiciendis iusto harum? Porro accusantium sint
            atque ut, officiis ipsam beatae, corrupti optio voluptatibus
            assumenda iusto molestiae accusamus perferendis, eaque soluta est
            rerum. Veniam saepe sit voluptatibus necessitatibus natus, et ab,
            beatae repellat reprehenderit alias, illum aperiam eaque!
          </Typography>
        </Box>
      </Paper>
      <motion.div whileInView={{y: 0, opacity: 1 }} initial={{ y: '100vh', opacity: 0 }}>
        <Paper
          elevation={6}
          sx={{
            padding: 3,
            margin: 8,
            alignSelf: "center",
            backgroundColor: light ? theme.palette.primary.light : "#1565c0",
            marginTop: "-8.5rem",
          }}
        >
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit
            ad, quisquam voluptas quaerat exercitationem aut modi molestias
            suscipit veritatis delectus, dicta illo nulla cupiditate! Assumenda
            quo magnam iure perferendis omnis. Quasi quas molestiae facilis
            sequi corrupti cumque ab consectetur hic quibusdam delectus saepe
            esse aperiam nulla eligendi doloribus nisi, ipsam excepturi, in
            eveniet! Ex, magni sequi cumque quos iusto consequuntur! Possimus
            ipsa est accusamus, assumenda repudiandae vitae error sunt quaerat
            molestias quisquam inventore dicta aperiam doloremque ipsam fugiat
            quas voluptatum vero unde ea asperiores pariatur. Optio totam
            perferendis quae deserunt? Consequuntur ducimus consequatur harum,
            mollitia nostrum facilis et unde!
          </Typography>
        </Paper>
      </motion.div>
    </>
  );
};

export default CompA;
