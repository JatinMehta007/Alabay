import React, { useState } from "react";
import game1 from "../images/game1.png";
import game2 from "../images/game2.png";
import { useNavigate } from "react-router-dom";

export const Games = () => {
  const slides = [
    {
      foreground: game1,
      link: "/discover1",
    },
    {
      foreground: game2,
      link: "/discover2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handleButtonClick = () => {
    navigate(slides[currentIndex].link);
  };
  return (
    <>
      <div className="bg-gradient-to-r w-screen md:w-auto from-yellow-500 via-yellow-200 to-yellow-500">
        <div className=" text-white text-center">
          <p className="md:text-8xl text-4xl text-orange-500">GAMES</p>
          <p className="md:text-4xl text-2xl text-slate-800">
            Stay tuned for upcoming games !
          </p>
        </div>
        <div className="md:w-[700px] md:h-[600px] w-96 h-96 m-auto py-16 px-4 relative group flex justify-center items-center">
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].foreground})`,
            }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          >
            <button
              className="absolute md:inset-[180px] inset-[120px] mt-28 ml-7   md:m-auto md:mt-48 bg-purple-800 text-white font-bold md:py-2 md:px-4 px-4 rounded-2xl flex items-center justify-center md:text-2xl"
              onClick={handleButtonClick}
            >
              Discover
            </button>
          </div>

          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              onClick={prevSlide}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              onClick={nextSlide}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
