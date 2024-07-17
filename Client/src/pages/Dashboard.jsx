import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Payment from "./Payment";
import RulesRegulations from "./RulesRegulations";
import BedspaceRequest from "./bedspacerequest";
import Home from "./Home";
import Navbar from "../components/navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/UseAuth";
import axios from "axios";
const endpoint = "https://hmsbackend-c36l.onrender.com/student/profile";

const Dashboard = () => {
  // const { auth } = useAuth();
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);

  const token = auth?.token || "";

  const fetchStudentData = async () => {
    try {
      const response = await axios.get(endpoint, {
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      if (response.status === 200) {
        console.log(response);
        setUserDetails(response.data.d);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 403) {
        localStorage.setItem("auth", JSON.stringify({}));
        const state = { title: "Home", url: "/" };
        window.history.replaceState(state, state.title, state.url);
        navigate("/login", { replace: true });
      }
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [token]);

  return (
    <div className="w-full p-0 m-0 flex flex-row relative ">
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="w-full md:ml-[350px] relative md:bg-[#EBEBEB] min-h-screen md:p-4 flex flex-col scroll-smooth">
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="w-11/12 mx-auto mt-28 pb-20 md:w-full md:p-14 bg-white  md:mt-24">
          <Routes>
            <Route
              path="/"
              element={<Home userDetails={userDetails} isLoading={isLoading} />}
            />
            <Route
              path="/dashboard/bedspace-request"
              element={
                <BedspaceRequest
                  userDetails={userDetails}
                  fetchStudentData={fetchStudentData}
                />
              }
            />
            <Route
              path="/dashboard/rules-and-regulations"
              element={<RulesRegulations />}
            />
            <Route
              path="/dashboard/payment"
              element={
                <Payment fetchStudentData={fetchStudentData} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
