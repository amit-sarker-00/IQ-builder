import React from "react";
import Swal from "sweetalert2";

const Option = ({ option, correctAnswer }) => {
  const handelQuiz = (option, correctOption) => {
    if (option === correctOption) {
      Swal.fire({
        icon: "success",
        title: "Success",
        type: "success",
        text: "Your Answer is Correct.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Answer",
        type: "Wrong AnsWer",
        text: "Your Answer is Wrong.",
      });
    }
  };
  return (
    <div className="p-2 ">
      <h1 className="bg-slate-300 border rounded-md shadow-md p-2">
        <input
          onClick={() => handelQuiz(option, correctAnswer)}
          type="radio"
          name="choose"
          id=""
        />
        {option}
      </h1>
    </div>
  );
};

export default Option;
