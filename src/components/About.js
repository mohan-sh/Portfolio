// import React from 'react'
// import { FaReact } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { FaNode } from "react-icons/fa";
// const About = () => {
//   return (
//     <>
//     <h2 className='flex items-center justify-center text-white text-2xl font-bold'>About</h2>

//     <div className="p-20 w-auto  px-24 justify-around  min-h-screen border-red-600 border-2">
//   <div className=" sm:p-4 w-4/5  md:flex-row   border-white border-2">


//     <div className=" w-80 text-white  border-white border-2 p-4 rounded-lg">

//     <div className='flex flex-col justify-center justify-items-center'>
//       <h1 className="text-white text-2xl font-bold mb-4">EDUCATION</h1>


//       <div className='flex'>
//       <h3 className="mb-2">School:</h3>
//       <p className="mb-2">Sakthi Vigneswara Higher Secondary School</p>
//       </div>

//       <div className='flex'>
//       <p className="mb-2">SSLC :89.6</p>
//       <p className="mb-2">HSC :92.5</p>
//       </div>

//       <div className='flex'>
//       <h3 className="mb-2">College:</h3>
//       <p className="mb-2">Kongu Engineering College</p>
//       </div>
//       <div>

//       <p className="mb-2">Cgpa:8.23</p>
//       </div>
     
//     </div>
//     </div>


//     <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]  border-white border-2 p-4 rounded-lg ">
//       <div className=""><h1 className="text-white text-2xl font-bold">SKILLS</h1></div>
//       <div className="flex flex-row mt-4 justify-center   justify-items-center">
//         <div className="w-1/3">
//           <FaReact size={70} color="blue" />
//         </div>
//         <div className="w-1/3">
//           <SiMongodb size={70} color="green" />
//         </div>
//         <div className="w-1/3">
//           <FaNode size={70} color="green" />
//         </div>
//       </div>
//     </div>


//   </div>
// </div>
// </>
//   )
// }

// export default About
import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const About = () => {
  return (
    <>
      <h2 className="flex items-center justify-center text-white text-2xl font-bold">About</h2>

      <div className="p-20 w-auto px-24 justify-around min-h-screen">
        <div className="flex flex-col md:flex-row gap-8 justify-between p-4 rounded-lg">
          {/* Education Section */}
          <div className=" font-mono text-lg flex-1 text-white border-white border-2 p-4 rounded-lg shadow-md shadow-white">
            <h1 className="text-white text-2xl font-bold mb-4">EDUCATION</h1>

            <div className="flex flex-col space-y-4">
              <div>
                <h3 className="font-semibold">School:</h3>
                <p>Sakthi Vigneswara Higher Secondary School</p>
              </div>
              <div>
                 <h3 className="font-semibold">Marks:</h3>
                <p>SSLC: 89.6</p>
                <p>HSC: 92.5</p>
              </div>
              <div>
                <h3 className="font-semibold">College:</h3>
                <p>Kongu Engineering College</p>
              </div>
              <div>
                <p>CGPA: 8.23</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex-1 text-white border-white border-2 p-4 rounded-lg shadow-md shadow-white">
            <h1 className="text-white text-2xl font-bold">SKILLS</h1>
            <div className="flex flex-row mt-4 justify-around">
              <div className="flex flex-col items-center">
                <FaReact size={70} color="blue" />
                <p className="mt-2 text-sm">React</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb size={70} color="green" />
                <p className="mt-2 text-sm">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <FaNode size={70} color="green" />
                <p className="mt-2 text-sm">Node.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
