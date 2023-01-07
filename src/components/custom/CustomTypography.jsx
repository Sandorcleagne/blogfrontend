import { Typography } from "@mui/material";
import React from "react";

const CustomTypography = ({
  text,
  variant,
  weight,
  size,
  color,
  style,
  paragraph,
}) => {
  return (
    <Typography
      variant={variant}
      fontWeight={weight}
      fontSize={size}
      style={text.length < 150 ? style : {}}
      paragraph={paragraph}
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;
