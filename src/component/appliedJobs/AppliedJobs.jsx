import React from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../component/utilities/localStore.js";
// import AppliedJobloader from "../loader/AppliedJobloader.js";
import { useState, useEffect } from "react";
import DisplayAppliedJob from "../display/displayAppliedJob.jsx";
import "./appliedjob.css";
const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const [remoteJob, setRemoteJob] = useState([]);
  const featuredata = useLoaderData();
  // useEffect(() => {
  //   fetch("featureData.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
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

  const handleRemote = () => {
    const remoteJobs = appliedJob.filter(
      (job) => job.remote_or_onsite === "Remote"
    );
    setRemoteJob(remoteJobs);
  };

  const handleOnsite = () => {
    const onsiteJobs = appliedJob.filter(
      (job) => job.remote_or_onsite === "Onsite"
    );
    setRemoteJob(onsiteJobs);
  };
  // console.log("data", featuredata);
  return (
    <div className="appliedJob">
      <h6>Applied JOb</h6>
      {/* <div>
        <button onClick={() => handleRemote()}>Remote</button>
        <button onClick={() => handleOnsite()}>Onsite</button>
      </div> */}

      {/* {appliedJob.length}
      {appliedJob.map((item) => (
        <div key={item.id} className="Eachjob">
          <p>{item.job_title}</p>
          <p>{item.company_name}</p>
          <p>{item.location}</p>
        </div>
      ))} */}

      <div>
        <button onClick={() => handleRemote()}>Remote</button>
        <button onClick={() => handleOnsite()}>Onsite</button>
      </div>
      <div>
        {remoteJob.length > 0 && (
          <div>
            {/* <h6>Remote Jobs</h6> */}
            {remoteJob.map((item) => (
              <DisplayAppliedJob key={item.id} appliedjob={item} />
            ))}
          </div>
        )}
        {remoteJob.length === 0 && appliedJob.length > 0 && (
          <div>
            <h6>All Jobs</h6>
            {appliedJob.map((item) => (
              <DisplayAppliedJob key={item.id} appliedjob={item} />
            ))}
          </div>
        )}
        {appliedJob.length === 0 && (
          <p>You have not applied for any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
