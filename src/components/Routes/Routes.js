import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
