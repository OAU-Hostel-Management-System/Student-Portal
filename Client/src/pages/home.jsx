import React, { useState } from "react";
import image from "../components/Image";
import IdCard from "../components/IdCard";

const Home = () => {
  const [showId, setShowId] = useState(false);
  
  return (
    <div className="w-full min-h-[65vh] space-y-6">
      <div className="flex gap-6 items-center justify-between ">
        <div className="flex gap-6 items-center">
          <img
            src={image.imageprofile}
            alt=""
            className="rounded-full w-32 h-32"
          />
          <div>
            <p className="text-sm text-[#666666] font-semibold">Student</p>
            <h2 className=" font-semibold text-2xl">Umoh Samuel</h2>
            <p className="font-semibold text-lg">Angola Hall of Residence</p>
          </div>
        </div>
        <div onClick={()=>{setShowId(!showId)}} className=" rounded-2xl flex items-center gap-4 cursor-pointer group border py-3 px-6 hover:bg-[#CFDEFD]">
          <p className="font-medium group-hover:text-custom-blue">View ID</p>
        </div>
      </div>
      <hr className="bg-[#CFDEFD]" />
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className=" text-custom-ash">Gender</p>
          <p className="font-medium">Male</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-custom-ash">Department</p>
          <p className="font-medium">Computer Science</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-custom-ash">Faculty</p>
          <p className="font-medium">Technology</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-custom-ash">Matric Number</p>
          <p className="font-medium">CSC/2018/419</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-custom-ash">Hostel</p>
          <p className="font-medium">Angola</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-custom-ash">Block</p>
          <p className="font-medium">1B</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-custom-ash">Room</p>
          <p className="font-medium">3A</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-custom-ash">Payment Status</p>
          <p className="font-medium">Successful</p>
        </div>
      </div>
      {showId && <IdCard showId={showId} setShowId={setShowId} />}
    </div>
  );
};

export default Home;
