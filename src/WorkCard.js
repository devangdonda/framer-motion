import React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box/Box";
import subway from './images/chest.jpg';

const WorkCard = (props) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={6}
      sx={{
        width: "auto",
        display: "flex",
        margin: 3,
        padding: 3,
        [theme.breakpoints.up("sm")]: {
          width: "85%",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", flexWrap: 'wrap', }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" >
            {props.company}
          </Typography>
          <img
              src= {props.src}
              alt=""
              style={{
                height: "2.2em",
              }}
            />
          <Typography variant="h6" gutterbottom>
            Date
          </Typography>
        </Box>
        <Typography sx={{marginTop:2}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, sequi
          impedit placeat adipisci reprehenderit debitis. Quidem,
          exercitationem. Itaque tenetur inventore quidem atque odio. Itaque eum
          mollitia corporis soluta deleniti enim nesciunt maiores sapiente.
          Aliquam, vel iusto totam accusantium quis modi qui soluta dicta
          aspernatur recusandae fugiat quia earum amet. Blanditiis?
        </Typography>
      </Box>
    </Paper>
  );
};

export default WorkCard;
