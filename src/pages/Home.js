import React, { useRef } from "react";
import homeDay from "../images/homeDay.jpg";
import homeNight from "../images/homeNight.jpg";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box/Box";
import cantStop from "../images/cantStop.jpg";
import workout from "../images/chest.jpg";
import website from "../images/website.webp";
import ProjectLink from "../projectLink/ProjectLink";
import CourseList from "../CourseList";
import CompA from "../home/CompA";
import WorkCard from "../WorkCard";
import { Button } from "@mui/material";
import PageImage from "../PageImage";
import hilton from "../images/hilton-logo.jpg";
import subway from "../images/subway-logo.png";
import memorial from "../images/mun-logo.jpg";
import { motion } from "framer-motion";
import WelcomeHome from "../home/WelcomeHome";
import HomeDescriptionWelcome from "../home/HomeDescriptionWelcome";

const Home = () => {
  const theme = useTheme();
  const light = theme.palette.mode === "light";

  return (
    <div>
      <PageImage src={light ? homeDay : homeNight} />
      <div>
        <Paper elevation={5}>
          <WelcomeHome />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "stretch",
            }}
          >
            <HomeDescriptionWelcome />
            <CompA />
            <Typography
              variant="h4"
              align="center"
              sx={{
                padding: 2,
                margin: 4,
                color: "white",
                borderRadius: 4,
                backgroundColor: theme.palette.primary.dark,
              }}
            >
              Projects (These are only the Mega Projects)
            </Typography>
            {/* This is for Projects */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                boxSizing: "border-box",
                flexWrap: "wrap",
              }}
            >
              <ProjectLink
                description={
                  'The goal of the game is to "claim" (get to the top of) three of the columns before any of the other players can. But the more that the player risks rolling the dice during a turn, the greater the risk of losing the advances made during that turn.'
                }
                title={"Can't Stop"}
                image={cantStop}
                link={
                  "https://github.com/Arushi818/comp2005-winter23-group9.git"
                }
              />

              <ProjectLink
                description={
                  "This is the personal branding and protfolio website."
                }
                title={"Muszelus"}
                image={website}
                link={"https://github.com/devangdonda/muszelus.git"}
              />

              <ProjectLink
                description={
                  "This is workout, and food logging and tracking app."
                }
                title={"Workout App"}
                image={workout}
                link={"https://github.com/devangdonda/workoutapp.git"}
              />
            </Box>

            <Box
              sx={{
                padding: "10px",
                margin: "10px",
                fontFamily: "revert",
                borderRadius: 4,
              }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{
                  padding: "10px",
                  margin: "10px",
                  color: "white",
                  borderRadius: 4,
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                Courses I've Done!
              </Typography>
            </Box>
            <CourseList />

            <Typography
              variant="h4"
              align="center"
              sx={{
                padding: "10px",
                margin: "10px",
                color: "white",
                borderRadius: 4,
                backgroundColor: theme.palette.primary.dark,
              }}
            >
              Work Experience
            </Typography>
            <CompA />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <WorkCard company="Hilton Garden Inn" src={hilton} />
              <WorkCard company="Memorial" src={memorial} />
              <WorkCard company="Memorial" src={memorial} />
              <WorkCard company="Subway" src={subway} />

              <Paper
                elevation={5}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: 3,
                  padding: 3,
                }}
              >
                <Typography variant="h4" gutterBottom>
                  To view my full Computer Science resume click here
                </Typography>

                <Button variant="contained" sx={{ width: "30%" }}>
                  {" "}
                  Resume
                </Button>
              </Paper>
            </Box>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
