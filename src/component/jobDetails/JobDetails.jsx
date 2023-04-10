import React from "react";
import { useParams } from "react-router-dom";
import { addToDb } from "../utilities/localStore";
import { useState, useEffect } from "react";
const JobDetails = ({ details }) => {
  const { id, job_title, company_name, remote_or_onsite } = details;
  console.log(details);
  const handleClick = (id) => {
    console.log("clicked", id);
    addToDb(id);
  };
  return (
    <div>
      <div>
        <h6>ID: {id}</h6>
        <h6>Company Name: {company_name}</h6>
        <h6>Job Title: {job_title}</h6>
        <h6>Remote or Onsite: {remote_or_onsite}</h6>
      </div>
      <button onClick={() => handleClick(id)}>Apply job</button>
    </div>
  );
};

export default JobDetails;
