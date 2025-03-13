import React from 'react';
import { SiLeetcode } from "react-icons/si";
import profile from '../assets/IMG_0692.jpg'

const Hero = () => {
  return (
    <>
      <div className="p-20 w-auto flex px-24 justify-center relative">
        <div className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
          <div className="mr-10 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
            <img
              className="rounded-lg min-w-[100px] w-3/4 h-auto "
              src={profile}
              alt="Mohan"
            />
          </div>
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
            <h1 className="text-white font-bold text-3xl mt-6 mb-8">
              Hi , I'am Mohan
            </h1>
            <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
            A passionate developer with experience in web development and full-stack MERN (MongoDB, Express, React, Node.js) development.
             I enjoy building scalable and efficient cloud native applications using modern technologies.            </p>
            <div className="flex flex-wrap justify-start items-center gap-4">
              <a
                rel="noopener"
                target="_blank"
                href="https://github.com/mohan-sh/mohan-sh"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                  width="20px"
                  height="20px"
                  alt="Github"
                />
                <span>Visit my Github</span>
              </a>
              <a
                rel="noopener"
                target="_blank"
                href="https://www.linkedin.com/in/mohan-s-986397259/"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                  width="20px"
                  height="20px"
                  alt="LinkedIn"
                />
                <span>Follow me on Linkedin</span>
              </a>
              <a
                rel="noopener"
                target="_blank"
                href="https://leetcode.com/u/user0899Hu/"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
             
                <SiLeetcode />
                

                <span>Check my leetcode profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
