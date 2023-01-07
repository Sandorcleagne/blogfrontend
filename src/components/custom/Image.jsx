import React from "react";

const Image = ({ source, altName, height, width, borderRadius }) => {
  return (
    <img
      src={source}
      alt={altName}
      height={height}
      width={width}
      style={{ borderRadius: borderRadius }}
    />
  );
};

export default Image;
