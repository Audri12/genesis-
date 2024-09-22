import React from 'react';

const AboutBannerCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-10">
      {/* Card 1 - With hover effect */}
      <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xs hover:bg-orange-500 transition-all duration-300">
        <div className="flex items-center justify-start space-x-4">
          {/* SVG Icon */}
          <div className="group-hover:stroke-white flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-orange-600 group-hover:text-white transition-all duration-300"
            >
              {/* SVG path for Engineer Icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6 3V9m-3.75-3v2.25m-.75 2.25h1.5M12 9H6.75M12 9h4.5M12 21v-2.25M6.75 21V9m10.5 12V9"
              />
            </svg>
          </div>
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-xl font-semibold text-orange-600 group-hover:text-white transition-all duration-300">
              Skilled Engineers
            </h2>
            <p className="text-gray-600 group-hover:text-white transition-all duration-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus
              voluptatibus ea repudiandae vero?
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 - No hover effect, always orange background */}
      <div className="bg-orange-500 shadow-lg p-6 rounded-lg text-center max-w-xs">
        <div className="flex items-center justify-start space-x-4">
          {/* SVG Icon */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-white"
            >
              {/* SVG path for Machine Icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6 3V9m-3.75-3v2.25m-.75 2.25h1.5M12 9H6.75M12 9h4.5M12 21v-2.25M6.75 21V9m10.5 12V9"
              />
            </svg>
          </div>
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-xl font-semibold text-white">
              Modern Machines
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus
              voluptatibus ea repudiandae vero?
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 - With hover effect */}
      <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xs hover:bg-orange-500 transition-all duration-300">
        <div className="flex items-center justify-start space-x-4">
          {/* SVG Icon */}
          <div className="group-hover:stroke-white flex-shrink-0">
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
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-xl font-semibold text-orange-600 group-hover:text-white transition-all duration-300">
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
  );
};

export default AboutBannerCard;
