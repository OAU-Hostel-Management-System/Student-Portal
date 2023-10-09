import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Payment from "./Payment";
import RulesRegulations from "./RulesRegulations";
import BedspaceRequest from "./bedspacerequest";
import Home from "./Home";
import Navbar from "../components/navbar";
import { Route, Routes } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import axios from "axios";
const endpoint = "https://hmsbackend-c36l.onrender.com/students/fetchDetails";

const Dashboard = () => {
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [refetch, setRefetch] = useState(false);
  const token = auth.token;
  console.log("Token is - ", token);

  const fetchStudentData = async () => {
    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `${token}`, // Ensure "Bearer" prefix for the token
          "Content-Type": "application/json",
        }
      });

      console.log("The response", response);

      // Check if the response status is 200 before updating state
      // if (response.status === 200) {
        console.log("Here")
      setUserDetails(response.data.data);
      console.log(userDetails); // The updated state won't be available immediately after setUserInfo, so it may still log the previous state
      setIsLoading(false);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [token]);

  return (
    <div className="w-full p-0 m-0 flex flex-row relative ">
      <Sidebar />
      <div className="w-full md:ml-[350px] relative bg-[#EBEBEB] min-h-screen flex flex-col scroll-smooth">
        <Navbar />
        <div className="p-14 bg-white m-4 mt-24">
          <Routes>
            <Route path="/" element={<Home userDetails={userDetails} isLoading={isLoading} />} />
            <Route
              path="/dashboard/bedspace-request"
              element={<BedspaceRequest userDetails={userDetails} setIsLoading={setIsLoading} isLoading={isLoading} fetchStudentData={fetchStudentData} />}
            />
            <Route
              path="/dashboard/rules-and-regulations"
              element={<RulesRegulations />}
            />
            <Route path="/dashboard/payment" element={<Payment userDetails={userDetails} isLoading={isLoading} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
