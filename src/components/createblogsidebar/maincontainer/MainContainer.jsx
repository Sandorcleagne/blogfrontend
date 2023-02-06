import { Grid, Stack } from "@mui/material";
import React from "react";
import AddBlogBtn from "../AddBlogBtn/AddBlogBtn";
import Tags from "../tags/Tags";
import Title from "../title/title";
import { mainContainerWidth } from "./MainContainerStyle";

const MainContainer = () => {
  return (
    <Grid sx={mainContainerWidth}>
      <Stack spacing={3}>
        <Title />
        <Tags />
        <AddBlogBtn />
      </Stack>
    </Grid>
  );
};

export default MainContainer;
