import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <h2 className="text-5xl font-bold">Job Wing</h2>
      </div>
      <nav className="link">
        <Link to={"/home"}>Home</Link>
        <Link to={"/Statistics"}>Statics</Link>
        <Link to={"/appliedJobs"}>AppliedJobs</Link>
        <Link to={"/blog"}>Blog</Link>
      </nav>
      <div>
        <button>Start Applying </button>
      </div>
    </div>
  );
};

export default Header;
