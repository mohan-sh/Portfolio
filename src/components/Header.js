
// import React from 'react'
// import { Link } from 'react-router-dom'
// const Header = () => {
//   return (
//    <div>
  
//   <header class="text-gray-400 bg-gray-900 body-font">
//   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
  
//       <span class="ml-3 text-xl italic">Portfolio</span>
//     </a>
//     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <Link class="mr-5 hover:text-white hover:border-b-4 border-yellow-300" to="/">Home</Link>
//       <Link class="mr-5 hover:text-white hover:border-b-4 border-yellow-300" to="/About">About</Link>
//       <Link class="mr-5 hover:text-white hover:border-b-4 border-yellow-300" to="/Project">Projects</Link>
//       <Link class="mr-5 hover:text-white hover:border-b-4 border-yellow-300">Contacts</Link>
    
//     </nav>
   
//   </div>
// </header>
  
//    </div>
   
//   )
// }

// export default Header

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl italic">Portfolio</span>
          </span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white hover:border-b-4 border-yellow-300" to="/">Home</Link>
            <Link className="mr-5 hover:text-white hover:border-b-4 border-yellow-300" to="/About">About</Link>
            <Link className="mr-5 hover:text-white hover:border-b-4 border-yellow-300" to="/Project">Projects</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
