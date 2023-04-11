import React from "react";
import "./displayCategory.css";
const DisplayCategory = ({ category }) => {
  // console.log(category);
  const { name, logo_url, jobs_available } = category;
  return (
    <div>
      {/* <div className="displaycategory">
        <img></img>
        <h5>{name}</h5>
      </div> */}
      {/*  */}
      {/* <div className="card  w-66 bg-base-100 shadow-xl"> */}
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>

        <img src={logo_url}></img>

        <div className="card-actions ">
          <h5>{jobs_available}</h5>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default DisplayCategory;
