import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { QuillContainer } from "./QuillEditorStyle";
const QuillEditor = () => {
  const [value, setValue] = useState("");

  return (
    <QuillContainer>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
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
