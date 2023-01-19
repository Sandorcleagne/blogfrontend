import { Box, styled } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/SideBar/Navbar";
import LoginReg from "./pages/auth/LoginReg";
import CreateBlog from "./pages/CreateBlog";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
function App() {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: 1,
          // path: "/",
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
        {
          path: "loginscreen",
          element: <LoginReg />,
        },
      ],
    },
  ]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <RouterProvider router={router} />
        </Box>
      </Box>
    </>
  );
}

export default App;
