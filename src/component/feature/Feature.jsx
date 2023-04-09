import React from "react";
// const data = useLoaderData();
// console.log(data);
import { useEffect, useState } from "react";
import DisplayFeature from "../display/DisplayFeature";

const Feature = () => {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("featureData.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);
  return (
    <div>
      {/* {feature.length} */}
      {feature.map((item) => (
        <DisplayFeature feature={item}></DisplayFeature>
      ))}
    </div>
  );
};

export default Feature;
