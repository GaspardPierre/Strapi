"use client";
import Image from 'next/image';
import 'animate.css';
import AnimatedElement from './AnimatedElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({ name, description, id, link, img, webSite }) {
  return (
    <div className="bg-navhover border hover:bg-card-hov border-border-2 hover:border-border-1 transition duration-400 p-4 rounded-lg w-4/5 md:w-1/4 h-auto " key={id}>
      <AnimatedElement>
        <div className="image-container ">
          <Image
            src={img}
            alt={`Image of ${name}`}
            width={256}
            height={256}
            className='object-cover h-28 lg:h-48 w-full hover:blur-sm'
          />
        </div>
        <h3 className="text-white lg:text-2xl text-xl font-heading text-center break-words py-3">{name}</h3>
      </AnimatedElement>
      <AnimatedElement>
        <p className="text-gray-300 lg:text-lg font-body break-words text-sm py-3">{description}</p>
      </AnimatedElement>
      <AnimatedElement>
        <div className="flex flex-col items-start">
          <a href={link} className="flex items-center text-gray-300 text-sm font-body truncate max-w-full my-1 hover:cursor-pointer hover:text-section transition duration-300 " target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />{link}
          </a>
          { webSite !== null ? (

         
          <a href={webSite} className="flex items-center text-gray-300 truncate max-w-full text-sm font-body overflow-x-hidden my-1 hover:cursor-pointer hover:text-section " target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInternetExplorer} className="mr-2" />{webSite}
          </a>
           ) : null}
        </div>
      </AnimatedElement>
    </div>
  );
}
