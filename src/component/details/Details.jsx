import React from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import JobDetails from "../jobDetails/JobDetails";

const Details = () => {
  //   const productId = match.params.id; // get the ID from the URL parameter
  const [feature, setFeature] = useState([]);
  const details = useLoaderData();

  // console.log(details);

  const { detailsID } = useParams(); //route e je name disi exactly same detailsID name destructure krte hbe na hoile undefined

  // console.log("pid", detailsID);

  useEffect(() => {
    const foundID = details.find((item) => item.id == detailsID);
    setFeature(foundID);
  }, [details, detailsID]);

  return (
    <div className="details">
      <h5>dynamic</h5>
      {/* <h6>ID: {id}</h6> */}
      {feature.length}
      {/* {feature.map((item) => (
        <JobDetails key={item.id} details={item}></JobDetails>
      ))}  */}
      {/* {feature && Object.keys(feature).length > 0 && (
        <JobDetails details={feature} />
      )} */}

      {/* {feature && (
        <div>
          <h6>ID: {feature.id}</h6>
          <h6>Company Name: {feature.company_name}</h6>
          <h6>Job Title: {feature.job_title}</h6>
          <h6>Remote or Onsite: {feature.remote_or_onsite}</h6>
        </div>
      )} */}
      {/* <button onClick={() => handleClick(feature.id)}>Apply job</button> */}
      <JobDetails details={feature}></JobDetails>
    </div>
  );
};

export default Details;
