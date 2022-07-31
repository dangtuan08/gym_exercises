import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SeacrchExcerses from "../components/SeacrchExcerses";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [excercies, setExcercies] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SeacrchExcerses
        setExcercies={setExcercies}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExcercies={setExcercies}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
