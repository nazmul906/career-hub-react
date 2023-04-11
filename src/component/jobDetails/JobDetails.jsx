import React from "react";
import { useParams } from "react-router-dom";
import { addToDb } from "../utilities/localStore";
import { useState, useEffect } from "react";
import "./jobdetails.css";
const JobDetails = ({ details }) => {
  const {
    id,
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
  // console.log(Object.keys(contact_information));
  return (
    <div>
      {/* <div>
        <h6>ID: {id}</h6>
        <h6>Company Name: {company_name}</h6>
        <h6>Job Title: {job_title}</h6>
        <h6>Remote or Onsite: {remote_or_onsite}</h6>
      </div> */}

      {/*  */}
      {/* <div className="card card-side bg-base-100 shadow-xl"> */}

      {/* <div>
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
          <div className="mt-4">
            <h5 className="card-title">Contact</h5>

            <p>{details?.contact_information?.phone}</p>
            <p>{details?.contact_information?.email}</p>
          </div>

          <div className="card-actions ">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div> */}

      <div className="flex flex-row mt-8 details">
        <div className="leftPart">
          <p className="descrptn">
            <span className="text-xl">Job Description:</span>
            {job_description}
          </p>
          <p className="respons">
            <span className="text-xl bold">Job responsibilty:</span>
            {job_responsibility}
          </p>
          <p className="edrequirement">
            <span className="text-xl">Educational Requirement:</span>
            {educational_requirements}
          </p>
          <h6 className="experience">
            <span className="text-xl">Experience:</span>
            {experiences}
          </h6>
        </div>
        <div className="rightPart">
          <div>
            <h5 className="card-title mt-4">Job details</h5>
            <p>Salary:{salary}</p>
            <p>Job Title:{job_title}</p>
          </div>
          <div className="mt-4">
            <h5 className="card-title">Contact</h5>

            <p>Phone:{details?.contact_information?.phone}</p>
            <p>Email:{details?.contact_information?.email}</p>
          </div>
          <div className="card-actions mt-4 ">
            <button
              className="btn btn-primary "
              onClick={() => handleClick(id)}
            >
              Apply job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
