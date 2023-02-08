import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddBlogMutation } from "../../../api/blog/blogApi";
import {
  addBlogContent,
  addBlogTitle,
  addBlogCategories,
} from "../../../features/blogSlice";
import CustomBtn from "../../custom/CustomBtn";
import { loginFromButtonContainer } from "../../registrationLogin/registrationStyles";
import { blogBtnContainer } from "./AddBlogBtnStyle";

const AddBlogBtn = () => {
  const blogContent = useSelector((state) => state.blog.blogContent);
  const blogTitle = useSelector((state) => state.blog.blogTitle);
  const blogCategories = useSelector((state) => state.blog.blogCategories);
  const userData = localStorage.getItem("userInfo");
  const [addBlog] = useAddBlogMutation();
  const parsedUserData = JSON.parse(userData);
  const { name, userId } = parsedUserData.user;
  const dispatch = useDispatch();
  const sendData = async () => {
    const blogData = {
      blogContent: blogContent,
      blogCategories: blogCategories,
      blogTitle: blogTitle,
      authorName: name,
      authorId: userId,
    };
    const data = await addBlog(blogData);
    console.log("data", data);
    dispatch(addBlogTitle(""));
    dispatch(addBlogContent(""));
    dispatch(addBlogCategories([]));
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
