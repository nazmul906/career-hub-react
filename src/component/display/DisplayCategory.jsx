import React from "react";
import "./displayCategory.css";
const DisplayCategory = ({ category }) => {
  console.log(category);
  const { name } = category;
  return (
    <div>
      <div className="displaycategory">
        <img></img>
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default DisplayCategory;
