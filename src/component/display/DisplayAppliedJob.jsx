import React from "react";
import "./displayAppliedJOb.css";
import { Link } from "react-router-dom";
const DisplayAppliedJob = ({ appliedjob }) => {
  console.log("appliedjob", appliedjob);
  const {
    id,
    job_title,
    company_name,
    location,
    remote_or_onsite,

    company_logo,

    name,

    salary,
  } = appliedjob;
  return (
    <div className="job flex flex-row  justify-center items-center">
      {/* <div key={item.id} className="Eachjob"> */}

      <img style={{ width: "100px", height: "100px" }} src={company_logo}></img>

      <div className="middlePara">
        <p>{job_title}</p>
        <p>{company_name}</p>
        <p>{location}</p>
        <p>{remote_or_onsite}</p>
      </div>
      <Link to={`/viewdetails/${id}`}>
        {" "}
        <button className="btn btn-primary ">View Details</button>
      </Link>
    </div>
    // </div>
  );
};

export default DisplayAppliedJob;
