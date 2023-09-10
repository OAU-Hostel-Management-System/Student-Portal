import React from "react";
import image from "../components/Image";

const Home = () => {
  return (
    <div className="w-full h-full space-y-6">
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
        <div className=" rounded-2xl flex items-center gap-4 cursor-pointer group border py-3 px-6 hover:bg-[#CFDEFD]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 22 22"
            fill="none"
            className=" hover:stroke-custom-blue"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.9395 8.40741H21.0001V1"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 8.40741C17.5612 3.46963 14.1273 1 10.697 1C7.26667 1 4.23636 2.48148 1.60606 5.44444M7.06061 13.5926H1V21"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 13.5926C4.43879 18.5304 7.87273 21 11.303 21C14.7333 21 17.7636 19.5185 20.3939 16.5556"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="font-medium group-hover:text-custom-blue">ID Card</p>
        </div>
      </div>
      <hr className="bg-[#CFDEFD]" />
      <div className="space-y-4">
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
    </div>
  );
};

export default Home;
