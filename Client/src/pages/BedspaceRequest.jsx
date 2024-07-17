import React, { useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import axios from "axios";
const endpoint =
  "https://hmsbackend-c36l.onrender.com/student/request";

const BedspaceRequest = ({
  userDetails,
  fetchStudentData
}) => {
  const [showLoading, setShowLoading] = useState(false);
  const auth = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();
  const token = auth?.token || "";

  const handleRedirects = async () => {
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
        fetchStudentData();
        navigate("/dashboard/payment");
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
    <div className="space-y-4 min-h-[65vh]">
      {showLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="mb-3 text-lg font-bold md:text-xl">
            PROCEDURES FOR ALLOCATION & OCCUPATION OF BED SPACE
          </h1>
          <h2 className="text-base font-semibold md:text-lg">
            Allocation of Bedspace
          </h2>
          <ul className="mt-1 list-inside list-disc">
            <li className="list-disc">
              All Students will be allocated bedspaces by the ePortal on a first
              come-first-served basis
            </li>
          </ul>
          <h2 className="mt-1.5 text-base font-semibold md:text-lg">
            Occupation of bedspace
          </h2>
          Upon successfully allocated a bedspace, you are required to carry out
          the following within one month:
          <ul className="mt-1 list-inside list-disc">
            <li>
              Payment of all appropriate fees including accommodation fees
              (Please do not pay accommodation fees if you are not successful to
              get a bed space as no refund will be made for such).
            </li>
            <li>Print 3 copies of "Bedspace Clearance Form"</li>
            <li>
              Sign the "Bedspace Clearance Form" and present them to hall warden
              of the hall for signatories
            </li>
            <li>
              Submit the signed "Bedspace Clearance Form" as thus: 1 copy to
              DSA's Office, 1 copy to the hall warden and retain the last copy
            </li>
          </ul>
          <h2 className="mt-1.5 text-base font-semibold md:text-lg">
            Application for Bedspace
          </h2>
          <ul className="mt-1 list-inside list-disc">
            <li>
              From the students profile page on the E-PORTAL, simply click on
              "Request for Bed Space" under the INFORMATION ON ACCOMMODATION
              section of the profile page. The system will respond to your
              request if you meet the conditions for allocation of bedspaces
              stated above and subject to availability of bedspaces for the
              category of the students.
            </li>
          </ul>
          <h2 className="mt-1.5 text-base font-semibold md:text-lg">
            Forfeiting Award of Bedspace
          </h2>
          You will forfeit your award of Bed Space on the following conditions:
          <ul className="mt-1 list-inside list-disc">
            <li>
              Failure to pay the all appropriate fees at most one week before
              resumption of the session
            </li>
            <li>
              Failure to submit the "Bedspace Clearance Form" to the DSA and
              hall warden within a period of time to be determined by the Dean,
              Students Affairs
            </li>
            <li>
              Each of the above will lead to losing the bedspace to the pool for
              other students who need them.
            </li>
          </ul>
          <div className="flex w-full justify-center items-center mt-6">
            <button
              disabled={
                Object.keys(userDetails?.bedspace)?.length !== 0 ? true : false
              }
              onClick={handleRedirects}
              className={`py-2.5 px-4 bg-custom-blue hover:bg-custom-ash text-white rounded-md ${
                Object.keys(userDetails?.bedspace).length !== 0 &&
                "pointer-events-none text-[#6d6d6d] bg-[#1d1d1d] opacity-30"
              }`}>
              {!showLoading ? (
                "Make Request"
              ) : (
                <ReactLoading type="spin" width={"25px"} height={"25px"} />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BedspaceRequest;
