import React from "react";
import "./QuizDetail.css";
import Option from "../Option/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";

const QuizDetail = ({ quizDetail }) => {
  const { question, options, correctAnswer } = quizDetail;
  const showToastMessage = () => {
    if (showToastMessage) {
      toast.success(`${correctAnswer}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <div className="text-center border w-96 m-auto quizDetail">
        <div className="flex justify-between">
          <div>
            <h1>
              Quiz:
              {question}
            </h1>
          </div>
          <div>
            <FontAwesomeIcon onClick={showToastMessage} icon={faEye} />
            <ToastContainer></ToastContainer>
          </div>
        </div>
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
