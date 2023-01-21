import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import CustomDialog from "../components/Dialog/CustomDialog";

const MyBlogs = () => {
  const [checkToken, setCheckToken] = useState("");
  const checkAuth = () => {
    const getToken = localStorage.getItem("token");
    setCheckToken(getToken);
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <CustomDialog
        open={checkToken === null || checkToken === "" ? true : false}
      />
      <BlogCard />
    </>
  );
};

export default MyBlogs;
