import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExcercies, bodyPart }) => {
  // const [first, setfirst] = useState(second)
  console.log(exercises);
  return (
    <Box
      id="exercices"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb={"46px"}>
        Showing Results
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap="wrap"
        justifyContent={"center"}
      >
        {/* {exercises.map((excercie, index) => {
          return <p>{excercie.name}</p>;
        })} */}
      </Stack>
    </Box>
  );
};

export default Exercises;
