"use client"; // This is a client component 👈🏽
import React , { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='flex justify-between items-center p-5 bg-header w-full'>
 

  <div className="w-24  rounded-full overflow-hidden">
        
          <Image
            src="/pierre.jpg" 
            width={96} 
            height={96} 
            alt="Profile image"
            className="object-cover" 
          />
        </div>
           {/* Hamburger Icon */}
           <div className="flex justify-end w-full sm:w-auto">
        <button
          className='sm:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            ></path>
          </svg>
        </button>
  
         {/* Modal for menu links */}
         <div className={`absolute right-0 top-0 h-full z-50 ${isMenuOpen ? 'w-1/2' : 'w-0'} bg-xsmenu overflow-hidden transition-width duration-300 ease-in-out`}>
        <nav className={`flex ${isMenuOpen ? 'flex-col' : 'hidden'} sm:flex sm:flex-col`}>
        <ul className='mt-20'> 
            <li className='p-2 sm:p-7 font-body text-white sm:text-navlink transition-colors duration-300 ease-in  hover:text-navhover cursor-pointer text-center '>Home</li>
            <li className='p-2 sm:p-7  font-body text-white sm:text-navlink transition-colors duration-300 ease-in  hover:text-navhover cursor-pointer text-center'>About</li>
            <li className='p-2 sm:p-7 font-body text-white sm:text-navlink transition-colors duration-300 ease-in  hover:text-navhover cursor-pointer text-center' >Projects</li>
            <li className='p-2 sm:p-7 font-body text-white sm:text-navlink transition-colors duration-300 ease-in  hover:text-navhover cursor-pointer text-center'>Contact</li>
        </ul>
    </nav>
    </div>
    </div>
</header>

  )
}
