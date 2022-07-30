import { Box } from "@mui/material";
import React from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SeacrchExcerses from "../components/SeacrchExcerses";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SeacrchExcerses />
      <Exercises />
    </Box>
  );
};

export default Home;
