import { styled } from "@mui/material";

export const ImageContainer = styled("div")(({ theme }) => ({
  borderRadius: "6px 6px 0px 0px",
  minHeight: "180px",
  width: "280px",
}));
export const ContentContainer = styled("div")(({ theme }) => ({
  borderRadius: "0px 0px 6px 6px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  minHeight: "250px",
  width: "278px",
  marginTop: "-6px",
}));
export const TopContainer = styled("div")(({ theme }) => ({
  height: "35px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));
export const CategoryContainer = styled("div")(({ theme }) => ({
  height: "25px",
  padding: "0px 12px 0px 12px",
  borderRadius: "30px",
  marginLeft: "5px",
  backgroundColor: "aquamarine",
}));
export const MiddleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  width: "90%",
}));
export const TextContainer = styled("div")(({ theme }) => ({
  width: "90%",
  height: "135px",
}));
export const LowerContainer = styled("div")(({ theme }) => ({
  width: "90%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));
export const InnerLowerContainer = styled("div")(({ theme }) => ({
  width: "70%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
export const AuthorNameContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
}));
