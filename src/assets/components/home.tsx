import React from "react";
import logo from "../images/logo.png";
import dog from "../images/dog.png";
import dogs from "../images/dogs.jpeg";
import map from "../images/map.jpeg";
import dog5 from "../images/dog5.png";

import { Button } from "./button";
import { Boxes } from "./boxes";
import { Merchandise } from "./merchandise";
import { Games } from "./games";
export const Home = () => {
  return (
    <>
      <div>
        <div className="w-screen h-screen flex items-center justify-center fixed">
          <img src={logo} alt="logo" />
          <div className="absolute text-8xl text-center uppercase top-0 m-6 text-slate-900  ">
            welcome to alabay world
          </div>
          <div
            style={{ WebkitTextStroke: "6px black" }}
            className="absolute top-3 text-8xl bg-gradient-to-b from-[#FFF280] to-[#7EFF5E] text-transparent bg-clip-text  text-center uppercase font-bold"
          >
            welcome to alabay world
          </div>
          <div className="bg-zinc-900 absolute w-screen h-40 bottom-16">
            <div className="text-white text-4xl text-center m-3">
              <div>
                where the{" "}
                <span className="bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text ">
                  {" "}
                  legendary Central Asian Shepherd Dog{" "}
                </span>{" "}
                meets a new-age adventure.
              </div>
              <div>
                <span className="bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text ">
                  Join us
                </span>{" "}
                in celebrating the{" "}
                <span className="bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text ">
                  strength, loyalty, and heritage{" "}
                </span>
                of the Alabay breed.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* creating a scroll bar function */}
      <div className="flex justify-center items-center ">
        <div className="absolute text-4xl  bg-gradient-30-bottom w-[1326px]  bottom-[-650px] ">
          <div className="bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500 grid grid-cols-2 rounded-2xl rounded-b-none ">
            <div>
              <div className="w-32 h-3 ml-[570px]  mt-4  bg-yellow-50 rounded-full"></div>
              <img src={dog} alt="dog" />
            </div>
            <div className="m-14">
              <div className=" text-orange-500 font-sans font-black  ml-52 text-6xl">
                History Of
              </div>
              <span className="text-white text-9xl ml-24 ">alabay</span>
              <div className="font-sans font-bold text-3xl">
                The Central Asian Shepherd Dog, also known as Alabay, has been a
                guardian of livestock and property for centuries. Originating
                from Central Asia, these dogs are renowned for their courage,
                strength, and loyalty.
              </div>
              
            </div>
            
          </div>
          <div className="relative w-full h-[150px] bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500">
  <div
    className="absolute inset-0 bg-gray-100"
    style={{ clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)' }}
  ></div>
</div>

          <div className="absolute bg-white w-[1326px]">
            <div className="flex justify-center items-center uppercase font-mono font-extrabold text-lg  ">
              <div className="">all</div>
              <div className="ml-10">photos</div>
              <div className="ml-10">videos</div>
              
            </div>

            <Button />
            {/* project vission */}
            <div>
              <div className="text-center mt-20 text-8xl text-yellow-500">
                Project vision
                <div>
                  <img src={dogs} alt="dogs" />
                </div>
              </div>
              <div className="bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500 ">
                <div className=" font-sans text-center text-xl font-bold ">
                  <p className="p-4">
                    Our mission is to honor the heritage of the Alabay by
                    creating a vibrant, loyal, and powerfuk community. Just as
                    the Alabay protects its flock, we aim to build a pack that
                    stands strong together.
                  </p>
                </div>
                <div className="text-8xl text-white ml-14 mt-11">Road Map</div>
                <div className="relative w-full h-[150px] bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500">
                  <div
                    className="absolute inset-0 bg-gray-100"
                    style={{
                      clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="font-sans m-14 mt-40 text-2xl  font-bold">
                <p>
                  Our jounrney is just beginning. Explore our roadmap to see the
                  exciting milestones and future plans we have in store.
                </p>
                <span className="text-yellow-400">
                  Join us as we grow and achieve new heights.
                </span>
              </div>
              <img src={map} alt="map" />
            </div>
            <Boxes />

            <div className="bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 mt-20">
              
              <div className="grid grid-cols-2">
                <div className="">
                  <div className="text-8xl text-white mt-12 ml-7">
                    tokenomics
                  </div>

                  <div className="font-sans  w-60 h-20 shadow-lg shadow-slate-600 bg-slate-900 ml-20 mt-20 rounded-xl text-white font-black">
                    <p className="text-lg ml-6 pt-2">LIQUIDITY</p>
                    <span className="mt-4 bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text ml-6 text-3xl">
                      Locked
                    </span>
                  </div>

                  <div className="font-sans  w-60 h-20 shadow-lg shadow-slate-600 bg-slate-900 ml-20 mt-10 rounded-xl text-white font-black">
                    <p className="text-lg ml-6 pt-2">CONTRACT</p>
                    <span className="mt-4 bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text ml-6 text-3xl">
                      RENOUNCED
                    </span>
                  </div>

                  <div className="font-sans  w-60 h-20 shadow-lg shadow-slate-600 bg-slate-900 ml-20 mt-10 rounded-xl text-white font-black">
                    <p className="text-lg ml-6 pt-2">TAXES</p>
                    <span className="mt-4 bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text ml-6 text-3xl">
                      0%
                    </span>
                  </div>
                </div>
                <div className="ml-[100px]">
                  <img
                    src={dog5}
                    alt=""
                    className=" h-[500px] flex justify-center items-center mt-36"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full h-[150px] bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500">
                  <div
                    className="absolute inset-0 bg-gray-100"
                    style={{
                      clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  ></div>
                  </div>
          <Merchandise/>
          <Games/>
          </div>
        </div>
        
      </div>
    </>
  );
};
