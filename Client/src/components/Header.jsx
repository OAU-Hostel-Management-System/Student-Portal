import React from "react";
import image from "../components/Image";

const Header = () => {
  return (
    <nav className="fixed w-full top-0 bg-white">
      <div className="flex items-center justify-center w-11/12 mx-auto">
        <img
          src={image.oaulogo}
          alt=""
          className="w-20 sm:w-24 p-2 md:w-28"
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
