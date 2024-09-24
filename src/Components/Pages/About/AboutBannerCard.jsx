import React from 'react';
import { MdOutlineSettings } from "react-icons/md";

const AboutBannerCard = () => {
  return (
    <div>
    <div className='container mx-auto p-[5%] pb-[80px]'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 p-4">

        {/* Card 1 - Skilled Workers with hover effect and background SVG */}
        
            <div className='group relative'>
<div 
  className='relative flex flex-cols-3 bg-[#fcf8f5] group-hover:bg-orange-500 p-[30px] border border-gray-100 shadow-sm'
>
  <div className="group-hover:stroke-white col-span-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-12 h-12 text-[#FF7907] group-hover:text-white transition-all duration-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6 3V9m-3.75-3v2.25m-.75 2.25h1.5M12 9H6.75M12 9h4.5M12 21v-2.25M6.75 21V9m10.5 12V9"
      />
    </svg>
  </div>
  <div className="col-span-2 ml-3 z-10">
    <h2 className="text-2xl font-rajdhani font-bold text-[#FF7907] mb-[15px] group-hover:text-white transition-all duration-300">
    Skilled Workers
    </h2>
    <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus
      voluptatibus ea repudiandae vero?
    </p>
  </div>
</div>

{/* Hide on hover */}
<div className='absolute top-14 right-16 text-[#ff8d2c] opacity-20 z-0 animate-ping text-7xl group-hover:hidden'
  style={{
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out',
  }}>
  <MdOutlineSettings />
</div>

{/* Hidden by default and only visible on hover */}
<div className='absolute top-14 right-16 text-[#ff8d2c] z-0 hidden group-hover:block group-hover:animate-spin text-7xl'
  style={{
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out',
  }}>
  <MdOutlineSettings />
</div>
</div>
{/* Card 2 - Modern Buildings with no hover effect and background SVG */}
<div className='relative'>
          <div 
            className='relative flex flex-cols-3 bg-[#f97316] p-[30px] border border-gray-100 shadow-sm'
          //   style={{
          //     backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\'  viewBox=\'0 0 24 24\' stroke=\'%230c2239\' stroke-width=\'1.5\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M12 3v2.25m6 3V9m-3.75-3v2.25m-.75 2.25h1.5M12 9H6.75M12 9h4.5M12 21v-2.25M6.75 21V9m10.5 12V9\'/%3E%3C/svg%3E")',
          //     backgroundRepeat: 'no-repeat',
          //     backgroundPosition: 'right bottom',
          //     backgroundSize: '150px'
          //   }}
  
          >
              {/* <div className='absolute inset-0 z-10 bg-black opacity-0 '>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6 3V9m-3.75-3v2.25m-.75 2.25h1.5M12 9H6.75M12 9h4.5M12 21v-2.25M6.75 21V9m10.5 12V9"
                />
              </svg>
              </div> */}
            <div className="relative col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6 3V9m-3.75-3v2.25m-.75 2.25h1.5M12 9H6.75M12 9h4.5M12 21v-2.25M6.75 21V9m10.5 12V9"
                />
              </svg>
            </div>
            <div className="relative col-span-2 ml-3 z-10">
              <h2 className="text-2xl font-rajdhani font-bold text-white mb-[15px]">
                Modern Buildings
              </h2>
              <p className="text-white text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus
                voluptatibus ea repudiandae vero?
              </p>
            </div>
          </div>
          <div className='absolute top-14 right-16 text-[#ff8d2c] z-0 animate-spin text-7xl'
          style={{
              animationDuration: '3s', // Set your desired duration here
              animationTimingFunction: 'ease-in-out', // Optional: Change the timing function
            }}>
              
          
              <MdOutlineSettings />

          </div>
        </div>



{/* Card 3 - Quality Service with hover effect and background SVG */}
<div className='group relative'>
<div 
  className='relative flex flex-cols-3 bg-[#fcf8f5] group-hover:bg-orange-500 p-[30px] border border-gray-100 shadow-sm'
>
  <div className="group-hover:stroke-white col-span-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-12 h-12 text-[#FF7907] group-hover:text-white transition-all duration-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6 3V9m-3.75-3v2.25m-.75 2.25h1.5M12 9H6.75M12 9h4.5M12 21v-2.25M6.75 21V9m10.5 12V9"
      />
    </svg>
  </div>
  <div className="col-span-2 ml-3 z-10">
    <h2 className="text-2xl font-rajdhani font-bold text-[#FF7907] mb-[15px] group-hover:text-white transition-all duration-300">
      Quality Service
    </h2>
    <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus
      voluptatibus ea repudiandae vero?
    </p>
  </div>
</div>

{/* Hide on hover */}
<div className='absolute top-14 right-16 text-[#ff8d2c] opacity-20 z-0 animate-ping text-7xl group-hover:hidden'
  style={{
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out',
  }}>
  <MdOutlineSettings />
</div>

{/* Hidden by default and only visible on hover */}
<div className='absolute top-14 right-16 text-[#ff8d2c] z-0 hidden group-hover:block group-hover:animate-spin text-7xl'
  style={{
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out',
  }}>
  <MdOutlineSettings />
</div>
</div>















      </div>
    </div>
  </div>

  );
};

export default AboutBannerCard;
