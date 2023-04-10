import React from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../component/utilities/localStore.js";
import AppliedJobloader from "../loader/AppliedJobloader.js";
import { useState, useEffect } from "react";
const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const featuredata = useLoaderData();

  // to know the applied job we need to know their id
  useEffect(() => {
    const obj = getShoppingCart();
    const savedcart = [];
    for (let JobId in obj) {
      console.log("JobId", JobId);
      const applied = featuredata.find((item) => item.id === JobId);
      savedcart.push(applied);
      setAppliedJob(savedcart);
    }
  }, [featuredata]);

  console.log("data", featuredata);
  return (
    <div>
      <h6>Applied</h6>
      {/* <h4>{appliedJob.map((item) => console.log(item))}</h4> */}

      {appliedJob.length}
    </div>
  );
};

export default AppliedJobs;
