"use client";
import React from 'react';
import SkillSection from './SkillSection';
import AnimatedElement from './AnimatedElement';

export default function AboutSection() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-gradient-to-r from-section  to-section-2 p-6 pt-28 lg:pt-48" >
        <div className="container mx-auto px-0 md:px-4 ">
      
            <div className='container mx-auto px-4 md:w-2/3 '>
            <AnimatedElement>
                <h2 className="text-4xl font-heading my-5 text-center
              "
              id="about">About Me</h2>
               </AnimatedElement>
               <AnimatedElement>
                <p className="font-body mb-8  text-left leading-8">
               I m <strong>Pierre Dillard</strong>, a dynamic <em>Fullstack web developer</em> and experienced sales professional. I combine a customer-centric vision with technical skills in <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Prisma</strong>. Whether you are looking for a showcase site, a complete e-commerce platform, or adding functionality to your site, I have got solutions for your business!
</p>

          </AnimatedElement>

        
       
            </div>
           
        
          <SkillSection/>
        </div>
      </section>
    </>
  )
}
