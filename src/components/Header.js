
import React from 'react'
const Header = () => {
  return (
   <div>
  
  <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
  
      <span class="ml-3 text-xl italic">Portfolio</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white hover:border-b-4 border-yellow-300">Home</a>
      <a class="mr-5 hover:text-white hover:border-b-4 border-yellow-300">About</a>
      <a class="mr-5 hover:text-white hover:border-b-4 border-yellow-300">Projects</a>
      <a class="mr-5 hover:text-white hover:border-b-4 border-yellow-300">Contacts</a>
    
    </nav>
   
  </div>
</header>
  
   </div>
   
  )
}

export default Header