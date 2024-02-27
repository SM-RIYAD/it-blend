import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home/Home";

import ErrorPage from "./components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
   
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      // {
      //   path: '/donation',
      //   element: <Donation></Donation>,
       
      // },
      // {
      //   path: '/statistics',
      //   element: <Statistics></Statistics>

      // },
      // {
      //   path: '/donationdetails/:donationid',
      //   element: <DonationDetails></DonationDetails>,
      //   loader: () => fetch('/data.json')

      // },
    
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

<RouterProvider router={router} />


  </React.StrictMode>
);
