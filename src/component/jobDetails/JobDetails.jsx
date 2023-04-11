import React from "react";
import { useParams } from "react-router-dom";
import { addToDb } from "../utilities/localStore";
import { useState, useEffect } from "react";
const JobDetails = ({ details }) => {
  const {
    educational_requirements,
    salary,
    job_title,
    company_name,
    remote_or_onsite,
    job_description,
    job_responsibility,
    experiences,
    contact_information,
  } = details;
  // console.log(details);
  const handleClick = (id) => {
    console.log("clicked", id);
    addToDb(id);

    // const prevlocalstorage
  };
  console.log(Object.keys(contact_information));
  return (
    <div>
      {/* <div>
        <h6>ID: {id}</h6>
        <h6>Company Name: {company_name}</h6>
        <h6>Job Title: {job_title}</h6>
        <h6>Remote or Onsite: {remote_or_onsite}</h6>
      </div> */}
      <button onClick={() => handleClick(id)}>Apply job</button>
      {/*  */}
      <div className="card card-side bg-base-100 shadow-xl">
        {/* <figure>
          
        </figure> */}
        <div>
          <p>{job_description}</p>
          <p>{job_responsibility}</p>
          <p>{educational_requirements}</p>
          <h6>{experiences}</h6>
        </div>
        <div className="card-body">
          <div>
            <h5 className="card-title">Job details</h5>
            <p>{salary}</p>
            <p>{job_title}</p>
          </div>
          <div>
            <h5 className="card-title">Contact</h5>

            <p>{contact_information.phone}</p>
            <p>{contact_information.email}</p>
          </div>

          {/* <div className="card-actions ">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
