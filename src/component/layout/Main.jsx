import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
