import Image from 'next/image';
import { Icon } from "react-icons";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

export default function ProjectCard({ name, description,id }) {
  return (
    <div className="bg-navhover border border-border-2 hover:border-border-1 transition duration-400 p-4 rounded-lg w-5/6 md:w-1/4"
    key={id}>
      <h3 className="text-white text-2xl font-heading text-center py-3">{name}</h3>
      <p className="text-gray-300 text-lg font-body">{description}</p>
      <div className="flex gap-2 mt-2">
   
    
      </div>
    </div>
  );
}