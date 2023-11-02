import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import './ProjectLink.css';

const ProjectLink = (props) => {
  return (
    <Card sx={{width: 345, margin: 1}} elevation={4}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt="green iguana"
        />
        <CardContent sx={{height: 300}}>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {props.title}
          </Typography>
          <Typography variant="body2" >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" href={props.link} target="_blank">
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectLink;
