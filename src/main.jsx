import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./component/layout/Main";
import Home from "./component/home/Home";
import Statistics from "./component/Statistics/Statistics";
import JobDetails from "./component/jobDetails/JobDetails";
import Details from "./component/details/Details";
import AppliedJobs from "./component/appliedJobs/AppliedJobs";

import ErrorPage from "./component/errorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categoryData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/assignment.json"),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/featureData.json"),
      },
      {
        path: "/blog",
        element: <div></div>,
      },
      // {
      //   path: "/viewdetails",
      //   element: <JobDetails></JobDetails>,
      // },
      //      loader: ({ params }) => console.log(params.details)
      {
        path: "/viewdetails/:detailsID",
        element: <Details></Details>,
        loader: ({ params }) => fetch("/featureData.json"),
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
