import { useEffect, useState } from "react";
import image from "./Image";
import { useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

function Navbar({ showSideBar, setShowSideBar }) {
  const location = useLocation().pathname;
  console.log(location);

  const [currentPath, setCurrentPath] = useState("Home");

  useEffect(() => {
    setCurrentPath(location);
    switch (location) {
      case "/":
        setCurrentPath("Home");
        break;
      case "/dashboard/bedspace-request":
        setCurrentPath("Bedspace Request");
        break;
      case "/dashboard/rules-and-regulations":
        setCurrentPath("Rules and Regulations");
        break;
      case "/dashboard/payment":
        setCurrentPath("Payment");
        break;
      default:
        setCurrentPath("Home");
        break;
    }
  }, [location]);

  return (
    <div className="fixed top-0 md:pl-[370px] left-0 right-0 mx-auto flex border-b md:border-none items-center md:px-10 py-3 sm:py-6 w-full bg-white md:shadow-lg box-border">
      <div className="w-11/12 mx-auto md:w-full flex items-center justify-between md:justify-normal gap-4">
        <div className="md:hidden relative z-50">
          <Hamburger size={25} toggled={showSideBar} toggle={setShowSideBar} />
        </div>
        <p className="text-lg font-semibold hidden md:block">{currentPath}</p>
        <p className="text-base font-semibold md:hidden block text-center">
          OAU Student's Hostel Portal
        </p>
        <img
          src={image.oaulogo}
          className="h-12 md:hidden w-fit"
          alt="oau logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
