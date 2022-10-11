import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import QuizDetails from "../QuizDetails/QuizDetails";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "topics",
          element: <Topics></Topics>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>,
        },
        { path: "blog", element: <Blog></Blog> },
        {
          path: "/quiz/:quizId",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <QuizDetails></QuizDetails>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
