import React from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../component/utilities/localStore.js";
// import AppliedJobloader from "../loader/AppliedJobloader.js";
import { useState, useEffect } from "react";
import DisplayAppliedJob from "../display/displayAppliedJob.jsx";
import "./appliedjob.css";
const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const featuredata = useLoaderData();
  useEffect(() => {
    fetch("featureData.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  // Problem hocche..show button er por baki gla ar local theke apppliedjob  load hocche na ..jdio save hocce

  // to know the applied job we just need to know their id which stored in localstorage
  //once we found there id we need to macth them with json and render those add

  const obj = getShoppingCart();
  useEffect(() => {
    //as we will find and need to show more than one data in apply job UI ,so we try to make array of object so savedcart[] is for that

    const savedcart = [];
    for (let JobId in obj) {
      console.log("JobId from locastorage", JobId);
      const applied = featuredata.find((item) => item.id === JobId);
      if (applied) {
        console.log("clicked from useeffct", JobId);
        savedcart.push(applied);
        setAppliedJob(savedcart);
      } else {
        console.log("job is not found in featureData");
      }
    }
    // console.log("clicked from useeffct");
  }, [featuredata]);

  // console.log("data", featuredata);
  return (
    <div className="appliedJob">
      <h6>Applied JOb</h6>
      {/* <DisplayAppliedJob appliedjob={item}></DisplayAppliedJob> */}
      {appliedJob.length}
      {appliedJob.map((item) => (
        <div key={item.id} className="Eachjob">
          <p>{item.job_title}</p>
          <p>{item.company_name}</p>
          <p>{item.location}</p>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
