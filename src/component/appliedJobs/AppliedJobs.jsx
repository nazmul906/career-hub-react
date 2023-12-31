import React from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../component/utilities/localStore.js";
// import AppliedJobloader from "../loader/AppliedJobloader.js";
import { useState, useEffect } from "react";
import DisplayAppliedJob from "../display/displayAppliedJob.jsx";
import "./appliedjob.css";
const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  // const [remoteJob, setRemoteJob] = useState([]);
  // const [onSiteJob, setOnSiteJOb] = useState([]);
  const [job, setJOb] = useState([]);

  // const [rmfilter, setRmfilter] = useState(false);
  // const [onfilter, setOnfilter] = useState(false);
  const featuredata = useLoaderData();

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
    // console.log("clicked from useffct");
  }, [featuredata]);

  const handleRemote = () => {
    const remoteJobs = appliedJob.filter(
      (job) => job.remote_or_onsite === "Remote"
    );
    setJOb(remoteJobs);
    // setRmfilter(true);
  };

  const handleOnsite = () => {
    const onsiteJobs = appliedJob.filter(
      (job) => job.remote_or_onsite === "Onsite"
    );
    // setOnSiteJOb(onsiteJobs);
    setJOb(onsiteJobs);
    // setOnfilter(true);
  };
  // console.log("data", featuredata);
  return (
    <div className="appliedJob">
      <div className="banner">
        <h6>Applied Job</h6>
      </div>

      {/*  */}
      <div className="dropdown filterbtn me-24">
        <label tabIndex={0} className="btn m-1">
          Filter By
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button onClick={() => handleRemote()}>Remote</button>
          </li>
          <li>
            <button onClick={() => handleOnsite()}>Onsite</button>
          </li>
        </ul>
      </div>
      {/* <div className="filterbtn">
        <button onClick={() => handleRemote()}>Remote</button>
        <button onClick={() => handleOnsite()}>Onsite</button>
      </div> */}
      <div>
        {job.length > 0 && (
          <div>
            {/* <h6>Remote Jobs</h6> */}
            {job.map((item) => (
              <DisplayAppliedJob key={item.id} appliedjob={item} />
            ))}
          </div>
        )}
        {/* {onSiteJob.length > 0 && onfilter ? (
          <div>
            {onSiteJob.map((item) => (
              <DisplayAppliedJob
                key={item.id}
                appliedjob={item}
              ></DisplayAppliedJob>
            ))}
          </div>
        ) : (
          ""
        )} */}

        {job.length === 0 && appliedJob.length > 0 && (
          <div>
            <h6
              className="text-xl font-medium"
              style={{ marginBottom: "20px", marginLeft: "60px" }}
            >
              All Jobs
            </h6>
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
