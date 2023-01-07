import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/SideBar/Navbar";
import Home from "./pages/Home";
import { Box, styled } from "@mui/material";
import MyBlogs from "./pages/MyBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "blogs",
        element: <Home />,
      },
      {
        path: "createblogs",
        element: <CreateBlog />,
      },
      {
        path: "myblogs",
        element: <MyBlogs />,
      },
    ],
  },
]);
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Box sx={{ display: "flex" }}>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <RouterProvider router={router} />
    </Box>
  </Box>
);
