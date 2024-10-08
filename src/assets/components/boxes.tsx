import React from "react";
import dog1 from "../images/dog1.png";
import dog2 from "../images/dog2.png";
import dog3 from "../images/dog3.png";
import dog4 from "../images/dog4.png";
export const Boxes = () => {
  return (
    <>
      <div className="md:flex  justify-center items-center">
        <div className="md:grid md:grid-cols-4 md:mt-8 md:gap-5 ">
          <div className="flex justify-center items-center  md:h-[370px] md:ml-0 ml-11 bg-gradient-to-br from-orange-300  to-yellow-400  rounded-lg md:w-[200px] w-[300px] font-sans text-base font-extrabold text-white shadow-2xl shadow-yellow-500 md:rounded-r-none">
            <div className=" text-center md:text-left">
            <p className="md:px-8 md:mt-8 md:ml-6 ">Community</p>{" "}
            <span className="md:p-8 md:ml-9">Building</span>{" "}
            <span className="md:p-8">and Initial Launch</span>
            <img src={dog1} alt="" className=""/>
            </div>
            
          </div>

          <div className="md:h-[370px] bg-gradient-to-br  from-teal-600 to-teal-500 mt-5 md:mt-0  md:ml-0 ml-11 md:w-[200px] w-[300px] font-sans text-base font-black text-white shadow-2xl shadow-teal-500 md:rounded-none rounded-lg ">
            <div className=" text-center md:text-left">
            <p className="md:px-8 md:mt-8 md:ml-6">Merchandise</p>{" "}
            <span className="md:p-8 md:ml-5">Store Launch</span>
            <img src={dog2} alt="dog2" />
            </div>
          </div>
          <div className="md:h-[370px] mt-5 md:mt-0  md:ml-0 ml-11 md:w-[200px] w-[300px] md:rounded-none rounded-lg bg-gradient-to-br from-purple-600  to-purple-900  font-sans text-base font-black text-white shadow-2xl shadow-purple-500 ">
            <div className="text-center md:text-left">
            <p className="md:px-8 md:mt-8 md:ml-6">Community</p>{" "}
            <span className="md:p-8 md:ml-10">Events</span>{" "}
            <span className="md:p-8 md:ml-5">and contents</span>
            <img src={dog3} alt="" className="mt-3" />
            </div>
          </div>

          <div className=" md:h-[370px] mt-5 md:mt-0  md:ml-0 ml-11 md:w-[200px] w-[300px]  bg-gradient-to-br from-amber-800 to-purple-900  rounded-lg  font-sans text-base font-black text-white shadow-2xl shadow-purple-500 md:rounded-l-none">
            <div className="text-center md:text-left">
            <p className="md:px-8 md:mt-8 md:ml-2">Expansions and</p>{" "}
            <span className="md:p-8 md:ml-11">New</span>{" "}
            <span className="md:p-8 md:ml-7">Features</span>
            <img src={dog4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
