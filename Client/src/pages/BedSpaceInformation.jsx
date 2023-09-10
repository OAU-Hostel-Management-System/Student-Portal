import React from "react";

const BedspaceInformation = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-3xl text-black">
        PROCEDURES FOR ALLOCATION & OCCUPATION OF BED SPACE
      </h2>
      <ul className=" list-disc list-outside ml-4 space-y-4">
        <li>
          Allocation of Bedspace All Students will be allocated bedspaces by the
          ePortal on a first come-first-served basis
        </li>
        <li>
          Occupation of bedspace Upon successfully allocated a bedspace, you are
          required to carry out the following within one month:
          <ul className=" list-disc list-outside ml-8 space-y-2">
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
        </li>
        <li>
          Application for Bedspace From the students profile page on the
          E-PORTAL, simply click on "Request for Bed Space" under the
          INFORMATION ON ACCOMMODATION section of the profile page. The system
          will respond to your request if you meet the conditions for allocation
          of bedspaces stated above and subject to availability of bedspaces for
          the category of the students. Forfeiting Award of Bedspace You will
          forfeit your award of Bed Space on the following conditions:
          <ul className="list-disc list-outside ml-8 space-y-2">
            <li>
              Failure to pay the all appropriate fees at most one week before
              resumption of 2018/2019 session
            </li>
            <li>
              Failure to submit the "Bedspace Clearance Form" to the DSA and
              hall warden within a period of time to be determined by the Dean,
              Students Affairs Each of the above will lead to losing the
              bedspace to the pool for other students who need them.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default BedspaceInformation;
