import { TextField } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlogTitle } from "../../../features/blogSlice";

const Title = () => {
  const blogTitle = useSelector((state) => state.blog.blogTitle);
  const dispatch = useDispatch();
  const blogTitleFunc = (e) => {
    const { value } = e.target;
    dispatch(addBlogTitle(value));
  };
  return (
    <div>
      {" "}
      <TextField
        id="outlined-multiline-static"
        label="Title"
        multiline
        rows={2}
        fullWidth
        value={blogTitle}
        onChange={(e) => blogTitleFunc(e)}
      />
    </div>
  );
};

export default Title;
