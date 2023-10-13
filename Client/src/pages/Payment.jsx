import React from "react";
import Loader from "../components/Loader";

const Payment = ({ userDetails, isLoading }) => {
  const makePayment = () => {
    console.log("here");
    // fetchStudentData();
  };
  return (
    <div className="min-h-[65vh] space-y-6 w-full">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className=" font-medium text-2xl">Payment Summary</h1>
          {Object.keys(userDetails?.room).length === 0 ? (
            <div>
              <p className="text-[#D10C0C]">No hostel allocation confirmed!</p>
            </div>
          ) : (
            <>
              <div className="space-y-2 sm:space-y-4">
                <div className="flex w-full justify-between text-lg text-[#00000099] gap-2 sm:gap-10">
                  <div className="w-2/4">
                    <label>Matric No</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="matric_no"
                      id="matric_no"
                      value={userDetails?.matricNo}
                      readOnly
                    />
                  </div>
                  <div className="w-2/4">
                    <label>Session</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="email"
                      id="email"
                      value={userDetails?.session}
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row w-full justify-between text-lg text-[#00000099] gap-2 sm:gap-10">
                  <div className="sm:w-2/4">
                    <label>Name</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="name"
                      id="name"
                      value={userDetails?.fullName}
                      readOnly
                    />
                  </div>
                  <div className="sm:w-2/4">
                    <label>Department</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="department"
                      id="department"
                      value={userDetails?.dept}
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between text-lg text-[#00000099] gap-2 sm:gap-10">
                  <div className="w-2/4">
                    <label>Hostel</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="hostel"
                      id="hostel"
                      value={
                        userDetails?.room !== ""
                          ? userDetails?.room?.hostel_name === "PG"
                            ? "Post Graduate Hall"
                            : `${userDetails?.room?.hostel_name} Hall`
                          : "Unavailable"
                      }
                      readOnly
                    />
                  </div>
                  <div className="w-2/4">
                    <label>Block</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="block"
                      id="block"
                      value={
                        userDetails?.room !== ""
                          ? userDetails?.room?.block
                          : "Unavailable"
                      }
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between text-lg text-[#00000099] gap-2 sm:gap-10">
                  <div className="w-2/4">
                    <label>Room</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="room"
                      id="room"
                      value={
                        userDetails?.room !== ""
                          ? userDetails?.room?.roomNo
                          : "Unavailable"
                      }
                      readOnly
                    />
                  </div>
                  <div className="w-2/4">
                    <label>BedSpace</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="bedspace"
                      id="bedspace"
                      value={
                        userDetails?.room !== ""
                          ? userDetails?.room?.bedNo
                          : "Unavailable"
                      }
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center items-center mt-6">
                <button
                  disabled={
                    Object.keys(userDetails?.room).length === 0 ||
                    (Object.keys(userDetails?.room).length !== 0 &&
                      userDetails?.room?.users_paid === true)
                      ? true
                      : false
                  }
                  onClick={makePayment}
                  className={`py-2.5 px-4 bg-custom-blue hover:bg-custom-ash text-white rounded-md ${
                    Object.keys(userDetails?.room).length === 0 ||
                    (Object.keys(userDetails?.room).length !== 0 &&
                      userDetails?.room?.users_paid === true)
                      ? "pointer-events-none text-[#6d6d6d] bg-[#1d1d1d] opacity-30"
                      : ""
                  }`}>
                  Proceed to Pay
                </button>
              </div>{" "}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Payment;
