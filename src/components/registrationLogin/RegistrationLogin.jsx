import React from "react";
import { Grid } from "@mui/material";
import {
  mainContainer,
  imageContainer,
  formInnerContainer,
} from "./registrationStyles";
import FormImage from "../../images/login3.png";
import Image from "../custom/Image";
import AuthForm from "./AuthForm";
const RegistrationLogin = () => {
  return (
    <Grid container sx={mainContainer}>
      <Grid item sx={imageContainer} lg={7} sm={5}>
        <Image source={FormImage} height={600} />
      </Grid>
      <Grid item sx={formInnerContainer} lg={5} sm={7} md={12} xs={12}>
        <AuthForm />
      </Grid>
    </Grid>
  );
};
//#494985 color theme for website
export default RegistrationLogin;
