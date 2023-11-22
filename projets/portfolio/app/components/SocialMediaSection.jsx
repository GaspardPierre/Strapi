"use client";

import Link from 'next/link';
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { motion } from 'framer-motion';


export default function SocialMediaSection() {


  return (
    <section className=" bg-gradient-to-r from-section to-section-2 p-0 lg:p-5 ">
      <div className="mx-auto flex justify-center  ">
        <div className="flex flex-wrap items-center justify-center " >
          <Link href="https://github.com/GaspardPierre">
            <button className="bg-button mx-5 mb-5 rounded-full p-3 shadow-lg transition-transform duration-300 hover:scale-90">
              <FaGithub size={24} className="text-white" />
            </button>
          </Link>
          <Link href="https://twitter.com/yourusername">
            <button className="bg-button mx-5 mb-5  rounded-full shadow-lg p-3 transition-transform duration-300 hover:scale-90">
              <FaTwitter size={24} className="text-white" />
            </button>
          </Link>
          <Link href="https://www.linkedin.com/in/pierre-dillard/">
            <button className="bg-button mx-5 mb-5 rounded-full shadow-lg p-3 transition-transform duration-300 hover:scale-90">
              <FaLinkedin size={24} className="text-white" />
            </button>
          </Link>
      
  {/* Le lien mailto reste avec une balise <a> car c'est un lien externe */}
          <a href="mailto:7gaspard77@gmail.com" className="bg-button mx-5 mb-5 shadow-lg rounded-full p-3 transition-transform duration-200 hover:scale-95">
            <IoMail size={24} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
