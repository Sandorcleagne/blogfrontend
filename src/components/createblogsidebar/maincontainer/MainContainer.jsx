import { Grid, Stack } from "@mui/material";
import React from "react";
import Tags from "../tags/Tags";
import Title from "../title/title";
import { mainContainerWidth } from "./MainContainerStyle";

const MainContainer = () => {
  return (
    <Grid sx={mainContainerWidth}>
      <Stack spacing={3}>
        <Title />
        <Tags />
      </Stack>
    </Grid>
  );
};

export default MainContainer;
