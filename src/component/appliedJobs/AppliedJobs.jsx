import React from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../component/utilities/localStore.js";
import AppliedJobloader from "../loader/AppliedJobloader.js";
const AppliedJobs = () => {
  const featuredata = useLoaderData();

  // to know the applied job we need to know their id
  const obj = getShoppingCart();
  for (let JobId in obj) {
    console.log("JobId", JobId);
  }
  console.log("data", data);
  return (
    <div>
      <h6>Applied</h6>
      {/* <h4>{appliedJob.map((item) => console.log(item))}</h4> */}
    </div>
  );
};

export default AppliedJobs;
