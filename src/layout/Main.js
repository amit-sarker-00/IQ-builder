import React, { createContext } from "react";
import Header from "../components/Header/Header";

export const QuizContext = createContext([]);
const Main = () => {
  return (
    <div>
      <QuizContext.Provider value={[]}>
        <Header></Header>
      </QuizContext.Provider>
    </div>
  );
};

export default Main;
