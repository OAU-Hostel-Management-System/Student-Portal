import React, { useState } from "react";
import IdCard from "../components/IdCard";
import ReactLoading from "react-loading";

const Home = ({ userDetails, isLoading }) => {
  const [showId, setShowId] = useState(false);

  console.log(userDetails);
  console.log("Loading State", isLoading);
  console.log(userDetails?.room?.users_paid)

  return (
    <div className="w-full min-h-[65vh] space-y-6">
      {isLoading ? (
        <div className="w-full min-h-[65vh] flex justify-center items-center">
          <ReactLoading
            type="spin"
            color="#113885"
            width={"50px"}
            height={"50px"}
          />
        </div>
      ) : (
        <>
          <div className="flex gap-6 items-center justify-between ">
            <div className="flex gap-6 items-center ">
              <img
                src={userDetails?.image_url}
                alt=""
                className="rounded-2xl w-32 h-32 object-cover"
              />
              <div>
                <p className="text-sm text-[#666666] font-semibold">Student</p>
                <h2 className=" font-semibold text-2xl md:hidden">
                  {`${userDetails?.fullName?.split(" ")[0]} ${
                    userDetails?.fullName?.split(" ")[1]
                  } ${userDetails?.fullName?.split(" ")[2][0]}.`}
                </h2>
                <h2 className=" font-semibold text-2xl hidden md:block">
                  {userDetails?.fullName}
                </h2>
                <p className={`font-semibold text-lg ${Object.keys(userDetails?.room).length === 0 && "text-[#D10C0C]"} `}>
                  {Object.keys(userDetails?.room).length === 0 ? "No Room Allocated" : userDetails?.room?.hostel_name + " Hall"} 
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowId(!showId);
              }}
              disabled={Object.keys(userDetails?.room).length === 0 || !userDetails?.room?.users_paid ? true : false}
              className={`w-fit rounded-2xl flex items-center gap-4 cursor-pointer group border py-3 px-5 hover:bg-[#CFDEFD] whitespace-nowrap font-medium group-hover:text-custom-blue ${Object.keys(userDetails?.room).length === 0 || !userDetails?.room?.users_paid ? "pointer-events-none text-[#6d6d6d]" : ""}`}>
              View ID
            </button>
          </div>
          <hr className="bg-[#CFDEFD]" />
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Gender</p>
              <p className="font-medium">
                {userDetails?.sex === "M" ? "Male" : "Female"}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Session</p>
              <p className="font-medium">{userDetails?.session}</p>
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
              <p className={`font-medium`}>{userDetails?.matricNo}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Hostel</p>
              <p className={`font-medium ${Object.keys(userDetails?.room).length === 0 && "text-[#D10C0C]"} `}>{Object.keys(userDetails?.room).length !== 0 ? userDetails?.room?.hostel_name === "PG" ? "Post Graduate Hall" : `${userDetails?.room?.hostel_name} Hall` : "Unavailable"}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Block</p>
              <p className={`font-medium ${Object.keys(userDetails?.room).length === 0 && "text-[#D10C0C]"} `}>{Object.keys(userDetails?.room).length !== 0 ? userDetails?.room?.block : "Unavailable"}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Room</p>
              <p className={`font-medium ${Object.keys(userDetails?.room).length === 0 && "text-[#D10C0C]"} `}>{Object.keys(userDetails?.room).length !== 0 ? userDetails?.room?.roomNo : "Unavailable"}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Bed Space</p>
              <p className={`font-medium ${Object.keys(userDetails?.room).length === 0 && "text-[#D10C0C]"} `}>{Object.keys(userDetails?.room).length !== 0 ? userDetails?.room?.bedNo : "Unavailable"}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-custom-ash">Payment Status</p>
              <p className="font-medium">
                {userDetails?.room?.users_paid === undefined ? "None" : userDetails?.room?.users_paid ? "Paid" : "Unpaid"}
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
