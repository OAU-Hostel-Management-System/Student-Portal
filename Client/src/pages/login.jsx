import { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";
import useAuth from "../hooks/UseAuth";
import Header from "../components/Header";
const endpoint = "https://hmsbackend-c36l.onrender.com/login";

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
    console.log(userDetails);
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(endpoint, JSON.stringify(userDetails), {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log(response);

      const username = userDetails.username;
      const token = response?.data?.d?.token;
      if (response.status === 200) {
        setAuth({ username, token });
        setErr(false);
        setUserDetails({});
        setIsLoading(false);
        localStorage.setItem("auth", JSON.stringify({ token: token }));
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

  const sessionsData = [
    "2023/2024",
    "2022/2023",
    "2021/2022",
    "2020/2021",
    "2019/2020",
    "2018/2019"
  ];

  const semesterData = ["Harmattan", "Rain"];

  return (
    <div className="flex flex-col min-h-screen md:h-screen justify-center items-center md:flex-row w-full gap-14 md:gap-0 bg-[#ededed]">
      <Header />
      {/* LHS logo container  */}

      {/* RHS form  */}
      <div className="w-11/12 sm:w-[400px] md:w-[500px] md:max-w-[500px] flex flex-col justify-center items-center special-shadow bg-white">
        <form
          method="post"
          className="flex flex-col items-center justify-center w-full p-10 gap-2.5">
          <p className="text-[#D10C0C]">{errorMessage}</p>

          <input
            type="text"
            name="username"
            required
            placeholder="Matric Number"
            onChange={handleChange}
            className="border border-[#666666] rounded-md w-full px-4 py-2.5 outline-[#113885]"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={handleChange}
            className=" border border-[#666666] rounded-md w-full px-4 py-2.5 outline-[#113885]"
          />
          <select
            name="session"
            id="session"
            placeholder="Session"
            onChange={handleChange}
            className=" border border-[#666666] rounded-md w-full px-4 py-2.5 outline-[#113885]">
            <option value="" className="text-[#c0bfbf] font-medium">
              Session
            </option>
            {sessionsData.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            onClick={submitHandler}
            className="text-white font-bold bg-[#3182ce] w-full p-2 text-lg rounded-md flex items-center justify-center h-11 mt-5">
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
