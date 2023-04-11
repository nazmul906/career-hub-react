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
        <div className="BannerLeft">
          {" "}
          <h1 className="font-bold">
            <span>A STEP CLOSER TO YOUR </span> <br />
            <span>Dream JOb</span>
          </h1>
          <p className="bannerP">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button>Get Started</button>
        </div>
        {/* <div className="homeLeft">
          <h1 className="Category"></h1>
          <p className="CategoryList"></p>
        </div> */}
        <div className="Banner">
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
        </div>
      </div>

      <div className="categorySection">
        <div className="card-compact w-66 bg-base-100 shadow-xl">
          <h1 className="font-normal mb-4"> Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="md:grid grid-cols-4 gap-3">
            {data.map((item) => (
              <DisplayCategory
                key={item.name}
                category={item}
              ></DisplayCategory>
            ))}
          </div>
        </div>
      </div>

      <div className="featureSection">
        <h1 className=" mb-4">Featured Jobs</h1>
        <div className="card w-auto bg-base-100 shadow-xl md:grid grid-cols-2 gap-4">
          {feature?.slice(0, showall ? feature.length : 4).map((item) => (
            <Feature key={item.id} feature={item}></Feature>
          ))}
        </div>

        {/* {feature.slice(0, 4).map((item) => (
          <Feature key={item.id} feature={item}></Feature>
        ))} */}

        {/* {showall
          ? feature.map((feature) => (
              <Feature key={feature.id} feature={feature} />
            ))
          : feature
              .slice(0, 4)
              .map((feature) => <Feature key={feature.id} feature={feature} />)} */}
        {/* <button onClick={() => setShowall(!showall)}>
          {showall ? "Show Less" : "See All Jobs"}
        </button> */}
      </div>
      <button onClick={() => setShowall(true)}>Show all</button>
    </div>
  );
};

export default Home;
