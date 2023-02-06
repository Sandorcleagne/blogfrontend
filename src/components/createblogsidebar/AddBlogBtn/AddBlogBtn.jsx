import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlogContent, addBlogTitle } from "../../../features/blogSlice";
import CustomBtn from "../../custom/CustomBtn";
import { loginFromButtonContainer } from "../../registrationLogin/registrationStyles";
import { blogBtnContainer } from "./AddBlogBtnStyle";

const AddBlogBtn = () => {
  const blogContent = useSelector((state) => state.blog.blogContent);
  const blogTitle = useSelector((state) => state.blog.blogTitle);
  const blogCategories = useSelector((state) => state.blog.blogCategories);
  // const userData = localStorage.getItem();
  const dispatch = useDispatch();
  const sendData = () => {
    dispatch(addBlogTitle(""));
    dispatch(addBlogContent(""));
  };
  return (
    <div style={blogBtnContainer}>
      <CustomBtn
        type="submit"
        variant="contained"
        sx={loginFromButtonContainer}
        onClick={() => sendData()}
        title="Upload"
      />
    </div>
  );
};

export default AddBlogBtn;
