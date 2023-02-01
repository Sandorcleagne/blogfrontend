import { Grid } from "@mui/material";
import { React, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import MainContainer from "../components/createblogsidebar/maincontainer/MainContainer";
import CustomDialog from "../components/Dialog/CustomDialog";
import QuillEditor from "../components/QuillEditor/QuillEditor";
import { itemContainer } from "../style/createBlogStyle";
const CreateBlog = () => {
  const [checkToken, setCheckToken] = useState("");
  const checkAuth = () => {
    const getToken = localStorage.getItem("token");
    setCheckToken(getToken);
  };
  const userInfo = localStorage.getItem("userInfo");
  console.log("userInfo", userInfo);
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <CustomDialog
        open={checkToken === null || checkToken === "" ? true : false}
      />
      <Grid sx={itemContainer}>
        <QuillEditor />
        <MainContainer />
      </Grid>
    </>
  );
};

export default CreateBlog;
