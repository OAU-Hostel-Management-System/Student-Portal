import React from "react";
import image from "./Image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";
import { cn } from "../libs/utils/utils";

const IdCard = ({ showId, setShowId, userDetails }) => {
  return (
    <Card className="fixed border bottom-0 right-0 left-0 m-auto flex items-center justify-center w-screen h-screen z-50 border-1 p-0 shadow-none bg-[rgba(0,0,0,.3)] backdrop-blur outline-none ">
      <CardContent className="p-0">
        <div className="w-[480px] py-2 px-2.5 bg-white shadow-md rounded-2xl">
          <div className="w-full flex justify-between relative">
            <p
              onClick={() => {
                setShowId(false);
              }}
              className="px-2 py-1 font-bold cursor-pointer bg-white hover:bg-black hover:text-custom-blue absolute right-2 z-50 rounded-full">
              X
            </p>
            <div className=" h-[82px] bg-[#3EAC7E] -top-4 -left-2.5 mx-auto absolute z-10 rounded-t-2xl w-[480px]"></div>
            <img
              src={image.awolowoimage}
              className="w-[90px] h-[90px] bg-white mt-2 ml-2 rounded-2xl z-[11] object-contain pt-4"
            />
            <div className="font-semibold">
              <h2 className=" text-xl font-black mt-2 text-center relative z-[11] uppercase">
                Obafemi Awolowo <br /> University, Ile-Ife
              </h2>
            </div>
            <img
              src={image.oauidimage}
              className="w-[90px] h-[90px] bg-white mt-2 mr-2 rounded-2xl z-[11] object-contain pt-2"
            />
          </div>
          <p className="text-center max-w-xs mx-auto font-bold -mt-6">
            {userDetails?.room?.hostel_name !== "PG" ? (
              <>
                <p className="uppercase">{userDetails?.room?.hostel_name}</p>
                <p>(The hall of excellence)</p>
              </>
            ) : (
              <>
                <p>
                  MURITALA MUHAMMED <br /> Post Graduate Hall
                  <span className="text-sm text-[#FE3838]">
                  {" "}
                  (The hall of excellence)
                </span>
                </p>
                
              </>
            )}
          </p>
          <div className="w-fit mx-auto bg-[#FE3838] p-1 mt-2 mb-4">
            <p className=" border-2 text-sm bg-[#FE3838] border-white px-6 py-1 w-fit mx-auto text-white">
              IDENTIFICATION CARD
            </p>
          </div>
          <div className="flex justify-between pb-4 px-4">
            <div className="border-2 border-[#18623E] w-[280px] rounded-xl overflow-hidden">
              <div className="border-b-2 border-black flex items-end gap-1.5">
                <p className=" font-semibold bg-[#18623E] text-white px-2 py-0.5 rounded-md ">
                  Name:
                </p>
                <p className="text-sm">{userDetails?.fullName}</p>
              </div>
              <div className="border-b-2 border-black flex items-end gap-1.5">
                <p className=" font-semibold bg-[#18623E] text-white px-2 py-0.5 rounded-md ">
                  Reg No:
                </p>
                <p className="text-sm">{userDetails?.matricNo}</p>
              </div>

              <div className="border-b-2 border-black flex items-end gap-1.5">
                <p className=" font-semibold bg-[#18623E] text-white px-2 py-0.5 rounded-md ">
                  Session:
                </p>
                <p className="text-sm">{userDetails?.session}</p>
              </div>
              <div className="border-b-2 border-black flex items-end gap-1.5">
                <p className=" font-semibold bg-[#18623E] text-white px-2 py-0.5 rounded-md ">
                  Department:
                </p>
                <p className="text-sm">{userDetails?.dept}</p>
              </div>
              <div className="border-b-2 border-black flex items-end gap-1.5">
                <p className=" font-semibold bg-[#18623E] text-white px-2 py-0.5 rounded-md ">
                  Room:
                </p>
                <p className="text-sm">
                  Block {userDetails?.room?.block}, Room{" "}
                  {userDetails?.room?.roomNo}
                </p>
              </div>
              <div className="flex items-end gap-1.5 relative">
                <p className=" font-semibold bg-[#18623E] text-white px-2 py-0.5 rounded-md ">
                  Signature:
                </p>
                <p className="text-sm"></p>
                <p className="px-1.5 pt-0.5 h-full bg-[#18623E] rounded-ee-lg  text-white absolute top-0 bottom-0 -right-0.5">
                  {userDetails?.sex}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-2 border-[#18623E] h-full w-32 rounded-xl overflow-hidden">
                <img
                  src={userDetails?.image_url}
                  alt="student passport"
                  className=" h-full w-32 scale-110 object-contain object-center"
                />
              </div>
              {/* <div className="border-2 border-[#18623E] h-10 w-32  rounded-xl flex items-center justify-end ">
                
              </div> */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IdCard;
