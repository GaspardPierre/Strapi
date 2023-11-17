"use client";
import projects from'../../public/data/projects.json';
import ProjectCard from './ProjetsCards';
import AnimatedElement from './AnimatedElement';


export default function ProjectsList() {


  return (
    <>
  
<AnimatedElement>


    <h2 className="text-4xl font-heading mb-8 text-center hover:text-white transition-colors duration-400 ease-in"
    id="projects">Projects</h2></AnimatedElement>
    <div className='flex flex-col md:flex-row justify-center  gap-6 md:gap-10 lg:gap-12'
    >
      {projects.map(project => (
          <ProjectCard
          key={project.id}
          name={project.title}
          description={project.description}
          id={project.id}
          img={project.image}
        />
      ))}
    </div>
    </>
  );
}
