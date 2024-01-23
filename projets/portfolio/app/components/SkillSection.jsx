"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faReact, faNodeJs, faGitAlt,faCss3Alt, faJsSquare, faLinux} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faTasks, faComments,  faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import AnimatedElement from './AnimatedElement';

export default function SkillSection() {
  return (
    <div className="container mx-auto px-4 my-8">
      <AnimatedElement>
        <h2 className="text-4xl font-heading mb-8 text-center hover: cursor-pointer hover:text-white transition-colors duration-400 ease-in">Skills</h2>
      </AnimatedElement>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <AnimatedElement>
          <div>
            <h3 className="text-2xl font-heading mb-4 text-center text-white">Design</h3>
            <p className="font-body text-center py-1 md:py-3"><FontAwesomeIcon icon={faFigma} className="mr-2" />Figma</p>
            <p className="font-body text-center text-white py-1 md:py-3"><FontAwesomeIcon icon={faCss3Alt} className="mr-2" />Tailwind</p>
          </div>
        </AnimatedElement>
        <AnimatedElement>
          <div>
            <h3 className="text-2xl font-heading mb-4 text-center">Front-end</h3>
            <p className="font-body text-center text-white py-1 md:py-3"><FontAwesomeIcon icon={faJsSquare} className="mr-2" />Redux</p>
      
            <p className="font-body text-center text-white py-1 md:py-3"><FontAwesomeIcon icon={faReact} className="mr-2" />React</p>
            <p className="font-body text-center text-white py-1 md:py-3"><FontAwesomeIcon icon={faCodeBranch} className="mr-2" />Bubble</p>
           
           
          </div>
        </AnimatedElement>
        <AnimatedElement>
          <div>
            <h3 className="text-2xl font-heading mb-4 text-center text-white">Back-end</h3>
            <p className="font-body text-center py-1 md:py-3"><FontAwesomeIcon icon={faNodeJs} className="mr-2" />Node.js</p>
            <p className="font-body text-center text-white py-1 md:py-3"><FontAwesomeIcon icon={faDatabase} className="mr-2" />Prisma</p>
            <p className="font-body text-center py-1 md:py-3"><FontAwesomeIcon icon={faDatabase} className="mr-2" />PostgreSQL</p>
          </div>
        </AnimatedElement>
        <AnimatedElement>
          <div>
            <h3 className="text-2xl font-heading mb-4 text-center">Other</h3>
            <p className="font-body text-center text-white py-1 md:py-3"><FontAwesomeIcon icon={faGitAlt} className="mr-2" />Git & GitHub</p>
            <p className="font-body text-center py-1 md:py-3"><FontAwesomeIcon icon={faTasks} className="mr-2" />Trello</p>
            <p className="font-body text-center text-white py-1 md:py-3"><FontAwesomeIcon icon={faComments} className="mr-2" />ChatGPT</p>
            <p className="font-body text-center text-white py-1 md:py-3"><FontAwesomeIcon icon={faLinux} className="mr-2" />Linux</p>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
