import React from "react";

const Payment = () => {
  return (
    <div className="min-h-[65vh] space-y-6 w-full">
      <h1 className=" font-medium text-2xl">Payment Summary</h1>
      <div className="space-y-4">
        <div className="flex w-full justify-between text-lg text-[#00000099] gap-10">
          <div className="w-2/4">
            <label>Matric No</label>
            <br />
            <input
              className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
              type="text"
              name="matric_no"
              id="matric_no"
              value="CSC/2018/419"
              readOnly
            />
          </div>
          <div className="w-2/4">
            <label>Email</label>
            <br />
            <input
              className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
              type="text"
              name="email"
              id="email"
              value="omoIdonTire@gmail.com"
              readOnly
            />
          </div>
        </div>
        <div className="flex w-full justify-between text-lg text-[#00000099] gap-10">
          <div className="w-2/4">
            <label>Name</label>
            <br />
            <input
              className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
              type="text"
              name="name"
              id="name"
              value="Umoh Samuel"
              readOnly
            />
          </div>
          <div className="w-2/4">
            <label>Department</label>
            <br />
            <input
              className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
              type="text"
              name="department"
              id="department"
              value="Computer with Mathematics"
              readOnly
            />
          </div>
        </div>
        <div className="flex w-full justify-between text-lg text-[#00000099] gap-10">
          <div className="w-2/4">
            <label>Hostel</label>
            <br />
            <input
              className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
              type="text"
              name="hostel"
              id="hostel"
              value="Angola Hall of Residence"
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
              value="3"
              readOnly
            />
          </div>
        </div>
        <div className="flex w-full justify-between text-lg text-[#00000099] gap-10">
          <div className="w-2/4">
            <label>Room</label>
            <br />
            <input
              className="border border-[#00000099] w-full rounded-md px-2 py-2.5 mt-1 outline-none"
              type="text"
              name="room"
              id="room"
              value="5"
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
              value="2"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center mt-6">
        <button className="py-2.5 px-4 bg-custom-blue hover:bg-custom-ash text-white rounded-md">
          Make Request
        </button>
      </div>
    </div>
  );
};

export default Payment;
