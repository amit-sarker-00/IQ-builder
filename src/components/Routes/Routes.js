import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        { path: "blog", element: <Blog></Blog> },
      ],
      errorElement: <ErrorPage></ErrorPage>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
