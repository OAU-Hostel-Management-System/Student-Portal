import { NavLink, useNavigate } from "react-router-dom";
import image from "./Image";
import useAuth from "../hooks/UseAuth";

function Sidebar() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logoutUser = ()=>{
    setAuth({});
    navigate("/login", { replace: true });
  }

  return (
    <div className="fixed flex flex-col bg-white border-r h-screen w-[350px] pt-5 z-40">
      <div className="mb-5 text-center h-fit">
        <img src={image.oaulogo} className="mx-auto h-36" alt="oau logo" />
        <span className="font-semibold">Obafemi Awolowo University</span> <br />
        <span className="font-semibold text-sm">Hostel Management Portal</span>
      </div>
      <ul
        id=""
        className="innerSidebar h-fit scroll-smooth pb-10">
        <li className="">
          <NavLink
            to="/"
            className="w-full flex gap-4 items-center py-6 hover:border-r-4 hover:font-light group pl-10 hover:text-[#113885] hover:border-r-[#113885] hover:bg-[#CFDEFD] cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 36 30"
              className="group-active:fill-[#113885] group-hover:fill-[#113885]"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0C18 0 6.8652 8.73683 0.6426 13.4685C0.444595 13.6253 0.285066 13.8182 0.174363 14.0347C0.0636598 14.2511 0.00425451 14.4863 0 14.725C0 15.1589 0.189642 15.5751 0.527208 15.8819C0.864773 16.1887 1.32261 16.3611 1.8 16.3611H5.4V27.8139C5.4 28.2478 5.58964 28.664 5.92721 28.9708C6.26477 29.2776 6.72261 29.45 7.2 29.45H12.6C13.0774 29.45 13.5352 29.2776 13.8728 28.9708C14.2104 28.664 14.4 28.2478 14.4 27.8139V21.2694H21.6V27.8139C21.6 28.2478 21.7896 28.664 22.1272 28.9708C22.4648 29.2776 22.9226 29.45 23.4 29.45H28.8C29.2774 29.45 29.7352 29.2776 30.0728 28.9708C30.4104 28.664 30.6 28.2478 30.6 27.8139V16.3611H34.2C34.6774 16.3611 35.1352 16.1887 35.4728 15.8819C35.8104 15.5751 36 15.1589 36 14.725C35.9975 14.4817 35.9341 14.2422 35.8147 14.0245C35.6952 13.8068 35.5229 13.6167 35.3106 13.4685C29.1312 8.73683 18 0 18 0Z" />
            </svg>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/bedspace-request"
            className="w-full flex gap-4 items-center py-6 hover:border-r-4 hover:font-light group pl-10 hover:text-[#113885] hover:border-r-[#113885] active:text-[#113885] active:border-r-[#113885] cursor-pointer hover:bg-[#CFDEFD]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 34 23"
              className="group-hover:fill-[#113885]"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M27.5 3.5H15.5V14H3.5V0.5H0.5V23H3.5V18.5H30.5V23H33.5V9.5C33.5 7.9087 32.8679 6.38258 31.7426 5.25736C30.6174 4.13214 29.0913 3.5 27.5 3.5ZM9.5 12.5C10.6935 12.5 11.8381 12.0259 12.682 11.182C13.5259 10.3381 14 9.19347 14 8C14 6.80653 13.5259 5.66193 12.682 4.81802C11.8381 3.97411 10.6935 3.5 9.5 3.5C8.30653 3.5 7.16193 3.97411 6.31802 4.81802C5.47411 5.66193 5 6.80653 5 8C5 9.19347 5.47411 10.3381 6.31802 11.182C7.16193 12.0259 8.30653 12.5 9.5 12.5Z" />
            </svg>
            BedSpace Requests
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/rules-and-regulations"
            className="w-full flex gap-4 items-center py-6 hover:border-r-4 hover:font-light group pl-10 hover:text-[#113885] hover:border-r-[#113885] active:text-[#113885] active:border-r-[#113885] cursor-pointer hover:bg-[#CFDEFD]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 36 30"
              className={"group-hover:fill-[#113885]"}
              xmlns="http://www.w3.org/2000/svg">
              <path d="M33.4286 4.53078H15.9686L12.9986 0.928815C12.7592 0.640211 12.4457 0.405606 12.0837 0.244178C11.7217 0.0827502 11.3214 -0.000919698 10.9157 7.62485e-06H2.57143C1.88944 7.62485e-06 1.23539 0.238681 0.753154 0.663523C0.270917 1.08836 0 1.66457 0 2.26539V27.1846C0 27.7854 0.270917 28.3616 0.753154 28.7865C1.23539 29.2113 1.88944 29.45 2.57143 29.45H33.4286C34.1106 29.45 34.7646 29.2113 35.2468 28.7865C35.7291 28.3616 36 27.7854 36 27.1846V6.79616C36 6.19534 35.7291 5.61913 35.2468 5.19429C34.7646 4.76945 34.1106 4.53078 33.4286 4.53078ZM2.57143 6.79616V2.26539H10.9157L14.4129 6.79616H2.57143Z" />
            </svg>
            Rules & Regulations
          </NavLink>
        </li>
        {/* <li>
          <button
            onClick={toggleReportDropdown}
            className={
              "w-full flex justify-between items-center py-6 border-r-4 border-r-transparent hover:font-light group px-10 hover:text-[#113885] hover:border-r-[#113885] active:text-[#113885] active:border-r-[#113885] cursor-pointer hover:bg-[#CFDEFD]"
            }>
            <span className="flex items-center gap-4 w-fit">
              <svg
                width="20"
                height="20"
                viewBox="0 0 36 30"
                className={"group-hover:fill-[#113885]"}
                xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4286 4.53078H15.9686L12.9986 0.928815C12.7592 0.640211 12.4457 0.405606 12.0837 0.244178C11.7217 0.0827502 11.3214 -0.000919698 10.9157 7.62485e-06H2.57143C1.88944 7.62485e-06 1.23539 0.238681 0.753154 0.663523C0.270917 1.08836 0 1.66457 0 2.26539V27.1846C0 27.7854 0.270917 28.3616 0.753154 28.7865C1.23539 29.2113 1.88944 29.45 2.57143 29.45H33.4286C34.1106 29.45 34.7646 29.2113 35.2468 28.7865C35.7291 28.3616 36 27.7854 36 27.1846V6.79616C36 6.19534 35.7291 5.61913 35.2468 5.19429C34.7646 4.76945 34.1106 4.53078 33.4286 4.53078ZM2.57143 6.79616V2.26539H10.9157L14.4129 6.79616H2.57143Z" />
              </svg>
              Reports
            </span>
            <span>
              {!isReportDropdownOpen ? (
                <IoIosArrowDown className="group-hover:fill-custom-blue text-xl transition-all duration-300 ease-in" />
              ) : (
                <IoIosArrowUp className="group-hover:fill-custom-blue text-xl transition-all duration-300 ease-in" />
              )}
            </span>
          </button>
          <ul
            className={
              !isReportDropdownOpen
                ? "w-full h-0 opacity-5 overflow-hidden transition-all duration-300 ease-in "
                : " transition-all duration-300 ease-in h-fit opacity-100"
            }>
            <li>
              <NavLink
                to="/request-information"
                className="w-full flex gap-4 items-center py-6 hover:border-r-4 hover:font-light group pl-10 hover:text-[#113885] hover:border-r-[#113885] active:text-[#113885] active:border-r-[#113885] cursor-pointer hover:bg-[#CFDEFD]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 20"
                  className="group-hover:fill-[#113885]"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.3976 0.258942C4.11888 0.258942 2.89253 0.67449 1.98834 1.41417C1.08414 2.15385 0.576172 3.15707 0.576172 4.20314V4.99198H31.4282V4.20314C31.4282 3.15707 30.9202 2.15385 30.016 1.41417C29.1118 0.67449 27.8855 0.258942 26.6067 0.258942H5.3976ZM0.576172 15.2469V6.56966H31.4282V15.2469C31.4282 16.293 30.9202 17.2962 30.016 18.0359C29.1118 18.7755 27.8855 19.1911 26.6067 19.1911H5.39889C4.12016 19.1911 2.89381 18.7755 1.98962 18.0359C1.08543 17.2962 0.577458 16.293 0.577458 15.2469H0.576172ZM21.4639 12.3545C21.2081 12.3545 20.9629 12.4376 20.782 12.5855C20.6012 12.7335 20.4996 12.9341 20.4996 13.1433C20.4996 13.3525 20.6012 13.5532 20.782 13.7011C20.9629 13.849 21.2081 13.9322 21.4639 13.9322H25.9639C26.2196 13.9322 26.4649 13.849 26.6457 13.7011C26.8266 13.5532 26.9282 13.3525 26.9282 13.1433C26.9282 12.9341 26.8266 12.7335 26.6457 12.5855C26.4649 12.4376 26.2196 12.3545 25.9639 12.3545H21.4639Z" />
                </svg>
                Rules & Regulations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/place-requests"
                className="w-full flex gap-4 items-center py-6 hover:border-r-4 hover:font-light group pl-10 hover:text-[#113885] hover:border-r-[#113885] active:text-[#113885] active:border-r-[#113885] cursor-pointer hover:bg-[#CFDEFD]">
                <FaFileCircleQuestion />
                
              </NavLink>
            </li>
          </ul>
        </li> */}
        <li>
          <NavLink
            to="/dashboard/payment"
            className="w-full flex gap-4 items-center py-6 hover:border-r-4 hover:font-light group pl-10 hover:text-[#113885] hover:border-r-[#113885] active:text-[#113885] active:border-r-[#113885] cursor-pointer hover:bg-[#CFDEFD]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 20"
              className="group-hover:fill-[#113885]"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5.3976 0.258942C4.11888 0.258942 2.89253 0.67449 1.98834 1.41417C1.08414 2.15385 0.576172 3.15707 0.576172 4.20314V4.99198H31.4282V4.20314C31.4282 3.15707 30.9202 2.15385 30.016 1.41417C29.1118 0.67449 27.8855 0.258942 26.6067 0.258942H5.3976ZM0.576172 15.2469V6.56966H31.4282V15.2469C31.4282 16.293 30.9202 17.2962 30.016 18.0359C29.1118 18.7755 27.8855 19.1911 26.6067 19.1911H5.39889C4.12016 19.1911 2.89381 18.7755 1.98962 18.0359C1.08543 17.2962 0.577458 16.293 0.577458 15.2469H0.576172ZM21.4639 12.3545C21.2081 12.3545 20.9629 12.4376 20.782 12.5855C20.6012 12.7335 20.4996 12.9341 20.4996 13.1433C20.4996 13.3525 20.6012 13.5532 20.782 13.7011C20.9629 13.849 21.2081 13.9322 21.4639 13.9322H25.9639C26.2196 13.9322 26.4649 13.849 26.6457 13.7011C26.8266 13.5532 26.9282 13.3525 26.9282 13.1433C26.9282 12.9341 26.8266 12.7335 26.6457 12.5855C26.4649 12.4376 26.2196 12.3545 25.9639 12.3545H21.4639Z" />
            </svg>
            Payment
          </NavLink>
        </li>
        <li>
          <p
            to="/dashboard/logout"
            onClick={logoutUser}
            className="w-full flex gap-4 items-center py-6 pl-10 hover:font-light group hover:bg-red-100 hover:text-red-500 cursor-pointer hover:border-r-red-500">
            <svg
              width="20"
              height="20"
              viewBox="0 0 36 30"
              className="group-hover:fill-red-500"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4 29.4545C2.9 29.4545 1.958 29.1338 1.174 28.4924C0.390003 27.8509 -0.00132994 27.0807 3.39559e-06 26.1818V3.27273C3.39559e-06 2.37273 0.392003 1.602 1.176 0.960548C1.96 0.319093 2.90134 -0.00108813 4 2.77821e-06H18V3.27273H4V26.1818H18V29.4545H4ZM26 22.9091L23.25 20.5364L28.35 16.3636H12V13.0909H28.35L23.25 8.91818L26 6.54546L36 14.7273L26 22.9091Z" />
            </svg>
            Logout
          </p>
        </li>
      </ul>
      {/* </Scrollbar> */}
    </div>
  );
}

export default Sidebar;
