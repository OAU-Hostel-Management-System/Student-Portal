import image from "../components/Image";

function Login() {
  return (
    <div className="flex w-full">
      {/* LHS logo container  */}
      <div className="hidden sm:flex bg-[#113885] border-black rounded-r-[5rem] w-1/2 h-screen flex-col justify-center items-center">
        <img src={image.oaulogo} alt="" className="w-80  p-8" />

        <p className=" text-lg sm:text-3xl text-white pb-6 font-bold">
          Obafemi Awolowo University
        </p>
        <p className="sm:text-2xl text-white font-bold">
          Hostel Management Portal
        </p>
      </div>

      {/* RHS form  */}
      <div className="w-full sm:w-1/2 h-screen flex flex-col justify-center items-center">
        <form className="flex flex-col items-center justify-center w-1/2">
          <h1 className="font-bold text-3xl mb-24">Login</h1>
          <input
            type="text"
            placeholder="Matric No/Admin ID"
            className="mb-8 border border-[#666666] rounded-md w-full px-4 py-2 outline-[#113885]"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-8 border border-[#666666] rounded-md w-full px-4 py-2 outline-[#113885]"
          />
          <button className="text-white font-bold bg-[#113885] w-full p-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
