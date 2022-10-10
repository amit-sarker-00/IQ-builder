import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const Quiz = ({ quiz }) => {
  const { name, logo, total } = quiz;
  return (
    <div className="quiz bg-slate-500 flex">
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
        <div className=" font-extrabold">
          <button className="border bg-cyan-400">
            Quiz <ArrowLongRightIcon className=" w-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
