"use client";
import React from 'react';
import SkillSection from './SkillSection';
import AnimatedElement from './AnimatedElement';

export default function AboutSection() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-gradient-to-r from-section  to-section-2 p-6 pt-28 lg:pt-48 my-8"  id="about" >
        <div className="container mx-auto px-0 md:px-4 ">
      
            <div className='container mx-auto px-4 md:w-2/3 '>
            <AnimatedElement>
                <h2 className="text-4xl font-heading my-5 text-center
              "
             >About Me</h2>
               </AnimatedElement>
               <AnimatedElement>
           
               <p className="font-body mb-8 text-left leading-8 md:text-lg">
    Based in <strong>Marly le Roi (78160)</strong>, I am <strong>Pierre Dillard</strong>, a passionate and skilled <em>Web Developer</em>. My expertise as a <em>Fullstack Web Developer</em> is complemented by my experience as a sales professional, allowing me to deliver customer-focused and technically proficient solutions. I specialize in technologies like <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Prisma</strong>. Whether you are in need of a captivating showcase site, a comprehensive e-commerce platform, or advanced functionality for your existing site, I provide custom solutions tailored to your business needs.
</p>



          </AnimatedElement>

        
       
            </div>
           
        
          <SkillSection/>
        </div>
      </section>
    </>
  )
}
