import { Button } from "@mui/material";
import React from "react";
const CustomBtn = ({ title, onClick, type, variant, sx }) => {
  return (
    <Button type={type} variant={variant} sx={sx} onClick={onClick}>
      {title}
    </Button>
  );
};

export default CustomBtn;
