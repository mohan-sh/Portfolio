import React from 'react';
import p1 from '../assets/Screenshot (245).png';
import p2 from '../assets/Screenshot (308).png';
import p3 from '../assets/Screenshot 2025-02-26 213340.png';

const Project = () => {
  return (
    <>
        <h2 className='flex items-center justify-center text-white text-2xl font-bold'>Projects</h2>
        <div className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto  flex flex-col md:flex-row justify-around items-center min-h-screen dark:bg-gray-800">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:motion-translate-y-in-100">
        <a href="#">
          <img className="rounded-t-lg  " src={p1} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Happy Home - Construction Website
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           It is a basic Website build with Html,Css,Bootstrap and Mongo DB for backend.
          </p>
          <a
            href="https://mohan-sh.github.io/Happy_Home/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            watch live
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={p2} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Battery Management Website
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          A simple  Battery Management Website build using Angular framework and worked with services.
          </p>
          <a
            href="https://angular-nu-five.vercel.app/home"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            watch live
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={p3} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           InkSpire
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          A Full Stack Online Pen Store Website build using React framework  as frontend and Express as backend with MongoDB as database.
          </p>
          <a
            href="https://frontend-pen.vercel.app/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            watch live
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    
    </div>
    </>
  );
};

export default Project;
