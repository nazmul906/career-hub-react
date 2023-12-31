import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
} from "recharts";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Statistics = () => {
  const [marks, setMark] = useState([]);
  const stat = useLoaderData();
  console.log("stat", stat);

  useEffect(() => {
    // axios
    //   .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((data) => {
    //     console.log(data.data.data);
    //     const loadData = data.data.data;
    //   });
    setMark(stat);
  }, []);
  return (
    <div className="flex justify-center items-center mt-24">
      <ComposedChart width={730} height={350} data={marks}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area
          type="monotone"
          dataKey="number"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="Assignment_marks" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="number" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Statistics;
