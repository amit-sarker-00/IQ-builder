import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetail from "../QuizDetail/QuizDetail";

const QuizDetails = () => {
  const quizDetails = useLoaderData().data;
  //   console.log(quizDetails);
  return (
    <div>
      <div className="text-center text-4xl font-bold text-blue-400">
        <h1>Quiz of {quizDetails.name}</h1>
      </div>
      {quizDetails.questions.map((quizDetail) => (
        <QuizDetail key={quizDetail.id} quizDetail={quizDetail}></QuizDetail>
      ))}
    </div>
  );
};

export default QuizDetails;
