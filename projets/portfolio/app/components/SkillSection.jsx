"use client";
import React from 'react'
import AnimatedElement from './AnimatedElement'

export default function SkillSection() {
  return (
    <div className="container mx-auto px-4 my-3">
        <AnimatedElement>

        
        <h2 className="text-4xl font-heading mb-8 text-center hover:text-white transition-colors duration-400 ease-in">Skills</h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedElement>
      
          <div>
            <h3 className="text-2xl font-heading mb-4 text-center text-white  ">Design</h3>
            <p className="font-body text-center lg:py-3 ">Figma</p>
            <p className="font-body text-center text-white lg:py-3 ">Tailwind</p>
          </div>
                    
          </AnimatedElement>
          <AnimatedElement>

         
          <div>
            <h3 className="text-2xl font-heading mb-4 text-center ">Front-end</h3>
            <p className="font-body text-center text-white lg:py-3 ">Redux</p>
            <p className="font-body text-center lg:py-3 ">Three.js</p>
            <p className="font-body text-center text-white lg:py-3 ">React</p>
            <p className="font-body text-center  lg:py-3 ">SwiftUI</p>
          </div>
          </AnimatedElement>
          <AnimatedElement>

      
          <div>
            <h3 className="text-2xl font-heading mb-4 text-center text-white  ">Back-end</h3>
            <p className="font-body text-center  lg:py-3">Node js</p>
            <p className="font-body text-center text-white lg:py-3 ">Prisma</p>
            <p className="font-body text-center lg:py-3">PostgreSQL</p>
          </div>
          </AnimatedElement>
          <AnimatedElement>

      
          <div>
            <h3 className="text-2xl font-heading mb-4 text-center ">Other</h3>
            <p className="font-body text-center text-white lg:py-3 ">Git & GitHub</p>
            <p className="font-body text-center lg:py-3">Trello</p>
            <p className="font-body text-center text-white  lg:py-3">ChatGPT</p>
          </div>
          </AnimatedElement>
        </div>
      </div>
  )
}
