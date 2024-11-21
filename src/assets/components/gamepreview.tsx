import React from "react";
import preview1 from '../images/preview1.png';
import preview2 from '../images/preview2.png';
import preview3 from '../images/preview3.png';


export const GamePreview=()=>{
    return (
        <>
        <div className="w-screen ">
        <div className="font-sans uppercase md:text-5xl text-4xl text-center md:text-left mt-10 font-black md:ml-20 text-slate-600">
            <span className="text-yellow-500">game</span> previews
        </div>
        <div className="flex justify-center items-center">

        <div className="md:grid md:grid-cols-3 md:gap-5 md:w-[90%] mt-5 md:mt-10"   >
            <div>
            <img src={preview1} alt="" className="md:w-[90%] w-72 h-72  mt-10 md:mt-0"/>
            </div>
            <div>

            <img src={preview2} alt="" className="md:w-[90%] w-72 h-72   mt-10 md:mt-0"/>
            </div>
            
            <div>
            <img src={preview3} alt=""  className="md:w-[90%] w-72 h-72   mt-10 md:mt-0"/>
        </div>
            </div>
            </div>
        </div>

        </>
    )
}