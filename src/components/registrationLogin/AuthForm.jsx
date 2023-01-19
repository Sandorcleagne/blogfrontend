import { Box, Card, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import { cardStyle, innerBox, tabStyle } from "./registrationStyles";
import TabPanel from "./TabPanel";

const AuthForm = () => {
  const [value, setValue] = useState(0);
  const handelChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Card sx={cardStyle}>
        <Box>
          <Box sx={innerBox}>
            <Tabs value={value} onChange={handelChange}>
              <Tab label="login" sx={tabStyle}></Tab>
              <Tab label="registration" sx={tabStyle}></Tab>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <LoginPage />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RegistrationPage />
          </TabPanel>
        </Box>
      </Card>
    </div>
  );
};

export default AuthForm;
