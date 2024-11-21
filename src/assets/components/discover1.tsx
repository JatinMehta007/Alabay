import React from "react";
import game1 from "../images/game1.png";
import discover1 from "../images/discover1.png";
import discover2 from "../images/discover2.png";
import discover3 from "../images/discover3.png";
import discover4 from "../images/discover4.png";

import { useNavigate } from "react-router-dom";

export const Discover = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate("/");
  };
  return (
    <div className="flex  ">
      <div>
        <img
          src={game1}
          alt="game1"
          className="w-screen md:h-screen brightness-50 fixed "
        />
      </div>
      <div className="absolute  md:text-4xl md:inset-12 inset-5 md-auto ">
        
        <p className="text-white md:text-5xl "> ALABAY HERITAGE </p>
        <span className="font-sans text-green-300 md:text-3xl">
          {" "}
          THE LOST ADVENTURE{" "}
        </span>
        
        <p className="font-sans text-white md:w-96 md:text-lg font-bold mt-4">
          Take on the role of the legendary Alabay on a quest to uncover the
          ancient secrets of its ancestors.{" "}
        </p>
        <button
          className="font-sans bg-green-400 md:text-base text-sm md:w-32 md:h-9 w-20 h-5 rounded-2xl font-bold mt-4"
          onClick={handle}
        >
          play
        </button>
        <div>

        <div className=" font-bold font-sans uppercase md:mt-20 text-center md:text-left mt-10 text-2xl md:text-white text-slate-600">
          <span className="text-green-300 ">game</span> preview
        </div>
        <div className=" md:grid md:grid-cols-4 md:gap-5 md:w-[1200px] mt-10">
          <div>
            <img src={discover1} alt="discover" className="h-40 md:[250px] xl:w-[300px] w-96 mt-5 md:mt-0" />
          </div>
          <div>
            <img src={discover2} alt="discover" className="h-40 md:[250px] xl:w-[300px] w-96 mt-5 md:mt-0" />
          </div>
          <div>
            <img src={discover3} alt="discover" className="h-40 md:[250px] xl:w-[300px] mt-5 w-96 md:mt-0" />
          </div>
          <div>
            <img src={discover4} alt="discover" className="h-40 md:[250px] xl:w-[300px] md:[250px] mt-5 w-96 md:mt-0" />
          </div>
        </div>

        <div className="hidden md:block font-sans md:text-white text-green-700 mt-20 font-semibold">
          <div className=" text-green-300 font-medium text-3xl">FEATURES</div>
          <div className="text-lg">
            <p className="mt-10">
              Explore a variety of landscapes, including <span className=" text-green-300 "> mountains, forests,
              deserts,</span> and <span className=" text-green-300 ">ancient ruins.</span>
            </p>

            <p className="mt-5">
              Use the Alabay's <span className=" text-green-300 ">abilities</span> to solve <span className=" text-green-300 ">puzzles</span> that involve moving
              objects, activating mechanisms, or finding hidden clues.
            </p>

            <p className="mt-5">
              Discover relics that tell the story of the Alabay’s ancestors,
              each piece contributing to a larger narrative about the breed's
              role in ancient history.
            </p>

            <p className="mt-5">
              Unlock new skills and abilities for the Alabay, enhancing its
              capacity to explore and solve puzzles.
            </p>

            <p className="mt-5">Challenge Modes:</p>
            <p className="ml-5">
              {" "}
                <span className=" text-green-300 "> - Time Trials:</span> Compete in special timed challenges where the
              Alabai must navigate through complex mazes or complete puzzles
              within a time limit.
            </p>
            <p className="ml-5">
              {" "}
                <span className=" text-green-300 "> - Exploration Mastery:</span> A mode that rewards players for fully
              exploring every nook and cranny of the game’s world, uncovering
              all secrets
            </p>
          </div>
         <div>

        <button
          className="font-sans bg-white text-black text-base w-32 h-9 rounded-2xl font-bold mt-8"
          onClick={handle}
          >
          play
        </button>

        <button
          className="font-sans bg-transparent text-white border-2 border-white text-base w-32 h-9 rounded-2xl font-bold mt-8 ml-12"
          onClick={handle}
          >
          exit
        </button>
            </div>
            <div className="mt-48">


            </div>
        </div>
      </div></div>
            </div>
  );
};
