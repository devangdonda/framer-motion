import React from "react";
import { Outlet } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import Navbar from "../Navbar";

const Root = () => {
  return (
    <>
      <Navbar />  
      <Box>
        
        <Outlet />
      </Box>
      <Typography>This is Root Page</Typography>
        <Button variant="contained">Click me</Button>
    </>
  );
};

export default Root;
