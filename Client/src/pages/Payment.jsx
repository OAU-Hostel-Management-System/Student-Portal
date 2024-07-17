import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const fetch_endpoint =
  "https://hmsbackend-c36l.onrender.com/student/bedspace/fetchSpaceForPayment";
const endpoint =
  "https://hmsbackend-c36l.onrender.com/student/makePayment";

const Payment = ({fetchStudentData}) => {
  const [showLoading, setShowLoading] = useState(true);
  const navigate = useNavigate();

  const auth = JSON.parse(localStorage.getItem("auth"));
  const [paymentData, setPaymentData] = useState({});
  const token = auth?.token || "";

  const fetchPaymentData = async () => {
    setShowLoading(true)
    try {
      const response = await axios.get(fetch_endpoint, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      if (response.status === 200) {
        console.log(response.data.d);
        setPaymentData(response.data.d);
        setShowLoading(false);
      }
    } catch (error) {
      console.error(error);
      setShowLoading(false);
      if (error.response && error.response.status === 403) {
        localStorage.setItem("auth", JSON.stringify({}));
        const state = { title: "Home", url: "/" };
        window.history.replaceState(state, state.title, state.url);
        navigate("/login", { replace: true });
      }
    }
  };

  useEffect(() => {
    fetchPaymentData();
  }, [token]);

  const makePayment = async () => {
    setShowLoading(true);
    try {
      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      if (response.status === 200) {
        setShowLoading(true);
        window.location.href =`${response?.data?.d?.authorization_url}`
        setShowLoading(false);
      }
    } catch (error) {
      setShowLoading(false);
      console.log(error);
      if (error.response && error.response.status === 403) {
        localStorage.setItem("auth", JSON.stringify({}));
        // Clear navigation history
        const state = { title: "Home", url: "/" };
        window.history.replaceState(state, state.title, state.url);
        navigate("/login", { replace: true });
      }
    }
  };

  return (
    <div className="min-h-[65vh] space-y-6 w-full">
      {showLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-base font-semibold md:text-lg">
            Payment Details
          </h1>
          {Object.keys(paymentData)?.length === 0 ? (
            <div>
              <p className="text-[#D10C0C]">No hostel allocated!</p>
            </div>
          ) : (
            <>
              <div className="space-y-2 sm:space-y-4">
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
                        paymentData?.bedspace?.room_detail !== ""
                          ? paymentData?.room_detail?.hostel_name ===
                            "PG"
                            ? "Post Graduate Hall"
                            : `${paymentData?.room_detail?.hostel_name} Hall`
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
                        paymentData?.room_detail !== ""
                          ? paymentData?.room_detail?.block
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
                        paymentData?.room_detail?.roomNo !== ""
                          ? paymentData?.room_detail?.roomNo
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
                        paymentData?.room_detail?.bedNo !== ""
                          ? paymentData?.room_detail?.bedNo
                          : "Unavailable"
                      }
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row w-full justify-between text-lg text-[#00000099] gap-2 sm:gap-10">
                  <div className="sm:w-2/4">
                    <label>Amount</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="amount"
                      id="amount"
                      value={paymentData?.amount}
                      readOnly
                    />
                  </div>
                  <div className="w-2/4">
                    <label>Service Charge</label>
                    <br />
                    <input
                      className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
                      type="text"
                      name="service_charge"
                      id="service_charge"
                      value={paymentData?.serviceCharge}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center items-center mt-6">
                <button
                  disabled={
                    Object.keys(paymentData).length ===
                      0 ||
                    (Object.keys(paymentData).length !==
                      0 &&
                      paymentData?.paid === true)
                      ? true
                      : false
                  }
                  onClick={makePayment}
                  className={`py-2.5 px-4 bg-custom-blue hover:bg-custom-ash text-white rounded-md ${
                    Object.keys(paymentData).length === 0 ||
                    (Object.keys(paymentData).length !== 0 &&
                      paymentData?.paid === true)
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
