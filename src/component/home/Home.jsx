import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <h4>a Banner, Category List section, and Featured job</h4>

      <div className="homeLeft">
        <h1 className="Category"></h1>
        <p className="CategoryList"></p>
        <button>Get Started</button>
      </div>
      <div className="Banner">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
      </div>
    </div>
  );
};

export default Home;
