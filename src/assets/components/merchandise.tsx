
import React, { useState } from 'react';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'

import image44 from '../images/image44.png'
import image33 from '../images/image33.png'
import image22 from '../images/image22.png'
import image11 from '../images/image11.png'
export const Merchandise=()=>{
  const slides = [
    {
      foreground: image1, background:image11
    },
    {
      foreground: image2, background:image22
    },
    {
      foreground: image3, background:image33
    },
    {
      foreground: image4, background:image44
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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


  return <>
         <div className="">
          <p className="text-8xl text-yellow-500 mt-12 text-center">MERCHANDISE</p>
        </div>
    <div className='w-[700px] h-[600px] m-auto py-16 px-4 relative group flex justify-center items-center'>
      
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].background})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >

      <div
        style={{ backgroundImage: `url(${slides[currentIndex].foreground})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      </div>
      

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" onClick={prevSlide}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" onClick={nextSlide}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


      </div>
</div>
  </>
      
    
  }

// export default App;