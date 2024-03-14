"use client";

import React, { useState, useEffect } from 'react';
import SocialMediaSection from "./SocialMediaSection";
import Image from 'next/image';
import AnimatedElement from './AnimatedElement';






export default function Section() {


  return (
    <>
      <section className="flex justify-center bg-gradient-to-r from-section  to-section-2 p-5 max-h-screen lg:mt-5 pt-28 lg:pt-32"
      id="home">
        <div className='flex flex-col sm:flex-row justify-around w-full group'>
          <AnimatedElement>

        
      
          <div className='font-body sm:my-4 leading-10 text-lg sm:text-xl flex flex-col text-center'>Hi  
          <AnimatedElement> <span className='text-2xl sm:text-4xl text-white hover:translate-x-3 transition-transform duration-400 ease-in cursor-pointer'>everyone,</span>   </AnimatedElement>
        
            I&apos;m <AnimatedElement><span className=' font-heading text-4xl sm:text-6xl my-4 text-white leading-10 hover:translate-x-3 transition-transform duration-400 ease-in-out cursor-pointer'>Pierre Dillard</span></AnimatedElement><AnimatedElement><strong className='text-2xl'>
            I create </strong></AnimatedElement>    <AnimatedElement><span className='text-2xl sm:text-3xl hover:translate-x-3 transition-transform duration-400 ease-in cursor-pointer'>inspiring</span>  </AnimatedElement> and 
            <AnimatedElement>  <span className='text-white text-4xl sm:text-6xl leading-10 my-3 hover:translate-x-3 transition-transform duration-400 ease-in cursor-pointer'>
              Inspired
            </span>  </AnimatedElement> Websites!
            
          
          </div>
         
          </AnimatedElement>
   
      
      
       <AnimatedElement>
       <AnimatedElement>   
              <div>

              </div>
            <div className="w-48 rounded-full  overflow-hidden my-1 md:my-5">
            <Image
          src="/pierre.jpg"
          width={512}
          height={512}
          alt="Photo-Pierre Dillard-Web developper"
          priority
          className="object-cover hidden lg:block"
        />
        </div>
      
     

            </AnimatedElement>


       </AnimatedElement>
 
        
        </div>
      
        
      </section>
      <AnimatedElement>

     
      </AnimatedElement>
   
    </>
  );
}
