import React from "react";
const PDF_FILE_URL =
  "https://student-hms-portal.netlify.app/pdf/Hall-of-residence-basic-rules-regulations.pdf"; // Replace with your PDF content

const RulesRegulations = () => {
  const downloadPDF = () => {
    fetch(PDF_FILE_URL).then(response => {
      response.blob().then(blob => {
        const fileName = "Hall of residence basic rules regulations.pdf";
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        link.remove();
      });
    });
  };
  return (
    <div className="min-h-[65vh] w-full space-y-6">
      <div className=" space-y-6">
        <h2 className="font-medium text-2xl">Hostel Rules and Regulations</h2>
        <p>
          Below are the guidelines and policies that govern the residents of the
          university's halls of residence:
        </p>
        <ol className=" list-decimal list-outside ml-4 space-y-4">
          <li>
            <strong>COOKING IS NOT ALLOWED IN THE ROOMS</strong>
          </li>
          <li>
            Sales of Bed Space or transfer from one person to the other is not
            allowed. Sanctions for breaking this regulation are: <br /> (i)
            Compulsory fine of ₦50,000.00 <br /> (ii) Ejection from the Hall of
            residence.
          </li>
          <li>Squatters are not allowed</li>
          <li>
            There should be no defecating or urinating carelessly around the
            Halls of residence except at designated places
          </li>
          <li>
            There should be no throwing of refuse carelessly around the Hall –
            use the Dust Bins provided for such
          </li>
          <li>
            Visitors are not allowed before/beyond visiting hours and are
            expected to sign in and out of the Porters’ Lodge
          </li>
          <li>
            You are expected to keep, read and digest the{" "}
            <strong>
              {" "}
              Students’ Handbook of GENERAL INFORMATION. It is compulsory for
              all FRESH STUDENTS
            </strong>
          </li>
          <li>
            Fighting in the Hall or engaging in abusive language is not allowed
            in the Hall
          </li>
          <li>Expulsion from the University is the sanction for stealing</li>
          <li>No hanging of rags/shoes/sponge/etc. on Louvre – windows</li>
          <li>
            The use of heavy electrical appliances (such as cookers, boiling
            rings, etc.) is strictly prohibited in the Hall
          </li>
          <li>Always show your Hall Identity Card at the PORTERS’ LODGE</li>
        </ol>
        <p className=" text-red-600">
          If you agree to all the rules stated above and promise to standby
          them, kindly download the agreement form below and submit to the
          hostel wardens upon resumption to your bed space.
        </p>
      </div>
      <div className="flex w-full justify-center items-center mt-6">
        <button
          onClick={downloadPDF}
          className="py-2.5 px-4 bg-custom-blue hover:bg-custom-ash text-white rounded-md">
          Download Here
        </button>
      </div>
    </div>
  );
};

export default RulesRegulations;
