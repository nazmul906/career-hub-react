import React from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState } from "react";
const Details = () => {
  //   const productId = match.params.id; // get the ID from the URL parameter
  const [feature, setFeature] = useState([]);
  const detail = useLoaderData();
  //   const { id } = useParams();
  //   console.log(details);

  const { detailsID } = useParams(); //route e je name disi exactly same detailsID name destructure krte hbe na hoile undefined

  console.log("pid", detailsID);

  const fId = feature.find((item) => item.id == detailsID);
  setFeature(fId);
  return (
    <div>
      <h5>dynamic</h5>
      {/* <h6>ID: {id}</h6> */}
      {feature.length}
    </div>
  );
};

export default Details;
