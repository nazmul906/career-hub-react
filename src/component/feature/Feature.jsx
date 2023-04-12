import React from "react";
// const data = useLoaderData();
// console.log(data);
import "./feature.css";
import { useEffect, useState } from "react";
import DisplayFeature from "../display/DisplayFeature";
import { Link } from "react-router-dom";
const Feature = ({ feature }) => {
  // console.log(feature);
  const {
    id,
    job_title,
    company_logo,
    company_name,
    name,
    remote_or_onsite,
    location,
    salary,
  } = feature;
  return (
    <div className="feature">
      <img style={{ width: "100px", height: "100px" }} src={company_logo}></img>
      <p>{job_title}</p>
      <p>{company_name}</p>
      <p>
        <button>{remote_or_onsite}</button> <button>Full time</button>{" "}
        <span></span>
      </p>
      <p>
        {location} <span className="ms-2">{salary}</span>
      </p>
      {/* <div className="card-body"> */}

      {/* <div className="card-actions "> */}
      <Link to={`/viewdetails/${id}`}>
        <button className="btn btn-primary">View Details</button>
      </Link>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Feature;
