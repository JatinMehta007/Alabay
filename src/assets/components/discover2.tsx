import React from "react";
import game2 from "../images/game2.png";
import discovers1 from "../images/discovers1.png";
import discovers2 from "../images/discovers2.png";
import discovers3 from "../images/discovers3.png";
import discover4 from "../images/discover4.png";

import { useNavigate } from "react-router-dom";

export const Discovers = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate("/");
  };
  return (
    <div className="flex ">
      <div>
        <img
          src={game2}
          alt="game1"
          className="w-screen md:h-screen brightness-50 fixed "
        />
      </div>
      <div className="absolute  md:text-4xl md:inset-12 inset-5 md:m-auto ">
        
        <p className="text-white md:text-5xl "> ALABAY GUARDIAN </p>
        <span className="font-sans text-[#A4A8FF] md:text-3xl">
          {" "}
          SHEPHERD OF THE STEPPES{" "}
        </span>
        
        <p className="font-sans text-white md:w-96 md:text-lg font-bold mt-4">
          Take on the role of the legendary Alabay on a quest to uncover the
          ancient secrets of its ancestors.{" "}
        </p>
        <button
          className="font-sans md:h-9 bg-[#A4A8FF] md:text-base text-sm md:w-32 h-5 w-20 rounded-2xl font-bold mt-4"
          onClick={handle}
        >
          play
        </button>

        <div className="font-bold font-sans uppercase md:mt-20 text-center md:text-left mt-10 text-2xl md:text-white text-slate-600">
          <span className="text-[#A4A8FF] ">game</span> preview
        </div>
        <div className="md:grid md:grid-cols-4 md:gap-5 md:w-[1200px] mt-10">
          <div>
            <img src={discovers1} alt="discover" className="h-40 md:w-[300px] w-96 mt-5 md:mt-0" />
          </div>
          <div>
            <img src={discovers2} alt="discover" className="h-40 md:w-[250px] w-96 mt-5 md:mt-0" />
          </div>
          <div>
            <img src={discovers3} alt="discover" className="h-40 md:w-[250px] w-96 mt-5 md:mt-0" />
          </div>
          <div>
            <img src={discover4} alt="discover" className="h-40 md:w-[300px] w-96 mt-5 md:mt-0" />
          </div>
        </div>

        <div className="hidden md:block font-sans text-white mt-20 font-semibold">
          <div className=" text-[#A4A8FF] font-medium text-3xl">FEATURES</div>
          <div className="text-lg">
            <p className="mt-10">
              Explore a variety of landscapes, including <span className=" text-[#A4A8FF] "> mountains, forests,
              deserts,</span> and <span className=" text-[#A4A8FF] ">ancient ruins.</span>
            </p>

            <p className="mt-5">
              Use the Alabay's <span className=" text-[#A4A8FF] ">abilities</span> to solve <span className=" text-[#A4A8FF] ">puzzles</span> that involve moving
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
                <span className=" text-[#A4A8FF] "> - Time Trials:</span> Compete in special timed challenges where the
              Alabai must navigate through complex mazes or complete puzzles
              within a time limit.
            </p>
            <p className="ml-5">
              {" "}
                <span className=" text-[#A4A8FF] "> - Exploration Mastery:</span> A mode that rewards players for fully
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
      </div>
    </div>
  );
};
