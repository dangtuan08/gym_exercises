import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SeacrchExcerses from "../components/SeacrchExcerses";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercies, setExercies] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SeacrchExcerses
        setExercies={setExercies}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        excercies={exercies}
        setExercies={setExercies}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
