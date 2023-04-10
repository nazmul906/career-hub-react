import React from "react";
// const data = useLoaderData();
// console.log(data);
import "./feature.css";
import { useEffect, useState } from "react";
import DisplayFeature from "../display/DisplayFeature";
import { Link } from "react-router-dom";
const Feature = ({ feature }) => {
  // console.log(feature);
  const { id, company_name, name, remote_or_onsite, location } = feature;
  return (
    <div className="feature">
      <h4>{company_name}</h4>
      <Link to={`/viewdetails/${id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default Feature;
