import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Hero from "../components/hero/Hero.js";
import Categories from "../components/category/Categories.js";
import Recents from "../components/recents/Recents";
import Rightbar from "../rightbar/Rightbar.js";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Container>
        <Categories />
        <hr />
        <Stack direction={"row"} spacing={8} mt={8}>
        <Box flex={3} sx={{padding:"18px 100px 100px 100px"}}>
          <Recents />
        </Box>
        <Box flex={1}><Rightbar/></Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
