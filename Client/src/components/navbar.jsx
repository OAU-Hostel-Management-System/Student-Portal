import { useEffect, useState } from "react";
import image from "./Image";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation().pathname;
  console.log(location)

  const [currentPath, setCurrentPath] = useState("Home")

  useEffect(() => {
    setCurrentPath(location)
    switch (location) {
      case "/":
        setCurrentPath("Home")
        break;
      case "/dashboard/bedspace-request":
        setCurrentPath("Bedspace Request")
        break;
      case "/dashboard/rules-and-regulations":
        setCurrentPath("Rules and Regulations")
        break;
      case "/dashboard/payment":
        setCurrentPath("Payment")
        break;
      default:
        setCurrentPath("Home")
        break;
    }
  }, [location])
  
  return (
    <div className="fixed top-0 pl-[370px] left-0 right-0 mx-auto flex items-center justify-between px-10 py-6 w-full bg-white shadow-lg">
      <p className=" font-semibold">{currentPath}</p>
      {/* <div className="gap-4 flex w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="fill-black hover:fill-[#113885] cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>

        <img src={image.imageprofile} alt="" className="rounded-full w-8 h-8" />

        <a href="">johndoe@oauife.edu.ng</a>
      </div> */}
    </div>
  );
}

export default Navbar;
