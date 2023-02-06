import React, { useState } from "react";
import { Alert, Box, TextField } from "@mui/material";
import { loginUtils } from "./loginUtils";
import {
  loginFormMainContainer,
  loginFromButtonContainer,
} from "./registrationStyles";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../api/authApi/loginUser";
import CustomBtn from "../custom/CustomBtn";
const LoginPage = () => {
  const [loginUser] = useLoginUserMutation();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const sendData = async () => {
    const data = await loginUser(loginData);
    console.log(data);
    const { status, msg } = data.data.baseResponse;
    if (status === 1) {
      setErrors({
        status: true,
        msg: "Logged in successfully",
        type: "success",
      });
      navigate("/createblogs");
      localStorage.setItem("token", data.data.response.token);
      localStorage.setItem("userInfo", JSON.stringify(data.data.response));
    } else {
      setErrors({
        status: true,
        msg: msg,
        type: "error",
      });
    }
  };

  return (
    <Box noValidate id="login-form" sx={loginFormMainContainer}>
      {loginUtils(loginData).map((loginItems) => (
        <TextField
          required
          fullWidth
          key={loginItems.textId}
          id={loginItems.id}
          name={loginItems.name}
          value={loginItems.value}
          label={loginItems.label}
          type={loginItems.type}
          margin={loginItems.margin}
          onChange={(e) => handelSubmit(e)}
        />
      ))}
      <Box textAlign="center">
        <CustomBtn
          type="submit"
          variant="contained"
          sx={loginFromButtonContainer}
          onClick={sendData}
          title="Login"
        />
      </Box>
      <NavLink to="/">Forgot Pasword?</NavLink>
      {errors.status ? <Alert severity={errors.type}>{errors.msg}</Alert> : ""}
    </Box>
  );
};

export default LoginPage;
