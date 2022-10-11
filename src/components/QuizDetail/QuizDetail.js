import React from "react";
import Option from "../Option/Option";
const QuizDetail = ({ quizDetail }) => {
  const { question, options, correctAnswer } = quizDetail;
  console.log(quizDetail);
  return (
    <div>
      <div className="text-center border w-96 m-auto">
        <h1>
          Quiz:
          {question}
        </h1>
        <div className="my-10">
          {options.map((option) => (
            <Option option={option} correctAnswer={correctAnswer}></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
