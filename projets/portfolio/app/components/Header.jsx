"use client"; // This is a client component 👈🏽
import React, { useState, useRef } from "react";

import Image from "next/image";
import useOutsideClick from "../Hooks/useOutsideClick";
import Link from "next/link";


export default function Header( {isMenuOpen, setIsMenuOpen, setShowPdf}) {

  const menuRef = useRef();
  useOutsideClick(menuRef, () => setIsMenuOpen(false));
  return (
  
    <header className="flex justify-between items-center p-5  bg-header w-full z-100 sticky z-50 top-0 mx-auto">

      <div className="w-24 rounded-full overflow-hidden">
        <Image
          src="/pierre.jpg"
          width={96}
          height={96}
          alt="Profile image"
          className="object-cover"
          priority
        />
           
      </div>
     
   

      {/* Hamburger/Cross Icon */}
      <div className="flex justify-end w-full sm:w-auto">
        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // Cross Icon when menu is open
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              ></circle>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 6l12 12M6 18L18 6"
              ></path>
            </svg>
          ) : (
            // Hamburger Icon when menu is closed
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Modal for menu links */}
      <div
        ref={menuRef}
        className={` md:relative fixed inset-y-0 right-0  z-100 ${
          isMenuOpen ? "w-1/2" : "w-0"
        } sm:w-auto bg-xsmenu  transition-width duration-300 ease-in-out sm:bg-transparent`}
      >
        <nav
          className={`flex ${
            isMenuOpen ? "flex-col" : "hidden"
          } sm:flex sm:flex-row items-center sm:h-100`}
        >
          <ul className="mt-20 sm:mt-0 sm:flex sm:flex-row sm:space-x-4 sm:h-100">
            <li className="p-2 x-4 sm:p-2 font-body text-white sm:text-navlink transition-colors duration-300 border-b-2 border-transparent hover:border-b-2 hover:border-border-1 cursor-pointer text-center">
              <Link href="#home">Home</Link>{" "}
            </li>
            <li className="p-2 x-4 sm:p-2 font-body text-white sm:text-navlink transition-colors duration-300 ease-in hover:border-b-2  hover:border-border-1  cursor-pointer text-center">
              <Link href="#about">About</Link>{" "}
            </li>
            <li className="p-2 x-4 sm:p-2 font-body text-white sm:text-navlink transition-colors duration-300 ease-in hover:border-b-2 hover:border-border-1  cursor-pointer text-center">
              <Link href="#projects">Projects</Link>{" "}
            </li>
            <li className="p-2 x-4 sm:p-2 font-body text-white sm:text-navlink transition-colors duration-300 ease-in hover:border-b-2 hover:border-border-1  cursor-pointer text-center">
              <Link href="#contact">Contact</Link>{" "}
            </li>
            <li className="p-2 x-4 sm:p-2 font-body text-white sm:text-navlink transition-colors duration-300 ease-in hover:border-b-2 hover:border-border-1 cursor-pointer text-center" >
            <a href="/Tarifs.pdf" download="Tarifs.pdf">
          Tarifs
        </a>
          </li>
          
          </ul>
        </nav>
      </div>
    </header>
   
  );
}