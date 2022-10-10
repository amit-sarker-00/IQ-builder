import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header flex text-right justify-between bg-slate-500 p-6 text-white font-bold ">
      <div>
        <h2 className="text-2xl">IQ Builder</h2>
      </div>
      <div className="nav-link">
        <Link to="/home">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Header;
