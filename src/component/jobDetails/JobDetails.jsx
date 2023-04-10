import React from "react";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
const JobDetails = (details) => {
  const { id } = details;
  console.log(details);
  // const [feature, setFeature] = useState([]);
  // const [selectedId, setSelectedId] = useState(1);

  // useEffect(() => {
  //   fetch(`/featureData.json/${id}`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);
  // useEffect(() => {
  //   fetch("featureData.json")
  //     .then((res) => res.json())
  //     .then((data) => setFeature(data));
  // }, []);

  //   const { job_title } = savecart;
  return (
    <div>
      {/* {savecart.map((item) => console.log(item))} */}
      {/* 
      <h5>{selectFeature.job_title}</h5> */}

      <h3>{id}</h3>
    </div>
  );
};

export default JobDetails;
