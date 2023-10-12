import { useState } from "react";
import image from "../components/Image";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";
import useAuth from "../hooks/UseAuth";
const endpoint = "https://hmsbackend-c36l.onrender.com/auth/signin";

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [err, setErr] = useState(false);

  const handleChange = e => {
    setErr(false);
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(endpoint, JSON.stringify(userDetails), {
        headers: {
          "Content-Type": "application/json",
        }
      });

      const username = userDetails.username;
      const token = response?.data?.token;
      if (response.status === 200) {
        setAuth({ username, token });
        setErr(false);
        setUserDetails({});
        setIsLoading(false);
        navigate(from, { replace: true });
      }
    } catch (error) {
      setIsLoading(false);
      setErr(true);
      console.log(error);
      if (!error?.response) {
        setErrorMessage("No server response");
      } else if (error.response?.status === 400) {
        setErrorMessage("Incorrect Username or Password");
      } else {
        setErrorMessage("Login Failed");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen md:h-screen pb-20 md:flex-row w-full gap-14 md:gap-0">
      {/* LHS logo container  */}
      <div className="flex bg-[#113885] border-black rounded-b-[5rem] md:rounded-none md:rounded-r-[5rem]  md:w-1/2 md:h-screen flex-col justify-center items-center py-5 md:py-0">
        <img src={image.oaulogo} alt="" className="w-24 sm:w-40 p-2 md:w-72 md:p-4 " />
        <p className=" text-lg sm:text-xl md:text-2xl lg:text-3xl text-white sm:pb-1 md:pb-3 font-bold">
          Obafemi Awolowo University
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold">
          Hostel Management Portal
        </p>
      </div>
      {/* RHS form  */}
      <div className="w-full h-full md:w-1/2 md:h-screen flex flex-col justify-center items-center">
        <form
          method="post"
          className="flex flex-col items-center justify-center w-11/12 sm:w-8/12 md:w-1/2">
          <h1 className="font-bold text-3xl md:text-4xl mb-2 sm:mb-6 text-[#113885]">Login</h1>
          <p className="mb-6 text-[#D10C0C]">{errorMessage}</p>
          <label htmlFor="username" className="text-left w-full mb-1.5">
            Matric Number
          </label>
          <input
            type="text"
            name="username"
            required
            placeholder="Matric Number"
            onChange={handleChange}
            className="mb-6 border border-[#666666] rounded-md w-full px-4 py-2.5 outline-[#113885]"
          />
          <label htmlFor="password" className="text-left w-full mb-1.5">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={handleChange}
            className="mb-8 border border-[#666666] rounded-md w-full px-4 py-2.5 outline-[#113885]"
          />
          <button
            onClick={submitHandler}
            className="text-white font-bold bg-[#113885] w-full p-2 text-lg rounded-md flex items-center justify-center h-11 ">
            {!isLoading ? (
              "Login"
            ) : (
              <ReactLoading type="spin" width={"25px"} height={"25px"} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
