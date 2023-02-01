import { Button } from "@mui/material";
import React from "react";
const CustomBtn = ({ title, onClickFunc, type, variant, style }) => {
  return (
    <Button type={type} variant={variant} sx={style} onClick={onClickFunc}>
      {title}
    </Button>
  );
};

export default CustomBtn;
