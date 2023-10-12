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
  const [showSideBar, setShowSideBar] = useState(false);

  const token = auth.token;

  const fetchStudentData = async () => {
    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        }
      });
      if (response.status === 200) {
      setUserDetails(response.data.data);
      setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [token]);

  return (
    <div className="w-full p-0 m-0 flex flex-row relative ">
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="w-full md:ml-[350px] relative md:bg-[#EBEBEB] min-h-screen flex flex-col scroll-smooth">
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="w-11/12 mx-auto mt-28 pb-20 md:w-full md:p-14 bg-white md:m-4 md:mt-24">
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
