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
import { GamePreview } from "./gamepreview";
import { Social } from "./social";
export const Home = () => {
  return (
    <>
      <div>
        <div className="md:w-screen md:h-screen   flex  items-center justify-center fixed">
          <img src={logo} alt="logo"  className="w-screen "/>
          <div className="absolute md:text-8xl text-2xl  text-center uppercase top-0 md:m-6 m-4 text-slate-900  ">
            welcome to alabay world
          </div>
          <div
            className="absolute top-3 md:text-8xl text-2xl bg-gradient-to-b from-[#FFF280] to-[#7EFF5E] text-transparent bg-clip-text  text-center uppercase md:font-bold text-stroke-2 sm:text-stroke-6 "
          >
            welcome to alabay world
          </div>
          <div className="bg-zinc-900 absolute w-screen  md:h-40 h-20 md:bottom-16 bottom-0">
            <div className="text-white md:text-4xl text-xs text-center m-3">
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
        <div className="absolute md:text-4xl text-sm  md:bg-gradient-30-bottom sm:w-[1326px]  md:bottom-[-650px] bottom-[300px]">
          <div className="bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500 md:grid md:grid-cols-2 rounded-2xl rounded-b-none ">
            <div>
              <div className="md:w-32 md:h-3 md:ml-[570px]  md:mt-4  md:bg-yellow-50 md:rounded-full"></div>
              <img src={dog} alt="dog" className="hidden md:block"/>
            </div>
            <div className="m-14  text-center" >
              <div className=" text-orange-500 font-sans font-black text-center md:ml-52 md:text-6xl text-sm">
                History Of
              </div>
              <span className="text-white md:text-9xl text-sm md:ml-24 ">alabay</span>
              <div className="font-sans font-bold md:text-3xl  text-sm">
                The Central Asian Shepherd Dog, also known as Alabay, has been a
                guardian of livestock and property for centuries. Originating
                from Central Asia, these dogs are renowned for their courage,
                strength, and loyalty.
              </div>
            </div>
          </div>
          <div className=" hidden md:block relative w-full h-[150px] bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500">
            <div
              className="absolute inset-0 bg-gray-100"
              style={{
                clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            ></div>
          </div>

          <div className="absolute  bg-white w-[1326px]">
            <div className="hidden md:block">
            <div className="flex justify-center text-slate-600 items-center uppercase font-mono font-black text-lg  mt-11 ">
              <div className="hover:text-yellow-500 cursor-pointer">all</div>
              <div className="ml-10 hover:text-yellow-500 cursor-pointer">
                photos
              </div>
              <div className="ml-10 hover:text-yellow-500 cursor-pointer">
                videos
            </div>
              </div>
            </div>

            <Button/>
            {/* project vission */}
                <div className="md:text-8xl text-xl ml-32 mt-4 text-center md:ml-0 md:mt-20 text-yellow-500 md:static absolute ">
                Project vision
                </div>
            <div className="w-screen md:w-auto">
              <div className=" mt-10 ">
                <div>
                  <img src={dogs} alt="dogs" className="w-screen md:w-auto "/>
                </div>
              </div>
              
              <div className="bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500 ">
                <div className=" font-sans text-center md:text-xl text-sm font-bold ">
                  <p className="md:p-4 p-2">
                    Our mission is to honor the heritage of the Alabay by
                    creating a vibrant, loyal, and powerfuk community. Just as
                    the Alabay protects its flock, we aim to build a pack that
                    stands strong together.
                  </p>
                </div>

                <div className="md:text-8xl text-2xl text-orange-600 md:text-white text-center md:mr-[850px] md:mt-11">Road Map</div>

                <div className="relative hidden md:block w-full h-[150px] bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500">
                  <div
                    className="absolute inset-0 bg-gray-100"
                    style={{
                      clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

           {/* road map */}

            <div className="md:grid md:grid-cols-2 w-screen md:w-auto">
              <div className="font-sans md:m-14 m-10 md:mt-40 md:text-2xl text-lg  font-bold">
                <p>
                  Our jounrney is just beginning. Explore our roadmap to see the
                  exciting milestones and future plans we have in store.
                </p>
                <span className="text-yellow-400">
                  Join us as we grow and achieve new heights.
                </span>
              </div>
              <img src={map} alt="map" className="hidden md:block"/>
            </div>
            
            <Boxes />

            <div className=" bg-gradient-to-r w-screen md:w-auto from-yellow-500 via-yellow-200 to-yellow-500 mt-20">
                  <div className="md:text-8xl text-orange-500 text-center text-4xl md:text-left  md:text-white md:ml-7">
                    tokenomics
                  </div>
              <div className="grid grid-cols-2  ">
                <div className="">

                  <div className="font-sans ml-10  md:w-60 md:h-20 w-28 shadow-lg shadow-slate-600 bg-slate-900 md:ml-20 md:mt-20 mt-10 rounded-xl text-white font-black">
                    <p className="md:text-lg ml-6 pt-2">LIQUIDITY</p>
                    <span className="mt-4 bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text ml-6 md:text-3xl">
                      Locked
                    </span>
                  </div>

                  <div className="font-sans text-center md:text-left  ml-10  md:w-60 md:h-20 w-28 shadow-lg shadow-slate-600 bg-slate-900 md:ml-20 mt-10 rounded-xl text-white font-black">
                    <p className="md:text-lg  md:text-left md:ml-6 pt-2">CONTRACT</p>
                    <span className="mt-4 bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text md:ml-6 md:text-left md:text-3xl">
                      RENOUNCED
                    </span>
                  </div>

                  <div className="font-sans md:w-60 md:h-20 w-28 shadow-lg shadow-slate-600 bg-slate-900 md:ml-20 ml-10 mt-10 rounded-xl text-white font-black text-center md:text-left">
                    <p className="md:text-lg md:ml-6 pt-2">TAXES</p>
                    <span className="mt-4 bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text md:ml-6 md:text-3xl">
                      0%
                    </span>
                  </div>
                </div>
                <div className="md:ml-[100px] ">
                  <img
                    src={dog5}
                    alt=""
                    className="md:h-[500px] flex justify-center items-center "
                  />
                </div>
              </div>
            </div>
            <div className="w-screen relative md:w-full h-[150px] bg-gradient-to-r  from-yellow-500 via-yellow-200 to-yellow-500">
              <div
                className="absolute inset-0 bg-gray-100"
                style={{
                  clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              ></div>
            </div>
            <Merchandise />
            <Games />
            <GamePreview />
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};
