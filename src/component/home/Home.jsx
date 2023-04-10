import React from "react";
import { useLoaderData } from "react-router-dom";
import "./home.css";
import DisplayCategory from "../display/DisplayCategory";
import Feature from "../feature/Feature";
import { useEffect, useState } from "react";
const Home = () => {
  const [showall, setShowall] = useState(false);
  const data = useLoaderData();
  // console.log(data);
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("featureData.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  //direct API pawa jabe na..id pele oi id diye map krte hbe
  // useEffect(() => {
  //   fetch("http://localhost:5173/featureData.json/id/1")
  //     .then((res) => res.json())
  //     .then((data) => console.log("detailsBYID", data));
  // }, []);

  return (
    <div className="home">
      <div className="BannnerSection">
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

      <div className="categorySection">
        <h1>Job Category List</h1>
        {data.map((item) => (
          <DisplayCategory key={item.name} category={item}></DisplayCategory>
        ))}
      </div>

      <div className="featureSection">
        <h1>Featured Jobs</h1>
        {feature.slice(0, showall ? feature.length : 4).map((item) => (
          <Feature key={item.id} feature={item}></Feature>
        ))}
        {/* {feature.length > 4 && (
          <button
            onClick={() => {
              feature.map((item) => (
                <Feature key={item.id} feature={item}></Feature>
              ));
            }}
          >
            See All Jobs
          </button>
        )} */}
      </div>
      <button onClick={() => setShowall(true)}>Show all</button>
    </div>
  );
};

export default Home;
