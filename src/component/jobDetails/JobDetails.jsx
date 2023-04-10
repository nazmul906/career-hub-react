import React from "react";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
const JobDetails = () => {
  const [feature, setFeature] = useState([]);
  const [selectedId, setSelectedId] = useState(1);

  const [data, setData] = useState(null);
  const { id } = useParams();

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
  const savecart = [];
  const selectFeature = feature.find((item) => item.id === selectedId);
  //   console.log(selectFeature);
  savecart.push(selectFeature);

  //   const { job_title } = savecart;
  return (
    <div>
      {/* {savecart.map((item) => console.log(item))} */}
      {/* 
      <h5>{selectFeature.job_title}</h5> */}

      {data && (
        <div>
          <h1>{data.job_title}</h1>
          <p>{data.job_description}</p>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
