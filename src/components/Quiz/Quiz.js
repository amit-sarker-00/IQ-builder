import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="quiz bg-slate-500 flex rounded-md">
      <div>
        <img className="w-44  " src={logo} alt="" />
      </div>
      <div className="flex items-center gap-6">
        <div className="text-center">
          <h1 className="text-cyan-400 font-extrabold text-2xl">{name}</h1>
          <p>
            <strong className="text-white">Total Quiz: {total}</strong>
          </p>
        </div>
        <div className=" font-extrabold ">
          <button className="border bg-cyan-400 p-2 hover:bg-slate-500 rounded-md">
            <Link to={`/quiz/${id}`}>
              Quiz
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
