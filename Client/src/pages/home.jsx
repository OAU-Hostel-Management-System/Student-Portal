import React, { useState } from "react";
import image from "../components/Image";
import IdCard from "../components/IdCard";
import ReactLoading from "react-loading";

const Home = ({ userDetails, isLoading }) => {
  const [showId, setShowId] = useState(false);

  console.log(userDetails)
  console.log("Loading State",isLoading)

  return (
    <div className="w-full min-h-[65vh] space-y-6">
      {isLoading ? (
        <div className="w-full min-h-[65vh] flex justify-center items-center">
          <ReactLoading type="spin" color="#113885" width={"50px"} height={"50px"} />
        </div>
      ) : (
        <>
          <div className="flex gap-6 items-center justify-between ">
            <div className="flex gap-6 items-center">
              <img
                src={image.imageprofile}
                alt=""
                className="rounded-full w-32 h-32"
              />
              <div>
                <p className="text-sm text-[#666666] font-semibold">Student</p>
                <h2 className=" font-semibold text-2xl">
                  {userDetails?.fullName}
                </h2>
                <p className="font-semibold text-lg">
                  {userDetails?.room?.hostel_name}
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                setShowId(!showId);
              }}
              className=" rounded-2xl flex items-center gap-4 cursor-pointer group border py-3 px-6 hover:bg-[#CFDEFD]">
              <p className="font-medium group-hover:text-custom-blue">
                View ID
              </p>
            </div>
          </div>
          <hr className="bg-[#CFDEFD]" />
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Gender</p>
              <p className="font-medium">{userDetails?.sex === "M" ? "Male" : "Female"}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Department</p>
              <p className="font-medium">{userDetails?.dept}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Faculty</p>
              <p className="font-medium">{userDetails?.faculty}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Matric Number</p>
              <p className="font-medium">{userDetails?.matricNo}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Hostel</p>
              <p className="font-medium">{userDetails?.room?.hostel_name}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Block</p>
              <p className="font-medium">{userDetails?.room?.block}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Room</p>
              <p className="font-medium">{userDetails?.room?.roomNo}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Payment Status</p>
              <p className="font-medium">{userDetails?.room?.users_paid ? "Successful" : "None"}</p>
            </div>
          </div>
          {showId && <IdCard showId={showId} setShowId={setShowId} userDetails={userDetails} />}
        </>
      )}
    </div>
  );
};

export default Home;
