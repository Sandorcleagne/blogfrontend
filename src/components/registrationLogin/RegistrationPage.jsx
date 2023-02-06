import { Alert, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useRegisterUserMutation } from "../../api/authApi/registration";
import {
  loginFormMainContainer,
  loginFromButtonContainer,
} from "./registrationStyles";
import { registrationUtils } from "./registrationUtils";
import { useNavigate } from "react-router-dom";
import CustomBtn from "../custom/CustomBtn";
const RegistrationPage = () => {
  const [registerUser] = useRegisterUserMutation();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const sendData = async () => {
    const data = await registerUser(userData);
    const { status, msg } = data.data.baseResponse;
    if (status === 1) {
      setErrors({
        status: true,
        msg: "User Registered Sucessfully",
        type: "success",
      });
      setUserData({
        name: "",
        email: "",
        password: "",
        cpassword: "",
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
      {registrationUtils(userData).map((regItems) => (
        <TextField
          required
          fullWidth
          key={regItems.textId}
          id={regItems.id}
          name={regItems.name}
          value={regItems.value}
          label={regItems.label}
          type={regItems.type}
          margin={regItems.margin}
          onChange={(e) => handelSubmit(e)}
        />
      ))}
      <Box textAlign="center">
        <CustomBtn
          type="submit"
          variant="contained"
          sx={loginFromButtonContainer}
          onClick={sendData}
          title="Register"
        />
      </Box>

      {errors.status ? <Alert severity={errors.type}>{errors.msg}</Alert> : ""}
    </Box>
  );
};

export default RegistrationPage;
