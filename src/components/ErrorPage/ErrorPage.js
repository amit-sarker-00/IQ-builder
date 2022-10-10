import React from "react";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <div className="text-center text-5xl error text-red-600 font-extrabold">
      <h1>404</h1>
      <p className="font-sans text-blue-700">Looks like you lost.</p>
      <p>
        <small className="text-blue-500 text-3xl">
          The page you are looking for not available
        </small>
      </p>
    </div>
  );
};

export default ErrorPage;
