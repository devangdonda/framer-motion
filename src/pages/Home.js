import React from "react";
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

const Home = () => {
  const theme = useTheme();
  const light = theme.palette.mode === "light"

  return (
    <div>
      <img
        src={ light ? homeDay : homeNight}
        alt=""
        style={{ height: "100vh", width: "100%" }}
      />
      <Paper elevation={5}>
        <Typography
          align="center"
          variant="h2"
          gutterBottom
          sx={{ textDecoration: "underline" }}
        >
          Welcome
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
          }}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              odit ut quam officia laborum alias, dolorem vel pariatur odio.
              Repellat, molestias ipsum consequuntur earum odit totam hic
              excepturi. Tempore ducimus eligendi blanditiis nulla
              necessitatibus! In nulla fugiat alias itaque deleniti natus
              suscipit, eligendi dolorem ea, aliquid quidem libero quo illo!
            </Typography>
          </Paper>

          <Paper
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              odit ut quam officia laborum alias, dolorem vel pariatur odio.
              Repellat, molestias ipsum consequuntur earum odit totam hic
              excepturi. Tempore ducimus eligendi blanditiis nulla
              necessitatibus! In nulla fugiat alias itaque deleniti natus
              suscipit, eligendi dolorem ea, aliquid quidem libero quo illo!
            </Typography>
          </Paper>
          <Paper
          elevation={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
              backgroundColor: light ? theme.palette.success.light : '#1b5e20',
              height: "100vh",
              borderRadius: 5
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                illo consequatur sint reiciendis iusto harum? Porro accusantium
                sint atque ut, officiis ipsam beatae, corrupti optio
                voluptatibus assumenda iusto molestiae accusamus perferendis,
                eaque soluta est rerum. Veniam saepe sit voluptatibus
                necessitatibus natus, et ab, beatae repellat reprehenderit
                alias, illum aperiam eaque!
              </Typography>
            </Box>
          </Paper>
          <Paper
            sx={{
              padding: 3,
              margin: 8,
              alignSelf: "center",
              backgroundColor: light ? theme.palette.primary.light : '#1565c0',
              marginTop: "-8.5rem",
            }}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              odit ad, quisquam voluptas quaerat exercitationem aut modi
              molestias suscipit veritatis delectus, dicta illo nulla
              cupiditate! Assumenda quo magnam iure perferendis omnis. Quasi
              quas molestiae facilis sequi corrupti cumque ab consectetur hic
              quibusdam delectus saepe esse aperiam nulla eligendi doloribus
              nisi, ipsam excepturi, in eveniet! Ex, magni sequi cumque quos
              iusto consequuntur! Possimus ipsa est accusamus, assumenda
              repudiandae vitae error sunt quaerat molestias quisquam inventore
              dicta aperiam doloremque ipsam fugiat quas voluptatum vero unde ea
              asperiores pariatur. Optio totam perferendis quae deserunt?
              Consequuntur ducimus consequatur harum, mollitia nostrum facilis
              et unde!
            </Typography>
          </Paper>

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
              link={"https://github.com/Arushi818/comp2005-winter23-group9.git"}
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
            Projects (These are only the Mega Projects)
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default Home;
