import React from "react";

const DisplayAppliedJob = ({ appliedjob }) => {
  console.log("appliedjob", appliedjob);
  const { id, job_title } = appliedjob;
  return (
    <div>
      <h5>{job_title}</h5>
    </div>
  );
};

export default DisplayAppliedJob;
