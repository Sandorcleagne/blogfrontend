import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { addBlogContent } from "../../features/blogSlice";
import { QuillContainer, QuillStyle } from "./QuillEditorStyle";
const QuillEditor = () => {
  const blogContent = useSelector((state) => state.blog.blogContent);
  const dispatch = useDispatch();
  const handelChange = (html) => {
    dispatch(addBlogContent(html));
  };
  return (
    <QuillContainer>
      <ReactQuill
        style={QuillStyle}
        theme="snow"
        value={blogContent}
        onChange={handelChange}
        modules={{
          toolbar: {
            container: [
              ["link", "image"],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ align: [] }],
              ["clean"],
              [{ color: [] }],
            ],
          },
        }}
      />
    </QuillContainer>
  );
};

export default QuillEditor;
