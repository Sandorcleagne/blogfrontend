import { TextField } from "@mui/material";
import React from "react";

const Title = () => {
  return (
    <div>
      {" "}
      <TextField
        id="outlined-multiline-static"
        label="Title"
        multiline
        rows={2}
        defaultValue="Title"
        fullWidth
      />
    </div>
  );
};

export default Title;
