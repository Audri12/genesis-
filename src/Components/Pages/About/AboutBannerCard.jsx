import React from 'react';

const AboutBannerCard = () => {
  return (
    <div className='container mx-auto p-[5%] pb-[80px]'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 p-4">
        
        {/* Card 1 - Worker SVG with hover effect */}
        <div className='group'>
          <div className='flex flex-cols-3 group-hover:bg-orange-500 p-[30px] border border-gray-100 shadow-sm'>
            <div className="group-hover:stroke-white col-span-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-orange-600 group-hover:text-white transition-all duration-300"
              >
                {/* SVG path for Service Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6 3V9m-3.75-3v2.25m-.75 2.25h1.5M12 9H6.75M12 9h4.5M12 21v-2.25M6.75 21V9m10.5 12V9"
                />
              </svg>
            </div>
            <div className="col-span-2 ml-3">
              <h2 className="text-xl font-semibold text-orange-600 mb-[15px] group-hover:text-white transition-all duration-300">
                Skilled Workers
              </h2>
              <p className="text-gray-600 group-hover:text-white transition-all duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus
                voluptatibus ea repudiandae vero?
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Buildings SVG with no hover effect, always orange background */}
        <div className=''>
          <div className='flex flex-cols-3 bg-orange-500 p-[30px] border border-gray-100 shadow-sm'>
            <div className="flex-shrink-0 col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                {/* Buildings SVG */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 21v-3.75a.75.75 0 01.75-.75h13.5a.75.75 0 01.75.75V21m-15-3.75V5.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v11.25m6.75 0V7.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v10.5m6.75 0V10.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v7.5"
                />
              </svg>
            </div>
            <div className="col-span-2 ml-3">
              <h2 className="text-xl font-semibold text-white mb-[15px]">
                Modern Buildings
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus
                voluptatibus ea repudiandae vero?
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 - With hover effect */}
        <div className='group'>
          <div className='flex flex-cols-3 group-hover:bg-orange-500 p-[30px] border border-gray-100 shadow-sm'>
            <div className="group-hover:stroke-white col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-orange-600 group-hover:text-white transition-all duration-300"
              >
                {/* SVG path for Service Icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6 3V9m-3.75-3v2.25m-.75 2.25h1.5M12 9H6.75M12 9h4.5M12 21v-2.25M6.75 21V9m10.5 12V9"
                />
              </svg>
            </div>
            <div className="col-span-2 ml-3">
              <h2 className="text-xl font-semibold text-orange-600 mb-[15px] group-hover:text-white transition-all duration-300">
                Quality Service
              </h2>
              <p className="text-gray-600 group-hover:text-white transition-all duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus
                voluptatibus ea repudiandae vero?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBannerCard;
