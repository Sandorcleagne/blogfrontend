import { styled } from "@mui/material/styles";
export const mainContainer = {
  width: "100%",
  display: "flex",
};
export const imageContainer = {
  width: "50%",
  display: { xs: "none", sm: "none", md: "none", lg: "block" },
};
export const FormContainer = styled("div")(({ theme }) => ({
  width: "100%",
}));
export const tabStyle = {
  fontWeight: "600",
};
export const cardStyle = {
  width: "100%",
  height: "100%",
};
export const innerBox = {
  borderBottom: 1,
  borderColor: "divider",
};
export const innerGirdMain = {
  height: "80vh",
  width: "50%",
};
export const loginFormMainContainer = {
  marginTop: "20px",
  padding: "20px 10px 20px 10px",
};
export const loginFromButtonContainer = {
  marginTop: "10px",
  fontWeight: "bold",
  padding: "10px 30px 10px 30px",
};
export const formInnerContainer = {
  marginTop: "8%",
};
