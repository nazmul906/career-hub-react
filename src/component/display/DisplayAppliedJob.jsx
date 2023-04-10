import React from "react";
import "./displayAppliedJOb.css";
const DisplayAppliedJob = ({ appliedjob }) => {
  console.log("appliedjob", appliedjob);
  const { id, job_title, company_name, location, remote_or_onsite } =
    appliedjob;
  return (
    <div className="job">
      {/* <div key={item.id} className="Eachjob"> */}
      <p>{job_title}</p>
      <p>{company_name}</p>
      <p>{location}</p>
      <p>{remote_or_onsite}</p>
    </div>
    // </div>
  );
};

export default DisplayAppliedJob;
