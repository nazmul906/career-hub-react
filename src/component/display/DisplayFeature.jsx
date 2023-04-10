import React from "react";
import "./displayfeature.css";
const DisplayFeature = ({ feature }) => {
  console.log(feature);
  const { company_name, name, remote_or_onsite, location } = feature;
  return (
    <div className="feature">
      <h4>{company_name}</h4>
      <button>View Details</button>
    </div>
  );
};

export default DisplayFeature;
