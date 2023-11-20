"use client";
import React from 'react';
import SkillSection from './SkillSection';
import AnimatedElement from './AnimatedElement';

export default function AboutSection() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-gradient-to-r from-section to-section-2 p-6 " >
        <div className="container mx-auto px-0 md:px-4 ">
      
            <div className='container mx-auto px-4 md:w-2/3 '>
            <AnimatedElement>
                <h2 className="text-4xl font-heading my-5 text-center
              "
              id="about">About Me</h2>
               </AnimatedElement>
               <AnimatedElement>
          <p className="font-body mb-8  text-justify ">
            Meet <strong>Pierre Dillard</strong>, a dynamic <strong>Fullstack Web Developer</strong>
             and experienced <strong>Sales Professional</strong>
             . Transitioning from a decade-long career in insurance sales to web development, I blend customer-centric insights with technical skills in <strong>
                React</strong>, <strong>Node.js</strong>, 
                <strong>Express</strong>, and <strong>Sequelize</strong>. My recent work at <strong>Ethnic Blue</strong> in enhancing digital experiences, coupled with my acumen in sales and client relations, positions me uniquely to create tailored web solutions that resonate with users and drive business success.
          </p>
          </AnimatedElement>

        
       
            </div>
           
        
          <SkillSection/>
        </div>
      </section>
    </>
  )
}
