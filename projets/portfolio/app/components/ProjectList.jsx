"use client";
import projects from'../../public/data/projects.json';
import ProjectCard from './ProjetsCards';
import AnimatedElement from './AnimatedElement';


export default function ProjectsList() {


  return (
    <>
  
<AnimatedElement>


    <h2 className="text-4xl font-heading mb-8 text-center hover:text-white transition-colors duration-400 ease-in pt-32 lg:pt-48  lg:my-10"
    id="projects">Projects</h2></AnimatedElement>
  
 
  
    <div className='flex flex-wrap justify-center items-center gap-8'>
    
      {projects.map(project => (
     
          <ProjectCard
          key={project.id}
          name={project.title}
          description={project.description}
          link={project.link}
          id={project.id}
          img={project.image}
          webSite={project.webSite || null}
        />
    
      ))}
    </div>
    
    
    </>
  );
}
