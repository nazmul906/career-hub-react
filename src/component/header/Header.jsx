import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <h2>Job Wing</h2>
      </div>
      <nav>
        <Link to={"/Statistics"}>statics</Link>
        <Link to={"/appliedJobs"}>appliedJobs</Link>
        <Link to={"/blog"}>blog</Link>
      </nav>
      <div>
        <button>Start Applying </button>
      </div>
    </div>
  );
};

export default Header;
