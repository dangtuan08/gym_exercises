import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const SeacrchExcerses = () => {
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  const [search, setSearch] = useState("");

  const handleSearch = async() => {
    if (search) {
      // const exercisesData = await fetchData();
    }
  };

  return (
    <Stack alignItems={"center"} mt="37px" justifyContent={"center"} p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Shout Know
      </Typography>
      <Box position={"relative"} mb="72px">
        {/* <TextField
          // height="76px"
          // sx={{
          //   height:'76px'
          // }}
          value={""}
          onChange={(e) => { console.log(e.target.value);}}
          placeholder="Search Exercises"
          variant="outlined"
        /> */}
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          // id="outlined-basic"
          label="Search Exercises"
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          type="text"
        />
        <Button
          className="search-btn"
          size="small"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SeacrchExcerses;
