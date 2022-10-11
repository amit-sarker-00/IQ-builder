import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Topic.css";
const Topics = () => {
  const quizs = useLoaderData();
  return (
    <div>
      <div className="lg:m-6 quizs">
        {quizs.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Topics;
