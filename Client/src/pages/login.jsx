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
    console.log(userDetails);
    try {
      const response = await axios.post(endpoint, JSON.stringify(userDetails), {
        headers: {
          "Content-Type": "application/json",
        }
      });
      console.log(response);

      const username = userDetails.username;
      const password = userDetails.password;
      const token = response?.data?.token;
      console.log(token, username, password);
      if (response.status === 200) {
        setAuth({ username, password, token });
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
    <div className="flex w-full">
      {/* LHS logo container  */}
      <div className="hidden sm:flex bg-[#113885] border-black rounded-r-[5rem] w-1/2 h-screen flex-col justify-center items-center">
        <img src={image.oaulogo} alt="" className="w-80 p-8" />
        <p className=" text-lg sm:text-3xl text-white pb-6 font-bold">
          Obafemi Awolowo University
        </p>
        <p className="sm:text-2xl text-white font-bold">
          Hostel Management Portal
        </p>
      </div>
      {/* RHS form  */}
      <div className="w-full sm:w-1/2 h-screen flex flex-col justify-center items-center">
        <form
          method="post"
          className="flex flex-col items-center justify-center w-11/12 sm:w-1/2">
          <h1 className="font-bold text-3xl md:text-4xl mb-6">Login</h1>
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
            className="text-white font-bold bg-[#113885] w-full p-2 rounded-md flex items-center justify-center h-10 ">
            {!isLoading ? (
              "Login"
            ) : (
              <ReactLoading type="spin" width={"20px"} height={"20px"} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
