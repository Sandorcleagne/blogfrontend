import { React, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import CustomDialog from "../components/Dialog/CustomDialog";
import QuillEditor from "../components/QuillEditor/QuillEditor";
const CreateBlog = () => {
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
      <QuillEditor />
    </>
  );
};

export default CreateBlog;
