import React from "react";
import dog1 from "../images/dog1.png";
import dog2 from "../images/dog2.png";
import dog3 from "../images/dog3.png";
import dog4 from "../images/dog4.png";
export const Boxes = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 mt-8 gap-5 ">
          <div className=" h-[370px] bg-gradient-to-br from-orange-300  to-yellow-400  rounded-lg w-[200px] font-sans text-base font-extrabold text-white shadow-2xl shadow-yellow-500 rounded-r-none">
            <p className="px-8 mt-8 ml-6">Community</p>{" "}
            <span className="p-8 ml-9">Building</span>{" "}
            <span className="p-8">and Initial Launch</span>
            <img src={dog1} alt="" />
          </div>

          <div className="h-[370px] bg-gradient-to-br from-teal-600 to-teal-500   w-[200px] font-sans text-base font-black text-white shadow-2xl shadow-teal-500 ">
          <p className="px-8 mt-8 ml-6">Merchandise</p>{" "}
            <span className="p-8 ml-5">Store Launch</span>
            <img src={dog2} alt="dog2" />

         </div>
          <div className="h-[370px] bg-gradient-to-br from-purple-600  to-purple-900   w-[200px] font-sans text-base font-black text-white shadow-2xl shadow-purple-500 ">
          <p className="px-8 mt-8 ml-6">Community</p>{" "}
            <span className="p-8 ml-10">Events</span>{" "}
            <span className="p-8 ml-5">and contents</span>
            <img src={dog3} alt="" className="mt-3"/>
          
          </div>

          <div className=" h-[370px] bg-gradient-to-br from-amber-800 to-purple-900  rounded-lg w-[200px] font-sans text-base font-black text-white shadow-2xl shadow-purple-500 rounded-l-none">
          <p className="px-8 mt-8 ml-2">Expansions and</p>{" "}
            <span className="p-8 ml-11">New</span>{" "}
            <span className="p-8 ml-7">Features</span>
            <img src={dog4} alt="" />
          
          </div>
        </div>
        </div>

    </>
  );
};
