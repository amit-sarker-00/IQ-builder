import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export const QuizContext = createContext([]);
const Main = () => {
  return (
    <div>
      <QuizContext.Provider value={[]}>
        <Header></Header>
        <Outlet></Outlet>
      </QuizContext.Provider>
    </div>
  );
};

export default Main;
