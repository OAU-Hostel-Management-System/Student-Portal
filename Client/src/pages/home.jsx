import React, { useState } from "react";
import IdCard from "../components/IdCard";
import Loader from "../components/Loader";

const Home = ({ userDetails, isLoading }) => {
  const [showId, setShowId] = useState(false);
  console.log("This is userDetail", userDetails);
  console.log(userDetails?.profile?.img_url);

  return (
    <div className="w-full min-h-[65vh] space-y-6">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between ">
            <div className="flex w-full gap-4 md:gap-6 items-center ">
              <img
                src={
                  userDetails?.profile?.img_url === ""
                    ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    : userDetails?.profile?.img_url
                }
                alt=""
                className="rounded-2xl w-32 h-36 object-cover bg-[#ddd]"
              />
              <div>
                <p className="text-sm text-[#666666] font-semibold">Student</p>
                <h2 className=" font-semibold text-lg md:text-2xl md:hidden">
                  {`${userDetails?.profile?.fullName?.split(" ")[0]} ${
                    userDetails?.profile?.fullName?.split(" ")[1]
                  } ${
                    userDetails?.profile?.fullName?.split(" ").length > 2
                      ? userDetails?.profile?.fullName?.split(" ")[2][0] + "."
                      : ""
                  }`}
                </h2>
                <h2 className=" font-semibold text-2xl hidden md:block">
                  {userDetails?.profile?.fullName}
                </h2>
                <p className={`font-semibold text-base md:text-lg`}>
                  {userDetails?.profile?.matric_no}
                </p>
                {/* <button
                  onClick={() => {
                    setShowId(!showId);
                  }}
                  disabled={
                    Object.keys(userDetails?.bedspace).length === 0 ||
                    !userDetails?.bedspace?.paid
                      ? true
                      : false
                  }
                  className={`w-fit mt-2 rounded-2xl flex md:hidden items-center gap-4 cursor-pointer group border py-2 md:py-3 px-5 hover:bg-[#CFDEFD] whitespace-nowrap font-medium group-hover:text-custom-blue ${
                    Object.keys(userDetails?.bedspace).length === 0 ||
                    !userDetails?.bedspace?.paid
                      ? "pointer-events-none text-[#6d6d6d]"
                      : ""
                  }`}>
                  View ID
                </button> */}
              </div>
            </div>
            {/* <button
              onClick={() => {
                setShowId(!showId);
              }}
              disabled={
                Object.keys(userDetails?.bedspace).length === 0 ||
                !userDetails?.bedspace?.paid
                  ? true
                  : false
              }
              className={`w-fit hidden rounded-2xl md:flex items-center gap-4 cursor-pointer group border py-3 px-5 hover:bg-[#CFDEFD] whitespace-nowrap font-medium group-hover:text-custom-blue ${
                Object.keys(userDetails?.bedspace).length === 0 ||
                !userDetails?.bedspace?.paid
                  ? "pointer-events-none text-[#6d6d6d]"
                  : ""
              }`}>
              View ID
            </button> */}
          </div>
          <hr className="bg-[#CFDEFD]" />
          <div className="space-y-4">
            {/* <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Gender</p>
              <p className="font-medium">
                {userDetails?.sex === "M" ? "Male" : "Female"}
              </p>
            </div> */}
            {/* <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Session</p>
              <p className="font-medium">{userDetails?.profile?.session}</p>
            </div> */}
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Level</p>
              <p className="font-medium">{`${userDetails?.profile?.part}00`}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Department</p>
              <p className="font-medium">{userDetails?.profile?.dept}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Faculty</p>
              <p className="font-medium">{userDetails?.profile?.faculty}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Matric Number</p>
              <p className={`font-medium`}>{userDetails?.profile?.matric_no}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Hostel</p>
              <p
                className={`font-medium capitalize ${
                  Object.keys(userDetails?.bedspace).length === 0 &&
                  "text-[#D10C0C]"
                } `}>
                {Object.keys(userDetails?.bedspace).length !== 0
                  ? userDetails?.bedspace?.room_detail?.hostel_name === "PG"
                    ? "Post Graduate Hall"
                    : `${userDetails?.bedspace?.room_detail?.hostel_name} Hall`
                  : "Unavailable"}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Block</p>
              <p
                className={`font-medium ${
                  Object.keys(userDetails?.bedspace).length === 0 &&
                  "text-[#D10C0C]"
                } `}>
                {Object.keys(userDetails?.bedspace).length !== 0
                  ? userDetails?.bedspace?.room_detail?.block
                  : "Unavailable"}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Room</p>
              <p
                className={`font-medium ${
                  Object.keys(userDetails?.bedspace).length === 0 &&
                  "text-[#D10C0C]"
                } `}>
                {Object.keys(userDetails?.bedspace).length !== 0
                  ? userDetails?.bedspace?.room_detail?.roomNo
                  : "Unavailable"}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Bed Space</p>
              <p
                className={`font-medium ${
                  Object.keys(userDetails?.bedspace).length === 0 &&
                  "text-[#D10C0C]"
                } `}>
                {Object.keys(userDetails?.bedspace).length !== 0
                  ? userDetails?.bedspace?.room_detail?.bedNo
                  : "Unavailable"}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Payment Status</p>
              <p className="font-medium">
                {userDetails?.bedspace?.paid === undefined
                  ? "None"
                  : userDetails?.bedspace?.paid
                  ? "Paid"
                  : "Unpaid"}
              </p>
            </div>
          </div>
          {showId && (
            <IdCard
              showId={showId}
              setShowId={setShowId}
              userDetails={userDetails}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
