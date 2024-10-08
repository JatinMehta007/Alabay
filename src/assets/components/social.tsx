import React from "react";
import social1 from "../images/social1.png";
import social2 from "../images/social2.png";

export const Social = () => {
  return (
    <>
    <div className="w-screen">
      <div className="uppercase md:text-9xl text-5xl mt-12 md:mt-40 md:ml-24 text-center md:text-left text-yellow-500 ">
        social media links
      </div>
      <div className="grid grid-cols-2 ">
        <div>
          <img src={social1} alt="" className="md:w-80 md:h-80  md:m-32 mt-10 ml-2 " />
        </div>
        <div>
          <img src={social2} alt="" className=" md:w-[600px] md:h-[600px]" />
    </div>
        </div>
      </div>
    </>
  );
};
