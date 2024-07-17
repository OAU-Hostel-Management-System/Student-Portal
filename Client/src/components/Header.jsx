import React from "react";
import image from "../components/Image";

const Header = () => {
  return (
    <nav className="fixed w-full top-0">
      <div className="flex items-center bg-white border-black rounded-b-[5rem] md:rounded-none md:rounded-r-[5rem] justify-center py-2">
        <img
          src={image.oaulogo}
          alt=""
          className="w-24 sm:w-40 p-2 md:w-28 md:p-4"
        />
        <div className="">
          <p className=" text-lg sm:text-xl md:text-2xl lg:text-3x font-bold">
            Obafemi Awolowo University
          </p>
          <p className="text-base sm:text-lg md:text-xl font-bold">
            Hostel Management Portal
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
